(ns scalez.core
  (:require [scalez.scales :as scales]
            [scalez.notes :as notes]
            [scalez.strings :as strings]
            [scalez.utils :as utils]
            [clojure.string :as stringy]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]
            [reagent.dom :as rdom]
            [reagent.core :as r]))

(def log js/console.log)

(log "in core")

; .- means getting a javascript property
(def eventValue #(-> % .-target .-value))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (eventValue %))}])

(defn notes-as-select-values []
  (map (fn [n]
         [:option {:value (:step n)} (notes/pretty n)])
       notes/western-named-notes))

(defn select-note [onChange]
  [:select {:on-change #(->> % eventValue (js/parseInt) (nth notes/western-named-notes) onChange)}
   (notes-as-select-values)])

(defn bunk-sanitize [s]
  (-> s
       (stringy/replace #"#" "s") ; remove sharp symbol
       (stringy/replace #"/" "-"))) ; remove slash

; -> string
(defn note-class-names [n] ["note"
                            (str (or (:type n) "generic"))
                            (str (or (:type n) "generic")
                              "-"
                              (bunk-sanitize (or (:name n)
                                                 (str (:step n)))))])

(defn string-note [notes note]
  [:div {:style {:left (str (* 100 (notes/fraction note)) "%")}
         :class (note-class-names note)}
   (notes/pretty notes note)])

(defn string-fret [fret]
  [:div {:style {:left (str (* 100 (notes/fraction fret)) "%")}
         :class ["fret"]} "|"])


(defn string [string rootNote scale]
  (let [string-note-1 (:note string)
        ;string-note-1 (notes/shift rootNote (:note string))
        western-scale-1 (scales/named-static-scale scale
                                                   notes/western-named-notes
                                                   rootNote)
        cyclic-scale-1 (scales/named-dynamic-scale scale
                                                   notes/cyclic-named-notes
                                                   rootNote)
        cyclic-notes (->> (:steps cyclic-scale-1)
                          (map #(notes/unshift string-note-1 %))
                          (map #(notes/shift rootNote %))
                          )
        western-notes (map #(notes/unshift string-note-1 %)
                          (:steps western-scale-1))]
    [:div {:class ["fretboard-string"]
           :style {:margin-left (str (* 100 (/ (:offset string) 12)) "%")}}
    ; the root of the string as reported by the string
   ; [:div {:style {:position "absolute"
                  ; :left "-1em"}}
    ;(notes/pretty (:steps western-scale-1) string-note-1)]
   (map string-fret strings/standard-western-frets)
   (map #(string-note cyclic-scale-1  %) cyclic-notes)
   (map #(string-note western-scale-1 %) western-notes)
   ]))

(defn fretboard [strings rootNote scale]
  [:div {:class ["fretboard"]}
   (map #(string % rootNote scale) strings)
   ])



(defn note [n ns] [:div {:class (note-class-names n)} (notes/pretty ns n)])

(defn notes [ns] [:div {:class ["notes"]} (map #(note % ns) ns)])

(defn scale [rootNote strings scale]
  (let [western-scale (scales/named-static-scale scale
                                                notes/western-named-notes
                                                rootNote)
        cyclic-scale (scales/named-dynamic-scale scale
                                                notes/cyclic-named-notes
                                                rootNote)]
  [:div {:class ["scale-breakdown"]}
   ; [:p "of root! : "(notes/pretty rootNote)]
   ; [:p "----------"]
   [:p "scale : " (notes/pretty rootNote) " " (:name scale)]
   [:p "same as : " (notes/pretty (:steps western-scale) (scales/same-key-major scale rootNote)) " major"]
   [:p "same as : " (notes/pretty (:steps western-scale) (scales/same-key-minor scale rootNote)) " minor"]
   ; [:p "name the scale"]
   [:p (notes (:steps western-scale))]
   ; [:p (notes (:steps scale))]
   [:p (notes (:steps cyclic-scale))]
   (fretboard strings rootNote scale)]))

(defn scales [rootNote strings]
  [:div {:class ["scales-list"]}
   (map
    #(scale rootNote strings %)
    scales/scales)])


(defn select-string [string replace remove]
  [:div {:class ["note-select"]}
   ; select the tuning of the string
   [:select {:value (->> string :note :step)
             :on-change #(->> %
                              eventValue
                              (js/parseInt)
                              (nth notes/western-named-notes)
                              (strings/string 0)
                              replace)}
    (notes-as-select-values)]
   ; select the offset of the string - useful for banjos with fifth strings
   [:div {:class ["offset-select"]}
    [:select {:value (->> string :offset)
              :on-change #(->> %
                               eventValue
                               (js/parseInt)
                               (assoc string :offset)
                               replace)}
     [:option {:value 0} 0]
     [:option {:value 1} 1]
     [:option {:value 2} 2]
     [:option {:value 3} 3]
     [:option {:value 4} 4]
     [:option {:value 5} 5]
     [:option {:value 6} 6]]
    ]
   [:button {:on-click #(remove)} "x"]
   ])

(defn select-strings [ss replace remove add]
  [:div
   (map-indexed (fn [i s] (select-string s #(replace i %) (fn [] (remove i)))) ss)
   [:button {:on-click #(add)} "+"]])
   ;(map-indexed (fn [idx s] (select-string s (#(onChange idx %))) ss))])

(defn shared-state []
  (let [root-note (r/atom notes/C)
        selected-strings (r/atom [(strings/string 0 notes/D)
                                  (strings/string 0 notes/C)
                                  (strings/string 0 notes/G)
                                  (strings/string 0 notes/C)
                                  (strings/string 5 notes/G)])
        add-string (fn [] (reset! selected-strings (conj @selected-strings (strings/string 0 notes/C))))
        remove-string (fn [i] (reset! selected-strings (utils/vec-remove i @selected-strings)))
        replace-string (fn [i s] (reset! selected-strings (assoc @selected-strings i s)))]
    (fn []
      [:div {:class ["main"]}
       [:div {:class ["menu"]}
        [:p "choose your root note:"]
        [select-note (fn [n] (reset! root-note n))]
        [:p "choose your strings"]
        [select-strings @selected-strings replace-string remove-string add-string]]
       [:div {:class ["content"]}
       [scales @root-note @selected-strings]]])))

(defn simple-component []
  [:div
   [shared-state]])



(defn ^:export run []
  (rdom/render [simple-component] (js/document.getElementById "app")))

(run)

(ns scalez.core
  (:require [scalez.scales :as scales]
            [scalez.notes :as notes]
            [scalez.strings :as strings]
            [scalez.utils :as utils]
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


(defn string-note [scale note]
  [:div {:style {:position "absolute"
                 :left (str (* 100 (notes/fraction note)) "%")}}
   (notes/pretty (:steps scale) note)])

(defn string [string rootNote scale]
  (let [string-note-1 (:note string)
        western-scale-1 (scales/named-static-scale scale
                                                   notes/western-named-notes
                                                   rootNote)]
  [:div {:style {:border-top "1px solid blue"
                 :position "relative"
                 :margin-left "1em"
                 :height "1rem"}}
   [:div {:style {:position "absolute"
                  :left "-1em"}}
    (notes/pretty (:steps western-scale-1) string-note-1)]
   (map #(string-note western-scale-1 %) (:steps western-scale-1))]))

(defn fretboard [strings rootNote scale]
  [:div {:style {:background-color "beige"}}
   (map #(string % rootNote scale) strings)
   ])



(defn note [n ns] [:span (notes/pretty ns n) " "])
(defn notes [ns] (map #(note % ns) ns))

(defn scale [rootNote strings scale]
  (let [western-scale (scales/named-static-scale scale
                                                notes/western-named-notes
                                                rootNote)
        cyclic-scale (scales/named-dynamic-scale scale
                                                notes/cyclic-named-notes
                                                rootNote)]
  [:div
   [:p "----------------------------------------------------------------"]
   ; (log "aaaaaaaaaaaaaaaaaaa")
   ; (log (:name rootNote))
   ; [:p "of root! : "(notes/pretty rootNote)]
   ; [:p "----------"]
   [:p "scale : " (notes/pretty rootNote) " " (:name scale)]
   [:p "same as : " (notes/pretty (:steps western-scale) (scales/same-key-major scale rootNote)) " major"]
   [:p "same as : " (notes/pretty (:steps western-scale) (scales/same-key-minor scale rootNote)) " minor"]
   ; [:p "name the scale"]
   [:p (notes (:steps western-scale))]
   [:p (notes (:steps scale))]
   [:p (notes (:steps cyclic-scale))]
   (fretboard strings rootNote scale)]))

(defn scales [rootNote strings]
  [:div
   (map
    #(scale rootNote strings %)
    scales/scales)])

(defn select-string [string replace remove]
  [:div
   [:select {:value (->> string :note :i)
             :on-change #(->> %
                              eventValue
                              (js/parseInt)
                              (nth notes/western-named-notes)
                              (strings/string 0)
                              replace)}
    (notes-as-select-values)]
   [:button {:on-click #(remove)} "x"]
   ])

(defn select-strings [ss replace remove add]
  [:div
   (map-indexed (fn [i s] (select-string s #(replace i %) (fn [] (remove i)))) ss)
   [:button {:on-click #(add)} "+"]])
   ;(map-indexed (fn [idx s] (select-string s (#(onChange idx %))) ss))])

(defn shared-state []
  (let [root-note (r/atom notes/C)
        selected-strings (r/atom [(strings/string 0 notes/C)
                                  (strings/string 0 notes/G)
                                  (strings/string 0 notes/C)
                                  (strings/string 0 notes/E)])
        add-string (fn [] (reset! selected-strings (conj @selected-strings (strings/string 0 notes/C))))
        remove-string (fn [i] (reset! selected-strings (utils/vec-remove i @selected-strings)))
        replace-string (fn [i s] (reset! selected-strings (assoc @selected-strings i s)))]
    (fn []
      [:div
       [:p "choose your root note:"]
       [select-note (fn [n] (reset! root-note n))]
       [:p "choose your strings"]
       [select-strings @selected-strings replace-string remove-string add-string]
       [scales @root-note @selected-strings]])))

(defn simple-component []
  [:div
   [:p "welcome, welcome to the thing!"]
   [shared-state]])



(defn ^:export run []
  (rdom/render [simple-component] (js/document.getElementById "app")))

(run)

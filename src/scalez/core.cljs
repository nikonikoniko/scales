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
         [:option {:value (:i n)} (notes/pretty n)])
       notes/western-notes))

(defn select-note [onChange]
  [:select {:on-change #(->> % eventValue (js/parseInt) (nth notes/western-notes) onChange)}
   (notes-as-select-values)])



(defn note [n] [:span (notes/pretty n) "-"])

(defn scale [rootNote scale]
  [:div
   [:p "----------"]
   [:p (:name scale)]
   [:p (notes/pretty (scales/same-key-major scale rootNote)) " major"]
   [:p (notes/pretty (scales/same-key-minor scale rootNote)) " minor"]
   (map note (scales/named-scale scale rootNote))])

(defn scales [rootNote]
  [:div
   (map #(scale rootNote %) scales/scales)])

(defn select-string [string replace remove]
  [:div
   [:select {:value (->> string :note :i)
             :on-change #(->> %
                              eventValue
                              (js/parseInt)
                              (nth notes/western-notes)
                              (strings/string 0)
                              replace)}
    (notes-as-select-values)]
   [:button {:on-click #(remove)} "x"]
   ])

(defn select-strings [ss replace remove add]
  [:div
   [:p "current strings"]
   (map-indexed (fn [i s] (select-string s #(replace i %) (fn [] (remove i)))) ss)
   [:button {:on-click #(add)} "+"]])
   ;(map-indexed (fn [idx s] (select-string s (#(onChange idx %))) ss))])

(defn shared-state []
  (let [rootNote (r/atom notes/C)
        selectedStrings (r/atom [(strings/string 0 notes/C)
                                 (strings/string 0 notes/G)
                                 (strings/string 0 notes/C)
                                 (strings/string 0 notes/E)])]
    (fn []
      [:div
       [:p "choose your root note:"]
       [select-note (fn [n] (reset! rootNote n))]
       [:p "choose your strings"]
       [select-strings
        @selectedStrings
        (fn [i s] (reset! selectedStrings (assoc @selectedStrings i s)))
        (fn [i] (reset! selectedStrings (utils/vec-remove i @selectedStrings)))
        (fn [] (reset! selectedStrings (conj @selectedStrings (strings/string 0 notes/C))))]
       [scales @rootNote]])))

(defn simple-component []
  [:div
   [:p "welcome, welcome to the thing!"]
   [shared-state]])



(defn ^:export run []
  (rdom/render [simple-component] (js/document.getElementById "app")))

(run)






;; (defn my-inc [x]
;;   (inc x))
;; (s/fdef my-inc
;;       :args (s/cat :x number?)
;;       :ret number?)

;; (stest/instrument `my-inc)
;; (stest/check `my-inc)

;; (my-inc "hello")

(ns scalez.core
  (:require [scalez.scales :as scales]
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

(defn notes-as-values []
  (map (fn [n]
         [:option {:value (:i n)} (scales/pretty n)])
       scales/western-notes))

(defn select-note [onChange]
  [:select {:on-change #(-> % eventValue onChange)}
   (notes-as-values)])

(defn scale [rootNote scale]
  [:p (str (:steps scale))])

(defn scales [rootNote]
  [:div
   (map #(scale rootNote %) scales/scales)])


(defn shared-state []
  (let [val (r/atom "foo")
        rootNote (r/atom 0)]
    (fn []
      [:div
       [:p "choose your root note:"]
       [select-note (fn [v] (reset! rootNote v))]
       [:p @rootNote]
       [scales @rootNote]
        ; [:option {:value 2} "two"]]
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]])))

(defn simple-component []
  [:div
   [:p "welcome, welcome to the thing!"]
   [shared-state]])



(defn ^:export run []
  (rdom/render [simple-component] (js/document.getElementById "app")))

(run)

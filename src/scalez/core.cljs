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

(defn notes-as-select-values []
  (map (fn [n]
         [:option {:value (:i n)} (scales/pretty n)])
       scales/western-notes))

(defn select-note [onChange]
  [:select {:on-change #(-> % eventValue onChange)}
   (notes-as-select-values)])

(defn calc-note-name [rootNote step]
  (->> (+ rootNote step)
       (#(mod % 12))
       (nth scales/western-notes)
       (scales/pretty)))

(defn note [rootNote step] [:span (calc-note-name rootNote step) "-"])

(defn scale [rootNote scale]
  [:div
   [:p (:name scale)]
   (map #(note rootNote %) (:steps scale))])

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
       [scales @rootNote]])))

(defn simple-component []
  [:div
   [:p "welcome, welcome to the thing!"]
   [shared-state]])



(defn ^:export run []
  (rdom/render [simple-component] (js/document.getElementById "app")))

(run)

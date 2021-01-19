(ns scalez.core
  (:require [scalez.scales :as scales]
            [scalez.notes :as notes]
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
  [:select {:on-change #(-> % eventValue onChange)}
   (notes-as-select-values)])



(defn note [name] [:span name "-"])

(defn scale [rootNote scale]
  [:div
   [:p (:name scale)]
   [:p (scales/same-scale scale rootNote)]
   (map note (scales/named-scale scale rootNote))])

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






;; (defn my-inc [x]
;;   (inc x))
;; (s/fdef my-inc
;;       :args (s/cat :x number?)
;;       :ret number?)

;; (stest/instrument `my-inc)
;; (stest/check `my-inc)

;; (my-inc "hello")

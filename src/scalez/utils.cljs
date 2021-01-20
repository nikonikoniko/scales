(ns scalez.utils
  (:require [clojure.string :as string]
            [clojure.spec.alpha :as s]
            [scalez.notes :as notes]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]
            ))

(def log js/console.log)

(defn vec-remove
  "remove elem in coll"
  [pos coll]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defn string [start note] {:start start :note note})

(ns scalez.strings
  (:require [clojure.string :as string]
            [clojure.spec.alpha :as s]
            [scalez.notes :as notes]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]
            ))

(def log js/console.log)



(defn string [start note] {:start start :note note})

(defn fret [step range] {:step step :range range})

(def standard-western-frets [
                             (fret 0 12)
                             (fret 1 12)
                             (fret 2 12)
                             (fret 3 12)
                             (fret 4 12)
                             (fret 5 12)
                             (fret 6 12)
                             (fret 7 12)
                             (fret 8 12)
                             (fret 9 12)
                             (fret 10 12)
                             (fret 11 12)])

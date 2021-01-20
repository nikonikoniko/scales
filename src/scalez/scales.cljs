(ns scalez.scales
  (:require [clojure.string :as string]
            [clojure.spec.alpha :as s]
            [scalez.notes :as notes]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]
            ))

(def log js/console.log)

(defn scale
  ([range shift steps ^boolean flat? name]
   {:range range :shift shift :steps steps :flat? flat? :name name})
  ([range shift steps name]
   (scale range shift steps false name)))

;; major mode
;; shifts [2 2 1 2 2 2 1]
(def ionian (scale 12 0 [0 2 4 5 7 9 11] "ionian"))
;; shifts [2 1 2 2 2 1 2]
(def dorian (scale 12 10 [0 2 3 5 7 9 10] "dorian"))
;; shifts [1 2 2 2 1 2 2]
(def phrygian (scale 12 8 [0 1 3 5 7 8 10] "phrygian"))
;; shifts [2 2 2 1 2 2 1]
(def lydian (scale 12 7 [0 2 4 6 7 9 11] "lydian"))
;; shifts [2 2 1 2 2 1 2]
(def mixolydian (scale 12 5 [0 2 4 5 7 9 10] "mixolydian"))
;; minor mode
;; shifts [2 1 2 2 1 2 2]
(def aeolian (scale 12 3 [0 2 3 5 7 8 10] "aeolian"))
;; shifts [1 2 2 1 2 2 2]
(def locrian  (scale 12 1 [0 1 3 5 6 8 10] "locrian"))

(def scales [ionian dorian phrygian lydian mixolydian aeolian locrian])


(defn calc-western-note-name [flat? rootNote step]
  (->> (+ (rootNote :i) step)
       (#(mod % 12))
       (nth notes/western-notes)))

(defn named-scale [scale rootNote]
  (->> (:steps scale)
       (map #(calc-western-note-name (:flat scale) rootNote %))))

(defn same-key-major [scale rootNote]
  (->> (+ (:i rootNote) (:shift scale))
       (#(mod % 12))
       (nth notes/western-notes)))

(defn same-key-minor [scale rootNote]
  (->> (+ (:i rootNote) (:shift scale))
       (#(mod (+ 9 %) 12))
       (nth notes/western-notes)))

(named-scale ionian 2)


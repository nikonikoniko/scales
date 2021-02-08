(ns scalez.scales
  (:require [clojure.string :as string]
            [clojure.spec.alpha :as s]
            [scalez.notes :as notes]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]
            ))

(def log js/console.log)

(defn pipeLog [x] (js/console.log x) x)

; scale
(defn scale
  [range shift steps name]
  {:range range
   :shift shift
   :steps (map #(notes/note % range) steps) ;convert steps to notes
                                            ;right away!
   :name name})

;; major mode

(def ionian (scale 12 0 [0 2 4 5 7 9 11] "ionian")) ;; shifts [2 2 1 2 2 2 1]

(def dorian (scale 12 10 [0 2 3 5 7 9 10] "dorian")) ;; shifts [2 1 2 2 2 1 2]

(def phrygian (scale 12 8 [0 1 3 5 7 8 10] "phrygian")) ;; shifts [1 2 2 2 1 2 2]

(def lydian (scale 12 7 [0 2 4 6 7 9 11] "lydian")) ;; shifts [2 2 2 1 2 2 1]

(def mixolydian (scale 12 5 [0 2 4 5 7 9 10] "mixolydian")) ;; shifts [2 2 1 2 2 1 2]

(def aeolian (scale 12 3 [0 2 3 5 7 8 10] "aeolian"));; shifts [2 1 2 2 1 2 2]

(def locrian  (scale 12 1 [0 1 3 5 6 8 10] "locrian"));; shifts [1 2 2 1 2 2 2]

; all the scales together

(def scales [ionian dorian phrygian lydian mixolydian aeolian locrian])


(defn calc-western-note-name [rootNote step]
  (->> (:step rootNote)
       (+ step)
       (#(mod % 12))
       (nth notes/western-named-notes)))

(defn named-scale-old [scale rootNote]
  (->> (:steps scale)
       (map :step)
       (map #(calc-western-note-name rootNote %))))

; (scale, [named-note], [root-Note]) -> scale with[named-note]
; assign a list of named notes
; to a scale of notes, given the root note
(defn named-scale [scale ; the scale we are using
                   named-notes ; the set of named notes we want
                   rootNote] ; the root we have to go off
  (->> (:steps scale) ; grab just the notes
       (map #(notes/shift % rootNote)) ; shift each note by the root
       (notes/assign named-notes)))


(defn same-key-major [scale rootNote]
  (->> (:step rootNote)
       (+ (:shift scale))
       (#(mod % 12))
       (nth notes/western-named-notes)))

(defn same-key-minor [scale rootNote]
  (->> (:step rootNote)
       (+ (:shift scale))
       (#(mod (+ 9 %) 12))
       (nth notes/western-named-notes)))


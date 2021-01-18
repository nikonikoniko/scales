(ns scalez.scales
  (:require [clojure.string :as string]))

(def log js/console.log)

(log "------------------------")

(defn ratio [^number total ^number step] [step total])

(defn all [total] (->> (range 0 total)
                       (map (fn [n] (ratio total n)))))

(defn note [i s f] {:i i :s s :f f})

(defn uniqueJoin [strVec] (->> strVec set vec (string/join "/")))

(defn pretty
  ([flat note] (->> [(if flat (:f note) (:s note))] uniqueJoin)) ; this line doesnt work dunno
  ([note] (->> [(:f note) (:s note)] uniqueJoin)))

[(if true (:f {:f "hi"}) "bye")]

(def western-notes [(note 0 "C" "C")
                    (note 1 "C#" "Db")
                    (note 2 "D" "D")
                    (note 3 "D#" "Eb")
                    (note 4 "E" "E")
                    (note 5 "F" "F")
                    (note 6 "F#" "Gb")
                    (note 7 "G" "G")
                    (note 8 "G#" "Ab")
                    (note 9 "A" "A")
                    (note 1 "A#" "Bb")
                    (note 1 "B" "B")])


(defn scale
  ([range steps ^boolean flat?]
   {:range range :steps steps :flat? flat?})
  ([range steps]
   (scale range steps false)))

;; major mode
;; shifts [2 2 1 2 2 2 1]
(def ionian (scale 12 [0 2 4 5 7 9 11]))
;; shifts [2 1 2 2 2 1 2]
(def dorian (scale 12 [0 2 3 5 7 9 10]))
;; shifts [1 2 2 2 1 2 2]
(def phrygian (scale 12 [0 1 3 5 7 8 10]))
;; shifts [2 2 2 1 2 2 1]
(def lydian (scale 12 [0 2 4 6 7 9 11]))
;; shifts [2 2 1 2 2 1 2]
(def mixolydian (scale 12 [0 2 4 5 7 9 10]))
;; minor mode
;; shifts [2 1 2 2 1 2 2]
(def aeolian  (scale 12 [0 2 3 5 7 8 10]))
;; shifts [1 2 2 1 2 2 2]
(def locrian  (scale 12 [0 1 3 5 6 8 10]))

(def scales [ionian dorian phrygian lydian mixolydian aeolian locrian])

; (def western (1/12 2/12 3/12 4/12 5/12 6/12 7/12 8/12 9/12 10/12 11/12 12/12))

(js/console.log "Hello there world!!!!!!!!!!!!!!!!!!!!!!")

(def x 3)

(js/console.log x)

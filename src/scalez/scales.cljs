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
  ([range steps ^boolean flat? name]
   {:range range :steps steps :flat? flat? :name name})
  ([range steps name]
   (scale range steps false name)))

;; major mode
;; shifts [2 2 1 2 2 2 1]
(def ionian (scale 12 [0 2 4 5 7 9 11] "ionian"))
;; shifts [2 1 2 2 2 1 2]
(def dorian (scale 12 [0 2 3 5 7 9 10] "dorian"))
;; shifts [1 2 2 2 1 2 2]
(def phrygian (scale 12 [0 1 3 5 7 8 10] "phrygian"))
;; shifts [2 2 2 1 2 2 1]
(def lydian (scale 12 [0 2 4 6 7 9 11] "lydian"))
;; shifts [2 2 1 2 2 1 2]
(def mixolydian (scale 12 [0 2 4 5 7 9 10] "mixolydian"))
;; minor mode
;; shifts [2 1 2 2 1 2 2]
(def aeolian  (scale 12 [0 2 3 5 7 8 10] "aeolian"))
;; shifts [1 2 2 1 2 2 2]
(def locrian  (scale 12 [0 1 3 5 6 8 10] "locrian"))

(def scales [ionian dorian phrygian lydian mixolydian aeolian locrian])


(js/console.log "Hello there world!!!!!!!!!!!!!!!!!!!!!!")


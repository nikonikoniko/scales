(ns scalez.notes
  (:require [clojure.string :as string]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]))

(def log js/console.log)

(s/def ::i int?)
(s/def ::n string?)
(s/def ::f string?)

(s/def ::note (s/keys :req [::i ::n ::f]))

(s/fdef note
  :args (s/cat :i ::i :n ::b :f ::f)
  :ret ::note)
(defn note [i s f] {:i i :n s :f f})

(defn uniqueJoin [strVec] (->> strVec set vec (string/join "/")))

(defn pretty
  ([flat note] (->> [(if flat (:f note) (:n note))] uniqueJoin)) ; this line doesnt work dunno
  ([note] (->> [(:f note) (:n note)] uniqueJoin)))


(def C  (note 0  "C" "C"))
(def Db (note 1  "C#" "Db"))
(def D  (note 2  "D" "D"))
(def Eb (note 3  "D#" "Eb"))
(def E  (note 4  "E" "E"))
(def F  (note 5  "F" "F"))
(def Gb (note 6  "F#" "Gb"))
(def G  (note 7  "G" "G"))
(def Ab (note 8  "G#" "Ab"))
(def A  (note 9  "A" "A"))
(def Bb (note 10 "A#" "Bb"))
(def B  (note 11 "B" "B"))

(def western-notes [C Db D Eb E F Gb G Ab A Bb B])

; todo generate this automatically from the western-notes
(def circle-of-fifths [C G D A E B Gb Db Ab Eb Bb F])

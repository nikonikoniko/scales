(ns scalez.notes
  (:require [clojure.string :as string]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]))

(def log js/console.log)

;; note ->  note is actually just a fraction.
;; it can be made a /named note/ by adding a name
(s/def ::step int?)
(s/def ::range int?)
;; named-note
(s/def ::name string?)
;; only used for western notes
(s/def ::flat-of-name string?)
(s/def ::sharp-of-name string?)

(s/def ::note
  (s/keys :req [::step ::total]))

(s/def ::named-note
  (s/keys :req [::step ::total ::name]
          :opt [::flat-of-name ::sharp-of-name]))

;; note creator
(s/fdef note
  :args (s/cat :step ::step
               :range ::range)
  :ret ::note)
(defn note [step range] {:step step :range range})

(s/fdef named-note
  :args (s/cat :step ::step
               :range ::range
               :name ::name
               :flat-of-name ::flat-of-name
               :sharp-of-name ::sharp-of-name))
(defn named-note
  ([step range name] {:step step
                      :range range
                      :name name})
  ([step range name flat-of-name sharp-of-name] {:step step
                                           :range range
                                           :name name
                                           :flat-of-name flat-of-name
                                           :sharp-of-name sharp-of-name}))

; (defn uniqueJoin [strVec] (->> strVec set vec (string/join "/")))
;
(defn fraction
  [note] (/ (:step note) (:range note)))

; (fraction {:step 4 :range 12})
; (fraction {:step 1 :range 3})

; test for fraction equality
(defn same-note?
  [n1 n2] (= (* (:step n1) (:range n2))
             (* (:step n2) (:range n1))))

(defn log-note [n] (log (:name n) (:step n) (:range n)))

;(note, note) -> note
; returns a new note shifted by the second
; looses the note name
; 2/3 + 1/4 for example
(defn shift
  [n1, n2]
  (def combined-range (* (:range n1) (:range n2)))
  (def combined-frac (mod (+ (* (:step n1) (:range n2)) ; multiply the base of one by the
                             (* (:step n2) (:range n1)))
                          combined-range)) ; mod in case the frac is bigger
                                           ; than denominator
  ; TODO reduce frac by common denominator
  (note combined-frac
        combined-range)) ; return a new note based on the frac

(defn find-note
  [notes n]
  (or (first (filter #(same-note? % n) notes))
      n))


(defn assign
  [named-notes
   notes]
  (log "++++++++++++++++++++++++++=")
  ; (map (fn [x] (log (:name x) (:step x) (:range x))) notes)
  (log "----------------------------------")
  (map (fn [x] (log (:name x) (:step x) (:range x))) named-notes)
  (map #(find-note named-notes %) notes))

; TODO - name if name,
; sharp flat if not
; 1/4 if not that
(defn pretty
  ([note]
   ; (log (:name note) (:step note) (:range note))
   (or (:name note)
       (str (:step note) "/" (:range note)))))


;; notes are actually names, in different variables
(def C  (named-note 0 12  "C"))
(def Db (named-note 1 12  "C#/Db" "C" "D"))
(def D  (named-note 2 12  "D"))
(def Eb (named-note 3 12  "D#/Eb" "D" "E"))
(def E  (named-note 4 12  "E"))
(def F  (named-note 5 12  "F"))
(def Gb (named-note 6 12  "F#/Gb" "F" "G"))
(def G  (named-note 7 12  "G"))
(def Ab (named-note 8 12  "G#/Ab" "G" "A"))
(def A  (named-note 9 12  "A"))
(def Bb (named-note 10 12 "A#/Bb" "A" "B"))
(def B  (named-note 11 12 "B"))



(def western-named-notes [C Db D Eb E F Gb G Ab A Bb B])

; todo generate this automatically from the western-notes
(def circle-of-fifths [C G D A E B Gb Db Ab Eb Bb F])

; bunk tests

(same-note? E (note 1 3)) ; should be true

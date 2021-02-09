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
               :sharp-of-name ::sharp-of-name
               :flat-of-name ::flat-of-name))
(defn named-note
  ([step range type name] {:step step
                           :range range
                           :type type
                           :name name})
  ; create a western note with silly sharp flat stuff
  ([step range type name sharp-of-name flat-of-name] {:step step
                                                      :range range
                                                      :name name
                                                      :type type
                                                      :sharp-of-name sharp-of-name
                                                      :flat-of-name flat-of-name}))

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

(defn log-note [n] (log
                    (:name n)
                    (:step n)
                    (:range n)
                    (:flat-of-name n)
                    (:sharp-of-name n)))

;(note, note) -> note
; returns a new note shifted by the second
; looses the note name
; 2/3 + 1/4 for example
(defn shift
  [n1, n2] ; n2 get's merge order
  (let [combined-range (* (:range n1) (:range n2))
        combined-frac (mod (+ (* (:step n1) (:range n2)) ; multiply the base of one by the
                              (* (:step n2) (:range n1)))
                           combined-range)] ; mod in case the frac is bigger
                                           ; than denominator
  ; TODO reduce frac by common denominator
  ; ; assoc keeps the old names of n2, even past the shift
    (assoc n2 :step combined-frac
              :range combined-range))) ; return a new note based on the frac

(defn unshift
  [n1, n2] ; n2 get's merge order
  (let [combined-range (* (:range n1) (:range n2))
        combined-frac (mod (- (* (:step n2) (:range n1))
                              (* (:step n1) (:range n2)) ; multiply the base of one by the
                              )
                           combined-range)] ; mod in case the frac is bigger
                                           ; than denominator
  ; TODO reduce frac by common denominator
  ; ; assoc keeps the old names of n2, even past the shift
    (assoc n2 :step combined-frac
              :range combined-range))) ; return a new note based on the frac


(defn find-note
  [notes n]
  (first (filter #(same-note? % n) notes)))

(defn find-or-note
  [notes n]
  (or (find-note notes n)
      n))

(defn find-by-name
  [notes name]
  (first (filter #(= name (:name %)) notes)))

; assigns a set of named notes to another set of notes
; assigns names, without changing step or range
(defn assign
  [named-notes
   notes]
  (map #(assoc (find-or-note named-notes %) :step (:step %) :range (:range %)) notes))

(defn western? [n] (= (:type n) "western"))

(defn irregular-western? [n] (and (:flat-of-name n) (:sharp-of-name n)))

; give us a pretty string representation of the note
(defn pretty
  ([n] ; just give us the pretty name of a note
   (or (:name n) ; if we have a name, use that
       (str (:step n) "/" (:range n)))) ; otherwise, print the step
  ; notes is a subset of scale
  ([notes n] ; give us a name of the note /in the context of that scale/
   (if (irregular-western? n) ; if a western note do special shit
     (if (find-by-name notes (:flat-of-name n))
       (str (:sharp-of-name n) "♯")
       (str (:flat-of-name n) "♭"))
     (or (:name n)
         (str (:step n) "/" (:range n))))))

;; notes are actually names, in different variables
;; note, the name is referenced in flat, sharp, and needs to match
(def C  (named-note 0 12 "western" "C"))
(def Db (named-note 1 12 "western" "C♯/D♭" "C" "D"))
(def D  (named-note 2 12 "western" "D"))
(def Eb (named-note 3 12 "western" "D♯/E♭" "D" "E"))
(def E  (named-note 4 12 "western" "E"))
(def F  (named-note 5 12 "western" "F"))
(def Gb (named-note 6 12 "western" "F♯/G♭" "F" "G"))
(def G  (named-note 7 12 "western" "G"))
(def Ab (named-note 8 12 "western" "G♯/A♭" "G" "A"))
(def A  (named-note 9 12 "western" "A"))
(def Bb (named-note 10 12 "western" "A♯/B♭" "A" "B"))
(def B  (named-note 11 12 "western" "B"))

(def western-named-notes [C Db D Eb E F Gb G Ab A Bb B])

; todo generate this automatically from the western-notes
(def circle-of-fifths [C G D A E B Gb Db Ab Eb Bb F])

;; notes are actually names, in different variables
;; note, the name is referenced in flat, sharp, and needs to match
(def a (named-note 0 12 "cyclic" "0"))
(def b (named-note 1 12 "cyclic" "1"))
(def c (named-note 2 12 "cyclic" "2"))
(def d (named-note 3 12 "cyclic" "3"))
(def e (named-note 4 12 "cyclic" "4"))
(def f (named-note 5 12 "cyclic" "5"))
(def g (named-note 6 12 "cyclic" "6"))
(def h (named-note 7 12 "cyclic" "7"))
(def i (named-note 8 12 "cyclic" "8"))
(def j (named-note 9 12 "cyclic" "9"))
(def k (named-note 10 12 "cyclic" "10"))
(def l (named-note 11 12 "cyclic" "11"))

(def cyclic-named-notes [a b c d e f g h i j k l])

; bunk tests

(same-note? E (note 1 3)) ; should be true

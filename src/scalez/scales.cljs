(ns scalez.scales)

(def log js/console.log)

(log "------------------------")

(defn ratio [^number total ^number step] [step total])

(defn all [total] (->> (range 0 total)
                       (map (fn [n] (ratio total n)))))


(def western-notes [[:C :C]
                    [:C# :Db]
                    [:D :D]
                    [:D# :Eb]
                    [:E :E]
                    [:F :F]
                    [:F# :Gb]
                    [:G :G]
                    [:G# :Ab]
                    [:A :A]
                    [:A# :Bb]
                    [:B :B]])

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






;; scales

(map log (range 0 12))

(-> (range 0 12) (partial map log))

(log "[[[[[iiii[[[[]]]]]]]]]")
(-> [4 6 20] log)


; (def western (1/12 2/12 3/12 4/12 5/12 6/12 7/12 8/12 9/12 10/12 11/12 12/12))

(js/console.log "Hello there world!!!!!!!!!!!!!!!!!!!!!!")

(def x 3)

(js/console.log x)

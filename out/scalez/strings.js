// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('scalez.strings');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('scalez.notes');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
scalez.strings.log = console.log;
scalez.strings.string = (function scalez$strings$string(start,note){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,start,cljs.core.cst$kw$note,note], null);
});
scalez.strings.fret = (function scalez$strings$fret(step,range){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$step,step,cljs.core.cst$kw$range,range], null);
});
scalez.strings.standard_western_frets = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.strings.fret((0),(12)),scalez.strings.fret((1),(12)),scalez.strings.fret((2),(12)),scalez.strings.fret((3),(12)),scalez.strings.fret((4),(12)),scalez.strings.fret((5),(12)),scalez.strings.fret((6),(12)),scalez.strings.fret((7),(12)),scalez.strings.fret((8),(12)),scalez.strings.fret((9),(12)),scalez.strings.fret((10),(12)),scalez.strings.fret((11),(12))], null);

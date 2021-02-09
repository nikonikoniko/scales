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
scalez.strings.fret = (function scalez$strings$fret(step,range){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$step,step,cljs.core.cst$kw$range,range], null);
});
scalez.strings.standard_western_frets = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.strings.fret((0),(12)),scalez.strings.fret((1),(12)),scalez.strings.fret((2),(12)),scalez.strings.fret((3),(12)),scalez.strings.fret((4),(12)),scalez.strings.fret((5),(12)),scalez.strings.fret((6),(12)),scalez.strings.fret((7),(12)),scalez.strings.fret((8),(12)),scalez.strings.fret((9),(12)),scalez.strings.fret((10),(12)),scalez.strings.fret((11),(12))], null);
scalez.strings.fret_sets = new cljs.core.PersistentArrayMap(null, 3, ["standard-western",scalez.strings.standard_western_frets,"fretless",cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY], null);
scalez.strings.string = (function scalez$strings$string(var_args){
var G__1306 = arguments.length;
switch (G__1306) {
case 2:
return scalez.strings.string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return scalez.strings.string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(scalez.strings.string.cljs$core$IFn$_invoke$arity$2 = (function (offset,note){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$offset,offset,cljs.core.cst$kw$note,note,cljs.core.cst$kw$fret_DASH_set,"standard-western"], null);
}));

(scalez.strings.string.cljs$core$IFn$_invoke$arity$3 = (function (offset,note,fret_set){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$offset,offset,cljs.core.cst$kw$note,note,cljs.core.cst$kw$fret_DASH_set,fret_set], null);
}));

(scalez.strings.string.cljs$lang$maxFixedArity = 3);


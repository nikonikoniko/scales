// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('scalez.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('scalez.notes');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
scalez.utils.log = console.log;
/**
 * remove elem in coll
 */
scalez.utils.vec_remove = (function scalez$utils$vec_remove(pos,coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
scalez.utils.string = (function scalez$utils$string(start,note){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,start,cljs.core.cst$kw$note,note], null);
});

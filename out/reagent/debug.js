// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__5669__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5670__i = 0, G__5670__a = new Array(arguments.length -  0);
while (G__5670__i < G__5670__a.length) {G__5670__a[G__5670__i] = arguments[G__5670__i + 0]; ++G__5670__i;}
  args = new cljs.core.IndexedSeq(G__5670__a,0,null);
} 
return G__5669__delegate.call(this,args);};
G__5669.cljs$lang$maxFixedArity = 0;
G__5669.cljs$lang$applyTo = (function (arglist__5671){
var args = cljs.core.seq(arglist__5671);
return G__5669__delegate(args);
});
G__5669.cljs$core$IFn$_invoke$arity$variadic = G__5669__delegate;
return G__5669;
})()
);

(o.error = (function() { 
var G__5672__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5673__i = 0, G__5673__a = new Array(arguments.length -  0);
while (G__5673__i < G__5673__a.length) {G__5673__a[G__5673__i] = arguments[G__5673__i + 0]; ++G__5673__i;}
  args = new cljs.core.IndexedSeq(G__5673__a,0,null);
} 
return G__5672__delegate.call(this,args);};
G__5672.cljs$lang$maxFixedArity = 0;
G__5672.cljs$lang$applyTo = (function (arglist__5674){
var args = cljs.core.seq(arglist__5674);
return G__5672__delegate(args);
});
G__5672.cljs$core$IFn$_invoke$arity$variadic = G__5672__delegate;
return G__5672;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

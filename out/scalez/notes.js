// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('scalez.notes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
scalez.notes.log = console.log;
cljs.spec.alpha.def_impl(cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$scalez$notes_SLASH_range,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$scalez$notes_SLASH_name,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$scalez$notes_SLASH_note,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1287){
return cljs.core.map_QMARK_(G__1287);
}),(function (G__1287){
return cljs.core.contains_QMARK_(G__1287,cljs.core.cst$kw$scalez$notes_SLASH_step);
}),(function (G__1287){
return cljs.core.contains_QMARK_(G__1287,cljs.core.cst$kw$scalez$notes_SLASH_total);
})], null),(function (G__1287){
return ((cljs.core.map_QMARK_(G__1287)) && (cljs.core.contains_QMARK_(G__1287,cljs.core.cst$kw$scalez$notes_SLASH_step)) && (cljs.core.contains_QMARK_(G__1287,cljs.core.cst$kw$scalez$notes_SLASH_total)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$scalez$notes_SLASH_step)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$scalez$notes_SLASH_total))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$scalez$notes_SLASH_named_DASH_note,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total,cljs.core.cst$kw$scalez$notes_SLASH_name], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1288){
return cljs.core.map_QMARK_(G__1288);
}),(function (G__1288){
return cljs.core.contains_QMARK_(G__1288,cljs.core.cst$kw$scalez$notes_SLASH_step);
}),(function (G__1288){
return cljs.core.contains_QMARK_(G__1288,cljs.core.cst$kw$scalez$notes_SLASH_total);
}),(function (G__1288){
return cljs.core.contains_QMARK_(G__1288,cljs.core.cst$kw$scalez$notes_SLASH_name);
})], null),(function (G__1288){
return ((cljs.core.map_QMARK_(G__1288)) && (cljs.core.contains_QMARK_(G__1288,cljs.core.cst$kw$scalez$notes_SLASH_step)) && (cljs.core.contains_QMARK_(G__1288,cljs.core.cst$kw$scalez$notes_SLASH_total)) && (cljs.core.contains_QMARK_(G__1288,cljs.core.cst$kw$scalez$notes_SLASH_name)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total,cljs.core.cst$kw$scalez$notes_SLASH_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total,cljs.core.cst$kw$scalez$notes_SLASH_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_total,cljs.core.cst$kw$scalez$notes_SLASH_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$scalez$notes_SLASH_step)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$scalez$notes_SLASH_total)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$scalez$notes_SLASH_name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$scalez$notes_SLASH_note,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$step,cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$range,cljs.core.cst$kw$scalez$notes_SLASH_range),cljs.core.cst$kw$ret,cljs.core.cst$kw$scalez$notes_SLASH_note),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$step,cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$range,cljs.core.cst$kw$scalez$notes_SLASH_range),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$step,cljs.core.cst$kw$range], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_range], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_range], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$step,cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$range,cljs.core.cst$kw$scalez$notes_SLASH_range),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$scalez$notes_SLASH_note,cljs.core.cst$kw$scalez$notes_SLASH_note,null,null),cljs.core.cst$kw$scalez$notes_SLASH_note,null,null,null));
scalez.notes.note = (function scalez$notes$note(step,range){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$step,step,cljs.core.cst$kw$range,range], null);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$scalez$notes_SLASH_named_DASH_note,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$step,cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$range,cljs.core.cst$kw$scalez$notes_SLASH_range,cljs.core.cst$kw$name,cljs.core.cst$kw$scalez$notes_SLASH_name,cljs.core.cst$kw$sharp_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name,cljs.core.cst$kw$flat_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$step,cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$range,cljs.core.cst$kw$scalez$notes_SLASH_range,cljs.core.cst$kw$name,cljs.core.cst$kw$scalez$notes_SLASH_name,cljs.core.cst$kw$sharp_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name,cljs.core.cst$kw$flat_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$step,cljs.core.cst$kw$range,cljs.core.cst$kw$name,cljs.core.cst$kw$sharp_DASH_of_DASH_name,cljs.core.cst$kw$flat_DASH_of_DASH_name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_range,cljs.core.cst$kw$scalez$notes_SLASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$scalez$notes_SLASH_range,cljs.core.cst$kw$scalez$notes_SLASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$step,cljs.core.cst$kw$scalez$notes_SLASH_step,cljs.core.cst$kw$range,cljs.core.cst$kw$scalez$notes_SLASH_range,cljs.core.cst$kw$name,cljs.core.cst$kw$scalez$notes_SLASH_name,cljs.core.cst$kw$sharp_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_sharp_DASH_of_DASH_name,cljs.core.cst$kw$flat_DASH_of_DASH_name,cljs.core.cst$kw$scalez$notes_SLASH_flat_DASH_of_DASH_name),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
scalez.notes.named_note = (function scalez$notes$named_note(var_args){
var G__1290 = arguments.length;
switch (G__1290) {
case 4:
return scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return scalez.notes.named_note.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4 = (function (step,range,type,name){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$step,step,cljs.core.cst$kw$range,range,cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,name], null);
}));

(scalez.notes.named_note.cljs$core$IFn$_invoke$arity$6 = (function (step,range,type,name,sharp_of_name,flat_of_name){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$step,step,cljs.core.cst$kw$range,range,cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,type,cljs.core.cst$kw$sharp_DASH_of_DASH_name,sharp_of_name,cljs.core.cst$kw$flat_DASH_of_DASH_name,flat_of_name], null);
}));

(scalez.notes.named_note.cljs$lang$maxFixedArity = 6);

scalez.notes.fraction = (function scalez$notes$fraction(note){
return (cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(note) / cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(note));
});
scalez.notes.same_note_QMARK_ = (function scalez$notes$same_note_QMARK_(n1,n2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n1) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n2)),(cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n2) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n1)));
});
scalez.notes.log_note = (function scalez$notes$log_note(n){
var G__1292 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(n);
var G__1293 = cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n);
var G__1294 = cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n);
var G__1295 = cljs.core.cst$kw$flat_DASH_of_DASH_name.cljs$core$IFn$_invoke$arity$1(n);
var G__1296 = cljs.core.cst$kw$sharp_DASH_of_DASH_name.cljs$core$IFn$_invoke$arity$1(n);
return (scalez.notes.log.cljs$core$IFn$_invoke$arity$5 ? scalez.notes.log.cljs$core$IFn$_invoke$arity$5(G__1292,G__1293,G__1294,G__1295,G__1296) : scalez.notes.log.call(null,G__1292,G__1293,G__1294,G__1295,G__1296));
});
scalez.notes.shift = (function scalez$notes$shift(n1,n2){
var combined_range = (cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n1) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n2));
var combined_frac = cljs.core.mod(((cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n1) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n2)) + (cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n2) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n1))),combined_range);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(n2,cljs.core.cst$kw$step,combined_frac,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$range,combined_range], 0));
});
scalez.notes.unshift = (function scalez$notes$unshift(n1,n2){
var combined_range = (cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n1) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n2));
var combined_frac = cljs.core.mod(((cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n2) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n1)) - (cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n1) * cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n2))),combined_range);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(n2,cljs.core.cst$kw$step,combined_frac,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$range,combined_range], 0));
});
scalez.notes.find_note = (function scalez$notes$find_note(notes,n){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__1297_SHARP_){
return scalez.notes.same_note_QMARK_(p1__1297_SHARP_,n);
}),notes));
});
scalez.notes.find_or_note = (function scalez$notes$find_or_note(notes,n){
var or__4126__auto__ = scalez.notes.find_note(notes,n);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return n;
}
});
scalez.notes.find_by_name = (function scalez$notes$find_by_name(notes,name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__1298_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__1298_SHARP_));
}),notes));
});
scalez.notes.assign = (function scalez$notes$assign(named_notes,notes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1299_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scalez.notes.find_or_note(named_notes,p1__1299_SHARP_),cljs.core.cst$kw$step,cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(p1__1299_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$range,cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(p1__1299_SHARP_)], 0));
}),notes);
});
scalez.notes.western_QMARK_ = (function scalez$notes$western_QMARK_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(n),"western");
});
scalez.notes.irregular_western_QMARK_ = (function scalez$notes$irregular_western_QMARK_(n){
var and__4115__auto__ = cljs.core.cst$kw$flat_DASH_of_DASH_name.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$sharp_DASH_of_DASH_name.cljs$core$IFn$_invoke$arity$1(n);
} else {
return and__4115__auto__;
}
});
scalez.notes.pretty = (function scalez$notes$pretty(var_args){
var G__1301 = arguments.length;
switch (G__1301) {
case 1:
return scalez.notes.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return scalez.notes.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(scalez.notes.pretty.cljs$core$IFn$_invoke$arity$1 = (function (n){
var or__4126__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n))].join('');
}
}));

(scalez.notes.pretty.cljs$core$IFn$_invoke$arity$2 = (function (notes,n){
if(cljs.core.truth_(scalez.notes.irregular_western_QMARK_(n))){
if(cljs.core.truth_(scalez.notes.find_by_name(notes,cljs.core.cst$kw$flat_DASH_of_DASH_name.cljs$core$IFn$_invoke$arity$1(n)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sharp_DASH_of_DASH_name.cljs$core$IFn$_invoke$arity$1(n)),"\u266F"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flat_DASH_of_DASH_name.cljs$core$IFn$_invoke$arity$1(n)),"\u266D"].join('');
}
} else {
var or__4126__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(n))].join('');
}
}
}));

(scalez.notes.pretty.cljs$lang$maxFixedArity = 2);

scalez.notes.C = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((0),(12),"western","C");
scalez.notes.Db = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$6((1),(12),"western","C\u266F/D\u266D","C","D");
scalez.notes.D = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((2),(12),"western","D");
scalez.notes.Eb = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$6((3),(12),"western","D\u266F/E\u266D","D","E");
scalez.notes.E = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((4),(12),"western","E");
scalez.notes.F = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((5),(12),"western","F");
scalez.notes.Gb = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$6((6),(12),"western","F\u266F/G\u266D","F","G");
scalez.notes.G = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((7),(12),"western","G");
scalez.notes.Ab = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$6((8),(12),"western","G\u266F/A\u266D","G","A");
scalez.notes.A = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((9),(12),"western","A");
scalez.notes.Bb = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$6((10),(12),"western","A\u266F/B\u266D","A","B");
scalez.notes.B = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((11),(12),"western","B");
scalez.notes.western_named_notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.notes.C,scalez.notes.Db,scalez.notes.D,scalez.notes.Eb,scalez.notes.E,scalez.notes.F,scalez.notes.Gb,scalez.notes.G,scalez.notes.Ab,scalez.notes.A,scalez.notes.Bb,scalez.notes.B], null);
scalez.notes.circle_of_fifths = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.notes.C,scalez.notes.G,scalez.notes.D,scalez.notes.A,scalez.notes.E,scalez.notes.B,scalez.notes.Gb,scalez.notes.Db,scalez.notes.Ab,scalez.notes.Eb,scalez.notes.Bb,scalez.notes.F], null);
scalez.notes.a = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((0),(12),"cyclic","0");
scalez.notes.b = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((1),(12),"cyclic","1");
scalez.notes.c = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((2),(12),"cyclic","2");
scalez.notes.d = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((3),(12),"cyclic","3");
scalez.notes.e = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((4),(12),"cyclic","4");
scalez.notes.f = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((5),(12),"cyclic","5");
scalez.notes.g = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((6),(12),"cyclic","6");
scalez.notes.h = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((7),(12),"cyclic","7");
scalez.notes.i = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((8),(12),"cyclic","8");
scalez.notes.j = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((9),(12),"cyclic","9");
scalez.notes.k = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((10),(12),"cyclic","10");
scalez.notes.l = scalez.notes.named_note.cljs$core$IFn$_invoke$arity$4((11),(12),"cyclic","11");
scalez.notes.cyclic_named_notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.notes.a,scalez.notes.b,scalez.notes.c,scalez.notes.d,scalez.notes.e,scalez.notes.f,scalez.notes.g,scalez.notes.h,scalez.notes.i,scalez.notes.j,scalez.notes.k,scalez.notes.l], null);
scalez.notes.same_note_QMARK_(scalez.notes.E,scalez.notes.note((1),(3)));

// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.clojure_test');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
goog.require('clojure.test.check.impl');
clojure.test.check.clojure_test.assert_check = (function clojure$test$check$clojure_test$assert_check(p__5515){
var map__5516 = p__5515;
var map__5516__$1 = (((((!((map__5516 == null))))?(((((map__5516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5516):map__5516);
var m = map__5516__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5516__$1,cljs.core.cst$kw$result);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));

if(clojure.test.check.impl.exception_like_QMARK_(result)){
throw result;
} else {
try{var value__5249__auto__ = result;
if(cljs.core.truth_(value__5249__auto__)){
var G__5520_5522 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/uer/.cljs/.aot_cache/1.10.773/A0D2072/clojure/test/check/clojure_test.cljc",18,cljs.core.cst$kw$pass,12,21,cljs.core.cst$sym$result,21,value__5249__auto__,null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__5520_5522) : cljs.test.report.call(null,G__5520_5522));
} else {
var G__5521_5523 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/uer/.cljs/.aot_cache/1.10.773/A0D2072/clojure/test/check/clojure_test.cljc",18,cljs.core.cst$kw$fail,12,21,cljs.core.cst$sym$result,21,value__5249__auto__,null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__5521_5523) : cljs.test.report.call(null,G__5521_5523));
}

return value__5249__auto__;
}catch (e5518){var t__5296__auto__ = e5518;
var G__5519 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/uer/.cljs/.aot_cache/1.10.773/A0D2072/clojure/test/check/clojure_test.cljc",18,cljs.core.cst$kw$error,12,21,cljs.core.cst$sym$result,21,t__5296__auto__,null]);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__5519) : cljs.test.report.call(null,G__5519));
}}
});
clojure.test.check.clojure_test._STAR_default_test_count_STAR_ = (100);
clojure.test.check.clojure_test.process_options = (function clojure$test$check$clojure_test$process_options(options){
if((options == null)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$num_DASH_tests,clojure.test.check.clojure_test._STAR_default_test_count_STAR_], null);
} else {
if(typeof options === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$num_DASH_tests,options], null);
} else {
if(cljs.core.map_QMARK_(options)){
if(cljs.core.truth_(cljs.core.cst$kw$num_DASH_tests.cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$num_DASH_tests,clojure.test.check.clojure_test._STAR_default_test_count_STAR_);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid defspec options: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bad_DASH_options,options], null));

}
}
}
});
/**
 * Controls whether property trials should be reported via clojure.test/report.
 *   Valid values include:
 * 
 *   * false - no reporting of trials (default)
 *   * a function - will be passed a clojure.test/report-style map containing
 *   :clojure.test.check/property and :clojure.test.check/trial slots
 *   * true - provides quickcheck-style trial reporting (dots) via
 *   `trial-report-dots`
 * 
 *   (Note that all reporting requires running `quick-check` within the scope of a
 *   clojure.test run (via `test-ns`, `test-all-vars`, etc.)
 * 
 *   Reporting functions offered by clojure.test.check include `trial-report-dots` and
 *   `trial-report-periodic` (which prints more verbose trial progress information
 *   every `*trial-report-period*` milliseconds.
 */
clojure.test.check.clojure_test._STAR_report_trials_STAR_ = false;
/**
 * If true, a verbose report of the property being tested, the
 *   failing return value, and the arguments provoking that failure is emitted
 *   prior to the start of the shrinking search.
 */
clojure.test.check.clojure_test._STAR_report_shrinking_STAR_ = false;
/**
 * Milliseconds between reports emitted by `trial-report-periodic`.
 */
clojure.test.check.clojure_test._STAR_trial_report_period_STAR_ = (10000);
clojure.test.check.clojure_test.last_trial_report = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var begin_test_var_method_5525 = cljs.core.get_method(cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test_DASH_var], null));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test], null),(function (m){
cljs.core.reset_BANG_(clojure.test.check.clojure_test.last_trial_report,clojure.test.check.impl.get_current_time_millis());

if(cljs.core.truth_(begin_test_var_method_5525)){
return (begin_test_var_method_5525.cljs$core$IFn$_invoke$arity$1 ? begin_test_var_method_5525.cljs$core$IFn$_invoke$arity$1(m) : begin_test_var_method_5525.call(null,m));
} else {
return null;
}
}));
clojure.test.check.clojure_test.get_property_name = (function clojure$test$check$clojure_test$get_property_name(p__5526){
var map__5527 = p__5526;
var map__5527__$1 = (((((!((map__5527 == null))))?(((((map__5527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5527):map__5527);
var report_map = map__5527__$1;
var property_fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5527__$1,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_property);
var or__4126__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(property_fun));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.test.testing_vars_str(report_map);
}
});
clojure.test.check.clojure_test.with_test_out_STAR_ = (function clojure$test$check$clojure_test$with_test_out_STAR_(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a verbose
 *   status every `*trial-report-period*` milliseconds, like this one:
 * 
 *   Passing trial 3286 / 5000 for (your-test-var-name-here) (:)
 */
clojure.test.check.clojure_test.trial_report_periodic = (function clojure$test$check$clojure_test$trial_report_periodic(m){
var t = clojure.test.check.impl.get_current_time_millis();
if(((t - clojure.test.check.clojure_test._STAR_trial_report_period_STAR_) > cljs.core.deref(clojure.test.check.clojure_test.last_trial_report))){
clojure.test.check.clojure_test.with_test_out_STAR_((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Passing trial",cljs.core.first(cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_trial.cljs$core$IFn$_invoke$arity$1(m)),"/",cljs.core.second(cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_trial.cljs$core$IFn$_invoke$arity$1(m)),"for",clojure.test.check.clojure_test.get_property_name(m)], 0));
}));

return cljs.core.reset_BANG_(clojure.test.check.clojure_test.last_trial_report,t);
} else {
return null;
}
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a single
 *   dot every 1000 trials reported.
 */
clojure.test.check.clojure_test.trial_report_dots = (function clojure$test$check$clojure_test$trial_report_dots(p__5529){
var map__5530 = p__5529;
var map__5530__$1 = (((((!((map__5530 == null))))?(((((map__5530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5530):map__5530);
var vec__5531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5530__$1,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_trial);
var so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5531,(0),null);
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5531,(1),null);
if((so_far > (0))){
if((cljs.core.mod(so_far,(1000)) === (0))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["."], 0));

cljs.core.flush();
} else {
}

if((so_far === total)){
return cljs.core.println();
} else {
return null;
}
} else {
return null;
}
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_trial], null),(function (m){
var temp__5457__auto__ = (function (){var and__4115__auto__ = clojure.test.check.clojure_test._STAR_report_trials_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(clojure.test.check.clojure_test._STAR_report_trials_STAR_ === true){
return clojure.test.check.clojure_test.trial_report_dots;
} else {
return clojure.test.check.clojure_test._STAR_report_trials_STAR_;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var trial_report_fn = temp__5457__auto__;
return (trial_report_fn.cljs$core$IFn$_invoke$arity$1 ? trial_report_fn.cljs$core$IFn$_invoke$arity$1(m) : trial_report_fn.call(null,m));
} else {
return null;
}
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_shrinking], null),(function (m){
if(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_shrinking_STAR_)){
return clojure.test.check.clojure_test.with_test_out_STAR_((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shrinking",clojure.test.check.clojure_test.get_property_name(m),"starting with parameters",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_params.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
}));
} else {
return null;
}
}));
clojure.test.check.clojure_test.report_trial = (function clojure$test$check$clojure_test$report_trial(property_fun,so_far,num_tests){
var G__5535 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_trial,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_property,property_fun,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_trial,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [so_far,num_tests], null)], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__5535) : cljs.test.report.call(null,G__5535));
});
clojure.test.check.clojure_test.report_failure = (function clojure$test$check$clojure_test$report_failure(property_fun,result,trial_number,failing_params){
var G__5536 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_shrinking,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_property,property_fun,cljs.core.cst$kw$clojure$test$check$clojure_DASH_test_SLASH_params,cljs.core.vec(failing_params)], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__5536) : cljs.test.report.call(null,G__5536));
});

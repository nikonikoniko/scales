// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('scalez.scales');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('scalez.notes');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
scalez.scales.log = console.log;
scalez.scales.pipeLog = (function scalez$scales$pipeLog(x){
console.log(x);

return x;
});
scalez.scales.scale = (function scalez$scales$scale(range,shift,steps,name){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$range,range,cljs.core.cst$kw$shift,shift,cljs.core.cst$kw$steps,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1312_SHARP_){
return scalez.notes.note(p1__1312_SHARP_,range);
}),steps),cljs.core.cst$kw$name,name], null);
});
scalez.scales.ionian = scalez.scales.scale((12),(0),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11)], null),"ionian");
scalez.scales.dorian = scalez.scales.scale((12),(10),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(9),(10)], null),"dorian");
scalez.scales.phrygian = scalez.scales.scale((12),(8),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(5),(7),(8),(10)], null),"phrygian");
scalez.scales.lydian = scalez.scales.scale((12),(7),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(6),(7),(9),(11)], null),"lydian");
scalez.scales.mixolydian = scalez.scales.scale((12),(5),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(10)], null),"mixolydian");
scalez.scales.aeolian = scalez.scales.scale((12),(3),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(8),(10)], null),"aeolian");
scalez.scales.locrian = scalez.scales.scale((12),(1),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(5),(6),(8),(10)], null),"locrian");
scalez.scales.al_urmawi_17_tone = scalez.scales.scale((1200),(0),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(204),(284),(384),(407),(498),(588),(678),(702),(792),(882),(905),(996),(1086),(1176)], null),"Al-Urmawi 17-tone");
scalez.scales.scales = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.scales.al_urmawi_17_tone,scalez.scales.ionian,scalez.scales.dorian,scalez.scales.phrygian,scalez.scales.lydian,scalez.scales.mixolydian,scalez.scales.aeolian,scalez.scales.locrian], null);
scalez.scales.same_key_major = (function scalez$scales$same_key_major(scale,root_note){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scalez.notes.western_named_notes,(function (){var G__1315 = (cljs.core.cst$kw$shift.cljs$core$IFn$_invoke$arity$1(scale) + cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(root_note));
var fexpr__1314 = (function (p1__1313_SHARP_){
return cljs.core.mod(p1__1313_SHARP_,(12));
});
return fexpr__1314(G__1315);
})());
});
scalez.scales.same_key_minor = (function scalez$scales$same_key_minor(scale,rootNote){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scalez.notes.western_named_notes,(function (){var G__1318 = (cljs.core.cst$kw$shift.cljs$core$IFn$_invoke$arity$1(scale) + cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(rootNote));
var fexpr__1317 = (function (p1__1316_SHARP_){
return cljs.core.mod(((9) + p1__1316_SHARP_),(12));
});
return fexpr__1317(G__1318);
})());
});

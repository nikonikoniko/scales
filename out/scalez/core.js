// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('scalez.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('scalez.scales');
goog.require('scalez.notes');
goog.require('scalez.strings');
goog.require('scalez.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
goog.require('reagent.dom');
goog.require('reagent.core');
scalez.core.log = console.log;
(scalez.core.log.cljs$core$IFn$_invoke$arity$1 ? scalez.core.log.cljs$core$IFn$_invoke$arity$1("in core") : scalez.core.log.call(null,"in core"));
scalez.core.eventValue = (function scalez$core$eventValue(p1__7714_SHARP_){
return p1__7714_SHARP_.target.value;
});
scalez.core.atom_input = (function scalez$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__7715_SHARP_){
return cljs.core.reset_BANG_(value,scalez.core.eventValue(p1__7715_SHARP_));
})], null)], null);
});
scalez.core.notes_as_select_values = (function scalez$core$notes_as_select_values(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n)], null),scalez.notes.pretty.cljs$core$IFn$_invoke$arity$1(n)], null);
}),scalez.notes.western_named_notes);
});
scalez.core.select_note = (function scalez$core$select_note(onChange){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,(function (p1__7716_SHARP_){
var G__7717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scalez.notes.western_named_notes,parseInt(scalez.core.eventValue(p1__7716_SHARP_)));
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__7717) : onChange.call(null,G__7717));
})], null),scalez.core.notes_as_select_values()], null);
});
scalez.core.bunk_sanitize = (function scalez$core$bunk_sanitize(s){
return clojure.string.replace(clojure.string.replace(s,/#/,"s"),/\//,"-");
});
scalez.core.note_class_names = (function scalez$core$note_class_names(n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["note",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "generic";
}
})()),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "generic";
}
})()),"-",scalez.core.bunk_sanitize((function (){var or__4126__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(n));
}
})())].join('')], null);
});
scalez.core.string_note = (function scalez$core$string_note(notes,note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * scalez.notes.fraction(note))),"%"].join('')], null),cljs.core.cst$kw$class,scalez.core.note_class_names(note)], null),scalez.notes.pretty.cljs$core$IFn$_invoke$arity$2(notes,note)], null);
});
scalez.core.string_fret = (function scalez$core$string_fret(fret){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * scalez.notes.fraction(fret))),"%"].join('')], null),cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fret"], null)], null),"|"], null);
});
scalez.core.string = (function scalez$core$string(string,rootNote,scale){
var string_note_1 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(string);
var western_scale_1 = scalez.scales.named_static_scale(scale,scalez.notes.western_named_notes,rootNote);
var cyclic_scale_1 = scalez.scales.named_dynamic_scale(scale,scalez.notes.cyclic_named_notes,rootNote);
var cyclic_notes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7719_SHARP_){
return scalez.notes.shift(rootNote,p1__7719_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7718_SHARP_){
return scalez.notes.unshift(string_note_1,p1__7718_SHARP_);
}),cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(cyclic_scale_1)));
var western_notes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7720_SHARP_){
return scalez.notes.unshift(string_note_1,p1__7720_SHARP_);
}),cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(western_scale_1));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fretboard-string"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(scalez.core.string_fret,scalez.strings.standard_western_frets),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7721_SHARP_){
return scalez.core.string_note(cyclic_scale_1,p1__7721_SHARP_);
}),cyclic_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7722_SHARP_){
return scalez.core.string_note(western_scale_1,p1__7722_SHARP_);
}),western_notes)], null);
});
scalez.core.fretboard = (function scalez$core$fretboard(strings,rootNote,scale){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fretboard"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7723_SHARP_){
return scalez.core.string(p1__7723_SHARP_,rootNote,scale);
}),strings)], null);
});
scalez.core.note = (function scalez$core$note(n,ns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,scalez.core.note_class_names(n)], null),scalez.notes.pretty.cljs$core$IFn$_invoke$arity$2(ns,n)], null);
});
scalez.core.notes = (function scalez$core$notes(ns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["notes"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7724_SHARP_){
return scalez.core.note(p1__7724_SHARP_,ns);
}),ns)], null);
});
scalez.core.scale = (function scalez$core$scale(rootNote,strings,scale){
var western_scale = scalez.scales.named_static_scale(scale,scalez.notes.western_named_notes,rootNote);
var cyclic_scale = scalez.scales.named_dynamic_scale(scale,scalez.notes.cyclic_named_notes,rootNote);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-breakdown"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"scale : ",scalez.notes.pretty.cljs$core$IFn$_invoke$arity$1(rootNote)," ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scale)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"same as : ",scalez.notes.pretty.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(western_scale),scalez.scales.same_key_major(scale,rootNote))," major"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"same as : ",scalez.notes.pretty.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(western_scale),scalez.scales.same_key_minor(scale,rootNote))," minor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,scalez.core.notes(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(western_scale))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,scalez.core.notes(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(cyclic_scale))], null),scalez.core.fretboard(strings,rootNote,scale)], null);
});
scalez.core.scales = (function scalez$core$scales(rootNote,strings){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scales-list"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7725_SHARP_){
return scalez.core.scale(rootNote,strings,p1__7725_SHARP_);
}),scalez.scales.scales)], null);
});
scalez.core.select_string = (function scalez$core$select_string(string,replace,remove){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(string)),cljs.core.cst$kw$on_DASH_change,(function (p1__7726_SHARP_){
var G__7727 = scalez.strings.string((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scalez.notes.western_named_notes,parseInt(scalez.core.eventValue(p1__7726_SHARP_))));
return (replace.cljs$core$IFn$_invoke$arity$1 ? replace.cljs$core$IFn$_invoke$arity$1(G__7727) : replace.call(null,G__7727));
})], null),scalez.core.notes_as_select_values()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
})], null),"x"], null)], null);
});
scalez.core.select_strings = (function scalez$core$select_strings(ss,replace,remove,add){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,s){
return scalez.core.select_string(s,(function (p1__7728_SHARP_){
return (replace.cljs$core$IFn$_invoke$arity$2 ? replace.cljs$core$IFn$_invoke$arity$2(i,p1__7728_SHARP_) : replace.call(null,i,p1__7728_SHARP_));
}),(function (){
return (remove.cljs$core$IFn$_invoke$arity$1 ? remove.cljs$core$IFn$_invoke$arity$1(i) : remove.call(null,i));
}));
}),ss),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return (add.cljs$core$IFn$_invoke$arity$0 ? add.cljs$core$IFn$_invoke$arity$0() : add.call(null));
})], null),"+"], null)], null);
});
scalez.core.shared_state = (function scalez$core$shared_state(){
var root_note = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(scalez.notes.C);
var selected_strings = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.strings.string((0),scalez.notes.D),scalez.strings.string((0),scalez.notes.C),scalez.strings.string((0),scalez.notes.G),scalez.strings.string((0),scalez.notes.C)], null));
var add_string = (function (){
return cljs.core.reset_BANG_(selected_strings,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_strings),scalez.strings.string((0),scalez.notes.C)));
});
var remove_string = (function (i){
return cljs.core.reset_BANG_(selected_strings,scalez.utils.vec_remove(i,cljs.core.deref(selected_strings)));
});
var replace_string = (function (i,s){
return cljs.core.reset_BANG_(selected_strings,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(selected_strings),i,s));
});
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"choose your root note:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.core.select_note,(function (n){
return cljs.core.reset_BANG_(root_note,n);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"choose your strings"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.core.select_strings,cljs.core.deref(selected_strings),replace_string,remove_string,add_string], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["content"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.core.scales,cljs.core.deref(root_note),cljs.core.deref(selected_strings)], null)], null)], null);
});
});
scalez.core.simple_component = (function scalez$core$simple_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.core.shared_state], null)], null);
});
scalez.core.run = (function scalez$core$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scalez.core.simple_component], null),document.getElementById("app"));
});
goog.exportSymbol('scalez.core.run', scalez.core.run);
scalez.core.run();

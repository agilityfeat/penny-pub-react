// Compiled by ClojureScript 0.0-3178 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12763_12775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12764_12776 = null;
var count__12765_12777 = (0);
var i__12766_12778 = (0);
while(true){
if((i__12766_12778 < count__12765_12777)){
var f_12779 = cljs.core._nth.call(null,chunk__12764_12776,i__12766_12778);
cljs.core.println.call(null,"  ",f_12779);

var G__12780 = seq__12763_12775;
var G__12781 = chunk__12764_12776;
var G__12782 = count__12765_12777;
var G__12783 = (i__12766_12778 + (1));
seq__12763_12775 = G__12780;
chunk__12764_12776 = G__12781;
count__12765_12777 = G__12782;
i__12766_12778 = G__12783;
continue;
} else {
var temp__4126__auto___12784 = cljs.core.seq.call(null,seq__12763_12775);
if(temp__4126__auto___12784){
var seq__12763_12785__$1 = temp__4126__auto___12784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12763_12785__$1)){
var c__4884__auto___12786 = cljs.core.chunk_first.call(null,seq__12763_12785__$1);
var G__12787 = cljs.core.chunk_rest.call(null,seq__12763_12785__$1);
var G__12788 = c__4884__auto___12786;
var G__12789 = cljs.core.count.call(null,c__4884__auto___12786);
var G__12790 = (0);
seq__12763_12775 = G__12787;
chunk__12764_12776 = G__12788;
count__12765_12777 = G__12789;
i__12766_12778 = G__12790;
continue;
} else {
var f_12791 = cljs.core.first.call(null,seq__12763_12785__$1);
cljs.core.println.call(null,"  ",f_12791);

var G__12792 = cljs.core.next.call(null,seq__12763_12785__$1);
var G__12793 = null;
var G__12794 = (0);
var G__12795 = (0);
seq__12763_12775 = G__12792;
chunk__12764_12776 = G__12793;
count__12765_12777 = G__12794;
i__12766_12778 = G__12795;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4099__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12767 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12768 = null;
var count__12769 = (0);
var i__12770 = (0);
while(true){
if((i__12770 < count__12769)){
var vec__12771 = cljs.core._nth.call(null,chunk__12768,i__12770);
var name = cljs.core.nth.call(null,vec__12771,(0),null);
var map__12772 = cljs.core.nth.call(null,vec__12771,(1),null);
var map__12772__$1 = ((cljs.core.seq_QMARK_.call(null,map__12772))?cljs.core.apply.call(null,cljs.core.hash_map,map__12772):map__12772);
var arglists = cljs.core.get.call(null,map__12772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12796 = seq__12767;
var G__12797 = chunk__12768;
var G__12798 = count__12769;
var G__12799 = (i__12770 + (1));
seq__12767 = G__12796;
chunk__12768 = G__12797;
count__12769 = G__12798;
i__12770 = G__12799;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12767);
if(temp__4126__auto__){
var seq__12767__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12767__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__12767__$1);
var G__12800 = cljs.core.chunk_rest.call(null,seq__12767__$1);
var G__12801 = c__4884__auto__;
var G__12802 = cljs.core.count.call(null,c__4884__auto__);
var G__12803 = (0);
seq__12767 = G__12800;
chunk__12768 = G__12801;
count__12769 = G__12802;
i__12770 = G__12803;
continue;
} else {
var vec__12773 = cljs.core.first.call(null,seq__12767__$1);
var name = cljs.core.nth.call(null,vec__12773,(0),null);
var map__12774 = cljs.core.nth.call(null,vec__12773,(1),null);
var map__12774__$1 = ((cljs.core.seq_QMARK_.call(null,map__12774))?cljs.core.apply.call(null,cljs.core.hash_map,map__12774):map__12774);
var arglists = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12804 = cljs.core.next.call(null,seq__12767__$1);
var G__12805 = null;
var G__12806 = (0);
var G__12807 = (0);
seq__12767 = G__12804;
chunk__12768 = G__12805;
count__12769 = G__12806;
i__12770 = G__12807;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
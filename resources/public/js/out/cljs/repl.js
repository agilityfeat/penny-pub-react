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
var seq__31972_31984 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31973_31985 = null;
var count__31974_31986 = (0);
var i__31975_31987 = (0);
while(true){
if((i__31975_31987 < count__31974_31986)){
var f_31988 = cljs.core._nth.call(null,chunk__31973_31985,i__31975_31987);
cljs.core.println.call(null,"  ",f_31988);

var G__31989 = seq__31972_31984;
var G__31990 = chunk__31973_31985;
var G__31991 = count__31974_31986;
var G__31992 = (i__31975_31987 + (1));
seq__31972_31984 = G__31989;
chunk__31973_31985 = G__31990;
count__31974_31986 = G__31991;
i__31975_31987 = G__31992;
continue;
} else {
var temp__4126__auto___31993 = cljs.core.seq.call(null,seq__31972_31984);
if(temp__4126__auto___31993){
var seq__31972_31994__$1 = temp__4126__auto___31993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31972_31994__$1)){
var c__25711__auto___31995 = cljs.core.chunk_first.call(null,seq__31972_31994__$1);
var G__31996 = cljs.core.chunk_rest.call(null,seq__31972_31994__$1);
var G__31997 = c__25711__auto___31995;
var G__31998 = cljs.core.count.call(null,c__25711__auto___31995);
var G__31999 = (0);
seq__31972_31984 = G__31996;
chunk__31973_31985 = G__31997;
count__31974_31986 = G__31998;
i__31975_31987 = G__31999;
continue;
} else {
var f_32000 = cljs.core.first.call(null,seq__31972_31994__$1);
cljs.core.println.call(null,"  ",f_32000);

var G__32001 = cljs.core.next.call(null,seq__31972_31994__$1);
var G__32002 = null;
var G__32003 = (0);
var G__32004 = (0);
seq__31972_31984 = G__32001;
chunk__31973_31985 = G__32002;
count__31974_31986 = G__32003;
i__31975_31987 = G__32004;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__24926__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
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
var seq__31976 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31977 = null;
var count__31978 = (0);
var i__31979 = (0);
while(true){
if((i__31979 < count__31978)){
var vec__31980 = cljs.core._nth.call(null,chunk__31977,i__31979);
var name = cljs.core.nth.call(null,vec__31980,(0),null);
var map__31981 = cljs.core.nth.call(null,vec__31980,(1),null);
var map__31981__$1 = ((cljs.core.seq_QMARK_.call(null,map__31981))?cljs.core.apply.call(null,cljs.core.hash_map,map__31981):map__31981);
var arglists = cljs.core.get.call(null,map__31981__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31981__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32005 = seq__31976;
var G__32006 = chunk__31977;
var G__32007 = count__31978;
var G__32008 = (i__31979 + (1));
seq__31976 = G__32005;
chunk__31977 = G__32006;
count__31978 = G__32007;
i__31979 = G__32008;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31976);
if(temp__4126__auto__){
var seq__31976__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31976__$1)){
var c__25711__auto__ = cljs.core.chunk_first.call(null,seq__31976__$1);
var G__32009 = cljs.core.chunk_rest.call(null,seq__31976__$1);
var G__32010 = c__25711__auto__;
var G__32011 = cljs.core.count.call(null,c__25711__auto__);
var G__32012 = (0);
seq__31976 = G__32009;
chunk__31977 = G__32010;
count__31978 = G__32011;
i__31979 = G__32012;
continue;
} else {
var vec__31982 = cljs.core.first.call(null,seq__31976__$1);
var name = cljs.core.nth.call(null,vec__31982,(0),null);
var map__31983 = cljs.core.nth.call(null,vec__31982,(1),null);
var map__31983__$1 = ((cljs.core.seq_QMARK_.call(null,map__31983))?cljs.core.apply.call(null,cljs.core.hash_map,map__31983):map__31983);
var arglists = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32013 = cljs.core.next.call(null,seq__31976__$1);
var G__32014 = null;
var G__32015 = (0);
var G__32016 = (0);
seq__31976 = G__32013;
chunk__31977 = G__32014;
count__31978 = G__32015;
i__31979 = G__32016;
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
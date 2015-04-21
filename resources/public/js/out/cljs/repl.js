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
var seq__20316_20328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20317_20329 = null;
var count__20318_20330 = (0);
var i__20319_20331 = (0);
while(true){
if((i__20319_20331 < count__20318_20330)){
var f_20332 = cljs.core._nth.call(null,chunk__20317_20329,i__20319_20331);
cljs.core.println.call(null,"  ",f_20332);

var G__20333 = seq__20316_20328;
var G__20334 = chunk__20317_20329;
var G__20335 = count__20318_20330;
var G__20336 = (i__20319_20331 + (1));
seq__20316_20328 = G__20333;
chunk__20317_20329 = G__20334;
count__20318_20330 = G__20335;
i__20319_20331 = G__20336;
continue;
} else {
var temp__4126__auto___20337 = cljs.core.seq.call(null,seq__20316_20328);
if(temp__4126__auto___20337){
var seq__20316_20338__$1 = temp__4126__auto___20337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20316_20338__$1)){
var c__4884__auto___20339 = cljs.core.chunk_first.call(null,seq__20316_20338__$1);
var G__20340 = cljs.core.chunk_rest.call(null,seq__20316_20338__$1);
var G__20341 = c__4884__auto___20339;
var G__20342 = cljs.core.count.call(null,c__4884__auto___20339);
var G__20343 = (0);
seq__20316_20328 = G__20340;
chunk__20317_20329 = G__20341;
count__20318_20330 = G__20342;
i__20319_20331 = G__20343;
continue;
} else {
var f_20344 = cljs.core.first.call(null,seq__20316_20338__$1);
cljs.core.println.call(null,"  ",f_20344);

var G__20345 = cljs.core.next.call(null,seq__20316_20338__$1);
var G__20346 = null;
var G__20347 = (0);
var G__20348 = (0);
seq__20316_20328 = G__20345;
chunk__20317_20329 = G__20346;
count__20318_20330 = G__20347;
i__20319_20331 = G__20348;
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
var seq__20320 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20321 = null;
var count__20322 = (0);
var i__20323 = (0);
while(true){
if((i__20323 < count__20322)){
var vec__20324 = cljs.core._nth.call(null,chunk__20321,i__20323);
var name = cljs.core.nth.call(null,vec__20324,(0),null);
var map__20325 = cljs.core.nth.call(null,vec__20324,(1),null);
var map__20325__$1 = ((cljs.core.seq_QMARK_.call(null,map__20325))?cljs.core.apply.call(null,cljs.core.hash_map,map__20325):map__20325);
var arglists = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20349 = seq__20320;
var G__20350 = chunk__20321;
var G__20351 = count__20322;
var G__20352 = (i__20323 + (1));
seq__20320 = G__20349;
chunk__20321 = G__20350;
count__20322 = G__20351;
i__20323 = G__20352;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20320);
if(temp__4126__auto__){
var seq__20320__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20320__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__20320__$1);
var G__20353 = cljs.core.chunk_rest.call(null,seq__20320__$1);
var G__20354 = c__4884__auto__;
var G__20355 = cljs.core.count.call(null,c__4884__auto__);
var G__20356 = (0);
seq__20320 = G__20353;
chunk__20321 = G__20354;
count__20322 = G__20355;
i__20323 = G__20356;
continue;
} else {
var vec__20326 = cljs.core.first.call(null,seq__20320__$1);
var name = cljs.core.nth.call(null,vec__20326,(0),null);
var map__20327 = cljs.core.nth.call(null,vec__20326,(1),null);
var map__20327__$1 = ((cljs.core.seq_QMARK_.call(null,map__20327))?cljs.core.apply.call(null,cljs.core.hash_map,map__20327):map__20327);
var arglists = cljs.core.get.call(null,map__20327__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__20327__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20357 = cljs.core.next.call(null,seq__20320__$1);
var G__20358 = null;
var G__20359 = (0);
var G__20360 = (0);
seq__20320 = G__20357;
chunk__20321 = G__20358;
count__20322 = G__20359;
i__20323 = G__20360;
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
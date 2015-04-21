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
var seq__18280_18292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18281_18293 = null;
var count__18282_18294 = (0);
var i__18283_18295 = (0);
while(true){
if((i__18283_18295 < count__18282_18294)){
var f_18296 = cljs.core._nth.call(null,chunk__18281_18293,i__18283_18295);
cljs.core.println.call(null,"  ",f_18296);

var G__18297 = seq__18280_18292;
var G__18298 = chunk__18281_18293;
var G__18299 = count__18282_18294;
var G__18300 = (i__18283_18295 + (1));
seq__18280_18292 = G__18297;
chunk__18281_18293 = G__18298;
count__18282_18294 = G__18299;
i__18283_18295 = G__18300;
continue;
} else {
var temp__4126__auto___18301 = cljs.core.seq.call(null,seq__18280_18292);
if(temp__4126__auto___18301){
var seq__18280_18302__$1 = temp__4126__auto___18301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18280_18302__$1)){
var c__4884__auto___18303 = cljs.core.chunk_first.call(null,seq__18280_18302__$1);
var G__18304 = cljs.core.chunk_rest.call(null,seq__18280_18302__$1);
var G__18305 = c__4884__auto___18303;
var G__18306 = cljs.core.count.call(null,c__4884__auto___18303);
var G__18307 = (0);
seq__18280_18292 = G__18304;
chunk__18281_18293 = G__18305;
count__18282_18294 = G__18306;
i__18283_18295 = G__18307;
continue;
} else {
var f_18308 = cljs.core.first.call(null,seq__18280_18302__$1);
cljs.core.println.call(null,"  ",f_18308);

var G__18309 = cljs.core.next.call(null,seq__18280_18302__$1);
var G__18310 = null;
var G__18311 = (0);
var G__18312 = (0);
seq__18280_18292 = G__18309;
chunk__18281_18293 = G__18310;
count__18282_18294 = G__18311;
i__18283_18295 = G__18312;
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
var seq__18284 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18285 = null;
var count__18286 = (0);
var i__18287 = (0);
while(true){
if((i__18287 < count__18286)){
var vec__18288 = cljs.core._nth.call(null,chunk__18285,i__18287);
var name = cljs.core.nth.call(null,vec__18288,(0),null);
var map__18289 = cljs.core.nth.call(null,vec__18288,(1),null);
var map__18289__$1 = ((cljs.core.seq_QMARK_.call(null,map__18289))?cljs.core.apply.call(null,cljs.core.hash_map,map__18289):map__18289);
var arglists = cljs.core.get.call(null,map__18289__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__18289__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18313 = seq__18284;
var G__18314 = chunk__18285;
var G__18315 = count__18286;
var G__18316 = (i__18287 + (1));
seq__18284 = G__18313;
chunk__18285 = G__18314;
count__18286 = G__18315;
i__18287 = G__18316;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18284);
if(temp__4126__auto__){
var seq__18284__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18284__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__18284__$1);
var G__18317 = cljs.core.chunk_rest.call(null,seq__18284__$1);
var G__18318 = c__4884__auto__;
var G__18319 = cljs.core.count.call(null,c__4884__auto__);
var G__18320 = (0);
seq__18284 = G__18317;
chunk__18285 = G__18318;
count__18286 = G__18319;
i__18287 = G__18320;
continue;
} else {
var vec__18290 = cljs.core.first.call(null,seq__18284__$1);
var name = cljs.core.nth.call(null,vec__18290,(0),null);
var map__18291 = cljs.core.nth.call(null,vec__18290,(1),null);
var map__18291__$1 = ((cljs.core.seq_QMARK_.call(null,map__18291))?cljs.core.apply.call(null,cljs.core.hash_map,map__18291):map__18291);
var arglists = cljs.core.get.call(null,map__18291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__18291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18321 = cljs.core.next.call(null,seq__18284__$1);
var G__18322 = null;
var G__18323 = (0);
var G__18324 = (0);
seq__18284 = G__18321;
chunk__18285 = G__18322;
count__18286 = G__18323;
i__18287 = G__18324;
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
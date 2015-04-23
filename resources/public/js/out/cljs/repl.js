// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4126__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__19355_19367 = cljs.core.seq(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__19356_19368 = null;
var count__19357_19369 = (0);
var i__19358_19370 = (0);
while(true){
if((i__19358_19370 < count__19357_19369)){
var f_19371 = chunk__19356_19368.cljs$core$IIndexed$_nth$arity$2(null,i__19358_19370);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_19371], 0));

var G__19372 = seq__19355_19367;
var G__19373 = chunk__19356_19368;
var G__19374 = count__19357_19369;
var G__19375 = (i__19358_19370 + (1));
seq__19355_19367 = G__19372;
chunk__19356_19368 = G__19373;
count__19357_19369 = G__19374;
i__19358_19370 = G__19375;
continue;
} else {
var temp__4126__auto___19376 = cljs.core.seq(seq__19355_19367);
if(temp__4126__auto___19376){
var seq__19355_19377__$1 = temp__4126__auto___19376;
if(cljs.core.chunked_seq_QMARK_(seq__19355_19377__$1)){
var c__4884__auto___19378 = cljs.core.chunk_first(seq__19355_19377__$1);
var G__19379 = cljs.core.chunk_rest(seq__19355_19377__$1);
var G__19380 = c__4884__auto___19378;
var G__19381 = cljs.core.count(c__4884__auto___19378);
var G__19382 = (0);
seq__19355_19367 = G__19379;
chunk__19356_19368 = G__19380;
count__19357_19369 = G__19381;
i__19358_19370 = G__19382;
continue;
} else {
var f_19383 = cljs.core.first(seq__19355_19377__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_19383], 0));

var G__19384 = cljs.core.next(seq__19355_19377__$1);
var G__19385 = null;
var G__19386 = (0);
var G__19387 = (0);
seq__19355_19367 = G__19384;
chunk__19356_19368 = G__19385;
count__19357_19369 = G__19386;
i__19358_19370 = G__19387;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4099__auto__ = cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m)], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.second(cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m))], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.constant$keyword$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.constant$keyword$url)){
if(cljs.core.truth_(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__19359 = cljs.core.seq(cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__19360 = null;
var count__19361 = (0);
var i__19362 = (0);
while(true){
if((i__19362 < count__19361)){
var vec__19363 = chunk__19360.cljs$core$IIndexed$_nth$arity$2(null,i__19362);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19363,(0),null);
var map__19364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19363,(1),null);
var map__19364__$1 = ((cljs.core.seq_QMARK_(map__19364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19364):map__19364);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19364__$1,cljs.core.constant$keyword$arglists);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19364__$1,cljs.core.constant$keyword$doc);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__19388 = seq__19359;
var G__19389 = chunk__19360;
var G__19390 = count__19361;
var G__19391 = (i__19362 + (1));
seq__19359 = G__19388;
chunk__19360 = G__19389;
count__19361 = G__19390;
i__19362 = G__19391;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__19359);
if(temp__4126__auto__){
var seq__19359__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19359__$1)){
var c__4884__auto__ = cljs.core.chunk_first(seq__19359__$1);
var G__19392 = cljs.core.chunk_rest(seq__19359__$1);
var G__19393 = c__4884__auto__;
var G__19394 = cljs.core.count(c__4884__auto__);
var G__19395 = (0);
seq__19359 = G__19392;
chunk__19360 = G__19393;
count__19361 = G__19394;
i__19362 = G__19395;
continue;
} else {
var vec__19365 = cljs.core.first(seq__19359__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19365,(0),null);
var map__19366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19365,(1),null);
var map__19366__$1 = ((cljs.core.seq_QMARK_(map__19366))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19366):map__19366);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19366__$1,cljs.core.constant$keyword$arglists);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19366__$1,cljs.core.constant$keyword$doc);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__19396 = cljs.core.next(seq__19359__$1);
var G__19397 = null;
var G__19398 = (0);
var G__19399 = (0);
seq__19359 = G__19396;
chunk__19360 = G__19397;
count__19361 = G__19398;
i__19362 = G__19399;
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

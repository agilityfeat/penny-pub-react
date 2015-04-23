// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !(((goog["nodeGlobalRequire"]) == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
return cljs.core.constant$keyword$html;
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
return cljs.core.constant$keyword$node;
} else {
return cljs.core.constant$keyword$html;

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))?cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0)):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var G__19407 = arguments.length;
switch (G__19407) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__19408 = cljs.core._EQ_;
var expr__19409 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?level:cljs.core.constant$keyword$info);
if(cljs.core.truth_((function (){var G__19411 = cljs.core.constant$keyword$warn;
var G__19412 = expr__19409;
return (pred__19408.cljs$core$IFn$_invoke$arity$2 ? pred__19408.cljs$core$IFn$_invoke$arity$2(G__19411,G__19412) : pred__19408.call(null,G__19411,G__19412));
})())){
return ((function (pred__19408,expr__19409){
return (function (p1__19402_SHARP_){
return console.warn(p1__19402_SHARP_);
});
;})(pred__19408,expr__19409))
} else {
if(cljs.core.truth_((function (){var G__19413 = cljs.core.constant$keyword$debug;
var G__19414 = expr__19409;
return (pred__19408.cljs$core$IFn$_invoke$arity$2 ? pred__19408.cljs$core$IFn$_invoke$arity$2(G__19413,G__19414) : pred__19408.call(null,G__19413,G__19414));
})())){
return ((function (pred__19408,expr__19409){
return (function (p1__19403_SHARP_){
return console.debug(p1__19403_SHARP_);
});
;})(pred__19408,expr__19409))
} else {
if(cljs.core.truth_((function (){var G__19415 = cljs.core.constant$keyword$error;
var G__19416 = expr__19409;
return (pred__19408.cljs$core$IFn$_invoke$arity$2 ? pred__19408.cljs$core$IFn$_invoke$arity$2(G__19415,G__19416) : pred__19408.call(null,G__19415,G__19416));
})())){
return ((function (pred__19408,expr__19409){
return (function (p1__19404_SHARP_){
return console.error(p1__19404_SHARP_);
});
;})(pred__19408,expr__19409))
} else {
return ((function (pred__19408,expr__19409){
return (function (p1__19405_SHARP_){
return console.log(p1__19405_SHARP_);
});
;})(pred__19408,expr__19409))
}
}
}
})();
var G__19417 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19417) : f.call(null,G__19417));
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

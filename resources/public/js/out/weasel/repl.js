// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('weasel.impls.websocket');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
weasel.repl.ws_connection = (function (){var G__17365 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17365) : cljs.core.atom.call(null,G__17365));
})();
weasel.repl.alive_QMARK_ = (function weasel$repl$alive_QMARK_(){

return !(((function (){var G__17367 = weasel.repl.ws_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17367) : cljs.core.deref.call(null,G__17367));
})() == null));
});
if(typeof weasel.repl.process_message !== 'undefined'){
} else {
weasel.repl.process_message = (function (){var method_table__4994__auto__ = (function (){var G__17368 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17368) : cljs.core.atom.call(null,G__17368));
})();
var prefer_table__4995__auto__ = (function (){var G__17369 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17369) : cljs.core.atom.call(null,G__17369));
})();
var method_cache__4996__auto__ = (function (){var G__17370 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17370) : cljs.core.atom.call(null,G__17370));
})();
var cached_hierarchy__4997__auto__ = (function (){var G__17371 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17371) : cljs.core.atom.call(null,G__17371));
})();
var hierarchy__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("weasel.repl","process-message"),cljs.core.constant$keyword$op,cljs.core.constant$keyword$default,hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$error,(function (message){
return console.error([cljs.core.str("Websocket REPL error "),cljs.core.str(cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$eval_DASH_js,(function (message){
var code = cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$result,cljs.core.constant$keyword$value,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$success,cljs.core.constant$keyword$value,[cljs.core.str(eval(code))].join('')], null);
}catch (e17372){if((e17372 instanceof Error)){
var e = e17372;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$exception,cljs.core.constant$keyword$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$stacktrace,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e17372;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$exception,cljs.core.constant$keyword$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$stacktrace,"No stacktrace available."], null);

}
}})()], null);
}));
weasel.repl.repl_print = (function weasel$repl$repl_print(){
var argseq__5139__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(argseq__5139__auto__);
});

weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4124__auto__ = (function (){var G__17374 = weasel.repl.ws_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17374) : cljs.core.deref.call(null,G__17374));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var conn = temp__4124__auto__;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((function (){var G__17375 = weasel.repl.ws_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17375) : cljs.core.deref.call(null,G__17375));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$print,cljs.core.constant$keyword$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)], null));
} else {
return null;
}
});

weasel.repl.repl_print.cljs$lang$maxFixedArity = (0);

weasel.repl.repl_print.cljs$lang$applyTo = (function (seq17373){
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17373));
});
weasel.repl.console_print = (function weasel$repl$console_print(){
var argseq__5139__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(argseq__5139__auto__);
});

weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});

weasel.repl.console_print.cljs$lang$maxFixedArity = (0);

weasel.repl.console_print.cljs$lang$applyTo = (function (seq17376){
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17376));
});
weasel.repl.print_fns = new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$repl,weasel.repl.repl_print,cljs.core.constant$keyword$console,weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$repl,null,cljs.core.constant$keyword$console,null], null), null),(function() { 
var G__17377__delegate = function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.console_print,args);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.repl_print,args);
};
var G__17377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17378__i = 0, G__17378__a = new Array(arguments.length -  0);
while (G__17378__i < G__17378__a.length) {G__17378__a[G__17378__i] = arguments[G__17378__i + 0]; ++G__17378__i;}
  args = new cljs.core.IndexedSeq(G__17378__a,0);
} 
return G__17377__delegate.call(this,args);};
G__17377.cljs$lang$maxFixedArity = 0;
G__17377.cljs$lang$applyTo = (function (arglist__17379){
var args = cljs.core.seq(arglist__17379);
return G__17377__delegate(args);
});
G__17377.cljs$core$IFn$_invoke$arity$variadic = G__17377__delegate;
return G__17377;
})()
], true, false);
weasel.repl.connect = (function weasel$repl$connect(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (repl_server_url,p__17382){
var map__17383 = p__17382;
var map__17383__$1 = ((cljs.core.seq_QMARK_(map__17383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17383):map__17383);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17383__$1,cljs.core.constant$keyword$print,cljs.core.constant$keyword$repl);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17383__$1,cljs.core.constant$keyword$on_DASH_close);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17383__$1,cljs.core.constant$keyword$on_DASH_error);
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17383__$1,cljs.core.constant$keyword$on_DASH_open);
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17383__$1,cljs.core.constant$keyword$verbose,true);
var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$opened,((function (repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
cljs.core.set_print_fn_BANG_(((cljs.core.fn_QMARK_(print))?print:cljs.core.get.cljs$core$IFn$_invoke$arity$2(weasel.repl.print_fns,print)));

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$ready], null)], 0)));

if(cljs.core.truth_(verbose)){
console.info("Opened Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_open)){
return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else {
return null;
}
});})(repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$message,((function (repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
var map__17384 = cljs.reader.read_string(evt.message);
var map__17384__$1 = ((cljs.core.seq_QMARK_(map__17384))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17384):map__17384);
var message = map__17384__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,cljs.core.constant$keyword$op);
var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__17385 = message;
return (weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(G__17385) : weasel.repl.process_message.call(null,G__17385));
})()], 0));
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$closed,((function (repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
var G__17386_17389 = weasel.repl.ws_connection;
var G__17387_17390 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17386_17389,G__17387_17390) : cljs.core.reset_BANG_.call(null,G__17386_17389,G__17387_17390));

if(cljs.core.truth_(verbose)){
console.info("Closed Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
});})(repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$error,((function (repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
if(cljs.core.truth_(verbose)){
console.error("WebSocket error",evt);
} else {
}

if(cljs.core.fn_QMARK_(on_error)){
var G__17388 = evt;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__17388) : on_error.call(null,G__17388));
} else {
return null;
}
});})(repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose))
);

if(cljs.core.truth_(COMPILED)){
} else {
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gntp,repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp,repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose))
,cljs.core.js_keys(gntp)));
})();

goog.isProvided_ = ((function (repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose){
return (function (_){
return false;
});})(repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose))
;

goog.require = ((function (repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose){
return (function (name,reload){
if(cljs.core.truth_((function (){var or__4099__auto__ = !(cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4099__auto__){
return or__4099__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4099__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return document.body.appendChild((function (){var script = document.createElement("script");
script.type = "text/javascript";

script.src = [cljs.core.str(goog.basePath),cljs.core.str((goog.dependencies_.nameToPath[name]))].join('');

return script;
})());
} else {
return null;
}
});})(repl_connection,map__17383,map__17383__$1,print,on_close,on_error,on_open,verbose))
;
}

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
});

weasel.repl.connect.cljs$lang$maxFixedArity = (1);

weasel.repl.connect.cljs$lang$applyTo = (function (seq17380){
var G__17381 = cljs.core.first(seq17380);
var seq17380__$1 = cljs.core.next(seq17380);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(G__17381,seq17380__$1);
});

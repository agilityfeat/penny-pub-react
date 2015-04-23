// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.events');

clojure.browser.event.IEventType = (function (){var obj17394 = {};
return obj17394;
})();

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.clojure$browser$event$IEventType$event_types$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (clojure.browser.event.event_types[(function (){var G__17398 = x__4735__auto__;
return goog.typeOf(G__17398);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
})().call(null,this$);
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17399){
var vec__17400 = p__17399;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17401){
var vec__17402 = p__17401;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function clojure$browser$event$listen(){
var G__17404 = arguments.length;
switch (G__17404) {
case 3:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__17405 = src;
var G__17406 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__17407 = fn;
var G__17408 = capture_QMARK_;
return goog.events.listen(G__17405,G__17406,G__17407,G__17408);
});

clojure.browser.event.listen.cljs$lang$maxFixedArity = 4;
clojure.browser.event.listen_once = (function clojure$browser$event$listen_once(){
var G__17411 = arguments.length;
switch (G__17411) {
case 3:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__17412 = src;
var G__17413 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__17414 = fn;
var G__17415 = capture_QMARK_;
return goog.events.listenOnce(G__17412,G__17413,G__17414,G__17415);
});

clojure.browser.event.listen_once.cljs$lang$maxFixedArity = 4;
clojure.browser.event.unlisten = (function clojure$browser$event$unlisten(){
var G__17418 = arguments.length;
switch (G__17418) {
case 3:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__17419 = src;
var G__17420 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__17421 = fn;
var G__17422 = capture_QMARK_;
return goog.events.unlisten(G__17419,G__17420,G__17421,G__17422);
});

clojure.browser.event.unlisten.cljs$lang$maxFixedArity = 4;
clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
var G__17425 = key;
return goog.events.unlistenByKey(G__17425);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
var G__17428 = src;
var G__17429 = event;
return goog.events.dispatchEvent(G__17428,G__17429);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
var G__17431 = e;
return goog.events.expose(G__17431);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});

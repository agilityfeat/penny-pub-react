// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('weasel.impls.websocket');
goog.require('cljs.core');
goog.require('goog.net.WebSocket');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');

weasel.impls.websocket.IWebSocket = (function (){var obj17776 = {};
return obj17776;
})();

weasel.impls.websocket.open_QMARK_ = (function weasel$impls$websocket$open_QMARK_(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.weasel$impls$websocket$IWebSocket$open_QMARK_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.weasel$impls$websocket$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (weasel.impls.websocket.open_QMARK_[(function (){var G__17780 = x__4735__auto__;
return goog.typeOf(G__17780);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (weasel.impls.websocket.open_QMARK_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("IWebSocket.open?",this$);
}
}
})().call(null,this$);
}
});

weasel.impls.websocket.websocket_connection = (function weasel$impls$websocket$websocket_connection(){
var G__17782 = arguments.length;
switch (G__17782) {
case 0:
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2(null,null);
});

weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2(auto_reconnect_QMARK_,null);
});

weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});

weasel.impls.websocket.websocket_connection.cljs$lang$maxFixedArity = 2;
goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = true;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17784){
var vec__17785 = p__17784;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17785,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.WebSocket.EventType)], 0))));
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = true;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.weasel$impls$websocket$IWebSocket$ = true;

goog.net.WebSocket.prototype.weasel$impls$websocket$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});

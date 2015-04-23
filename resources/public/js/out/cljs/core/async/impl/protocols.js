// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj22939 = {};
return obj22939;
})();

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((function (){var and__4087__auto__ = port;
if(and__4087__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__4735__auto__ = (((port == null))?null:port);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__22943 = x__4735__auto__;
return goog.typeOf(G__22943);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj22945 = {};
return obj22945;
})();

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 * Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((function (){var and__4087__auto__ = port;
if(and__4087__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__4087__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__4735__auto__ = (((port == null))?null:port);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__22949 = x__4735__auto__;
return goog.typeOf(G__22949);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj22951 = {};
return obj22951;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((function (){var and__4087__auto__ = chan;
if(and__4087__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__4735__auto__ = (((chan == null))?null:chan);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__22955 = x__4735__auto__;
return goog.typeOf(G__22955);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((function (){var and__4087__auto__ = chan;
if(and__4087__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__4735__auto__ = (((chan == null))?null:chan);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__22959 = x__4735__auto__;
return goog.typeOf(G__22959);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj22961 = {};
return obj22961;
})();

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((function (){var and__4087__auto__ = h;
if(and__4087__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__4735__auto__ = (((h == null))?null:h);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__22965 = x__4735__auto__;
return goog.typeOf(G__22965);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((function (){var and__4087__auto__ = h;
if(and__4087__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__4087__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__4735__auto__ = (((h == null))?null:h);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__22969 = x__4735__auto__;
return goog.typeOf(G__22969);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj22971 = {};
return obj22971;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((function (){var and__4087__auto__ = b;
if(and__4087__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__4735__auto__ = (((b == null))?null:b);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__22975 = x__4735__auto__;
return goog.typeOf(G__22975);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((function (){var and__4087__auto__ = b;
if(and__4087__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__4735__auto__ = (((b == null))?null:b);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__22979 = x__4735__auto__;
return goog.typeOf(G__22979);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((function (){var and__4087__auto__ = b;
if(and__4087__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__4735__auto__ = (((b == null))?null:b);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[(function (){var G__22983 = x__4735__auto__;
return goog.typeOf(G__22983);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(){
var G__22985 = arguments.length;
switch (G__22985) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))], 0)))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj22988 = {};
return obj22988;
})();


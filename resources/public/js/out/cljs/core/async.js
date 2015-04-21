// Compiled by ClojureScript 0.0-3178 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t19052 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19052 = (function (f,fn_handler,meta19053){
this.f = f;
this.fn_handler = fn_handler;
this.meta19053 = meta19053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19052.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19054){
var self__ = this;
var _19054__$1 = this;
return self__.meta19053;
});

cljs.core.async.t19052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19054,meta19053__$1){
var self__ = this;
var _19054__$1 = this;
return (new cljs.core.async.t19052(self__.f,self__.fn_handler,meta19053__$1));
});

cljs.core.async.t19052.cljs$lang$type = true;

cljs.core.async.t19052.cljs$lang$ctorStr = "cljs.core.async/t19052";

cljs.core.async.t19052.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t19052");
});

cljs.core.async.__GT_t19052 = (function cljs$core$async$fn_handler_$___GT_t19052(f__$1,fn_handler__$1,meta19053){
return (new cljs.core.async.t19052(f__$1,fn_handler__$1,meta19053));
});

}

return (new cljs.core.async.t19052(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__19056 = buff;
if(G__19056){
var bit__4773__auto__ = null;
if(cljs.core.truth_((function (){var or__4099__auto__ = bit__4773__auto__;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return G__19056.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19056.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19056);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19056);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__19058 = arguments.length;
switch (G__19058) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__19061 = arguments.length;
switch (G__19061) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19063 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19063);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19063,ret){
return (function (){
return fn1.call(null,val_19063);
});})(val_19063,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__19065 = arguments.length;
switch (G__19065) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4984__auto___19067 = n;
var x_19068 = (0);
while(true){
if((x_19068 < n__4984__auto___19067)){
(a[x_19068] = (0));

var G__19069 = (x_19068 + (1));
x_19068 = G__19069;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19070 = (i + (1));
i = G__19070;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19074 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19074 = (function (flag,alt_flag,meta19075){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19075 = meta19075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19074.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19076){
var self__ = this;
var _19076__$1 = this;
return self__.meta19075;
});})(flag))
;

cljs.core.async.t19074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19076,meta19075__$1){
var self__ = this;
var _19076__$1 = this;
return (new cljs.core.async.t19074(self__.flag,self__.alt_flag,meta19075__$1));
});})(flag))
;

cljs.core.async.t19074.cljs$lang$type = true;

cljs.core.async.t19074.cljs$lang$ctorStr = "cljs.core.async/t19074";

cljs.core.async.t19074.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t19074");
});})(flag))
;

cljs.core.async.__GT_t19074 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t19074(flag__$1,alt_flag__$1,meta19075){
return (new cljs.core.async.t19074(flag__$1,alt_flag__$1,meta19075));
});})(flag))
;

}

return (new cljs.core.async.t19074(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t19080 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19080 = (function (cb,flag,alt_handler,meta19081){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19081 = meta19081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19080.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19082){
var self__ = this;
var _19082__$1 = this;
return self__.meta19081;
});

cljs.core.async.t19080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19082,meta19081__$1){
var self__ = this;
var _19082__$1 = this;
return (new cljs.core.async.t19080(self__.cb,self__.flag,self__.alt_handler,meta19081__$1));
});

cljs.core.async.t19080.cljs$lang$type = true;

cljs.core.async.t19080.cljs$lang$ctorStr = "cljs.core.async/t19080";

cljs.core.async.t19080.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t19080");
});

cljs.core.async.__GT_t19080 = (function cljs$core$async$alt_handler_$___GT_t19080(cb__$1,flag__$1,alt_handler__$1,meta19081){
return (new cljs.core.async.t19080(cb__$1,flag__$1,alt_handler__$1,meta19081));
});

}

return (new cljs.core.async.t19080(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19083_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19083_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19084_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19084_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4099__auto__ = wport;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19085 = (i + (1));
i = G__19085;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4099__auto__ = ret;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4087__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4087__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19088){
var map__19089 = p__19088;
var map__19089__$1 = ((cljs.core.seq_QMARK_.call(null,map__19089))?cljs.core.apply.call(null,cljs.core.hash_map,map__19089):map__19089);
var opts = map__19089__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19086){
var G__19087 = cljs.core.first.call(null,seq19086);
var seq19086__$1 = cljs.core.next.call(null,seq19086);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19087,seq19086__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__19091 = arguments.length;
switch (G__19091) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7090__auto___19140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___19140){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___19140){
return (function (state_19115){
var state_val_19116 = (state_19115[(1)]);
if((state_val_19116 === (7))){
var inst_19111 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
var statearr_19117_19141 = state_19115__$1;
(statearr_19117_19141[(2)] = inst_19111);

(statearr_19117_19141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (1))){
var state_19115__$1 = state_19115;
var statearr_19118_19142 = state_19115__$1;
(statearr_19118_19142[(2)] = null);

(statearr_19118_19142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (4))){
var inst_19094 = (state_19115[(7)]);
var inst_19094__$1 = (state_19115[(2)]);
var inst_19095 = (inst_19094__$1 == null);
var state_19115__$1 = (function (){var statearr_19119 = state_19115;
(statearr_19119[(7)] = inst_19094__$1);

return statearr_19119;
})();
if(cljs.core.truth_(inst_19095)){
var statearr_19120_19143 = state_19115__$1;
(statearr_19120_19143[(1)] = (5));

} else {
var statearr_19121_19144 = state_19115__$1;
(statearr_19121_19144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (13))){
var state_19115__$1 = state_19115;
var statearr_19122_19145 = state_19115__$1;
(statearr_19122_19145[(2)] = null);

(statearr_19122_19145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (6))){
var inst_19094 = (state_19115[(7)]);
var state_19115__$1 = state_19115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19115__$1,(11),to,inst_19094);
} else {
if((state_val_19116 === (3))){
var inst_19113 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19115__$1,inst_19113);
} else {
if((state_val_19116 === (12))){
var state_19115__$1 = state_19115;
var statearr_19123_19146 = state_19115__$1;
(statearr_19123_19146[(2)] = null);

(statearr_19123_19146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (2))){
var state_19115__$1 = state_19115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19115__$1,(4),from);
} else {
if((state_val_19116 === (11))){
var inst_19104 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
if(cljs.core.truth_(inst_19104)){
var statearr_19124_19147 = state_19115__$1;
(statearr_19124_19147[(1)] = (12));

} else {
var statearr_19125_19148 = state_19115__$1;
(statearr_19125_19148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (9))){
var state_19115__$1 = state_19115;
var statearr_19126_19149 = state_19115__$1;
(statearr_19126_19149[(2)] = null);

(statearr_19126_19149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (5))){
var state_19115__$1 = state_19115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19127_19150 = state_19115__$1;
(statearr_19127_19150[(1)] = (8));

} else {
var statearr_19128_19151 = state_19115__$1;
(statearr_19128_19151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (14))){
var inst_19109 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
var statearr_19129_19152 = state_19115__$1;
(statearr_19129_19152[(2)] = inst_19109);

(statearr_19129_19152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (10))){
var inst_19101 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
var statearr_19130_19153 = state_19115__$1;
(statearr_19130_19153[(2)] = inst_19101);

(statearr_19130_19153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (8))){
var inst_19098 = cljs.core.async.close_BANG_.call(null,to);
var state_19115__$1 = state_19115;
var statearr_19131_19154 = state_19115__$1;
(statearr_19131_19154[(2)] = inst_19098);

(statearr_19131_19154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___19140))
;
return ((function (switch__7028__auto__,c__7090__auto___19140){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_19135 = [null,null,null,null,null,null,null,null];
(statearr_19135[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_19135[(1)] = (1));

return statearr_19135;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_19115){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19136){if((e19136 instanceof Object)){
var ex__7032__auto__ = e19136;
var statearr_19137_19155 = state_19115;
(statearr_19137_19155[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19156 = state_19115;
state_19115 = G__19156;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_19115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_19115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___19140))
})();
var state__7092__auto__ = (function (){var statearr_19138 = f__7091__auto__.call(null);
(statearr_19138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___19140);

return statearr_19138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___19140))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19340){
var vec__19341 = p__19340;
var v = cljs.core.nth.call(null,vec__19341,(0),null);
var p = cljs.core.nth.call(null,vec__19341,(1),null);
var job = vec__19341;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7090__auto___19523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___19523,res,vec__19341,v,p,job,jobs,results){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___19523,res,vec__19341,v,p,job,jobs,results){
return (function (state_19346){
var state_val_19347 = (state_19346[(1)]);
if((state_val_19347 === (2))){
var inst_19343 = (state_19346[(2)]);
var inst_19344 = cljs.core.async.close_BANG_.call(null,res);
var state_19346__$1 = (function (){var statearr_19348 = state_19346;
(statearr_19348[(7)] = inst_19343);

return statearr_19348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19346__$1,inst_19344);
} else {
if((state_val_19347 === (1))){
var state_19346__$1 = state_19346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19346__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7090__auto___19523,res,vec__19341,v,p,job,jobs,results))
;
return ((function (switch__7028__auto__,c__7090__auto___19523,res,vec__19341,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_19352 = [null,null,null,null,null,null,null,null];
(statearr_19352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_19352[(1)] = (1));

return statearr_19352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_19346){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19353){if((e19353 instanceof Object)){
var ex__7032__auto__ = e19353;
var statearr_19354_19524 = state_19346;
(statearr_19354_19524[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19525 = state_19346;
state_19346 = G__19525;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_19346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_19346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___19523,res,vec__19341,v,p,job,jobs,results))
})();
var state__7092__auto__ = (function (){var statearr_19355 = f__7091__auto__.call(null);
(statearr_19355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___19523);

return statearr_19355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___19523,res,vec__19341,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19356){
var vec__19357 = p__19356;
var v = cljs.core.nth.call(null,vec__19357,(0),null);
var p = cljs.core.nth.call(null,vec__19357,(1),null);
var job = vec__19357;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4984__auto___19526 = n;
var __19527 = (0);
while(true){
if((__19527 < n__4984__auto___19526)){
var G__19358_19528 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19358_19528) {
case "async":
var c__7090__auto___19530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19527,c__7090__auto___19530,G__19358_19528,n__4984__auto___19526,jobs,results,process,async){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (__19527,c__7090__auto___19530,G__19358_19528,n__4984__auto___19526,jobs,results,process,async){
return (function (state_19371){
var state_val_19372 = (state_19371[(1)]);
if((state_val_19372 === (7))){
var inst_19367 = (state_19371[(2)]);
var state_19371__$1 = state_19371;
var statearr_19373_19531 = state_19371__$1;
(statearr_19373_19531[(2)] = inst_19367);

(statearr_19373_19531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (6))){
var state_19371__$1 = state_19371;
var statearr_19374_19532 = state_19371__$1;
(statearr_19374_19532[(2)] = null);

(statearr_19374_19532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (5))){
var state_19371__$1 = state_19371;
var statearr_19375_19533 = state_19371__$1;
(statearr_19375_19533[(2)] = null);

(statearr_19375_19533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (4))){
var inst_19361 = (state_19371[(2)]);
var inst_19362 = async.call(null,inst_19361);
var state_19371__$1 = state_19371;
if(cljs.core.truth_(inst_19362)){
var statearr_19376_19534 = state_19371__$1;
(statearr_19376_19534[(1)] = (5));

} else {
var statearr_19377_19535 = state_19371__$1;
(statearr_19377_19535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (3))){
var inst_19369 = (state_19371[(2)]);
var state_19371__$1 = state_19371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19371__$1,inst_19369);
} else {
if((state_val_19372 === (2))){
var state_19371__$1 = state_19371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19371__$1,(4),jobs);
} else {
if((state_val_19372 === (1))){
var state_19371__$1 = state_19371;
var statearr_19378_19536 = state_19371__$1;
(statearr_19378_19536[(2)] = null);

(statearr_19378_19536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19527,c__7090__auto___19530,G__19358_19528,n__4984__auto___19526,jobs,results,process,async))
;
return ((function (__19527,switch__7028__auto__,c__7090__auto___19530,G__19358_19528,n__4984__auto___19526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_19382 = [null,null,null,null,null,null,null];
(statearr_19382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_19382[(1)] = (1));

return statearr_19382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_19371){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19383){if((e19383 instanceof Object)){
var ex__7032__auto__ = e19383;
var statearr_19384_19537 = state_19371;
(statearr_19384_19537[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19538 = state_19371;
state_19371 = G__19538;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_19371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_19371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(__19527,switch__7028__auto__,c__7090__auto___19530,G__19358_19528,n__4984__auto___19526,jobs,results,process,async))
})();
var state__7092__auto__ = (function (){var statearr_19385 = f__7091__auto__.call(null);
(statearr_19385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___19530);

return statearr_19385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(__19527,c__7090__auto___19530,G__19358_19528,n__4984__auto___19526,jobs,results,process,async))
);


break;
case "compute":
var c__7090__auto___19539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19527,c__7090__auto___19539,G__19358_19528,n__4984__auto___19526,jobs,results,process,async){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (__19527,c__7090__auto___19539,G__19358_19528,n__4984__auto___19526,jobs,results,process,async){
return (function (state_19398){
var state_val_19399 = (state_19398[(1)]);
if((state_val_19399 === (7))){
var inst_19394 = (state_19398[(2)]);
var state_19398__$1 = state_19398;
var statearr_19400_19540 = state_19398__$1;
(statearr_19400_19540[(2)] = inst_19394);

(statearr_19400_19540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19399 === (6))){
var state_19398__$1 = state_19398;
var statearr_19401_19541 = state_19398__$1;
(statearr_19401_19541[(2)] = null);

(statearr_19401_19541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19399 === (5))){
var state_19398__$1 = state_19398;
var statearr_19402_19542 = state_19398__$1;
(statearr_19402_19542[(2)] = null);

(statearr_19402_19542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19399 === (4))){
var inst_19388 = (state_19398[(2)]);
var inst_19389 = process.call(null,inst_19388);
var state_19398__$1 = state_19398;
if(cljs.core.truth_(inst_19389)){
var statearr_19403_19543 = state_19398__$1;
(statearr_19403_19543[(1)] = (5));

} else {
var statearr_19404_19544 = state_19398__$1;
(statearr_19404_19544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19399 === (3))){
var inst_19396 = (state_19398[(2)]);
var state_19398__$1 = state_19398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19398__$1,inst_19396);
} else {
if((state_val_19399 === (2))){
var state_19398__$1 = state_19398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19398__$1,(4),jobs);
} else {
if((state_val_19399 === (1))){
var state_19398__$1 = state_19398;
var statearr_19405_19545 = state_19398__$1;
(statearr_19405_19545[(2)] = null);

(statearr_19405_19545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19527,c__7090__auto___19539,G__19358_19528,n__4984__auto___19526,jobs,results,process,async))
;
return ((function (__19527,switch__7028__auto__,c__7090__auto___19539,G__19358_19528,n__4984__auto___19526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_19409 = [null,null,null,null,null,null,null];
(statearr_19409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_19409[(1)] = (1));

return statearr_19409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_19398){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19410){if((e19410 instanceof Object)){
var ex__7032__auto__ = e19410;
var statearr_19411_19546 = state_19398;
(statearr_19411_19546[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19547 = state_19398;
state_19398 = G__19547;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_19398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_19398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(__19527,switch__7028__auto__,c__7090__auto___19539,G__19358_19528,n__4984__auto___19526,jobs,results,process,async))
})();
var state__7092__auto__ = (function (){var statearr_19412 = f__7091__auto__.call(null);
(statearr_19412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___19539);

return statearr_19412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(__19527,c__7090__auto___19539,G__19358_19528,n__4984__auto___19526,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19548 = (__19527 + (1));
__19527 = G__19548;
continue;
} else {
}
break;
}

var c__7090__auto___19549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___19549,jobs,results,process,async){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___19549,jobs,results,process,async){
return (function (state_19434){
var state_val_19435 = (state_19434[(1)]);
if((state_val_19435 === (9))){
var inst_19427 = (state_19434[(2)]);
var state_19434__$1 = (function (){var statearr_19436 = state_19434;
(statearr_19436[(7)] = inst_19427);

return statearr_19436;
})();
var statearr_19437_19550 = state_19434__$1;
(statearr_19437_19550[(2)] = null);

(statearr_19437_19550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19435 === (8))){
var inst_19420 = (state_19434[(8)]);
var inst_19425 = (state_19434[(2)]);
var state_19434__$1 = (function (){var statearr_19438 = state_19434;
(statearr_19438[(9)] = inst_19425);

return statearr_19438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19434__$1,(9),results,inst_19420);
} else {
if((state_val_19435 === (7))){
var inst_19430 = (state_19434[(2)]);
var state_19434__$1 = state_19434;
var statearr_19439_19551 = state_19434__$1;
(statearr_19439_19551[(2)] = inst_19430);

(statearr_19439_19551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19435 === (6))){
var inst_19420 = (state_19434[(8)]);
var inst_19415 = (state_19434[(10)]);
var inst_19420__$1 = cljs.core.async.chan.call(null,(1));
var inst_19421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19422 = [inst_19415,inst_19420__$1];
var inst_19423 = (new cljs.core.PersistentVector(null,2,(5),inst_19421,inst_19422,null));
var state_19434__$1 = (function (){var statearr_19440 = state_19434;
(statearr_19440[(8)] = inst_19420__$1);

return statearr_19440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19434__$1,(8),jobs,inst_19423);
} else {
if((state_val_19435 === (5))){
var inst_19418 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19434__$1 = state_19434;
var statearr_19441_19552 = state_19434__$1;
(statearr_19441_19552[(2)] = inst_19418);

(statearr_19441_19552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19435 === (4))){
var inst_19415 = (state_19434[(10)]);
var inst_19415__$1 = (state_19434[(2)]);
var inst_19416 = (inst_19415__$1 == null);
var state_19434__$1 = (function (){var statearr_19442 = state_19434;
(statearr_19442[(10)] = inst_19415__$1);

return statearr_19442;
})();
if(cljs.core.truth_(inst_19416)){
var statearr_19443_19553 = state_19434__$1;
(statearr_19443_19553[(1)] = (5));

} else {
var statearr_19444_19554 = state_19434__$1;
(statearr_19444_19554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19435 === (3))){
var inst_19432 = (state_19434[(2)]);
var state_19434__$1 = state_19434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19434__$1,inst_19432);
} else {
if((state_val_19435 === (2))){
var state_19434__$1 = state_19434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19434__$1,(4),from);
} else {
if((state_val_19435 === (1))){
var state_19434__$1 = state_19434;
var statearr_19445_19555 = state_19434__$1;
(statearr_19445_19555[(2)] = null);

(statearr_19445_19555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___19549,jobs,results,process,async))
;
return ((function (switch__7028__auto__,c__7090__auto___19549,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_19449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_19449[(1)] = (1));

return statearr_19449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_19434){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19450){if((e19450 instanceof Object)){
var ex__7032__auto__ = e19450;
var statearr_19451_19556 = state_19434;
(statearr_19451_19556[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19557 = state_19434;
state_19434 = G__19557;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_19434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_19434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___19549,jobs,results,process,async))
})();
var state__7092__auto__ = (function (){var statearr_19452 = f__7091__auto__.call(null);
(statearr_19452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___19549);

return statearr_19452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___19549,jobs,results,process,async))
);


var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__,jobs,results,process,async){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__,jobs,results,process,async){
return (function (state_19490){
var state_val_19491 = (state_19490[(1)]);
if((state_val_19491 === (7))){
var inst_19486 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19492_19558 = state_19490__$1;
(statearr_19492_19558[(2)] = inst_19486);

(statearr_19492_19558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (20))){
var state_19490__$1 = state_19490;
var statearr_19493_19559 = state_19490__$1;
(statearr_19493_19559[(2)] = null);

(statearr_19493_19559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (1))){
var state_19490__$1 = state_19490;
var statearr_19494_19560 = state_19490__$1;
(statearr_19494_19560[(2)] = null);

(statearr_19494_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (4))){
var inst_19455 = (state_19490[(7)]);
var inst_19455__$1 = (state_19490[(2)]);
var inst_19456 = (inst_19455__$1 == null);
var state_19490__$1 = (function (){var statearr_19495 = state_19490;
(statearr_19495[(7)] = inst_19455__$1);

return statearr_19495;
})();
if(cljs.core.truth_(inst_19456)){
var statearr_19496_19561 = state_19490__$1;
(statearr_19496_19561[(1)] = (5));

} else {
var statearr_19497_19562 = state_19490__$1;
(statearr_19497_19562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (15))){
var inst_19468 = (state_19490[(8)]);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19490__$1,(18),to,inst_19468);
} else {
if((state_val_19491 === (21))){
var inst_19481 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19498_19563 = state_19490__$1;
(statearr_19498_19563[(2)] = inst_19481);

(statearr_19498_19563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (13))){
var inst_19483 = (state_19490[(2)]);
var state_19490__$1 = (function (){var statearr_19499 = state_19490;
(statearr_19499[(9)] = inst_19483);

return statearr_19499;
})();
var statearr_19500_19564 = state_19490__$1;
(statearr_19500_19564[(2)] = null);

(statearr_19500_19564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (6))){
var inst_19455 = (state_19490[(7)]);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19490__$1,(11),inst_19455);
} else {
if((state_val_19491 === (17))){
var inst_19476 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
if(cljs.core.truth_(inst_19476)){
var statearr_19501_19565 = state_19490__$1;
(statearr_19501_19565[(1)] = (19));

} else {
var statearr_19502_19566 = state_19490__$1;
(statearr_19502_19566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (3))){
var inst_19488 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19490__$1,inst_19488);
} else {
if((state_val_19491 === (12))){
var inst_19465 = (state_19490[(10)]);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19490__$1,(14),inst_19465);
} else {
if((state_val_19491 === (2))){
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19490__$1,(4),results);
} else {
if((state_val_19491 === (19))){
var state_19490__$1 = state_19490;
var statearr_19503_19567 = state_19490__$1;
(statearr_19503_19567[(2)] = null);

(statearr_19503_19567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (11))){
var inst_19465 = (state_19490[(2)]);
var state_19490__$1 = (function (){var statearr_19504 = state_19490;
(statearr_19504[(10)] = inst_19465);

return statearr_19504;
})();
var statearr_19505_19568 = state_19490__$1;
(statearr_19505_19568[(2)] = null);

(statearr_19505_19568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (9))){
var state_19490__$1 = state_19490;
var statearr_19506_19569 = state_19490__$1;
(statearr_19506_19569[(2)] = null);

(statearr_19506_19569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (5))){
var state_19490__$1 = state_19490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19507_19570 = state_19490__$1;
(statearr_19507_19570[(1)] = (8));

} else {
var statearr_19508_19571 = state_19490__$1;
(statearr_19508_19571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (14))){
var inst_19468 = (state_19490[(8)]);
var inst_19470 = (state_19490[(11)]);
var inst_19468__$1 = (state_19490[(2)]);
var inst_19469 = (inst_19468__$1 == null);
var inst_19470__$1 = cljs.core.not.call(null,inst_19469);
var state_19490__$1 = (function (){var statearr_19509 = state_19490;
(statearr_19509[(8)] = inst_19468__$1);

(statearr_19509[(11)] = inst_19470__$1);

return statearr_19509;
})();
if(inst_19470__$1){
var statearr_19510_19572 = state_19490__$1;
(statearr_19510_19572[(1)] = (15));

} else {
var statearr_19511_19573 = state_19490__$1;
(statearr_19511_19573[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (16))){
var inst_19470 = (state_19490[(11)]);
var state_19490__$1 = state_19490;
var statearr_19512_19574 = state_19490__$1;
(statearr_19512_19574[(2)] = inst_19470);

(statearr_19512_19574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (10))){
var inst_19462 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19513_19575 = state_19490__$1;
(statearr_19513_19575[(2)] = inst_19462);

(statearr_19513_19575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (18))){
var inst_19473 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19514_19576 = state_19490__$1;
(statearr_19514_19576[(2)] = inst_19473);

(statearr_19514_19576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (8))){
var inst_19459 = cljs.core.async.close_BANG_.call(null,to);
var state_19490__$1 = state_19490;
var statearr_19515_19577 = state_19490__$1;
(statearr_19515_19577[(2)] = inst_19459);

(statearr_19515_19577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto__,jobs,results,process,async))
;
return ((function (switch__7028__auto__,c__7090__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_19519 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_19519[(1)] = (1));

return statearr_19519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_19490){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19520){if((e19520 instanceof Object)){
var ex__7032__auto__ = e19520;
var statearr_19521_19578 = state_19490;
(statearr_19521_19578[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19579 = state_19490;
state_19490 = G__19579;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_19490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_19490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__,jobs,results,process,async))
})();
var state__7092__auto__ = (function (){var statearr_19522 = f__7091__auto__.call(null);
(statearr_19522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_19522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__,jobs,results,process,async))
);

return c__7090__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__19581 = arguments.length;
switch (G__19581) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__19584 = arguments.length;
switch (G__19584) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__19587 = arguments.length;
switch (G__19587) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7090__auto___19639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___19639,tc,fc){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___19639,tc,fc){
return (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (7))){
var inst_19609 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19615_19640 = state_19613__$1;
(statearr_19615_19640[(2)] = inst_19609);

(statearr_19615_19640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (1))){
var state_19613__$1 = state_19613;
var statearr_19616_19641 = state_19613__$1;
(statearr_19616_19641[(2)] = null);

(statearr_19616_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (4))){
var inst_19590 = (state_19613[(7)]);
var inst_19590__$1 = (state_19613[(2)]);
var inst_19591 = (inst_19590__$1 == null);
var state_19613__$1 = (function (){var statearr_19617 = state_19613;
(statearr_19617[(7)] = inst_19590__$1);

return statearr_19617;
})();
if(cljs.core.truth_(inst_19591)){
var statearr_19618_19642 = state_19613__$1;
(statearr_19618_19642[(1)] = (5));

} else {
var statearr_19619_19643 = state_19613__$1;
(statearr_19619_19643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (13))){
var state_19613__$1 = state_19613;
var statearr_19620_19644 = state_19613__$1;
(statearr_19620_19644[(2)] = null);

(statearr_19620_19644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (6))){
var inst_19590 = (state_19613[(7)]);
var inst_19596 = p.call(null,inst_19590);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19596)){
var statearr_19621_19645 = state_19613__$1;
(statearr_19621_19645[(1)] = (9));

} else {
var statearr_19622_19646 = state_19613__$1;
(statearr_19622_19646[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (3))){
var inst_19611 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19613__$1,inst_19611);
} else {
if((state_val_19614 === (12))){
var state_19613__$1 = state_19613;
var statearr_19623_19647 = state_19613__$1;
(statearr_19623_19647[(2)] = null);

(statearr_19623_19647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (2))){
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19613__$1,(4),ch);
} else {
if((state_val_19614 === (11))){
var inst_19590 = (state_19613[(7)]);
var inst_19600 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19613__$1,(8),inst_19600,inst_19590);
} else {
if((state_val_19614 === (9))){
var state_19613__$1 = state_19613;
var statearr_19624_19648 = state_19613__$1;
(statearr_19624_19648[(2)] = tc);

(statearr_19624_19648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (5))){
var inst_19593 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19594 = cljs.core.async.close_BANG_.call(null,fc);
var state_19613__$1 = (function (){var statearr_19625 = state_19613;
(statearr_19625[(8)] = inst_19593);

return statearr_19625;
})();
var statearr_19626_19649 = state_19613__$1;
(statearr_19626_19649[(2)] = inst_19594);

(statearr_19626_19649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (14))){
var inst_19607 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19627_19650 = state_19613__$1;
(statearr_19627_19650[(2)] = inst_19607);

(statearr_19627_19650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (10))){
var state_19613__$1 = state_19613;
var statearr_19628_19651 = state_19613__$1;
(statearr_19628_19651[(2)] = fc);

(statearr_19628_19651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (8))){
var inst_19602 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19602)){
var statearr_19629_19652 = state_19613__$1;
(statearr_19629_19652[(1)] = (12));

} else {
var statearr_19630_19653 = state_19613__$1;
(statearr_19630_19653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___19639,tc,fc))
;
return ((function (switch__7028__auto__,c__7090__auto___19639,tc,fc){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_19634 = [null,null,null,null,null,null,null,null,null];
(statearr_19634[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_19634[(1)] = (1));

return statearr_19634;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_19613){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19635){if((e19635 instanceof Object)){
var ex__7032__auto__ = e19635;
var statearr_19636_19654 = state_19613;
(statearr_19636_19654[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19655 = state_19613;
state_19613 = G__19655;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___19639,tc,fc))
})();
var state__7092__auto__ = (function (){var statearr_19637 = f__7091__auto__.call(null);
(statearr_19637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___19639);

return statearr_19637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___19639,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__){
return (function (state_19702){
var state_val_19703 = (state_19702[(1)]);
if((state_val_19703 === (7))){
var inst_19698 = (state_19702[(2)]);
var state_19702__$1 = state_19702;
var statearr_19704_19720 = state_19702__$1;
(statearr_19704_19720[(2)] = inst_19698);

(statearr_19704_19720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (6))){
var inst_19688 = (state_19702[(7)]);
var inst_19691 = (state_19702[(8)]);
var inst_19695 = f.call(null,inst_19688,inst_19691);
var inst_19688__$1 = inst_19695;
var state_19702__$1 = (function (){var statearr_19705 = state_19702;
(statearr_19705[(7)] = inst_19688__$1);

return statearr_19705;
})();
var statearr_19706_19721 = state_19702__$1;
(statearr_19706_19721[(2)] = null);

(statearr_19706_19721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (5))){
var inst_19688 = (state_19702[(7)]);
var state_19702__$1 = state_19702;
var statearr_19707_19722 = state_19702__$1;
(statearr_19707_19722[(2)] = inst_19688);

(statearr_19707_19722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (4))){
var inst_19691 = (state_19702[(8)]);
var inst_19691__$1 = (state_19702[(2)]);
var inst_19692 = (inst_19691__$1 == null);
var state_19702__$1 = (function (){var statearr_19708 = state_19702;
(statearr_19708[(8)] = inst_19691__$1);

return statearr_19708;
})();
if(cljs.core.truth_(inst_19692)){
var statearr_19709_19723 = state_19702__$1;
(statearr_19709_19723[(1)] = (5));

} else {
var statearr_19710_19724 = state_19702__$1;
(statearr_19710_19724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (3))){
var inst_19700 = (state_19702[(2)]);
var state_19702__$1 = state_19702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19702__$1,inst_19700);
} else {
if((state_val_19703 === (2))){
var state_19702__$1 = state_19702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19702__$1,(4),ch);
} else {
if((state_val_19703 === (1))){
var inst_19688 = init;
var state_19702__$1 = (function (){var statearr_19711 = state_19702;
(statearr_19711[(7)] = inst_19688);

return statearr_19711;
})();
var statearr_19712_19725 = state_19702__$1;
(statearr_19712_19725[(2)] = null);

(statearr_19712_19725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7090__auto__))
;
return ((function (switch__7028__auto__,c__7090__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7029__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7029__auto____0 = (function (){
var statearr_19716 = [null,null,null,null,null,null,null,null,null];
(statearr_19716[(0)] = cljs$core$async$reduce_$_state_machine__7029__auto__);

(statearr_19716[(1)] = (1));

return statearr_19716;
});
var cljs$core$async$reduce_$_state_machine__7029__auto____1 = (function (state_19702){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19717){if((e19717 instanceof Object)){
var ex__7032__auto__ = e19717;
var statearr_19718_19726 = state_19702;
(statearr_19718_19726[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19727 = state_19702;
state_19702 = G__19727;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7029__auto__ = function(state_19702){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7029__auto____1.call(this,state_19702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7029__auto____0;
cljs$core$async$reduce_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7029__auto____1;
return cljs$core$async$reduce_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__))
})();
var state__7092__auto__ = (function (){var statearr_19719 = f__7091__auto__.call(null);
(statearr_19719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_19719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__))
);

return c__7090__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__19729 = arguments.length;
switch (G__19729) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__){
return (function (state_19754){
var state_val_19755 = (state_19754[(1)]);
if((state_val_19755 === (7))){
var inst_19736 = (state_19754[(2)]);
var state_19754__$1 = state_19754;
var statearr_19756_19780 = state_19754__$1;
(statearr_19756_19780[(2)] = inst_19736);

(statearr_19756_19780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (1))){
var inst_19730 = cljs.core.seq.call(null,coll);
var inst_19731 = inst_19730;
var state_19754__$1 = (function (){var statearr_19757 = state_19754;
(statearr_19757[(7)] = inst_19731);

return statearr_19757;
})();
var statearr_19758_19781 = state_19754__$1;
(statearr_19758_19781[(2)] = null);

(statearr_19758_19781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (4))){
var inst_19731 = (state_19754[(7)]);
var inst_19734 = cljs.core.first.call(null,inst_19731);
var state_19754__$1 = state_19754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19754__$1,(7),ch,inst_19734);
} else {
if((state_val_19755 === (13))){
var inst_19748 = (state_19754[(2)]);
var state_19754__$1 = state_19754;
var statearr_19759_19782 = state_19754__$1;
(statearr_19759_19782[(2)] = inst_19748);

(statearr_19759_19782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (6))){
var inst_19739 = (state_19754[(2)]);
var state_19754__$1 = state_19754;
if(cljs.core.truth_(inst_19739)){
var statearr_19760_19783 = state_19754__$1;
(statearr_19760_19783[(1)] = (8));

} else {
var statearr_19761_19784 = state_19754__$1;
(statearr_19761_19784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (3))){
var inst_19752 = (state_19754[(2)]);
var state_19754__$1 = state_19754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19754__$1,inst_19752);
} else {
if((state_val_19755 === (12))){
var state_19754__$1 = state_19754;
var statearr_19762_19785 = state_19754__$1;
(statearr_19762_19785[(2)] = null);

(statearr_19762_19785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (2))){
var inst_19731 = (state_19754[(7)]);
var state_19754__$1 = state_19754;
if(cljs.core.truth_(inst_19731)){
var statearr_19763_19786 = state_19754__$1;
(statearr_19763_19786[(1)] = (4));

} else {
var statearr_19764_19787 = state_19754__$1;
(statearr_19764_19787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (11))){
var inst_19745 = cljs.core.async.close_BANG_.call(null,ch);
var state_19754__$1 = state_19754;
var statearr_19765_19788 = state_19754__$1;
(statearr_19765_19788[(2)] = inst_19745);

(statearr_19765_19788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (9))){
var state_19754__$1 = state_19754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19766_19789 = state_19754__$1;
(statearr_19766_19789[(1)] = (11));

} else {
var statearr_19767_19790 = state_19754__$1;
(statearr_19767_19790[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (5))){
var inst_19731 = (state_19754[(7)]);
var state_19754__$1 = state_19754;
var statearr_19768_19791 = state_19754__$1;
(statearr_19768_19791[(2)] = inst_19731);

(statearr_19768_19791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (10))){
var inst_19750 = (state_19754[(2)]);
var state_19754__$1 = state_19754;
var statearr_19769_19792 = state_19754__$1;
(statearr_19769_19792[(2)] = inst_19750);

(statearr_19769_19792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (8))){
var inst_19731 = (state_19754[(7)]);
var inst_19741 = cljs.core.next.call(null,inst_19731);
var inst_19731__$1 = inst_19741;
var state_19754__$1 = (function (){var statearr_19770 = state_19754;
(statearr_19770[(7)] = inst_19731__$1);

return statearr_19770;
})();
var statearr_19771_19793 = state_19754__$1;
(statearr_19771_19793[(2)] = null);

(statearr_19771_19793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto__))
;
return ((function (switch__7028__auto__,c__7090__auto__){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_19775 = [null,null,null,null,null,null,null,null];
(statearr_19775[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_19775[(1)] = (1));

return statearr_19775;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_19754){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_19754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e19776){if((e19776 instanceof Object)){
var ex__7032__auto__ = e19776;
var statearr_19777_19794 = state_19754;
(statearr_19777_19794[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19795 = state_19754;
state_19754 = G__19795;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_19754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_19754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__))
})();
var state__7092__auto__ = (function (){var statearr_19778 = f__7091__auto__.call(null);
(statearr_19778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_19778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__))
);

return c__7090__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj19797 = {};
return obj19797;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4087__auto__ = _;
if(and__4087__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4735__auto__ = (((_ == null))?null:_);
return (function (){var or__4099__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj19799 = {};
return obj19799;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t20021 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20021 = (function (cs,ch,mult,meta20022){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20022 = meta20022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20021.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20021.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20021.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20021.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20023){
var self__ = this;
var _20023__$1 = this;
return self__.meta20022;
});})(cs))
;

cljs.core.async.t20021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20023,meta20022__$1){
var self__ = this;
var _20023__$1 = this;
return (new cljs.core.async.t20021(self__.cs,self__.ch,self__.mult,meta20022__$1));
});})(cs))
;

cljs.core.async.t20021.cljs$lang$type = true;

cljs.core.async.t20021.cljs$lang$ctorStr = "cljs.core.async/t20021";

cljs.core.async.t20021.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t20021");
});})(cs))
;

cljs.core.async.__GT_t20021 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t20021(cs__$1,ch__$1,mult__$1,meta20022){
return (new cljs.core.async.t20021(cs__$1,ch__$1,mult__$1,meta20022));
});})(cs))
;

}

return (new cljs.core.async.t20021(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7090__auto___20242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___20242,cs,m,dchan,dctr,done){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___20242,cs,m,dchan,dctr,done){
return (function (state_20154){
var state_val_20155 = (state_20154[(1)]);
if((state_val_20155 === (7))){
var inst_20150 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20156_20243 = state_20154__$1;
(statearr_20156_20243[(2)] = inst_20150);

(statearr_20156_20243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (20))){
var inst_20055 = (state_20154[(7)]);
var inst_20065 = cljs.core.first.call(null,inst_20055);
var inst_20066 = cljs.core.nth.call(null,inst_20065,(0),null);
var inst_20067 = cljs.core.nth.call(null,inst_20065,(1),null);
var state_20154__$1 = (function (){var statearr_20157 = state_20154;
(statearr_20157[(8)] = inst_20066);

return statearr_20157;
})();
if(cljs.core.truth_(inst_20067)){
var statearr_20158_20244 = state_20154__$1;
(statearr_20158_20244[(1)] = (22));

} else {
var statearr_20159_20245 = state_20154__$1;
(statearr_20159_20245[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (27))){
var inst_20102 = (state_20154[(9)]);
var inst_20097 = (state_20154[(10)]);
var inst_20026 = (state_20154[(11)]);
var inst_20095 = (state_20154[(12)]);
var inst_20102__$1 = cljs.core._nth.call(null,inst_20095,inst_20097);
var inst_20103 = cljs.core.async.put_BANG_.call(null,inst_20102__$1,inst_20026,done);
var state_20154__$1 = (function (){var statearr_20160 = state_20154;
(statearr_20160[(9)] = inst_20102__$1);

return statearr_20160;
})();
if(cljs.core.truth_(inst_20103)){
var statearr_20161_20246 = state_20154__$1;
(statearr_20161_20246[(1)] = (30));

} else {
var statearr_20162_20247 = state_20154__$1;
(statearr_20162_20247[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (1))){
var state_20154__$1 = state_20154;
var statearr_20163_20248 = state_20154__$1;
(statearr_20163_20248[(2)] = null);

(statearr_20163_20248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (24))){
var inst_20055 = (state_20154[(7)]);
var inst_20072 = (state_20154[(2)]);
var inst_20073 = cljs.core.next.call(null,inst_20055);
var inst_20035 = inst_20073;
var inst_20036 = null;
var inst_20037 = (0);
var inst_20038 = (0);
var state_20154__$1 = (function (){var statearr_20164 = state_20154;
(statearr_20164[(13)] = inst_20072);

(statearr_20164[(14)] = inst_20037);

(statearr_20164[(15)] = inst_20036);

(statearr_20164[(16)] = inst_20035);

(statearr_20164[(17)] = inst_20038);

return statearr_20164;
})();
var statearr_20165_20249 = state_20154__$1;
(statearr_20165_20249[(2)] = null);

(statearr_20165_20249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (39))){
var state_20154__$1 = state_20154;
var statearr_20169_20250 = state_20154__$1;
(statearr_20169_20250[(2)] = null);

(statearr_20169_20250[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (4))){
var inst_20026 = (state_20154[(11)]);
var inst_20026__$1 = (state_20154[(2)]);
var inst_20027 = (inst_20026__$1 == null);
var state_20154__$1 = (function (){var statearr_20170 = state_20154;
(statearr_20170[(11)] = inst_20026__$1);

return statearr_20170;
})();
if(cljs.core.truth_(inst_20027)){
var statearr_20171_20251 = state_20154__$1;
(statearr_20171_20251[(1)] = (5));

} else {
var statearr_20172_20252 = state_20154__$1;
(statearr_20172_20252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (15))){
var inst_20037 = (state_20154[(14)]);
var inst_20036 = (state_20154[(15)]);
var inst_20035 = (state_20154[(16)]);
var inst_20038 = (state_20154[(17)]);
var inst_20051 = (state_20154[(2)]);
var inst_20052 = (inst_20038 + (1));
var tmp20166 = inst_20037;
var tmp20167 = inst_20036;
var tmp20168 = inst_20035;
var inst_20035__$1 = tmp20168;
var inst_20036__$1 = tmp20167;
var inst_20037__$1 = tmp20166;
var inst_20038__$1 = inst_20052;
var state_20154__$1 = (function (){var statearr_20173 = state_20154;
(statearr_20173[(14)] = inst_20037__$1);

(statearr_20173[(18)] = inst_20051);

(statearr_20173[(15)] = inst_20036__$1);

(statearr_20173[(16)] = inst_20035__$1);

(statearr_20173[(17)] = inst_20038__$1);

return statearr_20173;
})();
var statearr_20174_20253 = state_20154__$1;
(statearr_20174_20253[(2)] = null);

(statearr_20174_20253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (21))){
var inst_20076 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20178_20254 = state_20154__$1;
(statearr_20178_20254[(2)] = inst_20076);

(statearr_20178_20254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (31))){
var inst_20102 = (state_20154[(9)]);
var inst_20106 = done.call(null,null);
var inst_20107 = cljs.core.async.untap_STAR_.call(null,m,inst_20102);
var state_20154__$1 = (function (){var statearr_20179 = state_20154;
(statearr_20179[(19)] = inst_20106);

return statearr_20179;
})();
var statearr_20180_20255 = state_20154__$1;
(statearr_20180_20255[(2)] = inst_20107);

(statearr_20180_20255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (32))){
var inst_20097 = (state_20154[(10)]);
var inst_20096 = (state_20154[(20)]);
var inst_20094 = (state_20154[(21)]);
var inst_20095 = (state_20154[(12)]);
var inst_20109 = (state_20154[(2)]);
var inst_20110 = (inst_20097 + (1));
var tmp20175 = inst_20096;
var tmp20176 = inst_20094;
var tmp20177 = inst_20095;
var inst_20094__$1 = tmp20176;
var inst_20095__$1 = tmp20177;
var inst_20096__$1 = tmp20175;
var inst_20097__$1 = inst_20110;
var state_20154__$1 = (function (){var statearr_20181 = state_20154;
(statearr_20181[(10)] = inst_20097__$1);

(statearr_20181[(20)] = inst_20096__$1);

(statearr_20181[(22)] = inst_20109);

(statearr_20181[(21)] = inst_20094__$1);

(statearr_20181[(12)] = inst_20095__$1);

return statearr_20181;
})();
var statearr_20182_20256 = state_20154__$1;
(statearr_20182_20256[(2)] = null);

(statearr_20182_20256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (40))){
var inst_20122 = (state_20154[(23)]);
var inst_20126 = done.call(null,null);
var inst_20127 = cljs.core.async.untap_STAR_.call(null,m,inst_20122);
var state_20154__$1 = (function (){var statearr_20183 = state_20154;
(statearr_20183[(24)] = inst_20126);

return statearr_20183;
})();
var statearr_20184_20257 = state_20154__$1;
(statearr_20184_20257[(2)] = inst_20127);

(statearr_20184_20257[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (33))){
var inst_20113 = (state_20154[(25)]);
var inst_20115 = cljs.core.chunked_seq_QMARK_.call(null,inst_20113);
var state_20154__$1 = state_20154;
if(inst_20115){
var statearr_20185_20258 = state_20154__$1;
(statearr_20185_20258[(1)] = (36));

} else {
var statearr_20186_20259 = state_20154__$1;
(statearr_20186_20259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (13))){
var inst_20045 = (state_20154[(26)]);
var inst_20048 = cljs.core.async.close_BANG_.call(null,inst_20045);
var state_20154__$1 = state_20154;
var statearr_20187_20260 = state_20154__$1;
(statearr_20187_20260[(2)] = inst_20048);

(statearr_20187_20260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (22))){
var inst_20066 = (state_20154[(8)]);
var inst_20069 = cljs.core.async.close_BANG_.call(null,inst_20066);
var state_20154__$1 = state_20154;
var statearr_20188_20261 = state_20154__$1;
(statearr_20188_20261[(2)] = inst_20069);

(statearr_20188_20261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (36))){
var inst_20113 = (state_20154[(25)]);
var inst_20117 = cljs.core.chunk_first.call(null,inst_20113);
var inst_20118 = cljs.core.chunk_rest.call(null,inst_20113);
var inst_20119 = cljs.core.count.call(null,inst_20117);
var inst_20094 = inst_20118;
var inst_20095 = inst_20117;
var inst_20096 = inst_20119;
var inst_20097 = (0);
var state_20154__$1 = (function (){var statearr_20189 = state_20154;
(statearr_20189[(10)] = inst_20097);

(statearr_20189[(20)] = inst_20096);

(statearr_20189[(21)] = inst_20094);

(statearr_20189[(12)] = inst_20095);

return statearr_20189;
})();
var statearr_20190_20262 = state_20154__$1;
(statearr_20190_20262[(2)] = null);

(statearr_20190_20262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (41))){
var inst_20113 = (state_20154[(25)]);
var inst_20129 = (state_20154[(2)]);
var inst_20130 = cljs.core.next.call(null,inst_20113);
var inst_20094 = inst_20130;
var inst_20095 = null;
var inst_20096 = (0);
var inst_20097 = (0);
var state_20154__$1 = (function (){var statearr_20191 = state_20154;
(statearr_20191[(10)] = inst_20097);

(statearr_20191[(27)] = inst_20129);

(statearr_20191[(20)] = inst_20096);

(statearr_20191[(21)] = inst_20094);

(statearr_20191[(12)] = inst_20095);

return statearr_20191;
})();
var statearr_20192_20263 = state_20154__$1;
(statearr_20192_20263[(2)] = null);

(statearr_20192_20263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (43))){
var state_20154__$1 = state_20154;
var statearr_20193_20264 = state_20154__$1;
(statearr_20193_20264[(2)] = null);

(statearr_20193_20264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (29))){
var inst_20138 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20194_20265 = state_20154__$1;
(statearr_20194_20265[(2)] = inst_20138);

(statearr_20194_20265[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (44))){
var inst_20147 = (state_20154[(2)]);
var state_20154__$1 = (function (){var statearr_20195 = state_20154;
(statearr_20195[(28)] = inst_20147);

return statearr_20195;
})();
var statearr_20196_20266 = state_20154__$1;
(statearr_20196_20266[(2)] = null);

(statearr_20196_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (6))){
var inst_20086 = (state_20154[(29)]);
var inst_20085 = cljs.core.deref.call(null,cs);
var inst_20086__$1 = cljs.core.keys.call(null,inst_20085);
var inst_20087 = cljs.core.count.call(null,inst_20086__$1);
var inst_20088 = cljs.core.reset_BANG_.call(null,dctr,inst_20087);
var inst_20093 = cljs.core.seq.call(null,inst_20086__$1);
var inst_20094 = inst_20093;
var inst_20095 = null;
var inst_20096 = (0);
var inst_20097 = (0);
var state_20154__$1 = (function (){var statearr_20197 = state_20154;
(statearr_20197[(30)] = inst_20088);

(statearr_20197[(29)] = inst_20086__$1);

(statearr_20197[(10)] = inst_20097);

(statearr_20197[(20)] = inst_20096);

(statearr_20197[(21)] = inst_20094);

(statearr_20197[(12)] = inst_20095);

return statearr_20197;
})();
var statearr_20198_20267 = state_20154__$1;
(statearr_20198_20267[(2)] = null);

(statearr_20198_20267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (28))){
var inst_20113 = (state_20154[(25)]);
var inst_20094 = (state_20154[(21)]);
var inst_20113__$1 = cljs.core.seq.call(null,inst_20094);
var state_20154__$1 = (function (){var statearr_20199 = state_20154;
(statearr_20199[(25)] = inst_20113__$1);

return statearr_20199;
})();
if(inst_20113__$1){
var statearr_20200_20268 = state_20154__$1;
(statearr_20200_20268[(1)] = (33));

} else {
var statearr_20201_20269 = state_20154__$1;
(statearr_20201_20269[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (25))){
var inst_20097 = (state_20154[(10)]);
var inst_20096 = (state_20154[(20)]);
var inst_20099 = (inst_20097 < inst_20096);
var inst_20100 = inst_20099;
var state_20154__$1 = state_20154;
if(cljs.core.truth_(inst_20100)){
var statearr_20202_20270 = state_20154__$1;
(statearr_20202_20270[(1)] = (27));

} else {
var statearr_20203_20271 = state_20154__$1;
(statearr_20203_20271[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (34))){
var state_20154__$1 = state_20154;
var statearr_20204_20272 = state_20154__$1;
(statearr_20204_20272[(2)] = null);

(statearr_20204_20272[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (17))){
var state_20154__$1 = state_20154;
var statearr_20205_20273 = state_20154__$1;
(statearr_20205_20273[(2)] = null);

(statearr_20205_20273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (3))){
var inst_20152 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20154__$1,inst_20152);
} else {
if((state_val_20155 === (12))){
var inst_20081 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20206_20274 = state_20154__$1;
(statearr_20206_20274[(2)] = inst_20081);

(statearr_20206_20274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (2))){
var state_20154__$1 = state_20154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20154__$1,(4),ch);
} else {
if((state_val_20155 === (23))){
var state_20154__$1 = state_20154;
var statearr_20207_20275 = state_20154__$1;
(statearr_20207_20275[(2)] = null);

(statearr_20207_20275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (35))){
var inst_20136 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20208_20276 = state_20154__$1;
(statearr_20208_20276[(2)] = inst_20136);

(statearr_20208_20276[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (19))){
var inst_20055 = (state_20154[(7)]);
var inst_20059 = cljs.core.chunk_first.call(null,inst_20055);
var inst_20060 = cljs.core.chunk_rest.call(null,inst_20055);
var inst_20061 = cljs.core.count.call(null,inst_20059);
var inst_20035 = inst_20060;
var inst_20036 = inst_20059;
var inst_20037 = inst_20061;
var inst_20038 = (0);
var state_20154__$1 = (function (){var statearr_20209 = state_20154;
(statearr_20209[(14)] = inst_20037);

(statearr_20209[(15)] = inst_20036);

(statearr_20209[(16)] = inst_20035);

(statearr_20209[(17)] = inst_20038);

return statearr_20209;
})();
var statearr_20210_20277 = state_20154__$1;
(statearr_20210_20277[(2)] = null);

(statearr_20210_20277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (11))){
var inst_20035 = (state_20154[(16)]);
var inst_20055 = (state_20154[(7)]);
var inst_20055__$1 = cljs.core.seq.call(null,inst_20035);
var state_20154__$1 = (function (){var statearr_20211 = state_20154;
(statearr_20211[(7)] = inst_20055__$1);

return statearr_20211;
})();
if(inst_20055__$1){
var statearr_20212_20278 = state_20154__$1;
(statearr_20212_20278[(1)] = (16));

} else {
var statearr_20213_20279 = state_20154__$1;
(statearr_20213_20279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (9))){
var inst_20083 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20214_20280 = state_20154__$1;
(statearr_20214_20280[(2)] = inst_20083);

(statearr_20214_20280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (5))){
var inst_20033 = cljs.core.deref.call(null,cs);
var inst_20034 = cljs.core.seq.call(null,inst_20033);
var inst_20035 = inst_20034;
var inst_20036 = null;
var inst_20037 = (0);
var inst_20038 = (0);
var state_20154__$1 = (function (){var statearr_20215 = state_20154;
(statearr_20215[(14)] = inst_20037);

(statearr_20215[(15)] = inst_20036);

(statearr_20215[(16)] = inst_20035);

(statearr_20215[(17)] = inst_20038);

return statearr_20215;
})();
var statearr_20216_20281 = state_20154__$1;
(statearr_20216_20281[(2)] = null);

(statearr_20216_20281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (14))){
var state_20154__$1 = state_20154;
var statearr_20217_20282 = state_20154__$1;
(statearr_20217_20282[(2)] = null);

(statearr_20217_20282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (45))){
var inst_20144 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20218_20283 = state_20154__$1;
(statearr_20218_20283[(2)] = inst_20144);

(statearr_20218_20283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (26))){
var inst_20086 = (state_20154[(29)]);
var inst_20140 = (state_20154[(2)]);
var inst_20141 = cljs.core.seq.call(null,inst_20086);
var state_20154__$1 = (function (){var statearr_20219 = state_20154;
(statearr_20219[(31)] = inst_20140);

return statearr_20219;
})();
if(inst_20141){
var statearr_20220_20284 = state_20154__$1;
(statearr_20220_20284[(1)] = (42));

} else {
var statearr_20221_20285 = state_20154__$1;
(statearr_20221_20285[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (16))){
var inst_20055 = (state_20154[(7)]);
var inst_20057 = cljs.core.chunked_seq_QMARK_.call(null,inst_20055);
var state_20154__$1 = state_20154;
if(inst_20057){
var statearr_20222_20286 = state_20154__$1;
(statearr_20222_20286[(1)] = (19));

} else {
var statearr_20223_20287 = state_20154__$1;
(statearr_20223_20287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (38))){
var inst_20133 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20224_20288 = state_20154__$1;
(statearr_20224_20288[(2)] = inst_20133);

(statearr_20224_20288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (30))){
var state_20154__$1 = state_20154;
var statearr_20225_20289 = state_20154__$1;
(statearr_20225_20289[(2)] = null);

(statearr_20225_20289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (10))){
var inst_20036 = (state_20154[(15)]);
var inst_20038 = (state_20154[(17)]);
var inst_20044 = cljs.core._nth.call(null,inst_20036,inst_20038);
var inst_20045 = cljs.core.nth.call(null,inst_20044,(0),null);
var inst_20046 = cljs.core.nth.call(null,inst_20044,(1),null);
var state_20154__$1 = (function (){var statearr_20226 = state_20154;
(statearr_20226[(26)] = inst_20045);

return statearr_20226;
})();
if(cljs.core.truth_(inst_20046)){
var statearr_20227_20290 = state_20154__$1;
(statearr_20227_20290[(1)] = (13));

} else {
var statearr_20228_20291 = state_20154__$1;
(statearr_20228_20291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (18))){
var inst_20079 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20229_20292 = state_20154__$1;
(statearr_20229_20292[(2)] = inst_20079);

(statearr_20229_20292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (42))){
var state_20154__$1 = state_20154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20154__$1,(45),dchan);
} else {
if((state_val_20155 === (37))){
var inst_20122 = (state_20154[(23)]);
var inst_20113 = (state_20154[(25)]);
var inst_20026 = (state_20154[(11)]);
var inst_20122__$1 = cljs.core.first.call(null,inst_20113);
var inst_20123 = cljs.core.async.put_BANG_.call(null,inst_20122__$1,inst_20026,done);
var state_20154__$1 = (function (){var statearr_20230 = state_20154;
(statearr_20230[(23)] = inst_20122__$1);

return statearr_20230;
})();
if(cljs.core.truth_(inst_20123)){
var statearr_20231_20293 = state_20154__$1;
(statearr_20231_20293[(1)] = (39));

} else {
var statearr_20232_20294 = state_20154__$1;
(statearr_20232_20294[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (8))){
var inst_20037 = (state_20154[(14)]);
var inst_20038 = (state_20154[(17)]);
var inst_20040 = (inst_20038 < inst_20037);
var inst_20041 = inst_20040;
var state_20154__$1 = state_20154;
if(cljs.core.truth_(inst_20041)){
var statearr_20233_20295 = state_20154__$1;
(statearr_20233_20295[(1)] = (10));

} else {
var statearr_20234_20296 = state_20154__$1;
(statearr_20234_20296[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___20242,cs,m,dchan,dctr,done))
;
return ((function (switch__7028__auto__,c__7090__auto___20242,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7029__auto__ = null;
var cljs$core$async$mult_$_state_machine__7029__auto____0 = (function (){
var statearr_20238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20238[(0)] = cljs$core$async$mult_$_state_machine__7029__auto__);

(statearr_20238[(1)] = (1));

return statearr_20238;
});
var cljs$core$async$mult_$_state_machine__7029__auto____1 = (function (state_20154){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_20154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e20239){if((e20239 instanceof Object)){
var ex__7032__auto__ = e20239;
var statearr_20240_20297 = state_20154;
(statearr_20240_20297[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20298 = state_20154;
state_20154 = G__20298;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7029__auto__ = function(state_20154){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7029__auto____1.call(this,state_20154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7029__auto____0;
cljs$core$async$mult_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7029__auto____1;
return cljs$core$async$mult_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___20242,cs,m,dchan,dctr,done))
})();
var state__7092__auto__ = (function (){var statearr_20241 = f__7091__auto__.call(null);
(statearr_20241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___20242);

return statearr_20241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___20242,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__20300 = arguments.length;
switch (G__20300) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj20303 = {};
return obj20303;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4087__auto__ = m;
if(and__4087__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4735__auto__ = (((m == null))?null:m);
return (function (){var or__4099__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5139__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5139__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20308){
var map__20309 = p__20308;
var map__20309__$1 = ((cljs.core.seq_QMARK_.call(null,map__20309))?cljs.core.apply.call(null,cljs.core.hash_map,map__20309):map__20309);
var opts = map__20309__$1;
var statearr_20310_20313 = state;
(statearr_20310_20313[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20309,map__20309__$1,opts){
return (function (val){
var statearr_20311_20314 = state;
(statearr_20311_20314[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20309,map__20309__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20312_20315 = state;
(statearr_20312_20315[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20304){
var G__20305 = cljs.core.first.call(null,seq20304);
var seq20304__$1 = cljs.core.next.call(null,seq20304);
var G__20306 = cljs.core.first.call(null,seq20304__$1);
var seq20304__$2 = cljs.core.next.call(null,seq20304__$1);
var G__20307 = cljs.core.first.call(null,seq20304__$2);
var seq20304__$3 = cljs.core.next.call(null,seq20304__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20305,G__20306,G__20307,seq20304__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t20435 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20435 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20436){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20436 = meta20436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20435.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20435.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20437){
var self__ = this;
var _20437__$1 = this;
return self__.meta20436;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20437,meta20436__$1){
var self__ = this;
var _20437__$1 = this;
return (new cljs.core.async.t20435(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20436__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20435.cljs$lang$type = true;

cljs.core.async.t20435.cljs$lang$ctorStr = "cljs.core.async/t20435";

cljs.core.async.t20435.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t20435");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20435 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t20435(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20436){
return (new cljs.core.async.t20435(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20436));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20435(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7090__auto___20554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___20554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___20554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20507){
var state_val_20508 = (state_20507[(1)]);
if((state_val_20508 === (7))){
var inst_20451 = (state_20507[(7)]);
var inst_20456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20451);
var state_20507__$1 = state_20507;
var statearr_20509_20555 = state_20507__$1;
(statearr_20509_20555[(2)] = inst_20456);

(statearr_20509_20555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (20))){
var inst_20466 = (state_20507[(8)]);
var state_20507__$1 = state_20507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20507__$1,(23),out,inst_20466);
} else {
if((state_val_20508 === (1))){
var inst_20441 = (state_20507[(9)]);
var inst_20441__$1 = calc_state.call(null);
var inst_20442 = cljs.core.seq_QMARK_.call(null,inst_20441__$1);
var state_20507__$1 = (function (){var statearr_20510 = state_20507;
(statearr_20510[(9)] = inst_20441__$1);

return statearr_20510;
})();
if(inst_20442){
var statearr_20511_20556 = state_20507__$1;
(statearr_20511_20556[(1)] = (2));

} else {
var statearr_20512_20557 = state_20507__$1;
(statearr_20512_20557[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (24))){
var inst_20459 = (state_20507[(10)]);
var inst_20451 = inst_20459;
var state_20507__$1 = (function (){var statearr_20513 = state_20507;
(statearr_20513[(7)] = inst_20451);

return statearr_20513;
})();
var statearr_20514_20558 = state_20507__$1;
(statearr_20514_20558[(2)] = null);

(statearr_20514_20558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (4))){
var inst_20441 = (state_20507[(9)]);
var inst_20447 = (state_20507[(2)]);
var inst_20448 = cljs.core.get.call(null,inst_20447,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20449 = cljs.core.get.call(null,inst_20447,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20450 = cljs.core.get.call(null,inst_20447,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20451 = inst_20441;
var state_20507__$1 = (function (){var statearr_20515 = state_20507;
(statearr_20515[(11)] = inst_20450);

(statearr_20515[(7)] = inst_20451);

(statearr_20515[(12)] = inst_20449);

(statearr_20515[(13)] = inst_20448);

return statearr_20515;
})();
var statearr_20516_20559 = state_20507__$1;
(statearr_20516_20559[(2)] = null);

(statearr_20516_20559[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (15))){
var state_20507__$1 = state_20507;
var statearr_20517_20560 = state_20507__$1;
(statearr_20517_20560[(2)] = null);

(statearr_20517_20560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (21))){
var inst_20459 = (state_20507[(10)]);
var inst_20451 = inst_20459;
var state_20507__$1 = (function (){var statearr_20518 = state_20507;
(statearr_20518[(7)] = inst_20451);

return statearr_20518;
})();
var statearr_20519_20561 = state_20507__$1;
(statearr_20519_20561[(2)] = null);

(statearr_20519_20561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (13))){
var inst_20503 = (state_20507[(2)]);
var state_20507__$1 = state_20507;
var statearr_20520_20562 = state_20507__$1;
(statearr_20520_20562[(2)] = inst_20503);

(statearr_20520_20562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (22))){
var inst_20501 = (state_20507[(2)]);
var state_20507__$1 = state_20507;
var statearr_20521_20563 = state_20507__$1;
(statearr_20521_20563[(2)] = inst_20501);

(statearr_20521_20563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (6))){
var inst_20505 = (state_20507[(2)]);
var state_20507__$1 = state_20507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20507__$1,inst_20505);
} else {
if((state_val_20508 === (25))){
var state_20507__$1 = state_20507;
var statearr_20522_20564 = state_20507__$1;
(statearr_20522_20564[(2)] = null);

(statearr_20522_20564[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (17))){
var inst_20481 = (state_20507[(14)]);
var state_20507__$1 = state_20507;
var statearr_20523_20565 = state_20507__$1;
(statearr_20523_20565[(2)] = inst_20481);

(statearr_20523_20565[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (3))){
var inst_20441 = (state_20507[(9)]);
var state_20507__$1 = state_20507;
var statearr_20524_20566 = state_20507__$1;
(statearr_20524_20566[(2)] = inst_20441);

(statearr_20524_20566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (12))){
var inst_20462 = (state_20507[(15)]);
var inst_20481 = (state_20507[(14)]);
var inst_20467 = (state_20507[(16)]);
var inst_20481__$1 = inst_20462.call(null,inst_20467);
var state_20507__$1 = (function (){var statearr_20525 = state_20507;
(statearr_20525[(14)] = inst_20481__$1);

return statearr_20525;
})();
if(cljs.core.truth_(inst_20481__$1)){
var statearr_20526_20567 = state_20507__$1;
(statearr_20526_20567[(1)] = (17));

} else {
var statearr_20527_20568 = state_20507__$1;
(statearr_20527_20568[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (2))){
var inst_20441 = (state_20507[(9)]);
var inst_20444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20441);
var state_20507__$1 = state_20507;
var statearr_20528_20569 = state_20507__$1;
(statearr_20528_20569[(2)] = inst_20444);

(statearr_20528_20569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (23))){
var inst_20492 = (state_20507[(2)]);
var state_20507__$1 = state_20507;
if(cljs.core.truth_(inst_20492)){
var statearr_20529_20570 = state_20507__$1;
(statearr_20529_20570[(1)] = (24));

} else {
var statearr_20530_20571 = state_20507__$1;
(statearr_20530_20571[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (19))){
var inst_20489 = (state_20507[(2)]);
var state_20507__$1 = state_20507;
if(cljs.core.truth_(inst_20489)){
var statearr_20531_20572 = state_20507__$1;
(statearr_20531_20572[(1)] = (20));

} else {
var statearr_20532_20573 = state_20507__$1;
(statearr_20532_20573[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (11))){
var inst_20466 = (state_20507[(8)]);
var inst_20472 = (inst_20466 == null);
var state_20507__$1 = state_20507;
if(cljs.core.truth_(inst_20472)){
var statearr_20533_20574 = state_20507__$1;
(statearr_20533_20574[(1)] = (14));

} else {
var statearr_20534_20575 = state_20507__$1;
(statearr_20534_20575[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (9))){
var inst_20459 = (state_20507[(10)]);
var inst_20459__$1 = (state_20507[(2)]);
var inst_20460 = cljs.core.get.call(null,inst_20459__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20461 = cljs.core.get.call(null,inst_20459__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20462 = cljs.core.get.call(null,inst_20459__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20507__$1 = (function (){var statearr_20535 = state_20507;
(statearr_20535[(10)] = inst_20459__$1);

(statearr_20535[(15)] = inst_20462);

(statearr_20535[(17)] = inst_20461);

return statearr_20535;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20507__$1,(10),inst_20460);
} else {
if((state_val_20508 === (5))){
var inst_20451 = (state_20507[(7)]);
var inst_20454 = cljs.core.seq_QMARK_.call(null,inst_20451);
var state_20507__$1 = state_20507;
if(inst_20454){
var statearr_20536_20576 = state_20507__$1;
(statearr_20536_20576[(1)] = (7));

} else {
var statearr_20537_20577 = state_20507__$1;
(statearr_20537_20577[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (14))){
var inst_20467 = (state_20507[(16)]);
var inst_20474 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20467);
var state_20507__$1 = state_20507;
var statearr_20538_20578 = state_20507__$1;
(statearr_20538_20578[(2)] = inst_20474);

(statearr_20538_20578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (26))){
var inst_20497 = (state_20507[(2)]);
var state_20507__$1 = state_20507;
var statearr_20539_20579 = state_20507__$1;
(statearr_20539_20579[(2)] = inst_20497);

(statearr_20539_20579[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (16))){
var inst_20477 = (state_20507[(2)]);
var inst_20478 = calc_state.call(null);
var inst_20451 = inst_20478;
var state_20507__$1 = (function (){var statearr_20540 = state_20507;
(statearr_20540[(7)] = inst_20451);

(statearr_20540[(18)] = inst_20477);

return statearr_20540;
})();
var statearr_20541_20580 = state_20507__$1;
(statearr_20541_20580[(2)] = null);

(statearr_20541_20580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (10))){
var inst_20466 = (state_20507[(8)]);
var inst_20467 = (state_20507[(16)]);
var inst_20465 = (state_20507[(2)]);
var inst_20466__$1 = cljs.core.nth.call(null,inst_20465,(0),null);
var inst_20467__$1 = cljs.core.nth.call(null,inst_20465,(1),null);
var inst_20468 = (inst_20466__$1 == null);
var inst_20469 = cljs.core._EQ_.call(null,inst_20467__$1,change);
var inst_20470 = (inst_20468) || (inst_20469);
var state_20507__$1 = (function (){var statearr_20542 = state_20507;
(statearr_20542[(8)] = inst_20466__$1);

(statearr_20542[(16)] = inst_20467__$1);

return statearr_20542;
})();
if(cljs.core.truth_(inst_20470)){
var statearr_20543_20581 = state_20507__$1;
(statearr_20543_20581[(1)] = (11));

} else {
var statearr_20544_20582 = state_20507__$1;
(statearr_20544_20582[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (18))){
var inst_20462 = (state_20507[(15)]);
var inst_20461 = (state_20507[(17)]);
var inst_20467 = (state_20507[(16)]);
var inst_20484 = cljs.core.empty_QMARK_.call(null,inst_20462);
var inst_20485 = inst_20461.call(null,inst_20467);
var inst_20486 = cljs.core.not.call(null,inst_20485);
var inst_20487 = (inst_20484) && (inst_20486);
var state_20507__$1 = state_20507;
var statearr_20545_20583 = state_20507__$1;
(statearr_20545_20583[(2)] = inst_20487);

(statearr_20545_20583[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20508 === (8))){
var inst_20451 = (state_20507[(7)]);
var state_20507__$1 = state_20507;
var statearr_20546_20584 = state_20507__$1;
(statearr_20546_20584[(2)] = inst_20451);

(statearr_20546_20584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___20554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7028__auto__,c__7090__auto___20554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7029__auto__ = null;
var cljs$core$async$mix_$_state_machine__7029__auto____0 = (function (){
var statearr_20550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20550[(0)] = cljs$core$async$mix_$_state_machine__7029__auto__);

(statearr_20550[(1)] = (1));

return statearr_20550;
});
var cljs$core$async$mix_$_state_machine__7029__auto____1 = (function (state_20507){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_20507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e20551){if((e20551 instanceof Object)){
var ex__7032__auto__ = e20551;
var statearr_20552_20585 = state_20507;
(statearr_20552_20585[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20586 = state_20507;
state_20507 = G__20586;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7029__auto__ = function(state_20507){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7029__auto____1.call(this,state_20507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7029__auto____0;
cljs$core$async$mix_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7029__auto____1;
return cljs$core$async$mix_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___20554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7092__auto__ = (function (){var statearr_20553 = f__7091__auto__.call(null);
(statearr_20553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___20554);

return statearr_20553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___20554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj20588 = {};
return obj20588;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4087__auto__ = p;
if(and__4087__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4087__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4735__auto__ = (((p == null))?null:p);
return (function (){var or__4099__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4087__auto__ = p;
if(and__4087__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4087__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4735__auto__ = (((p == null))?null:p);
return (function (){var or__4099__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__20590 = arguments.length;
switch (G__20590) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4087__auto__ = p;
if(and__4087__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4087__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4735__auto__ = (((p == null))?null:p);
return (function (){var or__4099__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4087__auto__ = p;
if(and__4087__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4087__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4735__auto__ = (((p == null))?null:p);
return (function (){var or__4099__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4735__auto__)]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__20594 = arguments.length;
switch (G__20594) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4099__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4099__auto__,mults){
return (function (p1__20592_SHARP_){
if(cljs.core.truth_(p1__20592_SHARP_.call(null,topic))){
return p1__20592_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20592_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4099__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20595 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20595 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta20596){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta20596 = meta20596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20595.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20595.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20595.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t20595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20595.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20597){
var self__ = this;
var _20597__$1 = this;
return self__.meta20596;
});})(mults,ensure_mult))
;

cljs.core.async.t20595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20597,meta20596__$1){
var self__ = this;
var _20597__$1 = this;
return (new cljs.core.async.t20595(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta20596__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20595.cljs$lang$type = true;

cljs.core.async.t20595.cljs$lang$ctorStr = "cljs.core.async/t20595";

cljs.core.async.t20595.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t20595");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20595 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t20595(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta20596){
return (new cljs.core.async.t20595(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta20596));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20595(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7090__auto___20718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___20718,mults,ensure_mult,p){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___20718,mults,ensure_mult,p){
return (function (state_20669){
var state_val_20670 = (state_20669[(1)]);
if((state_val_20670 === (7))){
var inst_20665 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20671_20719 = state_20669__$1;
(statearr_20671_20719[(2)] = inst_20665);

(statearr_20671_20719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (20))){
var state_20669__$1 = state_20669;
var statearr_20672_20720 = state_20669__$1;
(statearr_20672_20720[(2)] = null);

(statearr_20672_20720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (1))){
var state_20669__$1 = state_20669;
var statearr_20673_20721 = state_20669__$1;
(statearr_20673_20721[(2)] = null);

(statearr_20673_20721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (24))){
var inst_20648 = (state_20669[(7)]);
var inst_20657 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20648);
var state_20669__$1 = state_20669;
var statearr_20674_20722 = state_20669__$1;
(statearr_20674_20722[(2)] = inst_20657);

(statearr_20674_20722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (4))){
var inst_20600 = (state_20669[(8)]);
var inst_20600__$1 = (state_20669[(2)]);
var inst_20601 = (inst_20600__$1 == null);
var state_20669__$1 = (function (){var statearr_20675 = state_20669;
(statearr_20675[(8)] = inst_20600__$1);

return statearr_20675;
})();
if(cljs.core.truth_(inst_20601)){
var statearr_20676_20723 = state_20669__$1;
(statearr_20676_20723[(1)] = (5));

} else {
var statearr_20677_20724 = state_20669__$1;
(statearr_20677_20724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (15))){
var inst_20642 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20678_20725 = state_20669__$1;
(statearr_20678_20725[(2)] = inst_20642);

(statearr_20678_20725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (21))){
var inst_20662 = (state_20669[(2)]);
var state_20669__$1 = (function (){var statearr_20679 = state_20669;
(statearr_20679[(9)] = inst_20662);

return statearr_20679;
})();
var statearr_20680_20726 = state_20669__$1;
(statearr_20680_20726[(2)] = null);

(statearr_20680_20726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (13))){
var inst_20624 = (state_20669[(10)]);
var inst_20626 = cljs.core.chunked_seq_QMARK_.call(null,inst_20624);
var state_20669__$1 = state_20669;
if(inst_20626){
var statearr_20681_20727 = state_20669__$1;
(statearr_20681_20727[(1)] = (16));

} else {
var statearr_20682_20728 = state_20669__$1;
(statearr_20682_20728[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (22))){
var inst_20654 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20654)){
var statearr_20683_20729 = state_20669__$1;
(statearr_20683_20729[(1)] = (23));

} else {
var statearr_20684_20730 = state_20669__$1;
(statearr_20684_20730[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (6))){
var inst_20648 = (state_20669[(7)]);
var inst_20650 = (state_20669[(11)]);
var inst_20600 = (state_20669[(8)]);
var inst_20648__$1 = topic_fn.call(null,inst_20600);
var inst_20649 = cljs.core.deref.call(null,mults);
var inst_20650__$1 = cljs.core.get.call(null,inst_20649,inst_20648__$1);
var state_20669__$1 = (function (){var statearr_20685 = state_20669;
(statearr_20685[(7)] = inst_20648__$1);

(statearr_20685[(11)] = inst_20650__$1);

return statearr_20685;
})();
if(cljs.core.truth_(inst_20650__$1)){
var statearr_20686_20731 = state_20669__$1;
(statearr_20686_20731[(1)] = (19));

} else {
var statearr_20687_20732 = state_20669__$1;
(statearr_20687_20732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (25))){
var inst_20659 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20688_20733 = state_20669__$1;
(statearr_20688_20733[(2)] = inst_20659);

(statearr_20688_20733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (17))){
var inst_20624 = (state_20669[(10)]);
var inst_20633 = cljs.core.first.call(null,inst_20624);
var inst_20634 = cljs.core.async.muxch_STAR_.call(null,inst_20633);
var inst_20635 = cljs.core.async.close_BANG_.call(null,inst_20634);
var inst_20636 = cljs.core.next.call(null,inst_20624);
var inst_20610 = inst_20636;
var inst_20611 = null;
var inst_20612 = (0);
var inst_20613 = (0);
var state_20669__$1 = (function (){var statearr_20689 = state_20669;
(statearr_20689[(12)] = inst_20635);

(statearr_20689[(13)] = inst_20612);

(statearr_20689[(14)] = inst_20610);

(statearr_20689[(15)] = inst_20613);

(statearr_20689[(16)] = inst_20611);

return statearr_20689;
})();
var statearr_20690_20734 = state_20669__$1;
(statearr_20690_20734[(2)] = null);

(statearr_20690_20734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (3))){
var inst_20667 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20669__$1,inst_20667);
} else {
if((state_val_20670 === (12))){
var inst_20644 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20691_20735 = state_20669__$1;
(statearr_20691_20735[(2)] = inst_20644);

(statearr_20691_20735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (2))){
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20669__$1,(4),ch);
} else {
if((state_val_20670 === (23))){
var state_20669__$1 = state_20669;
var statearr_20692_20736 = state_20669__$1;
(statearr_20692_20736[(2)] = null);

(statearr_20692_20736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (19))){
var inst_20650 = (state_20669[(11)]);
var inst_20600 = (state_20669[(8)]);
var inst_20652 = cljs.core.async.muxch_STAR_.call(null,inst_20650);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20669__$1,(22),inst_20652,inst_20600);
} else {
if((state_val_20670 === (11))){
var inst_20610 = (state_20669[(14)]);
var inst_20624 = (state_20669[(10)]);
var inst_20624__$1 = cljs.core.seq.call(null,inst_20610);
var state_20669__$1 = (function (){var statearr_20693 = state_20669;
(statearr_20693[(10)] = inst_20624__$1);

return statearr_20693;
})();
if(inst_20624__$1){
var statearr_20694_20737 = state_20669__$1;
(statearr_20694_20737[(1)] = (13));

} else {
var statearr_20695_20738 = state_20669__$1;
(statearr_20695_20738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (9))){
var inst_20646 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20696_20739 = state_20669__$1;
(statearr_20696_20739[(2)] = inst_20646);

(statearr_20696_20739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (5))){
var inst_20607 = cljs.core.deref.call(null,mults);
var inst_20608 = cljs.core.vals.call(null,inst_20607);
var inst_20609 = cljs.core.seq.call(null,inst_20608);
var inst_20610 = inst_20609;
var inst_20611 = null;
var inst_20612 = (0);
var inst_20613 = (0);
var state_20669__$1 = (function (){var statearr_20697 = state_20669;
(statearr_20697[(13)] = inst_20612);

(statearr_20697[(14)] = inst_20610);

(statearr_20697[(15)] = inst_20613);

(statearr_20697[(16)] = inst_20611);

return statearr_20697;
})();
var statearr_20698_20740 = state_20669__$1;
(statearr_20698_20740[(2)] = null);

(statearr_20698_20740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (14))){
var state_20669__$1 = state_20669;
var statearr_20702_20741 = state_20669__$1;
(statearr_20702_20741[(2)] = null);

(statearr_20702_20741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (16))){
var inst_20624 = (state_20669[(10)]);
var inst_20628 = cljs.core.chunk_first.call(null,inst_20624);
var inst_20629 = cljs.core.chunk_rest.call(null,inst_20624);
var inst_20630 = cljs.core.count.call(null,inst_20628);
var inst_20610 = inst_20629;
var inst_20611 = inst_20628;
var inst_20612 = inst_20630;
var inst_20613 = (0);
var state_20669__$1 = (function (){var statearr_20703 = state_20669;
(statearr_20703[(13)] = inst_20612);

(statearr_20703[(14)] = inst_20610);

(statearr_20703[(15)] = inst_20613);

(statearr_20703[(16)] = inst_20611);

return statearr_20703;
})();
var statearr_20704_20742 = state_20669__$1;
(statearr_20704_20742[(2)] = null);

(statearr_20704_20742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (10))){
var inst_20612 = (state_20669[(13)]);
var inst_20610 = (state_20669[(14)]);
var inst_20613 = (state_20669[(15)]);
var inst_20611 = (state_20669[(16)]);
var inst_20618 = cljs.core._nth.call(null,inst_20611,inst_20613);
var inst_20619 = cljs.core.async.muxch_STAR_.call(null,inst_20618);
var inst_20620 = cljs.core.async.close_BANG_.call(null,inst_20619);
var inst_20621 = (inst_20613 + (1));
var tmp20699 = inst_20612;
var tmp20700 = inst_20610;
var tmp20701 = inst_20611;
var inst_20610__$1 = tmp20700;
var inst_20611__$1 = tmp20701;
var inst_20612__$1 = tmp20699;
var inst_20613__$1 = inst_20621;
var state_20669__$1 = (function (){var statearr_20705 = state_20669;
(statearr_20705[(13)] = inst_20612__$1);

(statearr_20705[(14)] = inst_20610__$1);

(statearr_20705[(17)] = inst_20620);

(statearr_20705[(15)] = inst_20613__$1);

(statearr_20705[(16)] = inst_20611__$1);

return statearr_20705;
})();
var statearr_20706_20743 = state_20669__$1;
(statearr_20706_20743[(2)] = null);

(statearr_20706_20743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (18))){
var inst_20639 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20707_20744 = state_20669__$1;
(statearr_20707_20744[(2)] = inst_20639);

(statearr_20707_20744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (8))){
var inst_20612 = (state_20669[(13)]);
var inst_20613 = (state_20669[(15)]);
var inst_20615 = (inst_20613 < inst_20612);
var inst_20616 = inst_20615;
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20616)){
var statearr_20708_20745 = state_20669__$1;
(statearr_20708_20745[(1)] = (10));

} else {
var statearr_20709_20746 = state_20669__$1;
(statearr_20709_20746[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___20718,mults,ensure_mult,p))
;
return ((function (switch__7028__auto__,c__7090__auto___20718,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_20713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20713[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_20713[(1)] = (1));

return statearr_20713;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_20669){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_20669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e20714){if((e20714 instanceof Object)){
var ex__7032__auto__ = e20714;
var statearr_20715_20747 = state_20669;
(statearr_20715_20747[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20748 = state_20669;
state_20669 = G__20748;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_20669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_20669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___20718,mults,ensure_mult,p))
})();
var state__7092__auto__ = (function (){var statearr_20716 = f__7091__auto__.call(null);
(statearr_20716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___20718);

return statearr_20716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___20718,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__20750 = arguments.length;
switch (G__20750) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__20753 = arguments.length;
switch (G__20753) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__20756 = arguments.length;
switch (G__20756) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7090__auto___20826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___20826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___20826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20795){
var state_val_20796 = (state_20795[(1)]);
if((state_val_20796 === (7))){
var state_20795__$1 = state_20795;
var statearr_20797_20827 = state_20795__$1;
(statearr_20797_20827[(2)] = null);

(statearr_20797_20827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (1))){
var state_20795__$1 = state_20795;
var statearr_20798_20828 = state_20795__$1;
(statearr_20798_20828[(2)] = null);

(statearr_20798_20828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (4))){
var inst_20759 = (state_20795[(7)]);
var inst_20761 = (inst_20759 < cnt);
var state_20795__$1 = state_20795;
if(cljs.core.truth_(inst_20761)){
var statearr_20799_20829 = state_20795__$1;
(statearr_20799_20829[(1)] = (6));

} else {
var statearr_20800_20830 = state_20795__$1;
(statearr_20800_20830[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (15))){
var inst_20791 = (state_20795[(2)]);
var state_20795__$1 = state_20795;
var statearr_20801_20831 = state_20795__$1;
(statearr_20801_20831[(2)] = inst_20791);

(statearr_20801_20831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (13))){
var inst_20784 = cljs.core.async.close_BANG_.call(null,out);
var state_20795__$1 = state_20795;
var statearr_20802_20832 = state_20795__$1;
(statearr_20802_20832[(2)] = inst_20784);

(statearr_20802_20832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (6))){
var state_20795__$1 = state_20795;
var statearr_20803_20833 = state_20795__$1;
(statearr_20803_20833[(2)] = null);

(statearr_20803_20833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (3))){
var inst_20793 = (state_20795[(2)]);
var state_20795__$1 = state_20795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20795__$1,inst_20793);
} else {
if((state_val_20796 === (12))){
var inst_20781 = (state_20795[(8)]);
var inst_20781__$1 = (state_20795[(2)]);
var inst_20782 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20781__$1);
var state_20795__$1 = (function (){var statearr_20804 = state_20795;
(statearr_20804[(8)] = inst_20781__$1);

return statearr_20804;
})();
if(cljs.core.truth_(inst_20782)){
var statearr_20805_20834 = state_20795__$1;
(statearr_20805_20834[(1)] = (13));

} else {
var statearr_20806_20835 = state_20795__$1;
(statearr_20806_20835[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (2))){
var inst_20758 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20759 = (0);
var state_20795__$1 = (function (){var statearr_20807 = state_20795;
(statearr_20807[(7)] = inst_20759);

(statearr_20807[(9)] = inst_20758);

return statearr_20807;
})();
var statearr_20808_20836 = state_20795__$1;
(statearr_20808_20836[(2)] = null);

(statearr_20808_20836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (11))){
var inst_20759 = (state_20795[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20795,(10),Object,null,(9));
var inst_20768 = chs__$1.call(null,inst_20759);
var inst_20769 = done.call(null,inst_20759);
var inst_20770 = cljs.core.async.take_BANG_.call(null,inst_20768,inst_20769);
var state_20795__$1 = state_20795;
var statearr_20809_20837 = state_20795__$1;
(statearr_20809_20837[(2)] = inst_20770);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (9))){
var inst_20759 = (state_20795[(7)]);
var inst_20772 = (state_20795[(2)]);
var inst_20773 = (inst_20759 + (1));
var inst_20759__$1 = inst_20773;
var state_20795__$1 = (function (){var statearr_20810 = state_20795;
(statearr_20810[(10)] = inst_20772);

(statearr_20810[(7)] = inst_20759__$1);

return statearr_20810;
})();
var statearr_20811_20838 = state_20795__$1;
(statearr_20811_20838[(2)] = null);

(statearr_20811_20838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (5))){
var inst_20779 = (state_20795[(2)]);
var state_20795__$1 = (function (){var statearr_20812 = state_20795;
(statearr_20812[(11)] = inst_20779);

return statearr_20812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20795__$1,(12),dchan);
} else {
if((state_val_20796 === (14))){
var inst_20781 = (state_20795[(8)]);
var inst_20786 = cljs.core.apply.call(null,f,inst_20781);
var state_20795__$1 = state_20795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20795__$1,(16),out,inst_20786);
} else {
if((state_val_20796 === (16))){
var inst_20788 = (state_20795[(2)]);
var state_20795__$1 = (function (){var statearr_20813 = state_20795;
(statearr_20813[(12)] = inst_20788);

return statearr_20813;
})();
var statearr_20814_20839 = state_20795__$1;
(statearr_20814_20839[(2)] = null);

(statearr_20814_20839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (10))){
var inst_20763 = (state_20795[(2)]);
var inst_20764 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20795__$1 = (function (){var statearr_20815 = state_20795;
(statearr_20815[(13)] = inst_20763);

return statearr_20815;
})();
var statearr_20816_20840 = state_20795__$1;
(statearr_20816_20840[(2)] = inst_20764);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20796 === (8))){
var inst_20777 = (state_20795[(2)]);
var state_20795__$1 = state_20795;
var statearr_20817_20841 = state_20795__$1;
(statearr_20817_20841[(2)] = inst_20777);

(statearr_20817_20841[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___20826,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7028__auto__,c__7090__auto___20826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_20821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20821[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_20821[(1)] = (1));

return statearr_20821;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_20795){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_20795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e20822){if((e20822 instanceof Object)){
var ex__7032__auto__ = e20822;
var statearr_20823_20842 = state_20795;
(statearr_20823_20842[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20843 = state_20795;
state_20795 = G__20843;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_20795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_20795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___20826,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7092__auto__ = (function (){var statearr_20824 = f__7091__auto__.call(null);
(statearr_20824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___20826);

return statearr_20824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___20826,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__20846 = arguments.length;
switch (G__20846) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7090__auto___20901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___20901,out){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___20901,out){
return (function (state_20876){
var state_val_20877 = (state_20876[(1)]);
if((state_val_20877 === (7))){
var inst_20855 = (state_20876[(7)]);
var inst_20856 = (state_20876[(8)]);
var inst_20855__$1 = (state_20876[(2)]);
var inst_20856__$1 = cljs.core.nth.call(null,inst_20855__$1,(0),null);
var inst_20857 = cljs.core.nth.call(null,inst_20855__$1,(1),null);
var inst_20858 = (inst_20856__$1 == null);
var state_20876__$1 = (function (){var statearr_20878 = state_20876;
(statearr_20878[(7)] = inst_20855__$1);

(statearr_20878[(8)] = inst_20856__$1);

(statearr_20878[(9)] = inst_20857);

return statearr_20878;
})();
if(cljs.core.truth_(inst_20858)){
var statearr_20879_20902 = state_20876__$1;
(statearr_20879_20902[(1)] = (8));

} else {
var statearr_20880_20903 = state_20876__$1;
(statearr_20880_20903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (1))){
var inst_20847 = cljs.core.vec.call(null,chs);
var inst_20848 = inst_20847;
var state_20876__$1 = (function (){var statearr_20881 = state_20876;
(statearr_20881[(10)] = inst_20848);

return statearr_20881;
})();
var statearr_20882_20904 = state_20876__$1;
(statearr_20882_20904[(2)] = null);

(statearr_20882_20904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (4))){
var inst_20848 = (state_20876[(10)]);
var state_20876__$1 = state_20876;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20876__$1,(7),inst_20848);
} else {
if((state_val_20877 === (6))){
var inst_20872 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
var statearr_20883_20905 = state_20876__$1;
(statearr_20883_20905[(2)] = inst_20872);

(statearr_20883_20905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (3))){
var inst_20874 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20876__$1,inst_20874);
} else {
if((state_val_20877 === (2))){
var inst_20848 = (state_20876[(10)]);
var inst_20850 = cljs.core.count.call(null,inst_20848);
var inst_20851 = (inst_20850 > (0));
var state_20876__$1 = state_20876;
if(cljs.core.truth_(inst_20851)){
var statearr_20885_20906 = state_20876__$1;
(statearr_20885_20906[(1)] = (4));

} else {
var statearr_20886_20907 = state_20876__$1;
(statearr_20886_20907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (11))){
var inst_20848 = (state_20876[(10)]);
var inst_20865 = (state_20876[(2)]);
var tmp20884 = inst_20848;
var inst_20848__$1 = tmp20884;
var state_20876__$1 = (function (){var statearr_20887 = state_20876;
(statearr_20887[(10)] = inst_20848__$1);

(statearr_20887[(11)] = inst_20865);

return statearr_20887;
})();
var statearr_20888_20908 = state_20876__$1;
(statearr_20888_20908[(2)] = null);

(statearr_20888_20908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (9))){
var inst_20856 = (state_20876[(8)]);
var state_20876__$1 = state_20876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20876__$1,(11),out,inst_20856);
} else {
if((state_val_20877 === (5))){
var inst_20870 = cljs.core.async.close_BANG_.call(null,out);
var state_20876__$1 = state_20876;
var statearr_20889_20909 = state_20876__$1;
(statearr_20889_20909[(2)] = inst_20870);

(statearr_20889_20909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (10))){
var inst_20868 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
var statearr_20890_20910 = state_20876__$1;
(statearr_20890_20910[(2)] = inst_20868);

(statearr_20890_20910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (8))){
var inst_20848 = (state_20876[(10)]);
var inst_20855 = (state_20876[(7)]);
var inst_20856 = (state_20876[(8)]);
var inst_20857 = (state_20876[(9)]);
var inst_20860 = (function (){var c = inst_20857;
var v = inst_20856;
var vec__20853 = inst_20855;
var cs = inst_20848;
return ((function (c,v,vec__20853,cs,inst_20848,inst_20855,inst_20856,inst_20857,state_val_20877,c__7090__auto___20901,out){
return (function (p1__20844_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20844_SHARP_);
});
;})(c,v,vec__20853,cs,inst_20848,inst_20855,inst_20856,inst_20857,state_val_20877,c__7090__auto___20901,out))
})();
var inst_20861 = cljs.core.filterv.call(null,inst_20860,inst_20848);
var inst_20848__$1 = inst_20861;
var state_20876__$1 = (function (){var statearr_20891 = state_20876;
(statearr_20891[(10)] = inst_20848__$1);

return statearr_20891;
})();
var statearr_20892_20911 = state_20876__$1;
(statearr_20892_20911[(2)] = null);

(statearr_20892_20911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___20901,out))
;
return ((function (switch__7028__auto__,c__7090__auto___20901,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_20896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20896[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_20896[(1)] = (1));

return statearr_20896;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_20876){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_20876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e20897){if((e20897 instanceof Object)){
var ex__7032__auto__ = e20897;
var statearr_20898_20912 = state_20876;
(statearr_20898_20912[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20913 = state_20876;
state_20876 = G__20913;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_20876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_20876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___20901,out))
})();
var state__7092__auto__ = (function (){var statearr_20899 = f__7091__auto__.call(null);
(statearr_20899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___20901);

return statearr_20899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___20901,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__20915 = arguments.length;
switch (G__20915) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7090__auto___20963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___20963,out){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___20963,out){
return (function (state_20939){
var state_val_20940 = (state_20939[(1)]);
if((state_val_20940 === (7))){
var inst_20921 = (state_20939[(7)]);
var inst_20921__$1 = (state_20939[(2)]);
var inst_20922 = (inst_20921__$1 == null);
var inst_20923 = cljs.core.not.call(null,inst_20922);
var state_20939__$1 = (function (){var statearr_20941 = state_20939;
(statearr_20941[(7)] = inst_20921__$1);

return statearr_20941;
})();
if(inst_20923){
var statearr_20942_20964 = state_20939__$1;
(statearr_20942_20964[(1)] = (8));

} else {
var statearr_20943_20965 = state_20939__$1;
(statearr_20943_20965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (1))){
var inst_20916 = (0);
var state_20939__$1 = (function (){var statearr_20944 = state_20939;
(statearr_20944[(8)] = inst_20916);

return statearr_20944;
})();
var statearr_20945_20966 = state_20939__$1;
(statearr_20945_20966[(2)] = null);

(statearr_20945_20966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (4))){
var state_20939__$1 = state_20939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20939__$1,(7),ch);
} else {
if((state_val_20940 === (6))){
var inst_20934 = (state_20939[(2)]);
var state_20939__$1 = state_20939;
var statearr_20946_20967 = state_20939__$1;
(statearr_20946_20967[(2)] = inst_20934);

(statearr_20946_20967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (3))){
var inst_20936 = (state_20939[(2)]);
var inst_20937 = cljs.core.async.close_BANG_.call(null,out);
var state_20939__$1 = (function (){var statearr_20947 = state_20939;
(statearr_20947[(9)] = inst_20936);

return statearr_20947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20939__$1,inst_20937);
} else {
if((state_val_20940 === (2))){
var inst_20916 = (state_20939[(8)]);
var inst_20918 = (inst_20916 < n);
var state_20939__$1 = state_20939;
if(cljs.core.truth_(inst_20918)){
var statearr_20948_20968 = state_20939__$1;
(statearr_20948_20968[(1)] = (4));

} else {
var statearr_20949_20969 = state_20939__$1;
(statearr_20949_20969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (11))){
var inst_20916 = (state_20939[(8)]);
var inst_20926 = (state_20939[(2)]);
var inst_20927 = (inst_20916 + (1));
var inst_20916__$1 = inst_20927;
var state_20939__$1 = (function (){var statearr_20950 = state_20939;
(statearr_20950[(10)] = inst_20926);

(statearr_20950[(8)] = inst_20916__$1);

return statearr_20950;
})();
var statearr_20951_20970 = state_20939__$1;
(statearr_20951_20970[(2)] = null);

(statearr_20951_20970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (9))){
var state_20939__$1 = state_20939;
var statearr_20952_20971 = state_20939__$1;
(statearr_20952_20971[(2)] = null);

(statearr_20952_20971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (5))){
var state_20939__$1 = state_20939;
var statearr_20953_20972 = state_20939__$1;
(statearr_20953_20972[(2)] = null);

(statearr_20953_20972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (10))){
var inst_20931 = (state_20939[(2)]);
var state_20939__$1 = state_20939;
var statearr_20954_20973 = state_20939__$1;
(statearr_20954_20973[(2)] = inst_20931);

(statearr_20954_20973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (8))){
var inst_20921 = (state_20939[(7)]);
var state_20939__$1 = state_20939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20939__$1,(11),out,inst_20921);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___20963,out))
;
return ((function (switch__7028__auto__,c__7090__auto___20963,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_20958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20958[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_20958[(1)] = (1));

return statearr_20958;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_20939){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_20939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e20959){if((e20959 instanceof Object)){
var ex__7032__auto__ = e20959;
var statearr_20960_20974 = state_20939;
(statearr_20960_20974[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20975 = state_20939;
state_20939 = G__20975;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_20939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_20939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___20963,out))
})();
var state__7092__auto__ = (function (){var statearr_20961 = f__7091__auto__.call(null);
(statearr_20961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___20963);

return statearr_20961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___20963,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t20983 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20983 = (function (ch,f,map_LT_,meta20984){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20984 = meta20984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20983.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20983.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20986 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20986 = (function (fn1,_,meta20984,map_LT_,f,ch,meta20987){
this.fn1 = fn1;
this._ = _;
this.meta20984 = meta20984;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20987 = meta20987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20986.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20976_SHARP_){
return f1.call(null,(((p1__20976_SHARP_ == null))?null:self__.f.call(null,p1__20976_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20988){
var self__ = this;
var _20988__$1 = this;
return self__.meta20987;
});})(___$1))
;

cljs.core.async.t20986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20988,meta20987__$1){
var self__ = this;
var _20988__$1 = this;
return (new cljs.core.async.t20986(self__.fn1,self__._,self__.meta20984,self__.map_LT_,self__.f,self__.ch,meta20987__$1));
});})(___$1))
;

cljs.core.async.t20986.cljs$lang$type = true;

cljs.core.async.t20986.cljs$lang$ctorStr = "cljs.core.async/t20986";

cljs.core.async.t20986.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t20986");
});})(___$1))
;

cljs.core.async.__GT_t20986 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t20986(fn1__$1,___$2,meta20984__$1,map_LT___$1,f__$1,ch__$1,meta20987){
return (new cljs.core.async.t20986(fn1__$1,___$2,meta20984__$1,map_LT___$1,f__$1,ch__$1,meta20987));
});})(___$1))
;

}

return (new cljs.core.async.t20986(fn1,___$1,self__.meta20984,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4087__auto__ = ret;
if(cljs.core.truth_(and__4087__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4087__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t20983.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20985){
var self__ = this;
var _20985__$1 = this;
return self__.meta20984;
});

cljs.core.async.t20983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20985,meta20984__$1){
var self__ = this;
var _20985__$1 = this;
return (new cljs.core.async.t20983(self__.ch,self__.f,self__.map_LT_,meta20984__$1));
});

cljs.core.async.t20983.cljs$lang$type = true;

cljs.core.async.t20983.cljs$lang$ctorStr = "cljs.core.async/t20983";

cljs.core.async.t20983.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t20983");
});

cljs.core.async.__GT_t20983 = (function cljs$core$async$map_LT__$___GT_t20983(ch__$1,f__$1,map_LT___$1,meta20984){
return (new cljs.core.async.t20983(ch__$1,f__$1,map_LT___$1,meta20984));
});

}

return (new cljs.core.async.t20983(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t20992 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20992 = (function (ch,f,map_GT_,meta20993){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20993 = meta20993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20992.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20992.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20992.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20994){
var self__ = this;
var _20994__$1 = this;
return self__.meta20993;
});

cljs.core.async.t20992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20994,meta20993__$1){
var self__ = this;
var _20994__$1 = this;
return (new cljs.core.async.t20992(self__.ch,self__.f,self__.map_GT_,meta20993__$1));
});

cljs.core.async.t20992.cljs$lang$type = true;

cljs.core.async.t20992.cljs$lang$ctorStr = "cljs.core.async/t20992";

cljs.core.async.t20992.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t20992");
});

cljs.core.async.__GT_t20992 = (function cljs$core$async$map_GT__$___GT_t20992(ch__$1,f__$1,map_GT___$1,meta20993){
return (new cljs.core.async.t20992(ch__$1,f__$1,map_GT___$1,meta20993));
});

}

return (new cljs.core.async.t20992(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t20998 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20998 = (function (ch,p,filter_GT_,meta20999){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20999 = meta20999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20998.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20998.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20998.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20998.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20998.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20998.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20998.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21000){
var self__ = this;
var _21000__$1 = this;
return self__.meta20999;
});

cljs.core.async.t20998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21000,meta20999__$1){
var self__ = this;
var _21000__$1 = this;
return (new cljs.core.async.t20998(self__.ch,self__.p,self__.filter_GT_,meta20999__$1));
});

cljs.core.async.t20998.cljs$lang$type = true;

cljs.core.async.t20998.cljs$lang$ctorStr = "cljs.core.async/t20998";

cljs.core.async.t20998.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t20998");
});

cljs.core.async.__GT_t20998 = (function cljs$core$async$filter_GT__$___GT_t20998(ch__$1,p__$1,filter_GT___$1,meta20999){
return (new cljs.core.async.t20998(ch__$1,p__$1,filter_GT___$1,meta20999));
});

}

return (new cljs.core.async.t20998(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__21002 = arguments.length;
switch (G__21002) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7090__auto___21045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___21045,out){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___21045,out){
return (function (state_21023){
var state_val_21024 = (state_21023[(1)]);
if((state_val_21024 === (7))){
var inst_21019 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
var statearr_21025_21046 = state_21023__$1;
(statearr_21025_21046[(2)] = inst_21019);

(statearr_21025_21046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (1))){
var state_21023__$1 = state_21023;
var statearr_21026_21047 = state_21023__$1;
(statearr_21026_21047[(2)] = null);

(statearr_21026_21047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (4))){
var inst_21005 = (state_21023[(7)]);
var inst_21005__$1 = (state_21023[(2)]);
var inst_21006 = (inst_21005__$1 == null);
var state_21023__$1 = (function (){var statearr_21027 = state_21023;
(statearr_21027[(7)] = inst_21005__$1);

return statearr_21027;
})();
if(cljs.core.truth_(inst_21006)){
var statearr_21028_21048 = state_21023__$1;
(statearr_21028_21048[(1)] = (5));

} else {
var statearr_21029_21049 = state_21023__$1;
(statearr_21029_21049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (6))){
var inst_21005 = (state_21023[(7)]);
var inst_21010 = p.call(null,inst_21005);
var state_21023__$1 = state_21023;
if(cljs.core.truth_(inst_21010)){
var statearr_21030_21050 = state_21023__$1;
(statearr_21030_21050[(1)] = (8));

} else {
var statearr_21031_21051 = state_21023__$1;
(statearr_21031_21051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (3))){
var inst_21021 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21023__$1,inst_21021);
} else {
if((state_val_21024 === (2))){
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21023__$1,(4),ch);
} else {
if((state_val_21024 === (11))){
var inst_21013 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
var statearr_21032_21052 = state_21023__$1;
(statearr_21032_21052[(2)] = inst_21013);

(statearr_21032_21052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (9))){
var state_21023__$1 = state_21023;
var statearr_21033_21053 = state_21023__$1;
(statearr_21033_21053[(2)] = null);

(statearr_21033_21053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (5))){
var inst_21008 = cljs.core.async.close_BANG_.call(null,out);
var state_21023__$1 = state_21023;
var statearr_21034_21054 = state_21023__$1;
(statearr_21034_21054[(2)] = inst_21008);

(statearr_21034_21054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (10))){
var inst_21016 = (state_21023[(2)]);
var state_21023__$1 = (function (){var statearr_21035 = state_21023;
(statearr_21035[(8)] = inst_21016);

return statearr_21035;
})();
var statearr_21036_21055 = state_21023__$1;
(statearr_21036_21055[(2)] = null);

(statearr_21036_21055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (8))){
var inst_21005 = (state_21023[(7)]);
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21023__$1,(11),out,inst_21005);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___21045,out))
;
return ((function (switch__7028__auto__,c__7090__auto___21045,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_21040 = [null,null,null,null,null,null,null,null,null];
(statearr_21040[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_21040[(1)] = (1));

return statearr_21040;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_21023){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_21023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e21041){if((e21041 instanceof Object)){
var ex__7032__auto__ = e21041;
var statearr_21042_21056 = state_21023;
(statearr_21042_21056[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21057 = state_21023;
state_21023 = G__21057;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_21023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_21023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___21045,out))
})();
var state__7092__auto__ = (function (){var statearr_21043 = f__7091__auto__.call(null);
(statearr_21043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___21045);

return statearr_21043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___21045,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__21059 = arguments.length;
switch (G__21059) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__){
return (function (state_21226){
var state_val_21227 = (state_21226[(1)]);
if((state_val_21227 === (7))){
var inst_21222 = (state_21226[(2)]);
var state_21226__$1 = state_21226;
var statearr_21228_21269 = state_21226__$1;
(statearr_21228_21269[(2)] = inst_21222);

(statearr_21228_21269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (20))){
var inst_21192 = (state_21226[(7)]);
var inst_21203 = (state_21226[(2)]);
var inst_21204 = cljs.core.next.call(null,inst_21192);
var inst_21178 = inst_21204;
var inst_21179 = null;
var inst_21180 = (0);
var inst_21181 = (0);
var state_21226__$1 = (function (){var statearr_21229 = state_21226;
(statearr_21229[(8)] = inst_21178);

(statearr_21229[(9)] = inst_21203);

(statearr_21229[(10)] = inst_21180);

(statearr_21229[(11)] = inst_21179);

(statearr_21229[(12)] = inst_21181);

return statearr_21229;
})();
var statearr_21230_21270 = state_21226__$1;
(statearr_21230_21270[(2)] = null);

(statearr_21230_21270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (1))){
var state_21226__$1 = state_21226;
var statearr_21231_21271 = state_21226__$1;
(statearr_21231_21271[(2)] = null);

(statearr_21231_21271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (4))){
var inst_21167 = (state_21226[(13)]);
var inst_21167__$1 = (state_21226[(2)]);
var inst_21168 = (inst_21167__$1 == null);
var state_21226__$1 = (function (){var statearr_21232 = state_21226;
(statearr_21232[(13)] = inst_21167__$1);

return statearr_21232;
})();
if(cljs.core.truth_(inst_21168)){
var statearr_21233_21272 = state_21226__$1;
(statearr_21233_21272[(1)] = (5));

} else {
var statearr_21234_21273 = state_21226__$1;
(statearr_21234_21273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (15))){
var state_21226__$1 = state_21226;
var statearr_21238_21274 = state_21226__$1;
(statearr_21238_21274[(2)] = null);

(statearr_21238_21274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (21))){
var state_21226__$1 = state_21226;
var statearr_21239_21275 = state_21226__$1;
(statearr_21239_21275[(2)] = null);

(statearr_21239_21275[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (13))){
var inst_21178 = (state_21226[(8)]);
var inst_21180 = (state_21226[(10)]);
var inst_21179 = (state_21226[(11)]);
var inst_21181 = (state_21226[(12)]);
var inst_21188 = (state_21226[(2)]);
var inst_21189 = (inst_21181 + (1));
var tmp21235 = inst_21178;
var tmp21236 = inst_21180;
var tmp21237 = inst_21179;
var inst_21178__$1 = tmp21235;
var inst_21179__$1 = tmp21237;
var inst_21180__$1 = tmp21236;
var inst_21181__$1 = inst_21189;
var state_21226__$1 = (function (){var statearr_21240 = state_21226;
(statearr_21240[(8)] = inst_21178__$1);

(statearr_21240[(10)] = inst_21180__$1);

(statearr_21240[(14)] = inst_21188);

(statearr_21240[(11)] = inst_21179__$1);

(statearr_21240[(12)] = inst_21181__$1);

return statearr_21240;
})();
var statearr_21241_21276 = state_21226__$1;
(statearr_21241_21276[(2)] = null);

(statearr_21241_21276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (22))){
var state_21226__$1 = state_21226;
var statearr_21242_21277 = state_21226__$1;
(statearr_21242_21277[(2)] = null);

(statearr_21242_21277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (6))){
var inst_21167 = (state_21226[(13)]);
var inst_21176 = f.call(null,inst_21167);
var inst_21177 = cljs.core.seq.call(null,inst_21176);
var inst_21178 = inst_21177;
var inst_21179 = null;
var inst_21180 = (0);
var inst_21181 = (0);
var state_21226__$1 = (function (){var statearr_21243 = state_21226;
(statearr_21243[(8)] = inst_21178);

(statearr_21243[(10)] = inst_21180);

(statearr_21243[(11)] = inst_21179);

(statearr_21243[(12)] = inst_21181);

return statearr_21243;
})();
var statearr_21244_21278 = state_21226__$1;
(statearr_21244_21278[(2)] = null);

(statearr_21244_21278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (17))){
var inst_21192 = (state_21226[(7)]);
var inst_21196 = cljs.core.chunk_first.call(null,inst_21192);
var inst_21197 = cljs.core.chunk_rest.call(null,inst_21192);
var inst_21198 = cljs.core.count.call(null,inst_21196);
var inst_21178 = inst_21197;
var inst_21179 = inst_21196;
var inst_21180 = inst_21198;
var inst_21181 = (0);
var state_21226__$1 = (function (){var statearr_21245 = state_21226;
(statearr_21245[(8)] = inst_21178);

(statearr_21245[(10)] = inst_21180);

(statearr_21245[(11)] = inst_21179);

(statearr_21245[(12)] = inst_21181);

return statearr_21245;
})();
var statearr_21246_21279 = state_21226__$1;
(statearr_21246_21279[(2)] = null);

(statearr_21246_21279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (3))){
var inst_21224 = (state_21226[(2)]);
var state_21226__$1 = state_21226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21226__$1,inst_21224);
} else {
if((state_val_21227 === (12))){
var inst_21212 = (state_21226[(2)]);
var state_21226__$1 = state_21226;
var statearr_21247_21280 = state_21226__$1;
(statearr_21247_21280[(2)] = inst_21212);

(statearr_21247_21280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (2))){
var state_21226__$1 = state_21226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21226__$1,(4),in$);
} else {
if((state_val_21227 === (23))){
var inst_21220 = (state_21226[(2)]);
var state_21226__$1 = state_21226;
var statearr_21248_21281 = state_21226__$1;
(statearr_21248_21281[(2)] = inst_21220);

(statearr_21248_21281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (19))){
var inst_21207 = (state_21226[(2)]);
var state_21226__$1 = state_21226;
var statearr_21249_21282 = state_21226__$1;
(statearr_21249_21282[(2)] = inst_21207);

(statearr_21249_21282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (11))){
var inst_21178 = (state_21226[(8)]);
var inst_21192 = (state_21226[(7)]);
var inst_21192__$1 = cljs.core.seq.call(null,inst_21178);
var state_21226__$1 = (function (){var statearr_21250 = state_21226;
(statearr_21250[(7)] = inst_21192__$1);

return statearr_21250;
})();
if(inst_21192__$1){
var statearr_21251_21283 = state_21226__$1;
(statearr_21251_21283[(1)] = (14));

} else {
var statearr_21252_21284 = state_21226__$1;
(statearr_21252_21284[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (9))){
var inst_21214 = (state_21226[(2)]);
var inst_21215 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21226__$1 = (function (){var statearr_21253 = state_21226;
(statearr_21253[(15)] = inst_21214);

return statearr_21253;
})();
if(cljs.core.truth_(inst_21215)){
var statearr_21254_21285 = state_21226__$1;
(statearr_21254_21285[(1)] = (21));

} else {
var statearr_21255_21286 = state_21226__$1;
(statearr_21255_21286[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (5))){
var inst_21170 = cljs.core.async.close_BANG_.call(null,out);
var state_21226__$1 = state_21226;
var statearr_21256_21287 = state_21226__$1;
(statearr_21256_21287[(2)] = inst_21170);

(statearr_21256_21287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (14))){
var inst_21192 = (state_21226[(7)]);
var inst_21194 = cljs.core.chunked_seq_QMARK_.call(null,inst_21192);
var state_21226__$1 = state_21226;
if(inst_21194){
var statearr_21257_21288 = state_21226__$1;
(statearr_21257_21288[(1)] = (17));

} else {
var statearr_21258_21289 = state_21226__$1;
(statearr_21258_21289[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (16))){
var inst_21210 = (state_21226[(2)]);
var state_21226__$1 = state_21226;
var statearr_21259_21290 = state_21226__$1;
(statearr_21259_21290[(2)] = inst_21210);

(statearr_21259_21290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21227 === (10))){
var inst_21179 = (state_21226[(11)]);
var inst_21181 = (state_21226[(12)]);
var inst_21186 = cljs.core._nth.call(null,inst_21179,inst_21181);
var state_21226__$1 = state_21226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21226__$1,(13),out,inst_21186);
} else {
if((state_val_21227 === (18))){
var inst_21192 = (state_21226[(7)]);
var inst_21201 = cljs.core.first.call(null,inst_21192);
var state_21226__$1 = state_21226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21226__$1,(20),out,inst_21201);
} else {
if((state_val_21227 === (8))){
var inst_21180 = (state_21226[(10)]);
var inst_21181 = (state_21226[(12)]);
var inst_21183 = (inst_21181 < inst_21180);
var inst_21184 = inst_21183;
var state_21226__$1 = state_21226;
if(cljs.core.truth_(inst_21184)){
var statearr_21260_21291 = state_21226__$1;
(statearr_21260_21291[(1)] = (10));

} else {
var statearr_21261_21292 = state_21226__$1;
(statearr_21261_21292[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto__))
;
return ((function (switch__7028__auto__,c__7090__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_21265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21265[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__);

(statearr_21265[(1)] = (1));

return statearr_21265;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____1 = (function (state_21226){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_21226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e21266){if((e21266 instanceof Object)){
var ex__7032__auto__ = e21266;
var statearr_21267_21293 = state_21226;
(statearr_21267_21293[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21294 = state_21226;
state_21226 = G__21294;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__ = function(state_21226){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____1.call(this,state_21226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__))
})();
var state__7092__auto__ = (function (){var statearr_21268 = f__7091__auto__.call(null);
(statearr_21268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_21268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__))
);

return c__7090__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__21296 = arguments.length;
switch (G__21296) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__21299 = arguments.length;
switch (G__21299) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__21302 = arguments.length;
switch (G__21302) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7090__auto___21352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___21352,out){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___21352,out){
return (function (state_21326){
var state_val_21327 = (state_21326[(1)]);
if((state_val_21327 === (7))){
var inst_21321 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
var statearr_21328_21353 = state_21326__$1;
(statearr_21328_21353[(2)] = inst_21321);

(statearr_21328_21353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (1))){
var inst_21303 = null;
var state_21326__$1 = (function (){var statearr_21329 = state_21326;
(statearr_21329[(7)] = inst_21303);

return statearr_21329;
})();
var statearr_21330_21354 = state_21326__$1;
(statearr_21330_21354[(2)] = null);

(statearr_21330_21354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (4))){
var inst_21306 = (state_21326[(8)]);
var inst_21306__$1 = (state_21326[(2)]);
var inst_21307 = (inst_21306__$1 == null);
var inst_21308 = cljs.core.not.call(null,inst_21307);
var state_21326__$1 = (function (){var statearr_21331 = state_21326;
(statearr_21331[(8)] = inst_21306__$1);

return statearr_21331;
})();
if(inst_21308){
var statearr_21332_21355 = state_21326__$1;
(statearr_21332_21355[(1)] = (5));

} else {
var statearr_21333_21356 = state_21326__$1;
(statearr_21333_21356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (6))){
var state_21326__$1 = state_21326;
var statearr_21334_21357 = state_21326__$1;
(statearr_21334_21357[(2)] = null);

(statearr_21334_21357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (3))){
var inst_21323 = (state_21326[(2)]);
var inst_21324 = cljs.core.async.close_BANG_.call(null,out);
var state_21326__$1 = (function (){var statearr_21335 = state_21326;
(statearr_21335[(9)] = inst_21323);

return statearr_21335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21326__$1,inst_21324);
} else {
if((state_val_21327 === (2))){
var state_21326__$1 = state_21326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21326__$1,(4),ch);
} else {
if((state_val_21327 === (11))){
var inst_21306 = (state_21326[(8)]);
var inst_21315 = (state_21326[(2)]);
var inst_21303 = inst_21306;
var state_21326__$1 = (function (){var statearr_21336 = state_21326;
(statearr_21336[(10)] = inst_21315);

(statearr_21336[(7)] = inst_21303);

return statearr_21336;
})();
var statearr_21337_21358 = state_21326__$1;
(statearr_21337_21358[(2)] = null);

(statearr_21337_21358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (9))){
var inst_21306 = (state_21326[(8)]);
var state_21326__$1 = state_21326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21326__$1,(11),out,inst_21306);
} else {
if((state_val_21327 === (5))){
var inst_21303 = (state_21326[(7)]);
var inst_21306 = (state_21326[(8)]);
var inst_21310 = cljs.core._EQ_.call(null,inst_21306,inst_21303);
var state_21326__$1 = state_21326;
if(inst_21310){
var statearr_21339_21359 = state_21326__$1;
(statearr_21339_21359[(1)] = (8));

} else {
var statearr_21340_21360 = state_21326__$1;
(statearr_21340_21360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (10))){
var inst_21318 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
var statearr_21341_21361 = state_21326__$1;
(statearr_21341_21361[(2)] = inst_21318);

(statearr_21341_21361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (8))){
var inst_21303 = (state_21326[(7)]);
var tmp21338 = inst_21303;
var inst_21303__$1 = tmp21338;
var state_21326__$1 = (function (){var statearr_21342 = state_21326;
(statearr_21342[(7)] = inst_21303__$1);

return statearr_21342;
})();
var statearr_21343_21362 = state_21326__$1;
(statearr_21343_21362[(2)] = null);

(statearr_21343_21362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___21352,out))
;
return ((function (switch__7028__auto__,c__7090__auto___21352,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_21347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21347[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_21347[(1)] = (1));

return statearr_21347;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_21326){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_21326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e21348){if((e21348 instanceof Object)){
var ex__7032__auto__ = e21348;
var statearr_21349_21363 = state_21326;
(statearr_21349_21363[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21364 = state_21326;
state_21326 = G__21364;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_21326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_21326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___21352,out))
})();
var state__7092__auto__ = (function (){var statearr_21350 = f__7091__auto__.call(null);
(statearr_21350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___21352);

return statearr_21350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___21352,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__21366 = arguments.length;
switch (G__21366) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7090__auto___21435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___21435,out){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___21435,out){
return (function (state_21404){
var state_val_21405 = (state_21404[(1)]);
if((state_val_21405 === (7))){
var inst_21400 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
var statearr_21406_21436 = state_21404__$1;
(statearr_21406_21436[(2)] = inst_21400);

(statearr_21406_21436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (1))){
var inst_21367 = (new Array(n));
var inst_21368 = inst_21367;
var inst_21369 = (0);
var state_21404__$1 = (function (){var statearr_21407 = state_21404;
(statearr_21407[(7)] = inst_21369);

(statearr_21407[(8)] = inst_21368);

return statearr_21407;
})();
var statearr_21408_21437 = state_21404__$1;
(statearr_21408_21437[(2)] = null);

(statearr_21408_21437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (4))){
var inst_21372 = (state_21404[(9)]);
var inst_21372__$1 = (state_21404[(2)]);
var inst_21373 = (inst_21372__$1 == null);
var inst_21374 = cljs.core.not.call(null,inst_21373);
var state_21404__$1 = (function (){var statearr_21409 = state_21404;
(statearr_21409[(9)] = inst_21372__$1);

return statearr_21409;
})();
if(inst_21374){
var statearr_21410_21438 = state_21404__$1;
(statearr_21410_21438[(1)] = (5));

} else {
var statearr_21411_21439 = state_21404__$1;
(statearr_21411_21439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (15))){
var inst_21394 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
var statearr_21412_21440 = state_21404__$1;
(statearr_21412_21440[(2)] = inst_21394);

(statearr_21412_21440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (13))){
var state_21404__$1 = state_21404;
var statearr_21413_21441 = state_21404__$1;
(statearr_21413_21441[(2)] = null);

(statearr_21413_21441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (6))){
var inst_21369 = (state_21404[(7)]);
var inst_21390 = (inst_21369 > (0));
var state_21404__$1 = state_21404;
if(cljs.core.truth_(inst_21390)){
var statearr_21414_21442 = state_21404__$1;
(statearr_21414_21442[(1)] = (12));

} else {
var statearr_21415_21443 = state_21404__$1;
(statearr_21415_21443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (3))){
var inst_21402 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21404__$1,inst_21402);
} else {
if((state_val_21405 === (12))){
var inst_21368 = (state_21404[(8)]);
var inst_21392 = cljs.core.vec.call(null,inst_21368);
var state_21404__$1 = state_21404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21404__$1,(15),out,inst_21392);
} else {
if((state_val_21405 === (2))){
var state_21404__$1 = state_21404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21404__$1,(4),ch);
} else {
if((state_val_21405 === (11))){
var inst_21384 = (state_21404[(2)]);
var inst_21385 = (new Array(n));
var inst_21368 = inst_21385;
var inst_21369 = (0);
var state_21404__$1 = (function (){var statearr_21416 = state_21404;
(statearr_21416[(7)] = inst_21369);

(statearr_21416[(8)] = inst_21368);

(statearr_21416[(10)] = inst_21384);

return statearr_21416;
})();
var statearr_21417_21444 = state_21404__$1;
(statearr_21417_21444[(2)] = null);

(statearr_21417_21444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (9))){
var inst_21368 = (state_21404[(8)]);
var inst_21382 = cljs.core.vec.call(null,inst_21368);
var state_21404__$1 = state_21404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21404__$1,(11),out,inst_21382);
} else {
if((state_val_21405 === (5))){
var inst_21372 = (state_21404[(9)]);
var inst_21369 = (state_21404[(7)]);
var inst_21368 = (state_21404[(8)]);
var inst_21377 = (state_21404[(11)]);
var inst_21376 = (inst_21368[inst_21369] = inst_21372);
var inst_21377__$1 = (inst_21369 + (1));
var inst_21378 = (inst_21377__$1 < n);
var state_21404__$1 = (function (){var statearr_21418 = state_21404;
(statearr_21418[(12)] = inst_21376);

(statearr_21418[(11)] = inst_21377__$1);

return statearr_21418;
})();
if(cljs.core.truth_(inst_21378)){
var statearr_21419_21445 = state_21404__$1;
(statearr_21419_21445[(1)] = (8));

} else {
var statearr_21420_21446 = state_21404__$1;
(statearr_21420_21446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (14))){
var inst_21397 = (state_21404[(2)]);
var inst_21398 = cljs.core.async.close_BANG_.call(null,out);
var state_21404__$1 = (function (){var statearr_21422 = state_21404;
(statearr_21422[(13)] = inst_21397);

return statearr_21422;
})();
var statearr_21423_21447 = state_21404__$1;
(statearr_21423_21447[(2)] = inst_21398);

(statearr_21423_21447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (10))){
var inst_21388 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
var statearr_21424_21448 = state_21404__$1;
(statearr_21424_21448[(2)] = inst_21388);

(statearr_21424_21448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (8))){
var inst_21368 = (state_21404[(8)]);
var inst_21377 = (state_21404[(11)]);
var tmp21421 = inst_21368;
var inst_21368__$1 = tmp21421;
var inst_21369 = inst_21377;
var state_21404__$1 = (function (){var statearr_21425 = state_21404;
(statearr_21425[(7)] = inst_21369);

(statearr_21425[(8)] = inst_21368__$1);

return statearr_21425;
})();
var statearr_21426_21449 = state_21404__$1;
(statearr_21426_21449[(2)] = null);

(statearr_21426_21449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___21435,out))
;
return ((function (switch__7028__auto__,c__7090__auto___21435,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_21430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21430[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_21430[(1)] = (1));

return statearr_21430;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_21404){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_21404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e21431){if((e21431 instanceof Object)){
var ex__7032__auto__ = e21431;
var statearr_21432_21450 = state_21404;
(statearr_21432_21450[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21451 = state_21404;
state_21404 = G__21451;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_21404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_21404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___21435,out))
})();
var state__7092__auto__ = (function (){var statearr_21433 = f__7091__auto__.call(null);
(statearr_21433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___21435);

return statearr_21433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___21435,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__21453 = arguments.length;
switch (G__21453) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7090__auto___21526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___21526,out){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___21526,out){
return (function (state_21495){
var state_val_21496 = (state_21495[(1)]);
if((state_val_21496 === (7))){
var inst_21491 = (state_21495[(2)]);
var state_21495__$1 = state_21495;
var statearr_21497_21527 = state_21495__$1;
(statearr_21497_21527[(2)] = inst_21491);

(statearr_21497_21527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (1))){
var inst_21454 = [];
var inst_21455 = inst_21454;
var inst_21456 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21495__$1 = (function (){var statearr_21498 = state_21495;
(statearr_21498[(7)] = inst_21456);

(statearr_21498[(8)] = inst_21455);

return statearr_21498;
})();
var statearr_21499_21528 = state_21495__$1;
(statearr_21499_21528[(2)] = null);

(statearr_21499_21528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (4))){
var inst_21459 = (state_21495[(9)]);
var inst_21459__$1 = (state_21495[(2)]);
var inst_21460 = (inst_21459__$1 == null);
var inst_21461 = cljs.core.not.call(null,inst_21460);
var state_21495__$1 = (function (){var statearr_21500 = state_21495;
(statearr_21500[(9)] = inst_21459__$1);

return statearr_21500;
})();
if(inst_21461){
var statearr_21501_21529 = state_21495__$1;
(statearr_21501_21529[(1)] = (5));

} else {
var statearr_21502_21530 = state_21495__$1;
(statearr_21502_21530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (15))){
var inst_21485 = (state_21495[(2)]);
var state_21495__$1 = state_21495;
var statearr_21503_21531 = state_21495__$1;
(statearr_21503_21531[(2)] = inst_21485);

(statearr_21503_21531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (13))){
var state_21495__$1 = state_21495;
var statearr_21504_21532 = state_21495__$1;
(statearr_21504_21532[(2)] = null);

(statearr_21504_21532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (6))){
var inst_21455 = (state_21495[(8)]);
var inst_21480 = inst_21455.length;
var inst_21481 = (inst_21480 > (0));
var state_21495__$1 = state_21495;
if(cljs.core.truth_(inst_21481)){
var statearr_21505_21533 = state_21495__$1;
(statearr_21505_21533[(1)] = (12));

} else {
var statearr_21506_21534 = state_21495__$1;
(statearr_21506_21534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (3))){
var inst_21493 = (state_21495[(2)]);
var state_21495__$1 = state_21495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21495__$1,inst_21493);
} else {
if((state_val_21496 === (12))){
var inst_21455 = (state_21495[(8)]);
var inst_21483 = cljs.core.vec.call(null,inst_21455);
var state_21495__$1 = state_21495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21495__$1,(15),out,inst_21483);
} else {
if((state_val_21496 === (2))){
var state_21495__$1 = state_21495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21495__$1,(4),ch);
} else {
if((state_val_21496 === (11))){
var inst_21463 = (state_21495[(10)]);
var inst_21459 = (state_21495[(9)]);
var inst_21473 = (state_21495[(2)]);
var inst_21474 = [];
var inst_21475 = inst_21474.push(inst_21459);
var inst_21455 = inst_21474;
var inst_21456 = inst_21463;
var state_21495__$1 = (function (){var statearr_21507 = state_21495;
(statearr_21507[(11)] = inst_21475);

(statearr_21507[(12)] = inst_21473);

(statearr_21507[(7)] = inst_21456);

(statearr_21507[(8)] = inst_21455);

return statearr_21507;
})();
var statearr_21508_21535 = state_21495__$1;
(statearr_21508_21535[(2)] = null);

(statearr_21508_21535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (9))){
var inst_21455 = (state_21495[(8)]);
var inst_21471 = cljs.core.vec.call(null,inst_21455);
var state_21495__$1 = state_21495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21495__$1,(11),out,inst_21471);
} else {
if((state_val_21496 === (5))){
var inst_21456 = (state_21495[(7)]);
var inst_21463 = (state_21495[(10)]);
var inst_21459 = (state_21495[(9)]);
var inst_21463__$1 = f.call(null,inst_21459);
var inst_21464 = cljs.core._EQ_.call(null,inst_21463__$1,inst_21456);
var inst_21465 = cljs.core.keyword_identical_QMARK_.call(null,inst_21456,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21466 = (inst_21464) || (inst_21465);
var state_21495__$1 = (function (){var statearr_21509 = state_21495;
(statearr_21509[(10)] = inst_21463__$1);

return statearr_21509;
})();
if(cljs.core.truth_(inst_21466)){
var statearr_21510_21536 = state_21495__$1;
(statearr_21510_21536[(1)] = (8));

} else {
var statearr_21511_21537 = state_21495__$1;
(statearr_21511_21537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (14))){
var inst_21488 = (state_21495[(2)]);
var inst_21489 = cljs.core.async.close_BANG_.call(null,out);
var state_21495__$1 = (function (){var statearr_21513 = state_21495;
(statearr_21513[(13)] = inst_21488);

return statearr_21513;
})();
var statearr_21514_21538 = state_21495__$1;
(statearr_21514_21538[(2)] = inst_21489);

(statearr_21514_21538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (10))){
var inst_21478 = (state_21495[(2)]);
var state_21495__$1 = state_21495;
var statearr_21515_21539 = state_21495__$1;
(statearr_21515_21539[(2)] = inst_21478);

(statearr_21515_21539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21496 === (8))){
var inst_21463 = (state_21495[(10)]);
var inst_21459 = (state_21495[(9)]);
var inst_21455 = (state_21495[(8)]);
var inst_21468 = inst_21455.push(inst_21459);
var tmp21512 = inst_21455;
var inst_21455__$1 = tmp21512;
var inst_21456 = inst_21463;
var state_21495__$1 = (function (){var statearr_21516 = state_21495;
(statearr_21516[(7)] = inst_21456);

(statearr_21516[(14)] = inst_21468);

(statearr_21516[(8)] = inst_21455__$1);

return statearr_21516;
})();
var statearr_21517_21540 = state_21495__$1;
(statearr_21517_21540[(2)] = null);

(statearr_21517_21540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7090__auto___21526,out))
;
return ((function (switch__7028__auto__,c__7090__auto___21526,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_21521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21521[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_21521[(1)] = (1));

return statearr_21521;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_21495){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_21495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e21522){if((e21522 instanceof Object)){
var ex__7032__auto__ = e21522;
var statearr_21523_21541 = state_21495;
(statearr_21523_21541[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21542 = state_21495;
state_21495 = G__21542;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_21495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_21495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___21526,out))
})();
var state__7092__auto__ = (function (){var statearr_21524 = f__7091__auto__.call(null);
(statearr_21524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___21526);

return statearr_21524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___21526,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
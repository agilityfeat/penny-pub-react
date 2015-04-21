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
if(typeof cljs.core.async.t21088 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21088 = (function (f,fn_handler,meta21089){
this.f = f;
this.fn_handler = fn_handler;
this.meta21089 = meta21089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21088.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21090){
var self__ = this;
var _21090__$1 = this;
return self__.meta21089;
});

cljs.core.async.t21088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21090,meta21089__$1){
var self__ = this;
var _21090__$1 = this;
return (new cljs.core.async.t21088(self__.f,self__.fn_handler,meta21089__$1));
});

cljs.core.async.t21088.cljs$lang$type = true;

cljs.core.async.t21088.cljs$lang$ctorStr = "cljs.core.async/t21088";

cljs.core.async.t21088.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t21088");
});

cljs.core.async.__GT_t21088 = (function cljs$core$async$fn_handler_$___GT_t21088(f__$1,fn_handler__$1,meta21089){
return (new cljs.core.async.t21088(f__$1,fn_handler__$1,meta21089));
});

}

return (new cljs.core.async.t21088(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21092 = buff;
if(G__21092){
var bit__4773__auto__ = null;
if(cljs.core.truth_((function (){var or__4099__auto__ = bit__4773__auto__;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return G__21092.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21092.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21092);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21092);
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
var G__21094 = arguments.length;
switch (G__21094) {
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
var G__21097 = arguments.length;
switch (G__21097) {
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
var val_21099 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21099);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21099,ret){
return (function (){
return fn1.call(null,val_21099);
});})(val_21099,ret))
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
var G__21101 = arguments.length;
switch (G__21101) {
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
var n__4984__auto___21103 = n;
var x_21104 = (0);
while(true){
if((x_21104 < n__4984__auto___21103)){
(a[x_21104] = (0));

var G__21105 = (x_21104 + (1));
x_21104 = G__21105;
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

var G__21106 = (i + (1));
i = G__21106;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t21110 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21110 = (function (flag,alt_flag,meta21111){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21111 = meta21111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t21110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t21110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21112){
var self__ = this;
var _21112__$1 = this;
return self__.meta21111;
});})(flag))
;

cljs.core.async.t21110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21112,meta21111__$1){
var self__ = this;
var _21112__$1 = this;
return (new cljs.core.async.t21110(self__.flag,self__.alt_flag,meta21111__$1));
});})(flag))
;

cljs.core.async.t21110.cljs$lang$type = true;

cljs.core.async.t21110.cljs$lang$ctorStr = "cljs.core.async/t21110";

cljs.core.async.t21110.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t21110");
});})(flag))
;

cljs.core.async.__GT_t21110 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t21110(flag__$1,alt_flag__$1,meta21111){
return (new cljs.core.async.t21110(flag__$1,alt_flag__$1,meta21111));
});})(flag))
;

}

return (new cljs.core.async.t21110(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t21116 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21116 = (function (cb,flag,alt_handler,meta21117){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21117 = meta21117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21116.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t21116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t21116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21118){
var self__ = this;
var _21118__$1 = this;
return self__.meta21117;
});

cljs.core.async.t21116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21118,meta21117__$1){
var self__ = this;
var _21118__$1 = this;
return (new cljs.core.async.t21116(self__.cb,self__.flag,self__.alt_handler,meta21117__$1));
});

cljs.core.async.t21116.cljs$lang$type = true;

cljs.core.async.t21116.cljs$lang$ctorStr = "cljs.core.async/t21116";

cljs.core.async.t21116.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t21116");
});

cljs.core.async.__GT_t21116 = (function cljs$core$async$alt_handler_$___GT_t21116(cb__$1,flag__$1,alt_handler__$1,meta21117){
return (new cljs.core.async.t21116(cb__$1,flag__$1,alt_handler__$1,meta21117));
});

}

return (new cljs.core.async.t21116(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21119_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21119_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21120_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21120_SHARP_,port], null));
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
var G__21121 = (i + (1));
i = G__21121;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21124){
var map__21125 = p__21124;
var map__21125__$1 = ((cljs.core.seq_QMARK_.call(null,map__21125))?cljs.core.apply.call(null,cljs.core.hash_map,map__21125):map__21125);
var opts = map__21125__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21122){
var G__21123 = cljs.core.first.call(null,seq21122);
var seq21122__$1 = cljs.core.next.call(null,seq21122);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21123,seq21122__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__21127 = arguments.length;
switch (G__21127) {
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
var c__8217__auto___21176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___21176){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___21176){
return (function (state_21151){
var state_val_21152 = (state_21151[(1)]);
if((state_val_21152 === (7))){
var inst_21147 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21153_21177 = state_21151__$1;
(statearr_21153_21177[(2)] = inst_21147);

(statearr_21153_21177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (1))){
var state_21151__$1 = state_21151;
var statearr_21154_21178 = state_21151__$1;
(statearr_21154_21178[(2)] = null);

(statearr_21154_21178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (4))){
var inst_21130 = (state_21151[(7)]);
var inst_21130__$1 = (state_21151[(2)]);
var inst_21131 = (inst_21130__$1 == null);
var state_21151__$1 = (function (){var statearr_21155 = state_21151;
(statearr_21155[(7)] = inst_21130__$1);

return statearr_21155;
})();
if(cljs.core.truth_(inst_21131)){
var statearr_21156_21179 = state_21151__$1;
(statearr_21156_21179[(1)] = (5));

} else {
var statearr_21157_21180 = state_21151__$1;
(statearr_21157_21180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (13))){
var state_21151__$1 = state_21151;
var statearr_21158_21181 = state_21151__$1;
(statearr_21158_21181[(2)] = null);

(statearr_21158_21181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (6))){
var inst_21130 = (state_21151[(7)]);
var state_21151__$1 = state_21151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21151__$1,(11),to,inst_21130);
} else {
if((state_val_21152 === (3))){
var inst_21149 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21151__$1,inst_21149);
} else {
if((state_val_21152 === (12))){
var state_21151__$1 = state_21151;
var statearr_21159_21182 = state_21151__$1;
(statearr_21159_21182[(2)] = null);

(statearr_21159_21182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (2))){
var state_21151__$1 = state_21151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21151__$1,(4),from);
} else {
if((state_val_21152 === (11))){
var inst_21140 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
if(cljs.core.truth_(inst_21140)){
var statearr_21160_21183 = state_21151__$1;
(statearr_21160_21183[(1)] = (12));

} else {
var statearr_21161_21184 = state_21151__$1;
(statearr_21161_21184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (9))){
var state_21151__$1 = state_21151;
var statearr_21162_21185 = state_21151__$1;
(statearr_21162_21185[(2)] = null);

(statearr_21162_21185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (5))){
var state_21151__$1 = state_21151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21163_21186 = state_21151__$1;
(statearr_21163_21186[(1)] = (8));

} else {
var statearr_21164_21187 = state_21151__$1;
(statearr_21164_21187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (14))){
var inst_21145 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21165_21188 = state_21151__$1;
(statearr_21165_21188[(2)] = inst_21145);

(statearr_21165_21188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (10))){
var inst_21137 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21166_21189 = state_21151__$1;
(statearr_21166_21189[(2)] = inst_21137);

(statearr_21166_21189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (8))){
var inst_21134 = cljs.core.async.close_BANG_.call(null,to);
var state_21151__$1 = state_21151;
var statearr_21167_21190 = state_21151__$1;
(statearr_21167_21190[(2)] = inst_21134);

(statearr_21167_21190[(1)] = (10));


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
});})(c__8217__auto___21176))
;
return ((function (switch__8155__auto__,c__8217__auto___21176){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_21171 = [null,null,null,null,null,null,null,null];
(statearr_21171[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_21171[(1)] = (1));

return statearr_21171;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_21151){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21172){if((e21172 instanceof Object)){
var ex__8159__auto__ = e21172;
var statearr_21173_21191 = state_21151;
(statearr_21173_21191[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21192 = state_21151;
state_21151 = G__21192;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_21151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_21151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___21176))
})();
var state__8219__auto__ = (function (){var statearr_21174 = f__8218__auto__.call(null);
(statearr_21174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___21176);

return statearr_21174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___21176))
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
return (function (p__21376){
var vec__21377 = p__21376;
var v = cljs.core.nth.call(null,vec__21377,(0),null);
var p = cljs.core.nth.call(null,vec__21377,(1),null);
var job = vec__21377;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8217__auto___21559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___21559,res,vec__21377,v,p,job,jobs,results){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___21559,res,vec__21377,v,p,job,jobs,results){
return (function (state_21382){
var state_val_21383 = (state_21382[(1)]);
if((state_val_21383 === (2))){
var inst_21379 = (state_21382[(2)]);
var inst_21380 = cljs.core.async.close_BANG_.call(null,res);
var state_21382__$1 = (function (){var statearr_21384 = state_21382;
(statearr_21384[(7)] = inst_21379);

return statearr_21384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21382__$1,inst_21380);
} else {
if((state_val_21383 === (1))){
var state_21382__$1 = state_21382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21382__$1,(2),res,v);
} else {
return null;
}
}
});})(c__8217__auto___21559,res,vec__21377,v,p,job,jobs,results))
;
return ((function (switch__8155__auto__,c__8217__auto___21559,res,vec__21377,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0 = (function (){
var statearr_21388 = [null,null,null,null,null,null,null,null];
(statearr_21388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__);

(statearr_21388[(1)] = (1));

return statearr_21388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1 = (function (state_21382){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21389){if((e21389 instanceof Object)){
var ex__8159__auto__ = e21389;
var statearr_21390_21560 = state_21382;
(statearr_21390_21560[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21561 = state_21382;
state_21382 = G__21561;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = function(state_21382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1.call(this,state_21382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___21559,res,vec__21377,v,p,job,jobs,results))
})();
var state__8219__auto__ = (function (){var statearr_21391 = f__8218__auto__.call(null);
(statearr_21391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___21559);

return statearr_21391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___21559,res,vec__21377,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21392){
var vec__21393 = p__21392;
var v = cljs.core.nth.call(null,vec__21393,(0),null);
var p = cljs.core.nth.call(null,vec__21393,(1),null);
var job = vec__21393;
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
var n__4984__auto___21562 = n;
var __21563 = (0);
while(true){
if((__21563 < n__4984__auto___21562)){
var G__21394_21564 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21394_21564) {
case "async":
var c__8217__auto___21566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21563,c__8217__auto___21566,G__21394_21564,n__4984__auto___21562,jobs,results,process,async){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (__21563,c__8217__auto___21566,G__21394_21564,n__4984__auto___21562,jobs,results,process,async){
return (function (state_21407){
var state_val_21408 = (state_21407[(1)]);
if((state_val_21408 === (7))){
var inst_21403 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21409_21567 = state_21407__$1;
(statearr_21409_21567[(2)] = inst_21403);

(statearr_21409_21567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (6))){
var state_21407__$1 = state_21407;
var statearr_21410_21568 = state_21407__$1;
(statearr_21410_21568[(2)] = null);

(statearr_21410_21568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (5))){
var state_21407__$1 = state_21407;
var statearr_21411_21569 = state_21407__$1;
(statearr_21411_21569[(2)] = null);

(statearr_21411_21569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (4))){
var inst_21397 = (state_21407[(2)]);
var inst_21398 = async.call(null,inst_21397);
var state_21407__$1 = state_21407;
if(cljs.core.truth_(inst_21398)){
var statearr_21412_21570 = state_21407__$1;
(statearr_21412_21570[(1)] = (5));

} else {
var statearr_21413_21571 = state_21407__$1;
(statearr_21413_21571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (3))){
var inst_21405 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21407__$1,inst_21405);
} else {
if((state_val_21408 === (2))){
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21407__$1,(4),jobs);
} else {
if((state_val_21408 === (1))){
var state_21407__$1 = state_21407;
var statearr_21414_21572 = state_21407__$1;
(statearr_21414_21572[(2)] = null);

(statearr_21414_21572[(1)] = (2));


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
});})(__21563,c__8217__auto___21566,G__21394_21564,n__4984__auto___21562,jobs,results,process,async))
;
return ((function (__21563,switch__8155__auto__,c__8217__auto___21566,G__21394_21564,n__4984__auto___21562,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0 = (function (){
var statearr_21418 = [null,null,null,null,null,null,null];
(statearr_21418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__);

(statearr_21418[(1)] = (1));

return statearr_21418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1 = (function (state_21407){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21419){if((e21419 instanceof Object)){
var ex__8159__auto__ = e21419;
var statearr_21420_21573 = state_21407;
(statearr_21420_21573[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21574 = state_21407;
state_21407 = G__21574;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = function(state_21407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1.call(this,state_21407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__;
})()
;})(__21563,switch__8155__auto__,c__8217__auto___21566,G__21394_21564,n__4984__auto___21562,jobs,results,process,async))
})();
var state__8219__auto__ = (function (){var statearr_21421 = f__8218__auto__.call(null);
(statearr_21421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___21566);

return statearr_21421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(__21563,c__8217__auto___21566,G__21394_21564,n__4984__auto___21562,jobs,results,process,async))
);


break;
case "compute":
var c__8217__auto___21575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21563,c__8217__auto___21575,G__21394_21564,n__4984__auto___21562,jobs,results,process,async){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (__21563,c__8217__auto___21575,G__21394_21564,n__4984__auto___21562,jobs,results,process,async){
return (function (state_21434){
var state_val_21435 = (state_21434[(1)]);
if((state_val_21435 === (7))){
var inst_21430 = (state_21434[(2)]);
var state_21434__$1 = state_21434;
var statearr_21436_21576 = state_21434__$1;
(statearr_21436_21576[(2)] = inst_21430);

(statearr_21436_21576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21435 === (6))){
var state_21434__$1 = state_21434;
var statearr_21437_21577 = state_21434__$1;
(statearr_21437_21577[(2)] = null);

(statearr_21437_21577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21435 === (5))){
var state_21434__$1 = state_21434;
var statearr_21438_21578 = state_21434__$1;
(statearr_21438_21578[(2)] = null);

(statearr_21438_21578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21435 === (4))){
var inst_21424 = (state_21434[(2)]);
var inst_21425 = process.call(null,inst_21424);
var state_21434__$1 = state_21434;
if(cljs.core.truth_(inst_21425)){
var statearr_21439_21579 = state_21434__$1;
(statearr_21439_21579[(1)] = (5));

} else {
var statearr_21440_21580 = state_21434__$1;
(statearr_21440_21580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21435 === (3))){
var inst_21432 = (state_21434[(2)]);
var state_21434__$1 = state_21434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21434__$1,inst_21432);
} else {
if((state_val_21435 === (2))){
var state_21434__$1 = state_21434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21434__$1,(4),jobs);
} else {
if((state_val_21435 === (1))){
var state_21434__$1 = state_21434;
var statearr_21441_21581 = state_21434__$1;
(statearr_21441_21581[(2)] = null);

(statearr_21441_21581[(1)] = (2));


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
});})(__21563,c__8217__auto___21575,G__21394_21564,n__4984__auto___21562,jobs,results,process,async))
;
return ((function (__21563,switch__8155__auto__,c__8217__auto___21575,G__21394_21564,n__4984__auto___21562,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0 = (function (){
var statearr_21445 = [null,null,null,null,null,null,null];
(statearr_21445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__);

(statearr_21445[(1)] = (1));

return statearr_21445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1 = (function (state_21434){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21446){if((e21446 instanceof Object)){
var ex__8159__auto__ = e21446;
var statearr_21447_21582 = state_21434;
(statearr_21447_21582[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21583 = state_21434;
state_21434 = G__21583;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = function(state_21434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1.call(this,state_21434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__;
})()
;})(__21563,switch__8155__auto__,c__8217__auto___21575,G__21394_21564,n__4984__auto___21562,jobs,results,process,async))
})();
var state__8219__auto__ = (function (){var statearr_21448 = f__8218__auto__.call(null);
(statearr_21448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___21575);

return statearr_21448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(__21563,c__8217__auto___21575,G__21394_21564,n__4984__auto___21562,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21584 = (__21563 + (1));
__21563 = G__21584;
continue;
} else {
}
break;
}

var c__8217__auto___21585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___21585,jobs,results,process,async){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___21585,jobs,results,process,async){
return (function (state_21470){
var state_val_21471 = (state_21470[(1)]);
if((state_val_21471 === (9))){
var inst_21463 = (state_21470[(2)]);
var state_21470__$1 = (function (){var statearr_21472 = state_21470;
(statearr_21472[(7)] = inst_21463);

return statearr_21472;
})();
var statearr_21473_21586 = state_21470__$1;
(statearr_21473_21586[(2)] = null);

(statearr_21473_21586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (8))){
var inst_21456 = (state_21470[(8)]);
var inst_21461 = (state_21470[(2)]);
var state_21470__$1 = (function (){var statearr_21474 = state_21470;
(statearr_21474[(9)] = inst_21461);

return statearr_21474;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21470__$1,(9),results,inst_21456);
} else {
if((state_val_21471 === (7))){
var inst_21466 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
var statearr_21475_21587 = state_21470__$1;
(statearr_21475_21587[(2)] = inst_21466);

(statearr_21475_21587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (6))){
var inst_21456 = (state_21470[(8)]);
var inst_21451 = (state_21470[(10)]);
var inst_21456__$1 = cljs.core.async.chan.call(null,(1));
var inst_21457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21458 = [inst_21451,inst_21456__$1];
var inst_21459 = (new cljs.core.PersistentVector(null,2,(5),inst_21457,inst_21458,null));
var state_21470__$1 = (function (){var statearr_21476 = state_21470;
(statearr_21476[(8)] = inst_21456__$1);

return statearr_21476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21470__$1,(8),jobs,inst_21459);
} else {
if((state_val_21471 === (5))){
var inst_21454 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21470__$1 = state_21470;
var statearr_21477_21588 = state_21470__$1;
(statearr_21477_21588[(2)] = inst_21454);

(statearr_21477_21588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (4))){
var inst_21451 = (state_21470[(10)]);
var inst_21451__$1 = (state_21470[(2)]);
var inst_21452 = (inst_21451__$1 == null);
var state_21470__$1 = (function (){var statearr_21478 = state_21470;
(statearr_21478[(10)] = inst_21451__$1);

return statearr_21478;
})();
if(cljs.core.truth_(inst_21452)){
var statearr_21479_21589 = state_21470__$1;
(statearr_21479_21589[(1)] = (5));

} else {
var statearr_21480_21590 = state_21470__$1;
(statearr_21480_21590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (3))){
var inst_21468 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21470__$1,inst_21468);
} else {
if((state_val_21471 === (2))){
var state_21470__$1 = state_21470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21470__$1,(4),from);
} else {
if((state_val_21471 === (1))){
var state_21470__$1 = state_21470;
var statearr_21481_21591 = state_21470__$1;
(statearr_21481_21591[(2)] = null);

(statearr_21481_21591[(1)] = (2));


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
});})(c__8217__auto___21585,jobs,results,process,async))
;
return ((function (switch__8155__auto__,c__8217__auto___21585,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0 = (function (){
var statearr_21485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__);

(statearr_21485[(1)] = (1));

return statearr_21485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1 = (function (state_21470){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21486){if((e21486 instanceof Object)){
var ex__8159__auto__ = e21486;
var statearr_21487_21592 = state_21470;
(statearr_21487_21592[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21593 = state_21470;
state_21470 = G__21593;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = function(state_21470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1.call(this,state_21470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___21585,jobs,results,process,async))
})();
var state__8219__auto__ = (function (){var statearr_21488 = f__8218__auto__.call(null);
(statearr_21488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___21585);

return statearr_21488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___21585,jobs,results,process,async))
);


var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__,jobs,results,process,async){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__,jobs,results,process,async){
return (function (state_21526){
var state_val_21527 = (state_21526[(1)]);
if((state_val_21527 === (7))){
var inst_21522 = (state_21526[(2)]);
var state_21526__$1 = state_21526;
var statearr_21528_21594 = state_21526__$1;
(statearr_21528_21594[(2)] = inst_21522);

(statearr_21528_21594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (20))){
var state_21526__$1 = state_21526;
var statearr_21529_21595 = state_21526__$1;
(statearr_21529_21595[(2)] = null);

(statearr_21529_21595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (1))){
var state_21526__$1 = state_21526;
var statearr_21530_21596 = state_21526__$1;
(statearr_21530_21596[(2)] = null);

(statearr_21530_21596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (4))){
var inst_21491 = (state_21526[(7)]);
var inst_21491__$1 = (state_21526[(2)]);
var inst_21492 = (inst_21491__$1 == null);
var state_21526__$1 = (function (){var statearr_21531 = state_21526;
(statearr_21531[(7)] = inst_21491__$1);

return statearr_21531;
})();
if(cljs.core.truth_(inst_21492)){
var statearr_21532_21597 = state_21526__$1;
(statearr_21532_21597[(1)] = (5));

} else {
var statearr_21533_21598 = state_21526__$1;
(statearr_21533_21598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (15))){
var inst_21504 = (state_21526[(8)]);
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21526__$1,(18),to,inst_21504);
} else {
if((state_val_21527 === (21))){
var inst_21517 = (state_21526[(2)]);
var state_21526__$1 = state_21526;
var statearr_21534_21599 = state_21526__$1;
(statearr_21534_21599[(2)] = inst_21517);

(statearr_21534_21599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (13))){
var inst_21519 = (state_21526[(2)]);
var state_21526__$1 = (function (){var statearr_21535 = state_21526;
(statearr_21535[(9)] = inst_21519);

return statearr_21535;
})();
var statearr_21536_21600 = state_21526__$1;
(statearr_21536_21600[(2)] = null);

(statearr_21536_21600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (6))){
var inst_21491 = (state_21526[(7)]);
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21526__$1,(11),inst_21491);
} else {
if((state_val_21527 === (17))){
var inst_21512 = (state_21526[(2)]);
var state_21526__$1 = state_21526;
if(cljs.core.truth_(inst_21512)){
var statearr_21537_21601 = state_21526__$1;
(statearr_21537_21601[(1)] = (19));

} else {
var statearr_21538_21602 = state_21526__$1;
(statearr_21538_21602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (3))){
var inst_21524 = (state_21526[(2)]);
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21526__$1,inst_21524);
} else {
if((state_val_21527 === (12))){
var inst_21501 = (state_21526[(10)]);
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21526__$1,(14),inst_21501);
} else {
if((state_val_21527 === (2))){
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21526__$1,(4),results);
} else {
if((state_val_21527 === (19))){
var state_21526__$1 = state_21526;
var statearr_21539_21603 = state_21526__$1;
(statearr_21539_21603[(2)] = null);

(statearr_21539_21603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (11))){
var inst_21501 = (state_21526[(2)]);
var state_21526__$1 = (function (){var statearr_21540 = state_21526;
(statearr_21540[(10)] = inst_21501);

return statearr_21540;
})();
var statearr_21541_21604 = state_21526__$1;
(statearr_21541_21604[(2)] = null);

(statearr_21541_21604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (9))){
var state_21526__$1 = state_21526;
var statearr_21542_21605 = state_21526__$1;
(statearr_21542_21605[(2)] = null);

(statearr_21542_21605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (5))){
var state_21526__$1 = state_21526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21543_21606 = state_21526__$1;
(statearr_21543_21606[(1)] = (8));

} else {
var statearr_21544_21607 = state_21526__$1;
(statearr_21544_21607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (14))){
var inst_21504 = (state_21526[(8)]);
var inst_21506 = (state_21526[(11)]);
var inst_21504__$1 = (state_21526[(2)]);
var inst_21505 = (inst_21504__$1 == null);
var inst_21506__$1 = cljs.core.not.call(null,inst_21505);
var state_21526__$1 = (function (){var statearr_21545 = state_21526;
(statearr_21545[(8)] = inst_21504__$1);

(statearr_21545[(11)] = inst_21506__$1);

return statearr_21545;
})();
if(inst_21506__$1){
var statearr_21546_21608 = state_21526__$1;
(statearr_21546_21608[(1)] = (15));

} else {
var statearr_21547_21609 = state_21526__$1;
(statearr_21547_21609[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (16))){
var inst_21506 = (state_21526[(11)]);
var state_21526__$1 = state_21526;
var statearr_21548_21610 = state_21526__$1;
(statearr_21548_21610[(2)] = inst_21506);

(statearr_21548_21610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (10))){
var inst_21498 = (state_21526[(2)]);
var state_21526__$1 = state_21526;
var statearr_21549_21611 = state_21526__$1;
(statearr_21549_21611[(2)] = inst_21498);

(statearr_21549_21611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (18))){
var inst_21509 = (state_21526[(2)]);
var state_21526__$1 = state_21526;
var statearr_21550_21612 = state_21526__$1;
(statearr_21550_21612[(2)] = inst_21509);

(statearr_21550_21612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (8))){
var inst_21495 = cljs.core.async.close_BANG_.call(null,to);
var state_21526__$1 = state_21526;
var statearr_21551_21613 = state_21526__$1;
(statearr_21551_21613[(2)] = inst_21495);

(statearr_21551_21613[(1)] = (10));


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
});})(c__8217__auto__,jobs,results,process,async))
;
return ((function (switch__8155__auto__,c__8217__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0 = (function (){
var statearr_21555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__);

(statearr_21555[(1)] = (1));

return statearr_21555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1 = (function (state_21526){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21556){if((e21556 instanceof Object)){
var ex__8159__auto__ = e21556;
var statearr_21557_21614 = state_21526;
(statearr_21557_21614[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21615 = state_21526;
state_21526 = G__21615;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__ = function(state_21526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1.call(this,state_21526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__,jobs,results,process,async))
})();
var state__8219__auto__ = (function (){var statearr_21558 = f__8218__auto__.call(null);
(statearr_21558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_21558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__,jobs,results,process,async))
);

return c__8217__auto__;
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
var G__21617 = arguments.length;
switch (G__21617) {
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
var G__21620 = arguments.length;
switch (G__21620) {
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
var G__21623 = arguments.length;
switch (G__21623) {
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
var c__8217__auto___21675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___21675,tc,fc){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___21675,tc,fc){
return (function (state_21649){
var state_val_21650 = (state_21649[(1)]);
if((state_val_21650 === (7))){
var inst_21645 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21651_21676 = state_21649__$1;
(statearr_21651_21676[(2)] = inst_21645);

(statearr_21651_21676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (1))){
var state_21649__$1 = state_21649;
var statearr_21652_21677 = state_21649__$1;
(statearr_21652_21677[(2)] = null);

(statearr_21652_21677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (4))){
var inst_21626 = (state_21649[(7)]);
var inst_21626__$1 = (state_21649[(2)]);
var inst_21627 = (inst_21626__$1 == null);
var state_21649__$1 = (function (){var statearr_21653 = state_21649;
(statearr_21653[(7)] = inst_21626__$1);

return statearr_21653;
})();
if(cljs.core.truth_(inst_21627)){
var statearr_21654_21678 = state_21649__$1;
(statearr_21654_21678[(1)] = (5));

} else {
var statearr_21655_21679 = state_21649__$1;
(statearr_21655_21679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (13))){
var state_21649__$1 = state_21649;
var statearr_21656_21680 = state_21649__$1;
(statearr_21656_21680[(2)] = null);

(statearr_21656_21680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (6))){
var inst_21626 = (state_21649[(7)]);
var inst_21632 = p.call(null,inst_21626);
var state_21649__$1 = state_21649;
if(cljs.core.truth_(inst_21632)){
var statearr_21657_21681 = state_21649__$1;
(statearr_21657_21681[(1)] = (9));

} else {
var statearr_21658_21682 = state_21649__$1;
(statearr_21658_21682[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (3))){
var inst_21647 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21649__$1,inst_21647);
} else {
if((state_val_21650 === (12))){
var state_21649__$1 = state_21649;
var statearr_21659_21683 = state_21649__$1;
(statearr_21659_21683[(2)] = null);

(statearr_21659_21683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (2))){
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21649__$1,(4),ch);
} else {
if((state_val_21650 === (11))){
var inst_21626 = (state_21649[(7)]);
var inst_21636 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21649__$1,(8),inst_21636,inst_21626);
} else {
if((state_val_21650 === (9))){
var state_21649__$1 = state_21649;
var statearr_21660_21684 = state_21649__$1;
(statearr_21660_21684[(2)] = tc);

(statearr_21660_21684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (5))){
var inst_21629 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21630 = cljs.core.async.close_BANG_.call(null,fc);
var state_21649__$1 = (function (){var statearr_21661 = state_21649;
(statearr_21661[(8)] = inst_21629);

return statearr_21661;
})();
var statearr_21662_21685 = state_21649__$1;
(statearr_21662_21685[(2)] = inst_21630);

(statearr_21662_21685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (14))){
var inst_21643 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21663_21686 = state_21649__$1;
(statearr_21663_21686[(2)] = inst_21643);

(statearr_21663_21686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (10))){
var state_21649__$1 = state_21649;
var statearr_21664_21687 = state_21649__$1;
(statearr_21664_21687[(2)] = fc);

(statearr_21664_21687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (8))){
var inst_21638 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
if(cljs.core.truth_(inst_21638)){
var statearr_21665_21688 = state_21649__$1;
(statearr_21665_21688[(1)] = (12));

} else {
var statearr_21666_21689 = state_21649__$1;
(statearr_21666_21689[(1)] = (13));

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
});})(c__8217__auto___21675,tc,fc))
;
return ((function (switch__8155__auto__,c__8217__auto___21675,tc,fc){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_21670 = [null,null,null,null,null,null,null,null,null];
(statearr_21670[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_21670[(1)] = (1));

return statearr_21670;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_21649){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21671){if((e21671 instanceof Object)){
var ex__8159__auto__ = e21671;
var statearr_21672_21690 = state_21649;
(statearr_21672_21690[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21691 = state_21649;
state_21649 = G__21691;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_21649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_21649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___21675,tc,fc))
})();
var state__8219__auto__ = (function (){var statearr_21673 = f__8218__auto__.call(null);
(statearr_21673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___21675);

return statearr_21673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___21675,tc,fc))
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
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__){
return (function (state_21738){
var state_val_21739 = (state_21738[(1)]);
if((state_val_21739 === (7))){
var inst_21734 = (state_21738[(2)]);
var state_21738__$1 = state_21738;
var statearr_21740_21756 = state_21738__$1;
(statearr_21740_21756[(2)] = inst_21734);

(statearr_21740_21756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (6))){
var inst_21724 = (state_21738[(7)]);
var inst_21727 = (state_21738[(8)]);
var inst_21731 = f.call(null,inst_21724,inst_21727);
var inst_21724__$1 = inst_21731;
var state_21738__$1 = (function (){var statearr_21741 = state_21738;
(statearr_21741[(7)] = inst_21724__$1);

return statearr_21741;
})();
var statearr_21742_21757 = state_21738__$1;
(statearr_21742_21757[(2)] = null);

(statearr_21742_21757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (5))){
var inst_21724 = (state_21738[(7)]);
var state_21738__$1 = state_21738;
var statearr_21743_21758 = state_21738__$1;
(statearr_21743_21758[(2)] = inst_21724);

(statearr_21743_21758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (4))){
var inst_21727 = (state_21738[(8)]);
var inst_21727__$1 = (state_21738[(2)]);
var inst_21728 = (inst_21727__$1 == null);
var state_21738__$1 = (function (){var statearr_21744 = state_21738;
(statearr_21744[(8)] = inst_21727__$1);

return statearr_21744;
})();
if(cljs.core.truth_(inst_21728)){
var statearr_21745_21759 = state_21738__$1;
(statearr_21745_21759[(1)] = (5));

} else {
var statearr_21746_21760 = state_21738__$1;
(statearr_21746_21760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (3))){
var inst_21736 = (state_21738[(2)]);
var state_21738__$1 = state_21738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21738__$1,inst_21736);
} else {
if((state_val_21739 === (2))){
var state_21738__$1 = state_21738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21738__$1,(4),ch);
} else {
if((state_val_21739 === (1))){
var inst_21724 = init;
var state_21738__$1 = (function (){var statearr_21747 = state_21738;
(statearr_21747[(7)] = inst_21724);

return statearr_21747;
})();
var statearr_21748_21761 = state_21738__$1;
(statearr_21748_21761[(2)] = null);

(statearr_21748_21761[(1)] = (2));


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
});})(c__8217__auto__))
;
return ((function (switch__8155__auto__,c__8217__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8156__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8156__auto____0 = (function (){
var statearr_21752 = [null,null,null,null,null,null,null,null,null];
(statearr_21752[(0)] = cljs$core$async$reduce_$_state_machine__8156__auto__);

(statearr_21752[(1)] = (1));

return statearr_21752;
});
var cljs$core$async$reduce_$_state_machine__8156__auto____1 = (function (state_21738){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21753){if((e21753 instanceof Object)){
var ex__8159__auto__ = e21753;
var statearr_21754_21762 = state_21738;
(statearr_21754_21762[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21763 = state_21738;
state_21738 = G__21763;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8156__auto__ = function(state_21738){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8156__auto____1.call(this,state_21738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8156__auto____0;
cljs$core$async$reduce_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8156__auto____1;
return cljs$core$async$reduce_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__))
})();
var state__8219__auto__ = (function (){var statearr_21755 = f__8218__auto__.call(null);
(statearr_21755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_21755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__))
);

return c__8217__auto__;
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
var G__21765 = arguments.length;
switch (G__21765) {
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
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__){
return (function (state_21790){
var state_val_21791 = (state_21790[(1)]);
if((state_val_21791 === (7))){
var inst_21772 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
var statearr_21792_21816 = state_21790__$1;
(statearr_21792_21816[(2)] = inst_21772);

(statearr_21792_21816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (1))){
var inst_21766 = cljs.core.seq.call(null,coll);
var inst_21767 = inst_21766;
var state_21790__$1 = (function (){var statearr_21793 = state_21790;
(statearr_21793[(7)] = inst_21767);

return statearr_21793;
})();
var statearr_21794_21817 = state_21790__$1;
(statearr_21794_21817[(2)] = null);

(statearr_21794_21817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (4))){
var inst_21767 = (state_21790[(7)]);
var inst_21770 = cljs.core.first.call(null,inst_21767);
var state_21790__$1 = state_21790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21790__$1,(7),ch,inst_21770);
} else {
if((state_val_21791 === (13))){
var inst_21784 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
var statearr_21795_21818 = state_21790__$1;
(statearr_21795_21818[(2)] = inst_21784);

(statearr_21795_21818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (6))){
var inst_21775 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
if(cljs.core.truth_(inst_21775)){
var statearr_21796_21819 = state_21790__$1;
(statearr_21796_21819[(1)] = (8));

} else {
var statearr_21797_21820 = state_21790__$1;
(statearr_21797_21820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (3))){
var inst_21788 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21790__$1,inst_21788);
} else {
if((state_val_21791 === (12))){
var state_21790__$1 = state_21790;
var statearr_21798_21821 = state_21790__$1;
(statearr_21798_21821[(2)] = null);

(statearr_21798_21821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (2))){
var inst_21767 = (state_21790[(7)]);
var state_21790__$1 = state_21790;
if(cljs.core.truth_(inst_21767)){
var statearr_21799_21822 = state_21790__$1;
(statearr_21799_21822[(1)] = (4));

} else {
var statearr_21800_21823 = state_21790__$1;
(statearr_21800_21823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (11))){
var inst_21781 = cljs.core.async.close_BANG_.call(null,ch);
var state_21790__$1 = state_21790;
var statearr_21801_21824 = state_21790__$1;
(statearr_21801_21824[(2)] = inst_21781);

(statearr_21801_21824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (9))){
var state_21790__$1 = state_21790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21802_21825 = state_21790__$1;
(statearr_21802_21825[(1)] = (11));

} else {
var statearr_21803_21826 = state_21790__$1;
(statearr_21803_21826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (5))){
var inst_21767 = (state_21790[(7)]);
var state_21790__$1 = state_21790;
var statearr_21804_21827 = state_21790__$1;
(statearr_21804_21827[(2)] = inst_21767);

(statearr_21804_21827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (10))){
var inst_21786 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
var statearr_21805_21828 = state_21790__$1;
(statearr_21805_21828[(2)] = inst_21786);

(statearr_21805_21828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (8))){
var inst_21767 = (state_21790[(7)]);
var inst_21777 = cljs.core.next.call(null,inst_21767);
var inst_21767__$1 = inst_21777;
var state_21790__$1 = (function (){var statearr_21806 = state_21790;
(statearr_21806[(7)] = inst_21767__$1);

return statearr_21806;
})();
var statearr_21807_21829 = state_21790__$1;
(statearr_21807_21829[(2)] = null);

(statearr_21807_21829[(1)] = (2));


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
});})(c__8217__auto__))
;
return ((function (switch__8155__auto__,c__8217__auto__){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_21811 = [null,null,null,null,null,null,null,null];
(statearr_21811[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_21811[(1)] = (1));

return statearr_21811;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_21790){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21812){if((e21812 instanceof Object)){
var ex__8159__auto__ = e21812;
var statearr_21813_21830 = state_21790;
(statearr_21813_21830[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21831 = state_21790;
state_21790 = G__21831;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_21790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_21790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__))
})();
var state__8219__auto__ = (function (){var statearr_21814 = f__8218__auto__.call(null);
(statearr_21814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_21814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__))
);

return c__8217__auto__;
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

cljs.core.async.Mux = (function (){var obj21833 = {};
return obj21833;
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


cljs.core.async.Mult = (function (){var obj21835 = {};
return obj21835;
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
if(typeof cljs.core.async.t22057 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22057 = (function (cs,ch,mult,meta22058){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22058 = meta22058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22057.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22057.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22057.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22057.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t22057.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22057.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22059){
var self__ = this;
var _22059__$1 = this;
return self__.meta22058;
});})(cs))
;

cljs.core.async.t22057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22059,meta22058__$1){
var self__ = this;
var _22059__$1 = this;
return (new cljs.core.async.t22057(self__.cs,self__.ch,self__.mult,meta22058__$1));
});})(cs))
;

cljs.core.async.t22057.cljs$lang$type = true;

cljs.core.async.t22057.cljs$lang$ctorStr = "cljs.core.async/t22057";

cljs.core.async.t22057.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t22057");
});})(cs))
;

cljs.core.async.__GT_t22057 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t22057(cs__$1,ch__$1,mult__$1,meta22058){
return (new cljs.core.async.t22057(cs__$1,ch__$1,mult__$1,meta22058));
});})(cs))
;

}

return (new cljs.core.async.t22057(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8217__auto___22278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___22278,cs,m,dchan,dctr,done){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___22278,cs,m,dchan,dctr,done){
return (function (state_22190){
var state_val_22191 = (state_22190[(1)]);
if((state_val_22191 === (7))){
var inst_22186 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22192_22279 = state_22190__$1;
(statearr_22192_22279[(2)] = inst_22186);

(statearr_22192_22279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (20))){
var inst_22091 = (state_22190[(7)]);
var inst_22101 = cljs.core.first.call(null,inst_22091);
var inst_22102 = cljs.core.nth.call(null,inst_22101,(0),null);
var inst_22103 = cljs.core.nth.call(null,inst_22101,(1),null);
var state_22190__$1 = (function (){var statearr_22193 = state_22190;
(statearr_22193[(8)] = inst_22102);

return statearr_22193;
})();
if(cljs.core.truth_(inst_22103)){
var statearr_22194_22280 = state_22190__$1;
(statearr_22194_22280[(1)] = (22));

} else {
var statearr_22195_22281 = state_22190__$1;
(statearr_22195_22281[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (27))){
var inst_22062 = (state_22190[(9)]);
var inst_22138 = (state_22190[(10)]);
var inst_22131 = (state_22190[(11)]);
var inst_22133 = (state_22190[(12)]);
var inst_22138__$1 = cljs.core._nth.call(null,inst_22131,inst_22133);
var inst_22139 = cljs.core.async.put_BANG_.call(null,inst_22138__$1,inst_22062,done);
var state_22190__$1 = (function (){var statearr_22196 = state_22190;
(statearr_22196[(10)] = inst_22138__$1);

return statearr_22196;
})();
if(cljs.core.truth_(inst_22139)){
var statearr_22197_22282 = state_22190__$1;
(statearr_22197_22282[(1)] = (30));

} else {
var statearr_22198_22283 = state_22190__$1;
(statearr_22198_22283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (1))){
var state_22190__$1 = state_22190;
var statearr_22199_22284 = state_22190__$1;
(statearr_22199_22284[(2)] = null);

(statearr_22199_22284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (24))){
var inst_22091 = (state_22190[(7)]);
var inst_22108 = (state_22190[(2)]);
var inst_22109 = cljs.core.next.call(null,inst_22091);
var inst_22071 = inst_22109;
var inst_22072 = null;
var inst_22073 = (0);
var inst_22074 = (0);
var state_22190__$1 = (function (){var statearr_22200 = state_22190;
(statearr_22200[(13)] = inst_22071);

(statearr_22200[(14)] = inst_22072);

(statearr_22200[(15)] = inst_22108);

(statearr_22200[(16)] = inst_22073);

(statearr_22200[(17)] = inst_22074);

return statearr_22200;
})();
var statearr_22201_22285 = state_22190__$1;
(statearr_22201_22285[(2)] = null);

(statearr_22201_22285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (39))){
var state_22190__$1 = state_22190;
var statearr_22205_22286 = state_22190__$1;
(statearr_22205_22286[(2)] = null);

(statearr_22205_22286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (4))){
var inst_22062 = (state_22190[(9)]);
var inst_22062__$1 = (state_22190[(2)]);
var inst_22063 = (inst_22062__$1 == null);
var state_22190__$1 = (function (){var statearr_22206 = state_22190;
(statearr_22206[(9)] = inst_22062__$1);

return statearr_22206;
})();
if(cljs.core.truth_(inst_22063)){
var statearr_22207_22287 = state_22190__$1;
(statearr_22207_22287[(1)] = (5));

} else {
var statearr_22208_22288 = state_22190__$1;
(statearr_22208_22288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (15))){
var inst_22071 = (state_22190[(13)]);
var inst_22072 = (state_22190[(14)]);
var inst_22073 = (state_22190[(16)]);
var inst_22074 = (state_22190[(17)]);
var inst_22087 = (state_22190[(2)]);
var inst_22088 = (inst_22074 + (1));
var tmp22202 = inst_22071;
var tmp22203 = inst_22072;
var tmp22204 = inst_22073;
var inst_22071__$1 = tmp22202;
var inst_22072__$1 = tmp22203;
var inst_22073__$1 = tmp22204;
var inst_22074__$1 = inst_22088;
var state_22190__$1 = (function (){var statearr_22209 = state_22190;
(statearr_22209[(13)] = inst_22071__$1);

(statearr_22209[(14)] = inst_22072__$1);

(statearr_22209[(16)] = inst_22073__$1);

(statearr_22209[(17)] = inst_22074__$1);

(statearr_22209[(18)] = inst_22087);

return statearr_22209;
})();
var statearr_22210_22289 = state_22190__$1;
(statearr_22210_22289[(2)] = null);

(statearr_22210_22289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (21))){
var inst_22112 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22214_22290 = state_22190__$1;
(statearr_22214_22290[(2)] = inst_22112);

(statearr_22214_22290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (31))){
var inst_22138 = (state_22190[(10)]);
var inst_22142 = done.call(null,null);
var inst_22143 = cljs.core.async.untap_STAR_.call(null,m,inst_22138);
var state_22190__$1 = (function (){var statearr_22215 = state_22190;
(statearr_22215[(19)] = inst_22142);

return statearr_22215;
})();
var statearr_22216_22291 = state_22190__$1;
(statearr_22216_22291[(2)] = inst_22143);

(statearr_22216_22291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (32))){
var inst_22132 = (state_22190[(20)]);
var inst_22130 = (state_22190[(21)]);
var inst_22131 = (state_22190[(11)]);
var inst_22133 = (state_22190[(12)]);
var inst_22145 = (state_22190[(2)]);
var inst_22146 = (inst_22133 + (1));
var tmp22211 = inst_22132;
var tmp22212 = inst_22130;
var tmp22213 = inst_22131;
var inst_22130__$1 = tmp22212;
var inst_22131__$1 = tmp22213;
var inst_22132__$1 = tmp22211;
var inst_22133__$1 = inst_22146;
var state_22190__$1 = (function (){var statearr_22217 = state_22190;
(statearr_22217[(20)] = inst_22132__$1);

(statearr_22217[(21)] = inst_22130__$1);

(statearr_22217[(11)] = inst_22131__$1);

(statearr_22217[(22)] = inst_22145);

(statearr_22217[(12)] = inst_22133__$1);

return statearr_22217;
})();
var statearr_22218_22292 = state_22190__$1;
(statearr_22218_22292[(2)] = null);

(statearr_22218_22292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (40))){
var inst_22158 = (state_22190[(23)]);
var inst_22162 = done.call(null,null);
var inst_22163 = cljs.core.async.untap_STAR_.call(null,m,inst_22158);
var state_22190__$1 = (function (){var statearr_22219 = state_22190;
(statearr_22219[(24)] = inst_22162);

return statearr_22219;
})();
var statearr_22220_22293 = state_22190__$1;
(statearr_22220_22293[(2)] = inst_22163);

(statearr_22220_22293[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (33))){
var inst_22149 = (state_22190[(25)]);
var inst_22151 = cljs.core.chunked_seq_QMARK_.call(null,inst_22149);
var state_22190__$1 = state_22190;
if(inst_22151){
var statearr_22221_22294 = state_22190__$1;
(statearr_22221_22294[(1)] = (36));

} else {
var statearr_22222_22295 = state_22190__$1;
(statearr_22222_22295[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (13))){
var inst_22081 = (state_22190[(26)]);
var inst_22084 = cljs.core.async.close_BANG_.call(null,inst_22081);
var state_22190__$1 = state_22190;
var statearr_22223_22296 = state_22190__$1;
(statearr_22223_22296[(2)] = inst_22084);

(statearr_22223_22296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (22))){
var inst_22102 = (state_22190[(8)]);
var inst_22105 = cljs.core.async.close_BANG_.call(null,inst_22102);
var state_22190__$1 = state_22190;
var statearr_22224_22297 = state_22190__$1;
(statearr_22224_22297[(2)] = inst_22105);

(statearr_22224_22297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (36))){
var inst_22149 = (state_22190[(25)]);
var inst_22153 = cljs.core.chunk_first.call(null,inst_22149);
var inst_22154 = cljs.core.chunk_rest.call(null,inst_22149);
var inst_22155 = cljs.core.count.call(null,inst_22153);
var inst_22130 = inst_22154;
var inst_22131 = inst_22153;
var inst_22132 = inst_22155;
var inst_22133 = (0);
var state_22190__$1 = (function (){var statearr_22225 = state_22190;
(statearr_22225[(20)] = inst_22132);

(statearr_22225[(21)] = inst_22130);

(statearr_22225[(11)] = inst_22131);

(statearr_22225[(12)] = inst_22133);

return statearr_22225;
})();
var statearr_22226_22298 = state_22190__$1;
(statearr_22226_22298[(2)] = null);

(statearr_22226_22298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (41))){
var inst_22149 = (state_22190[(25)]);
var inst_22165 = (state_22190[(2)]);
var inst_22166 = cljs.core.next.call(null,inst_22149);
var inst_22130 = inst_22166;
var inst_22131 = null;
var inst_22132 = (0);
var inst_22133 = (0);
var state_22190__$1 = (function (){var statearr_22227 = state_22190;
(statearr_22227[(20)] = inst_22132);

(statearr_22227[(21)] = inst_22130);

(statearr_22227[(11)] = inst_22131);

(statearr_22227[(27)] = inst_22165);

(statearr_22227[(12)] = inst_22133);

return statearr_22227;
})();
var statearr_22228_22299 = state_22190__$1;
(statearr_22228_22299[(2)] = null);

(statearr_22228_22299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (43))){
var state_22190__$1 = state_22190;
var statearr_22229_22300 = state_22190__$1;
(statearr_22229_22300[(2)] = null);

(statearr_22229_22300[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (29))){
var inst_22174 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22230_22301 = state_22190__$1;
(statearr_22230_22301[(2)] = inst_22174);

(statearr_22230_22301[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (44))){
var inst_22183 = (state_22190[(2)]);
var state_22190__$1 = (function (){var statearr_22231 = state_22190;
(statearr_22231[(28)] = inst_22183);

return statearr_22231;
})();
var statearr_22232_22302 = state_22190__$1;
(statearr_22232_22302[(2)] = null);

(statearr_22232_22302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (6))){
var inst_22122 = (state_22190[(29)]);
var inst_22121 = cljs.core.deref.call(null,cs);
var inst_22122__$1 = cljs.core.keys.call(null,inst_22121);
var inst_22123 = cljs.core.count.call(null,inst_22122__$1);
var inst_22124 = cljs.core.reset_BANG_.call(null,dctr,inst_22123);
var inst_22129 = cljs.core.seq.call(null,inst_22122__$1);
var inst_22130 = inst_22129;
var inst_22131 = null;
var inst_22132 = (0);
var inst_22133 = (0);
var state_22190__$1 = (function (){var statearr_22233 = state_22190;
(statearr_22233[(30)] = inst_22124);

(statearr_22233[(29)] = inst_22122__$1);

(statearr_22233[(20)] = inst_22132);

(statearr_22233[(21)] = inst_22130);

(statearr_22233[(11)] = inst_22131);

(statearr_22233[(12)] = inst_22133);

return statearr_22233;
})();
var statearr_22234_22303 = state_22190__$1;
(statearr_22234_22303[(2)] = null);

(statearr_22234_22303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (28))){
var inst_22130 = (state_22190[(21)]);
var inst_22149 = (state_22190[(25)]);
var inst_22149__$1 = cljs.core.seq.call(null,inst_22130);
var state_22190__$1 = (function (){var statearr_22235 = state_22190;
(statearr_22235[(25)] = inst_22149__$1);

return statearr_22235;
})();
if(inst_22149__$1){
var statearr_22236_22304 = state_22190__$1;
(statearr_22236_22304[(1)] = (33));

} else {
var statearr_22237_22305 = state_22190__$1;
(statearr_22237_22305[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (25))){
var inst_22132 = (state_22190[(20)]);
var inst_22133 = (state_22190[(12)]);
var inst_22135 = (inst_22133 < inst_22132);
var inst_22136 = inst_22135;
var state_22190__$1 = state_22190;
if(cljs.core.truth_(inst_22136)){
var statearr_22238_22306 = state_22190__$1;
(statearr_22238_22306[(1)] = (27));

} else {
var statearr_22239_22307 = state_22190__$1;
(statearr_22239_22307[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (34))){
var state_22190__$1 = state_22190;
var statearr_22240_22308 = state_22190__$1;
(statearr_22240_22308[(2)] = null);

(statearr_22240_22308[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (17))){
var state_22190__$1 = state_22190;
var statearr_22241_22309 = state_22190__$1;
(statearr_22241_22309[(2)] = null);

(statearr_22241_22309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (3))){
var inst_22188 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22190__$1,inst_22188);
} else {
if((state_val_22191 === (12))){
var inst_22117 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22242_22310 = state_22190__$1;
(statearr_22242_22310[(2)] = inst_22117);

(statearr_22242_22310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (2))){
var state_22190__$1 = state_22190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22190__$1,(4),ch);
} else {
if((state_val_22191 === (23))){
var state_22190__$1 = state_22190;
var statearr_22243_22311 = state_22190__$1;
(statearr_22243_22311[(2)] = null);

(statearr_22243_22311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (35))){
var inst_22172 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22244_22312 = state_22190__$1;
(statearr_22244_22312[(2)] = inst_22172);

(statearr_22244_22312[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (19))){
var inst_22091 = (state_22190[(7)]);
var inst_22095 = cljs.core.chunk_first.call(null,inst_22091);
var inst_22096 = cljs.core.chunk_rest.call(null,inst_22091);
var inst_22097 = cljs.core.count.call(null,inst_22095);
var inst_22071 = inst_22096;
var inst_22072 = inst_22095;
var inst_22073 = inst_22097;
var inst_22074 = (0);
var state_22190__$1 = (function (){var statearr_22245 = state_22190;
(statearr_22245[(13)] = inst_22071);

(statearr_22245[(14)] = inst_22072);

(statearr_22245[(16)] = inst_22073);

(statearr_22245[(17)] = inst_22074);

return statearr_22245;
})();
var statearr_22246_22313 = state_22190__$1;
(statearr_22246_22313[(2)] = null);

(statearr_22246_22313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (11))){
var inst_22071 = (state_22190[(13)]);
var inst_22091 = (state_22190[(7)]);
var inst_22091__$1 = cljs.core.seq.call(null,inst_22071);
var state_22190__$1 = (function (){var statearr_22247 = state_22190;
(statearr_22247[(7)] = inst_22091__$1);

return statearr_22247;
})();
if(inst_22091__$1){
var statearr_22248_22314 = state_22190__$1;
(statearr_22248_22314[(1)] = (16));

} else {
var statearr_22249_22315 = state_22190__$1;
(statearr_22249_22315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (9))){
var inst_22119 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22250_22316 = state_22190__$1;
(statearr_22250_22316[(2)] = inst_22119);

(statearr_22250_22316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (5))){
var inst_22069 = cljs.core.deref.call(null,cs);
var inst_22070 = cljs.core.seq.call(null,inst_22069);
var inst_22071 = inst_22070;
var inst_22072 = null;
var inst_22073 = (0);
var inst_22074 = (0);
var state_22190__$1 = (function (){var statearr_22251 = state_22190;
(statearr_22251[(13)] = inst_22071);

(statearr_22251[(14)] = inst_22072);

(statearr_22251[(16)] = inst_22073);

(statearr_22251[(17)] = inst_22074);

return statearr_22251;
})();
var statearr_22252_22317 = state_22190__$1;
(statearr_22252_22317[(2)] = null);

(statearr_22252_22317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (14))){
var state_22190__$1 = state_22190;
var statearr_22253_22318 = state_22190__$1;
(statearr_22253_22318[(2)] = null);

(statearr_22253_22318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (45))){
var inst_22180 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22254_22319 = state_22190__$1;
(statearr_22254_22319[(2)] = inst_22180);

(statearr_22254_22319[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (26))){
var inst_22122 = (state_22190[(29)]);
var inst_22176 = (state_22190[(2)]);
var inst_22177 = cljs.core.seq.call(null,inst_22122);
var state_22190__$1 = (function (){var statearr_22255 = state_22190;
(statearr_22255[(31)] = inst_22176);

return statearr_22255;
})();
if(inst_22177){
var statearr_22256_22320 = state_22190__$1;
(statearr_22256_22320[(1)] = (42));

} else {
var statearr_22257_22321 = state_22190__$1;
(statearr_22257_22321[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (16))){
var inst_22091 = (state_22190[(7)]);
var inst_22093 = cljs.core.chunked_seq_QMARK_.call(null,inst_22091);
var state_22190__$1 = state_22190;
if(inst_22093){
var statearr_22258_22322 = state_22190__$1;
(statearr_22258_22322[(1)] = (19));

} else {
var statearr_22259_22323 = state_22190__$1;
(statearr_22259_22323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (38))){
var inst_22169 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22260_22324 = state_22190__$1;
(statearr_22260_22324[(2)] = inst_22169);

(statearr_22260_22324[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (30))){
var state_22190__$1 = state_22190;
var statearr_22261_22325 = state_22190__$1;
(statearr_22261_22325[(2)] = null);

(statearr_22261_22325[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (10))){
var inst_22072 = (state_22190[(14)]);
var inst_22074 = (state_22190[(17)]);
var inst_22080 = cljs.core._nth.call(null,inst_22072,inst_22074);
var inst_22081 = cljs.core.nth.call(null,inst_22080,(0),null);
var inst_22082 = cljs.core.nth.call(null,inst_22080,(1),null);
var state_22190__$1 = (function (){var statearr_22262 = state_22190;
(statearr_22262[(26)] = inst_22081);

return statearr_22262;
})();
if(cljs.core.truth_(inst_22082)){
var statearr_22263_22326 = state_22190__$1;
(statearr_22263_22326[(1)] = (13));

} else {
var statearr_22264_22327 = state_22190__$1;
(statearr_22264_22327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (18))){
var inst_22115 = (state_22190[(2)]);
var state_22190__$1 = state_22190;
var statearr_22265_22328 = state_22190__$1;
(statearr_22265_22328[(2)] = inst_22115);

(statearr_22265_22328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (42))){
var state_22190__$1 = state_22190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22190__$1,(45),dchan);
} else {
if((state_val_22191 === (37))){
var inst_22158 = (state_22190[(23)]);
var inst_22062 = (state_22190[(9)]);
var inst_22149 = (state_22190[(25)]);
var inst_22158__$1 = cljs.core.first.call(null,inst_22149);
var inst_22159 = cljs.core.async.put_BANG_.call(null,inst_22158__$1,inst_22062,done);
var state_22190__$1 = (function (){var statearr_22266 = state_22190;
(statearr_22266[(23)] = inst_22158__$1);

return statearr_22266;
})();
if(cljs.core.truth_(inst_22159)){
var statearr_22267_22329 = state_22190__$1;
(statearr_22267_22329[(1)] = (39));

} else {
var statearr_22268_22330 = state_22190__$1;
(statearr_22268_22330[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22191 === (8))){
var inst_22073 = (state_22190[(16)]);
var inst_22074 = (state_22190[(17)]);
var inst_22076 = (inst_22074 < inst_22073);
var inst_22077 = inst_22076;
var state_22190__$1 = state_22190;
if(cljs.core.truth_(inst_22077)){
var statearr_22269_22331 = state_22190__$1;
(statearr_22269_22331[(1)] = (10));

} else {
var statearr_22270_22332 = state_22190__$1;
(statearr_22270_22332[(1)] = (11));

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
});})(c__8217__auto___22278,cs,m,dchan,dctr,done))
;
return ((function (switch__8155__auto__,c__8217__auto___22278,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8156__auto__ = null;
var cljs$core$async$mult_$_state_machine__8156__auto____0 = (function (){
var statearr_22274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22274[(0)] = cljs$core$async$mult_$_state_machine__8156__auto__);

(statearr_22274[(1)] = (1));

return statearr_22274;
});
var cljs$core$async$mult_$_state_machine__8156__auto____1 = (function (state_22190){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_22190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e22275){if((e22275 instanceof Object)){
var ex__8159__auto__ = e22275;
var statearr_22276_22333 = state_22190;
(statearr_22276_22333[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22334 = state_22190;
state_22190 = G__22334;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8156__auto__ = function(state_22190){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8156__auto____1.call(this,state_22190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8156__auto____0;
cljs$core$async$mult_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8156__auto____1;
return cljs$core$async$mult_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___22278,cs,m,dchan,dctr,done))
})();
var state__8219__auto__ = (function (){var statearr_22277 = f__8218__auto__.call(null);
(statearr_22277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___22278);

return statearr_22277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___22278,cs,m,dchan,dctr,done))
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
var G__22336 = arguments.length;
switch (G__22336) {
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

cljs.core.async.Mix = (function (){var obj22339 = {};
return obj22339;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22344){
var map__22345 = p__22344;
var map__22345__$1 = ((cljs.core.seq_QMARK_.call(null,map__22345))?cljs.core.apply.call(null,cljs.core.hash_map,map__22345):map__22345);
var opts = map__22345__$1;
var statearr_22346_22349 = state;
(statearr_22346_22349[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22345,map__22345__$1,opts){
return (function (val){
var statearr_22347_22350 = state;
(statearr_22347_22350[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22345,map__22345__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22348_22351 = state;
(statearr_22348_22351[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22340){
var G__22341 = cljs.core.first.call(null,seq22340);
var seq22340__$1 = cljs.core.next.call(null,seq22340);
var G__22342 = cljs.core.first.call(null,seq22340__$1);
var seq22340__$2 = cljs.core.next.call(null,seq22340__$1);
var G__22343 = cljs.core.first.call(null,seq22340__$2);
var seq22340__$3 = cljs.core.next.call(null,seq22340__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22341,G__22342,G__22343,seq22340__$3);
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
if(typeof cljs.core.async.t22471 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22471 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22472){
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
this.meta22472 = meta22472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22471.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22471.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22471.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22471.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22471.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22471.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t22471.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22473){
var self__ = this;
var _22473__$1 = this;
return self__.meta22472;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22473,meta22472__$1){
var self__ = this;
var _22473__$1 = this;
return (new cljs.core.async.t22471(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22472__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22471.cljs$lang$type = true;

cljs.core.async.t22471.cljs$lang$ctorStr = "cljs.core.async/t22471";

cljs.core.async.t22471.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t22471");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22471 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t22471(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22472){
return (new cljs.core.async.t22471(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22472));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22471(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8217__auto___22590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___22590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___22590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22543){
var state_val_22544 = (state_22543[(1)]);
if((state_val_22544 === (7))){
var inst_22487 = (state_22543[(7)]);
var inst_22492 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22487);
var state_22543__$1 = state_22543;
var statearr_22545_22591 = state_22543__$1;
(statearr_22545_22591[(2)] = inst_22492);

(statearr_22545_22591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (20))){
var inst_22502 = (state_22543[(8)]);
var state_22543__$1 = state_22543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22543__$1,(23),out,inst_22502);
} else {
if((state_val_22544 === (1))){
var inst_22477 = (state_22543[(9)]);
var inst_22477__$1 = calc_state.call(null);
var inst_22478 = cljs.core.seq_QMARK_.call(null,inst_22477__$1);
var state_22543__$1 = (function (){var statearr_22546 = state_22543;
(statearr_22546[(9)] = inst_22477__$1);

return statearr_22546;
})();
if(inst_22478){
var statearr_22547_22592 = state_22543__$1;
(statearr_22547_22592[(1)] = (2));

} else {
var statearr_22548_22593 = state_22543__$1;
(statearr_22548_22593[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (24))){
var inst_22495 = (state_22543[(10)]);
var inst_22487 = inst_22495;
var state_22543__$1 = (function (){var statearr_22549 = state_22543;
(statearr_22549[(7)] = inst_22487);

return statearr_22549;
})();
var statearr_22550_22594 = state_22543__$1;
(statearr_22550_22594[(2)] = null);

(statearr_22550_22594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (4))){
var inst_22477 = (state_22543[(9)]);
var inst_22483 = (state_22543[(2)]);
var inst_22484 = cljs.core.get.call(null,inst_22483,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22485 = cljs.core.get.call(null,inst_22483,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22486 = cljs.core.get.call(null,inst_22483,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22487 = inst_22477;
var state_22543__$1 = (function (){var statearr_22551 = state_22543;
(statearr_22551[(11)] = inst_22485);

(statearr_22551[(12)] = inst_22486);

(statearr_22551[(7)] = inst_22487);

(statearr_22551[(13)] = inst_22484);

return statearr_22551;
})();
var statearr_22552_22595 = state_22543__$1;
(statearr_22552_22595[(2)] = null);

(statearr_22552_22595[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (15))){
var state_22543__$1 = state_22543;
var statearr_22553_22596 = state_22543__$1;
(statearr_22553_22596[(2)] = null);

(statearr_22553_22596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (21))){
var inst_22495 = (state_22543[(10)]);
var inst_22487 = inst_22495;
var state_22543__$1 = (function (){var statearr_22554 = state_22543;
(statearr_22554[(7)] = inst_22487);

return statearr_22554;
})();
var statearr_22555_22597 = state_22543__$1;
(statearr_22555_22597[(2)] = null);

(statearr_22555_22597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (13))){
var inst_22539 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
var statearr_22556_22598 = state_22543__$1;
(statearr_22556_22598[(2)] = inst_22539);

(statearr_22556_22598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (22))){
var inst_22537 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
var statearr_22557_22599 = state_22543__$1;
(statearr_22557_22599[(2)] = inst_22537);

(statearr_22557_22599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (6))){
var inst_22541 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22543__$1,inst_22541);
} else {
if((state_val_22544 === (25))){
var state_22543__$1 = state_22543;
var statearr_22558_22600 = state_22543__$1;
(statearr_22558_22600[(2)] = null);

(statearr_22558_22600[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (17))){
var inst_22517 = (state_22543[(14)]);
var state_22543__$1 = state_22543;
var statearr_22559_22601 = state_22543__$1;
(statearr_22559_22601[(2)] = inst_22517);

(statearr_22559_22601[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (3))){
var inst_22477 = (state_22543[(9)]);
var state_22543__$1 = state_22543;
var statearr_22560_22602 = state_22543__$1;
(statearr_22560_22602[(2)] = inst_22477);

(statearr_22560_22602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (12))){
var inst_22517 = (state_22543[(14)]);
var inst_22498 = (state_22543[(15)]);
var inst_22503 = (state_22543[(16)]);
var inst_22517__$1 = inst_22498.call(null,inst_22503);
var state_22543__$1 = (function (){var statearr_22561 = state_22543;
(statearr_22561[(14)] = inst_22517__$1);

return statearr_22561;
})();
if(cljs.core.truth_(inst_22517__$1)){
var statearr_22562_22603 = state_22543__$1;
(statearr_22562_22603[(1)] = (17));

} else {
var statearr_22563_22604 = state_22543__$1;
(statearr_22563_22604[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (2))){
var inst_22477 = (state_22543[(9)]);
var inst_22480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22477);
var state_22543__$1 = state_22543;
var statearr_22564_22605 = state_22543__$1;
(statearr_22564_22605[(2)] = inst_22480);

(statearr_22564_22605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (23))){
var inst_22528 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
if(cljs.core.truth_(inst_22528)){
var statearr_22565_22606 = state_22543__$1;
(statearr_22565_22606[(1)] = (24));

} else {
var statearr_22566_22607 = state_22543__$1;
(statearr_22566_22607[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (19))){
var inst_22525 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
if(cljs.core.truth_(inst_22525)){
var statearr_22567_22608 = state_22543__$1;
(statearr_22567_22608[(1)] = (20));

} else {
var statearr_22568_22609 = state_22543__$1;
(statearr_22568_22609[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (11))){
var inst_22502 = (state_22543[(8)]);
var inst_22508 = (inst_22502 == null);
var state_22543__$1 = state_22543;
if(cljs.core.truth_(inst_22508)){
var statearr_22569_22610 = state_22543__$1;
(statearr_22569_22610[(1)] = (14));

} else {
var statearr_22570_22611 = state_22543__$1;
(statearr_22570_22611[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (9))){
var inst_22495 = (state_22543[(10)]);
var inst_22495__$1 = (state_22543[(2)]);
var inst_22496 = cljs.core.get.call(null,inst_22495__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22497 = cljs.core.get.call(null,inst_22495__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22498 = cljs.core.get.call(null,inst_22495__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22543__$1 = (function (){var statearr_22571 = state_22543;
(statearr_22571[(17)] = inst_22497);

(statearr_22571[(15)] = inst_22498);

(statearr_22571[(10)] = inst_22495__$1);

return statearr_22571;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22543__$1,(10),inst_22496);
} else {
if((state_val_22544 === (5))){
var inst_22487 = (state_22543[(7)]);
var inst_22490 = cljs.core.seq_QMARK_.call(null,inst_22487);
var state_22543__$1 = state_22543;
if(inst_22490){
var statearr_22572_22612 = state_22543__$1;
(statearr_22572_22612[(1)] = (7));

} else {
var statearr_22573_22613 = state_22543__$1;
(statearr_22573_22613[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (14))){
var inst_22503 = (state_22543[(16)]);
var inst_22510 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22503);
var state_22543__$1 = state_22543;
var statearr_22574_22614 = state_22543__$1;
(statearr_22574_22614[(2)] = inst_22510);

(statearr_22574_22614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (26))){
var inst_22533 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
var statearr_22575_22615 = state_22543__$1;
(statearr_22575_22615[(2)] = inst_22533);

(statearr_22575_22615[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (16))){
var inst_22513 = (state_22543[(2)]);
var inst_22514 = calc_state.call(null);
var inst_22487 = inst_22514;
var state_22543__$1 = (function (){var statearr_22576 = state_22543;
(statearr_22576[(7)] = inst_22487);

(statearr_22576[(18)] = inst_22513);

return statearr_22576;
})();
var statearr_22577_22616 = state_22543__$1;
(statearr_22577_22616[(2)] = null);

(statearr_22577_22616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (10))){
var inst_22502 = (state_22543[(8)]);
var inst_22503 = (state_22543[(16)]);
var inst_22501 = (state_22543[(2)]);
var inst_22502__$1 = cljs.core.nth.call(null,inst_22501,(0),null);
var inst_22503__$1 = cljs.core.nth.call(null,inst_22501,(1),null);
var inst_22504 = (inst_22502__$1 == null);
var inst_22505 = cljs.core._EQ_.call(null,inst_22503__$1,change);
var inst_22506 = (inst_22504) || (inst_22505);
var state_22543__$1 = (function (){var statearr_22578 = state_22543;
(statearr_22578[(8)] = inst_22502__$1);

(statearr_22578[(16)] = inst_22503__$1);

return statearr_22578;
})();
if(cljs.core.truth_(inst_22506)){
var statearr_22579_22617 = state_22543__$1;
(statearr_22579_22617[(1)] = (11));

} else {
var statearr_22580_22618 = state_22543__$1;
(statearr_22580_22618[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (18))){
var inst_22497 = (state_22543[(17)]);
var inst_22498 = (state_22543[(15)]);
var inst_22503 = (state_22543[(16)]);
var inst_22520 = cljs.core.empty_QMARK_.call(null,inst_22498);
var inst_22521 = inst_22497.call(null,inst_22503);
var inst_22522 = cljs.core.not.call(null,inst_22521);
var inst_22523 = (inst_22520) && (inst_22522);
var state_22543__$1 = state_22543;
var statearr_22581_22619 = state_22543__$1;
(statearr_22581_22619[(2)] = inst_22523);

(statearr_22581_22619[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (8))){
var inst_22487 = (state_22543[(7)]);
var state_22543__$1 = state_22543;
var statearr_22582_22620 = state_22543__$1;
(statearr_22582_22620[(2)] = inst_22487);

(statearr_22582_22620[(1)] = (9));


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
});})(c__8217__auto___22590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8155__auto__,c__8217__auto___22590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8156__auto__ = null;
var cljs$core$async$mix_$_state_machine__8156__auto____0 = (function (){
var statearr_22586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22586[(0)] = cljs$core$async$mix_$_state_machine__8156__auto__);

(statearr_22586[(1)] = (1));

return statearr_22586;
});
var cljs$core$async$mix_$_state_machine__8156__auto____1 = (function (state_22543){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_22543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e22587){if((e22587 instanceof Object)){
var ex__8159__auto__ = e22587;
var statearr_22588_22621 = state_22543;
(statearr_22588_22621[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22622 = state_22543;
state_22543 = G__22622;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8156__auto__ = function(state_22543){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8156__auto____1.call(this,state_22543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8156__auto____0;
cljs$core$async$mix_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8156__auto____1;
return cljs$core$async$mix_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___22590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8219__auto__ = (function (){var statearr_22589 = f__8218__auto__.call(null);
(statearr_22589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___22590);

return statearr_22589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___22590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22624 = {};
return obj22624;
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
var G__22626 = arguments.length;
switch (G__22626) {
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
var G__22630 = arguments.length;
switch (G__22630) {
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
return (function (p1__22628_SHARP_){
if(cljs.core.truth_(p1__22628_SHARP_.call(null,topic))){
return p1__22628_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22628_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4099__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22631 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta22632){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta22632 = meta22632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22631.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22631.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22631.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22631.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22631.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22631.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22633){
var self__ = this;
var _22633__$1 = this;
return self__.meta22632;
});})(mults,ensure_mult))
;

cljs.core.async.t22631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22633,meta22632__$1){
var self__ = this;
var _22633__$1 = this;
return (new cljs.core.async.t22631(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta22632__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22631.cljs$lang$type = true;

cljs.core.async.t22631.cljs$lang$ctorStr = "cljs.core.async/t22631";

cljs.core.async.t22631.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t22631");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22631 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t22631(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta22632){
return (new cljs.core.async.t22631(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta22632));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22631(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8217__auto___22754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___22754,mults,ensure_mult,p){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___22754,mults,ensure_mult,p){
return (function (state_22705){
var state_val_22706 = (state_22705[(1)]);
if((state_val_22706 === (7))){
var inst_22701 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22707_22755 = state_22705__$1;
(statearr_22707_22755[(2)] = inst_22701);

(statearr_22707_22755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (20))){
var state_22705__$1 = state_22705;
var statearr_22708_22756 = state_22705__$1;
(statearr_22708_22756[(2)] = null);

(statearr_22708_22756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (1))){
var state_22705__$1 = state_22705;
var statearr_22709_22757 = state_22705__$1;
(statearr_22709_22757[(2)] = null);

(statearr_22709_22757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (24))){
var inst_22684 = (state_22705[(7)]);
var inst_22693 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22684);
var state_22705__$1 = state_22705;
var statearr_22710_22758 = state_22705__$1;
(statearr_22710_22758[(2)] = inst_22693);

(statearr_22710_22758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (4))){
var inst_22636 = (state_22705[(8)]);
var inst_22636__$1 = (state_22705[(2)]);
var inst_22637 = (inst_22636__$1 == null);
var state_22705__$1 = (function (){var statearr_22711 = state_22705;
(statearr_22711[(8)] = inst_22636__$1);

return statearr_22711;
})();
if(cljs.core.truth_(inst_22637)){
var statearr_22712_22759 = state_22705__$1;
(statearr_22712_22759[(1)] = (5));

} else {
var statearr_22713_22760 = state_22705__$1;
(statearr_22713_22760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (15))){
var inst_22678 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22714_22761 = state_22705__$1;
(statearr_22714_22761[(2)] = inst_22678);

(statearr_22714_22761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (21))){
var inst_22698 = (state_22705[(2)]);
var state_22705__$1 = (function (){var statearr_22715 = state_22705;
(statearr_22715[(9)] = inst_22698);

return statearr_22715;
})();
var statearr_22716_22762 = state_22705__$1;
(statearr_22716_22762[(2)] = null);

(statearr_22716_22762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (13))){
var inst_22660 = (state_22705[(10)]);
var inst_22662 = cljs.core.chunked_seq_QMARK_.call(null,inst_22660);
var state_22705__$1 = state_22705;
if(inst_22662){
var statearr_22717_22763 = state_22705__$1;
(statearr_22717_22763[(1)] = (16));

} else {
var statearr_22718_22764 = state_22705__$1;
(statearr_22718_22764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (22))){
var inst_22690 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
if(cljs.core.truth_(inst_22690)){
var statearr_22719_22765 = state_22705__$1;
(statearr_22719_22765[(1)] = (23));

} else {
var statearr_22720_22766 = state_22705__$1;
(statearr_22720_22766[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (6))){
var inst_22686 = (state_22705[(11)]);
var inst_22684 = (state_22705[(7)]);
var inst_22636 = (state_22705[(8)]);
var inst_22684__$1 = topic_fn.call(null,inst_22636);
var inst_22685 = cljs.core.deref.call(null,mults);
var inst_22686__$1 = cljs.core.get.call(null,inst_22685,inst_22684__$1);
var state_22705__$1 = (function (){var statearr_22721 = state_22705;
(statearr_22721[(11)] = inst_22686__$1);

(statearr_22721[(7)] = inst_22684__$1);

return statearr_22721;
})();
if(cljs.core.truth_(inst_22686__$1)){
var statearr_22722_22767 = state_22705__$1;
(statearr_22722_22767[(1)] = (19));

} else {
var statearr_22723_22768 = state_22705__$1;
(statearr_22723_22768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (25))){
var inst_22695 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22724_22769 = state_22705__$1;
(statearr_22724_22769[(2)] = inst_22695);

(statearr_22724_22769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (17))){
var inst_22660 = (state_22705[(10)]);
var inst_22669 = cljs.core.first.call(null,inst_22660);
var inst_22670 = cljs.core.async.muxch_STAR_.call(null,inst_22669);
var inst_22671 = cljs.core.async.close_BANG_.call(null,inst_22670);
var inst_22672 = cljs.core.next.call(null,inst_22660);
var inst_22646 = inst_22672;
var inst_22647 = null;
var inst_22648 = (0);
var inst_22649 = (0);
var state_22705__$1 = (function (){var statearr_22725 = state_22705;
(statearr_22725[(12)] = inst_22646);

(statearr_22725[(13)] = inst_22647);

(statearr_22725[(14)] = inst_22649);

(statearr_22725[(15)] = inst_22648);

(statearr_22725[(16)] = inst_22671);

return statearr_22725;
})();
var statearr_22726_22770 = state_22705__$1;
(statearr_22726_22770[(2)] = null);

(statearr_22726_22770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (3))){
var inst_22703 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22705__$1,inst_22703);
} else {
if((state_val_22706 === (12))){
var inst_22680 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22727_22771 = state_22705__$1;
(statearr_22727_22771[(2)] = inst_22680);

(statearr_22727_22771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (2))){
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22705__$1,(4),ch);
} else {
if((state_val_22706 === (23))){
var state_22705__$1 = state_22705;
var statearr_22728_22772 = state_22705__$1;
(statearr_22728_22772[(2)] = null);

(statearr_22728_22772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (19))){
var inst_22686 = (state_22705[(11)]);
var inst_22636 = (state_22705[(8)]);
var inst_22688 = cljs.core.async.muxch_STAR_.call(null,inst_22686);
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22705__$1,(22),inst_22688,inst_22636);
} else {
if((state_val_22706 === (11))){
var inst_22646 = (state_22705[(12)]);
var inst_22660 = (state_22705[(10)]);
var inst_22660__$1 = cljs.core.seq.call(null,inst_22646);
var state_22705__$1 = (function (){var statearr_22729 = state_22705;
(statearr_22729[(10)] = inst_22660__$1);

return statearr_22729;
})();
if(inst_22660__$1){
var statearr_22730_22773 = state_22705__$1;
(statearr_22730_22773[(1)] = (13));

} else {
var statearr_22731_22774 = state_22705__$1;
(statearr_22731_22774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (9))){
var inst_22682 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22732_22775 = state_22705__$1;
(statearr_22732_22775[(2)] = inst_22682);

(statearr_22732_22775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (5))){
var inst_22643 = cljs.core.deref.call(null,mults);
var inst_22644 = cljs.core.vals.call(null,inst_22643);
var inst_22645 = cljs.core.seq.call(null,inst_22644);
var inst_22646 = inst_22645;
var inst_22647 = null;
var inst_22648 = (0);
var inst_22649 = (0);
var state_22705__$1 = (function (){var statearr_22733 = state_22705;
(statearr_22733[(12)] = inst_22646);

(statearr_22733[(13)] = inst_22647);

(statearr_22733[(14)] = inst_22649);

(statearr_22733[(15)] = inst_22648);

return statearr_22733;
})();
var statearr_22734_22776 = state_22705__$1;
(statearr_22734_22776[(2)] = null);

(statearr_22734_22776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (14))){
var state_22705__$1 = state_22705;
var statearr_22738_22777 = state_22705__$1;
(statearr_22738_22777[(2)] = null);

(statearr_22738_22777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (16))){
var inst_22660 = (state_22705[(10)]);
var inst_22664 = cljs.core.chunk_first.call(null,inst_22660);
var inst_22665 = cljs.core.chunk_rest.call(null,inst_22660);
var inst_22666 = cljs.core.count.call(null,inst_22664);
var inst_22646 = inst_22665;
var inst_22647 = inst_22664;
var inst_22648 = inst_22666;
var inst_22649 = (0);
var state_22705__$1 = (function (){var statearr_22739 = state_22705;
(statearr_22739[(12)] = inst_22646);

(statearr_22739[(13)] = inst_22647);

(statearr_22739[(14)] = inst_22649);

(statearr_22739[(15)] = inst_22648);

return statearr_22739;
})();
var statearr_22740_22778 = state_22705__$1;
(statearr_22740_22778[(2)] = null);

(statearr_22740_22778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (10))){
var inst_22646 = (state_22705[(12)]);
var inst_22647 = (state_22705[(13)]);
var inst_22649 = (state_22705[(14)]);
var inst_22648 = (state_22705[(15)]);
var inst_22654 = cljs.core._nth.call(null,inst_22647,inst_22649);
var inst_22655 = cljs.core.async.muxch_STAR_.call(null,inst_22654);
var inst_22656 = cljs.core.async.close_BANG_.call(null,inst_22655);
var inst_22657 = (inst_22649 + (1));
var tmp22735 = inst_22646;
var tmp22736 = inst_22647;
var tmp22737 = inst_22648;
var inst_22646__$1 = tmp22735;
var inst_22647__$1 = tmp22736;
var inst_22648__$1 = tmp22737;
var inst_22649__$1 = inst_22657;
var state_22705__$1 = (function (){var statearr_22741 = state_22705;
(statearr_22741[(12)] = inst_22646__$1);

(statearr_22741[(13)] = inst_22647__$1);

(statearr_22741[(14)] = inst_22649__$1);

(statearr_22741[(17)] = inst_22656);

(statearr_22741[(15)] = inst_22648__$1);

return statearr_22741;
})();
var statearr_22742_22779 = state_22705__$1;
(statearr_22742_22779[(2)] = null);

(statearr_22742_22779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (18))){
var inst_22675 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22743_22780 = state_22705__$1;
(statearr_22743_22780[(2)] = inst_22675);

(statearr_22743_22780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (8))){
var inst_22649 = (state_22705[(14)]);
var inst_22648 = (state_22705[(15)]);
var inst_22651 = (inst_22649 < inst_22648);
var inst_22652 = inst_22651;
var state_22705__$1 = state_22705;
if(cljs.core.truth_(inst_22652)){
var statearr_22744_22781 = state_22705__$1;
(statearr_22744_22781[(1)] = (10));

} else {
var statearr_22745_22782 = state_22705__$1;
(statearr_22745_22782[(1)] = (11));

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
});})(c__8217__auto___22754,mults,ensure_mult,p))
;
return ((function (switch__8155__auto__,c__8217__auto___22754,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_22749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22749[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_22749[(1)] = (1));

return statearr_22749;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_22705){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_22705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e22750){if((e22750 instanceof Object)){
var ex__8159__auto__ = e22750;
var statearr_22751_22783 = state_22705;
(statearr_22751_22783[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22784 = state_22705;
state_22705 = G__22784;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_22705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_22705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___22754,mults,ensure_mult,p))
})();
var state__8219__auto__ = (function (){var statearr_22752 = f__8218__auto__.call(null);
(statearr_22752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___22754);

return statearr_22752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___22754,mults,ensure_mult,p))
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
var G__22786 = arguments.length;
switch (G__22786) {
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
var G__22789 = arguments.length;
switch (G__22789) {
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
var G__22792 = arguments.length;
switch (G__22792) {
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
var c__8217__auto___22862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___22862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___22862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22831){
var state_val_22832 = (state_22831[(1)]);
if((state_val_22832 === (7))){
var state_22831__$1 = state_22831;
var statearr_22833_22863 = state_22831__$1;
(statearr_22833_22863[(2)] = null);

(statearr_22833_22863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (1))){
var state_22831__$1 = state_22831;
var statearr_22834_22864 = state_22831__$1;
(statearr_22834_22864[(2)] = null);

(statearr_22834_22864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (4))){
var inst_22795 = (state_22831[(7)]);
var inst_22797 = (inst_22795 < cnt);
var state_22831__$1 = state_22831;
if(cljs.core.truth_(inst_22797)){
var statearr_22835_22865 = state_22831__$1;
(statearr_22835_22865[(1)] = (6));

} else {
var statearr_22836_22866 = state_22831__$1;
(statearr_22836_22866[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (15))){
var inst_22827 = (state_22831[(2)]);
var state_22831__$1 = state_22831;
var statearr_22837_22867 = state_22831__$1;
(statearr_22837_22867[(2)] = inst_22827);

(statearr_22837_22867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (13))){
var inst_22820 = cljs.core.async.close_BANG_.call(null,out);
var state_22831__$1 = state_22831;
var statearr_22838_22868 = state_22831__$1;
(statearr_22838_22868[(2)] = inst_22820);

(statearr_22838_22868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (6))){
var state_22831__$1 = state_22831;
var statearr_22839_22869 = state_22831__$1;
(statearr_22839_22869[(2)] = null);

(statearr_22839_22869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (3))){
var inst_22829 = (state_22831[(2)]);
var state_22831__$1 = state_22831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22831__$1,inst_22829);
} else {
if((state_val_22832 === (12))){
var inst_22817 = (state_22831[(8)]);
var inst_22817__$1 = (state_22831[(2)]);
var inst_22818 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22817__$1);
var state_22831__$1 = (function (){var statearr_22840 = state_22831;
(statearr_22840[(8)] = inst_22817__$1);

return statearr_22840;
})();
if(cljs.core.truth_(inst_22818)){
var statearr_22841_22870 = state_22831__$1;
(statearr_22841_22870[(1)] = (13));

} else {
var statearr_22842_22871 = state_22831__$1;
(statearr_22842_22871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (2))){
var inst_22794 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22795 = (0);
var state_22831__$1 = (function (){var statearr_22843 = state_22831;
(statearr_22843[(7)] = inst_22795);

(statearr_22843[(9)] = inst_22794);

return statearr_22843;
})();
var statearr_22844_22872 = state_22831__$1;
(statearr_22844_22872[(2)] = null);

(statearr_22844_22872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (11))){
var inst_22795 = (state_22831[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22831,(10),Object,null,(9));
var inst_22804 = chs__$1.call(null,inst_22795);
var inst_22805 = done.call(null,inst_22795);
var inst_22806 = cljs.core.async.take_BANG_.call(null,inst_22804,inst_22805);
var state_22831__$1 = state_22831;
var statearr_22845_22873 = state_22831__$1;
(statearr_22845_22873[(2)] = inst_22806);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22831__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (9))){
var inst_22795 = (state_22831[(7)]);
var inst_22808 = (state_22831[(2)]);
var inst_22809 = (inst_22795 + (1));
var inst_22795__$1 = inst_22809;
var state_22831__$1 = (function (){var statearr_22846 = state_22831;
(statearr_22846[(10)] = inst_22808);

(statearr_22846[(7)] = inst_22795__$1);

return statearr_22846;
})();
var statearr_22847_22874 = state_22831__$1;
(statearr_22847_22874[(2)] = null);

(statearr_22847_22874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (5))){
var inst_22815 = (state_22831[(2)]);
var state_22831__$1 = (function (){var statearr_22848 = state_22831;
(statearr_22848[(11)] = inst_22815);

return statearr_22848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22831__$1,(12),dchan);
} else {
if((state_val_22832 === (14))){
var inst_22817 = (state_22831[(8)]);
var inst_22822 = cljs.core.apply.call(null,f,inst_22817);
var state_22831__$1 = state_22831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22831__$1,(16),out,inst_22822);
} else {
if((state_val_22832 === (16))){
var inst_22824 = (state_22831[(2)]);
var state_22831__$1 = (function (){var statearr_22849 = state_22831;
(statearr_22849[(12)] = inst_22824);

return statearr_22849;
})();
var statearr_22850_22875 = state_22831__$1;
(statearr_22850_22875[(2)] = null);

(statearr_22850_22875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (10))){
var inst_22799 = (state_22831[(2)]);
var inst_22800 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22831__$1 = (function (){var statearr_22851 = state_22831;
(statearr_22851[(13)] = inst_22799);

return statearr_22851;
})();
var statearr_22852_22876 = state_22831__$1;
(statearr_22852_22876[(2)] = inst_22800);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22831__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22832 === (8))){
var inst_22813 = (state_22831[(2)]);
var state_22831__$1 = state_22831;
var statearr_22853_22877 = state_22831__$1;
(statearr_22853_22877[(2)] = inst_22813);

(statearr_22853_22877[(1)] = (5));


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
});})(c__8217__auto___22862,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8155__auto__,c__8217__auto___22862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_22857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22857[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_22857[(1)] = (1));

return statearr_22857;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_22831){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_22831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e22858){if((e22858 instanceof Object)){
var ex__8159__auto__ = e22858;
var statearr_22859_22878 = state_22831;
(statearr_22859_22878[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22879 = state_22831;
state_22831 = G__22879;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_22831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_22831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___22862,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8219__auto__ = (function (){var statearr_22860 = f__8218__auto__.call(null);
(statearr_22860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___22862);

return statearr_22860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___22862,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22882 = arguments.length;
switch (G__22882) {
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
var c__8217__auto___22937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___22937,out){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___22937,out){
return (function (state_22912){
var state_val_22913 = (state_22912[(1)]);
if((state_val_22913 === (7))){
var inst_22892 = (state_22912[(7)]);
var inst_22891 = (state_22912[(8)]);
var inst_22891__$1 = (state_22912[(2)]);
var inst_22892__$1 = cljs.core.nth.call(null,inst_22891__$1,(0),null);
var inst_22893 = cljs.core.nth.call(null,inst_22891__$1,(1),null);
var inst_22894 = (inst_22892__$1 == null);
var state_22912__$1 = (function (){var statearr_22914 = state_22912;
(statearr_22914[(7)] = inst_22892__$1);

(statearr_22914[(9)] = inst_22893);

(statearr_22914[(8)] = inst_22891__$1);

return statearr_22914;
})();
if(cljs.core.truth_(inst_22894)){
var statearr_22915_22938 = state_22912__$1;
(statearr_22915_22938[(1)] = (8));

} else {
var statearr_22916_22939 = state_22912__$1;
(statearr_22916_22939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (1))){
var inst_22883 = cljs.core.vec.call(null,chs);
var inst_22884 = inst_22883;
var state_22912__$1 = (function (){var statearr_22917 = state_22912;
(statearr_22917[(10)] = inst_22884);

return statearr_22917;
})();
var statearr_22918_22940 = state_22912__$1;
(statearr_22918_22940[(2)] = null);

(statearr_22918_22940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (4))){
var inst_22884 = (state_22912[(10)]);
var state_22912__$1 = state_22912;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22912__$1,(7),inst_22884);
} else {
if((state_val_22913 === (6))){
var inst_22908 = (state_22912[(2)]);
var state_22912__$1 = state_22912;
var statearr_22919_22941 = state_22912__$1;
(statearr_22919_22941[(2)] = inst_22908);

(statearr_22919_22941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (3))){
var inst_22910 = (state_22912[(2)]);
var state_22912__$1 = state_22912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22912__$1,inst_22910);
} else {
if((state_val_22913 === (2))){
var inst_22884 = (state_22912[(10)]);
var inst_22886 = cljs.core.count.call(null,inst_22884);
var inst_22887 = (inst_22886 > (0));
var state_22912__$1 = state_22912;
if(cljs.core.truth_(inst_22887)){
var statearr_22921_22942 = state_22912__$1;
(statearr_22921_22942[(1)] = (4));

} else {
var statearr_22922_22943 = state_22912__$1;
(statearr_22922_22943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (11))){
var inst_22884 = (state_22912[(10)]);
var inst_22901 = (state_22912[(2)]);
var tmp22920 = inst_22884;
var inst_22884__$1 = tmp22920;
var state_22912__$1 = (function (){var statearr_22923 = state_22912;
(statearr_22923[(11)] = inst_22901);

(statearr_22923[(10)] = inst_22884__$1);

return statearr_22923;
})();
var statearr_22924_22944 = state_22912__$1;
(statearr_22924_22944[(2)] = null);

(statearr_22924_22944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (9))){
var inst_22892 = (state_22912[(7)]);
var state_22912__$1 = state_22912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22912__$1,(11),out,inst_22892);
} else {
if((state_val_22913 === (5))){
var inst_22906 = cljs.core.async.close_BANG_.call(null,out);
var state_22912__$1 = state_22912;
var statearr_22925_22945 = state_22912__$1;
(statearr_22925_22945[(2)] = inst_22906);

(statearr_22925_22945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (10))){
var inst_22904 = (state_22912[(2)]);
var state_22912__$1 = state_22912;
var statearr_22926_22946 = state_22912__$1;
(statearr_22926_22946[(2)] = inst_22904);

(statearr_22926_22946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (8))){
var inst_22892 = (state_22912[(7)]);
var inst_22893 = (state_22912[(9)]);
var inst_22884 = (state_22912[(10)]);
var inst_22891 = (state_22912[(8)]);
var inst_22896 = (function (){var c = inst_22893;
var v = inst_22892;
var vec__22889 = inst_22891;
var cs = inst_22884;
return ((function (c,v,vec__22889,cs,inst_22892,inst_22893,inst_22884,inst_22891,state_val_22913,c__8217__auto___22937,out){
return (function (p1__22880_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22880_SHARP_);
});
;})(c,v,vec__22889,cs,inst_22892,inst_22893,inst_22884,inst_22891,state_val_22913,c__8217__auto___22937,out))
})();
var inst_22897 = cljs.core.filterv.call(null,inst_22896,inst_22884);
var inst_22884__$1 = inst_22897;
var state_22912__$1 = (function (){var statearr_22927 = state_22912;
(statearr_22927[(10)] = inst_22884__$1);

return statearr_22927;
})();
var statearr_22928_22947 = state_22912__$1;
(statearr_22928_22947[(2)] = null);

(statearr_22928_22947[(1)] = (2));


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
});})(c__8217__auto___22937,out))
;
return ((function (switch__8155__auto__,c__8217__auto___22937,out){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_22912){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_22912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__8159__auto__ = e22933;
var statearr_22934_22948 = state_22912;
(statearr_22934_22948[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22949 = state_22912;
state_22912 = G__22949;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_22912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_22912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___22937,out))
})();
var state__8219__auto__ = (function (){var statearr_22935 = f__8218__auto__.call(null);
(statearr_22935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___22937);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___22937,out))
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
var G__22951 = arguments.length;
switch (G__22951) {
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
var c__8217__auto___22999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___22999,out){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___22999,out){
return (function (state_22975){
var state_val_22976 = (state_22975[(1)]);
if((state_val_22976 === (7))){
var inst_22957 = (state_22975[(7)]);
var inst_22957__$1 = (state_22975[(2)]);
var inst_22958 = (inst_22957__$1 == null);
var inst_22959 = cljs.core.not.call(null,inst_22958);
var state_22975__$1 = (function (){var statearr_22977 = state_22975;
(statearr_22977[(7)] = inst_22957__$1);

return statearr_22977;
})();
if(inst_22959){
var statearr_22978_23000 = state_22975__$1;
(statearr_22978_23000[(1)] = (8));

} else {
var statearr_22979_23001 = state_22975__$1;
(statearr_22979_23001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (1))){
var inst_22952 = (0);
var state_22975__$1 = (function (){var statearr_22980 = state_22975;
(statearr_22980[(8)] = inst_22952);

return statearr_22980;
})();
var statearr_22981_23002 = state_22975__$1;
(statearr_22981_23002[(2)] = null);

(statearr_22981_23002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (4))){
var state_22975__$1 = state_22975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22975__$1,(7),ch);
} else {
if((state_val_22976 === (6))){
var inst_22970 = (state_22975[(2)]);
var state_22975__$1 = state_22975;
var statearr_22982_23003 = state_22975__$1;
(statearr_22982_23003[(2)] = inst_22970);

(statearr_22982_23003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (3))){
var inst_22972 = (state_22975[(2)]);
var inst_22973 = cljs.core.async.close_BANG_.call(null,out);
var state_22975__$1 = (function (){var statearr_22983 = state_22975;
(statearr_22983[(9)] = inst_22972);

return statearr_22983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22975__$1,inst_22973);
} else {
if((state_val_22976 === (2))){
var inst_22952 = (state_22975[(8)]);
var inst_22954 = (inst_22952 < n);
var state_22975__$1 = state_22975;
if(cljs.core.truth_(inst_22954)){
var statearr_22984_23004 = state_22975__$1;
(statearr_22984_23004[(1)] = (4));

} else {
var statearr_22985_23005 = state_22975__$1;
(statearr_22985_23005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (11))){
var inst_22952 = (state_22975[(8)]);
var inst_22962 = (state_22975[(2)]);
var inst_22963 = (inst_22952 + (1));
var inst_22952__$1 = inst_22963;
var state_22975__$1 = (function (){var statearr_22986 = state_22975;
(statearr_22986[(8)] = inst_22952__$1);

(statearr_22986[(10)] = inst_22962);

return statearr_22986;
})();
var statearr_22987_23006 = state_22975__$1;
(statearr_22987_23006[(2)] = null);

(statearr_22987_23006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (9))){
var state_22975__$1 = state_22975;
var statearr_22988_23007 = state_22975__$1;
(statearr_22988_23007[(2)] = null);

(statearr_22988_23007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (5))){
var state_22975__$1 = state_22975;
var statearr_22989_23008 = state_22975__$1;
(statearr_22989_23008[(2)] = null);

(statearr_22989_23008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (10))){
var inst_22967 = (state_22975[(2)]);
var state_22975__$1 = state_22975;
var statearr_22990_23009 = state_22975__$1;
(statearr_22990_23009[(2)] = inst_22967);

(statearr_22990_23009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22976 === (8))){
var inst_22957 = (state_22975[(7)]);
var state_22975__$1 = state_22975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22975__$1,(11),out,inst_22957);
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
});})(c__8217__auto___22999,out))
;
return ((function (switch__8155__auto__,c__8217__auto___22999,out){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_22994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22994[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_22994[(1)] = (1));

return statearr_22994;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_22975){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_22975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e22995){if((e22995 instanceof Object)){
var ex__8159__auto__ = e22995;
var statearr_22996_23010 = state_22975;
(statearr_22996_23010[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23011 = state_22975;
state_22975 = G__23011;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_22975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_22975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___22999,out))
})();
var state__8219__auto__ = (function (){var statearr_22997 = f__8218__auto__.call(null);
(statearr_22997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___22999);

return statearr_22997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___22999,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t23019 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23019 = (function (ch,f,map_LT_,meta23020){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23020 = meta23020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23019.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t23019.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t23022 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23022 = (function (fn1,_,meta23020,map_LT_,f,ch,meta23023){
this.fn1 = fn1;
this._ = _;
this.meta23020 = meta23020;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23023 = meta23023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t23022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23012_SHARP_){
return f1.call(null,(((p1__23012_SHARP_ == null))?null:self__.f.call(null,p1__23012_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23024){
var self__ = this;
var _23024__$1 = this;
return self__.meta23023;
});})(___$1))
;

cljs.core.async.t23022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23024,meta23023__$1){
var self__ = this;
var _23024__$1 = this;
return (new cljs.core.async.t23022(self__.fn1,self__._,self__.meta23020,self__.map_LT_,self__.f,self__.ch,meta23023__$1));
});})(___$1))
;

cljs.core.async.t23022.cljs$lang$type = true;

cljs.core.async.t23022.cljs$lang$ctorStr = "cljs.core.async/t23022";

cljs.core.async.t23022.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t23022");
});})(___$1))
;

cljs.core.async.__GT_t23022 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t23022(fn1__$1,___$2,meta23020__$1,map_LT___$1,f__$1,ch__$1,meta23023){
return (new cljs.core.async.t23022(fn1__$1,___$2,meta23020__$1,map_LT___$1,f__$1,ch__$1,meta23023));
});})(___$1))
;

}

return (new cljs.core.async.t23022(fn1,___$1,self__.meta23020,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t23019.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23021){
var self__ = this;
var _23021__$1 = this;
return self__.meta23020;
});

cljs.core.async.t23019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23021,meta23020__$1){
var self__ = this;
var _23021__$1 = this;
return (new cljs.core.async.t23019(self__.ch,self__.f,self__.map_LT_,meta23020__$1));
});

cljs.core.async.t23019.cljs$lang$type = true;

cljs.core.async.t23019.cljs$lang$ctorStr = "cljs.core.async/t23019";

cljs.core.async.t23019.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t23019");
});

cljs.core.async.__GT_t23019 = (function cljs$core$async$map_LT__$___GT_t23019(ch__$1,f__$1,map_LT___$1,meta23020){
return (new cljs.core.async.t23019(ch__$1,f__$1,map_LT___$1,meta23020));
});

}

return (new cljs.core.async.t23019(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t23028 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23028 = (function (ch,f,map_GT_,meta23029){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23029 = meta23029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23028.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t23028.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23028.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23030){
var self__ = this;
var _23030__$1 = this;
return self__.meta23029;
});

cljs.core.async.t23028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23030,meta23029__$1){
var self__ = this;
var _23030__$1 = this;
return (new cljs.core.async.t23028(self__.ch,self__.f,self__.map_GT_,meta23029__$1));
});

cljs.core.async.t23028.cljs$lang$type = true;

cljs.core.async.t23028.cljs$lang$ctorStr = "cljs.core.async/t23028";

cljs.core.async.t23028.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t23028");
});

cljs.core.async.__GT_t23028 = (function cljs$core$async$map_GT__$___GT_t23028(ch__$1,f__$1,map_GT___$1,meta23029){
return (new cljs.core.async.t23028(ch__$1,f__$1,map_GT___$1,meta23029));
});

}

return (new cljs.core.async.t23028(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t23034 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23034 = (function (ch,p,filter_GT_,meta23035){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23035 = meta23035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23034.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23034.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23036){
var self__ = this;
var _23036__$1 = this;
return self__.meta23035;
});

cljs.core.async.t23034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23036,meta23035__$1){
var self__ = this;
var _23036__$1 = this;
return (new cljs.core.async.t23034(self__.ch,self__.p,self__.filter_GT_,meta23035__$1));
});

cljs.core.async.t23034.cljs$lang$type = true;

cljs.core.async.t23034.cljs$lang$ctorStr = "cljs.core.async/t23034";

cljs.core.async.t23034.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t23034");
});

cljs.core.async.__GT_t23034 = (function cljs$core$async$filter_GT__$___GT_t23034(ch__$1,p__$1,filter_GT___$1,meta23035){
return (new cljs.core.async.t23034(ch__$1,p__$1,filter_GT___$1,meta23035));
});

}

return (new cljs.core.async.t23034(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23038 = arguments.length;
switch (G__23038) {
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
var c__8217__auto___23081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___23081,out){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___23081,out){
return (function (state_23059){
var state_val_23060 = (state_23059[(1)]);
if((state_val_23060 === (7))){
var inst_23055 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23061_23082 = state_23059__$1;
(statearr_23061_23082[(2)] = inst_23055);

(statearr_23061_23082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (1))){
var state_23059__$1 = state_23059;
var statearr_23062_23083 = state_23059__$1;
(statearr_23062_23083[(2)] = null);

(statearr_23062_23083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (4))){
var inst_23041 = (state_23059[(7)]);
var inst_23041__$1 = (state_23059[(2)]);
var inst_23042 = (inst_23041__$1 == null);
var state_23059__$1 = (function (){var statearr_23063 = state_23059;
(statearr_23063[(7)] = inst_23041__$1);

return statearr_23063;
})();
if(cljs.core.truth_(inst_23042)){
var statearr_23064_23084 = state_23059__$1;
(statearr_23064_23084[(1)] = (5));

} else {
var statearr_23065_23085 = state_23059__$1;
(statearr_23065_23085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (6))){
var inst_23041 = (state_23059[(7)]);
var inst_23046 = p.call(null,inst_23041);
var state_23059__$1 = state_23059;
if(cljs.core.truth_(inst_23046)){
var statearr_23066_23086 = state_23059__$1;
(statearr_23066_23086[(1)] = (8));

} else {
var statearr_23067_23087 = state_23059__$1;
(statearr_23067_23087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (3))){
var inst_23057 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23059__$1,inst_23057);
} else {
if((state_val_23060 === (2))){
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23059__$1,(4),ch);
} else {
if((state_val_23060 === (11))){
var inst_23049 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23068_23088 = state_23059__$1;
(statearr_23068_23088[(2)] = inst_23049);

(statearr_23068_23088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (9))){
var state_23059__$1 = state_23059;
var statearr_23069_23089 = state_23059__$1;
(statearr_23069_23089[(2)] = null);

(statearr_23069_23089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (5))){
var inst_23044 = cljs.core.async.close_BANG_.call(null,out);
var state_23059__$1 = state_23059;
var statearr_23070_23090 = state_23059__$1;
(statearr_23070_23090[(2)] = inst_23044);

(statearr_23070_23090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (10))){
var inst_23052 = (state_23059[(2)]);
var state_23059__$1 = (function (){var statearr_23071 = state_23059;
(statearr_23071[(8)] = inst_23052);

return statearr_23071;
})();
var statearr_23072_23091 = state_23059__$1;
(statearr_23072_23091[(2)] = null);

(statearr_23072_23091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (8))){
var inst_23041 = (state_23059[(7)]);
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23059__$1,(11),out,inst_23041);
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
});})(c__8217__auto___23081,out))
;
return ((function (switch__8155__auto__,c__8217__auto___23081,out){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_23076 = [null,null,null,null,null,null,null,null,null];
(statearr_23076[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_23076[(1)] = (1));

return statearr_23076;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_23059){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_23059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e23077){if((e23077 instanceof Object)){
var ex__8159__auto__ = e23077;
var statearr_23078_23092 = state_23059;
(statearr_23078_23092[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23093 = state_23059;
state_23059 = G__23093;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_23059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_23059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___23081,out))
})();
var state__8219__auto__ = (function (){var statearr_23079 = f__8218__auto__.call(null);
(statearr_23079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___23081);

return statearr_23079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___23081,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__23095 = arguments.length;
switch (G__23095) {
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
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__){
return (function (state_23262){
var state_val_23263 = (state_23262[(1)]);
if((state_val_23263 === (7))){
var inst_23258 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
var statearr_23264_23305 = state_23262__$1;
(statearr_23264_23305[(2)] = inst_23258);

(statearr_23264_23305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (20))){
var inst_23228 = (state_23262[(7)]);
var inst_23239 = (state_23262[(2)]);
var inst_23240 = cljs.core.next.call(null,inst_23228);
var inst_23214 = inst_23240;
var inst_23215 = null;
var inst_23216 = (0);
var inst_23217 = (0);
var state_23262__$1 = (function (){var statearr_23265 = state_23262;
(statearr_23265[(8)] = inst_23217);

(statearr_23265[(9)] = inst_23216);

(statearr_23265[(10)] = inst_23239);

(statearr_23265[(11)] = inst_23215);

(statearr_23265[(12)] = inst_23214);

return statearr_23265;
})();
var statearr_23266_23306 = state_23262__$1;
(statearr_23266_23306[(2)] = null);

(statearr_23266_23306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (1))){
var state_23262__$1 = state_23262;
var statearr_23267_23307 = state_23262__$1;
(statearr_23267_23307[(2)] = null);

(statearr_23267_23307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (4))){
var inst_23203 = (state_23262[(13)]);
var inst_23203__$1 = (state_23262[(2)]);
var inst_23204 = (inst_23203__$1 == null);
var state_23262__$1 = (function (){var statearr_23268 = state_23262;
(statearr_23268[(13)] = inst_23203__$1);

return statearr_23268;
})();
if(cljs.core.truth_(inst_23204)){
var statearr_23269_23308 = state_23262__$1;
(statearr_23269_23308[(1)] = (5));

} else {
var statearr_23270_23309 = state_23262__$1;
(statearr_23270_23309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (15))){
var state_23262__$1 = state_23262;
var statearr_23274_23310 = state_23262__$1;
(statearr_23274_23310[(2)] = null);

(statearr_23274_23310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (21))){
var state_23262__$1 = state_23262;
var statearr_23275_23311 = state_23262__$1;
(statearr_23275_23311[(2)] = null);

(statearr_23275_23311[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (13))){
var inst_23217 = (state_23262[(8)]);
var inst_23216 = (state_23262[(9)]);
var inst_23215 = (state_23262[(11)]);
var inst_23214 = (state_23262[(12)]);
var inst_23224 = (state_23262[(2)]);
var inst_23225 = (inst_23217 + (1));
var tmp23271 = inst_23216;
var tmp23272 = inst_23215;
var tmp23273 = inst_23214;
var inst_23214__$1 = tmp23273;
var inst_23215__$1 = tmp23272;
var inst_23216__$1 = tmp23271;
var inst_23217__$1 = inst_23225;
var state_23262__$1 = (function (){var statearr_23276 = state_23262;
(statearr_23276[(14)] = inst_23224);

(statearr_23276[(8)] = inst_23217__$1);

(statearr_23276[(9)] = inst_23216__$1);

(statearr_23276[(11)] = inst_23215__$1);

(statearr_23276[(12)] = inst_23214__$1);

return statearr_23276;
})();
var statearr_23277_23312 = state_23262__$1;
(statearr_23277_23312[(2)] = null);

(statearr_23277_23312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (22))){
var state_23262__$1 = state_23262;
var statearr_23278_23313 = state_23262__$1;
(statearr_23278_23313[(2)] = null);

(statearr_23278_23313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (6))){
var inst_23203 = (state_23262[(13)]);
var inst_23212 = f.call(null,inst_23203);
var inst_23213 = cljs.core.seq.call(null,inst_23212);
var inst_23214 = inst_23213;
var inst_23215 = null;
var inst_23216 = (0);
var inst_23217 = (0);
var state_23262__$1 = (function (){var statearr_23279 = state_23262;
(statearr_23279[(8)] = inst_23217);

(statearr_23279[(9)] = inst_23216);

(statearr_23279[(11)] = inst_23215);

(statearr_23279[(12)] = inst_23214);

return statearr_23279;
})();
var statearr_23280_23314 = state_23262__$1;
(statearr_23280_23314[(2)] = null);

(statearr_23280_23314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (17))){
var inst_23228 = (state_23262[(7)]);
var inst_23232 = cljs.core.chunk_first.call(null,inst_23228);
var inst_23233 = cljs.core.chunk_rest.call(null,inst_23228);
var inst_23234 = cljs.core.count.call(null,inst_23232);
var inst_23214 = inst_23233;
var inst_23215 = inst_23232;
var inst_23216 = inst_23234;
var inst_23217 = (0);
var state_23262__$1 = (function (){var statearr_23281 = state_23262;
(statearr_23281[(8)] = inst_23217);

(statearr_23281[(9)] = inst_23216);

(statearr_23281[(11)] = inst_23215);

(statearr_23281[(12)] = inst_23214);

return statearr_23281;
})();
var statearr_23282_23315 = state_23262__$1;
(statearr_23282_23315[(2)] = null);

(statearr_23282_23315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (3))){
var inst_23260 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23262__$1,inst_23260);
} else {
if((state_val_23263 === (12))){
var inst_23248 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
var statearr_23283_23316 = state_23262__$1;
(statearr_23283_23316[(2)] = inst_23248);

(statearr_23283_23316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (2))){
var state_23262__$1 = state_23262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23262__$1,(4),in$);
} else {
if((state_val_23263 === (23))){
var inst_23256 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
var statearr_23284_23317 = state_23262__$1;
(statearr_23284_23317[(2)] = inst_23256);

(statearr_23284_23317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (19))){
var inst_23243 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
var statearr_23285_23318 = state_23262__$1;
(statearr_23285_23318[(2)] = inst_23243);

(statearr_23285_23318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (11))){
var inst_23228 = (state_23262[(7)]);
var inst_23214 = (state_23262[(12)]);
var inst_23228__$1 = cljs.core.seq.call(null,inst_23214);
var state_23262__$1 = (function (){var statearr_23286 = state_23262;
(statearr_23286[(7)] = inst_23228__$1);

return statearr_23286;
})();
if(inst_23228__$1){
var statearr_23287_23319 = state_23262__$1;
(statearr_23287_23319[(1)] = (14));

} else {
var statearr_23288_23320 = state_23262__$1;
(statearr_23288_23320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (9))){
var inst_23250 = (state_23262[(2)]);
var inst_23251 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23262__$1 = (function (){var statearr_23289 = state_23262;
(statearr_23289[(15)] = inst_23250);

return statearr_23289;
})();
if(cljs.core.truth_(inst_23251)){
var statearr_23290_23321 = state_23262__$1;
(statearr_23290_23321[(1)] = (21));

} else {
var statearr_23291_23322 = state_23262__$1;
(statearr_23291_23322[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (5))){
var inst_23206 = cljs.core.async.close_BANG_.call(null,out);
var state_23262__$1 = state_23262;
var statearr_23292_23323 = state_23262__$1;
(statearr_23292_23323[(2)] = inst_23206);

(statearr_23292_23323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (14))){
var inst_23228 = (state_23262[(7)]);
var inst_23230 = cljs.core.chunked_seq_QMARK_.call(null,inst_23228);
var state_23262__$1 = state_23262;
if(inst_23230){
var statearr_23293_23324 = state_23262__$1;
(statearr_23293_23324[(1)] = (17));

} else {
var statearr_23294_23325 = state_23262__$1;
(statearr_23294_23325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (16))){
var inst_23246 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
var statearr_23295_23326 = state_23262__$1;
(statearr_23295_23326[(2)] = inst_23246);

(statearr_23295_23326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (10))){
var inst_23217 = (state_23262[(8)]);
var inst_23215 = (state_23262[(11)]);
var inst_23222 = cljs.core._nth.call(null,inst_23215,inst_23217);
var state_23262__$1 = state_23262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23262__$1,(13),out,inst_23222);
} else {
if((state_val_23263 === (18))){
var inst_23228 = (state_23262[(7)]);
var inst_23237 = cljs.core.first.call(null,inst_23228);
var state_23262__$1 = state_23262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23262__$1,(20),out,inst_23237);
} else {
if((state_val_23263 === (8))){
var inst_23217 = (state_23262[(8)]);
var inst_23216 = (state_23262[(9)]);
var inst_23219 = (inst_23217 < inst_23216);
var inst_23220 = inst_23219;
var state_23262__$1 = state_23262;
if(cljs.core.truth_(inst_23220)){
var statearr_23296_23327 = state_23262__$1;
(statearr_23296_23327[(1)] = (10));

} else {
var statearr_23297_23328 = state_23262__$1;
(statearr_23297_23328[(1)] = (11));

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
});})(c__8217__auto__))
;
return ((function (switch__8155__auto__,c__8217__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8156__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8156__auto____0 = (function (){
var statearr_23301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23301[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8156__auto__);

(statearr_23301[(1)] = (1));

return statearr_23301;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8156__auto____1 = (function (state_23262){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_23262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e23302){if((e23302 instanceof Object)){
var ex__8159__auto__ = e23302;
var statearr_23303_23329 = state_23262;
(statearr_23303_23329[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23330 = state_23262;
state_23262 = G__23330;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8156__auto__ = function(state_23262){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8156__auto____1.call(this,state_23262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8156__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8156__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__))
})();
var state__8219__auto__ = (function (){var statearr_23304 = f__8218__auto__.call(null);
(statearr_23304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_23304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__))
);

return c__8217__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__23332 = arguments.length;
switch (G__23332) {
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
var G__23335 = arguments.length;
switch (G__23335) {
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
var G__23338 = arguments.length;
switch (G__23338) {
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
var c__8217__auto___23388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___23388,out){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___23388,out){
return (function (state_23362){
var state_val_23363 = (state_23362[(1)]);
if((state_val_23363 === (7))){
var inst_23357 = (state_23362[(2)]);
var state_23362__$1 = state_23362;
var statearr_23364_23389 = state_23362__$1;
(statearr_23364_23389[(2)] = inst_23357);

(statearr_23364_23389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (1))){
var inst_23339 = null;
var state_23362__$1 = (function (){var statearr_23365 = state_23362;
(statearr_23365[(7)] = inst_23339);

return statearr_23365;
})();
var statearr_23366_23390 = state_23362__$1;
(statearr_23366_23390[(2)] = null);

(statearr_23366_23390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (4))){
var inst_23342 = (state_23362[(8)]);
var inst_23342__$1 = (state_23362[(2)]);
var inst_23343 = (inst_23342__$1 == null);
var inst_23344 = cljs.core.not.call(null,inst_23343);
var state_23362__$1 = (function (){var statearr_23367 = state_23362;
(statearr_23367[(8)] = inst_23342__$1);

return statearr_23367;
})();
if(inst_23344){
var statearr_23368_23391 = state_23362__$1;
(statearr_23368_23391[(1)] = (5));

} else {
var statearr_23369_23392 = state_23362__$1;
(statearr_23369_23392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (6))){
var state_23362__$1 = state_23362;
var statearr_23370_23393 = state_23362__$1;
(statearr_23370_23393[(2)] = null);

(statearr_23370_23393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (3))){
var inst_23359 = (state_23362[(2)]);
var inst_23360 = cljs.core.async.close_BANG_.call(null,out);
var state_23362__$1 = (function (){var statearr_23371 = state_23362;
(statearr_23371[(9)] = inst_23359);

return statearr_23371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23362__$1,inst_23360);
} else {
if((state_val_23363 === (2))){
var state_23362__$1 = state_23362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23362__$1,(4),ch);
} else {
if((state_val_23363 === (11))){
var inst_23342 = (state_23362[(8)]);
var inst_23351 = (state_23362[(2)]);
var inst_23339 = inst_23342;
var state_23362__$1 = (function (){var statearr_23372 = state_23362;
(statearr_23372[(7)] = inst_23339);

(statearr_23372[(10)] = inst_23351);

return statearr_23372;
})();
var statearr_23373_23394 = state_23362__$1;
(statearr_23373_23394[(2)] = null);

(statearr_23373_23394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (9))){
var inst_23342 = (state_23362[(8)]);
var state_23362__$1 = state_23362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23362__$1,(11),out,inst_23342);
} else {
if((state_val_23363 === (5))){
var inst_23339 = (state_23362[(7)]);
var inst_23342 = (state_23362[(8)]);
var inst_23346 = cljs.core._EQ_.call(null,inst_23342,inst_23339);
var state_23362__$1 = state_23362;
if(inst_23346){
var statearr_23375_23395 = state_23362__$1;
(statearr_23375_23395[(1)] = (8));

} else {
var statearr_23376_23396 = state_23362__$1;
(statearr_23376_23396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (10))){
var inst_23354 = (state_23362[(2)]);
var state_23362__$1 = state_23362;
var statearr_23377_23397 = state_23362__$1;
(statearr_23377_23397[(2)] = inst_23354);

(statearr_23377_23397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (8))){
var inst_23339 = (state_23362[(7)]);
var tmp23374 = inst_23339;
var inst_23339__$1 = tmp23374;
var state_23362__$1 = (function (){var statearr_23378 = state_23362;
(statearr_23378[(7)] = inst_23339__$1);

return statearr_23378;
})();
var statearr_23379_23398 = state_23362__$1;
(statearr_23379_23398[(2)] = null);

(statearr_23379_23398[(1)] = (2));


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
});})(c__8217__auto___23388,out))
;
return ((function (switch__8155__auto__,c__8217__auto___23388,out){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_23383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23383[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_23383[(1)] = (1));

return statearr_23383;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_23362){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_23362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e23384){if((e23384 instanceof Object)){
var ex__8159__auto__ = e23384;
var statearr_23385_23399 = state_23362;
(statearr_23385_23399[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23362;
state_23362 = G__23400;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_23362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_23362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___23388,out))
})();
var state__8219__auto__ = (function (){var statearr_23386 = f__8218__auto__.call(null);
(statearr_23386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___23388);

return statearr_23386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___23388,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__23402 = arguments.length;
switch (G__23402) {
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
var c__8217__auto___23471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___23471,out){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___23471,out){
return (function (state_23440){
var state_val_23441 = (state_23440[(1)]);
if((state_val_23441 === (7))){
var inst_23436 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23442_23472 = state_23440__$1;
(statearr_23442_23472[(2)] = inst_23436);

(statearr_23442_23472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (1))){
var inst_23403 = (new Array(n));
var inst_23404 = inst_23403;
var inst_23405 = (0);
var state_23440__$1 = (function (){var statearr_23443 = state_23440;
(statearr_23443[(7)] = inst_23404);

(statearr_23443[(8)] = inst_23405);

return statearr_23443;
})();
var statearr_23444_23473 = state_23440__$1;
(statearr_23444_23473[(2)] = null);

(statearr_23444_23473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (4))){
var inst_23408 = (state_23440[(9)]);
var inst_23408__$1 = (state_23440[(2)]);
var inst_23409 = (inst_23408__$1 == null);
var inst_23410 = cljs.core.not.call(null,inst_23409);
var state_23440__$1 = (function (){var statearr_23445 = state_23440;
(statearr_23445[(9)] = inst_23408__$1);

return statearr_23445;
})();
if(inst_23410){
var statearr_23446_23474 = state_23440__$1;
(statearr_23446_23474[(1)] = (5));

} else {
var statearr_23447_23475 = state_23440__$1;
(statearr_23447_23475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (15))){
var inst_23430 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23448_23476 = state_23440__$1;
(statearr_23448_23476[(2)] = inst_23430);

(statearr_23448_23476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (13))){
var state_23440__$1 = state_23440;
var statearr_23449_23477 = state_23440__$1;
(statearr_23449_23477[(2)] = null);

(statearr_23449_23477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (6))){
var inst_23405 = (state_23440[(8)]);
var inst_23426 = (inst_23405 > (0));
var state_23440__$1 = state_23440;
if(cljs.core.truth_(inst_23426)){
var statearr_23450_23478 = state_23440__$1;
(statearr_23450_23478[(1)] = (12));

} else {
var statearr_23451_23479 = state_23440__$1;
(statearr_23451_23479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (3))){
var inst_23438 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23440__$1,inst_23438);
} else {
if((state_val_23441 === (12))){
var inst_23404 = (state_23440[(7)]);
var inst_23428 = cljs.core.vec.call(null,inst_23404);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23440__$1,(15),out,inst_23428);
} else {
if((state_val_23441 === (2))){
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23440__$1,(4),ch);
} else {
if((state_val_23441 === (11))){
var inst_23420 = (state_23440[(2)]);
var inst_23421 = (new Array(n));
var inst_23404 = inst_23421;
var inst_23405 = (0);
var state_23440__$1 = (function (){var statearr_23452 = state_23440;
(statearr_23452[(10)] = inst_23420);

(statearr_23452[(7)] = inst_23404);

(statearr_23452[(8)] = inst_23405);

return statearr_23452;
})();
var statearr_23453_23480 = state_23440__$1;
(statearr_23453_23480[(2)] = null);

(statearr_23453_23480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (9))){
var inst_23404 = (state_23440[(7)]);
var inst_23418 = cljs.core.vec.call(null,inst_23404);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23440__$1,(11),out,inst_23418);
} else {
if((state_val_23441 === (5))){
var inst_23408 = (state_23440[(9)]);
var inst_23413 = (state_23440[(11)]);
var inst_23404 = (state_23440[(7)]);
var inst_23405 = (state_23440[(8)]);
var inst_23412 = (inst_23404[inst_23405] = inst_23408);
var inst_23413__$1 = (inst_23405 + (1));
var inst_23414 = (inst_23413__$1 < n);
var state_23440__$1 = (function (){var statearr_23454 = state_23440;
(statearr_23454[(11)] = inst_23413__$1);

(statearr_23454[(12)] = inst_23412);

return statearr_23454;
})();
if(cljs.core.truth_(inst_23414)){
var statearr_23455_23481 = state_23440__$1;
(statearr_23455_23481[(1)] = (8));

} else {
var statearr_23456_23482 = state_23440__$1;
(statearr_23456_23482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (14))){
var inst_23433 = (state_23440[(2)]);
var inst_23434 = cljs.core.async.close_BANG_.call(null,out);
var state_23440__$1 = (function (){var statearr_23458 = state_23440;
(statearr_23458[(13)] = inst_23433);

return statearr_23458;
})();
var statearr_23459_23483 = state_23440__$1;
(statearr_23459_23483[(2)] = inst_23434);

(statearr_23459_23483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (10))){
var inst_23424 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23460_23484 = state_23440__$1;
(statearr_23460_23484[(2)] = inst_23424);

(statearr_23460_23484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (8))){
var inst_23413 = (state_23440[(11)]);
var inst_23404 = (state_23440[(7)]);
var tmp23457 = inst_23404;
var inst_23404__$1 = tmp23457;
var inst_23405 = inst_23413;
var state_23440__$1 = (function (){var statearr_23461 = state_23440;
(statearr_23461[(7)] = inst_23404__$1);

(statearr_23461[(8)] = inst_23405);

return statearr_23461;
})();
var statearr_23462_23485 = state_23440__$1;
(statearr_23462_23485[(2)] = null);

(statearr_23462_23485[(1)] = (2));


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
});})(c__8217__auto___23471,out))
;
return ((function (switch__8155__auto__,c__8217__auto___23471,out){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_23466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23466[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_23466[(1)] = (1));

return statearr_23466;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_23440){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_23440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e23467){if((e23467 instanceof Object)){
var ex__8159__auto__ = e23467;
var statearr_23468_23486 = state_23440;
(statearr_23468_23486[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23487 = state_23440;
state_23440 = G__23487;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_23440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_23440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___23471,out))
})();
var state__8219__auto__ = (function (){var statearr_23469 = f__8218__auto__.call(null);
(statearr_23469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___23471);

return statearr_23469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___23471,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__23489 = arguments.length;
switch (G__23489) {
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
var c__8217__auto___23562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___23562,out){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___23562,out){
return (function (state_23531){
var state_val_23532 = (state_23531[(1)]);
if((state_val_23532 === (7))){
var inst_23527 = (state_23531[(2)]);
var state_23531__$1 = state_23531;
var statearr_23533_23563 = state_23531__$1;
(statearr_23533_23563[(2)] = inst_23527);

(statearr_23533_23563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (1))){
var inst_23490 = [];
var inst_23491 = inst_23490;
var inst_23492 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23531__$1 = (function (){var statearr_23534 = state_23531;
(statearr_23534[(7)] = inst_23491);

(statearr_23534[(8)] = inst_23492);

return statearr_23534;
})();
var statearr_23535_23564 = state_23531__$1;
(statearr_23535_23564[(2)] = null);

(statearr_23535_23564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (4))){
var inst_23495 = (state_23531[(9)]);
var inst_23495__$1 = (state_23531[(2)]);
var inst_23496 = (inst_23495__$1 == null);
var inst_23497 = cljs.core.not.call(null,inst_23496);
var state_23531__$1 = (function (){var statearr_23536 = state_23531;
(statearr_23536[(9)] = inst_23495__$1);

return statearr_23536;
})();
if(inst_23497){
var statearr_23537_23565 = state_23531__$1;
(statearr_23537_23565[(1)] = (5));

} else {
var statearr_23538_23566 = state_23531__$1;
(statearr_23538_23566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (15))){
var inst_23521 = (state_23531[(2)]);
var state_23531__$1 = state_23531;
var statearr_23539_23567 = state_23531__$1;
(statearr_23539_23567[(2)] = inst_23521);

(statearr_23539_23567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (13))){
var state_23531__$1 = state_23531;
var statearr_23540_23568 = state_23531__$1;
(statearr_23540_23568[(2)] = null);

(statearr_23540_23568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (6))){
var inst_23491 = (state_23531[(7)]);
var inst_23516 = inst_23491.length;
var inst_23517 = (inst_23516 > (0));
var state_23531__$1 = state_23531;
if(cljs.core.truth_(inst_23517)){
var statearr_23541_23569 = state_23531__$1;
(statearr_23541_23569[(1)] = (12));

} else {
var statearr_23542_23570 = state_23531__$1;
(statearr_23542_23570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (3))){
var inst_23529 = (state_23531[(2)]);
var state_23531__$1 = state_23531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23531__$1,inst_23529);
} else {
if((state_val_23532 === (12))){
var inst_23491 = (state_23531[(7)]);
var inst_23519 = cljs.core.vec.call(null,inst_23491);
var state_23531__$1 = state_23531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23531__$1,(15),out,inst_23519);
} else {
if((state_val_23532 === (2))){
var state_23531__$1 = state_23531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23531__$1,(4),ch);
} else {
if((state_val_23532 === (11))){
var inst_23499 = (state_23531[(10)]);
var inst_23495 = (state_23531[(9)]);
var inst_23509 = (state_23531[(2)]);
var inst_23510 = [];
var inst_23511 = inst_23510.push(inst_23495);
var inst_23491 = inst_23510;
var inst_23492 = inst_23499;
var state_23531__$1 = (function (){var statearr_23543 = state_23531;
(statearr_23543[(7)] = inst_23491);

(statearr_23543[(8)] = inst_23492);

(statearr_23543[(11)] = inst_23511);

(statearr_23543[(12)] = inst_23509);

return statearr_23543;
})();
var statearr_23544_23571 = state_23531__$1;
(statearr_23544_23571[(2)] = null);

(statearr_23544_23571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (9))){
var inst_23491 = (state_23531[(7)]);
var inst_23507 = cljs.core.vec.call(null,inst_23491);
var state_23531__$1 = state_23531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23531__$1,(11),out,inst_23507);
} else {
if((state_val_23532 === (5))){
var inst_23492 = (state_23531[(8)]);
var inst_23499 = (state_23531[(10)]);
var inst_23495 = (state_23531[(9)]);
var inst_23499__$1 = f.call(null,inst_23495);
var inst_23500 = cljs.core._EQ_.call(null,inst_23499__$1,inst_23492);
var inst_23501 = cljs.core.keyword_identical_QMARK_.call(null,inst_23492,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23502 = (inst_23500) || (inst_23501);
var state_23531__$1 = (function (){var statearr_23545 = state_23531;
(statearr_23545[(10)] = inst_23499__$1);

return statearr_23545;
})();
if(cljs.core.truth_(inst_23502)){
var statearr_23546_23572 = state_23531__$1;
(statearr_23546_23572[(1)] = (8));

} else {
var statearr_23547_23573 = state_23531__$1;
(statearr_23547_23573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (14))){
var inst_23524 = (state_23531[(2)]);
var inst_23525 = cljs.core.async.close_BANG_.call(null,out);
var state_23531__$1 = (function (){var statearr_23549 = state_23531;
(statearr_23549[(13)] = inst_23524);

return statearr_23549;
})();
var statearr_23550_23574 = state_23531__$1;
(statearr_23550_23574[(2)] = inst_23525);

(statearr_23550_23574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (10))){
var inst_23514 = (state_23531[(2)]);
var state_23531__$1 = state_23531;
var statearr_23551_23575 = state_23531__$1;
(statearr_23551_23575[(2)] = inst_23514);

(statearr_23551_23575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23532 === (8))){
var inst_23491 = (state_23531[(7)]);
var inst_23499 = (state_23531[(10)]);
var inst_23495 = (state_23531[(9)]);
var inst_23504 = inst_23491.push(inst_23495);
var tmp23548 = inst_23491;
var inst_23491__$1 = tmp23548;
var inst_23492 = inst_23499;
var state_23531__$1 = (function (){var statearr_23552 = state_23531;
(statearr_23552[(7)] = inst_23491__$1);

(statearr_23552[(8)] = inst_23492);

(statearr_23552[(14)] = inst_23504);

return statearr_23552;
})();
var statearr_23553_23576 = state_23531__$1;
(statearr_23553_23576[(2)] = null);

(statearr_23553_23576[(1)] = (2));


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
});})(c__8217__auto___23562,out))
;
return ((function (switch__8155__auto__,c__8217__auto___23562,out){
return (function() {
var cljs$core$async$state_machine__8156__auto__ = null;
var cljs$core$async$state_machine__8156__auto____0 = (function (){
var statearr_23557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23557[(0)] = cljs$core$async$state_machine__8156__auto__);

(statearr_23557[(1)] = (1));

return statearr_23557;
});
var cljs$core$async$state_machine__8156__auto____1 = (function (state_23531){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_23531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e23558){if((e23558 instanceof Object)){
var ex__8159__auto__ = e23558;
var statearr_23559_23577 = state_23531;
(statearr_23559_23577[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23578 = state_23531;
state_23531 = G__23578;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
cljs$core$async$state_machine__8156__auto__ = function(state_23531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8156__auto____1.call(this,state_23531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8156__auto____0;
cljs$core$async$state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8156__auto____1;
return cljs$core$async$state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___23562,out))
})();
var state__8219__auto__ = (function (){var statearr_23560 = f__8218__auto__.call(null);
(statearr_23560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___23562);

return statearr_23560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___23562,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
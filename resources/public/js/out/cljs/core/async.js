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
if(typeof cljs.core.async.t15395 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15395 = (function (f,fn_handler,meta15396){
this.f = f;
this.fn_handler = fn_handler;
this.meta15396 = meta15396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15395.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15397){
var self__ = this;
var _15397__$1 = this;
return self__.meta15396;
});

cljs.core.async.t15395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15397,meta15396__$1){
var self__ = this;
var _15397__$1 = this;
return (new cljs.core.async.t15395(self__.f,self__.fn_handler,meta15396__$1));
});

cljs.core.async.t15395.cljs$lang$type = true;

cljs.core.async.t15395.cljs$lang$ctorStr = "cljs.core.async/t15395";

cljs.core.async.t15395.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15395");
});

cljs.core.async.__GT_t15395 = (function cljs$core$async$fn_handler_$___GT_t15395(f__$1,fn_handler__$1,meta15396){
return (new cljs.core.async.t15395(f__$1,fn_handler__$1,meta15396));
});

}

return (new cljs.core.async.t15395(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15399 = buff;
if(G__15399){
var bit__4773__auto__ = null;
if(cljs.core.truth_((function (){var or__4099__auto__ = bit__4773__auto__;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return G__15399.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15399.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15399);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15399);
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
var G__15401 = arguments.length;
switch (G__15401) {
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
var G__15404 = arguments.length;
switch (G__15404) {
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
var val_15406 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15406);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15406,ret){
return (function (){
return fn1.call(null,val_15406);
});})(val_15406,ret))
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
var G__15408 = arguments.length;
switch (G__15408) {
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
var n__4984__auto___15410 = n;
var x_15411 = (0);
while(true){
if((x_15411 < n__4984__auto___15410)){
(a[x_15411] = (0));

var G__15412 = (x_15411 + (1));
x_15411 = G__15412;
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

var G__15413 = (i + (1));
i = G__15413;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15417 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15417 = (function (flag,alt_flag,meta15418){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15418 = meta15418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15417.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15419){
var self__ = this;
var _15419__$1 = this;
return self__.meta15418;
});})(flag))
;

cljs.core.async.t15417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15419,meta15418__$1){
var self__ = this;
var _15419__$1 = this;
return (new cljs.core.async.t15417(self__.flag,self__.alt_flag,meta15418__$1));
});})(flag))
;

cljs.core.async.t15417.cljs$lang$type = true;

cljs.core.async.t15417.cljs$lang$ctorStr = "cljs.core.async/t15417";

cljs.core.async.t15417.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15417");
});})(flag))
;

cljs.core.async.__GT_t15417 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t15417(flag__$1,alt_flag__$1,meta15418){
return (new cljs.core.async.t15417(flag__$1,alt_flag__$1,meta15418));
});})(flag))
;

}

return (new cljs.core.async.t15417(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t15423 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15423 = (function (cb,flag,alt_handler,meta15424){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15424 = meta15424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15423.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15425){
var self__ = this;
var _15425__$1 = this;
return self__.meta15424;
});

cljs.core.async.t15423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15425,meta15424__$1){
var self__ = this;
var _15425__$1 = this;
return (new cljs.core.async.t15423(self__.cb,self__.flag,self__.alt_handler,meta15424__$1));
});

cljs.core.async.t15423.cljs$lang$type = true;

cljs.core.async.t15423.cljs$lang$ctorStr = "cljs.core.async/t15423";

cljs.core.async.t15423.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15423");
});

cljs.core.async.__GT_t15423 = (function cljs$core$async$alt_handler_$___GT_t15423(cb__$1,flag__$1,alt_handler__$1,meta15424){
return (new cljs.core.async.t15423(cb__$1,flag__$1,alt_handler__$1,meta15424));
});

}

return (new cljs.core.async.t15423(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15426_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15426_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15427_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15427_SHARP_,port], null));
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
var G__15428 = (i + (1));
i = G__15428;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15431){
var map__15432 = p__15431;
var map__15432__$1 = ((cljs.core.seq_QMARK_.call(null,map__15432))?cljs.core.apply.call(null,cljs.core.hash_map,map__15432):map__15432);
var opts = map__15432__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15429){
var G__15430 = cljs.core.first.call(null,seq15429);
var seq15429__$1 = cljs.core.next.call(null,seq15429);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15430,seq15429__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__15434 = arguments.length;
switch (G__15434) {
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
var c__8199__auto___15483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___15483){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___15483){
return (function (state_15458){
var state_val_15459 = (state_15458[(1)]);
if((state_val_15459 === (7))){
var inst_15454 = (state_15458[(2)]);
var state_15458__$1 = state_15458;
var statearr_15460_15484 = state_15458__$1;
(statearr_15460_15484[(2)] = inst_15454);

(statearr_15460_15484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (1))){
var state_15458__$1 = state_15458;
var statearr_15461_15485 = state_15458__$1;
(statearr_15461_15485[(2)] = null);

(statearr_15461_15485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (4))){
var inst_15437 = (state_15458[(7)]);
var inst_15437__$1 = (state_15458[(2)]);
var inst_15438 = (inst_15437__$1 == null);
var state_15458__$1 = (function (){var statearr_15462 = state_15458;
(statearr_15462[(7)] = inst_15437__$1);

return statearr_15462;
})();
if(cljs.core.truth_(inst_15438)){
var statearr_15463_15486 = state_15458__$1;
(statearr_15463_15486[(1)] = (5));

} else {
var statearr_15464_15487 = state_15458__$1;
(statearr_15464_15487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (13))){
var state_15458__$1 = state_15458;
var statearr_15465_15488 = state_15458__$1;
(statearr_15465_15488[(2)] = null);

(statearr_15465_15488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (6))){
var inst_15437 = (state_15458[(7)]);
var state_15458__$1 = state_15458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15458__$1,(11),to,inst_15437);
} else {
if((state_val_15459 === (3))){
var inst_15456 = (state_15458[(2)]);
var state_15458__$1 = state_15458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15458__$1,inst_15456);
} else {
if((state_val_15459 === (12))){
var state_15458__$1 = state_15458;
var statearr_15466_15489 = state_15458__$1;
(statearr_15466_15489[(2)] = null);

(statearr_15466_15489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (2))){
var state_15458__$1 = state_15458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15458__$1,(4),from);
} else {
if((state_val_15459 === (11))){
var inst_15447 = (state_15458[(2)]);
var state_15458__$1 = state_15458;
if(cljs.core.truth_(inst_15447)){
var statearr_15467_15490 = state_15458__$1;
(statearr_15467_15490[(1)] = (12));

} else {
var statearr_15468_15491 = state_15458__$1;
(statearr_15468_15491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (9))){
var state_15458__$1 = state_15458;
var statearr_15469_15492 = state_15458__$1;
(statearr_15469_15492[(2)] = null);

(statearr_15469_15492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (5))){
var state_15458__$1 = state_15458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15470_15493 = state_15458__$1;
(statearr_15470_15493[(1)] = (8));

} else {
var statearr_15471_15494 = state_15458__$1;
(statearr_15471_15494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (14))){
var inst_15452 = (state_15458[(2)]);
var state_15458__$1 = state_15458;
var statearr_15472_15495 = state_15458__$1;
(statearr_15472_15495[(2)] = inst_15452);

(statearr_15472_15495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (10))){
var inst_15444 = (state_15458[(2)]);
var state_15458__$1 = state_15458;
var statearr_15473_15496 = state_15458__$1;
(statearr_15473_15496[(2)] = inst_15444);

(statearr_15473_15496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15459 === (8))){
var inst_15441 = cljs.core.async.close_BANG_.call(null,to);
var state_15458__$1 = state_15458;
var statearr_15474_15497 = state_15458__$1;
(statearr_15474_15497[(2)] = inst_15441);

(statearr_15474_15497[(1)] = (10));


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
});})(c__8199__auto___15483))
;
return ((function (switch__8137__auto__,c__8199__auto___15483){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_15478 = [null,null,null,null,null,null,null,null];
(statearr_15478[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_15478[(1)] = (1));

return statearr_15478;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_15458){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15479){if((e15479 instanceof Object)){
var ex__8141__auto__ = e15479;
var statearr_15480_15498 = state_15458;
(statearr_15480_15498[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15499 = state_15458;
state_15458 = G__15499;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_15458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_15458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___15483))
})();
var state__8201__auto__ = (function (){var statearr_15481 = f__8200__auto__.call(null);
(statearr_15481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___15483);

return statearr_15481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___15483))
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
return (function (p__15683){
var vec__15684 = p__15683;
var v = cljs.core.nth.call(null,vec__15684,(0),null);
var p = cljs.core.nth.call(null,vec__15684,(1),null);
var job = vec__15684;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8199__auto___15866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___15866,res,vec__15684,v,p,job,jobs,results){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___15866,res,vec__15684,v,p,job,jobs,results){
return (function (state_15689){
var state_val_15690 = (state_15689[(1)]);
if((state_val_15690 === (2))){
var inst_15686 = (state_15689[(2)]);
var inst_15687 = cljs.core.async.close_BANG_.call(null,res);
var state_15689__$1 = (function (){var statearr_15691 = state_15689;
(statearr_15691[(7)] = inst_15686);

return statearr_15691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15689__$1,inst_15687);
} else {
if((state_val_15690 === (1))){
var state_15689__$1 = state_15689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15689__$1,(2),res,v);
} else {
return null;
}
}
});})(c__8199__auto___15866,res,vec__15684,v,p,job,jobs,results))
;
return ((function (switch__8137__auto__,c__8199__auto___15866,res,vec__15684,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0 = (function (){
var statearr_15695 = [null,null,null,null,null,null,null,null];
(statearr_15695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__);

(statearr_15695[(1)] = (1));

return statearr_15695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1 = (function (state_15689){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15696){if((e15696 instanceof Object)){
var ex__8141__auto__ = e15696;
var statearr_15697_15867 = state_15689;
(statearr_15697_15867[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15868 = state_15689;
state_15689 = G__15868;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = function(state_15689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1.call(this,state_15689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___15866,res,vec__15684,v,p,job,jobs,results))
})();
var state__8201__auto__ = (function (){var statearr_15698 = f__8200__auto__.call(null);
(statearr_15698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___15866);

return statearr_15698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___15866,res,vec__15684,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15699){
var vec__15700 = p__15699;
var v = cljs.core.nth.call(null,vec__15700,(0),null);
var p = cljs.core.nth.call(null,vec__15700,(1),null);
var job = vec__15700;
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
var n__4984__auto___15869 = n;
var __15870 = (0);
while(true){
if((__15870 < n__4984__auto___15869)){
var G__15701_15871 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15701_15871) {
case "async":
var c__8199__auto___15873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15870,c__8199__auto___15873,G__15701_15871,n__4984__auto___15869,jobs,results,process,async){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (__15870,c__8199__auto___15873,G__15701_15871,n__4984__auto___15869,jobs,results,process,async){
return (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15716_15874 = state_15714__$1;
(statearr_15716_15874[(2)] = inst_15710);

(statearr_15716_15874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (6))){
var state_15714__$1 = state_15714;
var statearr_15717_15875 = state_15714__$1;
(statearr_15717_15875[(2)] = null);

(statearr_15717_15875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (5))){
var state_15714__$1 = state_15714;
var statearr_15718_15876 = state_15714__$1;
(statearr_15718_15876[(2)] = null);

(statearr_15718_15876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (4))){
var inst_15704 = (state_15714[(2)]);
var inst_15705 = async.call(null,inst_15704);
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15705)){
var statearr_15719_15877 = state_15714__$1;
(statearr_15719_15877[(1)] = (5));

} else {
var statearr_15720_15878 = state_15714__$1;
(statearr_15720_15878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (3))){
var inst_15712 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15714__$1,inst_15712);
} else {
if((state_val_15715 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15714__$1,(4),jobs);
} else {
if((state_val_15715 === (1))){
var state_15714__$1 = state_15714;
var statearr_15721_15879 = state_15714__$1;
(statearr_15721_15879[(2)] = null);

(statearr_15721_15879[(1)] = (2));


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
});})(__15870,c__8199__auto___15873,G__15701_15871,n__4984__auto___15869,jobs,results,process,async))
;
return ((function (__15870,switch__8137__auto__,c__8199__auto___15873,G__15701_15871,n__4984__auto___15869,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0 = (function (){
var statearr_15725 = [null,null,null,null,null,null,null];
(statearr_15725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__);

(statearr_15725[(1)] = (1));

return statearr_15725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1 = (function (state_15714){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15726){if((e15726 instanceof Object)){
var ex__8141__auto__ = e15726;
var statearr_15727_15880 = state_15714;
(statearr_15727_15880[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15881 = state_15714;
state_15714 = G__15881;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__;
})()
;})(__15870,switch__8137__auto__,c__8199__auto___15873,G__15701_15871,n__4984__auto___15869,jobs,results,process,async))
})();
var state__8201__auto__ = (function (){var statearr_15728 = f__8200__auto__.call(null);
(statearr_15728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___15873);

return statearr_15728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(__15870,c__8199__auto___15873,G__15701_15871,n__4984__auto___15869,jobs,results,process,async))
);


break;
case "compute":
var c__8199__auto___15882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15870,c__8199__auto___15882,G__15701_15871,n__4984__auto___15869,jobs,results,process,async){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (__15870,c__8199__auto___15882,G__15701_15871,n__4984__auto___15869,jobs,results,process,async){
return (function (state_15741){
var state_val_15742 = (state_15741[(1)]);
if((state_val_15742 === (7))){
var inst_15737 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
var statearr_15743_15883 = state_15741__$1;
(statearr_15743_15883[(2)] = inst_15737);

(statearr_15743_15883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (6))){
var state_15741__$1 = state_15741;
var statearr_15744_15884 = state_15741__$1;
(statearr_15744_15884[(2)] = null);

(statearr_15744_15884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (5))){
var state_15741__$1 = state_15741;
var statearr_15745_15885 = state_15741__$1;
(statearr_15745_15885[(2)] = null);

(statearr_15745_15885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (4))){
var inst_15731 = (state_15741[(2)]);
var inst_15732 = process.call(null,inst_15731);
var state_15741__$1 = state_15741;
if(cljs.core.truth_(inst_15732)){
var statearr_15746_15886 = state_15741__$1;
(statearr_15746_15886[(1)] = (5));

} else {
var statearr_15747_15887 = state_15741__$1;
(statearr_15747_15887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (3))){
var inst_15739 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15741__$1,inst_15739);
} else {
if((state_val_15742 === (2))){
var state_15741__$1 = state_15741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15741__$1,(4),jobs);
} else {
if((state_val_15742 === (1))){
var state_15741__$1 = state_15741;
var statearr_15748_15888 = state_15741__$1;
(statearr_15748_15888[(2)] = null);

(statearr_15748_15888[(1)] = (2));


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
});})(__15870,c__8199__auto___15882,G__15701_15871,n__4984__auto___15869,jobs,results,process,async))
;
return ((function (__15870,switch__8137__auto__,c__8199__auto___15882,G__15701_15871,n__4984__auto___15869,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0 = (function (){
var statearr_15752 = [null,null,null,null,null,null,null];
(statearr_15752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__);

(statearr_15752[(1)] = (1));

return statearr_15752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1 = (function (state_15741){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15753){if((e15753 instanceof Object)){
var ex__8141__auto__ = e15753;
var statearr_15754_15889 = state_15741;
(statearr_15754_15889[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15890 = state_15741;
state_15741 = G__15890;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = function(state_15741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1.call(this,state_15741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__;
})()
;})(__15870,switch__8137__auto__,c__8199__auto___15882,G__15701_15871,n__4984__auto___15869,jobs,results,process,async))
})();
var state__8201__auto__ = (function (){var statearr_15755 = f__8200__auto__.call(null);
(statearr_15755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___15882);

return statearr_15755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(__15870,c__8199__auto___15882,G__15701_15871,n__4984__auto___15869,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15891 = (__15870 + (1));
__15870 = G__15891;
continue;
} else {
}
break;
}

var c__8199__auto___15892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___15892,jobs,results,process,async){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___15892,jobs,results,process,async){
return (function (state_15777){
var state_val_15778 = (state_15777[(1)]);
if((state_val_15778 === (9))){
var inst_15770 = (state_15777[(2)]);
var state_15777__$1 = (function (){var statearr_15779 = state_15777;
(statearr_15779[(7)] = inst_15770);

return statearr_15779;
})();
var statearr_15780_15893 = state_15777__$1;
(statearr_15780_15893[(2)] = null);

(statearr_15780_15893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (8))){
var inst_15763 = (state_15777[(8)]);
var inst_15768 = (state_15777[(2)]);
var state_15777__$1 = (function (){var statearr_15781 = state_15777;
(statearr_15781[(9)] = inst_15768);

return statearr_15781;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15777__$1,(9),results,inst_15763);
} else {
if((state_val_15778 === (7))){
var inst_15773 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15782_15894 = state_15777__$1;
(statearr_15782_15894[(2)] = inst_15773);

(statearr_15782_15894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (6))){
var inst_15758 = (state_15777[(10)]);
var inst_15763 = (state_15777[(8)]);
var inst_15763__$1 = cljs.core.async.chan.call(null,(1));
var inst_15764 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15765 = [inst_15758,inst_15763__$1];
var inst_15766 = (new cljs.core.PersistentVector(null,2,(5),inst_15764,inst_15765,null));
var state_15777__$1 = (function (){var statearr_15783 = state_15777;
(statearr_15783[(8)] = inst_15763__$1);

return statearr_15783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15777__$1,(8),jobs,inst_15766);
} else {
if((state_val_15778 === (5))){
var inst_15761 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15777__$1 = state_15777;
var statearr_15784_15895 = state_15777__$1;
(statearr_15784_15895[(2)] = inst_15761);

(statearr_15784_15895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (4))){
var inst_15758 = (state_15777[(10)]);
var inst_15758__$1 = (state_15777[(2)]);
var inst_15759 = (inst_15758__$1 == null);
var state_15777__$1 = (function (){var statearr_15785 = state_15777;
(statearr_15785[(10)] = inst_15758__$1);

return statearr_15785;
})();
if(cljs.core.truth_(inst_15759)){
var statearr_15786_15896 = state_15777__$1;
(statearr_15786_15896[(1)] = (5));

} else {
var statearr_15787_15897 = state_15777__$1;
(statearr_15787_15897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (3))){
var inst_15775 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15777__$1,inst_15775);
} else {
if((state_val_15778 === (2))){
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(4),from);
} else {
if((state_val_15778 === (1))){
var state_15777__$1 = state_15777;
var statearr_15788_15898 = state_15777__$1;
(statearr_15788_15898[(2)] = null);

(statearr_15788_15898[(1)] = (2));


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
});})(c__8199__auto___15892,jobs,results,process,async))
;
return ((function (switch__8137__auto__,c__8199__auto___15892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0 = (function (){
var statearr_15792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15792[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__);

(statearr_15792[(1)] = (1));

return statearr_15792;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1 = (function (state_15777){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15793){if((e15793 instanceof Object)){
var ex__8141__auto__ = e15793;
var statearr_15794_15899 = state_15777;
(statearr_15794_15899[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15900 = state_15777;
state_15777 = G__15900;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = function(state_15777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1.call(this,state_15777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___15892,jobs,results,process,async))
})();
var state__8201__auto__ = (function (){var statearr_15795 = f__8200__auto__.call(null);
(statearr_15795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___15892);

return statearr_15795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___15892,jobs,results,process,async))
);


var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__,jobs,results,process,async){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__,jobs,results,process,async){
return (function (state_15833){
var state_val_15834 = (state_15833[(1)]);
if((state_val_15834 === (7))){
var inst_15829 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_15835_15901 = state_15833__$1;
(statearr_15835_15901[(2)] = inst_15829);

(statearr_15835_15901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (20))){
var state_15833__$1 = state_15833;
var statearr_15836_15902 = state_15833__$1;
(statearr_15836_15902[(2)] = null);

(statearr_15836_15902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (1))){
var state_15833__$1 = state_15833;
var statearr_15837_15903 = state_15833__$1;
(statearr_15837_15903[(2)] = null);

(statearr_15837_15903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (4))){
var inst_15798 = (state_15833[(7)]);
var inst_15798__$1 = (state_15833[(2)]);
var inst_15799 = (inst_15798__$1 == null);
var state_15833__$1 = (function (){var statearr_15838 = state_15833;
(statearr_15838[(7)] = inst_15798__$1);

return statearr_15838;
})();
if(cljs.core.truth_(inst_15799)){
var statearr_15839_15904 = state_15833__$1;
(statearr_15839_15904[(1)] = (5));

} else {
var statearr_15840_15905 = state_15833__$1;
(statearr_15840_15905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (15))){
var inst_15811 = (state_15833[(8)]);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15833__$1,(18),to,inst_15811);
} else {
if((state_val_15834 === (21))){
var inst_15824 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_15841_15906 = state_15833__$1;
(statearr_15841_15906[(2)] = inst_15824);

(statearr_15841_15906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (13))){
var inst_15826 = (state_15833[(2)]);
var state_15833__$1 = (function (){var statearr_15842 = state_15833;
(statearr_15842[(9)] = inst_15826);

return statearr_15842;
})();
var statearr_15843_15907 = state_15833__$1;
(statearr_15843_15907[(2)] = null);

(statearr_15843_15907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (6))){
var inst_15798 = (state_15833[(7)]);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15833__$1,(11),inst_15798);
} else {
if((state_val_15834 === (17))){
var inst_15819 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
if(cljs.core.truth_(inst_15819)){
var statearr_15844_15908 = state_15833__$1;
(statearr_15844_15908[(1)] = (19));

} else {
var statearr_15845_15909 = state_15833__$1;
(statearr_15845_15909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (3))){
var inst_15831 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15833__$1,inst_15831);
} else {
if((state_val_15834 === (12))){
var inst_15808 = (state_15833[(10)]);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15833__$1,(14),inst_15808);
} else {
if((state_val_15834 === (2))){
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15833__$1,(4),results);
} else {
if((state_val_15834 === (19))){
var state_15833__$1 = state_15833;
var statearr_15846_15910 = state_15833__$1;
(statearr_15846_15910[(2)] = null);

(statearr_15846_15910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (11))){
var inst_15808 = (state_15833[(2)]);
var state_15833__$1 = (function (){var statearr_15847 = state_15833;
(statearr_15847[(10)] = inst_15808);

return statearr_15847;
})();
var statearr_15848_15911 = state_15833__$1;
(statearr_15848_15911[(2)] = null);

(statearr_15848_15911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (9))){
var state_15833__$1 = state_15833;
var statearr_15849_15912 = state_15833__$1;
(statearr_15849_15912[(2)] = null);

(statearr_15849_15912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (5))){
var state_15833__$1 = state_15833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15850_15913 = state_15833__$1;
(statearr_15850_15913[(1)] = (8));

} else {
var statearr_15851_15914 = state_15833__$1;
(statearr_15851_15914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (14))){
var inst_15813 = (state_15833[(11)]);
var inst_15811 = (state_15833[(8)]);
var inst_15811__$1 = (state_15833[(2)]);
var inst_15812 = (inst_15811__$1 == null);
var inst_15813__$1 = cljs.core.not.call(null,inst_15812);
var state_15833__$1 = (function (){var statearr_15852 = state_15833;
(statearr_15852[(11)] = inst_15813__$1);

(statearr_15852[(8)] = inst_15811__$1);

return statearr_15852;
})();
if(inst_15813__$1){
var statearr_15853_15915 = state_15833__$1;
(statearr_15853_15915[(1)] = (15));

} else {
var statearr_15854_15916 = state_15833__$1;
(statearr_15854_15916[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (16))){
var inst_15813 = (state_15833[(11)]);
var state_15833__$1 = state_15833;
var statearr_15855_15917 = state_15833__$1;
(statearr_15855_15917[(2)] = inst_15813);

(statearr_15855_15917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (10))){
var inst_15805 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_15856_15918 = state_15833__$1;
(statearr_15856_15918[(2)] = inst_15805);

(statearr_15856_15918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (18))){
var inst_15816 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_15857_15919 = state_15833__$1;
(statearr_15857_15919[(2)] = inst_15816);

(statearr_15857_15919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (8))){
var inst_15802 = cljs.core.async.close_BANG_.call(null,to);
var state_15833__$1 = state_15833;
var statearr_15858_15920 = state_15833__$1;
(statearr_15858_15920[(2)] = inst_15802);

(statearr_15858_15920[(1)] = (10));


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
});})(c__8199__auto__,jobs,results,process,async))
;
return ((function (switch__8137__auto__,c__8199__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0 = (function (){
var statearr_15862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__);

(statearr_15862[(1)] = (1));

return statearr_15862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1 = (function (state_15833){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15863){if((e15863 instanceof Object)){
var ex__8141__auto__ = e15863;
var statearr_15864_15921 = state_15833;
(statearr_15864_15921[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15922 = state_15833;
state_15833 = G__15922;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__ = function(state_15833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1.call(this,state_15833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__,jobs,results,process,async))
})();
var state__8201__auto__ = (function (){var statearr_15865 = f__8200__auto__.call(null);
(statearr_15865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_15865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__,jobs,results,process,async))
);

return c__8199__auto__;
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
var G__15924 = arguments.length;
switch (G__15924) {
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
var G__15927 = arguments.length;
switch (G__15927) {
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
var G__15930 = arguments.length;
switch (G__15930) {
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
var c__8199__auto___15982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___15982,tc,fc){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___15982,tc,fc){
return (function (state_15956){
var state_val_15957 = (state_15956[(1)]);
if((state_val_15957 === (7))){
var inst_15952 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_15958_15983 = state_15956__$1;
(statearr_15958_15983[(2)] = inst_15952);

(statearr_15958_15983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (1))){
var state_15956__$1 = state_15956;
var statearr_15959_15984 = state_15956__$1;
(statearr_15959_15984[(2)] = null);

(statearr_15959_15984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (4))){
var inst_15933 = (state_15956[(7)]);
var inst_15933__$1 = (state_15956[(2)]);
var inst_15934 = (inst_15933__$1 == null);
var state_15956__$1 = (function (){var statearr_15960 = state_15956;
(statearr_15960[(7)] = inst_15933__$1);

return statearr_15960;
})();
if(cljs.core.truth_(inst_15934)){
var statearr_15961_15985 = state_15956__$1;
(statearr_15961_15985[(1)] = (5));

} else {
var statearr_15962_15986 = state_15956__$1;
(statearr_15962_15986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (13))){
var state_15956__$1 = state_15956;
var statearr_15963_15987 = state_15956__$1;
(statearr_15963_15987[(2)] = null);

(statearr_15963_15987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (6))){
var inst_15933 = (state_15956[(7)]);
var inst_15939 = p.call(null,inst_15933);
var state_15956__$1 = state_15956;
if(cljs.core.truth_(inst_15939)){
var statearr_15964_15988 = state_15956__$1;
(statearr_15964_15988[(1)] = (9));

} else {
var statearr_15965_15989 = state_15956__$1;
(statearr_15965_15989[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (3))){
var inst_15954 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15956__$1,inst_15954);
} else {
if((state_val_15957 === (12))){
var state_15956__$1 = state_15956;
var statearr_15966_15990 = state_15956__$1;
(statearr_15966_15990[(2)] = null);

(statearr_15966_15990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (2))){
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15956__$1,(4),ch);
} else {
if((state_val_15957 === (11))){
var inst_15933 = (state_15956[(7)]);
var inst_15943 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15956__$1,(8),inst_15943,inst_15933);
} else {
if((state_val_15957 === (9))){
var state_15956__$1 = state_15956;
var statearr_15967_15991 = state_15956__$1;
(statearr_15967_15991[(2)] = tc);

(statearr_15967_15991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (5))){
var inst_15936 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15937 = cljs.core.async.close_BANG_.call(null,fc);
var state_15956__$1 = (function (){var statearr_15968 = state_15956;
(statearr_15968[(8)] = inst_15936);

return statearr_15968;
})();
var statearr_15969_15992 = state_15956__$1;
(statearr_15969_15992[(2)] = inst_15937);

(statearr_15969_15992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (14))){
var inst_15950 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_15970_15993 = state_15956__$1;
(statearr_15970_15993[(2)] = inst_15950);

(statearr_15970_15993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (10))){
var state_15956__$1 = state_15956;
var statearr_15971_15994 = state_15956__$1;
(statearr_15971_15994[(2)] = fc);

(statearr_15971_15994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (8))){
var inst_15945 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
if(cljs.core.truth_(inst_15945)){
var statearr_15972_15995 = state_15956__$1;
(statearr_15972_15995[(1)] = (12));

} else {
var statearr_15973_15996 = state_15956__$1;
(statearr_15973_15996[(1)] = (13));

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
});})(c__8199__auto___15982,tc,fc))
;
return ((function (switch__8137__auto__,c__8199__auto___15982,tc,fc){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_15977 = [null,null,null,null,null,null,null,null,null];
(statearr_15977[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_15977[(1)] = (1));

return statearr_15977;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_15956){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15978){if((e15978 instanceof Object)){
var ex__8141__auto__ = e15978;
var statearr_15979_15997 = state_15956;
(statearr_15979_15997[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15998 = state_15956;
state_15956 = G__15998;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_15956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_15956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___15982,tc,fc))
})();
var state__8201__auto__ = (function (){var statearr_15980 = f__8200__auto__.call(null);
(statearr_15980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___15982);

return statearr_15980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___15982,tc,fc))
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
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__){
return (function (state_16045){
var state_val_16046 = (state_16045[(1)]);
if((state_val_16046 === (7))){
var inst_16041 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16047_16063 = state_16045__$1;
(statearr_16047_16063[(2)] = inst_16041);

(statearr_16047_16063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (6))){
var inst_16034 = (state_16045[(7)]);
var inst_16031 = (state_16045[(8)]);
var inst_16038 = f.call(null,inst_16031,inst_16034);
var inst_16031__$1 = inst_16038;
var state_16045__$1 = (function (){var statearr_16048 = state_16045;
(statearr_16048[(8)] = inst_16031__$1);

return statearr_16048;
})();
var statearr_16049_16064 = state_16045__$1;
(statearr_16049_16064[(2)] = null);

(statearr_16049_16064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (5))){
var inst_16031 = (state_16045[(8)]);
var state_16045__$1 = state_16045;
var statearr_16050_16065 = state_16045__$1;
(statearr_16050_16065[(2)] = inst_16031);

(statearr_16050_16065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (4))){
var inst_16034 = (state_16045[(7)]);
var inst_16034__$1 = (state_16045[(2)]);
var inst_16035 = (inst_16034__$1 == null);
var state_16045__$1 = (function (){var statearr_16051 = state_16045;
(statearr_16051[(7)] = inst_16034__$1);

return statearr_16051;
})();
if(cljs.core.truth_(inst_16035)){
var statearr_16052_16066 = state_16045__$1;
(statearr_16052_16066[(1)] = (5));

} else {
var statearr_16053_16067 = state_16045__$1;
(statearr_16053_16067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (3))){
var inst_16043 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16045__$1,inst_16043);
} else {
if((state_val_16046 === (2))){
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16045__$1,(4),ch);
} else {
if((state_val_16046 === (1))){
var inst_16031 = init;
var state_16045__$1 = (function (){var statearr_16054 = state_16045;
(statearr_16054[(8)] = inst_16031);

return statearr_16054;
})();
var statearr_16055_16068 = state_16045__$1;
(statearr_16055_16068[(2)] = null);

(statearr_16055_16068[(1)] = (2));


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
});})(c__8199__auto__))
;
return ((function (switch__8137__auto__,c__8199__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8138__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8138__auto____0 = (function (){
var statearr_16059 = [null,null,null,null,null,null,null,null,null];
(statearr_16059[(0)] = cljs$core$async$reduce_$_state_machine__8138__auto__);

(statearr_16059[(1)] = (1));

return statearr_16059;
});
var cljs$core$async$reduce_$_state_machine__8138__auto____1 = (function (state_16045){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_16045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e16060){if((e16060 instanceof Object)){
var ex__8141__auto__ = e16060;
var statearr_16061_16069 = state_16045;
(statearr_16061_16069[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16070 = state_16045;
state_16045 = G__16070;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8138__auto__ = function(state_16045){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8138__auto____1.call(this,state_16045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8138__auto____0;
cljs$core$async$reduce_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8138__auto____1;
return cljs$core$async$reduce_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__))
})();
var state__8201__auto__ = (function (){var statearr_16062 = f__8200__auto__.call(null);
(statearr_16062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_16062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__))
);

return c__8199__auto__;
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
var G__16072 = arguments.length;
switch (G__16072) {
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
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__){
return (function (state_16097){
var state_val_16098 = (state_16097[(1)]);
if((state_val_16098 === (7))){
var inst_16079 = (state_16097[(2)]);
var state_16097__$1 = state_16097;
var statearr_16099_16123 = state_16097__$1;
(statearr_16099_16123[(2)] = inst_16079);

(statearr_16099_16123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (1))){
var inst_16073 = cljs.core.seq.call(null,coll);
var inst_16074 = inst_16073;
var state_16097__$1 = (function (){var statearr_16100 = state_16097;
(statearr_16100[(7)] = inst_16074);

return statearr_16100;
})();
var statearr_16101_16124 = state_16097__$1;
(statearr_16101_16124[(2)] = null);

(statearr_16101_16124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (4))){
var inst_16074 = (state_16097[(7)]);
var inst_16077 = cljs.core.first.call(null,inst_16074);
var state_16097__$1 = state_16097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16097__$1,(7),ch,inst_16077);
} else {
if((state_val_16098 === (13))){
var inst_16091 = (state_16097[(2)]);
var state_16097__$1 = state_16097;
var statearr_16102_16125 = state_16097__$1;
(statearr_16102_16125[(2)] = inst_16091);

(statearr_16102_16125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (6))){
var inst_16082 = (state_16097[(2)]);
var state_16097__$1 = state_16097;
if(cljs.core.truth_(inst_16082)){
var statearr_16103_16126 = state_16097__$1;
(statearr_16103_16126[(1)] = (8));

} else {
var statearr_16104_16127 = state_16097__$1;
(statearr_16104_16127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (3))){
var inst_16095 = (state_16097[(2)]);
var state_16097__$1 = state_16097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16097__$1,inst_16095);
} else {
if((state_val_16098 === (12))){
var state_16097__$1 = state_16097;
var statearr_16105_16128 = state_16097__$1;
(statearr_16105_16128[(2)] = null);

(statearr_16105_16128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (2))){
var inst_16074 = (state_16097[(7)]);
var state_16097__$1 = state_16097;
if(cljs.core.truth_(inst_16074)){
var statearr_16106_16129 = state_16097__$1;
(statearr_16106_16129[(1)] = (4));

} else {
var statearr_16107_16130 = state_16097__$1;
(statearr_16107_16130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (11))){
var inst_16088 = cljs.core.async.close_BANG_.call(null,ch);
var state_16097__$1 = state_16097;
var statearr_16108_16131 = state_16097__$1;
(statearr_16108_16131[(2)] = inst_16088);

(statearr_16108_16131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (9))){
var state_16097__$1 = state_16097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16109_16132 = state_16097__$1;
(statearr_16109_16132[(1)] = (11));

} else {
var statearr_16110_16133 = state_16097__$1;
(statearr_16110_16133[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (5))){
var inst_16074 = (state_16097[(7)]);
var state_16097__$1 = state_16097;
var statearr_16111_16134 = state_16097__$1;
(statearr_16111_16134[(2)] = inst_16074);

(statearr_16111_16134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (10))){
var inst_16093 = (state_16097[(2)]);
var state_16097__$1 = state_16097;
var statearr_16112_16135 = state_16097__$1;
(statearr_16112_16135[(2)] = inst_16093);

(statearr_16112_16135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (8))){
var inst_16074 = (state_16097[(7)]);
var inst_16084 = cljs.core.next.call(null,inst_16074);
var inst_16074__$1 = inst_16084;
var state_16097__$1 = (function (){var statearr_16113 = state_16097;
(statearr_16113[(7)] = inst_16074__$1);

return statearr_16113;
})();
var statearr_16114_16136 = state_16097__$1;
(statearr_16114_16136[(2)] = null);

(statearr_16114_16136[(1)] = (2));


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
});})(c__8199__auto__))
;
return ((function (switch__8137__auto__,c__8199__auto__){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_16118 = [null,null,null,null,null,null,null,null];
(statearr_16118[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_16118[(1)] = (1));

return statearr_16118;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_16097){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_16097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e16119){if((e16119 instanceof Object)){
var ex__8141__auto__ = e16119;
var statearr_16120_16137 = state_16097;
(statearr_16120_16137[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16138 = state_16097;
state_16097 = G__16138;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_16097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_16097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__))
})();
var state__8201__auto__ = (function (){var statearr_16121 = f__8200__auto__.call(null);
(statearr_16121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_16121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__))
);

return c__8199__auto__;
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

cljs.core.async.Mux = (function (){var obj16140 = {};
return obj16140;
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


cljs.core.async.Mult = (function (){var obj16142 = {};
return obj16142;
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
if(typeof cljs.core.async.t16364 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16364 = (function (cs,ch,mult,meta16365){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16365 = meta16365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16364.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16364.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16364.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16364.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16364.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16366){
var self__ = this;
var _16366__$1 = this;
return self__.meta16365;
});})(cs))
;

cljs.core.async.t16364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16366,meta16365__$1){
var self__ = this;
var _16366__$1 = this;
return (new cljs.core.async.t16364(self__.cs,self__.ch,self__.mult,meta16365__$1));
});})(cs))
;

cljs.core.async.t16364.cljs$lang$type = true;

cljs.core.async.t16364.cljs$lang$ctorStr = "cljs.core.async/t16364";

cljs.core.async.t16364.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t16364");
});})(cs))
;

cljs.core.async.__GT_t16364 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t16364(cs__$1,ch__$1,mult__$1,meta16365){
return (new cljs.core.async.t16364(cs__$1,ch__$1,mult__$1,meta16365));
});})(cs))
;

}

return (new cljs.core.async.t16364(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8199__auto___16585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___16585,cs,m,dchan,dctr,done){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___16585,cs,m,dchan,dctr,done){
return (function (state_16497){
var state_val_16498 = (state_16497[(1)]);
if((state_val_16498 === (7))){
var inst_16493 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16499_16586 = state_16497__$1;
(statearr_16499_16586[(2)] = inst_16493);

(statearr_16499_16586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (20))){
var inst_16398 = (state_16497[(7)]);
var inst_16408 = cljs.core.first.call(null,inst_16398);
var inst_16409 = cljs.core.nth.call(null,inst_16408,(0),null);
var inst_16410 = cljs.core.nth.call(null,inst_16408,(1),null);
var state_16497__$1 = (function (){var statearr_16500 = state_16497;
(statearr_16500[(8)] = inst_16409);

return statearr_16500;
})();
if(cljs.core.truth_(inst_16410)){
var statearr_16501_16587 = state_16497__$1;
(statearr_16501_16587[(1)] = (22));

} else {
var statearr_16502_16588 = state_16497__$1;
(statearr_16502_16588[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (27))){
var inst_16369 = (state_16497[(9)]);
var inst_16445 = (state_16497[(10)]);
var inst_16440 = (state_16497[(11)]);
var inst_16438 = (state_16497[(12)]);
var inst_16445__$1 = cljs.core._nth.call(null,inst_16438,inst_16440);
var inst_16446 = cljs.core.async.put_BANG_.call(null,inst_16445__$1,inst_16369,done);
var state_16497__$1 = (function (){var statearr_16503 = state_16497;
(statearr_16503[(10)] = inst_16445__$1);

return statearr_16503;
})();
if(cljs.core.truth_(inst_16446)){
var statearr_16504_16589 = state_16497__$1;
(statearr_16504_16589[(1)] = (30));

} else {
var statearr_16505_16590 = state_16497__$1;
(statearr_16505_16590[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (1))){
var state_16497__$1 = state_16497;
var statearr_16506_16591 = state_16497__$1;
(statearr_16506_16591[(2)] = null);

(statearr_16506_16591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (24))){
var inst_16398 = (state_16497[(7)]);
var inst_16415 = (state_16497[(2)]);
var inst_16416 = cljs.core.next.call(null,inst_16398);
var inst_16378 = inst_16416;
var inst_16379 = null;
var inst_16380 = (0);
var inst_16381 = (0);
var state_16497__$1 = (function (){var statearr_16507 = state_16497;
(statearr_16507[(13)] = inst_16415);

(statearr_16507[(14)] = inst_16380);

(statearr_16507[(15)] = inst_16381);

(statearr_16507[(16)] = inst_16378);

(statearr_16507[(17)] = inst_16379);

return statearr_16507;
})();
var statearr_16508_16592 = state_16497__$1;
(statearr_16508_16592[(2)] = null);

(statearr_16508_16592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (39))){
var state_16497__$1 = state_16497;
var statearr_16512_16593 = state_16497__$1;
(statearr_16512_16593[(2)] = null);

(statearr_16512_16593[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (4))){
var inst_16369 = (state_16497[(9)]);
var inst_16369__$1 = (state_16497[(2)]);
var inst_16370 = (inst_16369__$1 == null);
var state_16497__$1 = (function (){var statearr_16513 = state_16497;
(statearr_16513[(9)] = inst_16369__$1);

return statearr_16513;
})();
if(cljs.core.truth_(inst_16370)){
var statearr_16514_16594 = state_16497__$1;
(statearr_16514_16594[(1)] = (5));

} else {
var statearr_16515_16595 = state_16497__$1;
(statearr_16515_16595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (15))){
var inst_16380 = (state_16497[(14)]);
var inst_16381 = (state_16497[(15)]);
var inst_16378 = (state_16497[(16)]);
var inst_16379 = (state_16497[(17)]);
var inst_16394 = (state_16497[(2)]);
var inst_16395 = (inst_16381 + (1));
var tmp16509 = inst_16380;
var tmp16510 = inst_16378;
var tmp16511 = inst_16379;
var inst_16378__$1 = tmp16510;
var inst_16379__$1 = tmp16511;
var inst_16380__$1 = tmp16509;
var inst_16381__$1 = inst_16395;
var state_16497__$1 = (function (){var statearr_16516 = state_16497;
(statearr_16516[(18)] = inst_16394);

(statearr_16516[(14)] = inst_16380__$1);

(statearr_16516[(15)] = inst_16381__$1);

(statearr_16516[(16)] = inst_16378__$1);

(statearr_16516[(17)] = inst_16379__$1);

return statearr_16516;
})();
var statearr_16517_16596 = state_16497__$1;
(statearr_16517_16596[(2)] = null);

(statearr_16517_16596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (21))){
var inst_16419 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16521_16597 = state_16497__$1;
(statearr_16521_16597[(2)] = inst_16419);

(statearr_16521_16597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (31))){
var inst_16445 = (state_16497[(10)]);
var inst_16449 = done.call(null,null);
var inst_16450 = cljs.core.async.untap_STAR_.call(null,m,inst_16445);
var state_16497__$1 = (function (){var statearr_16522 = state_16497;
(statearr_16522[(19)] = inst_16449);

return statearr_16522;
})();
var statearr_16523_16598 = state_16497__$1;
(statearr_16523_16598[(2)] = inst_16450);

(statearr_16523_16598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (32))){
var inst_16439 = (state_16497[(20)]);
var inst_16437 = (state_16497[(21)]);
var inst_16440 = (state_16497[(11)]);
var inst_16438 = (state_16497[(12)]);
var inst_16452 = (state_16497[(2)]);
var inst_16453 = (inst_16440 + (1));
var tmp16518 = inst_16439;
var tmp16519 = inst_16437;
var tmp16520 = inst_16438;
var inst_16437__$1 = tmp16519;
var inst_16438__$1 = tmp16520;
var inst_16439__$1 = tmp16518;
var inst_16440__$1 = inst_16453;
var state_16497__$1 = (function (){var statearr_16524 = state_16497;
(statearr_16524[(22)] = inst_16452);

(statearr_16524[(20)] = inst_16439__$1);

(statearr_16524[(21)] = inst_16437__$1);

(statearr_16524[(11)] = inst_16440__$1);

(statearr_16524[(12)] = inst_16438__$1);

return statearr_16524;
})();
var statearr_16525_16599 = state_16497__$1;
(statearr_16525_16599[(2)] = null);

(statearr_16525_16599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (40))){
var inst_16465 = (state_16497[(23)]);
var inst_16469 = done.call(null,null);
var inst_16470 = cljs.core.async.untap_STAR_.call(null,m,inst_16465);
var state_16497__$1 = (function (){var statearr_16526 = state_16497;
(statearr_16526[(24)] = inst_16469);

return statearr_16526;
})();
var statearr_16527_16600 = state_16497__$1;
(statearr_16527_16600[(2)] = inst_16470);

(statearr_16527_16600[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (33))){
var inst_16456 = (state_16497[(25)]);
var inst_16458 = cljs.core.chunked_seq_QMARK_.call(null,inst_16456);
var state_16497__$1 = state_16497;
if(inst_16458){
var statearr_16528_16601 = state_16497__$1;
(statearr_16528_16601[(1)] = (36));

} else {
var statearr_16529_16602 = state_16497__$1;
(statearr_16529_16602[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (13))){
var inst_16388 = (state_16497[(26)]);
var inst_16391 = cljs.core.async.close_BANG_.call(null,inst_16388);
var state_16497__$1 = state_16497;
var statearr_16530_16603 = state_16497__$1;
(statearr_16530_16603[(2)] = inst_16391);

(statearr_16530_16603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (22))){
var inst_16409 = (state_16497[(8)]);
var inst_16412 = cljs.core.async.close_BANG_.call(null,inst_16409);
var state_16497__$1 = state_16497;
var statearr_16531_16604 = state_16497__$1;
(statearr_16531_16604[(2)] = inst_16412);

(statearr_16531_16604[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (36))){
var inst_16456 = (state_16497[(25)]);
var inst_16460 = cljs.core.chunk_first.call(null,inst_16456);
var inst_16461 = cljs.core.chunk_rest.call(null,inst_16456);
var inst_16462 = cljs.core.count.call(null,inst_16460);
var inst_16437 = inst_16461;
var inst_16438 = inst_16460;
var inst_16439 = inst_16462;
var inst_16440 = (0);
var state_16497__$1 = (function (){var statearr_16532 = state_16497;
(statearr_16532[(20)] = inst_16439);

(statearr_16532[(21)] = inst_16437);

(statearr_16532[(11)] = inst_16440);

(statearr_16532[(12)] = inst_16438);

return statearr_16532;
})();
var statearr_16533_16605 = state_16497__$1;
(statearr_16533_16605[(2)] = null);

(statearr_16533_16605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (41))){
var inst_16456 = (state_16497[(25)]);
var inst_16472 = (state_16497[(2)]);
var inst_16473 = cljs.core.next.call(null,inst_16456);
var inst_16437 = inst_16473;
var inst_16438 = null;
var inst_16439 = (0);
var inst_16440 = (0);
var state_16497__$1 = (function (){var statearr_16534 = state_16497;
(statearr_16534[(20)] = inst_16439);

(statearr_16534[(21)] = inst_16437);

(statearr_16534[(11)] = inst_16440);

(statearr_16534[(27)] = inst_16472);

(statearr_16534[(12)] = inst_16438);

return statearr_16534;
})();
var statearr_16535_16606 = state_16497__$1;
(statearr_16535_16606[(2)] = null);

(statearr_16535_16606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (43))){
var state_16497__$1 = state_16497;
var statearr_16536_16607 = state_16497__$1;
(statearr_16536_16607[(2)] = null);

(statearr_16536_16607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (29))){
var inst_16481 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16537_16608 = state_16497__$1;
(statearr_16537_16608[(2)] = inst_16481);

(statearr_16537_16608[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (44))){
var inst_16490 = (state_16497[(2)]);
var state_16497__$1 = (function (){var statearr_16538 = state_16497;
(statearr_16538[(28)] = inst_16490);

return statearr_16538;
})();
var statearr_16539_16609 = state_16497__$1;
(statearr_16539_16609[(2)] = null);

(statearr_16539_16609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (6))){
var inst_16429 = (state_16497[(29)]);
var inst_16428 = cljs.core.deref.call(null,cs);
var inst_16429__$1 = cljs.core.keys.call(null,inst_16428);
var inst_16430 = cljs.core.count.call(null,inst_16429__$1);
var inst_16431 = cljs.core.reset_BANG_.call(null,dctr,inst_16430);
var inst_16436 = cljs.core.seq.call(null,inst_16429__$1);
var inst_16437 = inst_16436;
var inst_16438 = null;
var inst_16439 = (0);
var inst_16440 = (0);
var state_16497__$1 = (function (){var statearr_16540 = state_16497;
(statearr_16540[(30)] = inst_16431);

(statearr_16540[(20)] = inst_16439);

(statearr_16540[(21)] = inst_16437);

(statearr_16540[(11)] = inst_16440);

(statearr_16540[(29)] = inst_16429__$1);

(statearr_16540[(12)] = inst_16438);

return statearr_16540;
})();
var statearr_16541_16610 = state_16497__$1;
(statearr_16541_16610[(2)] = null);

(statearr_16541_16610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (28))){
var inst_16437 = (state_16497[(21)]);
var inst_16456 = (state_16497[(25)]);
var inst_16456__$1 = cljs.core.seq.call(null,inst_16437);
var state_16497__$1 = (function (){var statearr_16542 = state_16497;
(statearr_16542[(25)] = inst_16456__$1);

return statearr_16542;
})();
if(inst_16456__$1){
var statearr_16543_16611 = state_16497__$1;
(statearr_16543_16611[(1)] = (33));

} else {
var statearr_16544_16612 = state_16497__$1;
(statearr_16544_16612[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (25))){
var inst_16439 = (state_16497[(20)]);
var inst_16440 = (state_16497[(11)]);
var inst_16442 = (inst_16440 < inst_16439);
var inst_16443 = inst_16442;
var state_16497__$1 = state_16497;
if(cljs.core.truth_(inst_16443)){
var statearr_16545_16613 = state_16497__$1;
(statearr_16545_16613[(1)] = (27));

} else {
var statearr_16546_16614 = state_16497__$1;
(statearr_16546_16614[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (34))){
var state_16497__$1 = state_16497;
var statearr_16547_16615 = state_16497__$1;
(statearr_16547_16615[(2)] = null);

(statearr_16547_16615[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (17))){
var state_16497__$1 = state_16497;
var statearr_16548_16616 = state_16497__$1;
(statearr_16548_16616[(2)] = null);

(statearr_16548_16616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (3))){
var inst_16495 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16497__$1,inst_16495);
} else {
if((state_val_16498 === (12))){
var inst_16424 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16549_16617 = state_16497__$1;
(statearr_16549_16617[(2)] = inst_16424);

(statearr_16549_16617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (2))){
var state_16497__$1 = state_16497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16497__$1,(4),ch);
} else {
if((state_val_16498 === (23))){
var state_16497__$1 = state_16497;
var statearr_16550_16618 = state_16497__$1;
(statearr_16550_16618[(2)] = null);

(statearr_16550_16618[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (35))){
var inst_16479 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16551_16619 = state_16497__$1;
(statearr_16551_16619[(2)] = inst_16479);

(statearr_16551_16619[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (19))){
var inst_16398 = (state_16497[(7)]);
var inst_16402 = cljs.core.chunk_first.call(null,inst_16398);
var inst_16403 = cljs.core.chunk_rest.call(null,inst_16398);
var inst_16404 = cljs.core.count.call(null,inst_16402);
var inst_16378 = inst_16403;
var inst_16379 = inst_16402;
var inst_16380 = inst_16404;
var inst_16381 = (0);
var state_16497__$1 = (function (){var statearr_16552 = state_16497;
(statearr_16552[(14)] = inst_16380);

(statearr_16552[(15)] = inst_16381);

(statearr_16552[(16)] = inst_16378);

(statearr_16552[(17)] = inst_16379);

return statearr_16552;
})();
var statearr_16553_16620 = state_16497__$1;
(statearr_16553_16620[(2)] = null);

(statearr_16553_16620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (11))){
var inst_16378 = (state_16497[(16)]);
var inst_16398 = (state_16497[(7)]);
var inst_16398__$1 = cljs.core.seq.call(null,inst_16378);
var state_16497__$1 = (function (){var statearr_16554 = state_16497;
(statearr_16554[(7)] = inst_16398__$1);

return statearr_16554;
})();
if(inst_16398__$1){
var statearr_16555_16621 = state_16497__$1;
(statearr_16555_16621[(1)] = (16));

} else {
var statearr_16556_16622 = state_16497__$1;
(statearr_16556_16622[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (9))){
var inst_16426 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16557_16623 = state_16497__$1;
(statearr_16557_16623[(2)] = inst_16426);

(statearr_16557_16623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (5))){
var inst_16376 = cljs.core.deref.call(null,cs);
var inst_16377 = cljs.core.seq.call(null,inst_16376);
var inst_16378 = inst_16377;
var inst_16379 = null;
var inst_16380 = (0);
var inst_16381 = (0);
var state_16497__$1 = (function (){var statearr_16558 = state_16497;
(statearr_16558[(14)] = inst_16380);

(statearr_16558[(15)] = inst_16381);

(statearr_16558[(16)] = inst_16378);

(statearr_16558[(17)] = inst_16379);

return statearr_16558;
})();
var statearr_16559_16624 = state_16497__$1;
(statearr_16559_16624[(2)] = null);

(statearr_16559_16624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (14))){
var state_16497__$1 = state_16497;
var statearr_16560_16625 = state_16497__$1;
(statearr_16560_16625[(2)] = null);

(statearr_16560_16625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (45))){
var inst_16487 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16561_16626 = state_16497__$1;
(statearr_16561_16626[(2)] = inst_16487);

(statearr_16561_16626[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (26))){
var inst_16429 = (state_16497[(29)]);
var inst_16483 = (state_16497[(2)]);
var inst_16484 = cljs.core.seq.call(null,inst_16429);
var state_16497__$1 = (function (){var statearr_16562 = state_16497;
(statearr_16562[(31)] = inst_16483);

return statearr_16562;
})();
if(inst_16484){
var statearr_16563_16627 = state_16497__$1;
(statearr_16563_16627[(1)] = (42));

} else {
var statearr_16564_16628 = state_16497__$1;
(statearr_16564_16628[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (16))){
var inst_16398 = (state_16497[(7)]);
var inst_16400 = cljs.core.chunked_seq_QMARK_.call(null,inst_16398);
var state_16497__$1 = state_16497;
if(inst_16400){
var statearr_16565_16629 = state_16497__$1;
(statearr_16565_16629[(1)] = (19));

} else {
var statearr_16566_16630 = state_16497__$1;
(statearr_16566_16630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (38))){
var inst_16476 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16567_16631 = state_16497__$1;
(statearr_16567_16631[(2)] = inst_16476);

(statearr_16567_16631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (30))){
var state_16497__$1 = state_16497;
var statearr_16568_16632 = state_16497__$1;
(statearr_16568_16632[(2)] = null);

(statearr_16568_16632[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (10))){
var inst_16381 = (state_16497[(15)]);
var inst_16379 = (state_16497[(17)]);
var inst_16387 = cljs.core._nth.call(null,inst_16379,inst_16381);
var inst_16388 = cljs.core.nth.call(null,inst_16387,(0),null);
var inst_16389 = cljs.core.nth.call(null,inst_16387,(1),null);
var state_16497__$1 = (function (){var statearr_16569 = state_16497;
(statearr_16569[(26)] = inst_16388);

return statearr_16569;
})();
if(cljs.core.truth_(inst_16389)){
var statearr_16570_16633 = state_16497__$1;
(statearr_16570_16633[(1)] = (13));

} else {
var statearr_16571_16634 = state_16497__$1;
(statearr_16571_16634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (18))){
var inst_16422 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16572_16635 = state_16497__$1;
(statearr_16572_16635[(2)] = inst_16422);

(statearr_16572_16635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (42))){
var state_16497__$1 = state_16497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16497__$1,(45),dchan);
} else {
if((state_val_16498 === (37))){
var inst_16369 = (state_16497[(9)]);
var inst_16465 = (state_16497[(23)]);
var inst_16456 = (state_16497[(25)]);
var inst_16465__$1 = cljs.core.first.call(null,inst_16456);
var inst_16466 = cljs.core.async.put_BANG_.call(null,inst_16465__$1,inst_16369,done);
var state_16497__$1 = (function (){var statearr_16573 = state_16497;
(statearr_16573[(23)] = inst_16465__$1);

return statearr_16573;
})();
if(cljs.core.truth_(inst_16466)){
var statearr_16574_16636 = state_16497__$1;
(statearr_16574_16636[(1)] = (39));

} else {
var statearr_16575_16637 = state_16497__$1;
(statearr_16575_16637[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (8))){
var inst_16380 = (state_16497[(14)]);
var inst_16381 = (state_16497[(15)]);
var inst_16383 = (inst_16381 < inst_16380);
var inst_16384 = inst_16383;
var state_16497__$1 = state_16497;
if(cljs.core.truth_(inst_16384)){
var statearr_16576_16638 = state_16497__$1;
(statearr_16576_16638[(1)] = (10));

} else {
var statearr_16577_16639 = state_16497__$1;
(statearr_16577_16639[(1)] = (11));

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
});})(c__8199__auto___16585,cs,m,dchan,dctr,done))
;
return ((function (switch__8137__auto__,c__8199__auto___16585,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8138__auto__ = null;
var cljs$core$async$mult_$_state_machine__8138__auto____0 = (function (){
var statearr_16581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16581[(0)] = cljs$core$async$mult_$_state_machine__8138__auto__);

(statearr_16581[(1)] = (1));

return statearr_16581;
});
var cljs$core$async$mult_$_state_machine__8138__auto____1 = (function (state_16497){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_16497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e16582){if((e16582 instanceof Object)){
var ex__8141__auto__ = e16582;
var statearr_16583_16640 = state_16497;
(statearr_16583_16640[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16641 = state_16497;
state_16497 = G__16641;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8138__auto__ = function(state_16497){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8138__auto____1.call(this,state_16497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8138__auto____0;
cljs$core$async$mult_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8138__auto____1;
return cljs$core$async$mult_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___16585,cs,m,dchan,dctr,done))
})();
var state__8201__auto__ = (function (){var statearr_16584 = f__8200__auto__.call(null);
(statearr_16584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___16585);

return statearr_16584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___16585,cs,m,dchan,dctr,done))
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
var G__16643 = arguments.length;
switch (G__16643) {
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

cljs.core.async.Mix = (function (){var obj16646 = {};
return obj16646;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16651){
var map__16652 = p__16651;
var map__16652__$1 = ((cljs.core.seq_QMARK_.call(null,map__16652))?cljs.core.apply.call(null,cljs.core.hash_map,map__16652):map__16652);
var opts = map__16652__$1;
var statearr_16653_16656 = state;
(statearr_16653_16656[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16652,map__16652__$1,opts){
return (function (val){
var statearr_16654_16657 = state;
(statearr_16654_16657[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16652,map__16652__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16655_16658 = state;
(statearr_16655_16658[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16647){
var G__16648 = cljs.core.first.call(null,seq16647);
var seq16647__$1 = cljs.core.next.call(null,seq16647);
var G__16649 = cljs.core.first.call(null,seq16647__$1);
var seq16647__$2 = cljs.core.next.call(null,seq16647__$1);
var G__16650 = cljs.core.first.call(null,seq16647__$2);
var seq16647__$3 = cljs.core.next.call(null,seq16647__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16648,G__16649,G__16650,seq16647__$3);
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
if(typeof cljs.core.async.t16778 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16778 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16779){
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
this.meta16779 = meta16779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16778.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16778.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16778.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16778.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16778.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16778.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16778.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16780){
var self__ = this;
var _16780__$1 = this;
return self__.meta16779;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16780,meta16779__$1){
var self__ = this;
var _16780__$1 = this;
return (new cljs.core.async.t16778(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16779__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16778.cljs$lang$type = true;

cljs.core.async.t16778.cljs$lang$ctorStr = "cljs.core.async/t16778";

cljs.core.async.t16778.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t16778");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16778 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t16778(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16779){
return (new cljs.core.async.t16778(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16779));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16778(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8199__auto___16897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___16897,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___16897,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16850){
var state_val_16851 = (state_16850[(1)]);
if((state_val_16851 === (7))){
var inst_16794 = (state_16850[(7)]);
var inst_16799 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16794);
var state_16850__$1 = state_16850;
var statearr_16852_16898 = state_16850__$1;
(statearr_16852_16898[(2)] = inst_16799);

(statearr_16852_16898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (20))){
var inst_16809 = (state_16850[(8)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16850__$1,(23),out,inst_16809);
} else {
if((state_val_16851 === (1))){
var inst_16784 = (state_16850[(9)]);
var inst_16784__$1 = calc_state.call(null);
var inst_16785 = cljs.core.seq_QMARK_.call(null,inst_16784__$1);
var state_16850__$1 = (function (){var statearr_16853 = state_16850;
(statearr_16853[(9)] = inst_16784__$1);

return statearr_16853;
})();
if(inst_16785){
var statearr_16854_16899 = state_16850__$1;
(statearr_16854_16899[(1)] = (2));

} else {
var statearr_16855_16900 = state_16850__$1;
(statearr_16855_16900[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (24))){
var inst_16802 = (state_16850[(10)]);
var inst_16794 = inst_16802;
var state_16850__$1 = (function (){var statearr_16856 = state_16850;
(statearr_16856[(7)] = inst_16794);

return statearr_16856;
})();
var statearr_16857_16901 = state_16850__$1;
(statearr_16857_16901[(2)] = null);

(statearr_16857_16901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (4))){
var inst_16784 = (state_16850[(9)]);
var inst_16790 = (state_16850[(2)]);
var inst_16791 = cljs.core.get.call(null,inst_16790,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16792 = cljs.core.get.call(null,inst_16790,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16793 = cljs.core.get.call(null,inst_16790,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16794 = inst_16784;
var state_16850__$1 = (function (){var statearr_16858 = state_16850;
(statearr_16858[(11)] = inst_16793);

(statearr_16858[(12)] = inst_16792);

(statearr_16858[(7)] = inst_16794);

(statearr_16858[(13)] = inst_16791);

return statearr_16858;
})();
var statearr_16859_16902 = state_16850__$1;
(statearr_16859_16902[(2)] = null);

(statearr_16859_16902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (15))){
var state_16850__$1 = state_16850;
var statearr_16860_16903 = state_16850__$1;
(statearr_16860_16903[(2)] = null);

(statearr_16860_16903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (21))){
var inst_16802 = (state_16850[(10)]);
var inst_16794 = inst_16802;
var state_16850__$1 = (function (){var statearr_16861 = state_16850;
(statearr_16861[(7)] = inst_16794);

return statearr_16861;
})();
var statearr_16862_16904 = state_16850__$1;
(statearr_16862_16904[(2)] = null);

(statearr_16862_16904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (13))){
var inst_16846 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16863_16905 = state_16850__$1;
(statearr_16863_16905[(2)] = inst_16846);

(statearr_16863_16905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (22))){
var inst_16844 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16864_16906 = state_16850__$1;
(statearr_16864_16906[(2)] = inst_16844);

(statearr_16864_16906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (6))){
var inst_16848 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16850__$1,inst_16848);
} else {
if((state_val_16851 === (25))){
var state_16850__$1 = state_16850;
var statearr_16865_16907 = state_16850__$1;
(statearr_16865_16907[(2)] = null);

(statearr_16865_16907[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (17))){
var inst_16824 = (state_16850[(14)]);
var state_16850__$1 = state_16850;
var statearr_16866_16908 = state_16850__$1;
(statearr_16866_16908[(2)] = inst_16824);

(statearr_16866_16908[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (3))){
var inst_16784 = (state_16850[(9)]);
var state_16850__$1 = state_16850;
var statearr_16867_16909 = state_16850__$1;
(statearr_16867_16909[(2)] = inst_16784);

(statearr_16867_16909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (12))){
var inst_16805 = (state_16850[(15)]);
var inst_16824 = (state_16850[(14)]);
var inst_16810 = (state_16850[(16)]);
var inst_16824__$1 = inst_16805.call(null,inst_16810);
var state_16850__$1 = (function (){var statearr_16868 = state_16850;
(statearr_16868[(14)] = inst_16824__$1);

return statearr_16868;
})();
if(cljs.core.truth_(inst_16824__$1)){
var statearr_16869_16910 = state_16850__$1;
(statearr_16869_16910[(1)] = (17));

} else {
var statearr_16870_16911 = state_16850__$1;
(statearr_16870_16911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (2))){
var inst_16784 = (state_16850[(9)]);
var inst_16787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16784);
var state_16850__$1 = state_16850;
var statearr_16871_16912 = state_16850__$1;
(statearr_16871_16912[(2)] = inst_16787);

(statearr_16871_16912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (23))){
var inst_16835 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
if(cljs.core.truth_(inst_16835)){
var statearr_16872_16913 = state_16850__$1;
(statearr_16872_16913[(1)] = (24));

} else {
var statearr_16873_16914 = state_16850__$1;
(statearr_16873_16914[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (19))){
var inst_16832 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
if(cljs.core.truth_(inst_16832)){
var statearr_16874_16915 = state_16850__$1;
(statearr_16874_16915[(1)] = (20));

} else {
var statearr_16875_16916 = state_16850__$1;
(statearr_16875_16916[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (11))){
var inst_16809 = (state_16850[(8)]);
var inst_16815 = (inst_16809 == null);
var state_16850__$1 = state_16850;
if(cljs.core.truth_(inst_16815)){
var statearr_16876_16917 = state_16850__$1;
(statearr_16876_16917[(1)] = (14));

} else {
var statearr_16877_16918 = state_16850__$1;
(statearr_16877_16918[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (9))){
var inst_16802 = (state_16850[(10)]);
var inst_16802__$1 = (state_16850[(2)]);
var inst_16803 = cljs.core.get.call(null,inst_16802__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16804 = cljs.core.get.call(null,inst_16802__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16805 = cljs.core.get.call(null,inst_16802__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16850__$1 = (function (){var statearr_16878 = state_16850;
(statearr_16878[(10)] = inst_16802__$1);

(statearr_16878[(15)] = inst_16805);

(statearr_16878[(17)] = inst_16804);

return statearr_16878;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16850__$1,(10),inst_16803);
} else {
if((state_val_16851 === (5))){
var inst_16794 = (state_16850[(7)]);
var inst_16797 = cljs.core.seq_QMARK_.call(null,inst_16794);
var state_16850__$1 = state_16850;
if(inst_16797){
var statearr_16879_16919 = state_16850__$1;
(statearr_16879_16919[(1)] = (7));

} else {
var statearr_16880_16920 = state_16850__$1;
(statearr_16880_16920[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (14))){
var inst_16810 = (state_16850[(16)]);
var inst_16817 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16810);
var state_16850__$1 = state_16850;
var statearr_16881_16921 = state_16850__$1;
(statearr_16881_16921[(2)] = inst_16817);

(statearr_16881_16921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (26))){
var inst_16840 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16882_16922 = state_16850__$1;
(statearr_16882_16922[(2)] = inst_16840);

(statearr_16882_16922[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (16))){
var inst_16820 = (state_16850[(2)]);
var inst_16821 = calc_state.call(null);
var inst_16794 = inst_16821;
var state_16850__$1 = (function (){var statearr_16883 = state_16850;
(statearr_16883[(7)] = inst_16794);

(statearr_16883[(18)] = inst_16820);

return statearr_16883;
})();
var statearr_16884_16923 = state_16850__$1;
(statearr_16884_16923[(2)] = null);

(statearr_16884_16923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (10))){
var inst_16809 = (state_16850[(8)]);
var inst_16810 = (state_16850[(16)]);
var inst_16808 = (state_16850[(2)]);
var inst_16809__$1 = cljs.core.nth.call(null,inst_16808,(0),null);
var inst_16810__$1 = cljs.core.nth.call(null,inst_16808,(1),null);
var inst_16811 = (inst_16809__$1 == null);
var inst_16812 = cljs.core._EQ_.call(null,inst_16810__$1,change);
var inst_16813 = (inst_16811) || (inst_16812);
var state_16850__$1 = (function (){var statearr_16885 = state_16850;
(statearr_16885[(8)] = inst_16809__$1);

(statearr_16885[(16)] = inst_16810__$1);

return statearr_16885;
})();
if(cljs.core.truth_(inst_16813)){
var statearr_16886_16924 = state_16850__$1;
(statearr_16886_16924[(1)] = (11));

} else {
var statearr_16887_16925 = state_16850__$1;
(statearr_16887_16925[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (18))){
var inst_16805 = (state_16850[(15)]);
var inst_16804 = (state_16850[(17)]);
var inst_16810 = (state_16850[(16)]);
var inst_16827 = cljs.core.empty_QMARK_.call(null,inst_16805);
var inst_16828 = inst_16804.call(null,inst_16810);
var inst_16829 = cljs.core.not.call(null,inst_16828);
var inst_16830 = (inst_16827) && (inst_16829);
var state_16850__$1 = state_16850;
var statearr_16888_16926 = state_16850__$1;
(statearr_16888_16926[(2)] = inst_16830);

(statearr_16888_16926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (8))){
var inst_16794 = (state_16850[(7)]);
var state_16850__$1 = state_16850;
var statearr_16889_16927 = state_16850__$1;
(statearr_16889_16927[(2)] = inst_16794);

(statearr_16889_16927[(1)] = (9));


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
});})(c__8199__auto___16897,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8137__auto__,c__8199__auto___16897,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8138__auto__ = null;
var cljs$core$async$mix_$_state_machine__8138__auto____0 = (function (){
var statearr_16893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16893[(0)] = cljs$core$async$mix_$_state_machine__8138__auto__);

(statearr_16893[(1)] = (1));

return statearr_16893;
});
var cljs$core$async$mix_$_state_machine__8138__auto____1 = (function (state_16850){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_16850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e16894){if((e16894 instanceof Object)){
var ex__8141__auto__ = e16894;
var statearr_16895_16928 = state_16850;
(statearr_16895_16928[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16929 = state_16850;
state_16850 = G__16929;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8138__auto__ = function(state_16850){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8138__auto____1.call(this,state_16850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8138__auto____0;
cljs$core$async$mix_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8138__auto____1;
return cljs$core$async$mix_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___16897,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8201__auto__ = (function (){var statearr_16896 = f__8200__auto__.call(null);
(statearr_16896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___16897);

return statearr_16896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___16897,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16931 = {};
return obj16931;
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
var G__16933 = arguments.length;
switch (G__16933) {
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
var G__16937 = arguments.length;
switch (G__16937) {
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
return (function (p1__16935_SHARP_){
if(cljs.core.truth_(p1__16935_SHARP_.call(null,topic))){
return p1__16935_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16935_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4099__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16938 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16938 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta16939){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta16939 = meta16939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16938.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16938.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16938.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16938.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16940){
var self__ = this;
var _16940__$1 = this;
return self__.meta16939;
});})(mults,ensure_mult))
;

cljs.core.async.t16938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16940,meta16939__$1){
var self__ = this;
var _16940__$1 = this;
return (new cljs.core.async.t16938(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta16939__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16938.cljs$lang$type = true;

cljs.core.async.t16938.cljs$lang$ctorStr = "cljs.core.async/t16938";

cljs.core.async.t16938.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t16938");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16938 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t16938(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta16939){
return (new cljs.core.async.t16938(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta16939));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16938(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8199__auto___17061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17061,mults,ensure_mult,p){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17061,mults,ensure_mult,p){
return (function (state_17012){
var state_val_17013 = (state_17012[(1)]);
if((state_val_17013 === (7))){
var inst_17008 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17014_17062 = state_17012__$1;
(statearr_17014_17062[(2)] = inst_17008);

(statearr_17014_17062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (20))){
var state_17012__$1 = state_17012;
var statearr_17015_17063 = state_17012__$1;
(statearr_17015_17063[(2)] = null);

(statearr_17015_17063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (1))){
var state_17012__$1 = state_17012;
var statearr_17016_17064 = state_17012__$1;
(statearr_17016_17064[(2)] = null);

(statearr_17016_17064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (24))){
var inst_16991 = (state_17012[(7)]);
var inst_17000 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16991);
var state_17012__$1 = state_17012;
var statearr_17017_17065 = state_17012__$1;
(statearr_17017_17065[(2)] = inst_17000);

(statearr_17017_17065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (4))){
var inst_16943 = (state_17012[(8)]);
var inst_16943__$1 = (state_17012[(2)]);
var inst_16944 = (inst_16943__$1 == null);
var state_17012__$1 = (function (){var statearr_17018 = state_17012;
(statearr_17018[(8)] = inst_16943__$1);

return statearr_17018;
})();
if(cljs.core.truth_(inst_16944)){
var statearr_17019_17066 = state_17012__$1;
(statearr_17019_17066[(1)] = (5));

} else {
var statearr_17020_17067 = state_17012__$1;
(statearr_17020_17067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (15))){
var inst_16985 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17021_17068 = state_17012__$1;
(statearr_17021_17068[(2)] = inst_16985);

(statearr_17021_17068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (21))){
var inst_17005 = (state_17012[(2)]);
var state_17012__$1 = (function (){var statearr_17022 = state_17012;
(statearr_17022[(9)] = inst_17005);

return statearr_17022;
})();
var statearr_17023_17069 = state_17012__$1;
(statearr_17023_17069[(2)] = null);

(statearr_17023_17069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (13))){
var inst_16967 = (state_17012[(10)]);
var inst_16969 = cljs.core.chunked_seq_QMARK_.call(null,inst_16967);
var state_17012__$1 = state_17012;
if(inst_16969){
var statearr_17024_17070 = state_17012__$1;
(statearr_17024_17070[(1)] = (16));

} else {
var statearr_17025_17071 = state_17012__$1;
(statearr_17025_17071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (22))){
var inst_16997 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
if(cljs.core.truth_(inst_16997)){
var statearr_17026_17072 = state_17012__$1;
(statearr_17026_17072[(1)] = (23));

} else {
var statearr_17027_17073 = state_17012__$1;
(statearr_17027_17073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (6))){
var inst_16943 = (state_17012[(8)]);
var inst_16993 = (state_17012[(11)]);
var inst_16991 = (state_17012[(7)]);
var inst_16991__$1 = topic_fn.call(null,inst_16943);
var inst_16992 = cljs.core.deref.call(null,mults);
var inst_16993__$1 = cljs.core.get.call(null,inst_16992,inst_16991__$1);
var state_17012__$1 = (function (){var statearr_17028 = state_17012;
(statearr_17028[(11)] = inst_16993__$1);

(statearr_17028[(7)] = inst_16991__$1);

return statearr_17028;
})();
if(cljs.core.truth_(inst_16993__$1)){
var statearr_17029_17074 = state_17012__$1;
(statearr_17029_17074[(1)] = (19));

} else {
var statearr_17030_17075 = state_17012__$1;
(statearr_17030_17075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (25))){
var inst_17002 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17031_17076 = state_17012__$1;
(statearr_17031_17076[(2)] = inst_17002);

(statearr_17031_17076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (17))){
var inst_16967 = (state_17012[(10)]);
var inst_16976 = cljs.core.first.call(null,inst_16967);
var inst_16977 = cljs.core.async.muxch_STAR_.call(null,inst_16976);
var inst_16978 = cljs.core.async.close_BANG_.call(null,inst_16977);
var inst_16979 = cljs.core.next.call(null,inst_16967);
var inst_16953 = inst_16979;
var inst_16954 = null;
var inst_16955 = (0);
var inst_16956 = (0);
var state_17012__$1 = (function (){var statearr_17032 = state_17012;
(statearr_17032[(12)] = inst_16955);

(statearr_17032[(13)] = inst_16978);

(statearr_17032[(14)] = inst_16953);

(statearr_17032[(15)] = inst_16954);

(statearr_17032[(16)] = inst_16956);

return statearr_17032;
})();
var statearr_17033_17077 = state_17012__$1;
(statearr_17033_17077[(2)] = null);

(statearr_17033_17077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (3))){
var inst_17010 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17012__$1,inst_17010);
} else {
if((state_val_17013 === (12))){
var inst_16987 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17034_17078 = state_17012__$1;
(statearr_17034_17078[(2)] = inst_16987);

(statearr_17034_17078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (2))){
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17012__$1,(4),ch);
} else {
if((state_val_17013 === (23))){
var state_17012__$1 = state_17012;
var statearr_17035_17079 = state_17012__$1;
(statearr_17035_17079[(2)] = null);

(statearr_17035_17079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (19))){
var inst_16943 = (state_17012[(8)]);
var inst_16993 = (state_17012[(11)]);
var inst_16995 = cljs.core.async.muxch_STAR_.call(null,inst_16993);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17012__$1,(22),inst_16995,inst_16943);
} else {
if((state_val_17013 === (11))){
var inst_16967 = (state_17012[(10)]);
var inst_16953 = (state_17012[(14)]);
var inst_16967__$1 = cljs.core.seq.call(null,inst_16953);
var state_17012__$1 = (function (){var statearr_17036 = state_17012;
(statearr_17036[(10)] = inst_16967__$1);

return statearr_17036;
})();
if(inst_16967__$1){
var statearr_17037_17080 = state_17012__$1;
(statearr_17037_17080[(1)] = (13));

} else {
var statearr_17038_17081 = state_17012__$1;
(statearr_17038_17081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (9))){
var inst_16989 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17039_17082 = state_17012__$1;
(statearr_17039_17082[(2)] = inst_16989);

(statearr_17039_17082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (5))){
var inst_16950 = cljs.core.deref.call(null,mults);
var inst_16951 = cljs.core.vals.call(null,inst_16950);
var inst_16952 = cljs.core.seq.call(null,inst_16951);
var inst_16953 = inst_16952;
var inst_16954 = null;
var inst_16955 = (0);
var inst_16956 = (0);
var state_17012__$1 = (function (){var statearr_17040 = state_17012;
(statearr_17040[(12)] = inst_16955);

(statearr_17040[(14)] = inst_16953);

(statearr_17040[(15)] = inst_16954);

(statearr_17040[(16)] = inst_16956);

return statearr_17040;
})();
var statearr_17041_17083 = state_17012__$1;
(statearr_17041_17083[(2)] = null);

(statearr_17041_17083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (14))){
var state_17012__$1 = state_17012;
var statearr_17045_17084 = state_17012__$1;
(statearr_17045_17084[(2)] = null);

(statearr_17045_17084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (16))){
var inst_16967 = (state_17012[(10)]);
var inst_16971 = cljs.core.chunk_first.call(null,inst_16967);
var inst_16972 = cljs.core.chunk_rest.call(null,inst_16967);
var inst_16973 = cljs.core.count.call(null,inst_16971);
var inst_16953 = inst_16972;
var inst_16954 = inst_16971;
var inst_16955 = inst_16973;
var inst_16956 = (0);
var state_17012__$1 = (function (){var statearr_17046 = state_17012;
(statearr_17046[(12)] = inst_16955);

(statearr_17046[(14)] = inst_16953);

(statearr_17046[(15)] = inst_16954);

(statearr_17046[(16)] = inst_16956);

return statearr_17046;
})();
var statearr_17047_17085 = state_17012__$1;
(statearr_17047_17085[(2)] = null);

(statearr_17047_17085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (10))){
var inst_16955 = (state_17012[(12)]);
var inst_16953 = (state_17012[(14)]);
var inst_16954 = (state_17012[(15)]);
var inst_16956 = (state_17012[(16)]);
var inst_16961 = cljs.core._nth.call(null,inst_16954,inst_16956);
var inst_16962 = cljs.core.async.muxch_STAR_.call(null,inst_16961);
var inst_16963 = cljs.core.async.close_BANG_.call(null,inst_16962);
var inst_16964 = (inst_16956 + (1));
var tmp17042 = inst_16955;
var tmp17043 = inst_16953;
var tmp17044 = inst_16954;
var inst_16953__$1 = tmp17043;
var inst_16954__$1 = tmp17044;
var inst_16955__$1 = tmp17042;
var inst_16956__$1 = inst_16964;
var state_17012__$1 = (function (){var statearr_17048 = state_17012;
(statearr_17048[(12)] = inst_16955__$1);

(statearr_17048[(17)] = inst_16963);

(statearr_17048[(14)] = inst_16953__$1);

(statearr_17048[(15)] = inst_16954__$1);

(statearr_17048[(16)] = inst_16956__$1);

return statearr_17048;
})();
var statearr_17049_17086 = state_17012__$1;
(statearr_17049_17086[(2)] = null);

(statearr_17049_17086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (18))){
var inst_16982 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17050_17087 = state_17012__$1;
(statearr_17050_17087[(2)] = inst_16982);

(statearr_17050_17087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (8))){
var inst_16955 = (state_17012[(12)]);
var inst_16956 = (state_17012[(16)]);
var inst_16958 = (inst_16956 < inst_16955);
var inst_16959 = inst_16958;
var state_17012__$1 = state_17012;
if(cljs.core.truth_(inst_16959)){
var statearr_17051_17088 = state_17012__$1;
(statearr_17051_17088[(1)] = (10));

} else {
var statearr_17052_17089 = state_17012__$1;
(statearr_17052_17089[(1)] = (11));

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
});})(c__8199__auto___17061,mults,ensure_mult,p))
;
return ((function (switch__8137__auto__,c__8199__auto___17061,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17056[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17056[(1)] = (1));

return statearr_17056;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17012){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object)){
var ex__8141__auto__ = e17057;
var statearr_17058_17090 = state_17012;
(statearr_17058_17090[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17091 = state_17012;
state_17012 = G__17091;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17061,mults,ensure_mult,p))
})();
var state__8201__auto__ = (function (){var statearr_17059 = f__8200__auto__.call(null);
(statearr_17059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17061);

return statearr_17059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17061,mults,ensure_mult,p))
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
var G__17093 = arguments.length;
switch (G__17093) {
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
var G__17096 = arguments.length;
switch (G__17096) {
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
var G__17099 = arguments.length;
switch (G__17099) {
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
var c__8199__auto___17169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17169,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17169,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17138){
var state_val_17139 = (state_17138[(1)]);
if((state_val_17139 === (7))){
var state_17138__$1 = state_17138;
var statearr_17140_17170 = state_17138__$1;
(statearr_17140_17170[(2)] = null);

(statearr_17140_17170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (1))){
var state_17138__$1 = state_17138;
var statearr_17141_17171 = state_17138__$1;
(statearr_17141_17171[(2)] = null);

(statearr_17141_17171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (4))){
var inst_17102 = (state_17138[(7)]);
var inst_17104 = (inst_17102 < cnt);
var state_17138__$1 = state_17138;
if(cljs.core.truth_(inst_17104)){
var statearr_17142_17172 = state_17138__$1;
(statearr_17142_17172[(1)] = (6));

} else {
var statearr_17143_17173 = state_17138__$1;
(statearr_17143_17173[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (15))){
var inst_17134 = (state_17138[(2)]);
var state_17138__$1 = state_17138;
var statearr_17144_17174 = state_17138__$1;
(statearr_17144_17174[(2)] = inst_17134);

(statearr_17144_17174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (13))){
var inst_17127 = cljs.core.async.close_BANG_.call(null,out);
var state_17138__$1 = state_17138;
var statearr_17145_17175 = state_17138__$1;
(statearr_17145_17175[(2)] = inst_17127);

(statearr_17145_17175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (6))){
var state_17138__$1 = state_17138;
var statearr_17146_17176 = state_17138__$1;
(statearr_17146_17176[(2)] = null);

(statearr_17146_17176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (3))){
var inst_17136 = (state_17138[(2)]);
var state_17138__$1 = state_17138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17138__$1,inst_17136);
} else {
if((state_val_17139 === (12))){
var inst_17124 = (state_17138[(8)]);
var inst_17124__$1 = (state_17138[(2)]);
var inst_17125 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17124__$1);
var state_17138__$1 = (function (){var statearr_17147 = state_17138;
(statearr_17147[(8)] = inst_17124__$1);

return statearr_17147;
})();
if(cljs.core.truth_(inst_17125)){
var statearr_17148_17177 = state_17138__$1;
(statearr_17148_17177[(1)] = (13));

} else {
var statearr_17149_17178 = state_17138__$1;
(statearr_17149_17178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (2))){
var inst_17101 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17102 = (0);
var state_17138__$1 = (function (){var statearr_17150 = state_17138;
(statearr_17150[(9)] = inst_17101);

(statearr_17150[(7)] = inst_17102);

return statearr_17150;
})();
var statearr_17151_17179 = state_17138__$1;
(statearr_17151_17179[(2)] = null);

(statearr_17151_17179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (11))){
var inst_17102 = (state_17138[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17138,(10),Object,null,(9));
var inst_17111 = chs__$1.call(null,inst_17102);
var inst_17112 = done.call(null,inst_17102);
var inst_17113 = cljs.core.async.take_BANG_.call(null,inst_17111,inst_17112);
var state_17138__$1 = state_17138;
var statearr_17152_17180 = state_17138__$1;
(statearr_17152_17180[(2)] = inst_17113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17138__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (9))){
var inst_17102 = (state_17138[(7)]);
var inst_17115 = (state_17138[(2)]);
var inst_17116 = (inst_17102 + (1));
var inst_17102__$1 = inst_17116;
var state_17138__$1 = (function (){var statearr_17153 = state_17138;
(statearr_17153[(10)] = inst_17115);

(statearr_17153[(7)] = inst_17102__$1);

return statearr_17153;
})();
var statearr_17154_17181 = state_17138__$1;
(statearr_17154_17181[(2)] = null);

(statearr_17154_17181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (5))){
var inst_17122 = (state_17138[(2)]);
var state_17138__$1 = (function (){var statearr_17155 = state_17138;
(statearr_17155[(11)] = inst_17122);

return statearr_17155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17138__$1,(12),dchan);
} else {
if((state_val_17139 === (14))){
var inst_17124 = (state_17138[(8)]);
var inst_17129 = cljs.core.apply.call(null,f,inst_17124);
var state_17138__$1 = state_17138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17138__$1,(16),out,inst_17129);
} else {
if((state_val_17139 === (16))){
var inst_17131 = (state_17138[(2)]);
var state_17138__$1 = (function (){var statearr_17156 = state_17138;
(statearr_17156[(12)] = inst_17131);

return statearr_17156;
})();
var statearr_17157_17182 = state_17138__$1;
(statearr_17157_17182[(2)] = null);

(statearr_17157_17182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (10))){
var inst_17106 = (state_17138[(2)]);
var inst_17107 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17138__$1 = (function (){var statearr_17158 = state_17138;
(statearr_17158[(13)] = inst_17106);

return statearr_17158;
})();
var statearr_17159_17183 = state_17138__$1;
(statearr_17159_17183[(2)] = inst_17107);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17138__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (8))){
var inst_17120 = (state_17138[(2)]);
var state_17138__$1 = state_17138;
var statearr_17160_17184 = state_17138__$1;
(statearr_17160_17184[(2)] = inst_17120);

(statearr_17160_17184[(1)] = (5));


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
});})(c__8199__auto___17169,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8137__auto__,c__8199__auto___17169,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17164[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17164[(1)] = (1));

return statearr_17164;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17138){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17165){if((e17165 instanceof Object)){
var ex__8141__auto__ = e17165;
var statearr_17166_17185 = state_17138;
(statearr_17166_17185[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17186 = state_17138;
state_17138 = G__17186;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17169,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8201__auto__ = (function (){var statearr_17167 = f__8200__auto__.call(null);
(statearr_17167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17169);

return statearr_17167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17169,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17189 = arguments.length;
switch (G__17189) {
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
var c__8199__auto___17244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17244,out){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17244,out){
return (function (state_17219){
var state_val_17220 = (state_17219[(1)]);
if((state_val_17220 === (7))){
var inst_17198 = (state_17219[(7)]);
var inst_17199 = (state_17219[(8)]);
var inst_17198__$1 = (state_17219[(2)]);
var inst_17199__$1 = cljs.core.nth.call(null,inst_17198__$1,(0),null);
var inst_17200 = cljs.core.nth.call(null,inst_17198__$1,(1),null);
var inst_17201 = (inst_17199__$1 == null);
var state_17219__$1 = (function (){var statearr_17221 = state_17219;
(statearr_17221[(7)] = inst_17198__$1);

(statearr_17221[(9)] = inst_17200);

(statearr_17221[(8)] = inst_17199__$1);

return statearr_17221;
})();
if(cljs.core.truth_(inst_17201)){
var statearr_17222_17245 = state_17219__$1;
(statearr_17222_17245[(1)] = (8));

} else {
var statearr_17223_17246 = state_17219__$1;
(statearr_17223_17246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (1))){
var inst_17190 = cljs.core.vec.call(null,chs);
var inst_17191 = inst_17190;
var state_17219__$1 = (function (){var statearr_17224 = state_17219;
(statearr_17224[(10)] = inst_17191);

return statearr_17224;
})();
var statearr_17225_17247 = state_17219__$1;
(statearr_17225_17247[(2)] = null);

(statearr_17225_17247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (4))){
var inst_17191 = (state_17219[(10)]);
var state_17219__$1 = state_17219;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17219__$1,(7),inst_17191);
} else {
if((state_val_17220 === (6))){
var inst_17215 = (state_17219[(2)]);
var state_17219__$1 = state_17219;
var statearr_17226_17248 = state_17219__$1;
(statearr_17226_17248[(2)] = inst_17215);

(statearr_17226_17248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (3))){
var inst_17217 = (state_17219[(2)]);
var state_17219__$1 = state_17219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17219__$1,inst_17217);
} else {
if((state_val_17220 === (2))){
var inst_17191 = (state_17219[(10)]);
var inst_17193 = cljs.core.count.call(null,inst_17191);
var inst_17194 = (inst_17193 > (0));
var state_17219__$1 = state_17219;
if(cljs.core.truth_(inst_17194)){
var statearr_17228_17249 = state_17219__$1;
(statearr_17228_17249[(1)] = (4));

} else {
var statearr_17229_17250 = state_17219__$1;
(statearr_17229_17250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (11))){
var inst_17191 = (state_17219[(10)]);
var inst_17208 = (state_17219[(2)]);
var tmp17227 = inst_17191;
var inst_17191__$1 = tmp17227;
var state_17219__$1 = (function (){var statearr_17230 = state_17219;
(statearr_17230[(10)] = inst_17191__$1);

(statearr_17230[(11)] = inst_17208);

return statearr_17230;
})();
var statearr_17231_17251 = state_17219__$1;
(statearr_17231_17251[(2)] = null);

(statearr_17231_17251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (9))){
var inst_17199 = (state_17219[(8)]);
var state_17219__$1 = state_17219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17219__$1,(11),out,inst_17199);
} else {
if((state_val_17220 === (5))){
var inst_17213 = cljs.core.async.close_BANG_.call(null,out);
var state_17219__$1 = state_17219;
var statearr_17232_17252 = state_17219__$1;
(statearr_17232_17252[(2)] = inst_17213);

(statearr_17232_17252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (10))){
var inst_17211 = (state_17219[(2)]);
var state_17219__$1 = state_17219;
var statearr_17233_17253 = state_17219__$1;
(statearr_17233_17253[(2)] = inst_17211);

(statearr_17233_17253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (8))){
var inst_17198 = (state_17219[(7)]);
var inst_17200 = (state_17219[(9)]);
var inst_17199 = (state_17219[(8)]);
var inst_17191 = (state_17219[(10)]);
var inst_17203 = (function (){var c = inst_17200;
var v = inst_17199;
var vec__17196 = inst_17198;
var cs = inst_17191;
return ((function (c,v,vec__17196,cs,inst_17198,inst_17200,inst_17199,inst_17191,state_val_17220,c__8199__auto___17244,out){
return (function (p1__17187_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17187_SHARP_);
});
;})(c,v,vec__17196,cs,inst_17198,inst_17200,inst_17199,inst_17191,state_val_17220,c__8199__auto___17244,out))
})();
var inst_17204 = cljs.core.filterv.call(null,inst_17203,inst_17191);
var inst_17191__$1 = inst_17204;
var state_17219__$1 = (function (){var statearr_17234 = state_17219;
(statearr_17234[(10)] = inst_17191__$1);

return statearr_17234;
})();
var statearr_17235_17254 = state_17219__$1;
(statearr_17235_17254[(2)] = null);

(statearr_17235_17254[(1)] = (2));


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
});})(c__8199__auto___17244,out))
;
return ((function (switch__8137__auto__,c__8199__auto___17244,out){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17239 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17239[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17239[(1)] = (1));

return statearr_17239;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17219){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17240){if((e17240 instanceof Object)){
var ex__8141__auto__ = e17240;
var statearr_17241_17255 = state_17219;
(statearr_17241_17255[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17256 = state_17219;
state_17219 = G__17256;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17244,out))
})();
var state__8201__auto__ = (function (){var statearr_17242 = f__8200__auto__.call(null);
(statearr_17242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17244);

return statearr_17242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17244,out))
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
var G__17258 = arguments.length;
switch (G__17258) {
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
var c__8199__auto___17306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17306,out){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17306,out){
return (function (state_17282){
var state_val_17283 = (state_17282[(1)]);
if((state_val_17283 === (7))){
var inst_17264 = (state_17282[(7)]);
var inst_17264__$1 = (state_17282[(2)]);
var inst_17265 = (inst_17264__$1 == null);
var inst_17266 = cljs.core.not.call(null,inst_17265);
var state_17282__$1 = (function (){var statearr_17284 = state_17282;
(statearr_17284[(7)] = inst_17264__$1);

return statearr_17284;
})();
if(inst_17266){
var statearr_17285_17307 = state_17282__$1;
(statearr_17285_17307[(1)] = (8));

} else {
var statearr_17286_17308 = state_17282__$1;
(statearr_17286_17308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (1))){
var inst_17259 = (0);
var state_17282__$1 = (function (){var statearr_17287 = state_17282;
(statearr_17287[(8)] = inst_17259);

return statearr_17287;
})();
var statearr_17288_17309 = state_17282__$1;
(statearr_17288_17309[(2)] = null);

(statearr_17288_17309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (4))){
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17282__$1,(7),ch);
} else {
if((state_val_17283 === (6))){
var inst_17277 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17289_17310 = state_17282__$1;
(statearr_17289_17310[(2)] = inst_17277);

(statearr_17289_17310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (3))){
var inst_17279 = (state_17282[(2)]);
var inst_17280 = cljs.core.async.close_BANG_.call(null,out);
var state_17282__$1 = (function (){var statearr_17290 = state_17282;
(statearr_17290[(9)] = inst_17279);

return statearr_17290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17282__$1,inst_17280);
} else {
if((state_val_17283 === (2))){
var inst_17259 = (state_17282[(8)]);
var inst_17261 = (inst_17259 < n);
var state_17282__$1 = state_17282;
if(cljs.core.truth_(inst_17261)){
var statearr_17291_17311 = state_17282__$1;
(statearr_17291_17311[(1)] = (4));

} else {
var statearr_17292_17312 = state_17282__$1;
(statearr_17292_17312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (11))){
var inst_17259 = (state_17282[(8)]);
var inst_17269 = (state_17282[(2)]);
var inst_17270 = (inst_17259 + (1));
var inst_17259__$1 = inst_17270;
var state_17282__$1 = (function (){var statearr_17293 = state_17282;
(statearr_17293[(8)] = inst_17259__$1);

(statearr_17293[(10)] = inst_17269);

return statearr_17293;
})();
var statearr_17294_17313 = state_17282__$1;
(statearr_17294_17313[(2)] = null);

(statearr_17294_17313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (9))){
var state_17282__$1 = state_17282;
var statearr_17295_17314 = state_17282__$1;
(statearr_17295_17314[(2)] = null);

(statearr_17295_17314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (5))){
var state_17282__$1 = state_17282;
var statearr_17296_17315 = state_17282__$1;
(statearr_17296_17315[(2)] = null);

(statearr_17296_17315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (10))){
var inst_17274 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17297_17316 = state_17282__$1;
(statearr_17297_17316[(2)] = inst_17274);

(statearr_17297_17316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (8))){
var inst_17264 = (state_17282[(7)]);
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17282__$1,(11),out,inst_17264);
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
});})(c__8199__auto___17306,out))
;
return ((function (switch__8137__auto__,c__8199__auto___17306,out){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17301[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17301[(1)] = (1));

return statearr_17301;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17282){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17302){if((e17302 instanceof Object)){
var ex__8141__auto__ = e17302;
var statearr_17303_17317 = state_17282;
(statearr_17303_17317[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17318 = state_17282;
state_17282 = G__17318;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17306,out))
})();
var state__8201__auto__ = (function (){var statearr_17304 = f__8200__auto__.call(null);
(statearr_17304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17306);

return statearr_17304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17306,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t17326 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17326 = (function (ch,f,map_LT_,meta17327){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17327 = meta17327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17329 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17329 = (function (fn1,_,meta17327,map_LT_,f,ch,meta17330){
this.fn1 = fn1;
this._ = _;
this.meta17327 = meta17327;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17330 = meta17330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17329.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17319_SHARP_){
return f1.call(null,(((p1__17319_SHARP_ == null))?null:self__.f.call(null,p1__17319_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17331){
var self__ = this;
var _17331__$1 = this;
return self__.meta17330;
});})(___$1))
;

cljs.core.async.t17329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17331,meta17330__$1){
var self__ = this;
var _17331__$1 = this;
return (new cljs.core.async.t17329(self__.fn1,self__._,self__.meta17327,self__.map_LT_,self__.f,self__.ch,meta17330__$1));
});})(___$1))
;

cljs.core.async.t17329.cljs$lang$type = true;

cljs.core.async.t17329.cljs$lang$ctorStr = "cljs.core.async/t17329";

cljs.core.async.t17329.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t17329");
});})(___$1))
;

cljs.core.async.__GT_t17329 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t17329(fn1__$1,___$2,meta17327__$1,map_LT___$1,f__$1,ch__$1,meta17330){
return (new cljs.core.async.t17329(fn1__$1,___$2,meta17327__$1,map_LT___$1,f__$1,ch__$1,meta17330));
});})(___$1))
;

}

return (new cljs.core.async.t17329(fn1,___$1,self__.meta17327,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17328){
var self__ = this;
var _17328__$1 = this;
return self__.meta17327;
});

cljs.core.async.t17326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17328,meta17327__$1){
var self__ = this;
var _17328__$1 = this;
return (new cljs.core.async.t17326(self__.ch,self__.f,self__.map_LT_,meta17327__$1));
});

cljs.core.async.t17326.cljs$lang$type = true;

cljs.core.async.t17326.cljs$lang$ctorStr = "cljs.core.async/t17326";

cljs.core.async.t17326.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t17326");
});

cljs.core.async.__GT_t17326 = (function cljs$core$async$map_LT__$___GT_t17326(ch__$1,f__$1,map_LT___$1,meta17327){
return (new cljs.core.async.t17326(ch__$1,f__$1,map_LT___$1,meta17327));
});

}

return (new cljs.core.async.t17326(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t17335 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17335 = (function (ch,f,map_GT_,meta17336){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17336 = meta17336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17335.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17337){
var self__ = this;
var _17337__$1 = this;
return self__.meta17336;
});

cljs.core.async.t17335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17337,meta17336__$1){
var self__ = this;
var _17337__$1 = this;
return (new cljs.core.async.t17335(self__.ch,self__.f,self__.map_GT_,meta17336__$1));
});

cljs.core.async.t17335.cljs$lang$type = true;

cljs.core.async.t17335.cljs$lang$ctorStr = "cljs.core.async/t17335";

cljs.core.async.t17335.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t17335");
});

cljs.core.async.__GT_t17335 = (function cljs$core$async$map_GT__$___GT_t17335(ch__$1,f__$1,map_GT___$1,meta17336){
return (new cljs.core.async.t17335(ch__$1,f__$1,map_GT___$1,meta17336));
});

}

return (new cljs.core.async.t17335(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t17341 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17341 = (function (ch,p,filter_GT_,meta17342){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17342 = meta17342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17341.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17343){
var self__ = this;
var _17343__$1 = this;
return self__.meta17342;
});

cljs.core.async.t17341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17343,meta17342__$1){
var self__ = this;
var _17343__$1 = this;
return (new cljs.core.async.t17341(self__.ch,self__.p,self__.filter_GT_,meta17342__$1));
});

cljs.core.async.t17341.cljs$lang$type = true;

cljs.core.async.t17341.cljs$lang$ctorStr = "cljs.core.async/t17341";

cljs.core.async.t17341.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t17341");
});

cljs.core.async.__GT_t17341 = (function cljs$core$async$filter_GT__$___GT_t17341(ch__$1,p__$1,filter_GT___$1,meta17342){
return (new cljs.core.async.t17341(ch__$1,p__$1,filter_GT___$1,meta17342));
});

}

return (new cljs.core.async.t17341(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17345 = arguments.length;
switch (G__17345) {
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
var c__8199__auto___17388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17388,out){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17388,out){
return (function (state_17366){
var state_val_17367 = (state_17366[(1)]);
if((state_val_17367 === (7))){
var inst_17362 = (state_17366[(2)]);
var state_17366__$1 = state_17366;
var statearr_17368_17389 = state_17366__$1;
(statearr_17368_17389[(2)] = inst_17362);

(statearr_17368_17389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (1))){
var state_17366__$1 = state_17366;
var statearr_17369_17390 = state_17366__$1;
(statearr_17369_17390[(2)] = null);

(statearr_17369_17390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (4))){
var inst_17348 = (state_17366[(7)]);
var inst_17348__$1 = (state_17366[(2)]);
var inst_17349 = (inst_17348__$1 == null);
var state_17366__$1 = (function (){var statearr_17370 = state_17366;
(statearr_17370[(7)] = inst_17348__$1);

return statearr_17370;
})();
if(cljs.core.truth_(inst_17349)){
var statearr_17371_17391 = state_17366__$1;
(statearr_17371_17391[(1)] = (5));

} else {
var statearr_17372_17392 = state_17366__$1;
(statearr_17372_17392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (6))){
var inst_17348 = (state_17366[(7)]);
var inst_17353 = p.call(null,inst_17348);
var state_17366__$1 = state_17366;
if(cljs.core.truth_(inst_17353)){
var statearr_17373_17393 = state_17366__$1;
(statearr_17373_17393[(1)] = (8));

} else {
var statearr_17374_17394 = state_17366__$1;
(statearr_17374_17394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (3))){
var inst_17364 = (state_17366[(2)]);
var state_17366__$1 = state_17366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17366__$1,inst_17364);
} else {
if((state_val_17367 === (2))){
var state_17366__$1 = state_17366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17366__$1,(4),ch);
} else {
if((state_val_17367 === (11))){
var inst_17356 = (state_17366[(2)]);
var state_17366__$1 = state_17366;
var statearr_17375_17395 = state_17366__$1;
(statearr_17375_17395[(2)] = inst_17356);

(statearr_17375_17395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (9))){
var state_17366__$1 = state_17366;
var statearr_17376_17396 = state_17366__$1;
(statearr_17376_17396[(2)] = null);

(statearr_17376_17396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (5))){
var inst_17351 = cljs.core.async.close_BANG_.call(null,out);
var state_17366__$1 = state_17366;
var statearr_17377_17397 = state_17366__$1;
(statearr_17377_17397[(2)] = inst_17351);

(statearr_17377_17397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (10))){
var inst_17359 = (state_17366[(2)]);
var state_17366__$1 = (function (){var statearr_17378 = state_17366;
(statearr_17378[(8)] = inst_17359);

return statearr_17378;
})();
var statearr_17379_17398 = state_17366__$1;
(statearr_17379_17398[(2)] = null);

(statearr_17379_17398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17367 === (8))){
var inst_17348 = (state_17366[(7)]);
var state_17366__$1 = state_17366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17366__$1,(11),out,inst_17348);
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
});})(c__8199__auto___17388,out))
;
return ((function (switch__8137__auto__,c__8199__auto___17388,out){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17383 = [null,null,null,null,null,null,null,null,null];
(statearr_17383[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17383[(1)] = (1));

return statearr_17383;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17366){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17384){if((e17384 instanceof Object)){
var ex__8141__auto__ = e17384;
var statearr_17385_17399 = state_17366;
(statearr_17385_17399[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17400 = state_17366;
state_17366 = G__17400;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17388,out))
})();
var state__8201__auto__ = (function (){var statearr_17386 = f__8200__auto__.call(null);
(statearr_17386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17388);

return statearr_17386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17388,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__17402 = arguments.length;
switch (G__17402) {
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
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__){
return (function (state_17569){
var state_val_17570 = (state_17569[(1)]);
if((state_val_17570 === (7))){
var inst_17565 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
var statearr_17571_17612 = state_17569__$1;
(statearr_17571_17612[(2)] = inst_17565);

(statearr_17571_17612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (20))){
var inst_17535 = (state_17569[(7)]);
var inst_17546 = (state_17569[(2)]);
var inst_17547 = cljs.core.next.call(null,inst_17535);
var inst_17521 = inst_17547;
var inst_17522 = null;
var inst_17523 = (0);
var inst_17524 = (0);
var state_17569__$1 = (function (){var statearr_17572 = state_17569;
(statearr_17572[(8)] = inst_17523);

(statearr_17572[(9)] = inst_17524);

(statearr_17572[(10)] = inst_17546);

(statearr_17572[(11)] = inst_17522);

(statearr_17572[(12)] = inst_17521);

return statearr_17572;
})();
var statearr_17573_17613 = state_17569__$1;
(statearr_17573_17613[(2)] = null);

(statearr_17573_17613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (1))){
var state_17569__$1 = state_17569;
var statearr_17574_17614 = state_17569__$1;
(statearr_17574_17614[(2)] = null);

(statearr_17574_17614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (4))){
var inst_17510 = (state_17569[(13)]);
var inst_17510__$1 = (state_17569[(2)]);
var inst_17511 = (inst_17510__$1 == null);
var state_17569__$1 = (function (){var statearr_17575 = state_17569;
(statearr_17575[(13)] = inst_17510__$1);

return statearr_17575;
})();
if(cljs.core.truth_(inst_17511)){
var statearr_17576_17615 = state_17569__$1;
(statearr_17576_17615[(1)] = (5));

} else {
var statearr_17577_17616 = state_17569__$1;
(statearr_17577_17616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (15))){
var state_17569__$1 = state_17569;
var statearr_17581_17617 = state_17569__$1;
(statearr_17581_17617[(2)] = null);

(statearr_17581_17617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (21))){
var state_17569__$1 = state_17569;
var statearr_17582_17618 = state_17569__$1;
(statearr_17582_17618[(2)] = null);

(statearr_17582_17618[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (13))){
var inst_17523 = (state_17569[(8)]);
var inst_17524 = (state_17569[(9)]);
var inst_17522 = (state_17569[(11)]);
var inst_17521 = (state_17569[(12)]);
var inst_17531 = (state_17569[(2)]);
var inst_17532 = (inst_17524 + (1));
var tmp17578 = inst_17523;
var tmp17579 = inst_17522;
var tmp17580 = inst_17521;
var inst_17521__$1 = tmp17580;
var inst_17522__$1 = tmp17579;
var inst_17523__$1 = tmp17578;
var inst_17524__$1 = inst_17532;
var state_17569__$1 = (function (){var statearr_17583 = state_17569;
(statearr_17583[(8)] = inst_17523__$1);

(statearr_17583[(9)] = inst_17524__$1);

(statearr_17583[(14)] = inst_17531);

(statearr_17583[(11)] = inst_17522__$1);

(statearr_17583[(12)] = inst_17521__$1);

return statearr_17583;
})();
var statearr_17584_17619 = state_17569__$1;
(statearr_17584_17619[(2)] = null);

(statearr_17584_17619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (22))){
var state_17569__$1 = state_17569;
var statearr_17585_17620 = state_17569__$1;
(statearr_17585_17620[(2)] = null);

(statearr_17585_17620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (6))){
var inst_17510 = (state_17569[(13)]);
var inst_17519 = f.call(null,inst_17510);
var inst_17520 = cljs.core.seq.call(null,inst_17519);
var inst_17521 = inst_17520;
var inst_17522 = null;
var inst_17523 = (0);
var inst_17524 = (0);
var state_17569__$1 = (function (){var statearr_17586 = state_17569;
(statearr_17586[(8)] = inst_17523);

(statearr_17586[(9)] = inst_17524);

(statearr_17586[(11)] = inst_17522);

(statearr_17586[(12)] = inst_17521);

return statearr_17586;
})();
var statearr_17587_17621 = state_17569__$1;
(statearr_17587_17621[(2)] = null);

(statearr_17587_17621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (17))){
var inst_17535 = (state_17569[(7)]);
var inst_17539 = cljs.core.chunk_first.call(null,inst_17535);
var inst_17540 = cljs.core.chunk_rest.call(null,inst_17535);
var inst_17541 = cljs.core.count.call(null,inst_17539);
var inst_17521 = inst_17540;
var inst_17522 = inst_17539;
var inst_17523 = inst_17541;
var inst_17524 = (0);
var state_17569__$1 = (function (){var statearr_17588 = state_17569;
(statearr_17588[(8)] = inst_17523);

(statearr_17588[(9)] = inst_17524);

(statearr_17588[(11)] = inst_17522);

(statearr_17588[(12)] = inst_17521);

return statearr_17588;
})();
var statearr_17589_17622 = state_17569__$1;
(statearr_17589_17622[(2)] = null);

(statearr_17589_17622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (3))){
var inst_17567 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17569__$1,inst_17567);
} else {
if((state_val_17570 === (12))){
var inst_17555 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
var statearr_17590_17623 = state_17569__$1;
(statearr_17590_17623[(2)] = inst_17555);

(statearr_17590_17623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (2))){
var state_17569__$1 = state_17569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17569__$1,(4),in$);
} else {
if((state_val_17570 === (23))){
var inst_17563 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
var statearr_17591_17624 = state_17569__$1;
(statearr_17591_17624[(2)] = inst_17563);

(statearr_17591_17624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (19))){
var inst_17550 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
var statearr_17592_17625 = state_17569__$1;
(statearr_17592_17625[(2)] = inst_17550);

(statearr_17592_17625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (11))){
var inst_17521 = (state_17569[(12)]);
var inst_17535 = (state_17569[(7)]);
var inst_17535__$1 = cljs.core.seq.call(null,inst_17521);
var state_17569__$1 = (function (){var statearr_17593 = state_17569;
(statearr_17593[(7)] = inst_17535__$1);

return statearr_17593;
})();
if(inst_17535__$1){
var statearr_17594_17626 = state_17569__$1;
(statearr_17594_17626[(1)] = (14));

} else {
var statearr_17595_17627 = state_17569__$1;
(statearr_17595_17627[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (9))){
var inst_17557 = (state_17569[(2)]);
var inst_17558 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17569__$1 = (function (){var statearr_17596 = state_17569;
(statearr_17596[(15)] = inst_17557);

return statearr_17596;
})();
if(cljs.core.truth_(inst_17558)){
var statearr_17597_17628 = state_17569__$1;
(statearr_17597_17628[(1)] = (21));

} else {
var statearr_17598_17629 = state_17569__$1;
(statearr_17598_17629[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (5))){
var inst_17513 = cljs.core.async.close_BANG_.call(null,out);
var state_17569__$1 = state_17569;
var statearr_17599_17630 = state_17569__$1;
(statearr_17599_17630[(2)] = inst_17513);

(statearr_17599_17630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (14))){
var inst_17535 = (state_17569[(7)]);
var inst_17537 = cljs.core.chunked_seq_QMARK_.call(null,inst_17535);
var state_17569__$1 = state_17569;
if(inst_17537){
var statearr_17600_17631 = state_17569__$1;
(statearr_17600_17631[(1)] = (17));

} else {
var statearr_17601_17632 = state_17569__$1;
(statearr_17601_17632[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (16))){
var inst_17553 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
var statearr_17602_17633 = state_17569__$1;
(statearr_17602_17633[(2)] = inst_17553);

(statearr_17602_17633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (10))){
var inst_17524 = (state_17569[(9)]);
var inst_17522 = (state_17569[(11)]);
var inst_17529 = cljs.core._nth.call(null,inst_17522,inst_17524);
var state_17569__$1 = state_17569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17569__$1,(13),out,inst_17529);
} else {
if((state_val_17570 === (18))){
var inst_17535 = (state_17569[(7)]);
var inst_17544 = cljs.core.first.call(null,inst_17535);
var state_17569__$1 = state_17569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17569__$1,(20),out,inst_17544);
} else {
if((state_val_17570 === (8))){
var inst_17523 = (state_17569[(8)]);
var inst_17524 = (state_17569[(9)]);
var inst_17526 = (inst_17524 < inst_17523);
var inst_17527 = inst_17526;
var state_17569__$1 = state_17569;
if(cljs.core.truth_(inst_17527)){
var statearr_17603_17634 = state_17569__$1;
(statearr_17603_17634[(1)] = (10));

} else {
var statearr_17604_17635 = state_17569__$1;
(statearr_17604_17635[(1)] = (11));

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
});})(c__8199__auto__))
;
return ((function (switch__8137__auto__,c__8199__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8138__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8138__auto____0 = (function (){
var statearr_17608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17608[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8138__auto__);

(statearr_17608[(1)] = (1));

return statearr_17608;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8138__auto____1 = (function (state_17569){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17609){if((e17609 instanceof Object)){
var ex__8141__auto__ = e17609;
var statearr_17610_17636 = state_17569;
(statearr_17610_17636[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17637 = state_17569;
state_17569 = G__17637;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8138__auto__ = function(state_17569){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8138__auto____1.call(this,state_17569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8138__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8138__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__))
})();
var state__8201__auto__ = (function (){var statearr_17611 = f__8200__auto__.call(null);
(statearr_17611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_17611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__))
);

return c__8199__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__17639 = arguments.length;
switch (G__17639) {
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
var G__17642 = arguments.length;
switch (G__17642) {
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
var G__17645 = arguments.length;
switch (G__17645) {
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
var c__8199__auto___17695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17695,out){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17695,out){
return (function (state_17669){
var state_val_17670 = (state_17669[(1)]);
if((state_val_17670 === (7))){
var inst_17664 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
var statearr_17671_17696 = state_17669__$1;
(statearr_17671_17696[(2)] = inst_17664);

(statearr_17671_17696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (1))){
var inst_17646 = null;
var state_17669__$1 = (function (){var statearr_17672 = state_17669;
(statearr_17672[(7)] = inst_17646);

return statearr_17672;
})();
var statearr_17673_17697 = state_17669__$1;
(statearr_17673_17697[(2)] = null);

(statearr_17673_17697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (4))){
var inst_17649 = (state_17669[(8)]);
var inst_17649__$1 = (state_17669[(2)]);
var inst_17650 = (inst_17649__$1 == null);
var inst_17651 = cljs.core.not.call(null,inst_17650);
var state_17669__$1 = (function (){var statearr_17674 = state_17669;
(statearr_17674[(8)] = inst_17649__$1);

return statearr_17674;
})();
if(inst_17651){
var statearr_17675_17698 = state_17669__$1;
(statearr_17675_17698[(1)] = (5));

} else {
var statearr_17676_17699 = state_17669__$1;
(statearr_17676_17699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (6))){
var state_17669__$1 = state_17669;
var statearr_17677_17700 = state_17669__$1;
(statearr_17677_17700[(2)] = null);

(statearr_17677_17700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (3))){
var inst_17666 = (state_17669[(2)]);
var inst_17667 = cljs.core.async.close_BANG_.call(null,out);
var state_17669__$1 = (function (){var statearr_17678 = state_17669;
(statearr_17678[(9)] = inst_17666);

return statearr_17678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17669__$1,inst_17667);
} else {
if((state_val_17670 === (2))){
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17669__$1,(4),ch);
} else {
if((state_val_17670 === (11))){
var inst_17649 = (state_17669[(8)]);
var inst_17658 = (state_17669[(2)]);
var inst_17646 = inst_17649;
var state_17669__$1 = (function (){var statearr_17679 = state_17669;
(statearr_17679[(10)] = inst_17658);

(statearr_17679[(7)] = inst_17646);

return statearr_17679;
})();
var statearr_17680_17701 = state_17669__$1;
(statearr_17680_17701[(2)] = null);

(statearr_17680_17701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (9))){
var inst_17649 = (state_17669[(8)]);
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17669__$1,(11),out,inst_17649);
} else {
if((state_val_17670 === (5))){
var inst_17646 = (state_17669[(7)]);
var inst_17649 = (state_17669[(8)]);
var inst_17653 = cljs.core._EQ_.call(null,inst_17649,inst_17646);
var state_17669__$1 = state_17669;
if(inst_17653){
var statearr_17682_17702 = state_17669__$1;
(statearr_17682_17702[(1)] = (8));

} else {
var statearr_17683_17703 = state_17669__$1;
(statearr_17683_17703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (10))){
var inst_17661 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
var statearr_17684_17704 = state_17669__$1;
(statearr_17684_17704[(2)] = inst_17661);

(statearr_17684_17704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (8))){
var inst_17646 = (state_17669[(7)]);
var tmp17681 = inst_17646;
var inst_17646__$1 = tmp17681;
var state_17669__$1 = (function (){var statearr_17685 = state_17669;
(statearr_17685[(7)] = inst_17646__$1);

return statearr_17685;
})();
var statearr_17686_17705 = state_17669__$1;
(statearr_17686_17705[(2)] = null);

(statearr_17686_17705[(1)] = (2));


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
});})(c__8199__auto___17695,out))
;
return ((function (switch__8137__auto__,c__8199__auto___17695,out){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17690[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17690[(1)] = (1));

return statearr_17690;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17669){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17691){if((e17691 instanceof Object)){
var ex__8141__auto__ = e17691;
var statearr_17692_17706 = state_17669;
(statearr_17692_17706[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17707 = state_17669;
state_17669 = G__17707;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17695,out))
})();
var state__8201__auto__ = (function (){var statearr_17693 = f__8200__auto__.call(null);
(statearr_17693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17695);

return statearr_17693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17695,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__17709 = arguments.length;
switch (G__17709) {
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
var c__8199__auto___17778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17778,out){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17778,out){
return (function (state_17747){
var state_val_17748 = (state_17747[(1)]);
if((state_val_17748 === (7))){
var inst_17743 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17749_17779 = state_17747__$1;
(statearr_17749_17779[(2)] = inst_17743);

(statearr_17749_17779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (1))){
var inst_17710 = (new Array(n));
var inst_17711 = inst_17710;
var inst_17712 = (0);
var state_17747__$1 = (function (){var statearr_17750 = state_17747;
(statearr_17750[(7)] = inst_17711);

(statearr_17750[(8)] = inst_17712);

return statearr_17750;
})();
var statearr_17751_17780 = state_17747__$1;
(statearr_17751_17780[(2)] = null);

(statearr_17751_17780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (4))){
var inst_17715 = (state_17747[(9)]);
var inst_17715__$1 = (state_17747[(2)]);
var inst_17716 = (inst_17715__$1 == null);
var inst_17717 = cljs.core.not.call(null,inst_17716);
var state_17747__$1 = (function (){var statearr_17752 = state_17747;
(statearr_17752[(9)] = inst_17715__$1);

return statearr_17752;
})();
if(inst_17717){
var statearr_17753_17781 = state_17747__$1;
(statearr_17753_17781[(1)] = (5));

} else {
var statearr_17754_17782 = state_17747__$1;
(statearr_17754_17782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (15))){
var inst_17737 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17755_17783 = state_17747__$1;
(statearr_17755_17783[(2)] = inst_17737);

(statearr_17755_17783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (13))){
var state_17747__$1 = state_17747;
var statearr_17756_17784 = state_17747__$1;
(statearr_17756_17784[(2)] = null);

(statearr_17756_17784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (6))){
var inst_17712 = (state_17747[(8)]);
var inst_17733 = (inst_17712 > (0));
var state_17747__$1 = state_17747;
if(cljs.core.truth_(inst_17733)){
var statearr_17757_17785 = state_17747__$1;
(statearr_17757_17785[(1)] = (12));

} else {
var statearr_17758_17786 = state_17747__$1;
(statearr_17758_17786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (3))){
var inst_17745 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17747__$1,inst_17745);
} else {
if((state_val_17748 === (12))){
var inst_17711 = (state_17747[(7)]);
var inst_17735 = cljs.core.vec.call(null,inst_17711);
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17747__$1,(15),out,inst_17735);
} else {
if((state_val_17748 === (2))){
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17747__$1,(4),ch);
} else {
if((state_val_17748 === (11))){
var inst_17727 = (state_17747[(2)]);
var inst_17728 = (new Array(n));
var inst_17711 = inst_17728;
var inst_17712 = (0);
var state_17747__$1 = (function (){var statearr_17759 = state_17747;
(statearr_17759[(10)] = inst_17727);

(statearr_17759[(7)] = inst_17711);

(statearr_17759[(8)] = inst_17712);

return statearr_17759;
})();
var statearr_17760_17787 = state_17747__$1;
(statearr_17760_17787[(2)] = null);

(statearr_17760_17787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (9))){
var inst_17711 = (state_17747[(7)]);
var inst_17725 = cljs.core.vec.call(null,inst_17711);
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17747__$1,(11),out,inst_17725);
} else {
if((state_val_17748 === (5))){
var inst_17720 = (state_17747[(11)]);
var inst_17711 = (state_17747[(7)]);
var inst_17712 = (state_17747[(8)]);
var inst_17715 = (state_17747[(9)]);
var inst_17719 = (inst_17711[inst_17712] = inst_17715);
var inst_17720__$1 = (inst_17712 + (1));
var inst_17721 = (inst_17720__$1 < n);
var state_17747__$1 = (function (){var statearr_17761 = state_17747;
(statearr_17761[(11)] = inst_17720__$1);

(statearr_17761[(12)] = inst_17719);

return statearr_17761;
})();
if(cljs.core.truth_(inst_17721)){
var statearr_17762_17788 = state_17747__$1;
(statearr_17762_17788[(1)] = (8));

} else {
var statearr_17763_17789 = state_17747__$1;
(statearr_17763_17789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (14))){
var inst_17740 = (state_17747[(2)]);
var inst_17741 = cljs.core.async.close_BANG_.call(null,out);
var state_17747__$1 = (function (){var statearr_17765 = state_17747;
(statearr_17765[(13)] = inst_17740);

return statearr_17765;
})();
var statearr_17766_17790 = state_17747__$1;
(statearr_17766_17790[(2)] = inst_17741);

(statearr_17766_17790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (10))){
var inst_17731 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17767_17791 = state_17747__$1;
(statearr_17767_17791[(2)] = inst_17731);

(statearr_17767_17791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (8))){
var inst_17720 = (state_17747[(11)]);
var inst_17711 = (state_17747[(7)]);
var tmp17764 = inst_17711;
var inst_17711__$1 = tmp17764;
var inst_17712 = inst_17720;
var state_17747__$1 = (function (){var statearr_17768 = state_17747;
(statearr_17768[(7)] = inst_17711__$1);

(statearr_17768[(8)] = inst_17712);

return statearr_17768;
})();
var statearr_17769_17792 = state_17747__$1;
(statearr_17769_17792[(2)] = null);

(statearr_17769_17792[(1)] = (2));


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
});})(c__8199__auto___17778,out))
;
return ((function (switch__8137__auto__,c__8199__auto___17778,out){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17773[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17773[(1)] = (1));

return statearr_17773;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17747){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17774){if((e17774 instanceof Object)){
var ex__8141__auto__ = e17774;
var statearr_17775_17793 = state_17747;
(statearr_17775_17793[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17794 = state_17747;
state_17747 = G__17794;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17778,out))
})();
var state__8201__auto__ = (function (){var statearr_17776 = f__8200__auto__.call(null);
(statearr_17776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17778);

return statearr_17776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17778,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__17796 = arguments.length;
switch (G__17796) {
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
var c__8199__auto___17869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___17869,out){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___17869,out){
return (function (state_17838){
var state_val_17839 = (state_17838[(1)]);
if((state_val_17839 === (7))){
var inst_17834 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
var statearr_17840_17870 = state_17838__$1;
(statearr_17840_17870[(2)] = inst_17834);

(statearr_17840_17870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (1))){
var inst_17797 = [];
var inst_17798 = inst_17797;
var inst_17799 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17838__$1 = (function (){var statearr_17841 = state_17838;
(statearr_17841[(7)] = inst_17799);

(statearr_17841[(8)] = inst_17798);

return statearr_17841;
})();
var statearr_17842_17871 = state_17838__$1;
(statearr_17842_17871[(2)] = null);

(statearr_17842_17871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (4))){
var inst_17802 = (state_17838[(9)]);
var inst_17802__$1 = (state_17838[(2)]);
var inst_17803 = (inst_17802__$1 == null);
var inst_17804 = cljs.core.not.call(null,inst_17803);
var state_17838__$1 = (function (){var statearr_17843 = state_17838;
(statearr_17843[(9)] = inst_17802__$1);

return statearr_17843;
})();
if(inst_17804){
var statearr_17844_17872 = state_17838__$1;
(statearr_17844_17872[(1)] = (5));

} else {
var statearr_17845_17873 = state_17838__$1;
(statearr_17845_17873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (15))){
var inst_17828 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
var statearr_17846_17874 = state_17838__$1;
(statearr_17846_17874[(2)] = inst_17828);

(statearr_17846_17874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (13))){
var state_17838__$1 = state_17838;
var statearr_17847_17875 = state_17838__$1;
(statearr_17847_17875[(2)] = null);

(statearr_17847_17875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (6))){
var inst_17798 = (state_17838[(8)]);
var inst_17823 = inst_17798.length;
var inst_17824 = (inst_17823 > (0));
var state_17838__$1 = state_17838;
if(cljs.core.truth_(inst_17824)){
var statearr_17848_17876 = state_17838__$1;
(statearr_17848_17876[(1)] = (12));

} else {
var statearr_17849_17877 = state_17838__$1;
(statearr_17849_17877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (3))){
var inst_17836 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17838__$1,inst_17836);
} else {
if((state_val_17839 === (12))){
var inst_17798 = (state_17838[(8)]);
var inst_17826 = cljs.core.vec.call(null,inst_17798);
var state_17838__$1 = state_17838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17838__$1,(15),out,inst_17826);
} else {
if((state_val_17839 === (2))){
var state_17838__$1 = state_17838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17838__$1,(4),ch);
} else {
if((state_val_17839 === (11))){
var inst_17806 = (state_17838[(10)]);
var inst_17802 = (state_17838[(9)]);
var inst_17816 = (state_17838[(2)]);
var inst_17817 = [];
var inst_17818 = inst_17817.push(inst_17802);
var inst_17798 = inst_17817;
var inst_17799 = inst_17806;
var state_17838__$1 = (function (){var statearr_17850 = state_17838;
(statearr_17850[(7)] = inst_17799);

(statearr_17850[(8)] = inst_17798);

(statearr_17850[(11)] = inst_17816);

(statearr_17850[(12)] = inst_17818);

return statearr_17850;
})();
var statearr_17851_17878 = state_17838__$1;
(statearr_17851_17878[(2)] = null);

(statearr_17851_17878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (9))){
var inst_17798 = (state_17838[(8)]);
var inst_17814 = cljs.core.vec.call(null,inst_17798);
var state_17838__$1 = state_17838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17838__$1,(11),out,inst_17814);
} else {
if((state_val_17839 === (5))){
var inst_17806 = (state_17838[(10)]);
var inst_17799 = (state_17838[(7)]);
var inst_17802 = (state_17838[(9)]);
var inst_17806__$1 = f.call(null,inst_17802);
var inst_17807 = cljs.core._EQ_.call(null,inst_17806__$1,inst_17799);
var inst_17808 = cljs.core.keyword_identical_QMARK_.call(null,inst_17799,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17809 = (inst_17807) || (inst_17808);
var state_17838__$1 = (function (){var statearr_17852 = state_17838;
(statearr_17852[(10)] = inst_17806__$1);

return statearr_17852;
})();
if(cljs.core.truth_(inst_17809)){
var statearr_17853_17879 = state_17838__$1;
(statearr_17853_17879[(1)] = (8));

} else {
var statearr_17854_17880 = state_17838__$1;
(statearr_17854_17880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (14))){
var inst_17831 = (state_17838[(2)]);
var inst_17832 = cljs.core.async.close_BANG_.call(null,out);
var state_17838__$1 = (function (){var statearr_17856 = state_17838;
(statearr_17856[(13)] = inst_17831);

return statearr_17856;
})();
var statearr_17857_17881 = state_17838__$1;
(statearr_17857_17881[(2)] = inst_17832);

(statearr_17857_17881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (10))){
var inst_17821 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
var statearr_17858_17882 = state_17838__$1;
(statearr_17858_17882[(2)] = inst_17821);

(statearr_17858_17882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (8))){
var inst_17806 = (state_17838[(10)]);
var inst_17802 = (state_17838[(9)]);
var inst_17798 = (state_17838[(8)]);
var inst_17811 = inst_17798.push(inst_17802);
var tmp17855 = inst_17798;
var inst_17798__$1 = tmp17855;
var inst_17799 = inst_17806;
var state_17838__$1 = (function (){var statearr_17859 = state_17838;
(statearr_17859[(7)] = inst_17799);

(statearr_17859[(14)] = inst_17811);

(statearr_17859[(8)] = inst_17798__$1);

return statearr_17859;
})();
var statearr_17860_17883 = state_17838__$1;
(statearr_17860_17883[(2)] = null);

(statearr_17860_17883[(1)] = (2));


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
});})(c__8199__auto___17869,out))
;
return ((function (switch__8137__auto__,c__8199__auto___17869,out){
return (function() {
var cljs$core$async$state_machine__8138__auto__ = null;
var cljs$core$async$state_machine__8138__auto____0 = (function (){
var statearr_17864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17864[(0)] = cljs$core$async$state_machine__8138__auto__);

(statearr_17864[(1)] = (1));

return statearr_17864;
});
var cljs$core$async$state_machine__8138__auto____1 = (function (state_17838){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_17838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e17865){if((e17865 instanceof Object)){
var ex__8141__auto__ = e17865;
var statearr_17866_17884 = state_17838;
(statearr_17866_17884[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17885 = state_17838;
state_17838 = G__17885;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
cljs$core$async$state_machine__8138__auto__ = function(state_17838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8138__auto____1.call(this,state_17838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8138__auto____0;
cljs$core$async$state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8138__auto____1;
return cljs$core$async$state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___17869,out))
})();
var state__8201__auto__ = (function (){var statearr_17867 = f__8200__auto__.call(null);
(statearr_17867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___17869);

return statearr_17867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___17869,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
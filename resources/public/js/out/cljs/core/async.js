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
if(typeof cljs.core.async.t13535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13535 = (function (f,fn_handler,meta13536){
this.f = f;
this.fn_handler = fn_handler;
this.meta13536 = meta13536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13537){
var self__ = this;
var _13537__$1 = this;
return self__.meta13536;
});

cljs.core.async.t13535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13537,meta13536__$1){
var self__ = this;
var _13537__$1 = this;
return (new cljs.core.async.t13535(self__.f,self__.fn_handler,meta13536__$1));
});

cljs.core.async.t13535.cljs$lang$type = true;

cljs.core.async.t13535.cljs$lang$ctorStr = "cljs.core.async/t13535";

cljs.core.async.t13535.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t13535");
});

cljs.core.async.__GT_t13535 = (function cljs$core$async$fn_handler_$___GT_t13535(f__$1,fn_handler__$1,meta13536){
return (new cljs.core.async.t13535(f__$1,fn_handler__$1,meta13536));
});

}

return (new cljs.core.async.t13535(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13539 = buff;
if(G__13539){
var bit__4773__auto__ = null;
if(cljs.core.truth_((function (){var or__4099__auto__ = bit__4773__auto__;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return G__13539.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13539.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13539);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13539);
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
var G__13541 = arguments.length;
switch (G__13541) {
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
var G__13544 = arguments.length;
switch (G__13544) {
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
var val_13546 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13546);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13546,ret){
return (function (){
return fn1.call(null,val_13546);
});})(val_13546,ret))
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
var G__13548 = arguments.length;
switch (G__13548) {
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
var n__4984__auto___13550 = n;
var x_13551 = (0);
while(true){
if((x_13551 < n__4984__auto___13550)){
(a[x_13551] = (0));

var G__13552 = (x_13551 + (1));
x_13551 = G__13552;
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

var G__13553 = (i + (1));
i = G__13553;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13557 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13557 = (function (flag,alt_flag,meta13558){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13558 = meta13558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13557.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13559){
var self__ = this;
var _13559__$1 = this;
return self__.meta13558;
});})(flag))
;

cljs.core.async.t13557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13559,meta13558__$1){
var self__ = this;
var _13559__$1 = this;
return (new cljs.core.async.t13557(self__.flag,self__.alt_flag,meta13558__$1));
});})(flag))
;

cljs.core.async.t13557.cljs$lang$type = true;

cljs.core.async.t13557.cljs$lang$ctorStr = "cljs.core.async/t13557";

cljs.core.async.t13557.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t13557");
});})(flag))
;

cljs.core.async.__GT_t13557 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13557(flag__$1,alt_flag__$1,meta13558){
return (new cljs.core.async.t13557(flag__$1,alt_flag__$1,meta13558));
});})(flag))
;

}

return (new cljs.core.async.t13557(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13563 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13563 = (function (cb,flag,alt_handler,meta13564){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13564 = meta13564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13565){
var self__ = this;
var _13565__$1 = this;
return self__.meta13564;
});

cljs.core.async.t13563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13565,meta13564__$1){
var self__ = this;
var _13565__$1 = this;
return (new cljs.core.async.t13563(self__.cb,self__.flag,self__.alt_handler,meta13564__$1));
});

cljs.core.async.t13563.cljs$lang$type = true;

cljs.core.async.t13563.cljs$lang$ctorStr = "cljs.core.async/t13563";

cljs.core.async.t13563.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t13563");
});

cljs.core.async.__GT_t13563 = (function cljs$core$async$alt_handler_$___GT_t13563(cb__$1,flag__$1,alt_handler__$1,meta13564){
return (new cljs.core.async.t13563(cb__$1,flag__$1,alt_handler__$1,meta13564));
});

}

return (new cljs.core.async.t13563(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13566_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13566_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13567_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13567_SHARP_,port], null));
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
var G__13568 = (i + (1));
i = G__13568;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13571){
var map__13572 = p__13571;
var map__13572__$1 = ((cljs.core.seq_QMARK_.call(null,map__13572))?cljs.core.apply.call(null,cljs.core.hash_map,map__13572):map__13572);
var opts = map__13572__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13569){
var G__13570 = cljs.core.first.call(null,seq13569);
var seq13569__$1 = cljs.core.next.call(null,seq13569);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13570,seq13569__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13574 = arguments.length;
switch (G__13574) {
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
var c__7080__auto___13623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___13623){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___13623){
return (function (state_13598){
var state_val_13599 = (state_13598[(1)]);
if((state_val_13599 === (7))){
var inst_13594 = (state_13598[(2)]);
var state_13598__$1 = state_13598;
var statearr_13600_13624 = state_13598__$1;
(statearr_13600_13624[(2)] = inst_13594);

(statearr_13600_13624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (1))){
var state_13598__$1 = state_13598;
var statearr_13601_13625 = state_13598__$1;
(statearr_13601_13625[(2)] = null);

(statearr_13601_13625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (4))){
var inst_13577 = (state_13598[(7)]);
var inst_13577__$1 = (state_13598[(2)]);
var inst_13578 = (inst_13577__$1 == null);
var state_13598__$1 = (function (){var statearr_13602 = state_13598;
(statearr_13602[(7)] = inst_13577__$1);

return statearr_13602;
})();
if(cljs.core.truth_(inst_13578)){
var statearr_13603_13626 = state_13598__$1;
(statearr_13603_13626[(1)] = (5));

} else {
var statearr_13604_13627 = state_13598__$1;
(statearr_13604_13627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (13))){
var state_13598__$1 = state_13598;
var statearr_13605_13628 = state_13598__$1;
(statearr_13605_13628[(2)] = null);

(statearr_13605_13628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (6))){
var inst_13577 = (state_13598[(7)]);
var state_13598__$1 = state_13598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13598__$1,(11),to,inst_13577);
} else {
if((state_val_13599 === (3))){
var inst_13596 = (state_13598[(2)]);
var state_13598__$1 = state_13598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13598__$1,inst_13596);
} else {
if((state_val_13599 === (12))){
var state_13598__$1 = state_13598;
var statearr_13606_13629 = state_13598__$1;
(statearr_13606_13629[(2)] = null);

(statearr_13606_13629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (2))){
var state_13598__$1 = state_13598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13598__$1,(4),from);
} else {
if((state_val_13599 === (11))){
var inst_13587 = (state_13598[(2)]);
var state_13598__$1 = state_13598;
if(cljs.core.truth_(inst_13587)){
var statearr_13607_13630 = state_13598__$1;
(statearr_13607_13630[(1)] = (12));

} else {
var statearr_13608_13631 = state_13598__$1;
(statearr_13608_13631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (9))){
var state_13598__$1 = state_13598;
var statearr_13609_13632 = state_13598__$1;
(statearr_13609_13632[(2)] = null);

(statearr_13609_13632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (5))){
var state_13598__$1 = state_13598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13610_13633 = state_13598__$1;
(statearr_13610_13633[(1)] = (8));

} else {
var statearr_13611_13634 = state_13598__$1;
(statearr_13611_13634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (14))){
var inst_13592 = (state_13598[(2)]);
var state_13598__$1 = state_13598;
var statearr_13612_13635 = state_13598__$1;
(statearr_13612_13635[(2)] = inst_13592);

(statearr_13612_13635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (10))){
var inst_13584 = (state_13598[(2)]);
var state_13598__$1 = state_13598;
var statearr_13613_13636 = state_13598__$1;
(statearr_13613_13636[(2)] = inst_13584);

(statearr_13613_13636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13599 === (8))){
var inst_13581 = cljs.core.async.close_BANG_.call(null,to);
var state_13598__$1 = state_13598;
var statearr_13614_13637 = state_13598__$1;
(statearr_13614_13637[(2)] = inst_13581);

(statearr_13614_13637[(1)] = (10));


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
});})(c__7080__auto___13623))
;
return ((function (switch__7018__auto__,c__7080__auto___13623){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_13618 = [null,null,null,null,null,null,null,null];
(statearr_13618[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_13618[(1)] = (1));

return statearr_13618;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_13598){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e13619){if((e13619 instanceof Object)){
var ex__7022__auto__ = e13619;
var statearr_13620_13638 = state_13598;
(statearr_13620_13638[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13639 = state_13598;
state_13598 = G__13639;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_13598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_13598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___13623))
})();
var state__7082__auto__ = (function (){var statearr_13621 = f__7081__auto__.call(null);
(statearr_13621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___13623);

return statearr_13621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___13623))
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
return (function (p__13823){
var vec__13824 = p__13823;
var v = cljs.core.nth.call(null,vec__13824,(0),null);
var p = cljs.core.nth.call(null,vec__13824,(1),null);
var job = vec__13824;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7080__auto___14006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___14006,res,vec__13824,v,p,job,jobs,results){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___14006,res,vec__13824,v,p,job,jobs,results){
return (function (state_13829){
var state_val_13830 = (state_13829[(1)]);
if((state_val_13830 === (2))){
var inst_13826 = (state_13829[(2)]);
var inst_13827 = cljs.core.async.close_BANG_.call(null,res);
var state_13829__$1 = (function (){var statearr_13831 = state_13829;
(statearr_13831[(7)] = inst_13826);

return statearr_13831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13829__$1,inst_13827);
} else {
if((state_val_13830 === (1))){
var state_13829__$1 = state_13829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13829__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7080__auto___14006,res,vec__13824,v,p,job,jobs,results))
;
return ((function (switch__7018__auto__,c__7080__auto___14006,res,vec__13824,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0 = (function (){
var statearr_13835 = [null,null,null,null,null,null,null,null];
(statearr_13835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__);

(statearr_13835[(1)] = (1));

return statearr_13835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1 = (function (state_13829){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e13836){if((e13836 instanceof Object)){
var ex__7022__auto__ = e13836;
var statearr_13837_14007 = state_13829;
(statearr_13837_14007[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14008 = state_13829;
state_13829 = G__14008;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = function(state_13829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1.call(this,state_13829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___14006,res,vec__13824,v,p,job,jobs,results))
})();
var state__7082__auto__ = (function (){var statearr_13838 = f__7081__auto__.call(null);
(statearr_13838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___14006);

return statearr_13838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___14006,res,vec__13824,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13839){
var vec__13840 = p__13839;
var v = cljs.core.nth.call(null,vec__13840,(0),null);
var p = cljs.core.nth.call(null,vec__13840,(1),null);
var job = vec__13840;
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
var n__4984__auto___14009 = n;
var __14010 = (0);
while(true){
if((__14010 < n__4984__auto___14009)){
var G__13841_14011 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13841_14011) {
case "async":
var c__7080__auto___14013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14010,c__7080__auto___14013,G__13841_14011,n__4984__auto___14009,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (__14010,c__7080__auto___14013,G__13841_14011,n__4984__auto___14009,jobs,results,process,async){
return (function (state_13854){
var state_val_13855 = (state_13854[(1)]);
if((state_val_13855 === (7))){
var inst_13850 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13856_14014 = state_13854__$1;
(statearr_13856_14014[(2)] = inst_13850);

(statearr_13856_14014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (6))){
var state_13854__$1 = state_13854;
var statearr_13857_14015 = state_13854__$1;
(statearr_13857_14015[(2)] = null);

(statearr_13857_14015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (5))){
var state_13854__$1 = state_13854;
var statearr_13858_14016 = state_13854__$1;
(statearr_13858_14016[(2)] = null);

(statearr_13858_14016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (4))){
var inst_13844 = (state_13854[(2)]);
var inst_13845 = async.call(null,inst_13844);
var state_13854__$1 = state_13854;
if(cljs.core.truth_(inst_13845)){
var statearr_13859_14017 = state_13854__$1;
(statearr_13859_14017[(1)] = (5));

} else {
var statearr_13860_14018 = state_13854__$1;
(statearr_13860_14018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (3))){
var inst_13852 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13854__$1,inst_13852);
} else {
if((state_val_13855 === (2))){
var state_13854__$1 = state_13854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13854__$1,(4),jobs);
} else {
if((state_val_13855 === (1))){
var state_13854__$1 = state_13854;
var statearr_13861_14019 = state_13854__$1;
(statearr_13861_14019[(2)] = null);

(statearr_13861_14019[(1)] = (2));


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
});})(__14010,c__7080__auto___14013,G__13841_14011,n__4984__auto___14009,jobs,results,process,async))
;
return ((function (__14010,switch__7018__auto__,c__7080__auto___14013,G__13841_14011,n__4984__auto___14009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0 = (function (){
var statearr_13865 = [null,null,null,null,null,null,null];
(statearr_13865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__);

(statearr_13865[(1)] = (1));

return statearr_13865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1 = (function (state_13854){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e13866){if((e13866 instanceof Object)){
var ex__7022__auto__ = e13866;
var statearr_13867_14020 = state_13854;
(statearr_13867_14020[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14021 = state_13854;
state_13854 = G__14021;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = function(state_13854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1.call(this,state_13854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__;
})()
;})(__14010,switch__7018__auto__,c__7080__auto___14013,G__13841_14011,n__4984__auto___14009,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_13868 = f__7081__auto__.call(null);
(statearr_13868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___14013);

return statearr_13868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(__14010,c__7080__auto___14013,G__13841_14011,n__4984__auto___14009,jobs,results,process,async))
);


break;
case "compute":
var c__7080__auto___14022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14010,c__7080__auto___14022,G__13841_14011,n__4984__auto___14009,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (__14010,c__7080__auto___14022,G__13841_14011,n__4984__auto___14009,jobs,results,process,async){
return (function (state_13881){
var state_val_13882 = (state_13881[(1)]);
if((state_val_13882 === (7))){
var inst_13877 = (state_13881[(2)]);
var state_13881__$1 = state_13881;
var statearr_13883_14023 = state_13881__$1;
(statearr_13883_14023[(2)] = inst_13877);

(statearr_13883_14023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (6))){
var state_13881__$1 = state_13881;
var statearr_13884_14024 = state_13881__$1;
(statearr_13884_14024[(2)] = null);

(statearr_13884_14024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (5))){
var state_13881__$1 = state_13881;
var statearr_13885_14025 = state_13881__$1;
(statearr_13885_14025[(2)] = null);

(statearr_13885_14025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (4))){
var inst_13871 = (state_13881[(2)]);
var inst_13872 = process.call(null,inst_13871);
var state_13881__$1 = state_13881;
if(cljs.core.truth_(inst_13872)){
var statearr_13886_14026 = state_13881__$1;
(statearr_13886_14026[(1)] = (5));

} else {
var statearr_13887_14027 = state_13881__$1;
(statearr_13887_14027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (3))){
var inst_13879 = (state_13881[(2)]);
var state_13881__$1 = state_13881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13881__$1,inst_13879);
} else {
if((state_val_13882 === (2))){
var state_13881__$1 = state_13881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13881__$1,(4),jobs);
} else {
if((state_val_13882 === (1))){
var state_13881__$1 = state_13881;
var statearr_13888_14028 = state_13881__$1;
(statearr_13888_14028[(2)] = null);

(statearr_13888_14028[(1)] = (2));


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
});})(__14010,c__7080__auto___14022,G__13841_14011,n__4984__auto___14009,jobs,results,process,async))
;
return ((function (__14010,switch__7018__auto__,c__7080__auto___14022,G__13841_14011,n__4984__auto___14009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0 = (function (){
var statearr_13892 = [null,null,null,null,null,null,null];
(statearr_13892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__);

(statearr_13892[(1)] = (1));

return statearr_13892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1 = (function (state_13881){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e13893){if((e13893 instanceof Object)){
var ex__7022__auto__ = e13893;
var statearr_13894_14029 = state_13881;
(statearr_13894_14029[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14030 = state_13881;
state_13881 = G__14030;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = function(state_13881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1.call(this,state_13881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__;
})()
;})(__14010,switch__7018__auto__,c__7080__auto___14022,G__13841_14011,n__4984__auto___14009,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_13895 = f__7081__auto__.call(null);
(statearr_13895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___14022);

return statearr_13895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(__14010,c__7080__auto___14022,G__13841_14011,n__4984__auto___14009,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14031 = (__14010 + (1));
__14010 = G__14031;
continue;
} else {
}
break;
}

var c__7080__auto___14032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___14032,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___14032,jobs,results,process,async){
return (function (state_13917){
var state_val_13918 = (state_13917[(1)]);
if((state_val_13918 === (9))){
var inst_13910 = (state_13917[(2)]);
var state_13917__$1 = (function (){var statearr_13919 = state_13917;
(statearr_13919[(7)] = inst_13910);

return statearr_13919;
})();
var statearr_13920_14033 = state_13917__$1;
(statearr_13920_14033[(2)] = null);

(statearr_13920_14033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13918 === (8))){
var inst_13903 = (state_13917[(8)]);
var inst_13908 = (state_13917[(2)]);
var state_13917__$1 = (function (){var statearr_13921 = state_13917;
(statearr_13921[(9)] = inst_13908);

return statearr_13921;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13917__$1,(9),results,inst_13903);
} else {
if((state_val_13918 === (7))){
var inst_13913 = (state_13917[(2)]);
var state_13917__$1 = state_13917;
var statearr_13922_14034 = state_13917__$1;
(statearr_13922_14034[(2)] = inst_13913);

(statearr_13922_14034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13918 === (6))){
var inst_13903 = (state_13917[(8)]);
var inst_13898 = (state_13917[(10)]);
var inst_13903__$1 = cljs.core.async.chan.call(null,(1));
var inst_13904 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13905 = [inst_13898,inst_13903__$1];
var inst_13906 = (new cljs.core.PersistentVector(null,2,(5),inst_13904,inst_13905,null));
var state_13917__$1 = (function (){var statearr_13923 = state_13917;
(statearr_13923[(8)] = inst_13903__$1);

return statearr_13923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13917__$1,(8),jobs,inst_13906);
} else {
if((state_val_13918 === (5))){
var inst_13901 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13917__$1 = state_13917;
var statearr_13924_14035 = state_13917__$1;
(statearr_13924_14035[(2)] = inst_13901);

(statearr_13924_14035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13918 === (4))){
var inst_13898 = (state_13917[(10)]);
var inst_13898__$1 = (state_13917[(2)]);
var inst_13899 = (inst_13898__$1 == null);
var state_13917__$1 = (function (){var statearr_13925 = state_13917;
(statearr_13925[(10)] = inst_13898__$1);

return statearr_13925;
})();
if(cljs.core.truth_(inst_13899)){
var statearr_13926_14036 = state_13917__$1;
(statearr_13926_14036[(1)] = (5));

} else {
var statearr_13927_14037 = state_13917__$1;
(statearr_13927_14037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13918 === (3))){
var inst_13915 = (state_13917[(2)]);
var state_13917__$1 = state_13917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13917__$1,inst_13915);
} else {
if((state_val_13918 === (2))){
var state_13917__$1 = state_13917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13917__$1,(4),from);
} else {
if((state_val_13918 === (1))){
var state_13917__$1 = state_13917;
var statearr_13928_14038 = state_13917__$1;
(statearr_13928_14038[(2)] = null);

(statearr_13928_14038[(1)] = (2));


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
});})(c__7080__auto___14032,jobs,results,process,async))
;
return ((function (switch__7018__auto__,c__7080__auto___14032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0 = (function (){
var statearr_13932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__);

(statearr_13932[(1)] = (1));

return statearr_13932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1 = (function (state_13917){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e13933){if((e13933 instanceof Object)){
var ex__7022__auto__ = e13933;
var statearr_13934_14039 = state_13917;
(statearr_13934_14039[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14040 = state_13917;
state_13917 = G__14040;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = function(state_13917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1.call(this,state_13917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___14032,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_13935 = f__7081__auto__.call(null);
(statearr_13935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___14032);

return statearr_13935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___14032,jobs,results,process,async))
);


var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__,jobs,results,process,async){
return (function (state_13973){
var state_val_13974 = (state_13973[(1)]);
if((state_val_13974 === (7))){
var inst_13969 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
var statearr_13975_14041 = state_13973__$1;
(statearr_13975_14041[(2)] = inst_13969);

(statearr_13975_14041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (20))){
var state_13973__$1 = state_13973;
var statearr_13976_14042 = state_13973__$1;
(statearr_13976_14042[(2)] = null);

(statearr_13976_14042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (1))){
var state_13973__$1 = state_13973;
var statearr_13977_14043 = state_13973__$1;
(statearr_13977_14043[(2)] = null);

(statearr_13977_14043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (4))){
var inst_13938 = (state_13973[(7)]);
var inst_13938__$1 = (state_13973[(2)]);
var inst_13939 = (inst_13938__$1 == null);
var state_13973__$1 = (function (){var statearr_13978 = state_13973;
(statearr_13978[(7)] = inst_13938__$1);

return statearr_13978;
})();
if(cljs.core.truth_(inst_13939)){
var statearr_13979_14044 = state_13973__$1;
(statearr_13979_14044[(1)] = (5));

} else {
var statearr_13980_14045 = state_13973__$1;
(statearr_13980_14045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (15))){
var inst_13951 = (state_13973[(8)]);
var state_13973__$1 = state_13973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13973__$1,(18),to,inst_13951);
} else {
if((state_val_13974 === (21))){
var inst_13964 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
var statearr_13981_14046 = state_13973__$1;
(statearr_13981_14046[(2)] = inst_13964);

(statearr_13981_14046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (13))){
var inst_13966 = (state_13973[(2)]);
var state_13973__$1 = (function (){var statearr_13982 = state_13973;
(statearr_13982[(9)] = inst_13966);

return statearr_13982;
})();
var statearr_13983_14047 = state_13973__$1;
(statearr_13983_14047[(2)] = null);

(statearr_13983_14047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (6))){
var inst_13938 = (state_13973[(7)]);
var state_13973__$1 = state_13973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13973__$1,(11),inst_13938);
} else {
if((state_val_13974 === (17))){
var inst_13959 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
if(cljs.core.truth_(inst_13959)){
var statearr_13984_14048 = state_13973__$1;
(statearr_13984_14048[(1)] = (19));

} else {
var statearr_13985_14049 = state_13973__$1;
(statearr_13985_14049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (3))){
var inst_13971 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13973__$1,inst_13971);
} else {
if((state_val_13974 === (12))){
var inst_13948 = (state_13973[(10)]);
var state_13973__$1 = state_13973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13973__$1,(14),inst_13948);
} else {
if((state_val_13974 === (2))){
var state_13973__$1 = state_13973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13973__$1,(4),results);
} else {
if((state_val_13974 === (19))){
var state_13973__$1 = state_13973;
var statearr_13986_14050 = state_13973__$1;
(statearr_13986_14050[(2)] = null);

(statearr_13986_14050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (11))){
var inst_13948 = (state_13973[(2)]);
var state_13973__$1 = (function (){var statearr_13987 = state_13973;
(statearr_13987[(10)] = inst_13948);

return statearr_13987;
})();
var statearr_13988_14051 = state_13973__$1;
(statearr_13988_14051[(2)] = null);

(statearr_13988_14051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (9))){
var state_13973__$1 = state_13973;
var statearr_13989_14052 = state_13973__$1;
(statearr_13989_14052[(2)] = null);

(statearr_13989_14052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (5))){
var state_13973__$1 = state_13973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13990_14053 = state_13973__$1;
(statearr_13990_14053[(1)] = (8));

} else {
var statearr_13991_14054 = state_13973__$1;
(statearr_13991_14054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (14))){
var inst_13953 = (state_13973[(11)]);
var inst_13951 = (state_13973[(8)]);
var inst_13951__$1 = (state_13973[(2)]);
var inst_13952 = (inst_13951__$1 == null);
var inst_13953__$1 = cljs.core.not.call(null,inst_13952);
var state_13973__$1 = (function (){var statearr_13992 = state_13973;
(statearr_13992[(11)] = inst_13953__$1);

(statearr_13992[(8)] = inst_13951__$1);

return statearr_13992;
})();
if(inst_13953__$1){
var statearr_13993_14055 = state_13973__$1;
(statearr_13993_14055[(1)] = (15));

} else {
var statearr_13994_14056 = state_13973__$1;
(statearr_13994_14056[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (16))){
var inst_13953 = (state_13973[(11)]);
var state_13973__$1 = state_13973;
var statearr_13995_14057 = state_13973__$1;
(statearr_13995_14057[(2)] = inst_13953);

(statearr_13995_14057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (10))){
var inst_13945 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
var statearr_13996_14058 = state_13973__$1;
(statearr_13996_14058[(2)] = inst_13945);

(statearr_13996_14058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (18))){
var inst_13956 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
var statearr_13997_14059 = state_13973__$1;
(statearr_13997_14059[(2)] = inst_13956);

(statearr_13997_14059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (8))){
var inst_13942 = cljs.core.async.close_BANG_.call(null,to);
var state_13973__$1 = state_13973;
var statearr_13998_14060 = state_13973__$1;
(statearr_13998_14060[(2)] = inst_13942);

(statearr_13998_14060[(1)] = (10));


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
});})(c__7080__auto__,jobs,results,process,async))
;
return ((function (switch__7018__auto__,c__7080__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0 = (function (){
var statearr_14002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__);

(statearr_14002[(1)] = (1));

return statearr_14002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1 = (function (state_13973){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e14003){if((e14003 instanceof Object)){
var ex__7022__auto__ = e14003;
var statearr_14004_14061 = state_13973;
(statearr_14004_14061[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14062 = state_13973;
state_13973 = G__14062;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__ = function(state_13973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1.call(this,state_13973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_14005 = f__7081__auto__.call(null);
(statearr_14005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_14005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__,jobs,results,process,async))
);

return c__7080__auto__;
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
var G__14064 = arguments.length;
switch (G__14064) {
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
var G__14067 = arguments.length;
switch (G__14067) {
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
var G__14070 = arguments.length;
switch (G__14070) {
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
var c__7080__auto___14122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___14122,tc,fc){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___14122,tc,fc){
return (function (state_14096){
var state_val_14097 = (state_14096[(1)]);
if((state_val_14097 === (7))){
var inst_14092 = (state_14096[(2)]);
var state_14096__$1 = state_14096;
var statearr_14098_14123 = state_14096__$1;
(statearr_14098_14123[(2)] = inst_14092);

(statearr_14098_14123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (1))){
var state_14096__$1 = state_14096;
var statearr_14099_14124 = state_14096__$1;
(statearr_14099_14124[(2)] = null);

(statearr_14099_14124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (4))){
var inst_14073 = (state_14096[(7)]);
var inst_14073__$1 = (state_14096[(2)]);
var inst_14074 = (inst_14073__$1 == null);
var state_14096__$1 = (function (){var statearr_14100 = state_14096;
(statearr_14100[(7)] = inst_14073__$1);

return statearr_14100;
})();
if(cljs.core.truth_(inst_14074)){
var statearr_14101_14125 = state_14096__$1;
(statearr_14101_14125[(1)] = (5));

} else {
var statearr_14102_14126 = state_14096__$1;
(statearr_14102_14126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (13))){
var state_14096__$1 = state_14096;
var statearr_14103_14127 = state_14096__$1;
(statearr_14103_14127[(2)] = null);

(statearr_14103_14127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (6))){
var inst_14073 = (state_14096[(7)]);
var inst_14079 = p.call(null,inst_14073);
var state_14096__$1 = state_14096;
if(cljs.core.truth_(inst_14079)){
var statearr_14104_14128 = state_14096__$1;
(statearr_14104_14128[(1)] = (9));

} else {
var statearr_14105_14129 = state_14096__$1;
(statearr_14105_14129[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (3))){
var inst_14094 = (state_14096[(2)]);
var state_14096__$1 = state_14096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14096__$1,inst_14094);
} else {
if((state_val_14097 === (12))){
var state_14096__$1 = state_14096;
var statearr_14106_14130 = state_14096__$1;
(statearr_14106_14130[(2)] = null);

(statearr_14106_14130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (2))){
var state_14096__$1 = state_14096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14096__$1,(4),ch);
} else {
if((state_val_14097 === (11))){
var inst_14073 = (state_14096[(7)]);
var inst_14083 = (state_14096[(2)]);
var state_14096__$1 = state_14096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14096__$1,(8),inst_14083,inst_14073);
} else {
if((state_val_14097 === (9))){
var state_14096__$1 = state_14096;
var statearr_14107_14131 = state_14096__$1;
(statearr_14107_14131[(2)] = tc);

(statearr_14107_14131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (5))){
var inst_14076 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14077 = cljs.core.async.close_BANG_.call(null,fc);
var state_14096__$1 = (function (){var statearr_14108 = state_14096;
(statearr_14108[(8)] = inst_14076);

return statearr_14108;
})();
var statearr_14109_14132 = state_14096__$1;
(statearr_14109_14132[(2)] = inst_14077);

(statearr_14109_14132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (14))){
var inst_14090 = (state_14096[(2)]);
var state_14096__$1 = state_14096;
var statearr_14110_14133 = state_14096__$1;
(statearr_14110_14133[(2)] = inst_14090);

(statearr_14110_14133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (10))){
var state_14096__$1 = state_14096;
var statearr_14111_14134 = state_14096__$1;
(statearr_14111_14134[(2)] = fc);

(statearr_14111_14134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14097 === (8))){
var inst_14085 = (state_14096[(2)]);
var state_14096__$1 = state_14096;
if(cljs.core.truth_(inst_14085)){
var statearr_14112_14135 = state_14096__$1;
(statearr_14112_14135[(1)] = (12));

} else {
var statearr_14113_14136 = state_14096__$1;
(statearr_14113_14136[(1)] = (13));

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
});})(c__7080__auto___14122,tc,fc))
;
return ((function (switch__7018__auto__,c__7080__auto___14122,tc,fc){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_14117 = [null,null,null,null,null,null,null,null,null];
(statearr_14117[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_14117[(1)] = (1));

return statearr_14117;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_14096){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_14096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e14118){if((e14118 instanceof Object)){
var ex__7022__auto__ = e14118;
var statearr_14119_14137 = state_14096;
(statearr_14119_14137[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14138 = state_14096;
state_14096 = G__14138;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_14096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_14096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___14122,tc,fc))
})();
var state__7082__auto__ = (function (){var statearr_14120 = f__7081__auto__.call(null);
(statearr_14120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___14122);

return statearr_14120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___14122,tc,fc))
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
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__){
return (function (state_14185){
var state_val_14186 = (state_14185[(1)]);
if((state_val_14186 === (7))){
var inst_14181 = (state_14185[(2)]);
var state_14185__$1 = state_14185;
var statearr_14187_14203 = state_14185__$1;
(statearr_14187_14203[(2)] = inst_14181);

(statearr_14187_14203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14186 === (6))){
var inst_14171 = (state_14185[(7)]);
var inst_14174 = (state_14185[(8)]);
var inst_14178 = f.call(null,inst_14171,inst_14174);
var inst_14171__$1 = inst_14178;
var state_14185__$1 = (function (){var statearr_14188 = state_14185;
(statearr_14188[(7)] = inst_14171__$1);

return statearr_14188;
})();
var statearr_14189_14204 = state_14185__$1;
(statearr_14189_14204[(2)] = null);

(statearr_14189_14204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14186 === (5))){
var inst_14171 = (state_14185[(7)]);
var state_14185__$1 = state_14185;
var statearr_14190_14205 = state_14185__$1;
(statearr_14190_14205[(2)] = inst_14171);

(statearr_14190_14205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14186 === (4))){
var inst_14174 = (state_14185[(8)]);
var inst_14174__$1 = (state_14185[(2)]);
var inst_14175 = (inst_14174__$1 == null);
var state_14185__$1 = (function (){var statearr_14191 = state_14185;
(statearr_14191[(8)] = inst_14174__$1);

return statearr_14191;
})();
if(cljs.core.truth_(inst_14175)){
var statearr_14192_14206 = state_14185__$1;
(statearr_14192_14206[(1)] = (5));

} else {
var statearr_14193_14207 = state_14185__$1;
(statearr_14193_14207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14186 === (3))){
var inst_14183 = (state_14185[(2)]);
var state_14185__$1 = state_14185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14185__$1,inst_14183);
} else {
if((state_val_14186 === (2))){
var state_14185__$1 = state_14185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14185__$1,(4),ch);
} else {
if((state_val_14186 === (1))){
var inst_14171 = init;
var state_14185__$1 = (function (){var statearr_14194 = state_14185;
(statearr_14194[(7)] = inst_14171);

return statearr_14194;
})();
var statearr_14195_14208 = state_14185__$1;
(statearr_14195_14208[(2)] = null);

(statearr_14195_14208[(1)] = (2));


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
});})(c__7080__auto__))
;
return ((function (switch__7018__auto__,c__7080__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7019__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7019__auto____0 = (function (){
var statearr_14199 = [null,null,null,null,null,null,null,null,null];
(statearr_14199[(0)] = cljs$core$async$reduce_$_state_machine__7019__auto__);

(statearr_14199[(1)] = (1));

return statearr_14199;
});
var cljs$core$async$reduce_$_state_machine__7019__auto____1 = (function (state_14185){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_14185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e14200){if((e14200 instanceof Object)){
var ex__7022__auto__ = e14200;
var statearr_14201_14209 = state_14185;
(statearr_14201_14209[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14210 = state_14185;
state_14185 = G__14210;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7019__auto__ = function(state_14185){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7019__auto____1.call(this,state_14185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7019__auto____0;
cljs$core$async$reduce_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7019__auto____1;
return cljs$core$async$reduce_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_14202 = f__7081__auto__.call(null);
(statearr_14202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_14202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
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
var G__14212 = arguments.length;
switch (G__14212) {
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
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__){
return (function (state_14237){
var state_val_14238 = (state_14237[(1)]);
if((state_val_14238 === (7))){
var inst_14219 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14239_14263 = state_14237__$1;
(statearr_14239_14263[(2)] = inst_14219);

(statearr_14239_14263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (1))){
var inst_14213 = cljs.core.seq.call(null,coll);
var inst_14214 = inst_14213;
var state_14237__$1 = (function (){var statearr_14240 = state_14237;
(statearr_14240[(7)] = inst_14214);

return statearr_14240;
})();
var statearr_14241_14264 = state_14237__$1;
(statearr_14241_14264[(2)] = null);

(statearr_14241_14264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (4))){
var inst_14214 = (state_14237[(7)]);
var inst_14217 = cljs.core.first.call(null,inst_14214);
var state_14237__$1 = state_14237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14237__$1,(7),ch,inst_14217);
} else {
if((state_val_14238 === (13))){
var inst_14231 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14242_14265 = state_14237__$1;
(statearr_14242_14265[(2)] = inst_14231);

(statearr_14242_14265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (6))){
var inst_14222 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
if(cljs.core.truth_(inst_14222)){
var statearr_14243_14266 = state_14237__$1;
(statearr_14243_14266[(1)] = (8));

} else {
var statearr_14244_14267 = state_14237__$1;
(statearr_14244_14267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (3))){
var inst_14235 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14237__$1,inst_14235);
} else {
if((state_val_14238 === (12))){
var state_14237__$1 = state_14237;
var statearr_14245_14268 = state_14237__$1;
(statearr_14245_14268[(2)] = null);

(statearr_14245_14268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (2))){
var inst_14214 = (state_14237[(7)]);
var state_14237__$1 = state_14237;
if(cljs.core.truth_(inst_14214)){
var statearr_14246_14269 = state_14237__$1;
(statearr_14246_14269[(1)] = (4));

} else {
var statearr_14247_14270 = state_14237__$1;
(statearr_14247_14270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (11))){
var inst_14228 = cljs.core.async.close_BANG_.call(null,ch);
var state_14237__$1 = state_14237;
var statearr_14248_14271 = state_14237__$1;
(statearr_14248_14271[(2)] = inst_14228);

(statearr_14248_14271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (9))){
var state_14237__$1 = state_14237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14249_14272 = state_14237__$1;
(statearr_14249_14272[(1)] = (11));

} else {
var statearr_14250_14273 = state_14237__$1;
(statearr_14250_14273[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (5))){
var inst_14214 = (state_14237[(7)]);
var state_14237__$1 = state_14237;
var statearr_14251_14274 = state_14237__$1;
(statearr_14251_14274[(2)] = inst_14214);

(statearr_14251_14274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (10))){
var inst_14233 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14252_14275 = state_14237__$1;
(statearr_14252_14275[(2)] = inst_14233);

(statearr_14252_14275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (8))){
var inst_14214 = (state_14237[(7)]);
var inst_14224 = cljs.core.next.call(null,inst_14214);
var inst_14214__$1 = inst_14224;
var state_14237__$1 = (function (){var statearr_14253 = state_14237;
(statearr_14253[(7)] = inst_14214__$1);

return statearr_14253;
})();
var statearr_14254_14276 = state_14237__$1;
(statearr_14254_14276[(2)] = null);

(statearr_14254_14276[(1)] = (2));


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
});})(c__7080__auto__))
;
return ((function (switch__7018__auto__,c__7080__auto__){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_14258 = [null,null,null,null,null,null,null,null];
(statearr_14258[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_14258[(1)] = (1));

return statearr_14258;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_14237){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_14237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e14259){if((e14259 instanceof Object)){
var ex__7022__auto__ = e14259;
var statearr_14260_14277 = state_14237;
(statearr_14260_14277[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14278 = state_14237;
state_14237 = G__14278;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_14237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_14237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_14261 = f__7081__auto__.call(null);
(statearr_14261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_14261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
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

cljs.core.async.Mux = (function (){var obj14280 = {};
return obj14280;
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


cljs.core.async.Mult = (function (){var obj14282 = {};
return obj14282;
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
if(typeof cljs.core.async.t14504 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14504 = (function (cs,ch,mult,meta14505){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14505 = meta14505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14504.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14504.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14504.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14504.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14504.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14506){
var self__ = this;
var _14506__$1 = this;
return self__.meta14505;
});})(cs))
;

cljs.core.async.t14504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14506,meta14505__$1){
var self__ = this;
var _14506__$1 = this;
return (new cljs.core.async.t14504(self__.cs,self__.ch,self__.mult,meta14505__$1));
});})(cs))
;

cljs.core.async.t14504.cljs$lang$type = true;

cljs.core.async.t14504.cljs$lang$ctorStr = "cljs.core.async/t14504";

cljs.core.async.t14504.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t14504");
});})(cs))
;

cljs.core.async.__GT_t14504 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14504(cs__$1,ch__$1,mult__$1,meta14505){
return (new cljs.core.async.t14504(cs__$1,ch__$1,mult__$1,meta14505));
});})(cs))
;

}

return (new cljs.core.async.t14504(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7080__auto___14725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___14725,cs,m,dchan,dctr,done){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___14725,cs,m,dchan,dctr,done){
return (function (state_14637){
var state_val_14638 = (state_14637[(1)]);
if((state_val_14638 === (7))){
var inst_14633 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14639_14726 = state_14637__$1;
(statearr_14639_14726[(2)] = inst_14633);

(statearr_14639_14726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (20))){
var inst_14538 = (state_14637[(7)]);
var inst_14548 = cljs.core.first.call(null,inst_14538);
var inst_14549 = cljs.core.nth.call(null,inst_14548,(0),null);
var inst_14550 = cljs.core.nth.call(null,inst_14548,(1),null);
var state_14637__$1 = (function (){var statearr_14640 = state_14637;
(statearr_14640[(8)] = inst_14549);

return statearr_14640;
})();
if(cljs.core.truth_(inst_14550)){
var statearr_14641_14727 = state_14637__$1;
(statearr_14641_14727[(1)] = (22));

} else {
var statearr_14642_14728 = state_14637__$1;
(statearr_14642_14728[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (27))){
var inst_14578 = (state_14637[(9)]);
var inst_14509 = (state_14637[(10)]);
var inst_14580 = (state_14637[(11)]);
var inst_14585 = (state_14637[(12)]);
var inst_14585__$1 = cljs.core._nth.call(null,inst_14578,inst_14580);
var inst_14586 = cljs.core.async.put_BANG_.call(null,inst_14585__$1,inst_14509,done);
var state_14637__$1 = (function (){var statearr_14643 = state_14637;
(statearr_14643[(12)] = inst_14585__$1);

return statearr_14643;
})();
if(cljs.core.truth_(inst_14586)){
var statearr_14644_14729 = state_14637__$1;
(statearr_14644_14729[(1)] = (30));

} else {
var statearr_14645_14730 = state_14637__$1;
(statearr_14645_14730[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (1))){
var state_14637__$1 = state_14637;
var statearr_14646_14731 = state_14637__$1;
(statearr_14646_14731[(2)] = null);

(statearr_14646_14731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (24))){
var inst_14538 = (state_14637[(7)]);
var inst_14555 = (state_14637[(2)]);
var inst_14556 = cljs.core.next.call(null,inst_14538);
var inst_14518 = inst_14556;
var inst_14519 = null;
var inst_14520 = (0);
var inst_14521 = (0);
var state_14637__$1 = (function (){var statearr_14647 = state_14637;
(statearr_14647[(13)] = inst_14518);

(statearr_14647[(14)] = inst_14519);

(statearr_14647[(15)] = inst_14521);

(statearr_14647[(16)] = inst_14520);

(statearr_14647[(17)] = inst_14555);

return statearr_14647;
})();
var statearr_14648_14732 = state_14637__$1;
(statearr_14648_14732[(2)] = null);

(statearr_14648_14732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (39))){
var state_14637__$1 = state_14637;
var statearr_14652_14733 = state_14637__$1;
(statearr_14652_14733[(2)] = null);

(statearr_14652_14733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (4))){
var inst_14509 = (state_14637[(10)]);
var inst_14509__$1 = (state_14637[(2)]);
var inst_14510 = (inst_14509__$1 == null);
var state_14637__$1 = (function (){var statearr_14653 = state_14637;
(statearr_14653[(10)] = inst_14509__$1);

return statearr_14653;
})();
if(cljs.core.truth_(inst_14510)){
var statearr_14654_14734 = state_14637__$1;
(statearr_14654_14734[(1)] = (5));

} else {
var statearr_14655_14735 = state_14637__$1;
(statearr_14655_14735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (15))){
var inst_14518 = (state_14637[(13)]);
var inst_14519 = (state_14637[(14)]);
var inst_14521 = (state_14637[(15)]);
var inst_14520 = (state_14637[(16)]);
var inst_14534 = (state_14637[(2)]);
var inst_14535 = (inst_14521 + (1));
var tmp14649 = inst_14518;
var tmp14650 = inst_14519;
var tmp14651 = inst_14520;
var inst_14518__$1 = tmp14649;
var inst_14519__$1 = tmp14650;
var inst_14520__$1 = tmp14651;
var inst_14521__$1 = inst_14535;
var state_14637__$1 = (function (){var statearr_14656 = state_14637;
(statearr_14656[(13)] = inst_14518__$1);

(statearr_14656[(14)] = inst_14519__$1);

(statearr_14656[(15)] = inst_14521__$1);

(statearr_14656[(16)] = inst_14520__$1);

(statearr_14656[(18)] = inst_14534);

return statearr_14656;
})();
var statearr_14657_14736 = state_14637__$1;
(statearr_14657_14736[(2)] = null);

(statearr_14657_14736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (21))){
var inst_14559 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14661_14737 = state_14637__$1;
(statearr_14661_14737[(2)] = inst_14559);

(statearr_14661_14737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (31))){
var inst_14585 = (state_14637[(12)]);
var inst_14589 = done.call(null,null);
var inst_14590 = cljs.core.async.untap_STAR_.call(null,m,inst_14585);
var state_14637__$1 = (function (){var statearr_14662 = state_14637;
(statearr_14662[(19)] = inst_14589);

return statearr_14662;
})();
var statearr_14663_14738 = state_14637__$1;
(statearr_14663_14738[(2)] = inst_14590);

(statearr_14663_14738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (32))){
var inst_14579 = (state_14637[(20)]);
var inst_14577 = (state_14637[(21)]);
var inst_14578 = (state_14637[(9)]);
var inst_14580 = (state_14637[(11)]);
var inst_14592 = (state_14637[(2)]);
var inst_14593 = (inst_14580 + (1));
var tmp14658 = inst_14579;
var tmp14659 = inst_14577;
var tmp14660 = inst_14578;
var inst_14577__$1 = tmp14659;
var inst_14578__$1 = tmp14660;
var inst_14579__$1 = tmp14658;
var inst_14580__$1 = inst_14593;
var state_14637__$1 = (function (){var statearr_14664 = state_14637;
(statearr_14664[(22)] = inst_14592);

(statearr_14664[(20)] = inst_14579__$1);

(statearr_14664[(21)] = inst_14577__$1);

(statearr_14664[(9)] = inst_14578__$1);

(statearr_14664[(11)] = inst_14580__$1);

return statearr_14664;
})();
var statearr_14665_14739 = state_14637__$1;
(statearr_14665_14739[(2)] = null);

(statearr_14665_14739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (40))){
var inst_14605 = (state_14637[(23)]);
var inst_14609 = done.call(null,null);
var inst_14610 = cljs.core.async.untap_STAR_.call(null,m,inst_14605);
var state_14637__$1 = (function (){var statearr_14666 = state_14637;
(statearr_14666[(24)] = inst_14609);

return statearr_14666;
})();
var statearr_14667_14740 = state_14637__$1;
(statearr_14667_14740[(2)] = inst_14610);

(statearr_14667_14740[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (33))){
var inst_14596 = (state_14637[(25)]);
var inst_14598 = cljs.core.chunked_seq_QMARK_.call(null,inst_14596);
var state_14637__$1 = state_14637;
if(inst_14598){
var statearr_14668_14741 = state_14637__$1;
(statearr_14668_14741[(1)] = (36));

} else {
var statearr_14669_14742 = state_14637__$1;
(statearr_14669_14742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (13))){
var inst_14528 = (state_14637[(26)]);
var inst_14531 = cljs.core.async.close_BANG_.call(null,inst_14528);
var state_14637__$1 = state_14637;
var statearr_14670_14743 = state_14637__$1;
(statearr_14670_14743[(2)] = inst_14531);

(statearr_14670_14743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (22))){
var inst_14549 = (state_14637[(8)]);
var inst_14552 = cljs.core.async.close_BANG_.call(null,inst_14549);
var state_14637__$1 = state_14637;
var statearr_14671_14744 = state_14637__$1;
(statearr_14671_14744[(2)] = inst_14552);

(statearr_14671_14744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (36))){
var inst_14596 = (state_14637[(25)]);
var inst_14600 = cljs.core.chunk_first.call(null,inst_14596);
var inst_14601 = cljs.core.chunk_rest.call(null,inst_14596);
var inst_14602 = cljs.core.count.call(null,inst_14600);
var inst_14577 = inst_14601;
var inst_14578 = inst_14600;
var inst_14579 = inst_14602;
var inst_14580 = (0);
var state_14637__$1 = (function (){var statearr_14672 = state_14637;
(statearr_14672[(20)] = inst_14579);

(statearr_14672[(21)] = inst_14577);

(statearr_14672[(9)] = inst_14578);

(statearr_14672[(11)] = inst_14580);

return statearr_14672;
})();
var statearr_14673_14745 = state_14637__$1;
(statearr_14673_14745[(2)] = null);

(statearr_14673_14745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (41))){
var inst_14596 = (state_14637[(25)]);
var inst_14612 = (state_14637[(2)]);
var inst_14613 = cljs.core.next.call(null,inst_14596);
var inst_14577 = inst_14613;
var inst_14578 = null;
var inst_14579 = (0);
var inst_14580 = (0);
var state_14637__$1 = (function (){var statearr_14674 = state_14637;
(statearr_14674[(20)] = inst_14579);

(statearr_14674[(21)] = inst_14577);

(statearr_14674[(9)] = inst_14578);

(statearr_14674[(11)] = inst_14580);

(statearr_14674[(27)] = inst_14612);

return statearr_14674;
})();
var statearr_14675_14746 = state_14637__$1;
(statearr_14675_14746[(2)] = null);

(statearr_14675_14746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (43))){
var state_14637__$1 = state_14637;
var statearr_14676_14747 = state_14637__$1;
(statearr_14676_14747[(2)] = null);

(statearr_14676_14747[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (29))){
var inst_14621 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14677_14748 = state_14637__$1;
(statearr_14677_14748[(2)] = inst_14621);

(statearr_14677_14748[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (44))){
var inst_14630 = (state_14637[(2)]);
var state_14637__$1 = (function (){var statearr_14678 = state_14637;
(statearr_14678[(28)] = inst_14630);

return statearr_14678;
})();
var statearr_14679_14749 = state_14637__$1;
(statearr_14679_14749[(2)] = null);

(statearr_14679_14749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (6))){
var inst_14569 = (state_14637[(29)]);
var inst_14568 = cljs.core.deref.call(null,cs);
var inst_14569__$1 = cljs.core.keys.call(null,inst_14568);
var inst_14570 = cljs.core.count.call(null,inst_14569__$1);
var inst_14571 = cljs.core.reset_BANG_.call(null,dctr,inst_14570);
var inst_14576 = cljs.core.seq.call(null,inst_14569__$1);
var inst_14577 = inst_14576;
var inst_14578 = null;
var inst_14579 = (0);
var inst_14580 = (0);
var state_14637__$1 = (function (){var statearr_14680 = state_14637;
(statearr_14680[(30)] = inst_14571);

(statearr_14680[(20)] = inst_14579);

(statearr_14680[(21)] = inst_14577);

(statearr_14680[(9)] = inst_14578);

(statearr_14680[(11)] = inst_14580);

(statearr_14680[(29)] = inst_14569__$1);

return statearr_14680;
})();
var statearr_14681_14750 = state_14637__$1;
(statearr_14681_14750[(2)] = null);

(statearr_14681_14750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (28))){
var inst_14596 = (state_14637[(25)]);
var inst_14577 = (state_14637[(21)]);
var inst_14596__$1 = cljs.core.seq.call(null,inst_14577);
var state_14637__$1 = (function (){var statearr_14682 = state_14637;
(statearr_14682[(25)] = inst_14596__$1);

return statearr_14682;
})();
if(inst_14596__$1){
var statearr_14683_14751 = state_14637__$1;
(statearr_14683_14751[(1)] = (33));

} else {
var statearr_14684_14752 = state_14637__$1;
(statearr_14684_14752[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (25))){
var inst_14579 = (state_14637[(20)]);
var inst_14580 = (state_14637[(11)]);
var inst_14582 = (inst_14580 < inst_14579);
var inst_14583 = inst_14582;
var state_14637__$1 = state_14637;
if(cljs.core.truth_(inst_14583)){
var statearr_14685_14753 = state_14637__$1;
(statearr_14685_14753[(1)] = (27));

} else {
var statearr_14686_14754 = state_14637__$1;
(statearr_14686_14754[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (34))){
var state_14637__$1 = state_14637;
var statearr_14687_14755 = state_14637__$1;
(statearr_14687_14755[(2)] = null);

(statearr_14687_14755[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (17))){
var state_14637__$1 = state_14637;
var statearr_14688_14756 = state_14637__$1;
(statearr_14688_14756[(2)] = null);

(statearr_14688_14756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (3))){
var inst_14635 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14637__$1,inst_14635);
} else {
if((state_val_14638 === (12))){
var inst_14564 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14689_14757 = state_14637__$1;
(statearr_14689_14757[(2)] = inst_14564);

(statearr_14689_14757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (2))){
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14637__$1,(4),ch);
} else {
if((state_val_14638 === (23))){
var state_14637__$1 = state_14637;
var statearr_14690_14758 = state_14637__$1;
(statearr_14690_14758[(2)] = null);

(statearr_14690_14758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (35))){
var inst_14619 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14691_14759 = state_14637__$1;
(statearr_14691_14759[(2)] = inst_14619);

(statearr_14691_14759[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (19))){
var inst_14538 = (state_14637[(7)]);
var inst_14542 = cljs.core.chunk_first.call(null,inst_14538);
var inst_14543 = cljs.core.chunk_rest.call(null,inst_14538);
var inst_14544 = cljs.core.count.call(null,inst_14542);
var inst_14518 = inst_14543;
var inst_14519 = inst_14542;
var inst_14520 = inst_14544;
var inst_14521 = (0);
var state_14637__$1 = (function (){var statearr_14692 = state_14637;
(statearr_14692[(13)] = inst_14518);

(statearr_14692[(14)] = inst_14519);

(statearr_14692[(15)] = inst_14521);

(statearr_14692[(16)] = inst_14520);

return statearr_14692;
})();
var statearr_14693_14760 = state_14637__$1;
(statearr_14693_14760[(2)] = null);

(statearr_14693_14760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (11))){
var inst_14518 = (state_14637[(13)]);
var inst_14538 = (state_14637[(7)]);
var inst_14538__$1 = cljs.core.seq.call(null,inst_14518);
var state_14637__$1 = (function (){var statearr_14694 = state_14637;
(statearr_14694[(7)] = inst_14538__$1);

return statearr_14694;
})();
if(inst_14538__$1){
var statearr_14695_14761 = state_14637__$1;
(statearr_14695_14761[(1)] = (16));

} else {
var statearr_14696_14762 = state_14637__$1;
(statearr_14696_14762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (9))){
var inst_14566 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14697_14763 = state_14637__$1;
(statearr_14697_14763[(2)] = inst_14566);

(statearr_14697_14763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (5))){
var inst_14516 = cljs.core.deref.call(null,cs);
var inst_14517 = cljs.core.seq.call(null,inst_14516);
var inst_14518 = inst_14517;
var inst_14519 = null;
var inst_14520 = (0);
var inst_14521 = (0);
var state_14637__$1 = (function (){var statearr_14698 = state_14637;
(statearr_14698[(13)] = inst_14518);

(statearr_14698[(14)] = inst_14519);

(statearr_14698[(15)] = inst_14521);

(statearr_14698[(16)] = inst_14520);

return statearr_14698;
})();
var statearr_14699_14764 = state_14637__$1;
(statearr_14699_14764[(2)] = null);

(statearr_14699_14764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (14))){
var state_14637__$1 = state_14637;
var statearr_14700_14765 = state_14637__$1;
(statearr_14700_14765[(2)] = null);

(statearr_14700_14765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (45))){
var inst_14627 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14701_14766 = state_14637__$1;
(statearr_14701_14766[(2)] = inst_14627);

(statearr_14701_14766[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (26))){
var inst_14569 = (state_14637[(29)]);
var inst_14623 = (state_14637[(2)]);
var inst_14624 = cljs.core.seq.call(null,inst_14569);
var state_14637__$1 = (function (){var statearr_14702 = state_14637;
(statearr_14702[(31)] = inst_14623);

return statearr_14702;
})();
if(inst_14624){
var statearr_14703_14767 = state_14637__$1;
(statearr_14703_14767[(1)] = (42));

} else {
var statearr_14704_14768 = state_14637__$1;
(statearr_14704_14768[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (16))){
var inst_14538 = (state_14637[(7)]);
var inst_14540 = cljs.core.chunked_seq_QMARK_.call(null,inst_14538);
var state_14637__$1 = state_14637;
if(inst_14540){
var statearr_14705_14769 = state_14637__$1;
(statearr_14705_14769[(1)] = (19));

} else {
var statearr_14706_14770 = state_14637__$1;
(statearr_14706_14770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (38))){
var inst_14616 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14707_14771 = state_14637__$1;
(statearr_14707_14771[(2)] = inst_14616);

(statearr_14707_14771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (30))){
var state_14637__$1 = state_14637;
var statearr_14708_14772 = state_14637__$1;
(statearr_14708_14772[(2)] = null);

(statearr_14708_14772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (10))){
var inst_14519 = (state_14637[(14)]);
var inst_14521 = (state_14637[(15)]);
var inst_14527 = cljs.core._nth.call(null,inst_14519,inst_14521);
var inst_14528 = cljs.core.nth.call(null,inst_14527,(0),null);
var inst_14529 = cljs.core.nth.call(null,inst_14527,(1),null);
var state_14637__$1 = (function (){var statearr_14709 = state_14637;
(statearr_14709[(26)] = inst_14528);

return statearr_14709;
})();
if(cljs.core.truth_(inst_14529)){
var statearr_14710_14773 = state_14637__$1;
(statearr_14710_14773[(1)] = (13));

} else {
var statearr_14711_14774 = state_14637__$1;
(statearr_14711_14774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (18))){
var inst_14562 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14712_14775 = state_14637__$1;
(statearr_14712_14775[(2)] = inst_14562);

(statearr_14712_14775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (42))){
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14637__$1,(45),dchan);
} else {
if((state_val_14638 === (37))){
var inst_14596 = (state_14637[(25)]);
var inst_14509 = (state_14637[(10)]);
var inst_14605 = (state_14637[(23)]);
var inst_14605__$1 = cljs.core.first.call(null,inst_14596);
var inst_14606 = cljs.core.async.put_BANG_.call(null,inst_14605__$1,inst_14509,done);
var state_14637__$1 = (function (){var statearr_14713 = state_14637;
(statearr_14713[(23)] = inst_14605__$1);

return statearr_14713;
})();
if(cljs.core.truth_(inst_14606)){
var statearr_14714_14776 = state_14637__$1;
(statearr_14714_14776[(1)] = (39));

} else {
var statearr_14715_14777 = state_14637__$1;
(statearr_14715_14777[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (8))){
var inst_14521 = (state_14637[(15)]);
var inst_14520 = (state_14637[(16)]);
var inst_14523 = (inst_14521 < inst_14520);
var inst_14524 = inst_14523;
var state_14637__$1 = state_14637;
if(cljs.core.truth_(inst_14524)){
var statearr_14716_14778 = state_14637__$1;
(statearr_14716_14778[(1)] = (10));

} else {
var statearr_14717_14779 = state_14637__$1;
(statearr_14717_14779[(1)] = (11));

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
});})(c__7080__auto___14725,cs,m,dchan,dctr,done))
;
return ((function (switch__7018__auto__,c__7080__auto___14725,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7019__auto__ = null;
var cljs$core$async$mult_$_state_machine__7019__auto____0 = (function (){
var statearr_14721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14721[(0)] = cljs$core$async$mult_$_state_machine__7019__auto__);

(statearr_14721[(1)] = (1));

return statearr_14721;
});
var cljs$core$async$mult_$_state_machine__7019__auto____1 = (function (state_14637){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_14637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e14722){if((e14722 instanceof Object)){
var ex__7022__auto__ = e14722;
var statearr_14723_14780 = state_14637;
(statearr_14723_14780[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14781 = state_14637;
state_14637 = G__14781;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7019__auto__ = function(state_14637){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7019__auto____1.call(this,state_14637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7019__auto____0;
cljs$core$async$mult_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7019__auto____1;
return cljs$core$async$mult_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___14725,cs,m,dchan,dctr,done))
})();
var state__7082__auto__ = (function (){var statearr_14724 = f__7081__auto__.call(null);
(statearr_14724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___14725);

return statearr_14724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___14725,cs,m,dchan,dctr,done))
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
var G__14783 = arguments.length;
switch (G__14783) {
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

cljs.core.async.Mix = (function (){var obj14786 = {};
return obj14786;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14791){
var map__14792 = p__14791;
var map__14792__$1 = ((cljs.core.seq_QMARK_.call(null,map__14792))?cljs.core.apply.call(null,cljs.core.hash_map,map__14792):map__14792);
var opts = map__14792__$1;
var statearr_14793_14796 = state;
(statearr_14793_14796[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14792,map__14792__$1,opts){
return (function (val){
var statearr_14794_14797 = state;
(statearr_14794_14797[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14792,map__14792__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14795_14798 = state;
(statearr_14795_14798[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14787){
var G__14788 = cljs.core.first.call(null,seq14787);
var seq14787__$1 = cljs.core.next.call(null,seq14787);
var G__14789 = cljs.core.first.call(null,seq14787__$1);
var seq14787__$2 = cljs.core.next.call(null,seq14787__$1);
var G__14790 = cljs.core.first.call(null,seq14787__$2);
var seq14787__$3 = cljs.core.next.call(null,seq14787__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14788,G__14789,G__14790,seq14787__$3);
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
if(typeof cljs.core.async.t14918 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14918 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14919){
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
this.meta14919 = meta14919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14918.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14918.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14918.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14918.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14918.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14918.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t14918.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14918.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14920){
var self__ = this;
var _14920__$1 = this;
return self__.meta14919;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14920,meta14919__$1){
var self__ = this;
var _14920__$1 = this;
return (new cljs.core.async.t14918(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14919__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14918.cljs$lang$type = true;

cljs.core.async.t14918.cljs$lang$ctorStr = "cljs.core.async/t14918";

cljs.core.async.t14918.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t14918");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14918 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14918(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14919){
return (new cljs.core.async.t14918(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14919));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14918(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7080__auto___15037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14990){
var state_val_14991 = (state_14990[(1)]);
if((state_val_14991 === (7))){
var inst_14934 = (state_14990[(7)]);
var inst_14939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14934);
var state_14990__$1 = state_14990;
var statearr_14992_15038 = state_14990__$1;
(statearr_14992_15038[(2)] = inst_14939);

(statearr_14992_15038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (20))){
var inst_14949 = (state_14990[(8)]);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14990__$1,(23),out,inst_14949);
} else {
if((state_val_14991 === (1))){
var inst_14924 = (state_14990[(9)]);
var inst_14924__$1 = calc_state.call(null);
var inst_14925 = cljs.core.seq_QMARK_.call(null,inst_14924__$1);
var state_14990__$1 = (function (){var statearr_14993 = state_14990;
(statearr_14993[(9)] = inst_14924__$1);

return statearr_14993;
})();
if(inst_14925){
var statearr_14994_15039 = state_14990__$1;
(statearr_14994_15039[(1)] = (2));

} else {
var statearr_14995_15040 = state_14990__$1;
(statearr_14995_15040[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (24))){
var inst_14942 = (state_14990[(10)]);
var inst_14934 = inst_14942;
var state_14990__$1 = (function (){var statearr_14996 = state_14990;
(statearr_14996[(7)] = inst_14934);

return statearr_14996;
})();
var statearr_14997_15041 = state_14990__$1;
(statearr_14997_15041[(2)] = null);

(statearr_14997_15041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (4))){
var inst_14924 = (state_14990[(9)]);
var inst_14930 = (state_14990[(2)]);
var inst_14931 = cljs.core.get.call(null,inst_14930,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14932 = cljs.core.get.call(null,inst_14930,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14933 = cljs.core.get.call(null,inst_14930,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14934 = inst_14924;
var state_14990__$1 = (function (){var statearr_14998 = state_14990;
(statearr_14998[(11)] = inst_14932);

(statearr_14998[(12)] = inst_14931);

(statearr_14998[(13)] = inst_14933);

(statearr_14998[(7)] = inst_14934);

return statearr_14998;
})();
var statearr_14999_15042 = state_14990__$1;
(statearr_14999_15042[(2)] = null);

(statearr_14999_15042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (15))){
var state_14990__$1 = state_14990;
var statearr_15000_15043 = state_14990__$1;
(statearr_15000_15043[(2)] = null);

(statearr_15000_15043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (21))){
var inst_14942 = (state_14990[(10)]);
var inst_14934 = inst_14942;
var state_14990__$1 = (function (){var statearr_15001 = state_14990;
(statearr_15001[(7)] = inst_14934);

return statearr_15001;
})();
var statearr_15002_15044 = state_14990__$1;
(statearr_15002_15044[(2)] = null);

(statearr_15002_15044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (13))){
var inst_14986 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15003_15045 = state_14990__$1;
(statearr_15003_15045[(2)] = inst_14986);

(statearr_15003_15045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (22))){
var inst_14984 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15004_15046 = state_14990__$1;
(statearr_15004_15046[(2)] = inst_14984);

(statearr_15004_15046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (6))){
var inst_14988 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14990__$1,inst_14988);
} else {
if((state_val_14991 === (25))){
var state_14990__$1 = state_14990;
var statearr_15005_15047 = state_14990__$1;
(statearr_15005_15047[(2)] = null);

(statearr_15005_15047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (17))){
var inst_14964 = (state_14990[(14)]);
var state_14990__$1 = state_14990;
var statearr_15006_15048 = state_14990__$1;
(statearr_15006_15048[(2)] = inst_14964);

(statearr_15006_15048[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (3))){
var inst_14924 = (state_14990[(9)]);
var state_14990__$1 = state_14990;
var statearr_15007_15049 = state_14990__$1;
(statearr_15007_15049[(2)] = inst_14924);

(statearr_15007_15049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (12))){
var inst_14950 = (state_14990[(15)]);
var inst_14945 = (state_14990[(16)]);
var inst_14964 = (state_14990[(14)]);
var inst_14964__$1 = inst_14945.call(null,inst_14950);
var state_14990__$1 = (function (){var statearr_15008 = state_14990;
(statearr_15008[(14)] = inst_14964__$1);

return statearr_15008;
})();
if(cljs.core.truth_(inst_14964__$1)){
var statearr_15009_15050 = state_14990__$1;
(statearr_15009_15050[(1)] = (17));

} else {
var statearr_15010_15051 = state_14990__$1;
(statearr_15010_15051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (2))){
var inst_14924 = (state_14990[(9)]);
var inst_14927 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14924);
var state_14990__$1 = state_14990;
var statearr_15011_15052 = state_14990__$1;
(statearr_15011_15052[(2)] = inst_14927);

(statearr_15011_15052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (23))){
var inst_14975 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14975)){
var statearr_15012_15053 = state_14990__$1;
(statearr_15012_15053[(1)] = (24));

} else {
var statearr_15013_15054 = state_14990__$1;
(statearr_15013_15054[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (19))){
var inst_14972 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14972)){
var statearr_15014_15055 = state_14990__$1;
(statearr_15014_15055[(1)] = (20));

} else {
var statearr_15015_15056 = state_14990__$1;
(statearr_15015_15056[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (11))){
var inst_14949 = (state_14990[(8)]);
var inst_14955 = (inst_14949 == null);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14955)){
var statearr_15016_15057 = state_14990__$1;
(statearr_15016_15057[(1)] = (14));

} else {
var statearr_15017_15058 = state_14990__$1;
(statearr_15017_15058[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (9))){
var inst_14942 = (state_14990[(10)]);
var inst_14942__$1 = (state_14990[(2)]);
var inst_14943 = cljs.core.get.call(null,inst_14942__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14944 = cljs.core.get.call(null,inst_14942__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14945 = cljs.core.get.call(null,inst_14942__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14990__$1 = (function (){var statearr_15018 = state_14990;
(statearr_15018[(16)] = inst_14945);

(statearr_15018[(17)] = inst_14944);

(statearr_15018[(10)] = inst_14942__$1);

return statearr_15018;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14990__$1,(10),inst_14943);
} else {
if((state_val_14991 === (5))){
var inst_14934 = (state_14990[(7)]);
var inst_14937 = cljs.core.seq_QMARK_.call(null,inst_14934);
var state_14990__$1 = state_14990;
if(inst_14937){
var statearr_15019_15059 = state_14990__$1;
(statearr_15019_15059[(1)] = (7));

} else {
var statearr_15020_15060 = state_14990__$1;
(statearr_15020_15060[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (14))){
var inst_14950 = (state_14990[(15)]);
var inst_14957 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14950);
var state_14990__$1 = state_14990;
var statearr_15021_15061 = state_14990__$1;
(statearr_15021_15061[(2)] = inst_14957);

(statearr_15021_15061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (26))){
var inst_14980 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15022_15062 = state_14990__$1;
(statearr_15022_15062[(2)] = inst_14980);

(statearr_15022_15062[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (16))){
var inst_14960 = (state_14990[(2)]);
var inst_14961 = calc_state.call(null);
var inst_14934 = inst_14961;
var state_14990__$1 = (function (){var statearr_15023 = state_14990;
(statearr_15023[(18)] = inst_14960);

(statearr_15023[(7)] = inst_14934);

return statearr_15023;
})();
var statearr_15024_15063 = state_14990__$1;
(statearr_15024_15063[(2)] = null);

(statearr_15024_15063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (10))){
var inst_14950 = (state_14990[(15)]);
var inst_14949 = (state_14990[(8)]);
var inst_14948 = (state_14990[(2)]);
var inst_14949__$1 = cljs.core.nth.call(null,inst_14948,(0),null);
var inst_14950__$1 = cljs.core.nth.call(null,inst_14948,(1),null);
var inst_14951 = (inst_14949__$1 == null);
var inst_14952 = cljs.core._EQ_.call(null,inst_14950__$1,change);
var inst_14953 = (inst_14951) || (inst_14952);
var state_14990__$1 = (function (){var statearr_15025 = state_14990;
(statearr_15025[(15)] = inst_14950__$1);

(statearr_15025[(8)] = inst_14949__$1);

return statearr_15025;
})();
if(cljs.core.truth_(inst_14953)){
var statearr_15026_15064 = state_14990__$1;
(statearr_15026_15064[(1)] = (11));

} else {
var statearr_15027_15065 = state_14990__$1;
(statearr_15027_15065[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (18))){
var inst_14950 = (state_14990[(15)]);
var inst_14945 = (state_14990[(16)]);
var inst_14944 = (state_14990[(17)]);
var inst_14967 = cljs.core.empty_QMARK_.call(null,inst_14945);
var inst_14968 = inst_14944.call(null,inst_14950);
var inst_14969 = cljs.core.not.call(null,inst_14968);
var inst_14970 = (inst_14967) && (inst_14969);
var state_14990__$1 = state_14990;
var statearr_15028_15066 = state_14990__$1;
(statearr_15028_15066[(2)] = inst_14970);

(statearr_15028_15066[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (8))){
var inst_14934 = (state_14990[(7)]);
var state_14990__$1 = state_14990;
var statearr_15029_15067 = state_14990__$1;
(statearr_15029_15067[(2)] = inst_14934);

(statearr_15029_15067[(1)] = (9));


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
});})(c__7080__auto___15037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7018__auto__,c__7080__auto___15037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7019__auto__ = null;
var cljs$core$async$mix_$_state_machine__7019__auto____0 = (function (){
var statearr_15033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15033[(0)] = cljs$core$async$mix_$_state_machine__7019__auto__);

(statearr_15033[(1)] = (1));

return statearr_15033;
});
var cljs$core$async$mix_$_state_machine__7019__auto____1 = (function (state_14990){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_14990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15034){if((e15034 instanceof Object)){
var ex__7022__auto__ = e15034;
var statearr_15035_15068 = state_14990;
(statearr_15035_15068[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15069 = state_14990;
state_14990 = G__15069;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7019__auto__ = function(state_14990){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7019__auto____1.call(this,state_14990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7019__auto____0;
cljs$core$async$mix_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7019__auto____1;
return cljs$core$async$mix_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7082__auto__ = (function (){var statearr_15036 = f__7081__auto__.call(null);
(statearr_15036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15037);

return statearr_15036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj15071 = {};
return obj15071;
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
var G__15073 = arguments.length;
switch (G__15073) {
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
var G__15077 = arguments.length;
switch (G__15077) {
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
return (function (p1__15075_SHARP_){
if(cljs.core.truth_(p1__15075_SHARP_.call(null,topic))){
return p1__15075_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15075_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4099__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15078 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15078 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta15079){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta15079 = meta15079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15078.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15078.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15078.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t15078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15078.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15080){
var self__ = this;
var _15080__$1 = this;
return self__.meta15079;
});})(mults,ensure_mult))
;

cljs.core.async.t15078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15080,meta15079__$1){
var self__ = this;
var _15080__$1 = this;
return (new cljs.core.async.t15078(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta15079__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15078.cljs$lang$type = true;

cljs.core.async.t15078.cljs$lang$ctorStr = "cljs.core.async/t15078";

cljs.core.async.t15078.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15078");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15078 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t15078(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15079){
return (new cljs.core.async.t15078(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15079));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15078(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7080__auto___15201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15201,mults,ensure_mult,p){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15201,mults,ensure_mult,p){
return (function (state_15152){
var state_val_15153 = (state_15152[(1)]);
if((state_val_15153 === (7))){
var inst_15148 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15154_15202 = state_15152__$1;
(statearr_15154_15202[(2)] = inst_15148);

(statearr_15154_15202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (20))){
var state_15152__$1 = state_15152;
var statearr_15155_15203 = state_15152__$1;
(statearr_15155_15203[(2)] = null);

(statearr_15155_15203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (1))){
var state_15152__$1 = state_15152;
var statearr_15156_15204 = state_15152__$1;
(statearr_15156_15204[(2)] = null);

(statearr_15156_15204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (24))){
var inst_15131 = (state_15152[(7)]);
var inst_15140 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15131);
var state_15152__$1 = state_15152;
var statearr_15157_15205 = state_15152__$1;
(statearr_15157_15205[(2)] = inst_15140);

(statearr_15157_15205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (4))){
var inst_15083 = (state_15152[(8)]);
var inst_15083__$1 = (state_15152[(2)]);
var inst_15084 = (inst_15083__$1 == null);
var state_15152__$1 = (function (){var statearr_15158 = state_15152;
(statearr_15158[(8)] = inst_15083__$1);

return statearr_15158;
})();
if(cljs.core.truth_(inst_15084)){
var statearr_15159_15206 = state_15152__$1;
(statearr_15159_15206[(1)] = (5));

} else {
var statearr_15160_15207 = state_15152__$1;
(statearr_15160_15207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (15))){
var inst_15125 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15161_15208 = state_15152__$1;
(statearr_15161_15208[(2)] = inst_15125);

(statearr_15161_15208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (21))){
var inst_15145 = (state_15152[(2)]);
var state_15152__$1 = (function (){var statearr_15162 = state_15152;
(statearr_15162[(9)] = inst_15145);

return statearr_15162;
})();
var statearr_15163_15209 = state_15152__$1;
(statearr_15163_15209[(2)] = null);

(statearr_15163_15209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (13))){
var inst_15107 = (state_15152[(10)]);
var inst_15109 = cljs.core.chunked_seq_QMARK_.call(null,inst_15107);
var state_15152__$1 = state_15152;
if(inst_15109){
var statearr_15164_15210 = state_15152__$1;
(statearr_15164_15210[(1)] = (16));

} else {
var statearr_15165_15211 = state_15152__$1;
(statearr_15165_15211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (22))){
var inst_15137 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
if(cljs.core.truth_(inst_15137)){
var statearr_15166_15212 = state_15152__$1;
(statearr_15166_15212[(1)] = (23));

} else {
var statearr_15167_15213 = state_15152__$1;
(statearr_15167_15213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (6))){
var inst_15131 = (state_15152[(7)]);
var inst_15133 = (state_15152[(11)]);
var inst_15083 = (state_15152[(8)]);
var inst_15131__$1 = topic_fn.call(null,inst_15083);
var inst_15132 = cljs.core.deref.call(null,mults);
var inst_15133__$1 = cljs.core.get.call(null,inst_15132,inst_15131__$1);
var state_15152__$1 = (function (){var statearr_15168 = state_15152;
(statearr_15168[(7)] = inst_15131__$1);

(statearr_15168[(11)] = inst_15133__$1);

return statearr_15168;
})();
if(cljs.core.truth_(inst_15133__$1)){
var statearr_15169_15214 = state_15152__$1;
(statearr_15169_15214[(1)] = (19));

} else {
var statearr_15170_15215 = state_15152__$1;
(statearr_15170_15215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (25))){
var inst_15142 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15171_15216 = state_15152__$1;
(statearr_15171_15216[(2)] = inst_15142);

(statearr_15171_15216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (17))){
var inst_15107 = (state_15152[(10)]);
var inst_15116 = cljs.core.first.call(null,inst_15107);
var inst_15117 = cljs.core.async.muxch_STAR_.call(null,inst_15116);
var inst_15118 = cljs.core.async.close_BANG_.call(null,inst_15117);
var inst_15119 = cljs.core.next.call(null,inst_15107);
var inst_15093 = inst_15119;
var inst_15094 = null;
var inst_15095 = (0);
var inst_15096 = (0);
var state_15152__$1 = (function (){var statearr_15172 = state_15152;
(statearr_15172[(12)] = inst_15095);

(statearr_15172[(13)] = inst_15096);

(statearr_15172[(14)] = inst_15118);

(statearr_15172[(15)] = inst_15093);

(statearr_15172[(16)] = inst_15094);

return statearr_15172;
})();
var statearr_15173_15217 = state_15152__$1;
(statearr_15173_15217[(2)] = null);

(statearr_15173_15217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (3))){
var inst_15150 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15152__$1,inst_15150);
} else {
if((state_val_15153 === (12))){
var inst_15127 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15174_15218 = state_15152__$1;
(statearr_15174_15218[(2)] = inst_15127);

(statearr_15174_15218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (2))){
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15152__$1,(4),ch);
} else {
if((state_val_15153 === (23))){
var state_15152__$1 = state_15152;
var statearr_15175_15219 = state_15152__$1;
(statearr_15175_15219[(2)] = null);

(statearr_15175_15219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (19))){
var inst_15133 = (state_15152[(11)]);
var inst_15083 = (state_15152[(8)]);
var inst_15135 = cljs.core.async.muxch_STAR_.call(null,inst_15133);
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15152__$1,(22),inst_15135,inst_15083);
} else {
if((state_val_15153 === (11))){
var inst_15093 = (state_15152[(15)]);
var inst_15107 = (state_15152[(10)]);
var inst_15107__$1 = cljs.core.seq.call(null,inst_15093);
var state_15152__$1 = (function (){var statearr_15176 = state_15152;
(statearr_15176[(10)] = inst_15107__$1);

return statearr_15176;
})();
if(inst_15107__$1){
var statearr_15177_15220 = state_15152__$1;
(statearr_15177_15220[(1)] = (13));

} else {
var statearr_15178_15221 = state_15152__$1;
(statearr_15178_15221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (9))){
var inst_15129 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15179_15222 = state_15152__$1;
(statearr_15179_15222[(2)] = inst_15129);

(statearr_15179_15222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (5))){
var inst_15090 = cljs.core.deref.call(null,mults);
var inst_15091 = cljs.core.vals.call(null,inst_15090);
var inst_15092 = cljs.core.seq.call(null,inst_15091);
var inst_15093 = inst_15092;
var inst_15094 = null;
var inst_15095 = (0);
var inst_15096 = (0);
var state_15152__$1 = (function (){var statearr_15180 = state_15152;
(statearr_15180[(12)] = inst_15095);

(statearr_15180[(13)] = inst_15096);

(statearr_15180[(15)] = inst_15093);

(statearr_15180[(16)] = inst_15094);

return statearr_15180;
})();
var statearr_15181_15223 = state_15152__$1;
(statearr_15181_15223[(2)] = null);

(statearr_15181_15223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (14))){
var state_15152__$1 = state_15152;
var statearr_15185_15224 = state_15152__$1;
(statearr_15185_15224[(2)] = null);

(statearr_15185_15224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (16))){
var inst_15107 = (state_15152[(10)]);
var inst_15111 = cljs.core.chunk_first.call(null,inst_15107);
var inst_15112 = cljs.core.chunk_rest.call(null,inst_15107);
var inst_15113 = cljs.core.count.call(null,inst_15111);
var inst_15093 = inst_15112;
var inst_15094 = inst_15111;
var inst_15095 = inst_15113;
var inst_15096 = (0);
var state_15152__$1 = (function (){var statearr_15186 = state_15152;
(statearr_15186[(12)] = inst_15095);

(statearr_15186[(13)] = inst_15096);

(statearr_15186[(15)] = inst_15093);

(statearr_15186[(16)] = inst_15094);

return statearr_15186;
})();
var statearr_15187_15225 = state_15152__$1;
(statearr_15187_15225[(2)] = null);

(statearr_15187_15225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (10))){
var inst_15095 = (state_15152[(12)]);
var inst_15096 = (state_15152[(13)]);
var inst_15093 = (state_15152[(15)]);
var inst_15094 = (state_15152[(16)]);
var inst_15101 = cljs.core._nth.call(null,inst_15094,inst_15096);
var inst_15102 = cljs.core.async.muxch_STAR_.call(null,inst_15101);
var inst_15103 = cljs.core.async.close_BANG_.call(null,inst_15102);
var inst_15104 = (inst_15096 + (1));
var tmp15182 = inst_15095;
var tmp15183 = inst_15093;
var tmp15184 = inst_15094;
var inst_15093__$1 = tmp15183;
var inst_15094__$1 = tmp15184;
var inst_15095__$1 = tmp15182;
var inst_15096__$1 = inst_15104;
var state_15152__$1 = (function (){var statearr_15188 = state_15152;
(statearr_15188[(12)] = inst_15095__$1);

(statearr_15188[(13)] = inst_15096__$1);

(statearr_15188[(17)] = inst_15103);

(statearr_15188[(15)] = inst_15093__$1);

(statearr_15188[(16)] = inst_15094__$1);

return statearr_15188;
})();
var statearr_15189_15226 = state_15152__$1;
(statearr_15189_15226[(2)] = null);

(statearr_15189_15226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (18))){
var inst_15122 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15190_15227 = state_15152__$1;
(statearr_15190_15227[(2)] = inst_15122);

(statearr_15190_15227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (8))){
var inst_15095 = (state_15152[(12)]);
var inst_15096 = (state_15152[(13)]);
var inst_15098 = (inst_15096 < inst_15095);
var inst_15099 = inst_15098;
var state_15152__$1 = state_15152;
if(cljs.core.truth_(inst_15099)){
var statearr_15191_15228 = state_15152__$1;
(statearr_15191_15228[(1)] = (10));

} else {
var statearr_15192_15229 = state_15152__$1;
(statearr_15192_15229[(1)] = (11));

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
});})(c__7080__auto___15201,mults,ensure_mult,p))
;
return ((function (switch__7018__auto__,c__7080__auto___15201,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_15196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15196[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_15196[(1)] = (1));

return statearr_15196;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15152){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15197){if((e15197 instanceof Object)){
var ex__7022__auto__ = e15197;
var statearr_15198_15230 = state_15152;
(statearr_15198_15230[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15231 = state_15152;
state_15152 = G__15231;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15201,mults,ensure_mult,p))
})();
var state__7082__auto__ = (function (){var statearr_15199 = f__7081__auto__.call(null);
(statearr_15199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15201);

return statearr_15199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15201,mults,ensure_mult,p))
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
var G__15233 = arguments.length;
switch (G__15233) {
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
var G__15236 = arguments.length;
switch (G__15236) {
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
var G__15239 = arguments.length;
switch (G__15239) {
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
var c__7080__auto___15309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15309,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15309,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15278){
var state_val_15279 = (state_15278[(1)]);
if((state_val_15279 === (7))){
var state_15278__$1 = state_15278;
var statearr_15280_15310 = state_15278__$1;
(statearr_15280_15310[(2)] = null);

(statearr_15280_15310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (1))){
var state_15278__$1 = state_15278;
var statearr_15281_15311 = state_15278__$1;
(statearr_15281_15311[(2)] = null);

(statearr_15281_15311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (4))){
var inst_15242 = (state_15278[(7)]);
var inst_15244 = (inst_15242 < cnt);
var state_15278__$1 = state_15278;
if(cljs.core.truth_(inst_15244)){
var statearr_15282_15312 = state_15278__$1;
(statearr_15282_15312[(1)] = (6));

} else {
var statearr_15283_15313 = state_15278__$1;
(statearr_15283_15313[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (15))){
var inst_15274 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15284_15314 = state_15278__$1;
(statearr_15284_15314[(2)] = inst_15274);

(statearr_15284_15314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (13))){
var inst_15267 = cljs.core.async.close_BANG_.call(null,out);
var state_15278__$1 = state_15278;
var statearr_15285_15315 = state_15278__$1;
(statearr_15285_15315[(2)] = inst_15267);

(statearr_15285_15315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (6))){
var state_15278__$1 = state_15278;
var statearr_15286_15316 = state_15278__$1;
(statearr_15286_15316[(2)] = null);

(statearr_15286_15316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (3))){
var inst_15276 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15278__$1,inst_15276);
} else {
if((state_val_15279 === (12))){
var inst_15264 = (state_15278[(8)]);
var inst_15264__$1 = (state_15278[(2)]);
var inst_15265 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15264__$1);
var state_15278__$1 = (function (){var statearr_15287 = state_15278;
(statearr_15287[(8)] = inst_15264__$1);

return statearr_15287;
})();
if(cljs.core.truth_(inst_15265)){
var statearr_15288_15317 = state_15278__$1;
(statearr_15288_15317[(1)] = (13));

} else {
var statearr_15289_15318 = state_15278__$1;
(statearr_15289_15318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (2))){
var inst_15241 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15242 = (0);
var state_15278__$1 = (function (){var statearr_15290 = state_15278;
(statearr_15290[(9)] = inst_15241);

(statearr_15290[(7)] = inst_15242);

return statearr_15290;
})();
var statearr_15291_15319 = state_15278__$1;
(statearr_15291_15319[(2)] = null);

(statearr_15291_15319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (11))){
var inst_15242 = (state_15278[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15278,(10),Object,null,(9));
var inst_15251 = chs__$1.call(null,inst_15242);
var inst_15252 = done.call(null,inst_15242);
var inst_15253 = cljs.core.async.take_BANG_.call(null,inst_15251,inst_15252);
var state_15278__$1 = state_15278;
var statearr_15292_15320 = state_15278__$1;
(statearr_15292_15320[(2)] = inst_15253);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15278__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (9))){
var inst_15242 = (state_15278[(7)]);
var inst_15255 = (state_15278[(2)]);
var inst_15256 = (inst_15242 + (1));
var inst_15242__$1 = inst_15256;
var state_15278__$1 = (function (){var statearr_15293 = state_15278;
(statearr_15293[(10)] = inst_15255);

(statearr_15293[(7)] = inst_15242__$1);

return statearr_15293;
})();
var statearr_15294_15321 = state_15278__$1;
(statearr_15294_15321[(2)] = null);

(statearr_15294_15321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (5))){
var inst_15262 = (state_15278[(2)]);
var state_15278__$1 = (function (){var statearr_15295 = state_15278;
(statearr_15295[(11)] = inst_15262);

return statearr_15295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15278__$1,(12),dchan);
} else {
if((state_val_15279 === (14))){
var inst_15264 = (state_15278[(8)]);
var inst_15269 = cljs.core.apply.call(null,f,inst_15264);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15278__$1,(16),out,inst_15269);
} else {
if((state_val_15279 === (16))){
var inst_15271 = (state_15278[(2)]);
var state_15278__$1 = (function (){var statearr_15296 = state_15278;
(statearr_15296[(12)] = inst_15271);

return statearr_15296;
})();
var statearr_15297_15322 = state_15278__$1;
(statearr_15297_15322[(2)] = null);

(statearr_15297_15322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (10))){
var inst_15246 = (state_15278[(2)]);
var inst_15247 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15278__$1 = (function (){var statearr_15298 = state_15278;
(statearr_15298[(13)] = inst_15246);

return statearr_15298;
})();
var statearr_15299_15323 = state_15278__$1;
(statearr_15299_15323[(2)] = inst_15247);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15278__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (8))){
var inst_15260 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15300_15324 = state_15278__$1;
(statearr_15300_15324[(2)] = inst_15260);

(statearr_15300_15324[(1)] = (5));


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
});})(c__7080__auto___15309,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7018__auto__,c__7080__auto___15309,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_15304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15304[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_15304[(1)] = (1));

return statearr_15304;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15278){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15305){if((e15305 instanceof Object)){
var ex__7022__auto__ = e15305;
var statearr_15306_15325 = state_15278;
(statearr_15306_15325[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15326 = state_15278;
state_15278 = G__15326;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15309,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7082__auto__ = (function (){var statearr_15307 = f__7081__auto__.call(null);
(statearr_15307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15309);

return statearr_15307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15309,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15329 = arguments.length;
switch (G__15329) {
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
var c__7080__auto___15384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15384,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15384,out){
return (function (state_15359){
var state_val_15360 = (state_15359[(1)]);
if((state_val_15360 === (7))){
var inst_15339 = (state_15359[(7)]);
var inst_15338 = (state_15359[(8)]);
var inst_15338__$1 = (state_15359[(2)]);
var inst_15339__$1 = cljs.core.nth.call(null,inst_15338__$1,(0),null);
var inst_15340 = cljs.core.nth.call(null,inst_15338__$1,(1),null);
var inst_15341 = (inst_15339__$1 == null);
var state_15359__$1 = (function (){var statearr_15361 = state_15359;
(statearr_15361[(7)] = inst_15339__$1);

(statearr_15361[(8)] = inst_15338__$1);

(statearr_15361[(9)] = inst_15340);

return statearr_15361;
})();
if(cljs.core.truth_(inst_15341)){
var statearr_15362_15385 = state_15359__$1;
(statearr_15362_15385[(1)] = (8));

} else {
var statearr_15363_15386 = state_15359__$1;
(statearr_15363_15386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15360 === (1))){
var inst_15330 = cljs.core.vec.call(null,chs);
var inst_15331 = inst_15330;
var state_15359__$1 = (function (){var statearr_15364 = state_15359;
(statearr_15364[(10)] = inst_15331);

return statearr_15364;
})();
var statearr_15365_15387 = state_15359__$1;
(statearr_15365_15387[(2)] = null);

(statearr_15365_15387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15360 === (4))){
var inst_15331 = (state_15359[(10)]);
var state_15359__$1 = state_15359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15359__$1,(7),inst_15331);
} else {
if((state_val_15360 === (6))){
var inst_15355 = (state_15359[(2)]);
var state_15359__$1 = state_15359;
var statearr_15366_15388 = state_15359__$1;
(statearr_15366_15388[(2)] = inst_15355);

(statearr_15366_15388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15360 === (3))){
var inst_15357 = (state_15359[(2)]);
var state_15359__$1 = state_15359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15359__$1,inst_15357);
} else {
if((state_val_15360 === (2))){
var inst_15331 = (state_15359[(10)]);
var inst_15333 = cljs.core.count.call(null,inst_15331);
var inst_15334 = (inst_15333 > (0));
var state_15359__$1 = state_15359;
if(cljs.core.truth_(inst_15334)){
var statearr_15368_15389 = state_15359__$1;
(statearr_15368_15389[(1)] = (4));

} else {
var statearr_15369_15390 = state_15359__$1;
(statearr_15369_15390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15360 === (11))){
var inst_15331 = (state_15359[(10)]);
var inst_15348 = (state_15359[(2)]);
var tmp15367 = inst_15331;
var inst_15331__$1 = tmp15367;
var state_15359__$1 = (function (){var statearr_15370 = state_15359;
(statearr_15370[(11)] = inst_15348);

(statearr_15370[(10)] = inst_15331__$1);

return statearr_15370;
})();
var statearr_15371_15391 = state_15359__$1;
(statearr_15371_15391[(2)] = null);

(statearr_15371_15391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15360 === (9))){
var inst_15339 = (state_15359[(7)]);
var state_15359__$1 = state_15359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15359__$1,(11),out,inst_15339);
} else {
if((state_val_15360 === (5))){
var inst_15353 = cljs.core.async.close_BANG_.call(null,out);
var state_15359__$1 = state_15359;
var statearr_15372_15392 = state_15359__$1;
(statearr_15372_15392[(2)] = inst_15353);

(statearr_15372_15392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15360 === (10))){
var inst_15351 = (state_15359[(2)]);
var state_15359__$1 = state_15359;
var statearr_15373_15393 = state_15359__$1;
(statearr_15373_15393[(2)] = inst_15351);

(statearr_15373_15393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15360 === (8))){
var inst_15339 = (state_15359[(7)]);
var inst_15338 = (state_15359[(8)]);
var inst_15340 = (state_15359[(9)]);
var inst_15331 = (state_15359[(10)]);
var inst_15343 = (function (){var c = inst_15340;
var v = inst_15339;
var vec__15336 = inst_15338;
var cs = inst_15331;
return ((function (c,v,vec__15336,cs,inst_15339,inst_15338,inst_15340,inst_15331,state_val_15360,c__7080__auto___15384,out){
return (function (p1__15327_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15327_SHARP_);
});
;})(c,v,vec__15336,cs,inst_15339,inst_15338,inst_15340,inst_15331,state_val_15360,c__7080__auto___15384,out))
})();
var inst_15344 = cljs.core.filterv.call(null,inst_15343,inst_15331);
var inst_15331__$1 = inst_15344;
var state_15359__$1 = (function (){var statearr_15374 = state_15359;
(statearr_15374[(10)] = inst_15331__$1);

return statearr_15374;
})();
var statearr_15375_15394 = state_15359__$1;
(statearr_15375_15394[(2)] = null);

(statearr_15375_15394[(1)] = (2));


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
});})(c__7080__auto___15384,out))
;
return ((function (switch__7018__auto__,c__7080__auto___15384,out){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_15379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15379[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_15379[(1)] = (1));

return statearr_15379;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15359){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15380){if((e15380 instanceof Object)){
var ex__7022__auto__ = e15380;
var statearr_15381_15395 = state_15359;
(statearr_15381_15395[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15396 = state_15359;
state_15359 = G__15396;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15384,out))
})();
var state__7082__auto__ = (function (){var statearr_15382 = f__7081__auto__.call(null);
(statearr_15382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15384);

return statearr_15382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15384,out))
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
var G__15398 = arguments.length;
switch (G__15398) {
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
var c__7080__auto___15446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15446,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15446,out){
return (function (state_15422){
var state_val_15423 = (state_15422[(1)]);
if((state_val_15423 === (7))){
var inst_15404 = (state_15422[(7)]);
var inst_15404__$1 = (state_15422[(2)]);
var inst_15405 = (inst_15404__$1 == null);
var inst_15406 = cljs.core.not.call(null,inst_15405);
var state_15422__$1 = (function (){var statearr_15424 = state_15422;
(statearr_15424[(7)] = inst_15404__$1);

return statearr_15424;
})();
if(inst_15406){
var statearr_15425_15447 = state_15422__$1;
(statearr_15425_15447[(1)] = (8));

} else {
var statearr_15426_15448 = state_15422__$1;
(statearr_15426_15448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (1))){
var inst_15399 = (0);
var state_15422__$1 = (function (){var statearr_15427 = state_15422;
(statearr_15427[(8)] = inst_15399);

return statearr_15427;
})();
var statearr_15428_15449 = state_15422__$1;
(statearr_15428_15449[(2)] = null);

(statearr_15428_15449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (4))){
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15422__$1,(7),ch);
} else {
if((state_val_15423 === (6))){
var inst_15417 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
var statearr_15429_15450 = state_15422__$1;
(statearr_15429_15450[(2)] = inst_15417);

(statearr_15429_15450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (3))){
var inst_15419 = (state_15422[(2)]);
var inst_15420 = cljs.core.async.close_BANG_.call(null,out);
var state_15422__$1 = (function (){var statearr_15430 = state_15422;
(statearr_15430[(9)] = inst_15419);

return statearr_15430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15422__$1,inst_15420);
} else {
if((state_val_15423 === (2))){
var inst_15399 = (state_15422[(8)]);
var inst_15401 = (inst_15399 < n);
var state_15422__$1 = state_15422;
if(cljs.core.truth_(inst_15401)){
var statearr_15431_15451 = state_15422__$1;
(statearr_15431_15451[(1)] = (4));

} else {
var statearr_15432_15452 = state_15422__$1;
(statearr_15432_15452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (11))){
var inst_15399 = (state_15422[(8)]);
var inst_15409 = (state_15422[(2)]);
var inst_15410 = (inst_15399 + (1));
var inst_15399__$1 = inst_15410;
var state_15422__$1 = (function (){var statearr_15433 = state_15422;
(statearr_15433[(10)] = inst_15409);

(statearr_15433[(8)] = inst_15399__$1);

return statearr_15433;
})();
var statearr_15434_15453 = state_15422__$1;
(statearr_15434_15453[(2)] = null);

(statearr_15434_15453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (9))){
var state_15422__$1 = state_15422;
var statearr_15435_15454 = state_15422__$1;
(statearr_15435_15454[(2)] = null);

(statearr_15435_15454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (5))){
var state_15422__$1 = state_15422;
var statearr_15436_15455 = state_15422__$1;
(statearr_15436_15455[(2)] = null);

(statearr_15436_15455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (10))){
var inst_15414 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
var statearr_15437_15456 = state_15422__$1;
(statearr_15437_15456[(2)] = inst_15414);

(statearr_15437_15456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15423 === (8))){
var inst_15404 = (state_15422[(7)]);
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15422__$1,(11),out,inst_15404);
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
});})(c__7080__auto___15446,out))
;
return ((function (switch__7018__auto__,c__7080__auto___15446,out){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_15441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15441[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_15441[(1)] = (1));

return statearr_15441;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15422){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15442){if((e15442 instanceof Object)){
var ex__7022__auto__ = e15442;
var statearr_15443_15457 = state_15422;
(statearr_15443_15457[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15458 = state_15422;
state_15422 = G__15458;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15446,out))
})();
var state__7082__auto__ = (function (){var statearr_15444 = f__7081__auto__.call(null);
(statearr_15444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15446);

return statearr_15444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15446,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15466 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15466 = (function (ch,f,map_LT_,meta15467){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15467 = meta15467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15469 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15469 = (function (fn1,_,meta15467,map_LT_,f,ch,meta15470){
this.fn1 = fn1;
this._ = _;
this.meta15467 = meta15467;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15470 = meta15470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15469.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15459_SHARP_){
return f1.call(null,(((p1__15459_SHARP_ == null))?null:self__.f.call(null,p1__15459_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15471){
var self__ = this;
var _15471__$1 = this;
return self__.meta15470;
});})(___$1))
;

cljs.core.async.t15469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15471,meta15470__$1){
var self__ = this;
var _15471__$1 = this;
return (new cljs.core.async.t15469(self__.fn1,self__._,self__.meta15467,self__.map_LT_,self__.f,self__.ch,meta15470__$1));
});})(___$1))
;

cljs.core.async.t15469.cljs$lang$type = true;

cljs.core.async.t15469.cljs$lang$ctorStr = "cljs.core.async/t15469";

cljs.core.async.t15469.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15469");
});})(___$1))
;

cljs.core.async.__GT_t15469 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15469(fn1__$1,___$2,meta15467__$1,map_LT___$1,f__$1,ch__$1,meta15470){
return (new cljs.core.async.t15469(fn1__$1,___$2,meta15467__$1,map_LT___$1,f__$1,ch__$1,meta15470));
});})(___$1))
;

}

return (new cljs.core.async.t15469(fn1,___$1,self__.meta15467,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15468){
var self__ = this;
var _15468__$1 = this;
return self__.meta15467;
});

cljs.core.async.t15466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15468,meta15467__$1){
var self__ = this;
var _15468__$1 = this;
return (new cljs.core.async.t15466(self__.ch,self__.f,self__.map_LT_,meta15467__$1));
});

cljs.core.async.t15466.cljs$lang$type = true;

cljs.core.async.t15466.cljs$lang$ctorStr = "cljs.core.async/t15466";

cljs.core.async.t15466.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15466");
});

cljs.core.async.__GT_t15466 = (function cljs$core$async$map_LT__$___GT_t15466(ch__$1,f__$1,map_LT___$1,meta15467){
return (new cljs.core.async.t15466(ch__$1,f__$1,map_LT___$1,meta15467));
});

}

return (new cljs.core.async.t15466(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15475 = (function (ch,f,map_GT_,meta15476){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15476 = meta15476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15477){
var self__ = this;
var _15477__$1 = this;
return self__.meta15476;
});

cljs.core.async.t15475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15477,meta15476__$1){
var self__ = this;
var _15477__$1 = this;
return (new cljs.core.async.t15475(self__.ch,self__.f,self__.map_GT_,meta15476__$1));
});

cljs.core.async.t15475.cljs$lang$type = true;

cljs.core.async.t15475.cljs$lang$ctorStr = "cljs.core.async/t15475";

cljs.core.async.t15475.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15475");
});

cljs.core.async.__GT_t15475 = (function cljs$core$async$map_GT__$___GT_t15475(ch__$1,f__$1,map_GT___$1,meta15476){
return (new cljs.core.async.t15475(ch__$1,f__$1,map_GT___$1,meta15476));
});

}

return (new cljs.core.async.t15475(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15481 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15481 = (function (ch,p,filter_GT_,meta15482){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15482 = meta15482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15483){
var self__ = this;
var _15483__$1 = this;
return self__.meta15482;
});

cljs.core.async.t15481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15483,meta15482__$1){
var self__ = this;
var _15483__$1 = this;
return (new cljs.core.async.t15481(self__.ch,self__.p,self__.filter_GT_,meta15482__$1));
});

cljs.core.async.t15481.cljs$lang$type = true;

cljs.core.async.t15481.cljs$lang$ctorStr = "cljs.core.async/t15481";

cljs.core.async.t15481.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write.call(null,writer__4679__auto__,"cljs.core.async/t15481");
});

cljs.core.async.__GT_t15481 = (function cljs$core$async$filter_GT__$___GT_t15481(ch__$1,p__$1,filter_GT___$1,meta15482){
return (new cljs.core.async.t15481(ch__$1,p__$1,filter_GT___$1,meta15482));
});

}

return (new cljs.core.async.t15481(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15485 = arguments.length;
switch (G__15485) {
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
var c__7080__auto___15528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15528,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15528,out){
return (function (state_15506){
var state_val_15507 = (state_15506[(1)]);
if((state_val_15507 === (7))){
var inst_15502 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
var statearr_15508_15529 = state_15506__$1;
(statearr_15508_15529[(2)] = inst_15502);

(statearr_15508_15529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (1))){
var state_15506__$1 = state_15506;
var statearr_15509_15530 = state_15506__$1;
(statearr_15509_15530[(2)] = null);

(statearr_15509_15530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (4))){
var inst_15488 = (state_15506[(7)]);
var inst_15488__$1 = (state_15506[(2)]);
var inst_15489 = (inst_15488__$1 == null);
var state_15506__$1 = (function (){var statearr_15510 = state_15506;
(statearr_15510[(7)] = inst_15488__$1);

return statearr_15510;
})();
if(cljs.core.truth_(inst_15489)){
var statearr_15511_15531 = state_15506__$1;
(statearr_15511_15531[(1)] = (5));

} else {
var statearr_15512_15532 = state_15506__$1;
(statearr_15512_15532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (6))){
var inst_15488 = (state_15506[(7)]);
var inst_15493 = p.call(null,inst_15488);
var state_15506__$1 = state_15506;
if(cljs.core.truth_(inst_15493)){
var statearr_15513_15533 = state_15506__$1;
(statearr_15513_15533[(1)] = (8));

} else {
var statearr_15514_15534 = state_15506__$1;
(statearr_15514_15534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (3))){
var inst_15504 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15506__$1,inst_15504);
} else {
if((state_val_15507 === (2))){
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15506__$1,(4),ch);
} else {
if((state_val_15507 === (11))){
var inst_15496 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
var statearr_15515_15535 = state_15506__$1;
(statearr_15515_15535[(2)] = inst_15496);

(statearr_15515_15535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (9))){
var state_15506__$1 = state_15506;
var statearr_15516_15536 = state_15506__$1;
(statearr_15516_15536[(2)] = null);

(statearr_15516_15536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (5))){
var inst_15491 = cljs.core.async.close_BANG_.call(null,out);
var state_15506__$1 = state_15506;
var statearr_15517_15537 = state_15506__$1;
(statearr_15517_15537[(2)] = inst_15491);

(statearr_15517_15537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (10))){
var inst_15499 = (state_15506[(2)]);
var state_15506__$1 = (function (){var statearr_15518 = state_15506;
(statearr_15518[(8)] = inst_15499);

return statearr_15518;
})();
var statearr_15519_15538 = state_15506__$1;
(statearr_15519_15538[(2)] = null);

(statearr_15519_15538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (8))){
var inst_15488 = (state_15506[(7)]);
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15506__$1,(11),out,inst_15488);
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
});})(c__7080__auto___15528,out))
;
return ((function (switch__7018__auto__,c__7080__auto___15528,out){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_15523 = [null,null,null,null,null,null,null,null,null];
(statearr_15523[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_15523[(1)] = (1));

return statearr_15523;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15506){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15524){if((e15524 instanceof Object)){
var ex__7022__auto__ = e15524;
var statearr_15525_15539 = state_15506;
(statearr_15525_15539[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15540 = state_15506;
state_15506 = G__15540;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15528,out))
})();
var state__7082__auto__ = (function (){var statearr_15526 = f__7081__auto__.call(null);
(statearr_15526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15528);

return statearr_15526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15528,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15542 = arguments.length;
switch (G__15542) {
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
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__){
return (function (state_15709){
var state_val_15710 = (state_15709[(1)]);
if((state_val_15710 === (7))){
var inst_15705 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
var statearr_15711_15752 = state_15709__$1;
(statearr_15711_15752[(2)] = inst_15705);

(statearr_15711_15752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (20))){
var inst_15675 = (state_15709[(7)]);
var inst_15686 = (state_15709[(2)]);
var inst_15687 = cljs.core.next.call(null,inst_15675);
var inst_15661 = inst_15687;
var inst_15662 = null;
var inst_15663 = (0);
var inst_15664 = (0);
var state_15709__$1 = (function (){var statearr_15712 = state_15709;
(statearr_15712[(8)] = inst_15662);

(statearr_15712[(9)] = inst_15663);

(statearr_15712[(10)] = inst_15664);

(statearr_15712[(11)] = inst_15661);

(statearr_15712[(12)] = inst_15686);

return statearr_15712;
})();
var statearr_15713_15753 = state_15709__$1;
(statearr_15713_15753[(2)] = null);

(statearr_15713_15753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (1))){
var state_15709__$1 = state_15709;
var statearr_15714_15754 = state_15709__$1;
(statearr_15714_15754[(2)] = null);

(statearr_15714_15754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (4))){
var inst_15650 = (state_15709[(13)]);
var inst_15650__$1 = (state_15709[(2)]);
var inst_15651 = (inst_15650__$1 == null);
var state_15709__$1 = (function (){var statearr_15715 = state_15709;
(statearr_15715[(13)] = inst_15650__$1);

return statearr_15715;
})();
if(cljs.core.truth_(inst_15651)){
var statearr_15716_15755 = state_15709__$1;
(statearr_15716_15755[(1)] = (5));

} else {
var statearr_15717_15756 = state_15709__$1;
(statearr_15717_15756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (15))){
var state_15709__$1 = state_15709;
var statearr_15721_15757 = state_15709__$1;
(statearr_15721_15757[(2)] = null);

(statearr_15721_15757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (21))){
var state_15709__$1 = state_15709;
var statearr_15722_15758 = state_15709__$1;
(statearr_15722_15758[(2)] = null);

(statearr_15722_15758[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (13))){
var inst_15662 = (state_15709[(8)]);
var inst_15663 = (state_15709[(9)]);
var inst_15664 = (state_15709[(10)]);
var inst_15661 = (state_15709[(11)]);
var inst_15671 = (state_15709[(2)]);
var inst_15672 = (inst_15664 + (1));
var tmp15718 = inst_15662;
var tmp15719 = inst_15663;
var tmp15720 = inst_15661;
var inst_15661__$1 = tmp15720;
var inst_15662__$1 = tmp15718;
var inst_15663__$1 = tmp15719;
var inst_15664__$1 = inst_15672;
var state_15709__$1 = (function (){var statearr_15723 = state_15709;
(statearr_15723[(14)] = inst_15671);

(statearr_15723[(8)] = inst_15662__$1);

(statearr_15723[(9)] = inst_15663__$1);

(statearr_15723[(10)] = inst_15664__$1);

(statearr_15723[(11)] = inst_15661__$1);

return statearr_15723;
})();
var statearr_15724_15759 = state_15709__$1;
(statearr_15724_15759[(2)] = null);

(statearr_15724_15759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (22))){
var state_15709__$1 = state_15709;
var statearr_15725_15760 = state_15709__$1;
(statearr_15725_15760[(2)] = null);

(statearr_15725_15760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (6))){
var inst_15650 = (state_15709[(13)]);
var inst_15659 = f.call(null,inst_15650);
var inst_15660 = cljs.core.seq.call(null,inst_15659);
var inst_15661 = inst_15660;
var inst_15662 = null;
var inst_15663 = (0);
var inst_15664 = (0);
var state_15709__$1 = (function (){var statearr_15726 = state_15709;
(statearr_15726[(8)] = inst_15662);

(statearr_15726[(9)] = inst_15663);

(statearr_15726[(10)] = inst_15664);

(statearr_15726[(11)] = inst_15661);

return statearr_15726;
})();
var statearr_15727_15761 = state_15709__$1;
(statearr_15727_15761[(2)] = null);

(statearr_15727_15761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (17))){
var inst_15675 = (state_15709[(7)]);
var inst_15679 = cljs.core.chunk_first.call(null,inst_15675);
var inst_15680 = cljs.core.chunk_rest.call(null,inst_15675);
var inst_15681 = cljs.core.count.call(null,inst_15679);
var inst_15661 = inst_15680;
var inst_15662 = inst_15679;
var inst_15663 = inst_15681;
var inst_15664 = (0);
var state_15709__$1 = (function (){var statearr_15728 = state_15709;
(statearr_15728[(8)] = inst_15662);

(statearr_15728[(9)] = inst_15663);

(statearr_15728[(10)] = inst_15664);

(statearr_15728[(11)] = inst_15661);

return statearr_15728;
})();
var statearr_15729_15762 = state_15709__$1;
(statearr_15729_15762[(2)] = null);

(statearr_15729_15762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (3))){
var inst_15707 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15709__$1,inst_15707);
} else {
if((state_val_15710 === (12))){
var inst_15695 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
var statearr_15730_15763 = state_15709__$1;
(statearr_15730_15763[(2)] = inst_15695);

(statearr_15730_15763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (2))){
var state_15709__$1 = state_15709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15709__$1,(4),in$);
} else {
if((state_val_15710 === (23))){
var inst_15703 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
var statearr_15731_15764 = state_15709__$1;
(statearr_15731_15764[(2)] = inst_15703);

(statearr_15731_15764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (19))){
var inst_15690 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
var statearr_15732_15765 = state_15709__$1;
(statearr_15732_15765[(2)] = inst_15690);

(statearr_15732_15765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (11))){
var inst_15675 = (state_15709[(7)]);
var inst_15661 = (state_15709[(11)]);
var inst_15675__$1 = cljs.core.seq.call(null,inst_15661);
var state_15709__$1 = (function (){var statearr_15733 = state_15709;
(statearr_15733[(7)] = inst_15675__$1);

return statearr_15733;
})();
if(inst_15675__$1){
var statearr_15734_15766 = state_15709__$1;
(statearr_15734_15766[(1)] = (14));

} else {
var statearr_15735_15767 = state_15709__$1;
(statearr_15735_15767[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (9))){
var inst_15697 = (state_15709[(2)]);
var inst_15698 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15709__$1 = (function (){var statearr_15736 = state_15709;
(statearr_15736[(15)] = inst_15697);

return statearr_15736;
})();
if(cljs.core.truth_(inst_15698)){
var statearr_15737_15768 = state_15709__$1;
(statearr_15737_15768[(1)] = (21));

} else {
var statearr_15738_15769 = state_15709__$1;
(statearr_15738_15769[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (5))){
var inst_15653 = cljs.core.async.close_BANG_.call(null,out);
var state_15709__$1 = state_15709;
var statearr_15739_15770 = state_15709__$1;
(statearr_15739_15770[(2)] = inst_15653);

(statearr_15739_15770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (14))){
var inst_15675 = (state_15709[(7)]);
var inst_15677 = cljs.core.chunked_seq_QMARK_.call(null,inst_15675);
var state_15709__$1 = state_15709;
if(inst_15677){
var statearr_15740_15771 = state_15709__$1;
(statearr_15740_15771[(1)] = (17));

} else {
var statearr_15741_15772 = state_15709__$1;
(statearr_15741_15772[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (16))){
var inst_15693 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
var statearr_15742_15773 = state_15709__$1;
(statearr_15742_15773[(2)] = inst_15693);

(statearr_15742_15773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15710 === (10))){
var inst_15662 = (state_15709[(8)]);
var inst_15664 = (state_15709[(10)]);
var inst_15669 = cljs.core._nth.call(null,inst_15662,inst_15664);
var state_15709__$1 = state_15709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15709__$1,(13),out,inst_15669);
} else {
if((state_val_15710 === (18))){
var inst_15675 = (state_15709[(7)]);
var inst_15684 = cljs.core.first.call(null,inst_15675);
var state_15709__$1 = state_15709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15709__$1,(20),out,inst_15684);
} else {
if((state_val_15710 === (8))){
var inst_15663 = (state_15709[(9)]);
var inst_15664 = (state_15709[(10)]);
var inst_15666 = (inst_15664 < inst_15663);
var inst_15667 = inst_15666;
var state_15709__$1 = state_15709;
if(cljs.core.truth_(inst_15667)){
var statearr_15743_15774 = state_15709__$1;
(statearr_15743_15774[(1)] = (10));

} else {
var statearr_15744_15775 = state_15709__$1;
(statearr_15744_15775[(1)] = (11));

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
});})(c__7080__auto__))
;
return ((function (switch__7018__auto__,c__7080__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7019__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7019__auto____0 = (function (){
var statearr_15748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15748[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7019__auto__);

(statearr_15748[(1)] = (1));

return statearr_15748;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7019__auto____1 = (function (state_15709){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15749){if((e15749 instanceof Object)){
var ex__7022__auto__ = e15749;
var statearr_15750_15776 = state_15709;
(statearr_15750_15776[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15777 = state_15709;
state_15709 = G__15777;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7019__auto__ = function(state_15709){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7019__auto____1.call(this,state_15709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7019__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7019__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_15751 = f__7081__auto__.call(null);
(statearr_15751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_15751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15779 = arguments.length;
switch (G__15779) {
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
var G__15782 = arguments.length;
switch (G__15782) {
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
var G__15785 = arguments.length;
switch (G__15785) {
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
var c__7080__auto___15835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15835,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15835,out){
return (function (state_15809){
var state_val_15810 = (state_15809[(1)]);
if((state_val_15810 === (7))){
var inst_15804 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
var statearr_15811_15836 = state_15809__$1;
(statearr_15811_15836[(2)] = inst_15804);

(statearr_15811_15836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (1))){
var inst_15786 = null;
var state_15809__$1 = (function (){var statearr_15812 = state_15809;
(statearr_15812[(7)] = inst_15786);

return statearr_15812;
})();
var statearr_15813_15837 = state_15809__$1;
(statearr_15813_15837[(2)] = null);

(statearr_15813_15837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (4))){
var inst_15789 = (state_15809[(8)]);
var inst_15789__$1 = (state_15809[(2)]);
var inst_15790 = (inst_15789__$1 == null);
var inst_15791 = cljs.core.not.call(null,inst_15790);
var state_15809__$1 = (function (){var statearr_15814 = state_15809;
(statearr_15814[(8)] = inst_15789__$1);

return statearr_15814;
})();
if(inst_15791){
var statearr_15815_15838 = state_15809__$1;
(statearr_15815_15838[(1)] = (5));

} else {
var statearr_15816_15839 = state_15809__$1;
(statearr_15816_15839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (6))){
var state_15809__$1 = state_15809;
var statearr_15817_15840 = state_15809__$1;
(statearr_15817_15840[(2)] = null);

(statearr_15817_15840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (3))){
var inst_15806 = (state_15809[(2)]);
var inst_15807 = cljs.core.async.close_BANG_.call(null,out);
var state_15809__$1 = (function (){var statearr_15818 = state_15809;
(statearr_15818[(9)] = inst_15806);

return statearr_15818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15809__$1,inst_15807);
} else {
if((state_val_15810 === (2))){
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15809__$1,(4),ch);
} else {
if((state_val_15810 === (11))){
var inst_15789 = (state_15809[(8)]);
var inst_15798 = (state_15809[(2)]);
var inst_15786 = inst_15789;
var state_15809__$1 = (function (){var statearr_15819 = state_15809;
(statearr_15819[(7)] = inst_15786);

(statearr_15819[(10)] = inst_15798);

return statearr_15819;
})();
var statearr_15820_15841 = state_15809__$1;
(statearr_15820_15841[(2)] = null);

(statearr_15820_15841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (9))){
var inst_15789 = (state_15809[(8)]);
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15809__$1,(11),out,inst_15789);
} else {
if((state_val_15810 === (5))){
var inst_15789 = (state_15809[(8)]);
var inst_15786 = (state_15809[(7)]);
var inst_15793 = cljs.core._EQ_.call(null,inst_15789,inst_15786);
var state_15809__$1 = state_15809;
if(inst_15793){
var statearr_15822_15842 = state_15809__$1;
(statearr_15822_15842[(1)] = (8));

} else {
var statearr_15823_15843 = state_15809__$1;
(statearr_15823_15843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (10))){
var inst_15801 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
var statearr_15824_15844 = state_15809__$1;
(statearr_15824_15844[(2)] = inst_15801);

(statearr_15824_15844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (8))){
var inst_15786 = (state_15809[(7)]);
var tmp15821 = inst_15786;
var inst_15786__$1 = tmp15821;
var state_15809__$1 = (function (){var statearr_15825 = state_15809;
(statearr_15825[(7)] = inst_15786__$1);

return statearr_15825;
})();
var statearr_15826_15845 = state_15809__$1;
(statearr_15826_15845[(2)] = null);

(statearr_15826_15845[(1)] = (2));


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
});})(c__7080__auto___15835,out))
;
return ((function (switch__7018__auto__,c__7080__auto___15835,out){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_15830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15830[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_15830[(1)] = (1));

return statearr_15830;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15809){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15831){if((e15831 instanceof Object)){
var ex__7022__auto__ = e15831;
var statearr_15832_15846 = state_15809;
(statearr_15832_15846[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15847 = state_15809;
state_15809 = G__15847;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15835,out))
})();
var state__7082__auto__ = (function (){var statearr_15833 = f__7081__auto__.call(null);
(statearr_15833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15835);

return statearr_15833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15835,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15849 = arguments.length;
switch (G__15849) {
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
var c__7080__auto___15918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___15918,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___15918,out){
return (function (state_15887){
var state_val_15888 = (state_15887[(1)]);
if((state_val_15888 === (7))){
var inst_15883 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15889_15919 = state_15887__$1;
(statearr_15889_15919[(2)] = inst_15883);

(statearr_15889_15919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (1))){
var inst_15850 = (new Array(n));
var inst_15851 = inst_15850;
var inst_15852 = (0);
var state_15887__$1 = (function (){var statearr_15890 = state_15887;
(statearr_15890[(7)] = inst_15852);

(statearr_15890[(8)] = inst_15851);

return statearr_15890;
})();
var statearr_15891_15920 = state_15887__$1;
(statearr_15891_15920[(2)] = null);

(statearr_15891_15920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (4))){
var inst_15855 = (state_15887[(9)]);
var inst_15855__$1 = (state_15887[(2)]);
var inst_15856 = (inst_15855__$1 == null);
var inst_15857 = cljs.core.not.call(null,inst_15856);
var state_15887__$1 = (function (){var statearr_15892 = state_15887;
(statearr_15892[(9)] = inst_15855__$1);

return statearr_15892;
})();
if(inst_15857){
var statearr_15893_15921 = state_15887__$1;
(statearr_15893_15921[(1)] = (5));

} else {
var statearr_15894_15922 = state_15887__$1;
(statearr_15894_15922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (15))){
var inst_15877 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15895_15923 = state_15887__$1;
(statearr_15895_15923[(2)] = inst_15877);

(statearr_15895_15923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (13))){
var state_15887__$1 = state_15887;
var statearr_15896_15924 = state_15887__$1;
(statearr_15896_15924[(2)] = null);

(statearr_15896_15924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (6))){
var inst_15852 = (state_15887[(7)]);
var inst_15873 = (inst_15852 > (0));
var state_15887__$1 = state_15887;
if(cljs.core.truth_(inst_15873)){
var statearr_15897_15925 = state_15887__$1;
(statearr_15897_15925[(1)] = (12));

} else {
var statearr_15898_15926 = state_15887__$1;
(statearr_15898_15926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (3))){
var inst_15885 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15887__$1,inst_15885);
} else {
if((state_val_15888 === (12))){
var inst_15851 = (state_15887[(8)]);
var inst_15875 = cljs.core.vec.call(null,inst_15851);
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15887__$1,(15),out,inst_15875);
} else {
if((state_val_15888 === (2))){
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15887__$1,(4),ch);
} else {
if((state_val_15888 === (11))){
var inst_15867 = (state_15887[(2)]);
var inst_15868 = (new Array(n));
var inst_15851 = inst_15868;
var inst_15852 = (0);
var state_15887__$1 = (function (){var statearr_15899 = state_15887;
(statearr_15899[(7)] = inst_15852);

(statearr_15899[(8)] = inst_15851);

(statearr_15899[(10)] = inst_15867);

return statearr_15899;
})();
var statearr_15900_15927 = state_15887__$1;
(statearr_15900_15927[(2)] = null);

(statearr_15900_15927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (9))){
var inst_15851 = (state_15887[(8)]);
var inst_15865 = cljs.core.vec.call(null,inst_15851);
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15887__$1,(11),out,inst_15865);
} else {
if((state_val_15888 === (5))){
var inst_15852 = (state_15887[(7)]);
var inst_15851 = (state_15887[(8)]);
var inst_15855 = (state_15887[(9)]);
var inst_15860 = (state_15887[(11)]);
var inst_15859 = (inst_15851[inst_15852] = inst_15855);
var inst_15860__$1 = (inst_15852 + (1));
var inst_15861 = (inst_15860__$1 < n);
var state_15887__$1 = (function (){var statearr_15901 = state_15887;
(statearr_15901[(12)] = inst_15859);

(statearr_15901[(11)] = inst_15860__$1);

return statearr_15901;
})();
if(cljs.core.truth_(inst_15861)){
var statearr_15902_15928 = state_15887__$1;
(statearr_15902_15928[(1)] = (8));

} else {
var statearr_15903_15929 = state_15887__$1;
(statearr_15903_15929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (14))){
var inst_15880 = (state_15887[(2)]);
var inst_15881 = cljs.core.async.close_BANG_.call(null,out);
var state_15887__$1 = (function (){var statearr_15905 = state_15887;
(statearr_15905[(13)] = inst_15880);

return statearr_15905;
})();
var statearr_15906_15930 = state_15887__$1;
(statearr_15906_15930[(2)] = inst_15881);

(statearr_15906_15930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (10))){
var inst_15871 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15907_15931 = state_15887__$1;
(statearr_15907_15931[(2)] = inst_15871);

(statearr_15907_15931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (8))){
var inst_15851 = (state_15887[(8)]);
var inst_15860 = (state_15887[(11)]);
var tmp15904 = inst_15851;
var inst_15851__$1 = tmp15904;
var inst_15852 = inst_15860;
var state_15887__$1 = (function (){var statearr_15908 = state_15887;
(statearr_15908[(7)] = inst_15852);

(statearr_15908[(8)] = inst_15851__$1);

return statearr_15908;
})();
var statearr_15909_15932 = state_15887__$1;
(statearr_15909_15932[(2)] = null);

(statearr_15909_15932[(1)] = (2));


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
});})(c__7080__auto___15918,out))
;
return ((function (switch__7018__auto__,c__7080__auto___15918,out){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_15913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15913[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_15913[(1)] = (1));

return statearr_15913;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15887){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e15914){if((e15914 instanceof Object)){
var ex__7022__auto__ = e15914;
var statearr_15915_15933 = state_15887;
(statearr_15915_15933[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15934 = state_15887;
state_15887 = G__15934;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___15918,out))
})();
var state__7082__auto__ = (function (){var statearr_15916 = f__7081__auto__.call(null);
(statearr_15916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___15918);

return statearr_15916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___15918,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15936 = arguments.length;
switch (G__15936) {
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
var c__7080__auto___16009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___16009,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___16009,out){
return (function (state_15978){
var state_val_15979 = (state_15978[(1)]);
if((state_val_15979 === (7))){
var inst_15974 = (state_15978[(2)]);
var state_15978__$1 = state_15978;
var statearr_15980_16010 = state_15978__$1;
(statearr_15980_16010[(2)] = inst_15974);

(statearr_15980_16010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (1))){
var inst_15937 = [];
var inst_15938 = inst_15937;
var inst_15939 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15978__$1 = (function (){var statearr_15981 = state_15978;
(statearr_15981[(7)] = inst_15938);

(statearr_15981[(8)] = inst_15939);

return statearr_15981;
})();
var statearr_15982_16011 = state_15978__$1;
(statearr_15982_16011[(2)] = null);

(statearr_15982_16011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (4))){
var inst_15942 = (state_15978[(9)]);
var inst_15942__$1 = (state_15978[(2)]);
var inst_15943 = (inst_15942__$1 == null);
var inst_15944 = cljs.core.not.call(null,inst_15943);
var state_15978__$1 = (function (){var statearr_15983 = state_15978;
(statearr_15983[(9)] = inst_15942__$1);

return statearr_15983;
})();
if(inst_15944){
var statearr_15984_16012 = state_15978__$1;
(statearr_15984_16012[(1)] = (5));

} else {
var statearr_15985_16013 = state_15978__$1;
(statearr_15985_16013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (15))){
var inst_15968 = (state_15978[(2)]);
var state_15978__$1 = state_15978;
var statearr_15986_16014 = state_15978__$1;
(statearr_15986_16014[(2)] = inst_15968);

(statearr_15986_16014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (13))){
var state_15978__$1 = state_15978;
var statearr_15987_16015 = state_15978__$1;
(statearr_15987_16015[(2)] = null);

(statearr_15987_16015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (6))){
var inst_15938 = (state_15978[(7)]);
var inst_15963 = inst_15938.length;
var inst_15964 = (inst_15963 > (0));
var state_15978__$1 = state_15978;
if(cljs.core.truth_(inst_15964)){
var statearr_15988_16016 = state_15978__$1;
(statearr_15988_16016[(1)] = (12));

} else {
var statearr_15989_16017 = state_15978__$1;
(statearr_15989_16017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (3))){
var inst_15976 = (state_15978[(2)]);
var state_15978__$1 = state_15978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15978__$1,inst_15976);
} else {
if((state_val_15979 === (12))){
var inst_15938 = (state_15978[(7)]);
var inst_15966 = cljs.core.vec.call(null,inst_15938);
var state_15978__$1 = state_15978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15978__$1,(15),out,inst_15966);
} else {
if((state_val_15979 === (2))){
var state_15978__$1 = state_15978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15978__$1,(4),ch);
} else {
if((state_val_15979 === (11))){
var inst_15946 = (state_15978[(10)]);
var inst_15942 = (state_15978[(9)]);
var inst_15956 = (state_15978[(2)]);
var inst_15957 = [];
var inst_15958 = inst_15957.push(inst_15942);
var inst_15938 = inst_15957;
var inst_15939 = inst_15946;
var state_15978__$1 = (function (){var statearr_15990 = state_15978;
(statearr_15990[(11)] = inst_15958);

(statearr_15990[(7)] = inst_15938);

(statearr_15990[(12)] = inst_15956);

(statearr_15990[(8)] = inst_15939);

return statearr_15990;
})();
var statearr_15991_16018 = state_15978__$1;
(statearr_15991_16018[(2)] = null);

(statearr_15991_16018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (9))){
var inst_15938 = (state_15978[(7)]);
var inst_15954 = cljs.core.vec.call(null,inst_15938);
var state_15978__$1 = state_15978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15978__$1,(11),out,inst_15954);
} else {
if((state_val_15979 === (5))){
var inst_15946 = (state_15978[(10)]);
var inst_15939 = (state_15978[(8)]);
var inst_15942 = (state_15978[(9)]);
var inst_15946__$1 = f.call(null,inst_15942);
var inst_15947 = cljs.core._EQ_.call(null,inst_15946__$1,inst_15939);
var inst_15948 = cljs.core.keyword_identical_QMARK_.call(null,inst_15939,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15949 = (inst_15947) || (inst_15948);
var state_15978__$1 = (function (){var statearr_15992 = state_15978;
(statearr_15992[(10)] = inst_15946__$1);

return statearr_15992;
})();
if(cljs.core.truth_(inst_15949)){
var statearr_15993_16019 = state_15978__$1;
(statearr_15993_16019[(1)] = (8));

} else {
var statearr_15994_16020 = state_15978__$1;
(statearr_15994_16020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (14))){
var inst_15971 = (state_15978[(2)]);
var inst_15972 = cljs.core.async.close_BANG_.call(null,out);
var state_15978__$1 = (function (){var statearr_15996 = state_15978;
(statearr_15996[(13)] = inst_15971);

return statearr_15996;
})();
var statearr_15997_16021 = state_15978__$1;
(statearr_15997_16021[(2)] = inst_15972);

(statearr_15997_16021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (10))){
var inst_15961 = (state_15978[(2)]);
var state_15978__$1 = state_15978;
var statearr_15998_16022 = state_15978__$1;
(statearr_15998_16022[(2)] = inst_15961);

(statearr_15998_16022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15979 === (8))){
var inst_15946 = (state_15978[(10)]);
var inst_15938 = (state_15978[(7)]);
var inst_15942 = (state_15978[(9)]);
var inst_15951 = inst_15938.push(inst_15942);
var tmp15995 = inst_15938;
var inst_15938__$1 = tmp15995;
var inst_15939 = inst_15946;
var state_15978__$1 = (function (){var statearr_15999 = state_15978;
(statearr_15999[(14)] = inst_15951);

(statearr_15999[(7)] = inst_15938__$1);

(statearr_15999[(8)] = inst_15939);

return statearr_15999;
})();
var statearr_16000_16023 = state_15978__$1;
(statearr_16000_16023[(2)] = null);

(statearr_16000_16023[(1)] = (2));


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
});})(c__7080__auto___16009,out))
;
return ((function (switch__7018__auto__,c__7080__auto___16009,out){
return (function() {
var cljs$core$async$state_machine__7019__auto__ = null;
var cljs$core$async$state_machine__7019__auto____0 = (function (){
var statearr_16004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16004[(0)] = cljs$core$async$state_machine__7019__auto__);

(statearr_16004[(1)] = (1));

return statearr_16004;
});
var cljs$core$async$state_machine__7019__auto____1 = (function (state_15978){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_15978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e16005){if((e16005 instanceof Object)){
var ex__7022__auto__ = e16005;
var statearr_16006_16024 = state_15978;
(statearr_16006_16024[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16025 = state_15978;
state_15978 = G__16025;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
cljs$core$async$state_machine__7019__auto__ = function(state_15978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7019__auto____1.call(this,state_15978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7019__auto____0;
cljs$core$async$state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7019__auto____1;
return cljs$core$async$state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___16009,out))
})();
var state__7082__auto__ = (function (){var statearr_16007 = f__7081__auto__.call(null);
(statearr_16007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___16009);

return statearr_16007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___16009,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
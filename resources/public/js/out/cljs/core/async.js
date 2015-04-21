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
if(typeof cljs.core.async.t32744 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32744 = (function (f,fn_handler,meta32745){
this.f = f;
this.fn_handler = fn_handler;
this.meta32745 = meta32745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t32744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t32744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32746){
var self__ = this;
var _32746__$1 = this;
return self__.meta32745;
});

cljs.core.async.t32744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32746,meta32745__$1){
var self__ = this;
var _32746__$1 = this;
return (new cljs.core.async.t32744(self__.f,self__.fn_handler,meta32745__$1));
});

cljs.core.async.t32744.cljs$lang$type = true;

cljs.core.async.t32744.cljs$lang$ctorStr = "cljs.core.async/t32744";

cljs.core.async.t32744.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t32744");
});

cljs.core.async.__GT_t32744 = (function cljs$core$async$fn_handler_$___GT_t32744(f__$1,fn_handler__$1,meta32745){
return (new cljs.core.async.t32744(f__$1,fn_handler__$1,meta32745));
});

}

return (new cljs.core.async.t32744(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32748 = buff;
if(G__32748){
var bit__25600__auto__ = null;
if(cljs.core.truth_((function (){var or__24926__auto__ = bit__25600__auto__;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return G__32748.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__32748.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32748);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32748);
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
var G__32750 = arguments.length;
switch (G__32750) {
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
var G__32753 = arguments.length;
switch (G__32753) {
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
var val_32755 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32755);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32755,ret){
return (function (){
return fn1.call(null,val_32755);
});})(val_32755,ret))
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
var G__32757 = arguments.length;
switch (G__32757) {
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
var n__25811__auto___32759 = n;
var x_32760 = (0);
while(true){
if((x_32760 < n__25811__auto___32759)){
(a[x_32760] = (0));

var G__32761 = (x_32760 + (1));
x_32760 = G__32761;
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

var G__32762 = (i + (1));
i = G__32762;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t32766 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32766 = (function (flag,alt_flag,meta32767){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32767 = meta32767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32766.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t32766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t32766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32768){
var self__ = this;
var _32768__$1 = this;
return self__.meta32767;
});})(flag))
;

cljs.core.async.t32766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32768,meta32767__$1){
var self__ = this;
var _32768__$1 = this;
return (new cljs.core.async.t32766(self__.flag,self__.alt_flag,meta32767__$1));
});})(flag))
;

cljs.core.async.t32766.cljs$lang$type = true;

cljs.core.async.t32766.cljs$lang$ctorStr = "cljs.core.async/t32766";

cljs.core.async.t32766.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t32766");
});})(flag))
;

cljs.core.async.__GT_t32766 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t32766(flag__$1,alt_flag__$1,meta32767){
return (new cljs.core.async.t32766(flag__$1,alt_flag__$1,meta32767));
});})(flag))
;

}

return (new cljs.core.async.t32766(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t32772 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32772 = (function (cb,flag,alt_handler,meta32773){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32773 = meta32773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32772.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t32772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t32772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32774){
var self__ = this;
var _32774__$1 = this;
return self__.meta32773;
});

cljs.core.async.t32772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32774,meta32773__$1){
var self__ = this;
var _32774__$1 = this;
return (new cljs.core.async.t32772(self__.cb,self__.flag,self__.alt_handler,meta32773__$1));
});

cljs.core.async.t32772.cljs$lang$type = true;

cljs.core.async.t32772.cljs$lang$ctorStr = "cljs.core.async/t32772";

cljs.core.async.t32772.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t32772");
});

cljs.core.async.__GT_t32772 = (function cljs$core$async$alt_handler_$___GT_t32772(cb__$1,flag__$1,alt_handler__$1,meta32773){
return (new cljs.core.async.t32772(cb__$1,flag__$1,alt_handler__$1,meta32773));
});

}

return (new cljs.core.async.t32772(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32775_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32775_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32776_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32776_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24926__auto__ = wport;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32777 = (i + (1));
i = G__32777;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24926__auto__ = ret;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__24914__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24914__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24914__auto__;
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
var argseq__25966__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32780){
var map__32781 = p__32780;
var map__32781__$1 = ((cljs.core.seq_QMARK_.call(null,map__32781))?cljs.core.apply.call(null,cljs.core.hash_map,map__32781):map__32781);
var opts = map__32781__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32778){
var G__32779 = cljs.core.first.call(null,seq32778);
var seq32778__$1 = cljs.core.next.call(null,seq32778);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32779,seq32778__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__32783 = arguments.length;
switch (G__32783) {
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
var c__28065__auto___32832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___32832){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___32832){
return (function (state_32807){
var state_val_32808 = (state_32807[(1)]);
if((state_val_32808 === (7))){
var inst_32803 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32809_32833 = state_32807__$1;
(statearr_32809_32833[(2)] = inst_32803);

(statearr_32809_32833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (1))){
var state_32807__$1 = state_32807;
var statearr_32810_32834 = state_32807__$1;
(statearr_32810_32834[(2)] = null);

(statearr_32810_32834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (4))){
var inst_32786 = (state_32807[(7)]);
var inst_32786__$1 = (state_32807[(2)]);
var inst_32787 = (inst_32786__$1 == null);
var state_32807__$1 = (function (){var statearr_32811 = state_32807;
(statearr_32811[(7)] = inst_32786__$1);

return statearr_32811;
})();
if(cljs.core.truth_(inst_32787)){
var statearr_32812_32835 = state_32807__$1;
(statearr_32812_32835[(1)] = (5));

} else {
var statearr_32813_32836 = state_32807__$1;
(statearr_32813_32836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (13))){
var state_32807__$1 = state_32807;
var statearr_32814_32837 = state_32807__$1;
(statearr_32814_32837[(2)] = null);

(statearr_32814_32837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (6))){
var inst_32786 = (state_32807[(7)]);
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32807__$1,(11),to,inst_32786);
} else {
if((state_val_32808 === (3))){
var inst_32805 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32807__$1,inst_32805);
} else {
if((state_val_32808 === (12))){
var state_32807__$1 = state_32807;
var statearr_32815_32838 = state_32807__$1;
(statearr_32815_32838[(2)] = null);

(statearr_32815_32838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (2))){
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32807__$1,(4),from);
} else {
if((state_val_32808 === (11))){
var inst_32796 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32796)){
var statearr_32816_32839 = state_32807__$1;
(statearr_32816_32839[(1)] = (12));

} else {
var statearr_32817_32840 = state_32807__$1;
(statearr_32817_32840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (9))){
var state_32807__$1 = state_32807;
var statearr_32818_32841 = state_32807__$1;
(statearr_32818_32841[(2)] = null);

(statearr_32818_32841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (5))){
var state_32807__$1 = state_32807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32819_32842 = state_32807__$1;
(statearr_32819_32842[(1)] = (8));

} else {
var statearr_32820_32843 = state_32807__$1;
(statearr_32820_32843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (14))){
var inst_32801 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32821_32844 = state_32807__$1;
(statearr_32821_32844[(2)] = inst_32801);

(statearr_32821_32844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (10))){
var inst_32793 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32822_32845 = state_32807__$1;
(statearr_32822_32845[(2)] = inst_32793);

(statearr_32822_32845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (8))){
var inst_32790 = cljs.core.async.close_BANG_.call(null,to);
var state_32807__$1 = state_32807;
var statearr_32823_32846 = state_32807__$1;
(statearr_32823_32846[(2)] = inst_32790);

(statearr_32823_32846[(1)] = (10));


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
});})(c__28065__auto___32832))
;
return ((function (switch__28003__auto__,c__28065__auto___32832){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_32827 = [null,null,null,null,null,null,null,null];
(statearr_32827[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_32827[(1)] = (1));

return statearr_32827;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_32807){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_32807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e32828){if((e32828 instanceof Object)){
var ex__28007__auto__ = e32828;
var statearr_32829_32847 = state_32807;
(statearr_32829_32847[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32848 = state_32807;
state_32807 = G__32848;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_32807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_32807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___32832))
})();
var state__28067__auto__ = (function (){var statearr_32830 = f__28066__auto__.call(null);
(statearr_32830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___32832);

return statearr_32830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___32832))
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
return (function (p__33032){
var vec__33033 = p__33032;
var v = cljs.core.nth.call(null,vec__33033,(0),null);
var p = cljs.core.nth.call(null,vec__33033,(1),null);
var job = vec__33033;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28065__auto___33215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___33215,res,vec__33033,v,p,job,jobs,results){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___33215,res,vec__33033,v,p,job,jobs,results){
return (function (state_33038){
var state_val_33039 = (state_33038[(1)]);
if((state_val_33039 === (2))){
var inst_33035 = (state_33038[(2)]);
var inst_33036 = cljs.core.async.close_BANG_.call(null,res);
var state_33038__$1 = (function (){var statearr_33040 = state_33038;
(statearr_33040[(7)] = inst_33035);

return statearr_33040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33038__$1,inst_33036);
} else {
if((state_val_33039 === (1))){
var state_33038__$1 = state_33038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33038__$1,(2),res,v);
} else {
return null;
}
}
});})(c__28065__auto___33215,res,vec__33033,v,p,job,jobs,results))
;
return ((function (switch__28003__auto__,c__28065__auto___33215,res,vec__33033,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0 = (function (){
var statearr_33044 = [null,null,null,null,null,null,null,null];
(statearr_33044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__);

(statearr_33044[(1)] = (1));

return statearr_33044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1 = (function (state_33038){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33045){if((e33045 instanceof Object)){
var ex__28007__auto__ = e33045;
var statearr_33046_33216 = state_33038;
(statearr_33046_33216[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33217 = state_33038;
state_33038 = G__33217;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = function(state_33038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1.call(this,state_33038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___33215,res,vec__33033,v,p,job,jobs,results))
})();
var state__28067__auto__ = (function (){var statearr_33047 = f__28066__auto__.call(null);
(statearr_33047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___33215);

return statearr_33047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___33215,res,vec__33033,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33048){
var vec__33049 = p__33048;
var v = cljs.core.nth.call(null,vec__33049,(0),null);
var p = cljs.core.nth.call(null,vec__33049,(1),null);
var job = vec__33049;
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
var n__25811__auto___33218 = n;
var __33219 = (0);
while(true){
if((__33219 < n__25811__auto___33218)){
var G__33050_33220 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33050_33220) {
case "async":
var c__28065__auto___33222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33219,c__28065__auto___33222,G__33050_33220,n__25811__auto___33218,jobs,results,process,async){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (__33219,c__28065__auto___33222,G__33050_33220,n__25811__auto___33218,jobs,results,process,async){
return (function (state_33063){
var state_val_33064 = (state_33063[(1)]);
if((state_val_33064 === (7))){
var inst_33059 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
var statearr_33065_33223 = state_33063__$1;
(statearr_33065_33223[(2)] = inst_33059);

(statearr_33065_33223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (6))){
var state_33063__$1 = state_33063;
var statearr_33066_33224 = state_33063__$1;
(statearr_33066_33224[(2)] = null);

(statearr_33066_33224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (5))){
var state_33063__$1 = state_33063;
var statearr_33067_33225 = state_33063__$1;
(statearr_33067_33225[(2)] = null);

(statearr_33067_33225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (4))){
var inst_33053 = (state_33063[(2)]);
var inst_33054 = async.call(null,inst_33053);
var state_33063__$1 = state_33063;
if(cljs.core.truth_(inst_33054)){
var statearr_33068_33226 = state_33063__$1;
(statearr_33068_33226[(1)] = (5));

} else {
var statearr_33069_33227 = state_33063__$1;
(statearr_33069_33227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (3))){
var inst_33061 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33063__$1,inst_33061);
} else {
if((state_val_33064 === (2))){
var state_33063__$1 = state_33063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33063__$1,(4),jobs);
} else {
if((state_val_33064 === (1))){
var state_33063__$1 = state_33063;
var statearr_33070_33228 = state_33063__$1;
(statearr_33070_33228[(2)] = null);

(statearr_33070_33228[(1)] = (2));


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
});})(__33219,c__28065__auto___33222,G__33050_33220,n__25811__auto___33218,jobs,results,process,async))
;
return ((function (__33219,switch__28003__auto__,c__28065__auto___33222,G__33050_33220,n__25811__auto___33218,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0 = (function (){
var statearr_33074 = [null,null,null,null,null,null,null];
(statearr_33074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__);

(statearr_33074[(1)] = (1));

return statearr_33074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1 = (function (state_33063){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33075){if((e33075 instanceof Object)){
var ex__28007__auto__ = e33075;
var statearr_33076_33229 = state_33063;
(statearr_33076_33229[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33230 = state_33063;
state_33063 = G__33230;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = function(state_33063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1.call(this,state_33063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__;
})()
;})(__33219,switch__28003__auto__,c__28065__auto___33222,G__33050_33220,n__25811__auto___33218,jobs,results,process,async))
})();
var state__28067__auto__ = (function (){var statearr_33077 = f__28066__auto__.call(null);
(statearr_33077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___33222);

return statearr_33077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(__33219,c__28065__auto___33222,G__33050_33220,n__25811__auto___33218,jobs,results,process,async))
);


break;
case "compute":
var c__28065__auto___33231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33219,c__28065__auto___33231,G__33050_33220,n__25811__auto___33218,jobs,results,process,async){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (__33219,c__28065__auto___33231,G__33050_33220,n__25811__auto___33218,jobs,results,process,async){
return (function (state_33090){
var state_val_33091 = (state_33090[(1)]);
if((state_val_33091 === (7))){
var inst_33086 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33092_33232 = state_33090__$1;
(statearr_33092_33232[(2)] = inst_33086);

(statearr_33092_33232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (6))){
var state_33090__$1 = state_33090;
var statearr_33093_33233 = state_33090__$1;
(statearr_33093_33233[(2)] = null);

(statearr_33093_33233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (5))){
var state_33090__$1 = state_33090;
var statearr_33094_33234 = state_33090__$1;
(statearr_33094_33234[(2)] = null);

(statearr_33094_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (4))){
var inst_33080 = (state_33090[(2)]);
var inst_33081 = process.call(null,inst_33080);
var state_33090__$1 = state_33090;
if(cljs.core.truth_(inst_33081)){
var statearr_33095_33235 = state_33090__$1;
(statearr_33095_33235[(1)] = (5));

} else {
var statearr_33096_33236 = state_33090__$1;
(statearr_33096_33236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (3))){
var inst_33088 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33090__$1,inst_33088);
} else {
if((state_val_33091 === (2))){
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33090__$1,(4),jobs);
} else {
if((state_val_33091 === (1))){
var state_33090__$1 = state_33090;
var statearr_33097_33237 = state_33090__$1;
(statearr_33097_33237[(2)] = null);

(statearr_33097_33237[(1)] = (2));


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
});})(__33219,c__28065__auto___33231,G__33050_33220,n__25811__auto___33218,jobs,results,process,async))
;
return ((function (__33219,switch__28003__auto__,c__28065__auto___33231,G__33050_33220,n__25811__auto___33218,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0 = (function (){
var statearr_33101 = [null,null,null,null,null,null,null];
(statearr_33101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__);

(statearr_33101[(1)] = (1));

return statearr_33101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1 = (function (state_33090){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33102){if((e33102 instanceof Object)){
var ex__28007__auto__ = e33102;
var statearr_33103_33238 = state_33090;
(statearr_33103_33238[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33239 = state_33090;
state_33090 = G__33239;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = function(state_33090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1.call(this,state_33090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__;
})()
;})(__33219,switch__28003__auto__,c__28065__auto___33231,G__33050_33220,n__25811__auto___33218,jobs,results,process,async))
})();
var state__28067__auto__ = (function (){var statearr_33104 = f__28066__auto__.call(null);
(statearr_33104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___33231);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(__33219,c__28065__auto___33231,G__33050_33220,n__25811__auto___33218,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33240 = (__33219 + (1));
__33219 = G__33240;
continue;
} else {
}
break;
}

var c__28065__auto___33241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___33241,jobs,results,process,async){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___33241,jobs,results,process,async){
return (function (state_33126){
var state_val_33127 = (state_33126[(1)]);
if((state_val_33127 === (9))){
var inst_33119 = (state_33126[(2)]);
var state_33126__$1 = (function (){var statearr_33128 = state_33126;
(statearr_33128[(7)] = inst_33119);

return statearr_33128;
})();
var statearr_33129_33242 = state_33126__$1;
(statearr_33129_33242[(2)] = null);

(statearr_33129_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (8))){
var inst_33112 = (state_33126[(8)]);
var inst_33117 = (state_33126[(2)]);
var state_33126__$1 = (function (){var statearr_33130 = state_33126;
(statearr_33130[(9)] = inst_33117);

return statearr_33130;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33126__$1,(9),results,inst_33112);
} else {
if((state_val_33127 === (7))){
var inst_33122 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33131_33243 = state_33126__$1;
(statearr_33131_33243[(2)] = inst_33122);

(statearr_33131_33243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (6))){
var inst_33112 = (state_33126[(8)]);
var inst_33107 = (state_33126[(10)]);
var inst_33112__$1 = cljs.core.async.chan.call(null,(1));
var inst_33113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33114 = [inst_33107,inst_33112__$1];
var inst_33115 = (new cljs.core.PersistentVector(null,2,(5),inst_33113,inst_33114,null));
var state_33126__$1 = (function (){var statearr_33132 = state_33126;
(statearr_33132[(8)] = inst_33112__$1);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33126__$1,(8),jobs,inst_33115);
} else {
if((state_val_33127 === (5))){
var inst_33110 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33126__$1 = state_33126;
var statearr_33133_33244 = state_33126__$1;
(statearr_33133_33244[(2)] = inst_33110);

(statearr_33133_33244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (4))){
var inst_33107 = (state_33126[(10)]);
var inst_33107__$1 = (state_33126[(2)]);
var inst_33108 = (inst_33107__$1 == null);
var state_33126__$1 = (function (){var statearr_33134 = state_33126;
(statearr_33134[(10)] = inst_33107__$1);

return statearr_33134;
})();
if(cljs.core.truth_(inst_33108)){
var statearr_33135_33245 = state_33126__$1;
(statearr_33135_33245[(1)] = (5));

} else {
var statearr_33136_33246 = state_33126__$1;
(statearr_33136_33246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (3))){
var inst_33124 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33126__$1,inst_33124);
} else {
if((state_val_33127 === (2))){
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33126__$1,(4),from);
} else {
if((state_val_33127 === (1))){
var state_33126__$1 = state_33126;
var statearr_33137_33247 = state_33126__$1;
(statearr_33137_33247[(2)] = null);

(statearr_33137_33247[(1)] = (2));


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
});})(c__28065__auto___33241,jobs,results,process,async))
;
return ((function (switch__28003__auto__,c__28065__auto___33241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0 = (function (){
var statearr_33141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__);

(statearr_33141[(1)] = (1));

return statearr_33141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1 = (function (state_33126){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33142){if((e33142 instanceof Object)){
var ex__28007__auto__ = e33142;
var statearr_33143_33248 = state_33126;
(statearr_33143_33248[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_33126;
state_33126 = G__33249;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = function(state_33126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1.call(this,state_33126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___33241,jobs,results,process,async))
})();
var state__28067__auto__ = (function (){var statearr_33144 = f__28066__auto__.call(null);
(statearr_33144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___33241);

return statearr_33144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___33241,jobs,results,process,async))
);


var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__,jobs,results,process,async){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__,jobs,results,process,async){
return (function (state_33182){
var state_val_33183 = (state_33182[(1)]);
if((state_val_33183 === (7))){
var inst_33178 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33184_33250 = state_33182__$1;
(statearr_33184_33250[(2)] = inst_33178);

(statearr_33184_33250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (20))){
var state_33182__$1 = state_33182;
var statearr_33185_33251 = state_33182__$1;
(statearr_33185_33251[(2)] = null);

(statearr_33185_33251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (1))){
var state_33182__$1 = state_33182;
var statearr_33186_33252 = state_33182__$1;
(statearr_33186_33252[(2)] = null);

(statearr_33186_33252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (4))){
var inst_33147 = (state_33182[(7)]);
var inst_33147__$1 = (state_33182[(2)]);
var inst_33148 = (inst_33147__$1 == null);
var state_33182__$1 = (function (){var statearr_33187 = state_33182;
(statearr_33187[(7)] = inst_33147__$1);

return statearr_33187;
})();
if(cljs.core.truth_(inst_33148)){
var statearr_33188_33253 = state_33182__$1;
(statearr_33188_33253[(1)] = (5));

} else {
var statearr_33189_33254 = state_33182__$1;
(statearr_33189_33254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (15))){
var inst_33160 = (state_33182[(8)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33182__$1,(18),to,inst_33160);
} else {
if((state_val_33183 === (21))){
var inst_33173 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33190_33255 = state_33182__$1;
(statearr_33190_33255[(2)] = inst_33173);

(statearr_33190_33255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (13))){
var inst_33175 = (state_33182[(2)]);
var state_33182__$1 = (function (){var statearr_33191 = state_33182;
(statearr_33191[(9)] = inst_33175);

return statearr_33191;
})();
var statearr_33192_33256 = state_33182__$1;
(statearr_33192_33256[(2)] = null);

(statearr_33192_33256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (6))){
var inst_33147 = (state_33182[(7)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33182__$1,(11),inst_33147);
} else {
if((state_val_33183 === (17))){
var inst_33168 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
if(cljs.core.truth_(inst_33168)){
var statearr_33193_33257 = state_33182__$1;
(statearr_33193_33257[(1)] = (19));

} else {
var statearr_33194_33258 = state_33182__$1;
(statearr_33194_33258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (3))){
var inst_33180 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33182__$1,inst_33180);
} else {
if((state_val_33183 === (12))){
var inst_33157 = (state_33182[(10)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33182__$1,(14),inst_33157);
} else {
if((state_val_33183 === (2))){
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33182__$1,(4),results);
} else {
if((state_val_33183 === (19))){
var state_33182__$1 = state_33182;
var statearr_33195_33259 = state_33182__$1;
(statearr_33195_33259[(2)] = null);

(statearr_33195_33259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (11))){
var inst_33157 = (state_33182[(2)]);
var state_33182__$1 = (function (){var statearr_33196 = state_33182;
(statearr_33196[(10)] = inst_33157);

return statearr_33196;
})();
var statearr_33197_33260 = state_33182__$1;
(statearr_33197_33260[(2)] = null);

(statearr_33197_33260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (9))){
var state_33182__$1 = state_33182;
var statearr_33198_33261 = state_33182__$1;
(statearr_33198_33261[(2)] = null);

(statearr_33198_33261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (5))){
var state_33182__$1 = state_33182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33199_33262 = state_33182__$1;
(statearr_33199_33262[(1)] = (8));

} else {
var statearr_33200_33263 = state_33182__$1;
(statearr_33200_33263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (14))){
var inst_33160 = (state_33182[(8)]);
var inst_33162 = (state_33182[(11)]);
var inst_33160__$1 = (state_33182[(2)]);
var inst_33161 = (inst_33160__$1 == null);
var inst_33162__$1 = cljs.core.not.call(null,inst_33161);
var state_33182__$1 = (function (){var statearr_33201 = state_33182;
(statearr_33201[(8)] = inst_33160__$1);

(statearr_33201[(11)] = inst_33162__$1);

return statearr_33201;
})();
if(inst_33162__$1){
var statearr_33202_33264 = state_33182__$1;
(statearr_33202_33264[(1)] = (15));

} else {
var statearr_33203_33265 = state_33182__$1;
(statearr_33203_33265[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (16))){
var inst_33162 = (state_33182[(11)]);
var state_33182__$1 = state_33182;
var statearr_33204_33266 = state_33182__$1;
(statearr_33204_33266[(2)] = inst_33162);

(statearr_33204_33266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (10))){
var inst_33154 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33205_33267 = state_33182__$1;
(statearr_33205_33267[(2)] = inst_33154);

(statearr_33205_33267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (18))){
var inst_33165 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33206_33268 = state_33182__$1;
(statearr_33206_33268[(2)] = inst_33165);

(statearr_33206_33268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (8))){
var inst_33151 = cljs.core.async.close_BANG_.call(null,to);
var state_33182__$1 = state_33182;
var statearr_33207_33269 = state_33182__$1;
(statearr_33207_33269[(2)] = inst_33151);

(statearr_33207_33269[(1)] = (10));


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
});})(c__28065__auto__,jobs,results,process,async))
;
return ((function (switch__28003__auto__,c__28065__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0 = (function (){
var statearr_33211 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__);

(statearr_33211[(1)] = (1));

return statearr_33211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1 = (function (state_33182){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33212){if((e33212 instanceof Object)){
var ex__28007__auto__ = e33212;
var statearr_33213_33270 = state_33182;
(statearr_33213_33270[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33271 = state_33182;
state_33182 = G__33271;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__ = function(state_33182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1.call(this,state_33182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__,jobs,results,process,async))
})();
var state__28067__auto__ = (function (){var statearr_33214 = f__28066__auto__.call(null);
(statearr_33214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_33214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__,jobs,results,process,async))
);

return c__28065__auto__;
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
var G__33273 = arguments.length;
switch (G__33273) {
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
var G__33276 = arguments.length;
switch (G__33276) {
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
var G__33279 = arguments.length;
switch (G__33279) {
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
var c__28065__auto___33331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___33331,tc,fc){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___33331,tc,fc){
return (function (state_33305){
var state_val_33306 = (state_33305[(1)]);
if((state_val_33306 === (7))){
var inst_33301 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33307_33332 = state_33305__$1;
(statearr_33307_33332[(2)] = inst_33301);

(statearr_33307_33332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (1))){
var state_33305__$1 = state_33305;
var statearr_33308_33333 = state_33305__$1;
(statearr_33308_33333[(2)] = null);

(statearr_33308_33333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (4))){
var inst_33282 = (state_33305[(7)]);
var inst_33282__$1 = (state_33305[(2)]);
var inst_33283 = (inst_33282__$1 == null);
var state_33305__$1 = (function (){var statearr_33309 = state_33305;
(statearr_33309[(7)] = inst_33282__$1);

return statearr_33309;
})();
if(cljs.core.truth_(inst_33283)){
var statearr_33310_33334 = state_33305__$1;
(statearr_33310_33334[(1)] = (5));

} else {
var statearr_33311_33335 = state_33305__$1;
(statearr_33311_33335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (13))){
var state_33305__$1 = state_33305;
var statearr_33312_33336 = state_33305__$1;
(statearr_33312_33336[(2)] = null);

(statearr_33312_33336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (6))){
var inst_33282 = (state_33305[(7)]);
var inst_33288 = p.call(null,inst_33282);
var state_33305__$1 = state_33305;
if(cljs.core.truth_(inst_33288)){
var statearr_33313_33337 = state_33305__$1;
(statearr_33313_33337[(1)] = (9));

} else {
var statearr_33314_33338 = state_33305__$1;
(statearr_33314_33338[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (3))){
var inst_33303 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33305__$1,inst_33303);
} else {
if((state_val_33306 === (12))){
var state_33305__$1 = state_33305;
var statearr_33315_33339 = state_33305__$1;
(statearr_33315_33339[(2)] = null);

(statearr_33315_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (2))){
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33305__$1,(4),ch);
} else {
if((state_val_33306 === (11))){
var inst_33282 = (state_33305[(7)]);
var inst_33292 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33305__$1,(8),inst_33292,inst_33282);
} else {
if((state_val_33306 === (9))){
var state_33305__$1 = state_33305;
var statearr_33316_33340 = state_33305__$1;
(statearr_33316_33340[(2)] = tc);

(statearr_33316_33340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (5))){
var inst_33285 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33286 = cljs.core.async.close_BANG_.call(null,fc);
var state_33305__$1 = (function (){var statearr_33317 = state_33305;
(statearr_33317[(8)] = inst_33285);

return statearr_33317;
})();
var statearr_33318_33341 = state_33305__$1;
(statearr_33318_33341[(2)] = inst_33286);

(statearr_33318_33341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (14))){
var inst_33299 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33319_33342 = state_33305__$1;
(statearr_33319_33342[(2)] = inst_33299);

(statearr_33319_33342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (10))){
var state_33305__$1 = state_33305;
var statearr_33320_33343 = state_33305__$1;
(statearr_33320_33343[(2)] = fc);

(statearr_33320_33343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (8))){
var inst_33294 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
if(cljs.core.truth_(inst_33294)){
var statearr_33321_33344 = state_33305__$1;
(statearr_33321_33344[(1)] = (12));

} else {
var statearr_33322_33345 = state_33305__$1;
(statearr_33322_33345[(1)] = (13));

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
});})(c__28065__auto___33331,tc,fc))
;
return ((function (switch__28003__auto__,c__28065__auto___33331,tc,fc){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_33326 = [null,null,null,null,null,null,null,null,null];
(statearr_33326[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_33326[(1)] = (1));

return statearr_33326;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_33305){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33327){if((e33327 instanceof Object)){
var ex__28007__auto__ = e33327;
var statearr_33328_33346 = state_33305;
(statearr_33328_33346[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33347 = state_33305;
state_33305 = G__33347;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_33305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_33305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___33331,tc,fc))
})();
var state__28067__auto__ = (function (){var statearr_33329 = f__28066__auto__.call(null);
(statearr_33329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___33331);

return statearr_33329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___33331,tc,fc))
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
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__){
return (function (state_33394){
var state_val_33395 = (state_33394[(1)]);
if((state_val_33395 === (7))){
var inst_33390 = (state_33394[(2)]);
var state_33394__$1 = state_33394;
var statearr_33396_33412 = state_33394__$1;
(statearr_33396_33412[(2)] = inst_33390);

(statearr_33396_33412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (6))){
var inst_33383 = (state_33394[(7)]);
var inst_33380 = (state_33394[(8)]);
var inst_33387 = f.call(null,inst_33380,inst_33383);
var inst_33380__$1 = inst_33387;
var state_33394__$1 = (function (){var statearr_33397 = state_33394;
(statearr_33397[(8)] = inst_33380__$1);

return statearr_33397;
})();
var statearr_33398_33413 = state_33394__$1;
(statearr_33398_33413[(2)] = null);

(statearr_33398_33413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (5))){
var inst_33380 = (state_33394[(8)]);
var state_33394__$1 = state_33394;
var statearr_33399_33414 = state_33394__$1;
(statearr_33399_33414[(2)] = inst_33380);

(statearr_33399_33414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (4))){
var inst_33383 = (state_33394[(7)]);
var inst_33383__$1 = (state_33394[(2)]);
var inst_33384 = (inst_33383__$1 == null);
var state_33394__$1 = (function (){var statearr_33400 = state_33394;
(statearr_33400[(7)] = inst_33383__$1);

return statearr_33400;
})();
if(cljs.core.truth_(inst_33384)){
var statearr_33401_33415 = state_33394__$1;
(statearr_33401_33415[(1)] = (5));

} else {
var statearr_33402_33416 = state_33394__$1;
(statearr_33402_33416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (3))){
var inst_33392 = (state_33394[(2)]);
var state_33394__$1 = state_33394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33394__$1,inst_33392);
} else {
if((state_val_33395 === (2))){
var state_33394__$1 = state_33394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33394__$1,(4),ch);
} else {
if((state_val_33395 === (1))){
var inst_33380 = init;
var state_33394__$1 = (function (){var statearr_33403 = state_33394;
(statearr_33403[(8)] = inst_33380);

return statearr_33403;
})();
var statearr_33404_33417 = state_33394__$1;
(statearr_33404_33417[(2)] = null);

(statearr_33404_33417[(1)] = (2));


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
});})(c__28065__auto__))
;
return ((function (switch__28003__auto__,c__28065__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28004__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28004__auto____0 = (function (){
var statearr_33408 = [null,null,null,null,null,null,null,null,null];
(statearr_33408[(0)] = cljs$core$async$reduce_$_state_machine__28004__auto__);

(statearr_33408[(1)] = (1));

return statearr_33408;
});
var cljs$core$async$reduce_$_state_machine__28004__auto____1 = (function (state_33394){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33409){if((e33409 instanceof Object)){
var ex__28007__auto__ = e33409;
var statearr_33410_33418 = state_33394;
(statearr_33410_33418[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_33394;
state_33394 = G__33419;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28004__auto__ = function(state_33394){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28004__auto____1.call(this,state_33394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28004__auto____0;
cljs$core$async$reduce_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28004__auto____1;
return cljs$core$async$reduce_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__))
})();
var state__28067__auto__ = (function (){var statearr_33411 = f__28066__auto__.call(null);
(statearr_33411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__))
);

return c__28065__auto__;
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
var G__33421 = arguments.length;
switch (G__33421) {
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
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__){
return (function (state_33446){
var state_val_33447 = (state_33446[(1)]);
if((state_val_33447 === (7))){
var inst_33428 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33448_33472 = state_33446__$1;
(statearr_33448_33472[(2)] = inst_33428);

(statearr_33448_33472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (1))){
var inst_33422 = cljs.core.seq.call(null,coll);
var inst_33423 = inst_33422;
var state_33446__$1 = (function (){var statearr_33449 = state_33446;
(statearr_33449[(7)] = inst_33423);

return statearr_33449;
})();
var statearr_33450_33473 = state_33446__$1;
(statearr_33450_33473[(2)] = null);

(statearr_33450_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (4))){
var inst_33423 = (state_33446[(7)]);
var inst_33426 = cljs.core.first.call(null,inst_33423);
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33446__$1,(7),ch,inst_33426);
} else {
if((state_val_33447 === (13))){
var inst_33440 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33451_33474 = state_33446__$1;
(statearr_33451_33474[(2)] = inst_33440);

(statearr_33451_33474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (6))){
var inst_33431 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
if(cljs.core.truth_(inst_33431)){
var statearr_33452_33475 = state_33446__$1;
(statearr_33452_33475[(1)] = (8));

} else {
var statearr_33453_33476 = state_33446__$1;
(statearr_33453_33476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (3))){
var inst_33444 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33446__$1,inst_33444);
} else {
if((state_val_33447 === (12))){
var state_33446__$1 = state_33446;
var statearr_33454_33477 = state_33446__$1;
(statearr_33454_33477[(2)] = null);

(statearr_33454_33477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (2))){
var inst_33423 = (state_33446[(7)]);
var state_33446__$1 = state_33446;
if(cljs.core.truth_(inst_33423)){
var statearr_33455_33478 = state_33446__$1;
(statearr_33455_33478[(1)] = (4));

} else {
var statearr_33456_33479 = state_33446__$1;
(statearr_33456_33479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (11))){
var inst_33437 = cljs.core.async.close_BANG_.call(null,ch);
var state_33446__$1 = state_33446;
var statearr_33457_33480 = state_33446__$1;
(statearr_33457_33480[(2)] = inst_33437);

(statearr_33457_33480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (9))){
var state_33446__$1 = state_33446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33458_33481 = state_33446__$1;
(statearr_33458_33481[(1)] = (11));

} else {
var statearr_33459_33482 = state_33446__$1;
(statearr_33459_33482[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (5))){
var inst_33423 = (state_33446[(7)]);
var state_33446__$1 = state_33446;
var statearr_33460_33483 = state_33446__$1;
(statearr_33460_33483[(2)] = inst_33423);

(statearr_33460_33483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (10))){
var inst_33442 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33461_33484 = state_33446__$1;
(statearr_33461_33484[(2)] = inst_33442);

(statearr_33461_33484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (8))){
var inst_33423 = (state_33446[(7)]);
var inst_33433 = cljs.core.next.call(null,inst_33423);
var inst_33423__$1 = inst_33433;
var state_33446__$1 = (function (){var statearr_33462 = state_33446;
(statearr_33462[(7)] = inst_33423__$1);

return statearr_33462;
})();
var statearr_33463_33485 = state_33446__$1;
(statearr_33463_33485[(2)] = null);

(statearr_33463_33485[(1)] = (2));


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
});})(c__28065__auto__))
;
return ((function (switch__28003__auto__,c__28065__auto__){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_33467 = [null,null,null,null,null,null,null,null];
(statearr_33467[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_33467[(1)] = (1));

return statearr_33467;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_33446){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33468){if((e33468 instanceof Object)){
var ex__28007__auto__ = e33468;
var statearr_33469_33486 = state_33446;
(statearr_33469_33486[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33487 = state_33446;
state_33446 = G__33487;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_33446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_33446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__))
})();
var state__28067__auto__ = (function (){var statearr_33470 = f__28066__auto__.call(null);
(statearr_33470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_33470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__))
);

return c__28065__auto__;
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

cljs.core.async.Mux = (function (){var obj33489 = {};
return obj33489;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__24914__auto__ = _;
if(and__24914__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25562__auto__ = (((_ == null))?null:_);
return (function (){var or__24926__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj33491 = {};
return obj33491;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
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
if(typeof cljs.core.async.t33713 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33713 = (function (cs,ch,mult,meta33714){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33714 = meta33714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33713.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t33713.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t33713.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t33713.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t33713.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t33713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33715){
var self__ = this;
var _33715__$1 = this;
return self__.meta33714;
});})(cs))
;

cljs.core.async.t33713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33715,meta33714__$1){
var self__ = this;
var _33715__$1 = this;
return (new cljs.core.async.t33713(self__.cs,self__.ch,self__.mult,meta33714__$1));
});})(cs))
;

cljs.core.async.t33713.cljs$lang$type = true;

cljs.core.async.t33713.cljs$lang$ctorStr = "cljs.core.async/t33713";

cljs.core.async.t33713.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t33713");
});})(cs))
;

cljs.core.async.__GT_t33713 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t33713(cs__$1,ch__$1,mult__$1,meta33714){
return (new cljs.core.async.t33713(cs__$1,ch__$1,mult__$1,meta33714));
});})(cs))
;

}

return (new cljs.core.async.t33713(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28065__auto___33934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___33934,cs,m,dchan,dctr,done){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___33934,cs,m,dchan,dctr,done){
return (function (state_33846){
var state_val_33847 = (state_33846[(1)]);
if((state_val_33847 === (7))){
var inst_33842 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33848_33935 = state_33846__$1;
(statearr_33848_33935[(2)] = inst_33842);

(statearr_33848_33935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (20))){
var inst_33747 = (state_33846[(7)]);
var inst_33757 = cljs.core.first.call(null,inst_33747);
var inst_33758 = cljs.core.nth.call(null,inst_33757,(0),null);
var inst_33759 = cljs.core.nth.call(null,inst_33757,(1),null);
var state_33846__$1 = (function (){var statearr_33849 = state_33846;
(statearr_33849[(8)] = inst_33758);

return statearr_33849;
})();
if(cljs.core.truth_(inst_33759)){
var statearr_33850_33936 = state_33846__$1;
(statearr_33850_33936[(1)] = (22));

} else {
var statearr_33851_33937 = state_33846__$1;
(statearr_33851_33937[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (27))){
var inst_33787 = (state_33846[(9)]);
var inst_33794 = (state_33846[(10)]);
var inst_33789 = (state_33846[(11)]);
var inst_33718 = (state_33846[(12)]);
var inst_33794__$1 = cljs.core._nth.call(null,inst_33787,inst_33789);
var inst_33795 = cljs.core.async.put_BANG_.call(null,inst_33794__$1,inst_33718,done);
var state_33846__$1 = (function (){var statearr_33852 = state_33846;
(statearr_33852[(10)] = inst_33794__$1);

return statearr_33852;
})();
if(cljs.core.truth_(inst_33795)){
var statearr_33853_33938 = state_33846__$1;
(statearr_33853_33938[(1)] = (30));

} else {
var statearr_33854_33939 = state_33846__$1;
(statearr_33854_33939[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (1))){
var state_33846__$1 = state_33846;
var statearr_33855_33940 = state_33846__$1;
(statearr_33855_33940[(2)] = null);

(statearr_33855_33940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (24))){
var inst_33747 = (state_33846[(7)]);
var inst_33764 = (state_33846[(2)]);
var inst_33765 = cljs.core.next.call(null,inst_33747);
var inst_33727 = inst_33765;
var inst_33728 = null;
var inst_33729 = (0);
var inst_33730 = (0);
var state_33846__$1 = (function (){var statearr_33856 = state_33846;
(statearr_33856[(13)] = inst_33727);

(statearr_33856[(14)] = inst_33730);

(statearr_33856[(15)] = inst_33729);

(statearr_33856[(16)] = inst_33764);

(statearr_33856[(17)] = inst_33728);

return statearr_33856;
})();
var statearr_33857_33941 = state_33846__$1;
(statearr_33857_33941[(2)] = null);

(statearr_33857_33941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (39))){
var state_33846__$1 = state_33846;
var statearr_33861_33942 = state_33846__$1;
(statearr_33861_33942[(2)] = null);

(statearr_33861_33942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (4))){
var inst_33718 = (state_33846[(12)]);
var inst_33718__$1 = (state_33846[(2)]);
var inst_33719 = (inst_33718__$1 == null);
var state_33846__$1 = (function (){var statearr_33862 = state_33846;
(statearr_33862[(12)] = inst_33718__$1);

return statearr_33862;
})();
if(cljs.core.truth_(inst_33719)){
var statearr_33863_33943 = state_33846__$1;
(statearr_33863_33943[(1)] = (5));

} else {
var statearr_33864_33944 = state_33846__$1;
(statearr_33864_33944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (15))){
var inst_33727 = (state_33846[(13)]);
var inst_33730 = (state_33846[(14)]);
var inst_33729 = (state_33846[(15)]);
var inst_33728 = (state_33846[(17)]);
var inst_33743 = (state_33846[(2)]);
var inst_33744 = (inst_33730 + (1));
var tmp33858 = inst_33727;
var tmp33859 = inst_33729;
var tmp33860 = inst_33728;
var inst_33727__$1 = tmp33858;
var inst_33728__$1 = tmp33860;
var inst_33729__$1 = tmp33859;
var inst_33730__$1 = inst_33744;
var state_33846__$1 = (function (){var statearr_33865 = state_33846;
(statearr_33865[(13)] = inst_33727__$1);

(statearr_33865[(14)] = inst_33730__$1);

(statearr_33865[(18)] = inst_33743);

(statearr_33865[(15)] = inst_33729__$1);

(statearr_33865[(17)] = inst_33728__$1);

return statearr_33865;
})();
var statearr_33866_33945 = state_33846__$1;
(statearr_33866_33945[(2)] = null);

(statearr_33866_33945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (21))){
var inst_33768 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33870_33946 = state_33846__$1;
(statearr_33870_33946[(2)] = inst_33768);

(statearr_33870_33946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (31))){
var inst_33794 = (state_33846[(10)]);
var inst_33798 = done.call(null,null);
var inst_33799 = cljs.core.async.untap_STAR_.call(null,m,inst_33794);
var state_33846__$1 = (function (){var statearr_33871 = state_33846;
(statearr_33871[(19)] = inst_33798);

return statearr_33871;
})();
var statearr_33872_33947 = state_33846__$1;
(statearr_33872_33947[(2)] = inst_33799);

(statearr_33872_33947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (32))){
var inst_33786 = (state_33846[(20)]);
var inst_33787 = (state_33846[(9)]);
var inst_33788 = (state_33846[(21)]);
var inst_33789 = (state_33846[(11)]);
var inst_33801 = (state_33846[(2)]);
var inst_33802 = (inst_33789 + (1));
var tmp33867 = inst_33786;
var tmp33868 = inst_33787;
var tmp33869 = inst_33788;
var inst_33786__$1 = tmp33867;
var inst_33787__$1 = tmp33868;
var inst_33788__$1 = tmp33869;
var inst_33789__$1 = inst_33802;
var state_33846__$1 = (function (){var statearr_33873 = state_33846;
(statearr_33873[(20)] = inst_33786__$1);

(statearr_33873[(9)] = inst_33787__$1);

(statearr_33873[(21)] = inst_33788__$1);

(statearr_33873[(22)] = inst_33801);

(statearr_33873[(11)] = inst_33789__$1);

return statearr_33873;
})();
var statearr_33874_33948 = state_33846__$1;
(statearr_33874_33948[(2)] = null);

(statearr_33874_33948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (40))){
var inst_33814 = (state_33846[(23)]);
var inst_33818 = done.call(null,null);
var inst_33819 = cljs.core.async.untap_STAR_.call(null,m,inst_33814);
var state_33846__$1 = (function (){var statearr_33875 = state_33846;
(statearr_33875[(24)] = inst_33818);

return statearr_33875;
})();
var statearr_33876_33949 = state_33846__$1;
(statearr_33876_33949[(2)] = inst_33819);

(statearr_33876_33949[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (33))){
var inst_33805 = (state_33846[(25)]);
var inst_33807 = cljs.core.chunked_seq_QMARK_.call(null,inst_33805);
var state_33846__$1 = state_33846;
if(inst_33807){
var statearr_33877_33950 = state_33846__$1;
(statearr_33877_33950[(1)] = (36));

} else {
var statearr_33878_33951 = state_33846__$1;
(statearr_33878_33951[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (13))){
var inst_33737 = (state_33846[(26)]);
var inst_33740 = cljs.core.async.close_BANG_.call(null,inst_33737);
var state_33846__$1 = state_33846;
var statearr_33879_33952 = state_33846__$1;
(statearr_33879_33952[(2)] = inst_33740);

(statearr_33879_33952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (22))){
var inst_33758 = (state_33846[(8)]);
var inst_33761 = cljs.core.async.close_BANG_.call(null,inst_33758);
var state_33846__$1 = state_33846;
var statearr_33880_33953 = state_33846__$1;
(statearr_33880_33953[(2)] = inst_33761);

(statearr_33880_33953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (36))){
var inst_33805 = (state_33846[(25)]);
var inst_33809 = cljs.core.chunk_first.call(null,inst_33805);
var inst_33810 = cljs.core.chunk_rest.call(null,inst_33805);
var inst_33811 = cljs.core.count.call(null,inst_33809);
var inst_33786 = inst_33810;
var inst_33787 = inst_33809;
var inst_33788 = inst_33811;
var inst_33789 = (0);
var state_33846__$1 = (function (){var statearr_33881 = state_33846;
(statearr_33881[(20)] = inst_33786);

(statearr_33881[(9)] = inst_33787);

(statearr_33881[(21)] = inst_33788);

(statearr_33881[(11)] = inst_33789);

return statearr_33881;
})();
var statearr_33882_33954 = state_33846__$1;
(statearr_33882_33954[(2)] = null);

(statearr_33882_33954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (41))){
var inst_33805 = (state_33846[(25)]);
var inst_33821 = (state_33846[(2)]);
var inst_33822 = cljs.core.next.call(null,inst_33805);
var inst_33786 = inst_33822;
var inst_33787 = null;
var inst_33788 = (0);
var inst_33789 = (0);
var state_33846__$1 = (function (){var statearr_33883 = state_33846;
(statearr_33883[(27)] = inst_33821);

(statearr_33883[(20)] = inst_33786);

(statearr_33883[(9)] = inst_33787);

(statearr_33883[(21)] = inst_33788);

(statearr_33883[(11)] = inst_33789);

return statearr_33883;
})();
var statearr_33884_33955 = state_33846__$1;
(statearr_33884_33955[(2)] = null);

(statearr_33884_33955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (43))){
var state_33846__$1 = state_33846;
var statearr_33885_33956 = state_33846__$1;
(statearr_33885_33956[(2)] = null);

(statearr_33885_33956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (29))){
var inst_33830 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33886_33957 = state_33846__$1;
(statearr_33886_33957[(2)] = inst_33830);

(statearr_33886_33957[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (44))){
var inst_33839 = (state_33846[(2)]);
var state_33846__$1 = (function (){var statearr_33887 = state_33846;
(statearr_33887[(28)] = inst_33839);

return statearr_33887;
})();
var statearr_33888_33958 = state_33846__$1;
(statearr_33888_33958[(2)] = null);

(statearr_33888_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (6))){
var inst_33778 = (state_33846[(29)]);
var inst_33777 = cljs.core.deref.call(null,cs);
var inst_33778__$1 = cljs.core.keys.call(null,inst_33777);
var inst_33779 = cljs.core.count.call(null,inst_33778__$1);
var inst_33780 = cljs.core.reset_BANG_.call(null,dctr,inst_33779);
var inst_33785 = cljs.core.seq.call(null,inst_33778__$1);
var inst_33786 = inst_33785;
var inst_33787 = null;
var inst_33788 = (0);
var inst_33789 = (0);
var state_33846__$1 = (function (){var statearr_33889 = state_33846;
(statearr_33889[(30)] = inst_33780);

(statearr_33889[(20)] = inst_33786);

(statearr_33889[(29)] = inst_33778__$1);

(statearr_33889[(9)] = inst_33787);

(statearr_33889[(21)] = inst_33788);

(statearr_33889[(11)] = inst_33789);

return statearr_33889;
})();
var statearr_33890_33959 = state_33846__$1;
(statearr_33890_33959[(2)] = null);

(statearr_33890_33959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (28))){
var inst_33805 = (state_33846[(25)]);
var inst_33786 = (state_33846[(20)]);
var inst_33805__$1 = cljs.core.seq.call(null,inst_33786);
var state_33846__$1 = (function (){var statearr_33891 = state_33846;
(statearr_33891[(25)] = inst_33805__$1);

return statearr_33891;
})();
if(inst_33805__$1){
var statearr_33892_33960 = state_33846__$1;
(statearr_33892_33960[(1)] = (33));

} else {
var statearr_33893_33961 = state_33846__$1;
(statearr_33893_33961[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (25))){
var inst_33788 = (state_33846[(21)]);
var inst_33789 = (state_33846[(11)]);
var inst_33791 = (inst_33789 < inst_33788);
var inst_33792 = inst_33791;
var state_33846__$1 = state_33846;
if(cljs.core.truth_(inst_33792)){
var statearr_33894_33962 = state_33846__$1;
(statearr_33894_33962[(1)] = (27));

} else {
var statearr_33895_33963 = state_33846__$1;
(statearr_33895_33963[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (34))){
var state_33846__$1 = state_33846;
var statearr_33896_33964 = state_33846__$1;
(statearr_33896_33964[(2)] = null);

(statearr_33896_33964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (17))){
var state_33846__$1 = state_33846;
var statearr_33897_33965 = state_33846__$1;
(statearr_33897_33965[(2)] = null);

(statearr_33897_33965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (3))){
var inst_33844 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33846__$1,inst_33844);
} else {
if((state_val_33847 === (12))){
var inst_33773 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33898_33966 = state_33846__$1;
(statearr_33898_33966[(2)] = inst_33773);

(statearr_33898_33966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (2))){
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33846__$1,(4),ch);
} else {
if((state_val_33847 === (23))){
var state_33846__$1 = state_33846;
var statearr_33899_33967 = state_33846__$1;
(statearr_33899_33967[(2)] = null);

(statearr_33899_33967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (35))){
var inst_33828 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33900_33968 = state_33846__$1;
(statearr_33900_33968[(2)] = inst_33828);

(statearr_33900_33968[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (19))){
var inst_33747 = (state_33846[(7)]);
var inst_33751 = cljs.core.chunk_first.call(null,inst_33747);
var inst_33752 = cljs.core.chunk_rest.call(null,inst_33747);
var inst_33753 = cljs.core.count.call(null,inst_33751);
var inst_33727 = inst_33752;
var inst_33728 = inst_33751;
var inst_33729 = inst_33753;
var inst_33730 = (0);
var state_33846__$1 = (function (){var statearr_33901 = state_33846;
(statearr_33901[(13)] = inst_33727);

(statearr_33901[(14)] = inst_33730);

(statearr_33901[(15)] = inst_33729);

(statearr_33901[(17)] = inst_33728);

return statearr_33901;
})();
var statearr_33902_33969 = state_33846__$1;
(statearr_33902_33969[(2)] = null);

(statearr_33902_33969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (11))){
var inst_33727 = (state_33846[(13)]);
var inst_33747 = (state_33846[(7)]);
var inst_33747__$1 = cljs.core.seq.call(null,inst_33727);
var state_33846__$1 = (function (){var statearr_33903 = state_33846;
(statearr_33903[(7)] = inst_33747__$1);

return statearr_33903;
})();
if(inst_33747__$1){
var statearr_33904_33970 = state_33846__$1;
(statearr_33904_33970[(1)] = (16));

} else {
var statearr_33905_33971 = state_33846__$1;
(statearr_33905_33971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (9))){
var inst_33775 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33906_33972 = state_33846__$1;
(statearr_33906_33972[(2)] = inst_33775);

(statearr_33906_33972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (5))){
var inst_33725 = cljs.core.deref.call(null,cs);
var inst_33726 = cljs.core.seq.call(null,inst_33725);
var inst_33727 = inst_33726;
var inst_33728 = null;
var inst_33729 = (0);
var inst_33730 = (0);
var state_33846__$1 = (function (){var statearr_33907 = state_33846;
(statearr_33907[(13)] = inst_33727);

(statearr_33907[(14)] = inst_33730);

(statearr_33907[(15)] = inst_33729);

(statearr_33907[(17)] = inst_33728);

return statearr_33907;
})();
var statearr_33908_33973 = state_33846__$1;
(statearr_33908_33973[(2)] = null);

(statearr_33908_33973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (14))){
var state_33846__$1 = state_33846;
var statearr_33909_33974 = state_33846__$1;
(statearr_33909_33974[(2)] = null);

(statearr_33909_33974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (45))){
var inst_33836 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33910_33975 = state_33846__$1;
(statearr_33910_33975[(2)] = inst_33836);

(statearr_33910_33975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (26))){
var inst_33778 = (state_33846[(29)]);
var inst_33832 = (state_33846[(2)]);
var inst_33833 = cljs.core.seq.call(null,inst_33778);
var state_33846__$1 = (function (){var statearr_33911 = state_33846;
(statearr_33911[(31)] = inst_33832);

return statearr_33911;
})();
if(inst_33833){
var statearr_33912_33976 = state_33846__$1;
(statearr_33912_33976[(1)] = (42));

} else {
var statearr_33913_33977 = state_33846__$1;
(statearr_33913_33977[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (16))){
var inst_33747 = (state_33846[(7)]);
var inst_33749 = cljs.core.chunked_seq_QMARK_.call(null,inst_33747);
var state_33846__$1 = state_33846;
if(inst_33749){
var statearr_33914_33978 = state_33846__$1;
(statearr_33914_33978[(1)] = (19));

} else {
var statearr_33915_33979 = state_33846__$1;
(statearr_33915_33979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (38))){
var inst_33825 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33916_33980 = state_33846__$1;
(statearr_33916_33980[(2)] = inst_33825);

(statearr_33916_33980[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (30))){
var state_33846__$1 = state_33846;
var statearr_33917_33981 = state_33846__$1;
(statearr_33917_33981[(2)] = null);

(statearr_33917_33981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (10))){
var inst_33730 = (state_33846[(14)]);
var inst_33728 = (state_33846[(17)]);
var inst_33736 = cljs.core._nth.call(null,inst_33728,inst_33730);
var inst_33737 = cljs.core.nth.call(null,inst_33736,(0),null);
var inst_33738 = cljs.core.nth.call(null,inst_33736,(1),null);
var state_33846__$1 = (function (){var statearr_33918 = state_33846;
(statearr_33918[(26)] = inst_33737);

return statearr_33918;
})();
if(cljs.core.truth_(inst_33738)){
var statearr_33919_33982 = state_33846__$1;
(statearr_33919_33982[(1)] = (13));

} else {
var statearr_33920_33983 = state_33846__$1;
(statearr_33920_33983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (18))){
var inst_33771 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33921_33984 = state_33846__$1;
(statearr_33921_33984[(2)] = inst_33771);

(statearr_33921_33984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (42))){
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33846__$1,(45),dchan);
} else {
if((state_val_33847 === (37))){
var inst_33805 = (state_33846[(25)]);
var inst_33814 = (state_33846[(23)]);
var inst_33718 = (state_33846[(12)]);
var inst_33814__$1 = cljs.core.first.call(null,inst_33805);
var inst_33815 = cljs.core.async.put_BANG_.call(null,inst_33814__$1,inst_33718,done);
var state_33846__$1 = (function (){var statearr_33922 = state_33846;
(statearr_33922[(23)] = inst_33814__$1);

return statearr_33922;
})();
if(cljs.core.truth_(inst_33815)){
var statearr_33923_33985 = state_33846__$1;
(statearr_33923_33985[(1)] = (39));

} else {
var statearr_33924_33986 = state_33846__$1;
(statearr_33924_33986[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (8))){
var inst_33730 = (state_33846[(14)]);
var inst_33729 = (state_33846[(15)]);
var inst_33732 = (inst_33730 < inst_33729);
var inst_33733 = inst_33732;
var state_33846__$1 = state_33846;
if(cljs.core.truth_(inst_33733)){
var statearr_33925_33987 = state_33846__$1;
(statearr_33925_33987[(1)] = (10));

} else {
var statearr_33926_33988 = state_33846__$1;
(statearr_33926_33988[(1)] = (11));

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
});})(c__28065__auto___33934,cs,m,dchan,dctr,done))
;
return ((function (switch__28003__auto__,c__28065__auto___33934,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28004__auto__ = null;
var cljs$core$async$mult_$_state_machine__28004__auto____0 = (function (){
var statearr_33930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33930[(0)] = cljs$core$async$mult_$_state_machine__28004__auto__);

(statearr_33930[(1)] = (1));

return statearr_33930;
});
var cljs$core$async$mult_$_state_machine__28004__auto____1 = (function (state_33846){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_33846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e33931){if((e33931 instanceof Object)){
var ex__28007__auto__ = e33931;
var statearr_33932_33989 = state_33846;
(statearr_33932_33989[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33990 = state_33846;
state_33846 = G__33990;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28004__auto__ = function(state_33846){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28004__auto____1.call(this,state_33846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28004__auto____0;
cljs$core$async$mult_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28004__auto____1;
return cljs$core$async$mult_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___33934,cs,m,dchan,dctr,done))
})();
var state__28067__auto__ = (function (){var statearr_33933 = f__28066__auto__.call(null);
(statearr_33933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___33934);

return statearr_33933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___33934,cs,m,dchan,dctr,done))
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
var G__33992 = arguments.length;
switch (G__33992) {
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

cljs.core.async.Mix = (function (){var obj33995 = {};
return obj33995;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__25966__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25966__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34000){
var map__34001 = p__34000;
var map__34001__$1 = ((cljs.core.seq_QMARK_.call(null,map__34001))?cljs.core.apply.call(null,cljs.core.hash_map,map__34001):map__34001);
var opts = map__34001__$1;
var statearr_34002_34005 = state;
(statearr_34002_34005[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__34001,map__34001__$1,opts){
return (function (val){
var statearr_34003_34006 = state;
(statearr_34003_34006[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34001,map__34001__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_34004_34007 = state;
(statearr_34004_34007[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33996){
var G__33997 = cljs.core.first.call(null,seq33996);
var seq33996__$1 = cljs.core.next.call(null,seq33996);
var G__33998 = cljs.core.first.call(null,seq33996__$1);
var seq33996__$2 = cljs.core.next.call(null,seq33996__$1);
var G__33999 = cljs.core.first.call(null,seq33996__$2);
var seq33996__$3 = cljs.core.next.call(null,seq33996__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33997,G__33998,G__33999,seq33996__$3);
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
if(typeof cljs.core.async.t34127 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34127 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34128){
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
this.meta34128 = meta34128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34127.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t34127.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34127.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34127.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34127.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34127.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t34127.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34129){
var self__ = this;
var _34129__$1 = this;
return self__.meta34128;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34129,meta34128__$1){
var self__ = this;
var _34129__$1 = this;
return (new cljs.core.async.t34127(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34128__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34127.cljs$lang$type = true;

cljs.core.async.t34127.cljs$lang$ctorStr = "cljs.core.async/t34127";

cljs.core.async.t34127.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34127");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t34127 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t34127(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34128){
return (new cljs.core.async.t34127(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34128));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t34127(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28065__auto___34246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___34246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___34246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34199){
var state_val_34200 = (state_34199[(1)]);
if((state_val_34200 === (7))){
var inst_34143 = (state_34199[(7)]);
var inst_34148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34143);
var state_34199__$1 = state_34199;
var statearr_34201_34247 = state_34199__$1;
(statearr_34201_34247[(2)] = inst_34148);

(statearr_34201_34247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (20))){
var inst_34158 = (state_34199[(8)]);
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34199__$1,(23),out,inst_34158);
} else {
if((state_val_34200 === (1))){
var inst_34133 = (state_34199[(9)]);
var inst_34133__$1 = calc_state.call(null);
var inst_34134 = cljs.core.seq_QMARK_.call(null,inst_34133__$1);
var state_34199__$1 = (function (){var statearr_34202 = state_34199;
(statearr_34202[(9)] = inst_34133__$1);

return statearr_34202;
})();
if(inst_34134){
var statearr_34203_34248 = state_34199__$1;
(statearr_34203_34248[(1)] = (2));

} else {
var statearr_34204_34249 = state_34199__$1;
(statearr_34204_34249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (24))){
var inst_34151 = (state_34199[(10)]);
var inst_34143 = inst_34151;
var state_34199__$1 = (function (){var statearr_34205 = state_34199;
(statearr_34205[(7)] = inst_34143);

return statearr_34205;
})();
var statearr_34206_34250 = state_34199__$1;
(statearr_34206_34250[(2)] = null);

(statearr_34206_34250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (4))){
var inst_34133 = (state_34199[(9)]);
var inst_34139 = (state_34199[(2)]);
var inst_34140 = cljs.core.get.call(null,inst_34139,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34141 = cljs.core.get.call(null,inst_34139,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34142 = cljs.core.get.call(null,inst_34139,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34143 = inst_34133;
var state_34199__$1 = (function (){var statearr_34207 = state_34199;
(statearr_34207[(11)] = inst_34142);

(statearr_34207[(12)] = inst_34140);

(statearr_34207[(13)] = inst_34141);

(statearr_34207[(7)] = inst_34143);

return statearr_34207;
})();
var statearr_34208_34251 = state_34199__$1;
(statearr_34208_34251[(2)] = null);

(statearr_34208_34251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (15))){
var state_34199__$1 = state_34199;
var statearr_34209_34252 = state_34199__$1;
(statearr_34209_34252[(2)] = null);

(statearr_34209_34252[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (21))){
var inst_34151 = (state_34199[(10)]);
var inst_34143 = inst_34151;
var state_34199__$1 = (function (){var statearr_34210 = state_34199;
(statearr_34210[(7)] = inst_34143);

return statearr_34210;
})();
var statearr_34211_34253 = state_34199__$1;
(statearr_34211_34253[(2)] = null);

(statearr_34211_34253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (13))){
var inst_34195 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
var statearr_34212_34254 = state_34199__$1;
(statearr_34212_34254[(2)] = inst_34195);

(statearr_34212_34254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (22))){
var inst_34193 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
var statearr_34213_34255 = state_34199__$1;
(statearr_34213_34255[(2)] = inst_34193);

(statearr_34213_34255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (6))){
var inst_34197 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34199__$1,inst_34197);
} else {
if((state_val_34200 === (25))){
var state_34199__$1 = state_34199;
var statearr_34214_34256 = state_34199__$1;
(statearr_34214_34256[(2)] = null);

(statearr_34214_34256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (17))){
var inst_34173 = (state_34199[(14)]);
var state_34199__$1 = state_34199;
var statearr_34215_34257 = state_34199__$1;
(statearr_34215_34257[(2)] = inst_34173);

(statearr_34215_34257[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (3))){
var inst_34133 = (state_34199[(9)]);
var state_34199__$1 = state_34199;
var statearr_34216_34258 = state_34199__$1;
(statearr_34216_34258[(2)] = inst_34133);

(statearr_34216_34258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (12))){
var inst_34159 = (state_34199[(15)]);
var inst_34154 = (state_34199[(16)]);
var inst_34173 = (state_34199[(14)]);
var inst_34173__$1 = inst_34154.call(null,inst_34159);
var state_34199__$1 = (function (){var statearr_34217 = state_34199;
(statearr_34217[(14)] = inst_34173__$1);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34173__$1)){
var statearr_34218_34259 = state_34199__$1;
(statearr_34218_34259[(1)] = (17));

} else {
var statearr_34219_34260 = state_34199__$1;
(statearr_34219_34260[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (2))){
var inst_34133 = (state_34199[(9)]);
var inst_34136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34133);
var state_34199__$1 = state_34199;
var statearr_34220_34261 = state_34199__$1;
(statearr_34220_34261[(2)] = inst_34136);

(statearr_34220_34261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (23))){
var inst_34184 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
if(cljs.core.truth_(inst_34184)){
var statearr_34221_34262 = state_34199__$1;
(statearr_34221_34262[(1)] = (24));

} else {
var statearr_34222_34263 = state_34199__$1;
(statearr_34222_34263[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (19))){
var inst_34181 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
if(cljs.core.truth_(inst_34181)){
var statearr_34223_34264 = state_34199__$1;
(statearr_34223_34264[(1)] = (20));

} else {
var statearr_34224_34265 = state_34199__$1;
(statearr_34224_34265[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (11))){
var inst_34158 = (state_34199[(8)]);
var inst_34164 = (inst_34158 == null);
var state_34199__$1 = state_34199;
if(cljs.core.truth_(inst_34164)){
var statearr_34225_34266 = state_34199__$1;
(statearr_34225_34266[(1)] = (14));

} else {
var statearr_34226_34267 = state_34199__$1;
(statearr_34226_34267[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (9))){
var inst_34151 = (state_34199[(10)]);
var inst_34151__$1 = (state_34199[(2)]);
var inst_34152 = cljs.core.get.call(null,inst_34151__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34153 = cljs.core.get.call(null,inst_34151__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34154 = cljs.core.get.call(null,inst_34151__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_34199__$1 = (function (){var statearr_34227 = state_34199;
(statearr_34227[(10)] = inst_34151__$1);

(statearr_34227[(16)] = inst_34154);

(statearr_34227[(17)] = inst_34153);

return statearr_34227;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34199__$1,(10),inst_34152);
} else {
if((state_val_34200 === (5))){
var inst_34143 = (state_34199[(7)]);
var inst_34146 = cljs.core.seq_QMARK_.call(null,inst_34143);
var state_34199__$1 = state_34199;
if(inst_34146){
var statearr_34228_34268 = state_34199__$1;
(statearr_34228_34268[(1)] = (7));

} else {
var statearr_34229_34269 = state_34199__$1;
(statearr_34229_34269[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (14))){
var inst_34159 = (state_34199[(15)]);
var inst_34166 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34159);
var state_34199__$1 = state_34199;
var statearr_34230_34270 = state_34199__$1;
(statearr_34230_34270[(2)] = inst_34166);

(statearr_34230_34270[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (26))){
var inst_34189 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
var statearr_34231_34271 = state_34199__$1;
(statearr_34231_34271[(2)] = inst_34189);

(statearr_34231_34271[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (16))){
var inst_34169 = (state_34199[(2)]);
var inst_34170 = calc_state.call(null);
var inst_34143 = inst_34170;
var state_34199__$1 = (function (){var statearr_34232 = state_34199;
(statearr_34232[(18)] = inst_34169);

(statearr_34232[(7)] = inst_34143);

return statearr_34232;
})();
var statearr_34233_34272 = state_34199__$1;
(statearr_34233_34272[(2)] = null);

(statearr_34233_34272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (10))){
var inst_34158 = (state_34199[(8)]);
var inst_34159 = (state_34199[(15)]);
var inst_34157 = (state_34199[(2)]);
var inst_34158__$1 = cljs.core.nth.call(null,inst_34157,(0),null);
var inst_34159__$1 = cljs.core.nth.call(null,inst_34157,(1),null);
var inst_34160 = (inst_34158__$1 == null);
var inst_34161 = cljs.core._EQ_.call(null,inst_34159__$1,change);
var inst_34162 = (inst_34160) || (inst_34161);
var state_34199__$1 = (function (){var statearr_34234 = state_34199;
(statearr_34234[(8)] = inst_34158__$1);

(statearr_34234[(15)] = inst_34159__$1);

return statearr_34234;
})();
if(cljs.core.truth_(inst_34162)){
var statearr_34235_34273 = state_34199__$1;
(statearr_34235_34273[(1)] = (11));

} else {
var statearr_34236_34274 = state_34199__$1;
(statearr_34236_34274[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (18))){
var inst_34159 = (state_34199[(15)]);
var inst_34154 = (state_34199[(16)]);
var inst_34153 = (state_34199[(17)]);
var inst_34176 = cljs.core.empty_QMARK_.call(null,inst_34154);
var inst_34177 = inst_34153.call(null,inst_34159);
var inst_34178 = cljs.core.not.call(null,inst_34177);
var inst_34179 = (inst_34176) && (inst_34178);
var state_34199__$1 = state_34199;
var statearr_34237_34275 = state_34199__$1;
(statearr_34237_34275[(2)] = inst_34179);

(statearr_34237_34275[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (8))){
var inst_34143 = (state_34199[(7)]);
var state_34199__$1 = state_34199;
var statearr_34238_34276 = state_34199__$1;
(statearr_34238_34276[(2)] = inst_34143);

(statearr_34238_34276[(1)] = (9));


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
});})(c__28065__auto___34246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28003__auto__,c__28065__auto___34246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28004__auto__ = null;
var cljs$core$async$mix_$_state_machine__28004__auto____0 = (function (){
var statearr_34242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34242[(0)] = cljs$core$async$mix_$_state_machine__28004__auto__);

(statearr_34242[(1)] = (1));

return statearr_34242;
});
var cljs$core$async$mix_$_state_machine__28004__auto____1 = (function (state_34199){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_34199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e34243){if((e34243 instanceof Object)){
var ex__28007__auto__ = e34243;
var statearr_34244_34277 = state_34199;
(statearr_34244_34277[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34278 = state_34199;
state_34199 = G__34278;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28004__auto__ = function(state_34199){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28004__auto____1.call(this,state_34199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28004__auto____0;
cljs$core$async$mix_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28004__auto____1;
return cljs$core$async$mix_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___34246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28067__auto__ = (function (){var statearr_34245 = f__28066__auto__.call(null);
(statearr_34245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___34246);

return statearr_34245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___34246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj34280 = {};
return obj34280;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__34282 = arguments.length;
switch (G__34282) {
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
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
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
var G__34286 = arguments.length;
switch (G__34286) {
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
var or__24926__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24926__auto__,mults){
return (function (p1__34284_SHARP_){
if(cljs.core.truth_(p1__34284_SHARP_.call(null,topic))){
return p1__34284_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34284_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24926__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t34287 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34287 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta34288){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta34288 = meta34288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34287.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t34287.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t34287.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t34287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t34287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t34287.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t34287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34289){
var self__ = this;
var _34289__$1 = this;
return self__.meta34288;
});})(mults,ensure_mult))
;

cljs.core.async.t34287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34289,meta34288__$1){
var self__ = this;
var _34289__$1 = this;
return (new cljs.core.async.t34287(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta34288__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t34287.cljs$lang$type = true;

cljs.core.async.t34287.cljs$lang$ctorStr = "cljs.core.async/t34287";

cljs.core.async.t34287.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34287");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t34287 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t34287(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta34288){
return (new cljs.core.async.t34287(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta34288));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t34287(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28065__auto___34410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___34410,mults,ensure_mult,p){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___34410,mults,ensure_mult,p){
return (function (state_34361){
var state_val_34362 = (state_34361[(1)]);
if((state_val_34362 === (7))){
var inst_34357 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34363_34411 = state_34361__$1;
(statearr_34363_34411[(2)] = inst_34357);

(statearr_34363_34411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (20))){
var state_34361__$1 = state_34361;
var statearr_34364_34412 = state_34361__$1;
(statearr_34364_34412[(2)] = null);

(statearr_34364_34412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (1))){
var state_34361__$1 = state_34361;
var statearr_34365_34413 = state_34361__$1;
(statearr_34365_34413[(2)] = null);

(statearr_34365_34413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (24))){
var inst_34340 = (state_34361[(7)]);
var inst_34349 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34340);
var state_34361__$1 = state_34361;
var statearr_34366_34414 = state_34361__$1;
(statearr_34366_34414[(2)] = inst_34349);

(statearr_34366_34414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (4))){
var inst_34292 = (state_34361[(8)]);
var inst_34292__$1 = (state_34361[(2)]);
var inst_34293 = (inst_34292__$1 == null);
var state_34361__$1 = (function (){var statearr_34367 = state_34361;
(statearr_34367[(8)] = inst_34292__$1);

return statearr_34367;
})();
if(cljs.core.truth_(inst_34293)){
var statearr_34368_34415 = state_34361__$1;
(statearr_34368_34415[(1)] = (5));

} else {
var statearr_34369_34416 = state_34361__$1;
(statearr_34369_34416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (15))){
var inst_34334 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34370_34417 = state_34361__$1;
(statearr_34370_34417[(2)] = inst_34334);

(statearr_34370_34417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (21))){
var inst_34354 = (state_34361[(2)]);
var state_34361__$1 = (function (){var statearr_34371 = state_34361;
(statearr_34371[(9)] = inst_34354);

return statearr_34371;
})();
var statearr_34372_34418 = state_34361__$1;
(statearr_34372_34418[(2)] = null);

(statearr_34372_34418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (13))){
var inst_34316 = (state_34361[(10)]);
var inst_34318 = cljs.core.chunked_seq_QMARK_.call(null,inst_34316);
var state_34361__$1 = state_34361;
if(inst_34318){
var statearr_34373_34419 = state_34361__$1;
(statearr_34373_34419[(1)] = (16));

} else {
var statearr_34374_34420 = state_34361__$1;
(statearr_34374_34420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (22))){
var inst_34346 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
if(cljs.core.truth_(inst_34346)){
var statearr_34375_34421 = state_34361__$1;
(statearr_34375_34421[(1)] = (23));

} else {
var statearr_34376_34422 = state_34361__$1;
(statearr_34376_34422[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (6))){
var inst_34292 = (state_34361[(8)]);
var inst_34340 = (state_34361[(7)]);
var inst_34342 = (state_34361[(11)]);
var inst_34340__$1 = topic_fn.call(null,inst_34292);
var inst_34341 = cljs.core.deref.call(null,mults);
var inst_34342__$1 = cljs.core.get.call(null,inst_34341,inst_34340__$1);
var state_34361__$1 = (function (){var statearr_34377 = state_34361;
(statearr_34377[(7)] = inst_34340__$1);

(statearr_34377[(11)] = inst_34342__$1);

return statearr_34377;
})();
if(cljs.core.truth_(inst_34342__$1)){
var statearr_34378_34423 = state_34361__$1;
(statearr_34378_34423[(1)] = (19));

} else {
var statearr_34379_34424 = state_34361__$1;
(statearr_34379_34424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (25))){
var inst_34351 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34380_34425 = state_34361__$1;
(statearr_34380_34425[(2)] = inst_34351);

(statearr_34380_34425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (17))){
var inst_34316 = (state_34361[(10)]);
var inst_34325 = cljs.core.first.call(null,inst_34316);
var inst_34326 = cljs.core.async.muxch_STAR_.call(null,inst_34325);
var inst_34327 = cljs.core.async.close_BANG_.call(null,inst_34326);
var inst_34328 = cljs.core.next.call(null,inst_34316);
var inst_34302 = inst_34328;
var inst_34303 = null;
var inst_34304 = (0);
var inst_34305 = (0);
var state_34361__$1 = (function (){var statearr_34381 = state_34361;
(statearr_34381[(12)] = inst_34305);

(statearr_34381[(13)] = inst_34302);

(statearr_34381[(14)] = inst_34327);

(statearr_34381[(15)] = inst_34303);

(statearr_34381[(16)] = inst_34304);

return statearr_34381;
})();
var statearr_34382_34426 = state_34361__$1;
(statearr_34382_34426[(2)] = null);

(statearr_34382_34426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (3))){
var inst_34359 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34361__$1,inst_34359);
} else {
if((state_val_34362 === (12))){
var inst_34336 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34383_34427 = state_34361__$1;
(statearr_34383_34427[(2)] = inst_34336);

(statearr_34383_34427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (2))){
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34361__$1,(4),ch);
} else {
if((state_val_34362 === (23))){
var state_34361__$1 = state_34361;
var statearr_34384_34428 = state_34361__$1;
(statearr_34384_34428[(2)] = null);

(statearr_34384_34428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (19))){
var inst_34292 = (state_34361[(8)]);
var inst_34342 = (state_34361[(11)]);
var inst_34344 = cljs.core.async.muxch_STAR_.call(null,inst_34342);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34361__$1,(22),inst_34344,inst_34292);
} else {
if((state_val_34362 === (11))){
var inst_34302 = (state_34361[(13)]);
var inst_34316 = (state_34361[(10)]);
var inst_34316__$1 = cljs.core.seq.call(null,inst_34302);
var state_34361__$1 = (function (){var statearr_34385 = state_34361;
(statearr_34385[(10)] = inst_34316__$1);

return statearr_34385;
})();
if(inst_34316__$1){
var statearr_34386_34429 = state_34361__$1;
(statearr_34386_34429[(1)] = (13));

} else {
var statearr_34387_34430 = state_34361__$1;
(statearr_34387_34430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (9))){
var inst_34338 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34388_34431 = state_34361__$1;
(statearr_34388_34431[(2)] = inst_34338);

(statearr_34388_34431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (5))){
var inst_34299 = cljs.core.deref.call(null,mults);
var inst_34300 = cljs.core.vals.call(null,inst_34299);
var inst_34301 = cljs.core.seq.call(null,inst_34300);
var inst_34302 = inst_34301;
var inst_34303 = null;
var inst_34304 = (0);
var inst_34305 = (0);
var state_34361__$1 = (function (){var statearr_34389 = state_34361;
(statearr_34389[(12)] = inst_34305);

(statearr_34389[(13)] = inst_34302);

(statearr_34389[(15)] = inst_34303);

(statearr_34389[(16)] = inst_34304);

return statearr_34389;
})();
var statearr_34390_34432 = state_34361__$1;
(statearr_34390_34432[(2)] = null);

(statearr_34390_34432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (14))){
var state_34361__$1 = state_34361;
var statearr_34394_34433 = state_34361__$1;
(statearr_34394_34433[(2)] = null);

(statearr_34394_34433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (16))){
var inst_34316 = (state_34361[(10)]);
var inst_34320 = cljs.core.chunk_first.call(null,inst_34316);
var inst_34321 = cljs.core.chunk_rest.call(null,inst_34316);
var inst_34322 = cljs.core.count.call(null,inst_34320);
var inst_34302 = inst_34321;
var inst_34303 = inst_34320;
var inst_34304 = inst_34322;
var inst_34305 = (0);
var state_34361__$1 = (function (){var statearr_34395 = state_34361;
(statearr_34395[(12)] = inst_34305);

(statearr_34395[(13)] = inst_34302);

(statearr_34395[(15)] = inst_34303);

(statearr_34395[(16)] = inst_34304);

return statearr_34395;
})();
var statearr_34396_34434 = state_34361__$1;
(statearr_34396_34434[(2)] = null);

(statearr_34396_34434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (10))){
var inst_34305 = (state_34361[(12)]);
var inst_34302 = (state_34361[(13)]);
var inst_34303 = (state_34361[(15)]);
var inst_34304 = (state_34361[(16)]);
var inst_34310 = cljs.core._nth.call(null,inst_34303,inst_34305);
var inst_34311 = cljs.core.async.muxch_STAR_.call(null,inst_34310);
var inst_34312 = cljs.core.async.close_BANG_.call(null,inst_34311);
var inst_34313 = (inst_34305 + (1));
var tmp34391 = inst_34302;
var tmp34392 = inst_34303;
var tmp34393 = inst_34304;
var inst_34302__$1 = tmp34391;
var inst_34303__$1 = tmp34392;
var inst_34304__$1 = tmp34393;
var inst_34305__$1 = inst_34313;
var state_34361__$1 = (function (){var statearr_34397 = state_34361;
(statearr_34397[(12)] = inst_34305__$1);

(statearr_34397[(13)] = inst_34302__$1);

(statearr_34397[(17)] = inst_34312);

(statearr_34397[(15)] = inst_34303__$1);

(statearr_34397[(16)] = inst_34304__$1);

return statearr_34397;
})();
var statearr_34398_34435 = state_34361__$1;
(statearr_34398_34435[(2)] = null);

(statearr_34398_34435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (18))){
var inst_34331 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34399_34436 = state_34361__$1;
(statearr_34399_34436[(2)] = inst_34331);

(statearr_34399_34436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (8))){
var inst_34305 = (state_34361[(12)]);
var inst_34304 = (state_34361[(16)]);
var inst_34307 = (inst_34305 < inst_34304);
var inst_34308 = inst_34307;
var state_34361__$1 = state_34361;
if(cljs.core.truth_(inst_34308)){
var statearr_34400_34437 = state_34361__$1;
(statearr_34400_34437[(1)] = (10));

} else {
var statearr_34401_34438 = state_34361__$1;
(statearr_34401_34438[(1)] = (11));

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
});})(c__28065__auto___34410,mults,ensure_mult,p))
;
return ((function (switch__28003__auto__,c__28065__auto___34410,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_34405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34405[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_34405[(1)] = (1));

return statearr_34405;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_34361){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_34361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e34406){if((e34406 instanceof Object)){
var ex__28007__auto__ = e34406;
var statearr_34407_34439 = state_34361;
(statearr_34407_34439[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34440 = state_34361;
state_34361 = G__34440;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_34361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_34361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___34410,mults,ensure_mult,p))
})();
var state__28067__auto__ = (function (){var statearr_34408 = f__28066__auto__.call(null);
(statearr_34408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___34410);

return statearr_34408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___34410,mults,ensure_mult,p))
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
var G__34442 = arguments.length;
switch (G__34442) {
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
var G__34445 = arguments.length;
switch (G__34445) {
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
var G__34448 = arguments.length;
switch (G__34448) {
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
var c__28065__auto___34518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___34518,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___34518,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34487){
var state_val_34488 = (state_34487[(1)]);
if((state_val_34488 === (7))){
var state_34487__$1 = state_34487;
var statearr_34489_34519 = state_34487__$1;
(statearr_34489_34519[(2)] = null);

(statearr_34489_34519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (1))){
var state_34487__$1 = state_34487;
var statearr_34490_34520 = state_34487__$1;
(statearr_34490_34520[(2)] = null);

(statearr_34490_34520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (4))){
var inst_34451 = (state_34487[(7)]);
var inst_34453 = (inst_34451 < cnt);
var state_34487__$1 = state_34487;
if(cljs.core.truth_(inst_34453)){
var statearr_34491_34521 = state_34487__$1;
(statearr_34491_34521[(1)] = (6));

} else {
var statearr_34492_34522 = state_34487__$1;
(statearr_34492_34522[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (15))){
var inst_34483 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34493_34523 = state_34487__$1;
(statearr_34493_34523[(2)] = inst_34483);

(statearr_34493_34523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (13))){
var inst_34476 = cljs.core.async.close_BANG_.call(null,out);
var state_34487__$1 = state_34487;
var statearr_34494_34524 = state_34487__$1;
(statearr_34494_34524[(2)] = inst_34476);

(statearr_34494_34524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (6))){
var state_34487__$1 = state_34487;
var statearr_34495_34525 = state_34487__$1;
(statearr_34495_34525[(2)] = null);

(statearr_34495_34525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (3))){
var inst_34485 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34487__$1,inst_34485);
} else {
if((state_val_34488 === (12))){
var inst_34473 = (state_34487[(8)]);
var inst_34473__$1 = (state_34487[(2)]);
var inst_34474 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34473__$1);
var state_34487__$1 = (function (){var statearr_34496 = state_34487;
(statearr_34496[(8)] = inst_34473__$1);

return statearr_34496;
})();
if(cljs.core.truth_(inst_34474)){
var statearr_34497_34526 = state_34487__$1;
(statearr_34497_34526[(1)] = (13));

} else {
var statearr_34498_34527 = state_34487__$1;
(statearr_34498_34527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (2))){
var inst_34450 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34451 = (0);
var state_34487__$1 = (function (){var statearr_34499 = state_34487;
(statearr_34499[(7)] = inst_34451);

(statearr_34499[(9)] = inst_34450);

return statearr_34499;
})();
var statearr_34500_34528 = state_34487__$1;
(statearr_34500_34528[(2)] = null);

(statearr_34500_34528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (11))){
var inst_34451 = (state_34487[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34487,(10),Object,null,(9));
var inst_34460 = chs__$1.call(null,inst_34451);
var inst_34461 = done.call(null,inst_34451);
var inst_34462 = cljs.core.async.take_BANG_.call(null,inst_34460,inst_34461);
var state_34487__$1 = state_34487;
var statearr_34501_34529 = state_34487__$1;
(statearr_34501_34529[(2)] = inst_34462);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (9))){
var inst_34451 = (state_34487[(7)]);
var inst_34464 = (state_34487[(2)]);
var inst_34465 = (inst_34451 + (1));
var inst_34451__$1 = inst_34465;
var state_34487__$1 = (function (){var statearr_34502 = state_34487;
(statearr_34502[(10)] = inst_34464);

(statearr_34502[(7)] = inst_34451__$1);

return statearr_34502;
})();
var statearr_34503_34530 = state_34487__$1;
(statearr_34503_34530[(2)] = null);

(statearr_34503_34530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (5))){
var inst_34471 = (state_34487[(2)]);
var state_34487__$1 = (function (){var statearr_34504 = state_34487;
(statearr_34504[(11)] = inst_34471);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34487__$1,(12),dchan);
} else {
if((state_val_34488 === (14))){
var inst_34473 = (state_34487[(8)]);
var inst_34478 = cljs.core.apply.call(null,f,inst_34473);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34487__$1,(16),out,inst_34478);
} else {
if((state_val_34488 === (16))){
var inst_34480 = (state_34487[(2)]);
var state_34487__$1 = (function (){var statearr_34505 = state_34487;
(statearr_34505[(12)] = inst_34480);

return statearr_34505;
})();
var statearr_34506_34531 = state_34487__$1;
(statearr_34506_34531[(2)] = null);

(statearr_34506_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (10))){
var inst_34455 = (state_34487[(2)]);
var inst_34456 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34487__$1 = (function (){var statearr_34507 = state_34487;
(statearr_34507[(13)] = inst_34455);

return statearr_34507;
})();
var statearr_34508_34532 = state_34487__$1;
(statearr_34508_34532[(2)] = inst_34456);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (8))){
var inst_34469 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34509_34533 = state_34487__$1;
(statearr_34509_34533[(2)] = inst_34469);

(statearr_34509_34533[(1)] = (5));


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
});})(c__28065__auto___34518,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28003__auto__,c__28065__auto___34518,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34513[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_34487){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_34487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e34514){if((e34514 instanceof Object)){
var ex__28007__auto__ = e34514;
var statearr_34515_34534 = state_34487;
(statearr_34515_34534[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34535 = state_34487;
state_34487 = G__34535;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_34487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_34487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___34518,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28067__auto__ = (function (){var statearr_34516 = f__28066__auto__.call(null);
(statearr_34516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___34518);

return statearr_34516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___34518,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34538 = arguments.length;
switch (G__34538) {
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
var c__28065__auto___34593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___34593,out){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___34593,out){
return (function (state_34568){
var state_val_34569 = (state_34568[(1)]);
if((state_val_34569 === (7))){
var inst_34547 = (state_34568[(7)]);
var inst_34548 = (state_34568[(8)]);
var inst_34547__$1 = (state_34568[(2)]);
var inst_34548__$1 = cljs.core.nth.call(null,inst_34547__$1,(0),null);
var inst_34549 = cljs.core.nth.call(null,inst_34547__$1,(1),null);
var inst_34550 = (inst_34548__$1 == null);
var state_34568__$1 = (function (){var statearr_34570 = state_34568;
(statearr_34570[(9)] = inst_34549);

(statearr_34570[(7)] = inst_34547__$1);

(statearr_34570[(8)] = inst_34548__$1);

return statearr_34570;
})();
if(cljs.core.truth_(inst_34550)){
var statearr_34571_34594 = state_34568__$1;
(statearr_34571_34594[(1)] = (8));

} else {
var statearr_34572_34595 = state_34568__$1;
(statearr_34572_34595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34569 === (1))){
var inst_34539 = cljs.core.vec.call(null,chs);
var inst_34540 = inst_34539;
var state_34568__$1 = (function (){var statearr_34573 = state_34568;
(statearr_34573[(10)] = inst_34540);

return statearr_34573;
})();
var statearr_34574_34596 = state_34568__$1;
(statearr_34574_34596[(2)] = null);

(statearr_34574_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34569 === (4))){
var inst_34540 = (state_34568[(10)]);
var state_34568__$1 = state_34568;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34568__$1,(7),inst_34540);
} else {
if((state_val_34569 === (6))){
var inst_34564 = (state_34568[(2)]);
var state_34568__$1 = state_34568;
var statearr_34575_34597 = state_34568__$1;
(statearr_34575_34597[(2)] = inst_34564);

(statearr_34575_34597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34569 === (3))){
var inst_34566 = (state_34568[(2)]);
var state_34568__$1 = state_34568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34568__$1,inst_34566);
} else {
if((state_val_34569 === (2))){
var inst_34540 = (state_34568[(10)]);
var inst_34542 = cljs.core.count.call(null,inst_34540);
var inst_34543 = (inst_34542 > (0));
var state_34568__$1 = state_34568;
if(cljs.core.truth_(inst_34543)){
var statearr_34577_34598 = state_34568__$1;
(statearr_34577_34598[(1)] = (4));

} else {
var statearr_34578_34599 = state_34568__$1;
(statearr_34578_34599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34569 === (11))){
var inst_34540 = (state_34568[(10)]);
var inst_34557 = (state_34568[(2)]);
var tmp34576 = inst_34540;
var inst_34540__$1 = tmp34576;
var state_34568__$1 = (function (){var statearr_34579 = state_34568;
(statearr_34579[(10)] = inst_34540__$1);

(statearr_34579[(11)] = inst_34557);

return statearr_34579;
})();
var statearr_34580_34600 = state_34568__$1;
(statearr_34580_34600[(2)] = null);

(statearr_34580_34600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34569 === (9))){
var inst_34548 = (state_34568[(8)]);
var state_34568__$1 = state_34568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34568__$1,(11),out,inst_34548);
} else {
if((state_val_34569 === (5))){
var inst_34562 = cljs.core.async.close_BANG_.call(null,out);
var state_34568__$1 = state_34568;
var statearr_34581_34601 = state_34568__$1;
(statearr_34581_34601[(2)] = inst_34562);

(statearr_34581_34601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34569 === (10))){
var inst_34560 = (state_34568[(2)]);
var state_34568__$1 = state_34568;
var statearr_34582_34602 = state_34568__$1;
(statearr_34582_34602[(2)] = inst_34560);

(statearr_34582_34602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34569 === (8))){
var inst_34540 = (state_34568[(10)]);
var inst_34549 = (state_34568[(9)]);
var inst_34547 = (state_34568[(7)]);
var inst_34548 = (state_34568[(8)]);
var inst_34552 = (function (){var c = inst_34549;
var v = inst_34548;
var vec__34545 = inst_34547;
var cs = inst_34540;
return ((function (c,v,vec__34545,cs,inst_34540,inst_34549,inst_34547,inst_34548,state_val_34569,c__28065__auto___34593,out){
return (function (p1__34536_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34536_SHARP_);
});
;})(c,v,vec__34545,cs,inst_34540,inst_34549,inst_34547,inst_34548,state_val_34569,c__28065__auto___34593,out))
})();
var inst_34553 = cljs.core.filterv.call(null,inst_34552,inst_34540);
var inst_34540__$1 = inst_34553;
var state_34568__$1 = (function (){var statearr_34583 = state_34568;
(statearr_34583[(10)] = inst_34540__$1);

return statearr_34583;
})();
var statearr_34584_34603 = state_34568__$1;
(statearr_34584_34603[(2)] = null);

(statearr_34584_34603[(1)] = (2));


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
});})(c__28065__auto___34593,out))
;
return ((function (switch__28003__auto__,c__28065__auto___34593,out){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_34588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34588[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_34588[(1)] = (1));

return statearr_34588;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_34568){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_34568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e34589){if((e34589 instanceof Object)){
var ex__28007__auto__ = e34589;
var statearr_34590_34604 = state_34568;
(statearr_34590_34604[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34605 = state_34568;
state_34568 = G__34605;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_34568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_34568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___34593,out))
})();
var state__28067__auto__ = (function (){var statearr_34591 = f__28066__auto__.call(null);
(statearr_34591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___34593);

return statearr_34591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___34593,out))
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
var G__34607 = arguments.length;
switch (G__34607) {
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
var c__28065__auto___34655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___34655,out){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___34655,out){
return (function (state_34631){
var state_val_34632 = (state_34631[(1)]);
if((state_val_34632 === (7))){
var inst_34613 = (state_34631[(7)]);
var inst_34613__$1 = (state_34631[(2)]);
var inst_34614 = (inst_34613__$1 == null);
var inst_34615 = cljs.core.not.call(null,inst_34614);
var state_34631__$1 = (function (){var statearr_34633 = state_34631;
(statearr_34633[(7)] = inst_34613__$1);

return statearr_34633;
})();
if(inst_34615){
var statearr_34634_34656 = state_34631__$1;
(statearr_34634_34656[(1)] = (8));

} else {
var statearr_34635_34657 = state_34631__$1;
(statearr_34635_34657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (1))){
var inst_34608 = (0);
var state_34631__$1 = (function (){var statearr_34636 = state_34631;
(statearr_34636[(8)] = inst_34608);

return statearr_34636;
})();
var statearr_34637_34658 = state_34631__$1;
(statearr_34637_34658[(2)] = null);

(statearr_34637_34658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (4))){
var state_34631__$1 = state_34631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34631__$1,(7),ch);
} else {
if((state_val_34632 === (6))){
var inst_34626 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
var statearr_34638_34659 = state_34631__$1;
(statearr_34638_34659[(2)] = inst_34626);

(statearr_34638_34659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (3))){
var inst_34628 = (state_34631[(2)]);
var inst_34629 = cljs.core.async.close_BANG_.call(null,out);
var state_34631__$1 = (function (){var statearr_34639 = state_34631;
(statearr_34639[(9)] = inst_34628);

return statearr_34639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34631__$1,inst_34629);
} else {
if((state_val_34632 === (2))){
var inst_34608 = (state_34631[(8)]);
var inst_34610 = (inst_34608 < n);
var state_34631__$1 = state_34631;
if(cljs.core.truth_(inst_34610)){
var statearr_34640_34660 = state_34631__$1;
(statearr_34640_34660[(1)] = (4));

} else {
var statearr_34641_34661 = state_34631__$1;
(statearr_34641_34661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (11))){
var inst_34608 = (state_34631[(8)]);
var inst_34618 = (state_34631[(2)]);
var inst_34619 = (inst_34608 + (1));
var inst_34608__$1 = inst_34619;
var state_34631__$1 = (function (){var statearr_34642 = state_34631;
(statearr_34642[(8)] = inst_34608__$1);

(statearr_34642[(10)] = inst_34618);

return statearr_34642;
})();
var statearr_34643_34662 = state_34631__$1;
(statearr_34643_34662[(2)] = null);

(statearr_34643_34662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (9))){
var state_34631__$1 = state_34631;
var statearr_34644_34663 = state_34631__$1;
(statearr_34644_34663[(2)] = null);

(statearr_34644_34663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (5))){
var state_34631__$1 = state_34631;
var statearr_34645_34664 = state_34631__$1;
(statearr_34645_34664[(2)] = null);

(statearr_34645_34664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (10))){
var inst_34623 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
var statearr_34646_34665 = state_34631__$1;
(statearr_34646_34665[(2)] = inst_34623);

(statearr_34646_34665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (8))){
var inst_34613 = (state_34631[(7)]);
var state_34631__$1 = state_34631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34631__$1,(11),out,inst_34613);
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
});})(c__28065__auto___34655,out))
;
return ((function (switch__28003__auto__,c__28065__auto___34655,out){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_34650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34650[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_34650[(1)] = (1));

return statearr_34650;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_34631){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_34631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e34651){if((e34651 instanceof Object)){
var ex__28007__auto__ = e34651;
var statearr_34652_34666 = state_34631;
(statearr_34652_34666[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34667 = state_34631;
state_34631 = G__34667;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_34631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_34631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___34655,out))
})();
var state__28067__auto__ = (function (){var statearr_34653 = f__28066__auto__.call(null);
(statearr_34653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___34655);

return statearr_34653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___34655,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t34675 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34675 = (function (ch,f,map_LT_,meta34676){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34676 = meta34676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34675.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t34675.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t34678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34678 = (function (fn1,_,meta34676,map_LT_,f,ch,meta34679){
this.fn1 = fn1;
this._ = _;
this.meta34676 = meta34676;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34679 = meta34679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34678.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t34678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34668_SHARP_){
return f1.call(null,(((p1__34668_SHARP_ == null))?null:self__.f.call(null,p1__34668_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34680){
var self__ = this;
var _34680__$1 = this;
return self__.meta34679;
});})(___$1))
;

cljs.core.async.t34678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34680,meta34679__$1){
var self__ = this;
var _34680__$1 = this;
return (new cljs.core.async.t34678(self__.fn1,self__._,self__.meta34676,self__.map_LT_,self__.f,self__.ch,meta34679__$1));
});})(___$1))
;

cljs.core.async.t34678.cljs$lang$type = true;

cljs.core.async.t34678.cljs$lang$ctorStr = "cljs.core.async/t34678";

cljs.core.async.t34678.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34678");
});})(___$1))
;

cljs.core.async.__GT_t34678 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t34678(fn1__$1,___$2,meta34676__$1,map_LT___$1,f__$1,ch__$1,meta34679){
return (new cljs.core.async.t34678(fn1__$1,___$2,meta34676__$1,map_LT___$1,f__$1,ch__$1,meta34679));
});})(___$1))
;

}

return (new cljs.core.async.t34678(fn1,___$1,self__.meta34676,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24914__auto__ = ret;
if(cljs.core.truth_(and__24914__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24914__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t34675.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34675.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34677){
var self__ = this;
var _34677__$1 = this;
return self__.meta34676;
});

cljs.core.async.t34675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34677,meta34676__$1){
var self__ = this;
var _34677__$1 = this;
return (new cljs.core.async.t34675(self__.ch,self__.f,self__.map_LT_,meta34676__$1));
});

cljs.core.async.t34675.cljs$lang$type = true;

cljs.core.async.t34675.cljs$lang$ctorStr = "cljs.core.async/t34675";

cljs.core.async.t34675.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34675");
});

cljs.core.async.__GT_t34675 = (function cljs$core$async$map_LT__$___GT_t34675(ch__$1,f__$1,map_LT___$1,meta34676){
return (new cljs.core.async.t34675(ch__$1,f__$1,map_LT___$1,meta34676));
});

}

return (new cljs.core.async.t34675(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t34684 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34684 = (function (ch,f,map_GT_,meta34685){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34685 = meta34685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t34684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34684.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34686){
var self__ = this;
var _34686__$1 = this;
return self__.meta34685;
});

cljs.core.async.t34684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34686,meta34685__$1){
var self__ = this;
var _34686__$1 = this;
return (new cljs.core.async.t34684(self__.ch,self__.f,self__.map_GT_,meta34685__$1));
});

cljs.core.async.t34684.cljs$lang$type = true;

cljs.core.async.t34684.cljs$lang$ctorStr = "cljs.core.async/t34684";

cljs.core.async.t34684.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34684");
});

cljs.core.async.__GT_t34684 = (function cljs$core$async$map_GT__$___GT_t34684(ch__$1,f__$1,map_GT___$1,meta34685){
return (new cljs.core.async.t34684(ch__$1,f__$1,map_GT___$1,meta34685));
});

}

return (new cljs.core.async.t34684(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t34690 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34690 = (function (ch,p,filter_GT_,meta34691){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34691 = meta34691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t34690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34690.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34692){
var self__ = this;
var _34692__$1 = this;
return self__.meta34691;
});

cljs.core.async.t34690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34692,meta34691__$1){
var self__ = this;
var _34692__$1 = this;
return (new cljs.core.async.t34690(self__.ch,self__.p,self__.filter_GT_,meta34691__$1));
});

cljs.core.async.t34690.cljs$lang$type = true;

cljs.core.async.t34690.cljs$lang$ctorStr = "cljs.core.async/t34690";

cljs.core.async.t34690.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34690");
});

cljs.core.async.__GT_t34690 = (function cljs$core$async$filter_GT__$___GT_t34690(ch__$1,p__$1,filter_GT___$1,meta34691){
return (new cljs.core.async.t34690(ch__$1,p__$1,filter_GT___$1,meta34691));
});

}

return (new cljs.core.async.t34690(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34694 = arguments.length;
switch (G__34694) {
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
var c__28065__auto___34737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___34737,out){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___34737,out){
return (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_34738 = state_34715__$1;
(statearr_34717_34738[(2)] = inst_34711);

(statearr_34717_34738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var state_34715__$1 = state_34715;
var statearr_34718_34739 = state_34715__$1;
(statearr_34718_34739[(2)] = null);

(statearr_34718_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (4))){
var inst_34697 = (state_34715[(7)]);
var inst_34697__$1 = (state_34715[(2)]);
var inst_34698 = (inst_34697__$1 == null);
var state_34715__$1 = (function (){var statearr_34719 = state_34715;
(statearr_34719[(7)] = inst_34697__$1);

return statearr_34719;
})();
if(cljs.core.truth_(inst_34698)){
var statearr_34720_34740 = state_34715__$1;
(statearr_34720_34740[(1)] = (5));

} else {
var statearr_34721_34741 = state_34715__$1;
(statearr_34721_34741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (6))){
var inst_34697 = (state_34715[(7)]);
var inst_34702 = p.call(null,inst_34697);
var state_34715__$1 = state_34715;
if(cljs.core.truth_(inst_34702)){
var statearr_34722_34742 = state_34715__$1;
(statearr_34722_34742[(1)] = (8));

} else {
var statearr_34723_34743 = state_34715__$1;
(statearr_34723_34743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (3))){
var inst_34713 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34715__$1,inst_34713);
} else {
if((state_val_34716 === (2))){
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34715__$1,(4),ch);
} else {
if((state_val_34716 === (11))){
var inst_34705 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34724_34744 = state_34715__$1;
(statearr_34724_34744[(2)] = inst_34705);

(statearr_34724_34744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (9))){
var state_34715__$1 = state_34715;
var statearr_34725_34745 = state_34715__$1;
(statearr_34725_34745[(2)] = null);

(statearr_34725_34745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34700 = cljs.core.async.close_BANG_.call(null,out);
var state_34715__$1 = state_34715;
var statearr_34726_34746 = state_34715__$1;
(statearr_34726_34746[(2)] = inst_34700);

(statearr_34726_34746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34708 = (state_34715[(2)]);
var state_34715__$1 = (function (){var statearr_34727 = state_34715;
(statearr_34727[(8)] = inst_34708);

return statearr_34727;
})();
var statearr_34728_34747 = state_34715__$1;
(statearr_34728_34747[(2)] = null);

(statearr_34728_34747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34697 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34715__$1,(11),out,inst_34697);
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
});})(c__28065__auto___34737,out))
;
return ((function (switch__28003__auto__,c__28065__auto___34737,out){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_34732 = [null,null,null,null,null,null,null,null,null];
(statearr_34732[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_34732[(1)] = (1));

return statearr_34732;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_34715){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_34715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e34733){if((e34733 instanceof Object)){
var ex__28007__auto__ = e34733;
var statearr_34734_34748 = state_34715;
(statearr_34734_34748[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34749 = state_34715;
state_34715 = G__34749;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___34737,out))
})();
var state__28067__auto__ = (function (){var statearr_34735 = f__28066__auto__.call(null);
(statearr_34735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___34737);

return statearr_34735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___34737,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__34751 = arguments.length;
switch (G__34751) {
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
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__){
return (function (state_34918){
var state_val_34919 = (state_34918[(1)]);
if((state_val_34919 === (7))){
var inst_34914 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34920_34961 = state_34918__$1;
(statearr_34920_34961[(2)] = inst_34914);

(statearr_34920_34961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (20))){
var inst_34884 = (state_34918[(7)]);
var inst_34895 = (state_34918[(2)]);
var inst_34896 = cljs.core.next.call(null,inst_34884);
var inst_34870 = inst_34896;
var inst_34871 = null;
var inst_34872 = (0);
var inst_34873 = (0);
var state_34918__$1 = (function (){var statearr_34921 = state_34918;
(statearr_34921[(8)] = inst_34873);

(statearr_34921[(9)] = inst_34895);

(statearr_34921[(10)] = inst_34870);

(statearr_34921[(11)] = inst_34871);

(statearr_34921[(12)] = inst_34872);

return statearr_34921;
})();
var statearr_34922_34962 = state_34918__$1;
(statearr_34922_34962[(2)] = null);

(statearr_34922_34962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (1))){
var state_34918__$1 = state_34918;
var statearr_34923_34963 = state_34918__$1;
(statearr_34923_34963[(2)] = null);

(statearr_34923_34963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (4))){
var inst_34859 = (state_34918[(13)]);
var inst_34859__$1 = (state_34918[(2)]);
var inst_34860 = (inst_34859__$1 == null);
var state_34918__$1 = (function (){var statearr_34924 = state_34918;
(statearr_34924[(13)] = inst_34859__$1);

return statearr_34924;
})();
if(cljs.core.truth_(inst_34860)){
var statearr_34925_34964 = state_34918__$1;
(statearr_34925_34964[(1)] = (5));

} else {
var statearr_34926_34965 = state_34918__$1;
(statearr_34926_34965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (15))){
var state_34918__$1 = state_34918;
var statearr_34930_34966 = state_34918__$1;
(statearr_34930_34966[(2)] = null);

(statearr_34930_34966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (21))){
var state_34918__$1 = state_34918;
var statearr_34931_34967 = state_34918__$1;
(statearr_34931_34967[(2)] = null);

(statearr_34931_34967[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (13))){
var inst_34873 = (state_34918[(8)]);
var inst_34870 = (state_34918[(10)]);
var inst_34871 = (state_34918[(11)]);
var inst_34872 = (state_34918[(12)]);
var inst_34880 = (state_34918[(2)]);
var inst_34881 = (inst_34873 + (1));
var tmp34927 = inst_34870;
var tmp34928 = inst_34871;
var tmp34929 = inst_34872;
var inst_34870__$1 = tmp34927;
var inst_34871__$1 = tmp34928;
var inst_34872__$1 = tmp34929;
var inst_34873__$1 = inst_34881;
var state_34918__$1 = (function (){var statearr_34932 = state_34918;
(statearr_34932[(8)] = inst_34873__$1);

(statearr_34932[(10)] = inst_34870__$1);

(statearr_34932[(11)] = inst_34871__$1);

(statearr_34932[(12)] = inst_34872__$1);

(statearr_34932[(14)] = inst_34880);

return statearr_34932;
})();
var statearr_34933_34968 = state_34918__$1;
(statearr_34933_34968[(2)] = null);

(statearr_34933_34968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (22))){
var state_34918__$1 = state_34918;
var statearr_34934_34969 = state_34918__$1;
(statearr_34934_34969[(2)] = null);

(statearr_34934_34969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (6))){
var inst_34859 = (state_34918[(13)]);
var inst_34868 = f.call(null,inst_34859);
var inst_34869 = cljs.core.seq.call(null,inst_34868);
var inst_34870 = inst_34869;
var inst_34871 = null;
var inst_34872 = (0);
var inst_34873 = (0);
var state_34918__$1 = (function (){var statearr_34935 = state_34918;
(statearr_34935[(8)] = inst_34873);

(statearr_34935[(10)] = inst_34870);

(statearr_34935[(11)] = inst_34871);

(statearr_34935[(12)] = inst_34872);

return statearr_34935;
})();
var statearr_34936_34970 = state_34918__$1;
(statearr_34936_34970[(2)] = null);

(statearr_34936_34970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (17))){
var inst_34884 = (state_34918[(7)]);
var inst_34888 = cljs.core.chunk_first.call(null,inst_34884);
var inst_34889 = cljs.core.chunk_rest.call(null,inst_34884);
var inst_34890 = cljs.core.count.call(null,inst_34888);
var inst_34870 = inst_34889;
var inst_34871 = inst_34888;
var inst_34872 = inst_34890;
var inst_34873 = (0);
var state_34918__$1 = (function (){var statearr_34937 = state_34918;
(statearr_34937[(8)] = inst_34873);

(statearr_34937[(10)] = inst_34870);

(statearr_34937[(11)] = inst_34871);

(statearr_34937[(12)] = inst_34872);

return statearr_34937;
})();
var statearr_34938_34971 = state_34918__$1;
(statearr_34938_34971[(2)] = null);

(statearr_34938_34971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (3))){
var inst_34916 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34918__$1,inst_34916);
} else {
if((state_val_34919 === (12))){
var inst_34904 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34939_34972 = state_34918__$1;
(statearr_34939_34972[(2)] = inst_34904);

(statearr_34939_34972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (2))){
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34918__$1,(4),in$);
} else {
if((state_val_34919 === (23))){
var inst_34912 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34940_34973 = state_34918__$1;
(statearr_34940_34973[(2)] = inst_34912);

(statearr_34940_34973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (19))){
var inst_34899 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34941_34974 = state_34918__$1;
(statearr_34941_34974[(2)] = inst_34899);

(statearr_34941_34974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (11))){
var inst_34870 = (state_34918[(10)]);
var inst_34884 = (state_34918[(7)]);
var inst_34884__$1 = cljs.core.seq.call(null,inst_34870);
var state_34918__$1 = (function (){var statearr_34942 = state_34918;
(statearr_34942[(7)] = inst_34884__$1);

return statearr_34942;
})();
if(inst_34884__$1){
var statearr_34943_34975 = state_34918__$1;
(statearr_34943_34975[(1)] = (14));

} else {
var statearr_34944_34976 = state_34918__$1;
(statearr_34944_34976[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (9))){
var inst_34906 = (state_34918[(2)]);
var inst_34907 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34918__$1 = (function (){var statearr_34945 = state_34918;
(statearr_34945[(15)] = inst_34906);

return statearr_34945;
})();
if(cljs.core.truth_(inst_34907)){
var statearr_34946_34977 = state_34918__$1;
(statearr_34946_34977[(1)] = (21));

} else {
var statearr_34947_34978 = state_34918__$1;
(statearr_34947_34978[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (5))){
var inst_34862 = cljs.core.async.close_BANG_.call(null,out);
var state_34918__$1 = state_34918;
var statearr_34948_34979 = state_34918__$1;
(statearr_34948_34979[(2)] = inst_34862);

(statearr_34948_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (14))){
var inst_34884 = (state_34918[(7)]);
var inst_34886 = cljs.core.chunked_seq_QMARK_.call(null,inst_34884);
var state_34918__$1 = state_34918;
if(inst_34886){
var statearr_34949_34980 = state_34918__$1;
(statearr_34949_34980[(1)] = (17));

} else {
var statearr_34950_34981 = state_34918__$1;
(statearr_34950_34981[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (16))){
var inst_34902 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34951_34982 = state_34918__$1;
(statearr_34951_34982[(2)] = inst_34902);

(statearr_34951_34982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (10))){
var inst_34873 = (state_34918[(8)]);
var inst_34871 = (state_34918[(11)]);
var inst_34878 = cljs.core._nth.call(null,inst_34871,inst_34873);
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34918__$1,(13),out,inst_34878);
} else {
if((state_val_34919 === (18))){
var inst_34884 = (state_34918[(7)]);
var inst_34893 = cljs.core.first.call(null,inst_34884);
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34918__$1,(20),out,inst_34893);
} else {
if((state_val_34919 === (8))){
var inst_34873 = (state_34918[(8)]);
var inst_34872 = (state_34918[(12)]);
var inst_34875 = (inst_34873 < inst_34872);
var inst_34876 = inst_34875;
var state_34918__$1 = state_34918;
if(cljs.core.truth_(inst_34876)){
var statearr_34952_34983 = state_34918__$1;
(statearr_34952_34983[(1)] = (10));

} else {
var statearr_34953_34984 = state_34918__$1;
(statearr_34953_34984[(1)] = (11));

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
});})(c__28065__auto__))
;
return ((function (switch__28003__auto__,c__28065__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28004__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28004__auto____0 = (function (){
var statearr_34957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34957[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28004__auto__);

(statearr_34957[(1)] = (1));

return statearr_34957;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28004__auto____1 = (function (state_34918){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_34918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e34958){if((e34958 instanceof Object)){
var ex__28007__auto__ = e34958;
var statearr_34959_34985 = state_34918;
(statearr_34959_34985[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34986 = state_34918;
state_34918 = G__34986;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28004__auto__ = function(state_34918){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28004__auto____1.call(this,state_34918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28004__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28004__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__))
})();
var state__28067__auto__ = (function (){var statearr_34960 = f__28066__auto__.call(null);
(statearr_34960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_34960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__))
);

return c__28065__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__34988 = arguments.length;
switch (G__34988) {
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
var G__34991 = arguments.length;
switch (G__34991) {
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
var G__34994 = arguments.length;
switch (G__34994) {
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
var c__28065__auto___35044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___35044,out){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___35044,out){
return (function (state_35018){
var state_val_35019 = (state_35018[(1)]);
if((state_val_35019 === (7))){
var inst_35013 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35020_35045 = state_35018__$1;
(statearr_35020_35045[(2)] = inst_35013);

(statearr_35020_35045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (1))){
var inst_34995 = null;
var state_35018__$1 = (function (){var statearr_35021 = state_35018;
(statearr_35021[(7)] = inst_34995);

return statearr_35021;
})();
var statearr_35022_35046 = state_35018__$1;
(statearr_35022_35046[(2)] = null);

(statearr_35022_35046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (4))){
var inst_34998 = (state_35018[(8)]);
var inst_34998__$1 = (state_35018[(2)]);
var inst_34999 = (inst_34998__$1 == null);
var inst_35000 = cljs.core.not.call(null,inst_34999);
var state_35018__$1 = (function (){var statearr_35023 = state_35018;
(statearr_35023[(8)] = inst_34998__$1);

return statearr_35023;
})();
if(inst_35000){
var statearr_35024_35047 = state_35018__$1;
(statearr_35024_35047[(1)] = (5));

} else {
var statearr_35025_35048 = state_35018__$1;
(statearr_35025_35048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (6))){
var state_35018__$1 = state_35018;
var statearr_35026_35049 = state_35018__$1;
(statearr_35026_35049[(2)] = null);

(statearr_35026_35049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (3))){
var inst_35015 = (state_35018[(2)]);
var inst_35016 = cljs.core.async.close_BANG_.call(null,out);
var state_35018__$1 = (function (){var statearr_35027 = state_35018;
(statearr_35027[(9)] = inst_35015);

return statearr_35027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35018__$1,inst_35016);
} else {
if((state_val_35019 === (2))){
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35018__$1,(4),ch);
} else {
if((state_val_35019 === (11))){
var inst_34998 = (state_35018[(8)]);
var inst_35007 = (state_35018[(2)]);
var inst_34995 = inst_34998;
var state_35018__$1 = (function (){var statearr_35028 = state_35018;
(statearr_35028[(7)] = inst_34995);

(statearr_35028[(10)] = inst_35007);

return statearr_35028;
})();
var statearr_35029_35050 = state_35018__$1;
(statearr_35029_35050[(2)] = null);

(statearr_35029_35050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (9))){
var inst_34998 = (state_35018[(8)]);
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35018__$1,(11),out,inst_34998);
} else {
if((state_val_35019 === (5))){
var inst_34995 = (state_35018[(7)]);
var inst_34998 = (state_35018[(8)]);
var inst_35002 = cljs.core._EQ_.call(null,inst_34998,inst_34995);
var state_35018__$1 = state_35018;
if(inst_35002){
var statearr_35031_35051 = state_35018__$1;
(statearr_35031_35051[(1)] = (8));

} else {
var statearr_35032_35052 = state_35018__$1;
(statearr_35032_35052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (10))){
var inst_35010 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35033_35053 = state_35018__$1;
(statearr_35033_35053[(2)] = inst_35010);

(statearr_35033_35053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (8))){
var inst_34995 = (state_35018[(7)]);
var tmp35030 = inst_34995;
var inst_34995__$1 = tmp35030;
var state_35018__$1 = (function (){var statearr_35034 = state_35018;
(statearr_35034[(7)] = inst_34995__$1);

return statearr_35034;
})();
var statearr_35035_35054 = state_35018__$1;
(statearr_35035_35054[(2)] = null);

(statearr_35035_35054[(1)] = (2));


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
});})(c__28065__auto___35044,out))
;
return ((function (switch__28003__auto__,c__28065__auto___35044,out){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_35039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35039[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_35039[(1)] = (1));

return statearr_35039;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_35018){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_35018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e35040){if((e35040 instanceof Object)){
var ex__28007__auto__ = e35040;
var statearr_35041_35055 = state_35018;
(statearr_35041_35055[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35056 = state_35018;
state_35018 = G__35056;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_35018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_35018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___35044,out))
})();
var state__28067__auto__ = (function (){var statearr_35042 = f__28066__auto__.call(null);
(statearr_35042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___35044);

return statearr_35042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___35044,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__35058 = arguments.length;
switch (G__35058) {
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
var c__28065__auto___35127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___35127,out){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___35127,out){
return (function (state_35096){
var state_val_35097 = (state_35096[(1)]);
if((state_val_35097 === (7))){
var inst_35092 = (state_35096[(2)]);
var state_35096__$1 = state_35096;
var statearr_35098_35128 = state_35096__$1;
(statearr_35098_35128[(2)] = inst_35092);

(statearr_35098_35128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (1))){
var inst_35059 = (new Array(n));
var inst_35060 = inst_35059;
var inst_35061 = (0);
var state_35096__$1 = (function (){var statearr_35099 = state_35096;
(statearr_35099[(7)] = inst_35061);

(statearr_35099[(8)] = inst_35060);

return statearr_35099;
})();
var statearr_35100_35129 = state_35096__$1;
(statearr_35100_35129[(2)] = null);

(statearr_35100_35129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (4))){
var inst_35064 = (state_35096[(9)]);
var inst_35064__$1 = (state_35096[(2)]);
var inst_35065 = (inst_35064__$1 == null);
var inst_35066 = cljs.core.not.call(null,inst_35065);
var state_35096__$1 = (function (){var statearr_35101 = state_35096;
(statearr_35101[(9)] = inst_35064__$1);

return statearr_35101;
})();
if(inst_35066){
var statearr_35102_35130 = state_35096__$1;
(statearr_35102_35130[(1)] = (5));

} else {
var statearr_35103_35131 = state_35096__$1;
(statearr_35103_35131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (15))){
var inst_35086 = (state_35096[(2)]);
var state_35096__$1 = state_35096;
var statearr_35104_35132 = state_35096__$1;
(statearr_35104_35132[(2)] = inst_35086);

(statearr_35104_35132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (13))){
var state_35096__$1 = state_35096;
var statearr_35105_35133 = state_35096__$1;
(statearr_35105_35133[(2)] = null);

(statearr_35105_35133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (6))){
var inst_35061 = (state_35096[(7)]);
var inst_35082 = (inst_35061 > (0));
var state_35096__$1 = state_35096;
if(cljs.core.truth_(inst_35082)){
var statearr_35106_35134 = state_35096__$1;
(statearr_35106_35134[(1)] = (12));

} else {
var statearr_35107_35135 = state_35096__$1;
(statearr_35107_35135[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (3))){
var inst_35094 = (state_35096[(2)]);
var state_35096__$1 = state_35096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35096__$1,inst_35094);
} else {
if((state_val_35097 === (12))){
var inst_35060 = (state_35096[(8)]);
var inst_35084 = cljs.core.vec.call(null,inst_35060);
var state_35096__$1 = state_35096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35096__$1,(15),out,inst_35084);
} else {
if((state_val_35097 === (2))){
var state_35096__$1 = state_35096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35096__$1,(4),ch);
} else {
if((state_val_35097 === (11))){
var inst_35076 = (state_35096[(2)]);
var inst_35077 = (new Array(n));
var inst_35060 = inst_35077;
var inst_35061 = (0);
var state_35096__$1 = (function (){var statearr_35108 = state_35096;
(statearr_35108[(10)] = inst_35076);

(statearr_35108[(7)] = inst_35061);

(statearr_35108[(8)] = inst_35060);

return statearr_35108;
})();
var statearr_35109_35136 = state_35096__$1;
(statearr_35109_35136[(2)] = null);

(statearr_35109_35136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (9))){
var inst_35060 = (state_35096[(8)]);
var inst_35074 = cljs.core.vec.call(null,inst_35060);
var state_35096__$1 = state_35096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35096__$1,(11),out,inst_35074);
} else {
if((state_val_35097 === (5))){
var inst_35064 = (state_35096[(9)]);
var inst_35061 = (state_35096[(7)]);
var inst_35060 = (state_35096[(8)]);
var inst_35069 = (state_35096[(11)]);
var inst_35068 = (inst_35060[inst_35061] = inst_35064);
var inst_35069__$1 = (inst_35061 + (1));
var inst_35070 = (inst_35069__$1 < n);
var state_35096__$1 = (function (){var statearr_35110 = state_35096;
(statearr_35110[(12)] = inst_35068);

(statearr_35110[(11)] = inst_35069__$1);

return statearr_35110;
})();
if(cljs.core.truth_(inst_35070)){
var statearr_35111_35137 = state_35096__$1;
(statearr_35111_35137[(1)] = (8));

} else {
var statearr_35112_35138 = state_35096__$1;
(statearr_35112_35138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (14))){
var inst_35089 = (state_35096[(2)]);
var inst_35090 = cljs.core.async.close_BANG_.call(null,out);
var state_35096__$1 = (function (){var statearr_35114 = state_35096;
(statearr_35114[(13)] = inst_35089);

return statearr_35114;
})();
var statearr_35115_35139 = state_35096__$1;
(statearr_35115_35139[(2)] = inst_35090);

(statearr_35115_35139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (10))){
var inst_35080 = (state_35096[(2)]);
var state_35096__$1 = state_35096;
var statearr_35116_35140 = state_35096__$1;
(statearr_35116_35140[(2)] = inst_35080);

(statearr_35116_35140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (8))){
var inst_35060 = (state_35096[(8)]);
var inst_35069 = (state_35096[(11)]);
var tmp35113 = inst_35060;
var inst_35060__$1 = tmp35113;
var inst_35061 = inst_35069;
var state_35096__$1 = (function (){var statearr_35117 = state_35096;
(statearr_35117[(7)] = inst_35061);

(statearr_35117[(8)] = inst_35060__$1);

return statearr_35117;
})();
var statearr_35118_35141 = state_35096__$1;
(statearr_35118_35141[(2)] = null);

(statearr_35118_35141[(1)] = (2));


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
});})(c__28065__auto___35127,out))
;
return ((function (switch__28003__auto__,c__28065__auto___35127,out){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_35122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35122[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_35122[(1)] = (1));

return statearr_35122;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_35096){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_35096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e35123){if((e35123 instanceof Object)){
var ex__28007__auto__ = e35123;
var statearr_35124_35142 = state_35096;
(statearr_35124_35142[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35143 = state_35096;
state_35096 = G__35143;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_35096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_35096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___35127,out))
})();
var state__28067__auto__ = (function (){var statearr_35125 = f__28066__auto__.call(null);
(statearr_35125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___35127);

return statearr_35125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___35127,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__35145 = arguments.length;
switch (G__35145) {
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
var c__28065__auto___35218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___35218,out){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___35218,out){
return (function (state_35187){
var state_val_35188 = (state_35187[(1)]);
if((state_val_35188 === (7))){
var inst_35183 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35189_35219 = state_35187__$1;
(statearr_35189_35219[(2)] = inst_35183);

(statearr_35189_35219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (1))){
var inst_35146 = [];
var inst_35147 = inst_35146;
var inst_35148 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35187__$1 = (function (){var statearr_35190 = state_35187;
(statearr_35190[(7)] = inst_35148);

(statearr_35190[(8)] = inst_35147);

return statearr_35190;
})();
var statearr_35191_35220 = state_35187__$1;
(statearr_35191_35220[(2)] = null);

(statearr_35191_35220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (4))){
var inst_35151 = (state_35187[(9)]);
var inst_35151__$1 = (state_35187[(2)]);
var inst_35152 = (inst_35151__$1 == null);
var inst_35153 = cljs.core.not.call(null,inst_35152);
var state_35187__$1 = (function (){var statearr_35192 = state_35187;
(statearr_35192[(9)] = inst_35151__$1);

return statearr_35192;
})();
if(inst_35153){
var statearr_35193_35221 = state_35187__$1;
(statearr_35193_35221[(1)] = (5));

} else {
var statearr_35194_35222 = state_35187__$1;
(statearr_35194_35222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (15))){
var inst_35177 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35195_35223 = state_35187__$1;
(statearr_35195_35223[(2)] = inst_35177);

(statearr_35195_35223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (13))){
var state_35187__$1 = state_35187;
var statearr_35196_35224 = state_35187__$1;
(statearr_35196_35224[(2)] = null);

(statearr_35196_35224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (6))){
var inst_35147 = (state_35187[(8)]);
var inst_35172 = inst_35147.length;
var inst_35173 = (inst_35172 > (0));
var state_35187__$1 = state_35187;
if(cljs.core.truth_(inst_35173)){
var statearr_35197_35225 = state_35187__$1;
(statearr_35197_35225[(1)] = (12));

} else {
var statearr_35198_35226 = state_35187__$1;
(statearr_35198_35226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (3))){
var inst_35185 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35187__$1,inst_35185);
} else {
if((state_val_35188 === (12))){
var inst_35147 = (state_35187[(8)]);
var inst_35175 = cljs.core.vec.call(null,inst_35147);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35187__$1,(15),out,inst_35175);
} else {
if((state_val_35188 === (2))){
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35187__$1,(4),ch);
} else {
if((state_val_35188 === (11))){
var inst_35155 = (state_35187[(10)]);
var inst_35151 = (state_35187[(9)]);
var inst_35165 = (state_35187[(2)]);
var inst_35166 = [];
var inst_35167 = inst_35166.push(inst_35151);
var inst_35147 = inst_35166;
var inst_35148 = inst_35155;
var state_35187__$1 = (function (){var statearr_35199 = state_35187;
(statearr_35199[(11)] = inst_35167);

(statearr_35199[(7)] = inst_35148);

(statearr_35199[(12)] = inst_35165);

(statearr_35199[(8)] = inst_35147);

return statearr_35199;
})();
var statearr_35200_35227 = state_35187__$1;
(statearr_35200_35227[(2)] = null);

(statearr_35200_35227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (9))){
var inst_35147 = (state_35187[(8)]);
var inst_35163 = cljs.core.vec.call(null,inst_35147);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35187__$1,(11),out,inst_35163);
} else {
if((state_val_35188 === (5))){
var inst_35155 = (state_35187[(10)]);
var inst_35148 = (state_35187[(7)]);
var inst_35151 = (state_35187[(9)]);
var inst_35155__$1 = f.call(null,inst_35151);
var inst_35156 = cljs.core._EQ_.call(null,inst_35155__$1,inst_35148);
var inst_35157 = cljs.core.keyword_identical_QMARK_.call(null,inst_35148,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35158 = (inst_35156) || (inst_35157);
var state_35187__$1 = (function (){var statearr_35201 = state_35187;
(statearr_35201[(10)] = inst_35155__$1);

return statearr_35201;
})();
if(cljs.core.truth_(inst_35158)){
var statearr_35202_35228 = state_35187__$1;
(statearr_35202_35228[(1)] = (8));

} else {
var statearr_35203_35229 = state_35187__$1;
(statearr_35203_35229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (14))){
var inst_35180 = (state_35187[(2)]);
var inst_35181 = cljs.core.async.close_BANG_.call(null,out);
var state_35187__$1 = (function (){var statearr_35205 = state_35187;
(statearr_35205[(13)] = inst_35180);

return statearr_35205;
})();
var statearr_35206_35230 = state_35187__$1;
(statearr_35206_35230[(2)] = inst_35181);

(statearr_35206_35230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (10))){
var inst_35170 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35207_35231 = state_35187__$1;
(statearr_35207_35231[(2)] = inst_35170);

(statearr_35207_35231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (8))){
var inst_35155 = (state_35187[(10)]);
var inst_35151 = (state_35187[(9)]);
var inst_35147 = (state_35187[(8)]);
var inst_35160 = inst_35147.push(inst_35151);
var tmp35204 = inst_35147;
var inst_35147__$1 = tmp35204;
var inst_35148 = inst_35155;
var state_35187__$1 = (function (){var statearr_35208 = state_35187;
(statearr_35208[(7)] = inst_35148);

(statearr_35208[(14)] = inst_35160);

(statearr_35208[(8)] = inst_35147__$1);

return statearr_35208;
})();
var statearr_35209_35232 = state_35187__$1;
(statearr_35209_35232[(2)] = null);

(statearr_35209_35232[(1)] = (2));


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
});})(c__28065__auto___35218,out))
;
return ((function (switch__28003__auto__,c__28065__auto___35218,out){
return (function() {
var cljs$core$async$state_machine__28004__auto__ = null;
var cljs$core$async$state_machine__28004__auto____0 = (function (){
var statearr_35213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35213[(0)] = cljs$core$async$state_machine__28004__auto__);

(statearr_35213[(1)] = (1));

return statearr_35213;
});
var cljs$core$async$state_machine__28004__auto____1 = (function (state_35187){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_35187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e35214){if((e35214 instanceof Object)){
var ex__28007__auto__ = e35214;
var statearr_35215_35233 = state_35187;
(statearr_35215_35233[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35234 = state_35187;
state_35187 = G__35234;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
cljs$core$async$state_machine__28004__auto__ = function(state_35187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28004__auto____1.call(this,state_35187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28004__auto____0;
cljs$core$async$state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28004__auto____1;
return cljs$core$async$state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___35218,out))
})();
var state__28067__auto__ = (function (){var statearr_35216 = f__28066__auto__.call(null);
(statearr_35216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___35218);

return statearr_35216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___35218,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
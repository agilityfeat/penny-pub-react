// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t20176 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20176 = (function (f,fn_handler,meta20177){
this.f = f;
this.fn_handler = fn_handler;
this.meta20177 = meta20177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20176.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20178){
var self__ = this;
var _20178__$1 = this;
return self__.meta20177;
});

cljs.core.async.t20176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20178,meta20177__$1){
var self__ = this;
var _20178__$1 = this;
return (new cljs.core.async.t20176(self__.f,self__.fn_handler,meta20177__$1));
});

cljs.core.async.t20176.cljs$lang$type = true;

cljs.core.async.t20176.cljs$lang$ctorStr = "cljs.core.async/t20176";

cljs.core.async.t20176.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t20176");
});

cljs.core.async.__GT_t20176 = (function cljs$core$async$fn_handler_$___GT_t20176(f__$1,fn_handler__$1,meta20177){
return (new cljs.core.async.t20176(f__$1,fn_handler__$1,meta20177));
});

}

return (new cljs.core.async.t20176(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__20180 = buff;
if(G__20180){
var bit__4773__auto__ = null;
if(cljs.core.truth_((function (){var or__4099__auto__ = bit__4773__auto__;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return G__20180.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20180.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20180);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20180);
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
var G__20182 = arguments.length;
switch (G__20182) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__20185 = arguments.length;
switch (G__20185) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_20190 = (function (){var G__20186 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20186) : cljs.core.deref.call(null,G__20186));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20187_20191 = val_20190;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20187_20191) : fn1.call(null,G__20187_20191));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20190,ret){
return (function (){
var G__20188 = val_20190;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20188) : fn1.call(null,G__20188));
});})(val_20190,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
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
var G__20193 = arguments.length;
switch (G__20193) {
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
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__20194 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20194) : cljs.core.deref.call(null,G__20194));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__20195 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20195) : cljs.core.deref.call(null,G__20195));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20196_20199 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20196_20199) : fn1.call(null,G__20196_20199));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__20197 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20197) : fn1.call(null,G__20197));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4984__auto___20200 = n;
var x_20201 = (0);
while(true){
if((x_20201 < n__4984__auto___20200)){
(a[x_20201] = (0));

var G__20202 = (x_20201 + (1));
x_20201 = G__20202;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__20203 = (i + (1));
i = G__20203;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__20211 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20211) : cljs.core.atom.call(null,G__20211));
})();
if(typeof cljs.core.async.t20212 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20212 = (function (flag,alt_flag,meta20213){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20213 = meta20213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20212.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20215 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20215) : cljs.core.deref.call(null,G__20215));
});})(flag))
;

cljs.core.async.t20212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20216_20218 = self__.flag;
var G__20217_20219 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20216_20218,G__20217_20219) : cljs.core.reset_BANG_.call(null,G__20216_20218,G__20217_20219));

return true;
});})(flag))
;

cljs.core.async.t20212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20214){
var self__ = this;
var _20214__$1 = this;
return self__.meta20213;
});})(flag))
;

cljs.core.async.t20212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20214,meta20213__$1){
var self__ = this;
var _20214__$1 = this;
return (new cljs.core.async.t20212(self__.flag,self__.alt_flag,meta20213__$1));
});})(flag))
;

cljs.core.async.t20212.cljs$lang$type = true;

cljs.core.async.t20212.cljs$lang$ctorStr = "cljs.core.async/t20212";

cljs.core.async.t20212.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t20212");
});})(flag))
;

cljs.core.async.__GT_t20212 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t20212(flag__$1,alt_flag__$1,meta20213){
return (new cljs.core.async.t20212(flag__$1,alt_flag__$1,meta20213));
});})(flag))
;

}

return (new cljs.core.async.t20212(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t20223 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20223 = (function (cb,flag,alt_handler,meta20224){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20224 = meta20224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20223.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t20223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t20223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20225){
var self__ = this;
var _20225__$1 = this;
return self__.meta20224;
});

cljs.core.async.t20223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20225,meta20224__$1){
var self__ = this;
var _20225__$1 = this;
return (new cljs.core.async.t20223(self__.cb,self__.flag,self__.alt_handler,meta20224__$1));
});

cljs.core.async.t20223.cljs$lang$type = true;

cljs.core.async.t20223.cljs$lang$ctorStr = "cljs.core.async/t20223";

cljs.core.async.t20223.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t20223");
});

cljs.core.async.__GT_t20223 = (function cljs$core$async$alt_handler_$___GT_t20223(cb__$1,flag__$1,alt_handler__$1,meta20224){
return (new cljs.core.async.t20223(cb__$1,flag__$1,alt_handler__$1,meta20224));
});

}

return (new cljs.core.async.t20223(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__20233 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20233) : port.call(null,G__20233));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__20234 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20234) : port.call(null,G__20234));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20226_SHARP_){
var G__20235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20226_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20235) : fret.call(null,G__20235));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20227_SHARP_){
var G__20236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20227_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20236) : fret.call(null,G__20236));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20237 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20237) : cljs.core.deref.call(null,G__20237));
})(),(function (){var or__4099__auto__ = wport;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20238 = (i + (1));
i = G__20238;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$default)){
var temp__4126__auto__ = (function (){var and__4087__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4087__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$default], null));
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20241){
var map__20242 = p__20241;
var map__20242__$1 = ((cljs.core.seq_QMARK_(map__20242))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20242):map__20242);
var opts = map__20242__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20239){
var G__20240 = cljs.core.first(seq20239);
var seq20239__$1 = cljs.core.next(seq20239);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20240,seq20239__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__20244 = arguments.length;
switch (G__20244) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12927__auto___20293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___20293){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___20293){
return (function (state_20268){
var state_val_20269 = (state_20268[(1)]);
if((state_val_20269 === (7))){
var inst_20264 = (state_20268[(2)]);
var state_20268__$1 = state_20268;
var statearr_20270_20294 = state_20268__$1;
(statearr_20270_20294[(2)] = inst_20264);

(statearr_20270_20294[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (1))){
var state_20268__$1 = state_20268;
var statearr_20271_20295 = state_20268__$1;
(statearr_20271_20295[(2)] = null);

(statearr_20271_20295[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (4))){
var inst_20247 = (state_20268[(7)]);
var inst_20247__$1 = (state_20268[(2)]);
var inst_20248 = (inst_20247__$1 == null);
var state_20268__$1 = (function (){var statearr_20272 = state_20268;
(statearr_20272[(7)] = inst_20247__$1);

return statearr_20272;
})();
if(cljs.core.truth_(inst_20248)){
var statearr_20273_20296 = state_20268__$1;
(statearr_20273_20296[(1)] = (5));

} else {
var statearr_20274_20297 = state_20268__$1;
(statearr_20274_20297[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (13))){
var state_20268__$1 = state_20268;
var statearr_20275_20298 = state_20268__$1;
(statearr_20275_20298[(2)] = null);

(statearr_20275_20298[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (6))){
var inst_20247 = (state_20268[(7)]);
var state_20268__$1 = state_20268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20268__$1,(11),to,inst_20247);
} else {
if((state_val_20269 === (3))){
var inst_20266 = (state_20268[(2)]);
var state_20268__$1 = state_20268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20268__$1,inst_20266);
} else {
if((state_val_20269 === (12))){
var state_20268__$1 = state_20268;
var statearr_20276_20299 = state_20268__$1;
(statearr_20276_20299[(2)] = null);

(statearr_20276_20299[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (2))){
var state_20268__$1 = state_20268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20268__$1,(4),from);
} else {
if((state_val_20269 === (11))){
var inst_20257 = (state_20268[(2)]);
var state_20268__$1 = state_20268;
if(cljs.core.truth_(inst_20257)){
var statearr_20277_20300 = state_20268__$1;
(statearr_20277_20300[(1)] = (12));

} else {
var statearr_20278_20301 = state_20268__$1;
(statearr_20278_20301[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (9))){
var state_20268__$1 = state_20268;
var statearr_20279_20302 = state_20268__$1;
(statearr_20279_20302[(2)] = null);

(statearr_20279_20302[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (5))){
var state_20268__$1 = state_20268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20280_20303 = state_20268__$1;
(statearr_20280_20303[(1)] = (8));

} else {
var statearr_20281_20304 = state_20268__$1;
(statearr_20281_20304[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (14))){
var inst_20262 = (state_20268[(2)]);
var state_20268__$1 = state_20268;
var statearr_20282_20305 = state_20268__$1;
(statearr_20282_20305[(2)] = inst_20262);

(statearr_20282_20305[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (10))){
var inst_20254 = (state_20268[(2)]);
var state_20268__$1 = state_20268;
var statearr_20283_20306 = state_20268__$1;
(statearr_20283_20306[(2)] = inst_20254);

(statearr_20283_20306[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20269 === (8))){
var inst_20251 = cljs.core.async.close_BANG_(to);
var state_20268__$1 = state_20268;
var statearr_20284_20307 = state_20268__$1;
(statearr_20284_20307[(2)] = inst_20251);

(statearr_20284_20307[(1)] = (10));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___20293))
;
return ((function (switch__12849__auto__,c__12927__auto___20293){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_20288 = [null,null,null,null,null,null,null,null];
(statearr_20288[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_20288[(1)] = (1));

return statearr_20288;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_20268){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20268);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20289){if((e20289 instanceof Object)){
var ex__12853__auto__ = e20289;
var statearr_20290_20308 = state_20268;
(statearr_20290_20308[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20268);

return cljs.core.constant$keyword$recur;
} else {
throw e20289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20309 = state_20268;
state_20268 = G__20309;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_20268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_20268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___20293))
})();
var state__12929__auto__ = (function (){var statearr_20291 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___20293);

return statearr_20291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___20293))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__20495){
var vec__20496 = p__20495;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20496,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20496,(1),null);
var job = vec__20496;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12927__auto___20680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___20680,res,vec__20496,v,p,job,jobs,results){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___20680,res,vec__20496,v,p,job,jobs,results){
return (function (state_20501){
var state_val_20502 = (state_20501[(1)]);
if((state_val_20502 === (2))){
var inst_20498 = (state_20501[(2)]);
var inst_20499 = cljs.core.async.close_BANG_(res);
var state_20501__$1 = (function (){var statearr_20503 = state_20501;
(statearr_20503[(7)] = inst_20498);

return statearr_20503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20501__$1,inst_20499);
} else {
if((state_val_20502 === (1))){
var state_20501__$1 = state_20501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20501__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12927__auto___20680,res,vec__20496,v,p,job,jobs,results))
;
return ((function (switch__12849__auto__,c__12927__auto___20680,res,vec__20496,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0 = (function (){
var statearr_20507 = [null,null,null,null,null,null,null,null];
(statearr_20507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__);

(statearr_20507[(1)] = (1));

return statearr_20507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1 = (function (state_20501){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20501);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20508){if((e20508 instanceof Object)){
var ex__12853__auto__ = e20508;
var statearr_20509_20681 = state_20501;
(statearr_20509_20681[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20501);

return cljs.core.constant$keyword$recur;
} else {
throw e20508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20682 = state_20501;
state_20501 = G__20682;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = function(state_20501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1.call(this,state_20501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___20680,res,vec__20496,v,p,job,jobs,results))
})();
var state__12929__auto__ = (function (){var statearr_20510 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___20680);

return statearr_20510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___20680,res,vec__20496,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20511){
var vec__20512 = p__20511;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(1),null);
var job = vec__20512;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__20513_20683 = v;
var G__20514_20684 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__20513_20683,G__20514_20684) : xf.call(null,G__20513_20683,G__20514_20684));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4984__auto___20685 = n;
var __20686 = (0);
while(true){
if((__20686 < n__4984__auto___20685)){
var G__20515_20687 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20515_20687) {
case "async":
var c__12927__auto___20689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20686,c__12927__auto___20689,G__20515_20687,n__4984__auto___20685,jobs,results,process,async){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (__20686,c__12927__auto___20689,G__20515_20687,n__4984__auto___20685,jobs,results,process,async){
return (function (state_20528){
var state_val_20529 = (state_20528[(1)]);
if((state_val_20529 === (7))){
var inst_20524 = (state_20528[(2)]);
var state_20528__$1 = state_20528;
var statearr_20530_20690 = state_20528__$1;
(statearr_20530_20690[(2)] = inst_20524);

(statearr_20530_20690[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20529 === (6))){
var state_20528__$1 = state_20528;
var statearr_20531_20691 = state_20528__$1;
(statearr_20531_20691[(2)] = null);

(statearr_20531_20691[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20529 === (5))){
var state_20528__$1 = state_20528;
var statearr_20532_20692 = state_20528__$1;
(statearr_20532_20692[(2)] = null);

(statearr_20532_20692[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20529 === (4))){
var inst_20518 = (state_20528[(2)]);
var inst_20519 = async(inst_20518);
var state_20528__$1 = state_20528;
if(cljs.core.truth_(inst_20519)){
var statearr_20533_20693 = state_20528__$1;
(statearr_20533_20693[(1)] = (5));

} else {
var statearr_20534_20694 = state_20528__$1;
(statearr_20534_20694[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20529 === (3))){
var inst_20526 = (state_20528[(2)]);
var state_20528__$1 = state_20528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20528__$1,inst_20526);
} else {
if((state_val_20529 === (2))){
var state_20528__$1 = state_20528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20528__$1,(4),jobs);
} else {
if((state_val_20529 === (1))){
var state_20528__$1 = state_20528;
var statearr_20535_20695 = state_20528__$1;
(statearr_20535_20695[(2)] = null);

(statearr_20535_20695[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__20686,c__12927__auto___20689,G__20515_20687,n__4984__auto___20685,jobs,results,process,async))
;
return ((function (__20686,switch__12849__auto__,c__12927__auto___20689,G__20515_20687,n__4984__auto___20685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0 = (function (){
var statearr_20539 = [null,null,null,null,null,null,null];
(statearr_20539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__);

(statearr_20539[(1)] = (1));

return statearr_20539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1 = (function (state_20528){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20528);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20540){if((e20540 instanceof Object)){
var ex__12853__auto__ = e20540;
var statearr_20541_20696 = state_20528;
(statearr_20541_20696[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20528);

return cljs.core.constant$keyword$recur;
} else {
throw e20540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20697 = state_20528;
state_20528 = G__20697;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = function(state_20528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1.call(this,state_20528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__;
})()
;})(__20686,switch__12849__auto__,c__12927__auto___20689,G__20515_20687,n__4984__auto___20685,jobs,results,process,async))
})();
var state__12929__auto__ = (function (){var statearr_20542 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___20689);

return statearr_20542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(__20686,c__12927__auto___20689,G__20515_20687,n__4984__auto___20685,jobs,results,process,async))
);


break;
case "compute":
var c__12927__auto___20698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20686,c__12927__auto___20698,G__20515_20687,n__4984__auto___20685,jobs,results,process,async){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (__20686,c__12927__auto___20698,G__20515_20687,n__4984__auto___20685,jobs,results,process,async){
return (function (state_20555){
var state_val_20556 = (state_20555[(1)]);
if((state_val_20556 === (7))){
var inst_20551 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20557_20699 = state_20555__$1;
(statearr_20557_20699[(2)] = inst_20551);

(statearr_20557_20699[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20556 === (6))){
var state_20555__$1 = state_20555;
var statearr_20558_20700 = state_20555__$1;
(statearr_20558_20700[(2)] = null);

(statearr_20558_20700[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20556 === (5))){
var state_20555__$1 = state_20555;
var statearr_20559_20701 = state_20555__$1;
(statearr_20559_20701[(2)] = null);

(statearr_20559_20701[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20556 === (4))){
var inst_20545 = (state_20555[(2)]);
var inst_20546 = process(inst_20545);
var state_20555__$1 = state_20555;
if(cljs.core.truth_(inst_20546)){
var statearr_20560_20702 = state_20555__$1;
(statearr_20560_20702[(1)] = (5));

} else {
var statearr_20561_20703 = state_20555__$1;
(statearr_20561_20703[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20556 === (3))){
var inst_20553 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20555__$1,inst_20553);
} else {
if((state_val_20556 === (2))){
var state_20555__$1 = state_20555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20555__$1,(4),jobs);
} else {
if((state_val_20556 === (1))){
var state_20555__$1 = state_20555;
var statearr_20562_20704 = state_20555__$1;
(statearr_20562_20704[(2)] = null);

(statearr_20562_20704[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__20686,c__12927__auto___20698,G__20515_20687,n__4984__auto___20685,jobs,results,process,async))
;
return ((function (__20686,switch__12849__auto__,c__12927__auto___20698,G__20515_20687,n__4984__auto___20685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0 = (function (){
var statearr_20566 = [null,null,null,null,null,null,null];
(statearr_20566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__);

(statearr_20566[(1)] = (1));

return statearr_20566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1 = (function (state_20555){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20555);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20567){if((e20567 instanceof Object)){
var ex__12853__auto__ = e20567;
var statearr_20568_20705 = state_20555;
(statearr_20568_20705[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20555);

return cljs.core.constant$keyword$recur;
} else {
throw e20567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20706 = state_20555;
state_20555 = G__20706;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = function(state_20555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1.call(this,state_20555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__;
})()
;})(__20686,switch__12849__auto__,c__12927__auto___20698,G__20515_20687,n__4984__auto___20685,jobs,results,process,async))
})();
var state__12929__auto__ = (function (){var statearr_20569 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___20698);

return statearr_20569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(__20686,c__12927__auto___20698,G__20515_20687,n__4984__auto___20685,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20707 = (__20686 + (1));
__20686 = G__20707;
continue;
} else {
}
break;
}

var c__12927__auto___20708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___20708,jobs,results,process,async){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___20708,jobs,results,process,async){
return (function (state_20591){
var state_val_20592 = (state_20591[(1)]);
if((state_val_20592 === (9))){
var inst_20584 = (state_20591[(2)]);
var state_20591__$1 = (function (){var statearr_20593 = state_20591;
(statearr_20593[(7)] = inst_20584);

return statearr_20593;
})();
var statearr_20594_20709 = state_20591__$1;
(statearr_20594_20709[(2)] = null);

(statearr_20594_20709[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20592 === (8))){
var inst_20577 = (state_20591[(8)]);
var inst_20582 = (state_20591[(2)]);
var state_20591__$1 = (function (){var statearr_20595 = state_20591;
(statearr_20595[(9)] = inst_20582);

return statearr_20595;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20591__$1,(9),results,inst_20577);
} else {
if((state_val_20592 === (7))){
var inst_20587 = (state_20591[(2)]);
var state_20591__$1 = state_20591;
var statearr_20596_20710 = state_20591__$1;
(statearr_20596_20710[(2)] = inst_20587);

(statearr_20596_20710[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20592 === (6))){
var inst_20572 = (state_20591[(10)]);
var inst_20577 = (state_20591[(8)]);
var inst_20577__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20579 = [inst_20572,inst_20577__$1];
var inst_20580 = (new cljs.core.PersistentVector(null,2,(5),inst_20578,inst_20579,null));
var state_20591__$1 = (function (){var statearr_20597 = state_20591;
(statearr_20597[(8)] = inst_20577__$1);

return statearr_20597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20591__$1,(8),jobs,inst_20580);
} else {
if((state_val_20592 === (5))){
var inst_20575 = cljs.core.async.close_BANG_(jobs);
var state_20591__$1 = state_20591;
var statearr_20598_20711 = state_20591__$1;
(statearr_20598_20711[(2)] = inst_20575);

(statearr_20598_20711[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20592 === (4))){
var inst_20572 = (state_20591[(10)]);
var inst_20572__$1 = (state_20591[(2)]);
var inst_20573 = (inst_20572__$1 == null);
var state_20591__$1 = (function (){var statearr_20599 = state_20591;
(statearr_20599[(10)] = inst_20572__$1);

return statearr_20599;
})();
if(cljs.core.truth_(inst_20573)){
var statearr_20600_20712 = state_20591__$1;
(statearr_20600_20712[(1)] = (5));

} else {
var statearr_20601_20713 = state_20591__$1;
(statearr_20601_20713[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20592 === (3))){
var inst_20589 = (state_20591[(2)]);
var state_20591__$1 = state_20591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20591__$1,inst_20589);
} else {
if((state_val_20592 === (2))){
var state_20591__$1 = state_20591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20591__$1,(4),from);
} else {
if((state_val_20592 === (1))){
var state_20591__$1 = state_20591;
var statearr_20602_20714 = state_20591__$1;
(statearr_20602_20714[(2)] = null);

(statearr_20602_20714[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___20708,jobs,results,process,async))
;
return ((function (switch__12849__auto__,c__12927__auto___20708,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0 = (function (){
var statearr_20606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__);

(statearr_20606[(1)] = (1));

return statearr_20606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1 = (function (state_20591){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20591);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20607){if((e20607 instanceof Object)){
var ex__12853__auto__ = e20607;
var statearr_20608_20715 = state_20591;
(statearr_20608_20715[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20591);

return cljs.core.constant$keyword$recur;
} else {
throw e20607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20716 = state_20591;
state_20591 = G__20716;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = function(state_20591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1.call(this,state_20591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___20708,jobs,results,process,async))
})();
var state__12929__auto__ = (function (){var statearr_20609 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___20708);

return statearr_20609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___20708,jobs,results,process,async))
);


var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__,jobs,results,process,async){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__,jobs,results,process,async){
return (function (state_20647){
var state_val_20648 = (state_20647[(1)]);
if((state_val_20648 === (7))){
var inst_20643 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
var statearr_20649_20717 = state_20647__$1;
(statearr_20649_20717[(2)] = inst_20643);

(statearr_20649_20717[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (20))){
var state_20647__$1 = state_20647;
var statearr_20650_20718 = state_20647__$1;
(statearr_20650_20718[(2)] = null);

(statearr_20650_20718[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (1))){
var state_20647__$1 = state_20647;
var statearr_20651_20719 = state_20647__$1;
(statearr_20651_20719[(2)] = null);

(statearr_20651_20719[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (4))){
var inst_20612 = (state_20647[(7)]);
var inst_20612__$1 = (state_20647[(2)]);
var inst_20613 = (inst_20612__$1 == null);
var state_20647__$1 = (function (){var statearr_20652 = state_20647;
(statearr_20652[(7)] = inst_20612__$1);

return statearr_20652;
})();
if(cljs.core.truth_(inst_20613)){
var statearr_20653_20720 = state_20647__$1;
(statearr_20653_20720[(1)] = (5));

} else {
var statearr_20654_20721 = state_20647__$1;
(statearr_20654_20721[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (15))){
var inst_20625 = (state_20647[(8)]);
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20647__$1,(18),to,inst_20625);
} else {
if((state_val_20648 === (21))){
var inst_20638 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
var statearr_20655_20722 = state_20647__$1;
(statearr_20655_20722[(2)] = inst_20638);

(statearr_20655_20722[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (13))){
var inst_20640 = (state_20647[(2)]);
var state_20647__$1 = (function (){var statearr_20656 = state_20647;
(statearr_20656[(9)] = inst_20640);

return statearr_20656;
})();
var statearr_20657_20723 = state_20647__$1;
(statearr_20657_20723[(2)] = null);

(statearr_20657_20723[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (6))){
var inst_20612 = (state_20647[(7)]);
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20647__$1,(11),inst_20612);
} else {
if((state_val_20648 === (17))){
var inst_20633 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
if(cljs.core.truth_(inst_20633)){
var statearr_20658_20724 = state_20647__$1;
(statearr_20658_20724[(1)] = (19));

} else {
var statearr_20659_20725 = state_20647__$1;
(statearr_20659_20725[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (3))){
var inst_20645 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20647__$1,inst_20645);
} else {
if((state_val_20648 === (12))){
var inst_20622 = (state_20647[(10)]);
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20647__$1,(14),inst_20622);
} else {
if((state_val_20648 === (2))){
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20647__$1,(4),results);
} else {
if((state_val_20648 === (19))){
var state_20647__$1 = state_20647;
var statearr_20660_20726 = state_20647__$1;
(statearr_20660_20726[(2)] = null);

(statearr_20660_20726[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (11))){
var inst_20622 = (state_20647[(2)]);
var state_20647__$1 = (function (){var statearr_20661 = state_20647;
(statearr_20661[(10)] = inst_20622);

return statearr_20661;
})();
var statearr_20662_20727 = state_20647__$1;
(statearr_20662_20727[(2)] = null);

(statearr_20662_20727[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (9))){
var state_20647__$1 = state_20647;
var statearr_20663_20728 = state_20647__$1;
(statearr_20663_20728[(2)] = null);

(statearr_20663_20728[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (5))){
var state_20647__$1 = state_20647;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20664_20729 = state_20647__$1;
(statearr_20664_20729[(1)] = (8));

} else {
var statearr_20665_20730 = state_20647__$1;
(statearr_20665_20730[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (14))){
var inst_20625 = (state_20647[(8)]);
var inst_20627 = (state_20647[(11)]);
var inst_20625__$1 = (state_20647[(2)]);
var inst_20626 = (inst_20625__$1 == null);
var inst_20627__$1 = cljs.core.not(inst_20626);
var state_20647__$1 = (function (){var statearr_20666 = state_20647;
(statearr_20666[(8)] = inst_20625__$1);

(statearr_20666[(11)] = inst_20627__$1);

return statearr_20666;
})();
if(inst_20627__$1){
var statearr_20667_20731 = state_20647__$1;
(statearr_20667_20731[(1)] = (15));

} else {
var statearr_20668_20732 = state_20647__$1;
(statearr_20668_20732[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (16))){
var inst_20627 = (state_20647[(11)]);
var state_20647__$1 = state_20647;
var statearr_20669_20733 = state_20647__$1;
(statearr_20669_20733[(2)] = inst_20627);

(statearr_20669_20733[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (10))){
var inst_20619 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
var statearr_20670_20734 = state_20647__$1;
(statearr_20670_20734[(2)] = inst_20619);

(statearr_20670_20734[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (18))){
var inst_20630 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
var statearr_20671_20735 = state_20647__$1;
(statearr_20671_20735[(2)] = inst_20630);

(statearr_20671_20735[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20648 === (8))){
var inst_20616 = cljs.core.async.close_BANG_(to);
var state_20647__$1 = state_20647;
var statearr_20672_20736 = state_20647__$1;
(statearr_20672_20736[(2)] = inst_20616);

(statearr_20672_20736[(1)] = (10));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto__,jobs,results,process,async))
;
return ((function (switch__12849__auto__,c__12927__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0 = (function (){
var statearr_20676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__);

(statearr_20676[(1)] = (1));

return statearr_20676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1 = (function (state_20647){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20647);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20677){if((e20677 instanceof Object)){
var ex__12853__auto__ = e20677;
var statearr_20678_20737 = state_20647;
(statearr_20678_20737[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20647);

return cljs.core.constant$keyword$recur;
} else {
throw e20677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20738 = state_20647;
state_20647 = G__20738;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__ = function(state_20647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1.call(this,state_20647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12850__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__,jobs,results,process,async))
})();
var state__12929__auto__ = (function (){var statearr_20679 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_20679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__,jobs,results,process,async))
);

return c__12927__auto__;
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
var G__20740 = arguments.length;
switch (G__20740) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$async);
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
var G__20743 = arguments.length;
switch (G__20743) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$compute);
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
var G__20746 = arguments.length;
switch (G__20746) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12927__auto___20799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___20799,tc,fc){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___20799,tc,fc){
return (function (state_20772){
var state_val_20773 = (state_20772[(1)]);
if((state_val_20773 === (7))){
var inst_20768 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
var statearr_20774_20800 = state_20772__$1;
(statearr_20774_20800[(2)] = inst_20768);

(statearr_20774_20800[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (1))){
var state_20772__$1 = state_20772;
var statearr_20775_20801 = state_20772__$1;
(statearr_20775_20801[(2)] = null);

(statearr_20775_20801[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (4))){
var inst_20749 = (state_20772[(7)]);
var inst_20749__$1 = (state_20772[(2)]);
var inst_20750 = (inst_20749__$1 == null);
var state_20772__$1 = (function (){var statearr_20776 = state_20772;
(statearr_20776[(7)] = inst_20749__$1);

return statearr_20776;
})();
if(cljs.core.truth_(inst_20750)){
var statearr_20777_20802 = state_20772__$1;
(statearr_20777_20802[(1)] = (5));

} else {
var statearr_20778_20803 = state_20772__$1;
(statearr_20778_20803[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (13))){
var state_20772__$1 = state_20772;
var statearr_20779_20804 = state_20772__$1;
(statearr_20779_20804[(2)] = null);

(statearr_20779_20804[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (6))){
var inst_20749 = (state_20772[(7)]);
var inst_20755 = (function (){var G__20780 = inst_20749;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20780) : p.call(null,G__20780));
})();
var state_20772__$1 = state_20772;
if(cljs.core.truth_(inst_20755)){
var statearr_20781_20805 = state_20772__$1;
(statearr_20781_20805[(1)] = (9));

} else {
var statearr_20782_20806 = state_20772__$1;
(statearr_20782_20806[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (3))){
var inst_20770 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20772__$1,inst_20770);
} else {
if((state_val_20773 === (12))){
var state_20772__$1 = state_20772;
var statearr_20783_20807 = state_20772__$1;
(statearr_20783_20807[(2)] = null);

(statearr_20783_20807[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (2))){
var state_20772__$1 = state_20772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20772__$1,(4),ch);
} else {
if((state_val_20773 === (11))){
var inst_20749 = (state_20772[(7)]);
var inst_20759 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20772__$1,(8),inst_20759,inst_20749);
} else {
if((state_val_20773 === (9))){
var state_20772__$1 = state_20772;
var statearr_20784_20808 = state_20772__$1;
(statearr_20784_20808[(2)] = tc);

(statearr_20784_20808[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (5))){
var inst_20752 = cljs.core.async.close_BANG_(tc);
var inst_20753 = cljs.core.async.close_BANG_(fc);
var state_20772__$1 = (function (){var statearr_20785 = state_20772;
(statearr_20785[(8)] = inst_20752);

return statearr_20785;
})();
var statearr_20786_20809 = state_20772__$1;
(statearr_20786_20809[(2)] = inst_20753);

(statearr_20786_20809[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (14))){
var inst_20766 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
var statearr_20787_20810 = state_20772__$1;
(statearr_20787_20810[(2)] = inst_20766);

(statearr_20787_20810[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (10))){
var state_20772__$1 = state_20772;
var statearr_20788_20811 = state_20772__$1;
(statearr_20788_20811[(2)] = fc);

(statearr_20788_20811[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20773 === (8))){
var inst_20761 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
if(cljs.core.truth_(inst_20761)){
var statearr_20789_20812 = state_20772__$1;
(statearr_20789_20812[(1)] = (12));

} else {
var statearr_20790_20813 = state_20772__$1;
(statearr_20790_20813[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___20799,tc,fc))
;
return ((function (switch__12849__auto__,c__12927__auto___20799,tc,fc){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_20794 = [null,null,null,null,null,null,null,null,null];
(statearr_20794[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_20794[(1)] = (1));

return statearr_20794;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_20772){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20772);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20795){if((e20795 instanceof Object)){
var ex__12853__auto__ = e20795;
var statearr_20796_20814 = state_20772;
(statearr_20796_20814[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20772);

return cljs.core.constant$keyword$recur;
} else {
throw e20795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20815 = state_20772;
state_20772 = G__20815;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_20772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_20772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___20799,tc,fc))
})();
var state__12929__auto__ = (function (){var statearr_20797 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___20799);

return statearr_20797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___20799,tc,fc))
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
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__){
return (function (state_20864){
var state_val_20865 = (state_20864[(1)]);
if((state_val_20865 === (7))){
var inst_20860 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20866_20884 = state_20864__$1;
(statearr_20866_20884[(2)] = inst_20860);

(statearr_20866_20884[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20865 === (6))){
var inst_20853 = (state_20864[(7)]);
var inst_20850 = (state_20864[(8)]);
var inst_20857 = (function (){var G__20867 = inst_20850;
var G__20868 = inst_20853;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20867,G__20868) : f.call(null,G__20867,G__20868));
})();
var inst_20850__$1 = inst_20857;
var state_20864__$1 = (function (){var statearr_20869 = state_20864;
(statearr_20869[(8)] = inst_20850__$1);

return statearr_20869;
})();
var statearr_20870_20885 = state_20864__$1;
(statearr_20870_20885[(2)] = null);

(statearr_20870_20885[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20865 === (5))){
var inst_20850 = (state_20864[(8)]);
var state_20864__$1 = state_20864;
var statearr_20871_20886 = state_20864__$1;
(statearr_20871_20886[(2)] = inst_20850);

(statearr_20871_20886[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20865 === (4))){
var inst_20853 = (state_20864[(7)]);
var inst_20853__$1 = (state_20864[(2)]);
var inst_20854 = (inst_20853__$1 == null);
var state_20864__$1 = (function (){var statearr_20872 = state_20864;
(statearr_20872[(7)] = inst_20853__$1);

return statearr_20872;
})();
if(cljs.core.truth_(inst_20854)){
var statearr_20873_20887 = state_20864__$1;
(statearr_20873_20887[(1)] = (5));

} else {
var statearr_20874_20888 = state_20864__$1;
(statearr_20874_20888[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20865 === (3))){
var inst_20862 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20864__$1,inst_20862);
} else {
if((state_val_20865 === (2))){
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20864__$1,(4),ch);
} else {
if((state_val_20865 === (1))){
var inst_20850 = init;
var state_20864__$1 = (function (){var statearr_20875 = state_20864;
(statearr_20875[(8)] = inst_20850);

return statearr_20875;
})();
var statearr_20876_20889 = state_20864__$1;
(statearr_20876_20889[(2)] = null);

(statearr_20876_20889[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12927__auto__))
;
return ((function (switch__12849__auto__,c__12927__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12850__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12850__auto____0 = (function (){
var statearr_20880 = [null,null,null,null,null,null,null,null,null];
(statearr_20880[(0)] = cljs$core$async$reduce_$_state_machine__12850__auto__);

(statearr_20880[(1)] = (1));

return statearr_20880;
});
var cljs$core$async$reduce_$_state_machine__12850__auto____1 = (function (state_20864){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20864);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20881){if((e20881 instanceof Object)){
var ex__12853__auto__ = e20881;
var statearr_20882_20890 = state_20864;
(statearr_20882_20890[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20864);

return cljs.core.constant$keyword$recur;
} else {
throw e20881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20891 = state_20864;
state_20864 = G__20891;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12850__auto__ = function(state_20864){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12850__auto____1.call(this,state_20864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12850__auto____0;
cljs$core$async$reduce_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12850__auto____1;
return cljs$core$async$reduce_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__))
})();
var state__12929__auto__ = (function (){var statearr_20883 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_20883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__))
);

return c__12927__auto__;
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
var G__20893 = arguments.length;
switch (G__20893) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__){
return (function (state_20918){
var state_val_20919 = (state_20918[(1)]);
if((state_val_20919 === (7))){
var inst_20900 = (state_20918[(2)]);
var state_20918__$1 = state_20918;
var statearr_20920_20944 = state_20918__$1;
(statearr_20920_20944[(2)] = inst_20900);

(statearr_20920_20944[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (1))){
var inst_20894 = cljs.core.seq(coll);
var inst_20895 = inst_20894;
var state_20918__$1 = (function (){var statearr_20921 = state_20918;
(statearr_20921[(7)] = inst_20895);

return statearr_20921;
})();
var statearr_20922_20945 = state_20918__$1;
(statearr_20922_20945[(2)] = null);

(statearr_20922_20945[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (4))){
var inst_20895 = (state_20918[(7)]);
var inst_20898 = cljs.core.first(inst_20895);
var state_20918__$1 = state_20918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20918__$1,(7),ch,inst_20898);
} else {
if((state_val_20919 === (13))){
var inst_20912 = (state_20918[(2)]);
var state_20918__$1 = state_20918;
var statearr_20923_20946 = state_20918__$1;
(statearr_20923_20946[(2)] = inst_20912);

(statearr_20923_20946[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (6))){
var inst_20903 = (state_20918[(2)]);
var state_20918__$1 = state_20918;
if(cljs.core.truth_(inst_20903)){
var statearr_20924_20947 = state_20918__$1;
(statearr_20924_20947[(1)] = (8));

} else {
var statearr_20925_20948 = state_20918__$1;
(statearr_20925_20948[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (3))){
var inst_20916 = (state_20918[(2)]);
var state_20918__$1 = state_20918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20918__$1,inst_20916);
} else {
if((state_val_20919 === (12))){
var state_20918__$1 = state_20918;
var statearr_20926_20949 = state_20918__$1;
(statearr_20926_20949[(2)] = null);

(statearr_20926_20949[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (2))){
var inst_20895 = (state_20918[(7)]);
var state_20918__$1 = state_20918;
if(cljs.core.truth_(inst_20895)){
var statearr_20927_20950 = state_20918__$1;
(statearr_20927_20950[(1)] = (4));

} else {
var statearr_20928_20951 = state_20918__$1;
(statearr_20928_20951[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (11))){
var inst_20909 = cljs.core.async.close_BANG_(ch);
var state_20918__$1 = state_20918;
var statearr_20929_20952 = state_20918__$1;
(statearr_20929_20952[(2)] = inst_20909);

(statearr_20929_20952[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (9))){
var state_20918__$1 = state_20918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20930_20953 = state_20918__$1;
(statearr_20930_20953[(1)] = (11));

} else {
var statearr_20931_20954 = state_20918__$1;
(statearr_20931_20954[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (5))){
var inst_20895 = (state_20918[(7)]);
var state_20918__$1 = state_20918;
var statearr_20932_20955 = state_20918__$1;
(statearr_20932_20955[(2)] = inst_20895);

(statearr_20932_20955[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (10))){
var inst_20914 = (state_20918[(2)]);
var state_20918__$1 = state_20918;
var statearr_20933_20956 = state_20918__$1;
(statearr_20933_20956[(2)] = inst_20914);

(statearr_20933_20956[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20919 === (8))){
var inst_20895 = (state_20918[(7)]);
var inst_20905 = cljs.core.next(inst_20895);
var inst_20895__$1 = inst_20905;
var state_20918__$1 = (function (){var statearr_20934 = state_20918;
(statearr_20934[(7)] = inst_20895__$1);

return statearr_20934;
})();
var statearr_20935_20957 = state_20918__$1;
(statearr_20935_20957[(2)] = null);

(statearr_20935_20957[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto__))
;
return ((function (switch__12849__auto__,c__12927__auto__){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_20939 = [null,null,null,null,null,null,null,null];
(statearr_20939[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_20939[(1)] = (1));

return statearr_20939;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_20918){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20918);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20940){if((e20940 instanceof Object)){
var ex__12853__auto__ = e20940;
var statearr_20941_20958 = state_20918;
(statearr_20941_20958[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20918);

return cljs.core.constant$keyword$recur;
} else {
throw e20940;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20959 = state_20918;
state_20918 = G__20959;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_20918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_20918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__))
})();
var state__12929__auto__ = (function (){var statearr_20942 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_20942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__))
);

return c__12927__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj20961 = {};
return obj20961;
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
return (function (){var or__4099__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__20965 = x__4735__auto__;
return goog.typeOf(G__20965);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj20967 = {};
return obj20967;
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
return (function (){var or__4099__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__20971 = x__4735__auto__;
return goog.typeOf(G__20971);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (function (){var or__4099__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__20975 = x__4735__auto__;
return goog.typeOf(G__20975);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (function (){var or__4099__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__20979 = x__4735__auto__;
return goog.typeOf(G__20979);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__21209 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21209) : cljs.core.atom.call(null,G__21209));
})();
var m = (function (){
if(typeof cljs.core.async.t21210 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21210 = (function (cs,ch,mult,meta21211){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21211 = meta21211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21210.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21210.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21210.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21210.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21213_21438 = self__.cs;
var G__21214_21439 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21213_21438,G__21214_21439) : cljs.core.reset_BANG_.call(null,G__21213_21438,G__21214_21439));

return null;
});})(cs))
;

cljs.core.async.t21210.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21212){
var self__ = this;
var _21212__$1 = this;
return self__.meta21211;
});})(cs))
;

cljs.core.async.t21210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21212,meta21211__$1){
var self__ = this;
var _21212__$1 = this;
return (new cljs.core.async.t21210(self__.cs,self__.ch,self__.mult,meta21211__$1));
});})(cs))
;

cljs.core.async.t21210.cljs$lang$type = true;

cljs.core.async.t21210.cljs$lang$ctorStr = "cljs.core.async/t21210";

cljs.core.async.t21210.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t21210");
});})(cs))
;

cljs.core.async.__GT_t21210 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t21210(cs__$1,ch__$1,mult__$1,meta21211){
return (new cljs.core.async.t21210(cs__$1,ch__$1,mult__$1,meta21211));
});})(cs))
;

}

return (new cljs.core.async.t21210(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__21215 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21215) : cljs.core.atom.call(null,G__21215));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12927__auto___21440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___21440,cs,m,dchan,dctr,done){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___21440,cs,m,dchan,dctr,done){
return (function (state_21346){
var state_val_21347 = (state_21346[(1)]);
if((state_val_21347 === (7))){
var inst_21342 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21348_21441 = state_21346__$1;
(statearr_21348_21441[(2)] = inst_21342);

(statearr_21348_21441[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (20))){
var inst_21247 = (state_21346[(7)]);
var inst_21257 = cljs.core.first(inst_21247);
var inst_21258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21257,(0),null);
var inst_21259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21257,(1),null);
var state_21346__$1 = (function (){var statearr_21349 = state_21346;
(statearr_21349[(8)] = inst_21258);

return statearr_21349;
})();
if(cljs.core.truth_(inst_21259)){
var statearr_21350_21442 = state_21346__$1;
(statearr_21350_21442[(1)] = (22));

} else {
var statearr_21351_21443 = state_21346__$1;
(statearr_21351_21443[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (27))){
var inst_21218 = (state_21346[(9)]);
var inst_21289 = (state_21346[(10)]);
var inst_21287 = (state_21346[(11)]);
var inst_21294 = (state_21346[(12)]);
var inst_21294__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21287,inst_21289);
var inst_21295 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21294__$1,inst_21218,done);
var state_21346__$1 = (function (){var statearr_21352 = state_21346;
(statearr_21352[(12)] = inst_21294__$1);

return statearr_21352;
})();
if(cljs.core.truth_(inst_21295)){
var statearr_21353_21444 = state_21346__$1;
(statearr_21353_21444[(1)] = (30));

} else {
var statearr_21354_21445 = state_21346__$1;
(statearr_21354_21445[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (1))){
var state_21346__$1 = state_21346;
var statearr_21355_21446 = state_21346__$1;
(statearr_21355_21446[(2)] = null);

(statearr_21355_21446[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (24))){
var inst_21247 = (state_21346[(7)]);
var inst_21264 = (state_21346[(2)]);
var inst_21265 = cljs.core.next(inst_21247);
var inst_21227 = inst_21265;
var inst_21228 = null;
var inst_21229 = (0);
var inst_21230 = (0);
var state_21346__$1 = (function (){var statearr_21356 = state_21346;
(statearr_21356[(13)] = inst_21229);

(statearr_21356[(14)] = inst_21227);

(statearr_21356[(15)] = inst_21228);

(statearr_21356[(16)] = inst_21230);

(statearr_21356[(17)] = inst_21264);

return statearr_21356;
})();
var statearr_21357_21447 = state_21346__$1;
(statearr_21357_21447[(2)] = null);

(statearr_21357_21447[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (39))){
var state_21346__$1 = state_21346;
var statearr_21361_21448 = state_21346__$1;
(statearr_21361_21448[(2)] = null);

(statearr_21361_21448[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (4))){
var inst_21218 = (state_21346[(9)]);
var inst_21218__$1 = (state_21346[(2)]);
var inst_21219 = (inst_21218__$1 == null);
var state_21346__$1 = (function (){var statearr_21362 = state_21346;
(statearr_21362[(9)] = inst_21218__$1);

return statearr_21362;
})();
if(cljs.core.truth_(inst_21219)){
var statearr_21363_21449 = state_21346__$1;
(statearr_21363_21449[(1)] = (5));

} else {
var statearr_21364_21450 = state_21346__$1;
(statearr_21364_21450[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (15))){
var inst_21229 = (state_21346[(13)]);
var inst_21227 = (state_21346[(14)]);
var inst_21228 = (state_21346[(15)]);
var inst_21230 = (state_21346[(16)]);
var inst_21243 = (state_21346[(2)]);
var inst_21244 = (inst_21230 + (1));
var tmp21358 = inst_21229;
var tmp21359 = inst_21227;
var tmp21360 = inst_21228;
var inst_21227__$1 = tmp21359;
var inst_21228__$1 = tmp21360;
var inst_21229__$1 = tmp21358;
var inst_21230__$1 = inst_21244;
var state_21346__$1 = (function (){var statearr_21365 = state_21346;
(statearr_21365[(18)] = inst_21243);

(statearr_21365[(13)] = inst_21229__$1);

(statearr_21365[(14)] = inst_21227__$1);

(statearr_21365[(15)] = inst_21228__$1);

(statearr_21365[(16)] = inst_21230__$1);

return statearr_21365;
})();
var statearr_21366_21451 = state_21346__$1;
(statearr_21366_21451[(2)] = null);

(statearr_21366_21451[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (21))){
var inst_21268 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21370_21452 = state_21346__$1;
(statearr_21370_21452[(2)] = inst_21268);

(statearr_21370_21452[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (31))){
var inst_21294 = (state_21346[(12)]);
var inst_21298 = done(null);
var inst_21299 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21294);
var state_21346__$1 = (function (){var statearr_21371 = state_21346;
(statearr_21371[(19)] = inst_21298);

return statearr_21371;
})();
var statearr_21372_21453 = state_21346__$1;
(statearr_21372_21453[(2)] = inst_21299);

(statearr_21372_21453[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (32))){
var inst_21289 = (state_21346[(10)]);
var inst_21288 = (state_21346[(20)]);
var inst_21287 = (state_21346[(11)]);
var inst_21286 = (state_21346[(21)]);
var inst_21301 = (state_21346[(2)]);
var inst_21302 = (inst_21289 + (1));
var tmp21367 = inst_21288;
var tmp21368 = inst_21287;
var tmp21369 = inst_21286;
var inst_21286__$1 = tmp21369;
var inst_21287__$1 = tmp21368;
var inst_21288__$1 = tmp21367;
var inst_21289__$1 = inst_21302;
var state_21346__$1 = (function (){var statearr_21373 = state_21346;
(statearr_21373[(10)] = inst_21289__$1);

(statearr_21373[(20)] = inst_21288__$1);

(statearr_21373[(22)] = inst_21301);

(statearr_21373[(11)] = inst_21287__$1);

(statearr_21373[(21)] = inst_21286__$1);

return statearr_21373;
})();
var statearr_21374_21454 = state_21346__$1;
(statearr_21374_21454[(2)] = null);

(statearr_21374_21454[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (40))){
var inst_21314 = (state_21346[(23)]);
var inst_21318 = done(null);
var inst_21319 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21314);
var state_21346__$1 = (function (){var statearr_21375 = state_21346;
(statearr_21375[(24)] = inst_21318);

return statearr_21375;
})();
var statearr_21376_21455 = state_21346__$1;
(statearr_21376_21455[(2)] = inst_21319);

(statearr_21376_21455[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (33))){
var inst_21305 = (state_21346[(25)]);
var inst_21307 = cljs.core.chunked_seq_QMARK_(inst_21305);
var state_21346__$1 = state_21346;
if(inst_21307){
var statearr_21377_21456 = state_21346__$1;
(statearr_21377_21456[(1)] = (36));

} else {
var statearr_21378_21457 = state_21346__$1;
(statearr_21378_21457[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (13))){
var inst_21237 = (state_21346[(26)]);
var inst_21240 = cljs.core.async.close_BANG_(inst_21237);
var state_21346__$1 = state_21346;
var statearr_21379_21458 = state_21346__$1;
(statearr_21379_21458[(2)] = inst_21240);

(statearr_21379_21458[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (22))){
var inst_21258 = (state_21346[(8)]);
var inst_21261 = cljs.core.async.close_BANG_(inst_21258);
var state_21346__$1 = state_21346;
var statearr_21380_21459 = state_21346__$1;
(statearr_21380_21459[(2)] = inst_21261);

(statearr_21380_21459[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (36))){
var inst_21305 = (state_21346[(25)]);
var inst_21309 = cljs.core.chunk_first(inst_21305);
var inst_21310 = cljs.core.chunk_rest(inst_21305);
var inst_21311 = cljs.core.count(inst_21309);
var inst_21286 = inst_21310;
var inst_21287 = inst_21309;
var inst_21288 = inst_21311;
var inst_21289 = (0);
var state_21346__$1 = (function (){var statearr_21381 = state_21346;
(statearr_21381[(10)] = inst_21289);

(statearr_21381[(20)] = inst_21288);

(statearr_21381[(11)] = inst_21287);

(statearr_21381[(21)] = inst_21286);

return statearr_21381;
})();
var statearr_21382_21460 = state_21346__$1;
(statearr_21382_21460[(2)] = null);

(statearr_21382_21460[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (41))){
var inst_21305 = (state_21346[(25)]);
var inst_21321 = (state_21346[(2)]);
var inst_21322 = cljs.core.next(inst_21305);
var inst_21286 = inst_21322;
var inst_21287 = null;
var inst_21288 = (0);
var inst_21289 = (0);
var state_21346__$1 = (function (){var statearr_21383 = state_21346;
(statearr_21383[(27)] = inst_21321);

(statearr_21383[(10)] = inst_21289);

(statearr_21383[(20)] = inst_21288);

(statearr_21383[(11)] = inst_21287);

(statearr_21383[(21)] = inst_21286);

return statearr_21383;
})();
var statearr_21384_21461 = state_21346__$1;
(statearr_21384_21461[(2)] = null);

(statearr_21384_21461[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (43))){
var state_21346__$1 = state_21346;
var statearr_21385_21462 = state_21346__$1;
(statearr_21385_21462[(2)] = null);

(statearr_21385_21462[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (29))){
var inst_21330 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21386_21463 = state_21346__$1;
(statearr_21386_21463[(2)] = inst_21330);

(statearr_21386_21463[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (44))){
var inst_21339 = (state_21346[(2)]);
var state_21346__$1 = (function (){var statearr_21387 = state_21346;
(statearr_21387[(28)] = inst_21339);

return statearr_21387;
})();
var statearr_21388_21464 = state_21346__$1;
(statearr_21388_21464[(2)] = null);

(statearr_21388_21464[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (6))){
var inst_21278 = (state_21346[(29)]);
var inst_21277 = (function (){var G__21389 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21389) : cljs.core.deref.call(null,G__21389));
})();
var inst_21278__$1 = cljs.core.keys(inst_21277);
var inst_21279 = cljs.core.count(inst_21278__$1);
var inst_21280 = (function (){var G__21390 = dctr;
var G__21391 = inst_21279;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21390,G__21391) : cljs.core.reset_BANG_.call(null,G__21390,G__21391));
})();
var inst_21285 = cljs.core.seq(inst_21278__$1);
var inst_21286 = inst_21285;
var inst_21287 = null;
var inst_21288 = (0);
var inst_21289 = (0);
var state_21346__$1 = (function (){var statearr_21392 = state_21346;
(statearr_21392[(10)] = inst_21289);

(statearr_21392[(20)] = inst_21288);

(statearr_21392[(11)] = inst_21287);

(statearr_21392[(29)] = inst_21278__$1);

(statearr_21392[(21)] = inst_21286);

(statearr_21392[(30)] = inst_21280);

return statearr_21392;
})();
var statearr_21393_21465 = state_21346__$1;
(statearr_21393_21465[(2)] = null);

(statearr_21393_21465[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (28))){
var inst_21305 = (state_21346[(25)]);
var inst_21286 = (state_21346[(21)]);
var inst_21305__$1 = cljs.core.seq(inst_21286);
var state_21346__$1 = (function (){var statearr_21394 = state_21346;
(statearr_21394[(25)] = inst_21305__$1);

return statearr_21394;
})();
if(inst_21305__$1){
var statearr_21395_21466 = state_21346__$1;
(statearr_21395_21466[(1)] = (33));

} else {
var statearr_21396_21467 = state_21346__$1;
(statearr_21396_21467[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (25))){
var inst_21289 = (state_21346[(10)]);
var inst_21288 = (state_21346[(20)]);
var inst_21291 = (inst_21289 < inst_21288);
var inst_21292 = inst_21291;
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21292)){
var statearr_21397_21468 = state_21346__$1;
(statearr_21397_21468[(1)] = (27));

} else {
var statearr_21398_21469 = state_21346__$1;
(statearr_21398_21469[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (34))){
var state_21346__$1 = state_21346;
var statearr_21399_21470 = state_21346__$1;
(statearr_21399_21470[(2)] = null);

(statearr_21399_21470[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (17))){
var state_21346__$1 = state_21346;
var statearr_21400_21471 = state_21346__$1;
(statearr_21400_21471[(2)] = null);

(statearr_21400_21471[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (3))){
var inst_21344 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21346__$1,inst_21344);
} else {
if((state_val_21347 === (12))){
var inst_21273 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21401_21472 = state_21346__$1;
(statearr_21401_21472[(2)] = inst_21273);

(statearr_21401_21472[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (2))){
var state_21346__$1 = state_21346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21346__$1,(4),ch);
} else {
if((state_val_21347 === (23))){
var state_21346__$1 = state_21346;
var statearr_21402_21473 = state_21346__$1;
(statearr_21402_21473[(2)] = null);

(statearr_21402_21473[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (35))){
var inst_21328 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21403_21474 = state_21346__$1;
(statearr_21403_21474[(2)] = inst_21328);

(statearr_21403_21474[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (19))){
var inst_21247 = (state_21346[(7)]);
var inst_21251 = cljs.core.chunk_first(inst_21247);
var inst_21252 = cljs.core.chunk_rest(inst_21247);
var inst_21253 = cljs.core.count(inst_21251);
var inst_21227 = inst_21252;
var inst_21228 = inst_21251;
var inst_21229 = inst_21253;
var inst_21230 = (0);
var state_21346__$1 = (function (){var statearr_21404 = state_21346;
(statearr_21404[(13)] = inst_21229);

(statearr_21404[(14)] = inst_21227);

(statearr_21404[(15)] = inst_21228);

(statearr_21404[(16)] = inst_21230);

return statearr_21404;
})();
var statearr_21405_21475 = state_21346__$1;
(statearr_21405_21475[(2)] = null);

(statearr_21405_21475[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (11))){
var inst_21247 = (state_21346[(7)]);
var inst_21227 = (state_21346[(14)]);
var inst_21247__$1 = cljs.core.seq(inst_21227);
var state_21346__$1 = (function (){var statearr_21406 = state_21346;
(statearr_21406[(7)] = inst_21247__$1);

return statearr_21406;
})();
if(inst_21247__$1){
var statearr_21407_21476 = state_21346__$1;
(statearr_21407_21476[(1)] = (16));

} else {
var statearr_21408_21477 = state_21346__$1;
(statearr_21408_21477[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (9))){
var inst_21275 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21409_21478 = state_21346__$1;
(statearr_21409_21478[(2)] = inst_21275);

(statearr_21409_21478[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (5))){
var inst_21225 = (function (){var G__21410 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21410) : cljs.core.deref.call(null,G__21410));
})();
var inst_21226 = cljs.core.seq(inst_21225);
var inst_21227 = inst_21226;
var inst_21228 = null;
var inst_21229 = (0);
var inst_21230 = (0);
var state_21346__$1 = (function (){var statearr_21411 = state_21346;
(statearr_21411[(13)] = inst_21229);

(statearr_21411[(14)] = inst_21227);

(statearr_21411[(15)] = inst_21228);

(statearr_21411[(16)] = inst_21230);

return statearr_21411;
})();
var statearr_21412_21479 = state_21346__$1;
(statearr_21412_21479[(2)] = null);

(statearr_21412_21479[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (14))){
var state_21346__$1 = state_21346;
var statearr_21413_21480 = state_21346__$1;
(statearr_21413_21480[(2)] = null);

(statearr_21413_21480[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (45))){
var inst_21336 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21414_21481 = state_21346__$1;
(statearr_21414_21481[(2)] = inst_21336);

(statearr_21414_21481[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (26))){
var inst_21278 = (state_21346[(29)]);
var inst_21332 = (state_21346[(2)]);
var inst_21333 = cljs.core.seq(inst_21278);
var state_21346__$1 = (function (){var statearr_21415 = state_21346;
(statearr_21415[(31)] = inst_21332);

return statearr_21415;
})();
if(inst_21333){
var statearr_21416_21482 = state_21346__$1;
(statearr_21416_21482[(1)] = (42));

} else {
var statearr_21417_21483 = state_21346__$1;
(statearr_21417_21483[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (16))){
var inst_21247 = (state_21346[(7)]);
var inst_21249 = cljs.core.chunked_seq_QMARK_(inst_21247);
var state_21346__$1 = state_21346;
if(inst_21249){
var statearr_21418_21484 = state_21346__$1;
(statearr_21418_21484[(1)] = (19));

} else {
var statearr_21419_21485 = state_21346__$1;
(statearr_21419_21485[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (38))){
var inst_21325 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21420_21486 = state_21346__$1;
(statearr_21420_21486[(2)] = inst_21325);

(statearr_21420_21486[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (30))){
var state_21346__$1 = state_21346;
var statearr_21421_21487 = state_21346__$1;
(statearr_21421_21487[(2)] = null);

(statearr_21421_21487[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (10))){
var inst_21228 = (state_21346[(15)]);
var inst_21230 = (state_21346[(16)]);
var inst_21236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21228,inst_21230);
var inst_21237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21236,(0),null);
var inst_21238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21236,(1),null);
var state_21346__$1 = (function (){var statearr_21422 = state_21346;
(statearr_21422[(26)] = inst_21237);

return statearr_21422;
})();
if(cljs.core.truth_(inst_21238)){
var statearr_21423_21488 = state_21346__$1;
(statearr_21423_21488[(1)] = (13));

} else {
var statearr_21424_21489 = state_21346__$1;
(statearr_21424_21489[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (18))){
var inst_21271 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21425_21490 = state_21346__$1;
(statearr_21425_21490[(2)] = inst_21271);

(statearr_21425_21490[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (42))){
var state_21346__$1 = state_21346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21346__$1,(45),dchan);
} else {
if((state_val_21347 === (37))){
var inst_21305 = (state_21346[(25)]);
var inst_21218 = (state_21346[(9)]);
var inst_21314 = (state_21346[(23)]);
var inst_21314__$1 = cljs.core.first(inst_21305);
var inst_21315 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21314__$1,inst_21218,done);
var state_21346__$1 = (function (){var statearr_21426 = state_21346;
(statearr_21426[(23)] = inst_21314__$1);

return statearr_21426;
})();
if(cljs.core.truth_(inst_21315)){
var statearr_21427_21491 = state_21346__$1;
(statearr_21427_21491[(1)] = (39));

} else {
var statearr_21428_21492 = state_21346__$1;
(statearr_21428_21492[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21347 === (8))){
var inst_21229 = (state_21346[(13)]);
var inst_21230 = (state_21346[(16)]);
var inst_21232 = (inst_21230 < inst_21229);
var inst_21233 = inst_21232;
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21233)){
var statearr_21429_21493 = state_21346__$1;
(statearr_21429_21493[(1)] = (10));

} else {
var statearr_21430_21494 = state_21346__$1;
(statearr_21430_21494[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___21440,cs,m,dchan,dctr,done))
;
return ((function (switch__12849__auto__,c__12927__auto___21440,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12850__auto__ = null;
var cljs$core$async$mult_$_state_machine__12850__auto____0 = (function (){
var statearr_21434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21434[(0)] = cljs$core$async$mult_$_state_machine__12850__auto__);

(statearr_21434[(1)] = (1));

return statearr_21434;
});
var cljs$core$async$mult_$_state_machine__12850__auto____1 = (function (state_21346){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_21346);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e21435){if((e21435 instanceof Object)){
var ex__12853__auto__ = e21435;
var statearr_21436_21495 = state_21346;
(statearr_21436_21495[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21346);

return cljs.core.constant$keyword$recur;
} else {
throw e21435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__21496 = state_21346;
state_21346 = G__21496;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12850__auto__ = function(state_21346){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12850__auto____1.call(this,state_21346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12850__auto____0;
cljs$core$async$mult_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12850__auto____1;
return cljs$core$async$mult_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___21440,cs,m,dchan,dctr,done))
})();
var state__12929__auto__ = (function (){var statearr_21437 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_21437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___21440);

return statearr_21437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___21440,cs,m,dchan,dctr,done))
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
var G__21498 = arguments.length;
switch (G__21498) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj21501 = {};
return obj21501;
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
return (function (){var or__4099__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__21505 = x__4735__auto__;
return goog.typeOf(G__21505);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (function (){var or__4099__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__21509 = x__4735__auto__;
return goog.typeOf(G__21509);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (function (){var or__4099__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__21513 = x__4735__auto__;
return goog.typeOf(G__21513);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (function (){var or__4099__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__21517 = x__4735__auto__;
return goog.typeOf(G__21517);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (function (){var or__4099__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__21521 = x__4735__auto__;
return goog.typeOf(G__21521);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5139__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5139__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21526){
var map__21527 = p__21526;
var map__21527__$1 = ((cljs.core.seq_QMARK_(map__21527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21527):map__21527);
var opts = map__21527__$1;
var statearr_21528_21532 = state;
(statearr_21528_21532[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__21527,map__21527__$1,opts){
return (function (val){
var statearr_21529_21533 = state;
(statearr_21529_21533[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21527,map__21527__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21530_21534 = state;
(statearr_21530_21534[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__21531 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21531) : cljs.core.deref.call(null,G__21531));
})());


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21522){
var G__21523 = cljs.core.first(seq21522);
var seq21522__$1 = cljs.core.next(seq21522);
var G__21524 = cljs.core.first(seq21522__$1);
var seq21522__$2 = cljs.core.next(seq21522__$1);
var G__21525 = cljs.core.first(seq21522__$2);
var seq21522__$3 = cljs.core.next(seq21522__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21523,G__21524,G__21525,seq21522__$3);
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
var cs = (function (){var G__21668 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21668) : cljs.core.atom.call(null,G__21668));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (function (){var G__21669 = cljs.core.constant$keyword$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21669) : cljs.core.atom.call(null,G__21669));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__21670 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__21670) : attr.call(null,G__21670));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__21671 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21671) : cljs.core.deref.call(null,G__21671));
})();
var mode = (function (){var G__21672 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21672) : cljs.core.deref.call(null,G__21672));
})();
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t21673 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21673 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21674){
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
this.meta21674 = meta21674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21673.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21676_21801 = self__.cs;
var G__21677_21802 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21676_21801,G__21677_21802) : cljs.core.reset_BANG_.call(null,G__21676_21801,G__21677_21802));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__21678 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__21678) : self__.solo_modes.call(null,G__21678));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__21679_21803 = self__.solo_mode;
var G__21680_21804 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21679_21803,G__21680_21804) : cljs.core.reset_BANG_.call(null,G__21679_21803,G__21680_21804));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21675){
var self__ = this;
var _21675__$1 = this;
return self__.meta21674;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21675,meta21674__$1){
var self__ = this;
var _21675__$1 = this;
return (new cljs.core.async.t21673(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21674__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21673.cljs$lang$type = true;

cljs.core.async.t21673.cljs$lang$ctorStr = "cljs.core.async/t21673";

cljs.core.async.t21673.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t21673");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21673 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t21673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21674){
return (new cljs.core.async.t21673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21674));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21673(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12927__auto___21805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___21805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___21805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21752){
var state_val_21753 = (state_21752[(1)]);
if((state_val_21753 === (7))){
var inst_21694 = (state_21752[(7)]);
var inst_21699 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21694);
var state_21752__$1 = state_21752;
var statearr_21754_21806 = state_21752__$1;
(statearr_21754_21806[(2)] = inst_21699);

(statearr_21754_21806[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (20))){
var inst_21709 = (state_21752[(8)]);
var state_21752__$1 = state_21752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21752__$1,(23),out,inst_21709);
} else {
if((state_val_21753 === (1))){
var inst_21684 = (state_21752[(9)]);
var inst_21684__$1 = calc_state();
var inst_21685 = cljs.core.seq_QMARK_(inst_21684__$1);
var state_21752__$1 = (function (){var statearr_21755 = state_21752;
(statearr_21755[(9)] = inst_21684__$1);

return statearr_21755;
})();
if(inst_21685){
var statearr_21756_21807 = state_21752__$1;
(statearr_21756_21807[(1)] = (2));

} else {
var statearr_21757_21808 = state_21752__$1;
(statearr_21757_21808[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (24))){
var inst_21702 = (state_21752[(10)]);
var inst_21694 = inst_21702;
var state_21752__$1 = (function (){var statearr_21758 = state_21752;
(statearr_21758[(7)] = inst_21694);

return statearr_21758;
})();
var statearr_21759_21809 = state_21752__$1;
(statearr_21759_21809[(2)] = null);

(statearr_21759_21809[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (4))){
var inst_21684 = (state_21752[(9)]);
var inst_21690 = (state_21752[(2)]);
var inst_21691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21690,cljs.core.constant$keyword$reads);
var inst_21692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21690,cljs.core.constant$keyword$mutes);
var inst_21693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21690,cljs.core.constant$keyword$solos);
var inst_21694 = inst_21684;
var state_21752__$1 = (function (){var statearr_21760 = state_21752;
(statearr_21760[(7)] = inst_21694);

(statearr_21760[(11)] = inst_21693);

(statearr_21760[(12)] = inst_21691);

(statearr_21760[(13)] = inst_21692);

return statearr_21760;
})();
var statearr_21761_21810 = state_21752__$1;
(statearr_21761_21810[(2)] = null);

(statearr_21761_21810[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (15))){
var state_21752__$1 = state_21752;
var statearr_21762_21811 = state_21752__$1;
(statearr_21762_21811[(2)] = null);

(statearr_21762_21811[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (21))){
var inst_21702 = (state_21752[(10)]);
var inst_21694 = inst_21702;
var state_21752__$1 = (function (){var statearr_21763 = state_21752;
(statearr_21763[(7)] = inst_21694);

return statearr_21763;
})();
var statearr_21764_21812 = state_21752__$1;
(statearr_21764_21812[(2)] = null);

(statearr_21764_21812[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (13))){
var inst_21748 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
var statearr_21765_21813 = state_21752__$1;
(statearr_21765_21813[(2)] = inst_21748);

(statearr_21765_21813[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (22))){
var inst_21746 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
var statearr_21766_21814 = state_21752__$1;
(statearr_21766_21814[(2)] = inst_21746);

(statearr_21766_21814[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (6))){
var inst_21750 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21752__$1,inst_21750);
} else {
if((state_val_21753 === (25))){
var state_21752__$1 = state_21752;
var statearr_21767_21815 = state_21752__$1;
(statearr_21767_21815[(2)] = null);

(statearr_21767_21815[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (17))){
var inst_21725 = (state_21752[(14)]);
var state_21752__$1 = state_21752;
var statearr_21768_21816 = state_21752__$1;
(statearr_21768_21816[(2)] = inst_21725);

(statearr_21768_21816[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (3))){
var inst_21684 = (state_21752[(9)]);
var state_21752__$1 = state_21752;
var statearr_21769_21817 = state_21752__$1;
(statearr_21769_21817[(2)] = inst_21684);

(statearr_21769_21817[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (12))){
var inst_21705 = (state_21752[(15)]);
var inst_21725 = (state_21752[(14)]);
var inst_21710 = (state_21752[(16)]);
var inst_21725__$1 = (function (){var G__21770 = inst_21710;
return (inst_21705.cljs$core$IFn$_invoke$arity$1 ? inst_21705.cljs$core$IFn$_invoke$arity$1(G__21770) : inst_21705.call(null,G__21770));
})();
var state_21752__$1 = (function (){var statearr_21771 = state_21752;
(statearr_21771[(14)] = inst_21725__$1);

return statearr_21771;
})();
if(cljs.core.truth_(inst_21725__$1)){
var statearr_21772_21818 = state_21752__$1;
(statearr_21772_21818[(1)] = (17));

} else {
var statearr_21773_21819 = state_21752__$1;
(statearr_21773_21819[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (2))){
var inst_21684 = (state_21752[(9)]);
var inst_21687 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21684);
var state_21752__$1 = state_21752;
var statearr_21774_21820 = state_21752__$1;
(statearr_21774_21820[(2)] = inst_21687);

(statearr_21774_21820[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (23))){
var inst_21737 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
if(cljs.core.truth_(inst_21737)){
var statearr_21775_21821 = state_21752__$1;
(statearr_21775_21821[(1)] = (24));

} else {
var statearr_21776_21822 = state_21752__$1;
(statearr_21776_21822[(1)] = (25));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (19))){
var inst_21734 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
if(cljs.core.truth_(inst_21734)){
var statearr_21777_21823 = state_21752__$1;
(statearr_21777_21823[(1)] = (20));

} else {
var statearr_21778_21824 = state_21752__$1;
(statearr_21778_21824[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (11))){
var inst_21709 = (state_21752[(8)]);
var inst_21715 = (inst_21709 == null);
var state_21752__$1 = state_21752;
if(cljs.core.truth_(inst_21715)){
var statearr_21779_21825 = state_21752__$1;
(statearr_21779_21825[(1)] = (14));

} else {
var statearr_21780_21826 = state_21752__$1;
(statearr_21780_21826[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (9))){
var inst_21702 = (state_21752[(10)]);
var inst_21702__$1 = (state_21752[(2)]);
var inst_21703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21702__$1,cljs.core.constant$keyword$reads);
var inst_21704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21702__$1,cljs.core.constant$keyword$mutes);
var inst_21705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21702__$1,cljs.core.constant$keyword$solos);
var state_21752__$1 = (function (){var statearr_21781 = state_21752;
(statearr_21781[(15)] = inst_21705);

(statearr_21781[(10)] = inst_21702__$1);

(statearr_21781[(17)] = inst_21704);

return statearr_21781;
})();
return cljs.core.async.ioc_alts_BANG_(state_21752__$1,(10),inst_21703);
} else {
if((state_val_21753 === (5))){
var inst_21694 = (state_21752[(7)]);
var inst_21697 = cljs.core.seq_QMARK_(inst_21694);
var state_21752__$1 = state_21752;
if(inst_21697){
var statearr_21782_21827 = state_21752__$1;
(statearr_21782_21827[(1)] = (7));

} else {
var statearr_21783_21828 = state_21752__$1;
(statearr_21783_21828[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (14))){
var inst_21710 = (state_21752[(16)]);
var inst_21717 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21710);
var state_21752__$1 = state_21752;
var statearr_21784_21829 = state_21752__$1;
(statearr_21784_21829[(2)] = inst_21717);

(statearr_21784_21829[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (26))){
var inst_21742 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
var statearr_21785_21830 = state_21752__$1;
(statearr_21785_21830[(2)] = inst_21742);

(statearr_21785_21830[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (16))){
var inst_21720 = (state_21752[(2)]);
var inst_21721 = calc_state();
var inst_21694 = inst_21721;
var state_21752__$1 = (function (){var statearr_21786 = state_21752;
(statearr_21786[(7)] = inst_21694);

(statearr_21786[(18)] = inst_21720);

return statearr_21786;
})();
var statearr_21787_21831 = state_21752__$1;
(statearr_21787_21831[(2)] = null);

(statearr_21787_21831[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (10))){
var inst_21710 = (state_21752[(16)]);
var inst_21709 = (state_21752[(8)]);
var inst_21708 = (state_21752[(2)]);
var inst_21709__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21708,(0),null);
var inst_21710__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21708,(1),null);
var inst_21711 = (inst_21709__$1 == null);
var inst_21712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21710__$1,change);
var inst_21713 = (inst_21711) || (inst_21712);
var state_21752__$1 = (function (){var statearr_21788 = state_21752;
(statearr_21788[(16)] = inst_21710__$1);

(statearr_21788[(8)] = inst_21709__$1);

return statearr_21788;
})();
if(cljs.core.truth_(inst_21713)){
var statearr_21789_21832 = state_21752__$1;
(statearr_21789_21832[(1)] = (11));

} else {
var statearr_21790_21833 = state_21752__$1;
(statearr_21790_21833[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (18))){
var inst_21705 = (state_21752[(15)]);
var inst_21704 = (state_21752[(17)]);
var inst_21710 = (state_21752[(16)]);
var inst_21729 = cljs.core.empty_QMARK_(inst_21705);
var inst_21730 = (function (){var G__21791 = inst_21710;
return (inst_21704.cljs$core$IFn$_invoke$arity$1 ? inst_21704.cljs$core$IFn$_invoke$arity$1(G__21791) : inst_21704.call(null,G__21791));
})();
var inst_21731 = cljs.core.not(inst_21730);
var inst_21732 = (inst_21729) && (inst_21731);
var state_21752__$1 = state_21752;
var statearr_21792_21834 = state_21752__$1;
(statearr_21792_21834[(2)] = inst_21732);

(statearr_21792_21834[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21753 === (8))){
var inst_21694 = (state_21752[(7)]);
var state_21752__$1 = state_21752;
var statearr_21793_21835 = state_21752__$1;
(statearr_21793_21835[(2)] = inst_21694);

(statearr_21793_21835[(1)] = (9));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___21805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12849__auto__,c__12927__auto___21805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12850__auto__ = null;
var cljs$core$async$mix_$_state_machine__12850__auto____0 = (function (){
var statearr_21797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21797[(0)] = cljs$core$async$mix_$_state_machine__12850__auto__);

(statearr_21797[(1)] = (1));

return statearr_21797;
});
var cljs$core$async$mix_$_state_machine__12850__auto____1 = (function (state_21752){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_21752);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e21798){if((e21798 instanceof Object)){
var ex__12853__auto__ = e21798;
var statearr_21799_21836 = state_21752;
(statearr_21799_21836[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21752);

return cljs.core.constant$keyword$recur;
} else {
throw e21798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__21837 = state_21752;
state_21752 = G__21837;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12850__auto__ = function(state_21752){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12850__auto____1.call(this,state_21752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12850__auto____0;
cljs$core$async$mix_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12850__auto____1;
return cljs$core$async$mix_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___21805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12929__auto__ = (function (){var statearr_21800 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_21800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___21805);

return statearr_21800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___21805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj21839 = {};
return obj21839;
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
return (function (){var or__4099__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__21843 = x__4735__auto__;
return goog.typeOf(G__21843);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (function (){var or__4099__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__21847 = x__4735__auto__;
return goog.typeOf(G__21847);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__21849 = arguments.length;
switch (G__21849) {
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
return (function (){var or__4099__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__21851 = x__4735__auto__;
return goog.typeOf(G__21851);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (function (){var or__4099__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__21853 = x__4735__auto__;
return goog.typeOf(G__21853);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__21857 = arguments.length;
switch (G__21857) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__21858 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21858) : cljs.core.atom.call(null,G__21858));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4099__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21860 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21860) : cljs.core.deref.call(null,G__21860));
})(),topic);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4099__auto__,mults){
return (function (p1__21855_SHARP_){
if(cljs.core.truth_((function (){var G__21861 = topic;
return (p1__21855_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21855_SHARP_.cljs$core$IFn$_invoke$arity$1(G__21861) : p1__21855_SHARP_.call(null,G__21861));
})())){
return p1__21855_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21855_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__21862 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__21862) : buf_fn.call(null,G__21862));
})())));
}
});})(or__4099__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21863 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21863 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta21864){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta21864 = meta21864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21863.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21863.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__21866 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__21866) : self__.ensure_mult.call(null,G__21866));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21863.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21867 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21867) : cljs.core.deref.call(null,G__21867));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t21863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21868 = self__.mults;
var G__21869 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21868,G__21869) : cljs.core.reset_BANG_.call(null,G__21868,G__21869));
});})(mults,ensure_mult))
;

cljs.core.async.t21863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21863.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21865){
var self__ = this;
var _21865__$1 = this;
return self__.meta21864;
});})(mults,ensure_mult))
;

cljs.core.async.t21863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21865,meta21864__$1){
var self__ = this;
var _21865__$1 = this;
return (new cljs.core.async.t21863(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta21864__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21863.cljs$lang$type = true;

cljs.core.async.t21863.cljs$lang$ctorStr = "cljs.core.async/t21863";

cljs.core.async.t21863.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t21863");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21863 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t21863(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta21864){
return (new cljs.core.async.t21863(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta21864));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21863(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12927__auto___21993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___21993,mults,ensure_mult,p){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___21993,mults,ensure_mult,p){
return (function (state_21941){
var state_val_21942 = (state_21941[(1)]);
if((state_val_21942 === (7))){
var inst_21937 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21943_21994 = state_21941__$1;
(statearr_21943_21994[(2)] = inst_21937);

(statearr_21943_21994[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (20))){
var state_21941__$1 = state_21941;
var statearr_21944_21995 = state_21941__$1;
(statearr_21944_21995[(2)] = null);

(statearr_21944_21995[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (1))){
var state_21941__$1 = state_21941;
var statearr_21945_21996 = state_21941__$1;
(statearr_21945_21996[(2)] = null);

(statearr_21945_21996[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (24))){
var inst_21920 = (state_21941[(7)]);
var inst_21929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21920);
var state_21941__$1 = state_21941;
var statearr_21946_21997 = state_21941__$1;
(statearr_21946_21997[(2)] = inst_21929);

(statearr_21946_21997[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (4))){
var inst_21872 = (state_21941[(8)]);
var inst_21872__$1 = (state_21941[(2)]);
var inst_21873 = (inst_21872__$1 == null);
var state_21941__$1 = (function (){var statearr_21947 = state_21941;
(statearr_21947[(8)] = inst_21872__$1);

return statearr_21947;
})();
if(cljs.core.truth_(inst_21873)){
var statearr_21948_21998 = state_21941__$1;
(statearr_21948_21998[(1)] = (5));

} else {
var statearr_21949_21999 = state_21941__$1;
(statearr_21949_21999[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (15))){
var inst_21914 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21950_22000 = state_21941__$1;
(statearr_21950_22000[(2)] = inst_21914);

(statearr_21950_22000[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (21))){
var inst_21934 = (state_21941[(2)]);
var state_21941__$1 = (function (){var statearr_21951 = state_21941;
(statearr_21951[(9)] = inst_21934);

return statearr_21951;
})();
var statearr_21952_22001 = state_21941__$1;
(statearr_21952_22001[(2)] = null);

(statearr_21952_22001[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (13))){
var inst_21896 = (state_21941[(10)]);
var inst_21898 = cljs.core.chunked_seq_QMARK_(inst_21896);
var state_21941__$1 = state_21941;
if(inst_21898){
var statearr_21953_22002 = state_21941__$1;
(statearr_21953_22002[(1)] = (16));

} else {
var statearr_21954_22003 = state_21941__$1;
(statearr_21954_22003[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (22))){
var inst_21926 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
if(cljs.core.truth_(inst_21926)){
var statearr_21955_22004 = state_21941__$1;
(statearr_21955_22004[(1)] = (23));

} else {
var statearr_21956_22005 = state_21941__$1;
(statearr_21956_22005[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (6))){
var inst_21920 = (state_21941[(7)]);
var inst_21872 = (state_21941[(8)]);
var inst_21922 = (state_21941[(11)]);
var inst_21920__$1 = (function (){var G__21957 = inst_21872;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__21957) : topic_fn.call(null,G__21957));
})();
var inst_21921 = (function (){var G__21958 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21958) : cljs.core.deref.call(null,G__21958));
})();
var inst_21922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21921,inst_21920__$1);
var state_21941__$1 = (function (){var statearr_21959 = state_21941;
(statearr_21959[(7)] = inst_21920__$1);

(statearr_21959[(11)] = inst_21922__$1);

return statearr_21959;
})();
if(cljs.core.truth_(inst_21922__$1)){
var statearr_21960_22006 = state_21941__$1;
(statearr_21960_22006[(1)] = (19));

} else {
var statearr_21961_22007 = state_21941__$1;
(statearr_21961_22007[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (25))){
var inst_21931 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21962_22008 = state_21941__$1;
(statearr_21962_22008[(2)] = inst_21931);

(statearr_21962_22008[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (17))){
var inst_21896 = (state_21941[(10)]);
var inst_21905 = cljs.core.first(inst_21896);
var inst_21906 = cljs.core.async.muxch_STAR_(inst_21905);
var inst_21907 = cljs.core.async.close_BANG_(inst_21906);
var inst_21908 = cljs.core.next(inst_21896);
var inst_21882 = inst_21908;
var inst_21883 = null;
var inst_21884 = (0);
var inst_21885 = (0);
var state_21941__$1 = (function (){var statearr_21963 = state_21941;
(statearr_21963[(12)] = inst_21907);

(statearr_21963[(13)] = inst_21882);

(statearr_21963[(14)] = inst_21883);

(statearr_21963[(15)] = inst_21885);

(statearr_21963[(16)] = inst_21884);

return statearr_21963;
})();
var statearr_21964_22009 = state_21941__$1;
(statearr_21964_22009[(2)] = null);

(statearr_21964_22009[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (3))){
var inst_21939 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21941__$1,inst_21939);
} else {
if((state_val_21942 === (12))){
var inst_21916 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21965_22010 = state_21941__$1;
(statearr_21965_22010[(2)] = inst_21916);

(statearr_21965_22010[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (2))){
var state_21941__$1 = state_21941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21941__$1,(4),ch);
} else {
if((state_val_21942 === (23))){
var state_21941__$1 = state_21941;
var statearr_21966_22011 = state_21941__$1;
(statearr_21966_22011[(2)] = null);

(statearr_21966_22011[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (19))){
var inst_21872 = (state_21941[(8)]);
var inst_21922 = (state_21941[(11)]);
var inst_21924 = cljs.core.async.muxch_STAR_(inst_21922);
var state_21941__$1 = state_21941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21941__$1,(22),inst_21924,inst_21872);
} else {
if((state_val_21942 === (11))){
var inst_21896 = (state_21941[(10)]);
var inst_21882 = (state_21941[(13)]);
var inst_21896__$1 = cljs.core.seq(inst_21882);
var state_21941__$1 = (function (){var statearr_21967 = state_21941;
(statearr_21967[(10)] = inst_21896__$1);

return statearr_21967;
})();
if(inst_21896__$1){
var statearr_21968_22012 = state_21941__$1;
(statearr_21968_22012[(1)] = (13));

} else {
var statearr_21969_22013 = state_21941__$1;
(statearr_21969_22013[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (9))){
var inst_21918 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21970_22014 = state_21941__$1;
(statearr_21970_22014[(2)] = inst_21918);

(statearr_21970_22014[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (5))){
var inst_21879 = (function (){var G__21971 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21971) : cljs.core.deref.call(null,G__21971));
})();
var inst_21880 = cljs.core.vals(inst_21879);
var inst_21881 = cljs.core.seq(inst_21880);
var inst_21882 = inst_21881;
var inst_21883 = null;
var inst_21884 = (0);
var inst_21885 = (0);
var state_21941__$1 = (function (){var statearr_21972 = state_21941;
(statearr_21972[(13)] = inst_21882);

(statearr_21972[(14)] = inst_21883);

(statearr_21972[(15)] = inst_21885);

(statearr_21972[(16)] = inst_21884);

return statearr_21972;
})();
var statearr_21973_22015 = state_21941__$1;
(statearr_21973_22015[(2)] = null);

(statearr_21973_22015[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (14))){
var state_21941__$1 = state_21941;
var statearr_21977_22016 = state_21941__$1;
(statearr_21977_22016[(2)] = null);

(statearr_21977_22016[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (16))){
var inst_21896 = (state_21941[(10)]);
var inst_21900 = cljs.core.chunk_first(inst_21896);
var inst_21901 = cljs.core.chunk_rest(inst_21896);
var inst_21902 = cljs.core.count(inst_21900);
var inst_21882 = inst_21901;
var inst_21883 = inst_21900;
var inst_21884 = inst_21902;
var inst_21885 = (0);
var state_21941__$1 = (function (){var statearr_21978 = state_21941;
(statearr_21978[(13)] = inst_21882);

(statearr_21978[(14)] = inst_21883);

(statearr_21978[(15)] = inst_21885);

(statearr_21978[(16)] = inst_21884);

return statearr_21978;
})();
var statearr_21979_22017 = state_21941__$1;
(statearr_21979_22017[(2)] = null);

(statearr_21979_22017[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (10))){
var inst_21882 = (state_21941[(13)]);
var inst_21883 = (state_21941[(14)]);
var inst_21885 = (state_21941[(15)]);
var inst_21884 = (state_21941[(16)]);
var inst_21890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21883,inst_21885);
var inst_21891 = cljs.core.async.muxch_STAR_(inst_21890);
var inst_21892 = cljs.core.async.close_BANG_(inst_21891);
var inst_21893 = (inst_21885 + (1));
var tmp21974 = inst_21882;
var tmp21975 = inst_21883;
var tmp21976 = inst_21884;
var inst_21882__$1 = tmp21974;
var inst_21883__$1 = tmp21975;
var inst_21884__$1 = tmp21976;
var inst_21885__$1 = inst_21893;
var state_21941__$1 = (function (){var statearr_21980 = state_21941;
(statearr_21980[(13)] = inst_21882__$1);

(statearr_21980[(14)] = inst_21883__$1);

(statearr_21980[(15)] = inst_21885__$1);

(statearr_21980[(17)] = inst_21892);

(statearr_21980[(16)] = inst_21884__$1);

return statearr_21980;
})();
var statearr_21981_22018 = state_21941__$1;
(statearr_21981_22018[(2)] = null);

(statearr_21981_22018[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (18))){
var inst_21911 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21982_22019 = state_21941__$1;
(statearr_21982_22019[(2)] = inst_21911);

(statearr_21982_22019[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21942 === (8))){
var inst_21885 = (state_21941[(15)]);
var inst_21884 = (state_21941[(16)]);
var inst_21887 = (inst_21885 < inst_21884);
var inst_21888 = inst_21887;
var state_21941__$1 = state_21941;
if(cljs.core.truth_(inst_21888)){
var statearr_21983_22020 = state_21941__$1;
(statearr_21983_22020[(1)] = (10));

} else {
var statearr_21984_22021 = state_21941__$1;
(statearr_21984_22021[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___21993,mults,ensure_mult,p))
;
return ((function (switch__12849__auto__,c__12927__auto___21993,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_21988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21988[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_21988[(1)] = (1));

return statearr_21988;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_21941){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_21941);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e21989){if((e21989 instanceof Object)){
var ex__12853__auto__ = e21989;
var statearr_21990_22022 = state_21941;
(statearr_21990_22022[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21941);

return cljs.core.constant$keyword$recur;
} else {
throw e21989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22023 = state_21941;
state_21941 = G__22023;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_21941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_21941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___21993,mults,ensure_mult,p))
})();
var state__12929__auto__ = (function (){var statearr_21991 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_21991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___21993);

return statearr_21991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___21993,mults,ensure_mult,p))
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
var G__22025 = arguments.length;
switch (G__22025) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__22028 = arguments.length;
switch (G__22028) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__22031 = arguments.length;
switch (G__22031) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__22032 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22032) : cljs.core.atom.call(null,G__22032));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12927__auto___22106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___22106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___22106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22071){
var state_val_22072 = (state_22071[(1)]);
if((state_val_22072 === (7))){
var state_22071__$1 = state_22071;
var statearr_22073_22107 = state_22071__$1;
(statearr_22073_22107[(2)] = null);

(statearr_22073_22107[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (1))){
var state_22071__$1 = state_22071;
var statearr_22074_22108 = state_22071__$1;
(statearr_22074_22108[(2)] = null);

(statearr_22074_22108[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (4))){
var inst_22035 = (state_22071[(7)]);
var inst_22037 = (inst_22035 < cnt);
var state_22071__$1 = state_22071;
if(cljs.core.truth_(inst_22037)){
var statearr_22075_22109 = state_22071__$1;
(statearr_22075_22109[(1)] = (6));

} else {
var statearr_22076_22110 = state_22071__$1;
(statearr_22076_22110[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (15))){
var inst_22067 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
var statearr_22077_22111 = state_22071__$1;
(statearr_22077_22111[(2)] = inst_22067);

(statearr_22077_22111[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (13))){
var inst_22060 = cljs.core.async.close_BANG_(out);
var state_22071__$1 = state_22071;
var statearr_22078_22112 = state_22071__$1;
(statearr_22078_22112[(2)] = inst_22060);

(statearr_22078_22112[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (6))){
var state_22071__$1 = state_22071;
var statearr_22079_22113 = state_22071__$1;
(statearr_22079_22113[(2)] = null);

(statearr_22079_22113[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (3))){
var inst_22069 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22071__$1,inst_22069);
} else {
if((state_val_22072 === (12))){
var inst_22057 = (state_22071[(8)]);
var inst_22057__$1 = (state_22071[(2)]);
var inst_22058 = cljs.core.some(cljs.core.nil_QMARK_,inst_22057__$1);
var state_22071__$1 = (function (){var statearr_22080 = state_22071;
(statearr_22080[(8)] = inst_22057__$1);

return statearr_22080;
})();
if(cljs.core.truth_(inst_22058)){
var statearr_22081_22114 = state_22071__$1;
(statearr_22081_22114[(1)] = (13));

} else {
var statearr_22082_22115 = state_22071__$1;
(statearr_22082_22115[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (2))){
var inst_22034 = (function (){var G__22083 = dctr;
var G__22084 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22083,G__22084) : cljs.core.reset_BANG_.call(null,G__22083,G__22084));
})();
var inst_22035 = (0);
var state_22071__$1 = (function (){var statearr_22085 = state_22071;
(statearr_22085[(9)] = inst_22034);

(statearr_22085[(7)] = inst_22035);

return statearr_22085;
})();
var statearr_22086_22116 = state_22071__$1;
(statearr_22086_22116[(2)] = null);

(statearr_22086_22116[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (11))){
var inst_22035 = (state_22071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22071,(10),Object,null,(9));
var inst_22044 = (function (){var G__22087 = inst_22035;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__22087) : chs__$1.call(null,G__22087));
})();
var inst_22045 = (function (){var G__22088 = inst_22035;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22088) : done.call(null,G__22088));
})();
var inst_22046 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22044,inst_22045);
var state_22071__$1 = state_22071;
var statearr_22089_22117 = state_22071__$1;
(statearr_22089_22117[(2)] = inst_22046);


cljs.core.async.impl.ioc_helpers.process_exception(state_22071__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (9))){
var inst_22035 = (state_22071[(7)]);
var inst_22048 = (state_22071[(2)]);
var inst_22049 = (inst_22035 + (1));
var inst_22035__$1 = inst_22049;
var state_22071__$1 = (function (){var statearr_22090 = state_22071;
(statearr_22090[(7)] = inst_22035__$1);

(statearr_22090[(10)] = inst_22048);

return statearr_22090;
})();
var statearr_22091_22118 = state_22071__$1;
(statearr_22091_22118[(2)] = null);

(statearr_22091_22118[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (5))){
var inst_22055 = (state_22071[(2)]);
var state_22071__$1 = (function (){var statearr_22092 = state_22071;
(statearr_22092[(11)] = inst_22055);

return statearr_22092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22071__$1,(12),dchan);
} else {
if((state_val_22072 === (14))){
var inst_22057 = (state_22071[(8)]);
var inst_22062 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22057);
var state_22071__$1 = state_22071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22071__$1,(16),out,inst_22062);
} else {
if((state_val_22072 === (16))){
var inst_22064 = (state_22071[(2)]);
var state_22071__$1 = (function (){var statearr_22093 = state_22071;
(statearr_22093[(12)] = inst_22064);

return statearr_22093;
})();
var statearr_22094_22119 = state_22071__$1;
(statearr_22094_22119[(2)] = null);

(statearr_22094_22119[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (10))){
var inst_22039 = (state_22071[(2)]);
var inst_22040 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22071__$1 = (function (){var statearr_22095 = state_22071;
(statearr_22095[(13)] = inst_22039);

return statearr_22095;
})();
var statearr_22096_22120 = state_22071__$1;
(statearr_22096_22120[(2)] = inst_22040);


cljs.core.async.impl.ioc_helpers.process_exception(state_22071__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22072 === (8))){
var inst_22053 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
var statearr_22097_22121 = state_22071__$1;
(statearr_22097_22121[(2)] = inst_22053);

(statearr_22097_22121[(1)] = (5));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___22106,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12849__auto__,c__12927__auto___22106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_22101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22101[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_22101[(1)] = (1));

return statearr_22101;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_22071){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22071);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22102){if((e22102 instanceof Object)){
var ex__12853__auto__ = e22102;
var statearr_22103_22122 = state_22071;
(statearr_22103_22122[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22071);

return cljs.core.constant$keyword$recur;
} else {
throw e22102;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22123 = state_22071;
state_22071 = G__22123;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_22071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_22071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___22106,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12929__auto__ = (function (){var statearr_22104 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___22106);

return statearr_22104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___22106,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22126 = arguments.length;
switch (G__22126) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12927__auto___22181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___22181,out){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___22181,out){
return (function (state_22156){
var state_val_22157 = (state_22156[(1)]);
if((state_val_22157 === (7))){
var inst_22135 = (state_22156[(7)]);
var inst_22136 = (state_22156[(8)]);
var inst_22135__$1 = (state_22156[(2)]);
var inst_22136__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22135__$1,(0),null);
var inst_22137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22135__$1,(1),null);
var inst_22138 = (inst_22136__$1 == null);
var state_22156__$1 = (function (){var statearr_22158 = state_22156;
(statearr_22158[(7)] = inst_22135__$1);

(statearr_22158[(8)] = inst_22136__$1);

(statearr_22158[(9)] = inst_22137);

return statearr_22158;
})();
if(cljs.core.truth_(inst_22138)){
var statearr_22159_22182 = state_22156__$1;
(statearr_22159_22182[(1)] = (8));

} else {
var statearr_22160_22183 = state_22156__$1;
(statearr_22160_22183[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22157 === (1))){
var inst_22127 = cljs.core.vec(chs);
var inst_22128 = inst_22127;
var state_22156__$1 = (function (){var statearr_22161 = state_22156;
(statearr_22161[(10)] = inst_22128);

return statearr_22161;
})();
var statearr_22162_22184 = state_22156__$1;
(statearr_22162_22184[(2)] = null);

(statearr_22162_22184[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22157 === (4))){
var inst_22128 = (state_22156[(10)]);
var state_22156__$1 = state_22156;
return cljs.core.async.ioc_alts_BANG_(state_22156__$1,(7),inst_22128);
} else {
if((state_val_22157 === (6))){
var inst_22152 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22163_22185 = state_22156__$1;
(statearr_22163_22185[(2)] = inst_22152);

(statearr_22163_22185[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22157 === (3))){
var inst_22154 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22156__$1,inst_22154);
} else {
if((state_val_22157 === (2))){
var inst_22128 = (state_22156[(10)]);
var inst_22130 = cljs.core.count(inst_22128);
var inst_22131 = (inst_22130 > (0));
var state_22156__$1 = state_22156;
if(cljs.core.truth_(inst_22131)){
var statearr_22165_22186 = state_22156__$1;
(statearr_22165_22186[(1)] = (4));

} else {
var statearr_22166_22187 = state_22156__$1;
(statearr_22166_22187[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22157 === (11))){
var inst_22128 = (state_22156[(10)]);
var inst_22145 = (state_22156[(2)]);
var tmp22164 = inst_22128;
var inst_22128__$1 = tmp22164;
var state_22156__$1 = (function (){var statearr_22167 = state_22156;
(statearr_22167[(10)] = inst_22128__$1);

(statearr_22167[(11)] = inst_22145);

return statearr_22167;
})();
var statearr_22168_22188 = state_22156__$1;
(statearr_22168_22188[(2)] = null);

(statearr_22168_22188[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22157 === (9))){
var inst_22136 = (state_22156[(8)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22156__$1,(11),out,inst_22136);
} else {
if((state_val_22157 === (5))){
var inst_22150 = cljs.core.async.close_BANG_(out);
var state_22156__$1 = state_22156;
var statearr_22169_22189 = state_22156__$1;
(statearr_22169_22189[(2)] = inst_22150);

(statearr_22169_22189[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22157 === (10))){
var inst_22148 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22170_22190 = state_22156__$1;
(statearr_22170_22190[(2)] = inst_22148);

(statearr_22170_22190[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22157 === (8))){
var inst_22135 = (state_22156[(7)]);
var inst_22136 = (state_22156[(8)]);
var inst_22128 = (state_22156[(10)]);
var inst_22137 = (state_22156[(9)]);
var inst_22140 = (function (){var c = inst_22137;
var v = inst_22136;
var vec__22133 = inst_22135;
var cs = inst_22128;
return ((function (c,v,vec__22133,cs,inst_22135,inst_22136,inst_22128,inst_22137,state_val_22157,c__12927__auto___22181,out){
return (function (p1__22124_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22124_SHARP_);
});
;})(c,v,vec__22133,cs,inst_22135,inst_22136,inst_22128,inst_22137,state_val_22157,c__12927__auto___22181,out))
})();
var inst_22141 = cljs.core.filterv(inst_22140,inst_22128);
var inst_22128__$1 = inst_22141;
var state_22156__$1 = (function (){var statearr_22171 = state_22156;
(statearr_22171[(10)] = inst_22128__$1);

return statearr_22171;
})();
var statearr_22172_22191 = state_22156__$1;
(statearr_22172_22191[(2)] = null);

(statearr_22172_22191[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___22181,out))
;
return ((function (switch__12849__auto__,c__12927__auto___22181,out){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_22176 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22176[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_22176[(1)] = (1));

return statearr_22176;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_22156){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22156);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22177){if((e22177 instanceof Object)){
var ex__12853__auto__ = e22177;
var statearr_22178_22192 = state_22156;
(statearr_22178_22192[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22156);

return cljs.core.constant$keyword$recur;
} else {
throw e22177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22193 = state_22156;
state_22156 = G__22193;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_22156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_22156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___22181,out))
})();
var state__12929__auto__ = (function (){var statearr_22179 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___22181);

return statearr_22179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___22181,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__22195 = arguments.length;
switch (G__22195) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12927__auto___22243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___22243,out){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___22243,out){
return (function (state_22219){
var state_val_22220 = (state_22219[(1)]);
if((state_val_22220 === (7))){
var inst_22201 = (state_22219[(7)]);
var inst_22201__$1 = (state_22219[(2)]);
var inst_22202 = (inst_22201__$1 == null);
var inst_22203 = cljs.core.not(inst_22202);
var state_22219__$1 = (function (){var statearr_22221 = state_22219;
(statearr_22221[(7)] = inst_22201__$1);

return statearr_22221;
})();
if(inst_22203){
var statearr_22222_22244 = state_22219__$1;
(statearr_22222_22244[(1)] = (8));

} else {
var statearr_22223_22245 = state_22219__$1;
(statearr_22223_22245[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (1))){
var inst_22196 = (0);
var state_22219__$1 = (function (){var statearr_22224 = state_22219;
(statearr_22224[(8)] = inst_22196);

return statearr_22224;
})();
var statearr_22225_22246 = state_22219__$1;
(statearr_22225_22246[(2)] = null);

(statearr_22225_22246[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (4))){
var state_22219__$1 = state_22219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22219__$1,(7),ch);
} else {
if((state_val_22220 === (6))){
var inst_22214 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22226_22247 = state_22219__$1;
(statearr_22226_22247[(2)] = inst_22214);

(statearr_22226_22247[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (3))){
var inst_22216 = (state_22219[(2)]);
var inst_22217 = cljs.core.async.close_BANG_(out);
var state_22219__$1 = (function (){var statearr_22227 = state_22219;
(statearr_22227[(9)] = inst_22216);

return statearr_22227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22219__$1,inst_22217);
} else {
if((state_val_22220 === (2))){
var inst_22196 = (state_22219[(8)]);
var inst_22198 = (inst_22196 < n);
var state_22219__$1 = state_22219;
if(cljs.core.truth_(inst_22198)){
var statearr_22228_22248 = state_22219__$1;
(statearr_22228_22248[(1)] = (4));

} else {
var statearr_22229_22249 = state_22219__$1;
(statearr_22229_22249[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (11))){
var inst_22196 = (state_22219[(8)]);
var inst_22206 = (state_22219[(2)]);
var inst_22207 = (inst_22196 + (1));
var inst_22196__$1 = inst_22207;
var state_22219__$1 = (function (){var statearr_22230 = state_22219;
(statearr_22230[(10)] = inst_22206);

(statearr_22230[(8)] = inst_22196__$1);

return statearr_22230;
})();
var statearr_22231_22250 = state_22219__$1;
(statearr_22231_22250[(2)] = null);

(statearr_22231_22250[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (9))){
var state_22219__$1 = state_22219;
var statearr_22232_22251 = state_22219__$1;
(statearr_22232_22251[(2)] = null);

(statearr_22232_22251[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (5))){
var state_22219__$1 = state_22219;
var statearr_22233_22252 = state_22219__$1;
(statearr_22233_22252[(2)] = null);

(statearr_22233_22252[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (10))){
var inst_22211 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22234_22253 = state_22219__$1;
(statearr_22234_22253[(2)] = inst_22211);

(statearr_22234_22253[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22220 === (8))){
var inst_22201 = (state_22219[(7)]);
var state_22219__$1 = state_22219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22219__$1,(11),out,inst_22201);
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
});})(c__12927__auto___22243,out))
;
return ((function (switch__12849__auto__,c__12927__auto___22243,out){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_22238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22238[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_22238[(1)] = (1));

return statearr_22238;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_22219){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22219);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22239){if((e22239 instanceof Object)){
var ex__12853__auto__ = e22239;
var statearr_22240_22254 = state_22219;
(statearr_22240_22254[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22219);

return cljs.core.constant$keyword$recur;
} else {
throw e22239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22255 = state_22219;
state_22219 = G__22255;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_22219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_22219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___22243,out))
})();
var state__12929__auto__ = (function (){var statearr_22241 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___22243);

return statearr_22241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___22243,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t22268 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22268 = (function (ch,f,map_LT_,meta22269){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22269 = meta22269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22268.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t22268.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t22271 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22271 = (function (fn1,_,meta22269,map_LT_,f,ch,meta22272){
this.fn1 = fn1;
this._ = _;
this.meta22269 = meta22269;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22272 = meta22272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t22271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22256_SHARP_){
var G__22274 = (((p1__22256_SHARP_ == null))?null:(function (){var G__22275 = p1__22256_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22275) : self__.f.call(null,G__22275));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22274) : f1.call(null,G__22274));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22273){
var self__ = this;
var _22273__$1 = this;
return self__.meta22272;
});})(___$1))
;

cljs.core.async.t22271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22273,meta22272__$1){
var self__ = this;
var _22273__$1 = this;
return (new cljs.core.async.t22271(self__.fn1,self__._,self__.meta22269,self__.map_LT_,self__.f,self__.ch,meta22272__$1));
});})(___$1))
;

cljs.core.async.t22271.cljs$lang$type = true;

cljs.core.async.t22271.cljs$lang$ctorStr = "cljs.core.async/t22271";

cljs.core.async.t22271.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t22271");
});})(___$1))
;

cljs.core.async.__GT_t22271 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t22271(fn1__$1,___$2,meta22269__$1,map_LT___$1,f__$1,ch__$1,meta22272){
return (new cljs.core.async.t22271(fn1__$1,___$2,meta22269__$1,map_LT___$1,f__$1,ch__$1,meta22272));
});})(___$1))
;

}

return (new cljs.core.async.t22271(fn1,___$1,self__.meta22269,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4087__auto__ = ret;
if(cljs.core.truth_(and__4087__auto__)){
return !(((function (){var G__22276 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22276) : cljs.core.deref.call(null,G__22276));
})() == null));
} else {
return and__4087__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22277 = (function (){var G__22278 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22278) : cljs.core.deref.call(null,G__22278));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22277) : self__.f.call(null,G__22277));
})());
} else {
return ret;
}
});

cljs.core.async.t22268.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t22268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t22268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22270){
var self__ = this;
var _22270__$1 = this;
return self__.meta22269;
});

cljs.core.async.t22268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22270,meta22269__$1){
var self__ = this;
var _22270__$1 = this;
return (new cljs.core.async.t22268(self__.ch,self__.f,self__.map_LT_,meta22269__$1));
});

cljs.core.async.t22268.cljs$lang$type = true;

cljs.core.async.t22268.cljs$lang$ctorStr = "cljs.core.async/t22268";

cljs.core.async.t22268.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t22268");
});

cljs.core.async.__GT_t22268 = (function cljs$core$async$map_LT__$___GT_t22268(ch__$1,f__$1,map_LT___$1,meta22269){
return (new cljs.core.async.t22268(ch__$1,f__$1,map_LT___$1,meta22269));
});

}

return (new cljs.core.async.t22268(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t22283 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22283 = (function (ch,f,map_GT_,meta22284){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22284 = meta22284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22283.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__22286 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22286) : self__.f.call(null,G__22286));
})(),fn1);
});

cljs.core.async.t22283.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t22283.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t22283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22285){
var self__ = this;
var _22285__$1 = this;
return self__.meta22284;
});

cljs.core.async.t22283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22285,meta22284__$1){
var self__ = this;
var _22285__$1 = this;
return (new cljs.core.async.t22283(self__.ch,self__.f,self__.map_GT_,meta22284__$1));
});

cljs.core.async.t22283.cljs$lang$type = true;

cljs.core.async.t22283.cljs$lang$ctorStr = "cljs.core.async/t22283";

cljs.core.async.t22283.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t22283");
});

cljs.core.async.__GT_t22283 = (function cljs$core$async$map_GT__$___GT_t22283(ch__$1,f__$1,map_GT___$1,meta22284){
return (new cljs.core.async.t22283(ch__$1,f__$1,map_GT___$1,meta22284));
});

}

return (new cljs.core.async.t22283(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t22291 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22291 = (function (ch,p,filter_GT_,meta22292){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22292 = meta22292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__22294 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__22294) : self__.p.call(null,G__22294));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t22291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t22291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t22291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t22291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22293){
var self__ = this;
var _22293__$1 = this;
return self__.meta22292;
});

cljs.core.async.t22291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22293,meta22292__$1){
var self__ = this;
var _22293__$1 = this;
return (new cljs.core.async.t22291(self__.ch,self__.p,self__.filter_GT_,meta22292__$1));
});

cljs.core.async.t22291.cljs$lang$type = true;

cljs.core.async.t22291.cljs$lang$ctorStr = "cljs.core.async/t22291";

cljs.core.async.t22291.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async/t22291");
});

cljs.core.async.__GT_t22291 = (function cljs$core$async$filter_GT__$___GT_t22291(ch__$1,p__$1,filter_GT___$1,meta22292){
return (new cljs.core.async.t22291(ch__$1,p__$1,filter_GT___$1,meta22292));
});

}

return (new cljs.core.async.t22291(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__22296 = arguments.length;
switch (G__22296) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12927__auto___22340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___22340,out){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___22340,out){
return (function (state_22317){
var state_val_22318 = (state_22317[(1)]);
if((state_val_22318 === (7))){
var inst_22313 = (state_22317[(2)]);
var state_22317__$1 = state_22317;
var statearr_22319_22341 = state_22317__$1;
(statearr_22319_22341[(2)] = inst_22313);

(statearr_22319_22341[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (1))){
var state_22317__$1 = state_22317;
var statearr_22320_22342 = state_22317__$1;
(statearr_22320_22342[(2)] = null);

(statearr_22320_22342[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (4))){
var inst_22299 = (state_22317[(7)]);
var inst_22299__$1 = (state_22317[(2)]);
var inst_22300 = (inst_22299__$1 == null);
var state_22317__$1 = (function (){var statearr_22321 = state_22317;
(statearr_22321[(7)] = inst_22299__$1);

return statearr_22321;
})();
if(cljs.core.truth_(inst_22300)){
var statearr_22322_22343 = state_22317__$1;
(statearr_22322_22343[(1)] = (5));

} else {
var statearr_22323_22344 = state_22317__$1;
(statearr_22323_22344[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (6))){
var inst_22299 = (state_22317[(7)]);
var inst_22304 = (function (){var G__22324 = inst_22299;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22324) : p.call(null,G__22324));
})();
var state_22317__$1 = state_22317;
if(cljs.core.truth_(inst_22304)){
var statearr_22325_22345 = state_22317__$1;
(statearr_22325_22345[(1)] = (8));

} else {
var statearr_22326_22346 = state_22317__$1;
(statearr_22326_22346[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (3))){
var inst_22315 = (state_22317[(2)]);
var state_22317__$1 = state_22317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22317__$1,inst_22315);
} else {
if((state_val_22318 === (2))){
var state_22317__$1 = state_22317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22317__$1,(4),ch);
} else {
if((state_val_22318 === (11))){
var inst_22307 = (state_22317[(2)]);
var state_22317__$1 = state_22317;
var statearr_22327_22347 = state_22317__$1;
(statearr_22327_22347[(2)] = inst_22307);

(statearr_22327_22347[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (9))){
var state_22317__$1 = state_22317;
var statearr_22328_22348 = state_22317__$1;
(statearr_22328_22348[(2)] = null);

(statearr_22328_22348[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (5))){
var inst_22302 = cljs.core.async.close_BANG_(out);
var state_22317__$1 = state_22317;
var statearr_22329_22349 = state_22317__$1;
(statearr_22329_22349[(2)] = inst_22302);

(statearr_22329_22349[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (10))){
var inst_22310 = (state_22317[(2)]);
var state_22317__$1 = (function (){var statearr_22330 = state_22317;
(statearr_22330[(8)] = inst_22310);

return statearr_22330;
})();
var statearr_22331_22350 = state_22317__$1;
(statearr_22331_22350[(2)] = null);

(statearr_22331_22350[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22318 === (8))){
var inst_22299 = (state_22317[(7)]);
var state_22317__$1 = state_22317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22317__$1,(11),out,inst_22299);
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
});})(c__12927__auto___22340,out))
;
return ((function (switch__12849__auto__,c__12927__auto___22340,out){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_22335 = [null,null,null,null,null,null,null,null,null];
(statearr_22335[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_22335[(1)] = (1));

return statearr_22335;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_22317){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22317);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22336){if((e22336 instanceof Object)){
var ex__12853__auto__ = e22336;
var statearr_22337_22351 = state_22317;
(statearr_22337_22351[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22317);

return cljs.core.constant$keyword$recur;
} else {
throw e22336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22352 = state_22317;
state_22317 = G__22352;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_22317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_22317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___22340,out))
})();
var state__12929__auto__ = (function (){var statearr_22338 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___22340);

return statearr_22338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___22340,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__22354 = arguments.length;
switch (G__22354) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__){
return (function (state_22522){
var state_val_22523 = (state_22522[(1)]);
if((state_val_22523 === (7))){
var inst_22518 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22524_22566 = state_22522__$1;
(statearr_22524_22566[(2)] = inst_22518);

(statearr_22524_22566[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (20))){
var inst_22488 = (state_22522[(7)]);
var inst_22499 = (state_22522[(2)]);
var inst_22500 = cljs.core.next(inst_22488);
var inst_22474 = inst_22500;
var inst_22475 = null;
var inst_22476 = (0);
var inst_22477 = (0);
var state_22522__$1 = (function (){var statearr_22525 = state_22522;
(statearr_22525[(8)] = inst_22477);

(statearr_22525[(9)] = inst_22499);

(statearr_22525[(10)] = inst_22474);

(statearr_22525[(11)] = inst_22476);

(statearr_22525[(12)] = inst_22475);

return statearr_22525;
})();
var statearr_22526_22567 = state_22522__$1;
(statearr_22526_22567[(2)] = null);

(statearr_22526_22567[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (1))){
var state_22522__$1 = state_22522;
var statearr_22527_22568 = state_22522__$1;
(statearr_22527_22568[(2)] = null);

(statearr_22527_22568[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (4))){
var inst_22463 = (state_22522[(13)]);
var inst_22463__$1 = (state_22522[(2)]);
var inst_22464 = (inst_22463__$1 == null);
var state_22522__$1 = (function (){var statearr_22528 = state_22522;
(statearr_22528[(13)] = inst_22463__$1);

return statearr_22528;
})();
if(cljs.core.truth_(inst_22464)){
var statearr_22529_22569 = state_22522__$1;
(statearr_22529_22569[(1)] = (5));

} else {
var statearr_22530_22570 = state_22522__$1;
(statearr_22530_22570[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (15))){
var state_22522__$1 = state_22522;
var statearr_22534_22571 = state_22522__$1;
(statearr_22534_22571[(2)] = null);

(statearr_22534_22571[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (21))){
var state_22522__$1 = state_22522;
var statearr_22535_22572 = state_22522__$1;
(statearr_22535_22572[(2)] = null);

(statearr_22535_22572[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (13))){
var inst_22477 = (state_22522[(8)]);
var inst_22474 = (state_22522[(10)]);
var inst_22476 = (state_22522[(11)]);
var inst_22475 = (state_22522[(12)]);
var inst_22484 = (state_22522[(2)]);
var inst_22485 = (inst_22477 + (1));
var tmp22531 = inst_22474;
var tmp22532 = inst_22476;
var tmp22533 = inst_22475;
var inst_22474__$1 = tmp22531;
var inst_22475__$1 = tmp22533;
var inst_22476__$1 = tmp22532;
var inst_22477__$1 = inst_22485;
var state_22522__$1 = (function (){var statearr_22536 = state_22522;
(statearr_22536[(8)] = inst_22477__$1);

(statearr_22536[(10)] = inst_22474__$1);

(statearr_22536[(11)] = inst_22476__$1);

(statearr_22536[(12)] = inst_22475__$1);

(statearr_22536[(14)] = inst_22484);

return statearr_22536;
})();
var statearr_22537_22573 = state_22522__$1;
(statearr_22537_22573[(2)] = null);

(statearr_22537_22573[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (22))){
var state_22522__$1 = state_22522;
var statearr_22538_22574 = state_22522__$1;
(statearr_22538_22574[(2)] = null);

(statearr_22538_22574[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (6))){
var inst_22463 = (state_22522[(13)]);
var inst_22472 = (function (){var G__22539 = inst_22463;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22539) : f.call(null,G__22539));
})();
var inst_22473 = cljs.core.seq(inst_22472);
var inst_22474 = inst_22473;
var inst_22475 = null;
var inst_22476 = (0);
var inst_22477 = (0);
var state_22522__$1 = (function (){var statearr_22540 = state_22522;
(statearr_22540[(8)] = inst_22477);

(statearr_22540[(10)] = inst_22474);

(statearr_22540[(11)] = inst_22476);

(statearr_22540[(12)] = inst_22475);

return statearr_22540;
})();
var statearr_22541_22575 = state_22522__$1;
(statearr_22541_22575[(2)] = null);

(statearr_22541_22575[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (17))){
var inst_22488 = (state_22522[(7)]);
var inst_22492 = cljs.core.chunk_first(inst_22488);
var inst_22493 = cljs.core.chunk_rest(inst_22488);
var inst_22494 = cljs.core.count(inst_22492);
var inst_22474 = inst_22493;
var inst_22475 = inst_22492;
var inst_22476 = inst_22494;
var inst_22477 = (0);
var state_22522__$1 = (function (){var statearr_22542 = state_22522;
(statearr_22542[(8)] = inst_22477);

(statearr_22542[(10)] = inst_22474);

(statearr_22542[(11)] = inst_22476);

(statearr_22542[(12)] = inst_22475);

return statearr_22542;
})();
var statearr_22543_22576 = state_22522__$1;
(statearr_22543_22576[(2)] = null);

(statearr_22543_22576[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (3))){
var inst_22520 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22522__$1,inst_22520);
} else {
if((state_val_22523 === (12))){
var inst_22508 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22544_22577 = state_22522__$1;
(statearr_22544_22577[(2)] = inst_22508);

(statearr_22544_22577[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (2))){
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22522__$1,(4),in$);
} else {
if((state_val_22523 === (23))){
var inst_22516 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22545_22578 = state_22522__$1;
(statearr_22545_22578[(2)] = inst_22516);

(statearr_22545_22578[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (19))){
var inst_22503 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22546_22579 = state_22522__$1;
(statearr_22546_22579[(2)] = inst_22503);

(statearr_22546_22579[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (11))){
var inst_22474 = (state_22522[(10)]);
var inst_22488 = (state_22522[(7)]);
var inst_22488__$1 = cljs.core.seq(inst_22474);
var state_22522__$1 = (function (){var statearr_22547 = state_22522;
(statearr_22547[(7)] = inst_22488__$1);

return statearr_22547;
})();
if(inst_22488__$1){
var statearr_22548_22580 = state_22522__$1;
(statearr_22548_22580[(1)] = (14));

} else {
var statearr_22549_22581 = state_22522__$1;
(statearr_22549_22581[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (9))){
var inst_22510 = (state_22522[(2)]);
var inst_22511 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22522__$1 = (function (){var statearr_22550 = state_22522;
(statearr_22550[(15)] = inst_22510);

return statearr_22550;
})();
if(cljs.core.truth_(inst_22511)){
var statearr_22551_22582 = state_22522__$1;
(statearr_22551_22582[(1)] = (21));

} else {
var statearr_22552_22583 = state_22522__$1;
(statearr_22552_22583[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (5))){
var inst_22466 = cljs.core.async.close_BANG_(out);
var state_22522__$1 = state_22522;
var statearr_22553_22584 = state_22522__$1;
(statearr_22553_22584[(2)] = inst_22466);

(statearr_22553_22584[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (14))){
var inst_22488 = (state_22522[(7)]);
var inst_22490 = cljs.core.chunked_seq_QMARK_(inst_22488);
var state_22522__$1 = state_22522;
if(inst_22490){
var statearr_22554_22585 = state_22522__$1;
(statearr_22554_22585[(1)] = (17));

} else {
var statearr_22555_22586 = state_22522__$1;
(statearr_22555_22586[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (16))){
var inst_22506 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22556_22587 = state_22522__$1;
(statearr_22556_22587[(2)] = inst_22506);

(statearr_22556_22587[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22523 === (10))){
var inst_22477 = (state_22522[(8)]);
var inst_22475 = (state_22522[(12)]);
var inst_22482 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22475,inst_22477);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22522__$1,(13),out,inst_22482);
} else {
if((state_val_22523 === (18))){
var inst_22488 = (state_22522[(7)]);
var inst_22497 = cljs.core.first(inst_22488);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22522__$1,(20),out,inst_22497);
} else {
if((state_val_22523 === (8))){
var inst_22477 = (state_22522[(8)]);
var inst_22476 = (state_22522[(11)]);
var inst_22479 = (inst_22477 < inst_22476);
var inst_22480 = inst_22479;
var state_22522__$1 = state_22522;
if(cljs.core.truth_(inst_22480)){
var statearr_22557_22588 = state_22522__$1;
(statearr_22557_22588[(1)] = (10));

} else {
var statearr_22558_22589 = state_22522__$1;
(statearr_22558_22589[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto__))
;
return ((function (switch__12849__auto__,c__12927__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12850__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12850__auto____0 = (function (){
var statearr_22562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22562[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12850__auto__);

(statearr_22562[(1)] = (1));

return statearr_22562;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12850__auto____1 = (function (state_22522){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22522);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22563){if((e22563 instanceof Object)){
var ex__12853__auto__ = e22563;
var statearr_22564_22590 = state_22522;
(statearr_22564_22590[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22522);

return cljs.core.constant$keyword$recur;
} else {
throw e22563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22591 = state_22522;
state_22522 = G__22591;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12850__auto__ = function(state_22522){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12850__auto____1.call(this,state_22522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12850__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12850__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__))
})();
var state__12929__auto__ = (function (){var statearr_22565 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_22565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__))
);

return c__12927__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__22593 = arguments.length;
switch (G__22593) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__22596 = arguments.length;
switch (G__22596) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__22599 = arguments.length;
switch (G__22599) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12927__auto___22649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___22649,out){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___22649,out){
return (function (state_22623){
var state_val_22624 = (state_22623[(1)]);
if((state_val_22624 === (7))){
var inst_22618 = (state_22623[(2)]);
var state_22623__$1 = state_22623;
var statearr_22625_22650 = state_22623__$1;
(statearr_22625_22650[(2)] = inst_22618);

(statearr_22625_22650[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22624 === (1))){
var inst_22600 = null;
var state_22623__$1 = (function (){var statearr_22626 = state_22623;
(statearr_22626[(7)] = inst_22600);

return statearr_22626;
})();
var statearr_22627_22651 = state_22623__$1;
(statearr_22627_22651[(2)] = null);

(statearr_22627_22651[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22624 === (4))){
var inst_22603 = (state_22623[(8)]);
var inst_22603__$1 = (state_22623[(2)]);
var inst_22604 = (inst_22603__$1 == null);
var inst_22605 = cljs.core.not(inst_22604);
var state_22623__$1 = (function (){var statearr_22628 = state_22623;
(statearr_22628[(8)] = inst_22603__$1);

return statearr_22628;
})();
if(inst_22605){
var statearr_22629_22652 = state_22623__$1;
(statearr_22629_22652[(1)] = (5));

} else {
var statearr_22630_22653 = state_22623__$1;
(statearr_22630_22653[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22624 === (6))){
var state_22623__$1 = state_22623;
var statearr_22631_22654 = state_22623__$1;
(statearr_22631_22654[(2)] = null);

(statearr_22631_22654[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22624 === (3))){
var inst_22620 = (state_22623[(2)]);
var inst_22621 = cljs.core.async.close_BANG_(out);
var state_22623__$1 = (function (){var statearr_22632 = state_22623;
(statearr_22632[(9)] = inst_22620);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22623__$1,inst_22621);
} else {
if((state_val_22624 === (2))){
var state_22623__$1 = state_22623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22623__$1,(4),ch);
} else {
if((state_val_22624 === (11))){
var inst_22603 = (state_22623[(8)]);
var inst_22612 = (state_22623[(2)]);
var inst_22600 = inst_22603;
var state_22623__$1 = (function (){var statearr_22633 = state_22623;
(statearr_22633[(10)] = inst_22612);

(statearr_22633[(7)] = inst_22600);

return statearr_22633;
})();
var statearr_22634_22655 = state_22623__$1;
(statearr_22634_22655[(2)] = null);

(statearr_22634_22655[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22624 === (9))){
var inst_22603 = (state_22623[(8)]);
var state_22623__$1 = state_22623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22623__$1,(11),out,inst_22603);
} else {
if((state_val_22624 === (5))){
var inst_22600 = (state_22623[(7)]);
var inst_22603 = (state_22623[(8)]);
var inst_22607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22603,inst_22600);
var state_22623__$1 = state_22623;
if(inst_22607){
var statearr_22636_22656 = state_22623__$1;
(statearr_22636_22656[(1)] = (8));

} else {
var statearr_22637_22657 = state_22623__$1;
(statearr_22637_22657[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22624 === (10))){
var inst_22615 = (state_22623[(2)]);
var state_22623__$1 = state_22623;
var statearr_22638_22658 = state_22623__$1;
(statearr_22638_22658[(2)] = inst_22615);

(statearr_22638_22658[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22624 === (8))){
var inst_22600 = (state_22623[(7)]);
var tmp22635 = inst_22600;
var inst_22600__$1 = tmp22635;
var state_22623__$1 = (function (){var statearr_22639 = state_22623;
(statearr_22639[(7)] = inst_22600__$1);

return statearr_22639;
})();
var statearr_22640_22659 = state_22623__$1;
(statearr_22640_22659[(2)] = null);

(statearr_22640_22659[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___22649,out))
;
return ((function (switch__12849__auto__,c__12927__auto___22649,out){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_22644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22644[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_22644[(1)] = (1));

return statearr_22644;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_22623){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22623);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22645){if((e22645 instanceof Object)){
var ex__12853__auto__ = e22645;
var statearr_22646_22660 = state_22623;
(statearr_22646_22660[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22623);

return cljs.core.constant$keyword$recur;
} else {
throw e22645;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22661 = state_22623;
state_22623 = G__22661;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_22623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_22623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___22649,out))
})();
var state__12929__auto__ = (function (){var statearr_22647 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___22649);

return statearr_22647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___22649,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__22663 = arguments.length;
switch (G__22663) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12927__auto___22732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___22732,out){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___22732,out){
return (function (state_22701){
var state_val_22702 = (state_22701[(1)]);
if((state_val_22702 === (7))){
var inst_22697 = (state_22701[(2)]);
var state_22701__$1 = state_22701;
var statearr_22703_22733 = state_22701__$1;
(statearr_22703_22733[(2)] = inst_22697);

(statearr_22703_22733[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (1))){
var inst_22664 = (new Array(n));
var inst_22665 = inst_22664;
var inst_22666 = (0);
var state_22701__$1 = (function (){var statearr_22704 = state_22701;
(statearr_22704[(7)] = inst_22665);

(statearr_22704[(8)] = inst_22666);

return statearr_22704;
})();
var statearr_22705_22734 = state_22701__$1;
(statearr_22705_22734[(2)] = null);

(statearr_22705_22734[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (4))){
var inst_22669 = (state_22701[(9)]);
var inst_22669__$1 = (state_22701[(2)]);
var inst_22670 = (inst_22669__$1 == null);
var inst_22671 = cljs.core.not(inst_22670);
var state_22701__$1 = (function (){var statearr_22706 = state_22701;
(statearr_22706[(9)] = inst_22669__$1);

return statearr_22706;
})();
if(inst_22671){
var statearr_22707_22735 = state_22701__$1;
(statearr_22707_22735[(1)] = (5));

} else {
var statearr_22708_22736 = state_22701__$1;
(statearr_22708_22736[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (15))){
var inst_22691 = (state_22701[(2)]);
var state_22701__$1 = state_22701;
var statearr_22709_22737 = state_22701__$1;
(statearr_22709_22737[(2)] = inst_22691);

(statearr_22709_22737[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (13))){
var state_22701__$1 = state_22701;
var statearr_22710_22738 = state_22701__$1;
(statearr_22710_22738[(2)] = null);

(statearr_22710_22738[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (6))){
var inst_22666 = (state_22701[(8)]);
var inst_22687 = (inst_22666 > (0));
var state_22701__$1 = state_22701;
if(cljs.core.truth_(inst_22687)){
var statearr_22711_22739 = state_22701__$1;
(statearr_22711_22739[(1)] = (12));

} else {
var statearr_22712_22740 = state_22701__$1;
(statearr_22712_22740[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (3))){
var inst_22699 = (state_22701[(2)]);
var state_22701__$1 = state_22701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22701__$1,inst_22699);
} else {
if((state_val_22702 === (12))){
var inst_22665 = (state_22701[(7)]);
var inst_22689 = cljs.core.vec(inst_22665);
var state_22701__$1 = state_22701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22701__$1,(15),out,inst_22689);
} else {
if((state_val_22702 === (2))){
var state_22701__$1 = state_22701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22701__$1,(4),ch);
} else {
if((state_val_22702 === (11))){
var inst_22681 = (state_22701[(2)]);
var inst_22682 = (new Array(n));
var inst_22665 = inst_22682;
var inst_22666 = (0);
var state_22701__$1 = (function (){var statearr_22713 = state_22701;
(statearr_22713[(7)] = inst_22665);

(statearr_22713[(8)] = inst_22666);

(statearr_22713[(10)] = inst_22681);

return statearr_22713;
})();
var statearr_22714_22741 = state_22701__$1;
(statearr_22714_22741[(2)] = null);

(statearr_22714_22741[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (9))){
var inst_22665 = (state_22701[(7)]);
var inst_22679 = cljs.core.vec(inst_22665);
var state_22701__$1 = state_22701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22701__$1,(11),out,inst_22679);
} else {
if((state_val_22702 === (5))){
var inst_22674 = (state_22701[(11)]);
var inst_22669 = (state_22701[(9)]);
var inst_22665 = (state_22701[(7)]);
var inst_22666 = (state_22701[(8)]);
var inst_22673 = (inst_22665[inst_22666] = inst_22669);
var inst_22674__$1 = (inst_22666 + (1));
var inst_22675 = (inst_22674__$1 < n);
var state_22701__$1 = (function (){var statearr_22715 = state_22701;
(statearr_22715[(12)] = inst_22673);

(statearr_22715[(11)] = inst_22674__$1);

return statearr_22715;
})();
if(cljs.core.truth_(inst_22675)){
var statearr_22716_22742 = state_22701__$1;
(statearr_22716_22742[(1)] = (8));

} else {
var statearr_22717_22743 = state_22701__$1;
(statearr_22717_22743[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (14))){
var inst_22694 = (state_22701[(2)]);
var inst_22695 = cljs.core.async.close_BANG_(out);
var state_22701__$1 = (function (){var statearr_22719 = state_22701;
(statearr_22719[(13)] = inst_22694);

return statearr_22719;
})();
var statearr_22720_22744 = state_22701__$1;
(statearr_22720_22744[(2)] = inst_22695);

(statearr_22720_22744[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (10))){
var inst_22685 = (state_22701[(2)]);
var state_22701__$1 = state_22701;
var statearr_22721_22745 = state_22701__$1;
(statearr_22721_22745[(2)] = inst_22685);

(statearr_22721_22745[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22702 === (8))){
var inst_22674 = (state_22701[(11)]);
var inst_22665 = (state_22701[(7)]);
var tmp22718 = inst_22665;
var inst_22665__$1 = tmp22718;
var inst_22666 = inst_22674;
var state_22701__$1 = (function (){var statearr_22722 = state_22701;
(statearr_22722[(7)] = inst_22665__$1);

(statearr_22722[(8)] = inst_22666);

return statearr_22722;
})();
var statearr_22723_22746 = state_22701__$1;
(statearr_22723_22746[(2)] = null);

(statearr_22723_22746[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___22732,out))
;
return ((function (switch__12849__auto__,c__12927__auto___22732,out){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_22727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22727[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_22727[(1)] = (1));

return statearr_22727;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_22701){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22701);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22728){if((e22728 instanceof Object)){
var ex__12853__auto__ = e22728;
var statearr_22729_22747 = state_22701;
(statearr_22729_22747[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22701);

return cljs.core.constant$keyword$recur;
} else {
throw e22728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22748 = state_22701;
state_22701 = G__22748;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_22701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_22701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___22732,out))
})();
var state__12929__auto__ = (function (){var statearr_22730 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___22732);

return statearr_22730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___22732,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__22750 = arguments.length;
switch (G__22750) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12927__auto___22824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___22824,out){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___22824,out){
return (function (state_22792){
var state_val_22793 = (state_22792[(1)]);
if((state_val_22793 === (7))){
var inst_22788 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22794_22825 = state_22792__$1;
(statearr_22794_22825[(2)] = inst_22788);

(statearr_22794_22825[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (1))){
var inst_22751 = [];
var inst_22752 = inst_22751;
var inst_22753 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_22792__$1 = (function (){var statearr_22795 = state_22792;
(statearr_22795[(7)] = inst_22752);

(statearr_22795[(8)] = inst_22753);

return statearr_22795;
})();
var statearr_22796_22826 = state_22792__$1;
(statearr_22796_22826[(2)] = null);

(statearr_22796_22826[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (4))){
var inst_22756 = (state_22792[(9)]);
var inst_22756__$1 = (state_22792[(2)]);
var inst_22757 = (inst_22756__$1 == null);
var inst_22758 = cljs.core.not(inst_22757);
var state_22792__$1 = (function (){var statearr_22797 = state_22792;
(statearr_22797[(9)] = inst_22756__$1);

return statearr_22797;
})();
if(inst_22758){
var statearr_22798_22827 = state_22792__$1;
(statearr_22798_22827[(1)] = (5));

} else {
var statearr_22799_22828 = state_22792__$1;
(statearr_22799_22828[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (15))){
var inst_22782 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22800_22829 = state_22792__$1;
(statearr_22800_22829[(2)] = inst_22782);

(statearr_22800_22829[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (13))){
var state_22792__$1 = state_22792;
var statearr_22801_22830 = state_22792__$1;
(statearr_22801_22830[(2)] = null);

(statearr_22801_22830[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (6))){
var inst_22752 = (state_22792[(7)]);
var inst_22777 = inst_22752.length;
var inst_22778 = (inst_22777 > (0));
var state_22792__$1 = state_22792;
if(cljs.core.truth_(inst_22778)){
var statearr_22802_22831 = state_22792__$1;
(statearr_22802_22831[(1)] = (12));

} else {
var statearr_22803_22832 = state_22792__$1;
(statearr_22803_22832[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (3))){
var inst_22790 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22792__$1,inst_22790);
} else {
if((state_val_22793 === (12))){
var inst_22752 = (state_22792[(7)]);
var inst_22780 = cljs.core.vec(inst_22752);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22792__$1,(15),out,inst_22780);
} else {
if((state_val_22793 === (2))){
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22792__$1,(4),ch);
} else {
if((state_val_22793 === (11))){
var inst_22760 = (state_22792[(10)]);
var inst_22756 = (state_22792[(9)]);
var inst_22770 = (state_22792[(2)]);
var inst_22771 = [];
var inst_22772 = inst_22771.push(inst_22756);
var inst_22752 = inst_22771;
var inst_22753 = inst_22760;
var state_22792__$1 = (function (){var statearr_22804 = state_22792;
(statearr_22804[(7)] = inst_22752);

(statearr_22804[(8)] = inst_22753);

(statearr_22804[(11)] = inst_22772);

(statearr_22804[(12)] = inst_22770);

return statearr_22804;
})();
var statearr_22805_22833 = state_22792__$1;
(statearr_22805_22833[(2)] = null);

(statearr_22805_22833[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (9))){
var inst_22752 = (state_22792[(7)]);
var inst_22768 = cljs.core.vec(inst_22752);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22792__$1,(11),out,inst_22768);
} else {
if((state_val_22793 === (5))){
var inst_22760 = (state_22792[(10)]);
var inst_22753 = (state_22792[(8)]);
var inst_22756 = (state_22792[(9)]);
var inst_22760__$1 = (function (){var G__22806 = inst_22756;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22806) : f.call(null,G__22806));
})();
var inst_22761 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22760__$1,inst_22753);
var inst_22762 = cljs.core.keyword_identical_QMARK_(inst_22753,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_22763 = (inst_22761) || (inst_22762);
var state_22792__$1 = (function (){var statearr_22807 = state_22792;
(statearr_22807[(10)] = inst_22760__$1);

return statearr_22807;
})();
if(cljs.core.truth_(inst_22763)){
var statearr_22808_22834 = state_22792__$1;
(statearr_22808_22834[(1)] = (8));

} else {
var statearr_22809_22835 = state_22792__$1;
(statearr_22809_22835[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (14))){
var inst_22785 = (state_22792[(2)]);
var inst_22786 = cljs.core.async.close_BANG_(out);
var state_22792__$1 = (function (){var statearr_22811 = state_22792;
(statearr_22811[(13)] = inst_22785);

return statearr_22811;
})();
var statearr_22812_22836 = state_22792__$1;
(statearr_22812_22836[(2)] = inst_22786);

(statearr_22812_22836[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (10))){
var inst_22775 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22813_22837 = state_22792__$1;
(statearr_22813_22837[(2)] = inst_22775);

(statearr_22813_22837[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22793 === (8))){
var inst_22760 = (state_22792[(10)]);
var inst_22752 = (state_22792[(7)]);
var inst_22756 = (state_22792[(9)]);
var inst_22765 = inst_22752.push(inst_22756);
var tmp22810 = inst_22752;
var inst_22752__$1 = tmp22810;
var inst_22753 = inst_22760;
var state_22792__$1 = (function (){var statearr_22814 = state_22792;
(statearr_22814[(7)] = inst_22752__$1);

(statearr_22814[(8)] = inst_22753);

(statearr_22814[(14)] = inst_22765);

return statearr_22814;
})();
var statearr_22815_22838 = state_22792__$1;
(statearr_22815_22838[(2)] = null);

(statearr_22815_22838[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto___22824,out))
;
return ((function (switch__12849__auto__,c__12927__auto___22824,out){
return (function() {
var cljs$core$async$state_machine__12850__auto__ = null;
var cljs$core$async$state_machine__12850__auto____0 = (function (){
var statearr_22819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22819[(0)] = cljs$core$async$state_machine__12850__auto__);

(statearr_22819[(1)] = (1));

return statearr_22819;
});
var cljs$core$async$state_machine__12850__auto____1 = (function (state_22792){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_22792);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e22820){if((e22820 instanceof Object)){
var ex__12853__auto__ = e22820;
var statearr_22821_22839 = state_22792;
(statearr_22821_22839[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22792);

return cljs.core.constant$keyword$recur;
} else {
throw e22820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__22840 = state_22792;
state_22792 = G__22840;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
cljs$core$async$state_machine__12850__auto__ = function(state_22792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12850__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12850__auto____1.call(this,state_22792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12850__auto____0;
cljs$core$async$state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12850__auto____1;
return cljs$core$async$state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___22824,out))
})();
var state__12929__auto__ = (function (){var statearr_22822 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_22822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___22824);

return statearr_22822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___22824,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

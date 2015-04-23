// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t23011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t23011 = (function (val,box,meta23012){
this.val = val;
this.box = box;
this.meta23012 = meta23012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t23011.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t23011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23013){
var self__ = this;
var _23013__$1 = this;
return self__.meta23012;
});

cljs.core.async.impl.channels.t23011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23013,meta23012__$1){
var self__ = this;
var _23013__$1 = this;
return (new cljs.core.async.impl.channels.t23011(self__.val,self__.box,meta23012__$1));
});

cljs.core.async.impl.channels.t23011.cljs$lang$type = true;

cljs.core.async.impl.channels.t23011.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t23011";

cljs.core.async.impl.channels.t23011.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async.impl.channels/t23011");
});

cljs.core.async.impl.channels.__GT_t23011 = (function cljs$core$async$impl$channels$box_$___GT_t23011(val__$1,box__$1,meta23012){
return (new cljs.core.async.impl.channels.t23011(val__$1,box__$1,meta23012));
});

}

return (new cljs.core.async.impl.channels.t23011(val,cljs$core$async$impl$channels$box,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj23015 = {};
return obj23015;
})();

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__23019 = x__4735__auto__;
return goog.typeOf(G__23019);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__4087__auto__ = self__.buf;
if(cljs.core.truth_(and__4087__auto__)){
return (self__.puts.length === (0));
} else {
return and__4087__auto__;
}
})())){
var G__23020_23032 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__23020_23032) : self__.add_BANG_.call(null,G__23020_23032));
} else {
}

while(true){
var taker_23033 = self__.takes.pop();
if((taker_23033 == null)){
} else {
if(taker_23033.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_23034 = taker_23033.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_23035 = (cljs.core.truth_((function (){var and__4087__auto__ = self__.buf;
if(cljs.core.truth_(and__4087__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4087__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_23034,val_23035,taker_23033,this$__$1){
return (function (){
var G__23021 = val_23035;
return (take_cb_23034.cljs$core$IFn$_invoke$arity$1 ? take_cb_23034.cljs$core$IFn$_invoke$arity$1(G__23021) : take_cb_23034.call(null,G__23021));
});})(take_cb_23034,val_23035,taker_23033,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_23036 = self__.puts.pop();
if((putter_23036 == null)){
} else {
var put_handler_23037 = putter_23036.handler;
var val_23038 = putter_23036.val;
if(put_handler_23037.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_23039 = put_handler_23037.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_23039,put_handler_23037,val_23038,putter_23036,_,retval,this$__$1){
return (function (){
var G__23022 = true;
return (put_cb_23039.cljs$core$IFn$_invoke$arity$1 ? put_cb_23039.cljs$core$IFn$_invoke$arity$1(G__23022) : put_cb_23039.call(null,G__23022));
});})(put_cb_23039,put_handler_23037,val_23038,putter_23036,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__23023 = self__.buf;
var G__23024 = val_23038;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__23023,G__23024) : self__.add_BANG_.call(null,G__23023,G__23024));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__23025 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__23025) : put_cb.call(null,G__23025));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__23026_23040 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__23026_23040) : self__.add_BANG_.call(null,G__23026_23040));
} else {
}

if(cljs.core.truth_((function (){var and__4087__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4087__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4087__auto__;
}
})())){
var has_val = (function (){var and__4087__auto__ = self__.buf;
if(cljs.core.truth_(and__4087__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4087__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))], 0)))].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__4087__auto__ = self__.buf;
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4087__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__23027 = self__.buf;
var G__23028 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__23027,G__23028) : self__.add_BANG_.call(null,G__23027,G__23028));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_23041 = self__.takes.pop();
if(taker_23041.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_23042 = taker_23041.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_23043__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_23042,val_23043__$1,taker_23041,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__23029 = val_23043__$1;
return (take_cb_23042.cljs$core$IFn$_invoke$arity$1 ? take_cb_23042.cljs$core$IFn$_invoke$arity$1(G__23029) : take_cb_23042.call(null,G__23029));
});})(take_cb_23042,val_23043__$1,taker_23041,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__23030 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__23030) : take_cb.call(null,G__23030));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_23044 = self__.puts.pop();
if((putter_23044 == null)){
} else {
var put_handler_23045 = putter_23044.handler;
var val_23046 = putter_23044.val;
if(put_handler_23045.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_23047 = put_handler_23045.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_23047,put_handler_23045,val_23046,putter_23044,this$__$1){
return (function (){
var G__23031 = true;
return (put_cb_23047.cljs$core$IFn$_invoke$arity$1 ? put_cb_23047.cljs$core$IFn$_invoke$arity$1(G__23031) : put_cb_23047.call(null,G__23031));
});})(put_cb_23047,put_handler_23045,val_23046,putter_23044,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4099__auto__ = exh;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(){
var G__23049 = arguments.length;
switch (G__23049) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__23050 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__23050) : xform.call(null,G__23050));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__23057 = null;
var G__23057__1 = (function (buf__$1){
try{var G__23052 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__23052) : add_BANG_.call(null,G__23052));
}catch (e23051){var t = e23051;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__23057__2 = (function (buf__$1,val){
try{var G__23054 = buf__$1;
var G__23055 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__23054,G__23055) : add_BANG_.call(null,G__23054,G__23055));
}catch (e23053){var t = e23053;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__23057 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__23057__1.call(this,buf__$1);
case 2:
return G__23057__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23057.cljs$core$IFn$_invoke$arity$1 = G__23057__1;
G__23057.cljs$core$IFn$_invoke$arity$2 = G__23057__2;
return G__23057;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

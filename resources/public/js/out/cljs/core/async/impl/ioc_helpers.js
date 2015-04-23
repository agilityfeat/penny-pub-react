// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t22883 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t22883 = (function (f,fn_handler,meta22884){
this.f = f;
this.fn_handler = fn_handler;
this.meta22884 = meta22884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t22883.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t22883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t22883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t22883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22885){
var self__ = this;
var _22885__$1 = this;
return self__.meta22884;
});

cljs.core.async.impl.ioc_helpers.t22883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22885,meta22884__$1){
var self__ = this;
var _22885__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t22883(self__.f,self__.fn_handler,meta22884__$1));
});

cljs.core.async.impl.ioc_helpers.t22883.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t22883.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t22883";

cljs.core.async.impl.ioc_helpers.t22883.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.core.async.impl.ioc-helpers/t22883");
});

cljs.core.async.impl.ioc_helpers.__GT_t22883 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t22883(f__$1,fn_handler__$1,meta22884){
return (new cljs.core.async.impl.ioc_helpers.t22883(f__$1,fn_handler__$1,meta22884));
});

}

return (new cljs.core.async.impl.ioc_helpers.t22883(f,cljs$core$async$impl$ioc_helpers$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e22887){if((e22887 instanceof Object)){
var ex = e22887;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e22887;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_22891_22894 = state;
(statearr_22891_22894[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_22891_22894[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_22892_22895 = state;
(statearr_22892_22895[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22893 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22893) : cljs.core.deref.call(null,G__22893));
})());

(statearr_22892_22895[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_22899_22902 = state;
(statearr_22899_22902[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_22899_22902[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_22900_22903 = state;
(statearr_22900_22903[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22901 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22901) : cljs.core.deref.call(null,G__22901));
})());

(statearr_22900_22903[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4694__auto__,k__4695__auto__){
var self__ = this;
var this__4694__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4694__auto____$1,k__4695__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4696__auto__,k22905,else__4697__auto__){
var self__ = this;
var this__4696__auto____$1 = this;
var G__22907 = (((k22905 instanceof cljs.core.Keyword))?k22905.fqn:null);
switch (G__22907) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22905,else__4697__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4708__auto__,writer__4709__auto__,opts__4710__auto__){
var self__ = this;
var this__4708__auto____$1 = this;
var pr_pair__4711__auto__ = ((function (this__4708__auto____$1){
return (function (keyval__4712__auto__){
return cljs.core.pr_sequential_writer(writer__4709__auto__,cljs.core.pr_writer,""," ","",opts__4710__auto__,keyval__4712__auto__);
});})(this__4708__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4709__auto__,pr_pair__4711__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4710__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4692__auto__){
var self__ = this;
var this__4692__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4688__auto__){
var self__ = this;
var this__4688__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4698__auto__){
var self__ = this;
var this__4698__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4689__auto__){
var self__ = this;
var this__4689__auto____$1 = this;
var h__4515__auto__ = self__.__hash;
if(!((h__4515__auto__ == null))){
return h__4515__auto__;
} else {
var h__4515__auto____$1 = cljs.core.hash_imap(this__4689__auto____$1);
self__.__hash = h__4515__auto____$1;

return h__4515__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4690__auto__,other__4691__auto__){
var self__ = this;
var this__4690__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4087__auto__ = other__4691__auto__;
if(cljs.core.truth_(and__4087__auto__)){
var and__4087__auto____$1 = (this__4690__auto____$1.constructor === other__4691__auto__.constructor);
if(and__4087__auto____$1){
return cljs.core.equiv_map(this__4690__auto____$1,other__4691__auto__);
} else {
return and__4087__auto____$1;
}
} else {
return and__4087__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4703__auto__,k__4704__auto__){
var self__ = this;
var this__4703__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$finally_DASH_block,null,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.constant$keyword$catch_DASH_exception,null,cljs.core.constant$keyword$prev,null,cljs.core.constant$keyword$continue_DASH_block,null], null), null),k__4704__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4703__auto____$1),self__.__meta),k__4704__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4704__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4701__auto__,k__4702__auto__,G__22904){
var self__ = this;
var this__4701__auto____$1 = this;
var pred__22908 = cljs.core.keyword_identical_QMARK_;
var expr__22909 = k__4702__auto__;
if(cljs.core.truth_((function (){var G__22911 = cljs.core.constant$keyword$catch_DASH_block;
var G__22912 = expr__22909;
return (pred__22908.cljs$core$IFn$_invoke$arity$2 ? pred__22908.cljs$core$IFn$_invoke$arity$2(G__22911,G__22912) : pred__22908.call(null,G__22911,G__22912));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__22904,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22913 = cljs.core.constant$keyword$catch_DASH_exception;
var G__22914 = expr__22909;
return (pred__22908.cljs$core$IFn$_invoke$arity$2 ? pred__22908.cljs$core$IFn$_invoke$arity$2(G__22913,G__22914) : pred__22908.call(null,G__22913,G__22914));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__22904,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22915 = cljs.core.constant$keyword$finally_DASH_block;
var G__22916 = expr__22909;
return (pred__22908.cljs$core$IFn$_invoke$arity$2 ? pred__22908.cljs$core$IFn$_invoke$arity$2(G__22915,G__22916) : pred__22908.call(null,G__22915,G__22916));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__22904,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22917 = cljs.core.constant$keyword$continue_DASH_block;
var G__22918 = expr__22909;
return (pred__22908.cljs$core$IFn$_invoke$arity$2 ? pred__22908.cljs$core$IFn$_invoke$arity$2(G__22917,G__22918) : pred__22908.call(null,G__22917,G__22918));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__22904,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22919 = cljs.core.constant$keyword$prev;
var G__22920 = expr__22909;
return (pred__22908.cljs$core$IFn$_invoke$arity$2 ? pred__22908.cljs$core$IFn$_invoke$arity$2(G__22919,G__22920) : pred__22908.call(null,G__22919,G__22920));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__22904,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4702__auto__,G__22904),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4693__auto__,G__22904){
var self__ = this;
var this__4693__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__22904,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4699__auto__,entry__4700__auto__){
var self__ = this;
var this__4699__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4700__auto__)){
return cljs.core._assoc(this__4699__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4700__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4700__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4699__auto____$1,entry__4700__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4728__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__){
return cljs.core._write(writer__4729__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__22906){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__22906),cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__22906),cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__22906),cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__22906),cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(G__22906),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22906,cljs.core.constant$keyword$catch_DASH_block,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,cljs.core.constant$keyword$finally_DASH_block,cljs.core.constant$keyword$continue_DASH_block,cljs.core.constant$keyword$prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_22923 = state;
(statearr_22923[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_22923;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__4087__auto__ = exception;
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4087__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4087__auto__ = exception;
if(cljs.core.truth_(and__4087__auto__)){
var and__4087__auto____$1 = catch_block;
if(cljs.core.truth_(and__4087__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__4087__auto____$1;
}
} else {
return and__4087__auto__;
}
})())){
var statearr_22929 = state;
(statearr_22929[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_22929[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_22929[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_22929[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,null], 0)));

return statearr_22929;
} else {
if(cljs.core.truth_((function (){var and__4087__auto__ = exception;
if(cljs.core.truth_(and__4087__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__4087__auto__;
}
})())){
var statearr_22930_22934 = state;
(statearr_22930_22934[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__22935 = state;
state = G__22935;
continue;
} else {
if(cljs.core.truth_((function (){var and__4087__auto__ = exception;
if(cljs.core.truth_(and__4087__auto__)){
var and__4087__auto____$1 = cljs.core.not(catch_block);
if(and__4087__auto____$1){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4087__auto____$1;
}
} else {
return and__4087__auto__;
}
})())){
var statearr_22931 = state;
(statearr_22931[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22931[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_22931;
} else {
if(cljs.core.truth_((function (){var and__4087__auto__ = cljs.core.not(exception);
if(and__4087__auto__){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4087__auto__;
}
})())){
var statearr_22932 = state;
(statearr_22932[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22932[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_22932;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_22933 = state;
(statearr_22933[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22933[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_22933;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

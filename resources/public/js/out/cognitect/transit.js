// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__13475 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__13475) : com.cognitect.transit.eq.hashCode.call(null,G__13475));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__13476 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__13476) : com.cognitect.transit.eq.hashCode.call(null,G__13476));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__13477 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__13477) : com.cognitect.transit.eq.hashCode.call(null,G__13477));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__13482_13486 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__13483_13487 = null;
var count__13484_13488 = (0);
var i__13485_13489 = (0);
while(true){
if((i__13485_13489 < count__13484_13488)){
var k_13490 = chunk__13483_13487.cljs$core$IIndexed$_nth$arity$2(null,i__13485_13489);
var v_13491 = (b[k_13490]);
(a[k_13490] = v_13491);

var G__13492 = seq__13482_13486;
var G__13493 = chunk__13483_13487;
var G__13494 = count__13484_13488;
var G__13495 = (i__13485_13489 + (1));
seq__13482_13486 = G__13492;
chunk__13483_13487 = G__13493;
count__13484_13488 = G__13494;
i__13485_13489 = G__13495;
continue;
} else {
var temp__4126__auto___13496 = cljs.core.seq(seq__13482_13486);
if(temp__4126__auto___13496){
var seq__13482_13497__$1 = temp__4126__auto___13496;
if(cljs.core.chunked_seq_QMARK_(seq__13482_13497__$1)){
var c__4884__auto___13498 = cljs.core.chunk_first(seq__13482_13497__$1);
var G__13499 = cljs.core.chunk_rest(seq__13482_13497__$1);
var G__13500 = c__4884__auto___13498;
var G__13501 = cljs.core.count(c__4884__auto___13498);
var G__13502 = (0);
seq__13482_13486 = G__13499;
chunk__13483_13487 = G__13500;
count__13484_13488 = G__13501;
i__13485_13489 = G__13502;
continue;
} else {
var k_13503 = cljs.core.first(seq__13482_13497__$1);
var v_13504 = (b[k_13503]);
(a[k_13503] = v_13504);

var G__13505 = cljs.core.next(seq__13482_13497__$1);
var G__13506 = null;
var G__13507 = (0);
var G__13508 = (0);
seq__13482_13486 = G__13505;
chunk__13483_13487 = G__13506;
count__13484_13488 = G__13507;
i__13485_13489 = G__13508;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__13509 = arr;
var G__13510 = true;
var G__13511 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__13509,G__13510,G__13511) : cljs.core.PersistentArrayMap.fromArray.call(null,G__13509,G__13510,G__13511));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__13512 = arr;
var G__13513 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__13512,G__13513) : cljs.core.PersistentVector.fromArray.call(null,G__13512,G__13513));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__13515 = arguments.length;
switch (G__13515) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__13516 = cljs.core.name(type);
var G__13517 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__13516){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__13516))
,":",((function (G__13516){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__13516))
,"set",((function (G__13516){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__13516))
,"list",((function (G__13516){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__13516))
,"cmap",((function (G__13516){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__13519 = (i + (2));
var G__13520 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__13519;
ret = G__13520;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__13516))
], null),cljs.core.constant$keyword$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$handlers)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__13516,G__13517) : com.cognitect.transit.reader.call(null,G__13516,G__13517));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13521_13527 = cljs.core.seq(v);
var chunk__13522_13528 = null;
var count__13523_13529 = (0);
var i__13524_13530 = (0);
while(true){
if((i__13524_13530 < count__13523_13529)){
var x_13531 = chunk__13522_13528.cljs$core$IIndexed$_nth$arity$2(null,i__13524_13530);
ret.push(x_13531);

var G__13532 = seq__13521_13527;
var G__13533 = chunk__13522_13528;
var G__13534 = count__13523_13529;
var G__13535 = (i__13524_13530 + (1));
seq__13521_13527 = G__13532;
chunk__13522_13528 = G__13533;
count__13523_13529 = G__13534;
i__13524_13530 = G__13535;
continue;
} else {
var temp__4126__auto___13536 = cljs.core.seq(seq__13521_13527);
if(temp__4126__auto___13536){
var seq__13521_13537__$1 = temp__4126__auto___13536;
if(cljs.core.chunked_seq_QMARK_(seq__13521_13537__$1)){
var c__4884__auto___13538 = cljs.core.chunk_first(seq__13521_13537__$1);
var G__13539 = cljs.core.chunk_rest(seq__13521_13537__$1);
var G__13540 = c__4884__auto___13538;
var G__13541 = cljs.core.count(c__4884__auto___13538);
var G__13542 = (0);
seq__13521_13527 = G__13539;
chunk__13522_13528 = G__13540;
count__13523_13529 = G__13541;
i__13524_13530 = G__13542;
continue;
} else {
var x_13543 = cljs.core.first(seq__13521_13537__$1);
ret.push(x_13543);

var G__13544 = cljs.core.next(seq__13521_13537__$1);
var G__13545 = null;
var G__13546 = (0);
var G__13547 = (0);
seq__13521_13527 = G__13544;
chunk__13522_13528 = G__13545;
count__13523_13529 = G__13546;
i__13524_13530 = G__13547;
continue;
}
} else {
}
}
break;
}

var G__13525 = "array";
var G__13526 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__13525,G__13526) : com.cognitect.transit.tagged.call(null,G__13525,G__13526));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13548_13554 = cljs.core.seq(v);
var chunk__13549_13555 = null;
var count__13550_13556 = (0);
var i__13551_13557 = (0);
while(true){
if((i__13551_13557 < count__13550_13556)){
var x_13558 = chunk__13549_13555.cljs$core$IIndexed$_nth$arity$2(null,i__13551_13557);
ret.push(x_13558);

var G__13559 = seq__13548_13554;
var G__13560 = chunk__13549_13555;
var G__13561 = count__13550_13556;
var G__13562 = (i__13551_13557 + (1));
seq__13548_13554 = G__13559;
chunk__13549_13555 = G__13560;
count__13550_13556 = G__13561;
i__13551_13557 = G__13562;
continue;
} else {
var temp__4126__auto___13563 = cljs.core.seq(seq__13548_13554);
if(temp__4126__auto___13563){
var seq__13548_13564__$1 = temp__4126__auto___13563;
if(cljs.core.chunked_seq_QMARK_(seq__13548_13564__$1)){
var c__4884__auto___13565 = cljs.core.chunk_first(seq__13548_13564__$1);
var G__13566 = cljs.core.chunk_rest(seq__13548_13564__$1);
var G__13567 = c__4884__auto___13565;
var G__13568 = cljs.core.count(c__4884__auto___13565);
var G__13569 = (0);
seq__13548_13554 = G__13566;
chunk__13549_13555 = G__13567;
count__13550_13556 = G__13568;
i__13551_13557 = G__13569;
continue;
} else {
var x_13570 = cljs.core.first(seq__13548_13564__$1);
ret.push(x_13570);

var G__13571 = cljs.core.next(seq__13548_13564__$1);
var G__13572 = null;
var G__13573 = (0);
var G__13574 = (0);
seq__13548_13554 = G__13571;
chunk__13549_13555 = G__13572;
count__13550_13556 = G__13573;
i__13551_13557 = G__13574;
continue;
}
} else {
}
}
break;
}

var G__13552 = "array";
var G__13553 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__13552,G__13553) : com.cognitect.transit.tagged.call(null,G__13552,G__13553));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13575_13579 = cljs.core.seq(v);
var chunk__13576_13580 = null;
var count__13577_13581 = (0);
var i__13578_13582 = (0);
while(true){
if((i__13578_13582 < count__13577_13581)){
var x_13583 = chunk__13576_13580.cljs$core$IIndexed$_nth$arity$2(null,i__13578_13582);
ret.push(x_13583);

var G__13584 = seq__13575_13579;
var G__13585 = chunk__13576_13580;
var G__13586 = count__13577_13581;
var G__13587 = (i__13578_13582 + (1));
seq__13575_13579 = G__13584;
chunk__13576_13580 = G__13585;
count__13577_13581 = G__13586;
i__13578_13582 = G__13587;
continue;
} else {
var temp__4126__auto___13588 = cljs.core.seq(seq__13575_13579);
if(temp__4126__auto___13588){
var seq__13575_13589__$1 = temp__4126__auto___13588;
if(cljs.core.chunked_seq_QMARK_(seq__13575_13589__$1)){
var c__4884__auto___13590 = cljs.core.chunk_first(seq__13575_13589__$1);
var G__13591 = cljs.core.chunk_rest(seq__13575_13589__$1);
var G__13592 = c__4884__auto___13590;
var G__13593 = cljs.core.count(c__4884__auto___13590);
var G__13594 = (0);
seq__13575_13579 = G__13591;
chunk__13576_13580 = G__13592;
count__13577_13581 = G__13593;
i__13578_13582 = G__13594;
continue;
} else {
var x_13595 = cljs.core.first(seq__13575_13589__$1);
ret.push(x_13595);

var G__13596 = cljs.core.next(seq__13575_13589__$1);
var G__13597 = null;
var G__13598 = (0);
var G__13599 = (0);
seq__13575_13579 = G__13596;
chunk__13576_13580 = G__13597;
count__13577_13581 = G__13598;
i__13578_13582 = G__13599;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__13601 = arguments.length;
switch (G__13601) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__13602 = cljs.core.name(type);
var G__13603 = cognitect.transit.opts_merge({"unpack": ((function (G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x13607 = cljs.core.clone(handlers);
x13607.forEach = ((function (x13607,G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__13608 = cljs.core.seq(coll);
var chunk__13609 = null;
var count__13610 = (0);
var i__13611 = (0);
while(true){
if((i__13611 < count__13610)){
var vec__13612 = chunk__13609.cljs$core$IIndexed$_nth$arity$2(null,i__13611);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13612,(1),null);
var G__13613_13619 = v;
var G__13614_13620 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13613_13619,G__13614_13620) : f.call(null,G__13613_13619,G__13614_13620));

var G__13621 = seq__13608;
var G__13622 = chunk__13609;
var G__13623 = count__13610;
var G__13624 = (i__13611 + (1));
seq__13608 = G__13621;
chunk__13609 = G__13622;
count__13610 = G__13623;
i__13611 = G__13624;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__13608);
if(temp__4126__auto__){
var seq__13608__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13608__$1)){
var c__4884__auto__ = cljs.core.chunk_first(seq__13608__$1);
var G__13625 = cljs.core.chunk_rest(seq__13608__$1);
var G__13626 = c__4884__auto__;
var G__13627 = cljs.core.count(c__4884__auto__);
var G__13628 = (0);
seq__13608 = G__13625;
chunk__13609 = G__13626;
count__13610 = G__13627;
i__13611 = G__13628;
continue;
} else {
var vec__13615 = cljs.core.first(seq__13608__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13615,(1),null);
var G__13616_13629 = v;
var G__13617_13630 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13616_13629,G__13617_13630) : f.call(null,G__13616_13629,G__13617_13630));

var G__13631 = cljs.core.next(seq__13608__$1);
var G__13632 = null;
var G__13633 = (0);
var G__13634 = (0);
seq__13608 = G__13631;
chunk__13609 = G__13632;
count__13610 = G__13633;
i__13611 = G__13634;
continue;
}
} else {
return null;
}
}
break;
}
});})(x13607,G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x13607;
})(), "objectBuilder": ((function (G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__13604 = obj;
G__13604.push((function (){var G__13605 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__13605) : kfn.call(null,G__13605));
})(),(function (){var G__13606 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__13606) : vfn.call(null,G__13606));
})());

return G__13604;
});})(G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__13602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$handlers)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__13602,G__13603) : com.cognitect.transit.writer.call(null,G__13602,G__13603));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__13636 = arguments.length;
switch (G__13636) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t13637 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t13637 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta13638){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta13638 = meta13638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t13637.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__13640 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__13640) : self__.tag_fn.call(null,G__13640));
});

cognitect.transit.t13637.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__13641 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__13641) : self__.rep_fn.call(null,G__13641));
});

cognitect.transit.t13637.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__13642 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__13642) : self__.str_rep_fn.call(null,G__13642));
} else {
return null;
}
});

cognitect.transit.t13637.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t13637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13639){
var self__ = this;
var _13639__$1 = this;
return self__.meta13638;
});

cognitect.transit.t13637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13639,meta13638__$1){
var self__ = this;
var _13639__$1 = this;
return (new cognitect.transit.t13637(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta13638__$1));
});

cognitect.transit.t13637.cljs$lang$type = true;

cognitect.transit.t13637.cljs$lang$ctorStr = "cognitect.transit/t13637";

cognitect.transit.t13637.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cognitect.transit/t13637");
});

cognitect.transit.__GT_t13637 = (function cognitect$transit$__GT_t13637(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta13638){
return (new cognitect.transit.t13637(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta13638));
});

}

return (new cognitect.transit.t13637(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
var G__13646 = tag;
var G__13647 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__13646,G__13647) : com.cognitect.transit.types.taggedValue.call(null,G__13646,G__13647));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
var G__13649 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__13649) : com.cognitect.transit.types.isTaggedValue.call(null,G__13649));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
var G__13651 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__13651) : com.cognitect.transit.types.integer.call(null,G__13651));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
var G__13653 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__13653) : com.cognitect.transit.types.isInteger.call(null,G__13653));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
var G__13655 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__13655) : com.cognitect.transit.types.bigInteger.call(null,G__13655));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
var G__13657 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__13657) : com.cognitect.transit.types.isBigInteger.call(null,G__13657));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
var G__13659 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__13659) : com.cognitect.transit.types.bigDecimalValue.call(null,G__13659));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
var G__13661 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__13661) : com.cognitect.transit.types.isBigDecimal.call(null,G__13661));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
var G__13663 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__13663) : com.cognitect.transit.types.uri.call(null,G__13663));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
var G__13665 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__13665) : com.cognitect.transit.types.isURI.call(null,G__13665));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
var G__13667 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__13667) : com.cognitect.transit.types.uuid.call(null,G__13667));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var G__13669 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__13669) : com.cognitect.transit.types.isUUID.call(null,G__13669));
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
var G__13671 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__13671) : com.cognitect.transit.types.binary.call(null,G__13671));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
var G__13673 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__13673) : com.cognitect.transit.types.isBinary.call(null,G__13673));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
var G__13675 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__13675) : com.cognitect.transit.types.quoted.call(null,G__13675));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
var G__13677 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__13677) : com.cognitect.transit.types.isQuoted.call(null,G__13677));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
var G__13679 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__13679) : com.cognitect.transit.types.link.call(null,G__13679));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
var G__13681 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__13681) : com.cognitect.transit.types.isLink.call(null,G__13681));
});

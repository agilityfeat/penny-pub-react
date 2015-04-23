// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
return (function (p1__20124_SHARP_){
return (max === p1__20124_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(){
var G__20129 = arguments.length;
switch (G__20129) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5151__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5151__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq20125){
var G__20126 = cljs.core.first(seq20125);
var seq20125__$1 = cljs.core.next(seq20125);
var G__20127 = cljs.core.first(seq20125__$1);
var seq20125__$2 = cljs.core.next(seq20125__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__20126,G__20127,seq20125__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = 2;
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(){
var G__20136 = arguments.length;
switch (G__20136) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5151__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5151__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1))){
var G__20138 = s2;
var G__20139 = s1;
s1 = G__20138;
s2 = G__20139;
continue;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return result;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key((function (p1__20131_SHARP_){
return (- cljs.core.count(p1__20131_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq20132){
var G__20133 = cljs.core.first(seq20132);
var seq20132__$1 = cljs.core.next(seq20132);
var G__20134 = cljs.core.first(seq20132__$1);
var seq20132__$2 = cljs.core.next(seq20132__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__20133,G__20134,seq20132__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = 2;
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(){
var G__20144 = arguments.length;
switch (G__20144) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5151__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5151__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq20140){
var G__20141 = cljs.core.first(seq20140);
var seq20140__$1 = cljs.core.next(seq20140);
var G__20142 = cljs.core.first(seq20140__$1);
var seq20140__$2 = cljs.core.next(seq20140__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__20141,G__20142,seq20140__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = 2;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((function (){var G__20147 = k;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20147) : pred.call(null,G__20147));
})())){
return s;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20148_SHARP_){
return cljs.core.select_keys(p1__20148_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20151){
var vec__20152 = p__20151;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(1),null);
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20153_SHARP_){
return clojure.set.rename_keys(p1__20153_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__20156){
var vec__20157 = p__20156;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function clojure$set$join(){
var G__20163 = arguments.length;
switch (G__20163) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel))){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__20164 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20164,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20164,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__20164,r,s,idx){
return (function (ret,x){
var found = (function (){var G__20165 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__20165) : idx.call(null,G__20165));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__20164,r,s,idx){
return (function (p1__20158_SHARP_,p2__20159_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20158_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__20159_SHARP_,x], 0)));
});})(found,ks,vec__20164,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__20164,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__20166 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20166,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20166,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20166,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__20166,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__20167 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__20167) : idx.call(null,G__20167));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__20166,r,s,k,idx){
return (function (p1__20160_SHARP_,p2__20161_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20160_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__20161_SHARP_,x], 0)));
});})(found,vec__20166,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__20166,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__20169_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__20169_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__20170_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__20170_SHARP_);
}),set2));
});

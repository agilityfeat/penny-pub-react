// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = (function (){var G__13693 = id;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__13693) : reagent_forms.core.id__GT_path.call(null,G__13693));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__13685_SHARP_,p2__13684_SHARP_){
var or__4099__auto__ = (function (){var G__13697 = path;
var G__13698 = value;
var G__13699 = p1__13685_SHARP_;
return (p2__13684_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__13684_SHARP_.cljs$core$IFn$_invoke$arity$3(G__13697,G__13698,G__13699) : p2__13684_SHARP_.call(null,G__13697,G__13698,G__13699));
})();
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return p1__13685_SHARP_;
}
});})(path))
,cljs.core.assoc_in(doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.set_doc_value,id,value,cljs.core.array_seq([events], 0));
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__13702 = (function (){var G__13703 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13703) : get.call(null,G__13703));
})();
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__13702) : wrapper.call(null,G__13702));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__13707 = id;
var G__13708 = (function (){var G__13709 = value;
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__13709) : wrapper.call(null,G__13709));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13707,G__13708) : save_BANG_.call(null,G__13707,G__13708));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$doc,cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$get,(function (){var temp__4124__auto__ = cljs.core.constant$keyword$in_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4124__auto__)){
var in_fn = temp__4124__auto__;
return reagent_forms.core.wrap_get_fn(cljs.core.constant$keyword$get.cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return cljs.core.constant$keyword$get.cljs$core$IFn$_invoke$arity$1(opts);
}
})(),cljs.core.constant$keyword$save_BANG_,(function (){var temp__4124__auto__ = cljs.core.constant$keyword$out_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4124__auto__)){
var out_fn = temp__4124__auto__;
return reagent_forms.core.wrap_save_fn(cljs.core.constant$keyword$save_BANG_.cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return cljs.core.constant$keyword$save_BANG_.cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__4994__auto__ = (function (){var G__13710 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13710) : cljs.core.atom.call(null,G__13710));
})();
var prefer_table__4995__auto__ = (function (){var G__13711 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13711) : cljs.core.atom.call(null,G__13711));
})();
var method_cache__4996__auto__ = (function (){var G__13712 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13712) : cljs.core.atom.call(null,G__13712));
})();
var cached_hierarchy__4997__auto__ = (function (){var G__13713 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13713) : cljs.core.atom.call(null,G__13713));
})();
var hierarchy__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$range,cljs.core.constant$keyword$numeric], null)))){
return cljs.core.constant$keyword$numeric;
} else {
return field_type;
}
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,cljs.core.constant$keyword$default,hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__4087__auto__ = cljs.core.not((function (){var G__13722 = (function (){var G__13723 = value;
return parseFloat(G__13723);
})();
return isNaN(G__13722);
})());
if(and__4087__auto__){
return fmt;
} else {
return and__4087__auto__;
}
})())){
var G__13724 = fmt;
var G__13725 = value;
return goog.string.format(G__13724,G__13725);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$numeric,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = (function (){var G__13726 = n;
return parseFloat(G__13726);
})();
if(cljs.core.truth_((function (){var G__13727 = parsed;
return isNaN(G__13727);
})())){
return null;
} else {
if(cljs.core.truth_(reagent_forms.core.valid_number_ending_QMARK_(n))){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__4994__auto__ = (function (){var G__13728 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13728) : cljs.core.atom.call(null,G__13728));
})();
var prefer_table__4995__auto__ = (function (){var G__13729 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13729) : cljs.core.atom.call(null,G__13729));
})();
var method_cache__4996__auto__ = (function (){var G__13730 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13730) : cljs.core.atom.call(null,G__13730));
})();
var cached_hierarchy__4997__auto__ = (function (){var G__13731 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13731) : cljs.core.atom.call(null,G__13731));
})();
var hierarchy__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (p__13732,_){
var map__13733 = p__13732;
var map__13733__$1 = ((cljs.core.seq_QMARK_(map__13733))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13733):map__13733);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13733__$1,cljs.core.constant$keyword$field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$text,cljs.core.constant$keyword$numeric,cljs.core.constant$keyword$password,cljs.core.constant$keyword$email,cljs.core.constant$keyword$range,cljs.core.constant$keyword$textarea], null)))){
return cljs.core.constant$keyword$input_DASH_field;
} else {
return field;
}
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,cljs.core.constant$keyword$default,hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$input_DASH_field,(function (p__13735,p__13736){
var map__13737 = p__13735;
var map__13737__$1 = ((cljs.core.seq_QMARK_(map__13737))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13737):map__13737);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,cljs.core.constant$keyword$fmt);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,cljs.core.constant$keyword$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,cljs.core.constant$keyword$field);
var map__13738 = p__13736;
var map__13738__$1 = ((cljs.core.seq_QMARK_(map__13738))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13738):map__13738);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,cljs.core.constant$keyword$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,cljs.core.constant$keyword$get);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,(function (){var value = (function (){var or__4099__auto__ = (function (){var G__13740 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13740) : get.call(null,G__13740));
})();
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.constant$keyword$on_DASH_change,((function (map__13737,map__13737__$1,fmt,id,field,map__13738,map__13738__$1,doc,save_BANG_,get){
return (function (p1__13734_SHARP_){
var G__13741 = id;
var G__13742 = (function (){var G__13743 = field;
var G__13744 = reagent_forms.core.value_of(p1__13734_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__13743,G__13744) : reagent_forms.core.format_type.call(null,G__13743,G__13744));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13741,G__13742) : save_BANG_.call(null,G__13741,G__13742));
});})(map__13737,map__13737__$1,fmt,id,field,map__13738,map__13738__$1,doc,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$checkbox,(function (p__13745,p__13746){
var map__13747 = p__13745;
var map__13747__$1 = ((cljs.core.seq_QMARK_(map__13747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13747):map__13747);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13747__$1,cljs.core.constant$keyword$id);
var map__13748 = p__13746;
var map__13748__$1 = ((cljs.core.seq_QMARK_(map__13748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13748):map__13748);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13748__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13748__$1,cljs.core.constant$keyword$get);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$checked,(function (){var G__13749 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13749) : get.call(null,G__13749));
})(),cljs.core.constant$keyword$on_DASH_change,((function (map__13747,map__13747__$1,id,map__13748,map__13748__$1,save_BANG_,get){
return (function (){
var G__13750 = id;
var G__13751 = cljs.core.not((function (){var G__13752 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13752) : get.call(null,G__13752));
})());
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13750,G__13751) : save_BANG_.call(null,G__13750,G__13751));
});})(map__13747,map__13747__$1,id,map__13748,map__13748__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(){
var argseq__5139__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5139__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__13756,opts,p__13757){
var vec__13758 = p__13756;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(1),null);
var body = cljs.core.nthnext(vec__13758,(2));
var vec__13759 = p__13757;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13759,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(function (){var G__13760 = attrs;
var G__13761 = opts;
return (reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(G__13760,G__13761) : reagent_forms.core.bind.call(null,G__13760,G__13761));
})(),attrs], 0))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq13753){
var G__13754 = cljs.core.first(seq13753);
var seq13753__$1 = cljs.core.next(seq13753);
var G__13755 = cljs.core.first(seq13753__$1);
var seq13753__$2 = cljs.core.next(seq13753__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__13754,G__13755,seq13753__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__4994__auto__ = (function (){var G__13762 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13762) : cljs.core.atom.call(null,G__13762));
})();
var prefer_table__4995__auto__ = (function (){var G__13763 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13763) : cljs.core.atom.call(null,G__13763));
})();
var method_cache__4996__auto__ = (function (){var G__13764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13764) : cljs.core.atom.call(null,G__13764));
})();
var cached_hierarchy__4997__auto__ = (function (){var G__13765 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13765) : cljs.core.atom.call(null,G__13765));
})();
var hierarchy__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (p__13766,_){
var vec__13767 = p__13766;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13767,(0),null);
var map__13768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13767,(1),null);
var map__13768__$1 = ((cljs.core.seq_QMARK_(map__13768))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13768):map__13768);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13768__$1,cljs.core.constant$keyword$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$range,cljs.core.constant$keyword$text,cljs.core.constant$keyword$password,cljs.core.constant$keyword$email,cljs.core.constant$keyword$textarea], null)))){
return cljs.core.constant$keyword$input_DASH_field;
} else {
return field__$1;
}
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,cljs.core.constant$keyword$default,hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$container,(function (p__13769,p__13770){
var vec__13771 = p__13769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(1),null);
var component = vec__13771;
var map__13772 = p__13770;
var map__13772__$1 = ((cljs.core.seq_QMARK_(map__13772))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13772):map__13772);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13772__$1,cljs.core.constant$keyword$doc);
return ((function (vec__13771,_,attrs,component,map__13772,map__13772__$1,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13773 = (function (){var G__13774 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13774) : cljs.core.deref.call(null,G__13774));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13773) : visible__12226__auto__.call(null,G__13773));
})())){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__13771,_,attrs,component,map__13772,map__13772__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$input_DASH_field,(function (p__13775,p__13776){
var vec__13777 = p__13775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777,(0),null);
var map__13778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777,(1),null);
var map__13778__$1 = ((cljs.core.seq_QMARK_(map__13778))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13778):map__13778);
var attrs = map__13778__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13778__$1,cljs.core.constant$keyword$field);
var component = vec__13777;
var map__13779 = p__13776;
var map__13779__$1 = ((cljs.core.seq_QMARK_(map__13779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13779):map__13779);
var opts = map__13779__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13779__$1,cljs.core.constant$keyword$doc);
return ((function (vec__13777,_,map__13778,map__13778__$1,attrs,field,component,map__13779,map__13779__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13780 = (function (){var G__13781 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13781) : cljs.core.deref.call(null,G__13781));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13780) : visible__12226__auto__.call(null,G__13780));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,field], null)], 0));
}
});
;})(vec__13777,_,map__13778,map__13778__$1,attrs,field,component,map__13779,map__13779__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$numeric,(function (p__13783,p__13784){
var vec__13785 = p__13783;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13785,(0),null);
var map__13786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13785,(1),null);
var map__13786__$1 = ((cljs.core.seq_QMARK_(map__13786))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13786):map__13786);
var attrs = map__13786__$1;
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13786__$1,cljs.core.constant$keyword$fmt);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13786__$1,cljs.core.constant$keyword$id);
var map__13787 = p__13784;
var map__13787__$1 = ((cljs.core.seq_QMARK_(map__13787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13787):map__13787);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13787__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13787__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13787__$1,cljs.core.constant$keyword$doc);
var display_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$changed_DASH_self_QMARK_,false,cljs.core.constant$keyword$value,(function (){var G__13788 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13788) : get.call(null,G__13788));
})()], null));
return ((function (display_value,vec__13785,type,map__13786,map__13786__$1,attrs,fmt,id,map__13787,map__13787__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13789 = (function (){var G__13790 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13790) : cljs.core.deref.call(null,G__13790));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13789) : visible__12226__auto__.call(null,G__13789));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$text,cljs.core.constant$keyword$value,(function (){var doc_value = (function (){var or__4099__auto__ = (function (){var G__13793 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13793) : get.call(null,G__13793));
})();
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})();
var map__13791 = (function (){var G__13794 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13794) : cljs.core.deref.call(null,G__13794));
})();
var map__13791__$1 = ((cljs.core.seq_QMARK_(map__13791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13791):map__13791);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13791__$1,cljs.core.constant$keyword$value);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13791__$1,cljs.core.constant$keyword$changed_DASH_self_QMARK_);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$changed_DASH_self_QMARK_);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$on_DASH_change,((function (visible__12226__auto__,temp__4124__auto__,display_value,vec__13785,type,map__13786,map__13786__$1,attrs,fmt,id,map__13787,map__13787__$1,save_BANG_,get,doc){
return (function (p1__13782_SHARP_){
var temp__4124__auto____$1 = (function (){var G__13795 = cljs.core.constant$keyword$numeric;
var G__13796 = reagent_forms.core.value_of(p1__13782_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__13795,G__13796) : reagent_forms.core.format_type.call(null,G__13795,G__13796));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__13797_13817 = display_value;
var G__13798_13818 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$changed_DASH_self_QMARK_,true,cljs.core.constant$keyword$value,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13797_13817,G__13798_13818) : cljs.core.reset_BANG_.call(null,G__13797_13817,G__13798_13818));

var G__13799 = id;
var G__13800 = (function (){var G__13801 = value;
return parseFloat(G__13801);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13799,G__13800) : save_BANG_.call(null,G__13799,G__13800));
} else {
var G__13802 = id;
var G__13803 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13802,G__13803) : save_BANG_.call(null,G__13802,G__13803));
}
});})(visible__12226__auto__,temp__4124__auto__,display_value,vec__13785,type,map__13786,map__13786__$1,attrs,fmt,id,map__13787,map__13787__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$text,cljs.core.constant$keyword$value,(function (){var doc_value = (function (){var or__4099__auto__ = (function (){var G__13806 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13806) : get.call(null,G__13806));
})();
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})();
var map__13804 = (function (){var G__13807 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13807) : cljs.core.deref.call(null,G__13807));
})();
var map__13804__$1 = ((cljs.core.seq_QMARK_(map__13804))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13804):map__13804);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,cljs.core.constant$keyword$value);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,cljs.core.constant$keyword$changed_DASH_self_QMARK_);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$changed_DASH_self_QMARK_);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$on_DASH_change,((function (temp__4124__auto__,display_value,vec__13785,type,map__13786,map__13786__$1,attrs,fmt,id,map__13787,map__13787__$1,save_BANG_,get,doc){
return (function (p1__13782_SHARP_){
var temp__4124__auto____$1 = (function (){var G__13808 = cljs.core.constant$keyword$numeric;
var G__13809 = reagent_forms.core.value_of(p1__13782_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__13808,G__13809) : reagent_forms.core.format_type.call(null,G__13808,G__13809));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__13810_13819 = display_value;
var G__13811_13820 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$changed_DASH_self_QMARK_,true,cljs.core.constant$keyword$value,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13810_13819,G__13811_13820) : cljs.core.reset_BANG_.call(null,G__13810_13819,G__13811_13820));

var G__13812 = id;
var G__13813 = (function (){var G__13814 = value;
return parseFloat(G__13814);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13812,G__13813) : save_BANG_.call(null,G__13812,G__13813));
} else {
var G__13815 = id;
var G__13816 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13815,G__13816) : save_BANG_.call(null,G__13815,G__13816));
}
});})(temp__4124__auto__,display_value,vec__13785,type,map__13786,map__13786__$1,attrs,fmt,id,map__13787,map__13787__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
}
});
;})(display_value,vec__13785,type,map__13786,map__13786__$1,attrs,fmt,id,map__13787,map__13787__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$datepicker,(function (p__13822,p__13823){
var vec__13824 = p__13822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13824,(0),null);
var map__13825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13824,(1),null);
var map__13825__$1 = ((cljs.core.seq_QMARK_(map__13825))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13825):map__13825);
var attrs = map__13825__$1;
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13825__$1,cljs.core.constant$keyword$auto_DASH_close_QMARK_);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13825__$1,cljs.core.constant$keyword$inline);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13825__$1,cljs.core.constant$keyword$date_DASH_format);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13825__$1,cljs.core.constant$keyword$id);
var map__13826 = p__13823;
var map__13826__$1 = ((cljs.core.seq_QMARK_(map__13826))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13826):map__13826);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13826__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13826__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13826__$1,cljs.core.constant$keyword$doc);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13827 = (function (){var G__13828 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13828) : cljs.core.deref.call(null,G__13828));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13827) : visible__12226__auto__.call(null,G__13827));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$read_DASH_only,true,cljs.core.constant$keyword$type,cljs.core.constant$keyword$text,cljs.core.constant$keyword$on_DASH_click,((function (visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$value,(function (){var temp__4126__auto__ = (function (){var G__13829 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13829) : get.call(null,G__13829));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (){
var G__13830 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13830) : get.call(null,G__13830));
});})(visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
,((function (visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (p1__13821_SHARP_){
var G__13831 = id;
var G__13832 = p1__13821_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13831,G__13832) : save_BANG_.call(null,G__13831,G__13832));
});})(visible__12226__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$read_DASH_only,true,cljs.core.constant$keyword$type,cljs.core.constant$keyword$text,cljs.core.constant$keyword$on_DASH_click,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$value,(function (){var temp__4126__auto__ = (function (){var G__13833 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13833) : get.call(null,G__13833));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (){
var G__13834 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13834) : get.call(null,G__13834));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc){
return (function (p1__13821_SHARP_){
var G__13835 = id;
var G__13836 = p1__13821_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13835,G__13836) : save_BANG_.call(null,G__13835,G__13836));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__13824,_,map__13825,map__13825__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13826,map__13826__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$checkbox,(function (p__13837,p__13838){
var vec__13839 = p__13837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(0),null);
var map__13840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(1),null);
var map__13840__$1 = ((cljs.core.seq_QMARK_(map__13840))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13840):map__13840);
var attrs = map__13840__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13840__$1,cljs.core.constant$keyword$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13840__$1,cljs.core.constant$keyword$id);
var component = vec__13839;
var map__13841 = p__13838;
var map__13841__$1 = ((cljs.core.seq_QMARK_(map__13841))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13841):map__13841);
var opts = map__13841__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13841__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13841__$1,cljs.core.constant$keyword$doc);
return ((function (vec__13839,_,map__13840,map__13840__$1,attrs,field,id,component,map__13841,map__13841__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13842 = (function (){var G__13843 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13843) : cljs.core.deref.call(null,G__13843));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13842) : visible__12226__auto__.call(null,G__13842));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,field], null)], 0));
}
});
;})(vec__13839,_,map__13840,map__13840__$1,attrs,field,id,component,map__13841,map__13841__$1,opts,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$label,(function (p__13844,p__13845){
var vec__13846 = p__13844;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13846,(0),null);
var map__13847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13846,(1),null);
var map__13847__$1 = ((cljs.core.seq_QMARK_(map__13847))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13847):map__13847);
var attrs = map__13847__$1;
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.constant$keyword$placeholder);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.constant$keyword$postamble);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.constant$keyword$preamble);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.constant$keyword$id);
var map__13848 = p__13845;
var map__13848__$1 = ((cljs.core.seq_QMARK_(map__13848))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13848):map__13848);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.constant$keyword$doc);
return ((function (vec__13846,type,map__13847,map__13847__$1,attrs,placeholder,postamble,preamble,id,map__13848,map__13848__$1,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13849 = (function (){var G__13850 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13850) : cljs.core.deref.call(null,G__13850));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13849) : visible__12226__auto__.call(null,G__13849));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__13851 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13851) : get.call(null,G__13851));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__13852 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13852) : get.call(null,G__13852));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__13846,type,map__13847,map__13847__$1,attrs,placeholder,postamble,preamble,id,map__13848,map__13848__$1,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$alert,(function (p__13853,p__13854){
var vec__13855 = p__13853;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13855,(0),null);
var map__13856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13855,(1),null);
var map__13856__$1 = ((cljs.core.seq_QMARK_(map__13856))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13856):map__13856);
var attrs = map__13856__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,cljs.core.constant$keyword$touch_DASH_event);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,cljs.core.constant$keyword$event);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,cljs.core.constant$keyword$id);
var body = cljs.core.nthnext(vec__13855,(2));
var map__13857 = p__13854;
var map__13857__$1 = ((cljs.core.seq_QMARK_(map__13857))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13857):map__13857);
var opts = map__13857__$1;
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.constant$keyword$doc);
return ((function (vec__13855,type,map__13856,map__13856__$1,attrs,touch_event,event,id,body,map__13857,map__13857__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13858 = (function (){var G__13859 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13859) : cljs.core.deref.call(null,G__13859));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13858) : visible__12226__auto__.call(null,G__13858));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__13860 = (function (){var G__13861 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13861) : get.call(null,G__13861));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__13860) : event.call(null,G__13860));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__13862 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13862) : get.call(null,G__13862));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$close,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$aria_DASH_hidden,true,(function (){var or__4099__auto__ = touch_event;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.constant$keyword$on_DASH_click;
}
})(),((function (message,temp__4124__auto____$1,visible__12226__auto__,temp__4124__auto__,vec__13855,type,map__13856,map__13856__$1,attrs,touch_event,event,id,body,map__13857,map__13857__$1,opts,save_BANG_,get,doc){
return (function (){
var G__13863 = id;
var G__13864 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13863,G__13864) : save_BANG_.call(null,G__13863,G__13864));
});})(message,temp__4124__auto____$1,visible__12226__auto__,temp__4124__auto__,vec__13855,type,map__13856,map__13856__$1,attrs,touch_event,event,id,body,map__13857,map__13857__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__13865 = (function (){var G__13866 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13866) : get.call(null,G__13866));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__13865) : event.call(null,G__13865));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__13867 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13867) : get.call(null,G__13867));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$close,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$aria_DASH_hidden,true,(function (){var or__4099__auto__ = touch_event;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.constant$keyword$on_DASH_click;
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__13855,type,map__13856,map__13856__$1,attrs,touch_event,event,id,body,map__13857,map__13857__$1,opts,save_BANG_,get,doc){
return (function (){
var G__13868 = id;
var G__13869 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13868,G__13869) : save_BANG_.call(null,G__13868,G__13869));
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__13855,type,map__13856,map__13856__$1,attrs,touch_event,event,id,body,map__13857,map__13857__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__13855,type,map__13856,map__13856__$1,attrs,touch_event,event,id,body,map__13857,map__13857__$1,opts,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$radio,(function (p__13870,p__13871){
var vec__13872 = p__13870;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13872,(0),null);
var map__13873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13872,(1),null);
var map__13873__$1 = ((cljs.core.seq_QMARK_(map__13873))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13873):map__13873);
var attrs = map__13873__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,cljs.core.constant$keyword$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,cljs.core.constant$keyword$name);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,cljs.core.constant$keyword$field);
var body = cljs.core.nthnext(vec__13872,(2));
var map__13874 = p__13871;
var map__13874__$1 = ((cljs.core.seq_QMARK_(map__13874))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13874):map__13874);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13874__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13874__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13874__$1,cljs.core.constant$keyword$doc);
return ((function (vec__13872,type,map__13873,map__13873__$1,attrs,value,name,field,body,map__13874,map__13874__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13875 = (function (){var G__13876 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13876) : cljs.core.deref.call(null,G__13876));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13875) : visible__12226__auto__.call(null,G__13875));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$radio,cljs.core.constant$keyword$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__13877 = name;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13877) : get.call(null,G__13877));
})()),cljs.core.constant$keyword$on_DASH_change,((function (visible__12226__auto__,temp__4124__auto__,vec__13872,type,map__13873,map__13873__$1,attrs,value,name,field,body,map__13874,map__13874__$1,save_BANG_,get,doc){
return (function (){
var G__13878 = name;
var G__13879 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13878,G__13879) : save_BANG_.call(null,G__13878,G__13879));
});})(visible__12226__auto__,temp__4124__auto__,vec__13872,type,map__13873,map__13873__$1,attrs,value,name,field,body,map__13874,map__13874__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$radio,cljs.core.constant$keyword$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__13880 = name;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13880) : get.call(null,G__13880));
})()),cljs.core.constant$keyword$on_DASH_change,((function (temp__4124__auto__,vec__13872,type,map__13873,map__13873__$1,attrs,value,name,field,body,map__13874,map__13874__$1,save_BANG_,get,doc){
return (function (){
var G__13881 = name;
var G__13882 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13881,G__13882) : save_BANG_.call(null,G__13881,G__13882));
});})(temp__4124__auto__,vec__13872,type,map__13873,map__13873__$1,attrs,value,name,field,body,map__13874,map__13874__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
}
});
;})(vec__13872,type,map__13873,map__13873__$1,attrs,value,name,field,body,map__13874,map__13874__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$typeahead,(function (p__13886,p__13887){
var vec__13888 = p__13886;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13888,(0),null);
var map__13889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13888,(1),null);
var map__13889__$1 = ((cljs.core.seq_QMARK_(map__13889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13889):map__13889);
var attrs = map__13889__$1;
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13889__$1,cljs.core.constant$keyword$highlight_DASH_class);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13889__$1,cljs.core.constant$keyword$item_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13889__$1,cljs.core.constant$keyword$list_DASH_class);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13889__$1,cljs.core.constant$keyword$input_DASH_class);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13889__$1,cljs.core.constant$keyword$data_DASH_source);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13889__$1,cljs.core.constant$keyword$id);
var map__13890 = p__13887;
var map__13890__$1 = ((cljs.core.seq_QMARK_(map__13890))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13890):map__13890);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13890__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13890__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13890__$1,cljs.core.constant$keyword$doc);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__13891 = (function (){var G__13892 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13892) : cljs.core.deref.call(null,G__13892));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__13891) : visible__12226__auto__.call(null,G__13891));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$text,cljs.core.constant$keyword$class,input_class,cljs.core.constant$keyword$value,(function (){var G__13893 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13893) : get.call(null,G__13893));
})(),cljs.core.constant$keyword$on_DASH_blur,((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__13894 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13894) : cljs.core.deref.call(null,G__13894));
})())){
return null;
} else {
var G__13895_13997 = typeahead_hidden_QMARK_;
var G__13896_13998 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13895_13997,G__13896_13998) : cljs.core.reset_BANG_.call(null,G__13895_13997,G__13896_13998));

var G__13897 = selected_index;
var G__13898 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13897,G__13898) : cljs.core.reset_BANG_.call(null,G__13897,G__13898));
}
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_change,((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (p1__13883_SHARP_){
var G__13899_13999 = selections;
var G__13900_14000 = (function (){var G__13901 = reagent_forms.core.value_of(p1__13883_SHARP_).toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__13901) : data_source.call(null,G__13901));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13899_13999,G__13900_14000) : cljs.core.reset_BANG_.call(null,G__13899_13999,G__13900_14000));

var G__13902_14001 = id;
var G__13903_14002 = reagent_forms.core.value_of(p1__13883_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13902_14001,G__13903_14002) : save_BANG_.call(null,G__13902_14001,G__13903_14002));

var G__13904_14003 = typeahead_hidden_QMARK_;
var G__13905_14004 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13904_14003,G__13905_14004) : cljs.core.reset_BANG_.call(null,G__13904_14003,G__13905_14004));

var G__13906 = selected_index;
var G__13907 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13906,G__13907) : cljs.core.reset_BANG_.call(null,G__13906,G__13907));
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_key_DASH_down,((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (p1__13884_SHARP_){
var G__13908 = p1__13884_SHARP_.which;
switch (G__13908) {
case (38):
p1__13884_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13909 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13909) : cljs.core.deref.call(null,G__13909));
})(),(0)))){
var G__13910 = selected_index;
var G__13911 = ((function (){var G__13912 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13912) : cljs.core.deref.call(null,G__13912));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13910,G__13911) : cljs.core.reset_BANG_.call(null,G__13910,G__13911));
} else {
return null;
}

break;
case (40):
p1__13884_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13913 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13913) : cljs.core.deref.call(null,G__13913));
})(),(cljs.core.count((function (){var G__13914 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13914) : cljs.core.deref.call(null,G__13914));
})()) - (1))))){
var G__13915 = selected_index;
var G__13916 = ((function (){var G__13917 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13917) : cljs.core.deref.call(null,G__13917));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13915,G__13916) : cljs.core.reset_BANG_.call(null,G__13915,G__13916));
} else {
return null;
}

break;
case (13):
var G__13918_14006 = id;
var G__13919_14007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__13920 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13920) : cljs.core.deref.call(null,G__13920));
})(),(function (){var G__13921 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13921) : cljs.core.deref.call(null,G__13921));
})());
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13918_14006,G__13919_14007) : save_BANG_.call(null,G__13918_14006,G__13919_14007));

var G__13922 = typeahead_hidden_QMARK_;
var G__13923 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13922,G__13923) : cljs.core.reset_BANG_.call(null,G__13922,G__13923));

break;
case (27):
var G__13924_14008 = typeahead_hidden_QMARK_;
var G__13925_14009 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13924_14008,G__13925_14009) : cljs.core.reset_BANG_.call(null,G__13924_14008,G__13925_14009));

var G__13926 = selected_index;
var G__13927 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13926,G__13927) : cljs.core.reset_BANG_.call(null,G__13926,G__13927));

break;
default:
return "default";

}
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$hidden,(function (){var or__4099__auto__ = cljs.core.empty_QMARK_((function (){var G__13930 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13930) : cljs.core.deref.call(null,G__13930));
})());
if(or__4099__auto__){
return or__4099__auto__;
} else {
var G__13931 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13931) : cljs.core.deref.call(null,G__13931));
}
})(),cljs.core.constant$keyword$class,list_class,cljs.core.constant$keyword$on_DASH_mouse_DASH_enter,((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
var G__13932 = mouse_on_list_QMARK_;
var G__13933 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13932,G__13933) : cljs.core.reset_BANG_.call(null,G__13932,G__13933));
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_mouse_DASH_leave,((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
var G__13934 = mouse_on_list_QMARK_;
var G__13935 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13934,G__13935) : cljs.core.reset_BANG_.call(null,G__13934,G__13935));
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$tab_DASH_index,index,cljs.core.constant$keyword$key,index,cljs.core.constant$keyword$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13936 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13936) : cljs.core.deref.call(null,G__13936));
})(),index))?highlight_class:item_class),cljs.core.constant$keyword$on_DASH_mouse_DASH_over,((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (p1__13885_SHARP_){
var G__13937 = selected_index;
var G__13938 = (function (){var G__13939 = p1__13885_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__13939);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13937,G__13938) : cljs.core.reset_BANG_.call(null,G__13937,G__13938));
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_click,((function (visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
var G__13940_14010 = typeahead_hidden_QMARK_;
var G__13941_14011 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13940_14010,G__13941_14011) : cljs.core.reset_BANG_.call(null,G__13940_14010,G__13941_14011));

var G__13942 = id;
var G__13943 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13942,G__13943) : save_BANG_.call(null,G__13942,G__13943));
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
], null),result], null);
});})(visible__12226__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,(function (){var G__13944 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13944) : cljs.core.deref.call(null,G__13944));
})()))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$text,cljs.core.constant$keyword$class,input_class,cljs.core.constant$keyword$value,(function (){var G__13945 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__13945) : get.call(null,G__13945));
})(),cljs.core.constant$keyword$on_DASH_blur,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__13946 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13946) : cljs.core.deref.call(null,G__13946));
})())){
return null;
} else {
var G__13947_14012 = typeahead_hidden_QMARK_;
var G__13948_14013 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13947_14012,G__13948_14013) : cljs.core.reset_BANG_.call(null,G__13947_14012,G__13948_14013));

var G__13949 = selected_index;
var G__13950 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13949,G__13950) : cljs.core.reset_BANG_.call(null,G__13949,G__13950));
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_change,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (p1__13883_SHARP_){
var G__13951_14014 = selections;
var G__13952_14015 = (function (){var G__13953 = reagent_forms.core.value_of(p1__13883_SHARP_).toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__13953) : data_source.call(null,G__13953));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13951_14014,G__13952_14015) : cljs.core.reset_BANG_.call(null,G__13951_14014,G__13952_14015));

var G__13954_14016 = id;
var G__13955_14017 = reagent_forms.core.value_of(p1__13883_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13954_14016,G__13955_14017) : save_BANG_.call(null,G__13954_14016,G__13955_14017));

var G__13956_14018 = typeahead_hidden_QMARK_;
var G__13957_14019 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13956_14018,G__13957_14019) : cljs.core.reset_BANG_.call(null,G__13956_14018,G__13957_14019));

var G__13958 = selected_index;
var G__13959 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13958,G__13959) : cljs.core.reset_BANG_.call(null,G__13958,G__13959));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_key_DASH_down,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (p1__13884_SHARP_){
var G__13960 = p1__13884_SHARP_.which;
switch (G__13960) {
case (38):
p1__13884_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13961 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13961) : cljs.core.deref.call(null,G__13961));
})(),(0)))){
var G__13962 = selected_index;
var G__13963 = ((function (){var G__13964 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13964) : cljs.core.deref.call(null,G__13964));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13962,G__13963) : cljs.core.reset_BANG_.call(null,G__13962,G__13963));
} else {
return null;
}

break;
case (40):
p1__13884_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13965 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13965) : cljs.core.deref.call(null,G__13965));
})(),(cljs.core.count((function (){var G__13966 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13966) : cljs.core.deref.call(null,G__13966));
})()) - (1))))){
var G__13967 = selected_index;
var G__13968 = ((function (){var G__13969 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13969) : cljs.core.deref.call(null,G__13969));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13967,G__13968) : cljs.core.reset_BANG_.call(null,G__13967,G__13968));
} else {
return null;
}

break;
case (13):
var G__13970_14021 = id;
var G__13971_14022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__13972 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13972) : cljs.core.deref.call(null,G__13972));
})(),(function (){var G__13973 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13973) : cljs.core.deref.call(null,G__13973));
})());
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13970_14021,G__13971_14022) : save_BANG_.call(null,G__13970_14021,G__13971_14022));

var G__13974 = typeahead_hidden_QMARK_;
var G__13975 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13974,G__13975) : cljs.core.reset_BANG_.call(null,G__13974,G__13975));

break;
case (27):
var G__13976_14023 = typeahead_hidden_QMARK_;
var G__13977_14024 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13976_14023,G__13977_14024) : cljs.core.reset_BANG_.call(null,G__13976_14023,G__13977_14024));

var G__13978 = selected_index;
var G__13979 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13978,G__13979) : cljs.core.reset_BANG_.call(null,G__13978,G__13979));

break;
default:
return "default";

}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$hidden,(function (){var or__4099__auto__ = cljs.core.empty_QMARK_((function (){var G__13982 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13982) : cljs.core.deref.call(null,G__13982));
})());
if(or__4099__auto__){
return or__4099__auto__;
} else {
var G__13983 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13983) : cljs.core.deref.call(null,G__13983));
}
})(),cljs.core.constant$keyword$class,list_class,cljs.core.constant$keyword$on_DASH_mouse_DASH_enter,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
var G__13984 = mouse_on_list_QMARK_;
var G__13985 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13984,G__13985) : cljs.core.reset_BANG_.call(null,G__13984,G__13985));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_mouse_DASH_leave,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
var G__13986 = mouse_on_list_QMARK_;
var G__13987 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13986,G__13987) : cljs.core.reset_BANG_.call(null,G__13986,G__13987));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$tab_DASH_index,index,cljs.core.constant$keyword$key,index,cljs.core.constant$keyword$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13988 = selected_index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13988) : cljs.core.deref.call(null,G__13988));
})(),index))?highlight_class:item_class),cljs.core.constant$keyword$on_DASH_mouse_DASH_over,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (p1__13885_SHARP_){
var G__13989 = selected_index;
var G__13990 = (function (){var G__13991 = p1__13885_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__13991);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13989,G__13990) : cljs.core.reset_BANG_.call(null,G__13989,G__13990));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$on_DASH_click,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc){
return (function (){
var G__13992_14025 = typeahead_hidden_QMARK_;
var G__13993_14026 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13992_14025,G__13993_14026) : cljs.core.reset_BANG_.call(null,G__13992_14025,G__13993_14026));

var G__13994 = id;
var G__13995 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13994,G__13995) : save_BANG_.call(null,G__13994,G__13995));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
], null),result], null);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
,(function (){var G__13996 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13996) : cljs.core.deref.call(null,G__13996));
})()))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13888,type,map__13889,map__13889__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__13890,map__13890__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__14027,p__14028,selections,field,id){
var vec__14069 = p__14027;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(0),null);
var map__14070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(1),null);
var map__14070__$1 = ((cljs.core.seq_QMARK_(map__14070))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14070):map__14070);
var attrs = map__14070__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14070__$1,cljs.core.constant$keyword$touch_DASH_event);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14070__$1,cljs.core.constant$keyword$key);
var body = cljs.core.nthnext(vec__14069,(2));
var map__14071 = p__14028;
var map__14071__$1 = ((cljs.core.seq_QMARK_(map__14071))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14071):map__14071);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14071__$1,cljs.core.constant$keyword$multi_DASH_select);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14071__$1,cljs.core.constant$keyword$save_BANG_);
var handle_click_BANG_ = ((function (vec__14069,type,map__14070,map__14070__$1,attrs,touch_event,key,body,map__14071,map__14071__$1,multi_select,save_BANG_){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__14099 = id;
var G__14100 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__14101 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14101) : cljs.core.deref.call(null,G__14101));
})()));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__14099,G__14100) : save_BANG_.call(null,G__14099,G__14100));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14102 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14102) : cljs.core.deref.call(null,G__14102));
})(),key);
var G__14103_14109 = selections;
var G__14104_14110 = new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14103_14109,G__14104_14110) : cljs.core.reset_BANG_.call(null,G__14103_14109,G__14104_14110));

var G__14105 = id;
var G__14106 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14107 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14107) : cljs.core.deref.call(null,G__14107));
})(),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__14105,G__14106) : save_BANG_.call(null,G__14105,G__14106));
}
});})(vec__14069,type,map__14070,map__14070__$1,attrs,touch_event,key,body,map__14071,map__14071__$1,multi_select,save_BANG_))
;
return ((function (vec__14069,type,map__14070,map__14070__$1,attrs,touch_event,key,body,map__14071,map__14071__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$class,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14108 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14108) : cljs.core.deref.call(null,G__14108));
})(),key))?"active":null),(function (){var or__4099__auto__ = touch_event;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.constant$keyword$on_DASH_click;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__14069,type,map__14070,map__14070__$1,attrs,touch_event,key,body,map__14071,map__14071__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__14111){
var map__14117 = p__14111;
var map__14117__$1 = ((cljs.core.seq_QMARK_(map__14117))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14117):map__14117);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14117__$1,cljs.core.constant$keyword$multi_DASH_select);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14117__$1,cljs.core.constant$keyword$get);
var value = (function (){var G__14118 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__14118) : get.call(null,G__14118));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__14117,map__14117__$1,multi_select,get){
return (function (m,p__14119){
var vec__14120 = p__14119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14120,(0),null);
var map__14121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14120,(1),null);
var map__14121__$1 = ((cljs.core.seq_QMARK_(map__14121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14121):map__14121);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14121__$1,cljs.core.constant$keyword$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__14117,map__14117__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__14124,p__14125){
var vec__14134 = p__14124;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14134,(0),null);
var map__14135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14134,(1),null);
var map__14135__$1 = ((cljs.core.seq_QMARK_(map__14135))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14135):map__14135);
var attrs = map__14135__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14135__$1,cljs.core.constant$keyword$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14135__$1,cljs.core.constant$keyword$field);
var selection_items = cljs.core.nthnext(vec__14134,(2));
var map__14136 = p__14125;
var map__14136__$1 = ((cljs.core.seq_QMARK_(map__14136))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14136):map__14136);
var opts = map__14136__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14136__$1,cljs.core.constant$keyword$get);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$visible_QMARK_,cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.constant$keyword$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get){
return (function (){
if(cljs.core.truth_((function (){var G__14137 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__14137) : get.call(null,G__14137));
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get){
return (function (p1__14122_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get){
return (function (p__14138){
var vec__14139 = p__14138;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14139,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get))
,p1__14122_SHARP_));
});})(selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get){
return (function (p1__14123_SHARP_){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__14123_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
var G__14140 = (function (){var G__14141 = cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14141) : cljs.core.deref.call(null,G__14141));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14140) : visible_QMARK_.call(null,G__14140));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__14134,type,map__14135,map__14135__$1,attrs,id,field,selection_items,map__14136,map__14136__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$single_DASH_select,(function (p__14142,p__14143){
var vec__14144 = p__14142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14144,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14144,(1),null);
var field = vec__14144;
var map__14145 = p__14143;
var map__14145__$1 = ((cljs.core.seq_QMARK_(map__14145))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14145):map__14145);
var opts = map__14145__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14145__$1,cljs.core.constant$keyword$doc);
return ((function (vec__14144,_,attrs,field,map__14145,map__14145__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__14146 = (function (){var G__14147 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14147) : cljs.core.deref.call(null,G__14147));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__14146) : visible__12226__auto__.call(null,G__14146));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__14144,_,attrs,field,map__14145,map__14145__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$multi_DASH_select,(function (p__14148,p__14149){
var vec__14150 = p__14148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150,(1),null);
var field = vec__14150;
var map__14151 = p__14149;
var map__14151__$1 = ((cljs.core.seq_QMARK_(map__14151))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14151):map__14151);
var opts = map__14151__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14151__$1,cljs.core.constant$keyword$doc);
return ((function (vec__14150,_,attrs,field,map__14151,map__14151__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__14152 = (function (){var G__14153 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14153) : cljs.core.deref.call(null,G__14153));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__14152) : visible__12226__auto__.call(null,G__14152));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$multi_DASH_select,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$multi_DASH_select,true)], null);
}
});
;})(vec__14150,_,attrs,field,map__14151,map__14151__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4853__auto__ = (function reagent_forms$core$map_options_$_iter__14168(s__14169){
return (new cljs.core.LazySeq(null,(function (){
var s__14169__$1 = s__14169;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__14169__$1);
if(temp__4126__auto__){
var s__14169__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14169__$2)){
var c__4851__auto__ = cljs.core.chunk_first(s__14169__$2);
var size__4852__auto__ = cljs.core.count(c__4851__auto__);
var b__14171 = cljs.core.chunk_buffer(size__4852__auto__);
if((function (){var i__14170 = (0);
while(true){
if((i__14170 < size__4852__auto__)){
var vec__14178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4851__auto__,i__14170);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(0),null);
var map__14179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(1),null);
var map__14179__$1 = ((cljs.core.seq_QMARK_(map__14179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14179):map__14179);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,cljs.core.constant$keyword$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(2),null);
cljs.core.chunk_append(b__14171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__14182 = (i__14170 + (1));
i__14170 = G__14182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14171),reagent_forms$core$map_options_$_iter__14168(cljs.core.chunk_rest(s__14169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14171),null);
}
} else {
var vec__14180 = cljs.core.first(s__14169__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(0),null);
var map__14181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(1),null);
var map__14181__$1 = ((cljs.core.seq_QMARK_(map__14181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14181):map__14181);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14181__$1,cljs.core.constant$keyword$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__14168(cljs.core.rest(s__14169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4853__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14183_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__14183_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$list,(function (p__14186,p__14187){
var vec__14188 = p__14186;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(0),null);
var map__14189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(1),null);
var map__14189__$1 = ((cljs.core.seq_QMARK_(map__14189))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14189):map__14189);
var attrs = map__14189__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14189__$1,cljs.core.constant$keyword$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14189__$1,cljs.core.constant$keyword$field);
var options = cljs.core.nthnext(vec__14188,(2));
var map__14190 = p__14187;
var map__14190__$1 = ((cljs.core.seq_QMARK_(map__14190))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14190):map__14190);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14190__$1,cljs.core.constant$keyword$save_BANG_);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14190__$1,cljs.core.constant$keyword$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14190__$1,cljs.core.constant$keyword$doc);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4099__auto__ = (function (){var G__14192 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__14192) : get.call(null,G__14192));
})();
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$key], null));
}
})());
var G__14193_14208 = id;
var G__14194_14209 = (function (){var G__14195 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14195) : cljs.core.deref.call(null,G__14195));
})();
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__14193_14208,G__14194_14209) : save_BANG_.call(null,G__14193_14208,G__14194_14209));

return ((function (options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12226__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__14196 = (function (){var G__14197 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14197) : cljs.core.deref.call(null,G__14197));
})();
return (visible__12226__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12226__auto__.cljs$core$IFn$_invoke$arity$1(G__14196) : visible__12226__auto__.call(null,G__14196));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$default_DASH_value,reagent_forms.core.default_selection(options__$1,(function (){var G__14198 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14198) : cljs.core.deref.call(null,G__14198));
})()),cljs.core.constant$keyword$on_DASH_change,((function (visible__12226__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc){
return (function (p1__14184_SHARP_){
var G__14199 = id;
var G__14200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__14184_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__14199,G__14200) : save_BANG_.call(null,G__14199,G__14200));
});})(visible__12226__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__12226__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc){
return (function (p1__14185_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__14185_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__14201 = (function (){var G__14202 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14202) : cljs.core.deref.call(null,G__14202));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14201) : visible_QMARK_.call(null,G__14201));
} else {
return true;
}
});})(visible__12226__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$default_DASH_value,reagent_forms.core.default_selection(options__$1,(function (){var G__14203 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14203) : cljs.core.deref.call(null,G__14203));
})()),cljs.core.constant$keyword$on_DASH_change,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc){
return (function (p1__14184_SHARP_){
var G__14204 = id;
var G__14205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__14184_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__14204,G__14205) : save_BANG_.call(null,G__14204,G__14205));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc){
return (function (p1__14185_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__14185_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__14206 = (function (){var G__14207 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14207) : cljs.core.deref.call(null,G__14207));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14206) : visible_QMARK_.call(null,G__14206));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__14188,type,map__14189,map__14189__$1,attrs,id,field,options,map__14190,map__14190__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.constant$keyword$field));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(){
var argseq__5139__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5139__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$doc,doc,cljs.core.constant$keyword$get,(function (p1__14210_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__14214 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14214) : cljs.core.deref.call(null,G__14214));
})(),(function (){var G__14215 = p1__14210_SHARP_;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__14215) : reagent_forms.core.id__GT_path.call(null,G__14215));
})());
}),cljs.core.constant$keyword$save_BANG_,reagent_forms.core.mk_save_fn(doc,events)], null);
var form__$1 = clojure.walk.postwalk(((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_(node))){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (function (){var G__14216 = node;
var G__14217 = opts__$1;
return (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(G__14216,G__14217) : reagent_forms.core.init_field.call(null,G__14216,G__14217));
})();
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq14211){
var G__14212 = cljs.core.first(seq14211);
var seq14211__$1 = cljs.core.next(seq14211);
var G__14213 = cljs.core.first(seq14211__$1);
var seq14211__$2 = cljs.core.next(seq14211__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__14212,G__14213,seq14211__$2);
});

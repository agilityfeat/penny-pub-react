// Compiled by ClojureScript 0.0-3178 {}
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
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__12821_SHARP_,p2__12820_SHARP_){
var or__4099__auto__ = p2__12820_SHARP_.call(null,path,value,p1__12821_SHARP_);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return p1__12821_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var in_fn = temp__4124__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var out_fn = temp__4124__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__4994__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4995__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4996__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4997__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4998__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__4087__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__4087__auto__){
return fmt;
} else {
return and__4087__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(cljs.core.truth_(reagent_forms.core.valid_number_ending_QMARK_.call(null,n))){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__4994__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4995__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4996__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4997__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4998__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (p__12822,_){
var map__12823 = p__12822;
var map__12823__$1 = ((cljs.core.seq_QMARK_.call(null,map__12823))?cljs.core.apply.call(null,cljs.core.hash_map,map__12823):map__12823);
var field = cljs.core.get.call(null,map__12823__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__12825,p__12826){
var map__12827 = p__12825;
var map__12827__$1 = ((cljs.core.seq_QMARK_.call(null,map__12827))?cljs.core.apply.call(null,cljs.core.hash_map,map__12827):map__12827);
var fmt = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__12828 = p__12826;
var map__12828__$1 = ((cljs.core.seq_QMARK_.call(null,map__12828))?cljs.core.apply.call(null,cljs.core.hash_map,map__12828):map__12828);
var doc = cljs.core.get.call(null,map__12828__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__12828__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12828__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__4099__auto__ = get.call(null,id);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__12827,map__12827__$1,fmt,id,field,map__12828,map__12828__$1,doc,save_BANG_,get){
return (function (p1__12824_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__12824_SHARP_)));
});})(map__12827,map__12827__$1,fmt,id,field,map__12828,map__12828__$1,doc,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__12829,p__12830){
var map__12831 = p__12829;
var map__12831__$1 = ((cljs.core.seq_QMARK_.call(null,map__12831))?cljs.core.apply.call(null,cljs.core.hash_map,map__12831):map__12831);
var id = cljs.core.get.call(null,map__12831__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__12832 = p__12830;
var map__12832__$1 = ((cljs.core.seq_QMARK_.call(null,map__12832))?cljs.core.apply.call(null,cljs.core.hash_map,map__12832):map__12832);
var save_BANG_ = cljs.core.get.call(null,map__12832__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12832__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__12831,map__12831__$1,id,map__12832,map__12832__$1,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__12831,map__12831__$1,id,map__12832,map__12832__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(){
var argseq__5139__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5139__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12836,opts,p__12837){
var vec__12838 = p__12836;
var type = cljs.core.nth.call(null,vec__12838,(0),null);
var attrs = cljs.core.nth.call(null,vec__12838,(1),null);
var body = cljs.core.nthnext.call(null,vec__12838,(2));
var vec__12839 = p__12837;
var default_attrs = cljs.core.nth.call(null,vec__12839,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq12833){
var G__12834 = cljs.core.first.call(null,seq12833);
var seq12833__$1 = cljs.core.next.call(null,seq12833);
var G__12835 = cljs.core.first.call(null,seq12833__$1);
var seq12833__$2 = cljs.core.next.call(null,seq12833__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__12834,G__12835,seq12833__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__4994__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4995__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4996__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4997__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4998__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (p__12840,_){
var vec__12841 = p__12840;
var ___$1 = cljs.core.nth.call(null,vec__12841,(0),null);
var map__12842 = cljs.core.nth.call(null,vec__12841,(1),null);
var map__12842__$1 = ((cljs.core.seq_QMARK_.call(null,map__12842))?cljs.core.apply.call(null,cljs.core.hash_map,map__12842):map__12842);
var field = cljs.core.get.call(null,map__12842__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__12843,p__12844){
var vec__12845 = p__12843;
var _ = cljs.core.nth.call(null,vec__12845,(0),null);
var attrs = cljs.core.nth.call(null,vec__12845,(1),null);
var component = vec__12845;
var map__12846 = p__12844;
var map__12846__$1 = ((cljs.core.seq_QMARK_.call(null,map__12846))?cljs.core.apply.call(null,cljs.core.hash_map,map__12846):map__12846);
var doc = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12845,_,attrs,component,map__12846,map__12846__$1,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__12845,_,attrs,component,map__12846,map__12846__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__12847,p__12848){
var vec__12849 = p__12847;
var _ = cljs.core.nth.call(null,vec__12849,(0),null);
var map__12850 = cljs.core.nth.call(null,vec__12849,(1),null);
var map__12850__$1 = ((cljs.core.seq_QMARK_.call(null,map__12850))?cljs.core.apply.call(null,cljs.core.hash_map,map__12850):map__12850);
var attrs = map__12850__$1;
var field = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__12849;
var map__12851 = p__12848;
var map__12851__$1 = ((cljs.core.seq_QMARK_.call(null,map__12851))?cljs.core.apply.call(null,cljs.core.hash_map,map__12851):map__12851);
var opts = map__12851__$1;
var doc = cljs.core.get.call(null,map__12851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12849,_,map__12850,map__12850__$1,attrs,field,component,map__12851,map__12851__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__12849,_,map__12850,map__12850__$1,attrs,field,component,map__12851,map__12851__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__12853,p__12854){
var vec__12855 = p__12853;
var type = cljs.core.nth.call(null,vec__12855,(0),null);
var map__12856 = cljs.core.nth.call(null,vec__12855,(1),null);
var map__12856__$1 = ((cljs.core.seq_QMARK_.call(null,map__12856))?cljs.core.apply.call(null,cljs.core.hash_map,map__12856):map__12856);
var attrs = map__12856__$1;
var fmt = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__12857 = p__12854;
var map__12857__$1 = ((cljs.core.seq_QMARK_.call(null,map__12857))?cljs.core.apply.call(null,cljs.core.hash_map,map__12857):map__12857);
var save_BANG_ = cljs.core.get.call(null,map__12857__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12857__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__12855,type,map__12856,map__12856__$1,attrs,fmt,id,map__12857,map__12857__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__4099__auto__ = get.call(null,id);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})();
var map__12858 = cljs.core.deref.call(null,display_value);
var map__12858__$1 = ((cljs.core.seq_QMARK_.call(null,map__12858))?cljs.core.apply.call(null,cljs.core.hash_map,map__12858):map__12858);
var value = cljs.core.get.call(null,map__12858__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__12858__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6591__auto__,temp__4124__auto__,display_value,vec__12855,type,map__12856,map__12856__$1,attrs,fmt,id,map__12857,map__12857__$1,save_BANG_,get,doc){
return (function (p1__12852_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__12852_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(visible__6591__auto__,temp__4124__auto__,display_value,vec__12855,type,map__12856,map__12856__$1,attrs,fmt,id,map__12857,map__12857__$1,save_BANG_,get,doc))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__4099__auto__ = get.call(null,id);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})();
var map__12859 = cljs.core.deref.call(null,display_value);
var map__12859__$1 = ((cljs.core.seq_QMARK_.call(null,map__12859))?cljs.core.apply.call(null,cljs.core.hash_map,map__12859):map__12859);
var value = cljs.core.get.call(null,map__12859__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__12859__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,display_value,vec__12855,type,map__12856,map__12856__$1,attrs,fmt,id,map__12857,map__12857__$1,save_BANG_,get,doc){
return (function (p1__12852_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__12852_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(temp__4124__auto__,display_value,vec__12855,type,map__12856,map__12856__$1,attrs,fmt,id,map__12857,map__12857__$1,save_BANG_,get,doc))
], null),attrs)], null);
}
});
;})(display_value,vec__12855,type,map__12856,map__12856__$1,attrs,fmt,id,map__12857,map__12857__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__12861,p__12862){
var vec__12863 = p__12861;
var _ = cljs.core.nth.call(null,vec__12863,(0),null);
var map__12864 = cljs.core.nth.call(null,vec__12863,(1),null);
var map__12864__$1 = ((cljs.core.seq_QMARK_.call(null,map__12864))?cljs.core.apply.call(null,cljs.core.hash_map,map__12864):map__12864);
var attrs = map__12864__$1;
var auto_close_QMARK_ = cljs.core.get.call(null,map__12864__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var inline = cljs.core.get.call(null,map__12864__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var date_format = cljs.core.get.call(null,map__12864__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var id = cljs.core.get.call(null,map__12864__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__12865 = p__12862;
var map__12865__$1 = ((cljs.core.seq_QMARK_.call(null,map__12865))?cljs.core.apply.call(null,cljs.core.hash_map,map__12865):map__12865);
var save_BANG_ = cljs.core.get.call(null,map__12865__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12865__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12865__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
,((function (visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (p1__12860_SHARP_){
return save_BANG_.call(null,id,p1__12860_SHARP_);
});})(visible__6591__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc){
return (function (p1__12860_SHARP_){
return save_BANG_.call(null,id,p1__12860_SHARP_);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__12863,_,map__12864,map__12864__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__12865,map__12865__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__12866,p__12867){
var vec__12868 = p__12866;
var _ = cljs.core.nth.call(null,vec__12868,(0),null);
var map__12869 = cljs.core.nth.call(null,vec__12868,(1),null);
var map__12869__$1 = ((cljs.core.seq_QMARK_.call(null,map__12869))?cljs.core.apply.call(null,cljs.core.hash_map,map__12869):map__12869);
var attrs = map__12869__$1;
var field = cljs.core.get.call(null,map__12869__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__12869__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__12868;
var map__12870 = p__12867;
var map__12870__$1 = ((cljs.core.seq_QMARK_.call(null,map__12870))?cljs.core.apply.call(null,cljs.core.hash_map,map__12870):map__12870);
var opts = map__12870__$1;
var get = cljs.core.get.call(null,map__12870__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12868,_,map__12869,map__12869__$1,attrs,field,id,component,map__12870,map__12870__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__12868,_,map__12869,map__12869__$1,attrs,field,id,component,map__12870,map__12870__$1,opts,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__12871,p__12872){
var vec__12873 = p__12871;
var type = cljs.core.nth.call(null,vec__12873,(0),null);
var map__12874 = cljs.core.nth.call(null,vec__12873,(1),null);
var map__12874__$1 = ((cljs.core.seq_QMARK_.call(null,map__12874))?cljs.core.apply.call(null,cljs.core.hash_map,map__12874):map__12874);
var attrs = map__12874__$1;
var placeholder = cljs.core.get.call(null,map__12874__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__12874__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__12874__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__12874__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__12875 = p__12872;
var map__12875__$1 = ((cljs.core.seq_QMARK_.call(null,map__12875))?cljs.core.apply.call(null,cljs.core.hash_map,map__12875):map__12875);
var get = cljs.core.get.call(null,map__12875__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12873,type,map__12874,map__12874__$1,attrs,placeholder,postamble,preamble,id,map__12875,map__12875__$1,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__12873,type,map__12874,map__12874__$1,attrs,placeholder,postamble,preamble,id,map__12875,map__12875__$1,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__12876,p__12877){
var vec__12878 = p__12876;
var type = cljs.core.nth.call(null,vec__12878,(0),null);
var map__12879 = cljs.core.nth.call(null,vec__12878,(1),null);
var map__12879__$1 = ((cljs.core.seq_QMARK_.call(null,map__12879))?cljs.core.apply.call(null,cljs.core.hash_map,map__12879):map__12879);
var attrs = map__12879__$1;
var touch_event = cljs.core.get.call(null,map__12879__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__12879__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__12879__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__12878,(2));
var map__12880 = p__12877;
var map__12880__$1 = ((cljs.core.seq_QMARK_.call(null,map__12880))?cljs.core.apply.call(null,cljs.core.hash_map,map__12880):map__12880);
var opts = map__12880__$1;
var save_BANG_ = cljs.core.get.call(null,map__12880__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12880__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12878,type,map__12879,map__12879__$1,attrs,touch_event,event,id,body,map__12880,map__12880__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__4099__auto__ = touch_event;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,visible__6591__auto__,temp__4124__auto__,vec__12878,type,map__12879,map__12879__$1,attrs,touch_event,event,id,body,map__12880,map__12880__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,visible__6591__auto__,temp__4124__auto__,vec__12878,type,map__12879,map__12879__$1,attrs,touch_event,event,id,body,map__12880,map__12880__$1,opts,save_BANG_,get,doc))
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
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__4099__auto__ = touch_event;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__12878,type,map__12879,map__12879__$1,attrs,touch_event,event,id,body,map__12880,map__12880__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__12878,type,map__12879,map__12879__$1,attrs,touch_event,event,id,body,map__12880,map__12880__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__12878,type,map__12879,map__12879__$1,attrs,touch_event,event,id,body,map__12880,map__12880__$1,opts,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__12881,p__12882){
var vec__12883 = p__12881;
var type = cljs.core.nth.call(null,vec__12883,(0),null);
var map__12884 = cljs.core.nth.call(null,vec__12883,(1),null);
var map__12884__$1 = ((cljs.core.seq_QMARK_.call(null,map__12884))?cljs.core.apply.call(null,cljs.core.hash_map,map__12884):map__12884);
var attrs = map__12884__$1;
var value = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__12883,(2));
var map__12885 = p__12882;
var map__12885__$1 = ((cljs.core.seq_QMARK_.call(null,map__12885))?cljs.core.apply.call(null,cljs.core.hash_map,map__12885):map__12885);
var save_BANG_ = cljs.core.get.call(null,map__12885__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12885__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12885__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12883,type,map__12884,map__12884__$1,attrs,value,name,field,body,map__12885,map__12885__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6591__auto__,temp__4124__auto__,vec__12883,type,map__12884,map__12884__$1,attrs,value,name,field,body,map__12885,map__12885__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__6591__auto__,temp__4124__auto__,vec__12883,type,map__12884,map__12884__$1,attrs,value,name,field,body,map__12885,map__12885__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,vec__12883,type,map__12884,map__12884__$1,attrs,value,name,field,body,map__12885,map__12885__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4124__auto__,vec__12883,type,map__12884,map__12884__$1,attrs,value,name,field,body,map__12885,map__12885__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
}
});
;})(vec__12883,type,map__12884,map__12884__$1,attrs,value,name,field,body,map__12885,map__12885__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__12889,p__12890){
var vec__12891 = p__12889;
var type = cljs.core.nth.call(null,vec__12891,(0),null);
var map__12892 = cljs.core.nth.call(null,vec__12891,(1),null);
var map__12892__$1 = ((cljs.core.seq_QMARK_.call(null,map__12892))?cljs.core.apply.call(null,cljs.core.hash_map,map__12892):map__12892);
var attrs = map__12892__$1;
var highlight_class = cljs.core.get.call(null,map__12892__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var item_class = cljs.core.get.call(null,map__12892__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var list_class = cljs.core.get.call(null,map__12892__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var input_class = cljs.core.get.call(null,map__12892__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var data_source = cljs.core.get.call(null,map__12892__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var id = cljs.core.get.call(null,map__12892__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__12893 = p__12890;
var map__12893__$1 = ((cljs.core.seq_QMARK_.call(null,map__12893))?cljs.core.apply.call(null,cljs.core.hash_map,map__12893):map__12893);
var save_BANG_ = cljs.core.get.call(null,map__12893__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12893__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(0));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
}
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (p1__12886_SHARP_){
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,reagent_forms.core.value_of.call(null,p1__12886_SHARP_).toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__12886_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (p1__12887_SHARP_){
var G__12894 = p1__12887_SHARP_.which;
switch (G__12894) {
case (38):
p1__12887_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0)))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) - (1)));
} else {
return null;
}

break;
case (40):
p1__12887_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1))))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) + (1)));
} else {
return null;
}

break;
case (13):
save_BANG_.call(null,id,cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index)));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__4099__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__4099__auto__){
return or__4099__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (p1__12888_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__12888_SHARP_.target.getAttribute("tabIndex")));
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
], null),result], null);
});})(visible__6591__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (p1__12886_SHARP_){
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,reagent_forms.core.value_of.call(null,p1__12886_SHARP_).toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__12886_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (p1__12887_SHARP_){
var G__12895 = p1__12887_SHARP_.which;
switch (G__12895) {
case (38):
p1__12887_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0)))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) - (1)));
} else {
return null;
}

break;
case (40):
p1__12887_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1))))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) + (1)));
} else {
return null;
}

break;
case (13):
save_BANG_.call(null,id,cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index)));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__4099__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__4099__auto__){
return or__4099__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (p1__12888_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__12888_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
], null),result], null);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__12891,type,map__12892,map__12892__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__12893,map__12893__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__12898,p__12899,selections,field,id){
var vec__12903 = p__12898;
var type = cljs.core.nth.call(null,vec__12903,(0),null);
var map__12904 = cljs.core.nth.call(null,vec__12903,(1),null);
var map__12904__$1 = ((cljs.core.seq_QMARK_.call(null,map__12904))?cljs.core.apply.call(null,cljs.core.hash_map,map__12904):map__12904);
var attrs = map__12904__$1;
var touch_event = cljs.core.get.call(null,map__12904__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__12904__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__12903,(2));
var map__12905 = p__12899;
var map__12905__$1 = ((cljs.core.seq_QMARK_.call(null,map__12905))?cljs.core.apply.call(null,cljs.core.hash_map,map__12905):map__12905);
var multi_select = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var handle_click_BANG_ = ((function (vec__12903,type,map__12904,map__12904__$1,attrs,touch_event,key,body,map__12905,map__12905__$1,multi_select,save_BANG_){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__12903,type,map__12904,map__12904__$1,attrs,touch_event,key,body,map__12905,map__12905__$1,multi_select,save_BANG_))
;
return ((function (vec__12903,type,map__12904,map__12904__$1,attrs,touch_event,key,body,map__12905,map__12905__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__4099__auto__ = touch_event;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__12903,type,map__12904,map__12904__$1,attrs,touch_event,key,body,map__12905,map__12905__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__12906){
var map__12911 = p__12906;
var map__12911__$1 = ((cljs.core.seq_QMARK_.call(null,map__12911))?cljs.core.apply.call(null,cljs.core.hash_map,map__12911):map__12911);
var multi_select = cljs.core.get.call(null,map__12911__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__12911__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__12911,map__12911__$1,multi_select,get){
return (function (m,p__12912){
var vec__12913 = p__12912;
var _ = cljs.core.nth.call(null,vec__12913,(0),null);
var map__12914 = cljs.core.nth.call(null,vec__12913,(1),null);
var map__12914__$1 = ((cljs.core.seq_QMARK_.call(null,map__12914))?cljs.core.apply.call(null,cljs.core.hash_map,map__12914):map__12914);
var key = cljs.core.get.call(null,map__12914__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__12911,map__12911__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__12917,p__12918){
var vec__12924 = p__12917;
var type = cljs.core.nth.call(null,vec__12924,(0),null);
var map__12925 = cljs.core.nth.call(null,vec__12924,(1),null);
var map__12925__$1 = ((cljs.core.seq_QMARK_.call(null,map__12925))?cljs.core.apply.call(null,cljs.core.hash_map,map__12925):map__12925);
var attrs = map__12925__$1;
var id = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__12924,(2));
var map__12926 = p__12918;
var map__12926__$1 = ((cljs.core.seq_QMARK_.call(null,map__12926))?cljs.core.apply.call(null,cljs.core.hash_map,map__12926):map__12926);
var opts = map__12926__$1;
var get = cljs.core.get.call(null,map__12926__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get){
return (function (p1__12915_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get){
return (function (p__12927){
var vec__12928 = p__12927;
var k = cljs.core.nth.call(null,vec__12928,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get))
,p1__12915_SHARP_));
});})(selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get){
return (function (p1__12916_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__12916_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__12924,type,map__12925,map__12925__$1,attrs,id,field,selection_items,map__12926,map__12926__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__12929,p__12930){
var vec__12931 = p__12929;
var _ = cljs.core.nth.call(null,vec__12931,(0),null);
var attrs = cljs.core.nth.call(null,vec__12931,(1),null);
var field = vec__12931;
var map__12932 = p__12930;
var map__12932__$1 = ((cljs.core.seq_QMARK_.call(null,map__12932))?cljs.core.apply.call(null,cljs.core.hash_map,map__12932):map__12932);
var opts = map__12932__$1;
var doc = cljs.core.get.call(null,map__12932__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12931,_,attrs,field,map__12932,map__12932__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__12931,_,attrs,field,map__12932,map__12932__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__12933,p__12934){
var vec__12935 = p__12933;
var _ = cljs.core.nth.call(null,vec__12935,(0),null);
var attrs = cljs.core.nth.call(null,vec__12935,(1),null);
var field = vec__12935;
var map__12936 = p__12934;
var map__12936__$1 = ((cljs.core.seq_QMARK_.call(null,map__12936))?cljs.core.apply.call(null,cljs.core.hash_map,map__12936):map__12936);
var opts = map__12936__$1;
var doc = cljs.core.get.call(null,map__12936__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__12935,_,attrs,field,map__12936,map__12936__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__12935,_,attrs,field,map__12936,map__12936__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4853__auto__ = (function reagent_forms$core$map_options_$_iter__12949(s__12950){
return (new cljs.core.LazySeq(null,(function (){
var s__12950__$1 = s__12950;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12950__$1);
if(temp__4126__auto__){
var s__12950__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12950__$2)){
var c__4851__auto__ = cljs.core.chunk_first.call(null,s__12950__$2);
var size__4852__auto__ = cljs.core.count.call(null,c__4851__auto__);
var b__12952 = cljs.core.chunk_buffer.call(null,size__4852__auto__);
if((function (){var i__12951 = (0);
while(true){
if((i__12951 < size__4852__auto__)){
var vec__12957 = cljs.core._nth.call(null,c__4851__auto__,i__12951);
var _ = cljs.core.nth.call(null,vec__12957,(0),null);
var map__12958 = cljs.core.nth.call(null,vec__12957,(1),null);
var map__12958__$1 = ((cljs.core.seq_QMARK_.call(null,map__12958))?cljs.core.apply.call(null,cljs.core.hash_map,map__12958):map__12958);
var key = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__12957,(2),null);
cljs.core.chunk_append.call(null,b__12952,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__12961 = (i__12951 + (1));
i__12951 = G__12961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12952),reagent_forms$core$map_options_$_iter__12949.call(null,cljs.core.chunk_rest.call(null,s__12950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12952),null);
}
} else {
var vec__12959 = cljs.core.first.call(null,s__12950__$2);
var _ = cljs.core.nth.call(null,vec__12959,(0),null);
var map__12960 = cljs.core.nth.call(null,vec__12959,(1),null);
var map__12960__$1 = ((cljs.core.seq_QMARK_.call(null,map__12960))?cljs.core.apply.call(null,cljs.core.hash_map,map__12960):map__12960);
var key = cljs.core.get.call(null,map__12960__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__12959,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__12949.call(null,cljs.core.rest.call(null,s__12950__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4853__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12962_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__12962_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__12965,p__12966){
var vec__12967 = p__12965;
var type = cljs.core.nth.call(null,vec__12967,(0),null);
var map__12968 = cljs.core.nth.call(null,vec__12967,(1),null);
var map__12968__$1 = ((cljs.core.seq_QMARK_.call(null,map__12968))?cljs.core.apply.call(null,cljs.core.hash_map,map__12968):map__12968);
var attrs = map__12968__$1;
var id = cljs.core.get.call(null,map__12968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__12968__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__12967,(2));
var map__12969 = p__12966;
var map__12969__$1 = ((cljs.core.seq_QMARK_.call(null,map__12969))?cljs.core.apply.call(null,cljs.core.hash_map,map__12969):map__12969);
var save_BANG_ = cljs.core.get.call(null,map__12969__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__12969__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__12969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__4099__auto__ = get.call(null,id);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6591__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6591__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6591__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc){
return (function (p1__12963_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__12963_SHARP_)));
});})(visible__6591__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__6591__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc){
return (function (p1__12964_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12964_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__6591__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc){
return (function (p1__12963_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__12963_SHARP_)));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc){
return (function (p1__12964_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12964_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__12967,type,map__12968,map__12968__$1,attrs,id,field,options,map__12969,map__12969__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
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
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__12970_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__12970_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
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

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq12971){
var G__12972 = cljs.core.first.call(null,seq12971);
var seq12971__$1 = cljs.core.next.call(null,seq12971);
var G__12973 = cljs.core.first.call(null,seq12971__$1);
var seq12971__$2 = cljs.core.next.call(null,seq12971__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__12972,G__12973,seq12971__$2);
});

//# sourceMappingURL=core.js.map
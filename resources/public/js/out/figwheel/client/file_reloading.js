// Compiled by ClojureScript 0.0-3178 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__14682_SHARP_,p2__14683_SHARP_){
var and__4087__auto__ = p1__14682_SHARP_;
if(cljs.core.truth_(and__4087__auto__)){
return p2__14683_SHARP_;
} else {
return and__4087__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4099__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4099__auto__){
return or__4099__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__14685_SHARP_,p2__14684_SHARP_){
return [cljs.core.str(p2__14684_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4099__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4099__auto__){
return or__4099__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4099__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__4994__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4995__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4996__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4997__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4998__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14686){
var map__14687 = p__14686;
var map__14687__$1 = ((cljs.core.seq_QMARK_.call(null,map__14687))?cljs.core.apply.call(null,cljs.core.hash_map,map__14687):map__14687);
var file = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__14688){
var map__14689 = p__14688;
var map__14689__$1 = ((cljs.core.seq_QMARK_.call(null,map__14689))?cljs.core.apply.call(null,cljs.core.hash_map,map__14689):map__14689);
var namespace = cljs.core.get.call(null,map__14689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__4994__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4995__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4996__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4997__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4998__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e14690){if((e14690 instanceof Error)){
var e = e14690;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14690;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__14692 = arguments.length;
switch (G__14692) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14694,callback){
var map__14696 = p__14694;
var map__14696__$1 = ((cljs.core.seq_QMARK_.call(null,map__14696))?cljs.core.apply.call(null,cljs.core.hash_map,map__14696):map__14696);
var file_msg = map__14696__$1;
var request_url = cljs.core.get.call(null,map__14696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14696,map__14696__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14696,map__14696__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14697){
var map__14699 = p__14697;
var map__14699__$1 = ((cljs.core.seq_QMARK_.call(null,map__14699))?cljs.core.apply.call(null,cljs.core.hash_map,map__14699):map__14699);
var file_msg = map__14699__$1;
var meta_data = cljs.core.get.call(null,map__14699__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__14699__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4099__auto__ = meta_data;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4087__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4087__auto__){
var or__4099__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
var and__4087__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4087__auto____$1){
var or__4099__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4099__auto____$2){
return or__4099__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4087__auto____$1;
}
}
}
} else {
return and__4087__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14700,callback){
var map__14702 = p__14700;
var map__14702__$1 = ((cljs.core.seq_QMARK_.call(null,map__14702))?cljs.core.apply.call(null,cljs.core.hash_map,map__14702):map__14702);
var file_msg = map__14702__$1;
var namespace = cljs.core.get.call(null,map__14702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__14702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__8199__auto___14789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___14789,out){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___14789,out){
return (function (state_14771){
var state_val_14772 = (state_14771[(1)]);
if((state_val_14772 === (7))){
var inst_14755 = (state_14771[(7)]);
var inst_14761 = (state_14771[(2)]);
var inst_14762 = cljs.core.async.put_BANG_.call(null,out,inst_14761);
var inst_14751 = inst_14755;
var state_14771__$1 = (function (){var statearr_14773 = state_14771;
(statearr_14773[(8)] = inst_14762);

(statearr_14773[(9)] = inst_14751);

return statearr_14773;
})();
var statearr_14774_14790 = state_14771__$1;
(statearr_14774_14790[(2)] = null);

(statearr_14774_14790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (6))){
var inst_14767 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14775_14791 = state_14771__$1;
(statearr_14775_14791[(2)] = inst_14767);

(statearr_14775_14791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (5))){
var inst_14765 = cljs.core.async.close_BANG_.call(null,out);
var state_14771__$1 = state_14771;
var statearr_14776_14792 = state_14771__$1;
(statearr_14776_14792[(2)] = inst_14765);

(statearr_14776_14792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (4))){
var inst_14754 = (state_14771[(10)]);
var inst_14759 = figwheel.client.file_reloading.reload_js_file.call(null,inst_14754);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14771__$1,(7),inst_14759);
} else {
if((state_val_14772 === (3))){
var inst_14769 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14771__$1,inst_14769);
} else {
if((state_val_14772 === (2))){
var inst_14751 = (state_14771[(9)]);
var inst_14754 = (state_14771[(10)]);
var inst_14754__$1 = cljs.core.nth.call(null,inst_14751,(0),null);
var inst_14755 = cljs.core.nthnext.call(null,inst_14751,(1));
var inst_14756 = (inst_14754__$1 == null);
var inst_14757 = cljs.core.not.call(null,inst_14756);
var state_14771__$1 = (function (){var statearr_14777 = state_14771;
(statearr_14777[(7)] = inst_14755);

(statearr_14777[(10)] = inst_14754__$1);

return statearr_14777;
})();
if(inst_14757){
var statearr_14778_14793 = state_14771__$1;
(statearr_14778_14793[(1)] = (4));

} else {
var statearr_14779_14794 = state_14771__$1;
(statearr_14779_14794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (1))){
var inst_14749 = cljs.core.nth.call(null,files,(0),null);
var inst_14750 = cljs.core.nthnext.call(null,files,(1));
var inst_14751 = files;
var state_14771__$1 = (function (){var statearr_14780 = state_14771;
(statearr_14780[(11)] = inst_14750);

(statearr_14780[(12)] = inst_14749);

(statearr_14780[(9)] = inst_14751);

return statearr_14780;
})();
var statearr_14781_14795 = state_14771__$1;
(statearr_14781_14795[(2)] = null);

(statearr_14781_14795[(1)] = (2));


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
});})(c__8199__auto___14789,out))
;
return ((function (switch__8137__auto__,c__8199__auto___14789,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto____0 = (function (){
var statearr_14785 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14785[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto__);

(statearr_14785[(1)] = (1));

return statearr_14785;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto____1 = (function (state_14771){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_14771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e14786){if((e14786 instanceof Object)){
var ex__8141__auto__ = e14786;
var statearr_14787_14796 = state_14771;
(statearr_14787_14796[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14797 = state_14771;
state_14771 = G__14797;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto__ = function(state_14771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto____1.call(this,state_14771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___14789,out))
})();
var state__8201__auto__ = (function (){var statearr_14788 = f__8200__auto__.call(null);
(statearr_14788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___14789);

return statearr_14788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___14789,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__14798,p__14799){
var map__14802 = p__14798;
var map__14802__$1 = ((cljs.core.seq_QMARK_.call(null,map__14802))?cljs.core.apply.call(null,cljs.core.hash_map,map__14802):map__14802);
var opts = map__14802__$1;
var url_rewriter = cljs.core.get.call(null,map__14802__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__14803 = p__14799;
var map__14803__$1 = ((cljs.core.seq_QMARK_.call(null,map__14803))?cljs.core.apply.call(null,cljs.core.hash_map,map__14803):map__14803);
var file_msg = map__14803__$1;
var file = cljs.core.get.call(null,map__14803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__14804){
var map__14807 = p__14804;
var map__14807__$1 = ((cljs.core.seq_QMARK_.call(null,map__14807))?cljs.core.apply.call(null,cljs.core.hash_map,map__14807):map__14807);
var file = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__4087__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4087__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4087__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e14808){var e = e14808;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__14813,p__14814){
var map__15015 = p__14813;
var map__15015__$1 = ((cljs.core.seq_QMARK_.call(null,map__15015))?cljs.core.apply.call(null,cljs.core.hash_map,map__15015):map__15015);
var opts = map__15015__$1;
var load_unchanged_files = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__15016 = p__14814;
var map__15016__$1 = ((cljs.core.seq_QMARK_.call(null,map__15016))?cljs.core.apply.call(null,cljs.core.hash_map,map__15016):map__15016);
var msg = map__15016__$1;
var files = cljs.core.get.call(null,map__15016__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (state_15140){
var state_val_15141 = (state_15140[(1)]);
if((state_val_15141 === (7))){
var inst_15028 = (state_15140[(7)]);
var inst_15027 = (state_15140[(8)]);
var inst_15030 = (state_15140[(9)]);
var inst_15029 = (state_15140[(10)]);
var inst_15035 = cljs.core._nth.call(null,inst_15028,inst_15030);
var inst_15036 = figwheel.client.file_reloading.eval_body.call(null,inst_15035);
var inst_15037 = (inst_15030 + (1));
var tmp15142 = inst_15028;
var tmp15143 = inst_15027;
var tmp15144 = inst_15029;
var inst_15027__$1 = tmp15143;
var inst_15028__$1 = tmp15142;
var inst_15029__$1 = tmp15144;
var inst_15030__$1 = inst_15037;
var state_15140__$1 = (function (){var statearr_15145 = state_15140;
(statearr_15145[(7)] = inst_15028__$1);

(statearr_15145[(8)] = inst_15027__$1);

(statearr_15145[(9)] = inst_15030__$1);

(statearr_15145[(10)] = inst_15029__$1);

(statearr_15145[(11)] = inst_15036);

return statearr_15145;
})();
var statearr_15146_15215 = state_15140__$1;
(statearr_15146_15215[(2)] = null);

(statearr_15146_15215[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (20))){
var inst_15072 = (state_15140[(12)]);
var inst_15079 = (state_15140[(13)]);
var inst_15073 = (state_15140[(14)]);
var inst_15076 = (state_15140[(15)]);
var inst_15077 = (state_15140[(16)]);
var inst_15082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_15084 = (function (){var files_not_loaded = inst_15079;
var res = inst_15077;
var res_SINGLEQUOTE_ = inst_15076;
var files_SINGLEQUOTE_ = inst_15073;
var all_files = inst_15072;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15079,inst_15073,inst_15076,inst_15077,inst_15082,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (p__15083){
var map__15147 = p__15083;
var map__15147__$1 = ((cljs.core.seq_QMARK_.call(null,map__15147))?cljs.core.apply.call(null,cljs.core.hash_map,map__15147):map__15147);
var file = cljs.core.get.call(null,map__15147__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__15147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15079,inst_15073,inst_15076,inst_15077,inst_15082,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var inst_15085 = cljs.core.map.call(null,inst_15084,inst_15077);
var inst_15086 = cljs.core.pr_str.call(null,inst_15085);
var inst_15087 = figwheel.client.utils.log.call(null,inst_15086);
var inst_15088 = (function (){var files_not_loaded = inst_15079;
var res = inst_15077;
var res_SINGLEQUOTE_ = inst_15076;
var files_SINGLEQUOTE_ = inst_15073;
var all_files = inst_15072;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15079,inst_15073,inst_15076,inst_15077,inst_15082,inst_15084,inst_15085,inst_15086,inst_15087,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15079,inst_15073,inst_15076,inst_15077,inst_15082,inst_15084,inst_15085,inst_15086,inst_15087,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var inst_15089 = setTimeout(inst_15088,(10));
var state_15140__$1 = (function (){var statearr_15148 = state_15140;
(statearr_15148[(17)] = inst_15082);

(statearr_15148[(18)] = inst_15087);

return statearr_15148;
})();
var statearr_15149_15216 = state_15140__$1;
(statearr_15149_15216[(2)] = inst_15089);

(statearr_15149_15216[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (27))){
var inst_15099 = (state_15140[(19)]);
var state_15140__$1 = state_15140;
var statearr_15150_15217 = state_15140__$1;
(statearr_15150_15217[(2)] = inst_15099);

(statearr_15150_15217[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (1))){
var inst_15019 = (state_15140[(20)]);
var inst_15017 = before_jsload.call(null,files);
var inst_15018 = (function (){return ((function (inst_15019,inst_15017,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (p1__14809_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14809_SHARP_);
});
;})(inst_15019,inst_15017,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var inst_15019__$1 = cljs.core.filter.call(null,inst_15018,files);
var inst_15020 = cljs.core.not_empty.call(null,inst_15019__$1);
var state_15140__$1 = (function (){var statearr_15151 = state_15140;
(statearr_15151[(20)] = inst_15019__$1);

(statearr_15151[(21)] = inst_15017);

return statearr_15151;
})();
if(cljs.core.truth_(inst_15020)){
var statearr_15152_15218 = state_15140__$1;
(statearr_15152_15218[(1)] = (2));

} else {
var statearr_15153_15219 = state_15140__$1;
(statearr_15153_15219[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (24))){
var state_15140__$1 = state_15140;
var statearr_15154_15220 = state_15140__$1;
(statearr_15154_15220[(2)] = null);

(statearr_15154_15220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (4))){
var inst_15064 = (state_15140[(2)]);
var inst_15065 = (function (){return ((function (inst_15064,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (p1__14810_SHARP_){
var and__4087__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14810_SHARP_);
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14810_SHARP_));
} else {
return and__4087__auto__;
}
});
;})(inst_15064,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var inst_15066 = cljs.core.filter.call(null,inst_15065,files);
var state_15140__$1 = (function (){var statearr_15155 = state_15140;
(statearr_15155[(22)] = inst_15064);

(statearr_15155[(23)] = inst_15066);

return statearr_15155;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_15156_15221 = state_15140__$1;
(statearr_15156_15221[(1)] = (16));

} else {
var statearr_15157_15222 = state_15140__$1;
(statearr_15157_15222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (15))){
var inst_15054 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15158_15223 = state_15140__$1;
(statearr_15158_15223[(2)] = inst_15054);

(statearr_15158_15223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (21))){
var state_15140__$1 = state_15140;
var statearr_15159_15224 = state_15140__$1;
(statearr_15159_15224[(2)] = null);

(statearr_15159_15224[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (31))){
var inst_15107 = (state_15140[(24)]);
var inst_15117 = (state_15140[(2)]);
var inst_15118 = cljs.core.not_empty.call(null,inst_15107);
var state_15140__$1 = (function (){var statearr_15160 = state_15140;
(statearr_15160[(25)] = inst_15117);

return statearr_15160;
})();
if(cljs.core.truth_(inst_15118)){
var statearr_15161_15225 = state_15140__$1;
(statearr_15161_15225[(1)] = (32));

} else {
var statearr_15162_15226 = state_15140__$1;
(statearr_15162_15226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (32))){
var inst_15107 = (state_15140[(24)]);
var inst_15120 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15107);
var inst_15121 = cljs.core.pr_str.call(null,inst_15120);
var inst_15122 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_15121)].join('');
var inst_15123 = figwheel.client.utils.log.call(null,inst_15122);
var state_15140__$1 = state_15140;
var statearr_15163_15227 = state_15140__$1;
(statearr_15163_15227[(2)] = inst_15123);

(statearr_15163_15227[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (33))){
var state_15140__$1 = state_15140;
var statearr_15164_15228 = state_15140__$1;
(statearr_15164_15228[(2)] = null);

(statearr_15164_15228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (13))){
var inst_15040 = (state_15140[(26)]);
var inst_15044 = cljs.core.chunk_first.call(null,inst_15040);
var inst_15045 = cljs.core.chunk_rest.call(null,inst_15040);
var inst_15046 = cljs.core.count.call(null,inst_15044);
var inst_15027 = inst_15045;
var inst_15028 = inst_15044;
var inst_15029 = inst_15046;
var inst_15030 = (0);
var state_15140__$1 = (function (){var statearr_15165 = state_15140;
(statearr_15165[(7)] = inst_15028);

(statearr_15165[(8)] = inst_15027);

(statearr_15165[(9)] = inst_15030);

(statearr_15165[(10)] = inst_15029);

return statearr_15165;
})();
var statearr_15166_15229 = state_15140__$1;
(statearr_15166_15229[(2)] = null);

(statearr_15166_15229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (22))){
var inst_15079 = (state_15140[(13)]);
var inst_15092 = (state_15140[(2)]);
var inst_15093 = cljs.core.not_empty.call(null,inst_15079);
var state_15140__$1 = (function (){var statearr_15167 = state_15140;
(statearr_15167[(27)] = inst_15092);

return statearr_15167;
})();
if(cljs.core.truth_(inst_15093)){
var statearr_15168_15230 = state_15140__$1;
(statearr_15168_15230[(1)] = (23));

} else {
var statearr_15169_15231 = state_15140__$1;
(statearr_15169_15231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (36))){
var state_15140__$1 = state_15140;
var statearr_15170_15232 = state_15140__$1;
(statearr_15170_15232[(2)] = null);

(statearr_15170_15232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (29))){
var inst_15108 = (state_15140[(28)]);
var inst_15111 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15108);
var inst_15112 = cljs.core.pr_str.call(null,inst_15111);
var inst_15113 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_15112)].join('');
var inst_15114 = figwheel.client.utils.log.call(null,inst_15113);
var state_15140__$1 = state_15140;
var statearr_15171_15233 = state_15140__$1;
(statearr_15171_15233[(2)] = inst_15114);

(statearr_15171_15233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (6))){
var inst_15061 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15172_15234 = state_15140__$1;
(statearr_15172_15234[(2)] = inst_15061);

(statearr_15172_15234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (28))){
var inst_15108 = (state_15140[(28)]);
var inst_15105 = (state_15140[(2)]);
var inst_15106 = cljs.core.get.call(null,inst_15105,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_15107 = cljs.core.get.call(null,inst_15105,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_15108__$1 = cljs.core.get.call(null,inst_15105,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_15109 = cljs.core.not_empty.call(null,inst_15108__$1);
var state_15140__$1 = (function (){var statearr_15173 = state_15140;
(statearr_15173[(29)] = inst_15106);

(statearr_15173[(28)] = inst_15108__$1);

(statearr_15173[(24)] = inst_15107);

return statearr_15173;
})();
if(cljs.core.truth_(inst_15109)){
var statearr_15174_15235 = state_15140__$1;
(statearr_15174_15235[(1)] = (29));

} else {
var statearr_15175_15236 = state_15140__$1;
(statearr_15175_15236[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (25))){
var inst_15138 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15140__$1,inst_15138);
} else {
if((state_val_15141 === (34))){
var inst_15106 = (state_15140[(29)]);
var inst_15126 = (state_15140[(2)]);
var inst_15127 = cljs.core.not_empty.call(null,inst_15106);
var state_15140__$1 = (function (){var statearr_15176 = state_15140;
(statearr_15176[(30)] = inst_15126);

return statearr_15176;
})();
if(cljs.core.truth_(inst_15127)){
var statearr_15177_15237 = state_15140__$1;
(statearr_15177_15237[(1)] = (35));

} else {
var statearr_15178_15238 = state_15140__$1;
(statearr_15178_15238[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (17))){
var inst_15066 = (state_15140[(23)]);
var state_15140__$1 = state_15140;
var statearr_15179_15239 = state_15140__$1;
(statearr_15179_15239[(2)] = inst_15066);

(statearr_15179_15239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (3))){
var state_15140__$1 = state_15140;
var statearr_15180_15240 = state_15140__$1;
(statearr_15180_15240[(2)] = null);

(statearr_15180_15240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (12))){
var inst_15057 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15181_15241 = state_15140__$1;
(statearr_15181_15241[(2)] = inst_15057);

(statearr_15181_15241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (2))){
var inst_15019 = (state_15140[(20)]);
var inst_15026 = cljs.core.seq.call(null,inst_15019);
var inst_15027 = inst_15026;
var inst_15028 = null;
var inst_15029 = (0);
var inst_15030 = (0);
var state_15140__$1 = (function (){var statearr_15182 = state_15140;
(statearr_15182[(7)] = inst_15028);

(statearr_15182[(8)] = inst_15027);

(statearr_15182[(9)] = inst_15030);

(statearr_15182[(10)] = inst_15029);

return statearr_15182;
})();
var statearr_15183_15242 = state_15140__$1;
(statearr_15183_15242[(2)] = null);

(statearr_15183_15242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (23))){
var inst_15072 = (state_15140[(12)]);
var inst_15079 = (state_15140[(13)]);
var inst_15099 = (state_15140[(19)]);
var inst_15073 = (state_15140[(14)]);
var inst_15076 = (state_15140[(15)]);
var inst_15077 = (state_15140[(16)]);
var inst_15095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_15098 = (function (){var files_not_loaded = inst_15079;
var res = inst_15077;
var res_SINGLEQUOTE_ = inst_15076;
var files_SINGLEQUOTE_ = inst_15073;
var all_files = inst_15072;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15079,inst_15099,inst_15073,inst_15076,inst_15077,inst_15095,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (p__15097){
var map__15184 = p__15097;
var map__15184__$1 = ((cljs.core.seq_QMARK_.call(null,map__15184))?cljs.core.apply.call(null,cljs.core.hash_map,map__15184):map__15184);
var meta_data = cljs.core.get.call(null,map__15184__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15079,inst_15099,inst_15073,inst_15076,inst_15077,inst_15095,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var inst_15099__$1 = cljs.core.group_by.call(null,inst_15098,inst_15079);
var inst_15100 = cljs.core.seq_QMARK_.call(null,inst_15099__$1);
var state_15140__$1 = (function (){var statearr_15185 = state_15140;
(statearr_15185[(31)] = inst_15095);

(statearr_15185[(19)] = inst_15099__$1);

return statearr_15185;
})();
if(inst_15100){
var statearr_15186_15243 = state_15140__$1;
(statearr_15186_15243[(1)] = (26));

} else {
var statearr_15187_15244 = state_15140__$1;
(statearr_15187_15244[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (35))){
var inst_15106 = (state_15140[(29)]);
var inst_15129 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15106);
var inst_15130 = cljs.core.pr_str.call(null,inst_15129);
var inst_15131 = [cljs.core.str("not required: "),cljs.core.str(inst_15130)].join('');
var inst_15132 = figwheel.client.utils.log.call(null,inst_15131);
var state_15140__$1 = state_15140;
var statearr_15188_15245 = state_15140__$1;
(statearr_15188_15245[(2)] = inst_15132);

(statearr_15188_15245[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (19))){
var inst_15072 = (state_15140[(12)]);
var inst_15073 = (state_15140[(14)]);
var inst_15076 = (state_15140[(15)]);
var inst_15077 = (state_15140[(16)]);
var inst_15076__$1 = (state_15140[(2)]);
var inst_15077__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_15076__$1);
var inst_15078 = (function (){var res = inst_15077__$1;
var res_SINGLEQUOTE_ = inst_15076__$1;
var files_SINGLEQUOTE_ = inst_15073;
var all_files = inst_15072;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15073,inst_15076,inst_15077,inst_15076__$1,inst_15077__$1,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (p1__14812_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14812_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_15072,inst_15073,inst_15076,inst_15077,inst_15076__$1,inst_15077__$1,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var inst_15079 = cljs.core.filter.call(null,inst_15078,inst_15076__$1);
var inst_15080 = cljs.core.not_empty.call(null,inst_15077__$1);
var state_15140__$1 = (function (){var statearr_15189 = state_15140;
(statearr_15189[(13)] = inst_15079);

(statearr_15189[(15)] = inst_15076__$1);

(statearr_15189[(16)] = inst_15077__$1);

return statearr_15189;
})();
if(cljs.core.truth_(inst_15080)){
var statearr_15190_15246 = state_15140__$1;
(statearr_15190_15246[(1)] = (20));

} else {
var statearr_15191_15247 = state_15140__$1;
(statearr_15191_15247[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (11))){
var state_15140__$1 = state_15140;
var statearr_15192_15248 = state_15140__$1;
(statearr_15192_15248[(2)] = null);

(statearr_15192_15248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (9))){
var inst_15059 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15193_15249 = state_15140__$1;
(statearr_15193_15249[(2)] = inst_15059);

(statearr_15193_15249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (5))){
var inst_15030 = (state_15140[(9)]);
var inst_15029 = (state_15140[(10)]);
var inst_15032 = (inst_15030 < inst_15029);
var inst_15033 = inst_15032;
var state_15140__$1 = state_15140;
if(cljs.core.truth_(inst_15033)){
var statearr_15194_15250 = state_15140__$1;
(statearr_15194_15250[(1)] = (7));

} else {
var statearr_15195_15251 = state_15140__$1;
(statearr_15195_15251[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (14))){
var inst_15040 = (state_15140[(26)]);
var inst_15049 = cljs.core.first.call(null,inst_15040);
var inst_15050 = figwheel.client.file_reloading.eval_body.call(null,inst_15049);
var inst_15051 = cljs.core.next.call(null,inst_15040);
var inst_15027 = inst_15051;
var inst_15028 = null;
var inst_15029 = (0);
var inst_15030 = (0);
var state_15140__$1 = (function (){var statearr_15196 = state_15140;
(statearr_15196[(7)] = inst_15028);

(statearr_15196[(8)] = inst_15027);

(statearr_15196[(9)] = inst_15030);

(statearr_15196[(10)] = inst_15029);

(statearr_15196[(32)] = inst_15050);

return statearr_15196;
})();
var statearr_15197_15252 = state_15140__$1;
(statearr_15197_15252[(2)] = null);

(statearr_15197_15252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (26))){
var inst_15099 = (state_15140[(19)]);
var inst_15102 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15099);
var state_15140__$1 = state_15140;
var statearr_15198_15253 = state_15140__$1;
(statearr_15198_15253[(2)] = inst_15102);

(statearr_15198_15253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (16))){
var inst_15066 = (state_15140[(23)]);
var inst_15068 = (function (){var all_files = inst_15066;
return ((function (all_files,inst_15066,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function (p1__14811_SHARP_){
return cljs.core.update_in.call(null,p1__14811_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_15066,state_val_15141,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var inst_15069 = cljs.core.map.call(null,inst_15068,inst_15066);
var state_15140__$1 = state_15140;
var statearr_15199_15254 = state_15140__$1;
(statearr_15199_15254[(2)] = inst_15069);

(statearr_15199_15254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (30))){
var state_15140__$1 = state_15140;
var statearr_15200_15255 = state_15140__$1;
(statearr_15200_15255[(2)] = null);

(statearr_15200_15255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (10))){
var inst_15040 = (state_15140[(26)]);
var inst_15042 = cljs.core.chunked_seq_QMARK_.call(null,inst_15040);
var state_15140__$1 = state_15140;
if(inst_15042){
var statearr_15201_15256 = state_15140__$1;
(statearr_15201_15256[(1)] = (13));

} else {
var statearr_15202_15257 = state_15140__$1;
(statearr_15202_15257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (18))){
var inst_15072 = (state_15140[(12)]);
var inst_15073 = (state_15140[(14)]);
var inst_15072__$1 = (state_15140[(2)]);
var inst_15073__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_15072__$1);
var inst_15074 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_15073__$1);
var state_15140__$1 = (function (){var statearr_15203 = state_15140;
(statearr_15203[(12)] = inst_15072__$1);

(statearr_15203[(14)] = inst_15073__$1);

return statearr_15203;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15140__$1,(19),inst_15074);
} else {
if((state_val_15141 === (37))){
var inst_15135 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15204_15258 = state_15140__$1;
(statearr_15204_15258[(2)] = inst_15135);

(statearr_15204_15258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (8))){
var inst_15040 = (state_15140[(26)]);
var inst_15027 = (state_15140[(8)]);
var inst_15040__$1 = cljs.core.seq.call(null,inst_15027);
var state_15140__$1 = (function (){var statearr_15205 = state_15140;
(statearr_15205[(26)] = inst_15040__$1);

return statearr_15205;
})();
if(inst_15040__$1){
var statearr_15206_15259 = state_15140__$1;
(statearr_15206_15259[(1)] = (10));

} else {
var statearr_15207_15260 = state_15140__$1;
(statearr_15207_15260[(1)] = (11));

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
});})(c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
;
return ((function (switch__8137__auto__,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto____0 = (function (){
var statearr_15211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15211[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto__);

(statearr_15211[(1)] = (1));

return statearr_15211;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto____1 = (function (state_15140){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15212){if((e15212 instanceof Object)){
var ex__8141__auto__ = e15212;
var statearr_15213_15261 = state_15140;
(statearr_15213_15261[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15262 = state_15140;
state_15140 = G__15262;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto__ = function(state_15140){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto____1.call(this,state_15140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
})();
var state__8201__auto__ = (function (){var statearr_15214 = f__8200__auto__.call(null);
(statearr_15214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_15214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__,map__15015,map__15015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__15016,map__15016__$1,msg,files))
);

return c__8199__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__15265,link){
var map__15267 = p__15265;
var map__15267__$1 = ((cljs.core.seq_QMARK_.call(null,map__15267))?cljs.core.apply.call(null,cljs.core.hash_map,map__15267):map__15267);
var file = cljs.core.get.call(null,map__15267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__15267,map__15267__$1,file){
return (function (p1__15263_SHARP_,p2__15264_SHARP_){
if(cljs.core._EQ_.call(null,p1__15263_SHARP_,p2__15264_SHARP_)){
return p1__15263_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__15267,map__15267__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__15271){
var map__15272 = p__15271;
var map__15272__$1 = ((cljs.core.seq_QMARK_.call(null,map__15272))?cljs.core.apply.call(null,cljs.core.hash_map,map__15272):map__15272);
var current_url_length = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__15268_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__15268_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__15274 = arguments.length;
switch (G__15274) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__15276){
var map__15278 = p__15276;
var map__15278__$1 = ((cljs.core.seq_QMARK_.call(null,map__15278))?cljs.core.apply.call(null,cljs.core.hash_map,map__15278):map__15278);
var f_data = map__15278__$1;
var request_url = cljs.core.get.call(null,map__15278__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__15278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4099__auto__ = request_url;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__15279,files_msg){
var map__15301 = p__15279;
var map__15301__$1 = ((cljs.core.seq_QMARK_.call(null,map__15301))?cljs.core.apply.call(null,cljs.core.hash_map,map__15301):map__15301);
var opts = map__15301__$1;
var on_cssload = cljs.core.get.call(null,map__15301__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__15302_15322 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__15303_15323 = null;
var count__15304_15324 = (0);
var i__15305_15325 = (0);
while(true){
if((i__15305_15325 < count__15304_15324)){
var f_15326 = cljs.core._nth.call(null,chunk__15303_15323,i__15305_15325);
figwheel.client.file_reloading.reload_css_file.call(null,f_15326);

var G__15327 = seq__15302_15322;
var G__15328 = chunk__15303_15323;
var G__15329 = count__15304_15324;
var G__15330 = (i__15305_15325 + (1));
seq__15302_15322 = G__15327;
chunk__15303_15323 = G__15328;
count__15304_15324 = G__15329;
i__15305_15325 = G__15330;
continue;
} else {
var temp__4126__auto___15331 = cljs.core.seq.call(null,seq__15302_15322);
if(temp__4126__auto___15331){
var seq__15302_15332__$1 = temp__4126__auto___15331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15302_15332__$1)){
var c__4884__auto___15333 = cljs.core.chunk_first.call(null,seq__15302_15332__$1);
var G__15334 = cljs.core.chunk_rest.call(null,seq__15302_15332__$1);
var G__15335 = c__4884__auto___15333;
var G__15336 = cljs.core.count.call(null,c__4884__auto___15333);
var G__15337 = (0);
seq__15302_15322 = G__15334;
chunk__15303_15323 = G__15335;
count__15304_15324 = G__15336;
i__15305_15325 = G__15337;
continue;
} else {
var f_15338 = cljs.core.first.call(null,seq__15302_15332__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_15338);

var G__15339 = cljs.core.next.call(null,seq__15302_15332__$1);
var G__15340 = null;
var G__15341 = (0);
var G__15342 = (0);
seq__15302_15322 = G__15339;
chunk__15303_15323 = G__15340;
count__15304_15324 = G__15341;
i__15305_15325 = G__15342;
continue;
}
} else {
}
}
break;
}

var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__,map__15301,map__15301__$1,opts,on_cssload){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__,map__15301,map__15301__$1,opts,on_cssload){
return (function (state_15312){
var state_val_15313 = (state_15312[(1)]);
if((state_val_15313 === (2))){
var inst_15308 = (state_15312[(2)]);
var inst_15309 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_15310 = on_cssload.call(null,inst_15309);
var state_15312__$1 = (function (){var statearr_15314 = state_15312;
(statearr_15314[(7)] = inst_15308);

return statearr_15314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15312__$1,inst_15310);
} else {
if((state_val_15313 === (1))){
var inst_15306 = cljs.core.async.timeout.call(null,(100));
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15312__$1,(2),inst_15306);
} else {
return null;
}
}
});})(c__8199__auto__,map__15301,map__15301__$1,opts,on_cssload))
;
return ((function (switch__8137__auto__,c__8199__auto__,map__15301,map__15301__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto____0 = (function (){
var statearr_15318 = [null,null,null,null,null,null,null,null];
(statearr_15318[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto__);

(statearr_15318[(1)] = (1));

return statearr_15318;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto____1 = (function (state_15312){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_15312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e15319){if((e15319 instanceof Object)){
var ex__8141__auto__ = e15319;
var statearr_15320_15343 = state_15312;
(statearr_15320_15343[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15344 = state_15312;
state_15312 = G__15344;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto__ = function(state_15312){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto____1.call(this,state_15312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__,map__15301,map__15301__$1,opts,on_cssload))
})();
var state__8201__auto__ = (function (){var statearr_15321 = f__8200__auto__.call(null);
(statearr_15321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_15321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__,map__15301,map__15301__$1,opts,on_cssload))
);

return c__8199__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
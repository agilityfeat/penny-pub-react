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
return cljs.core.reduce.call(null,(function (p1__12822_SHARP_,p2__12823_SHARP_){
var and__4087__auto__ = p1__12822_SHARP_;
if(cljs.core.truth_(and__4087__auto__)){
return p2__12823_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__12825_SHARP_,p2__12824_SHARP_){
return [cljs.core.str(p2__12824_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12826){
var map__12827 = p__12826;
var map__12827__$1 = ((cljs.core.seq_QMARK_.call(null,map__12827))?cljs.core.apply.call(null,cljs.core.hash_map,map__12827):map__12827);
var file = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__12828){
var map__12829 = p__12828;
var map__12829__$1 = ((cljs.core.seq_QMARK_.call(null,map__12829))?cljs.core.apply.call(null,cljs.core.hash_map,map__12829):map__12829);
var namespace = cljs.core.get.call(null,map__12829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e12830){if((e12830 instanceof Error)){
var e = e12830;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e12830;

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
var G__12832 = arguments.length;
switch (G__12832) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__12834,callback){
var map__12836 = p__12834;
var map__12836__$1 = ((cljs.core.seq_QMARK_.call(null,map__12836))?cljs.core.apply.call(null,cljs.core.hash_map,map__12836):map__12836);
var file_msg = map__12836__$1;
var request_url = cljs.core.get.call(null,map__12836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__12836,map__12836__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__12836,map__12836__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__12837){
var map__12839 = p__12837;
var map__12839__$1 = ((cljs.core.seq_QMARK_.call(null,map__12839))?cljs.core.apply.call(null,cljs.core.hash_map,map__12839):map__12839);
var file_msg = map__12839__$1;
var meta_data = cljs.core.get.call(null,map__12839__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__12839__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__12840,callback){
var map__12842 = p__12840;
var map__12842__$1 = ((cljs.core.seq_QMARK_.call(null,map__12842))?cljs.core.apply.call(null,cljs.core.hash_map,map__12842):map__12842);
var file_msg = map__12842__$1;
var namespace = cljs.core.get.call(null,map__12842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__12842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__7080__auto___12929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12929,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___12929,out){
return (function (state_12911){
var state_val_12912 = (state_12911[(1)]);
if((state_val_12912 === (7))){
var inst_12895 = (state_12911[(7)]);
var inst_12901 = (state_12911[(2)]);
var inst_12902 = cljs.core.async.put_BANG_.call(null,out,inst_12901);
var inst_12891 = inst_12895;
var state_12911__$1 = (function (){var statearr_12913 = state_12911;
(statearr_12913[(8)] = inst_12891);

(statearr_12913[(9)] = inst_12902);

return statearr_12913;
})();
var statearr_12914_12930 = state_12911__$1;
(statearr_12914_12930[(2)] = null);

(statearr_12914_12930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (6))){
var inst_12907 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12915_12931 = state_12911__$1;
(statearr_12915_12931[(2)] = inst_12907);

(statearr_12915_12931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (5))){
var inst_12905 = cljs.core.async.close_BANG_.call(null,out);
var state_12911__$1 = state_12911;
var statearr_12916_12932 = state_12911__$1;
(statearr_12916_12932[(2)] = inst_12905);

(statearr_12916_12932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (4))){
var inst_12894 = (state_12911[(10)]);
var inst_12899 = figwheel.client.file_reloading.reload_js_file.call(null,inst_12894);
var state_12911__$1 = state_12911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12911__$1,(7),inst_12899);
} else {
if((state_val_12912 === (3))){
var inst_12909 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12911__$1,inst_12909);
} else {
if((state_val_12912 === (2))){
var inst_12891 = (state_12911[(8)]);
var inst_12894 = (state_12911[(10)]);
var inst_12894__$1 = cljs.core.nth.call(null,inst_12891,(0),null);
var inst_12895 = cljs.core.nthnext.call(null,inst_12891,(1));
var inst_12896 = (inst_12894__$1 == null);
var inst_12897 = cljs.core.not.call(null,inst_12896);
var state_12911__$1 = (function (){var statearr_12917 = state_12911;
(statearr_12917[(7)] = inst_12895);

(statearr_12917[(10)] = inst_12894__$1);

return statearr_12917;
})();
if(inst_12897){
var statearr_12918_12933 = state_12911__$1;
(statearr_12918_12933[(1)] = (4));

} else {
var statearr_12919_12934 = state_12911__$1;
(statearr_12919_12934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (1))){
var inst_12889 = cljs.core.nth.call(null,files,(0),null);
var inst_12890 = cljs.core.nthnext.call(null,files,(1));
var inst_12891 = files;
var state_12911__$1 = (function (){var statearr_12920 = state_12911;
(statearr_12920[(8)] = inst_12891);

(statearr_12920[(11)] = inst_12889);

(statearr_12920[(12)] = inst_12890);

return statearr_12920;
})();
var statearr_12921_12935 = state_12911__$1;
(statearr_12921_12935[(2)] = null);

(statearr_12921_12935[(1)] = (2));


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
});})(c__7080__auto___12929,out))
;
return ((function (switch__7018__auto__,c__7080__auto___12929,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto____0 = (function (){
var statearr_12925 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12925[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto__);

(statearr_12925[(1)] = (1));

return statearr_12925;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto____1 = (function (state_12911){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_12911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e12926){if((e12926 instanceof Object)){
var ex__7022__auto__ = e12926;
var statearr_12927_12936 = state_12911;
(statearr_12927_12936[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12937 = state_12911;
state_12911 = G__12937;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto__ = function(state_12911){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto____1.call(this,state_12911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___12929,out))
})();
var state__7082__auto__ = (function (){var statearr_12928 = f__7081__auto__.call(null);
(statearr_12928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12929);

return statearr_12928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12929,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__12938,p__12939){
var map__12942 = p__12938;
var map__12942__$1 = ((cljs.core.seq_QMARK_.call(null,map__12942))?cljs.core.apply.call(null,cljs.core.hash_map,map__12942):map__12942);
var opts = map__12942__$1;
var url_rewriter = cljs.core.get.call(null,map__12942__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__12943 = p__12939;
var map__12943__$1 = ((cljs.core.seq_QMARK_.call(null,map__12943))?cljs.core.apply.call(null,cljs.core.hash_map,map__12943):map__12943);
var file_msg = map__12943__$1;
var file = cljs.core.get.call(null,map__12943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__12944){
var map__12947 = p__12944;
var map__12947__$1 = ((cljs.core.seq_QMARK_.call(null,map__12947))?cljs.core.apply.call(null,cljs.core.hash_map,map__12947):map__12947);
var file = cljs.core.get.call(null,map__12947__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__12947__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e12948){var e = e12948;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__12953,p__12954){
var map__13155 = p__12953;
var map__13155__$1 = ((cljs.core.seq_QMARK_.call(null,map__13155))?cljs.core.apply.call(null,cljs.core.hash_map,map__13155):map__13155);
var opts = map__13155__$1;
var load_unchanged_files = cljs.core.get.call(null,map__13155__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__13155__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__13155__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__13156 = p__12954;
var map__13156__$1 = ((cljs.core.seq_QMARK_.call(null,map__13156))?cljs.core.apply.call(null,cljs.core.hash_map,map__13156):map__13156);
var msg = map__13156__$1;
var files = cljs.core.get.call(null,map__13156__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (state_13280){
var state_val_13281 = (state_13280[(1)]);
if((state_val_13281 === (7))){
var inst_13167 = (state_13280[(7)]);
var inst_13169 = (state_13280[(8)]);
var inst_13170 = (state_13280[(9)]);
var inst_13168 = (state_13280[(10)]);
var inst_13175 = cljs.core._nth.call(null,inst_13168,inst_13170);
var inst_13176 = figwheel.client.file_reloading.eval_body.call(null,inst_13175);
var inst_13177 = (inst_13170 + (1));
var tmp13282 = inst_13167;
var tmp13283 = inst_13169;
var tmp13284 = inst_13168;
var inst_13167__$1 = tmp13282;
var inst_13168__$1 = tmp13284;
var inst_13169__$1 = tmp13283;
var inst_13170__$1 = inst_13177;
var state_13280__$1 = (function (){var statearr_13285 = state_13280;
(statearr_13285[(11)] = inst_13176);

(statearr_13285[(7)] = inst_13167__$1);

(statearr_13285[(8)] = inst_13169__$1);

(statearr_13285[(9)] = inst_13170__$1);

(statearr_13285[(10)] = inst_13168__$1);

return statearr_13285;
})();
var statearr_13286_13355 = state_13280__$1;
(statearr_13286_13355[(2)] = null);

(statearr_13286_13355[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (20))){
var inst_13216 = (state_13280[(12)]);
var inst_13212 = (state_13280[(13)]);
var inst_13219 = (state_13280[(14)]);
var inst_13213 = (state_13280[(15)]);
var inst_13217 = (state_13280[(16)]);
var inst_13222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_13224 = (function (){var files_not_loaded = inst_13219;
var res = inst_13217;
var res_SINGLEQUOTE_ = inst_13216;
var files_SINGLEQUOTE_ = inst_13213;
var all_files = inst_13212;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13216,inst_13212,inst_13219,inst_13213,inst_13217,inst_13222,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (p__13223){
var map__13287 = p__13223;
var map__13287__$1 = ((cljs.core.seq_QMARK_.call(null,map__13287))?cljs.core.apply.call(null,cljs.core.hash_map,map__13287):map__13287);
var file = cljs.core.get.call(null,map__13287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__13287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13216,inst_13212,inst_13219,inst_13213,inst_13217,inst_13222,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var inst_13225 = cljs.core.map.call(null,inst_13224,inst_13217);
var inst_13226 = cljs.core.pr_str.call(null,inst_13225);
var inst_13227 = figwheel.client.utils.log.call(null,inst_13226);
var inst_13228 = (function (){var files_not_loaded = inst_13219;
var res = inst_13217;
var res_SINGLEQUOTE_ = inst_13216;
var files_SINGLEQUOTE_ = inst_13213;
var all_files = inst_13212;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13216,inst_13212,inst_13219,inst_13213,inst_13217,inst_13222,inst_13224,inst_13225,inst_13226,inst_13227,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13216,inst_13212,inst_13219,inst_13213,inst_13217,inst_13222,inst_13224,inst_13225,inst_13226,inst_13227,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var inst_13229 = setTimeout(inst_13228,(10));
var state_13280__$1 = (function (){var statearr_13288 = state_13280;
(statearr_13288[(17)] = inst_13222);

(statearr_13288[(18)] = inst_13227);

return statearr_13288;
})();
var statearr_13289_13356 = state_13280__$1;
(statearr_13289_13356[(2)] = inst_13229);

(statearr_13289_13356[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (27))){
var inst_13239 = (state_13280[(19)]);
var state_13280__$1 = state_13280;
var statearr_13290_13357 = state_13280__$1;
(statearr_13290_13357[(2)] = inst_13239);

(statearr_13290_13357[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (1))){
var inst_13159 = (state_13280[(20)]);
var inst_13157 = before_jsload.call(null,files);
var inst_13158 = (function (){return ((function (inst_13159,inst_13157,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (p1__12949_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12949_SHARP_);
});
;})(inst_13159,inst_13157,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var inst_13159__$1 = cljs.core.filter.call(null,inst_13158,files);
var inst_13160 = cljs.core.not_empty.call(null,inst_13159__$1);
var state_13280__$1 = (function (){var statearr_13291 = state_13280;
(statearr_13291[(20)] = inst_13159__$1);

(statearr_13291[(21)] = inst_13157);

return statearr_13291;
})();
if(cljs.core.truth_(inst_13160)){
var statearr_13292_13358 = state_13280__$1;
(statearr_13292_13358[(1)] = (2));

} else {
var statearr_13293_13359 = state_13280__$1;
(statearr_13293_13359[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (24))){
var state_13280__$1 = state_13280;
var statearr_13294_13360 = state_13280__$1;
(statearr_13294_13360[(2)] = null);

(statearr_13294_13360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (4))){
var inst_13204 = (state_13280[(2)]);
var inst_13205 = (function (){return ((function (inst_13204,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (p1__12950_SHARP_){
var and__4087__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__12950_SHARP_);
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12950_SHARP_));
} else {
return and__4087__auto__;
}
});
;})(inst_13204,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var inst_13206 = cljs.core.filter.call(null,inst_13205,files);
var state_13280__$1 = (function (){var statearr_13295 = state_13280;
(statearr_13295[(22)] = inst_13204);

(statearr_13295[(23)] = inst_13206);

return statearr_13295;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_13296_13361 = state_13280__$1;
(statearr_13296_13361[(1)] = (16));

} else {
var statearr_13297_13362 = state_13280__$1;
(statearr_13297_13362[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (15))){
var inst_13194 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
var statearr_13298_13363 = state_13280__$1;
(statearr_13298_13363[(2)] = inst_13194);

(statearr_13298_13363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (21))){
var state_13280__$1 = state_13280;
var statearr_13299_13364 = state_13280__$1;
(statearr_13299_13364[(2)] = null);

(statearr_13299_13364[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (31))){
var inst_13247 = (state_13280[(24)]);
var inst_13257 = (state_13280[(2)]);
var inst_13258 = cljs.core.not_empty.call(null,inst_13247);
var state_13280__$1 = (function (){var statearr_13300 = state_13280;
(statearr_13300[(25)] = inst_13257);

return statearr_13300;
})();
if(cljs.core.truth_(inst_13258)){
var statearr_13301_13365 = state_13280__$1;
(statearr_13301_13365[(1)] = (32));

} else {
var statearr_13302_13366 = state_13280__$1;
(statearr_13302_13366[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (32))){
var inst_13247 = (state_13280[(24)]);
var inst_13260 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13247);
var inst_13261 = cljs.core.pr_str.call(null,inst_13260);
var inst_13262 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_13261)].join('');
var inst_13263 = figwheel.client.utils.log.call(null,inst_13262);
var state_13280__$1 = state_13280;
var statearr_13303_13367 = state_13280__$1;
(statearr_13303_13367[(2)] = inst_13263);

(statearr_13303_13367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (33))){
var state_13280__$1 = state_13280;
var statearr_13304_13368 = state_13280__$1;
(statearr_13304_13368[(2)] = null);

(statearr_13304_13368[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (13))){
var inst_13180 = (state_13280[(26)]);
var inst_13184 = cljs.core.chunk_first.call(null,inst_13180);
var inst_13185 = cljs.core.chunk_rest.call(null,inst_13180);
var inst_13186 = cljs.core.count.call(null,inst_13184);
var inst_13167 = inst_13185;
var inst_13168 = inst_13184;
var inst_13169 = inst_13186;
var inst_13170 = (0);
var state_13280__$1 = (function (){var statearr_13305 = state_13280;
(statearr_13305[(7)] = inst_13167);

(statearr_13305[(8)] = inst_13169);

(statearr_13305[(9)] = inst_13170);

(statearr_13305[(10)] = inst_13168);

return statearr_13305;
})();
var statearr_13306_13369 = state_13280__$1;
(statearr_13306_13369[(2)] = null);

(statearr_13306_13369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (22))){
var inst_13219 = (state_13280[(14)]);
var inst_13232 = (state_13280[(2)]);
var inst_13233 = cljs.core.not_empty.call(null,inst_13219);
var state_13280__$1 = (function (){var statearr_13307 = state_13280;
(statearr_13307[(27)] = inst_13232);

return statearr_13307;
})();
if(cljs.core.truth_(inst_13233)){
var statearr_13308_13370 = state_13280__$1;
(statearr_13308_13370[(1)] = (23));

} else {
var statearr_13309_13371 = state_13280__$1;
(statearr_13309_13371[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (36))){
var state_13280__$1 = state_13280;
var statearr_13310_13372 = state_13280__$1;
(statearr_13310_13372[(2)] = null);

(statearr_13310_13372[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (29))){
var inst_13248 = (state_13280[(28)]);
var inst_13251 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13248);
var inst_13252 = cljs.core.pr_str.call(null,inst_13251);
var inst_13253 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_13252)].join('');
var inst_13254 = figwheel.client.utils.log.call(null,inst_13253);
var state_13280__$1 = state_13280;
var statearr_13311_13373 = state_13280__$1;
(statearr_13311_13373[(2)] = inst_13254);

(statearr_13311_13373[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (6))){
var inst_13201 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
var statearr_13312_13374 = state_13280__$1;
(statearr_13312_13374[(2)] = inst_13201);

(statearr_13312_13374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (28))){
var inst_13248 = (state_13280[(28)]);
var inst_13245 = (state_13280[(2)]);
var inst_13246 = cljs.core.get.call(null,inst_13245,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_13247 = cljs.core.get.call(null,inst_13245,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_13248__$1 = cljs.core.get.call(null,inst_13245,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_13249 = cljs.core.not_empty.call(null,inst_13248__$1);
var state_13280__$1 = (function (){var statearr_13313 = state_13280;
(statearr_13313[(29)] = inst_13246);

(statearr_13313[(24)] = inst_13247);

(statearr_13313[(28)] = inst_13248__$1);

return statearr_13313;
})();
if(cljs.core.truth_(inst_13249)){
var statearr_13314_13375 = state_13280__$1;
(statearr_13314_13375[(1)] = (29));

} else {
var statearr_13315_13376 = state_13280__$1;
(statearr_13315_13376[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (25))){
var inst_13278 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13280__$1,inst_13278);
} else {
if((state_val_13281 === (34))){
var inst_13246 = (state_13280[(29)]);
var inst_13266 = (state_13280[(2)]);
var inst_13267 = cljs.core.not_empty.call(null,inst_13246);
var state_13280__$1 = (function (){var statearr_13316 = state_13280;
(statearr_13316[(30)] = inst_13266);

return statearr_13316;
})();
if(cljs.core.truth_(inst_13267)){
var statearr_13317_13377 = state_13280__$1;
(statearr_13317_13377[(1)] = (35));

} else {
var statearr_13318_13378 = state_13280__$1;
(statearr_13318_13378[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (17))){
var inst_13206 = (state_13280[(23)]);
var state_13280__$1 = state_13280;
var statearr_13319_13379 = state_13280__$1;
(statearr_13319_13379[(2)] = inst_13206);

(statearr_13319_13379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (3))){
var state_13280__$1 = state_13280;
var statearr_13320_13380 = state_13280__$1;
(statearr_13320_13380[(2)] = null);

(statearr_13320_13380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (12))){
var inst_13197 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
var statearr_13321_13381 = state_13280__$1;
(statearr_13321_13381[(2)] = inst_13197);

(statearr_13321_13381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (2))){
var inst_13159 = (state_13280[(20)]);
var inst_13166 = cljs.core.seq.call(null,inst_13159);
var inst_13167 = inst_13166;
var inst_13168 = null;
var inst_13169 = (0);
var inst_13170 = (0);
var state_13280__$1 = (function (){var statearr_13322 = state_13280;
(statearr_13322[(7)] = inst_13167);

(statearr_13322[(8)] = inst_13169);

(statearr_13322[(9)] = inst_13170);

(statearr_13322[(10)] = inst_13168);

return statearr_13322;
})();
var statearr_13323_13382 = state_13280__$1;
(statearr_13323_13382[(2)] = null);

(statearr_13323_13382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (23))){
var inst_13239 = (state_13280[(19)]);
var inst_13216 = (state_13280[(12)]);
var inst_13212 = (state_13280[(13)]);
var inst_13219 = (state_13280[(14)]);
var inst_13213 = (state_13280[(15)]);
var inst_13217 = (state_13280[(16)]);
var inst_13235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_13238 = (function (){var files_not_loaded = inst_13219;
var res = inst_13217;
var res_SINGLEQUOTE_ = inst_13216;
var files_SINGLEQUOTE_ = inst_13213;
var all_files = inst_13212;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13239,inst_13216,inst_13212,inst_13219,inst_13213,inst_13217,inst_13235,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (p__13237){
var map__13324 = p__13237;
var map__13324__$1 = ((cljs.core.seq_QMARK_.call(null,map__13324))?cljs.core.apply.call(null,cljs.core.hash_map,map__13324):map__13324);
var meta_data = cljs.core.get.call(null,map__13324__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13239,inst_13216,inst_13212,inst_13219,inst_13213,inst_13217,inst_13235,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var inst_13239__$1 = cljs.core.group_by.call(null,inst_13238,inst_13219);
var inst_13240 = cljs.core.seq_QMARK_.call(null,inst_13239__$1);
var state_13280__$1 = (function (){var statearr_13325 = state_13280;
(statearr_13325[(19)] = inst_13239__$1);

(statearr_13325[(31)] = inst_13235);

return statearr_13325;
})();
if(inst_13240){
var statearr_13326_13383 = state_13280__$1;
(statearr_13326_13383[(1)] = (26));

} else {
var statearr_13327_13384 = state_13280__$1;
(statearr_13327_13384[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (35))){
var inst_13246 = (state_13280[(29)]);
var inst_13269 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13246);
var inst_13270 = cljs.core.pr_str.call(null,inst_13269);
var inst_13271 = [cljs.core.str("not required: "),cljs.core.str(inst_13270)].join('');
var inst_13272 = figwheel.client.utils.log.call(null,inst_13271);
var state_13280__$1 = state_13280;
var statearr_13328_13385 = state_13280__$1;
(statearr_13328_13385[(2)] = inst_13272);

(statearr_13328_13385[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (19))){
var inst_13216 = (state_13280[(12)]);
var inst_13212 = (state_13280[(13)]);
var inst_13213 = (state_13280[(15)]);
var inst_13217 = (state_13280[(16)]);
var inst_13216__$1 = (state_13280[(2)]);
var inst_13217__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_13216__$1);
var inst_13218 = (function (){var res = inst_13217__$1;
var res_SINGLEQUOTE_ = inst_13216__$1;
var files_SINGLEQUOTE_ = inst_13213;
var all_files = inst_13212;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13216,inst_13212,inst_13213,inst_13217,inst_13216__$1,inst_13217__$1,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (p1__12952_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__12952_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13216,inst_13212,inst_13213,inst_13217,inst_13216__$1,inst_13217__$1,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var inst_13219 = cljs.core.filter.call(null,inst_13218,inst_13216__$1);
var inst_13220 = cljs.core.not_empty.call(null,inst_13217__$1);
var state_13280__$1 = (function (){var statearr_13329 = state_13280;
(statearr_13329[(12)] = inst_13216__$1);

(statearr_13329[(14)] = inst_13219);

(statearr_13329[(16)] = inst_13217__$1);

return statearr_13329;
})();
if(cljs.core.truth_(inst_13220)){
var statearr_13330_13386 = state_13280__$1;
(statearr_13330_13386[(1)] = (20));

} else {
var statearr_13331_13387 = state_13280__$1;
(statearr_13331_13387[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (11))){
var state_13280__$1 = state_13280;
var statearr_13332_13388 = state_13280__$1;
(statearr_13332_13388[(2)] = null);

(statearr_13332_13388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (9))){
var inst_13199 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
var statearr_13333_13389 = state_13280__$1;
(statearr_13333_13389[(2)] = inst_13199);

(statearr_13333_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (5))){
var inst_13169 = (state_13280[(8)]);
var inst_13170 = (state_13280[(9)]);
var inst_13172 = (inst_13170 < inst_13169);
var inst_13173 = inst_13172;
var state_13280__$1 = state_13280;
if(cljs.core.truth_(inst_13173)){
var statearr_13334_13390 = state_13280__$1;
(statearr_13334_13390[(1)] = (7));

} else {
var statearr_13335_13391 = state_13280__$1;
(statearr_13335_13391[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (14))){
var inst_13180 = (state_13280[(26)]);
var inst_13189 = cljs.core.first.call(null,inst_13180);
var inst_13190 = figwheel.client.file_reloading.eval_body.call(null,inst_13189);
var inst_13191 = cljs.core.next.call(null,inst_13180);
var inst_13167 = inst_13191;
var inst_13168 = null;
var inst_13169 = (0);
var inst_13170 = (0);
var state_13280__$1 = (function (){var statearr_13336 = state_13280;
(statearr_13336[(32)] = inst_13190);

(statearr_13336[(7)] = inst_13167);

(statearr_13336[(8)] = inst_13169);

(statearr_13336[(9)] = inst_13170);

(statearr_13336[(10)] = inst_13168);

return statearr_13336;
})();
var statearr_13337_13392 = state_13280__$1;
(statearr_13337_13392[(2)] = null);

(statearr_13337_13392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (26))){
var inst_13239 = (state_13280[(19)]);
var inst_13242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13239);
var state_13280__$1 = state_13280;
var statearr_13338_13393 = state_13280__$1;
(statearr_13338_13393[(2)] = inst_13242);

(statearr_13338_13393[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (16))){
var inst_13206 = (state_13280[(23)]);
var inst_13208 = (function (){var all_files = inst_13206;
return ((function (all_files,inst_13206,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function (p1__12951_SHARP_){
return cljs.core.update_in.call(null,p1__12951_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_13206,state_val_13281,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var inst_13209 = cljs.core.map.call(null,inst_13208,inst_13206);
var state_13280__$1 = state_13280;
var statearr_13339_13394 = state_13280__$1;
(statearr_13339_13394[(2)] = inst_13209);

(statearr_13339_13394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (30))){
var state_13280__$1 = state_13280;
var statearr_13340_13395 = state_13280__$1;
(statearr_13340_13395[(2)] = null);

(statearr_13340_13395[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (10))){
var inst_13180 = (state_13280[(26)]);
var inst_13182 = cljs.core.chunked_seq_QMARK_.call(null,inst_13180);
var state_13280__$1 = state_13280;
if(inst_13182){
var statearr_13341_13396 = state_13280__$1;
(statearr_13341_13396[(1)] = (13));

} else {
var statearr_13342_13397 = state_13280__$1;
(statearr_13342_13397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (18))){
var inst_13212 = (state_13280[(13)]);
var inst_13213 = (state_13280[(15)]);
var inst_13212__$1 = (state_13280[(2)]);
var inst_13213__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_13212__$1);
var inst_13214 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_13213__$1);
var state_13280__$1 = (function (){var statearr_13343 = state_13280;
(statearr_13343[(13)] = inst_13212__$1);

(statearr_13343[(15)] = inst_13213__$1);

return statearr_13343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13280__$1,(19),inst_13214);
} else {
if((state_val_13281 === (37))){
var inst_13275 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
var statearr_13344_13398 = state_13280__$1;
(statearr_13344_13398[(2)] = inst_13275);

(statearr_13344_13398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (8))){
var inst_13180 = (state_13280[(26)]);
var inst_13167 = (state_13280[(7)]);
var inst_13180__$1 = cljs.core.seq.call(null,inst_13167);
var state_13280__$1 = (function (){var statearr_13345 = state_13280;
(statearr_13345[(26)] = inst_13180__$1);

return statearr_13345;
})();
if(inst_13180__$1){
var statearr_13346_13399 = state_13280__$1;
(statearr_13346_13399[(1)] = (10));

} else {
var statearr_13347_13400 = state_13280__$1;
(statearr_13347_13400[(1)] = (11));

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
});})(c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
;
return ((function (switch__7018__auto__,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto____0 = (function (){
var statearr_13351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13351[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto__);

(statearr_13351[(1)] = (1));

return statearr_13351;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto____1 = (function (state_13280){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e13352){if((e13352 instanceof Object)){
var ex__7022__auto__ = e13352;
var statearr_13353_13401 = state_13280;
(statearr_13353_13401[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13402 = state_13280;
state_13280 = G__13402;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto__ = function(state_13280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto____1.call(this,state_13280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
})();
var state__7082__auto__ = (function (){var statearr_13354 = f__7081__auto__.call(null);
(statearr_13354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_13354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__,map__13155,map__13155__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13156,map__13156__$1,msg,files))
);

return c__7080__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__13405,link){
var map__13407 = p__13405;
var map__13407__$1 = ((cljs.core.seq_QMARK_.call(null,map__13407))?cljs.core.apply.call(null,cljs.core.hash_map,map__13407):map__13407);
var file = cljs.core.get.call(null,map__13407__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__13407,map__13407__$1,file){
return (function (p1__13403_SHARP_,p2__13404_SHARP_){
if(cljs.core._EQ_.call(null,p1__13403_SHARP_,p2__13404_SHARP_)){
return p1__13403_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__13407,map__13407__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__13411){
var map__13412 = p__13411;
var map__13412__$1 = ((cljs.core.seq_QMARK_.call(null,map__13412))?cljs.core.apply.call(null,cljs.core.hash_map,map__13412):map__13412);
var current_url_length = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__13408_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__13408_SHARP_);
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
var G__13414 = arguments.length;
switch (G__13414) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__13416){
var map__13418 = p__13416;
var map__13418__$1 = ((cljs.core.seq_QMARK_.call(null,map__13418))?cljs.core.apply.call(null,cljs.core.hash_map,map__13418):map__13418);
var f_data = map__13418__$1;
var request_url = cljs.core.get.call(null,map__13418__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__13418__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__13419,files_msg){
var map__13441 = p__13419;
var map__13441__$1 = ((cljs.core.seq_QMARK_.call(null,map__13441))?cljs.core.apply.call(null,cljs.core.hash_map,map__13441):map__13441);
var opts = map__13441__$1;
var on_cssload = cljs.core.get.call(null,map__13441__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__13442_13462 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__13443_13463 = null;
var count__13444_13464 = (0);
var i__13445_13465 = (0);
while(true){
if((i__13445_13465 < count__13444_13464)){
var f_13466 = cljs.core._nth.call(null,chunk__13443_13463,i__13445_13465);
figwheel.client.file_reloading.reload_css_file.call(null,f_13466);

var G__13467 = seq__13442_13462;
var G__13468 = chunk__13443_13463;
var G__13469 = count__13444_13464;
var G__13470 = (i__13445_13465 + (1));
seq__13442_13462 = G__13467;
chunk__13443_13463 = G__13468;
count__13444_13464 = G__13469;
i__13445_13465 = G__13470;
continue;
} else {
var temp__4126__auto___13471 = cljs.core.seq.call(null,seq__13442_13462);
if(temp__4126__auto___13471){
var seq__13442_13472__$1 = temp__4126__auto___13471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13442_13472__$1)){
var c__4884__auto___13473 = cljs.core.chunk_first.call(null,seq__13442_13472__$1);
var G__13474 = cljs.core.chunk_rest.call(null,seq__13442_13472__$1);
var G__13475 = c__4884__auto___13473;
var G__13476 = cljs.core.count.call(null,c__4884__auto___13473);
var G__13477 = (0);
seq__13442_13462 = G__13474;
chunk__13443_13463 = G__13475;
count__13444_13464 = G__13476;
i__13445_13465 = G__13477;
continue;
} else {
var f_13478 = cljs.core.first.call(null,seq__13442_13472__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_13478);

var G__13479 = cljs.core.next.call(null,seq__13442_13472__$1);
var G__13480 = null;
var G__13481 = (0);
var G__13482 = (0);
seq__13442_13462 = G__13479;
chunk__13443_13463 = G__13480;
count__13444_13464 = G__13481;
i__13445_13465 = G__13482;
continue;
}
} else {
}
}
break;
}

var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__,map__13441,map__13441__$1,opts,on_cssload){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__,map__13441,map__13441__$1,opts,on_cssload){
return (function (state_13452){
var state_val_13453 = (state_13452[(1)]);
if((state_val_13453 === (2))){
var inst_13448 = (state_13452[(2)]);
var inst_13449 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_13450 = on_cssload.call(null,inst_13449);
var state_13452__$1 = (function (){var statearr_13454 = state_13452;
(statearr_13454[(7)] = inst_13448);

return statearr_13454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13452__$1,inst_13450);
} else {
if((state_val_13453 === (1))){
var inst_13446 = cljs.core.async.timeout.call(null,(100));
var state_13452__$1 = state_13452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13452__$1,(2),inst_13446);
} else {
return null;
}
}
});})(c__7080__auto__,map__13441,map__13441__$1,opts,on_cssload))
;
return ((function (switch__7018__auto__,c__7080__auto__,map__13441,map__13441__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto____0 = (function (){
var statearr_13458 = [null,null,null,null,null,null,null,null];
(statearr_13458[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto__);

(statearr_13458[(1)] = (1));

return statearr_13458;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto____1 = (function (state_13452){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_13452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e13459){if((e13459 instanceof Object)){
var ex__7022__auto__ = e13459;
var statearr_13460_13483 = state_13452;
(statearr_13460_13483[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13484 = state_13452;
state_13452 = G__13484;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto__ = function(state_13452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto____1.call(this,state_13452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__,map__13441,map__13441__$1,opts,on_cssload))
})();
var state__7082__auto__ = (function (){var statearr_13461 = f__7081__auto__.call(null);
(statearr_13461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_13461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__,map__13441,map__13441__$1,opts,on_cssload))
);

return c__7080__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
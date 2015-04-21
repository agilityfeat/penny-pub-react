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
return cljs.core.reduce.call(null,(function (p1__20375_SHARP_,p2__20376_SHARP_){
var and__4087__auto__ = p1__20375_SHARP_;
if(cljs.core.truth_(and__4087__auto__)){
return p2__20376_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__20378_SHARP_,p2__20377_SHARP_){
return [cljs.core.str(p2__20377_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20379){
var map__20380 = p__20379;
var map__20380__$1 = ((cljs.core.seq_QMARK_.call(null,map__20380))?cljs.core.apply.call(null,cljs.core.hash_map,map__20380):map__20380);
var file = cljs.core.get.call(null,map__20380__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__20381){
var map__20382 = p__20381;
var map__20382__$1 = ((cljs.core.seq_QMARK_.call(null,map__20382))?cljs.core.apply.call(null,cljs.core.hash_map,map__20382):map__20382);
var namespace = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e20383){if((e20383 instanceof Error)){
var e = e20383;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20383;

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
var G__20385 = arguments.length;
switch (G__20385) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20387,callback){
var map__20389 = p__20387;
var map__20389__$1 = ((cljs.core.seq_QMARK_.call(null,map__20389))?cljs.core.apply.call(null,cljs.core.hash_map,map__20389):map__20389);
var file_msg = map__20389__$1;
var request_url = cljs.core.get.call(null,map__20389__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20389,map__20389__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20389,map__20389__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20390){
var map__20392 = p__20390;
var map__20392__$1 = ((cljs.core.seq_QMARK_.call(null,map__20392))?cljs.core.apply.call(null,cljs.core.hash_map,map__20392):map__20392);
var file_msg = map__20392__$1;
var meta_data = cljs.core.get.call(null,map__20392__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__20392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20393,callback){
var map__20395 = p__20393;
var map__20395__$1 = ((cljs.core.seq_QMARK_.call(null,map__20395))?cljs.core.apply.call(null,cljs.core.hash_map,map__20395):map__20395);
var file_msg = map__20395__$1;
var namespace = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__8217__auto___20482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___20482,out){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___20482,out){
return (function (state_20464){
var state_val_20465 = (state_20464[(1)]);
if((state_val_20465 === (7))){
var inst_20448 = (state_20464[(7)]);
var inst_20454 = (state_20464[(2)]);
var inst_20455 = cljs.core.async.put_BANG_.call(null,out,inst_20454);
var inst_20444 = inst_20448;
var state_20464__$1 = (function (){var statearr_20466 = state_20464;
(statearr_20466[(8)] = inst_20444);

(statearr_20466[(9)] = inst_20455);

return statearr_20466;
})();
var statearr_20467_20483 = state_20464__$1;
(statearr_20467_20483[(2)] = null);

(statearr_20467_20483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (6))){
var inst_20460 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
var statearr_20468_20484 = state_20464__$1;
(statearr_20468_20484[(2)] = inst_20460);

(statearr_20468_20484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (5))){
var inst_20458 = cljs.core.async.close_BANG_.call(null,out);
var state_20464__$1 = state_20464;
var statearr_20469_20485 = state_20464__$1;
(statearr_20469_20485[(2)] = inst_20458);

(statearr_20469_20485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (4))){
var inst_20447 = (state_20464[(10)]);
var inst_20452 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20447);
var state_20464__$1 = state_20464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20464__$1,(7),inst_20452);
} else {
if((state_val_20465 === (3))){
var inst_20462 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20464__$1,inst_20462);
} else {
if((state_val_20465 === (2))){
var inst_20447 = (state_20464[(10)]);
var inst_20444 = (state_20464[(8)]);
var inst_20447__$1 = cljs.core.nth.call(null,inst_20444,(0),null);
var inst_20448 = cljs.core.nthnext.call(null,inst_20444,(1));
var inst_20449 = (inst_20447__$1 == null);
var inst_20450 = cljs.core.not.call(null,inst_20449);
var state_20464__$1 = (function (){var statearr_20470 = state_20464;
(statearr_20470[(10)] = inst_20447__$1);

(statearr_20470[(7)] = inst_20448);

return statearr_20470;
})();
if(inst_20450){
var statearr_20471_20486 = state_20464__$1;
(statearr_20471_20486[(1)] = (4));

} else {
var statearr_20472_20487 = state_20464__$1;
(statearr_20472_20487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (1))){
var inst_20442 = cljs.core.nth.call(null,files,(0),null);
var inst_20443 = cljs.core.nthnext.call(null,files,(1));
var inst_20444 = files;
var state_20464__$1 = (function (){var statearr_20473 = state_20464;
(statearr_20473[(11)] = inst_20443);

(statearr_20473[(8)] = inst_20444);

(statearr_20473[(12)] = inst_20442);

return statearr_20473;
})();
var statearr_20474_20488 = state_20464__$1;
(statearr_20474_20488[(2)] = null);

(statearr_20474_20488[(1)] = (2));


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
});})(c__8217__auto___20482,out))
;
return ((function (switch__8155__auto__,c__8217__auto___20482,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto____0 = (function (){
var statearr_20478 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20478[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto__);

(statearr_20478[(1)] = (1));

return statearr_20478;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto____1 = (function (state_20464){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_20464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e20479){if((e20479 instanceof Object)){
var ex__8159__auto__ = e20479;
var statearr_20480_20489 = state_20464;
(statearr_20480_20489[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20490 = state_20464;
state_20464 = G__20490;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto__ = function(state_20464){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto____1.call(this,state_20464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___20482,out))
})();
var state__8219__auto__ = (function (){var statearr_20481 = f__8218__auto__.call(null);
(statearr_20481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___20482);

return statearr_20481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___20482,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__20491,p__20492){
var map__20495 = p__20491;
var map__20495__$1 = ((cljs.core.seq_QMARK_.call(null,map__20495))?cljs.core.apply.call(null,cljs.core.hash_map,map__20495):map__20495);
var opts = map__20495__$1;
var url_rewriter = cljs.core.get.call(null,map__20495__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__20496 = p__20492;
var map__20496__$1 = ((cljs.core.seq_QMARK_.call(null,map__20496))?cljs.core.apply.call(null,cljs.core.hash_map,map__20496):map__20496);
var file_msg = map__20496__$1;
var file = cljs.core.get.call(null,map__20496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20497){
var map__20500 = p__20497;
var map__20500__$1 = ((cljs.core.seq_QMARK_.call(null,map__20500))?cljs.core.apply.call(null,cljs.core.hash_map,map__20500):map__20500);
var file = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e20501){var e = e20501;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20506,p__20507){
var map__20708 = p__20506;
var map__20708__$1 = ((cljs.core.seq_QMARK_.call(null,map__20708))?cljs.core.apply.call(null,cljs.core.hash_map,map__20708):map__20708);
var opts = map__20708__$1;
var load_unchanged_files = cljs.core.get.call(null,map__20708__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__20708__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__20708__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__20709 = p__20507;
var map__20709__$1 = ((cljs.core.seq_QMARK_.call(null,map__20709))?cljs.core.apply.call(null,cljs.core.hash_map,map__20709):map__20709);
var msg = map__20709__$1;
var files = cljs.core.get.call(null,map__20709__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (state_20833){
var state_val_20834 = (state_20833[(1)]);
if((state_val_20834 === (7))){
var inst_20723 = (state_20833[(7)]);
var inst_20721 = (state_20833[(8)]);
var inst_20722 = (state_20833[(9)]);
var inst_20720 = (state_20833[(10)]);
var inst_20728 = cljs.core._nth.call(null,inst_20721,inst_20723);
var inst_20729 = figwheel.client.file_reloading.eval_body.call(null,inst_20728);
var inst_20730 = (inst_20723 + (1));
var tmp20835 = inst_20721;
var tmp20836 = inst_20722;
var tmp20837 = inst_20720;
var inst_20720__$1 = tmp20837;
var inst_20721__$1 = tmp20835;
var inst_20722__$1 = tmp20836;
var inst_20723__$1 = inst_20730;
var state_20833__$1 = (function (){var statearr_20838 = state_20833;
(statearr_20838[(7)] = inst_20723__$1);

(statearr_20838[(11)] = inst_20729);

(statearr_20838[(8)] = inst_20721__$1);

(statearr_20838[(9)] = inst_20722__$1);

(statearr_20838[(10)] = inst_20720__$1);

return statearr_20838;
})();
var statearr_20839_20908 = state_20833__$1;
(statearr_20839_20908[(2)] = null);

(statearr_20839_20908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (20))){
var inst_20772 = (state_20833[(12)]);
var inst_20766 = (state_20833[(13)]);
var inst_20765 = (state_20833[(14)]);
var inst_20770 = (state_20833[(15)]);
var inst_20769 = (state_20833[(16)]);
var inst_20775 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_20777 = (function (){var files_not_loaded = inst_20772;
var res = inst_20770;
var res_SINGLEQUOTE_ = inst_20769;
var files_SINGLEQUOTE_ = inst_20766;
var all_files = inst_20765;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20772,inst_20766,inst_20765,inst_20770,inst_20769,inst_20775,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (p__20776){
var map__20840 = p__20776;
var map__20840__$1 = ((cljs.core.seq_QMARK_.call(null,map__20840))?cljs.core.apply.call(null,cljs.core.hash_map,map__20840):map__20840);
var file = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20772,inst_20766,inst_20765,inst_20770,inst_20769,inst_20775,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var inst_20778 = cljs.core.map.call(null,inst_20777,inst_20770);
var inst_20779 = cljs.core.pr_str.call(null,inst_20778);
var inst_20780 = figwheel.client.utils.log.call(null,inst_20779);
var inst_20781 = (function (){var files_not_loaded = inst_20772;
var res = inst_20770;
var res_SINGLEQUOTE_ = inst_20769;
var files_SINGLEQUOTE_ = inst_20766;
var all_files = inst_20765;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20772,inst_20766,inst_20765,inst_20770,inst_20769,inst_20775,inst_20777,inst_20778,inst_20779,inst_20780,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20772,inst_20766,inst_20765,inst_20770,inst_20769,inst_20775,inst_20777,inst_20778,inst_20779,inst_20780,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var inst_20782 = setTimeout(inst_20781,(10));
var state_20833__$1 = (function (){var statearr_20841 = state_20833;
(statearr_20841[(17)] = inst_20775);

(statearr_20841[(18)] = inst_20780);

return statearr_20841;
})();
var statearr_20842_20909 = state_20833__$1;
(statearr_20842_20909[(2)] = inst_20782);

(statearr_20842_20909[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (27))){
var inst_20792 = (state_20833[(19)]);
var state_20833__$1 = state_20833;
var statearr_20843_20910 = state_20833__$1;
(statearr_20843_20910[(2)] = inst_20792);

(statearr_20843_20910[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (1))){
var inst_20712 = (state_20833[(20)]);
var inst_20710 = before_jsload.call(null,files);
var inst_20711 = (function (){return ((function (inst_20712,inst_20710,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (p1__20502_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20502_SHARP_);
});
;})(inst_20712,inst_20710,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var inst_20712__$1 = cljs.core.filter.call(null,inst_20711,files);
var inst_20713 = cljs.core.not_empty.call(null,inst_20712__$1);
var state_20833__$1 = (function (){var statearr_20844 = state_20833;
(statearr_20844[(21)] = inst_20710);

(statearr_20844[(20)] = inst_20712__$1);

return statearr_20844;
})();
if(cljs.core.truth_(inst_20713)){
var statearr_20845_20911 = state_20833__$1;
(statearr_20845_20911[(1)] = (2));

} else {
var statearr_20846_20912 = state_20833__$1;
(statearr_20846_20912[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (24))){
var state_20833__$1 = state_20833;
var statearr_20847_20913 = state_20833__$1;
(statearr_20847_20913[(2)] = null);

(statearr_20847_20913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (4))){
var inst_20757 = (state_20833[(2)]);
var inst_20758 = (function (){return ((function (inst_20757,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (p1__20503_SHARP_){
var and__4087__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20503_SHARP_);
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20503_SHARP_));
} else {
return and__4087__auto__;
}
});
;})(inst_20757,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var inst_20759 = cljs.core.filter.call(null,inst_20758,files);
var state_20833__$1 = (function (){var statearr_20848 = state_20833;
(statearr_20848[(22)] = inst_20759);

(statearr_20848[(23)] = inst_20757);

return statearr_20848;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_20849_20914 = state_20833__$1;
(statearr_20849_20914[(1)] = (16));

} else {
var statearr_20850_20915 = state_20833__$1;
(statearr_20850_20915[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (15))){
var inst_20747 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20851_20916 = state_20833__$1;
(statearr_20851_20916[(2)] = inst_20747);

(statearr_20851_20916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (21))){
var state_20833__$1 = state_20833;
var statearr_20852_20917 = state_20833__$1;
(statearr_20852_20917[(2)] = null);

(statearr_20852_20917[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (31))){
var inst_20800 = (state_20833[(24)]);
var inst_20810 = (state_20833[(2)]);
var inst_20811 = cljs.core.not_empty.call(null,inst_20800);
var state_20833__$1 = (function (){var statearr_20853 = state_20833;
(statearr_20853[(25)] = inst_20810);

return statearr_20853;
})();
if(cljs.core.truth_(inst_20811)){
var statearr_20854_20918 = state_20833__$1;
(statearr_20854_20918[(1)] = (32));

} else {
var statearr_20855_20919 = state_20833__$1;
(statearr_20855_20919[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (32))){
var inst_20800 = (state_20833[(24)]);
var inst_20813 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20800);
var inst_20814 = cljs.core.pr_str.call(null,inst_20813);
var inst_20815 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_20814)].join('');
var inst_20816 = figwheel.client.utils.log.call(null,inst_20815);
var state_20833__$1 = state_20833;
var statearr_20856_20920 = state_20833__$1;
(statearr_20856_20920[(2)] = inst_20816);

(statearr_20856_20920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (33))){
var state_20833__$1 = state_20833;
var statearr_20857_20921 = state_20833__$1;
(statearr_20857_20921[(2)] = null);

(statearr_20857_20921[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (13))){
var inst_20733 = (state_20833[(26)]);
var inst_20737 = cljs.core.chunk_first.call(null,inst_20733);
var inst_20738 = cljs.core.chunk_rest.call(null,inst_20733);
var inst_20739 = cljs.core.count.call(null,inst_20737);
var inst_20720 = inst_20738;
var inst_20721 = inst_20737;
var inst_20722 = inst_20739;
var inst_20723 = (0);
var state_20833__$1 = (function (){var statearr_20858 = state_20833;
(statearr_20858[(7)] = inst_20723);

(statearr_20858[(8)] = inst_20721);

(statearr_20858[(9)] = inst_20722);

(statearr_20858[(10)] = inst_20720);

return statearr_20858;
})();
var statearr_20859_20922 = state_20833__$1;
(statearr_20859_20922[(2)] = null);

(statearr_20859_20922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (22))){
var inst_20772 = (state_20833[(12)]);
var inst_20785 = (state_20833[(2)]);
var inst_20786 = cljs.core.not_empty.call(null,inst_20772);
var state_20833__$1 = (function (){var statearr_20860 = state_20833;
(statearr_20860[(27)] = inst_20785);

return statearr_20860;
})();
if(cljs.core.truth_(inst_20786)){
var statearr_20861_20923 = state_20833__$1;
(statearr_20861_20923[(1)] = (23));

} else {
var statearr_20862_20924 = state_20833__$1;
(statearr_20862_20924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (36))){
var state_20833__$1 = state_20833;
var statearr_20863_20925 = state_20833__$1;
(statearr_20863_20925[(2)] = null);

(statearr_20863_20925[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (29))){
var inst_20801 = (state_20833[(28)]);
var inst_20804 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20801);
var inst_20805 = cljs.core.pr_str.call(null,inst_20804);
var inst_20806 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_20805)].join('');
var inst_20807 = figwheel.client.utils.log.call(null,inst_20806);
var state_20833__$1 = state_20833;
var statearr_20864_20926 = state_20833__$1;
(statearr_20864_20926[(2)] = inst_20807);

(statearr_20864_20926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (6))){
var inst_20754 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20865_20927 = state_20833__$1;
(statearr_20865_20927[(2)] = inst_20754);

(statearr_20865_20927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (28))){
var inst_20801 = (state_20833[(28)]);
var inst_20798 = (state_20833[(2)]);
var inst_20799 = cljs.core.get.call(null,inst_20798,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_20800 = cljs.core.get.call(null,inst_20798,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_20801__$1 = cljs.core.get.call(null,inst_20798,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_20802 = cljs.core.not_empty.call(null,inst_20801__$1);
var state_20833__$1 = (function (){var statearr_20866 = state_20833;
(statearr_20866[(28)] = inst_20801__$1);

(statearr_20866[(24)] = inst_20800);

(statearr_20866[(29)] = inst_20799);

return statearr_20866;
})();
if(cljs.core.truth_(inst_20802)){
var statearr_20867_20928 = state_20833__$1;
(statearr_20867_20928[(1)] = (29));

} else {
var statearr_20868_20929 = state_20833__$1;
(statearr_20868_20929[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (25))){
var inst_20831 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20833__$1,inst_20831);
} else {
if((state_val_20834 === (34))){
var inst_20799 = (state_20833[(29)]);
var inst_20819 = (state_20833[(2)]);
var inst_20820 = cljs.core.not_empty.call(null,inst_20799);
var state_20833__$1 = (function (){var statearr_20869 = state_20833;
(statearr_20869[(30)] = inst_20819);

return statearr_20869;
})();
if(cljs.core.truth_(inst_20820)){
var statearr_20870_20930 = state_20833__$1;
(statearr_20870_20930[(1)] = (35));

} else {
var statearr_20871_20931 = state_20833__$1;
(statearr_20871_20931[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (17))){
var inst_20759 = (state_20833[(22)]);
var state_20833__$1 = state_20833;
var statearr_20872_20932 = state_20833__$1;
(statearr_20872_20932[(2)] = inst_20759);

(statearr_20872_20932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (3))){
var state_20833__$1 = state_20833;
var statearr_20873_20933 = state_20833__$1;
(statearr_20873_20933[(2)] = null);

(statearr_20873_20933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (12))){
var inst_20750 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20874_20934 = state_20833__$1;
(statearr_20874_20934[(2)] = inst_20750);

(statearr_20874_20934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (2))){
var inst_20712 = (state_20833[(20)]);
var inst_20719 = cljs.core.seq.call(null,inst_20712);
var inst_20720 = inst_20719;
var inst_20721 = null;
var inst_20722 = (0);
var inst_20723 = (0);
var state_20833__$1 = (function (){var statearr_20875 = state_20833;
(statearr_20875[(7)] = inst_20723);

(statearr_20875[(8)] = inst_20721);

(statearr_20875[(9)] = inst_20722);

(statearr_20875[(10)] = inst_20720);

return statearr_20875;
})();
var statearr_20876_20935 = state_20833__$1;
(statearr_20876_20935[(2)] = null);

(statearr_20876_20935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (23))){
var inst_20772 = (state_20833[(12)]);
var inst_20766 = (state_20833[(13)]);
var inst_20765 = (state_20833[(14)]);
var inst_20792 = (state_20833[(19)]);
var inst_20770 = (state_20833[(15)]);
var inst_20769 = (state_20833[(16)]);
var inst_20788 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_20791 = (function (){var files_not_loaded = inst_20772;
var res = inst_20770;
var res_SINGLEQUOTE_ = inst_20769;
var files_SINGLEQUOTE_ = inst_20766;
var all_files = inst_20765;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20772,inst_20766,inst_20765,inst_20792,inst_20770,inst_20769,inst_20788,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (p__20790){
var map__20877 = p__20790;
var map__20877__$1 = ((cljs.core.seq_QMARK_.call(null,map__20877))?cljs.core.apply.call(null,cljs.core.hash_map,map__20877):map__20877);
var meta_data = cljs.core.get.call(null,map__20877__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20772,inst_20766,inst_20765,inst_20792,inst_20770,inst_20769,inst_20788,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var inst_20792__$1 = cljs.core.group_by.call(null,inst_20791,inst_20772);
var inst_20793 = cljs.core.seq_QMARK_.call(null,inst_20792__$1);
var state_20833__$1 = (function (){var statearr_20878 = state_20833;
(statearr_20878[(19)] = inst_20792__$1);

(statearr_20878[(31)] = inst_20788);

return statearr_20878;
})();
if(inst_20793){
var statearr_20879_20936 = state_20833__$1;
(statearr_20879_20936[(1)] = (26));

} else {
var statearr_20880_20937 = state_20833__$1;
(statearr_20880_20937[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (35))){
var inst_20799 = (state_20833[(29)]);
var inst_20822 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20799);
var inst_20823 = cljs.core.pr_str.call(null,inst_20822);
var inst_20824 = [cljs.core.str("not required: "),cljs.core.str(inst_20823)].join('');
var inst_20825 = figwheel.client.utils.log.call(null,inst_20824);
var state_20833__$1 = state_20833;
var statearr_20881_20938 = state_20833__$1;
(statearr_20881_20938[(2)] = inst_20825);

(statearr_20881_20938[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (19))){
var inst_20766 = (state_20833[(13)]);
var inst_20765 = (state_20833[(14)]);
var inst_20770 = (state_20833[(15)]);
var inst_20769 = (state_20833[(16)]);
var inst_20769__$1 = (state_20833[(2)]);
var inst_20770__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20769__$1);
var inst_20771 = (function (){var res = inst_20770__$1;
var res_SINGLEQUOTE_ = inst_20769__$1;
var files_SINGLEQUOTE_ = inst_20766;
var all_files = inst_20765;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20766,inst_20765,inst_20770,inst_20769,inst_20769__$1,inst_20770__$1,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (p1__20505_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20505_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_20766,inst_20765,inst_20770,inst_20769,inst_20769__$1,inst_20770__$1,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var inst_20772 = cljs.core.filter.call(null,inst_20771,inst_20769__$1);
var inst_20773 = cljs.core.not_empty.call(null,inst_20770__$1);
var state_20833__$1 = (function (){var statearr_20882 = state_20833;
(statearr_20882[(12)] = inst_20772);

(statearr_20882[(15)] = inst_20770__$1);

(statearr_20882[(16)] = inst_20769__$1);

return statearr_20882;
})();
if(cljs.core.truth_(inst_20773)){
var statearr_20883_20939 = state_20833__$1;
(statearr_20883_20939[(1)] = (20));

} else {
var statearr_20884_20940 = state_20833__$1;
(statearr_20884_20940[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (11))){
var state_20833__$1 = state_20833;
var statearr_20885_20941 = state_20833__$1;
(statearr_20885_20941[(2)] = null);

(statearr_20885_20941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (9))){
var inst_20752 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20886_20942 = state_20833__$1;
(statearr_20886_20942[(2)] = inst_20752);

(statearr_20886_20942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (5))){
var inst_20723 = (state_20833[(7)]);
var inst_20722 = (state_20833[(9)]);
var inst_20725 = (inst_20723 < inst_20722);
var inst_20726 = inst_20725;
var state_20833__$1 = state_20833;
if(cljs.core.truth_(inst_20726)){
var statearr_20887_20943 = state_20833__$1;
(statearr_20887_20943[(1)] = (7));

} else {
var statearr_20888_20944 = state_20833__$1;
(statearr_20888_20944[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (14))){
var inst_20733 = (state_20833[(26)]);
var inst_20742 = cljs.core.first.call(null,inst_20733);
var inst_20743 = figwheel.client.file_reloading.eval_body.call(null,inst_20742);
var inst_20744 = cljs.core.next.call(null,inst_20733);
var inst_20720 = inst_20744;
var inst_20721 = null;
var inst_20722 = (0);
var inst_20723 = (0);
var state_20833__$1 = (function (){var statearr_20889 = state_20833;
(statearr_20889[(7)] = inst_20723);

(statearr_20889[(8)] = inst_20721);

(statearr_20889[(9)] = inst_20722);

(statearr_20889[(32)] = inst_20743);

(statearr_20889[(10)] = inst_20720);

return statearr_20889;
})();
var statearr_20890_20945 = state_20833__$1;
(statearr_20890_20945[(2)] = null);

(statearr_20890_20945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (26))){
var inst_20792 = (state_20833[(19)]);
var inst_20795 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20792);
var state_20833__$1 = state_20833;
var statearr_20891_20946 = state_20833__$1;
(statearr_20891_20946[(2)] = inst_20795);

(statearr_20891_20946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (16))){
var inst_20759 = (state_20833[(22)]);
var inst_20761 = (function (){var all_files = inst_20759;
return ((function (all_files,inst_20759,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function (p1__20504_SHARP_){
return cljs.core.update_in.call(null,p1__20504_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_20759,state_val_20834,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var inst_20762 = cljs.core.map.call(null,inst_20761,inst_20759);
var state_20833__$1 = state_20833;
var statearr_20892_20947 = state_20833__$1;
(statearr_20892_20947[(2)] = inst_20762);

(statearr_20892_20947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (30))){
var state_20833__$1 = state_20833;
var statearr_20893_20948 = state_20833__$1;
(statearr_20893_20948[(2)] = null);

(statearr_20893_20948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (10))){
var inst_20733 = (state_20833[(26)]);
var inst_20735 = cljs.core.chunked_seq_QMARK_.call(null,inst_20733);
var state_20833__$1 = state_20833;
if(inst_20735){
var statearr_20894_20949 = state_20833__$1;
(statearr_20894_20949[(1)] = (13));

} else {
var statearr_20895_20950 = state_20833__$1;
(statearr_20895_20950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (18))){
var inst_20766 = (state_20833[(13)]);
var inst_20765 = (state_20833[(14)]);
var inst_20765__$1 = (state_20833[(2)]);
var inst_20766__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_20765__$1);
var inst_20767 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_20766__$1);
var state_20833__$1 = (function (){var statearr_20896 = state_20833;
(statearr_20896[(13)] = inst_20766__$1);

(statearr_20896[(14)] = inst_20765__$1);

return statearr_20896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20833__$1,(19),inst_20767);
} else {
if((state_val_20834 === (37))){
var inst_20828 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20897_20951 = state_20833__$1;
(statearr_20897_20951[(2)] = inst_20828);

(statearr_20897_20951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (8))){
var inst_20733 = (state_20833[(26)]);
var inst_20720 = (state_20833[(10)]);
var inst_20733__$1 = cljs.core.seq.call(null,inst_20720);
var state_20833__$1 = (function (){var statearr_20898 = state_20833;
(statearr_20898[(26)] = inst_20733__$1);

return statearr_20898;
})();
if(inst_20733__$1){
var statearr_20899_20952 = state_20833__$1;
(statearr_20899_20952[(1)] = (10));

} else {
var statearr_20900_20953 = state_20833__$1;
(statearr_20900_20953[(1)] = (11));

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
});})(c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
;
return ((function (switch__8155__auto__,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto____0 = (function (){
var statearr_20904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20904[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto__);

(statearr_20904[(1)] = (1));

return statearr_20904;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto____1 = (function (state_20833){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_20833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e20905){if((e20905 instanceof Object)){
var ex__8159__auto__ = e20905;
var statearr_20906_20954 = state_20833;
(statearr_20906_20954[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20955 = state_20833;
state_20833 = G__20955;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto__ = function(state_20833){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto____1.call(this,state_20833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
})();
var state__8219__auto__ = (function (){var statearr_20907 = f__8218__auto__.call(null);
(statearr_20907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_20907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__,map__20708,map__20708__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__20709,map__20709__$1,msg,files))
);

return c__8217__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__20958,link){
var map__20960 = p__20958;
var map__20960__$1 = ((cljs.core.seq_QMARK_.call(null,map__20960))?cljs.core.apply.call(null,cljs.core.hash_map,map__20960):map__20960);
var file = cljs.core.get.call(null,map__20960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__20960,map__20960__$1,file){
return (function (p1__20956_SHARP_,p2__20957_SHARP_){
if(cljs.core._EQ_.call(null,p1__20956_SHARP_,p2__20957_SHARP_)){
return p1__20956_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__20960,map__20960__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__20964){
var map__20965 = p__20964;
var map__20965__$1 = ((cljs.core.seq_QMARK_.call(null,map__20965))?cljs.core.apply.call(null,cljs.core.hash_map,map__20965):map__20965);
var current_url_length = cljs.core.get.call(null,map__20965__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__20965__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__20961_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__20961_SHARP_);
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
var G__20967 = arguments.length;
switch (G__20967) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__20969){
var map__20971 = p__20969;
var map__20971__$1 = ((cljs.core.seq_QMARK_.call(null,map__20971))?cljs.core.apply.call(null,cljs.core.hash_map,map__20971):map__20971);
var f_data = map__20971__$1;
var request_url = cljs.core.get.call(null,map__20971__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__20971__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__20972,files_msg){
var map__20994 = p__20972;
var map__20994__$1 = ((cljs.core.seq_QMARK_.call(null,map__20994))?cljs.core.apply.call(null,cljs.core.hash_map,map__20994):map__20994);
var opts = map__20994__$1;
var on_cssload = cljs.core.get.call(null,map__20994__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__20995_21015 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__20996_21016 = null;
var count__20997_21017 = (0);
var i__20998_21018 = (0);
while(true){
if((i__20998_21018 < count__20997_21017)){
var f_21019 = cljs.core._nth.call(null,chunk__20996_21016,i__20998_21018);
figwheel.client.file_reloading.reload_css_file.call(null,f_21019);

var G__21020 = seq__20995_21015;
var G__21021 = chunk__20996_21016;
var G__21022 = count__20997_21017;
var G__21023 = (i__20998_21018 + (1));
seq__20995_21015 = G__21020;
chunk__20996_21016 = G__21021;
count__20997_21017 = G__21022;
i__20998_21018 = G__21023;
continue;
} else {
var temp__4126__auto___21024 = cljs.core.seq.call(null,seq__20995_21015);
if(temp__4126__auto___21024){
var seq__20995_21025__$1 = temp__4126__auto___21024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20995_21025__$1)){
var c__4884__auto___21026 = cljs.core.chunk_first.call(null,seq__20995_21025__$1);
var G__21027 = cljs.core.chunk_rest.call(null,seq__20995_21025__$1);
var G__21028 = c__4884__auto___21026;
var G__21029 = cljs.core.count.call(null,c__4884__auto___21026);
var G__21030 = (0);
seq__20995_21015 = G__21027;
chunk__20996_21016 = G__21028;
count__20997_21017 = G__21029;
i__20998_21018 = G__21030;
continue;
} else {
var f_21031 = cljs.core.first.call(null,seq__20995_21025__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21031);

var G__21032 = cljs.core.next.call(null,seq__20995_21025__$1);
var G__21033 = null;
var G__21034 = (0);
var G__21035 = (0);
seq__20995_21015 = G__21032;
chunk__20996_21016 = G__21033;
count__20997_21017 = G__21034;
i__20998_21018 = G__21035;
continue;
}
} else {
}
}
break;
}

var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__,map__20994,map__20994__$1,opts,on_cssload){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__,map__20994,map__20994__$1,opts,on_cssload){
return (function (state_21005){
var state_val_21006 = (state_21005[(1)]);
if((state_val_21006 === (2))){
var inst_21001 = (state_21005[(2)]);
var inst_21002 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_21003 = on_cssload.call(null,inst_21002);
var state_21005__$1 = (function (){var statearr_21007 = state_21005;
(statearr_21007[(7)] = inst_21001);

return statearr_21007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21005__$1,inst_21003);
} else {
if((state_val_21006 === (1))){
var inst_20999 = cljs.core.async.timeout.call(null,(100));
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21005__$1,(2),inst_20999);
} else {
return null;
}
}
});})(c__8217__auto__,map__20994,map__20994__$1,opts,on_cssload))
;
return ((function (switch__8155__auto__,c__8217__auto__,map__20994,map__20994__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto____0 = (function (){
var statearr_21011 = [null,null,null,null,null,null,null,null];
(statearr_21011[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto__);

(statearr_21011[(1)] = (1));

return statearr_21011;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto____1 = (function (state_21005){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_21005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e21012){if((e21012 instanceof Object)){
var ex__8159__auto__ = e21012;
var statearr_21013_21036 = state_21005;
(statearr_21013_21036[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21037 = state_21005;
state_21005 = G__21037;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto__ = function(state_21005){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto____1.call(this,state_21005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__,map__20994,map__20994__$1,opts,on_cssload))
})();
var state__8219__auto__ = (function (){var statearr_21014 = f__8218__auto__.call(null);
(statearr_21014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_21014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__,map__20994,map__20994__$1,opts,on_cssload))
);

return c__8217__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
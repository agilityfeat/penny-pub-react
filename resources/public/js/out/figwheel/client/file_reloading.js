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
return cljs.core.reduce.call(null,(function (p1__18339_SHARP_,p2__18340_SHARP_){
var and__4087__auto__ = p1__18339_SHARP_;
if(cljs.core.truth_(and__4087__auto__)){
return p2__18340_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__18342_SHARP_,p2__18341_SHARP_){
return [cljs.core.str(p2__18341_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__18343){
var map__18344 = p__18343;
var map__18344__$1 = ((cljs.core.seq_QMARK_.call(null,map__18344))?cljs.core.apply.call(null,cljs.core.hash_map,map__18344):map__18344);
var file = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__18345){
var map__18346 = p__18345;
var map__18346__$1 = ((cljs.core.seq_QMARK_.call(null,map__18346))?cljs.core.apply.call(null,cljs.core.hash_map,map__18346):map__18346);
var namespace = cljs.core.get.call(null,map__18346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e18347){if((e18347 instanceof Error)){
var e = e18347;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e18347;

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
var G__18349 = arguments.length;
switch (G__18349) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__18351,callback){
var map__18353 = p__18351;
var map__18353__$1 = ((cljs.core.seq_QMARK_.call(null,map__18353))?cljs.core.apply.call(null,cljs.core.hash_map,map__18353):map__18353);
var file_msg = map__18353__$1;
var request_url = cljs.core.get.call(null,map__18353__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__18353,map__18353__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__18353,map__18353__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__18354){
var map__18356 = p__18354;
var map__18356__$1 = ((cljs.core.seq_QMARK_.call(null,map__18356))?cljs.core.apply.call(null,cljs.core.hash_map,map__18356):map__18356);
var file_msg = map__18356__$1;
var meta_data = cljs.core.get.call(null,map__18356__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__18356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__18357,callback){
var map__18359 = p__18357;
var map__18359__$1 = ((cljs.core.seq_QMARK_.call(null,map__18359))?cljs.core.apply.call(null,cljs.core.hash_map,map__18359):map__18359);
var file_msg = map__18359__$1;
var namespace = cljs.core.get.call(null,map__18359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__18359__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__7090__auto___18446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___18446,out){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___18446,out){
return (function (state_18428){
var state_val_18429 = (state_18428[(1)]);
if((state_val_18429 === (7))){
var inst_18412 = (state_18428[(7)]);
var inst_18418 = (state_18428[(2)]);
var inst_18419 = cljs.core.async.put_BANG_.call(null,out,inst_18418);
var inst_18408 = inst_18412;
var state_18428__$1 = (function (){var statearr_18430 = state_18428;
(statearr_18430[(8)] = inst_18408);

(statearr_18430[(9)] = inst_18419);

return statearr_18430;
})();
var statearr_18431_18447 = state_18428__$1;
(statearr_18431_18447[(2)] = null);

(statearr_18431_18447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (6))){
var inst_18424 = (state_18428[(2)]);
var state_18428__$1 = state_18428;
var statearr_18432_18448 = state_18428__$1;
(statearr_18432_18448[(2)] = inst_18424);

(statearr_18432_18448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (5))){
var inst_18422 = cljs.core.async.close_BANG_.call(null,out);
var state_18428__$1 = state_18428;
var statearr_18433_18449 = state_18428__$1;
(statearr_18433_18449[(2)] = inst_18422);

(statearr_18433_18449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (4))){
var inst_18411 = (state_18428[(10)]);
var inst_18416 = figwheel.client.file_reloading.reload_js_file.call(null,inst_18411);
var state_18428__$1 = state_18428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18428__$1,(7),inst_18416);
} else {
if((state_val_18429 === (3))){
var inst_18426 = (state_18428[(2)]);
var state_18428__$1 = state_18428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18428__$1,inst_18426);
} else {
if((state_val_18429 === (2))){
var inst_18411 = (state_18428[(10)]);
var inst_18408 = (state_18428[(8)]);
var inst_18411__$1 = cljs.core.nth.call(null,inst_18408,(0),null);
var inst_18412 = cljs.core.nthnext.call(null,inst_18408,(1));
var inst_18413 = (inst_18411__$1 == null);
var inst_18414 = cljs.core.not.call(null,inst_18413);
var state_18428__$1 = (function (){var statearr_18434 = state_18428;
(statearr_18434[(10)] = inst_18411__$1);

(statearr_18434[(7)] = inst_18412);

return statearr_18434;
})();
if(inst_18414){
var statearr_18435_18450 = state_18428__$1;
(statearr_18435_18450[(1)] = (4));

} else {
var statearr_18436_18451 = state_18428__$1;
(statearr_18436_18451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (1))){
var inst_18406 = cljs.core.nth.call(null,files,(0),null);
var inst_18407 = cljs.core.nthnext.call(null,files,(1));
var inst_18408 = files;
var state_18428__$1 = (function (){var statearr_18437 = state_18428;
(statearr_18437[(8)] = inst_18408);

(statearr_18437[(11)] = inst_18406);

(statearr_18437[(12)] = inst_18407);

return statearr_18437;
})();
var statearr_18438_18452 = state_18428__$1;
(statearr_18438_18452[(2)] = null);

(statearr_18438_18452[(1)] = (2));


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
});})(c__7090__auto___18446,out))
;
return ((function (switch__7028__auto__,c__7090__auto___18446,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto____0 = (function (){
var statearr_18442 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18442[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto__);

(statearr_18442[(1)] = (1));

return statearr_18442;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto____1 = (function (state_18428){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_18428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e18443){if((e18443 instanceof Object)){
var ex__7032__auto__ = e18443;
var statearr_18444_18453 = state_18428;
(statearr_18444_18453[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18454 = state_18428;
state_18428 = G__18454;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto__ = function(state_18428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto____1.call(this,state_18428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___18446,out))
})();
var state__7092__auto__ = (function (){var statearr_18445 = f__7091__auto__.call(null);
(statearr_18445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___18446);

return statearr_18445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___18446,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__18455,p__18456){
var map__18459 = p__18455;
var map__18459__$1 = ((cljs.core.seq_QMARK_.call(null,map__18459))?cljs.core.apply.call(null,cljs.core.hash_map,map__18459):map__18459);
var opts = map__18459__$1;
var url_rewriter = cljs.core.get.call(null,map__18459__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__18460 = p__18456;
var map__18460__$1 = ((cljs.core.seq_QMARK_.call(null,map__18460))?cljs.core.apply.call(null,cljs.core.hash_map,map__18460):map__18460);
var file_msg = map__18460__$1;
var file = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__18461){
var map__18464 = p__18461;
var map__18464__$1 = ((cljs.core.seq_QMARK_.call(null,map__18464))?cljs.core.apply.call(null,cljs.core.hash_map,map__18464):map__18464);
var file = cljs.core.get.call(null,map__18464__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__18464__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e18465){var e = e18465;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__18470,p__18471){
var map__18672 = p__18470;
var map__18672__$1 = ((cljs.core.seq_QMARK_.call(null,map__18672))?cljs.core.apply.call(null,cljs.core.hash_map,map__18672):map__18672);
var opts = map__18672__$1;
var load_unchanged_files = cljs.core.get.call(null,map__18672__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__18672__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__18672__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__18673 = p__18471;
var map__18673__$1 = ((cljs.core.seq_QMARK_.call(null,map__18673))?cljs.core.apply.call(null,cljs.core.hash_map,map__18673):map__18673);
var msg = map__18673__$1;
var files = cljs.core.get.call(null,map__18673__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (state_18797){
var state_val_18798 = (state_18797[(1)]);
if((state_val_18798 === (7))){
var inst_18685 = (state_18797[(7)]);
var inst_18684 = (state_18797[(8)]);
var inst_18687 = (state_18797[(9)]);
var inst_18686 = (state_18797[(10)]);
var inst_18692 = cljs.core._nth.call(null,inst_18685,inst_18687);
var inst_18693 = figwheel.client.file_reloading.eval_body.call(null,inst_18692);
var inst_18694 = (inst_18687 + (1));
var tmp18799 = inst_18685;
var tmp18800 = inst_18684;
var tmp18801 = inst_18686;
var inst_18684__$1 = tmp18800;
var inst_18685__$1 = tmp18799;
var inst_18686__$1 = tmp18801;
var inst_18687__$1 = inst_18694;
var state_18797__$1 = (function (){var statearr_18802 = state_18797;
(statearr_18802[(7)] = inst_18685__$1);

(statearr_18802[(8)] = inst_18684__$1);

(statearr_18802[(9)] = inst_18687__$1);

(statearr_18802[(10)] = inst_18686__$1);

(statearr_18802[(11)] = inst_18693);

return statearr_18802;
})();
var statearr_18803_18872 = state_18797__$1;
(statearr_18803_18872[(2)] = null);

(statearr_18803_18872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (20))){
var inst_18733 = (state_18797[(12)]);
var inst_18729 = (state_18797[(13)]);
var inst_18734 = (state_18797[(14)]);
var inst_18730 = (state_18797[(15)]);
var inst_18736 = (state_18797[(16)]);
var inst_18739 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_18741 = (function (){var files_not_loaded = inst_18736;
var res = inst_18734;
var res_SINGLEQUOTE_ = inst_18733;
var files_SINGLEQUOTE_ = inst_18730;
var all_files = inst_18729;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18734,inst_18730,inst_18736,inst_18739,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (p__18740){
var map__18804 = p__18740;
var map__18804__$1 = ((cljs.core.seq_QMARK_.call(null,map__18804))?cljs.core.apply.call(null,cljs.core.hash_map,map__18804):map__18804);
var file = cljs.core.get.call(null,map__18804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__18804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18734,inst_18730,inst_18736,inst_18739,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var inst_18742 = cljs.core.map.call(null,inst_18741,inst_18734);
var inst_18743 = cljs.core.pr_str.call(null,inst_18742);
var inst_18744 = figwheel.client.utils.log.call(null,inst_18743);
var inst_18745 = (function (){var files_not_loaded = inst_18736;
var res = inst_18734;
var res_SINGLEQUOTE_ = inst_18733;
var files_SINGLEQUOTE_ = inst_18730;
var all_files = inst_18729;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18734,inst_18730,inst_18736,inst_18739,inst_18741,inst_18742,inst_18743,inst_18744,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18734,inst_18730,inst_18736,inst_18739,inst_18741,inst_18742,inst_18743,inst_18744,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var inst_18746 = setTimeout(inst_18745,(10));
var state_18797__$1 = (function (){var statearr_18805 = state_18797;
(statearr_18805[(17)] = inst_18744);

(statearr_18805[(18)] = inst_18739);

return statearr_18805;
})();
var statearr_18806_18873 = state_18797__$1;
(statearr_18806_18873[(2)] = inst_18746);

(statearr_18806_18873[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (27))){
var inst_18756 = (state_18797[(19)]);
var state_18797__$1 = state_18797;
var statearr_18807_18874 = state_18797__$1;
(statearr_18807_18874[(2)] = inst_18756);

(statearr_18807_18874[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (1))){
var inst_18676 = (state_18797[(20)]);
var inst_18674 = before_jsload.call(null,files);
var inst_18675 = (function (){return ((function (inst_18676,inst_18674,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (p1__18466_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18466_SHARP_);
});
;})(inst_18676,inst_18674,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var inst_18676__$1 = cljs.core.filter.call(null,inst_18675,files);
var inst_18677 = cljs.core.not_empty.call(null,inst_18676__$1);
var state_18797__$1 = (function (){var statearr_18808 = state_18797;
(statearr_18808[(21)] = inst_18674);

(statearr_18808[(20)] = inst_18676__$1);

return statearr_18808;
})();
if(cljs.core.truth_(inst_18677)){
var statearr_18809_18875 = state_18797__$1;
(statearr_18809_18875[(1)] = (2));

} else {
var statearr_18810_18876 = state_18797__$1;
(statearr_18810_18876[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (24))){
var state_18797__$1 = state_18797;
var statearr_18811_18877 = state_18797__$1;
(statearr_18811_18877[(2)] = null);

(statearr_18811_18877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (4))){
var inst_18721 = (state_18797[(2)]);
var inst_18722 = (function (){return ((function (inst_18721,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (p1__18467_SHARP_){
var and__4087__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__18467_SHARP_);
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18467_SHARP_));
} else {
return and__4087__auto__;
}
});
;})(inst_18721,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var inst_18723 = cljs.core.filter.call(null,inst_18722,files);
var state_18797__$1 = (function (){var statearr_18812 = state_18797;
(statearr_18812[(22)] = inst_18721);

(statearr_18812[(23)] = inst_18723);

return statearr_18812;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_18813_18878 = state_18797__$1;
(statearr_18813_18878[(1)] = (16));

} else {
var statearr_18814_18879 = state_18797__$1;
(statearr_18814_18879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (15))){
var inst_18711 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18815_18880 = state_18797__$1;
(statearr_18815_18880[(2)] = inst_18711);

(statearr_18815_18880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (21))){
var state_18797__$1 = state_18797;
var statearr_18816_18881 = state_18797__$1;
(statearr_18816_18881[(2)] = null);

(statearr_18816_18881[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (31))){
var inst_18764 = (state_18797[(24)]);
var inst_18774 = (state_18797[(2)]);
var inst_18775 = cljs.core.not_empty.call(null,inst_18764);
var state_18797__$1 = (function (){var statearr_18817 = state_18797;
(statearr_18817[(25)] = inst_18774);

return statearr_18817;
})();
if(cljs.core.truth_(inst_18775)){
var statearr_18818_18882 = state_18797__$1;
(statearr_18818_18882[(1)] = (32));

} else {
var statearr_18819_18883 = state_18797__$1;
(statearr_18819_18883[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (32))){
var inst_18764 = (state_18797[(24)]);
var inst_18777 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18764);
var inst_18778 = cljs.core.pr_str.call(null,inst_18777);
var inst_18779 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_18778)].join('');
var inst_18780 = figwheel.client.utils.log.call(null,inst_18779);
var state_18797__$1 = state_18797;
var statearr_18820_18884 = state_18797__$1;
(statearr_18820_18884[(2)] = inst_18780);

(statearr_18820_18884[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (33))){
var state_18797__$1 = state_18797;
var statearr_18821_18885 = state_18797__$1;
(statearr_18821_18885[(2)] = null);

(statearr_18821_18885[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (13))){
var inst_18697 = (state_18797[(26)]);
var inst_18701 = cljs.core.chunk_first.call(null,inst_18697);
var inst_18702 = cljs.core.chunk_rest.call(null,inst_18697);
var inst_18703 = cljs.core.count.call(null,inst_18701);
var inst_18684 = inst_18702;
var inst_18685 = inst_18701;
var inst_18686 = inst_18703;
var inst_18687 = (0);
var state_18797__$1 = (function (){var statearr_18822 = state_18797;
(statearr_18822[(7)] = inst_18685);

(statearr_18822[(8)] = inst_18684);

(statearr_18822[(9)] = inst_18687);

(statearr_18822[(10)] = inst_18686);

return statearr_18822;
})();
var statearr_18823_18886 = state_18797__$1;
(statearr_18823_18886[(2)] = null);

(statearr_18823_18886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (22))){
var inst_18736 = (state_18797[(16)]);
var inst_18749 = (state_18797[(2)]);
var inst_18750 = cljs.core.not_empty.call(null,inst_18736);
var state_18797__$1 = (function (){var statearr_18824 = state_18797;
(statearr_18824[(27)] = inst_18749);

return statearr_18824;
})();
if(cljs.core.truth_(inst_18750)){
var statearr_18825_18887 = state_18797__$1;
(statearr_18825_18887[(1)] = (23));

} else {
var statearr_18826_18888 = state_18797__$1;
(statearr_18826_18888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (36))){
var state_18797__$1 = state_18797;
var statearr_18827_18889 = state_18797__$1;
(statearr_18827_18889[(2)] = null);

(statearr_18827_18889[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (29))){
var inst_18765 = (state_18797[(28)]);
var inst_18768 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18765);
var inst_18769 = cljs.core.pr_str.call(null,inst_18768);
var inst_18770 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_18769)].join('');
var inst_18771 = figwheel.client.utils.log.call(null,inst_18770);
var state_18797__$1 = state_18797;
var statearr_18828_18890 = state_18797__$1;
(statearr_18828_18890[(2)] = inst_18771);

(statearr_18828_18890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (6))){
var inst_18718 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18829_18891 = state_18797__$1;
(statearr_18829_18891[(2)] = inst_18718);

(statearr_18829_18891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (28))){
var inst_18765 = (state_18797[(28)]);
var inst_18762 = (state_18797[(2)]);
var inst_18763 = cljs.core.get.call(null,inst_18762,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_18764 = cljs.core.get.call(null,inst_18762,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_18765__$1 = cljs.core.get.call(null,inst_18762,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_18766 = cljs.core.not_empty.call(null,inst_18765__$1);
var state_18797__$1 = (function (){var statearr_18830 = state_18797;
(statearr_18830[(29)] = inst_18763);

(statearr_18830[(24)] = inst_18764);

(statearr_18830[(28)] = inst_18765__$1);

return statearr_18830;
})();
if(cljs.core.truth_(inst_18766)){
var statearr_18831_18892 = state_18797__$1;
(statearr_18831_18892[(1)] = (29));

} else {
var statearr_18832_18893 = state_18797__$1;
(statearr_18832_18893[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (25))){
var inst_18795 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18797__$1,inst_18795);
} else {
if((state_val_18798 === (34))){
var inst_18763 = (state_18797[(29)]);
var inst_18783 = (state_18797[(2)]);
var inst_18784 = cljs.core.not_empty.call(null,inst_18763);
var state_18797__$1 = (function (){var statearr_18833 = state_18797;
(statearr_18833[(30)] = inst_18783);

return statearr_18833;
})();
if(cljs.core.truth_(inst_18784)){
var statearr_18834_18894 = state_18797__$1;
(statearr_18834_18894[(1)] = (35));

} else {
var statearr_18835_18895 = state_18797__$1;
(statearr_18835_18895[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (17))){
var inst_18723 = (state_18797[(23)]);
var state_18797__$1 = state_18797;
var statearr_18836_18896 = state_18797__$1;
(statearr_18836_18896[(2)] = inst_18723);

(statearr_18836_18896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (3))){
var state_18797__$1 = state_18797;
var statearr_18837_18897 = state_18797__$1;
(statearr_18837_18897[(2)] = null);

(statearr_18837_18897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (12))){
var inst_18714 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18838_18898 = state_18797__$1;
(statearr_18838_18898[(2)] = inst_18714);

(statearr_18838_18898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (2))){
var inst_18676 = (state_18797[(20)]);
var inst_18683 = cljs.core.seq.call(null,inst_18676);
var inst_18684 = inst_18683;
var inst_18685 = null;
var inst_18686 = (0);
var inst_18687 = (0);
var state_18797__$1 = (function (){var statearr_18839 = state_18797;
(statearr_18839[(7)] = inst_18685);

(statearr_18839[(8)] = inst_18684);

(statearr_18839[(9)] = inst_18687);

(statearr_18839[(10)] = inst_18686);

return statearr_18839;
})();
var statearr_18840_18899 = state_18797__$1;
(statearr_18840_18899[(2)] = null);

(statearr_18840_18899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (23))){
var inst_18733 = (state_18797[(12)]);
var inst_18729 = (state_18797[(13)]);
var inst_18756 = (state_18797[(19)]);
var inst_18734 = (state_18797[(14)]);
var inst_18730 = (state_18797[(15)]);
var inst_18736 = (state_18797[(16)]);
var inst_18752 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_18755 = (function (){var files_not_loaded = inst_18736;
var res = inst_18734;
var res_SINGLEQUOTE_ = inst_18733;
var files_SINGLEQUOTE_ = inst_18730;
var all_files = inst_18729;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18756,inst_18734,inst_18730,inst_18736,inst_18752,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (p__18754){
var map__18841 = p__18754;
var map__18841__$1 = ((cljs.core.seq_QMARK_.call(null,map__18841))?cljs.core.apply.call(null,cljs.core.hash_map,map__18841):map__18841);
var meta_data = cljs.core.get.call(null,map__18841__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18756,inst_18734,inst_18730,inst_18736,inst_18752,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var inst_18756__$1 = cljs.core.group_by.call(null,inst_18755,inst_18736);
var inst_18757 = cljs.core.seq_QMARK_.call(null,inst_18756__$1);
var state_18797__$1 = (function (){var statearr_18842 = state_18797;
(statearr_18842[(31)] = inst_18752);

(statearr_18842[(19)] = inst_18756__$1);

return statearr_18842;
})();
if(inst_18757){
var statearr_18843_18900 = state_18797__$1;
(statearr_18843_18900[(1)] = (26));

} else {
var statearr_18844_18901 = state_18797__$1;
(statearr_18844_18901[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (35))){
var inst_18763 = (state_18797[(29)]);
var inst_18786 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18763);
var inst_18787 = cljs.core.pr_str.call(null,inst_18786);
var inst_18788 = [cljs.core.str("not required: "),cljs.core.str(inst_18787)].join('');
var inst_18789 = figwheel.client.utils.log.call(null,inst_18788);
var state_18797__$1 = state_18797;
var statearr_18845_18902 = state_18797__$1;
(statearr_18845_18902[(2)] = inst_18789);

(statearr_18845_18902[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (19))){
var inst_18733 = (state_18797[(12)]);
var inst_18729 = (state_18797[(13)]);
var inst_18734 = (state_18797[(14)]);
var inst_18730 = (state_18797[(15)]);
var inst_18733__$1 = (state_18797[(2)]);
var inst_18734__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_18733__$1);
var inst_18735 = (function (){var res = inst_18734__$1;
var res_SINGLEQUOTE_ = inst_18733__$1;
var files_SINGLEQUOTE_ = inst_18730;
var all_files = inst_18729;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18734,inst_18730,inst_18733__$1,inst_18734__$1,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (p1__18469_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__18469_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18733,inst_18729,inst_18734,inst_18730,inst_18733__$1,inst_18734__$1,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var inst_18736 = cljs.core.filter.call(null,inst_18735,inst_18733__$1);
var inst_18737 = cljs.core.not_empty.call(null,inst_18734__$1);
var state_18797__$1 = (function (){var statearr_18846 = state_18797;
(statearr_18846[(12)] = inst_18733__$1);

(statearr_18846[(14)] = inst_18734__$1);

(statearr_18846[(16)] = inst_18736);

return statearr_18846;
})();
if(cljs.core.truth_(inst_18737)){
var statearr_18847_18903 = state_18797__$1;
(statearr_18847_18903[(1)] = (20));

} else {
var statearr_18848_18904 = state_18797__$1;
(statearr_18848_18904[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (11))){
var state_18797__$1 = state_18797;
var statearr_18849_18905 = state_18797__$1;
(statearr_18849_18905[(2)] = null);

(statearr_18849_18905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (9))){
var inst_18716 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18850_18906 = state_18797__$1;
(statearr_18850_18906[(2)] = inst_18716);

(statearr_18850_18906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (5))){
var inst_18687 = (state_18797[(9)]);
var inst_18686 = (state_18797[(10)]);
var inst_18689 = (inst_18687 < inst_18686);
var inst_18690 = inst_18689;
var state_18797__$1 = state_18797;
if(cljs.core.truth_(inst_18690)){
var statearr_18851_18907 = state_18797__$1;
(statearr_18851_18907[(1)] = (7));

} else {
var statearr_18852_18908 = state_18797__$1;
(statearr_18852_18908[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (14))){
var inst_18697 = (state_18797[(26)]);
var inst_18706 = cljs.core.first.call(null,inst_18697);
var inst_18707 = figwheel.client.file_reloading.eval_body.call(null,inst_18706);
var inst_18708 = cljs.core.next.call(null,inst_18697);
var inst_18684 = inst_18708;
var inst_18685 = null;
var inst_18686 = (0);
var inst_18687 = (0);
var state_18797__$1 = (function (){var statearr_18853 = state_18797;
(statearr_18853[(7)] = inst_18685);

(statearr_18853[(8)] = inst_18684);

(statearr_18853[(9)] = inst_18687);

(statearr_18853[(32)] = inst_18707);

(statearr_18853[(10)] = inst_18686);

return statearr_18853;
})();
var statearr_18854_18909 = state_18797__$1;
(statearr_18854_18909[(2)] = null);

(statearr_18854_18909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (26))){
var inst_18756 = (state_18797[(19)]);
var inst_18759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18756);
var state_18797__$1 = state_18797;
var statearr_18855_18910 = state_18797__$1;
(statearr_18855_18910[(2)] = inst_18759);

(statearr_18855_18910[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (16))){
var inst_18723 = (state_18797[(23)]);
var inst_18725 = (function (){var all_files = inst_18723;
return ((function (all_files,inst_18723,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function (p1__18468_SHARP_){
return cljs.core.update_in.call(null,p1__18468_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_18723,state_val_18798,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var inst_18726 = cljs.core.map.call(null,inst_18725,inst_18723);
var state_18797__$1 = state_18797;
var statearr_18856_18911 = state_18797__$1;
(statearr_18856_18911[(2)] = inst_18726);

(statearr_18856_18911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (30))){
var state_18797__$1 = state_18797;
var statearr_18857_18912 = state_18797__$1;
(statearr_18857_18912[(2)] = null);

(statearr_18857_18912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (10))){
var inst_18697 = (state_18797[(26)]);
var inst_18699 = cljs.core.chunked_seq_QMARK_.call(null,inst_18697);
var state_18797__$1 = state_18797;
if(inst_18699){
var statearr_18858_18913 = state_18797__$1;
(statearr_18858_18913[(1)] = (13));

} else {
var statearr_18859_18914 = state_18797__$1;
(statearr_18859_18914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (18))){
var inst_18729 = (state_18797[(13)]);
var inst_18730 = (state_18797[(15)]);
var inst_18729__$1 = (state_18797[(2)]);
var inst_18730__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_18729__$1);
var inst_18731 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_18730__$1);
var state_18797__$1 = (function (){var statearr_18860 = state_18797;
(statearr_18860[(13)] = inst_18729__$1);

(statearr_18860[(15)] = inst_18730__$1);

return statearr_18860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18797__$1,(19),inst_18731);
} else {
if((state_val_18798 === (37))){
var inst_18792 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18861_18915 = state_18797__$1;
(statearr_18861_18915[(2)] = inst_18792);

(statearr_18861_18915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (8))){
var inst_18684 = (state_18797[(8)]);
var inst_18697 = (state_18797[(26)]);
var inst_18697__$1 = cljs.core.seq.call(null,inst_18684);
var state_18797__$1 = (function (){var statearr_18862 = state_18797;
(statearr_18862[(26)] = inst_18697__$1);

return statearr_18862;
})();
if(inst_18697__$1){
var statearr_18863_18916 = state_18797__$1;
(statearr_18863_18916[(1)] = (10));

} else {
var statearr_18864_18917 = state_18797__$1;
(statearr_18864_18917[(1)] = (11));

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
});})(c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
;
return ((function (switch__7028__auto__,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto____0 = (function (){
var statearr_18868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18868[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto__);

(statearr_18868[(1)] = (1));

return statearr_18868;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto____1 = (function (state_18797){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_18797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e18869){if((e18869 instanceof Object)){
var ex__7032__auto__ = e18869;
var statearr_18870_18918 = state_18797;
(statearr_18870_18918[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18919 = state_18797;
state_18797 = G__18919;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto__ = function(state_18797){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto____1.call(this,state_18797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
})();
var state__7092__auto__ = (function (){var statearr_18871 = f__7091__auto__.call(null);
(statearr_18871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_18871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__,map__18672,map__18672__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18673,map__18673__$1,msg,files))
);

return c__7090__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__18922,link){
var map__18924 = p__18922;
var map__18924__$1 = ((cljs.core.seq_QMARK_.call(null,map__18924))?cljs.core.apply.call(null,cljs.core.hash_map,map__18924):map__18924);
var file = cljs.core.get.call(null,map__18924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__18924,map__18924__$1,file){
return (function (p1__18920_SHARP_,p2__18921_SHARP_){
if(cljs.core._EQ_.call(null,p1__18920_SHARP_,p2__18921_SHARP_)){
return p1__18920_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__18924,map__18924__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__18928){
var map__18929 = p__18928;
var map__18929__$1 = ((cljs.core.seq_QMARK_.call(null,map__18929))?cljs.core.apply.call(null,cljs.core.hash_map,map__18929):map__18929);
var current_url_length = cljs.core.get.call(null,map__18929__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__18929__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__18925_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__18925_SHARP_);
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
var G__18931 = arguments.length;
switch (G__18931) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__18933){
var map__18935 = p__18933;
var map__18935__$1 = ((cljs.core.seq_QMARK_.call(null,map__18935))?cljs.core.apply.call(null,cljs.core.hash_map,map__18935):map__18935);
var f_data = map__18935__$1;
var request_url = cljs.core.get.call(null,map__18935__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__18935__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__18936,files_msg){
var map__18958 = p__18936;
var map__18958__$1 = ((cljs.core.seq_QMARK_.call(null,map__18958))?cljs.core.apply.call(null,cljs.core.hash_map,map__18958):map__18958);
var opts = map__18958__$1;
var on_cssload = cljs.core.get.call(null,map__18958__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__18959_18979 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__18960_18980 = null;
var count__18961_18981 = (0);
var i__18962_18982 = (0);
while(true){
if((i__18962_18982 < count__18961_18981)){
var f_18983 = cljs.core._nth.call(null,chunk__18960_18980,i__18962_18982);
figwheel.client.file_reloading.reload_css_file.call(null,f_18983);

var G__18984 = seq__18959_18979;
var G__18985 = chunk__18960_18980;
var G__18986 = count__18961_18981;
var G__18987 = (i__18962_18982 + (1));
seq__18959_18979 = G__18984;
chunk__18960_18980 = G__18985;
count__18961_18981 = G__18986;
i__18962_18982 = G__18987;
continue;
} else {
var temp__4126__auto___18988 = cljs.core.seq.call(null,seq__18959_18979);
if(temp__4126__auto___18988){
var seq__18959_18989__$1 = temp__4126__auto___18988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18959_18989__$1)){
var c__4884__auto___18990 = cljs.core.chunk_first.call(null,seq__18959_18989__$1);
var G__18991 = cljs.core.chunk_rest.call(null,seq__18959_18989__$1);
var G__18992 = c__4884__auto___18990;
var G__18993 = cljs.core.count.call(null,c__4884__auto___18990);
var G__18994 = (0);
seq__18959_18979 = G__18991;
chunk__18960_18980 = G__18992;
count__18961_18981 = G__18993;
i__18962_18982 = G__18994;
continue;
} else {
var f_18995 = cljs.core.first.call(null,seq__18959_18989__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_18995);

var G__18996 = cljs.core.next.call(null,seq__18959_18989__$1);
var G__18997 = null;
var G__18998 = (0);
var G__18999 = (0);
seq__18959_18979 = G__18996;
chunk__18960_18980 = G__18997;
count__18961_18981 = G__18998;
i__18962_18982 = G__18999;
continue;
}
} else {
}
}
break;
}

var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__,map__18958,map__18958__$1,opts,on_cssload){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__,map__18958,map__18958__$1,opts,on_cssload){
return (function (state_18969){
var state_val_18970 = (state_18969[(1)]);
if((state_val_18970 === (2))){
var inst_18965 = (state_18969[(2)]);
var inst_18966 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_18967 = on_cssload.call(null,inst_18966);
var state_18969__$1 = (function (){var statearr_18971 = state_18969;
(statearr_18971[(7)] = inst_18965);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18969__$1,inst_18967);
} else {
if((state_val_18970 === (1))){
var inst_18963 = cljs.core.async.timeout.call(null,(100));
var state_18969__$1 = state_18969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18969__$1,(2),inst_18963);
} else {
return null;
}
}
});})(c__7090__auto__,map__18958,map__18958__$1,opts,on_cssload))
;
return ((function (switch__7028__auto__,c__7090__auto__,map__18958,map__18958__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto____0 = (function (){
var statearr_18975 = [null,null,null,null,null,null,null,null];
(statearr_18975[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto__);

(statearr_18975[(1)] = (1));

return statearr_18975;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto____1 = (function (state_18969){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_18969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e18976){if((e18976 instanceof Object)){
var ex__7032__auto__ = e18976;
var statearr_18977_19000 = state_18969;
(statearr_18977_19000[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19001 = state_18969;
state_18969 = G__19001;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto__ = function(state_18969){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto____1.call(this,state_18969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__,map__18958,map__18958__$1,opts,on_cssload))
})();
var state__7092__auto__ = (function (){var statearr_18978 = f__7091__auto__.call(null);
(statearr_18978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_18978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__,map__18958,map__18958__$1,opts,on_cssload))
);

return c__7090__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
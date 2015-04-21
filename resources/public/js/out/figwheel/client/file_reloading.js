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
return cljs.core.reduce.call(null,(function (p1__32031_SHARP_,p2__32032_SHARP_){
var and__24914__auto__ = p1__32031_SHARP_;
if(cljs.core.truth_(and__24914__auto__)){
return p2__32032_SHARP_;
} else {
return and__24914__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24926__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24926__auto__){
return or__24926__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__32034_SHARP_,p2__32033_SHARP_){
return [cljs.core.str(p2__32033_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__24926__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__24926__auto__){
return or__24926__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__24926__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__32035){
var map__32036 = p__32035;
var map__32036__$1 = ((cljs.core.seq_QMARK_.call(null,map__32036))?cljs.core.apply.call(null,cljs.core.hash_map,map__32036):map__32036);
var file = cljs.core.get.call(null,map__32036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__32037){
var map__32038 = p__32037;
var map__32038__$1 = ((cljs.core.seq_QMARK_.call(null,map__32038))?cljs.core.apply.call(null,cljs.core.hash_map,map__32038):map__32038);
var namespace = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e32039){if((e32039 instanceof Error)){
var e = e32039;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32039;

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
var G__32041 = arguments.length;
switch (G__32041) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32043,callback){
var map__32045 = p__32043;
var map__32045__$1 = ((cljs.core.seq_QMARK_.call(null,map__32045))?cljs.core.apply.call(null,cljs.core.hash_map,map__32045):map__32045);
var file_msg = map__32045__$1;
var request_url = cljs.core.get.call(null,map__32045__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32045,map__32045__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32045,map__32045__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32046){
var map__32048 = p__32046;
var map__32048__$1 = ((cljs.core.seq_QMARK_.call(null,map__32048))?cljs.core.apply.call(null,cljs.core.hash_map,map__32048):map__32048);
var file_msg = map__32048__$1;
var meta_data = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__24926__auto__ = meta_data;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__24914__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__24914__auto__){
var or__24926__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24926__auto____$1)){
return or__24926__auto____$1;
} else {
var and__24914__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__24914__auto____$1){
var or__24926__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__24926__auto____$2){
return or__24926__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__24914__auto____$1;
}
}
}
} else {
return and__24914__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32049,callback){
var map__32051 = p__32049;
var map__32051__$1 = ((cljs.core.seq_QMARK_.call(null,map__32051))?cljs.core.apply.call(null,cljs.core.hash_map,map__32051):map__32051);
var file_msg = map__32051__$1;
var namespace = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__28065__auto___32138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___32138,out){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___32138,out){
return (function (state_32120){
var state_val_32121 = (state_32120[(1)]);
if((state_val_32121 === (7))){
var inst_32104 = (state_32120[(7)]);
var inst_32110 = (state_32120[(2)]);
var inst_32111 = cljs.core.async.put_BANG_.call(null,out,inst_32110);
var inst_32100 = inst_32104;
var state_32120__$1 = (function (){var statearr_32122 = state_32120;
(statearr_32122[(8)] = inst_32100);

(statearr_32122[(9)] = inst_32111);

return statearr_32122;
})();
var statearr_32123_32139 = state_32120__$1;
(statearr_32123_32139[(2)] = null);

(statearr_32123_32139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (6))){
var inst_32116 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32124_32140 = state_32120__$1;
(statearr_32124_32140[(2)] = inst_32116);

(statearr_32124_32140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (5))){
var inst_32114 = cljs.core.async.close_BANG_.call(null,out);
var state_32120__$1 = state_32120;
var statearr_32125_32141 = state_32120__$1;
(statearr_32125_32141[(2)] = inst_32114);

(statearr_32125_32141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (4))){
var inst_32103 = (state_32120[(10)]);
var inst_32108 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32103);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(7),inst_32108);
} else {
if((state_val_32121 === (3))){
var inst_32118 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32120__$1,inst_32118);
} else {
if((state_val_32121 === (2))){
var inst_32100 = (state_32120[(8)]);
var inst_32103 = (state_32120[(10)]);
var inst_32103__$1 = cljs.core.nth.call(null,inst_32100,(0),null);
var inst_32104 = cljs.core.nthnext.call(null,inst_32100,(1));
var inst_32105 = (inst_32103__$1 == null);
var inst_32106 = cljs.core.not.call(null,inst_32105);
var state_32120__$1 = (function (){var statearr_32126 = state_32120;
(statearr_32126[(7)] = inst_32104);

(statearr_32126[(10)] = inst_32103__$1);

return statearr_32126;
})();
if(inst_32106){
var statearr_32127_32142 = state_32120__$1;
(statearr_32127_32142[(1)] = (4));

} else {
var statearr_32128_32143 = state_32120__$1;
(statearr_32128_32143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (1))){
var inst_32098 = cljs.core.nth.call(null,files,(0),null);
var inst_32099 = cljs.core.nthnext.call(null,files,(1));
var inst_32100 = files;
var state_32120__$1 = (function (){var statearr_32129 = state_32120;
(statearr_32129[(11)] = inst_32098);

(statearr_32129[(12)] = inst_32099);

(statearr_32129[(8)] = inst_32100);

return statearr_32129;
})();
var statearr_32130_32144 = state_32120__$1;
(statearr_32130_32144[(2)] = null);

(statearr_32130_32144[(1)] = (2));


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
});})(c__28065__auto___32138,out))
;
return ((function (switch__28003__auto__,c__28065__auto___32138,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto____0 = (function (){
var statearr_32134 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32134[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto__);

(statearr_32134[(1)] = (1));

return statearr_32134;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto____1 = (function (state_32120){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_32120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e32135){if((e32135 instanceof Object)){
var ex__28007__auto__ = e32135;
var statearr_32136_32145 = state_32120;
(statearr_32136_32145[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32146 = state_32120;
state_32120 = G__32146;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto__ = function(state_32120){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto____1.call(this,state_32120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___32138,out))
})();
var state__28067__auto__ = (function (){var statearr_32137 = f__28066__auto__.call(null);
(statearr_32137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___32138);

return statearr_32137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___32138,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__32147,p__32148){
var map__32151 = p__32147;
var map__32151__$1 = ((cljs.core.seq_QMARK_.call(null,map__32151))?cljs.core.apply.call(null,cljs.core.hash_map,map__32151):map__32151);
var opts = map__32151__$1;
var url_rewriter = cljs.core.get.call(null,map__32151__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__32152 = p__32148;
var map__32152__$1 = ((cljs.core.seq_QMARK_.call(null,map__32152))?cljs.core.apply.call(null,cljs.core.hash_map,map__32152):map__32152);
var file_msg = map__32152__$1;
var file = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32153){
var map__32156 = p__32153;
var map__32156__$1 = ((cljs.core.seq_QMARK_.call(null,map__32156))?cljs.core.apply.call(null,cljs.core.hash_map,map__32156):map__32156);
var file = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__24914__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24914__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24914__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e32157){var e = e32157;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32162,p__32163){
var map__32364 = p__32162;
var map__32364__$1 = ((cljs.core.seq_QMARK_.call(null,map__32364))?cljs.core.apply.call(null,cljs.core.hash_map,map__32364):map__32364);
var opts = map__32364__$1;
var load_unchanged_files = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__32365 = p__32163;
var map__32365__$1 = ((cljs.core.seq_QMARK_.call(null,map__32365))?cljs.core.apply.call(null,cljs.core.hash_map,map__32365):map__32365);
var msg = map__32365__$1;
var files = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (state_32489){
var state_val_32490 = (state_32489[(1)]);
if((state_val_32490 === (7))){
var inst_32378 = (state_32489[(7)]);
var inst_32377 = (state_32489[(8)]);
var inst_32379 = (state_32489[(9)]);
var inst_32376 = (state_32489[(10)]);
var inst_32384 = cljs.core._nth.call(null,inst_32377,inst_32379);
var inst_32385 = figwheel.client.file_reloading.eval_body.call(null,inst_32384);
var inst_32386 = (inst_32379 + (1));
var tmp32491 = inst_32378;
var tmp32492 = inst_32377;
var tmp32493 = inst_32376;
var inst_32376__$1 = tmp32493;
var inst_32377__$1 = tmp32492;
var inst_32378__$1 = tmp32491;
var inst_32379__$1 = inst_32386;
var state_32489__$1 = (function (){var statearr_32494 = state_32489;
(statearr_32494[(7)] = inst_32378__$1);

(statearr_32494[(8)] = inst_32377__$1);

(statearr_32494[(11)] = inst_32385);

(statearr_32494[(9)] = inst_32379__$1);

(statearr_32494[(10)] = inst_32376__$1);

return statearr_32494;
})();
var statearr_32495_32564 = state_32489__$1;
(statearr_32495_32564[(2)] = null);

(statearr_32495_32564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (20))){
var inst_32421 = (state_32489[(12)]);
var inst_32426 = (state_32489[(13)]);
var inst_32428 = (state_32489[(14)]);
var inst_32422 = (state_32489[(15)]);
var inst_32425 = (state_32489[(16)]);
var inst_32431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32433 = (function (){var files_not_loaded = inst_32428;
var res = inst_32426;
var res_SINGLEQUOTE_ = inst_32425;
var files_SINGLEQUOTE_ = inst_32422;
var all_files = inst_32421;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32428,inst_32422,inst_32425,inst_32431,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (p__32432){
var map__32496 = p__32432;
var map__32496__$1 = ((cljs.core.seq_QMARK_.call(null,map__32496))?cljs.core.apply.call(null,cljs.core.hash_map,map__32496):map__32496);
var file = cljs.core.get.call(null,map__32496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__32496__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32428,inst_32422,inst_32425,inst_32431,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var inst_32434 = cljs.core.map.call(null,inst_32433,inst_32426);
var inst_32435 = cljs.core.pr_str.call(null,inst_32434);
var inst_32436 = figwheel.client.utils.log.call(null,inst_32435);
var inst_32437 = (function (){var files_not_loaded = inst_32428;
var res = inst_32426;
var res_SINGLEQUOTE_ = inst_32425;
var files_SINGLEQUOTE_ = inst_32422;
var all_files = inst_32421;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32428,inst_32422,inst_32425,inst_32431,inst_32433,inst_32434,inst_32435,inst_32436,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32428,inst_32422,inst_32425,inst_32431,inst_32433,inst_32434,inst_32435,inst_32436,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var inst_32438 = setTimeout(inst_32437,(10));
var state_32489__$1 = (function (){var statearr_32497 = state_32489;
(statearr_32497[(17)] = inst_32436);

(statearr_32497[(18)] = inst_32431);

return statearr_32497;
})();
var statearr_32498_32565 = state_32489__$1;
(statearr_32498_32565[(2)] = inst_32438);

(statearr_32498_32565[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (27))){
var inst_32448 = (state_32489[(19)]);
var state_32489__$1 = state_32489;
var statearr_32499_32566 = state_32489__$1;
(statearr_32499_32566[(2)] = inst_32448);

(statearr_32499_32566[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (1))){
var inst_32368 = (state_32489[(20)]);
var inst_32366 = before_jsload.call(null,files);
var inst_32367 = (function (){return ((function (inst_32368,inst_32366,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (p1__32158_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32158_SHARP_);
});
;})(inst_32368,inst_32366,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var inst_32368__$1 = cljs.core.filter.call(null,inst_32367,files);
var inst_32369 = cljs.core.not_empty.call(null,inst_32368__$1);
var state_32489__$1 = (function (){var statearr_32500 = state_32489;
(statearr_32500[(20)] = inst_32368__$1);

(statearr_32500[(21)] = inst_32366);

return statearr_32500;
})();
if(cljs.core.truth_(inst_32369)){
var statearr_32501_32567 = state_32489__$1;
(statearr_32501_32567[(1)] = (2));

} else {
var statearr_32502_32568 = state_32489__$1;
(statearr_32502_32568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (24))){
var state_32489__$1 = state_32489;
var statearr_32503_32569 = state_32489__$1;
(statearr_32503_32569[(2)] = null);

(statearr_32503_32569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (4))){
var inst_32413 = (state_32489[(2)]);
var inst_32414 = (function (){return ((function (inst_32413,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (p1__32159_SHARP_){
var and__24914__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32159_SHARP_);
if(cljs.core.truth_(and__24914__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32159_SHARP_));
} else {
return and__24914__auto__;
}
});
;})(inst_32413,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var inst_32415 = cljs.core.filter.call(null,inst_32414,files);
var state_32489__$1 = (function (){var statearr_32504 = state_32489;
(statearr_32504[(22)] = inst_32415);

(statearr_32504[(23)] = inst_32413);

return statearr_32504;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32505_32570 = state_32489__$1;
(statearr_32505_32570[(1)] = (16));

} else {
var statearr_32506_32571 = state_32489__$1;
(statearr_32506_32571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (15))){
var inst_32403 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32507_32572 = state_32489__$1;
(statearr_32507_32572[(2)] = inst_32403);

(statearr_32507_32572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (21))){
var state_32489__$1 = state_32489;
var statearr_32508_32573 = state_32489__$1;
(statearr_32508_32573[(2)] = null);

(statearr_32508_32573[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (31))){
var inst_32456 = (state_32489[(24)]);
var inst_32466 = (state_32489[(2)]);
var inst_32467 = cljs.core.not_empty.call(null,inst_32456);
var state_32489__$1 = (function (){var statearr_32509 = state_32489;
(statearr_32509[(25)] = inst_32466);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32467)){
var statearr_32510_32574 = state_32489__$1;
(statearr_32510_32574[(1)] = (32));

} else {
var statearr_32511_32575 = state_32489__$1;
(statearr_32511_32575[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (32))){
var inst_32456 = (state_32489[(24)]);
var inst_32469 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32456);
var inst_32470 = cljs.core.pr_str.call(null,inst_32469);
var inst_32471 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32470)].join('');
var inst_32472 = figwheel.client.utils.log.call(null,inst_32471);
var state_32489__$1 = state_32489;
var statearr_32512_32576 = state_32489__$1;
(statearr_32512_32576[(2)] = inst_32472);

(statearr_32512_32576[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (33))){
var state_32489__$1 = state_32489;
var statearr_32513_32577 = state_32489__$1;
(statearr_32513_32577[(2)] = null);

(statearr_32513_32577[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (13))){
var inst_32389 = (state_32489[(26)]);
var inst_32393 = cljs.core.chunk_first.call(null,inst_32389);
var inst_32394 = cljs.core.chunk_rest.call(null,inst_32389);
var inst_32395 = cljs.core.count.call(null,inst_32393);
var inst_32376 = inst_32394;
var inst_32377 = inst_32393;
var inst_32378 = inst_32395;
var inst_32379 = (0);
var state_32489__$1 = (function (){var statearr_32514 = state_32489;
(statearr_32514[(7)] = inst_32378);

(statearr_32514[(8)] = inst_32377);

(statearr_32514[(9)] = inst_32379);

(statearr_32514[(10)] = inst_32376);

return statearr_32514;
})();
var statearr_32515_32578 = state_32489__$1;
(statearr_32515_32578[(2)] = null);

(statearr_32515_32578[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (22))){
var inst_32428 = (state_32489[(14)]);
var inst_32441 = (state_32489[(2)]);
var inst_32442 = cljs.core.not_empty.call(null,inst_32428);
var state_32489__$1 = (function (){var statearr_32516 = state_32489;
(statearr_32516[(27)] = inst_32441);

return statearr_32516;
})();
if(cljs.core.truth_(inst_32442)){
var statearr_32517_32579 = state_32489__$1;
(statearr_32517_32579[(1)] = (23));

} else {
var statearr_32518_32580 = state_32489__$1;
(statearr_32518_32580[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (36))){
var state_32489__$1 = state_32489;
var statearr_32519_32581 = state_32489__$1;
(statearr_32519_32581[(2)] = null);

(statearr_32519_32581[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (29))){
var inst_32457 = (state_32489[(28)]);
var inst_32460 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32457);
var inst_32461 = cljs.core.pr_str.call(null,inst_32460);
var inst_32462 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32461)].join('');
var inst_32463 = figwheel.client.utils.log.call(null,inst_32462);
var state_32489__$1 = state_32489;
var statearr_32520_32582 = state_32489__$1;
(statearr_32520_32582[(2)] = inst_32463);

(statearr_32520_32582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (6))){
var inst_32410 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32521_32583 = state_32489__$1;
(statearr_32521_32583[(2)] = inst_32410);

(statearr_32521_32583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (28))){
var inst_32457 = (state_32489[(28)]);
var inst_32454 = (state_32489[(2)]);
var inst_32455 = cljs.core.get.call(null,inst_32454,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32456 = cljs.core.get.call(null,inst_32454,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32457__$1 = cljs.core.get.call(null,inst_32454,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32458 = cljs.core.not_empty.call(null,inst_32457__$1);
var state_32489__$1 = (function (){var statearr_32522 = state_32489;
(statearr_32522[(28)] = inst_32457__$1);

(statearr_32522[(29)] = inst_32455);

(statearr_32522[(24)] = inst_32456);

return statearr_32522;
})();
if(cljs.core.truth_(inst_32458)){
var statearr_32523_32584 = state_32489__$1;
(statearr_32523_32584[(1)] = (29));

} else {
var statearr_32524_32585 = state_32489__$1;
(statearr_32524_32585[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (25))){
var inst_32487 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32489__$1,inst_32487);
} else {
if((state_val_32490 === (34))){
var inst_32455 = (state_32489[(29)]);
var inst_32475 = (state_32489[(2)]);
var inst_32476 = cljs.core.not_empty.call(null,inst_32455);
var state_32489__$1 = (function (){var statearr_32525 = state_32489;
(statearr_32525[(30)] = inst_32475);

return statearr_32525;
})();
if(cljs.core.truth_(inst_32476)){
var statearr_32526_32586 = state_32489__$1;
(statearr_32526_32586[(1)] = (35));

} else {
var statearr_32527_32587 = state_32489__$1;
(statearr_32527_32587[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (17))){
var inst_32415 = (state_32489[(22)]);
var state_32489__$1 = state_32489;
var statearr_32528_32588 = state_32489__$1;
(statearr_32528_32588[(2)] = inst_32415);

(statearr_32528_32588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (3))){
var state_32489__$1 = state_32489;
var statearr_32529_32589 = state_32489__$1;
(statearr_32529_32589[(2)] = null);

(statearr_32529_32589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (12))){
var inst_32406 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32530_32590 = state_32489__$1;
(statearr_32530_32590[(2)] = inst_32406);

(statearr_32530_32590[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (2))){
var inst_32368 = (state_32489[(20)]);
var inst_32375 = cljs.core.seq.call(null,inst_32368);
var inst_32376 = inst_32375;
var inst_32377 = null;
var inst_32378 = (0);
var inst_32379 = (0);
var state_32489__$1 = (function (){var statearr_32531 = state_32489;
(statearr_32531[(7)] = inst_32378);

(statearr_32531[(8)] = inst_32377);

(statearr_32531[(9)] = inst_32379);

(statearr_32531[(10)] = inst_32376);

return statearr_32531;
})();
var statearr_32532_32591 = state_32489__$1;
(statearr_32532_32591[(2)] = null);

(statearr_32532_32591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (23))){
var inst_32421 = (state_32489[(12)]);
var inst_32426 = (state_32489[(13)]);
var inst_32428 = (state_32489[(14)]);
var inst_32422 = (state_32489[(15)]);
var inst_32448 = (state_32489[(19)]);
var inst_32425 = (state_32489[(16)]);
var inst_32444 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32447 = (function (){var files_not_loaded = inst_32428;
var res = inst_32426;
var res_SINGLEQUOTE_ = inst_32425;
var files_SINGLEQUOTE_ = inst_32422;
var all_files = inst_32421;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32428,inst_32422,inst_32448,inst_32425,inst_32444,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (p__32446){
var map__32533 = p__32446;
var map__32533__$1 = ((cljs.core.seq_QMARK_.call(null,map__32533))?cljs.core.apply.call(null,cljs.core.hash_map,map__32533):map__32533);
var meta_data = cljs.core.get.call(null,map__32533__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32428,inst_32422,inst_32448,inst_32425,inst_32444,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var inst_32448__$1 = cljs.core.group_by.call(null,inst_32447,inst_32428);
var inst_32449 = cljs.core.seq_QMARK_.call(null,inst_32448__$1);
var state_32489__$1 = (function (){var statearr_32534 = state_32489;
(statearr_32534[(31)] = inst_32444);

(statearr_32534[(19)] = inst_32448__$1);

return statearr_32534;
})();
if(inst_32449){
var statearr_32535_32592 = state_32489__$1;
(statearr_32535_32592[(1)] = (26));

} else {
var statearr_32536_32593 = state_32489__$1;
(statearr_32536_32593[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (35))){
var inst_32455 = (state_32489[(29)]);
var inst_32478 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32455);
var inst_32479 = cljs.core.pr_str.call(null,inst_32478);
var inst_32480 = [cljs.core.str("not required: "),cljs.core.str(inst_32479)].join('');
var inst_32481 = figwheel.client.utils.log.call(null,inst_32480);
var state_32489__$1 = state_32489;
var statearr_32537_32594 = state_32489__$1;
(statearr_32537_32594[(2)] = inst_32481);

(statearr_32537_32594[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (19))){
var inst_32421 = (state_32489[(12)]);
var inst_32426 = (state_32489[(13)]);
var inst_32422 = (state_32489[(15)]);
var inst_32425 = (state_32489[(16)]);
var inst_32425__$1 = (state_32489[(2)]);
var inst_32426__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32425__$1);
var inst_32427 = (function (){var res = inst_32426__$1;
var res_SINGLEQUOTE_ = inst_32425__$1;
var files_SINGLEQUOTE_ = inst_32422;
var all_files = inst_32421;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32422,inst_32425,inst_32425__$1,inst_32426__$1,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (p1__32161_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32161_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32421,inst_32426,inst_32422,inst_32425,inst_32425__$1,inst_32426__$1,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var inst_32428 = cljs.core.filter.call(null,inst_32427,inst_32425__$1);
var inst_32429 = cljs.core.not_empty.call(null,inst_32426__$1);
var state_32489__$1 = (function (){var statearr_32538 = state_32489;
(statearr_32538[(13)] = inst_32426__$1);

(statearr_32538[(14)] = inst_32428);

(statearr_32538[(16)] = inst_32425__$1);

return statearr_32538;
})();
if(cljs.core.truth_(inst_32429)){
var statearr_32539_32595 = state_32489__$1;
(statearr_32539_32595[(1)] = (20));

} else {
var statearr_32540_32596 = state_32489__$1;
(statearr_32540_32596[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (11))){
var state_32489__$1 = state_32489;
var statearr_32541_32597 = state_32489__$1;
(statearr_32541_32597[(2)] = null);

(statearr_32541_32597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (9))){
var inst_32408 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32542_32598 = state_32489__$1;
(statearr_32542_32598[(2)] = inst_32408);

(statearr_32542_32598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (5))){
var inst_32378 = (state_32489[(7)]);
var inst_32379 = (state_32489[(9)]);
var inst_32381 = (inst_32379 < inst_32378);
var inst_32382 = inst_32381;
var state_32489__$1 = state_32489;
if(cljs.core.truth_(inst_32382)){
var statearr_32543_32599 = state_32489__$1;
(statearr_32543_32599[(1)] = (7));

} else {
var statearr_32544_32600 = state_32489__$1;
(statearr_32544_32600[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (14))){
var inst_32389 = (state_32489[(26)]);
var inst_32398 = cljs.core.first.call(null,inst_32389);
var inst_32399 = figwheel.client.file_reloading.eval_body.call(null,inst_32398);
var inst_32400 = cljs.core.next.call(null,inst_32389);
var inst_32376 = inst_32400;
var inst_32377 = null;
var inst_32378 = (0);
var inst_32379 = (0);
var state_32489__$1 = (function (){var statearr_32545 = state_32489;
(statearr_32545[(7)] = inst_32378);

(statearr_32545[(32)] = inst_32399);

(statearr_32545[(8)] = inst_32377);

(statearr_32545[(9)] = inst_32379);

(statearr_32545[(10)] = inst_32376);

return statearr_32545;
})();
var statearr_32546_32601 = state_32489__$1;
(statearr_32546_32601[(2)] = null);

(statearr_32546_32601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (26))){
var inst_32448 = (state_32489[(19)]);
var inst_32451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32448);
var state_32489__$1 = state_32489;
var statearr_32547_32602 = state_32489__$1;
(statearr_32547_32602[(2)] = inst_32451);

(statearr_32547_32602[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (16))){
var inst_32415 = (state_32489[(22)]);
var inst_32417 = (function (){var all_files = inst_32415;
return ((function (all_files,inst_32415,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function (p1__32160_SHARP_){
return cljs.core.update_in.call(null,p1__32160_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32415,state_val_32490,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var inst_32418 = cljs.core.map.call(null,inst_32417,inst_32415);
var state_32489__$1 = state_32489;
var statearr_32548_32603 = state_32489__$1;
(statearr_32548_32603[(2)] = inst_32418);

(statearr_32548_32603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (30))){
var state_32489__$1 = state_32489;
var statearr_32549_32604 = state_32489__$1;
(statearr_32549_32604[(2)] = null);

(statearr_32549_32604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (10))){
var inst_32389 = (state_32489[(26)]);
var inst_32391 = cljs.core.chunked_seq_QMARK_.call(null,inst_32389);
var state_32489__$1 = state_32489;
if(inst_32391){
var statearr_32550_32605 = state_32489__$1;
(statearr_32550_32605[(1)] = (13));

} else {
var statearr_32551_32606 = state_32489__$1;
(statearr_32551_32606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (18))){
var inst_32421 = (state_32489[(12)]);
var inst_32422 = (state_32489[(15)]);
var inst_32421__$1 = (state_32489[(2)]);
var inst_32422__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32421__$1);
var inst_32423 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32422__$1);
var state_32489__$1 = (function (){var statearr_32552 = state_32489;
(statearr_32552[(12)] = inst_32421__$1);

(statearr_32552[(15)] = inst_32422__$1);

return statearr_32552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32489__$1,(19),inst_32423);
} else {
if((state_val_32490 === (37))){
var inst_32484 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32553_32607 = state_32489__$1;
(statearr_32553_32607[(2)] = inst_32484);

(statearr_32553_32607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (8))){
var inst_32376 = (state_32489[(10)]);
var inst_32389 = (state_32489[(26)]);
var inst_32389__$1 = cljs.core.seq.call(null,inst_32376);
var state_32489__$1 = (function (){var statearr_32554 = state_32489;
(statearr_32554[(26)] = inst_32389__$1);

return statearr_32554;
})();
if(inst_32389__$1){
var statearr_32555_32608 = state_32489__$1;
(statearr_32555_32608[(1)] = (10));

} else {
var statearr_32556_32609 = state_32489__$1;
(statearr_32556_32609[(1)] = (11));

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
});})(c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
;
return ((function (switch__28003__auto__,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto____0 = (function (){
var statearr_32560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32560[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto__);

(statearr_32560[(1)] = (1));

return statearr_32560;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto____1 = (function (state_32489){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_32489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e32561){if((e32561 instanceof Object)){
var ex__28007__auto__ = e32561;
var statearr_32562_32610 = state_32489;
(statearr_32562_32610[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32611 = state_32489;
state_32489 = G__32611;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto__ = function(state_32489){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto____1.call(this,state_32489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
})();
var state__28067__auto__ = (function (){var statearr_32563 = f__28066__auto__.call(null);
(statearr_32563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_32563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__,map__32364,map__32364__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32365,map__32365__$1,msg,files))
);

return c__28065__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32614,link){
var map__32616 = p__32614;
var map__32616__$1 = ((cljs.core.seq_QMARK_.call(null,map__32616))?cljs.core.apply.call(null,cljs.core.hash_map,map__32616):map__32616);
var file = cljs.core.get.call(null,map__32616__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__32616,map__32616__$1,file){
return (function (p1__32612_SHARP_,p2__32613_SHARP_){
if(cljs.core._EQ_.call(null,p1__32612_SHARP_,p2__32613_SHARP_)){
return p1__32612_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__32616,map__32616__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32620){
var map__32621 = p__32620;
var map__32621__$1 = ((cljs.core.seq_QMARK_.call(null,map__32621))?cljs.core.apply.call(null,cljs.core.hash_map,map__32621):map__32621);
var current_url_length = cljs.core.get.call(null,map__32621__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__32621__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32617_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32617_SHARP_);
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
var G__32623 = arguments.length;
switch (G__32623) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32625){
var map__32627 = p__32625;
var map__32627__$1 = ((cljs.core.seq_QMARK_.call(null,map__32627))?cljs.core.apply.call(null,cljs.core.hash_map,map__32627):map__32627);
var f_data = map__32627__$1;
var request_url = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__24926__auto__ = request_url;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32628,files_msg){
var map__32650 = p__32628;
var map__32650__$1 = ((cljs.core.seq_QMARK_.call(null,map__32650))?cljs.core.apply.call(null,cljs.core.hash_map,map__32650):map__32650);
var opts = map__32650__$1;
var on_cssload = cljs.core.get.call(null,map__32650__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32651_32671 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32652_32672 = null;
var count__32653_32673 = (0);
var i__32654_32674 = (0);
while(true){
if((i__32654_32674 < count__32653_32673)){
var f_32675 = cljs.core._nth.call(null,chunk__32652_32672,i__32654_32674);
figwheel.client.file_reloading.reload_css_file.call(null,f_32675);

var G__32676 = seq__32651_32671;
var G__32677 = chunk__32652_32672;
var G__32678 = count__32653_32673;
var G__32679 = (i__32654_32674 + (1));
seq__32651_32671 = G__32676;
chunk__32652_32672 = G__32677;
count__32653_32673 = G__32678;
i__32654_32674 = G__32679;
continue;
} else {
var temp__4126__auto___32680 = cljs.core.seq.call(null,seq__32651_32671);
if(temp__4126__auto___32680){
var seq__32651_32681__$1 = temp__4126__auto___32680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32651_32681__$1)){
var c__25711__auto___32682 = cljs.core.chunk_first.call(null,seq__32651_32681__$1);
var G__32683 = cljs.core.chunk_rest.call(null,seq__32651_32681__$1);
var G__32684 = c__25711__auto___32682;
var G__32685 = cljs.core.count.call(null,c__25711__auto___32682);
var G__32686 = (0);
seq__32651_32671 = G__32683;
chunk__32652_32672 = G__32684;
count__32653_32673 = G__32685;
i__32654_32674 = G__32686;
continue;
} else {
var f_32687 = cljs.core.first.call(null,seq__32651_32681__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32687);

var G__32688 = cljs.core.next.call(null,seq__32651_32681__$1);
var G__32689 = null;
var G__32690 = (0);
var G__32691 = (0);
seq__32651_32671 = G__32688;
chunk__32652_32672 = G__32689;
count__32653_32673 = G__32690;
i__32654_32674 = G__32691;
continue;
}
} else {
}
}
break;
}

var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__,map__32650,map__32650__$1,opts,on_cssload){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__,map__32650,map__32650__$1,opts,on_cssload){
return (function (state_32661){
var state_val_32662 = (state_32661[(1)]);
if((state_val_32662 === (2))){
var inst_32657 = (state_32661[(2)]);
var inst_32658 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32659 = on_cssload.call(null,inst_32658);
var state_32661__$1 = (function (){var statearr_32663 = state_32661;
(statearr_32663[(7)] = inst_32657);

return statearr_32663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32661__$1,inst_32659);
} else {
if((state_val_32662 === (1))){
var inst_32655 = cljs.core.async.timeout.call(null,(100));
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32661__$1,(2),inst_32655);
} else {
return null;
}
}
});})(c__28065__auto__,map__32650,map__32650__$1,opts,on_cssload))
;
return ((function (switch__28003__auto__,c__28065__auto__,map__32650,map__32650__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto____0 = (function (){
var statearr_32667 = [null,null,null,null,null,null,null,null];
(statearr_32667[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto__);

(statearr_32667[(1)] = (1));

return statearr_32667;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto____1 = (function (state_32661){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_32661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e32668){if((e32668 instanceof Object)){
var ex__28007__auto__ = e32668;
var statearr_32669_32692 = state_32661;
(statearr_32669_32692[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32693 = state_32661;
state_32661 = G__32693;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto__ = function(state_32661){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto____1.call(this,state_32661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__,map__32650,map__32650__$1,opts,on_cssload))
})();
var state__28067__auto__ = (function (){var statearr_32670 = f__28066__auto__.call(null);
(statearr_32670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_32670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__,map__32650,map__32650__$1,opts,on_cssload))
);

return c__28065__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
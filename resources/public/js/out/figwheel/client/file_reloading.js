// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19421_SHARP_,p2__19422_SHARP_){
var and__4087__auto__ = p1__19421_SHARP_;
if(cljs.core.truth_(and__4087__auto__)){
return p2__19422_SHARP_;
} else {
return and__4087__auto__;
}
}),true,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4099__auto__ = (cljs.core.map_QMARK_(m)) && (typeof cljs.core.constant$keyword$namespace.cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(m),cljs.core.constant$keyword$namespace));
if(or__4099__auto__){
return or__4099__auto__;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error not namespace-file-map",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0))], 0));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return (function (){var G__19424 = url;
return goog.Uri.parse(G__19424);
})().makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace(ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace(goog.basePath,/(.*)goog\//,(function (p1__19426_SHARP_,p2__19425_SHARP_){
return [cljs.core.str(p2__19425_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file(ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_(cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys(gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4099__auto__ = !(cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4099__auto__){
return or__4099__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4099__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

var G__19428 = figwheel.client.file_reloading.resolve_ns(name);
return (figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1(G__19428) : figwheel.client.file_reloading.reload_file_STAR_.call(null,G__19428));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__4994__auto__ = (function (){var G__19429 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19429) : cljs.core.atom.call(null,G__19429));
})();
var prefer_table__4995__auto__ = (function (){var G__19430 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19430) : cljs.core.atom.call(null,G__19430));
})();
var method_cache__4996__auto__ = (function (){var G__19431 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19431) : cljs.core.atom.call(null,G__19431));
})();
var cached_hierarchy__4997__auto__ = (function (){var G__19432 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19432) : cljs.core.atom.call(null,G__19432));
})();
var hierarchy__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.file-reloading","resolve-url"),cljs.core.constant$keyword$type,cljs.core.constant$keyword$default,hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
figwheel.client.file_reloading.resolve_url.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (p__19433){
var map__19434 = p__19433;
var map__19434__$1 = ((cljs.core.seq_QMARK_(map__19434))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19434):map__19434);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19434__$1,cljs.core.constant$keyword$file);
return file;
}));
figwheel.client.file_reloading.resolve_url.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$namespace,(function (p__19435){
var map__19436 = p__19435;
var map__19436__$1 = ((cljs.core.seq_QMARK_(map__19436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19436):map__19436);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19436__$1,cljs.core.constant$keyword$namespace);

return figwheel.client.file_reloading.resolve_ns(namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__4994__auto__ = (function (){var G__19437 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19437) : cljs.core.atom.call(null,G__19437));
})();
var prefer_table__4995__auto__ = (function (){var G__19438 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19438) : cljs.core.atom.call(null,G__19438));
})();
var method_cache__4996__auto__ = (function (){var G__19439 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19439) : cljs.core.atom.call(null,G__19439));
})();
var cached_hierarchy__4997__auto__ = (function (){var G__19440 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19440) : cljs.core.atom.call(null,G__19440));
})();
var hierarchy__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,cljs.core.constant$keyword$default,hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
figwheel.client.file_reloading.reload_base.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$node,(function (request_url,callback){

var root = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

var G__19441 = (function (){try{var G__19443 = path;
return require(G__19443);
}catch (e19442){if((e19442 instanceof Error)){
var e = e19442;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,e.stack);

return false;
} else {
throw e19442;

}
}})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__19441) : callback.call(null,G__19441));
}));
figwheel.client.file_reloading.reload_base.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$html,(function (request_url,callback){

var deferred = (function (){var G__19444 = figwheel.client.file_reloading.add_cache_buster(request_url);
var G__19445 = {"cleanupWhenDone": true};
return goog.net.jsloader.load(G__19444,G__19445);
})();
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__19447 = arguments.length;
switch (G__19447) {
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
var G__19448 = request_url;
var G__19449 = callback;
return (figwheel.client.file_reloading.reload_base.cljs$core$IFn$_invoke$arity$2 ? figwheel.client.file_reloading.reload_base.cljs$core$IFn$_invoke$arity$2(G__19448,G__19449) : figwheel.client.file_reloading.reload_base.call(null,G__19448,G__19449));
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2(request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__19451,callback){
var map__19453 = p__19451;
var map__19453__$1 = ((cljs.core.seq_QMARK_(map__19453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19453):map__19453);
var file_msg = map__19453__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19453__$1,cljs.core.constant$keyword$request_DASH_url);

figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2(request_url,((function (map__19453,map__19453__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_msg,cljs.core.constant$keyword$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__19453,map__19453__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__19454){
var map__19456 = p__19454;
var map__19456__$1 = ((cljs.core.seq_QMARK_(map__19456))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19456):map__19456);
var file_msg = map__19456__$1;
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19456__$1,cljs.core.constant$keyword$meta_DASH_data);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19456__$1,cljs.core.constant$keyword$namespace);

var meta_data__$1 = (function (){var or__4099__auto__ = meta_data;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4087__auto__ = cljs.core.not(cljs.core.constant$keyword$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4087__auto__){
var or__4099__auto__ = cljs.core.constant$keyword$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = cljs.core.constant$keyword$figwheel_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
var and__4087__auto____$1 = cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4087__auto____$1){
var or__4099__auto____$2 = !(cljs.core.contains_QMARK_(meta_data__$1,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk));
if(or__4099__auto____$2){
return or__4099__auto____$2;
} else {
return cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk.cljs$core$IFn$_invoke$arity$1(meta_data__$1);
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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__19457,callback){
var map__19459 = p__19457;
var map__19459__$1 = ((cljs.core.seq_QMARK_(map__19459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19459):map__19459);
var file_msg = map__19459__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19459__$1,cljs.core.constant$keyword$namespace);
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19459__$1,cljs.core.constant$keyword$request_DASH_url);

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_(file_msg))){
return figwheel.client.file_reloading.reload_file(file_msg,callback);
} else {
figwheel.client.utils.debug_prn([cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__19462_19464 = ((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload(file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base();

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);

return cljs.core.async.close_BANG_(out);
});})(out))
);
});})(out))
;
var G__19463_19465 = (0);
setTimeout(G__19462_19464,G__19463_19465);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12927__auto___19552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___19552,out){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___19552,out){
return (function (state_19534){
var state_val_19535 = (state_19534[(1)]);
if((state_val_19535 === (7))){
var inst_19518 = (state_19534[(7)]);
var inst_19524 = (state_19534[(2)]);
var inst_19525 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,inst_19524);
var inst_19514 = inst_19518;
var state_19534__$1 = (function (){var statearr_19536 = state_19534;
(statearr_19536[(8)] = inst_19514);

(statearr_19536[(9)] = inst_19525);

return statearr_19536;
})();
var statearr_19537_19553 = state_19534__$1;
(statearr_19537_19553[(2)] = null);

(statearr_19537_19553[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19535 === (6))){
var inst_19530 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
var statearr_19538_19554 = state_19534__$1;
(statearr_19538_19554[(2)] = inst_19530);

(statearr_19538_19554[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19535 === (5))){
var inst_19528 = cljs.core.async.close_BANG_(out);
var state_19534__$1 = state_19534;
var statearr_19539_19555 = state_19534__$1;
(statearr_19539_19555[(2)] = inst_19528);

(statearr_19539_19555[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19535 === (4))){
var inst_19517 = (state_19534[(10)]);
var inst_19522 = figwheel.client.file_reloading.reload_js_file(inst_19517);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19534__$1,(7),inst_19522);
} else {
if((state_val_19535 === (3))){
var inst_19532 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19534__$1,inst_19532);
} else {
if((state_val_19535 === (2))){
var inst_19514 = (state_19534[(8)]);
var inst_19517 = (state_19534[(10)]);
var inst_19517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19514,(0),null);
var inst_19518 = cljs.core.nthnext(inst_19514,(1));
var inst_19519 = (inst_19517__$1 == null);
var inst_19520 = cljs.core.not(inst_19519);
var state_19534__$1 = (function (){var statearr_19540 = state_19534;
(statearr_19540[(7)] = inst_19518);

(statearr_19540[(10)] = inst_19517__$1);

return statearr_19540;
})();
if(inst_19520){
var statearr_19541_19556 = state_19534__$1;
(statearr_19541_19556[(1)] = (4));

} else {
var statearr_19542_19557 = state_19534__$1;
(statearr_19542_19557[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19535 === (1))){
var inst_19512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(files,(0),null);
var inst_19513 = cljs.core.nthnext(files,(1));
var inst_19514 = files;
var state_19534__$1 = (function (){var statearr_19543 = state_19534;
(statearr_19543[(11)] = inst_19513);

(statearr_19543[(12)] = inst_19512);

(statearr_19543[(8)] = inst_19514);

return statearr_19543;
})();
var statearr_19544_19558 = state_19534__$1;
(statearr_19544_19558[(2)] = null);

(statearr_19544_19558[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12927__auto___19552,out))
;
return ((function (switch__12849__auto__,c__12927__auto___19552,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto____0 = (function (){
var statearr_19548 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19548[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto__);

(statearr_19548[(1)] = (1));

return statearr_19548;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto____1 = (function (state_19534){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_19534);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e19549){if((e19549 instanceof Object)){
var ex__12853__auto__ = e19549;
var statearr_19550_19559 = state_19534;
(statearr_19550_19559[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19534);

return cljs.core.constant$keyword$recur;
} else {
throw e19549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__19560 = state_19534;
state_19534 = G__19560;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto__ = function(state_19534){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto____1.call(this,state_19534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___19552,out))
})();
var state__12929__auto__ = (function (){var statearr_19551 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_19551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___19552);

return statearr_19551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___19552,out))
);


return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__19561,p__19562){
var map__19567 = p__19561;
var map__19567__$1 = ((cljs.core.seq_QMARK_(map__19567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19567):map__19567);
var opts = map__19567__$1;
var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19567__$1,cljs.core.constant$keyword$url_DASH_rewriter);
var map__19568 = p__19562;
var map__19568__$1 = ((cljs.core.seq_QMARK_(map__19568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19568):map__19568);
var file_msg = map__19568__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19568__$1,cljs.core.constant$keyword$file);
var resolved_path = (function (){var G__19569 = file_msg;
return (figwheel.client.file_reloading.resolve_url.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.file_reloading.resolve_url.cljs$core$IFn$_invoke$arity$1(G__19569) : figwheel.client.file_reloading.resolve_url.call(null,G__19569));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_msg,cljs.core.constant$keyword$request_DASH_url,(cljs.core.truth_(url_rewriter)?(function (){var G__19570 = resolved_path;
return (url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(G__19570) : url_rewriter.call(null,G__19570));
})():resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__19571){
var map__19574 = p__19571;
var map__19574__$1 = ((cljs.core.seq_QMARK_(map__19574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19574):map__19574);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19574__$1,cljs.core.constant$keyword$file);
var eval_body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19574__$1,cljs.core.constant$keyword$eval_DASH_body);
if(cljs.core.truth_((function (){var and__4087__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4087__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4087__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn([cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e19575){var e = e19575;
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__19580,p__19581){
var map__19785 = p__19580;
var map__19785__$1 = ((cljs.core.seq_QMARK_(map__19785))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19785):map__19785);
var opts = map__19785__$1;
var load_unchanged_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19785__$1,cljs.core.constant$keyword$load_DASH_unchanged_DASH_files);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19785__$1,cljs.core.constant$keyword$on_DASH_jsload);
var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19785__$1,cljs.core.constant$keyword$before_DASH_jsload);
var map__19786 = p__19581;
var map__19786__$1 = ((cljs.core.seq_QMARK_(map__19786))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19786):map__19786);
var msg = map__19786__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19786__$1,cljs.core.constant$keyword$files);
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (state_19910){
var state_val_19911 = (state_19910[(1)]);
if((state_val_19911 === (7))){
var inst_19799 = (state_19910[(7)]);
var inst_19800 = (state_19910[(8)]);
var inst_19797 = (state_19910[(9)]);
var inst_19798 = (state_19910[(10)]);
var inst_19805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19798,inst_19800);
var inst_19806 = figwheel.client.file_reloading.eval_body(inst_19805);
var inst_19807 = (inst_19800 + (1));
var tmp19912 = inst_19799;
var tmp19913 = inst_19797;
var tmp19914 = inst_19798;
var inst_19797__$1 = tmp19913;
var inst_19798__$1 = tmp19914;
var inst_19799__$1 = tmp19912;
var inst_19800__$1 = inst_19807;
var state_19910__$1 = (function (){var statearr_19915 = state_19910;
(statearr_19915[(7)] = inst_19799__$1);

(statearr_19915[(8)] = inst_19800__$1);

(statearr_19915[(9)] = inst_19797__$1);

(statearr_19915[(10)] = inst_19798__$1);

(statearr_19915[(11)] = inst_19806);

return statearr_19915;
})();
var statearr_19916_19988 = state_19910__$1;
(statearr_19916_19988[(2)] = null);

(statearr_19916_19988[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (20))){
var inst_19843 = (state_19910[(12)]);
var inst_19842 = (state_19910[(13)]);
var inst_19846 = (state_19910[(14)]);
var inst_19847 = (state_19910[(15)]);
var inst_19849 = (state_19910[(16)]);
var inst_19852 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: loaded these files");
var inst_19854 = (function (){var files_not_loaded = inst_19849;
var res = inst_19847;
var res_SINGLEQUOTE_ = inst_19846;
var files_SINGLEQUOTE_ = inst_19843;
var all_files = inst_19842;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19847,inst_19849,inst_19852,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (p__19853){
var map__19917 = p__19853;
var map__19917__$1 = ((cljs.core.seq_QMARK_(map__19917))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19917):map__19917);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19917__$1,cljs.core.constant$keyword$file);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19917__$1,cljs.core.constant$keyword$namespace);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file(namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19847,inst_19849,inst_19852,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var inst_19855 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_19854,inst_19847);
var inst_19856 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_19855], 0));
var inst_19857 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_19856);
var inst_19858 = (function (){var files_not_loaded = inst_19849;
var res = inst_19847;
var res_SINGLEQUOTE_ = inst_19846;
var files_SINGLEQUOTE_ = inst_19843;
var all_files = inst_19842;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19847,inst_19849,inst_19852,inst_19854,inst_19855,inst_19856,inst_19857,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19847,inst_19849,inst_19852,inst_19854,inst_19855,inst_19856,inst_19857,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var inst_19859 = (function (){var G__19918 = inst_19858;
var G__19919 = (10);
return setTimeout(G__19918,G__19919);
})();
var state_19910__$1 = (function (){var statearr_19920 = state_19910;
(statearr_19920[(17)] = inst_19857);

(statearr_19920[(18)] = inst_19852);

return statearr_19920;
})();
var statearr_19921_19989 = state_19910__$1;
(statearr_19921_19989[(2)] = inst_19859);

(statearr_19921_19989[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (27))){
var inst_19869 = (state_19910[(19)]);
var state_19910__$1 = state_19910;
var statearr_19922_19990 = state_19910__$1;
(statearr_19922_19990[(2)] = inst_19869);

(statearr_19922_19990[(1)] = (28));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (1))){
var inst_19789 = (state_19910[(20)]);
var inst_19787 = (function (){var G__19923 = files;
return (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(G__19923) : before_jsload.call(null,G__19923));
})();
var inst_19788 = (function (){return ((function (inst_19789,inst_19787,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (p1__19576_SHARP_){
return cljs.core.constant$keyword$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__19576_SHARP_);
});
;})(inst_19789,inst_19787,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var inst_19789__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_19788,files);
var inst_19790 = cljs.core.not_empty(inst_19789__$1);
var state_19910__$1 = (function (){var statearr_19924 = state_19910;
(statearr_19924[(21)] = inst_19787);

(statearr_19924[(20)] = inst_19789__$1);

return statearr_19924;
})();
if(cljs.core.truth_(inst_19790)){
var statearr_19925_19991 = state_19910__$1;
(statearr_19925_19991[(1)] = (2));

} else {
var statearr_19926_19992 = state_19910__$1;
(statearr_19926_19992[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (24))){
var state_19910__$1 = state_19910;
var statearr_19927_19993 = state_19910__$1;
(statearr_19927_19993[(2)] = null);

(statearr_19927_19993[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (4))){
var inst_19834 = (state_19910[(2)]);
var inst_19835 = (function (){return ((function (inst_19834,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (p1__19577_SHARP_){
var and__4087__auto__ = cljs.core.constant$keyword$namespace.cljs$core$IFn$_invoke$arity$1(p1__19577_SHARP_);
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core.not(cljs.core.constant$keyword$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__19577_SHARP_));
} else {
return and__4087__auto__;
}
});
;})(inst_19834,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var inst_19836 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_19835,files);
var state_19910__$1 = (function (){var statearr_19928 = state_19910;
(statearr_19928[(22)] = inst_19834);

(statearr_19928[(23)] = inst_19836);

return statearr_19928;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_19929_19994 = state_19910__$1;
(statearr_19929_19994[(1)] = (16));

} else {
var statearr_19930_19995 = state_19910__$1;
(statearr_19930_19995[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (15))){
var inst_19824 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19931_19996 = state_19910__$1;
(statearr_19931_19996[(2)] = inst_19824);

(statearr_19931_19996[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (21))){
var state_19910__$1 = state_19910;
var statearr_19932_19997 = state_19910__$1;
(statearr_19932_19997[(2)] = null);

(statearr_19932_19997[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (31))){
var inst_19877 = (state_19910[(24)]);
var inst_19887 = (state_19910[(2)]);
var inst_19888 = cljs.core.not_empty(inst_19877);
var state_19910__$1 = (function (){var statearr_19933 = state_19910;
(statearr_19933[(25)] = inst_19887);

return statearr_19933;
})();
if(cljs.core.truth_(inst_19888)){
var statearr_19934_19998 = state_19910__$1;
(statearr_19934_19998[(1)] = (32));

} else {
var statearr_19935_19999 = state_19910__$1;
(statearr_19935_19999[(1)] = (33));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (32))){
var inst_19877 = (state_19910[(24)]);
var inst_19890 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,inst_19877);
var inst_19891 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_19890], 0));
var inst_19892 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_19891)].join('');
var inst_19893 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_19892);
var state_19910__$1 = state_19910;
var statearr_19936_20000 = state_19910__$1;
(statearr_19936_20000[(2)] = inst_19893);

(statearr_19936_20000[(1)] = (34));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (33))){
var state_19910__$1 = state_19910;
var statearr_19937_20001 = state_19910__$1;
(statearr_19937_20001[(2)] = null);

(statearr_19937_20001[(1)] = (34));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (13))){
var inst_19810 = (state_19910[(26)]);
var inst_19814 = cljs.core.chunk_first(inst_19810);
var inst_19815 = cljs.core.chunk_rest(inst_19810);
var inst_19816 = cljs.core.count(inst_19814);
var inst_19797 = inst_19815;
var inst_19798 = inst_19814;
var inst_19799 = inst_19816;
var inst_19800 = (0);
var state_19910__$1 = (function (){var statearr_19938 = state_19910;
(statearr_19938[(7)] = inst_19799);

(statearr_19938[(8)] = inst_19800);

(statearr_19938[(9)] = inst_19797);

(statearr_19938[(10)] = inst_19798);

return statearr_19938;
})();
var statearr_19939_20002 = state_19910__$1;
(statearr_19939_20002[(2)] = null);

(statearr_19939_20002[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (22))){
var inst_19849 = (state_19910[(16)]);
var inst_19862 = (state_19910[(2)]);
var inst_19863 = cljs.core.not_empty(inst_19849);
var state_19910__$1 = (function (){var statearr_19940 = state_19910;
(statearr_19940[(27)] = inst_19862);

return statearr_19940;
})();
if(cljs.core.truth_(inst_19863)){
var statearr_19941_20003 = state_19910__$1;
(statearr_19941_20003[(1)] = (23));

} else {
var statearr_19942_20004 = state_19910__$1;
(statearr_19942_20004[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (36))){
var state_19910__$1 = state_19910;
var statearr_19943_20005 = state_19910__$1;
(statearr_19943_20005[(2)] = null);

(statearr_19943_20005[(1)] = (37));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (29))){
var inst_19878 = (state_19910[(28)]);
var inst_19881 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,inst_19878);
var inst_19882 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_19881], 0));
var inst_19883 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_19882)].join('');
var inst_19884 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_19883);
var state_19910__$1 = state_19910;
var statearr_19944_20006 = state_19910__$1;
(statearr_19944_20006[(2)] = inst_19884);

(statearr_19944_20006[(1)] = (31));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (6))){
var inst_19831 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19945_20007 = state_19910__$1;
(statearr_19945_20007[(2)] = inst_19831);

(statearr_19945_20007[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (28))){
var inst_19878 = (state_19910[(28)]);
var inst_19875 = (state_19910[(2)]);
var inst_19876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19875,cljs.core.constant$keyword$not_DASH_required);
var inst_19877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19875,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk);
var inst_19878__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19875,cljs.core.constant$keyword$figwheel_DASH_no_DASH_load);
var inst_19879 = cljs.core.not_empty(inst_19878__$1);
var state_19910__$1 = (function (){var statearr_19946 = state_19910;
(statearr_19946[(28)] = inst_19878__$1);

(statearr_19946[(29)] = inst_19876);

(statearr_19946[(24)] = inst_19877);

return statearr_19946;
})();
if(cljs.core.truth_(inst_19879)){
var statearr_19947_20008 = state_19910__$1;
(statearr_19947_20008[(1)] = (29));

} else {
var statearr_19948_20009 = state_19910__$1;
(statearr_19948_20009[(1)] = (30));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (25))){
var inst_19908 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19910__$1,inst_19908);
} else {
if((state_val_19911 === (34))){
var inst_19876 = (state_19910[(29)]);
var inst_19896 = (state_19910[(2)]);
var inst_19897 = cljs.core.not_empty(inst_19876);
var state_19910__$1 = (function (){var statearr_19949 = state_19910;
(statearr_19949[(30)] = inst_19896);

return statearr_19949;
})();
if(cljs.core.truth_(inst_19897)){
var statearr_19950_20010 = state_19910__$1;
(statearr_19950_20010[(1)] = (35));

} else {
var statearr_19951_20011 = state_19910__$1;
(statearr_19951_20011[(1)] = (36));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (17))){
var inst_19836 = (state_19910[(23)]);
var state_19910__$1 = state_19910;
var statearr_19952_20012 = state_19910__$1;
(statearr_19952_20012[(2)] = inst_19836);

(statearr_19952_20012[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (3))){
var state_19910__$1 = state_19910;
var statearr_19953_20013 = state_19910__$1;
(statearr_19953_20013[(2)] = null);

(statearr_19953_20013[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (12))){
var inst_19827 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19954_20014 = state_19910__$1;
(statearr_19954_20014[(2)] = inst_19827);

(statearr_19954_20014[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (2))){
var inst_19789 = (state_19910[(20)]);
var inst_19796 = cljs.core.seq(inst_19789);
var inst_19797 = inst_19796;
var inst_19798 = null;
var inst_19799 = (0);
var inst_19800 = (0);
var state_19910__$1 = (function (){var statearr_19955 = state_19910;
(statearr_19955[(7)] = inst_19799);

(statearr_19955[(8)] = inst_19800);

(statearr_19955[(9)] = inst_19797);

(statearr_19955[(10)] = inst_19798);

return statearr_19955;
})();
var statearr_19956_20015 = state_19910__$1;
(statearr_19956_20015[(2)] = null);

(statearr_19956_20015[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (23))){
var inst_19843 = (state_19910[(12)]);
var inst_19842 = (state_19910[(13)]);
var inst_19846 = (state_19910[(14)]);
var inst_19869 = (state_19910[(19)]);
var inst_19847 = (state_19910[(15)]);
var inst_19849 = (state_19910[(16)]);
var inst_19865 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: NOT loading these files ");
var inst_19868 = (function (){var files_not_loaded = inst_19849;
var res = inst_19847;
var res_SINGLEQUOTE_ = inst_19846;
var files_SINGLEQUOTE_ = inst_19843;
var all_files = inst_19842;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19869,inst_19847,inst_19849,inst_19865,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (p__19867){
var map__19957 = p__19867;
var map__19957__$1 = ((cljs.core.seq_QMARK_(map__19957))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19957):map__19957);
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19957__$1,cljs.core.constant$keyword$meta_DASH_data);
if((meta_data == null)){
return cljs.core.constant$keyword$not_DASH_required;
} else {
if(cljs.core.contains_QMARK_(meta_data,cljs.core.constant$keyword$figwheel_DASH_no_DASH_load)){
return cljs.core.constant$keyword$figwheel_DASH_no_DASH_load;
} else {
if((cljs.core.contains_QMARK_(meta_data,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk)) && (cljs.core.not(cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk.cljs$core$IFn$_invoke$arity$1(meta_data)))){
return cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk;
} else {
return cljs.core.constant$keyword$not_DASH_required;

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19869,inst_19847,inst_19849,inst_19865,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var inst_19869__$1 = cljs.core.group_by(inst_19868,inst_19849);
var inst_19870 = cljs.core.seq_QMARK_(inst_19869__$1);
var state_19910__$1 = (function (){var statearr_19958 = state_19910;
(statearr_19958[(19)] = inst_19869__$1);

(statearr_19958[(31)] = inst_19865);

return statearr_19958;
})();
if(inst_19870){
var statearr_19959_20016 = state_19910__$1;
(statearr_19959_20016[(1)] = (26));

} else {
var statearr_19960_20017 = state_19910__$1;
(statearr_19960_20017[(1)] = (27));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (35))){
var inst_19876 = (state_19910[(29)]);
var inst_19899 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,inst_19876);
var inst_19900 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_19899], 0));
var inst_19901 = [cljs.core.str("not required: "),cljs.core.str(inst_19900)].join('');
var inst_19902 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_19901);
var state_19910__$1 = state_19910;
var statearr_19961_20018 = state_19910__$1;
(statearr_19961_20018[(2)] = inst_19902);

(statearr_19961_20018[(1)] = (37));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (19))){
var inst_19843 = (state_19910[(12)]);
var inst_19842 = (state_19910[(13)]);
var inst_19846 = (state_19910[(14)]);
var inst_19847 = (state_19910[(15)]);
var inst_19846__$1 = (state_19910[(2)]);
var inst_19847__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$loaded_DASH_file,inst_19846__$1);
var inst_19848 = (function (){var res = inst_19847__$1;
var res_SINGLEQUOTE_ = inst_19846__$1;
var files_SINGLEQUOTE_ = inst_19843;
var all_files = inst_19842;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19847,inst_19846__$1,inst_19847__$1,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (p1__19579_SHARP_){
return cljs.core.not(cljs.core.constant$keyword$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__19579_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19843,inst_19842,inst_19846,inst_19847,inst_19846__$1,inst_19847__$1,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var inst_19849 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_19848,inst_19846__$1);
var inst_19850 = cljs.core.not_empty(inst_19847__$1);
var state_19910__$1 = (function (){var statearr_19962 = state_19910;
(statearr_19962[(14)] = inst_19846__$1);

(statearr_19962[(15)] = inst_19847__$1);

(statearr_19962[(16)] = inst_19849);

return statearr_19962;
})();
if(cljs.core.truth_(inst_19850)){
var statearr_19963_20019 = state_19910__$1;
(statearr_19963_20019[(1)] = (20));

} else {
var statearr_19964_20020 = state_19910__$1;
(statearr_19964_20020[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (11))){
var state_19910__$1 = state_19910;
var statearr_19965_20021 = state_19910__$1;
(statearr_19965_20021[(2)] = null);

(statearr_19965_20021[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (9))){
var inst_19829 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19966_20022 = state_19910__$1;
(statearr_19966_20022[(2)] = inst_19829);

(statearr_19966_20022[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (5))){
var inst_19799 = (state_19910[(7)]);
var inst_19800 = (state_19910[(8)]);
var inst_19802 = (inst_19800 < inst_19799);
var inst_19803 = inst_19802;
var state_19910__$1 = state_19910;
if(cljs.core.truth_(inst_19803)){
var statearr_19967_20023 = state_19910__$1;
(statearr_19967_20023[(1)] = (7));

} else {
var statearr_19968_20024 = state_19910__$1;
(statearr_19968_20024[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (14))){
var inst_19810 = (state_19910[(26)]);
var inst_19819 = cljs.core.first(inst_19810);
var inst_19820 = figwheel.client.file_reloading.eval_body(inst_19819);
var inst_19821 = cljs.core.next(inst_19810);
var inst_19797 = inst_19821;
var inst_19798 = null;
var inst_19799 = (0);
var inst_19800 = (0);
var state_19910__$1 = (function (){var statearr_19969 = state_19910;
(statearr_19969[(7)] = inst_19799);

(statearr_19969[(8)] = inst_19800);

(statearr_19969[(32)] = inst_19820);

(statearr_19969[(9)] = inst_19797);

(statearr_19969[(10)] = inst_19798);

return statearr_19969;
})();
var statearr_19970_20025 = state_19910__$1;
(statearr_19970_20025[(2)] = null);

(statearr_19970_20025[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (26))){
var inst_19869 = (state_19910[(19)]);
var inst_19872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19869);
var state_19910__$1 = state_19910;
var statearr_19971_20026 = state_19910__$1;
(statearr_19971_20026[(2)] = inst_19872);

(statearr_19971_20026[(1)] = (28));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (16))){
var inst_19836 = (state_19910[(23)]);
var inst_19838 = (function (){var all_files = inst_19836;
return ((function (all_files,inst_19836,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function (p1__19578_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__19578_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$meta_DASH_data], null),cljs.core.dissoc,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk);
});
;})(all_files,inst_19836,state_val_19911,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var inst_19839 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_19838,inst_19836);
var state_19910__$1 = state_19910;
var statearr_19972_20027 = state_19910__$1;
(statearr_19972_20027[(2)] = inst_19839);

(statearr_19972_20027[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (30))){
var state_19910__$1 = state_19910;
var statearr_19973_20028 = state_19910__$1;
(statearr_19973_20028[(2)] = null);

(statearr_19973_20028[(1)] = (31));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (10))){
var inst_19810 = (state_19910[(26)]);
var inst_19812 = cljs.core.chunked_seq_QMARK_(inst_19810);
var state_19910__$1 = state_19910;
if(inst_19812){
var statearr_19974_20029 = state_19910__$1;
(statearr_19974_20029[(1)] = (13));

} else {
var statearr_19975_20030 = state_19910__$1;
(statearr_19975_20030[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (18))){
var inst_19843 = (state_19910[(12)]);
var inst_19842 = (state_19910[(13)]);
var inst_19842__$1 = (state_19910[(2)]);
var inst_19843__$1 = figwheel.client.file_reloading.add_request_urls(opts,inst_19842__$1);
var inst_19844 = figwheel.client.file_reloading.load_all_js_files(inst_19843__$1);
var state_19910__$1 = (function (){var statearr_19976 = state_19910;
(statearr_19976[(12)] = inst_19843__$1);

(statearr_19976[(13)] = inst_19842__$1);

return statearr_19976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19910__$1,(19),inst_19844);
} else {
if((state_val_19911 === (37))){
var inst_19905 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19977_20031 = state_19910__$1;
(statearr_19977_20031[(2)] = inst_19905);

(statearr_19977_20031[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19911 === (8))){
var inst_19810 = (state_19910[(26)]);
var inst_19797 = (state_19910[(9)]);
var inst_19810__$1 = cljs.core.seq(inst_19797);
var state_19910__$1 = (function (){var statearr_19978 = state_19910;
(statearr_19978[(26)] = inst_19810__$1);

return statearr_19978;
})();
if(inst_19810__$1){
var statearr_19979_20032 = state_19910__$1;
(statearr_19979_20032[(1)] = (10));

} else {
var statearr_19980_20033 = state_19910__$1;
(statearr_19980_20033[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
;
return ((function (switch__12849__auto__,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto____0 = (function (){
var statearr_19984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19984[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto__);

(statearr_19984[(1)] = (1));

return statearr_19984;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto____1 = (function (state_19910){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_19910);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e19985){if((e19985 instanceof Object)){
var ex__12853__auto__ = e19985;
var statearr_19986_20034 = state_19910;
(statearr_19986_20034[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19910);

return cljs.core.constant$keyword$recur;
} else {
throw e19985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20035 = state_19910;
state_19910 = G__20035;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto__ = function(state_19910){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto____1.call(this,state_19910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
})();
var state__12929__auto__ = (function (){var statearr_19987 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_19987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_19987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__,map__19785,map__19785__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19786,map__19786__$1,msg,files))
);

return c__12927__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__20038,link){
var map__20040 = p__20038;
var map__20040__$1 = ((cljs.core.seq_QMARK_(map__20040))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20040):map__20040);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20040__$1,cljs.core.constant$keyword$file);
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (link_href,temp__4126__auto__,map__20040,map__20040__$1,file){
return (function (p1__20036_SHARP_,p2__20037_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20036_SHARP_,p2__20037_SHARP_)){
return p1__20036_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__20040,map__20040__$1,file))
,cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.truncate_url(link_href),"/")))));
var match_length = cljs.core.count(match);
var file_name_length = cljs.core.count(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$link_DASH_href,link_href,cljs.core.constant$keyword$match_DASH_length,match_length,cljs.core.constant$keyword$current_DASH_url_DASH_length,cljs.core.count(figwheel.client.file_reloading.truncate_url(link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__20044){
var map__20045 = p__20044;
var map__20045__$1 = ((cljs.core.seq_QMARK_(map__20045))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20045):map__20045);
var current_url_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045__$1,cljs.core.constant$keyword$current_DASH_url_DASH_length);
var match_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045__$1,cljs.core.constant$keyword$match_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__20041_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_(f_data,p1__20041_SHARP_);
}),figwheel.client.file_reloading.current_links())));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return cljs.core.constant$keyword$link.cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster(url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster(url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__20047 = arguments.length;
switch (G__20047) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var G__20048 = ((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
;
var G__20049 = (300);
return setTimeout(G__20048,G__20049);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__20051){
var map__20053 = p__20051;
var map__20053__$1 = ((cljs.core.seq_QMARK_(map__20053))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20053):map__20053);
var f_data = map__20053__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,cljs.core.constant$keyword$request_DASH_url);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,cljs.core.constant$keyword$file);
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link(f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.file_reloading.clone_link(link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.create_link((function (){var or__4099__auto__ = request_url;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__20054,files_msg){
var map__20077 = p__20054;
var map__20077__$1 = ((cljs.core.seq_QMARK_(map__20077))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20077):map__20077);
var opts = map__20077__$1;
var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20077__$1,cljs.core.constant$keyword$on_DASH_cssload);
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
var seq__20078_20099 = cljs.core.seq(figwheel.client.file_reloading.add_request_urls(opts,cljs.core.constant$keyword$files.cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__20079_20100 = null;
var count__20080_20101 = (0);
var i__20081_20102 = (0);
while(true){
if((i__20081_20102 < count__20080_20101)){
var f_20103 = chunk__20079_20100.cljs$core$IIndexed$_nth$arity$2(null,i__20081_20102);
figwheel.client.file_reloading.reload_css_file(f_20103);

var G__20104 = seq__20078_20099;
var G__20105 = chunk__20079_20100;
var G__20106 = count__20080_20101;
var G__20107 = (i__20081_20102 + (1));
seq__20078_20099 = G__20104;
chunk__20079_20100 = G__20105;
count__20080_20101 = G__20106;
i__20081_20102 = G__20107;
continue;
} else {
var temp__4126__auto___20108 = cljs.core.seq(seq__20078_20099);
if(temp__4126__auto___20108){
var seq__20078_20109__$1 = temp__4126__auto___20108;
if(cljs.core.chunked_seq_QMARK_(seq__20078_20109__$1)){
var c__4884__auto___20110 = cljs.core.chunk_first(seq__20078_20109__$1);
var G__20111 = cljs.core.chunk_rest(seq__20078_20109__$1);
var G__20112 = c__4884__auto___20110;
var G__20113 = cljs.core.count(c__4884__auto___20110);
var G__20114 = (0);
seq__20078_20099 = G__20111;
chunk__20079_20100 = G__20112;
count__20080_20101 = G__20113;
i__20081_20102 = G__20114;
continue;
} else {
var f_20115 = cljs.core.first(seq__20078_20109__$1);
figwheel.client.file_reloading.reload_css_file(f_20115);

var G__20116 = cljs.core.next(seq__20078_20109__$1);
var G__20117 = null;
var G__20118 = (0);
var G__20119 = (0);
seq__20078_20099 = G__20116;
chunk__20079_20100 = G__20117;
count__20080_20101 = G__20118;
i__20081_20102 = G__20119;
continue;
}
} else {
}
}
break;
}

var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__,map__20077,map__20077__$1,opts,on_cssload){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__,map__20077,map__20077__$1,opts,on_cssload){
return (function (state_20088){
var state_val_20089 = (state_20088[(1)]);
if((state_val_20089 === (2))){
var inst_20084 = (state_20088[(2)]);
var inst_20085 = cljs.core.constant$keyword$files.cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_20086 = (function (){var G__20090 = inst_20085;
return (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(G__20090) : on_cssload.call(null,G__20090));
})();
var state_20088__$1 = (function (){var statearr_20091 = state_20088;
(statearr_20091[(7)] = inst_20084);

return statearr_20091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20088__$1,inst_20086);
} else {
if((state_val_20089 === (1))){
var inst_20082 = cljs.core.async.timeout((100));
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20088__$1,(2),inst_20082);
} else {
return null;
}
}
});})(c__12927__auto__,map__20077,map__20077__$1,opts,on_cssload))
;
return ((function (switch__12849__auto__,c__12927__auto__,map__20077,map__20077__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto____0 = (function (){
var statearr_20095 = [null,null,null,null,null,null,null,null];
(statearr_20095[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto__);

(statearr_20095[(1)] = (1));

return statearr_20095;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto____1 = (function (state_20088){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_20088);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e20096){if((e20096 instanceof Object)){
var ex__12853__auto__ = e20096;
var statearr_20097_20120 = state_20088;
(statearr_20097_20120[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20088);

return cljs.core.constant$keyword$recur;
} else {
throw e20096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__20121 = state_20088;
state_20088 = G__20121;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto__ = function(state_20088){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto____1.call(this,state_20088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__,map__20077,map__20077__$1,opts,on_cssload))
})();
var state__12929__auto__ = (function (){var statearr_20098 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_20098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_20098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__,map__20077,map__20077__$1,opts,on_cssload))
);

return c__12927__auto__;
} else {
return null;
}
});

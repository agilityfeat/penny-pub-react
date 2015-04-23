// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$figwheel_DASH_event,"callback",cljs.core.constant$keyword$callback_DASH_name,"figwheel-repl-print",cljs.core.constant$keyword$content,args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18397__delegate = function (args){
return figwheel.client.figwheel_repl_print(figwheel.client.console_print(args));
};
var G__18397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18398__i = 0, G__18398__a = new Array(arguments.length -  0);
while (G__18398__i < G__18398__a.length) {G__18398__a[G__18398__i] = arguments[G__18398__i + 0]; ++G__18398__i;}
  args = new cljs.core.IndexedSeq(G__18398__a,0);
} 
return G__18397__delegate.call(this,args);};
G__18397.cljs$lang$maxFixedArity = 0;
G__18397.cljs$lang$applyTo = (function (arglist__18399){
var args = cljs.core.seq(arglist__18399);
return G__18397__delegate(args);
});
G__18397.cljs$core$IFn$_invoke$arity$variadic = G__18397__delegate;
return G__18397;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$message,cljs.core.constant$keyword$class], null)),figwheel$client$get_essential_messages(cljs.core.constant$keyword$cause.cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__18401){
var map__18403 = p__18401;
var map__18403__$1 = ((cljs.core.seq_QMARK_(map__18403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18403):map__18403);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18403__$1,cljs.core.constant$keyword$class);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18403__$1,cljs.core.constant$keyword$message);
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons(cljs.core.first(msg_hist),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(name_set,cljs.core.constant$keyword$msg_DASH_name),cljs.core.rest(msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4099__auto__ = cljs.core.constant$keyword$load_DASH_warninged_DASH_code.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.constant$keyword$compile_DASH_warning);
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4087__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.constant$keyword$files_DASH_changed);
if(and__4087__auto__){
return figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts);
} else {
return and__4087__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.constant$keyword$files_DASH_changed)) && (cljs.core.not(figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$compile_DASH_warning,cljs.core.constant$keyword$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$compile_DASH_warning,cljs.core.first(msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$compile_DASH_warning,cljs.core.constant$keyword$files_DASH_changed,cljs.core.constant$keyword$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$compile_DASH_failed,cljs.core.first(msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$compile_DASH_failed,cljs.core.constant$keyword$compile_DASH_failed], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$css_DASH_files_DASH_changed,cljs.core.first(msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12927__auto___18532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___18532,ch){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___18532,ch){
return (function (state_18506){
var state_val_18507 = (state_18506[(1)]);
if((state_val_18507 === (7))){
var inst_18502 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
var statearr_18508_18533 = state_18506__$1;
(statearr_18508_18533[(2)] = inst_18502);

(statearr_18508_18533[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (1))){
var state_18506__$1 = state_18506;
var statearr_18509_18534 = state_18506__$1;
(statearr_18509_18534[(2)] = null);

(statearr_18509_18534[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (4))){
var inst_18470 = (state_18506[(7)]);
var inst_18470__$1 = (state_18506[(2)]);
var state_18506__$1 = (function (){var statearr_18510 = state_18506;
(statearr_18510[(7)] = inst_18470__$1);

return statearr_18510;
})();
if(cljs.core.truth_(inst_18470__$1)){
var statearr_18511_18535 = state_18506__$1;
(statearr_18511_18535[(1)] = (5));

} else {
var statearr_18512_18536 = state_18506__$1;
(statearr_18512_18536[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (13))){
var state_18506__$1 = state_18506;
var statearr_18513_18537 = state_18506__$1;
(statearr_18513_18537[(2)] = null);

(statearr_18513_18537[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (6))){
var state_18506__$1 = state_18506;
var statearr_18514_18538 = state_18506__$1;
(statearr_18514_18538[(2)] = null);

(statearr_18514_18538[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (3))){
var inst_18504 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18506__$1,inst_18504);
} else {
if((state_val_18507 === (12))){
var inst_18477 = (state_18506[(8)]);
var inst_18490 = cljs.core.constant$keyword$files.cljs$core$IFn$_invoke$arity$1(inst_18477);
var inst_18491 = cljs.core.first(inst_18490);
var inst_18492 = cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(inst_18491);
var inst_18493 = console.warn("Figwheel: Not loading code with warnings - ",inst_18492);
var state_18506__$1 = state_18506;
var statearr_18515_18539 = state_18506__$1;
(statearr_18515_18539[(2)] = inst_18493);

(statearr_18515_18539[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (2))){
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18506__$1,(4),ch);
} else {
if((state_val_18507 === (11))){
var inst_18486 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
var statearr_18516_18540 = state_18506__$1;
(statearr_18516_18540[(2)] = inst_18486);

(statearr_18516_18540[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (9))){
var inst_18476 = (state_18506[(9)]);
var inst_18488 = figwheel.client.block_reload_file_state_QMARK_(inst_18476,opts);
var state_18506__$1 = state_18506;
if(cljs.core.truth_(inst_18488)){
var statearr_18517_18541 = state_18506__$1;
(statearr_18517_18541[(1)] = (12));

} else {
var statearr_18518_18542 = state_18506__$1;
(statearr_18518_18542[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (5))){
var inst_18476 = (state_18506[(9)]);
var inst_18470 = (state_18506[(7)]);
var inst_18472 = [cljs.core.constant$keyword$compile_DASH_warning,null,cljs.core.constant$keyword$files_DASH_changed,null];
var inst_18473 = (new cljs.core.PersistentArrayMap(null,2,inst_18472,null));
var inst_18474 = (new cljs.core.PersistentHashSet(null,inst_18473,null));
var inst_18475 = figwheel.client.focus_msgs(inst_18474,inst_18470);
var inst_18476__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$msg_DASH_name,inst_18475);
var inst_18477 = cljs.core.first(inst_18475);
var inst_18478 = figwheel.client.reload_file_state_QMARK_(inst_18476__$1,opts);
var state_18506__$1 = (function (){var statearr_18519 = state_18506;
(statearr_18519[(8)] = inst_18477);

(statearr_18519[(9)] = inst_18476__$1);

return statearr_18519;
})();
if(cljs.core.truth_(inst_18478)){
var statearr_18520_18543 = state_18506__$1;
(statearr_18520_18543[(1)] = (8));

} else {
var statearr_18521_18544 = state_18506__$1;
(statearr_18521_18544[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (14))){
var inst_18496 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
var statearr_18522_18545 = state_18506__$1;
(statearr_18522_18545[(2)] = inst_18496);

(statearr_18522_18545[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (10))){
var inst_18498 = (state_18506[(2)]);
var state_18506__$1 = (function (){var statearr_18523 = state_18506;
(statearr_18523[(10)] = inst_18498);

return statearr_18523;
})();
var statearr_18524_18546 = state_18506__$1;
(statearr_18524_18546[(2)] = null);

(statearr_18524_18546[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18507 === (8))){
var inst_18477 = (state_18506[(8)]);
var inst_18480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18481 = figwheel.client.file_reloading.reload_js_files(opts,inst_18477);
var inst_18482 = cljs.core.async.timeout((1000));
var inst_18483 = [inst_18481,inst_18482];
var inst_18484 = (new cljs.core.PersistentVector(null,2,(5),inst_18480,inst_18483,null));
var state_18506__$1 = state_18506;
return cljs.core.async.ioc_alts_BANG_(state_18506__$1,(11),inst_18484);
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
});})(c__12927__auto___18532,ch))
;
return ((function (switch__12849__auto__,c__12927__auto___18532,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__12850__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__12850__auto____0 = (function (){
var statearr_18528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18528[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__12850__auto__);

(statearr_18528[(1)] = (1));

return statearr_18528;
});
var figwheel$client$file_reloader_plugin_$_state_machine__12850__auto____1 = (function (state_18506){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_18506);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e18529){if((e18529 instanceof Object)){
var ex__12853__auto__ = e18529;
var statearr_18530_18547 = state_18506;
(statearr_18530_18547[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18506);

return cljs.core.constant$keyword$recur;
} else {
throw e18529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__18548 = state_18506;
state_18506 = G__18548;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__12850__auto__ = function(state_18506){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__12850__auto____1.call(this,state_18506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__12850__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__12850__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___18532,ch))
})();
var state__12929__auto__ = (function (){var statearr_18531 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_18531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___18532);

return statearr_18531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___18532,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18549_SHARP_){
return cljs.core.not(cljs.core.re_matches(/.*eval_javascript_STAR__STAR_.*/,p1__18549_SHARP_));
}),clojure.string.split_lines(stack_str));
});
var base_path_18564 = clojure.string.replace(goog.basePath,/(.*)goog\//,(function (p1__18551_SHARP_,p2__18550_SHARP_){
return [cljs.core.str(p2__18550_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_18564){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_18561 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_18562 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_18561,_STAR_print_newline_STAR_18562,base_path_18564){
return (function() { 
var G__18565__delegate = function (args){
return figwheel.client.figwheel_repl_print(figwheel.client.console_print(args));
};
var G__18565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18566__i = 0, G__18566__a = new Array(arguments.length -  0);
while (G__18566__i < G__18566__a.length) {G__18566__a[G__18566__i] = arguments[G__18566__i + 0]; ++G__18566__i;}
  args = new cljs.core.IndexedSeq(G__18566__a,0);
} 
return G__18565__delegate.call(this,args);};
G__18565.cljs$lang$maxFixedArity = 0;
G__18565.cljs$lang$applyTo = (function (arglist__18567){
var args = cljs.core.seq(arglist__18567);
return G__18565__delegate(args);
});
G__18565.cljs$core$IFn$_invoke$arity$variadic = G__18565__delegate;
return G__18565;
})()
;})(_STAR_print_fn_STAR_18561,_STAR_print_newline_STAR_18562,base_path_18564))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{var G__18563 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$success,cljs.core.constant$keyword$value,[cljs.core.str(eval(code))].join('')], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__18563) : result_handler.call(null,G__18563));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18562;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18561;
}}catch (e18558){if((e18558 instanceof Error)){
var e = e18558;
var G__18559 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$exception,cljs.core.constant$keyword$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$stacktrace,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",figwheel.client.truncate_stack_trace(e.stack)),cljs.core.constant$keyword$base_DASH_path,base_path_18564], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__18559) : result_handler.call(null,G__18559));
} else {
var e = e18558;
var G__18560 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$exception,cljs.core.constant$keyword$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$stacktrace,"No stacktrace available."], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__18560) : result_handler.call(null,G__18560));

}
}});})(base_path_18564))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__18568){
var map__18573 = p__18568;
var map__18573__$1 = ((cljs.core.seq_QMARK_(map__18573))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18573):map__18573);
var opts = map__18573__$1;
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18573__$1,cljs.core.constant$keyword$build_DASH_id);
return ((function (map__18573,map__18573__$1,opts,build_id){
return (function (p__18574){
var vec__18575 = p__18574;
var map__18576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18575,(0),null);
var map__18576__$1 = ((cljs.core.seq_QMARK_(map__18576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18576):map__18576);
var msg = map__18576__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$msg_DASH_name);
var _ = cljs.core.nthnext(vec__18575,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user();

return figwheel.client.eval_javascript_STAR__STAR_(cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(msg),((function (vec__18575,map__18576,map__18576__$1,msg,msg_name,_,map__18573,map__18573__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$figwheel_DASH_event,"callback",cljs.core.constant$keyword$callback_DASH_name,cljs.core.constant$keyword$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.constant$keyword$content,res], null));
});})(vec__18575,map__18576,map__18576__$1,msg,msg_name,_,map__18573,map__18573__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__18573,map__18573__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__18580){
var vec__18581 = p__18580;
var map__18582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18581,(0),null);
var map__18582__$1 = ((cljs.core.seq_QMARK_(map__18582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18582):map__18582);
var msg = map__18582__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$msg_DASH_name);
var _ = cljs.core.nthnext(vec__18581,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.constant$keyword$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files(opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__18583){
var map__18597 = p__18583;
var map__18597__$1 = ((cljs.core.seq_QMARK_(map__18597))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18597):map__18597);
var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18597__$1,cljs.core.constant$keyword$on_DASH_compile_DASH_fail);
var on_compile_warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18597__$1,cljs.core.constant$keyword$on_DASH_compile_DASH_warning);
return ((function (map__18597,map__18597__$1,on_compile_fail,on_compile_warning){
return (function (p__18598){
var vec__18599 = p__18598;
var map__18600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18599,(0),null);
var map__18600__$1 = ((cljs.core.seq_QMARK_(map__18600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18600):map__18600);
var msg = map__18600__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18600__$1,cljs.core.constant$keyword$msg_DASH_name);
var _ = cljs.core.nthnext(vec__18599,(1));
var pred__18601 = cljs.core._EQ_;
var expr__18602 = msg_name;
if(cljs.core.truth_((function (){var G__18604 = cljs.core.constant$keyword$compile_DASH_warning;
var G__18605 = expr__18602;
return (pred__18601.cljs$core$IFn$_invoke$arity$2 ? pred__18601.cljs$core$IFn$_invoke$arity$2(G__18604,G__18605) : pred__18601.call(null,G__18604,G__18605));
})())){
var G__18606 = msg;
return (on_compile_warning.cljs$core$IFn$_invoke$arity$1 ? on_compile_warning.cljs$core$IFn$_invoke$arity$1(G__18606) : on_compile_warning.call(null,G__18606));
} else {
if(cljs.core.truth_((function (){var G__18607 = cljs.core.constant$keyword$compile_DASH_failed;
var G__18608 = expr__18602;
return (pred__18601.cljs$core$IFn$_invoke$arity$2 ? pred__18601.cljs$core$IFn$_invoke$arity$2(G__18607,G__18608) : pred__18601.call(null,G__18607,G__18608));
})())){
var G__18609 = msg;
return (on_compile_fail.cljs$core$IFn$_invoke$arity$1 ? on_compile_fail.cljs$core$IFn$_invoke$arity$1(G__18609) : on_compile_fail.call(null,G__18609));
} else {
return null;
}
}
});
;})(map__18597,map__18597__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$compile_DASH_failed,null,cljs.core.constant$keyword$compile_DASH_warning,null,cljs.core.constant$keyword$files_DASH_changed,null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$msg_DASH_name,msg_hist);
var msg = cljs.core.first(msg_hist);
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__,msg_hist,msg_names,msg){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__,msg_hist,msg_names,msg){
return (function (state_18807){
var state_val_18808 = (state_18807[(1)]);
if((state_val_18808 === (7))){
var inst_18743 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18809_18852 = state_18807__$1;
(statearr_18809_18852[(2)] = inst_18743);

(statearr_18809_18852[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (20))){
var inst_18769 = figwheel.client.rewarning_state_QMARK_(msg_names);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18769)){
var statearr_18810_18853 = state_18807__$1;
(statearr_18810_18853[(1)] = (22));

} else {
var statearr_18811_18854 = state_18807__$1;
(statearr_18811_18854[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (27))){
var inst_18781 = cljs.core.constant$keyword$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18782 = figwheel.client.heads_up.display_warning(inst_18781);
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(30),inst_18782);
} else {
if((state_val_18808 === (1))){
var inst_18731 = figwheel.client.reload_file_state_QMARK_(msg_names,opts);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18731)){
var statearr_18812_18855 = state_18807__$1;
(statearr_18812_18855[(1)] = (2));

} else {
var statearr_18813_18856 = state_18807__$1;
(statearr_18813_18856[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (24))){
var inst_18797 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18814_18857 = state_18807__$1;
(statearr_18814_18857[(2)] = inst_18797);

(statearr_18814_18857[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (4))){
var inst_18805 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18807__$1,inst_18805);
} else {
if((state_val_18808 === (15))){
var inst_18758 = cljs.core.constant$keyword$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18759 = (function (){var G__18815 = inst_18758;
return (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(G__18815) : figwheel.client.format_messages.call(null,G__18815));
})();
var inst_18760 = figwheel.client.heads_up.display_error(inst_18759);
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(18),inst_18760);
} else {
if((state_val_18808 === (21))){
var inst_18799 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18816_18858 = state_18807__$1;
(statearr_18816_18858[(2)] = inst_18799);

(statearr_18816_18858[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (31))){
var inst_18788 = figwheel.client.heads_up.flash_loaded();
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(34),inst_18788);
} else {
if((state_val_18808 === (32))){
var state_18807__$1 = state_18807;
var statearr_18817_18859 = state_18807__$1;
(statearr_18817_18859[(2)] = null);

(statearr_18817_18859[(1)] = (33));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (33))){
var inst_18793 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18818_18860 = state_18807__$1;
(statearr_18818_18860[(2)] = inst_18793);

(statearr_18818_18860[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (13))){
var inst_18749 = (state_18807[(2)]);
var inst_18750 = cljs.core.constant$keyword$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18751 = (function (){var G__18819 = inst_18750;
return (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(G__18819) : figwheel.client.format_messages.call(null,G__18819));
})();
var inst_18752 = figwheel.client.heads_up.display_error(inst_18751);
var state_18807__$1 = (function (){var statearr_18820 = state_18807;
(statearr_18820[(7)] = inst_18749);

return statearr_18820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(14),inst_18752);
} else {
if((state_val_18808 === (22))){
var inst_18771 = figwheel.client.heads_up.clear();
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(25),inst_18771);
} else {
if((state_val_18808 === (29))){
var inst_18795 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18821_18861 = state_18807__$1;
(statearr_18821_18861[(2)] = inst_18795);

(statearr_18821_18861[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (6))){
var inst_18739 = figwheel.client.heads_up.clear();
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(9),inst_18739);
} else {
if((state_val_18808 === (28))){
var inst_18786 = figwheel.client.css_loaded_state_QMARK_(msg_names);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18786)){
var statearr_18822_18862 = state_18807__$1;
(statearr_18822_18862[(1)] = (31));

} else {
var statearr_18823_18863 = state_18807__$1;
(statearr_18823_18863[(1)] = (32));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (25))){
var inst_18773 = (state_18807[(2)]);
var inst_18774 = cljs.core.constant$keyword$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18775 = figwheel.client.heads_up.display_warning(inst_18774);
var state_18807__$1 = (function (){var statearr_18824 = state_18807;
(statearr_18824[(8)] = inst_18773);

return statearr_18824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(26),inst_18775);
} else {
if((state_val_18808 === (34))){
var inst_18790 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18825_18864 = state_18807__$1;
(statearr_18825_18864[(2)] = inst_18790);

(statearr_18825_18864[(1)] = (33));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (17))){
var inst_18801 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18826_18865 = state_18807__$1;
(statearr_18826_18865[(2)] = inst_18801);

(statearr_18826_18865[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (3))){
var inst_18745 = figwheel.client.compile_refail_state_QMARK_(msg_names);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18745)){
var statearr_18827_18866 = state_18807__$1;
(statearr_18827_18866[(1)] = (10));

} else {
var statearr_18828_18867 = state_18807__$1;
(statearr_18828_18867[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (12))){
var inst_18803 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18829_18868 = state_18807__$1;
(statearr_18829_18868[(2)] = inst_18803);

(statearr_18829_18868[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (2))){
var inst_18733 = cljs.core.constant$keyword$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18733)){
var statearr_18830_18869 = state_18807__$1;
(statearr_18830_18869[(1)] = (5));

} else {
var statearr_18831_18870 = state_18807__$1;
(statearr_18831_18870[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (23))){
var inst_18779 = figwheel.client.warning_state_QMARK_(msg_names);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18779)){
var statearr_18832_18871 = state_18807__$1;
(statearr_18832_18871[(1)] = (27));

} else {
var statearr_18833_18872 = state_18807__$1;
(statearr_18833_18872[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (19))){
var inst_18766 = cljs.core.constant$keyword$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18767 = figwheel.client.heads_up.append_message(inst_18766);
var state_18807__$1 = state_18807;
var statearr_18834_18873 = state_18807__$1;
(statearr_18834_18873[(2)] = inst_18767);

(statearr_18834_18873[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (11))){
var inst_18756 = figwheel.client.compile_fail_state_QMARK_(msg_names);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18756)){
var statearr_18835_18874 = state_18807__$1;
(statearr_18835_18874[(1)] = (15));

} else {
var statearr_18836_18875 = state_18807__$1;
(statearr_18836_18875[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (9))){
var inst_18741 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18837_18876 = state_18807__$1;
(statearr_18837_18876[(2)] = inst_18741);

(statearr_18837_18876[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (5))){
var inst_18735 = figwheel.client.heads_up.flash_loaded();
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(8),inst_18735);
} else {
if((state_val_18808 === (14))){
var inst_18754 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18838_18877 = state_18807__$1;
(statearr_18838_18877[(2)] = inst_18754);

(statearr_18838_18877[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (26))){
var inst_18777 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18839_18878 = state_18807__$1;
(statearr_18839_18878[(2)] = inst_18777);

(statearr_18839_18878[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (16))){
var inst_18764 = figwheel.client.warning_append_state_QMARK_(msg_names);
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18764)){
var statearr_18840_18879 = state_18807__$1;
(statearr_18840_18879[(1)] = (19));

} else {
var statearr_18841_18880 = state_18807__$1;
(statearr_18841_18880[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (30))){
var inst_18784 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18842_18881 = state_18807__$1;
(statearr_18842_18881[(2)] = inst_18784);

(statearr_18842_18881[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (10))){
var inst_18747 = figwheel.client.heads_up.clear();
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18807__$1,(13),inst_18747);
} else {
if((state_val_18808 === (18))){
var inst_18762 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18843_18882 = state_18807__$1;
(statearr_18843_18882[(2)] = inst_18762);

(statearr_18843_18882[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18808 === (8))){
var inst_18737 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18844_18883 = state_18807__$1;
(statearr_18844_18883[(2)] = inst_18737);

(statearr_18844_18883[(1)] = (7));


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
});})(c__12927__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__12849__auto__,c__12927__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto____0 = (function (){
var statearr_18848 = [null,null,null,null,null,null,null,null,null];
(statearr_18848[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto__);

(statearr_18848[(1)] = (1));

return statearr_18848;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto____1 = (function (state_18807){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_18807);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e18849){if((e18849 instanceof Object)){
var ex__12853__auto__ = e18849;
var statearr_18850_18884 = state_18807;
(statearr_18850_18884[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18807);

return cljs.core.constant$keyword$recur;
} else {
throw e18849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__18885 = state_18807;
state_18807 = G__18885;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto__ = function(state_18807){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto____1.call(this,state_18807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__,msg_hist,msg_names,msg))
})();
var state__12929__auto__ = (function (){var statearr_18851 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_18851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_18851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__,msg_hist,msg_names,msg))
);

return c__12927__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__12927__auto___18948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto___18948,ch){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto___18948,ch){
return (function (state_18931){
var state_val_18932 = (state_18931[(1)]);
if((state_val_18932 === (8))){
var inst_18923 = (state_18931[(2)]);
var state_18931__$1 = (function (){var statearr_18933 = state_18931;
(statearr_18933[(7)] = inst_18923);

return statearr_18933;
})();
var statearr_18934_18949 = state_18931__$1;
(statearr_18934_18949[(2)] = null);

(statearr_18934_18949[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18932 === (7))){
var inst_18927 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18935_18950 = state_18931__$1;
(statearr_18935_18950[(2)] = inst_18927);

(statearr_18935_18950[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18932 === (6))){
var state_18931__$1 = state_18931;
var statearr_18936_18951 = state_18931__$1;
(statearr_18936_18951[(2)] = null);

(statearr_18936_18951[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18932 === (5))){
var inst_18919 = (state_18931[(8)]);
var inst_18921 = figwheel.client.heads_up_plugin_msg_handler(opts,inst_18919);
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18931__$1,(8),inst_18921);
} else {
if((state_val_18932 === (4))){
var inst_18919 = (state_18931[(8)]);
var inst_18919__$1 = (state_18931[(2)]);
var state_18931__$1 = (function (){var statearr_18937 = state_18931;
(statearr_18937[(8)] = inst_18919__$1);

return statearr_18937;
})();
if(cljs.core.truth_(inst_18919__$1)){
var statearr_18938_18952 = state_18931__$1;
(statearr_18938_18952[(1)] = (5));

} else {
var statearr_18939_18953 = state_18931__$1;
(statearr_18939_18953[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18932 === (3))){
var inst_18929 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18931__$1,inst_18929);
} else {
if((state_val_18932 === (2))){
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18931__$1,(4),ch);
} else {
if((state_val_18932 === (1))){
var state_18931__$1 = state_18931;
var statearr_18940_18954 = state_18931__$1;
(statearr_18940_18954[(2)] = null);

(statearr_18940_18954[(1)] = (2));


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
});})(c__12927__auto___18948,ch))
;
return ((function (switch__12849__auto__,c__12927__auto___18948,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__12850__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__12850__auto____0 = (function (){
var statearr_18944 = [null,null,null,null,null,null,null,null,null];
(statearr_18944[(0)] = figwheel$client$heads_up_plugin_$_state_machine__12850__auto__);

(statearr_18944[(1)] = (1));

return statearr_18944;
});
var figwheel$client$heads_up_plugin_$_state_machine__12850__auto____1 = (function (state_18931){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_18931);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e18945){if((e18945 instanceof Object)){
var ex__12853__auto__ = e18945;
var statearr_18946_18955 = state_18931;
(statearr_18946_18955[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18931);

return cljs.core.constant$keyword$recur;
} else {
throw e18945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__18956 = state_18931;
state_18931 = G__18956;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__12850__auto__ = function(state_18931){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__12850__auto____1.call(this,state_18931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__12850__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__12850__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto___18948,ch))
})();
var state__12929__auto__ = (function (){var statearr_18947 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_18947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto___18948);

return statearr_18947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto___18948,ch))
);


figwheel.client.heads_up.ensure_container();

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$project_DASH_id,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),msg_hist)))))){
figwheel.client.socket.close_BANG_();

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(cljs.core.constant$keyword$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__){
return (function (state_18977){
var state_val_18978 = (state_18977[(1)]);
if((state_val_18978 === (2))){
var inst_18974 = (state_18977[(2)]);
var inst_18975 = figwheel.client.heads_up.display_system_warning("Connection from different project","Shutting connection down!!!!!");
var state_18977__$1 = (function (){var statearr_18979 = state_18977;
(statearr_18979[(7)] = inst_18974);

return statearr_18979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18977__$1,inst_18975);
} else {
if((state_val_18978 === (1))){
var inst_18972 = cljs.core.async.timeout((3000));
var state_18977__$1 = state_18977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18977__$1,(2),inst_18972);
} else {
return null;
}
}
});})(c__12927__auto__))
;
return ((function (switch__12849__auto__,c__12927__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__12850__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__12850__auto____0 = (function (){
var statearr_18983 = [null,null,null,null,null,null,null,null];
(statearr_18983[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__12850__auto__);

(statearr_18983[(1)] = (1));

return statearr_18983;
});
var figwheel$client$enforce_project_plugin_$_state_machine__12850__auto____1 = (function (state_18977){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_18977);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e18984){if((e18984 instanceof Object)){
var ex__12853__auto__ = e18984;
var statearr_18985_18987 = state_18977;
(statearr_18985_18987[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18977);

return cljs.core.constant$keyword$recur;
} else {
throw e18984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__18988 = state_18977;
state_18977 = G__18988;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__12850__auto__ = function(state_18977){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__12850__auto____1.call(this,state_18977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__12850__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__12850__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__))
})();
var state__12929__auto__ = (function (){var statearr_18986 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_18986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_18986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__))
);

return c__12927__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4087__auto__ = figwheel.client.utils.html_env_QMARK_();
if(cljs.core.truth_(and__4087__auto__)){
return ("CustomEvent" in window);
} else {
return and__4087__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18992 = {"detail":url};
return obj18992;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__18993){
var map__19000 = p__18993;
var map__19000__$1 = ((cljs.core.seq_QMARK_(map__19000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19000):map__19000);
var ed = map__19000__$1;
var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,cljs.core.constant$keyword$exception_DASH_data);
var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,cljs.core.constant$keyword$formatted_DASH_exception);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: Compile Exception");

var seq__19001_19006 = cljs.core.seq((function (){var G__19005 = exception_data;
return (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(G__19005) : figwheel.client.format_messages.call(null,G__19005));
})());
var chunk__19002_19007 = null;
var count__19003_19008 = (0);
var i__19004_19009 = (0);
while(true){
if((i__19004_19009 < count__19003_19008)){
var msg_19010 = chunk__19002_19007.cljs$core$IIndexed$_nth$arity$2(null,i__19004_19009);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,msg_19010);

var G__19011 = seq__19001_19006;
var G__19012 = chunk__19002_19007;
var G__19013 = count__19003_19008;
var G__19014 = (i__19004_19009 + (1));
seq__19001_19006 = G__19011;
chunk__19002_19007 = G__19012;
count__19003_19008 = G__19013;
i__19004_19009 = G__19014;
continue;
} else {
var temp__4126__auto___19015 = cljs.core.seq(seq__19001_19006);
if(temp__4126__auto___19015){
var seq__19001_19016__$1 = temp__4126__auto___19015;
if(cljs.core.chunked_seq_QMARK_(seq__19001_19016__$1)){
var c__4884__auto___19017 = cljs.core.chunk_first(seq__19001_19016__$1);
var G__19018 = cljs.core.chunk_rest(seq__19001_19016__$1);
var G__19019 = c__4884__auto___19017;
var G__19020 = cljs.core.count(c__4884__auto___19017);
var G__19021 = (0);
seq__19001_19006 = G__19018;
chunk__19002_19007 = G__19019;
count__19003_19008 = G__19020;
i__19004_19009 = G__19021;
continue;
} else {
var msg_19022 = cljs.core.first(seq__19001_19016__$1);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,msg_19022);

var G__19023 = cljs.core.next(seq__19001_19016__$1);
var G__19024 = null;
var G__19025 = (0);
var G__19026 = (0);
seq__19001_19006 = G__19023;
chunk__19002_19007 = G__19024;
count__19003_19008 = G__19025;
i__19004_19009 = G__19026;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__19027){
var map__19029 = p__19027;
var map__19029__$1 = ((cljs.core.seq_QMARK_(map__19029))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19029):map__19029);
var w = map__19029__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19029__$1,cljs.core.constant$keyword$message);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$warn,[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: loaded CSS files");

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,files)], 0)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$load_DASH_unchanged_DASH_files,cljs.core.constant$keyword$on_DASH_compile_DASH_warning,cljs.core.constant$keyword$on_DASH_jsload,cljs.core.constant$keyword$on_DASH_compile_DASH_fail,cljs.core.constant$keyword$debug,cljs.core.constant$keyword$heads_DASH_up_DASH_display,cljs.core.constant$keyword$websocket_DASH_url,cljs.core.constant$keyword$before_DASH_jsload,cljs.core.constant$keyword$load_DASH_warninged_DASH_code,cljs.core.constant$keyword$retry_DASH_count,cljs.core.constant$keyword$autoload,cljs.core.constant$keyword$url_DASH_rewriter,cljs.core.constant$keyword$on_DASH_cssload],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(cljs.core.constant$keyword$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.constant$keyword$on_DASH_jsload,cljs.core.constant$keyword$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config)),cljs.core.constant$keyword$jsload_DASH_callback);
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$enforce_DASH_project_DASH_plugin,figwheel.client.enforce_project_plugin,cljs.core.constant$keyword$file_DASH_reloader_DASH_plugin,figwheel.client.file_reloader_plugin,cljs.core.constant$keyword$comp_DASH_fail_DASH_warning_DASH_plugin,figwheel.client.compile_fail_warning_plugin,cljs.core.constant$keyword$css_DASH_reloader_DASH_plugin,figwheel.client.css_reloader_plugin,cljs.core.constant$keyword$repl_DASH_plugin,figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not(goog.inHtmlDocument_()))?cljs.core.select_keys(base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$file_DASH_reloader_DASH_plugin,cljs.core.constant$keyword$comp_DASH_fail_DASH_warning_DASH_plugin,cljs.core.constant$keyword$repl_DASH_plugin], null)):base);
var base__$2 = ((cljs.core.constant$keyword$autoload.cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base__$1,cljs.core.constant$keyword$file_DASH_reloader_DASH_plugin):base__$1);
if(cljs.core.truth_((function (){var and__4087__auto__ = cljs.core.constant$keyword$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4087__auto__)){
return figwheel.client.utils.html_env_QMARK_();
} else {
return and__4087__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base__$2,cljs.core.constant$keyword$heads_DASH_up_DASH_display_DASH_plugin,figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__19040 = cljs.core.seq(plugins);
var chunk__19041 = null;
var count__19042 = (0);
var i__19043 = (0);
while(true){
if((i__19043 < count__19042)){
var vec__19044 = chunk__19041.cljs$core$IIndexed$_nth$arity$2(null,i__19043);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19050 = (function (){var G__19045 = system_options;
return (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(G__19045) : plugin.call(null,G__19045));
})();
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__19040,chunk__19041,count__19042,i__19043,pl_19050,vec__19044,k,plugin){
return (function (_,___$1,___$2,msg_hist){
var G__19046 = msg_hist;
return (pl_19050.cljs$core$IFn$_invoke$arity$1 ? pl_19050.cljs$core$IFn$_invoke$arity$1(G__19046) : pl_19050.call(null,G__19046));
});})(seq__19040,chunk__19041,count__19042,i__19043,pl_19050,vec__19044,k,plugin))
);
} else {
}

var G__19051 = seq__19040;
var G__19052 = chunk__19041;
var G__19053 = count__19042;
var G__19054 = (i__19043 + (1));
seq__19040 = G__19051;
chunk__19041 = G__19052;
count__19042 = G__19053;
i__19043 = G__19054;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__19040);
if(temp__4126__auto__){
var seq__19040__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19040__$1)){
var c__4884__auto__ = cljs.core.chunk_first(seq__19040__$1);
var G__19055 = cljs.core.chunk_rest(seq__19040__$1);
var G__19056 = c__4884__auto__;
var G__19057 = cljs.core.count(c__4884__auto__);
var G__19058 = (0);
seq__19040 = G__19055;
chunk__19041 = G__19056;
count__19042 = G__19057;
i__19043 = G__19058;
continue;
} else {
var vec__19047 = cljs.core.first(seq__19040__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19059 = (function (){var G__19048 = system_options;
return (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(G__19048) : plugin.call(null,G__19048));
})();
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__19040,chunk__19041,count__19042,i__19043,pl_19059,vec__19047,k,plugin,seq__19040__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
var G__19049 = msg_hist;
return (pl_19059.cljs$core$IFn$_invoke$arity$1 ? pl_19059.cljs$core$IFn$_invoke$arity$1(G__19049) : pl_19059.call(null,G__19049));
});})(seq__19040,chunk__19041,count__19042,i__19043,pl_19059,vec__19047,k,plugin,seq__19040__$1,temp__4126__auto__))
);
} else {
}

var G__19060 = cljs.core.next(seq__19040__$1);
var G__19061 = null;
var G__19062 = (0);
var G__19063 = (0);
seq__19040 = G__19060;
chunk__19041 = G__19061;
count__19042 = G__19062;
i__19043 = G__19063;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__19065 = arguments.length;
switch (G__19065) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var G__19066 = (function (){
var plugins_SINGLEQUOTE_ = cljs.core.constant$keyword$plugins.cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = cljs.core.constant$keyword$merge_DASH_plugins.cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.config_defaults,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$plugins,cljs.core.array_seq([cljs.core.constant$keyword$merge_DASH_plugins], 0))], 0)));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.base_plugins(system_options),merge_plugins], 0)));
figwheel.client.utils._STAR_print_debug_STAR_ = cljs.core.constant$keyword$debug.cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins(plugins,system_options);

figwheel.client.file_reloading.patch_goog_base();

return figwheel.client.socket.open(system_options);
});
return setTimeout(G__19066);
})();
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5139__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5139__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__19069){
var map__19070 = p__19069;
var map__19070__$1 = ((cljs.core.seq_QMARK_(map__19070))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19070):map__19070);
var opts = map__19070__$1;
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq19068){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19068));
});

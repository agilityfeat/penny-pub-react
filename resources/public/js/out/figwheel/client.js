// Compiled by ClojureScript 0.0-3178 {}
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19421__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__19421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19422__i = 0, G__19422__a = new Array(arguments.length -  0);
while (G__19422__i < G__19422__a.length) {G__19422__a[G__19422__i] = arguments[G__19422__i + 0]; ++G__19422__i;}
  args = new cljs.core.IndexedSeq(G__19422__a,0);
} 
return G__19421__delegate.call(this,args);};
G__19421.cljs$lang$maxFixedArity = 0;
G__19421.cljs$lang$applyTo = (function (arglist__19423){
var args = cljs.core.seq(arglist__19423);
return G__19421__delegate(args);
});
G__19421.cljs$core$IFn$_invoke$arity$variadic = G__19421__delegate;
return G__19421;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__19424){
var map__19426 = p__19424;
var map__19426__$1 = ((cljs.core.seq_QMARK_.call(null,map__19426))?cljs.core.apply.call(null,cljs.core.hash_map,map__19426):map__19426);
var class$ = cljs.core.get.call(null,map__19426__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__19426__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4099__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4087__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4087__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4087__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__8217__auto___19555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___19555,ch){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___19555,ch){
return (function (state_19529){
var state_val_19530 = (state_19529[(1)]);
if((state_val_19530 === (7))){
var inst_19525 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19531_19556 = state_19529__$1;
(statearr_19531_19556[(2)] = inst_19525);

(statearr_19531_19556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (1))){
var state_19529__$1 = state_19529;
var statearr_19532_19557 = state_19529__$1;
(statearr_19532_19557[(2)] = null);

(statearr_19532_19557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (4))){
var inst_19493 = (state_19529[(7)]);
var inst_19493__$1 = (state_19529[(2)]);
var state_19529__$1 = (function (){var statearr_19533 = state_19529;
(statearr_19533[(7)] = inst_19493__$1);

return statearr_19533;
})();
if(cljs.core.truth_(inst_19493__$1)){
var statearr_19534_19558 = state_19529__$1;
(statearr_19534_19558[(1)] = (5));

} else {
var statearr_19535_19559 = state_19529__$1;
(statearr_19535_19559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (13))){
var state_19529__$1 = state_19529;
var statearr_19536_19560 = state_19529__$1;
(statearr_19536_19560[(2)] = null);

(statearr_19536_19560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (6))){
var state_19529__$1 = state_19529;
var statearr_19537_19561 = state_19529__$1;
(statearr_19537_19561[(2)] = null);

(statearr_19537_19561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (3))){
var inst_19527 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19529__$1,inst_19527);
} else {
if((state_val_19530 === (12))){
var inst_19500 = (state_19529[(8)]);
var inst_19513 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_19500);
var inst_19514 = cljs.core.first.call(null,inst_19513);
var inst_19515 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_19514);
var inst_19516 = console.warn("Figwheel: Not loading code with warnings - ",inst_19515);
var state_19529__$1 = state_19529;
var statearr_19538_19562 = state_19529__$1;
(statearr_19538_19562[(2)] = inst_19516);

(statearr_19538_19562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (2))){
var state_19529__$1 = state_19529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19529__$1,(4),ch);
} else {
if((state_val_19530 === (11))){
var inst_19509 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19539_19563 = state_19529__$1;
(statearr_19539_19563[(2)] = inst_19509);

(statearr_19539_19563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (9))){
var inst_19499 = (state_19529[(9)]);
var inst_19511 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_19499,opts);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19511)){
var statearr_19540_19564 = state_19529__$1;
(statearr_19540_19564[(1)] = (12));

} else {
var statearr_19541_19565 = state_19529__$1;
(statearr_19541_19565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (5))){
var inst_19499 = (state_19529[(9)]);
var inst_19493 = (state_19529[(7)]);
var inst_19495 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_19496 = (new cljs.core.PersistentArrayMap(null,2,inst_19495,null));
var inst_19497 = (new cljs.core.PersistentHashSet(null,inst_19496,null));
var inst_19498 = figwheel.client.focus_msgs.call(null,inst_19497,inst_19493);
var inst_19499__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_19498);
var inst_19500 = cljs.core.first.call(null,inst_19498);
var inst_19501 = figwheel.client.reload_file_state_QMARK_.call(null,inst_19499__$1,opts);
var state_19529__$1 = (function (){var statearr_19542 = state_19529;
(statearr_19542[(9)] = inst_19499__$1);

(statearr_19542[(8)] = inst_19500);

return statearr_19542;
})();
if(cljs.core.truth_(inst_19501)){
var statearr_19543_19566 = state_19529__$1;
(statearr_19543_19566[(1)] = (8));

} else {
var statearr_19544_19567 = state_19529__$1;
(statearr_19544_19567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (14))){
var inst_19519 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19545_19568 = state_19529__$1;
(statearr_19545_19568[(2)] = inst_19519);

(statearr_19545_19568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (10))){
var inst_19521 = (state_19529[(2)]);
var state_19529__$1 = (function (){var statearr_19546 = state_19529;
(statearr_19546[(10)] = inst_19521);

return statearr_19546;
})();
var statearr_19547_19569 = state_19529__$1;
(statearr_19547_19569[(2)] = null);

(statearr_19547_19569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (8))){
var inst_19500 = (state_19529[(8)]);
var inst_19503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19504 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_19500);
var inst_19505 = cljs.core.async.timeout.call(null,(1000));
var inst_19506 = [inst_19504,inst_19505];
var inst_19507 = (new cljs.core.PersistentVector(null,2,(5),inst_19503,inst_19506,null));
var state_19529__$1 = state_19529;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19529__$1,(11),inst_19507);
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
});})(c__8217__auto___19555,ch))
;
return ((function (switch__8155__auto__,c__8217__auto___19555,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__8156__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__8156__auto____0 = (function (){
var statearr_19551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19551[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__8156__auto__);

(statearr_19551[(1)] = (1));

return statearr_19551;
});
var figwheel$client$file_reloader_plugin_$_state_machine__8156__auto____1 = (function (state_19529){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_19529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e19552){if((e19552 instanceof Object)){
var ex__8159__auto__ = e19552;
var statearr_19553_19570 = state_19529;
(statearr_19553_19570[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19571 = state_19529;
state_19529 = G__19571;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__8156__auto__ = function(state_19529){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__8156__auto____1.call(this,state_19529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__8156__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__8156__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___19555,ch))
})();
var state__8219__auto__ = (function (){var statearr_19554 = f__8218__auto__.call(null);
(statearr_19554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___19555);

return statearr_19554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___19555,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__19572_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__19572_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_19581 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__19574_SHARP_,p2__19573_SHARP_){
return [cljs.core.str(p2__19573_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_19581){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_19579 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_19580 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_19579,_STAR_print_newline_STAR_19580,base_path_19581){
return (function() { 
var G__19582__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__19582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19583__i = 0, G__19583__a = new Array(arguments.length -  0);
while (G__19583__i < G__19583__a.length) {G__19583__a[G__19583__i] = arguments[G__19583__i + 0]; ++G__19583__i;}
  args = new cljs.core.IndexedSeq(G__19583__a,0);
} 
return G__19582__delegate.call(this,args);};
G__19582.cljs$lang$maxFixedArity = 0;
G__19582.cljs$lang$applyTo = (function (arglist__19584){
var args = cljs.core.seq(arglist__19584);
return G__19582__delegate(args);
});
G__19582.cljs$core$IFn$_invoke$arity$variadic = G__19582__delegate;
return G__19582;
})()
;})(_STAR_print_fn_STAR_19579,_STAR_print_newline_STAR_19580,base_path_19581))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19580;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19579;
}}catch (e19578){if((e19578 instanceof Error)){
var e = e19578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_19581], null));
} else {
var e = e19578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_19581))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__19585){
var map__19590 = p__19585;
var map__19590__$1 = ((cljs.core.seq_QMARK_.call(null,map__19590))?cljs.core.apply.call(null,cljs.core.hash_map,map__19590):map__19590);
var opts = map__19590__$1;
var build_id = cljs.core.get.call(null,map__19590__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__19590,map__19590__$1,opts,build_id){
return (function (p__19591){
var vec__19592 = p__19591;
var map__19593 = cljs.core.nth.call(null,vec__19592,(0),null);
var map__19593__$1 = ((cljs.core.seq_QMARK_.call(null,map__19593))?cljs.core.apply.call(null,cljs.core.hash_map,map__19593):map__19593);
var msg = map__19593__$1;
var msg_name = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19592,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__19592,map__19593,map__19593__$1,msg,msg_name,_,map__19590,map__19590__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__19592,map__19593,map__19593__$1,msg,msg_name,_,map__19590,map__19590__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__19590,map__19590__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__19597){
var vec__19598 = p__19597;
var map__19599 = cljs.core.nth.call(null,vec__19598,(0),null);
var map__19599__$1 = ((cljs.core.seq_QMARK_.call(null,map__19599))?cljs.core.apply.call(null,cljs.core.hash_map,map__19599):map__19599);
var msg = map__19599__$1;
var msg_name = cljs.core.get.call(null,map__19599__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19598,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__19600){
var map__19608 = p__19600;
var map__19608__$1 = ((cljs.core.seq_QMARK_.call(null,map__19608))?cljs.core.apply.call(null,cljs.core.hash_map,map__19608):map__19608);
var on_compile_fail = cljs.core.get.call(null,map__19608__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__19608__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__19608,map__19608__$1,on_compile_fail,on_compile_warning){
return (function (p__19609){
var vec__19610 = p__19609;
var map__19611 = cljs.core.nth.call(null,vec__19610,(0),null);
var map__19611__$1 = ((cljs.core.seq_QMARK_.call(null,map__19611))?cljs.core.apply.call(null,cljs.core.hash_map,map__19611):map__19611);
var msg = map__19611__$1;
var msg_name = cljs.core.get.call(null,map__19611__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19610,(1));
var pred__19612 = cljs.core._EQ_;
var expr__19613 = msg_name;
if(cljs.core.truth_(pred__19612.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__19613))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__19612.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19613))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__19608,map__19608__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__,msg_hist,msg_names,msg){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__,msg_hist,msg_names,msg){
return (function (state_19810){
var state_val_19811 = (state_19810[(1)]);
if((state_val_19811 === (7))){
var inst_19746 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19812_19853 = state_19810__$1;
(statearr_19812_19853[(2)] = inst_19746);

(statearr_19812_19853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (20))){
var inst_19772 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19772)){
var statearr_19813_19854 = state_19810__$1;
(statearr_19813_19854[(1)] = (22));

} else {
var statearr_19814_19855 = state_19810__$1;
(statearr_19814_19855[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (27))){
var inst_19784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19785 = figwheel.client.heads_up.display_warning.call(null,inst_19784);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(30),inst_19785);
} else {
if((state_val_19811 === (1))){
var inst_19734 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19734)){
var statearr_19815_19856 = state_19810__$1;
(statearr_19815_19856[(1)] = (2));

} else {
var statearr_19816_19857 = state_19810__$1;
(statearr_19816_19857[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (24))){
var inst_19800 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19817_19858 = state_19810__$1;
(statearr_19817_19858[(2)] = inst_19800);

(statearr_19817_19858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (4))){
var inst_19808 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19810__$1,inst_19808);
} else {
if((state_val_19811 === (15))){
var inst_19761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19762 = figwheel.client.format_messages.call(null,inst_19761);
var inst_19763 = figwheel.client.heads_up.display_error.call(null,inst_19762);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(18),inst_19763);
} else {
if((state_val_19811 === (21))){
var inst_19802 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19818_19859 = state_19810__$1;
(statearr_19818_19859[(2)] = inst_19802);

(statearr_19818_19859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (31))){
var inst_19791 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(34),inst_19791);
} else {
if((state_val_19811 === (32))){
var state_19810__$1 = state_19810;
var statearr_19819_19860 = state_19810__$1;
(statearr_19819_19860[(2)] = null);

(statearr_19819_19860[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (33))){
var inst_19796 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19820_19861 = state_19810__$1;
(statearr_19820_19861[(2)] = inst_19796);

(statearr_19820_19861[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (13))){
var inst_19752 = (state_19810[(2)]);
var inst_19753 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19754 = figwheel.client.format_messages.call(null,inst_19753);
var inst_19755 = figwheel.client.heads_up.display_error.call(null,inst_19754);
var state_19810__$1 = (function (){var statearr_19821 = state_19810;
(statearr_19821[(7)] = inst_19752);

return statearr_19821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(14),inst_19755);
} else {
if((state_val_19811 === (22))){
var inst_19774 = figwheel.client.heads_up.clear.call(null);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(25),inst_19774);
} else {
if((state_val_19811 === (29))){
var inst_19798 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19822_19862 = state_19810__$1;
(statearr_19822_19862[(2)] = inst_19798);

(statearr_19822_19862[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (6))){
var inst_19742 = figwheel.client.heads_up.clear.call(null);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(9),inst_19742);
} else {
if((state_val_19811 === (28))){
var inst_19789 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19789)){
var statearr_19823_19863 = state_19810__$1;
(statearr_19823_19863[(1)] = (31));

} else {
var statearr_19824_19864 = state_19810__$1;
(statearr_19824_19864[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (25))){
var inst_19776 = (state_19810[(2)]);
var inst_19777 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19778 = figwheel.client.heads_up.display_warning.call(null,inst_19777);
var state_19810__$1 = (function (){var statearr_19825 = state_19810;
(statearr_19825[(8)] = inst_19776);

return statearr_19825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(26),inst_19778);
} else {
if((state_val_19811 === (34))){
var inst_19793 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19826_19865 = state_19810__$1;
(statearr_19826_19865[(2)] = inst_19793);

(statearr_19826_19865[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (17))){
var inst_19804 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19827_19866 = state_19810__$1;
(statearr_19827_19866[(2)] = inst_19804);

(statearr_19827_19866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (3))){
var inst_19748 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19748)){
var statearr_19828_19867 = state_19810__$1;
(statearr_19828_19867[(1)] = (10));

} else {
var statearr_19829_19868 = state_19810__$1;
(statearr_19829_19868[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (12))){
var inst_19806 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19830_19869 = state_19810__$1;
(statearr_19830_19869[(2)] = inst_19806);

(statearr_19830_19869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (2))){
var inst_19736 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19736)){
var statearr_19831_19870 = state_19810__$1;
(statearr_19831_19870[(1)] = (5));

} else {
var statearr_19832_19871 = state_19810__$1;
(statearr_19832_19871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (23))){
var inst_19782 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19782)){
var statearr_19833_19872 = state_19810__$1;
(statearr_19833_19872[(1)] = (27));

} else {
var statearr_19834_19873 = state_19810__$1;
(statearr_19834_19873[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (19))){
var inst_19769 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19770 = figwheel.client.heads_up.append_message.call(null,inst_19769);
var state_19810__$1 = state_19810;
var statearr_19835_19874 = state_19810__$1;
(statearr_19835_19874[(2)] = inst_19770);

(statearr_19835_19874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (11))){
var inst_19759 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19759)){
var statearr_19836_19875 = state_19810__$1;
(statearr_19836_19875[(1)] = (15));

} else {
var statearr_19837_19876 = state_19810__$1;
(statearr_19837_19876[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (9))){
var inst_19744 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19838_19877 = state_19810__$1;
(statearr_19838_19877[(2)] = inst_19744);

(statearr_19838_19877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (5))){
var inst_19738 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(8),inst_19738);
} else {
if((state_val_19811 === (14))){
var inst_19757 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19839_19878 = state_19810__$1;
(statearr_19839_19878[(2)] = inst_19757);

(statearr_19839_19878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (26))){
var inst_19780 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19840_19879 = state_19810__$1;
(statearr_19840_19879[(2)] = inst_19780);

(statearr_19840_19879[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (16))){
var inst_19767 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19767)){
var statearr_19841_19880 = state_19810__$1;
(statearr_19841_19880[(1)] = (19));

} else {
var statearr_19842_19881 = state_19810__$1;
(statearr_19842_19881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (30))){
var inst_19787 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19843_19882 = state_19810__$1;
(statearr_19843_19882[(2)] = inst_19787);

(statearr_19843_19882[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (10))){
var inst_19750 = figwheel.client.heads_up.clear.call(null);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(13),inst_19750);
} else {
if((state_val_19811 === (18))){
var inst_19765 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19844_19883 = state_19810__$1;
(statearr_19844_19883[(2)] = inst_19765);

(statearr_19844_19883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (8))){
var inst_19740 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19845_19884 = state_19810__$1;
(statearr_19845_19884[(2)] = inst_19740);

(statearr_19845_19884[(1)] = (7));


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
});})(c__8217__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__8155__auto__,c__8217__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto____0 = (function (){
var statearr_19849 = [null,null,null,null,null,null,null,null,null];
(statearr_19849[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto__);

(statearr_19849[(1)] = (1));

return statearr_19849;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto____1 = (function (state_19810){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_19810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e19850){if((e19850 instanceof Object)){
var ex__8159__auto__ = e19850;
var statearr_19851_19885 = state_19810;
(statearr_19851_19885[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19886 = state_19810;
state_19810 = G__19886;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto__ = function(state_19810){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto____1.call(this,state_19810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__,msg_hist,msg_names,msg))
})();
var state__8219__auto__ = (function (){var statearr_19852 = f__8218__auto__.call(null);
(statearr_19852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_19852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__,msg_hist,msg_names,msg))
);

return c__8217__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__8217__auto___19949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto___19949,ch){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto___19949,ch){
return (function (state_19932){
var state_val_19933 = (state_19932[(1)]);
if((state_val_19933 === (8))){
var inst_19924 = (state_19932[(2)]);
var state_19932__$1 = (function (){var statearr_19934 = state_19932;
(statearr_19934[(7)] = inst_19924);

return statearr_19934;
})();
var statearr_19935_19950 = state_19932__$1;
(statearr_19935_19950[(2)] = null);

(statearr_19935_19950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (7))){
var inst_19928 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
var statearr_19936_19951 = state_19932__$1;
(statearr_19936_19951[(2)] = inst_19928);

(statearr_19936_19951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (6))){
var state_19932__$1 = state_19932;
var statearr_19937_19952 = state_19932__$1;
(statearr_19937_19952[(2)] = null);

(statearr_19937_19952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (5))){
var inst_19920 = (state_19932[(8)]);
var inst_19922 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_19920);
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19932__$1,(8),inst_19922);
} else {
if((state_val_19933 === (4))){
var inst_19920 = (state_19932[(8)]);
var inst_19920__$1 = (state_19932[(2)]);
var state_19932__$1 = (function (){var statearr_19938 = state_19932;
(statearr_19938[(8)] = inst_19920__$1);

return statearr_19938;
})();
if(cljs.core.truth_(inst_19920__$1)){
var statearr_19939_19953 = state_19932__$1;
(statearr_19939_19953[(1)] = (5));

} else {
var statearr_19940_19954 = state_19932__$1;
(statearr_19940_19954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (3))){
var inst_19930 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19932__$1,inst_19930);
} else {
if((state_val_19933 === (2))){
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19932__$1,(4),ch);
} else {
if((state_val_19933 === (1))){
var state_19932__$1 = state_19932;
var statearr_19941_19955 = state_19932__$1;
(statearr_19941_19955[(2)] = null);

(statearr_19941_19955[(1)] = (2));


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
});})(c__8217__auto___19949,ch))
;
return ((function (switch__8155__auto__,c__8217__auto___19949,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__8156__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__8156__auto____0 = (function (){
var statearr_19945 = [null,null,null,null,null,null,null,null,null];
(statearr_19945[(0)] = figwheel$client$heads_up_plugin_$_state_machine__8156__auto__);

(statearr_19945[(1)] = (1));

return statearr_19945;
});
var figwheel$client$heads_up_plugin_$_state_machine__8156__auto____1 = (function (state_19932){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_19932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e19946){if((e19946 instanceof Object)){
var ex__8159__auto__ = e19946;
var statearr_19947_19956 = state_19932;
(statearr_19947_19956[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19957 = state_19932;
state_19932 = G__19957;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__8156__auto__ = function(state_19932){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__8156__auto____1.call(this,state_19932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__8156__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__8156__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto___19949,ch))
})();
var state__8219__auto__ = (function (){var statearr_19948 = f__8218__auto__.call(null);
(statearr_19948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto___19949);

return statearr_19948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto___19949,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__){
return (function (state_19978){
var state_val_19979 = (state_19978[(1)]);
if((state_val_19979 === (2))){
var inst_19975 = (state_19978[(2)]);
var inst_19976 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_19978__$1 = (function (){var statearr_19980 = state_19978;
(statearr_19980[(7)] = inst_19975);

return statearr_19980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19978__$1,inst_19976);
} else {
if((state_val_19979 === (1))){
var inst_19973 = cljs.core.async.timeout.call(null,(3000));
var state_19978__$1 = state_19978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19978__$1,(2),inst_19973);
} else {
return null;
}
}
});})(c__8217__auto__))
;
return ((function (switch__8155__auto__,c__8217__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__8156__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__8156__auto____0 = (function (){
var statearr_19984 = [null,null,null,null,null,null,null,null];
(statearr_19984[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__8156__auto__);

(statearr_19984[(1)] = (1));

return statearr_19984;
});
var figwheel$client$enforce_project_plugin_$_state_machine__8156__auto____1 = (function (state_19978){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_19978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e19985){if((e19985 instanceof Object)){
var ex__8159__auto__ = e19985;
var statearr_19986_19988 = state_19978;
(statearr_19986_19988[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19989 = state_19978;
state_19978 = G__19989;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__8156__auto__ = function(state_19978){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__8156__auto____1.call(this,state_19978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__8156__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__8156__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__))
})();
var state__8219__auto__ = (function (){var statearr_19987 = f__8218__auto__.call(null);
(statearr_19987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_19987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__))
);

return c__8217__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4087__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4087__auto__)){
return ("CustomEvent" in window);
} else {
return and__4087__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19993 = {"detail":url};
return obj19993;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__19994){
var map__20000 = p__19994;
var map__20000__$1 = ((cljs.core.seq_QMARK_.call(null,map__20000))?cljs.core.apply.call(null,cljs.core.hash_map,map__20000):map__20000);
var ed = map__20000__$1;
var exception_data = cljs.core.get.call(null,map__20000__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__20000__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__20001_20005 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__20002_20006 = null;
var count__20003_20007 = (0);
var i__20004_20008 = (0);
while(true){
if((i__20004_20008 < count__20003_20007)){
var msg_20009 = cljs.core._nth.call(null,chunk__20002_20006,i__20004_20008);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_20009);

var G__20010 = seq__20001_20005;
var G__20011 = chunk__20002_20006;
var G__20012 = count__20003_20007;
var G__20013 = (i__20004_20008 + (1));
seq__20001_20005 = G__20010;
chunk__20002_20006 = G__20011;
count__20003_20007 = G__20012;
i__20004_20008 = G__20013;
continue;
} else {
var temp__4126__auto___20014 = cljs.core.seq.call(null,seq__20001_20005);
if(temp__4126__auto___20014){
var seq__20001_20015__$1 = temp__4126__auto___20014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20001_20015__$1)){
var c__4884__auto___20016 = cljs.core.chunk_first.call(null,seq__20001_20015__$1);
var G__20017 = cljs.core.chunk_rest.call(null,seq__20001_20015__$1);
var G__20018 = c__4884__auto___20016;
var G__20019 = cljs.core.count.call(null,c__4884__auto___20016);
var G__20020 = (0);
seq__20001_20005 = G__20017;
chunk__20002_20006 = G__20018;
count__20003_20007 = G__20019;
i__20004_20008 = G__20020;
continue;
} else {
var msg_20021 = cljs.core.first.call(null,seq__20001_20015__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_20021);

var G__20022 = cljs.core.next.call(null,seq__20001_20015__$1);
var G__20023 = null;
var G__20024 = (0);
var G__20025 = (0);
seq__20001_20005 = G__20022;
chunk__20002_20006 = G__20023;
count__20003_20007 = G__20024;
i__20004_20008 = G__20025;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__20026){
var map__20028 = p__20026;
var map__20028__$1 = ((cljs.core.seq_QMARK_.call(null,map__20028))?cljs.core.apply.call(null,cljs.core.hash_map,map__20028):map__20028);
var w = map__20028__$1;
var message = cljs.core.get.call(null,map__20028__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4087__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4087__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4087__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__20035 = cljs.core.seq.call(null,plugins);
var chunk__20036 = null;
var count__20037 = (0);
var i__20038 = (0);
while(true){
if((i__20038 < count__20037)){
var vec__20039 = cljs.core._nth.call(null,chunk__20036,i__20038);
var k = cljs.core.nth.call(null,vec__20039,(0),null);
var plugin = cljs.core.nth.call(null,vec__20039,(1),null);
if(cljs.core.truth_(plugin)){
var pl_20041 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__20035,chunk__20036,count__20037,i__20038,pl_20041,vec__20039,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_20041.call(null,msg_hist);
});})(seq__20035,chunk__20036,count__20037,i__20038,pl_20041,vec__20039,k,plugin))
);
} else {
}

var G__20042 = seq__20035;
var G__20043 = chunk__20036;
var G__20044 = count__20037;
var G__20045 = (i__20038 + (1));
seq__20035 = G__20042;
chunk__20036 = G__20043;
count__20037 = G__20044;
i__20038 = G__20045;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20035);
if(temp__4126__auto__){
var seq__20035__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20035__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__20035__$1);
var G__20046 = cljs.core.chunk_rest.call(null,seq__20035__$1);
var G__20047 = c__4884__auto__;
var G__20048 = cljs.core.count.call(null,c__4884__auto__);
var G__20049 = (0);
seq__20035 = G__20046;
chunk__20036 = G__20047;
count__20037 = G__20048;
i__20038 = G__20049;
continue;
} else {
var vec__20040 = cljs.core.first.call(null,seq__20035__$1);
var k = cljs.core.nth.call(null,vec__20040,(0),null);
var plugin = cljs.core.nth.call(null,vec__20040,(1),null);
if(cljs.core.truth_(plugin)){
var pl_20050 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__20035,chunk__20036,count__20037,i__20038,pl_20050,vec__20040,k,plugin,seq__20035__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_20050.call(null,msg_hist);
});})(seq__20035,chunk__20036,count__20037,i__20038,pl_20050,vec__20040,k,plugin,seq__20035__$1,temp__4126__auto__))
);
} else {
}

var G__20051 = cljs.core.next.call(null,seq__20035__$1);
var G__20052 = null;
var G__20053 = (0);
var G__20054 = (0);
seq__20035 = G__20051;
chunk__20036 = G__20052;
count__20037 = G__20053;
i__20038 = G__20054;
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
var G__20056 = arguments.length;
switch (G__20056) {
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
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5139__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5139__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__20059){
var map__20060 = p__20059;
var map__20060__$1 = ((cljs.core.seq_QMARK_.call(null,map__20060))?cljs.core.apply.call(null,cljs.core.hash_map,map__20060):map__20060);
var opts = map__20060__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq20058){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20058));
});

//# sourceMappingURL=client.js.map
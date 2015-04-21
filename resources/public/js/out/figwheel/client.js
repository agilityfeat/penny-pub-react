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
var G__17385__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17386__i = 0, G__17386__a = new Array(arguments.length -  0);
while (G__17386__i < G__17386__a.length) {G__17386__a[G__17386__i] = arguments[G__17386__i + 0]; ++G__17386__i;}
  args = new cljs.core.IndexedSeq(G__17386__a,0);
} 
return G__17385__delegate.call(this,args);};
G__17385.cljs$lang$maxFixedArity = 0;
G__17385.cljs$lang$applyTo = (function (arglist__17387){
var args = cljs.core.seq(arglist__17387);
return G__17385__delegate(args);
});
G__17385.cljs$core$IFn$_invoke$arity$variadic = G__17385__delegate;
return G__17385;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__17388){
var map__17390 = p__17388;
var map__17390__$1 = ((cljs.core.seq_QMARK_.call(null,map__17390))?cljs.core.apply.call(null,cljs.core.hash_map,map__17390):map__17390);
var class$ = cljs.core.get.call(null,map__17390__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__17390__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__7090__auto___17519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___17519,ch){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___17519,ch){
return (function (state_17493){
var state_val_17494 = (state_17493[(1)]);
if((state_val_17494 === (7))){
var inst_17489 = (state_17493[(2)]);
var state_17493__$1 = state_17493;
var statearr_17495_17520 = state_17493__$1;
(statearr_17495_17520[(2)] = inst_17489);

(statearr_17495_17520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (1))){
var state_17493__$1 = state_17493;
var statearr_17496_17521 = state_17493__$1;
(statearr_17496_17521[(2)] = null);

(statearr_17496_17521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (4))){
var inst_17457 = (state_17493[(7)]);
var inst_17457__$1 = (state_17493[(2)]);
var state_17493__$1 = (function (){var statearr_17497 = state_17493;
(statearr_17497[(7)] = inst_17457__$1);

return statearr_17497;
})();
if(cljs.core.truth_(inst_17457__$1)){
var statearr_17498_17522 = state_17493__$1;
(statearr_17498_17522[(1)] = (5));

} else {
var statearr_17499_17523 = state_17493__$1;
(statearr_17499_17523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (13))){
var state_17493__$1 = state_17493;
var statearr_17500_17524 = state_17493__$1;
(statearr_17500_17524[(2)] = null);

(statearr_17500_17524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (6))){
var state_17493__$1 = state_17493;
var statearr_17501_17525 = state_17493__$1;
(statearr_17501_17525[(2)] = null);

(statearr_17501_17525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (3))){
var inst_17491 = (state_17493[(2)]);
var state_17493__$1 = state_17493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17493__$1,inst_17491);
} else {
if((state_val_17494 === (12))){
var inst_17464 = (state_17493[(8)]);
var inst_17477 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17464);
var inst_17478 = cljs.core.first.call(null,inst_17477);
var inst_17479 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_17478);
var inst_17480 = console.warn("Figwheel: Not loading code with warnings - ",inst_17479);
var state_17493__$1 = state_17493;
var statearr_17502_17526 = state_17493__$1;
(statearr_17502_17526[(2)] = inst_17480);

(statearr_17502_17526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (2))){
var state_17493__$1 = state_17493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17493__$1,(4),ch);
} else {
if((state_val_17494 === (11))){
var inst_17473 = (state_17493[(2)]);
var state_17493__$1 = state_17493;
var statearr_17503_17527 = state_17493__$1;
(statearr_17503_17527[(2)] = inst_17473);

(statearr_17503_17527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (9))){
var inst_17463 = (state_17493[(9)]);
var inst_17475 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_17463,opts);
var state_17493__$1 = state_17493;
if(cljs.core.truth_(inst_17475)){
var statearr_17504_17528 = state_17493__$1;
(statearr_17504_17528[(1)] = (12));

} else {
var statearr_17505_17529 = state_17493__$1;
(statearr_17505_17529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (5))){
var inst_17463 = (state_17493[(9)]);
var inst_17457 = (state_17493[(7)]);
var inst_17459 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_17460 = (new cljs.core.PersistentArrayMap(null,2,inst_17459,null));
var inst_17461 = (new cljs.core.PersistentHashSet(null,inst_17460,null));
var inst_17462 = figwheel.client.focus_msgs.call(null,inst_17461,inst_17457);
var inst_17463__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_17462);
var inst_17464 = cljs.core.first.call(null,inst_17462);
var inst_17465 = figwheel.client.reload_file_state_QMARK_.call(null,inst_17463__$1,opts);
var state_17493__$1 = (function (){var statearr_17506 = state_17493;
(statearr_17506[(9)] = inst_17463__$1);

(statearr_17506[(8)] = inst_17464);

return statearr_17506;
})();
if(cljs.core.truth_(inst_17465)){
var statearr_17507_17530 = state_17493__$1;
(statearr_17507_17530[(1)] = (8));

} else {
var statearr_17508_17531 = state_17493__$1;
(statearr_17508_17531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (14))){
var inst_17483 = (state_17493[(2)]);
var state_17493__$1 = state_17493;
var statearr_17509_17532 = state_17493__$1;
(statearr_17509_17532[(2)] = inst_17483);

(statearr_17509_17532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (10))){
var inst_17485 = (state_17493[(2)]);
var state_17493__$1 = (function (){var statearr_17510 = state_17493;
(statearr_17510[(10)] = inst_17485);

return statearr_17510;
})();
var statearr_17511_17533 = state_17493__$1;
(statearr_17511_17533[(2)] = null);

(statearr_17511_17533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (8))){
var inst_17464 = (state_17493[(8)]);
var inst_17467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17468 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_17464);
var inst_17469 = cljs.core.async.timeout.call(null,(1000));
var inst_17470 = [inst_17468,inst_17469];
var inst_17471 = (new cljs.core.PersistentVector(null,2,(5),inst_17467,inst_17470,null));
var state_17493__$1 = state_17493;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17493__$1,(11),inst_17471);
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
});})(c__7090__auto___17519,ch))
;
return ((function (switch__7028__auto__,c__7090__auto___17519,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7029__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7029__auto____0 = (function (){
var statearr_17515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17515[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7029__auto__);

(statearr_17515[(1)] = (1));

return statearr_17515;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7029__auto____1 = (function (state_17493){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_17493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e17516){if((e17516 instanceof Object)){
var ex__7032__auto__ = e17516;
var statearr_17517_17534 = state_17493;
(statearr_17517_17534[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17535 = state_17493;
state_17493 = G__17535;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7029__auto__ = function(state_17493){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7029__auto____1.call(this,state_17493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7029__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7029__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___17519,ch))
})();
var state__7092__auto__ = (function (){var statearr_17518 = f__7091__auto__.call(null);
(statearr_17518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___17519);

return statearr_17518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___17519,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__17536_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__17536_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_17545 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__17538_SHARP_,p2__17537_SHARP_){
return [cljs.core.str(p2__17537_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_17545){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_17543 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_17544 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17543,_STAR_print_newline_STAR_17544,base_path_17545){
return (function() { 
var G__17546__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17547__i = 0, G__17547__a = new Array(arguments.length -  0);
while (G__17547__i < G__17547__a.length) {G__17547__a[G__17547__i] = arguments[G__17547__i + 0]; ++G__17547__i;}
  args = new cljs.core.IndexedSeq(G__17547__a,0);
} 
return G__17546__delegate.call(this,args);};
G__17546.cljs$lang$maxFixedArity = 0;
G__17546.cljs$lang$applyTo = (function (arglist__17548){
var args = cljs.core.seq(arglist__17548);
return G__17546__delegate(args);
});
G__17546.cljs$core$IFn$_invoke$arity$variadic = G__17546__delegate;
return G__17546;
})()
;})(_STAR_print_fn_STAR_17543,_STAR_print_newline_STAR_17544,base_path_17545))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17544;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17543;
}}catch (e17542){if((e17542 instanceof Error)){
var e = e17542;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_17545], null));
} else {
var e = e17542;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_17545))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__17549){
var map__17554 = p__17549;
var map__17554__$1 = ((cljs.core.seq_QMARK_.call(null,map__17554))?cljs.core.apply.call(null,cljs.core.hash_map,map__17554):map__17554);
var opts = map__17554__$1;
var build_id = cljs.core.get.call(null,map__17554__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__17554,map__17554__$1,opts,build_id){
return (function (p__17555){
var vec__17556 = p__17555;
var map__17557 = cljs.core.nth.call(null,vec__17556,(0),null);
var map__17557__$1 = ((cljs.core.seq_QMARK_.call(null,map__17557))?cljs.core.apply.call(null,cljs.core.hash_map,map__17557):map__17557);
var msg = map__17557__$1;
var msg_name = cljs.core.get.call(null,map__17557__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17556,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__17556,map__17557,map__17557__$1,msg,msg_name,_,map__17554,map__17554__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17556,map__17557,map__17557__$1,msg,msg_name,_,map__17554,map__17554__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__17554,map__17554__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__17561){
var vec__17562 = p__17561;
var map__17563 = cljs.core.nth.call(null,vec__17562,(0),null);
var map__17563__$1 = ((cljs.core.seq_QMARK_.call(null,map__17563))?cljs.core.apply.call(null,cljs.core.hash_map,map__17563):map__17563);
var msg = map__17563__$1;
var msg_name = cljs.core.get.call(null,map__17563__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17562,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__17564){
var map__17572 = p__17564;
var map__17572__$1 = ((cljs.core.seq_QMARK_.call(null,map__17572))?cljs.core.apply.call(null,cljs.core.hash_map,map__17572):map__17572);
var on_compile_fail = cljs.core.get.call(null,map__17572__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__17572__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__17572,map__17572__$1,on_compile_fail,on_compile_warning){
return (function (p__17573){
var vec__17574 = p__17573;
var map__17575 = cljs.core.nth.call(null,vec__17574,(0),null);
var map__17575__$1 = ((cljs.core.seq_QMARK_.call(null,map__17575))?cljs.core.apply.call(null,cljs.core.hash_map,map__17575):map__17575);
var msg = map__17575__$1;
var msg_name = cljs.core.get.call(null,map__17575__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17574,(1));
var pred__17576 = cljs.core._EQ_;
var expr__17577 = msg_name;
if(cljs.core.truth_(pred__17576.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17577))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17576.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17577))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17572,map__17572__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__,msg_hist,msg_names,msg){
return (function (state_17774){
var state_val_17775 = (state_17774[(1)]);
if((state_val_17775 === (7))){
var inst_17710 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17776_17817 = state_17774__$1;
(statearr_17776_17817[(2)] = inst_17710);

(statearr_17776_17817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (20))){
var inst_17736 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17736)){
var statearr_17777_17818 = state_17774__$1;
(statearr_17777_17818[(1)] = (22));

} else {
var statearr_17778_17819 = state_17774__$1;
(statearr_17778_17819[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (27))){
var inst_17748 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17749 = figwheel.client.heads_up.display_warning.call(null,inst_17748);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(30),inst_17749);
} else {
if((state_val_17775 === (1))){
var inst_17698 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17698)){
var statearr_17779_17820 = state_17774__$1;
(statearr_17779_17820[(1)] = (2));

} else {
var statearr_17780_17821 = state_17774__$1;
(statearr_17780_17821[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (24))){
var inst_17764 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17781_17822 = state_17774__$1;
(statearr_17781_17822[(2)] = inst_17764);

(statearr_17781_17822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (4))){
var inst_17772 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17774__$1,inst_17772);
} else {
if((state_val_17775 === (15))){
var inst_17725 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17726 = figwheel.client.format_messages.call(null,inst_17725);
var inst_17727 = figwheel.client.heads_up.display_error.call(null,inst_17726);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(18),inst_17727);
} else {
if((state_val_17775 === (21))){
var inst_17766 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17782_17823 = state_17774__$1;
(statearr_17782_17823[(2)] = inst_17766);

(statearr_17782_17823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (31))){
var inst_17755 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(34),inst_17755);
} else {
if((state_val_17775 === (32))){
var state_17774__$1 = state_17774;
var statearr_17783_17824 = state_17774__$1;
(statearr_17783_17824[(2)] = null);

(statearr_17783_17824[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (33))){
var inst_17760 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17784_17825 = state_17774__$1;
(statearr_17784_17825[(2)] = inst_17760);

(statearr_17784_17825[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (13))){
var inst_17716 = (state_17774[(2)]);
var inst_17717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17718 = figwheel.client.format_messages.call(null,inst_17717);
var inst_17719 = figwheel.client.heads_up.display_error.call(null,inst_17718);
var state_17774__$1 = (function (){var statearr_17785 = state_17774;
(statearr_17785[(7)] = inst_17716);

return statearr_17785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(14),inst_17719);
} else {
if((state_val_17775 === (22))){
var inst_17738 = figwheel.client.heads_up.clear.call(null);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(25),inst_17738);
} else {
if((state_val_17775 === (29))){
var inst_17762 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17786_17826 = state_17774__$1;
(statearr_17786_17826[(2)] = inst_17762);

(statearr_17786_17826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (6))){
var inst_17706 = figwheel.client.heads_up.clear.call(null);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(9),inst_17706);
} else {
if((state_val_17775 === (28))){
var inst_17753 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17753)){
var statearr_17787_17827 = state_17774__$1;
(statearr_17787_17827[(1)] = (31));

} else {
var statearr_17788_17828 = state_17774__$1;
(statearr_17788_17828[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (25))){
var inst_17740 = (state_17774[(2)]);
var inst_17741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17742 = figwheel.client.heads_up.display_warning.call(null,inst_17741);
var state_17774__$1 = (function (){var statearr_17789 = state_17774;
(statearr_17789[(8)] = inst_17740);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(26),inst_17742);
} else {
if((state_val_17775 === (34))){
var inst_17757 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17790_17829 = state_17774__$1;
(statearr_17790_17829[(2)] = inst_17757);

(statearr_17790_17829[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (17))){
var inst_17768 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17791_17830 = state_17774__$1;
(statearr_17791_17830[(2)] = inst_17768);

(statearr_17791_17830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (3))){
var inst_17712 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17712)){
var statearr_17792_17831 = state_17774__$1;
(statearr_17792_17831[(1)] = (10));

} else {
var statearr_17793_17832 = state_17774__$1;
(statearr_17793_17832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (12))){
var inst_17770 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17794_17833 = state_17774__$1;
(statearr_17794_17833[(2)] = inst_17770);

(statearr_17794_17833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (2))){
var inst_17700 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17700)){
var statearr_17795_17834 = state_17774__$1;
(statearr_17795_17834[(1)] = (5));

} else {
var statearr_17796_17835 = state_17774__$1;
(statearr_17796_17835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (23))){
var inst_17746 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17746)){
var statearr_17797_17836 = state_17774__$1;
(statearr_17797_17836[(1)] = (27));

} else {
var statearr_17798_17837 = state_17774__$1;
(statearr_17798_17837[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (19))){
var inst_17733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17734 = figwheel.client.heads_up.append_message.call(null,inst_17733);
var state_17774__$1 = state_17774;
var statearr_17799_17838 = state_17774__$1;
(statearr_17799_17838[(2)] = inst_17734);

(statearr_17799_17838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (11))){
var inst_17723 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17723)){
var statearr_17800_17839 = state_17774__$1;
(statearr_17800_17839[(1)] = (15));

} else {
var statearr_17801_17840 = state_17774__$1;
(statearr_17801_17840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (9))){
var inst_17708 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17802_17841 = state_17774__$1;
(statearr_17802_17841[(2)] = inst_17708);

(statearr_17802_17841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (5))){
var inst_17702 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(8),inst_17702);
} else {
if((state_val_17775 === (14))){
var inst_17721 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17803_17842 = state_17774__$1;
(statearr_17803_17842[(2)] = inst_17721);

(statearr_17803_17842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (26))){
var inst_17744 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17804_17843 = state_17774__$1;
(statearr_17804_17843[(2)] = inst_17744);

(statearr_17804_17843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (16))){
var inst_17731 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_17774__$1 = state_17774;
if(cljs.core.truth_(inst_17731)){
var statearr_17805_17844 = state_17774__$1;
(statearr_17805_17844[(1)] = (19));

} else {
var statearr_17806_17845 = state_17774__$1;
(statearr_17806_17845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (30))){
var inst_17751 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17807_17846 = state_17774__$1;
(statearr_17807_17846[(2)] = inst_17751);

(statearr_17807_17846[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (10))){
var inst_17714 = figwheel.client.heads_up.clear.call(null);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(13),inst_17714);
} else {
if((state_val_17775 === (18))){
var inst_17729 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17808_17847 = state_17774__$1;
(statearr_17808_17847[(2)] = inst_17729);

(statearr_17808_17847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (8))){
var inst_17704 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17809_17848 = state_17774__$1;
(statearr_17809_17848[(2)] = inst_17704);

(statearr_17809_17848[(1)] = (7));


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
});})(c__7090__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7028__auto__,c__7090__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto____0 = (function (){
var statearr_17813 = [null,null,null,null,null,null,null,null,null];
(statearr_17813[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto__);

(statearr_17813[(1)] = (1));

return statearr_17813;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto____1 = (function (state_17774){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_17774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e17814){if((e17814 instanceof Object)){
var ex__7032__auto__ = e17814;
var statearr_17815_17849 = state_17774;
(statearr_17815_17849[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17850 = state_17774;
state_17774 = G__17850;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto__ = function(state_17774){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto____1.call(this,state_17774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__,msg_hist,msg_names,msg))
})();
var state__7092__auto__ = (function (){var statearr_17816 = f__7091__auto__.call(null);
(statearr_17816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_17816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__,msg_hist,msg_names,msg))
);

return c__7090__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7090__auto___17913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto___17913,ch){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto___17913,ch){
return (function (state_17896){
var state_val_17897 = (state_17896[(1)]);
if((state_val_17897 === (8))){
var inst_17888 = (state_17896[(2)]);
var state_17896__$1 = (function (){var statearr_17898 = state_17896;
(statearr_17898[(7)] = inst_17888);

return statearr_17898;
})();
var statearr_17899_17914 = state_17896__$1;
(statearr_17899_17914[(2)] = null);

(statearr_17899_17914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (7))){
var inst_17892 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
var statearr_17900_17915 = state_17896__$1;
(statearr_17900_17915[(2)] = inst_17892);

(statearr_17900_17915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (6))){
var state_17896__$1 = state_17896;
var statearr_17901_17916 = state_17896__$1;
(statearr_17901_17916[(2)] = null);

(statearr_17901_17916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (5))){
var inst_17884 = (state_17896[(8)]);
var inst_17886 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_17884);
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17896__$1,(8),inst_17886);
} else {
if((state_val_17897 === (4))){
var inst_17884 = (state_17896[(8)]);
var inst_17884__$1 = (state_17896[(2)]);
var state_17896__$1 = (function (){var statearr_17902 = state_17896;
(statearr_17902[(8)] = inst_17884__$1);

return statearr_17902;
})();
if(cljs.core.truth_(inst_17884__$1)){
var statearr_17903_17917 = state_17896__$1;
(statearr_17903_17917[(1)] = (5));

} else {
var statearr_17904_17918 = state_17896__$1;
(statearr_17904_17918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (3))){
var inst_17894 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17896__$1,inst_17894);
} else {
if((state_val_17897 === (2))){
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17896__$1,(4),ch);
} else {
if((state_val_17897 === (1))){
var state_17896__$1 = state_17896;
var statearr_17905_17919 = state_17896__$1;
(statearr_17905_17919[(2)] = null);

(statearr_17905_17919[(1)] = (2));


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
});})(c__7090__auto___17913,ch))
;
return ((function (switch__7028__auto__,c__7090__auto___17913,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7029__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7029__auto____0 = (function (){
var statearr_17909 = [null,null,null,null,null,null,null,null,null];
(statearr_17909[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7029__auto__);

(statearr_17909[(1)] = (1));

return statearr_17909;
});
var figwheel$client$heads_up_plugin_$_state_machine__7029__auto____1 = (function (state_17896){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_17896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e17910){if((e17910 instanceof Object)){
var ex__7032__auto__ = e17910;
var statearr_17911_17920 = state_17896;
(statearr_17911_17920[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17921 = state_17896;
state_17896 = G__17921;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7029__auto__ = function(state_17896){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7029__auto____1.call(this,state_17896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7029__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7029__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto___17913,ch))
})();
var state__7092__auto__ = (function (){var statearr_17912 = f__7091__auto__.call(null);
(statearr_17912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto___17913);

return statearr_17912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto___17913,ch))
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
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__){
return (function (state_17942){
var state_val_17943 = (state_17942[(1)]);
if((state_val_17943 === (2))){
var inst_17939 = (state_17942[(2)]);
var inst_17940 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_17942__$1 = (function (){var statearr_17944 = state_17942;
(statearr_17944[(7)] = inst_17939);

return statearr_17944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17942__$1,inst_17940);
} else {
if((state_val_17943 === (1))){
var inst_17937 = cljs.core.async.timeout.call(null,(3000));
var state_17942__$1 = state_17942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17942__$1,(2),inst_17937);
} else {
return null;
}
}
});})(c__7090__auto__))
;
return ((function (switch__7028__auto__,c__7090__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7029__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7029__auto____0 = (function (){
var statearr_17948 = [null,null,null,null,null,null,null,null];
(statearr_17948[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7029__auto__);

(statearr_17948[(1)] = (1));

return statearr_17948;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7029__auto____1 = (function (state_17942){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_17942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e17949){if((e17949 instanceof Object)){
var ex__7032__auto__ = e17949;
var statearr_17950_17952 = state_17942;
(statearr_17950_17952[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17953 = state_17942;
state_17942 = G__17953;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7029__auto__ = function(state_17942){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7029__auto____1.call(this,state_17942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7029__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7029__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__))
})();
var state__7092__auto__ = (function (){var statearr_17951 = f__7091__auto__.call(null);
(statearr_17951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_17951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__))
);

return c__7090__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17957 = {"detail":url};
return obj17957;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__17958){
var map__17964 = p__17958;
var map__17964__$1 = ((cljs.core.seq_QMARK_.call(null,map__17964))?cljs.core.apply.call(null,cljs.core.hash_map,map__17964):map__17964);
var ed = map__17964__$1;
var exception_data = cljs.core.get.call(null,map__17964__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__17964__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__17965_17969 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17966_17970 = null;
var count__17967_17971 = (0);
var i__17968_17972 = (0);
while(true){
if((i__17968_17972 < count__17967_17971)){
var msg_17973 = cljs.core._nth.call(null,chunk__17966_17970,i__17968_17972);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17973);

var G__17974 = seq__17965_17969;
var G__17975 = chunk__17966_17970;
var G__17976 = count__17967_17971;
var G__17977 = (i__17968_17972 + (1));
seq__17965_17969 = G__17974;
chunk__17966_17970 = G__17975;
count__17967_17971 = G__17976;
i__17968_17972 = G__17977;
continue;
} else {
var temp__4126__auto___17978 = cljs.core.seq.call(null,seq__17965_17969);
if(temp__4126__auto___17978){
var seq__17965_17979__$1 = temp__4126__auto___17978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17965_17979__$1)){
var c__4884__auto___17980 = cljs.core.chunk_first.call(null,seq__17965_17979__$1);
var G__17981 = cljs.core.chunk_rest.call(null,seq__17965_17979__$1);
var G__17982 = c__4884__auto___17980;
var G__17983 = cljs.core.count.call(null,c__4884__auto___17980);
var G__17984 = (0);
seq__17965_17969 = G__17981;
chunk__17966_17970 = G__17982;
count__17967_17971 = G__17983;
i__17968_17972 = G__17984;
continue;
} else {
var msg_17985 = cljs.core.first.call(null,seq__17965_17979__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17985);

var G__17986 = cljs.core.next.call(null,seq__17965_17979__$1);
var G__17987 = null;
var G__17988 = (0);
var G__17989 = (0);
seq__17965_17969 = G__17986;
chunk__17966_17970 = G__17987;
count__17967_17971 = G__17988;
i__17968_17972 = G__17989;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__17990){
var map__17992 = p__17990;
var map__17992__$1 = ((cljs.core.seq_QMARK_.call(null,map__17992))?cljs.core.apply.call(null,cljs.core.hash_map,map__17992):map__17992);
var w = map__17992__$1;
var message = cljs.core.get.call(null,map__17992__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__17999 = cljs.core.seq.call(null,plugins);
var chunk__18000 = null;
var count__18001 = (0);
var i__18002 = (0);
while(true){
if((i__18002 < count__18001)){
var vec__18003 = cljs.core._nth.call(null,chunk__18000,i__18002);
var k = cljs.core.nth.call(null,vec__18003,(0),null);
var plugin = cljs.core.nth.call(null,vec__18003,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18005 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17999,chunk__18000,count__18001,i__18002,pl_18005,vec__18003,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_18005.call(null,msg_hist);
});})(seq__17999,chunk__18000,count__18001,i__18002,pl_18005,vec__18003,k,plugin))
);
} else {
}

var G__18006 = seq__17999;
var G__18007 = chunk__18000;
var G__18008 = count__18001;
var G__18009 = (i__18002 + (1));
seq__17999 = G__18006;
chunk__18000 = G__18007;
count__18001 = G__18008;
i__18002 = G__18009;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17999);
if(temp__4126__auto__){
var seq__17999__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17999__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__17999__$1);
var G__18010 = cljs.core.chunk_rest.call(null,seq__17999__$1);
var G__18011 = c__4884__auto__;
var G__18012 = cljs.core.count.call(null,c__4884__auto__);
var G__18013 = (0);
seq__17999 = G__18010;
chunk__18000 = G__18011;
count__18001 = G__18012;
i__18002 = G__18013;
continue;
} else {
var vec__18004 = cljs.core.first.call(null,seq__17999__$1);
var k = cljs.core.nth.call(null,vec__18004,(0),null);
var plugin = cljs.core.nth.call(null,vec__18004,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18014 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17999,chunk__18000,count__18001,i__18002,pl_18014,vec__18004,k,plugin,seq__17999__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_18014.call(null,msg_hist);
});})(seq__17999,chunk__18000,count__18001,i__18002,pl_18014,vec__18004,k,plugin,seq__17999__$1,temp__4126__auto__))
);
} else {
}

var G__18015 = cljs.core.next.call(null,seq__17999__$1);
var G__18016 = null;
var G__18017 = (0);
var G__18018 = (0);
seq__17999 = G__18015;
chunk__18000 = G__18016;
count__18001 = G__18017;
i__18002 = G__18018;
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
var G__18020 = arguments.length;
switch (G__18020) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__18023){
var map__18024 = p__18023;
var map__18024__$1 = ((cljs.core.seq_QMARK_.call(null,map__18024))?cljs.core.apply.call(null,cljs.core.hash_map,map__18024):map__18024);
var opts = map__18024__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq18022){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18022));
});

//# sourceMappingURL=client.js.map
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
var G__13728__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__13728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13729__i = 0, G__13729__a = new Array(arguments.length -  0);
while (G__13729__i < G__13729__a.length) {G__13729__a[G__13729__i] = arguments[G__13729__i + 0]; ++G__13729__i;}
  args = new cljs.core.IndexedSeq(G__13729__a,0);
} 
return G__13728__delegate.call(this,args);};
G__13728.cljs$lang$maxFixedArity = 0;
G__13728.cljs$lang$applyTo = (function (arglist__13730){
var args = cljs.core.seq(arglist__13730);
return G__13728__delegate(args);
});
G__13728.cljs$core$IFn$_invoke$arity$variadic = G__13728__delegate;
return G__13728;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__13731){
var map__13733 = p__13731;
var map__13733__$1 = ((cljs.core.seq_QMARK_.call(null,map__13733))?cljs.core.apply.call(null,cljs.core.hash_map,map__13733):map__13733);
var class$ = cljs.core.get.call(null,map__13733__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__13733__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__8199__auto___13862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___13862,ch){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___13862,ch){
return (function (state_13836){
var state_val_13837 = (state_13836[(1)]);
if((state_val_13837 === (7))){
var inst_13832 = (state_13836[(2)]);
var state_13836__$1 = state_13836;
var statearr_13838_13863 = state_13836__$1;
(statearr_13838_13863[(2)] = inst_13832);

(statearr_13838_13863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (1))){
var state_13836__$1 = state_13836;
var statearr_13839_13864 = state_13836__$1;
(statearr_13839_13864[(2)] = null);

(statearr_13839_13864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (4))){
var inst_13800 = (state_13836[(7)]);
var inst_13800__$1 = (state_13836[(2)]);
var state_13836__$1 = (function (){var statearr_13840 = state_13836;
(statearr_13840[(7)] = inst_13800__$1);

return statearr_13840;
})();
if(cljs.core.truth_(inst_13800__$1)){
var statearr_13841_13865 = state_13836__$1;
(statearr_13841_13865[(1)] = (5));

} else {
var statearr_13842_13866 = state_13836__$1;
(statearr_13842_13866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (13))){
var state_13836__$1 = state_13836;
var statearr_13843_13867 = state_13836__$1;
(statearr_13843_13867[(2)] = null);

(statearr_13843_13867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (6))){
var state_13836__$1 = state_13836;
var statearr_13844_13868 = state_13836__$1;
(statearr_13844_13868[(2)] = null);

(statearr_13844_13868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (3))){
var inst_13834 = (state_13836[(2)]);
var state_13836__$1 = state_13836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13836__$1,inst_13834);
} else {
if((state_val_13837 === (12))){
var inst_13807 = (state_13836[(8)]);
var inst_13820 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13807);
var inst_13821 = cljs.core.first.call(null,inst_13820);
var inst_13822 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13821);
var inst_13823 = console.warn("Figwheel: Not loading code with warnings - ",inst_13822);
var state_13836__$1 = state_13836;
var statearr_13845_13869 = state_13836__$1;
(statearr_13845_13869[(2)] = inst_13823);

(statearr_13845_13869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (2))){
var state_13836__$1 = state_13836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13836__$1,(4),ch);
} else {
if((state_val_13837 === (11))){
var inst_13816 = (state_13836[(2)]);
var state_13836__$1 = state_13836;
var statearr_13846_13870 = state_13836__$1;
(statearr_13846_13870[(2)] = inst_13816);

(statearr_13846_13870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (9))){
var inst_13806 = (state_13836[(9)]);
var inst_13818 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13806,opts);
var state_13836__$1 = state_13836;
if(cljs.core.truth_(inst_13818)){
var statearr_13847_13871 = state_13836__$1;
(statearr_13847_13871[(1)] = (12));

} else {
var statearr_13848_13872 = state_13836__$1;
(statearr_13848_13872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (5))){
var inst_13800 = (state_13836[(7)]);
var inst_13806 = (state_13836[(9)]);
var inst_13802 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13803 = (new cljs.core.PersistentArrayMap(null,2,inst_13802,null));
var inst_13804 = (new cljs.core.PersistentHashSet(null,inst_13803,null));
var inst_13805 = figwheel.client.focus_msgs.call(null,inst_13804,inst_13800);
var inst_13806__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13805);
var inst_13807 = cljs.core.first.call(null,inst_13805);
var inst_13808 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13806__$1,opts);
var state_13836__$1 = (function (){var statearr_13849 = state_13836;
(statearr_13849[(8)] = inst_13807);

(statearr_13849[(9)] = inst_13806__$1);

return statearr_13849;
})();
if(cljs.core.truth_(inst_13808)){
var statearr_13850_13873 = state_13836__$1;
(statearr_13850_13873[(1)] = (8));

} else {
var statearr_13851_13874 = state_13836__$1;
(statearr_13851_13874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (14))){
var inst_13826 = (state_13836[(2)]);
var state_13836__$1 = state_13836;
var statearr_13852_13875 = state_13836__$1;
(statearr_13852_13875[(2)] = inst_13826);

(statearr_13852_13875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (10))){
var inst_13828 = (state_13836[(2)]);
var state_13836__$1 = (function (){var statearr_13853 = state_13836;
(statearr_13853[(10)] = inst_13828);

return statearr_13853;
})();
var statearr_13854_13876 = state_13836__$1;
(statearr_13854_13876[(2)] = null);

(statearr_13854_13876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13837 === (8))){
var inst_13807 = (state_13836[(8)]);
var inst_13810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13811 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13807);
var inst_13812 = cljs.core.async.timeout.call(null,(1000));
var inst_13813 = [inst_13811,inst_13812];
var inst_13814 = (new cljs.core.PersistentVector(null,2,(5),inst_13810,inst_13813,null));
var state_13836__$1 = state_13836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13836__$1,(11),inst_13814);
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
});})(c__8199__auto___13862,ch))
;
return ((function (switch__8137__auto__,c__8199__auto___13862,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__8138__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__8138__auto____0 = (function (){
var statearr_13858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13858[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__8138__auto__);

(statearr_13858[(1)] = (1));

return statearr_13858;
});
var figwheel$client$file_reloader_plugin_$_state_machine__8138__auto____1 = (function (state_13836){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_13836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e13859){if((e13859 instanceof Object)){
var ex__8141__auto__ = e13859;
var statearr_13860_13877 = state_13836;
(statearr_13860_13877[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13878 = state_13836;
state_13836 = G__13878;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__8138__auto__ = function(state_13836){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__8138__auto____1.call(this,state_13836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__8138__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__8138__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___13862,ch))
})();
var state__8201__auto__ = (function (){var statearr_13861 = f__8200__auto__.call(null);
(statearr_13861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___13862);

return statearr_13861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___13862,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__13879_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__13879_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_13888 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__13881_SHARP_,p2__13880_SHARP_){
return [cljs.core.str(p2__13880_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_13888){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_13886 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_13887 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13886,_STAR_print_newline_STAR_13887,base_path_13888){
return (function() { 
var G__13889__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__13889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13890__i = 0, G__13890__a = new Array(arguments.length -  0);
while (G__13890__i < G__13890__a.length) {G__13890__a[G__13890__i] = arguments[G__13890__i + 0]; ++G__13890__i;}
  args = new cljs.core.IndexedSeq(G__13890__a,0);
} 
return G__13889__delegate.call(this,args);};
G__13889.cljs$lang$maxFixedArity = 0;
G__13889.cljs$lang$applyTo = (function (arglist__13891){
var args = cljs.core.seq(arglist__13891);
return G__13889__delegate(args);
});
G__13889.cljs$core$IFn$_invoke$arity$variadic = G__13889__delegate;
return G__13889;
})()
;})(_STAR_print_fn_STAR_13886,_STAR_print_newline_STAR_13887,base_path_13888))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13887;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13886;
}}catch (e13885){if((e13885 instanceof Error)){
var e = e13885;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_13888], null));
} else {
var e = e13885;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_13888))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__13892){
var map__13897 = p__13892;
var map__13897__$1 = ((cljs.core.seq_QMARK_.call(null,map__13897))?cljs.core.apply.call(null,cljs.core.hash_map,map__13897):map__13897);
var opts = map__13897__$1;
var build_id = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__13897,map__13897__$1,opts,build_id){
return (function (p__13898){
var vec__13899 = p__13898;
var map__13900 = cljs.core.nth.call(null,vec__13899,(0),null);
var map__13900__$1 = ((cljs.core.seq_QMARK_.call(null,map__13900))?cljs.core.apply.call(null,cljs.core.hash_map,map__13900):map__13900);
var msg = map__13900__$1;
var msg_name = cljs.core.get.call(null,map__13900__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__13899,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__13899,map__13900,map__13900__$1,msg,msg_name,_,map__13897,map__13897__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__13899,map__13900,map__13900__$1,msg,msg_name,_,map__13897,map__13897__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__13897,map__13897__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__13904){
var vec__13905 = p__13904;
var map__13906 = cljs.core.nth.call(null,vec__13905,(0),null);
var map__13906__$1 = ((cljs.core.seq_QMARK_.call(null,map__13906))?cljs.core.apply.call(null,cljs.core.hash_map,map__13906):map__13906);
var msg = map__13906__$1;
var msg_name = cljs.core.get.call(null,map__13906__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__13905,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__13907){
var map__13915 = p__13907;
var map__13915__$1 = ((cljs.core.seq_QMARK_.call(null,map__13915))?cljs.core.apply.call(null,cljs.core.hash_map,map__13915):map__13915);
var on_compile_fail = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__13915,map__13915__$1,on_compile_fail,on_compile_warning){
return (function (p__13916){
var vec__13917 = p__13916;
var map__13918 = cljs.core.nth.call(null,vec__13917,(0),null);
var map__13918__$1 = ((cljs.core.seq_QMARK_.call(null,map__13918))?cljs.core.apply.call(null,cljs.core.hash_map,map__13918):map__13918);
var msg = map__13918__$1;
var msg_name = cljs.core.get.call(null,map__13918__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__13917,(1));
var pred__13919 = cljs.core._EQ_;
var expr__13920 = msg_name;
if(cljs.core.truth_(pred__13919.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__13920))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__13919.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13920))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__13915,map__13915__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__,msg_hist,msg_names,msg){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__,msg_hist,msg_names,msg){
return (function (state_14117){
var state_val_14118 = (state_14117[(1)]);
if((state_val_14118 === (7))){
var inst_14053 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14119_14160 = state_14117__$1;
(statearr_14119_14160[(2)] = inst_14053);

(statearr_14119_14160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (20))){
var inst_14079 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14079)){
var statearr_14120_14161 = state_14117__$1;
(statearr_14120_14161[(1)] = (22));

} else {
var statearr_14121_14162 = state_14117__$1;
(statearr_14121_14162[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (27))){
var inst_14091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14092 = figwheel.client.heads_up.display_warning.call(null,inst_14091);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(30),inst_14092);
} else {
if((state_val_14118 === (1))){
var inst_14041 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14041)){
var statearr_14122_14163 = state_14117__$1;
(statearr_14122_14163[(1)] = (2));

} else {
var statearr_14123_14164 = state_14117__$1;
(statearr_14123_14164[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (24))){
var inst_14107 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14124_14165 = state_14117__$1;
(statearr_14124_14165[(2)] = inst_14107);

(statearr_14124_14165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (4))){
var inst_14115 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14117__$1,inst_14115);
} else {
if((state_val_14118 === (15))){
var inst_14068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14069 = figwheel.client.format_messages.call(null,inst_14068);
var inst_14070 = figwheel.client.heads_up.display_error.call(null,inst_14069);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(18),inst_14070);
} else {
if((state_val_14118 === (21))){
var inst_14109 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14125_14166 = state_14117__$1;
(statearr_14125_14166[(2)] = inst_14109);

(statearr_14125_14166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (31))){
var inst_14098 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(34),inst_14098);
} else {
if((state_val_14118 === (32))){
var state_14117__$1 = state_14117;
var statearr_14126_14167 = state_14117__$1;
(statearr_14126_14167[(2)] = null);

(statearr_14126_14167[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (33))){
var inst_14103 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14127_14168 = state_14117__$1;
(statearr_14127_14168[(2)] = inst_14103);

(statearr_14127_14168[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (13))){
var inst_14059 = (state_14117[(2)]);
var inst_14060 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14061 = figwheel.client.format_messages.call(null,inst_14060);
var inst_14062 = figwheel.client.heads_up.display_error.call(null,inst_14061);
var state_14117__$1 = (function (){var statearr_14128 = state_14117;
(statearr_14128[(7)] = inst_14059);

return statearr_14128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(14),inst_14062);
} else {
if((state_val_14118 === (22))){
var inst_14081 = figwheel.client.heads_up.clear.call(null);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(25),inst_14081);
} else {
if((state_val_14118 === (29))){
var inst_14105 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14129_14169 = state_14117__$1;
(statearr_14129_14169[(2)] = inst_14105);

(statearr_14129_14169[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (6))){
var inst_14049 = figwheel.client.heads_up.clear.call(null);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(9),inst_14049);
} else {
if((state_val_14118 === (28))){
var inst_14096 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14096)){
var statearr_14130_14170 = state_14117__$1;
(statearr_14130_14170[(1)] = (31));

} else {
var statearr_14131_14171 = state_14117__$1;
(statearr_14131_14171[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (25))){
var inst_14083 = (state_14117[(2)]);
var inst_14084 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14085 = figwheel.client.heads_up.display_warning.call(null,inst_14084);
var state_14117__$1 = (function (){var statearr_14132 = state_14117;
(statearr_14132[(8)] = inst_14083);

return statearr_14132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(26),inst_14085);
} else {
if((state_val_14118 === (34))){
var inst_14100 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14133_14172 = state_14117__$1;
(statearr_14133_14172[(2)] = inst_14100);

(statearr_14133_14172[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (17))){
var inst_14111 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14134_14173 = state_14117__$1;
(statearr_14134_14173[(2)] = inst_14111);

(statearr_14134_14173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (3))){
var inst_14055 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14055)){
var statearr_14135_14174 = state_14117__$1;
(statearr_14135_14174[(1)] = (10));

} else {
var statearr_14136_14175 = state_14117__$1;
(statearr_14136_14175[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (12))){
var inst_14113 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14137_14176 = state_14117__$1;
(statearr_14137_14176[(2)] = inst_14113);

(statearr_14137_14176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (2))){
var inst_14043 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14043)){
var statearr_14138_14177 = state_14117__$1;
(statearr_14138_14177[(1)] = (5));

} else {
var statearr_14139_14178 = state_14117__$1;
(statearr_14139_14178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (23))){
var inst_14089 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14089)){
var statearr_14140_14179 = state_14117__$1;
(statearr_14140_14179[(1)] = (27));

} else {
var statearr_14141_14180 = state_14117__$1;
(statearr_14141_14180[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (19))){
var inst_14076 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14077 = figwheel.client.heads_up.append_message.call(null,inst_14076);
var state_14117__$1 = state_14117;
var statearr_14142_14181 = state_14117__$1;
(statearr_14142_14181[(2)] = inst_14077);

(statearr_14142_14181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (11))){
var inst_14066 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14066)){
var statearr_14143_14182 = state_14117__$1;
(statearr_14143_14182[(1)] = (15));

} else {
var statearr_14144_14183 = state_14117__$1;
(statearr_14144_14183[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (9))){
var inst_14051 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14145_14184 = state_14117__$1;
(statearr_14145_14184[(2)] = inst_14051);

(statearr_14145_14184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (5))){
var inst_14045 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(8),inst_14045);
} else {
if((state_val_14118 === (14))){
var inst_14064 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14146_14185 = state_14117__$1;
(statearr_14146_14185[(2)] = inst_14064);

(statearr_14146_14185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (26))){
var inst_14087 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14147_14186 = state_14117__$1;
(statearr_14147_14186[(2)] = inst_14087);

(statearr_14147_14186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (16))){
var inst_14074 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14117__$1 = state_14117;
if(cljs.core.truth_(inst_14074)){
var statearr_14148_14187 = state_14117__$1;
(statearr_14148_14187[(1)] = (19));

} else {
var statearr_14149_14188 = state_14117__$1;
(statearr_14149_14188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (30))){
var inst_14094 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14150_14189 = state_14117__$1;
(statearr_14150_14189[(2)] = inst_14094);

(statearr_14150_14189[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (10))){
var inst_14057 = figwheel.client.heads_up.clear.call(null);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(13),inst_14057);
} else {
if((state_val_14118 === (18))){
var inst_14072 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14151_14190 = state_14117__$1;
(statearr_14151_14190[(2)] = inst_14072);

(statearr_14151_14190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (8))){
var inst_14047 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14152_14191 = state_14117__$1;
(statearr_14152_14191[(2)] = inst_14047);

(statearr_14152_14191[(1)] = (7));


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
});})(c__8199__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__8137__auto__,c__8199__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto____0 = (function (){
var statearr_14156 = [null,null,null,null,null,null,null,null,null];
(statearr_14156[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto__);

(statearr_14156[(1)] = (1));

return statearr_14156;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto____1 = (function (state_14117){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_14117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e14157){if((e14157 instanceof Object)){
var ex__8141__auto__ = e14157;
var statearr_14158_14192 = state_14117;
(statearr_14158_14192[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14193 = state_14117;
state_14117 = G__14193;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto__ = function(state_14117){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto____1.call(this,state_14117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__,msg_hist,msg_names,msg))
})();
var state__8201__auto__ = (function (){var statearr_14159 = f__8200__auto__.call(null);
(statearr_14159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_14159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__,msg_hist,msg_names,msg))
);

return c__8199__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__8199__auto___14256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto___14256,ch){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto___14256,ch){
return (function (state_14239){
var state_val_14240 = (state_14239[(1)]);
if((state_val_14240 === (8))){
var inst_14231 = (state_14239[(2)]);
var state_14239__$1 = (function (){var statearr_14241 = state_14239;
(statearr_14241[(7)] = inst_14231);

return statearr_14241;
})();
var statearr_14242_14257 = state_14239__$1;
(statearr_14242_14257[(2)] = null);

(statearr_14242_14257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14240 === (7))){
var inst_14235 = (state_14239[(2)]);
var state_14239__$1 = state_14239;
var statearr_14243_14258 = state_14239__$1;
(statearr_14243_14258[(2)] = inst_14235);

(statearr_14243_14258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14240 === (6))){
var state_14239__$1 = state_14239;
var statearr_14244_14259 = state_14239__$1;
(statearr_14244_14259[(2)] = null);

(statearr_14244_14259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14240 === (5))){
var inst_14227 = (state_14239[(8)]);
var inst_14229 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14227);
var state_14239__$1 = state_14239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14239__$1,(8),inst_14229);
} else {
if((state_val_14240 === (4))){
var inst_14227 = (state_14239[(8)]);
var inst_14227__$1 = (state_14239[(2)]);
var state_14239__$1 = (function (){var statearr_14245 = state_14239;
(statearr_14245[(8)] = inst_14227__$1);

return statearr_14245;
})();
if(cljs.core.truth_(inst_14227__$1)){
var statearr_14246_14260 = state_14239__$1;
(statearr_14246_14260[(1)] = (5));

} else {
var statearr_14247_14261 = state_14239__$1;
(statearr_14247_14261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14240 === (3))){
var inst_14237 = (state_14239[(2)]);
var state_14239__$1 = state_14239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14239__$1,inst_14237);
} else {
if((state_val_14240 === (2))){
var state_14239__$1 = state_14239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14239__$1,(4),ch);
} else {
if((state_val_14240 === (1))){
var state_14239__$1 = state_14239;
var statearr_14248_14262 = state_14239__$1;
(statearr_14248_14262[(2)] = null);

(statearr_14248_14262[(1)] = (2));


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
});})(c__8199__auto___14256,ch))
;
return ((function (switch__8137__auto__,c__8199__auto___14256,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__8138__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__8138__auto____0 = (function (){
var statearr_14252 = [null,null,null,null,null,null,null,null,null];
(statearr_14252[(0)] = figwheel$client$heads_up_plugin_$_state_machine__8138__auto__);

(statearr_14252[(1)] = (1));

return statearr_14252;
});
var figwheel$client$heads_up_plugin_$_state_machine__8138__auto____1 = (function (state_14239){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_14239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e14253){if((e14253 instanceof Object)){
var ex__8141__auto__ = e14253;
var statearr_14254_14263 = state_14239;
(statearr_14254_14263[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14264 = state_14239;
state_14239 = G__14264;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__8138__auto__ = function(state_14239){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__8138__auto____1.call(this,state_14239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__8138__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__8138__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto___14256,ch))
})();
var state__8201__auto__ = (function (){var statearr_14255 = f__8200__auto__.call(null);
(statearr_14255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto___14256);

return statearr_14255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto___14256,ch))
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
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__){
return (function (state_14285){
var state_val_14286 = (state_14285[(1)]);
if((state_val_14286 === (2))){
var inst_14282 = (state_14285[(2)]);
var inst_14283 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14285__$1 = (function (){var statearr_14287 = state_14285;
(statearr_14287[(7)] = inst_14282);

return statearr_14287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14285__$1,inst_14283);
} else {
if((state_val_14286 === (1))){
var inst_14280 = cljs.core.async.timeout.call(null,(3000));
var state_14285__$1 = state_14285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14285__$1,(2),inst_14280);
} else {
return null;
}
}
});})(c__8199__auto__))
;
return ((function (switch__8137__auto__,c__8199__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__8138__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__8138__auto____0 = (function (){
var statearr_14291 = [null,null,null,null,null,null,null,null];
(statearr_14291[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__8138__auto__);

(statearr_14291[(1)] = (1));

return statearr_14291;
});
var figwheel$client$enforce_project_plugin_$_state_machine__8138__auto____1 = (function (state_14285){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_14285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e14292){if((e14292 instanceof Object)){
var ex__8141__auto__ = e14292;
var statearr_14293_14295 = state_14285;
(statearr_14293_14295[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14296 = state_14285;
state_14285 = G__14296;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__8138__auto__ = function(state_14285){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__8138__auto____1.call(this,state_14285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__8138__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__8138__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__))
})();
var state__8201__auto__ = (function (){var statearr_14294 = f__8200__auto__.call(null);
(statearr_14294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_14294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__))
);

return c__8199__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14300 = {"detail":url};
return obj14300;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__14301){
var map__14307 = p__14301;
var map__14307__$1 = ((cljs.core.seq_QMARK_.call(null,map__14307))?cljs.core.apply.call(null,cljs.core.hash_map,map__14307):map__14307);
var ed = map__14307__$1;
var exception_data = cljs.core.get.call(null,map__14307__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__14307__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__14308_14312 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14309_14313 = null;
var count__14310_14314 = (0);
var i__14311_14315 = (0);
while(true){
if((i__14311_14315 < count__14310_14314)){
var msg_14316 = cljs.core._nth.call(null,chunk__14309_14313,i__14311_14315);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14316);

var G__14317 = seq__14308_14312;
var G__14318 = chunk__14309_14313;
var G__14319 = count__14310_14314;
var G__14320 = (i__14311_14315 + (1));
seq__14308_14312 = G__14317;
chunk__14309_14313 = G__14318;
count__14310_14314 = G__14319;
i__14311_14315 = G__14320;
continue;
} else {
var temp__4126__auto___14321 = cljs.core.seq.call(null,seq__14308_14312);
if(temp__4126__auto___14321){
var seq__14308_14322__$1 = temp__4126__auto___14321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14308_14322__$1)){
var c__4884__auto___14323 = cljs.core.chunk_first.call(null,seq__14308_14322__$1);
var G__14324 = cljs.core.chunk_rest.call(null,seq__14308_14322__$1);
var G__14325 = c__4884__auto___14323;
var G__14326 = cljs.core.count.call(null,c__4884__auto___14323);
var G__14327 = (0);
seq__14308_14312 = G__14324;
chunk__14309_14313 = G__14325;
count__14310_14314 = G__14326;
i__14311_14315 = G__14327;
continue;
} else {
var msg_14328 = cljs.core.first.call(null,seq__14308_14322__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14328);

var G__14329 = cljs.core.next.call(null,seq__14308_14322__$1);
var G__14330 = null;
var G__14331 = (0);
var G__14332 = (0);
seq__14308_14312 = G__14329;
chunk__14309_14313 = G__14330;
count__14310_14314 = G__14331;
i__14311_14315 = G__14332;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__14333){
var map__14335 = p__14333;
var map__14335__$1 = ((cljs.core.seq_QMARK_.call(null,map__14335))?cljs.core.apply.call(null,cljs.core.hash_map,map__14335):map__14335);
var w = map__14335__$1;
var message = cljs.core.get.call(null,map__14335__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__14342 = cljs.core.seq.call(null,plugins);
var chunk__14343 = null;
var count__14344 = (0);
var i__14345 = (0);
while(true){
if((i__14345 < count__14344)){
var vec__14346 = cljs.core._nth.call(null,chunk__14343,i__14345);
var k = cljs.core.nth.call(null,vec__14346,(0),null);
var plugin = cljs.core.nth.call(null,vec__14346,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14348 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14342,chunk__14343,count__14344,i__14345,pl_14348,vec__14346,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14348.call(null,msg_hist);
});})(seq__14342,chunk__14343,count__14344,i__14345,pl_14348,vec__14346,k,plugin))
);
} else {
}

var G__14349 = seq__14342;
var G__14350 = chunk__14343;
var G__14351 = count__14344;
var G__14352 = (i__14345 + (1));
seq__14342 = G__14349;
chunk__14343 = G__14350;
count__14344 = G__14351;
i__14345 = G__14352;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14342);
if(temp__4126__auto__){
var seq__14342__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14342__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__14342__$1);
var G__14353 = cljs.core.chunk_rest.call(null,seq__14342__$1);
var G__14354 = c__4884__auto__;
var G__14355 = cljs.core.count.call(null,c__4884__auto__);
var G__14356 = (0);
seq__14342 = G__14353;
chunk__14343 = G__14354;
count__14344 = G__14355;
i__14345 = G__14356;
continue;
} else {
var vec__14347 = cljs.core.first.call(null,seq__14342__$1);
var k = cljs.core.nth.call(null,vec__14347,(0),null);
var plugin = cljs.core.nth.call(null,vec__14347,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14357 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14342,chunk__14343,count__14344,i__14345,pl_14357,vec__14347,k,plugin,seq__14342__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14357.call(null,msg_hist);
});})(seq__14342,chunk__14343,count__14344,i__14345,pl_14357,vec__14347,k,plugin,seq__14342__$1,temp__4126__auto__))
);
} else {
}

var G__14358 = cljs.core.next.call(null,seq__14342__$1);
var G__14359 = null;
var G__14360 = (0);
var G__14361 = (0);
seq__14342 = G__14358;
chunk__14343 = G__14359;
count__14344 = G__14360;
i__14345 = G__14361;
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
var G__14363 = arguments.length;
switch (G__14363) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__14366){
var map__14367 = p__14366;
var map__14367__$1 = ((cljs.core.seq_QMARK_.call(null,map__14367))?cljs.core.apply.call(null,cljs.core.hash_map,map__14367):map__14367);
var opts = map__14367__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq14365){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14365));
});

//# sourceMappingURL=client.js.map
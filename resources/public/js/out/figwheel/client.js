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
var G__11868__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11869__i = 0, G__11869__a = new Array(arguments.length -  0);
while (G__11869__i < G__11869__a.length) {G__11869__a[G__11869__i] = arguments[G__11869__i + 0]; ++G__11869__i;}
  args = new cljs.core.IndexedSeq(G__11869__a,0);
} 
return G__11868__delegate.call(this,args);};
G__11868.cljs$lang$maxFixedArity = 0;
G__11868.cljs$lang$applyTo = (function (arglist__11870){
var args = cljs.core.seq(arglist__11870);
return G__11868__delegate(args);
});
G__11868.cljs$core$IFn$_invoke$arity$variadic = G__11868__delegate;
return G__11868;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__11871){
var map__11873 = p__11871;
var map__11873__$1 = ((cljs.core.seq_QMARK_.call(null,map__11873))?cljs.core.apply.call(null,cljs.core.hash_map,map__11873):map__11873);
var class$ = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__7080__auto___12002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12002,ch){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___12002,ch){
return (function (state_11976){
var state_val_11977 = (state_11976[(1)]);
if((state_val_11977 === (7))){
var inst_11972 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
var statearr_11978_12003 = state_11976__$1;
(statearr_11978_12003[(2)] = inst_11972);

(statearr_11978_12003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (1))){
var state_11976__$1 = state_11976;
var statearr_11979_12004 = state_11976__$1;
(statearr_11979_12004[(2)] = null);

(statearr_11979_12004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (4))){
var inst_11940 = (state_11976[(7)]);
var inst_11940__$1 = (state_11976[(2)]);
var state_11976__$1 = (function (){var statearr_11980 = state_11976;
(statearr_11980[(7)] = inst_11940__$1);

return statearr_11980;
})();
if(cljs.core.truth_(inst_11940__$1)){
var statearr_11981_12005 = state_11976__$1;
(statearr_11981_12005[(1)] = (5));

} else {
var statearr_11982_12006 = state_11976__$1;
(statearr_11982_12006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (13))){
var state_11976__$1 = state_11976;
var statearr_11983_12007 = state_11976__$1;
(statearr_11983_12007[(2)] = null);

(statearr_11983_12007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (6))){
var state_11976__$1 = state_11976;
var statearr_11984_12008 = state_11976__$1;
(statearr_11984_12008[(2)] = null);

(statearr_11984_12008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (3))){
var inst_11974 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11976__$1,inst_11974);
} else {
if((state_val_11977 === (12))){
var inst_11947 = (state_11976[(8)]);
var inst_11960 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11947);
var inst_11961 = cljs.core.first.call(null,inst_11960);
var inst_11962 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_11961);
var inst_11963 = console.warn("Figwheel: Not loading code with warnings - ",inst_11962);
var state_11976__$1 = state_11976;
var statearr_11985_12009 = state_11976__$1;
(statearr_11985_12009[(2)] = inst_11963);

(statearr_11985_12009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (2))){
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11976__$1,(4),ch);
} else {
if((state_val_11977 === (11))){
var inst_11956 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
var statearr_11986_12010 = state_11976__$1;
(statearr_11986_12010[(2)] = inst_11956);

(statearr_11986_12010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (9))){
var inst_11946 = (state_11976[(9)]);
var inst_11958 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_11946,opts);
var state_11976__$1 = state_11976;
if(cljs.core.truth_(inst_11958)){
var statearr_11987_12011 = state_11976__$1;
(statearr_11987_12011[(1)] = (12));

} else {
var statearr_11988_12012 = state_11976__$1;
(statearr_11988_12012[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (5))){
var inst_11940 = (state_11976[(7)]);
var inst_11946 = (state_11976[(9)]);
var inst_11942 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_11943 = (new cljs.core.PersistentArrayMap(null,2,inst_11942,null));
var inst_11944 = (new cljs.core.PersistentHashSet(null,inst_11943,null));
var inst_11945 = figwheel.client.focus_msgs.call(null,inst_11944,inst_11940);
var inst_11946__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_11945);
var inst_11947 = cljs.core.first.call(null,inst_11945);
var inst_11948 = figwheel.client.reload_file_state_QMARK_.call(null,inst_11946__$1,opts);
var state_11976__$1 = (function (){var statearr_11989 = state_11976;
(statearr_11989[(8)] = inst_11947);

(statearr_11989[(9)] = inst_11946__$1);

return statearr_11989;
})();
if(cljs.core.truth_(inst_11948)){
var statearr_11990_12013 = state_11976__$1;
(statearr_11990_12013[(1)] = (8));

} else {
var statearr_11991_12014 = state_11976__$1;
(statearr_11991_12014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (14))){
var inst_11966 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
var statearr_11992_12015 = state_11976__$1;
(statearr_11992_12015[(2)] = inst_11966);

(statearr_11992_12015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (10))){
var inst_11968 = (state_11976[(2)]);
var state_11976__$1 = (function (){var statearr_11993 = state_11976;
(statearr_11993[(10)] = inst_11968);

return statearr_11993;
})();
var statearr_11994_12016 = state_11976__$1;
(statearr_11994_12016[(2)] = null);

(statearr_11994_12016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (8))){
var inst_11947 = (state_11976[(8)]);
var inst_11950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11951 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_11947);
var inst_11952 = cljs.core.async.timeout.call(null,(1000));
var inst_11953 = [inst_11951,inst_11952];
var inst_11954 = (new cljs.core.PersistentVector(null,2,(5),inst_11950,inst_11953,null));
var state_11976__$1 = state_11976;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11976__$1,(11),inst_11954);
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
});})(c__7080__auto___12002,ch))
;
return ((function (switch__7018__auto__,c__7080__auto___12002,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7019__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7019__auto____0 = (function (){
var statearr_11998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11998[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7019__auto__);

(statearr_11998[(1)] = (1));

return statearr_11998;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7019__auto____1 = (function (state_11976){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_11976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e11999){if((e11999 instanceof Object)){
var ex__7022__auto__ = e11999;
var statearr_12000_12017 = state_11976;
(statearr_12000_12017[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12018 = state_11976;
state_11976 = G__12018;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7019__auto__ = function(state_11976){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7019__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7019__auto____1.call(this,state_11976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7019__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7019__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___12002,ch))
})();
var state__7082__auto__ = (function (){var statearr_12001 = f__7081__auto__.call(null);
(statearr_12001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12002);

return statearr_12001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12002,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__12019_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__12019_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_12028 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__12021_SHARP_,p2__12020_SHARP_){
return [cljs.core.str(p2__12020_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_12028){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_12026 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_12027 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12026,_STAR_print_newline_STAR_12027,base_path_12028){
return (function() { 
var G__12029__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__12029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12030__i = 0, G__12030__a = new Array(arguments.length -  0);
while (G__12030__i < G__12030__a.length) {G__12030__a[G__12030__i] = arguments[G__12030__i + 0]; ++G__12030__i;}
  args = new cljs.core.IndexedSeq(G__12030__a,0);
} 
return G__12029__delegate.call(this,args);};
G__12029.cljs$lang$maxFixedArity = 0;
G__12029.cljs$lang$applyTo = (function (arglist__12031){
var args = cljs.core.seq(arglist__12031);
return G__12029__delegate(args);
});
G__12029.cljs$core$IFn$_invoke$arity$variadic = G__12029__delegate;
return G__12029;
})()
;})(_STAR_print_fn_STAR_12026,_STAR_print_newline_STAR_12027,base_path_12028))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12027;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12026;
}}catch (e12025){if((e12025 instanceof Error)){
var e = e12025;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_12028], null));
} else {
var e = e12025;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_12028))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__12032){
var map__12037 = p__12032;
var map__12037__$1 = ((cljs.core.seq_QMARK_.call(null,map__12037))?cljs.core.apply.call(null,cljs.core.hash_map,map__12037):map__12037);
var opts = map__12037__$1;
var build_id = cljs.core.get.call(null,map__12037__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__12037,map__12037__$1,opts,build_id){
return (function (p__12038){
var vec__12039 = p__12038;
var map__12040 = cljs.core.nth.call(null,vec__12039,(0),null);
var map__12040__$1 = ((cljs.core.seq_QMARK_.call(null,map__12040))?cljs.core.apply.call(null,cljs.core.hash_map,map__12040):map__12040);
var msg = map__12040__$1;
var msg_name = cljs.core.get.call(null,map__12040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12039,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__12039,map__12040,map__12040__$1,msg,msg_name,_,map__12037,map__12037__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__12039,map__12040,map__12040__$1,msg,msg_name,_,map__12037,map__12037__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__12037,map__12037__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__12044){
var vec__12045 = p__12044;
var map__12046 = cljs.core.nth.call(null,vec__12045,(0),null);
var map__12046__$1 = ((cljs.core.seq_QMARK_.call(null,map__12046))?cljs.core.apply.call(null,cljs.core.hash_map,map__12046):map__12046);
var msg = map__12046__$1;
var msg_name = cljs.core.get.call(null,map__12046__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12045,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__12047){
var map__12055 = p__12047;
var map__12055__$1 = ((cljs.core.seq_QMARK_.call(null,map__12055))?cljs.core.apply.call(null,cljs.core.hash_map,map__12055):map__12055);
var on_compile_fail = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__12055,map__12055__$1,on_compile_fail,on_compile_warning){
return (function (p__12056){
var vec__12057 = p__12056;
var map__12058 = cljs.core.nth.call(null,vec__12057,(0),null);
var map__12058__$1 = ((cljs.core.seq_QMARK_.call(null,map__12058))?cljs.core.apply.call(null,cljs.core.hash_map,map__12058):map__12058);
var msg = map__12058__$1;
var msg_name = cljs.core.get.call(null,map__12058__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12057,(1));
var pred__12059 = cljs.core._EQ_;
var expr__12060 = msg_name;
if(cljs.core.truth_(pred__12059.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__12060))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__12059.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__12060))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__12055,map__12055__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__,msg_hist,msg_names,msg){
return (function (state_12257){
var state_val_12258 = (state_12257[(1)]);
if((state_val_12258 === (7))){
var inst_12193 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12259_12300 = state_12257__$1;
(statearr_12259_12300[(2)] = inst_12193);

(statearr_12259_12300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (20))){
var inst_12219 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12219)){
var statearr_12260_12301 = state_12257__$1;
(statearr_12260_12301[(1)] = (22));

} else {
var statearr_12261_12302 = state_12257__$1;
(statearr_12261_12302[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (27))){
var inst_12231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12232 = figwheel.client.heads_up.display_warning.call(null,inst_12231);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(30),inst_12232);
} else {
if((state_val_12258 === (1))){
var inst_12181 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12181)){
var statearr_12262_12303 = state_12257__$1;
(statearr_12262_12303[(1)] = (2));

} else {
var statearr_12263_12304 = state_12257__$1;
(statearr_12263_12304[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (24))){
var inst_12247 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12264_12305 = state_12257__$1;
(statearr_12264_12305[(2)] = inst_12247);

(statearr_12264_12305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (4))){
var inst_12255 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12257__$1,inst_12255);
} else {
if((state_val_12258 === (15))){
var inst_12208 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12209 = figwheel.client.format_messages.call(null,inst_12208);
var inst_12210 = figwheel.client.heads_up.display_error.call(null,inst_12209);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(18),inst_12210);
} else {
if((state_val_12258 === (21))){
var inst_12249 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12265_12306 = state_12257__$1;
(statearr_12265_12306[(2)] = inst_12249);

(statearr_12265_12306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (31))){
var inst_12238 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(34),inst_12238);
} else {
if((state_val_12258 === (32))){
var state_12257__$1 = state_12257;
var statearr_12266_12307 = state_12257__$1;
(statearr_12266_12307[(2)] = null);

(statearr_12266_12307[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (33))){
var inst_12243 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12267_12308 = state_12257__$1;
(statearr_12267_12308[(2)] = inst_12243);

(statearr_12267_12308[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (13))){
var inst_12199 = (state_12257[(2)]);
var inst_12200 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12201 = figwheel.client.format_messages.call(null,inst_12200);
var inst_12202 = figwheel.client.heads_up.display_error.call(null,inst_12201);
var state_12257__$1 = (function (){var statearr_12268 = state_12257;
(statearr_12268[(7)] = inst_12199);

return statearr_12268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(14),inst_12202);
} else {
if((state_val_12258 === (22))){
var inst_12221 = figwheel.client.heads_up.clear.call(null);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(25),inst_12221);
} else {
if((state_val_12258 === (29))){
var inst_12245 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12269_12309 = state_12257__$1;
(statearr_12269_12309[(2)] = inst_12245);

(statearr_12269_12309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (6))){
var inst_12189 = figwheel.client.heads_up.clear.call(null);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(9),inst_12189);
} else {
if((state_val_12258 === (28))){
var inst_12236 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12236)){
var statearr_12270_12310 = state_12257__$1;
(statearr_12270_12310[(1)] = (31));

} else {
var statearr_12271_12311 = state_12257__$1;
(statearr_12271_12311[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (25))){
var inst_12223 = (state_12257[(2)]);
var inst_12224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12225 = figwheel.client.heads_up.display_warning.call(null,inst_12224);
var state_12257__$1 = (function (){var statearr_12272 = state_12257;
(statearr_12272[(8)] = inst_12223);

return statearr_12272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(26),inst_12225);
} else {
if((state_val_12258 === (34))){
var inst_12240 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12273_12312 = state_12257__$1;
(statearr_12273_12312[(2)] = inst_12240);

(statearr_12273_12312[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (17))){
var inst_12251 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12274_12313 = state_12257__$1;
(statearr_12274_12313[(2)] = inst_12251);

(statearr_12274_12313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (3))){
var inst_12195 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12195)){
var statearr_12275_12314 = state_12257__$1;
(statearr_12275_12314[(1)] = (10));

} else {
var statearr_12276_12315 = state_12257__$1;
(statearr_12276_12315[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (12))){
var inst_12253 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12277_12316 = state_12257__$1;
(statearr_12277_12316[(2)] = inst_12253);

(statearr_12277_12316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (2))){
var inst_12183 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12183)){
var statearr_12278_12317 = state_12257__$1;
(statearr_12278_12317[(1)] = (5));

} else {
var statearr_12279_12318 = state_12257__$1;
(statearr_12279_12318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (23))){
var inst_12229 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12229)){
var statearr_12280_12319 = state_12257__$1;
(statearr_12280_12319[(1)] = (27));

} else {
var statearr_12281_12320 = state_12257__$1;
(statearr_12281_12320[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (19))){
var inst_12216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12217 = figwheel.client.heads_up.append_message.call(null,inst_12216);
var state_12257__$1 = state_12257;
var statearr_12282_12321 = state_12257__$1;
(statearr_12282_12321[(2)] = inst_12217);

(statearr_12282_12321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (11))){
var inst_12206 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12206)){
var statearr_12283_12322 = state_12257__$1;
(statearr_12283_12322[(1)] = (15));

} else {
var statearr_12284_12323 = state_12257__$1;
(statearr_12284_12323[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (9))){
var inst_12191 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12285_12324 = state_12257__$1;
(statearr_12285_12324[(2)] = inst_12191);

(statearr_12285_12324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (5))){
var inst_12185 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(8),inst_12185);
} else {
if((state_val_12258 === (14))){
var inst_12204 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12286_12325 = state_12257__$1;
(statearr_12286_12325[(2)] = inst_12204);

(statearr_12286_12325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (26))){
var inst_12227 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12287_12326 = state_12257__$1;
(statearr_12287_12326[(2)] = inst_12227);

(statearr_12287_12326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (16))){
var inst_12214 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12214)){
var statearr_12288_12327 = state_12257__$1;
(statearr_12288_12327[(1)] = (19));

} else {
var statearr_12289_12328 = state_12257__$1;
(statearr_12289_12328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (30))){
var inst_12234 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12290_12329 = state_12257__$1;
(statearr_12290_12329[(2)] = inst_12234);

(statearr_12290_12329[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (10))){
var inst_12197 = figwheel.client.heads_up.clear.call(null);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(13),inst_12197);
} else {
if((state_val_12258 === (18))){
var inst_12212 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12291_12330 = state_12257__$1;
(statearr_12291_12330[(2)] = inst_12212);

(statearr_12291_12330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (8))){
var inst_12187 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12292_12331 = state_12257__$1;
(statearr_12292_12331[(2)] = inst_12187);

(statearr_12292_12331[(1)] = (7));


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
});})(c__7080__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7018__auto__,c__7080__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto____0 = (function (){
var statearr_12296 = [null,null,null,null,null,null,null,null,null];
(statearr_12296[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto__);

(statearr_12296[(1)] = (1));

return statearr_12296;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto____1 = (function (state_12257){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_12257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e12297){if((e12297 instanceof Object)){
var ex__7022__auto__ = e12297;
var statearr_12298_12332 = state_12257;
(statearr_12298_12332[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12333 = state_12257;
state_12257 = G__12333;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto__ = function(state_12257){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto____1.call(this,state_12257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__,msg_hist,msg_names,msg))
})();
var state__7082__auto__ = (function (){var statearr_12299 = f__7081__auto__.call(null);
(statearr_12299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_12299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__,msg_hist,msg_names,msg))
);

return c__7080__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7080__auto___12396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12396,ch){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto___12396,ch){
return (function (state_12379){
var state_val_12380 = (state_12379[(1)]);
if((state_val_12380 === (8))){
var inst_12371 = (state_12379[(2)]);
var state_12379__$1 = (function (){var statearr_12381 = state_12379;
(statearr_12381[(7)] = inst_12371);

return statearr_12381;
})();
var statearr_12382_12397 = state_12379__$1;
(statearr_12382_12397[(2)] = null);

(statearr_12382_12397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (7))){
var inst_12375 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12383_12398 = state_12379__$1;
(statearr_12383_12398[(2)] = inst_12375);

(statearr_12383_12398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (6))){
var state_12379__$1 = state_12379;
var statearr_12384_12399 = state_12379__$1;
(statearr_12384_12399[(2)] = null);

(statearr_12384_12399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (5))){
var inst_12367 = (state_12379[(8)]);
var inst_12369 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_12367);
var state_12379__$1 = state_12379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12379__$1,(8),inst_12369);
} else {
if((state_val_12380 === (4))){
var inst_12367 = (state_12379[(8)]);
var inst_12367__$1 = (state_12379[(2)]);
var state_12379__$1 = (function (){var statearr_12385 = state_12379;
(statearr_12385[(8)] = inst_12367__$1);

return statearr_12385;
})();
if(cljs.core.truth_(inst_12367__$1)){
var statearr_12386_12400 = state_12379__$1;
(statearr_12386_12400[(1)] = (5));

} else {
var statearr_12387_12401 = state_12379__$1;
(statearr_12387_12401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (3))){
var inst_12377 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12379__$1,inst_12377);
} else {
if((state_val_12380 === (2))){
var state_12379__$1 = state_12379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12379__$1,(4),ch);
} else {
if((state_val_12380 === (1))){
var state_12379__$1 = state_12379;
var statearr_12388_12402 = state_12379__$1;
(statearr_12388_12402[(2)] = null);

(statearr_12388_12402[(1)] = (2));


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
});})(c__7080__auto___12396,ch))
;
return ((function (switch__7018__auto__,c__7080__auto___12396,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7019__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7019__auto____0 = (function (){
var statearr_12392 = [null,null,null,null,null,null,null,null,null];
(statearr_12392[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7019__auto__);

(statearr_12392[(1)] = (1));

return statearr_12392;
});
var figwheel$client$heads_up_plugin_$_state_machine__7019__auto____1 = (function (state_12379){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_12379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e12393){if((e12393 instanceof Object)){
var ex__7022__auto__ = e12393;
var statearr_12394_12403 = state_12379;
(statearr_12394_12403[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12404 = state_12379;
state_12379 = G__12404;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7019__auto__ = function(state_12379){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7019__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7019__auto____1.call(this,state_12379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7019__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7019__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto___12396,ch))
})();
var state__7082__auto__ = (function (){var statearr_12395 = f__7081__auto__.call(null);
(statearr_12395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12396);

return statearr_12395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12396,ch))
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
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7018__auto__ = ((function (c__7080__auto__){
return (function (state_12425){
var state_val_12426 = (state_12425[(1)]);
if((state_val_12426 === (2))){
var inst_12422 = (state_12425[(2)]);
var inst_12423 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12425__$1 = (function (){var statearr_12427 = state_12425;
(statearr_12427[(7)] = inst_12422);

return statearr_12427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12425__$1,inst_12423);
} else {
if((state_val_12426 === (1))){
var inst_12420 = cljs.core.async.timeout.call(null,(3000));
var state_12425__$1 = state_12425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12425__$1,(2),inst_12420);
} else {
return null;
}
}
});})(c__7080__auto__))
;
return ((function (switch__7018__auto__,c__7080__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7019__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7019__auto____0 = (function (){
var statearr_12431 = [null,null,null,null,null,null,null,null];
(statearr_12431[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7019__auto__);

(statearr_12431[(1)] = (1));

return statearr_12431;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7019__auto____1 = (function (state_12425){
while(true){
var ret_value__7020__auto__ = (function (){try{while(true){
var result__7021__auto__ = switch__7018__auto__.call(null,state_12425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7021__auto__;
}
break;
}
}catch (e12432){if((e12432 instanceof Object)){
var ex__7022__auto__ = e12432;
var statearr_12433_12435 = state_12425;
(statearr_12433_12435[(5)] = ex__7022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12436 = state_12425;
state_12425 = G__12436;
continue;
} else {
return ret_value__7020__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7019__auto__ = function(state_12425){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7019__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7019__auto____1.call(this,state_12425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7019__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7019__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7019__auto__;
})()
;})(switch__7018__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_12434 = f__7081__auto__.call(null);
(statearr_12434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_12434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj12440 = {"detail":url};
return obj12440;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12441){
var map__12447 = p__12441;
var map__12447__$1 = ((cljs.core.seq_QMARK_.call(null,map__12447))?cljs.core.apply.call(null,cljs.core.hash_map,map__12447):map__12447);
var ed = map__12447__$1;
var exception_data = cljs.core.get.call(null,map__12447__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__12447__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12448_12452 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12449_12453 = null;
var count__12450_12454 = (0);
var i__12451_12455 = (0);
while(true){
if((i__12451_12455 < count__12450_12454)){
var msg_12456 = cljs.core._nth.call(null,chunk__12449_12453,i__12451_12455);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12456);

var G__12457 = seq__12448_12452;
var G__12458 = chunk__12449_12453;
var G__12459 = count__12450_12454;
var G__12460 = (i__12451_12455 + (1));
seq__12448_12452 = G__12457;
chunk__12449_12453 = G__12458;
count__12450_12454 = G__12459;
i__12451_12455 = G__12460;
continue;
} else {
var temp__4126__auto___12461 = cljs.core.seq.call(null,seq__12448_12452);
if(temp__4126__auto___12461){
var seq__12448_12462__$1 = temp__4126__auto___12461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12448_12462__$1)){
var c__4884__auto___12463 = cljs.core.chunk_first.call(null,seq__12448_12462__$1);
var G__12464 = cljs.core.chunk_rest.call(null,seq__12448_12462__$1);
var G__12465 = c__4884__auto___12463;
var G__12466 = cljs.core.count.call(null,c__4884__auto___12463);
var G__12467 = (0);
seq__12448_12452 = G__12464;
chunk__12449_12453 = G__12465;
count__12450_12454 = G__12466;
i__12451_12455 = G__12467;
continue;
} else {
var msg_12468 = cljs.core.first.call(null,seq__12448_12462__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12468);

var G__12469 = cljs.core.next.call(null,seq__12448_12462__$1);
var G__12470 = null;
var G__12471 = (0);
var G__12472 = (0);
seq__12448_12452 = G__12469;
chunk__12449_12453 = G__12470;
count__12450_12454 = G__12471;
i__12451_12455 = G__12472;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12473){
var map__12475 = p__12473;
var map__12475__$1 = ((cljs.core.seq_QMARK_.call(null,map__12475))?cljs.core.apply.call(null,cljs.core.hash_map,map__12475):map__12475);
var w = map__12475__$1;
var message = cljs.core.get.call(null,map__12475__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__12482 = cljs.core.seq.call(null,plugins);
var chunk__12483 = null;
var count__12484 = (0);
var i__12485 = (0);
while(true){
if((i__12485 < count__12484)){
var vec__12486 = cljs.core._nth.call(null,chunk__12483,i__12485);
var k = cljs.core.nth.call(null,vec__12486,(0),null);
var plugin = cljs.core.nth.call(null,vec__12486,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12488 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12482,chunk__12483,count__12484,i__12485,pl_12488,vec__12486,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12488.call(null,msg_hist);
});})(seq__12482,chunk__12483,count__12484,i__12485,pl_12488,vec__12486,k,plugin))
);
} else {
}

var G__12489 = seq__12482;
var G__12490 = chunk__12483;
var G__12491 = count__12484;
var G__12492 = (i__12485 + (1));
seq__12482 = G__12489;
chunk__12483 = G__12490;
count__12484 = G__12491;
i__12485 = G__12492;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12482);
if(temp__4126__auto__){
var seq__12482__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12482__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__12482__$1);
var G__12493 = cljs.core.chunk_rest.call(null,seq__12482__$1);
var G__12494 = c__4884__auto__;
var G__12495 = cljs.core.count.call(null,c__4884__auto__);
var G__12496 = (0);
seq__12482 = G__12493;
chunk__12483 = G__12494;
count__12484 = G__12495;
i__12485 = G__12496;
continue;
} else {
var vec__12487 = cljs.core.first.call(null,seq__12482__$1);
var k = cljs.core.nth.call(null,vec__12487,(0),null);
var plugin = cljs.core.nth.call(null,vec__12487,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12497 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12482,chunk__12483,count__12484,i__12485,pl_12497,vec__12487,k,plugin,seq__12482__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12497.call(null,msg_hist);
});})(seq__12482,chunk__12483,count__12484,i__12485,pl_12497,vec__12487,k,plugin,seq__12482__$1,temp__4126__auto__))
);
} else {
}

var G__12498 = cljs.core.next.call(null,seq__12482__$1);
var G__12499 = null;
var G__12500 = (0);
var G__12501 = (0);
seq__12482 = G__12498;
chunk__12483 = G__12499;
count__12484 = G__12500;
i__12485 = G__12501;
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
var G__12503 = arguments.length;
switch (G__12503) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__12506){
var map__12507 = p__12506;
var map__12507__$1 = ((cljs.core.seq_QMARK_.call(null,map__12507))?cljs.core.apply.call(null,cljs.core.hash_map,map__12507):map__12507);
var opts = map__12507__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq12505){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12505));
});

//# sourceMappingURL=client.js.map
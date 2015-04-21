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
var G__31077__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31078__i = 0, G__31078__a = new Array(arguments.length -  0);
while (G__31078__i < G__31078__a.length) {G__31078__a[G__31078__i] = arguments[G__31078__i + 0]; ++G__31078__i;}
  args = new cljs.core.IndexedSeq(G__31078__a,0);
} 
return G__31077__delegate.call(this,args);};
G__31077.cljs$lang$maxFixedArity = 0;
G__31077.cljs$lang$applyTo = (function (arglist__31079){
var args = cljs.core.seq(arglist__31079);
return G__31077__delegate(args);
});
G__31077.cljs$core$IFn$_invoke$arity$variadic = G__31077__delegate;
return G__31077;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31080){
var map__31082 = p__31080;
var map__31082__$1 = ((cljs.core.seq_QMARK_.call(null,map__31082))?cljs.core.apply.call(null,cljs.core.hash_map,map__31082):map__31082);
var class$ = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24926__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24914__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24914__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24914__auto__;
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
var c__28065__auto___31211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___31211,ch){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___31211,ch){
return (function (state_31185){
var state_val_31186 = (state_31185[(1)]);
if((state_val_31186 === (7))){
var inst_31181 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31187_31212 = state_31185__$1;
(statearr_31187_31212[(2)] = inst_31181);

(statearr_31187_31212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (1))){
var state_31185__$1 = state_31185;
var statearr_31188_31213 = state_31185__$1;
(statearr_31188_31213[(2)] = null);

(statearr_31188_31213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (4))){
var inst_31149 = (state_31185[(7)]);
var inst_31149__$1 = (state_31185[(2)]);
var state_31185__$1 = (function (){var statearr_31189 = state_31185;
(statearr_31189[(7)] = inst_31149__$1);

return statearr_31189;
})();
if(cljs.core.truth_(inst_31149__$1)){
var statearr_31190_31214 = state_31185__$1;
(statearr_31190_31214[(1)] = (5));

} else {
var statearr_31191_31215 = state_31185__$1;
(statearr_31191_31215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (13))){
var state_31185__$1 = state_31185;
var statearr_31192_31216 = state_31185__$1;
(statearr_31192_31216[(2)] = null);

(statearr_31192_31216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (6))){
var state_31185__$1 = state_31185;
var statearr_31193_31217 = state_31185__$1;
(statearr_31193_31217[(2)] = null);

(statearr_31193_31217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (3))){
var inst_31183 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31185__$1,inst_31183);
} else {
if((state_val_31186 === (12))){
var inst_31156 = (state_31185[(8)]);
var inst_31169 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31156);
var inst_31170 = cljs.core.first.call(null,inst_31169);
var inst_31171 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31170);
var inst_31172 = console.warn("Figwheel: Not loading code with warnings - ",inst_31171);
var state_31185__$1 = state_31185;
var statearr_31194_31218 = state_31185__$1;
(statearr_31194_31218[(2)] = inst_31172);

(statearr_31194_31218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (2))){
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(4),ch);
} else {
if((state_val_31186 === (11))){
var inst_31165 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31195_31219 = state_31185__$1;
(statearr_31195_31219[(2)] = inst_31165);

(statearr_31195_31219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (9))){
var inst_31155 = (state_31185[(9)]);
var inst_31167 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31155,opts);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31167)){
var statearr_31196_31220 = state_31185__$1;
(statearr_31196_31220[(1)] = (12));

} else {
var statearr_31197_31221 = state_31185__$1;
(statearr_31197_31221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (5))){
var inst_31155 = (state_31185[(9)]);
var inst_31149 = (state_31185[(7)]);
var inst_31151 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31152 = (new cljs.core.PersistentArrayMap(null,2,inst_31151,null));
var inst_31153 = (new cljs.core.PersistentHashSet(null,inst_31152,null));
var inst_31154 = figwheel.client.focus_msgs.call(null,inst_31153,inst_31149);
var inst_31155__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31154);
var inst_31156 = cljs.core.first.call(null,inst_31154);
var inst_31157 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31155__$1,opts);
var state_31185__$1 = (function (){var statearr_31198 = state_31185;
(statearr_31198[(9)] = inst_31155__$1);

(statearr_31198[(8)] = inst_31156);

return statearr_31198;
})();
if(cljs.core.truth_(inst_31157)){
var statearr_31199_31222 = state_31185__$1;
(statearr_31199_31222[(1)] = (8));

} else {
var statearr_31200_31223 = state_31185__$1;
(statearr_31200_31223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (14))){
var inst_31175 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31201_31224 = state_31185__$1;
(statearr_31201_31224[(2)] = inst_31175);

(statearr_31201_31224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (10))){
var inst_31177 = (state_31185[(2)]);
var state_31185__$1 = (function (){var statearr_31202 = state_31185;
(statearr_31202[(10)] = inst_31177);

return statearr_31202;
})();
var statearr_31203_31225 = state_31185__$1;
(statearr_31203_31225[(2)] = null);

(statearr_31203_31225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (8))){
var inst_31156 = (state_31185[(8)]);
var inst_31159 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31160 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31156);
var inst_31161 = cljs.core.async.timeout.call(null,(1000));
var inst_31162 = [inst_31160,inst_31161];
var inst_31163 = (new cljs.core.PersistentVector(null,2,(5),inst_31159,inst_31162,null));
var state_31185__$1 = state_31185;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31185__$1,(11),inst_31163);
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
});})(c__28065__auto___31211,ch))
;
return ((function (switch__28003__auto__,c__28065__auto___31211,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28004__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28004__auto____0 = (function (){
var statearr_31207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31207[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28004__auto__);

(statearr_31207[(1)] = (1));

return statearr_31207;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28004__auto____1 = (function (state_31185){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_31185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e31208){if((e31208 instanceof Object)){
var ex__28007__auto__ = e31208;
var statearr_31209_31226 = state_31185;
(statearr_31209_31226[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31227 = state_31185;
state_31185 = G__31227;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28004__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28004__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28004__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28004__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___31211,ch))
})();
var state__28067__auto__ = (function (){var statearr_31210 = f__28066__auto__.call(null);
(statearr_31210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___31211);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___31211,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31228_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31228_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_31237 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31230_SHARP_,p2__31229_SHARP_){
return [cljs.core.str(p2__31229_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31237){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_31235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31236 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31235,_STAR_print_newline_STAR_31236,base_path_31237){
return (function() { 
var G__31238__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31239__i = 0, G__31239__a = new Array(arguments.length -  0);
while (G__31239__i < G__31239__a.length) {G__31239__a[G__31239__i] = arguments[G__31239__i + 0]; ++G__31239__i;}
  args = new cljs.core.IndexedSeq(G__31239__a,0);
} 
return G__31238__delegate.call(this,args);};
G__31238.cljs$lang$maxFixedArity = 0;
G__31238.cljs$lang$applyTo = (function (arglist__31240){
var args = cljs.core.seq(arglist__31240);
return G__31238__delegate(args);
});
G__31238.cljs$core$IFn$_invoke$arity$variadic = G__31238__delegate;
return G__31238;
})()
;})(_STAR_print_fn_STAR_31235,_STAR_print_newline_STAR_31236,base_path_31237))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31236;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31235;
}}catch (e31234){if((e31234 instanceof Error)){
var e = e31234;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31237], null));
} else {
var e = e31234;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31237))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31241){
var map__31246 = p__31241;
var map__31246__$1 = ((cljs.core.seq_QMARK_.call(null,map__31246))?cljs.core.apply.call(null,cljs.core.hash_map,map__31246):map__31246);
var opts = map__31246__$1;
var build_id = cljs.core.get.call(null,map__31246__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31246,map__31246__$1,opts,build_id){
return (function (p__31247){
var vec__31248 = p__31247;
var map__31249 = cljs.core.nth.call(null,vec__31248,(0),null);
var map__31249__$1 = ((cljs.core.seq_QMARK_.call(null,map__31249))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249):map__31249);
var msg = map__31249__$1;
var msg_name = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31248,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__31248,map__31249,map__31249__$1,msg,msg_name,_,map__31246,map__31246__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31248,map__31249,map__31249__$1,msg,msg_name,_,map__31246,map__31246__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31246,map__31246__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31253){
var vec__31254 = p__31253;
var map__31255 = cljs.core.nth.call(null,vec__31254,(0),null);
var map__31255__$1 = ((cljs.core.seq_QMARK_.call(null,map__31255))?cljs.core.apply.call(null,cljs.core.hash_map,map__31255):map__31255);
var msg = map__31255__$1;
var msg_name = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31254,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31256){
var map__31264 = p__31256;
var map__31264__$1 = ((cljs.core.seq_QMARK_.call(null,map__31264))?cljs.core.apply.call(null,cljs.core.hash_map,map__31264):map__31264);
var on_compile_fail = cljs.core.get.call(null,map__31264__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__31264__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__31264,map__31264__$1,on_compile_fail,on_compile_warning){
return (function (p__31265){
var vec__31266 = p__31265;
var map__31267 = cljs.core.nth.call(null,vec__31266,(0),null);
var map__31267__$1 = ((cljs.core.seq_QMARK_.call(null,map__31267))?cljs.core.apply.call(null,cljs.core.hash_map,map__31267):map__31267);
var msg = map__31267__$1;
var msg_name = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31266,(1));
var pred__31268 = cljs.core._EQ_;
var expr__31269 = msg_name;
if(cljs.core.truth_(pred__31268.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31269))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31268.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31269))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31264,map__31264__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__,msg_hist,msg_names,msg){
return (function (state_31466){
var state_val_31467 = (state_31466[(1)]);
if((state_val_31467 === (7))){
var inst_31402 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31468_31509 = state_31466__$1;
(statearr_31468_31509[(2)] = inst_31402);

(statearr_31468_31509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (20))){
var inst_31428 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31428)){
var statearr_31469_31510 = state_31466__$1;
(statearr_31469_31510[(1)] = (22));

} else {
var statearr_31470_31511 = state_31466__$1;
(statearr_31470_31511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (27))){
var inst_31440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31441 = figwheel.client.heads_up.display_warning.call(null,inst_31440);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(30),inst_31441);
} else {
if((state_val_31467 === (1))){
var inst_31390 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31390)){
var statearr_31471_31512 = state_31466__$1;
(statearr_31471_31512[(1)] = (2));

} else {
var statearr_31472_31513 = state_31466__$1;
(statearr_31472_31513[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (24))){
var inst_31456 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31473_31514 = state_31466__$1;
(statearr_31473_31514[(2)] = inst_31456);

(statearr_31473_31514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (4))){
var inst_31464 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31466__$1,inst_31464);
} else {
if((state_val_31467 === (15))){
var inst_31417 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31418 = figwheel.client.format_messages.call(null,inst_31417);
var inst_31419 = figwheel.client.heads_up.display_error.call(null,inst_31418);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(18),inst_31419);
} else {
if((state_val_31467 === (21))){
var inst_31458 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31474_31515 = state_31466__$1;
(statearr_31474_31515[(2)] = inst_31458);

(statearr_31474_31515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (31))){
var inst_31447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(34),inst_31447);
} else {
if((state_val_31467 === (32))){
var state_31466__$1 = state_31466;
var statearr_31475_31516 = state_31466__$1;
(statearr_31475_31516[(2)] = null);

(statearr_31475_31516[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (33))){
var inst_31452 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31476_31517 = state_31466__$1;
(statearr_31476_31517[(2)] = inst_31452);

(statearr_31476_31517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (13))){
var inst_31408 = (state_31466[(2)]);
var inst_31409 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31410 = figwheel.client.format_messages.call(null,inst_31409);
var inst_31411 = figwheel.client.heads_up.display_error.call(null,inst_31410);
var state_31466__$1 = (function (){var statearr_31477 = state_31466;
(statearr_31477[(7)] = inst_31408);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(14),inst_31411);
} else {
if((state_val_31467 === (22))){
var inst_31430 = figwheel.client.heads_up.clear.call(null);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(25),inst_31430);
} else {
if((state_val_31467 === (29))){
var inst_31454 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31478_31518 = state_31466__$1;
(statearr_31478_31518[(2)] = inst_31454);

(statearr_31478_31518[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (6))){
var inst_31398 = figwheel.client.heads_up.clear.call(null);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(9),inst_31398);
} else {
if((state_val_31467 === (28))){
var inst_31445 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31445)){
var statearr_31479_31519 = state_31466__$1;
(statearr_31479_31519[(1)] = (31));

} else {
var statearr_31480_31520 = state_31466__$1;
(statearr_31480_31520[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (25))){
var inst_31432 = (state_31466[(2)]);
var inst_31433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31434 = figwheel.client.heads_up.display_warning.call(null,inst_31433);
var state_31466__$1 = (function (){var statearr_31481 = state_31466;
(statearr_31481[(8)] = inst_31432);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(26),inst_31434);
} else {
if((state_val_31467 === (34))){
var inst_31449 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31482_31521 = state_31466__$1;
(statearr_31482_31521[(2)] = inst_31449);

(statearr_31482_31521[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (17))){
var inst_31460 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31483_31522 = state_31466__$1;
(statearr_31483_31522[(2)] = inst_31460);

(statearr_31483_31522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (3))){
var inst_31404 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31404)){
var statearr_31484_31523 = state_31466__$1;
(statearr_31484_31523[(1)] = (10));

} else {
var statearr_31485_31524 = state_31466__$1;
(statearr_31485_31524[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (12))){
var inst_31462 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31486_31525 = state_31466__$1;
(statearr_31486_31525[(2)] = inst_31462);

(statearr_31486_31525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (2))){
var inst_31392 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31392)){
var statearr_31487_31526 = state_31466__$1;
(statearr_31487_31526[(1)] = (5));

} else {
var statearr_31488_31527 = state_31466__$1;
(statearr_31488_31527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (23))){
var inst_31438 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31438)){
var statearr_31489_31528 = state_31466__$1;
(statearr_31489_31528[(1)] = (27));

} else {
var statearr_31490_31529 = state_31466__$1;
(statearr_31490_31529[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (19))){
var inst_31425 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31426 = figwheel.client.heads_up.append_message.call(null,inst_31425);
var state_31466__$1 = state_31466;
var statearr_31491_31530 = state_31466__$1;
(statearr_31491_31530[(2)] = inst_31426);

(statearr_31491_31530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (11))){
var inst_31415 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31415)){
var statearr_31492_31531 = state_31466__$1;
(statearr_31492_31531[(1)] = (15));

} else {
var statearr_31493_31532 = state_31466__$1;
(statearr_31493_31532[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (9))){
var inst_31400 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31494_31533 = state_31466__$1;
(statearr_31494_31533[(2)] = inst_31400);

(statearr_31494_31533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (5))){
var inst_31394 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(8),inst_31394);
} else {
if((state_val_31467 === (14))){
var inst_31413 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31495_31534 = state_31466__$1;
(statearr_31495_31534[(2)] = inst_31413);

(statearr_31495_31534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (26))){
var inst_31436 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31496_31535 = state_31466__$1;
(statearr_31496_31535[(2)] = inst_31436);

(statearr_31496_31535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (16))){
var inst_31423 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31423)){
var statearr_31497_31536 = state_31466__$1;
(statearr_31497_31536[(1)] = (19));

} else {
var statearr_31498_31537 = state_31466__$1;
(statearr_31498_31537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (30))){
var inst_31443 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31499_31538 = state_31466__$1;
(statearr_31499_31538[(2)] = inst_31443);

(statearr_31499_31538[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (10))){
var inst_31406 = figwheel.client.heads_up.clear.call(null);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31466__$1,(13),inst_31406);
} else {
if((state_val_31467 === (18))){
var inst_31421 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31500_31539 = state_31466__$1;
(statearr_31500_31539[(2)] = inst_31421);

(statearr_31500_31539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31467 === (8))){
var inst_31396 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31501_31540 = state_31466__$1;
(statearr_31501_31540[(2)] = inst_31396);

(statearr_31501_31540[(1)] = (7));


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
});})(c__28065__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28003__auto__,c__28065__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto____0 = (function (){
var statearr_31505 = [null,null,null,null,null,null,null,null,null];
(statearr_31505[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto__);

(statearr_31505[(1)] = (1));

return statearr_31505;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto____1 = (function (state_31466){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_31466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e31506){if((e31506 instanceof Object)){
var ex__28007__auto__ = e31506;
var statearr_31507_31541 = state_31466;
(statearr_31507_31541[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31542 = state_31466;
state_31466 = G__31542;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto__ = function(state_31466){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto____1.call(this,state_31466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__,msg_hist,msg_names,msg))
})();
var state__28067__auto__ = (function (){var statearr_31508 = f__28066__auto__.call(null);
(statearr_31508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_31508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__,msg_hist,msg_names,msg))
);

return c__28065__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28065__auto___31605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto___31605,ch){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto___31605,ch){
return (function (state_31588){
var state_val_31589 = (state_31588[(1)]);
if((state_val_31589 === (8))){
var inst_31580 = (state_31588[(2)]);
var state_31588__$1 = (function (){var statearr_31590 = state_31588;
(statearr_31590[(7)] = inst_31580);

return statearr_31590;
})();
var statearr_31591_31606 = state_31588__$1;
(statearr_31591_31606[(2)] = null);

(statearr_31591_31606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (7))){
var inst_31584 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31592_31607 = state_31588__$1;
(statearr_31592_31607[(2)] = inst_31584);

(statearr_31592_31607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (6))){
var state_31588__$1 = state_31588;
var statearr_31593_31608 = state_31588__$1;
(statearr_31593_31608[(2)] = null);

(statearr_31593_31608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (5))){
var inst_31576 = (state_31588[(8)]);
var inst_31578 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31576);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(8),inst_31578);
} else {
if((state_val_31589 === (4))){
var inst_31576 = (state_31588[(8)]);
var inst_31576__$1 = (state_31588[(2)]);
var state_31588__$1 = (function (){var statearr_31594 = state_31588;
(statearr_31594[(8)] = inst_31576__$1);

return statearr_31594;
})();
if(cljs.core.truth_(inst_31576__$1)){
var statearr_31595_31609 = state_31588__$1;
(statearr_31595_31609[(1)] = (5));

} else {
var statearr_31596_31610 = state_31588__$1;
(statearr_31596_31610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (3))){
var inst_31586 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31588__$1,inst_31586);
} else {
if((state_val_31589 === (2))){
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(4),ch);
} else {
if((state_val_31589 === (1))){
var state_31588__$1 = state_31588;
var statearr_31597_31611 = state_31588__$1;
(statearr_31597_31611[(2)] = null);

(statearr_31597_31611[(1)] = (2));


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
});})(c__28065__auto___31605,ch))
;
return ((function (switch__28003__auto__,c__28065__auto___31605,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28004__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28004__auto____0 = (function (){
var statearr_31601 = [null,null,null,null,null,null,null,null,null];
(statearr_31601[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28004__auto__);

(statearr_31601[(1)] = (1));

return statearr_31601;
});
var figwheel$client$heads_up_plugin_$_state_machine__28004__auto____1 = (function (state_31588){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_31588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e31602){if((e31602 instanceof Object)){
var ex__28007__auto__ = e31602;
var statearr_31603_31612 = state_31588;
(statearr_31603_31612[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31613 = state_31588;
state_31588 = G__31613;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28004__auto__ = function(state_31588){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28004__auto____1.call(this,state_31588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28004__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28004__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto___31605,ch))
})();
var state__28067__auto__ = (function (){var statearr_31604 = f__28066__auto__.call(null);
(statearr_31604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto___31605);

return statearr_31604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto___31605,ch))
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
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__){
return (function (state_31634){
var state_val_31635 = (state_31634[(1)]);
if((state_val_31635 === (2))){
var inst_31631 = (state_31634[(2)]);
var inst_31632 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31634__$1 = (function (){var statearr_31636 = state_31634;
(statearr_31636[(7)] = inst_31631);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31634__$1,inst_31632);
} else {
if((state_val_31635 === (1))){
var inst_31629 = cljs.core.async.timeout.call(null,(3000));
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31634__$1,(2),inst_31629);
} else {
return null;
}
}
});})(c__28065__auto__))
;
return ((function (switch__28003__auto__,c__28065__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28004__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28004__auto____0 = (function (){
var statearr_31640 = [null,null,null,null,null,null,null,null];
(statearr_31640[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28004__auto__);

(statearr_31640[(1)] = (1));

return statearr_31640;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28004__auto____1 = (function (state_31634){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_31634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e31641){if((e31641 instanceof Object)){
var ex__28007__auto__ = e31641;
var statearr_31642_31644 = state_31634;
(statearr_31642_31644[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31645 = state_31634;
state_31634 = G__31645;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28004__auto__ = function(state_31634){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28004__auto____1.call(this,state_31634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28004__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28004__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__))
})();
var state__28067__auto__ = (function (){var statearr_31643 = f__28066__auto__.call(null);
(statearr_31643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_31643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__))
);

return c__28065__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__24914__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__24914__auto__)){
return ("CustomEvent" in window);
} else {
return and__24914__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31649 = {"detail":url};
return obj31649;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31650){
var map__31656 = p__31650;
var map__31656__$1 = ((cljs.core.seq_QMARK_.call(null,map__31656))?cljs.core.apply.call(null,cljs.core.hash_map,map__31656):map__31656);
var ed = map__31656__$1;
var exception_data = cljs.core.get.call(null,map__31656__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31656__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31657_31661 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31658_31662 = null;
var count__31659_31663 = (0);
var i__31660_31664 = (0);
while(true){
if((i__31660_31664 < count__31659_31663)){
var msg_31665 = cljs.core._nth.call(null,chunk__31658_31662,i__31660_31664);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31665);

var G__31666 = seq__31657_31661;
var G__31667 = chunk__31658_31662;
var G__31668 = count__31659_31663;
var G__31669 = (i__31660_31664 + (1));
seq__31657_31661 = G__31666;
chunk__31658_31662 = G__31667;
count__31659_31663 = G__31668;
i__31660_31664 = G__31669;
continue;
} else {
var temp__4126__auto___31670 = cljs.core.seq.call(null,seq__31657_31661);
if(temp__4126__auto___31670){
var seq__31657_31671__$1 = temp__4126__auto___31670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31657_31671__$1)){
var c__25711__auto___31672 = cljs.core.chunk_first.call(null,seq__31657_31671__$1);
var G__31673 = cljs.core.chunk_rest.call(null,seq__31657_31671__$1);
var G__31674 = c__25711__auto___31672;
var G__31675 = cljs.core.count.call(null,c__25711__auto___31672);
var G__31676 = (0);
seq__31657_31661 = G__31673;
chunk__31658_31662 = G__31674;
count__31659_31663 = G__31675;
i__31660_31664 = G__31676;
continue;
} else {
var msg_31677 = cljs.core.first.call(null,seq__31657_31671__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31677);

var G__31678 = cljs.core.next.call(null,seq__31657_31671__$1);
var G__31679 = null;
var G__31680 = (0);
var G__31681 = (0);
seq__31657_31661 = G__31678;
chunk__31658_31662 = G__31679;
count__31659_31663 = G__31680;
i__31660_31664 = G__31681;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31682){
var map__31684 = p__31682;
var map__31684__$1 = ((cljs.core.seq_QMARK_.call(null,map__31684))?cljs.core.apply.call(null,cljs.core.hash_map,map__31684):map__31684);
var w = map__31684__$1;
var message = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24914__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24914__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24914__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31691 = cljs.core.seq.call(null,plugins);
var chunk__31692 = null;
var count__31693 = (0);
var i__31694 = (0);
while(true){
if((i__31694 < count__31693)){
var vec__31695 = cljs.core._nth.call(null,chunk__31692,i__31694);
var k = cljs.core.nth.call(null,vec__31695,(0),null);
var plugin = cljs.core.nth.call(null,vec__31695,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31697 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31691,chunk__31692,count__31693,i__31694,pl_31697,vec__31695,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31697.call(null,msg_hist);
});})(seq__31691,chunk__31692,count__31693,i__31694,pl_31697,vec__31695,k,plugin))
);
} else {
}

var G__31698 = seq__31691;
var G__31699 = chunk__31692;
var G__31700 = count__31693;
var G__31701 = (i__31694 + (1));
seq__31691 = G__31698;
chunk__31692 = G__31699;
count__31693 = G__31700;
i__31694 = G__31701;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31691);
if(temp__4126__auto__){
var seq__31691__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31691__$1)){
var c__25711__auto__ = cljs.core.chunk_first.call(null,seq__31691__$1);
var G__31702 = cljs.core.chunk_rest.call(null,seq__31691__$1);
var G__31703 = c__25711__auto__;
var G__31704 = cljs.core.count.call(null,c__25711__auto__);
var G__31705 = (0);
seq__31691 = G__31702;
chunk__31692 = G__31703;
count__31693 = G__31704;
i__31694 = G__31705;
continue;
} else {
var vec__31696 = cljs.core.first.call(null,seq__31691__$1);
var k = cljs.core.nth.call(null,vec__31696,(0),null);
var plugin = cljs.core.nth.call(null,vec__31696,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31706 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31691,chunk__31692,count__31693,i__31694,pl_31706,vec__31696,k,plugin,seq__31691__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31706.call(null,msg_hist);
});})(seq__31691,chunk__31692,count__31693,i__31694,pl_31706,vec__31696,k,plugin,seq__31691__$1,temp__4126__auto__))
);
} else {
}

var G__31707 = cljs.core.next.call(null,seq__31691__$1);
var G__31708 = null;
var G__31709 = (0);
var G__31710 = (0);
seq__31691 = G__31707;
chunk__31692 = G__31708;
count__31693 = G__31709;
i__31694 = G__31710;
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
var G__31712 = arguments.length;
switch (G__31712) {
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
var argseq__25966__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25966__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31715){
var map__31716 = p__31715;
var map__31716__$1 = ((cljs.core.seq_QMARK_.call(null,map__31716))?cljs.core.apply.call(null,cljs.core.hash_map,map__31716):map__31716);
var opts = map__31716__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31714){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31714));
});

//# sourceMappingURL=client.js.map
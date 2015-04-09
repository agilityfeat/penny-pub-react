// Compiled by ClojureScript 0.0-3178 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5139__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5139__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__14380_14388 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__14381_14389 = null;
var count__14382_14390 = (0);
var i__14383_14391 = (0);
while(true){
if((i__14383_14391 < count__14382_14390)){
var k_14392 = cljs.core._nth.call(null,chunk__14381_14389,i__14383_14391);
e.setAttribute(cljs.core.name.call(null,k_14392),cljs.core.get.call(null,attrs,k_14392));

var G__14393 = seq__14380_14388;
var G__14394 = chunk__14381_14389;
var G__14395 = count__14382_14390;
var G__14396 = (i__14383_14391 + (1));
seq__14380_14388 = G__14393;
chunk__14381_14389 = G__14394;
count__14382_14390 = G__14395;
i__14383_14391 = G__14396;
continue;
} else {
var temp__4126__auto___14397 = cljs.core.seq.call(null,seq__14380_14388);
if(temp__4126__auto___14397){
var seq__14380_14398__$1 = temp__4126__auto___14397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14380_14398__$1)){
var c__4884__auto___14399 = cljs.core.chunk_first.call(null,seq__14380_14398__$1);
var G__14400 = cljs.core.chunk_rest.call(null,seq__14380_14398__$1);
var G__14401 = c__4884__auto___14399;
var G__14402 = cljs.core.count.call(null,c__4884__auto___14399);
var G__14403 = (0);
seq__14380_14388 = G__14400;
chunk__14381_14389 = G__14401;
count__14382_14390 = G__14402;
i__14383_14391 = G__14403;
continue;
} else {
var k_14404 = cljs.core.first.call(null,seq__14380_14398__$1);
e.setAttribute(cljs.core.name.call(null,k_14404),cljs.core.get.call(null,attrs,k_14404));

var G__14405 = cljs.core.next.call(null,seq__14380_14398__$1);
var G__14406 = null;
var G__14407 = (0);
var G__14408 = (0);
seq__14380_14388 = G__14405;
chunk__14381_14389 = G__14406;
count__14382_14390 = G__14407;
i__14383_14391 = G__14408;
continue;
}
} else {
}
}
break;
}

var seq__14384_14409 = cljs.core.seq.call(null,children);
var chunk__14385_14410 = null;
var count__14386_14411 = (0);
var i__14387_14412 = (0);
while(true){
if((i__14387_14412 < count__14386_14411)){
var ch_14413 = cljs.core._nth.call(null,chunk__14385_14410,i__14387_14412);
e.appendChild(ch_14413);

var G__14414 = seq__14384_14409;
var G__14415 = chunk__14385_14410;
var G__14416 = count__14386_14411;
var G__14417 = (i__14387_14412 + (1));
seq__14384_14409 = G__14414;
chunk__14385_14410 = G__14415;
count__14386_14411 = G__14416;
i__14387_14412 = G__14417;
continue;
} else {
var temp__4126__auto___14418 = cljs.core.seq.call(null,seq__14384_14409);
if(temp__4126__auto___14418){
var seq__14384_14419__$1 = temp__4126__auto___14418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14384_14419__$1)){
var c__4884__auto___14420 = cljs.core.chunk_first.call(null,seq__14384_14419__$1);
var G__14421 = cljs.core.chunk_rest.call(null,seq__14384_14419__$1);
var G__14422 = c__4884__auto___14420;
var G__14423 = cljs.core.count.call(null,c__4884__auto___14420);
var G__14424 = (0);
seq__14384_14409 = G__14421;
chunk__14385_14410 = G__14422;
count__14386_14411 = G__14423;
i__14387_14412 = G__14424;
continue;
} else {
var ch_14425 = cljs.core.first.call(null,seq__14384_14419__$1);
e.appendChild(ch_14425);

var G__14426 = cljs.core.next.call(null,seq__14384_14419__$1);
var G__14427 = null;
var G__14428 = (0);
var G__14429 = (0);
seq__14384_14409 = G__14426;
chunk__14385_14410 = G__14427;
count__14386_14411 = G__14428;
i__14387_14412 = G__14429;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq14377){
var G__14378 = cljs.core.first.call(null,seq14377);
var seq14377__$1 = cljs.core.next.call(null,seq14377);
var G__14379 = cljs.core.first.call(null,seq14377__$1);
var seq14377__$2 = cljs.core.next.call(null,seq14377__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__14378,G__14379,seq14377__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4994__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4995__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4996__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4997__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4998__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_14430 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_14430.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_14430.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_14430.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_14430);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__14431,st_map){
var map__14435 = p__14431;
var map__14435__$1 = ((cljs.core.seq_QMARK_.call(null,map__14435))?cljs.core.apply.call(null,cljs.core.hash_map,map__14435):map__14435);
var container_el = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__14435,map__14435__$1,container_el){
return (function (p__14436){
var vec__14437 = p__14436;
var k = cljs.core.nth.call(null,vec__14437,(0),null);
var v = cljs.core.nth.call(null,vec__14437,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__14435,map__14435__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__14438,dom_str){
var map__14440 = p__14438;
var map__14440__$1 = ((cljs.core.seq_QMARK_.call(null,map__14440))?cljs.core.apply.call(null,cljs.core.hash_map,map__14440):map__14440);
var c = map__14440__$1;
var content_area_el = cljs.core.get.call(null,map__14440__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__14441){
var map__14443 = p__14441;
var map__14443__$1 = ((cljs.core.seq_QMARK_.call(null,map__14443))?cljs.core.apply.call(null,cljs.core.hash_map,map__14443):map__14443);
var content_area_el = cljs.core.get.call(null,map__14443__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__){
return (function (state_14485){
var state_val_14486 = (state_14485[(1)]);
if((state_val_14486 === (2))){
var inst_14470 = (state_14485[(7)]);
var inst_14479 = (state_14485[(2)]);
var inst_14480 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_14481 = ["auto"];
var inst_14482 = cljs.core.PersistentHashMap.fromArrays(inst_14480,inst_14481);
var inst_14483 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14470,inst_14482);
var state_14485__$1 = (function (){var statearr_14487 = state_14485;
(statearr_14487[(8)] = inst_14479);

return statearr_14487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14485__$1,inst_14483);
} else {
if((state_val_14486 === (1))){
var inst_14470 = (state_14485[(7)]);
var inst_14470__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14471 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14472 = ["10px","10px","100%","68px","1.0"];
var inst_14473 = cljs.core.PersistentHashMap.fromArrays(inst_14471,inst_14472);
var inst_14474 = cljs.core.merge.call(null,inst_14473,style);
var inst_14475 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14470__$1,inst_14474);
var inst_14476 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14470__$1,msg);
var inst_14477 = cljs.core.async.timeout.call(null,(300));
var state_14485__$1 = (function (){var statearr_14488 = state_14485;
(statearr_14488[(7)] = inst_14470__$1);

(statearr_14488[(9)] = inst_14475);

(statearr_14488[(10)] = inst_14476);

return statearr_14488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14485__$1,(2),inst_14477);
} else {
return null;
}
}
});})(c__8199__auto__))
;
return ((function (switch__8137__auto__,c__8199__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto____0 = (function (){
var statearr_14492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14492[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto__);

(statearr_14492[(1)] = (1));

return statearr_14492;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto____1 = (function (state_14485){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_14485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e14493){if((e14493 instanceof Object)){
var ex__8141__auto__ = e14493;
var statearr_14494_14496 = state_14485;
(statearr_14494_14496[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14497 = state_14485;
state_14485 = G__14497;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto__ = function(state_14485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto____1.call(this,state_14485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__))
})();
var state__8201__auto__ = (function (){var statearr_14495 = f__8200__auto__.call(null);
(statearr_14495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_14495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__))
);

return c__8199__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__14499 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__14499,(0),null);
var ln = cljs.core.nth.call(null,vec__14499,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__14502 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__14502,(0),null);
var file_line = cljs.core.nth.call(null,vec__14502,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__14502,file_name,file_line){
return (function (p1__14500_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__14500_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__14502,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__14504 = figwheel.client.heads_up.ensure_container.call(null);
var map__14504__$1 = ((cljs.core.seq_QMARK_.call(null,map__14504))?cljs.core.apply.call(null,cljs.core.hash_map,map__14504):map__14504);
var content_area_el = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__){
return (function (state_14551){
var state_val_14552 = (state_14551[(1)]);
if((state_val_14552 === (3))){
var inst_14534 = (state_14551[(7)]);
var inst_14548 = (state_14551[(2)]);
var inst_14549 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14534,"");
var state_14551__$1 = (function (){var statearr_14553 = state_14551;
(statearr_14553[(8)] = inst_14548);

return statearr_14553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14551__$1,inst_14549);
} else {
if((state_val_14552 === (2))){
var inst_14534 = (state_14551[(7)]);
var inst_14541 = (state_14551[(2)]);
var inst_14542 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_14543 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_14544 = cljs.core.PersistentHashMap.fromArrays(inst_14542,inst_14543);
var inst_14545 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14534,inst_14544);
var inst_14546 = cljs.core.async.timeout.call(null,(200));
var state_14551__$1 = (function (){var statearr_14554 = state_14551;
(statearr_14554[(9)] = inst_14545);

(statearr_14554[(10)] = inst_14541);

return statearr_14554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14551__$1,(3),inst_14546);
} else {
if((state_val_14552 === (1))){
var inst_14534 = (state_14551[(7)]);
var inst_14534__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14535 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14536 = ["0.0"];
var inst_14537 = cljs.core.PersistentHashMap.fromArrays(inst_14535,inst_14536);
var inst_14538 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14534__$1,inst_14537);
var inst_14539 = cljs.core.async.timeout.call(null,(300));
var state_14551__$1 = (function (){var statearr_14555 = state_14551;
(statearr_14555[(7)] = inst_14534__$1);

(statearr_14555[(11)] = inst_14538);

return statearr_14555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14551__$1,(2),inst_14539);
} else {
return null;
}
}
}
});})(c__8199__auto__))
;
return ((function (switch__8137__auto__,c__8199__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__8138__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__8138__auto____0 = (function (){
var statearr_14559 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14559[(0)] = figwheel$client$heads_up$clear_$_state_machine__8138__auto__);

(statearr_14559[(1)] = (1));

return statearr_14559;
});
var figwheel$client$heads_up$clear_$_state_machine__8138__auto____1 = (function (state_14551){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_14551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e14560){if((e14560 instanceof Object)){
var ex__8141__auto__ = e14560;
var statearr_14561_14563 = state_14551;
(statearr_14561_14563[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14564 = state_14551;
state_14551 = G__14564;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__8138__auto__ = function(state_14551){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__8138__auto____1.call(this,state_14551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__8138__auto____0;
figwheel$client$heads_up$clear_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__8138__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__))
})();
var state__8201__auto__ = (function (){var statearr_14562 = f__8200__auto__.call(null);
(statearr_14562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_14562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__))
);

return c__8199__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__8199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8199__auto__){
return (function (){
var f__8200__auto__ = (function (){var switch__8137__auto__ = ((function (c__8199__auto__){
return (function (state_14596){
var state_val_14597 = (state_14596[(1)]);
if((state_val_14597 === (4))){
var inst_14594 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14596__$1,inst_14594);
} else {
if((state_val_14597 === (3))){
var inst_14591 = (state_14596[(2)]);
var inst_14592 = figwheel.client.heads_up.clear.call(null);
var state_14596__$1 = (function (){var statearr_14598 = state_14596;
(statearr_14598[(7)] = inst_14591);

return statearr_14598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14596__$1,(4),inst_14592);
} else {
if((state_val_14597 === (2))){
var inst_14588 = (state_14596[(2)]);
var inst_14589 = cljs.core.async.timeout.call(null,(400));
var state_14596__$1 = (function (){var statearr_14599 = state_14596;
(statearr_14599[(8)] = inst_14588);

return statearr_14599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14596__$1,(3),inst_14589);
} else {
if((state_val_14597 === (1))){
var inst_14586 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14596__$1,(2),inst_14586);
} else {
return null;
}
}
}
}
});})(c__8199__auto__))
;
return ((function (switch__8137__auto__,c__8199__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto____0 = (function (){
var statearr_14603 = [null,null,null,null,null,null,null,null,null];
(statearr_14603[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto__);

(statearr_14603[(1)] = (1));

return statearr_14603;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto____1 = (function (state_14596){
while(true){
var ret_value__8139__auto__ = (function (){try{while(true){
var result__8140__auto__ = switch__8137__auto__.call(null,state_14596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8140__auto__;
}
break;
}
}catch (e14604){if((e14604 instanceof Object)){
var ex__8141__auto__ = e14604;
var statearr_14605_14607 = state_14596;
(statearr_14605_14607[(5)] = ex__8141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14608 = state_14596;
state_14596 = G__14608;
continue;
} else {
return ret_value__8139__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto__ = function(state_14596){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto____1.call(this,state_14596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__8138__auto__;
})()
;})(switch__8137__auto__,c__8199__auto__))
})();
var state__8201__auto__ = (function (){var statearr_14606 = f__8200__auto__.call(null);
(statearr_14606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8199__auto__);

return statearr_14606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8201__auto__);
});})(c__8199__auto__))
);

return c__8199__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map
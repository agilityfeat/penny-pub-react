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
var seq__20073_20081 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__20074_20082 = null;
var count__20075_20083 = (0);
var i__20076_20084 = (0);
while(true){
if((i__20076_20084 < count__20075_20083)){
var k_20085 = cljs.core._nth.call(null,chunk__20074_20082,i__20076_20084);
e.setAttribute(cljs.core.name.call(null,k_20085),cljs.core.get.call(null,attrs,k_20085));

var G__20086 = seq__20073_20081;
var G__20087 = chunk__20074_20082;
var G__20088 = count__20075_20083;
var G__20089 = (i__20076_20084 + (1));
seq__20073_20081 = G__20086;
chunk__20074_20082 = G__20087;
count__20075_20083 = G__20088;
i__20076_20084 = G__20089;
continue;
} else {
var temp__4126__auto___20090 = cljs.core.seq.call(null,seq__20073_20081);
if(temp__4126__auto___20090){
var seq__20073_20091__$1 = temp__4126__auto___20090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20073_20091__$1)){
var c__4884__auto___20092 = cljs.core.chunk_first.call(null,seq__20073_20091__$1);
var G__20093 = cljs.core.chunk_rest.call(null,seq__20073_20091__$1);
var G__20094 = c__4884__auto___20092;
var G__20095 = cljs.core.count.call(null,c__4884__auto___20092);
var G__20096 = (0);
seq__20073_20081 = G__20093;
chunk__20074_20082 = G__20094;
count__20075_20083 = G__20095;
i__20076_20084 = G__20096;
continue;
} else {
var k_20097 = cljs.core.first.call(null,seq__20073_20091__$1);
e.setAttribute(cljs.core.name.call(null,k_20097),cljs.core.get.call(null,attrs,k_20097));

var G__20098 = cljs.core.next.call(null,seq__20073_20091__$1);
var G__20099 = null;
var G__20100 = (0);
var G__20101 = (0);
seq__20073_20081 = G__20098;
chunk__20074_20082 = G__20099;
count__20075_20083 = G__20100;
i__20076_20084 = G__20101;
continue;
}
} else {
}
}
break;
}

var seq__20077_20102 = cljs.core.seq.call(null,children);
var chunk__20078_20103 = null;
var count__20079_20104 = (0);
var i__20080_20105 = (0);
while(true){
if((i__20080_20105 < count__20079_20104)){
var ch_20106 = cljs.core._nth.call(null,chunk__20078_20103,i__20080_20105);
e.appendChild(ch_20106);

var G__20107 = seq__20077_20102;
var G__20108 = chunk__20078_20103;
var G__20109 = count__20079_20104;
var G__20110 = (i__20080_20105 + (1));
seq__20077_20102 = G__20107;
chunk__20078_20103 = G__20108;
count__20079_20104 = G__20109;
i__20080_20105 = G__20110;
continue;
} else {
var temp__4126__auto___20111 = cljs.core.seq.call(null,seq__20077_20102);
if(temp__4126__auto___20111){
var seq__20077_20112__$1 = temp__4126__auto___20111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20077_20112__$1)){
var c__4884__auto___20113 = cljs.core.chunk_first.call(null,seq__20077_20112__$1);
var G__20114 = cljs.core.chunk_rest.call(null,seq__20077_20112__$1);
var G__20115 = c__4884__auto___20113;
var G__20116 = cljs.core.count.call(null,c__4884__auto___20113);
var G__20117 = (0);
seq__20077_20102 = G__20114;
chunk__20078_20103 = G__20115;
count__20079_20104 = G__20116;
i__20080_20105 = G__20117;
continue;
} else {
var ch_20118 = cljs.core.first.call(null,seq__20077_20112__$1);
e.appendChild(ch_20118);

var G__20119 = cljs.core.next.call(null,seq__20077_20112__$1);
var G__20120 = null;
var G__20121 = (0);
var G__20122 = (0);
seq__20077_20102 = G__20119;
chunk__20078_20103 = G__20120;
count__20079_20104 = G__20121;
i__20080_20105 = G__20122;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq20070){
var G__20071 = cljs.core.first.call(null,seq20070);
var seq20070__$1 = cljs.core.next.call(null,seq20070);
var G__20072 = cljs.core.first.call(null,seq20070__$1);
var seq20070__$2 = cljs.core.next.call(null,seq20070__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__20071,G__20072,seq20070__$2);
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
var el_20123 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_20123.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_20123.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_20123.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_20123);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__20124,st_map){
var map__20128 = p__20124;
var map__20128__$1 = ((cljs.core.seq_QMARK_.call(null,map__20128))?cljs.core.apply.call(null,cljs.core.hash_map,map__20128):map__20128);
var container_el = cljs.core.get.call(null,map__20128__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__20128,map__20128__$1,container_el){
return (function (p__20129){
var vec__20130 = p__20129;
var k = cljs.core.nth.call(null,vec__20130,(0),null);
var v = cljs.core.nth.call(null,vec__20130,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__20128,map__20128__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__20131,dom_str){
var map__20133 = p__20131;
var map__20133__$1 = ((cljs.core.seq_QMARK_.call(null,map__20133))?cljs.core.apply.call(null,cljs.core.hash_map,map__20133):map__20133);
var c = map__20133__$1;
var content_area_el = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__20134){
var map__20136 = p__20134;
var map__20136__$1 = ((cljs.core.seq_QMARK_.call(null,map__20136))?cljs.core.apply.call(null,cljs.core.hash_map,map__20136):map__20136);
var content_area_el = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__){
return (function (state_20178){
var state_val_20179 = (state_20178[(1)]);
if((state_val_20179 === (2))){
var inst_20163 = (state_20178[(7)]);
var inst_20172 = (state_20178[(2)]);
var inst_20173 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_20174 = ["auto"];
var inst_20175 = cljs.core.PersistentHashMap.fromArrays(inst_20173,inst_20174);
var inst_20176 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20163,inst_20175);
var state_20178__$1 = (function (){var statearr_20180 = state_20178;
(statearr_20180[(8)] = inst_20172);

return statearr_20180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20178__$1,inst_20176);
} else {
if((state_val_20179 === (1))){
var inst_20163 = (state_20178[(7)]);
var inst_20163__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_20164 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_20165 = ["10px","10px","100%","68px","1.0"];
var inst_20166 = cljs.core.PersistentHashMap.fromArrays(inst_20164,inst_20165);
var inst_20167 = cljs.core.merge.call(null,inst_20166,style);
var inst_20168 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20163__$1,inst_20167);
var inst_20169 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_20163__$1,msg);
var inst_20170 = cljs.core.async.timeout.call(null,(300));
var state_20178__$1 = (function (){var statearr_20181 = state_20178;
(statearr_20181[(9)] = inst_20168);

(statearr_20181[(10)] = inst_20169);

(statearr_20181[(7)] = inst_20163__$1);

return statearr_20181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20178__$1,(2),inst_20170);
} else {
return null;
}
}
});})(c__8217__auto__))
;
return ((function (switch__8155__auto__,c__8217__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto____0 = (function (){
var statearr_20185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20185[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto__);

(statearr_20185[(1)] = (1));

return statearr_20185;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto____1 = (function (state_20178){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_20178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e20186){if((e20186 instanceof Object)){
var ex__8159__auto__ = e20186;
var statearr_20187_20189 = state_20178;
(statearr_20187_20189[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20190 = state_20178;
state_20178 = G__20190;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto__ = function(state_20178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto____1.call(this,state_20178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__))
})();
var state__8219__auto__ = (function (){var statearr_20188 = f__8218__auto__.call(null);
(statearr_20188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_20188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__))
);

return c__8217__auto__;
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
var vec__20192 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__20192,(0),null);
var ln = cljs.core.nth.call(null,vec__20192,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__20195 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__20195,(0),null);
var file_line = cljs.core.nth.call(null,vec__20195,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__20195,file_name,file_line){
return (function (p1__20193_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__20193_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__20195,file_name,file_line))
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
var map__20197 = figwheel.client.heads_up.ensure_container.call(null);
var map__20197__$1 = ((cljs.core.seq_QMARK_.call(null,map__20197))?cljs.core.apply.call(null,cljs.core.hash_map,map__20197):map__20197);
var content_area_el = cljs.core.get.call(null,map__20197__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__){
return (function (state_20244){
var state_val_20245 = (state_20244[(1)]);
if((state_val_20245 === (3))){
var inst_20227 = (state_20244[(7)]);
var inst_20241 = (state_20244[(2)]);
var inst_20242 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_20227,"");
var state_20244__$1 = (function (){var statearr_20246 = state_20244;
(statearr_20246[(8)] = inst_20241);

return statearr_20246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20244__$1,inst_20242);
} else {
if((state_val_20245 === (2))){
var inst_20227 = (state_20244[(7)]);
var inst_20234 = (state_20244[(2)]);
var inst_20235 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_20236 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_20237 = cljs.core.PersistentHashMap.fromArrays(inst_20235,inst_20236);
var inst_20238 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20227,inst_20237);
var inst_20239 = cljs.core.async.timeout.call(null,(200));
var state_20244__$1 = (function (){var statearr_20247 = state_20244;
(statearr_20247[(9)] = inst_20238);

(statearr_20247[(10)] = inst_20234);

return statearr_20247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20244__$1,(3),inst_20239);
} else {
if((state_val_20245 === (1))){
var inst_20227 = (state_20244[(7)]);
var inst_20227__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_20228 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_20229 = ["0.0"];
var inst_20230 = cljs.core.PersistentHashMap.fromArrays(inst_20228,inst_20229);
var inst_20231 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20227__$1,inst_20230);
var inst_20232 = cljs.core.async.timeout.call(null,(300));
var state_20244__$1 = (function (){var statearr_20248 = state_20244;
(statearr_20248[(11)] = inst_20231);

(statearr_20248[(7)] = inst_20227__$1);

return statearr_20248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20244__$1,(2),inst_20232);
} else {
return null;
}
}
}
});})(c__8217__auto__))
;
return ((function (switch__8155__auto__,c__8217__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__8156__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__8156__auto____0 = (function (){
var statearr_20252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20252[(0)] = figwheel$client$heads_up$clear_$_state_machine__8156__auto__);

(statearr_20252[(1)] = (1));

return statearr_20252;
});
var figwheel$client$heads_up$clear_$_state_machine__8156__auto____1 = (function (state_20244){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_20244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e20253){if((e20253 instanceof Object)){
var ex__8159__auto__ = e20253;
var statearr_20254_20256 = state_20244;
(statearr_20254_20256[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20257 = state_20244;
state_20244 = G__20257;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__8156__auto__ = function(state_20244){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__8156__auto____1.call(this,state_20244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__8156__auto____0;
figwheel$client$heads_up$clear_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__8156__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__))
})();
var state__8219__auto__ = (function (){var statearr_20255 = f__8218__auto__.call(null);
(statearr_20255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_20255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__))
);

return c__8217__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__8217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8217__auto__){
return (function (){
var f__8218__auto__ = (function (){var switch__8155__auto__ = ((function (c__8217__auto__){
return (function (state_20289){
var state_val_20290 = (state_20289[(1)]);
if((state_val_20290 === (4))){
var inst_20287 = (state_20289[(2)]);
var state_20289__$1 = state_20289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20289__$1,inst_20287);
} else {
if((state_val_20290 === (3))){
var inst_20284 = (state_20289[(2)]);
var inst_20285 = figwheel.client.heads_up.clear.call(null);
var state_20289__$1 = (function (){var statearr_20291 = state_20289;
(statearr_20291[(7)] = inst_20284);

return statearr_20291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20289__$1,(4),inst_20285);
} else {
if((state_val_20290 === (2))){
var inst_20281 = (state_20289[(2)]);
var inst_20282 = cljs.core.async.timeout.call(null,(400));
var state_20289__$1 = (function (){var statearr_20292 = state_20289;
(statearr_20292[(8)] = inst_20281);

return statearr_20292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20289__$1,(3),inst_20282);
} else {
if((state_val_20290 === (1))){
var inst_20279 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_20289__$1 = state_20289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20289__$1,(2),inst_20279);
} else {
return null;
}
}
}
}
});})(c__8217__auto__))
;
return ((function (switch__8155__auto__,c__8217__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto____0 = (function (){
var statearr_20296 = [null,null,null,null,null,null,null,null,null];
(statearr_20296[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto__);

(statearr_20296[(1)] = (1));

return statearr_20296;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto____1 = (function (state_20289){
while(true){
var ret_value__8157__auto__ = (function (){try{while(true){
var result__8158__auto__ = switch__8155__auto__.call(null,state_20289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8158__auto__;
}
break;
}
}catch (e20297){if((e20297 instanceof Object)){
var ex__8159__auto__ = e20297;
var statearr_20298_20300 = state_20289;
(statearr_20298_20300[(5)] = ex__8159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20301 = state_20289;
state_20289 = G__20301;
continue;
} else {
return ret_value__8157__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto__ = function(state_20289){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto____1.call(this,state_20289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__8156__auto__;
})()
;})(switch__8155__auto__,c__8217__auto__))
})();
var state__8219__auto__ = (function (){var statearr_20299 = f__8218__auto__.call(null);
(statearr_20299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8217__auto__);

return statearr_20299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8219__auto__);
});})(c__8217__auto__))
);

return c__8217__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map
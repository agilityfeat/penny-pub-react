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
var seq__18037_18045 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__18038_18046 = null;
var count__18039_18047 = (0);
var i__18040_18048 = (0);
while(true){
if((i__18040_18048 < count__18039_18047)){
var k_18049 = cljs.core._nth.call(null,chunk__18038_18046,i__18040_18048);
e.setAttribute(cljs.core.name.call(null,k_18049),cljs.core.get.call(null,attrs,k_18049));

var G__18050 = seq__18037_18045;
var G__18051 = chunk__18038_18046;
var G__18052 = count__18039_18047;
var G__18053 = (i__18040_18048 + (1));
seq__18037_18045 = G__18050;
chunk__18038_18046 = G__18051;
count__18039_18047 = G__18052;
i__18040_18048 = G__18053;
continue;
} else {
var temp__4126__auto___18054 = cljs.core.seq.call(null,seq__18037_18045);
if(temp__4126__auto___18054){
var seq__18037_18055__$1 = temp__4126__auto___18054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18037_18055__$1)){
var c__4884__auto___18056 = cljs.core.chunk_first.call(null,seq__18037_18055__$1);
var G__18057 = cljs.core.chunk_rest.call(null,seq__18037_18055__$1);
var G__18058 = c__4884__auto___18056;
var G__18059 = cljs.core.count.call(null,c__4884__auto___18056);
var G__18060 = (0);
seq__18037_18045 = G__18057;
chunk__18038_18046 = G__18058;
count__18039_18047 = G__18059;
i__18040_18048 = G__18060;
continue;
} else {
var k_18061 = cljs.core.first.call(null,seq__18037_18055__$1);
e.setAttribute(cljs.core.name.call(null,k_18061),cljs.core.get.call(null,attrs,k_18061));

var G__18062 = cljs.core.next.call(null,seq__18037_18055__$1);
var G__18063 = null;
var G__18064 = (0);
var G__18065 = (0);
seq__18037_18045 = G__18062;
chunk__18038_18046 = G__18063;
count__18039_18047 = G__18064;
i__18040_18048 = G__18065;
continue;
}
} else {
}
}
break;
}

var seq__18041_18066 = cljs.core.seq.call(null,children);
var chunk__18042_18067 = null;
var count__18043_18068 = (0);
var i__18044_18069 = (0);
while(true){
if((i__18044_18069 < count__18043_18068)){
var ch_18070 = cljs.core._nth.call(null,chunk__18042_18067,i__18044_18069);
e.appendChild(ch_18070);

var G__18071 = seq__18041_18066;
var G__18072 = chunk__18042_18067;
var G__18073 = count__18043_18068;
var G__18074 = (i__18044_18069 + (1));
seq__18041_18066 = G__18071;
chunk__18042_18067 = G__18072;
count__18043_18068 = G__18073;
i__18044_18069 = G__18074;
continue;
} else {
var temp__4126__auto___18075 = cljs.core.seq.call(null,seq__18041_18066);
if(temp__4126__auto___18075){
var seq__18041_18076__$1 = temp__4126__auto___18075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18041_18076__$1)){
var c__4884__auto___18077 = cljs.core.chunk_first.call(null,seq__18041_18076__$1);
var G__18078 = cljs.core.chunk_rest.call(null,seq__18041_18076__$1);
var G__18079 = c__4884__auto___18077;
var G__18080 = cljs.core.count.call(null,c__4884__auto___18077);
var G__18081 = (0);
seq__18041_18066 = G__18078;
chunk__18042_18067 = G__18079;
count__18043_18068 = G__18080;
i__18044_18069 = G__18081;
continue;
} else {
var ch_18082 = cljs.core.first.call(null,seq__18041_18076__$1);
e.appendChild(ch_18082);

var G__18083 = cljs.core.next.call(null,seq__18041_18076__$1);
var G__18084 = null;
var G__18085 = (0);
var G__18086 = (0);
seq__18041_18066 = G__18083;
chunk__18042_18067 = G__18084;
count__18043_18068 = G__18085;
i__18044_18069 = G__18086;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq18034){
var G__18035 = cljs.core.first.call(null,seq18034);
var seq18034__$1 = cljs.core.next.call(null,seq18034);
var G__18036 = cljs.core.first.call(null,seq18034__$1);
var seq18034__$2 = cljs.core.next.call(null,seq18034__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__18035,G__18036,seq18034__$2);
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
var el_18087 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_18087.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_18087.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_18087.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_18087);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__18088,st_map){
var map__18092 = p__18088;
var map__18092__$1 = ((cljs.core.seq_QMARK_.call(null,map__18092))?cljs.core.apply.call(null,cljs.core.hash_map,map__18092):map__18092);
var container_el = cljs.core.get.call(null,map__18092__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__18092,map__18092__$1,container_el){
return (function (p__18093){
var vec__18094 = p__18093;
var k = cljs.core.nth.call(null,vec__18094,(0),null);
var v = cljs.core.nth.call(null,vec__18094,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__18092,map__18092__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__18095,dom_str){
var map__18097 = p__18095;
var map__18097__$1 = ((cljs.core.seq_QMARK_.call(null,map__18097))?cljs.core.apply.call(null,cljs.core.hash_map,map__18097):map__18097);
var c = map__18097__$1;
var content_area_el = cljs.core.get.call(null,map__18097__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__18098){
var map__18100 = p__18098;
var map__18100__$1 = ((cljs.core.seq_QMARK_.call(null,map__18100))?cljs.core.apply.call(null,cljs.core.hash_map,map__18100):map__18100);
var content_area_el = cljs.core.get.call(null,map__18100__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__){
return (function (state_18142){
var state_val_18143 = (state_18142[(1)]);
if((state_val_18143 === (2))){
var inst_18127 = (state_18142[(7)]);
var inst_18136 = (state_18142[(2)]);
var inst_18137 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_18138 = ["auto"];
var inst_18139 = cljs.core.PersistentHashMap.fromArrays(inst_18137,inst_18138);
var inst_18140 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18127,inst_18139);
var state_18142__$1 = (function (){var statearr_18144 = state_18142;
(statearr_18144[(8)] = inst_18136);

return statearr_18144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18142__$1,inst_18140);
} else {
if((state_val_18143 === (1))){
var inst_18127 = (state_18142[(7)]);
var inst_18127__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_18128 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_18129 = ["10px","10px","100%","68px","1.0"];
var inst_18130 = cljs.core.PersistentHashMap.fromArrays(inst_18128,inst_18129);
var inst_18131 = cljs.core.merge.call(null,inst_18130,style);
var inst_18132 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18127__$1,inst_18131);
var inst_18133 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_18127__$1,msg);
var inst_18134 = cljs.core.async.timeout.call(null,(300));
var state_18142__$1 = (function (){var statearr_18145 = state_18142;
(statearr_18145[(9)] = inst_18132);

(statearr_18145[(10)] = inst_18133);

(statearr_18145[(7)] = inst_18127__$1);

return statearr_18145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18142__$1,(2),inst_18134);
} else {
return null;
}
}
});})(c__7090__auto__))
;
return ((function (switch__7028__auto__,c__7090__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto____0 = (function (){
var statearr_18149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18149[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto__);

(statearr_18149[(1)] = (1));

return statearr_18149;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto____1 = (function (state_18142){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_18142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e18150){if((e18150 instanceof Object)){
var ex__7032__auto__ = e18150;
var statearr_18151_18153 = state_18142;
(statearr_18151_18153[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18154 = state_18142;
state_18142 = G__18154;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto__ = function(state_18142){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto____1.call(this,state_18142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__))
})();
var state__7092__auto__ = (function (){var statearr_18152 = f__7091__auto__.call(null);
(statearr_18152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__))
);

return c__7090__auto__;
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
var vec__18156 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__18156,(0),null);
var ln = cljs.core.nth.call(null,vec__18156,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__18159 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__18159,(0),null);
var file_line = cljs.core.nth.call(null,vec__18159,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__18159,file_name,file_line){
return (function (p1__18157_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__18157_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__18159,file_name,file_line))
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
var map__18161 = figwheel.client.heads_up.ensure_container.call(null);
var map__18161__$1 = ((cljs.core.seq_QMARK_.call(null,map__18161))?cljs.core.apply.call(null,cljs.core.hash_map,map__18161):map__18161);
var content_area_el = cljs.core.get.call(null,map__18161__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__){
return (function (state_18208){
var state_val_18209 = (state_18208[(1)]);
if((state_val_18209 === (3))){
var inst_18191 = (state_18208[(7)]);
var inst_18205 = (state_18208[(2)]);
var inst_18206 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_18191,"");
var state_18208__$1 = (function (){var statearr_18210 = state_18208;
(statearr_18210[(8)] = inst_18205);

return statearr_18210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18208__$1,inst_18206);
} else {
if((state_val_18209 === (2))){
var inst_18191 = (state_18208[(7)]);
var inst_18198 = (state_18208[(2)]);
var inst_18199 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_18200 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_18201 = cljs.core.PersistentHashMap.fromArrays(inst_18199,inst_18200);
var inst_18202 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18191,inst_18201);
var inst_18203 = cljs.core.async.timeout.call(null,(200));
var state_18208__$1 = (function (){var statearr_18211 = state_18208;
(statearr_18211[(9)] = inst_18198);

(statearr_18211[(10)] = inst_18202);

return statearr_18211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18208__$1,(3),inst_18203);
} else {
if((state_val_18209 === (1))){
var inst_18191 = (state_18208[(7)]);
var inst_18191__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_18192 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_18193 = ["0.0"];
var inst_18194 = cljs.core.PersistentHashMap.fromArrays(inst_18192,inst_18193);
var inst_18195 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18191__$1,inst_18194);
var inst_18196 = cljs.core.async.timeout.call(null,(300));
var state_18208__$1 = (function (){var statearr_18212 = state_18208;
(statearr_18212[(7)] = inst_18191__$1);

(statearr_18212[(11)] = inst_18195);

return statearr_18212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18208__$1,(2),inst_18196);
} else {
return null;
}
}
}
});})(c__7090__auto__))
;
return ((function (switch__7028__auto__,c__7090__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__7029__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__7029__auto____0 = (function (){
var statearr_18216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18216[(0)] = figwheel$client$heads_up$clear_$_state_machine__7029__auto__);

(statearr_18216[(1)] = (1));

return statearr_18216;
});
var figwheel$client$heads_up$clear_$_state_machine__7029__auto____1 = (function (state_18208){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_18208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e18217){if((e18217 instanceof Object)){
var ex__7032__auto__ = e18217;
var statearr_18218_18220 = state_18208;
(statearr_18218_18220[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18221 = state_18208;
state_18208 = G__18221;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__7029__auto__ = function(state_18208){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__7029__auto____1.call(this,state_18208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__7029__auto____0;
figwheel$client$heads_up$clear_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__7029__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__))
})();
var state__7092__auto__ = (function (){var statearr_18219 = f__7091__auto__.call(null);
(statearr_18219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_18219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__))
);

return c__7090__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7090__auto__){
return (function (){
var f__7091__auto__ = (function (){var switch__7028__auto__ = ((function (c__7090__auto__){
return (function (state_18253){
var state_val_18254 = (state_18253[(1)]);
if((state_val_18254 === (4))){
var inst_18251 = (state_18253[(2)]);
var state_18253__$1 = state_18253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18253__$1,inst_18251);
} else {
if((state_val_18254 === (3))){
var inst_18248 = (state_18253[(2)]);
var inst_18249 = figwheel.client.heads_up.clear.call(null);
var state_18253__$1 = (function (){var statearr_18255 = state_18253;
(statearr_18255[(7)] = inst_18248);

return statearr_18255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18253__$1,(4),inst_18249);
} else {
if((state_val_18254 === (2))){
var inst_18245 = (state_18253[(2)]);
var inst_18246 = cljs.core.async.timeout.call(null,(400));
var state_18253__$1 = (function (){var statearr_18256 = state_18253;
(statearr_18256[(8)] = inst_18245);

return statearr_18256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18253__$1,(3),inst_18246);
} else {
if((state_val_18254 === (1))){
var inst_18243 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_18253__$1 = state_18253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18253__$1,(2),inst_18243);
} else {
return null;
}
}
}
}
});})(c__7090__auto__))
;
return ((function (switch__7028__auto__,c__7090__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto____0 = (function (){
var statearr_18260 = [null,null,null,null,null,null,null,null,null];
(statearr_18260[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto__);

(statearr_18260[(1)] = (1));

return statearr_18260;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto____1 = (function (state_18253){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_18253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e18261){if((e18261 instanceof Object)){
var ex__7032__auto__ = e18261;
var statearr_18262_18264 = state_18253;
(statearr_18262_18264[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18265 = state_18253;
state_18253 = G__18265;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto__ = function(state_18253){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto____1.call(this,state_18253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7090__auto__))
})();
var state__7092__auto__ = (function (){var statearr_18263 = f__7091__auto__.call(null);
(statearr_18263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7090__auto__);

return statearr_18263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7092__auto__);
});})(c__7090__auto__))
);

return c__7090__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map
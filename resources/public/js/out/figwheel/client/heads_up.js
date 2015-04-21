// Compiled by ClojureScript 0.0-3178 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__25966__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31729_31737 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31730_31738 = null;
var count__31731_31739 = (0);
var i__31732_31740 = (0);
while(true){
if((i__31732_31740 < count__31731_31739)){
var k_31741 = cljs.core._nth.call(null,chunk__31730_31738,i__31732_31740);
e.setAttribute(cljs.core.name.call(null,k_31741),cljs.core.get.call(null,attrs,k_31741));

var G__31742 = seq__31729_31737;
var G__31743 = chunk__31730_31738;
var G__31744 = count__31731_31739;
var G__31745 = (i__31732_31740 + (1));
seq__31729_31737 = G__31742;
chunk__31730_31738 = G__31743;
count__31731_31739 = G__31744;
i__31732_31740 = G__31745;
continue;
} else {
var temp__4126__auto___31746 = cljs.core.seq.call(null,seq__31729_31737);
if(temp__4126__auto___31746){
var seq__31729_31747__$1 = temp__4126__auto___31746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31729_31747__$1)){
var c__25711__auto___31748 = cljs.core.chunk_first.call(null,seq__31729_31747__$1);
var G__31749 = cljs.core.chunk_rest.call(null,seq__31729_31747__$1);
var G__31750 = c__25711__auto___31748;
var G__31751 = cljs.core.count.call(null,c__25711__auto___31748);
var G__31752 = (0);
seq__31729_31737 = G__31749;
chunk__31730_31738 = G__31750;
count__31731_31739 = G__31751;
i__31732_31740 = G__31752;
continue;
} else {
var k_31753 = cljs.core.first.call(null,seq__31729_31747__$1);
e.setAttribute(cljs.core.name.call(null,k_31753),cljs.core.get.call(null,attrs,k_31753));

var G__31754 = cljs.core.next.call(null,seq__31729_31747__$1);
var G__31755 = null;
var G__31756 = (0);
var G__31757 = (0);
seq__31729_31737 = G__31754;
chunk__31730_31738 = G__31755;
count__31731_31739 = G__31756;
i__31732_31740 = G__31757;
continue;
}
} else {
}
}
break;
}

var seq__31733_31758 = cljs.core.seq.call(null,children);
var chunk__31734_31759 = null;
var count__31735_31760 = (0);
var i__31736_31761 = (0);
while(true){
if((i__31736_31761 < count__31735_31760)){
var ch_31762 = cljs.core._nth.call(null,chunk__31734_31759,i__31736_31761);
e.appendChild(ch_31762);

var G__31763 = seq__31733_31758;
var G__31764 = chunk__31734_31759;
var G__31765 = count__31735_31760;
var G__31766 = (i__31736_31761 + (1));
seq__31733_31758 = G__31763;
chunk__31734_31759 = G__31764;
count__31735_31760 = G__31765;
i__31736_31761 = G__31766;
continue;
} else {
var temp__4126__auto___31767 = cljs.core.seq.call(null,seq__31733_31758);
if(temp__4126__auto___31767){
var seq__31733_31768__$1 = temp__4126__auto___31767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31733_31768__$1)){
var c__25711__auto___31769 = cljs.core.chunk_first.call(null,seq__31733_31768__$1);
var G__31770 = cljs.core.chunk_rest.call(null,seq__31733_31768__$1);
var G__31771 = c__25711__auto___31769;
var G__31772 = cljs.core.count.call(null,c__25711__auto___31769);
var G__31773 = (0);
seq__31733_31758 = G__31770;
chunk__31734_31759 = G__31771;
count__31735_31760 = G__31772;
i__31736_31761 = G__31773;
continue;
} else {
var ch_31774 = cljs.core.first.call(null,seq__31733_31768__$1);
e.appendChild(ch_31774);

var G__31775 = cljs.core.next.call(null,seq__31733_31768__$1);
var G__31776 = null;
var G__31777 = (0);
var G__31778 = (0);
seq__31733_31758 = G__31775;
chunk__31734_31759 = G__31776;
count__31735_31760 = G__31777;
i__31736_31761 = G__31778;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31726){
var G__31727 = cljs.core.first.call(null,seq31726);
var seq31726__$1 = cljs.core.next.call(null,seq31726);
var G__31728 = cljs.core.first.call(null,seq31726__$1);
var seq31726__$2 = cljs.core.next.call(null,seq31726__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__31727,G__31728,seq31726__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
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
var el_31779 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31779.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31779.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_31779.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31779);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31780,st_map){
var map__31784 = p__31780;
var map__31784__$1 = ((cljs.core.seq_QMARK_.call(null,map__31784))?cljs.core.apply.call(null,cljs.core.hash_map,map__31784):map__31784);
var container_el = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31784,map__31784__$1,container_el){
return (function (p__31785){
var vec__31786 = p__31785;
var k = cljs.core.nth.call(null,vec__31786,(0),null);
var v = cljs.core.nth.call(null,vec__31786,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31784,map__31784__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31787,dom_str){
var map__31789 = p__31787;
var map__31789__$1 = ((cljs.core.seq_QMARK_.call(null,map__31789))?cljs.core.apply.call(null,cljs.core.hash_map,map__31789):map__31789);
var c = map__31789__$1;
var content_area_el = cljs.core.get.call(null,map__31789__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31790){
var map__31792 = p__31790;
var map__31792__$1 = ((cljs.core.seq_QMARK_.call(null,map__31792))?cljs.core.apply.call(null,cljs.core.hash_map,map__31792):map__31792);
var content_area_el = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__){
return (function (state_31834){
var state_val_31835 = (state_31834[(1)]);
if((state_val_31835 === (2))){
var inst_31819 = (state_31834[(7)]);
var inst_31828 = (state_31834[(2)]);
var inst_31829 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31830 = ["auto"];
var inst_31831 = cljs.core.PersistentHashMap.fromArrays(inst_31829,inst_31830);
var inst_31832 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31819,inst_31831);
var state_31834__$1 = (function (){var statearr_31836 = state_31834;
(statearr_31836[(8)] = inst_31828);

return statearr_31836;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31834__$1,inst_31832);
} else {
if((state_val_31835 === (1))){
var inst_31819 = (state_31834[(7)]);
var inst_31819__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31820 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31821 = ["10px","10px","100%","68px","1.0"];
var inst_31822 = cljs.core.PersistentHashMap.fromArrays(inst_31820,inst_31821);
var inst_31823 = cljs.core.merge.call(null,inst_31822,style);
var inst_31824 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31819__$1,inst_31823);
var inst_31825 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31819__$1,msg);
var inst_31826 = cljs.core.async.timeout.call(null,(300));
var state_31834__$1 = (function (){var statearr_31837 = state_31834;
(statearr_31837[(9)] = inst_31825);

(statearr_31837[(10)] = inst_31824);

(statearr_31837[(7)] = inst_31819__$1);

return statearr_31837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31834__$1,(2),inst_31826);
} else {
return null;
}
}
});})(c__28065__auto__))
;
return ((function (switch__28003__auto__,c__28065__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto____0 = (function (){
var statearr_31841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31841[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto__);

(statearr_31841[(1)] = (1));

return statearr_31841;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto____1 = (function (state_31834){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_31834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e31842){if((e31842 instanceof Object)){
var ex__28007__auto__ = e31842;
var statearr_31843_31845 = state_31834;
(statearr_31843_31845[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31834;
state_31834 = G__31846;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto__ = function(state_31834){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto____1.call(this,state_31834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__))
})();
var state__28067__auto__ = (function (){var statearr_31844 = f__28066__auto__.call(null);
(statearr_31844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_31844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__))
);

return c__28065__auto__;
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
var vec__31848 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31848,(0),null);
var ln = cljs.core.nth.call(null,vec__31848,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__31851 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31851,(0),null);
var file_line = cljs.core.nth.call(null,vec__31851,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31851,file_name,file_line){
return (function (p1__31849_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31849_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31851,file_name,file_line))
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
var map__31853 = figwheel.client.heads_up.ensure_container.call(null);
var map__31853__$1 = ((cljs.core.seq_QMARK_.call(null,map__31853))?cljs.core.apply.call(null,cljs.core.hash_map,map__31853):map__31853);
var content_area_el = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__){
return (function (state_31900){
var state_val_31901 = (state_31900[(1)]);
if((state_val_31901 === (3))){
var inst_31883 = (state_31900[(7)]);
var inst_31897 = (state_31900[(2)]);
var inst_31898 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31883,"");
var state_31900__$1 = (function (){var statearr_31902 = state_31900;
(statearr_31902[(8)] = inst_31897);

return statearr_31902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31900__$1,inst_31898);
} else {
if((state_val_31901 === (2))){
var inst_31883 = (state_31900[(7)]);
var inst_31890 = (state_31900[(2)]);
var inst_31891 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31892 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31893 = cljs.core.PersistentHashMap.fromArrays(inst_31891,inst_31892);
var inst_31894 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31883,inst_31893);
var inst_31895 = cljs.core.async.timeout.call(null,(200));
var state_31900__$1 = (function (){var statearr_31903 = state_31900;
(statearr_31903[(9)] = inst_31894);

(statearr_31903[(10)] = inst_31890);

return statearr_31903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31900__$1,(3),inst_31895);
} else {
if((state_val_31901 === (1))){
var inst_31883 = (state_31900[(7)]);
var inst_31883__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31884 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31885 = ["0.0"];
var inst_31886 = cljs.core.PersistentHashMap.fromArrays(inst_31884,inst_31885);
var inst_31887 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31883__$1,inst_31886);
var inst_31888 = cljs.core.async.timeout.call(null,(300));
var state_31900__$1 = (function (){var statearr_31904 = state_31900;
(statearr_31904[(7)] = inst_31883__$1);

(statearr_31904[(11)] = inst_31887);

return statearr_31904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31900__$1,(2),inst_31888);
} else {
return null;
}
}
}
});})(c__28065__auto__))
;
return ((function (switch__28003__auto__,c__28065__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28004__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28004__auto____0 = (function (){
var statearr_31908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31908[(0)] = figwheel$client$heads_up$clear_$_state_machine__28004__auto__);

(statearr_31908[(1)] = (1));

return statearr_31908;
});
var figwheel$client$heads_up$clear_$_state_machine__28004__auto____1 = (function (state_31900){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_31900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e31909){if((e31909 instanceof Object)){
var ex__28007__auto__ = e31909;
var statearr_31910_31912 = state_31900;
(statearr_31910_31912[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31913 = state_31900;
state_31900 = G__31913;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28004__auto__ = function(state_31900){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28004__auto____1.call(this,state_31900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28004__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28004__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__))
})();
var state__28067__auto__ = (function (){var statearr_31911 = f__28066__auto__.call(null);
(statearr_31911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_31911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__))
);

return c__28065__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28065__auto__){
return (function (){
var f__28066__auto__ = (function (){var switch__28003__auto__ = ((function (c__28065__auto__){
return (function (state_31945){
var state_val_31946 = (state_31945[(1)]);
if((state_val_31946 === (4))){
var inst_31943 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31945__$1,inst_31943);
} else {
if((state_val_31946 === (3))){
var inst_31940 = (state_31945[(2)]);
var inst_31941 = figwheel.client.heads_up.clear.call(null);
var state_31945__$1 = (function (){var statearr_31947 = state_31945;
(statearr_31947[(7)] = inst_31940);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31945__$1,(4),inst_31941);
} else {
if((state_val_31946 === (2))){
var inst_31937 = (state_31945[(2)]);
var inst_31938 = cljs.core.async.timeout.call(null,(400));
var state_31945__$1 = (function (){var statearr_31948 = state_31945;
(statearr_31948[(8)] = inst_31937);

return statearr_31948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31945__$1,(3),inst_31938);
} else {
if((state_val_31946 === (1))){
var inst_31935 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31945__$1,(2),inst_31935);
} else {
return null;
}
}
}
}
});})(c__28065__auto__))
;
return ((function (switch__28003__auto__,c__28065__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto____0 = (function (){
var statearr_31952 = [null,null,null,null,null,null,null,null,null];
(statearr_31952[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto__);

(statearr_31952[(1)] = (1));

return statearr_31952;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto____1 = (function (state_31945){
while(true){
var ret_value__28005__auto__ = (function (){try{while(true){
var result__28006__auto__ = switch__28003__auto__.call(null,state_31945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28006__auto__;
}
break;
}
}catch (e31953){if((e31953 instanceof Object)){
var ex__28007__auto__ = e31953;
var statearr_31954_31956 = state_31945;
(statearr_31954_31956[(5)] = ex__28007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31957 = state_31945;
state_31945 = G__31957;
continue;
} else {
return ret_value__28005__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto__ = function(state_31945){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto____1.call(this,state_31945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28004__auto__;
})()
;})(switch__28003__auto__,c__28065__auto__))
})();
var state__28067__auto__ = (function (){var statearr_31955 = f__28066__auto__.call(null);
(statearr_31955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28065__auto__);

return statearr_31955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28067__auto__);
});})(c__28065__auto__))
);

return c__28065__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map
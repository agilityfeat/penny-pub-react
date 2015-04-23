// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
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
var e = document.createElement(cljs.core.name(t));
var seq__19106_19114 = cljs.core.seq(cljs.core.keys(attrs));
var chunk__19107_19115 = null;
var count__19108_19116 = (0);
var i__19109_19117 = (0);
while(true){
if((i__19109_19117 < count__19108_19116)){
var k_19118 = chunk__19107_19115.cljs$core$IIndexed$_nth$arity$2(null,i__19109_19117);
e.setAttribute(cljs.core.name(k_19118),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_19118));

var G__19119 = seq__19106_19114;
var G__19120 = chunk__19107_19115;
var G__19121 = count__19108_19116;
var G__19122 = (i__19109_19117 + (1));
seq__19106_19114 = G__19119;
chunk__19107_19115 = G__19120;
count__19108_19116 = G__19121;
i__19109_19117 = G__19122;
continue;
} else {
var temp__4126__auto___19123 = cljs.core.seq(seq__19106_19114);
if(temp__4126__auto___19123){
var seq__19106_19124__$1 = temp__4126__auto___19123;
if(cljs.core.chunked_seq_QMARK_(seq__19106_19124__$1)){
var c__4884__auto___19125 = cljs.core.chunk_first(seq__19106_19124__$1);
var G__19126 = cljs.core.chunk_rest(seq__19106_19124__$1);
var G__19127 = c__4884__auto___19125;
var G__19128 = cljs.core.count(c__4884__auto___19125);
var G__19129 = (0);
seq__19106_19114 = G__19126;
chunk__19107_19115 = G__19127;
count__19108_19116 = G__19128;
i__19109_19117 = G__19129;
continue;
} else {
var k_19130 = cljs.core.first(seq__19106_19124__$1);
e.setAttribute(cljs.core.name(k_19130),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_19130));

var G__19131 = cljs.core.next(seq__19106_19124__$1);
var G__19132 = null;
var G__19133 = (0);
var G__19134 = (0);
seq__19106_19114 = G__19131;
chunk__19107_19115 = G__19132;
count__19108_19116 = G__19133;
i__19109_19117 = G__19134;
continue;
}
} else {
}
}
break;
}

var seq__19110_19135 = cljs.core.seq(children);
var chunk__19111_19136 = null;
var count__19112_19137 = (0);
var i__19113_19138 = (0);
while(true){
if((i__19113_19138 < count__19112_19137)){
var ch_19139 = chunk__19111_19136.cljs$core$IIndexed$_nth$arity$2(null,i__19113_19138);
e.appendChild(ch_19139);

var G__19140 = seq__19110_19135;
var G__19141 = chunk__19111_19136;
var G__19142 = count__19112_19137;
var G__19143 = (i__19113_19138 + (1));
seq__19110_19135 = G__19140;
chunk__19111_19136 = G__19141;
count__19112_19137 = G__19142;
i__19113_19138 = G__19143;
continue;
} else {
var temp__4126__auto___19144 = cljs.core.seq(seq__19110_19135);
if(temp__4126__auto___19144){
var seq__19110_19145__$1 = temp__4126__auto___19144;
if(cljs.core.chunked_seq_QMARK_(seq__19110_19145__$1)){
var c__4884__auto___19146 = cljs.core.chunk_first(seq__19110_19145__$1);
var G__19147 = cljs.core.chunk_rest(seq__19110_19145__$1);
var G__19148 = c__4884__auto___19146;
var G__19149 = cljs.core.count(c__4884__auto___19146);
var G__19150 = (0);
seq__19110_19135 = G__19147;
chunk__19111_19136 = G__19148;
count__19112_19137 = G__19149;
i__19113_19138 = G__19150;
continue;
} else {
var ch_19151 = cljs.core.first(seq__19110_19145__$1);
e.appendChild(ch_19151);

var G__19152 = cljs.core.next(seq__19110_19145__$1);
var G__19153 = null;
var G__19154 = (0);
var G__19155 = (0);
seq__19110_19135 = G__19152;
chunk__19111_19136 = G__19153;
count__19112_19137 = G__19154;
i__19113_19138 = G__19155;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq19103){
var G__19104 = cljs.core.first(seq19103);
var seq19103__$1 = cljs.core.next(seq19103);
var G__19105 = cljs.core.first(seq19103__$1);
var seq19103__$2 = cljs.core.next(seq19103__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__19104,G__19105,seq19103__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4994__auto__ = (function (){var G__19156 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19156) : cljs.core.atom.call(null,G__19156));
})();
var prefer_table__4995__auto__ = (function (){var G__19157 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19157) : cljs.core.atom.call(null,G__19157));
})();
var method_cache__4996__auto__ = (function (){var G__19158 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19158) : cljs.core.atom.call(null,G__19158));
})();
var cached_hierarchy__4997__auto__ = (function (){var G__19159 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19159) : cljs.core.atom.call(null,G__19159));
})();
var hierarchy__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__,hierarchy__4998__auto__))
,cljs.core.constant$keyword$default,hierarchy__4998__auto__,method_table__4994__auto__,prefer_table__4995__auto__,method_cache__4996__auto__,cached_hierarchy__4997__auto__));
})();
}
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$figwheel_DASH_event,"file-selected",cljs.core.constant$keyword$file_DASH_name,dataset.fileName,cljs.core.constant$keyword$file_DASH_line,dataset.fileLine], null));
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"close-heads-up",(function (dataset){
return (figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0() : figwheel.client.heads_up.clear.call(null));
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate((function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),figwheel.client.heads_up.ancestor_nodes(el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset(event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
var G__19161 = dataset;
return (figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1(G__19161) : figwheel.client.heads_up.heads_up_event_dispatch.call(null,G__19161));
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not(document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_19162 = figwheel.client.heads_up.node(cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$id,cont_id,cljs.core.constant$keyword$style,[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_19162.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_19162.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_19162.appendChild(figwheel.client.heads_up.node(cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$id,content_id], null)));

document.body.appendChild(el_19162);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$container_DASH_el,document.getElementById(cont_id),cljs.core.constant$keyword$content_DASH_area_DASH_el,document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__19163,st_map){
var map__19167 = p__19163;
var map__19167__$1 = ((cljs.core.seq_QMARK_(map__19167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19167):map__19167);
var container_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,cljs.core.constant$keyword$container_DASH_el);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__19167,map__19167__$1,container_el){
return (function (p__19168){
var vec__19169 = p__19168;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19169,(1),null);
return (container_el.style[cljs.core.name(k)] = v);
});})(map__19167,map__19167__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__19170,dom_str){
var map__19172 = p__19170;
var map__19172__$1 = ((cljs.core.seq_QMARK_(map__19172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19172):map__19172);
var c = map__19172__$1;
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,cljs.core.constant$keyword$content_DASH_area_DASH_el);
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__19173){
var map__19175 = p__19173;
var map__19175__$1 = ((cljs.core.seq_QMARK_(map__19175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19175):map__19175);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19175__$1,cljs.core.constant$keyword$content_DASH_area_DASH_el);
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__){
return (function (state_19217){
var state_val_19218 = (state_19217[(1)]);
if((state_val_19218 === (2))){
var inst_19202 = (state_19217[(7)]);
var inst_19211 = (state_19217[(2)]);
var inst_19212 = [cljs.core.constant$keyword$height];
var inst_19213 = ["auto"];
var inst_19214 = cljs.core.PersistentHashMap.fromArrays(inst_19212,inst_19213);
var inst_19215 = figwheel.client.heads_up.set_style_BANG_(inst_19202,inst_19214);
var state_19217__$1 = (function (){var statearr_19219 = state_19217;
(statearr_19219[(8)] = inst_19211);

return statearr_19219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19217__$1,inst_19215);
} else {
if((state_val_19218 === (1))){
var inst_19202 = (state_19217[(7)]);
var inst_19202__$1 = figwheel.client.heads_up.ensure_container();
var inst_19203 = [cljs.core.constant$keyword$paddingTop,cljs.core.constant$keyword$paddingBottom,cljs.core.constant$keyword$width,cljs.core.constant$keyword$minHeight,cljs.core.constant$keyword$opacity];
var inst_19204 = ["10px","10px","100%","68px","1.0"];
var inst_19205 = cljs.core.PersistentHashMap.fromArrays(inst_19203,inst_19204);
var inst_19206 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_19205,style], 0));
var inst_19207 = figwheel.client.heads_up.set_style_BANG_(inst_19202__$1,inst_19206);
var inst_19208 = figwheel.client.heads_up.set_content_BANG_(inst_19202__$1,msg);
var inst_19209 = cljs.core.async.timeout((300));
var state_19217__$1 = (function (){var statearr_19220 = state_19217;
(statearr_19220[(9)] = inst_19207);

(statearr_19220[(7)] = inst_19202__$1);

(statearr_19220[(10)] = inst_19208);

return statearr_19220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19217__$1,(2),inst_19209);
} else {
return null;
}
}
});})(c__12927__auto__))
;
return ((function (switch__12849__auto__,c__12927__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto____0 = (function (){
var statearr_19224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19224[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto__);

(statearr_19224[(1)] = (1));

return statearr_19224;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto____1 = (function (state_19217){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_19217);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e19225){if((e19225 instanceof Object)){
var ex__12853__auto__ = e19225;
var statearr_19226_19228 = state_19217;
(statearr_19226_19228[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19217);

return cljs.core.constant$keyword$recur;
} else {
throw e19225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__19229 = state_19217;
state_19217 = G__19229;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto__ = function(state_19217){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto____1.call(this,state_19217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__))
})();
var state__12929__auto__ = (function (){var statearr_19227 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_19227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_19227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__))
);

return c__12927__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches(/.*at\sline.*/,msg))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number(msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__19231 = temp__4124__auto__;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19231,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19231,(1),null);
return figwheel.client.heads_up.file_selector_div(f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__19234 = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(0),null);
var file_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(1),null);
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19234,file_name,file_line){
return (function (p1__19232_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__19232_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__19234,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$backgroundColor,"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading("Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div(file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading(header)),cljs.core.str(figwheel.client.heads_up.format_line(msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning("Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__19236 = figwheel.client.heads_up.ensure_container();
var map__19236__$1 = ((cljs.core.seq_QMARK_(map__19236))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19236):map__19236);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19236__$1,cljs.core.constant$keyword$content_DASH_area_DASH_el);
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line(message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__){
return (function (state_19283){
var state_val_19284 = (state_19283[(1)]);
if((state_val_19284 === (3))){
var inst_19266 = (state_19283[(7)]);
var inst_19280 = (state_19283[(2)]);
var inst_19281 = figwheel.client.heads_up.set_content_BANG_(inst_19266,"");
var state_19283__$1 = (function (){var statearr_19285 = state_19283;
(statearr_19285[(8)] = inst_19280);

return statearr_19285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19283__$1,inst_19281);
} else {
if((state_val_19284 === (2))){
var inst_19266 = (state_19283[(7)]);
var inst_19273 = (state_19283[(2)]);
var inst_19274 = [cljs.core.constant$keyword$width,cljs.core.constant$keyword$height,cljs.core.constant$keyword$minHeight,cljs.core.constant$keyword$padding,cljs.core.constant$keyword$borderRadius,cljs.core.constant$keyword$backgroundColor];
var inst_19275 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_19276 = cljs.core.PersistentHashMap.fromArrays(inst_19274,inst_19275);
var inst_19277 = figwheel.client.heads_up.set_style_BANG_(inst_19266,inst_19276);
var inst_19278 = cljs.core.async.timeout((200));
var state_19283__$1 = (function (){var statearr_19286 = state_19283;
(statearr_19286[(9)] = inst_19277);

(statearr_19286[(10)] = inst_19273);

return statearr_19286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19283__$1,(3),inst_19278);
} else {
if((state_val_19284 === (1))){
var inst_19266 = (state_19283[(7)]);
var inst_19266__$1 = figwheel.client.heads_up.ensure_container();
var inst_19267 = [cljs.core.constant$keyword$opacity];
var inst_19268 = ["0.0"];
var inst_19269 = cljs.core.PersistentHashMap.fromArrays(inst_19267,inst_19268);
var inst_19270 = figwheel.client.heads_up.set_style_BANG_(inst_19266__$1,inst_19269);
var inst_19271 = cljs.core.async.timeout((300));
var state_19283__$1 = (function (){var statearr_19287 = state_19283;
(statearr_19287[(7)] = inst_19266__$1);

(statearr_19287[(11)] = inst_19270);

return statearr_19287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19283__$1,(2),inst_19271);
} else {
return null;
}
}
}
});})(c__12927__auto__))
;
return ((function (switch__12849__auto__,c__12927__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__12850__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__12850__auto____0 = (function (){
var statearr_19291 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19291[(0)] = figwheel$client$heads_up$clear_$_state_machine__12850__auto__);

(statearr_19291[(1)] = (1));

return statearr_19291;
});
var figwheel$client$heads_up$clear_$_state_machine__12850__auto____1 = (function (state_19283){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_19283);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e19292){if((e19292 instanceof Object)){
var ex__12853__auto__ = e19292;
var statearr_19293_19295 = state_19283;
(statearr_19293_19295[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19283);

return cljs.core.constant$keyword$recur;
} else {
throw e19292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__19296 = state_19283;
state_19283 = G__19296;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__12850__auto__ = function(state_19283){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__12850__auto____1.call(this,state_19283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__12850__auto____0;
figwheel$client$heads_up$clear_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__12850__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__))
})();
var state__12929__auto__ = (function (){var statearr_19294 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_19294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_19294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__))
);

return c__12927__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$backgroundColor,"rgba(211,234,172,1.0)",cljs.core.constant$keyword$width,"68px",cljs.core.constant$keyword$height,"68px",cljs.core.constant$keyword$paddingLeft,"0px",cljs.core.constant$keyword$paddingRight,"0px",cljs.core.constant$keyword$borderRadius,"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__12927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12927__auto__){
return (function (){
var f__12928__auto__ = (function (){var switch__12849__auto__ = ((function (c__12927__auto__){
return (function (state_19328){
var state_val_19329 = (state_19328[(1)]);
if((state_val_19329 === (4))){
var inst_19326 = (state_19328[(2)]);
var state_19328__$1 = state_19328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19328__$1,inst_19326);
} else {
if((state_val_19329 === (3))){
var inst_19323 = (state_19328[(2)]);
var inst_19324 = figwheel.client.heads_up.clear();
var state_19328__$1 = (function (){var statearr_19330 = state_19328;
(statearr_19330[(7)] = inst_19323);

return statearr_19330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19328__$1,(4),inst_19324);
} else {
if((state_val_19329 === (2))){
var inst_19320 = (state_19328[(2)]);
var inst_19321 = cljs.core.async.timeout((400));
var state_19328__$1 = (function (){var statearr_19331 = state_19328;
(statearr_19331[(8)] = inst_19320);

return statearr_19331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19328__$1,(3),inst_19321);
} else {
if((state_val_19329 === (1))){
var inst_19318 = figwheel.client.heads_up.display_loaded_start();
var state_19328__$1 = state_19328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19328__$1,(2),inst_19318);
} else {
return null;
}
}
}
}
});})(c__12927__auto__))
;
return ((function (switch__12849__auto__,c__12927__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto____0 = (function (){
var statearr_19335 = [null,null,null,null,null,null,null,null,null];
(statearr_19335[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto__);

(statearr_19335[(1)] = (1));

return statearr_19335;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto____1 = (function (state_19328){
while(true){
var ret_value__12851__auto__ = (function (){try{while(true){
var result__12852__auto__ = switch__12849__auto__(state_19328);
if(cljs.core.keyword_identical_QMARK_(result__12852__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12852__auto__;
}
break;
}
}catch (e19336){if((e19336 instanceof Object)){
var ex__12853__auto__ = e19336;
var statearr_19337_19339 = state_19328;
(statearr_19337_19339[(5)] = ex__12853__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19328);

return cljs.core.constant$keyword$recur;
} else {
throw e19336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12851__auto__,cljs.core.constant$keyword$recur)){
var G__19340 = state_19328;
state_19328 = G__19340;
continue;
} else {
return ret_value__12851__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto__ = function(state_19328){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto____1.call(this,state_19328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__12850__auto__;
})()
;})(switch__12849__auto__,c__12927__auto__))
})();
var state__12929__auto__ = (function (){var statearr_19338 = (function (){return (f__12928__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12928__auto__.cljs$core$IFn$_invoke$arity$0() : f__12928__auto__.call(null));
})();
(statearr_19338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12927__auto__);

return statearr_19338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12929__auto__);
});})(c__12927__auto__))
);

return c__12927__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

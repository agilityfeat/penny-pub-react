// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('figwheel.client.socket');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('figwheel.client.utils');
figwheel.client.socket.get_websocket_imp = (function figwheel$client$socket$get_websocket_imp(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
return (window["WebSocket"]);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
try{var G__19076 = "ws";
return require(G__19076);
}catch (e19075){if((e19075 instanceof Error)){
var e = e19075;
return null;
} else {
throw e19075;

}
}} else {
return null;

}
}
});
if(typeof figwheel.client.socket.message_history_atom !== 'undefined'){
} else {
figwheel.client.socket.message_history_atom = (function (){var G__19077 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19077) : cljs.core.atom.call(null,G__19077));
})();
}
if(typeof figwheel.client.socket.socket_atom !== 'undefined'){
} else {
figwheel.client.socket.socket_atom = (function (){var G__19078 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19078) : cljs.core.atom.call(null,G__19078));
})();
}
/**
 * Send a end message to the server.
 */
figwheel.client.socket.send_BANG_ = (function figwheel$client$socket$send_BANG_(msg){
if(cljs.core.truth_((function (){var G__19081 = figwheel.client.socket.socket_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19081) : cljs.core.deref.call(null,G__19081));
})())){
return (function (){var G__19082 = figwheel.client.socket.socket_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19082) : cljs.core.deref.call(null,G__19082));
})().send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0)));
} else {
return null;
}
});
figwheel.client.socket.close_BANG_ = (function figwheel$client$socket$close_BANG_(){
(function (){var G__19085 = figwheel.client.socket.socket_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19085) : cljs.core.deref.call(null,G__19085));
})().onclose = cljs.core.identity;

return (function (){var G__19086 = figwheel.client.socket.socket_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19086) : cljs.core.deref.call(null,G__19086));
})().close();
});
figwheel.client.socket.open = (function figwheel$client$socket$open(p__19087){
var map__19094 = p__19087;
var map__19094__$1 = ((cljs.core.seq_QMARK_(map__19094))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19094):map__19094);
var opts = map__19094__$1;
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$build_DASH_id);
var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$websocket_DASH_url);
var retried_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$retried_DASH_count);
var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$retry_DASH_count);
var temp__4124__auto__ = figwheel.client.socket.get_websocket_imp();
if(cljs.core.truth_(temp__4124__auto__)){
var WebSocket = temp__4124__auto__;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: trying to open cljs reload socket");

var url = [cljs.core.str(websocket_url),cljs.core.str((cljs.core.truth_(build_id)?[cljs.core.str("/"),cljs.core.str(build_id)].join(''):""))].join('');
var socket = (new WebSocket(url));
socket.onmessage = ((function (url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (msg_str){
var temp__4126__auto__ = cljs.reader.read_string(msg_str.data);
if(cljs.core.truth_(temp__4126__auto__)){
var msg = temp__4126__auto__;
figwheel.client.utils.debug_prn(msg);

var and__4087__auto__ = cljs.core.map_QMARK_(msg);
if(and__4087__auto__){
var and__4087__auto____$1 = cljs.core.constant$keyword$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(and__4087__auto____$1)){
var and__4087__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.constant$keyword$ping);
if(and__4087__auto____$2){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.socket.message_history_atom,cljs.core.conj,msg);
} else {
return and__4087__auto____$2;
}
} else {
return and__4087__auto____$1;
}
} else {
return and__4087__auto__;
}
} else {
return null;
}
});})(url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

socket.onopen = ((function (url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (x){
var G__19095_19099 = figwheel.client.socket.socket_atom;
var G__19096_19100 = socket;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19095_19099,G__19096_19100) : cljs.core.reset_BANG_.call(null,G__19095_19099,G__19096_19100));

return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: socket connection established");
});})(url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

socket.onclose = ((function (url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (x){
var retried_count__$1 = (function (){var or__4099__auto__ = retried_count;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (0);
}
})();
figwheel.client.utils.debug_prn("Figwheel: socket closed or failed to open");

if((retry_count > retried_count__$1)){
var G__19097 = ((function (retried_count__$1,url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (){
return figwheel$client$socket$open(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$retried_DASH_count,(retried_count__$1 + (1))));
});})(retried_count__$1,url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count))
;
var G__19098 = (function (){var x__4418__auto__ = (10000);
var y__4419__auto__ = ((2000) + ((500) * retried_count__$1));
return ((x__4418__auto__ < y__4419__auto__) ? x__4418__auto__ : y__4419__auto__);
})();
return setTimeout(G__19097,G__19098);
} else {
return null;
}
});})(url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

socket.onerror = ((function (url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (x){
return figwheel.client.utils.debug_prn("Figwheel: socket error ");
});})(url,socket,WebSocket,temp__4124__auto__,map__19094,map__19094__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

return socket;
} else {
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())?"Figwheel: Can't start Figwheel!! Please make sure ws is installed\n do -> 'npm install ws'":"Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets"));
}
});

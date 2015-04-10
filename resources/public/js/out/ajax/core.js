// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = (function (){var obj12916 = {};
return obj12916;
})();

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__4087__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (ajax.core._js_ajax_request[(function (){var G__12920 = x__4735__auto__;
return goog.typeOf(G__12920);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = (function (){var obj12922 = {};
return obj12922;
})();

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (ajax.core._abort[(function (){var G__12926 = x__4735__auto__;
return goog.typeOf(G__12926);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (ajax.core._abort["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 */
ajax.core.DirectlySubmittable = (function (){var obj12928 = {};
return obj12928;
})();


/**
 * An abstraction for an ajax response.
 */
ajax.core.AjaxResponse = (function (){var obj12930 = {};
return obj12930;
})();

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (ajax.core._status[(function (){var G__12934 = x__4735__auto__;
return goog.typeOf(G__12934);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (ajax.core._status["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (ajax.core._status_text[(function (){var G__12938 = x__4735__auto__;
return goog.typeOf(G__12938);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (ajax.core._status_text["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the response body as a string.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (ajax.core._body[(function (){var G__12942 = x__4735__auto__;
return goog.typeOf(G__12942);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (ajax.core._body["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__4087__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (ajax.core._get_response_header[(function (){var G__12946 = x__4735__auto__;
return goog.typeOf(G__12946);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((function (){var and__4087__auto__ = this$;
if(and__4087__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__4087__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__4735__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4099__auto__ = (ajax.core._was_aborted[(function (){var G__12950 = x__4735__auto__;
return goog.typeOf(G__12950);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__4099__auto__ = (function (){var G__12954 = params;
if(G__12954){
var bit__4773__auto__ = null;
if(cljs.core.truth_((function (){var or__4099__auto__ = bit__4773__auto__;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return G__12954.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__12954.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__12954);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__12954);
}
})();
if(or__4099__auto__){
return or__4099__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__12956){
var map__12957 = p__12956;
var map__12957__$1 = ((cljs.core.seq_QMARK_(map__12957))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12957):map__12957);
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12957__$1,cljs.core.constant$keyword$with_DASH_credentials,false);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12957__$1,cljs.core.constant$keyword$timeout,(0));
var this$__$1 = this;
var G__12958 = this$__$1;
var G__12959_12963 = G__12958;
var G__12960_12964 = goog.net.EventType.COMPLETE;
var G__12961_12965 = ((function (G__12959_12963,G__12960_12964,G__12958,this$__$1,map__12957,map__12957__$1,with_credentials,timeout){
return (function (p1__12955_SHARP_){
var G__12962 = p1__12955_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12962) : handler.call(null,G__12962));
});})(G__12959_12963,G__12960_12964,G__12958,this$__$1,map__12957,map__12957__$1,with_credentials,timeout))
;
goog.events.listen(G__12959_12963,G__12960_12964,G__12961_12965);

G__12958.setTimeoutInterval(timeout);

G__12958.setWithCredentials(with_credentials);

G__12958.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__12958;
});
XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__12966){
var map__12967 = p__12966;
var map__12967__$1 = ((cljs.core.seq_QMARK_(map__12967))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12967):map__12967);
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12967__$1,cljs.core.constant$keyword$with_DASH_credentials,false);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12967__$1,cljs.core.constant$keyword$timeout,(0));
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12967,map__12967__$1,with_credentials,timeout){
return (function (){
var G__12968 = this$__$1;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12968) : handler.call(null,G__12968));
});})(this$__$1,map__12967,map__12967__$1,with_credentials,timeout))
;

var G__12969 = this$__$1;
G__12969.open(method,uri,true);

var t_12976 = G__12969;
var t_12977__$1 = (function (){var seq__12970 = cljs.core.seq(headers);
var chunk__12971 = null;
var count__12972 = (0);
var i__12973 = (0);
while(true){
if((i__12973 < count__12972)){
var vec__12974 = chunk__12971.cljs$core$IIndexed$_nth$arity$2(null,i__12973);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974,(1),null);
t_12976.setRequestHeader(k,v);

var G__12978 = seq__12970;
var G__12979 = chunk__12971;
var G__12980 = count__12972;
var G__12981 = (i__12973 + (1));
seq__12970 = G__12978;
chunk__12971 = G__12979;
count__12972 = G__12980;
i__12973 = G__12981;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__12970);
if(temp__4126__auto__){
var seq__12970__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12970__$1)){
var c__4884__auto__ = cljs.core.chunk_first(seq__12970__$1);
var G__12982 = cljs.core.chunk_rest(seq__12970__$1);
var G__12983 = c__4884__auto__;
var G__12984 = cljs.core.count(c__4884__auto__);
var G__12985 = (0);
seq__12970 = G__12982;
chunk__12971 = G__12983;
count__12972 = G__12984;
i__12973 = G__12985;
continue;
} else {
var vec__12975 = cljs.core.first(seq__12970__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12975,(1),null);
t_12976.setRequestHeader(k,v);

var G__12986 = cljs.core.next(seq__12970__$1);
var G__12987 = null;
var G__12988 = (0);
var G__12989 = (0);
seq__12970 = G__12986;
chunk__12971 = G__12987;
count__12972 = G__12988;
i__12973 = G__12989;
continue;
}
} else {
return null;
}
}
break;
}
})();

G__12969.send((function (){var or__4099__auto__ = body;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})());

return G__12969;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__12990){
var map__12991 = p__12990;
var map__12991__$1 = ((cljs.core.seq_QMARK_(map__12991))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12991):map__12991);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12991__$1,cljs.core.constant$keyword$max_DASH_retries);
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12991__$1,cljs.core.constant$keyword$priority);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12991__$1,cljs.core.constant$keyword$timeout);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12991__$1,cljs.core.constant$keyword$id);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string(ajax.core._body(xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
var G__12993 = arguments.length;
switch (G__12993) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.read_edn,cljs.core.constant$keyword$description,"EDN",cljs.core.constant$keyword$content_DASH_type,"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,cljs.core.pr_str,cljs.core.constant$keyword$content_DASH_type,"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function ajax$core$transit_write(){
var G__12996 = arguments.length;
switch (G__12996) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write(writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write(writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(){
var G__12999 = arguments.length;
switch (G__12999) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__13000){
var map__13001 = p__13000;
var map__13001__$1 = ((cljs.core.seq_QMARK_(map__13001))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13001):map__13001);
var opts = map__13001__$1;
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13001__$1,cljs.core.constant$keyword$writer);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13001__$1,cljs.core.constant$keyword$type);
var writer__$1 = (function (){var or__4099__auto__ = writer;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((function (){var or__4099__auto____$1 = type;
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
return cljs.core.constant$keyword$json;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1(writer__$1),cljs.core.constant$keyword$content_DASH_type,ajax.core.transit_content_type], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(){
var G__13004 = arguments.length;
switch (G__13004) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(){
var G__13007 = arguments.length;
switch (G__13007) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__13008){
var map__13009 = p__13008;
var map__13009__$1 = ((cljs.core.seq_QMARK_(map__13009))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13009):map__13009);
var opts = map__13009__$1;
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13009__$1,cljs.core.constant$keyword$raw);
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13009__$1,cljs.core.constant$keyword$reader);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13009__$1,cljs.core.constant$keyword$type);
var reader__$1 = (function (){var or__4099__auto__ = reader;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((function (){var or__4099__auto____$1 = type;
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
return cljs.core.constant$keyword$json;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2(reader__$1,raw),cljs.core.constant$keyword$description,"Transit",cljs.core.constant$keyword$content_DASH_type,"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return (function (){var G__13012 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__13012);
})().toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,ajax.core.params_to_str,cljs.core.constant$keyword$content_DASH_type,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
var G__13014 = arguments.length;
switch (G__13014) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core._body,cljs.core.constant$keyword$description,"raw text",cljs.core.constant$keyword$content_DASH_type,"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,ajax.core.write_json,cljs.core.constant$keyword$content_DASH_type,"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(){
var G__13017 = arguments.length;
switch (G__13017) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4087__auto__ = prefix;
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4087__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__13018 = text__$1;
return goog.json.parse(G__13018);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4087__auto__ = prefix;
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4087__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__13019 = text__$1;
return goog.json.parse(G__13019);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4087__auto__ = prefix;
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4087__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__13020 = text__$1;
return goog.json.parse(G__13020);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4087__auto__ = prefix;
if(cljs.core.truth_(and__4087__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4087__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__13021 = text__$1;
return goog.json.parse(G__13021);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(){
var G__13024 = arguments.length;
switch (G__13024) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__13025){
var map__13026 = p__13025;
var map__13026__$1 = ((cljs.core.seq_QMARK_(map__13026))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13026):map__13026);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13026__$1,cljs.core.constant$keyword$raw);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13026__$1,cljs.core.constant$keyword$keywords_QMARK_);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13026__$1,cljs.core.constant$keyword$prefix);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.constant$keyword$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.constant$keyword$content_DASH_type,"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(){
var G__13029 = arguments.length;
switch (G__13029) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__13030 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__13030) : format_entry.call(null,G__13030));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__13031 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__13031) : format_entry.call(null,G__13031));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(){
var G__13034 = arguments.length;
switch (G__13034) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__4099__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__4099__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(){
var G__13037 = arguments.length;
switch (G__13037) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__13039){
var map__13041 = p__13039;
var map__13041__$1 = ((cljs.core.seq_QMARK_(map__13041))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13041):map__13041);
var opts = map__13041__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13041__$1,cljs.core.constant$keyword$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((function (){var or__4099__auto__ = ajax.core._get_response_header(xhrio,"Content-Type");
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(){
var G__13043 = arguments.length;
switch (G__13043) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return cljs.core.constant$keyword$read.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return cljs.core.constant$keyword$read.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__13045){
var map__13047 = p__13045;
var map__13047__$1 = ((cljs.core.seq_QMARK_(map__13047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13047):map__13047);
var opts = map__13047__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13047__$1,cljs.core.constant$keyword$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1(opts),response_format));
} else {
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(){
var G__13049 = arguments.length;
switch (G__13049) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.constant$keyword$content_DASH_type,accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__13051){
var map__13053 = p__13051;
var map__13053__$1 = ((cljs.core.seq_QMARK_(map__13053))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13053):map__13053);
var opts = map__13053__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13053__$1,cljs.core.constant$keyword$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,response_format,cljs.core.constant$keyword$description,"custom",cljs.core.constant$keyword$content_DASH_type,"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__13054,xhrio){
var map__13056 = p__13054;
var map__13056__$1 = ((cljs.core.seq_QMARK_(map__13056))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13056):map__13056);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13056__$1,cljs.core.constant$keyword$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,status,cljs.core.constant$keyword$failure,cljs.core.constant$keyword$error,cljs.core.constant$keyword$response,null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.constant$keyword$failure,cljs.core.constant$keyword$parse,cljs.core.constant$keyword$original_DASH_text,ajax.core._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$status_DASH_text,ajax.core._status_text(xhrio),cljs.core.array_seq([cljs.core.constant$keyword$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(){
var argseq__5139__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5139__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,status,cljs.core.constant$keyword$status_DASH_text,status_text,cljs.core.constant$keyword$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq13057){
var G__13058 = cljs.core.first(seq13057);
var seq13057__$1 = cljs.core.next(seq13057);
var G__13059 = cljs.core.first(seq13057__$1);
var seq13057__$2 = cljs.core.next(seq13057__$1);
var G__13060 = cljs.core.first(seq13057__$2);
var seq13057__$3 = cljs.core.next(seq13057__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__13058,G__13059,G__13060,seq13057__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__13061,xhrio){
var map__13074 = p__13061;
var map__13074__$1 = ((cljs.core.seq_QMARK_(map__13074))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13074):map__13074);
var format = map__13074__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13074__$1,cljs.core.constant$keyword$read);
try{var status = ajax.core._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted(xhrio))){
var G__13076 = "Request aborted by client.";
var G__13077 = cljs.core.constant$keyword$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13076,G__13077) : fail.call(null,G__13076,G__13077));
} else {
var G__13078 = "Request timed out.";
var G__13079 = cljs.core.constant$keyword$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13078,G__13079) : fail.call(null,G__13078,G__13079));
}
} else {
try{var response = (function (){var G__13081 = xhrio;
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__13081) : read.call(null,G__13081));
})();
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__13082 = ajax.core._status_text(xhrio);
var G__13083 = cljs.core.constant$keyword$error;
var G__13084 = cljs.core.constant$keyword$response;
var G__13085 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__13082,G__13083,G__13084,G__13085) : fail.call(null,G__13082,G__13083,G__13084,G__13085));
}
}catch (e13080){if((e13080 instanceof Object)){
var e = e13080;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format,xhrio)], null);
} else {
throw e13080;

}
}}
}catch (e13075){if((e13075 instanceof Object)){
var e = e13075;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),e.message,cljs.core.constant$keyword$exception,cljs.core.array_seq([cljs.core.constant$keyword$exception,e], 0));
} else {
throw e13075;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,format,cljs.core.constant$keyword$content_DASH_type,"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__13086,p__13087){
var map__13092 = p__13086;
var map__13092__$1 = ((cljs.core.seq_QMARK_(map__13092))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13092):map__13092);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.constant$keyword$headers);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.constant$keyword$params);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.constant$keyword$format);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.constant$keyword$method);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.constant$keyword$uri);
var map__13093 = p__13087;
var map__13093__$1 = ((cljs.core.seq_QMARK_(map__13093))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13093):map__13093);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.constant$keyword$content_DASH_type);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__4099__auto__ = headers;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ajax.core.normalize_method(method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers__$1], null);
} else {
var map__13094 = ajax.core.get_request_format(format);
var map__13094__$1 = ((cljs.core.seq_QMARK_(map__13094))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13094):map__13094);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13094__$1,cljs.core.constant$keyword$content_DASH_type);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13094__$1,cljs.core.constant$keyword$write);
var body = ((!((write == null)))?(function (){var G__13095 = params;
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(G__13095) : write.call(null,G__13095));
})():(cljs.core.truth_(ajax.core.submittable_QMARK_(params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([headers__$1,content_type__$2], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(){
var G__13097 = arguments.length;
switch (G__13097) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__13098 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__13098) : handler.call(null,G__13098));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__13099 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__13099) : handler.call(null,G__13099));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__13100 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__13100) : handler.call(null,G__13100));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__13102){
var map__13104 = p__13102;
var map__13104__$1 = ((cljs.core.seq_QMARK_(map__13104))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13104):map__13104);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13104__$1,cljs.core.constant$keyword$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__13105){
var map__13108 = p__13105;
var map__13108__$1 = ((cljs.core.seq_QMARK_(map__13108))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13108):map__13108);
var opts = map__13108__$1;
var api = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13108__$1,cljs.core.constant$keyword$api);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13108__$1,cljs.core.constant$keyword$method);
var response_format = ajax.core.get_response_format(opts);
var method__$1 = ajax.core.normalize_method(method);
var vec__13109 = ajax.core.process_inputs(opts,response_format);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(1),null);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(2),null);
var handler = ajax.core.base_handler(response_format,opts);
var api__$1 = (function (){var or__4099__auto__ = api;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request(api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__13111 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__13111) {
case "url":
return ajax.core.url_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "json":
return ajax.core.json_request_format();

break;
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),ajax$core$keyword_response_format_2(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$read,format,cljs.core.constant$keyword$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__13116 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__13116) {
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "edn":
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13118_SHARP_){
return ajax.core.keyword_response_format_2(p1__13118_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2(format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(){
var G__13120 = arguments.length;
switch (G__13120) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__13121,p__13122){
var map__13123 = p__13121;
var map__13123__$1 = ((cljs.core.seq_QMARK_(map__13123))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13123):map__13123);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13123__$1,cljs.core.constant$keyword$finally);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13123__$1,cljs.core.constant$keyword$error_DASH_handler);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13123__$1,cljs.core.constant$keyword$handler);
var vec__13124 = p__13122;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(1),null);
var temp__4124__auto___13132 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___13132)){
var h_13133 = temp__4124__auto___13132;
var G__13125_13134 = result;
(h_13133.cljs$core$IFn$_invoke$arity$1 ? h_13133.cljs$core$IFn$_invoke$arity$1(G__13125_13134) : h_13133.call(null,G__13125_13134));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__13126){
var map__13127 = p__13126;
var map__13127__$1 = ((cljs.core.seq_QMARK_(map__13127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13127):map__13127);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13127__$1,cljs.core.constant$keyword$finally);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13127__$1,cljs.core.constant$keyword$error_DASH_handler);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13127__$1,cljs.core.constant$keyword$handler);
return ((function (map__13127,map__13127__$1,finally$,error_handler,handler){
return (function (p__13128){
var vec__13129 = p__13128;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13129,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13129,(1),null);
var temp__4124__auto___13135 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___13135)){
var h_13136 = temp__4124__auto___13135;
var G__13130_13137 = result;
(h_13136.cljs$core$IFn$_invoke$arity$1 ? h_13136.cljs$core$IFn$_invoke$arity$1(G__13130_13137) : h_13136.call(null,G__13130_13137));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__13127,map__13127__$1,finally$,error_handler,handler))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__13138){
var map__13140 = p__13138;
var map__13140__$1 = ((cljs.core.seq_QMARK_(map__13140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13140):map__13140);
var opts = map__13140__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13140__$1,cljs.core.constant$keyword$params);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13140__$1,cljs.core.constant$keyword$response_DASH_format);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13140__$1,cljs.core.constant$keyword$format);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13140__$1,cljs.core.constant$keyword$method);

var needs_format = cljs.core.not((function (){var or__4099__auto__ = ajax.core.submittable_QMARK_(params);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__4099__auto__ = format;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$handler,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.constant$keyword$format,rf,cljs.core.constant$keyword$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$uri,uri,cljs.core.array_seq([cljs.core.constant$keyword$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10607__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__10607__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10607__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq13141){
var G__13142 = cljs.core.first(seq13141);
var seq13141__$1 = cljs.core.next(seq13141);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__13142,seq13141__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10607__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__10607__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10607__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq13143){
var G__13144 = cljs.core.first(seq13143);
var seq13143__$1 = cljs.core.next(seq13143);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__13144,seq13143__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10607__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__10607__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10607__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq13145){
var G__13146 = cljs.core.first(seq13145);
var seq13145__$1 = cljs.core.next(seq13145);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__13146,seq13145__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10607__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__10607__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10607__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq13147){
var G__13148 = cljs.core.first(seq13147);
var seq13147__$1 = cljs.core.next(seq13147);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__13148,seq13147__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10607__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__10607__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10607__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq13149){
var G__13150 = cljs.core.first(seq13149);
var seq13149__$1 = cljs.core.next(seq13149);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__13150,seq13149__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10607__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__10607__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10607__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq13151){
var G__13152 = cljs.core.first(seq13151);
var seq13151__$1 = cljs.core.next(seq13151);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__13152,seq13151__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10607__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__10607__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10607__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq13153){
var G__13154 = cljs.core.first(seq13153);
var seq13153__$1 = cljs.core.next(seq13153);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__13154,seq13153__$1);
});

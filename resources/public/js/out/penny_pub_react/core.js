// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('penny_pub_react.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('penny_pub_react.pubnub');
goog.require('reagent_forms.core');
penny_pub_react.core.sended_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
penny_pub_react.core.received_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
/**
 * Return a html row
 */
penny_pub_react.core.row = (function penny_pub_react$core$row(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return penny_pub_react.core.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

penny_pub_react.core.row.cljs$core$IFn$_invoke$arity$variadic = (function (label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_3,body], null)], null);
});

penny_pub_react.core.row.cljs$lang$maxFixedArity = (1);

penny_pub_react.core.row.cljs$lang$applyTo = (function (seq12869){
var G__12870 = cljs.core.first(seq12869);
var seq12869__$1 = cljs.core.next(seq12869);
return penny_pub_react.core.row.cljs$core$IFn$_invoke$arity$variadic(G__12870,seq12869__$1);
});
/**
 * This function returns a complete textarea field, using an atom value
 */
penny_pub_react.core.atom_text_area = (function penny_pub_react$core$atom_text_area(id,label,value){
return penny_pub_react.core.row.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$field,cljs.core.constant$keyword$text,cljs.core.constant$keyword$key,id,cljs.core.constant$keyword$id,id,cljs.core.constant$keyword$value,(function (){var G__12875 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12875) : cljs.core.deref.call(null,G__12875));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__12871_SHARP_){
var G__12876 = value;
var G__12877 = p1__12871_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12876,G__12877) : cljs.core.reset_BANG_.call(null,G__12876,G__12877));
})], null)], null)], 0));
});
penny_pub_react.core.navbar = (function penny_pub_react$core$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$navbar$navbar_DASH_inverse$navbar_DASH_fixed_DASH_top,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$navbar_DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),"penny-pub-react"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$navbar_DASH_collapse$collapse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$nav$navbar_DASH_nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$home,reagent.session.get(cljs.core.constant$keyword$page)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,(function (){
return secretary.core.dispatch_BANG_("#/");
})], null),"Home"], null)], null)], null)], null)], null)], null);
});
penny_pub_react.core.home_page = (function penny_pub_react$core$home_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Enter your message in the text area field, and then press the button 'Send'"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.atom_text_area,"txtMessage","Message",penny_pub_react.core.sended_message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"submit",cljs.core.constant$keyword$class,"btn btn-default",cljs.core.constant$keyword$onClick,(function (){
return penny_pub_react.pubnub.send_message((function (){var G__12879 = penny_pub_react.core.sended_message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12879) : cljs.core.deref.call(null,G__12879));
})());
})], null),"Send"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Received messages"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.atom_text_area,"txtReceivedMessages","Message",penny_pub_react.core.received_message], null)], null);
});
penny_pub_react.core.pages = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$home,penny_pub_react.core.home_page], null);
penny_pub_react.core.page = (function penny_pub_react$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12881 = reagent.session.get(cljs.core.constant$keyword$page);
return (penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1 ? penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1(G__12881) : penny_pub_react.core.pages.call(null,G__12881));
})()], null);
});
var action__12738__auto___12884 = (function (params__12739__auto__){
if(cljs.core.map_QMARK_(params__12739__auto__)){
var map__12882 = params__12739__auto__;
var map__12882__$1 = ((cljs.core.seq_QMARK_(map__12882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12882):map__12882);
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
if(cljs.core.vector_QMARK_(params__12739__auto__)){
var vec__12883 = params__12739__auto__;
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__12738__auto___12884);

penny_pub_react.core.mount_components = (function penny_pub_react$core$mount_components(){
var G__12889_12893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.navbar], null);
var G__12890_12894 = document.getElementById("navbar");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12889_12893,G__12890_12894) : reagent.core.render_component.call(null,G__12889_12893,G__12890_12894));

var G__12891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.page], null);
var G__12892 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12891,G__12892) : reagent.core.render_component.call(null,G__12891,G__12892));
});
penny_pub_react.core.init_BANG_ = (function penny_pub_react$core$init_BANG_(){
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");

reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);

penny_pub_react.core.mount_components();

return penny_pub_react.pubnub.init(penny_pub_react.core.received_message);
});

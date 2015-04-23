// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('penny_pub_react.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('penny_pub_react.pubnub');
goog.require('clojure.string');
penny_pub_react.core.team_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
penny_pub_react.core.team_slug = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
penny_pub_react.core.user_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
penny_pub_react.core.player_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
penny_pub_react.core.player_number = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
penny_pub_react.core.batch_size = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((50));
penny_pub_react.core.total_coins = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((50));
penny_pub_react.core.connected_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
penny_pub_react.core.moderator_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
penny_pub_react.core.playing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
penny_pub_react.core.finished_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
penny_pub_react.core.player1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"waiting for player 1",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(50)], null));
penny_pub_react.core.player2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"waiting for player 2",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(0)], null));
penny_pub_react.core.player3 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"waiting for player 3",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(0)], null));
penny_pub_react.core.player4 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"waiting for player 4",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(0)], null));
penny_pub_react.core.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
penny_pub_react.core.qty_to_send = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
penny_pub_react.core.timers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$timer,(0),cljs.core.constant$keyword$timer_DASH_first,(0),cljs.core.constant$keyword$timer_DASH_total,(0)], null));
if(typeof penny_pub_react.core.time_updater !== 'undefined'){
} else {
penny_pub_react.core.time_updater = (function (){var G__23911 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__23913 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23913) : cljs.core.deref.call(null,G__23913));
})()) + (1)));
});
var G__23912 = (1000);
return setInterval(G__23911,G__23912);
})();
}
penny_pub_react.core.add_zero = (function penny_pub_react$core$add_zero(num){
if((num < (10))){
return [cljs.core.str("0"),cljs.core.str(num)].join('');
} else {
return [cljs.core.str(num)].join('');
}
});
penny_pub_react.core.format_time = (function penny_pub_react$core$format_time(seconds){
return [cljs.core.str(penny_pub_react.core.add_zero(((function (){var G__23915 = (seconds / (60));
return parseInt(G__23915);
})() % (60)))),cljs.core.str(":"),cljs.core.str(penny_pub_react.core.add_zero((seconds % (60))))].join('');
});
penny_pub_react.core.clock = (function penny_pub_react$core$clock(){
var time_str = cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__23917 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23917) : cljs.core.deref.call(null,G__23917));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(time_str)], null);
});
penny_pub_react.core.slug = (function penny_pub_react$core$slug(f){

return clojure.string.replace(clojure.string.replace(clojure.string.lower_case(f)," ","-"),/\.(wiki|md)/,"");
});
penny_pub_react.core.convert_team_name_to_slug = (function penny_pub_react$core$convert_team_name_to_slug(){
var G__23921 = penny_pub_react.core.team_slug;
var G__23922 = penny_pub_react.core.slug((function (){var G__23923 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23923) : cljs.core.deref.call(null,G__23923));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23921,G__23922) : cljs.core.reset_BANG_.call(null,G__23921,G__23922));
});
penny_pub_react.core.print_team_url = (function penny_pub_react$core$print_team_url(){
return [cljs.core.str(window.location.href),cljs.core.str("team/"),cljs.core.str((function (){var G__23925 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23925) : cljs.core.deref.call(null,G__23925));
})())].join('');
});
penny_pub_react.core.start_game = (function penny_pub_react$core$start_game(){
if(!((((function (){var G__23966 = (function (){var G__23967 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23967) : cljs.core.deref.call(null,G__23967));
})();
return parseInt(G__23966);
})() > (50))) || (((function (){var G__23968 = (function (){var G__23969 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23969) : cljs.core.deref.call(null,G__23969));
})();
return parseInt(G__23968);
})() > (50))) || (((function (){var G__23970 = (function (){var G__23971 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23971) : cljs.core.deref.call(null,G__23971));
})();
return parseInt(G__23970);
})() < (function (){var G__23972 = (function (){var G__23973 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23973) : cljs.core.deref.call(null,G__23973));
})();
return parseInt(G__23972);
})())))){
penny_pub_react.pubnub.set_state((function (){var G__23974 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23974) : cljs.core.deref.call(null,G__23974));
})(),(function (){var obj23976 = {"username":"moderador","state_game":"playing","batch_size":(function (){var G__23977 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23977) : cljs.core.deref.call(null,G__23977));
})(),"total_coins":(function (){var G__23978 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23978) : cljs.core.deref.call(null,G__23978));
})(),"channel_name":(function (){var G__23979 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23979) : cljs.core.deref.call(null,G__23979));
})()};
return obj23976;
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,(0));

penny_pub_react.pubnub.send_message((function (){var G__23980 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23980) : cljs.core.deref.call(null,G__23980));
})(),(function (){var obj23982 = {"state_game":"start_game","batch_size":(function (){var G__23983 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23983) : cljs.core.deref.call(null,G__23983));
})(),"total_coins":(function (){var G__23984 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23984) : cljs.core.deref.call(null,G__23984));
})()};
return obj23982;
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(function (){var G__23985 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23985) : cljs.core.deref.call(null,G__23985));
})());

var G__23986_23990 = penny_pub_react.core.finished_QMARK_;
var G__23987_23991 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23986_23990,G__23987_23991) : cljs.core.reset_BANG_.call(null,G__23986_23990,G__23987_23991));

var G__23988 = penny_pub_react.core.playing_QMARK_;
var G__23989 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23988,G__23989) : cljs.core.reset_BANG_.call(null,G__23988,G__23989));
} else {
return null;
}
});
penny_pub_react.core.release = (function penny_pub_react$core$release(player_number,qty){
return penny_pub_react.pubnub.send_message((function (){var G__23995 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23995) : cljs.core.deref.call(null,G__23995));
})(),(function (){var obj23997 = {"username":"moderador","state_game":"update_coins","player_from":player_number,"qty":qty};
return obj23997;
})());
});
penny_pub_react.core.navbar = (function penny_pub_react$core$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$navbar_DASH_header,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$class,"navbar-toggle collapsed",cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$data_DASH_toggle,"collapse",cljs.core.constant$keyword$data_DASH_target,".bs-navbar-collapse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$sr_DASH_only,"Toggle navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),"Remotely Flipped"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$nav$collapse$navbar_DASH_collapse$bs_DASH_navbar_DASH_collapse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$nav$navbar_DASH_nav$navbar_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),(function (){var G__23999 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23999) : cljs.core.deref.call(null,G__23999));
})()], null)], null)], null)], null)], null);
});
penny_pub_react.core.copyright = (function penny_pub_react$core$copyright(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p$copyright,"Built by: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://www.agilityfeat.com"], null),"www.agilityfeat.com"], null)], null);
});
penny_pub_react.core.home_page = (function penny_pub_react$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Remotely Flipped"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"The Lean Penny Game for Remote Teams"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Have you ever struggled to teach a product team that its more efficient to work in small batch sizes?\n               Agile and Lean coaches have been using the penny game to show how teams that work in small chunks are much more efficient.\n               Usually this game is played in person with nothing but a stack of coins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"We\u2019ve built thus online version so remote teams can play it together in real-time."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$id,"team",cljs.core.constant$keyword$key,"team",cljs.core.constant$keyword$on_DASH_change,(function (p1__24000_SHARP_){
var G__24007 = penny_pub_react.core.team_name;
var G__24008 = p1__24000_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24007,G__24008) : cljs.core.reset_BANG_.call(null,G__24007,G__24008));
}),cljs.core.constant$keyword$placeholder,"Team Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnTeam",cljs.core.constant$keyword$placeholder,"Team Name",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.convert_team_name_to_slug();

var G__24009_24013 = penny_pub_react.core.moderator_QMARK_;
var G__24010_24014 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24009_24013,G__24010_24014) : cljs.core.reset_BANG_.call(null,G__24009_24013,G__24010_24014));

penny_pub_react.pubnub.connect();

penny_pub_react.pubnub.suscribe_moderator((function (){var G__24011 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24011) : cljs.core.deref.call(null,G__24011));
})(),(function (){var G__24012 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24012) : cljs.core.deref.call(null,G__24012));
})(),penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4,penny_pub_react.core.timers,penny_pub_react.core.finished_QMARK_);

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$step2);
}),cljs.core.constant$keyword$value,"Start Game"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.flip = (function penny_pub_react$core$flip(id){
penny_pub_react.core.img = document.getElementById(id);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),penny_pub_react.core.img.className.indexOf("flip"))){
penny_pub_react.core.img.className = "click panel circle flip";
} else {
penny_pub_react.core.img.className = "click panel circle";
}

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),penny_pub_react.core.img.className.indexOf("flip"));
});
penny_pub_react.core.draw_coin_panel = (function penny_pub_react$core$draw_coin_panel(player,number){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$coin_DASH_table,(function (){var iter__4853__auto__ = (function penny_pub_react$core$draw_coin_panel_$_iter__24154(s__24155){
return (new cljs.core.LazySeq(null,(function (){
var s__24155__$1 = s__24155;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24155__$1);
if(temp__4126__auto__){
var s__24155__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24155__$2)){
var c__4851__auto__ = cljs.core.chunk_first(s__24155__$2);
var size__4852__auto__ = cljs.core.count(c__4851__auto__);
var b__24157 = cljs.core.chunk_buffer(size__4852__auto__);
if((function (){var i__24156 = (0);
while(true){
if((i__24156 < size__4852__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4851__auto__,i__24156);
cljs.core.chunk_append(b__24157,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$click$panel$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$key,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24208 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24208) : cljs.core.deref.call(null,G__24208));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$id,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24209 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24209) : cljs.core.deref.call(null,G__24209));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$class,"click panel circle",cljs.core.constant$keyword$onClick,((function (i__24156,x,c__4851__auto__,size__4852__auto__,b__24157,s__24155__$2,temp__4126__auto__){
return (function (){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24210 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24210) : cljs.core.deref.call(null,G__24210));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(penny_pub_react.core.subtract_QMARK_,false)){
if((((function (){var G__24218 = (function (){var G__24219 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24219) : cljs.core.deref.call(null,G__24219));
})();
return parseInt(G__24218);
})() < cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24220 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24220) : cljs.core.deref.call(null,G__24220));
})()))) && (((function (){var G__24221 = (function (){var G__24222 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24222) : cljs.core.deref.call(null,G__24222));
})();
return parseInt(G__24221);
})() < (function (){var G__24223 = (function (){var G__24224 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24224) : cljs.core.deref.call(null,G__24224));
})();
return parseInt(G__24223);
})()))){
var G__24225 = penny_pub_react.core.qty_to_send;
var G__24226 = ((function (){var G__24227 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24227) : cljs.core.deref.call(null,G__24227));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24225,G__24226) : cljs.core.reset_BANG_.call(null,G__24225,G__24226));
} else {
return penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24228 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24228) : cljs.core.deref.call(null,G__24228));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));
}
} else {
var G__24229 = penny_pub_react.core.qty_to_send;
var G__24230 = ((function (){var G__24231 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24231) : cljs.core.deref.call(null,G__24231));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24229,G__24230) : cljs.core.reset_BANG_.call(null,G__24229,G__24230));
}
});})(i__24156,x,c__4851__auto__,size__4852__auto__,b__24157,s__24155__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$front$icon_DASH_bitcoin_DASH_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$back$icon_DASH_bitcoin_DASH_tales], null)], null));

var G__24293 = (i__24156 + (1));
i__24156 = G__24293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24157),penny_pub_react$core$draw_coin_panel_$_iter__24154(cljs.core.chunk_rest(s__24155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24157),null);
}
} else {
var x = cljs.core.first(s__24155__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$click$panel$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$key,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24232 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24232) : cljs.core.deref.call(null,G__24232));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$id,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24233 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24233) : cljs.core.deref.call(null,G__24233));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$class,"click panel circle",cljs.core.constant$keyword$onClick,((function (x,s__24155__$2,temp__4126__auto__){
return (function (){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24234 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24234) : cljs.core.deref.call(null,G__24234));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(penny_pub_react.core.subtract_QMARK_,false)){
if((((function (){var G__24242 = (function (){var G__24243 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24243) : cljs.core.deref.call(null,G__24243));
})();
return parseInt(G__24242);
})() < cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24244 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24244) : cljs.core.deref.call(null,G__24244));
})()))) && (((function (){var G__24245 = (function (){var G__24246 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24246) : cljs.core.deref.call(null,G__24246));
})();
return parseInt(G__24245);
})() < (function (){var G__24247 = (function (){var G__24248 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24248) : cljs.core.deref.call(null,G__24248));
})();
return parseInt(G__24247);
})()))){
var G__24249 = penny_pub_react.core.qty_to_send;
var G__24250 = ((function (){var G__24251 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24251) : cljs.core.deref.call(null,G__24251));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24249,G__24250) : cljs.core.reset_BANG_.call(null,G__24249,G__24250));
} else {
return penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24252 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24252) : cljs.core.deref.call(null,G__24252));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));
}
} else {
var G__24253 = penny_pub_react.core.qty_to_send;
var G__24254 = ((function (){var G__24255 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24255) : cljs.core.deref.call(null,G__24255));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24253,G__24254) : cljs.core.reset_BANG_.call(null,G__24253,G__24254));
}
});})(x,s__24155__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$front$icon_DASH_bitcoin_DASH_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$back$icon_DASH_bitcoin_DASH_tales], null)], null),penny_pub_react$core$draw_coin_panel_$_iter__24154(cljs.core.rest(s__24155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4853__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24256 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24256) : cljs.core.deref.call(null,G__24256));
})())));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$footer,(((true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,(function (){var G__24258 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24258) : cljs.core.deref.call(null,G__24258));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$player_DASH_controls$active,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"Batch ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,(function (){var G__24259 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24259) : cljs.core.deref.call(null,G__24259));
})()," / ",(function (){var G__24260 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24260) : cljs.core.deref.call(null,G__24260));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$game_DASH_btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$value,"Release",cljs.core.constant$keyword$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24268 = (function (){var G__24269 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24269) : cljs.core.deref.call(null,G__24269));
})();
return parseInt(G__24268);
})(),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24270 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24270) : cljs.core.deref.call(null,G__24270));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24271 = (function (){var G__24272 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24272) : cljs.core.deref.call(null,G__24272));
})();
return parseInt(G__24271);
})(),(function (){var G__24273 = (function (){var G__24274 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24274) : cljs.core.deref.call(null,G__24274));
})();
return parseInt(G__24273);
})())))?"active":null),cljs.core.constant$keyword$onClick,(function (){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24282 = (function (){var G__24283 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24283) : cljs.core.deref.call(null,G__24283));
})();
return parseInt(G__24282);
})(),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__24284 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24284) : cljs.core.deref.call(null,G__24284));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24285 = (function (){var G__24286 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24286) : cljs.core.deref.call(null,G__24286));
})();
return parseInt(G__24285);
})(),(function (){var G__24287 = (function (){var G__24288 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24288) : cljs.core.deref.call(null,G__24288));
})();
return parseInt(G__24287);
})()))){
penny_pub_react.core.release(number,(function (){var G__24289 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24289) : cljs.core.deref.call(null,G__24289));
})());

var G__24290 = penny_pub_react.core.qty_to_send;
var G__24291 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24290,G__24291) : cljs.core.reset_BANG_.call(null,G__24290,G__24291));
} else {
return null;
}
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$player_DASH_name,"Player ",number,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__24292 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24292) : cljs.core.deref.call(null,G__24292));
})())], null)], null)], null)], null);
});
penny_pub_react.core.game = (function penny_pub_react$core$game(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$game_DASH_on,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$timer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"Overall Time:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.clock], null)], null)], null),(((cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__24296 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24296) : cljs.core.deref.call(null,G__24296));
})()) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$timer_DASH_first,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"First Batch:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__24297 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24297) : cljs.core.deref.call(null,G__24297));
})()))], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$top_DASH_left,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player1,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$top_DASH_right,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player2,(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$bottom_DASH_left,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player3,(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$bottom_DASH_right,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player4,(4)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$floatClear], null)], null);
});
penny_pub_react.core.show_results = (function penny_pub_react$core$show_results(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Round complete!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,(function (){var G__24314 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24314) : cljs.core.deref.call(null,G__24314));
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__24315 = penny_pub_react.core.moderator_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24315) : cljs.core.deref.call(null,G__24315));
})()))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$on_DASH_change,(function (p1__24298_SHARP_){
var G__24316 = penny_pub_react.core.total_coins;
var G__24317 = p1__24298_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24316,G__24317) : cljs.core.reset_BANG_.call(null,G__24316,G__24317));
}),cljs.core.constant$keyword$value,(function (){var G__24318 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24318) : cljs.core.deref.call(null,G__24318));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__24319 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24319) : cljs.core.deref.call(null,G__24319));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__24299_SHARP_){
var G__24320 = penny_pub_react.core.batch_size;
var G__24321 = p1__24299_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24320,G__24321) : cljs.core.reset_BANG_.call(null,G__24320,G__24321));
}),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__24322 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24322) : cljs.core.deref.call(null,G__24322));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_total.cljs$core$IFn$_invoke$arity$1((function (){var G__24323 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24323) : cljs.core.deref.call(null,G__24323));
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Don't forget to write down the stats and then start new round."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnStart",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.start_game();

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$step4);
}),cljs.core.constant$keyword$value,"Start new round"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$disabled,true,cljs.core.constant$keyword$value,(function (){var G__24324 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24324) : cljs.core.deref.call(null,G__24324));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__24325 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24325) : cljs.core.deref.call(null,G__24325));
})(),cljs.core.constant$keyword$disabled,true,cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__24326 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24326) : cljs.core.deref.call(null,G__24326));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_total.cljs$core$IFn$_invoke$arity$1((function (){var G__24327 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24327) : cljs.core.deref.call(null,G__24327));
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Waiting for the Moderator starts a new round..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
});
penny_pub_react.core.step5_page = (function penny_pub_react$core$step5_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24329 = penny_pub_react.core.finished_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24329) : cljs.core.deref.call(null,G__24329));
})(),false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.game], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.show_results], null);
}
});
penny_pub_react.core.get_total_players = (function penny_pub_react$core$get_total_players(){
var G__24349_24368 = penny_pub_react.core.counter;
var G__24350_24369 = (0);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24349_24368,G__24350_24369) : cljs.core.reset_BANG_.call(null,G__24349_24368,G__24350_24369));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24351 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24351) : cljs.core.deref.call(null,G__24351));
})()))){
var G__24352_24370 = penny_pub_react.core.counter;
var G__24353_24371 = ((function (){var G__24354 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24354) : cljs.core.deref.call(null,G__24354));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24352_24370,G__24353_24371) : cljs.core.reset_BANG_.call(null,G__24352_24370,G__24353_24371));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24355 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24355) : cljs.core.deref.call(null,G__24355));
})()))){
var G__24356_24372 = penny_pub_react.core.counter;
var G__24357_24373 = ((function (){var G__24358 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24358) : cljs.core.deref.call(null,G__24358));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24356_24372,G__24357_24373) : cljs.core.reset_BANG_.call(null,G__24356_24372,G__24357_24373));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24359 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24359) : cljs.core.deref.call(null,G__24359));
})()))){
var G__24360_24374 = penny_pub_react.core.counter;
var G__24361_24375 = ((function (){var G__24362 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24362) : cljs.core.deref.call(null,G__24362));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24360_24374,G__24361_24375) : cljs.core.reset_BANG_.call(null,G__24360_24374,G__24361_24375));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24363 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24363) : cljs.core.deref.call(null,G__24363));
})()))){
var G__24364_24376 = penny_pub_react.core.counter;
var G__24365_24377 = ((function (){var G__24366 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24366) : cljs.core.deref.call(null,G__24366));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24364_24376,G__24365_24377) : cljs.core.reset_BANG_.call(null,G__24364_24376,G__24365_24377));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$num_DASH_p,(function (){var G__24367 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24367) : cljs.core.deref.call(null,G__24367));
})(),"/4"], null);
});
penny_pub_react.core.get_list_players = (function penny_pub_react$core$get_list_players(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$people_DASH_joined_DASH_list,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24398 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24398) : cljs.core.deref.call(null,G__24398));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24399 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24399) : cljs.core.deref.call(null,G__24399));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24400 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24400) : cljs.core.deref.call(null,G__24400));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24401 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24401) : cljs.core.deref.call(null,G__24401));
})()))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,"Joined:"], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24402 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24402) : cljs.core.deref.call(null,G__24402));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__24403 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24403) : cljs.core.deref.call(null,G__24403));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24404 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24404) : cljs.core.deref.call(null,G__24404));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__24405 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24405) : cljs.core.deref.call(null,G__24405));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24406 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24406) : cljs.core.deref.call(null,G__24406));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__24407 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24407) : cljs.core.deref.call(null,G__24407));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24408 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24408) : cljs.core.deref.call(null,G__24408));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__24409 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24409) : cljs.core.deref.call(null,G__24409));
})())], null):null)], null);
});
penny_pub_react.core.li_player = (function penny_pub_react$core$li_player(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("new",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24414 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24414) : cljs.core.deref.call(null,G__24414));
})()))){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_block], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__24415 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24415) : cljs.core.deref.call(null,G__24415));
})())], null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24416 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24416) : cljs.core.deref.call(null,G__24416));
})()))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$active,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__24417 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24417) : cljs.core.deref.call(null,G__24417));
})())], null);
} else {
return null;
}
});
penny_pub_react.core.step4_page = (function penny_pub_react$core$step4_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,(function (){var G__24429 = penny_pub_react.core.playing_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24429) : cljs.core.deref.call(null,G__24429));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Lets Flip!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,(function (){var G__24430 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24430) : cljs.core.deref.call(null,G__24430));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$team_DASH_members_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$plyrs,"Players:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$list_DASH_online,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player4], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__24431 = penny_pub_react.core.moderator_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24431) : cljs.core.deref.call(null,G__24431));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Please wait while the organizer explains the game to you and then starts the round."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$on_DASH_change,(function (p1__24418_SHARP_){
var G__24432 = penny_pub_react.core.total_coins;
var G__24433 = p1__24418_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24432,G__24433) : cljs.core.reset_BANG_.call(null,G__24432,G__24433));
}),cljs.core.constant$keyword$value,(function (){var G__24434 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24434) : cljs.core.deref.call(null,G__24434));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__24435 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24435) : cljs.core.deref.call(null,G__24435));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__24419_SHARP_){
var G__24436 = penny_pub_react.core.batch_size;
var G__24437 = p1__24419_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24436,G__24437) : cljs.core.reset_BANG_.call(null,G__24436,G__24437));
}),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnStart",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.start_game();

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$step4);
}),cljs.core.constant$keyword$value,"Start Flipping"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Waiting for the Moderator starts the game.."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step5_page], null);
}
});
penny_pub_react.core.step2_page = (function penny_pub_react$core$step2_page(){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24450 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24450) : cljs.core.deref.call(null,G__24450));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24451 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24451) : cljs.core.deref.call(null,G__24451));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24452 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24452) : cljs.core.deref.call(null,G__24452));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__24453 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24453) : cljs.core.deref.call(null,G__24453));
})())))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Its time to get flipped!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Your team url:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$url_DASH_wrap,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_link2], null),penny_pub_react.core.print_team_url()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Send this to your team so the can join in!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$people_DASH_joined,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_total_players], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span," Joined"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_list_players], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
}
});
penny_pub_react.core.step3_page = (function penny_pub_react$core$step3_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_collaboration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Team:"], null),(function (){var G__24468 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24468) : cljs.core.deref.call(null,G__24468));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,[cljs.core.str("You are player "),cljs.core.str((function (){var G__24469 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24469) : cljs.core.deref.call(null,G__24469));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"of 4 max"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Type your name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$id,"user_name",cljs.core.constant$keyword$key,"user_name",cljs.core.constant$keyword$on_DASH_change,(function (p1__24454_SHARP_){
var G__24470 = penny_pub_react.core.user_name;
var G__24471 = p1__24454_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24470,G__24471) : cljs.core.reset_BANG_.call(null,G__24470,G__24471));
}),cljs.core.constant$keyword$placeholder,"Your Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnReady",cljs.core.constant$keyword$onClick,(function (){
var G__24472_24481 = penny_pub_react.core.player_name;
var G__24473_24482 = (function (){var G__24474 = penny_pub_react.core.user_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24474) : cljs.core.deref.call(null,G__24474));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24472_24481,G__24473_24482) : cljs.core.reset_BANG_.call(null,G__24472_24481,G__24473_24482));

penny_pub_react.pubnub.set_state((function (){var G__24475 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24475) : cljs.core.deref.call(null,G__24475));
})(),(function (){var obj24477 = {"username":(function (){var G__24478 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24478) : cljs.core.deref.call(null,G__24478));
})(),"player_number":(function (){var G__24479 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24479) : cljs.core.deref.call(null,G__24479));
})()};
return obj24477;
})());

return penny_pub_react.pubnub.update_players_data((function (){var G__24480 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24480) : cljs.core.deref.call(null,G__24480));
})(),penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4);
}),cljs.core.constant$keyword$value,"I'm Ready"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.connecting_page = (function penny_pub_react$core$connecting_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Connecting..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.team_page = (function penny_pub_react$core$team_page(){
if(cljs.core.truth_((function (){var or__4099__auto__ = clojure.string.blank_QMARK_((function (){var G__24490 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24490) : cljs.core.deref.call(null,G__24490));
})());
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = clojure.string.blank_QMARK_((function (){var G__24492 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24492) : cljs.core.deref.call(null,G__24492));
})());
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24493 = penny_pub_react.core.connected_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24493) : cljs.core.deref.call(null,G__24493));
})(),false);
}
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.connecting_page], null);
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_((function (){var G__24494 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24494) : cljs.core.deref.call(null,G__24494));
})()))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step3_page], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
}
}
});
penny_pub_react.core.pages = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$home,penny_pub_react.core.home_page,cljs.core.constant$keyword$step2,penny_pub_react.core.step2_page,cljs.core.constant$keyword$step3,penny_pub_react.core.step3_page,cljs.core.constant$keyword$step4,penny_pub_react.core.step4_page,cljs.core.constant$keyword$step5,penny_pub_react.core.step5_page,cljs.core.constant$keyword$connecting,penny_pub_react.core.connecting_page,cljs.core.constant$keyword$team,penny_pub_react.core.team_page], null);
penny_pub_react.core.page = (function penny_pub_react$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24496 = reagent.session.get(cljs.core.constant$keyword$page);
return (penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1 ? penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1(G__24496) : penny_pub_react.core.pages.call(null,G__24496));
})()], null);
});
var action__10278__auto___24499 = (function (params__10279__auto__){
if(cljs.core.map_QMARK_(params__10279__auto__)){
var map__24497 = params__10279__auto__;
var map__24497__$1 = ((cljs.core.seq_QMARK_(map__24497))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24497):map__24497);
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
if(cljs.core.vector_QMARK_(params__10279__auto__)){
var vec__24498 = params__10279__auto__;
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__10278__auto___24499);

penny_pub_react.core.mount_components = (function penny_pub_react$core$mount_components(){
var G__24504_24508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.navbar], null);
var G__24505_24509 = document.getElementById("top");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__24504_24508,G__24505_24509) : reagent.core.render_component.call(null,G__24504_24508,G__24505_24509));

var G__24506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.page], null);
var G__24507 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__24506,G__24507) : reagent.core.render_component.call(null,G__24506,G__24507));
});
penny_pub_react.core.set_page = (function penny_pub_react$core$set_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),window.location.href.indexOf("/team/"))){
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
penny_pub_react.pubnub.connect();

var G__24513_24516 = penny_pub_react.core.team_slug;
var G__24514_24517 = clojure.string.replace(window.location.pathname,"/team/","");
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24513_24516,G__24514_24517) : cljs.core.reset_BANG_.call(null,G__24513_24516,G__24514_24517));

penny_pub_react.pubnub.suscribe_user((function (){var G__24515 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24515) : cljs.core.deref.call(null,G__24515));
})(),penny_pub_react.core.team_name,penny_pub_react.core.player_number,penny_pub_react.core.player_name,penny_pub_react.core.connected_QMARK_,penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4,penny_pub_react.core.playing_QMARK_,penny_pub_react.core.batch_size,penny_pub_react.core.timers,penny_pub_react.core.finished_QMARK_);

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$team);
}
});
penny_pub_react.core.init_BANG_ = (function penny_pub_react$core$init_BANG_(){
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");

penny_pub_react.core.set_page();

return penny_pub_react.core.mount_components();
});

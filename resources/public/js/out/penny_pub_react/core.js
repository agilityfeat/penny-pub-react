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
penny_pub_react.core.time_updater = (function (){var G__10409 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__10411 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10411) : cljs.core.deref.call(null,G__10411));
})()) + (1)));
});
var G__10410 = (1000);
return setInterval(G__10409,G__10410);
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
return [cljs.core.str(penny_pub_react.core.add_zero(((function (){var G__10413 = (seconds / (60));
return parseInt(G__10413);
})() % (60)))),cljs.core.str(":"),cljs.core.str(penny_pub_react.core.add_zero((seconds % (60))))].join('');
});
penny_pub_react.core.clock = (function penny_pub_react$core$clock(){
var time_str = cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__10415 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10415) : cljs.core.deref.call(null,G__10415));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(time_str)], null);
});
penny_pub_react.core.slug = (function penny_pub_react$core$slug(f){

return clojure.string.replace(clojure.string.replace(clojure.string.lower_case(f)," ","-"),/\.(wiki|md)/,"");
});
penny_pub_react.core.convert_team_name_to_slug = (function penny_pub_react$core$convert_team_name_to_slug(){
var G__10419 = penny_pub_react.core.team_slug;
var G__10420 = penny_pub_react.core.slug((function (){var G__10421 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10421) : cljs.core.deref.call(null,G__10421));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10419,G__10420) : cljs.core.reset_BANG_.call(null,G__10419,G__10420));
});
penny_pub_react.core.print_team_url = (function penny_pub_react$core$print_team_url(){
return [cljs.core.str(window.location.href),cljs.core.str("team/"),cljs.core.str((function (){var G__10423 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10423) : cljs.core.deref.call(null,G__10423));
})())].join('');
});
penny_pub_react.core.start_game = (function penny_pub_react$core$start_game(){
if(!((((function (){var G__10464 = (function (){var G__10465 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10465) : cljs.core.deref.call(null,G__10465));
})();
return parseInt(G__10464);
})() > (50))) || (((function (){var G__10466 = (function (){var G__10467 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10467) : cljs.core.deref.call(null,G__10467));
})();
return parseInt(G__10466);
})() > (50))) || (((function (){var G__10468 = (function (){var G__10469 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10469) : cljs.core.deref.call(null,G__10469));
})();
return parseInt(G__10468);
})() < (function (){var G__10470 = (function (){var G__10471 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10471) : cljs.core.deref.call(null,G__10471));
})();
return parseInt(G__10470);
})())))){
penny_pub_react.pubnub.set_state((function (){var G__10472 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10472) : cljs.core.deref.call(null,G__10472));
})(),(function (){var obj10474 = {"username":"moderador","state_game":"playing","batch_size":(function (){var G__10475 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10475) : cljs.core.deref.call(null,G__10475));
})(),"total_coins":(function (){var G__10476 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10476) : cljs.core.deref.call(null,G__10476));
})(),"channel_name":(function (){var G__10477 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10477) : cljs.core.deref.call(null,G__10477));
})()};
return obj10474;
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,(0));

penny_pub_react.pubnub.send_message((function (){var G__10478 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10478) : cljs.core.deref.call(null,G__10478));
})(),(function (){var obj10480 = {"state_game":"start_game","batch_size":(function (){var G__10481 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10481) : cljs.core.deref.call(null,G__10481));
})(),"total_coins":(function (){var G__10482 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10482) : cljs.core.deref.call(null,G__10482));
})()};
return obj10480;
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(function (){var G__10483 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10483) : cljs.core.deref.call(null,G__10483));
})());

var G__10484_10488 = penny_pub_react.core.finished_QMARK_;
var G__10485_10489 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10484_10488,G__10485_10489) : cljs.core.reset_BANG_.call(null,G__10484_10488,G__10485_10489));

var G__10486 = penny_pub_react.core.playing_QMARK_;
var G__10487 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10486,G__10487) : cljs.core.reset_BANG_.call(null,G__10486,G__10487));
} else {
return null;
}
});
penny_pub_react.core.release = (function penny_pub_react$core$release(player_number,qty){
return penny_pub_react.pubnub.send_message((function (){var G__10493 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10493) : cljs.core.deref.call(null,G__10493));
})(),(function (){var obj10495 = {"username":"moderador","state_game":"update_coins","player_from":player_number,"qty":qty};
return obj10495;
})());
});
penny_pub_react.core.navbar = (function penny_pub_react$core$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$navbar_DASH_header,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$class,"navbar-toggle collapsed",cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$data_DASH_toggle,"collapse",cljs.core.constant$keyword$data_DASH_target,".bs-navbar-collapse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$sr_DASH_only,"Toggle navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),"Remotely Flipped"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$nav$collapse$navbar_DASH_collapse$bs_DASH_navbar_DASH_collapse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$nav$navbar_DASH_nav$navbar_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),(function (){var G__10497 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10497) : cljs.core.deref.call(null,G__10497));
})()], null)], null)], null)], null)], null);
});
penny_pub_react.core.copyright = (function penny_pub_react$core$copyright(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p$copyright,"Built by: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://www.agilityfeat.com"], null),"www.agilityfeat.com"], null)], null);
});
penny_pub_react.core.home_page = (function penny_pub_react$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Remotely Flipped"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"The Lean Penny Game for Remote Teams"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Have you ever struggled to teach a product team that its more efficient to work in small batch sizes?\n               Agile and Lean coaches have been using the penny game to show how teams that work in small chunks are much more efficient.\n               Usually this game is played in person with nothing but a stack of coins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"We\u2019ve built thus online version so remote teams can play it together in real-time."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$id,"team",cljs.core.constant$keyword$key,"team",cljs.core.constant$keyword$on_DASH_change,(function (p1__10498_SHARP_){
var G__10505 = penny_pub_react.core.team_name;
var G__10506 = p1__10498_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10505,G__10506) : cljs.core.reset_BANG_.call(null,G__10505,G__10506));
}),cljs.core.constant$keyword$placeholder,"Team Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnTeam",cljs.core.constant$keyword$placeholder,"Team Name",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.convert_team_name_to_slug();

var G__10507_10511 = penny_pub_react.core.moderator_QMARK_;
var G__10508_10512 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10507_10511,G__10508_10512) : cljs.core.reset_BANG_.call(null,G__10507_10511,G__10508_10512));

penny_pub_react.pubnub.connect();

penny_pub_react.pubnub.suscribe_moderator((function (){var G__10509 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10509) : cljs.core.deref.call(null,G__10509));
})(),(function (){var G__10510 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10510) : cljs.core.deref.call(null,G__10510));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$coin_DASH_table,(function (){var iter__4853__auto__ = (function penny_pub_react$core$draw_coin_panel_$_iter__10652(s__10653){
return (new cljs.core.LazySeq(null,(function (){
var s__10653__$1 = s__10653;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10653__$1);
if(temp__4126__auto__){
var s__10653__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10653__$2)){
var c__4851__auto__ = cljs.core.chunk_first(s__10653__$2);
var size__4852__auto__ = cljs.core.count(c__4851__auto__);
var b__10655 = cljs.core.chunk_buffer(size__4852__auto__);
if((function (){var i__10654 = (0);
while(true){
if((i__10654 < size__4852__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4851__auto__,i__10654);
cljs.core.chunk_append(b__10655,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$click$panel$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$key,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10706 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10706) : cljs.core.deref.call(null,G__10706));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$id,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10707 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10707) : cljs.core.deref.call(null,G__10707));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$class,"click panel circle",cljs.core.constant$keyword$onClick,((function (i__10654,x,c__4851__auto__,size__4852__auto__,b__10655,s__10653__$2,temp__4126__auto__){
return (function (){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10708 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10708) : cljs.core.deref.call(null,G__10708));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(penny_pub_react.core.subtract_QMARK_,false)){
if((((function (){var G__10716 = (function (){var G__10717 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10717) : cljs.core.deref.call(null,G__10717));
})();
return parseInt(G__10716);
})() < cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10718 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10718) : cljs.core.deref.call(null,G__10718));
})()))) && (((function (){var G__10719 = (function (){var G__10720 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10720) : cljs.core.deref.call(null,G__10720));
})();
return parseInt(G__10719);
})() < (function (){var G__10721 = (function (){var G__10722 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10722) : cljs.core.deref.call(null,G__10722));
})();
return parseInt(G__10721);
})()))){
var G__10723 = penny_pub_react.core.qty_to_send;
var G__10724 = ((function (){var G__10725 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10725) : cljs.core.deref.call(null,G__10725));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10723,G__10724) : cljs.core.reset_BANG_.call(null,G__10723,G__10724));
} else {
return penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10726 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10726) : cljs.core.deref.call(null,G__10726));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));
}
} else {
var G__10727 = penny_pub_react.core.qty_to_send;
var G__10728 = ((function (){var G__10729 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10729) : cljs.core.deref.call(null,G__10729));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10727,G__10728) : cljs.core.reset_BANG_.call(null,G__10727,G__10728));
}
});})(i__10654,x,c__4851__auto__,size__4852__auto__,b__10655,s__10653__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$front$icon_DASH_bitcoin_DASH_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$back$icon_DASH_bitcoin_DASH_tales], null)], null));

var G__10791 = (i__10654 + (1));
i__10654 = G__10791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10655),penny_pub_react$core$draw_coin_panel_$_iter__10652(cljs.core.chunk_rest(s__10653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10655),null);
}
} else {
var x = cljs.core.first(s__10653__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$click$panel$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$key,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10730 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10730) : cljs.core.deref.call(null,G__10730));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$id,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10731 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10731) : cljs.core.deref.call(null,G__10731));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$class,"click panel circle",cljs.core.constant$keyword$onClick,((function (x,s__10653__$2,temp__4126__auto__){
return (function (){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10732 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10732) : cljs.core.deref.call(null,G__10732));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(penny_pub_react.core.subtract_QMARK_,false)){
if((((function (){var G__10740 = (function (){var G__10741 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10741) : cljs.core.deref.call(null,G__10741));
})();
return parseInt(G__10740);
})() < cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10742 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10742) : cljs.core.deref.call(null,G__10742));
})()))) && (((function (){var G__10743 = (function (){var G__10744 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10744) : cljs.core.deref.call(null,G__10744));
})();
return parseInt(G__10743);
})() < (function (){var G__10745 = (function (){var G__10746 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10746) : cljs.core.deref.call(null,G__10746));
})();
return parseInt(G__10745);
})()))){
var G__10747 = penny_pub_react.core.qty_to_send;
var G__10748 = ((function (){var G__10749 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10749) : cljs.core.deref.call(null,G__10749));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10747,G__10748) : cljs.core.reset_BANG_.call(null,G__10747,G__10748));
} else {
return penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10750 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10750) : cljs.core.deref.call(null,G__10750));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));
}
} else {
var G__10751 = penny_pub_react.core.qty_to_send;
var G__10752 = ((function (){var G__10753 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10753) : cljs.core.deref.call(null,G__10753));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10751,G__10752) : cljs.core.reset_BANG_.call(null,G__10751,G__10752));
}
});})(x,s__10653__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$front$icon_DASH_bitcoin_DASH_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$back$icon_DASH_bitcoin_DASH_tales], null)], null),penny_pub_react$core$draw_coin_panel_$_iter__10652(cljs.core.rest(s__10653__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4853__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10754 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10754) : cljs.core.deref.call(null,G__10754));
})())));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$footer,(((true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,(function (){var G__10756 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10756) : cljs.core.deref.call(null,G__10756));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$player_DASH_controls$active,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"Batch ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,(function (){var G__10757 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10757) : cljs.core.deref.call(null,G__10757));
})()," / ",(function (){var G__10758 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10758) : cljs.core.deref.call(null,G__10758));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$game_DASH_btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$value,"Release",cljs.core.constant$keyword$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10766 = (function (){var G__10767 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10767) : cljs.core.deref.call(null,G__10767));
})();
return parseInt(G__10766);
})(),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10768 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10768) : cljs.core.deref.call(null,G__10768));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10769 = (function (){var G__10770 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10770) : cljs.core.deref.call(null,G__10770));
})();
return parseInt(G__10769);
})(),(function (){var G__10771 = (function (){var G__10772 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10772) : cljs.core.deref.call(null,G__10772));
})();
return parseInt(G__10771);
})())))?"active":null),cljs.core.constant$keyword$onClick,(function (){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10780 = (function (){var G__10781 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10781) : cljs.core.deref.call(null,G__10781));
})();
return parseInt(G__10780);
})(),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__10782 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10782) : cljs.core.deref.call(null,G__10782));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10783 = (function (){var G__10784 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10784) : cljs.core.deref.call(null,G__10784));
})();
return parseInt(G__10783);
})(),(function (){var G__10785 = (function (){var G__10786 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10786) : cljs.core.deref.call(null,G__10786));
})();
return parseInt(G__10785);
})()))){
penny_pub_react.core.release(number,(function (){var G__10787 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10787) : cljs.core.deref.call(null,G__10787));
})());

var G__10788 = penny_pub_react.core.qty_to_send;
var G__10789 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10788,G__10789) : cljs.core.reset_BANG_.call(null,G__10788,G__10789));
} else {
return null;
}
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$player_DASH_name,"Player ",number,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__10790 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10790) : cljs.core.deref.call(null,G__10790));
})())], null)], null)], null)], null);
});
penny_pub_react.core.game = (function penny_pub_react$core$game(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$game_DASH_on,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$timer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"Overall Time:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.clock], null)], null)], null),(((cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__10794 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10794) : cljs.core.deref.call(null,G__10794));
})()) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$timer_DASH_first,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"First Batch:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__10795 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10795) : cljs.core.deref.call(null,G__10795));
})()))], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$top_DASH_left,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player1,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$top_DASH_right,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player2,(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$bottom_DASH_left,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player3,(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$bottom_DASH_right,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player4,(4)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$floatClear], null)], null);
});
penny_pub_react.core.show_results = (function penny_pub_react$core$show_results(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Round complete!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,(function (){var G__10812 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10812) : cljs.core.deref.call(null,G__10812));
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__10813 = penny_pub_react.core.moderator_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10813) : cljs.core.deref.call(null,G__10813));
})()))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$on_DASH_change,(function (p1__10796_SHARP_){
var G__10814 = penny_pub_react.core.total_coins;
var G__10815 = p1__10796_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10814,G__10815) : cljs.core.reset_BANG_.call(null,G__10814,G__10815));
}),cljs.core.constant$keyword$value,(function (){var G__10816 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10816) : cljs.core.deref.call(null,G__10816));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__10817 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10817) : cljs.core.deref.call(null,G__10817));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__10797_SHARP_){
var G__10818 = penny_pub_react.core.batch_size;
var G__10819 = p1__10797_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10818,G__10819) : cljs.core.reset_BANG_.call(null,G__10818,G__10819));
}),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__10820 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10820) : cljs.core.deref.call(null,G__10820));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_total.cljs$core$IFn$_invoke$arity$1((function (){var G__10821 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10821) : cljs.core.deref.call(null,G__10821));
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Don't forget to write down the stats and then start new round."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnStart",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.start_game();

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$step4);
}),cljs.core.constant$keyword$value,"Start new round"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$disabled,true,cljs.core.constant$keyword$value,(function (){var G__10822 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10822) : cljs.core.deref.call(null,G__10822));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__10823 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10823) : cljs.core.deref.call(null,G__10823));
})(),cljs.core.constant$keyword$disabled,true,cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__10824 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10824) : cljs.core.deref.call(null,G__10824));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_total.cljs$core$IFn$_invoke$arity$1((function (){var G__10825 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10825) : cljs.core.deref.call(null,G__10825));
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Waiting for the Moderator starts a new round..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
});
penny_pub_react.core.step5_page = (function penny_pub_react$core$step5_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10827 = penny_pub_react.core.finished_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10827) : cljs.core.deref.call(null,G__10827));
})(),false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.game], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.show_results], null);
}
});
penny_pub_react.core.get_total_players = (function penny_pub_react$core$get_total_players(){
var G__10847_10866 = penny_pub_react.core.counter;
var G__10848_10867 = (0);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10847_10866,G__10848_10867) : cljs.core.reset_BANG_.call(null,G__10847_10866,G__10848_10867));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10849 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10849) : cljs.core.deref.call(null,G__10849));
})()))){
var G__10850_10868 = penny_pub_react.core.counter;
var G__10851_10869 = ((function (){var G__10852 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10852) : cljs.core.deref.call(null,G__10852));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10850_10868,G__10851_10869) : cljs.core.reset_BANG_.call(null,G__10850_10868,G__10851_10869));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10853 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10853) : cljs.core.deref.call(null,G__10853));
})()))){
var G__10854_10870 = penny_pub_react.core.counter;
var G__10855_10871 = ((function (){var G__10856 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10856) : cljs.core.deref.call(null,G__10856));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10854_10870,G__10855_10871) : cljs.core.reset_BANG_.call(null,G__10854_10870,G__10855_10871));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10857 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10857) : cljs.core.deref.call(null,G__10857));
})()))){
var G__10858_10872 = penny_pub_react.core.counter;
var G__10859_10873 = ((function (){var G__10860 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10860) : cljs.core.deref.call(null,G__10860));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10858_10872,G__10859_10873) : cljs.core.reset_BANG_.call(null,G__10858_10872,G__10859_10873));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10861 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10861) : cljs.core.deref.call(null,G__10861));
})()))){
var G__10862_10874 = penny_pub_react.core.counter;
var G__10863_10875 = ((function (){var G__10864 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10864) : cljs.core.deref.call(null,G__10864));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10862_10874,G__10863_10875) : cljs.core.reset_BANG_.call(null,G__10862_10874,G__10863_10875));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$num_DASH_p,(function (){var G__10865 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10865) : cljs.core.deref.call(null,G__10865));
})(),"/4"], null);
});
penny_pub_react.core.get_list_players = (function penny_pub_react$core$get_list_players(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$people_DASH_joined_DASH_list,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10896 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10896) : cljs.core.deref.call(null,G__10896));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10897 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10897) : cljs.core.deref.call(null,G__10897));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10898 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10898) : cljs.core.deref.call(null,G__10898));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10899 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10899) : cljs.core.deref.call(null,G__10899));
})()))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,"Joined:"], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10900 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10900) : cljs.core.deref.call(null,G__10900));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__10901 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10901) : cljs.core.deref.call(null,G__10901));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10902 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10902) : cljs.core.deref.call(null,G__10902));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__10903 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10903) : cljs.core.deref.call(null,G__10903));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10904 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10904) : cljs.core.deref.call(null,G__10904));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__10905 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10905) : cljs.core.deref.call(null,G__10905));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10906 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10906) : cljs.core.deref.call(null,G__10906));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__10907 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10907) : cljs.core.deref.call(null,G__10907));
})())], null):null)], null);
});
penny_pub_react.core.li_player = (function penny_pub_react$core$li_player(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("new",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10912 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10912) : cljs.core.deref.call(null,G__10912));
})()))){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_block], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__10913 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10913) : cljs.core.deref.call(null,G__10913));
})())], null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10914 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10914) : cljs.core.deref.call(null,G__10914));
})()))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$active,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__10915 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10915) : cljs.core.deref.call(null,G__10915));
})())], null);
} else {
return null;
}
});
penny_pub_react.core.step4_page = (function penny_pub_react$core$step4_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,(function (){var G__10927 = penny_pub_react.core.playing_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10927) : cljs.core.deref.call(null,G__10927));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Lets Flip!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,(function (){var G__10928 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10928) : cljs.core.deref.call(null,G__10928));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$team_DASH_members_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$plyrs,"Players:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$list_DASH_online,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player4], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__10929 = penny_pub_react.core.moderator_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10929) : cljs.core.deref.call(null,G__10929));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Please wait while the organizer explains the game to you and then starts the round."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$on_DASH_change,(function (p1__10916_SHARP_){
var G__10930 = penny_pub_react.core.total_coins;
var G__10931 = p1__10916_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10930,G__10931) : cljs.core.reset_BANG_.call(null,G__10930,G__10931));
}),cljs.core.constant$keyword$value,(function (){var G__10932 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10932) : cljs.core.deref.call(null,G__10932));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__10933 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10933) : cljs.core.deref.call(null,G__10933));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__10917_SHARP_){
var G__10934 = penny_pub_react.core.batch_size;
var G__10935 = p1__10917_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10934,G__10935) : cljs.core.reset_BANG_.call(null,G__10934,G__10935));
}),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnStart",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.start_game();

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$step4);
}),cljs.core.constant$keyword$value,"Start Flipping"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Waiting for the Moderator starts the game.."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step5_page], null);
}
});
penny_pub_react.core.step2_page = (function penny_pub_react$core$step2_page(){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10948 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10948) : cljs.core.deref.call(null,G__10948));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10949 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10949) : cljs.core.deref.call(null,G__10949));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10950 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10950) : cljs.core.deref.call(null,G__10950));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__10951 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10951) : cljs.core.deref.call(null,G__10951));
})())))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Its time to get flipped!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Your team url:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$url_DASH_wrap,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_link2], null),penny_pub_react.core.print_team_url()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Send this to your team so the can join in!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$people_DASH_joined,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_total_players], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span," Joined"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_list_players], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
}
});
penny_pub_react.core.step3_page = (function penny_pub_react$core$step3_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_collaboration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Team:"], null),(function (){var G__10966 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10966) : cljs.core.deref.call(null,G__10966));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,[cljs.core.str("You are player "),cljs.core.str((function (){var G__10967 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10967) : cljs.core.deref.call(null,G__10967));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"of 4 max"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Type your name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$id,"user_name",cljs.core.constant$keyword$key,"user_name",cljs.core.constant$keyword$on_DASH_change,(function (p1__10952_SHARP_){
var G__10968 = penny_pub_react.core.user_name;
var G__10969 = p1__10952_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10968,G__10969) : cljs.core.reset_BANG_.call(null,G__10968,G__10969));
}),cljs.core.constant$keyword$placeholder,"Your Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnReady",cljs.core.constant$keyword$onClick,(function (){
var G__10970_10979 = penny_pub_react.core.player_name;
var G__10971_10980 = (function (){var G__10972 = penny_pub_react.core.user_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10972) : cljs.core.deref.call(null,G__10972));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10970_10979,G__10971_10980) : cljs.core.reset_BANG_.call(null,G__10970_10979,G__10971_10980));

penny_pub_react.pubnub.set_state((function (){var G__10973 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10973) : cljs.core.deref.call(null,G__10973));
})(),(function (){var obj10975 = {"username":(function (){var G__10976 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10976) : cljs.core.deref.call(null,G__10976));
})(),"player_number":(function (){var G__10977 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10977) : cljs.core.deref.call(null,G__10977));
})()};
return obj10975;
})());

return penny_pub_react.pubnub.update_players_data((function (){var G__10978 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10978) : cljs.core.deref.call(null,G__10978));
})(),penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4);
}),cljs.core.constant$keyword$value,"I'm Ready"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.connecting_page = (function penny_pub_react$core$connecting_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Connecting..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.team_page = (function penny_pub_react$core$team_page(){
if(cljs.core.truth_((function (){var or__4099__auto__ = clojure.string.blank_QMARK_((function (){var G__10988 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10988) : cljs.core.deref.call(null,G__10988));
})());
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = clojure.string.blank_QMARK_((function (){var G__10990 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10990) : cljs.core.deref.call(null,G__10990));
})());
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10991 = penny_pub_react.core.connected_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10991) : cljs.core.deref.call(null,G__10991));
})(),false);
}
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.connecting_page], null);
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_((function (){var G__10992 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10992) : cljs.core.deref.call(null,G__10992));
})()))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step3_page], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
}
}
});
penny_pub_react.core.pages = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$home,penny_pub_react.core.home_page,cljs.core.constant$keyword$step2,penny_pub_react.core.step2_page,cljs.core.constant$keyword$step3,penny_pub_react.core.step3_page,cljs.core.constant$keyword$step4,penny_pub_react.core.step4_page,cljs.core.constant$keyword$step5,penny_pub_react.core.step5_page,cljs.core.constant$keyword$connecting,penny_pub_react.core.connecting_page,cljs.core.constant$keyword$team,penny_pub_react.core.team_page], null);
penny_pub_react.core.page = (function penny_pub_react$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10994 = reagent.session.get(cljs.core.constant$keyword$page);
return (penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1 ? penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1(G__10994) : penny_pub_react.core.pages.call(null,G__10994));
})()], null);
});
var action__10278__auto___10997 = (function (params__10279__auto__){
if(cljs.core.map_QMARK_(params__10279__auto__)){
var map__10995 = params__10279__auto__;
var map__10995__$1 = ((cljs.core.seq_QMARK_(map__10995))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10995):map__10995);
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
if(cljs.core.vector_QMARK_(params__10279__auto__)){
var vec__10996 = params__10279__auto__;
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__10278__auto___10997);

penny_pub_react.core.mount_components = (function penny_pub_react$core$mount_components(){
var G__11002_11006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.navbar], null);
var G__11003_11007 = document.getElementById("top");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11002_11006,G__11003_11007) : reagent.core.render_component.call(null,G__11002_11006,G__11003_11007));

var G__11004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.page], null);
var G__11005 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11004,G__11005) : reagent.core.render_component.call(null,G__11004,G__11005));
});
penny_pub_react.core.set_page = (function penny_pub_react$core$set_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),window.location.href.indexOf("/team/"))){
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
penny_pub_react.pubnub.connect();

var G__11011_11014 = penny_pub_react.core.team_slug;
var G__11012_11015 = clojure.string.replace(window.location.pathname,"/team/","");
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11011_11014,G__11012_11015) : cljs.core.reset_BANG_.call(null,G__11011_11014,G__11012_11015));

penny_pub_react.pubnub.suscribe_user((function (){var G__11013 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11013) : cljs.core.deref.call(null,G__11013));
})(),penny_pub_react.core.team_name,penny_pub_react.core.player_number,penny_pub_react.core.player_name,penny_pub_react.core.connected_QMARK_,penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4,penny_pub_react.core.playing_QMARK_,penny_pub_react.core.batch_size,penny_pub_react.core.timers,penny_pub_react.core.finished_QMARK_);

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$team);
}
});
penny_pub_react.core.init_BANG_ = (function penny_pub_react$core$init_BANG_(){
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");

penny_pub_react.core.set_page();

return penny_pub_react.core.mount_components();
});

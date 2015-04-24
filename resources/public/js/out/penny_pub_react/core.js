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
penny_pub_react.core.player1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(50)], null));
penny_pub_react.core.player2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(0)], null));
penny_pub_react.core.player3 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(0)], null));
penny_pub_react.core.player4 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$username,"",cljs.core.constant$keyword$state,"new",cljs.core.constant$keyword$coins,(0)], null));
penny_pub_react.core.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
penny_pub_react.core.qty_to_send = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
penny_pub_react.core.timers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$timer,(0),cljs.core.constant$keyword$timer_DASH_first,(0),cljs.core.constant$keyword$timer_DASH_total,(0)], null));
if(typeof penny_pub_react.core.time_updater !== 'undefined'){
} else {
penny_pub_react.core.time_updater = (function (){var G__11555 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11557 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11557) : cljs.core.deref.call(null,G__11557));
})()) + (1)));
});
var G__11556 = (1000);
return setInterval(G__11555,G__11556);
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
return [cljs.core.str(penny_pub_react.core.add_zero(((function (){var G__11559 = (seconds / (60));
return parseInt(G__11559);
})() % (60)))),cljs.core.str(":"),cljs.core.str(penny_pub_react.core.add_zero((seconds % (60))))].join('');
});
penny_pub_react.core.clock = (function penny_pub_react$core$clock(){
var time_str = cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11561 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11561) : cljs.core.deref.call(null,G__11561));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(time_str)], null);
});
penny_pub_react.core.slug = (function penny_pub_react$core$slug(f){

return clojure.string.replace(clojure.string.replace(clojure.string.lower_case(f)," ","-"),/\.(wiki|md)/,"");
});
penny_pub_react.core.print_team_url = (function penny_pub_react$core$print_team_url(){
return [cljs.core.str(window.location.href),cljs.core.str("team/"),cljs.core.str((function (){var G__11563 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11563) : cljs.core.deref.call(null,G__11563));
})())].join('');
});
penny_pub_react.core.start_game = (function penny_pub_react$core$start_game(){
if(!((((function (){var G__11604 = (function (){var G__11605 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11605) : cljs.core.deref.call(null,G__11605));
})();
return parseInt(G__11604);
})() > (50))) || (((function (){var G__11606 = (function (){var G__11607 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11607) : cljs.core.deref.call(null,G__11607));
})();
return parseInt(G__11606);
})() > (50))) || (((function (){var G__11608 = (function (){var G__11609 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11609) : cljs.core.deref.call(null,G__11609));
})();
return parseInt(G__11608);
})() < (function (){var G__11610 = (function (){var G__11611 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11611) : cljs.core.deref.call(null,G__11611));
})();
return parseInt(G__11610);
})())))){
penny_pub_react.pubnub.set_state((function (){var G__11612 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11612) : cljs.core.deref.call(null,G__11612));
})(),(function (){var obj11614 = {"username":"moderador","state_game":"playing","batch_size":(function (){var G__11615 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11615) : cljs.core.deref.call(null,G__11615));
})(),"total_coins":(function (){var G__11616 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11616) : cljs.core.deref.call(null,G__11616));
})(),"channel_name":(function (){var G__11617 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11617) : cljs.core.deref.call(null,G__11617));
})()};
return obj11614;
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,(0));

penny_pub_react.pubnub.send_message((function (){var G__11618 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11618) : cljs.core.deref.call(null,G__11618));
})(),(function (){var obj11620 = {"state_game":"start_game","batch_size":(function (){var G__11621 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11621) : cljs.core.deref.call(null,G__11621));
})(),"total_coins":(function (){var G__11622 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11622) : cljs.core.deref.call(null,G__11622));
})()};
return obj11620;
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(penny_pub_react.core.player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(function (){var G__11623 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11623) : cljs.core.deref.call(null,G__11623));
})());

var G__11624_11628 = penny_pub_react.core.finished_QMARK_;
var G__11625_11629 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11624_11628,G__11625_11629) : cljs.core.reset_BANG_.call(null,G__11624_11628,G__11625_11629));

var G__11626 = penny_pub_react.core.playing_QMARK_;
var G__11627 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11626,G__11627) : cljs.core.reset_BANG_.call(null,G__11626,G__11627));
} else {
return null;
}
});
penny_pub_react.core.release = (function penny_pub_react$core$release(player_number,qty){
return penny_pub_react.pubnub.send_message((function (){var G__11633 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11633) : cljs.core.deref.call(null,G__11633));
})(),(function (){var obj11635 = {"username":"moderador","state_game":"update_coins","player_from":player_number,"qty":qty};
return obj11635;
})());
});
penny_pub_react.core.navbar = (function penny_pub_react$core$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$navbar_DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$navbar_DASH_toggle$collapsed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),(function (){var G__11638 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11638) : cljs.core.deref.call(null,G__11638));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),"Remotely Flipped"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$nav$collapse$navbar_DASH_collapse$bs_DASH_navbar_DASH_collapse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$nav$navbar_DASH_nav$navbar_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),(function (){var G__11639 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11639) : cljs.core.deref.call(null,G__11639));
})()], null)], null)], null)], null)], null);
});
penny_pub_react.core.copyright = (function penny_pub_react$core$copyright(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p$copyright,"Built by: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://www.agilityfeat.com"], null),"www.agilityfeat.com"], null)], null);
});
penny_pub_react.core.home_page = (function penny_pub_react$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Remotely Flipped"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"The Lean Penny Game for Remote Teams"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Have you ever struggled to teach a product team that its more efficient to work in small batch sizes?\n               Agile and Lean coaches have been using the penny game to show how teams that work in small chunks are much more efficient.\n               Usually this game is played in person with nothing but a stack of coins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"We\u2019ve built thus online version so remote teams can play it together in real-time."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$id,"team",cljs.core.constant$keyword$key,"team",cljs.core.constant$keyword$on_DASH_change,(function (p1__11640_SHARP_){
var G__11650 = penny_pub_react.core.team_name;
var G__11651 = p1__11640_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11650,G__11651) : cljs.core.reset_BANG_.call(null,G__11650,G__11651));
}),cljs.core.constant$keyword$placeholder,"Team Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnTeam",cljs.core.constant$keyword$placeholder,"Team Name",cljs.core.constant$keyword$onClick,(function (){
var G__11652_11659 = penny_pub_react.core.team_slug;
var G__11653_11660 = penny_pub_react.core.slug((function (){var G__11654 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11654) : cljs.core.deref.call(null,G__11654));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11652_11659,G__11653_11660) : cljs.core.reset_BANG_.call(null,G__11652_11659,G__11653_11660));

var G__11655_11661 = penny_pub_react.core.moderator_QMARK_;
var G__11656_11662 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11655_11661,G__11656_11662) : cljs.core.reset_BANG_.call(null,G__11655_11661,G__11656_11662));

penny_pub_react.pubnub.connect();

penny_pub_react.pubnub.suscribe_moderator((function (){var G__11657 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11657) : cljs.core.deref.call(null,G__11657));
})(),(function (){var G__11658 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11658) : cljs.core.deref.call(null,G__11658));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$coin_DASH_table,(function (){var iter__4853__auto__ = (function penny_pub_react$core$draw_coin_panel_$_iter__11805(s__11806){
return (new cljs.core.LazySeq(null,(function (){
var s__11806__$1 = s__11806;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__11806__$1);
if(temp__4126__auto__){
var s__11806__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11806__$2)){
var c__4851__auto__ = cljs.core.chunk_first(s__11806__$2);
var size__4852__auto__ = cljs.core.count(c__4851__auto__);
var b__11808 = cljs.core.chunk_buffer(size__4852__auto__);
if((function (){var i__11807 = (0);
while(true){
if((i__11807 < size__4852__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4851__auto__,i__11807);
cljs.core.chunk_append(b__11808,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$click$panel$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$key,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11861 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11861) : cljs.core.deref.call(null,G__11861));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$id,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11862 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11862) : cljs.core.deref.call(null,G__11862));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$class,"click panel circle",cljs.core.constant$keyword$onClick,((function (i__11807,x,c__4851__auto__,size__4852__auto__,b__11808,s__11806__$2,temp__4126__auto__){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,(function (){var G__11863 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11863) : cljs.core.deref.call(null,G__11863));
})())){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11864 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11864) : cljs.core.deref.call(null,G__11864));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(penny_pub_react.core.subtract_QMARK_,false)){
if((((function (){var G__11872 = (function (){var G__11873 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11873) : cljs.core.deref.call(null,G__11873));
})();
return parseInt(G__11872);
})() < cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11874 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11874) : cljs.core.deref.call(null,G__11874));
})()))) && (((function (){var G__11875 = (function (){var G__11876 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11876) : cljs.core.deref.call(null,G__11876));
})();
return parseInt(G__11875);
})() < (function (){var G__11877 = (function (){var G__11878 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11878) : cljs.core.deref.call(null,G__11878));
})();
return parseInt(G__11877);
})()))){
var G__11879 = penny_pub_react.core.qty_to_send;
var G__11880 = ((function (){var G__11881 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11881) : cljs.core.deref.call(null,G__11881));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11879,G__11880) : cljs.core.reset_BANG_.call(null,G__11879,G__11880));
} else {
return penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11882 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11882) : cljs.core.deref.call(null,G__11882));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));
}
} else {
var G__11883 = penny_pub_react.core.qty_to_send;
var G__11884 = ((function (){var G__11885 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11885) : cljs.core.deref.call(null,G__11885));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11883,G__11884) : cljs.core.reset_BANG_.call(null,G__11883,G__11884));
}
} else {
return null;
}
});})(i__11807,x,c__4851__auto__,size__4852__auto__,b__11808,s__11806__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$front$icon_DASH_bitcoin_DASH_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$back$icon_DASH_bitcoin_DASH_tales], null)], null));

var G__11947 = (i__11807 + (1));
i__11807 = G__11947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11808),penny_pub_react$core$draw_coin_panel_$_iter__11805(cljs.core.chunk_rest(s__11806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11808),null);
}
} else {
var x = cljs.core.first(s__11806__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$click$panel$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$key,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11886 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11886) : cljs.core.deref.call(null,G__11886));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$id,[cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11887 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11887) : cljs.core.deref.call(null,G__11887));
})())),cljs.core.str(number),cljs.core.str(x)].join(''),cljs.core.constant$keyword$class,"click panel circle",cljs.core.constant$keyword$onClick,((function (x,s__11806__$2,temp__4126__auto__){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,(function (){var G__11888 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11888) : cljs.core.deref.call(null,G__11888));
})())){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11889 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11889) : cljs.core.deref.call(null,G__11889));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(penny_pub_react.core.subtract_QMARK_,false)){
if((((function (){var G__11897 = (function (){var G__11898 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11898) : cljs.core.deref.call(null,G__11898));
})();
return parseInt(G__11897);
})() < cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11899 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11899) : cljs.core.deref.call(null,G__11899));
})()))) && (((function (){var G__11900 = (function (){var G__11901 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11901) : cljs.core.deref.call(null,G__11901));
})();
return parseInt(G__11900);
})() < (function (){var G__11902 = (function (){var G__11903 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11903) : cljs.core.deref.call(null,G__11903));
})();
return parseInt(G__11902);
})()))){
var G__11904 = penny_pub_react.core.qty_to_send;
var G__11905 = ((function (){var G__11906 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11906) : cljs.core.deref.call(null,G__11906));
})() + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11904,G__11905) : cljs.core.reset_BANG_.call(null,G__11904,G__11905));
} else {
return penny_pub_react.core.flip([cljs.core.str("p_"),cljs.core.str(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11907 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11907) : cljs.core.deref.call(null,G__11907));
})())),cljs.core.str(number),cljs.core.str(x)].join(''));
}
} else {
var G__11908 = penny_pub_react.core.qty_to_send;
var G__11909 = ((function (){var G__11910 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11910) : cljs.core.deref.call(null,G__11910));
})() - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11908,G__11909) : cljs.core.reset_BANG_.call(null,G__11908,G__11909));
}
} else {
return null;
}
});})(x,s__11806__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$front$icon_DASH_bitcoin_DASH_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$back$icon_DASH_bitcoin_DASH_tales], null)], null),penny_pub_react$core$draw_coin_panel_$_iter__11805(cljs.core.rest(s__11806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4853__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11911 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11911) : cljs.core.deref.call(null,G__11911));
})())));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$footer,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,(function (){var G__11912 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11912) : cljs.core.deref.call(null,G__11912));
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$player_DASH_controls$active,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"Batch ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,(function (){var G__11913 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11913) : cljs.core.deref.call(null,G__11913));
})()," / ",(function (){var G__11914 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11914) : cljs.core.deref.call(null,G__11914));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$game_DASH_btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$value,"Release",cljs.core.constant$keyword$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__11922 = (function (){var G__11923 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11923) : cljs.core.deref.call(null,G__11923));
})();
return parseInt(G__11922);
})(),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11924 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11924) : cljs.core.deref.call(null,G__11924));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__11925 = (function (){var G__11926 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11926) : cljs.core.deref.call(null,G__11926));
})();
return parseInt(G__11925);
})(),(function (){var G__11927 = (function (){var G__11928 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11928) : cljs.core.deref.call(null,G__11928));
})();
return parseInt(G__11927);
})())))?"active":null),cljs.core.constant$keyword$onClick,(function (){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__11936 = (function (){var G__11937 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11937) : cljs.core.deref.call(null,G__11937));
})();
return parseInt(G__11936);
})(),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11938 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11938) : cljs.core.deref.call(null,G__11938));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__11939 = (function (){var G__11940 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11940) : cljs.core.deref.call(null,G__11940));
})();
return parseInt(G__11939);
})(),(function (){var G__11941 = (function (){var G__11942 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11942) : cljs.core.deref.call(null,G__11942));
})();
return parseInt(G__11941);
})()))){
penny_pub_react.core.release(number,(function (){var G__11943 = penny_pub_react.core.qty_to_send;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11943) : cljs.core.deref.call(null,G__11943));
})());

var G__11944 = penny_pub_react.core.qty_to_send;
var G__11945 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11944,G__11945) : cljs.core.reset_BANG_.call(null,G__11944,G__11945));
} else {
return null;
}
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$player_DASH_name,"Player ",number,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__11946 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11946) : cljs.core.deref.call(null,G__11946));
})())], null)], null)], null)], null);
});
penny_pub_react.core.game = (function penny_pub_react$core$game(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$game_DASH_on,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$timer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"Overall Time:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.clock], null)], null)], null),(((cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11954 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11954) : cljs.core.deref.call(null,G__11954));
})()) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$timer_DASH_first,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"First Batch:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11955 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11955) : cljs.core.deref.call(null,G__11955));
})()))], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$top_DASH_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(function (){var G__11956 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11956) : cljs.core.deref.call(null,G__11956));
})()))?"panel-wrap-player":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player1,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$top_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(function (){var G__11957 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11957) : cljs.core.deref.call(null,G__11957));
})()))?"panel-wrap-player":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player2,(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$bottom_DASH_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__11958 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11958) : cljs.core.deref.call(null,G__11958));
})()))?"panel-wrap-player":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player3,(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_wrap$bottom_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),(function (){var G__11959 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11959) : cljs.core.deref.call(null,G__11959));
})()))?"panel-wrap-player":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player4,(4)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$floatClear], null)], null);
});
penny_pub_react.core.show_results = (function penny_pub_react$core$show_results(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Round complete!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,(function (){var G__11976 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11976) : cljs.core.deref.call(null,G__11976));
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__11977 = penny_pub_react.core.moderator_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11977) : cljs.core.deref.call(null,G__11977));
})()))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$on_DASH_change,(function (p1__11960_SHARP_){
var G__11978 = penny_pub_react.core.total_coins;
var G__11979 = p1__11960_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11978,G__11979) : cljs.core.reset_BANG_.call(null,G__11978,G__11979));
}),cljs.core.constant$keyword$value,(function (){var G__11980 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11980) : cljs.core.deref.call(null,G__11980));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__11981 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11981) : cljs.core.deref.call(null,G__11981));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__11961_SHARP_){
var G__11982 = penny_pub_react.core.batch_size;
var G__11983 = p1__11961_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11982,G__11983) : cljs.core.reset_BANG_.call(null,G__11982,G__11983));
}),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11984 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11984) : cljs.core.deref.call(null,G__11984));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_total.cljs$core$IFn$_invoke$arity$1((function (){var G__11985 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11985) : cljs.core.deref.call(null,G__11985));
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Don't forget to write down the stats and then start new round."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnStart",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.start_game();

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$step4);
}),cljs.core.constant$keyword$value,"Start new round"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$disabled,true,cljs.core.constant$keyword$value,(function (){var G__11986 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11986) : cljs.core.deref.call(null,G__11986));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__11987 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11987) : cljs.core.deref.call(null,G__11987));
})(),cljs.core.constant$keyword$disabled,true,cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11988 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11988) : cljs.core.deref.call(null,G__11988));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h4,"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,penny_pub_react.core.format_time(cljs.core.constant$keyword$timer_DASH_total.cljs$core$IFn$_invoke$arity$1((function (){var G__11989 = penny_pub_react.core.timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11989) : cljs.core.deref.call(null,G__11989));
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Waiting for the Moderator starts a new round..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
});
penny_pub_react.core.step5_page = (function penny_pub_react$core$step5_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__11991 = penny_pub_react.core.finished_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11991) : cljs.core.deref.call(null,G__11991));
})(),false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.game], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.show_results], null);
}
});
penny_pub_react.core.get_total_players = (function penny_pub_react$core$get_total_players(){
var G__12011_12030 = penny_pub_react.core.counter;
var G__12012_12031 = (0);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12011_12030,G__12012_12031) : cljs.core.reset_BANG_.call(null,G__12011_12030,G__12012_12031));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12013 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12013) : cljs.core.deref.call(null,G__12013));
})()))){
var G__12014_12032 = penny_pub_react.core.counter;
var G__12015_12033 = ((function (){var G__12016 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12016) : cljs.core.deref.call(null,G__12016));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12014_12032,G__12015_12033) : cljs.core.reset_BANG_.call(null,G__12014_12032,G__12015_12033));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12017 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12017) : cljs.core.deref.call(null,G__12017));
})()))){
var G__12018_12034 = penny_pub_react.core.counter;
var G__12019_12035 = ((function (){var G__12020 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12020) : cljs.core.deref.call(null,G__12020));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12018_12034,G__12019_12035) : cljs.core.reset_BANG_.call(null,G__12018_12034,G__12019_12035));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12021 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12021) : cljs.core.deref.call(null,G__12021));
})()))){
var G__12022_12036 = penny_pub_react.core.counter;
var G__12023_12037 = ((function (){var G__12024 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12024) : cljs.core.deref.call(null,G__12024));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12022_12036,G__12023_12037) : cljs.core.reset_BANG_.call(null,G__12022_12036,G__12023_12037));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12025 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12025) : cljs.core.deref.call(null,G__12025));
})()))){
var G__12026_12038 = penny_pub_react.core.counter;
var G__12027_12039 = ((function (){var G__12028 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12028) : cljs.core.deref.call(null,G__12028));
})() + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12026_12038,G__12027_12039) : cljs.core.reset_BANG_.call(null,G__12026_12038,G__12027_12039));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$num_DASH_p,(function (){var G__12029 = penny_pub_react.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12029) : cljs.core.deref.call(null,G__12029));
})(),"/4"], null);
});
penny_pub_react.core.get_list_players = (function penny_pub_react$core$get_list_players(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$people_DASH_joined_DASH_list,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12060 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12060) : cljs.core.deref.call(null,G__12060));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12061 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12061) : cljs.core.deref.call(null,G__12061));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12062 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12062) : cljs.core.deref.call(null,G__12062));
})()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12063 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12063) : cljs.core.deref.call(null,G__12063));
})()))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,"Joined:"], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12064 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12064) : cljs.core.deref.call(null,G__12064));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__12065 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12065) : cljs.core.deref.call(null,G__12065));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12066 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12066) : cljs.core.deref.call(null,G__12066));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__12067 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12067) : cljs.core.deref.call(null,G__12067));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12068 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12068) : cljs.core.deref.call(null,G__12068));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__12069 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12069) : cljs.core.deref.call(null,G__12069));
})())], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12070 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12070) : cljs.core.deref.call(null,G__12070));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__12071 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12071) : cljs.core.deref.call(null,G__12071));
})())], null):null)], null);
});
penny_pub_react.core.li_player = (function penny_pub_react$core$li_player(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("new",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12076 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12076) : cljs.core.deref.call(null,G__12076));
})()))){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_block], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__12077 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12077) : cljs.core.deref.call(null,G__12077));
})())], null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12078 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12078) : cljs.core.deref.call(null,G__12078));
})()))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$active,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_user_DASH_check], null),cljs.core.constant$keyword$username.cljs$core$IFn$_invoke$arity$1((function (){var G__12079 = player;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12079) : cljs.core.deref.call(null,G__12079));
})())], null);
} else {
return null;
}
});
penny_pub_react.core.step4_page = (function penny_pub_react$core$step4_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,(function (){var G__12091 = penny_pub_react.core.playing_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12091) : cljs.core.deref.call(null,G__12091));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Lets Flip!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,(function (){var G__12092 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12092) : cljs.core.deref.call(null,G__12092));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$team_DASH_members_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$plyrs,"Players:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$list_DASH_online,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player4], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__12093 = penny_pub_react.core.moderator_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12093) : cljs.core.deref.call(null,G__12093));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Please wait while the organizer explains the game to you and then starts the round."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$top,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"total_coins",cljs.core.constant$keyword$key,"total_coins",cljs.core.constant$keyword$on_DASH_change,(function (p1__12080_SHARP_){
var G__12094 = penny_pub_react.core.total_coins;
var G__12095 = p1__12080_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12094,G__12095) : cljs.core.reset_BANG_.call(null,G__12094,G__12095));
}),cljs.core.constant$keyword$value,(function (){var G__12096 = penny_pub_react.core.total_coins;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12096) : cljs.core.deref.call(null,G__12096));
})(),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$bottom,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$type,"number",cljs.core.constant$keyword$max,(50),cljs.core.constant$keyword$id,"batch_size",cljs.core.constant$keyword$key,"batch_size",cljs.core.constant$keyword$value,(function (){var G__12097 = penny_pub_react.core.batch_size;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12097) : cljs.core.deref.call(null,G__12097));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__12081_SHARP_){
var G__12098 = penny_pub_react.core.batch_size;
var G__12099 = p1__12081_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12098,G__12099) : cljs.core.reset_BANG_.call(null,G__12098,G__12099));
}),cljs.core.constant$keyword$placeholder,"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnStart",cljs.core.constant$keyword$onClick,(function (){
penny_pub_react.core.start_game();

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$step4);
}),cljs.core.constant$keyword$value,"Start Flipping"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$batch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Waiting for the Moderator starts the game.."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step5_page], null);
}
});
penny_pub_react.core.step2_page = (function penny_pub_react$core$step2_page(){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12112 = penny_pub_react.core.player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12112) : cljs.core.deref.call(null,G__12112));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12113 = penny_pub_react.core.player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12113) : cljs.core.deref.call(null,G__12113));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12114 = penny_pub_react.core.player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12114) : cljs.core.deref.call(null,G__12114));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ready",cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1((function (){var G__12115 = penny_pub_react.core.player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12115) : cljs.core.deref.call(null,G__12115));
})())))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Its time to get flipped!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Your team url:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$url_DASH_wrap,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_link2], null),penny_pub_react.core.print_team_url()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Send this to your team so the can join in!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$people_DASH_joined,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_total_players], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span," Joined"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_list_players], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
}
});
penny_pub_react.core.step3_page = (function penny_pub_react$core$step3_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_collaboration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,"Team:"], null),(function (){var G__12130 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12130) : cljs.core.deref.call(null,G__12130));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$separ], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$title,[cljs.core.str("You are player "),cljs.core.str((function (){var G__12131 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12131) : cljs.core.deref.call(null,G__12131));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"of 4 max"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Type your name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$id,"user_name",cljs.core.constant$keyword$key,"user_name",cljs.core.constant$keyword$on_DASH_change,(function (p1__12116_SHARP_){
var G__12132 = penny_pub_react.core.user_name;
var G__12133 = p1__12116_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12132,G__12133) : cljs.core.reset_BANG_.call(null,G__12132,G__12133));
}),cljs.core.constant$keyword$placeholder,"Your Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$start_DASH_game,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$id,"btnReady",cljs.core.constant$keyword$onClick,(function (){
var G__12134_12143 = penny_pub_react.core.player_name;
var G__12135_12144 = (function (){var G__12136 = penny_pub_react.core.user_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12136) : cljs.core.deref.call(null,G__12136));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12134_12143,G__12135_12144) : cljs.core.reset_BANG_.call(null,G__12134_12143,G__12135_12144));

penny_pub_react.pubnub.set_state((function (){var G__12137 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12137) : cljs.core.deref.call(null,G__12137));
})(),(function (){var obj12139 = {"username":(function (){var G__12140 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12140) : cljs.core.deref.call(null,G__12140));
})(),"player_number":(function (){var G__12141 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12141) : cljs.core.deref.call(null,G__12141));
})()};
return obj12139;
})());

return penny_pub_react.pubnub.update_players_data((function (){var G__12142 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12142) : cljs.core.deref.call(null,G__12142));
})(),penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4);
}),cljs.core.constant$keyword$value,"I'm Ready"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.connecting_page = (function penny_pub_react$core$connecting_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$instructions_DASH_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon_DASH_bitcoin_DASH_stack], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Connecting..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.team_page = (function penny_pub_react$core$team_page(){
if(cljs.core.truth_((function (){var or__4099__auto__ = clojure.string.blank_QMARK_((function (){var G__12152 = penny_pub_react.core.player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12152) : cljs.core.deref.call(null,G__12152));
})());
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = clojure.string.blank_QMARK_((function (){var G__12154 = penny_pub_react.core.team_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12154) : cljs.core.deref.call(null,G__12154));
})());
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__12155 = penny_pub_react.core.connected_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12155) : cljs.core.deref.call(null,G__12155));
})(),false);
}
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.connecting_page], null);
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_((function (){var G__12156 = penny_pub_react.core.player_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12156) : cljs.core.deref.call(null,G__12156));
})()))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step3_page], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
}
}
});
penny_pub_react.core.pages = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$home,penny_pub_react.core.home_page,cljs.core.constant$keyword$step2,penny_pub_react.core.step2_page,cljs.core.constant$keyword$step3,penny_pub_react.core.step3_page,cljs.core.constant$keyword$step4,penny_pub_react.core.step4_page,cljs.core.constant$keyword$step5,penny_pub_react.core.step5_page,cljs.core.constant$keyword$connecting,penny_pub_react.core.connecting_page,cljs.core.constant$keyword$team,penny_pub_react.core.team_page], null);
penny_pub_react.core.page = (function penny_pub_react$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12158 = reagent.session.get(cljs.core.constant$keyword$page);
return (penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1 ? penny_pub_react.core.pages.cljs$core$IFn$_invoke$arity$1(G__12158) : penny_pub_react.core.pages.call(null,G__12158));
})()], null);
});
var action__10257__auto___12161 = (function (params__10258__auto__){
if(cljs.core.map_QMARK_(params__10258__auto__)){
var map__12159 = params__10258__auto__;
var map__12159__$1 = ((cljs.core.seq_QMARK_(map__12159))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12159):map__12159);
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
if(cljs.core.vector_QMARK_(params__10258__auto__)){
var vec__12160 = params__10258__auto__;
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__10257__auto___12161);

penny_pub_react.core.mount_components = (function penny_pub_react$core$mount_components(){
var G__12166_12170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.navbar], null);
var G__12167_12171 = document.getElementById("top");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12166_12170,G__12167_12171) : reagent.core.render_component.call(null,G__12166_12170,G__12167_12171));

var G__12168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.page], null);
var G__12169 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12168,G__12169) : reagent.core.render_component.call(null,G__12168,G__12169));
});
penny_pub_react.core.set_page = (function penny_pub_react$core$set_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),window.location.href.indexOf("/team/"))){
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
penny_pub_react.pubnub.connect();

var G__12175_12178 = penny_pub_react.core.team_slug;
var G__12176_12179 = clojure.string.replace(window.location.pathname,"/team/","");
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12175_12178,G__12176_12179) : cljs.core.reset_BANG_.call(null,G__12175_12178,G__12176_12179));

penny_pub_react.pubnub.suscribe_user((function (){var G__12177 = penny_pub_react.core.team_slug;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12177) : cljs.core.deref.call(null,G__12177));
})(),penny_pub_react.core.team_name,penny_pub_react.core.player_number,penny_pub_react.core.player_name,penny_pub_react.core.connected_QMARK_,penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4,penny_pub_react.core.playing_QMARK_,penny_pub_react.core.batch_size,penny_pub_react.core.timers,penny_pub_react.core.finished_QMARK_);

return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$team);
}
});
penny_pub_react.core.init_BANG_ = (function penny_pub_react$core$init_BANG_(){
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");

penny_pub_react.core.set_page();

return penny_pub_react.core.mount_components();
});

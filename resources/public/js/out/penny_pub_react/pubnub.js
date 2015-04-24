// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
goog.require('clojure.string');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$publish_key,"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",cljs.core.constant$keyword$subscribe_key,"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
/**
 * Init the PubNub Object, and subscribe to the channel
 */
penny_pub_react.pubnub.connect = (function penny_pub_react$pubnub$connect(){
penny_pub_react.pubnub.PUBNUB_demo = window.PUBNUB.init(penny_pub_react.pubnub.pubInit);
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.update_player = (function penny_pub_react$pubnub$update_player(player,uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player,cljs.core.assoc,cljs.core.constant$keyword$username,uuid.state.username);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player,cljs.core.assoc,cljs.core.constant$keyword$state,"ready");
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.update_players_data = (function penny_pub_react$pubnub$update_players_data(channel_slug,player1,player2,player3,player4){
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj11022 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

var seq__11023_11027 = cljs.core.seq(m.uuids);
var chunk__11024_11028 = null;
var count__11025_11029 = (0);
var i__11026_11030 = (0);
while(true){
if((i__11026_11030 < count__11025_11029)){
var uuid_11031 = chunk__11024_11028.cljs$core$IIndexed$_nth$arity$2(null,i__11026_11030);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid_11031.state.username))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),uuid_11031.state.player_number)){
penny_pub_react.pubnub.update_player(player1,uuid_11031);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),uuid_11031.state.player_number)){
penny_pub_react.pubnub.update_player(player2,uuid_11031);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),uuid_11031.state.player_number)){
penny_pub_react.pubnub.update_player(player3,uuid_11031);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),uuid_11031.state.player_number)){
penny_pub_react.pubnub.update_player(player4,uuid_11031);
} else {
}
} else {
}

var G__11032 = seq__11023_11027;
var G__11033 = chunk__11024_11028;
var G__11034 = count__11025_11029;
var G__11035 = (i__11026_11030 + (1));
seq__11023_11027 = G__11032;
chunk__11024_11028 = G__11033;
count__11025_11029 = G__11034;
i__11026_11030 = G__11035;
continue;
} else {
var temp__4126__auto___11036 = cljs.core.seq(seq__11023_11027);
if(temp__4126__auto___11036){
var seq__11023_11037__$1 = temp__4126__auto___11036;
if(cljs.core.chunked_seq_QMARK_(seq__11023_11037__$1)){
var c__4884__auto___11038 = cljs.core.chunk_first(seq__11023_11037__$1);
var G__11039 = cljs.core.chunk_rest(seq__11023_11037__$1);
var G__11040 = c__4884__auto___11038;
var G__11041 = cljs.core.count(c__4884__auto___11038);
var G__11042 = (0);
seq__11023_11027 = G__11039;
chunk__11024_11028 = G__11040;
count__11025_11029 = G__11041;
i__11026_11030 = G__11042;
continue;
} else {
var uuid_11043 = cljs.core.first(seq__11023_11037__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid_11043.state.username))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),uuid_11043.state.player_number)){
penny_pub_react.pubnub.update_player(player1,uuid_11043);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),uuid_11043.state.player_number)){
penny_pub_react.pubnub.update_player(player2,uuid_11043);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),uuid_11043.state.player_number)){
penny_pub_react.pubnub.update_player(player3,uuid_11043);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),uuid_11043.state.player_number)){
penny_pub_react.pubnub.update_player(player4,uuid_11043);
} else {
}
} else {
}

var G__11044 = cljs.core.next(seq__11023_11037__$1);
var G__11045 = null;
var G__11046 = (0);
var G__11047 = (0);
seq__11023_11027 = G__11044;
chunk__11024_11028 = G__11045;
count__11025_11029 = G__11046;
i__11026_11030 = G__11047;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj11022;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug,player1,player2,player3,player4,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj11073 = {"channel":channel_slug,"noheresync":"true","uuid":"moderator-user","message":(function (m){
console.log("init message moderator");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_coins",m.state_game)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11074 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11074) : cljs.core.deref.call(null,G__11074));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11075 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11075) : cljs.core.deref.call(null,G__11075));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(2))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11076 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11076) : cljs.core.deref.call(null,G__11076));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11077 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11077) : cljs.core.deref.call(null,G__11077));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11078 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11078) : cljs.core.deref.call(null,G__11078));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11079 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11079) : cljs.core.deref.call(null,G__11079));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(4))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11080 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11080) : cljs.core.deref.call(null,G__11080));
})()),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11081 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11081) : cljs.core.deref.call(null,G__11081));
})()));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11082 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11082) : cljs.core.deref.call(null,G__11082));
})()) - m.qty));

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11087 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11087) : cljs.core.deref.call(null,G__11087));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11088 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11088) : cljs.core.deref.call(null,G__11088));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11089 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11089) : cljs.core.deref.call(null,G__11089));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11090 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11090) : cljs.core.deref.call(null,G__11090));
})())))){
var G__11091_11096 = finished_QMARK_;
var G__11092_11097 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11091_11096,G__11092_11097) : cljs.core.reset_BANG_.call(null,G__11091_11096,G__11092_11097));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_total,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11093 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11093) : cljs.core.deref.call(null,G__11093));
})()));
} else {
}
} else {
}
} else {
}

return console.log("end message moderator");
}),"presence":(function (m){
console.log("init presence moderator");

console.log(m);

penny_pub_react.pubnub.update_players_data(channel_slug,player1,player2,player3,player4);

return console.log("end presence moderator");
}),"state":(function (){var obj11095 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj11095;
})()};
return obj11073;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name,player_number){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj11109 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__11110 = cljs.core.seq(m.uuids);
var chunk__11111 = null;
var count__11112 = (0);
var i__11113 = (0);
while(true){
if((i__11113 < count__11112)){
var uuid = chunk__11111.cljs$core$IIndexed$_nth$arity$2(null,i__11113);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid.state.username)){
var G__11114_11118 = team_name;
var G__11115_11119 = uuid.state.channel_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11114_11118,G__11115_11119) : cljs.core.reset_BANG_.call(null,G__11114_11118,G__11115_11119));
} else {
}

var G__11120 = seq__11110;
var G__11121 = chunk__11111;
var G__11122 = count__11112;
var G__11123 = (i__11113 + (1));
seq__11110 = G__11120;
chunk__11111 = G__11121;
count__11112 = G__11122;
i__11113 = G__11123;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__11110);
if(temp__4126__auto__){
var seq__11110__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11110__$1)){
var c__4884__auto__ = cljs.core.chunk_first(seq__11110__$1);
var G__11124 = cljs.core.chunk_rest(seq__11110__$1);
var G__11125 = c__4884__auto__;
var G__11126 = cljs.core.count(c__4884__auto__);
var G__11127 = (0);
seq__11110 = G__11124;
chunk__11111 = G__11125;
count__11112 = G__11126;
i__11113 = G__11127;
continue;
} else {
var uuid = cljs.core.first(seq__11110__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid.state.username)){
var G__11116_11128 = team_name;
var G__11117_11129 = uuid.state.channel_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11116_11128,G__11117_11129) : cljs.core.reset_BANG_.call(null,G__11116_11128,G__11117_11129));
} else {
}

var G__11130 = cljs.core.next(seq__11110__$1);
var G__11131 = null;
var G__11132 = (0);
var G__11133 = (0);
seq__11110 = G__11130;
chunk__11111 = G__11131;
count__11112 = G__11132;
i__11113 = G__11133;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj11109;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj11137 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj11137;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,player1,player2,player3,player4,playing_QMARK_,batch_size,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj11178 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
console.log("init message user");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("start_game",m.state_game)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,m.total_coins);

var G__11179_11216 = batch_size;
var G__11180_11217 = m.batch_size;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11179_11216,G__11180_11217) : cljs.core.reset_BANG_.call(null,G__11179_11216,G__11180_11217));

var G__11181_11218 = finished_QMARK_;
var G__11182_11219 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11181_11218,G__11182_11219) : cljs.core.reset_BANG_.call(null,G__11181_11218,G__11182_11219));

var G__11183_11220 = playing_QMARK_;
var G__11184_11221 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11183_11220,G__11184_11221) : cljs.core.reset_BANG_.call(null,G__11183_11220,G__11184_11221));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_coins",m.state_game)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11185 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11185) : cljs.core.deref.call(null,G__11185));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11186 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11186) : cljs.core.deref.call(null,G__11186));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(2))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11187 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11187) : cljs.core.deref.call(null,G__11187));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11188 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11188) : cljs.core.deref.call(null,G__11188));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11189 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11189) : cljs.core.deref.call(null,G__11189));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11190 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11190) : cljs.core.deref.call(null,G__11190));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(4))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11191 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11191) : cljs.core.deref.call(null,G__11191));
})()),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11192 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11192) : cljs.core.deref.call(null,G__11192));
})()));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11193 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11193) : cljs.core.deref.call(null,G__11193));
})()) - m.qty));

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11198 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11198) : cljs.core.deref.call(null,G__11198));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11199 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11199) : cljs.core.deref.call(null,G__11199));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11200 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11200) : cljs.core.deref.call(null,G__11200));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11201 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11201) : cljs.core.deref.call(null,G__11201));
})())))){
var G__11202_11222 = finished_QMARK_;
var G__11203_11223 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11202_11222,G__11203_11223) : cljs.core.reset_BANG_.call(null,G__11202_11222,G__11203_11223));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_total,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11204 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11204) : cljs.core.deref.call(null,G__11204));
})()));
} else {
}
} else {
}
} else {
}

console.log(m);

return console.log("end message user");
}),"presence":(function (m){
if(cljs.core.truth_(clojure.string.blank_QMARK_((function (){var G__11205 = player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11205) : cljs.core.deref.call(null,G__11205));
})()))){
penny_pub_react.pubnub.my_obj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m);

var G__11206_11224 = player_number;
var G__11207_11225 = ((function (){var G__11208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(penny_pub_react.pubnub.my_obj,"occupancy");
return parseInt(G__11208);
})() - (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11206_11224,G__11207_11225) : cljs.core.reset_BANG_.call(null,G__11206_11224,G__11207_11225));

penny_pub_react.pubnub.set_state(channel_slug,(function (){var obj11210 = {"username":"new-player","player_number":(function (){var G__11211 = player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11211) : cljs.core.deref.call(null,G__11211));
})()};
return obj11210;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data(channel_slug,player1,player2,player3,player4);
}),"connect":(function (m){
var G__11212_11226 = connected_QMARK_;
var G__11213_11227 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11212_11226,G__11213_11227) : cljs.core.reset_BANG_.call(null,G__11212_11226,G__11213_11227));

console.log("init connect suscribe-user");

penny_pub_react.pubnub.get_team_name(channel_slug,team_name,player_number);

return console.log("end connect suscribe-user");
}),"state":(function (){var obj11215 = {"username":"new-player"};
return obj11215;
})()};
return obj11178;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(channel_slug,message){
penny_pub_react.pubnub.message_obj = (function (){var obj11231 = {"channel":channel_slug,"message":message};
return obj11231;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

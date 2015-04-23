// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
goog.require('clojure.string');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$publish_key,"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",cljs.core.constant$keyword$subscribe_key,"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
penny_pub_react.pubnub.my_state = (function (){var G__11018 = "";
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11018) : cljs.core.atom.call(null,G__11018));
})();
/**
 * Init the PubNub Object, and subscribe to the channel
 */
penny_pub_react.pubnub.connect = (function penny_pub_react$pubnub$connect(){
penny_pub_react.pubnub.PUBNUB_demo = window.PUBNUB.init(penny_pub_react.pubnub.pubInit);
});
penny_pub_react.pubnub.update_player = (function penny_pub_react$pubnub$update_player(player,uuid){
console.log("entro a modificar",uuid.state.username);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player,cljs.core.assoc,cljs.core.constant$keyword$username,uuid.state.username);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player,cljs.core.assoc,cljs.core.constant$keyword$state,"ready");
});
penny_pub_react.pubnub.update_players_data = (function penny_pub_react$pubnub$update_players_data(channel_slug,player1,player2,player3,player4){
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj11026 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

console.log(m);

var seq__11027_11031 = cljs.core.seq(m.uuids);
var chunk__11028_11032 = null;
var count__11029_11033 = (0);
var i__11030_11034 = (0);
while(true){
if((i__11030_11034 < count__11029_11033)){
var uuid_11035 = chunk__11028_11032.cljs$core$IIndexed$_nth$arity$2(null,i__11030_11034);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid_11035.state.username))){
console.log("entro a verificar",uuid_11035.state.player_number);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),uuid_11035.state.player_number)){
penny_pub_react.pubnub.update_player(player1,uuid_11035);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),uuid_11035.state.player_number)){
penny_pub_react.pubnub.update_player(player2,uuid_11035);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),uuid_11035.state.player_number)){
penny_pub_react.pubnub.update_player(player3,uuid_11035);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),uuid_11035.state.player_number)){
penny_pub_react.pubnub.update_player(player4,uuid_11035);
} else {
}
} else {
}

var G__11036 = seq__11027_11031;
var G__11037 = chunk__11028_11032;
var G__11038 = count__11029_11033;
var G__11039 = (i__11030_11034 + (1));
seq__11027_11031 = G__11036;
chunk__11028_11032 = G__11037;
count__11029_11033 = G__11038;
i__11030_11034 = G__11039;
continue;
} else {
var temp__4126__auto___11040 = cljs.core.seq(seq__11027_11031);
if(temp__4126__auto___11040){
var seq__11027_11041__$1 = temp__4126__auto___11040;
if(cljs.core.chunked_seq_QMARK_(seq__11027_11041__$1)){
var c__4884__auto___11042 = cljs.core.chunk_first(seq__11027_11041__$1);
var G__11043 = cljs.core.chunk_rest(seq__11027_11041__$1);
var G__11044 = c__4884__auto___11042;
var G__11045 = cljs.core.count(c__4884__auto___11042);
var G__11046 = (0);
seq__11027_11031 = G__11043;
chunk__11028_11032 = G__11044;
count__11029_11033 = G__11045;
i__11030_11034 = G__11046;
continue;
} else {
var uuid_11047 = cljs.core.first(seq__11027_11041__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid_11047.state.username))){
console.log("entro a verificar",uuid_11047.state.player_number);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),uuid_11047.state.player_number)){
penny_pub_react.pubnub.update_player(player1,uuid_11047);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),uuid_11047.state.player_number)){
penny_pub_react.pubnub.update_player(player2,uuid_11047);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),uuid_11047.state.player_number)){
penny_pub_react.pubnub.update_player(player3,uuid_11047);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),uuid_11047.state.player_number)){
penny_pub_react.pubnub.update_player(player4,uuid_11047);
} else {
}
} else {
}

var G__11048 = cljs.core.next(seq__11027_11041__$1);
var G__11049 = null;
var G__11050 = (0);
var G__11051 = (0);
seq__11027_11031 = G__11048;
chunk__11028_11032 = G__11049;
count__11029_11033 = G__11050;
i__11030_11034 = G__11051;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj11026;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug,player1,player2,player3,player4,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj11077 = {"channel":channel_slug,"noheresync":"true","uuid":"moderator-user","message":(function (m){
console.log("init message moderator");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_coins",m.state_game)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11078 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11078) : cljs.core.deref.call(null,G__11078));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11079 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11079) : cljs.core.deref.call(null,G__11079));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(2))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11080 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11080) : cljs.core.deref.call(null,G__11080));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11081 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11081) : cljs.core.deref.call(null,G__11081));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11082 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11082) : cljs.core.deref.call(null,G__11082));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11083 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11083) : cljs.core.deref.call(null,G__11083));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(4))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11084 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11084) : cljs.core.deref.call(null,G__11084));
})()),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11085 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11085) : cljs.core.deref.call(null,G__11085));
})()));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11086 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11086) : cljs.core.deref.call(null,G__11086));
})()) - m.qty));

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11091 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11091) : cljs.core.deref.call(null,G__11091));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11092 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11092) : cljs.core.deref.call(null,G__11092));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11093 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11093) : cljs.core.deref.call(null,G__11093));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11094 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11094) : cljs.core.deref.call(null,G__11094));
})())))){
var G__11095_11100 = finished_QMARK_;
var G__11096_11101 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11095_11100,G__11096_11101) : cljs.core.reset_BANG_.call(null,G__11095_11100,G__11096_11101));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_total,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11097 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11097) : cljs.core.deref.call(null,G__11097));
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
}),"state":(function (){var obj11099 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj11099;
})()};
return obj11077;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name,player_number){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj11113 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__11114 = cljs.core.seq(m.uuids);
var chunk__11115 = null;
var count__11116 = (0);
var i__11117 = (0);
while(true){
if((i__11117 < count__11116)){
var uuid = chunk__11115.cljs$core$IIndexed$_nth$arity$2(null,i__11117);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid.state.username)){
var G__11118_11122 = team_name;
var G__11119_11123 = uuid.state.channel_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11118_11122,G__11119_11123) : cljs.core.reset_BANG_.call(null,G__11118_11122,G__11119_11123));
} else {
}

var G__11124 = seq__11114;
var G__11125 = chunk__11115;
var G__11126 = count__11116;
var G__11127 = (i__11117 + (1));
seq__11114 = G__11124;
chunk__11115 = G__11125;
count__11116 = G__11126;
i__11117 = G__11127;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__11114);
if(temp__4126__auto__){
var seq__11114__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11114__$1)){
var c__4884__auto__ = cljs.core.chunk_first(seq__11114__$1);
var G__11128 = cljs.core.chunk_rest(seq__11114__$1);
var G__11129 = c__4884__auto__;
var G__11130 = cljs.core.count(c__4884__auto__);
var G__11131 = (0);
seq__11114 = G__11128;
chunk__11115 = G__11129;
count__11116 = G__11130;
i__11117 = G__11131;
continue;
} else {
var uuid = cljs.core.first(seq__11114__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid.state.username)){
var G__11120_11132 = team_name;
var G__11121_11133 = uuid.state.channel_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11120_11132,G__11121_11133) : cljs.core.reset_BANG_.call(null,G__11120_11132,G__11121_11133));
} else {
}

var G__11134 = cljs.core.next(seq__11114__$1);
var G__11135 = null;
var G__11136 = (0);
var G__11137 = (0);
seq__11114 = G__11134;
chunk__11115 = G__11135;
count__11116 = G__11136;
i__11117 = G__11137;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj11113;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj11141 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj11141;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.restore_player_data = (function penny_pub_react$pubnub$restore_player_data(channel_slug,player_number,player_name){
penny_pub_react.pubnub.restore_player_data_obj = (function (){var obj11149 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
console.log("init restore-player-data");

var G__11150_11154 = player_number;
var G__11151_11155 = m.player_number;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11150_11154,G__11151_11155) : cljs.core.reset_BANG_.call(null,G__11150_11154,G__11151_11155));

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.username,"new-player"))){
var G__11152_11156 = player_name;
var G__11153_11157 = m.username;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11152_11156,G__11153_11157) : cljs.core.reset_BANG_.call(null,G__11152_11156,G__11153_11157));
} else {
}

return console.log("end restore-player-data");
})};
return obj11149;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.restore_player_data_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,player1,player2,player3,player4,playing_QMARK_,batch_size,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj11200 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
console.log("init message user");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("start_game",m.state_game)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,m.total_coins);

var G__11201_11240 = batch_size;
var G__11202_11241 = m.batch_size;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11201_11240,G__11202_11241) : cljs.core.reset_BANG_.call(null,G__11201_11240,G__11202_11241));

var G__11203_11242 = finished_QMARK_;
var G__11204_11243 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11203_11242,G__11204_11243) : cljs.core.reset_BANG_.call(null,G__11203_11242,G__11204_11243));

var G__11205_11244 = playing_QMARK_;
var G__11206_11245 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11205_11244,G__11206_11245) : cljs.core.reset_BANG_.call(null,G__11205_11244,G__11206_11245));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_coins",m.state_game)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11207 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11207) : cljs.core.deref.call(null,G__11207));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11208 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11208) : cljs.core.deref.call(null,G__11208));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(2))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11209 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11209) : cljs.core.deref.call(null,G__11209));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11210 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11210) : cljs.core.deref.call(null,G__11210));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11211 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11211) : cljs.core.deref.call(null,G__11211));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11212 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11212) : cljs.core.deref.call(null,G__11212));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(4))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__11213 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11213) : cljs.core.deref.call(null,G__11213));
})()),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11214 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11214) : cljs.core.deref.call(null,G__11214));
})()));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11215 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11215) : cljs.core.deref.call(null,G__11215));
})()) - m.qty));

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11220 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11220) : cljs.core.deref.call(null,G__11220));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11221 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11221) : cljs.core.deref.call(null,G__11221));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11222 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11222) : cljs.core.deref.call(null,G__11222));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__11223 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11223) : cljs.core.deref.call(null,G__11223));
})())))){
var G__11224_11246 = finished_QMARK_;
var G__11225_11247 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11224_11246,G__11225_11247) : cljs.core.reset_BANG_.call(null,G__11224_11246,G__11225_11247));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_total,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__11226 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11226) : cljs.core.deref.call(null,G__11226));
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
if(cljs.core.truth_(clojure.string.blank_QMARK_((function (){var G__11227 = player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11227) : cljs.core.deref.call(null,G__11227));
})()))){
var G__11228_11248 = "presence";
var G__11229_11249 = m.occupancy;
alert(G__11228_11248,G__11229_11249);

var G__11230_11250 = m.occupancy;
alert(G__11230_11250);

console.log(m);

var G__11231_11251 = player_number;
var G__11232_11252 = (m.occupancy - (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11231_11251,G__11232_11252) : cljs.core.reset_BANG_.call(null,G__11231_11251,G__11232_11252));

penny_pub_react.pubnub.set_state(channel_slug,(function (){var obj11234 = {"username":"new-player","player_number":(function (){var G__11235 = player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11235) : cljs.core.deref.call(null,G__11235));
})()};
return obj11234;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data(channel_slug,player1,player2,player3,player4);
}),"connect":(function (m){
var G__11236_11253 = connected_QMARK_;
var G__11237_11254 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11236_11253,G__11237_11254) : cljs.core.reset_BANG_.call(null,G__11236_11253,G__11237_11254));

console.log("init connect suscribe-user");

penny_pub_react.pubnub.get_team_name(channel_slug,team_name,player_number);

return console.log("end connect suscribe-user");
}),"state":(function (){var obj11239 = {"username":"new-player"};
return obj11239;
})()};
return obj11200;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
penny_pub_react.pubnub.unsuscribe = (function penny_pub_react$pubnub$unsuscribe(channel_slug){
penny_pub_react.pubnub.unsubscribe_obj = (function (){var obj11258 = {"channel":channel_slug};
return obj11258;
})();

return penny_pub_react.pubnub.PUBNUB_demo.unsubscribe(penny_pub_react.pubnub.unsubscribe_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(channel_slug,message){
penny_pub_react.pubnub.message_obj = (function (){var obj11262 = {"channel":channel_slug,"message":message};
return obj11262;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
goog.require('clojure.string');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$publish_key,"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",cljs.core.constant$keyword$subscribe_key,"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
penny_pub_react.pubnub.my_state = (function (){var G__23060 = "";
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23060) : cljs.core.atom.call(null,G__23060));
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
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj23068 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

console.log(m);

var seq__23069_23073 = cljs.core.seq(m.uuids);
var chunk__23070_23074 = null;
var count__23071_23075 = (0);
var i__23072_23076 = (0);
while(true){
if((i__23072_23076 < count__23071_23075)){
var uuid_23077 = chunk__23070_23074.cljs$core$IIndexed$_nth$arity$2(null,i__23072_23076);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid_23077.state.username))){
console.log("entro a verificar",uuid_23077.state.player_number);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),uuid_23077.state.player_number)){
penny_pub_react.pubnub.update_player(player1,uuid_23077);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),uuid_23077.state.player_number)){
penny_pub_react.pubnub.update_player(player2,uuid_23077);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),uuid_23077.state.player_number)){
penny_pub_react.pubnub.update_player(player3,uuid_23077);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),uuid_23077.state.player_number)){
penny_pub_react.pubnub.update_player(player4,uuid_23077);
} else {
}
} else {
}

var G__23078 = seq__23069_23073;
var G__23079 = chunk__23070_23074;
var G__23080 = count__23071_23075;
var G__23081 = (i__23072_23076 + (1));
seq__23069_23073 = G__23078;
chunk__23070_23074 = G__23079;
count__23071_23075 = G__23080;
i__23072_23076 = G__23081;
continue;
} else {
var temp__4126__auto___23082 = cljs.core.seq(seq__23069_23073);
if(temp__4126__auto___23082){
var seq__23069_23083__$1 = temp__4126__auto___23082;
if(cljs.core.chunked_seq_QMARK_(seq__23069_23083__$1)){
var c__4884__auto___23084 = cljs.core.chunk_first(seq__23069_23083__$1);
var G__23085 = cljs.core.chunk_rest(seq__23069_23083__$1);
var G__23086 = c__4884__auto___23084;
var G__23087 = cljs.core.count(c__4884__auto___23084);
var G__23088 = (0);
seq__23069_23073 = G__23085;
chunk__23070_23074 = G__23086;
count__23071_23075 = G__23087;
i__23072_23076 = G__23088;
continue;
} else {
var uuid_23089 = cljs.core.first(seq__23069_23083__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid_23089.state.username))){
console.log("entro a verificar",uuid_23089.state.player_number);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),uuid_23089.state.player_number)){
penny_pub_react.pubnub.update_player(player1,uuid_23089);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),uuid_23089.state.player_number)){
penny_pub_react.pubnub.update_player(player2,uuid_23089);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),uuid_23089.state.player_number)){
penny_pub_react.pubnub.update_player(player3,uuid_23089);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),uuid_23089.state.player_number)){
penny_pub_react.pubnub.update_player(player4,uuid_23089);
} else {
}
} else {
}

var G__23090 = cljs.core.next(seq__23069_23083__$1);
var G__23091 = null;
var G__23092 = (0);
var G__23093 = (0);
seq__23069_23073 = G__23090;
chunk__23070_23074 = G__23091;
count__23071_23075 = G__23092;
i__23072_23076 = G__23093;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj23068;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug,player1,player2,player3,player4,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj23119 = {"channel":channel_slug,"noheresync":"true","uuid":"moderator-user","message":(function (m){
console.log("init message moderator");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_coins",m.state_game)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23120 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23120) : cljs.core.deref.call(null,G__23120));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23121 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23121) : cljs.core.deref.call(null,G__23121));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(2))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23122 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23122) : cljs.core.deref.call(null,G__23122));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23123 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23123) : cljs.core.deref.call(null,G__23123));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23124 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23124) : cljs.core.deref.call(null,G__23124));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23125 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23125) : cljs.core.deref.call(null,G__23125));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(4))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__23126 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23126) : cljs.core.deref.call(null,G__23126));
})()),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__23127 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23127) : cljs.core.deref.call(null,G__23127));
})()));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23128 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23128) : cljs.core.deref.call(null,G__23128));
})()) - m.qty));

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23133 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23133) : cljs.core.deref.call(null,G__23133));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23134 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23134) : cljs.core.deref.call(null,G__23134));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23135 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23135) : cljs.core.deref.call(null,G__23135));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23136 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23136) : cljs.core.deref.call(null,G__23136));
})())))){
var G__23137_23142 = finished_QMARK_;
var G__23138_23143 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23137_23142,G__23138_23143) : cljs.core.reset_BANG_.call(null,G__23137_23142,G__23138_23143));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_total,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__23139 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23139) : cljs.core.deref.call(null,G__23139));
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
}),"state":(function (){var obj23141 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj23141;
})()};
return obj23119;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name,player_number){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj23155 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__23156 = cljs.core.seq(m.uuids);
var chunk__23157 = null;
var count__23158 = (0);
var i__23159 = (0);
while(true){
if((i__23159 < count__23158)){
var uuid = chunk__23157.cljs$core$IIndexed$_nth$arity$2(null,i__23159);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid.state.username)){
var G__23160_23164 = team_name;
var G__23161_23165 = uuid.state.channel_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23160_23164,G__23161_23165) : cljs.core.reset_BANG_.call(null,G__23160_23164,G__23161_23165));
} else {
}

var G__23166 = seq__23156;
var G__23167 = chunk__23157;
var G__23168 = count__23158;
var G__23169 = (i__23159 + (1));
seq__23156 = G__23166;
chunk__23157 = G__23167;
count__23158 = G__23168;
i__23159 = G__23169;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__23156);
if(temp__4126__auto__){
var seq__23156__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23156__$1)){
var c__4884__auto__ = cljs.core.chunk_first(seq__23156__$1);
var G__23170 = cljs.core.chunk_rest(seq__23156__$1);
var G__23171 = c__4884__auto__;
var G__23172 = cljs.core.count(c__4884__auto__);
var G__23173 = (0);
seq__23156 = G__23170;
chunk__23157 = G__23171;
count__23158 = G__23172;
i__23159 = G__23173;
continue;
} else {
var uuid = cljs.core.first(seq__23156__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("moderador",uuid.state.username)){
var G__23162_23174 = team_name;
var G__23163_23175 = uuid.state.channel_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23162_23174,G__23163_23175) : cljs.core.reset_BANG_.call(null,G__23162_23174,G__23163_23175));
} else {
}

var G__23176 = cljs.core.next(seq__23156__$1);
var G__23177 = null;
var G__23178 = (0);
var G__23179 = (0);
seq__23156 = G__23176;
chunk__23157 = G__23177;
count__23158 = G__23178;
i__23159 = G__23179;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj23155;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj23183 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj23183;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.restore_player_data = (function penny_pub_react$pubnub$restore_player_data(channel_slug,player_number,player_name){
penny_pub_react.pubnub.restore_player_data_obj = (function (){var obj23191 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
console.log("init restore-player-data");

var G__23192_23196 = player_number;
var G__23193_23197 = m.player_number;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23192_23196,G__23193_23197) : cljs.core.reset_BANG_.call(null,G__23192_23196,G__23193_23197));

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.username,"new-player"))){
var G__23194_23198 = player_name;
var G__23195_23199 = m.username;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23194_23198,G__23195_23199) : cljs.core.reset_BANG_.call(null,G__23194_23198,G__23195_23199));
} else {
}

return console.log("end restore-player-data");
})};
return obj23191;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.restore_player_data_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,player1,player2,player3,player4,playing_QMARK_,batch_size,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj23240 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
console.log("init message user");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("start_game",m.state_game)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,m.total_coins);

var G__23241_23278 = batch_size;
var G__23242_23279 = m.batch_size;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23241_23278,G__23242_23279) : cljs.core.reset_BANG_.call(null,G__23241_23278,G__23242_23279));

var G__23243_23280 = finished_QMARK_;
var G__23244_23281 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23243_23280,G__23244_23281) : cljs.core.reset_BANG_.call(null,G__23243_23280,G__23244_23281));

var G__23245_23282 = playing_QMARK_;
var G__23246_23283 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23245_23282,G__23246_23283) : cljs.core.reset_BANG_.call(null,G__23245_23282,G__23246_23283));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_coins",m.state_game)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player1,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23247 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23247) : cljs.core.deref.call(null,G__23247));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23248 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23248) : cljs.core.deref.call(null,G__23248));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(2))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player2,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23249 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23249) : cljs.core.deref.call(null,G__23249));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23250 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23250) : cljs.core.deref.call(null,G__23250));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player3,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23251 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23251) : cljs.core.deref.call(null,G__23251));
})()) - m.qty));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23252 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23252) : cljs.core.deref.call(null,G__23252));
})()) + m.qty));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.player_from,(4))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$timer_DASH_first.cljs$core$IFn$_invoke$arity$1((function (){var G__23253 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23253) : cljs.core.deref.call(null,G__23253));
})()),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_first,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__23254 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23254) : cljs.core.deref.call(null,G__23254));
})()));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(player4,cljs.core.assoc,cljs.core.constant$keyword$coins,(cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23255 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23255) : cljs.core.deref.call(null,G__23255));
})()) - m.qty));

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23260 = player1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23260) : cljs.core.deref.call(null,G__23260));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23261 = player2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23261) : cljs.core.deref.call(null,G__23261));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23262 = player3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23262) : cljs.core.deref.call(null,G__23262));
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.constant$keyword$coins.cljs$core$IFn$_invoke$arity$1((function (){var G__23263 = player4;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23263) : cljs.core.deref.call(null,G__23263));
})())))){
var G__23264_23284 = finished_QMARK_;
var G__23265_23285 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23264_23284,G__23265_23285) : cljs.core.reset_BANG_.call(null,G__23264_23284,G__23265_23285));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,cljs.core.constant$keyword$timer_DASH_total,cljs.core.constant$keyword$timer.cljs$core$IFn$_invoke$arity$1((function (){var G__23266 = timers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23266) : cljs.core.deref.call(null,G__23266));
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
if(cljs.core.truth_(clojure.string.blank_QMARK_((function (){var G__23267 = player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23267) : cljs.core.deref.call(null,G__23267));
})()))){
penny_pub_react.pubnub.my_obj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m);

var G__23268_23286 = player_number;
var G__23269_23287 = ((function (){var G__23270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(penny_pub_react.pubnub.my_obj,"occupancy");
return parseInt(G__23270);
})() - (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23268_23286,G__23269_23287) : cljs.core.reset_BANG_.call(null,G__23268_23286,G__23269_23287));

penny_pub_react.pubnub.set_state(channel_slug,(function (){var obj23272 = {"username":"new-player","player_number":(function (){var G__23273 = player_number;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23273) : cljs.core.deref.call(null,G__23273));
})()};
return obj23272;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data(channel_slug,player1,player2,player3,player4);
}),"connect":(function (m){
var G__23274_23288 = connected_QMARK_;
var G__23275_23289 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23274_23288,G__23275_23289) : cljs.core.reset_BANG_.call(null,G__23274_23288,G__23275_23289));

console.log("init connect suscribe-user");

penny_pub_react.pubnub.get_team_name(channel_slug,team_name,player_number);

return console.log("end connect suscribe-user");
}),"state":(function (){var obj23277 = {"username":"new-player"};
return obj23277;
})()};
return obj23240;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
penny_pub_react.pubnub.unsuscribe = (function penny_pub_react$pubnub$unsuscribe(channel_slug){
penny_pub_react.pubnub.unsubscribe_obj = (function (){var obj23293 = {"channel":channel_slug};
return obj23293;
})();

return penny_pub_react.pubnub.PUBNUB_demo.unsubscribe(penny_pub_react.pubnub.unsubscribe_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(channel_slug,message){
penny_pub_react.pubnub.message_obj = (function (){var obj23297 = {"channel":channel_slug,"message":message};
return obj23297;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

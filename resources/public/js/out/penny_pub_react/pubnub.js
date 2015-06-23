// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
goog.require('clojure.string');
penny_pub_react.pubnub.pubInit = (function (){var obj6994 = {"publish_key":"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251","subscribe_key":"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f","uuid":(new Date()).getTime()};
return obj6994;
})();
/**
 * Init the PubNub Object
 */
penny_pub_react.pubnub.connect = (function penny_pub_react$pubnub$connect(){
penny_pub_react.pubnub.PUBNUB_demo = window.PUBNUB.init(penny_pub_react.pubnub.pubInit);
});
penny_pub_react.pubnub.count_coins = (function penny_pub_react$pubnub$count_coins(players){
return (((cljs.core.get_in.call(null,cljs.core.deref.call(null,players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"coins","coins",-706011883)], null)) + cljs.core.get_in.call(null,cljs.core.deref.call(null,players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"coins","coins",-706011883)], null))) + cljs.core.get_in.call(null,cljs.core.deref.call(null,players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"coins","coins",-706011883)], null))) + cljs.core.get_in.call(null,cljs.core.deref.call(null,players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),new cljs.core.Keyword(null,"coins","coins",-706011883)], null)));
});
penny_pub_react.pubnub.add_coins = (function penny_pub_react$pubnub$add_coins(players,p_index,qty){
return cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"coins","coins",-706011883)], null),(cljs.core.get_in.call(null,cljs.core.deref.call(null,players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"coins","coins",-706011883)], null)) + qty));
});
penny_pub_react.pubnub.substract_coins = (function penny_pub_react$pubnub$substract_coins(players,p_index,qty){
return cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"coins","coins",-706011883)], null),(cljs.core.get_in.call(null,cljs.core.deref.call(null,players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"coins","coins",-706011883)], null)) - qty));
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(channel_slug,message){
penny_pub_react.pubnub.message_obj = (function (){var obj6998 = {"channel":channel_slug,"message":message};
return obj6998;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});
penny_pub_react.pubnub.update_coins = (function penny_pub_react$pubnub$update_coins(players,m,timers,finished_QMARK_,moderator_QMARK_,channel_slug){
if(cljs.core._EQ_.call(null,m.player_from,(1))){
penny_pub_react.pubnub.substract_coins.call(null,players,(0),m.qty);

penny_pub_react.pubnub.add_coins.call(null,players,(1),m.qty);
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(2))){
penny_pub_react.pubnub.substract_coins.call(null,players,(1),m.qty);

penny_pub_react.pubnub.add_coins.call(null,players,(2),m.qty);
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(3))){
penny_pub_react.pubnub.substract_coins.call(null,players,(2),m.qty);

penny_pub_react.pubnub.add_coins.call(null,players,(3),m.qty);
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(4))){
if(cljs.core._EQ_.call(null,moderator_QMARK_,true)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)),(0))){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));

penny_pub_react.pubnub.send_message.call(null,channel_slug,(function (){var obj7004 = {"state_game":"update_first_time","time":new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers))};
return obj7004;
})());
} else {
}
} else {
}

penny_pub_react.pubnub.substract_coins.call(null,players,(3),m.qty);

if(cljs.core._EQ_.call(null,(0),penny_pub_react.pubnub.count_coins.call(null,players))){
cljs.core.reset_BANG_.call(null,finished_QMARK_,true);

if(cljs.core._EQ_.call(null,moderator_QMARK_,true)){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));

return penny_pub_react.pubnub.send_message.call(null,channel_slug,(function (){var obj7006 = {"state_game":"update_total_time","time":new cljs.core.Keyword(null,"timer-total","timer-total",1029882551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers))};
return obj7006;
})());
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.update_player = (function penny_pub_react$pubnub$update_player(players,p_index,uuid){
console.log("update-player",p_index);

cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"username","username",1605666410)], null),uuid.state.username);

return cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"state","state",-1988618099)], null),"ready");
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.update_players_data = (function penny_pub_react$pubnub$update_players_data(channel_slug,players){
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj7014 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

var seq__7015_7019 = cljs.core.seq.call(null,m.uuids);
var chunk__7016_7020 = null;
var count__7017_7021 = (0);
var i__7018_7022 = (0);
while(true){
if((i__7018_7022 < count__7017_7021)){
var uuid_7023 = cljs.core._nth.call(null,chunk__7016_7020,i__7018_7022);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_7023.state.username))){
console.log(players);

console.log(uuid_7023);

penny_pub_react.pubnub.update_player.call(null,players,(uuid_7023.state.player_number - (1)),uuid_7023);
} else {
}

var G__7024 = seq__7015_7019;
var G__7025 = chunk__7016_7020;
var G__7026 = count__7017_7021;
var G__7027 = (i__7018_7022 + (1));
seq__7015_7019 = G__7024;
chunk__7016_7020 = G__7025;
count__7017_7021 = G__7026;
i__7018_7022 = G__7027;
continue;
} else {
var temp__4126__auto___7028 = cljs.core.seq.call(null,seq__7015_7019);
if(temp__4126__auto___7028){
var seq__7015_7029__$1 = temp__4126__auto___7028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7015_7029__$1)){
var c__4884__auto___7030 = cljs.core.chunk_first.call(null,seq__7015_7029__$1);
var G__7031 = cljs.core.chunk_rest.call(null,seq__7015_7029__$1);
var G__7032 = c__4884__auto___7030;
var G__7033 = cljs.core.count.call(null,c__4884__auto___7030);
var G__7034 = (0);
seq__7015_7019 = G__7031;
chunk__7016_7020 = G__7032;
count__7017_7021 = G__7033;
i__7018_7022 = G__7034;
continue;
} else {
var uuid_7035 = cljs.core.first.call(null,seq__7015_7029__$1);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_7035.state.username))){
console.log(players);

console.log(uuid_7035);

penny_pub_react.pubnub.update_player.call(null,players,(uuid_7035.state.player_number - (1)),uuid_7035);
} else {
}

var G__7036 = cljs.core.next.call(null,seq__7015_7029__$1);
var G__7037 = null;
var G__7038 = (0);
var G__7039 = (0);
seq__7015_7019 = G__7036;
chunk__7016_7020 = G__7037;
count__7017_7021 = G__7038;
i__7018_7022 = G__7039;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj7014;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.subscribe_moderator = (function penny_pub_react$pubnub$subscribe_moderator(channel_name,channel_slug,players,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj7045 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
console.log("init message moderator");

if(cljs.core._EQ_.call(null,"update_coins",m.state_game)){
penny_pub_react.pubnub.update_coins.call(null,players,m,timers,finished_QMARK_,true,channel_slug);
} else {
}

return console.log("end message moderator");
}),"presence":(function (m){
console.log("init presence moderator");

console.log(m);

penny_pub_react.pubnub.update_players_data.call(null,channel_slug,players);

return console.log("end presence moderator");
}),"state":(function (){var obj7047 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj7047;
})()};
return obj7045;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj7055 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__7056 = cljs.core.seq.call(null,m.uuids);
var chunk__7057 = null;
var count__7058 = (0);
var i__7059 = (0);
while(true){
if((i__7059 < count__7058)){
var uuid = cljs.core._nth.call(null,chunk__7057,i__7059);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__7060 = seq__7056;
var G__7061 = chunk__7057;
var G__7062 = count__7058;
var G__7063 = (i__7059 + (1));
seq__7056 = G__7060;
chunk__7057 = G__7061;
count__7058 = G__7062;
i__7059 = G__7063;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7056);
if(temp__4126__auto__){
var seq__7056__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7056__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__7056__$1);
var G__7064 = cljs.core.chunk_rest.call(null,seq__7056__$1);
var G__7065 = c__4884__auto__;
var G__7066 = cljs.core.count.call(null,c__4884__auto__);
var G__7067 = (0);
seq__7056 = G__7064;
chunk__7057 = G__7065;
count__7058 = G__7066;
i__7059 = G__7067;
continue;
} else {
var uuid = cljs.core.first.call(null,seq__7056__$1);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__7068 = cljs.core.next.call(null,seq__7056__$1);
var G__7069 = null;
var G__7070 = (0);
var G__7071 = (0);
seq__7056 = G__7068;
chunk__7057 = G__7069;
count__7058 = G__7070;
i__7059 = G__7071;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj7055;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj7075 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj7075;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.subscribe_user = (function penny_pub_react$pubnub$subscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,players,playing_QMARK_,batch_size,total_coins,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj7083 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
console.log("init message user");

if(cljs.core._EQ_.call(null,"start_game",m.state_game)){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),(0));

cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),(0));

cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"coins","coins",-706011883)], null),m.total_coins);

cljs.core.reset_BANG_.call(null,batch_size,m.batch_size);

cljs.core.reset_BANG_.call(null,total_coins,m.total_coins);

cljs.core.reset_BANG_.call(null,finished_QMARK_,false);

cljs.core.reset_BANG_.call(null,playing_QMARK_,true);
} else {
}

if(cljs.core._EQ_.call(null,"update_coins",m.state_game)){
penny_pub_react.pubnub.update_coins.call(null,players,m,timers,finished_QMARK_,false,channel_slug);
} else {
}

if(cljs.core._EQ_.call(null,"update_first_time",m.state_game)){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),m.time);
} else {
}

if(cljs.core._EQ_.call(null,"update_total_time",m.state_game)){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551),m.time);
} else {
}

return console.log("end message user");
}),"presence":(function (m){
console.log([cljs.core.str("init presence subscribe-user"),cljs.core.str(cljs.core.deref.call(null,player_number))].join(''));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,player_number)))){
penny_pub_react.pubnub.my_obj = cljs.core.js__GT_clj.call(null,m);

cljs.core.reset_BANG_.call(null,player_number,(parseInt(cljs.core.get.call(null,penny_pub_react.pubnub.my_obj,"occupancy")) - (1)));

penny_pub_react.pubnub.set_state.call(null,channel_slug,(function (){var obj7085 = {"username":"new-player","player_number":cljs.core.deref.call(null,player_number)};
return obj7085;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data.call(null,channel_slug,players);
}),"connect":(function (m){
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

console.log("init connect subscribe-user");

penny_pub_react.pubnub.get_team_name.call(null,channel_slug,team_name);

return console.log("end connect subscribe-user");
}),"state":(function (){var obj7087 = {"username":"new-player","player_number":(1)};
return obj7087;
})()};
return obj7083;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});

//# sourceMappingURL=pubnub.js.map
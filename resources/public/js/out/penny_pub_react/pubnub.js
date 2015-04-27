// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
goog.require('clojure.string');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
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
penny_pub_react.pubnub.message_obj = (function (){var obj11062 = {"channel":channel_slug,"message":message};
return obj11062;
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

penny_pub_react.pubnub.send_message.call(null,channel_slug,(function (){var obj11068 = {"state_game":"update_first_time","time":new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers))};
return obj11068;
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

return penny_pub_react.pubnub.send_message.call(null,channel_slug,(function (){var obj11070 = {"state_game":"update_total_time","time":new cljs.core.Keyword(null,"timer-total","timer-total",1029882551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers))};
return obj11070;
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
cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"username","username",1605666410)], null),uuid.state.username);

return cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_index,new cljs.core.Keyword(null,"state","state",-1988618099)], null),"ready");
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.update_players_data = (function penny_pub_react$pubnub$update_players_data(channel_slug,players){
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj11078 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

var seq__11079_11083 = cljs.core.seq.call(null,m.uuids);
var chunk__11080_11084 = null;
var count__11081_11085 = (0);
var i__11082_11086 = (0);
while(true){
if((i__11082_11086 < count__11081_11085)){
var uuid_11087 = cljs.core._nth.call(null,chunk__11080_11084,i__11082_11086);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_11087.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_11087.state.player_number - (1)),uuid_11087);
} else {
}

var G__11088 = seq__11079_11083;
var G__11089 = chunk__11080_11084;
var G__11090 = count__11081_11085;
var G__11091 = (i__11082_11086 + (1));
seq__11079_11083 = G__11088;
chunk__11080_11084 = G__11089;
count__11081_11085 = G__11090;
i__11082_11086 = G__11091;
continue;
} else {
var temp__4126__auto___11092 = cljs.core.seq.call(null,seq__11079_11083);
if(temp__4126__auto___11092){
var seq__11079_11093__$1 = temp__4126__auto___11092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11079_11093__$1)){
var c__4884__auto___11094 = cljs.core.chunk_first.call(null,seq__11079_11093__$1);
var G__11095 = cljs.core.chunk_rest.call(null,seq__11079_11093__$1);
var G__11096 = c__4884__auto___11094;
var G__11097 = cljs.core.count.call(null,c__4884__auto___11094);
var G__11098 = (0);
seq__11079_11083 = G__11095;
chunk__11080_11084 = G__11096;
count__11081_11085 = G__11097;
i__11082_11086 = G__11098;
continue;
} else {
var uuid_11099 = cljs.core.first.call(null,seq__11079_11093__$1);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_11099.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_11099.state.player_number - (1)),uuid_11099);
} else {
}

var G__11100 = cljs.core.next.call(null,seq__11079_11093__$1);
var G__11101 = null;
var G__11102 = (0);
var G__11103 = (0);
seq__11079_11083 = G__11100;
chunk__11080_11084 = G__11101;
count__11081_11085 = G__11102;
i__11082_11086 = G__11103;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj11078;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.subscribe_moderator = (function penny_pub_react$pubnub$subscribe_moderator(channel_name,channel_slug,players,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj11109 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
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
}),"state":(function (){var obj11111 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj11111;
})()};
return obj11109;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj11119 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__11120 = cljs.core.seq.call(null,m.uuids);
var chunk__11121 = null;
var count__11122 = (0);
var i__11123 = (0);
while(true){
if((i__11123 < count__11122)){
var uuid = cljs.core._nth.call(null,chunk__11121,i__11123);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__11124 = seq__11120;
var G__11125 = chunk__11121;
var G__11126 = count__11122;
var G__11127 = (i__11123 + (1));
seq__11120 = G__11124;
chunk__11121 = G__11125;
count__11122 = G__11126;
i__11123 = G__11127;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11120);
if(temp__4126__auto__){
var seq__11120__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11120__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__11120__$1);
var G__11128 = cljs.core.chunk_rest.call(null,seq__11120__$1);
var G__11129 = c__4884__auto__;
var G__11130 = cljs.core.count.call(null,c__4884__auto__);
var G__11131 = (0);
seq__11120 = G__11128;
chunk__11121 = G__11129;
count__11122 = G__11130;
i__11123 = G__11131;
continue;
} else {
var uuid = cljs.core.first.call(null,seq__11120__$1);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__11132 = cljs.core.next.call(null,seq__11120__$1);
var G__11133 = null;
var G__11134 = (0);
var G__11135 = (0);
seq__11120 = G__11132;
chunk__11121 = G__11133;
count__11122 = G__11134;
i__11123 = G__11135;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj11119;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj11139 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj11139;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.subscribe_user = (function penny_pub_react$pubnub$subscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,players,playing_QMARK_,batch_size,total_coins,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj11147 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
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
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,player_number)))){
penny_pub_react.pubnub.my_obj = cljs.core.js__GT_clj.call(null,m);

cljs.core.reset_BANG_.call(null,player_number,(parseInt(cljs.core.get.call(null,penny_pub_react.pubnub.my_obj,"occupancy")) - (1)));

penny_pub_react.pubnub.set_state.call(null,channel_slug,(function (){var obj11149 = {"username":"new-player","player_number":cljs.core.deref.call(null,player_number)};
return obj11149;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data.call(null,channel_slug,players);
}),"connect":(function (m){
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

console.log("init connect subscribe-user");

penny_pub_react.pubnub.get_team_name.call(null,channel_slug,team_name);

return console.log("end connect subscribe-user");
}),"state":(function (){var obj11151 = {"username":"new-player"};
return obj11151;
})()};
return obj11147;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});

//# sourceMappingURL=pubnub.js.map
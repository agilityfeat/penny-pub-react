// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
goog.require('clojure.string');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
/**
 * Init the PubNub Object, and subscribe to the channel
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
penny_pub_react.pubnub.update_coins = (function penny_pub_react$pubnub$update_coins(players,m,timers,finished_QMARK_){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)),(0))){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));
} else {
}

penny_pub_react.pubnub.substract_coins.call(null,players,(3),m.qty);

if(cljs.core._EQ_.call(null,(0),penny_pub_react.pubnub.count_coins.call(null,players))){
cljs.core.reset_BANG_.call(null,finished_QMARK_,true);

return cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));
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
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj31930 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

var seq__31931_31935 = cljs.core.seq.call(null,m.uuids);
var chunk__31932_31936 = null;
var count__31933_31937 = (0);
var i__31934_31938 = (0);
while(true){
if((i__31934_31938 < count__31933_31937)){
var uuid_31939 = cljs.core._nth.call(null,chunk__31932_31936,i__31934_31938);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_31939.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_31939.state.player_number - (1)),uuid_31939);
} else {
}

var G__31940 = seq__31931_31935;
var G__31941 = chunk__31932_31936;
var G__31942 = count__31933_31937;
var G__31943 = (i__31934_31938 + (1));
seq__31931_31935 = G__31940;
chunk__31932_31936 = G__31941;
count__31933_31937 = G__31942;
i__31934_31938 = G__31943;
continue;
} else {
var temp__4126__auto___31944 = cljs.core.seq.call(null,seq__31931_31935);
if(temp__4126__auto___31944){
var seq__31931_31945__$1 = temp__4126__auto___31944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31931_31945__$1)){
var c__4884__auto___31946 = cljs.core.chunk_first.call(null,seq__31931_31945__$1);
var G__31947 = cljs.core.chunk_rest.call(null,seq__31931_31945__$1);
var G__31948 = c__4884__auto___31946;
var G__31949 = cljs.core.count.call(null,c__4884__auto___31946);
var G__31950 = (0);
seq__31931_31935 = G__31947;
chunk__31932_31936 = G__31948;
count__31933_31937 = G__31949;
i__31934_31938 = G__31950;
continue;
} else {
var uuid_31951 = cljs.core.first.call(null,seq__31931_31945__$1);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_31951.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_31951.state.player_number - (1)),uuid_31951);
} else {
}

var G__31952 = cljs.core.next.call(null,seq__31931_31945__$1);
var G__31953 = null;
var G__31954 = (0);
var G__31955 = (0);
seq__31931_31935 = G__31952;
chunk__31932_31936 = G__31953;
count__31933_31937 = G__31954;
i__31934_31938 = G__31955;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj31930;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug,players,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj31961 = {"channel":channel_slug,"noheresync":"true","uuid":"moderator-user","message":(function (m){
console.log("init message moderator");

if(cljs.core._EQ_.call(null,"update_coins",m.state_game)){
penny_pub_react.pubnub.update_coins.call(null,players,m,timers,finished_QMARK_);
} else {
}

return console.log("end message moderator");
}),"presence":(function (m){
console.log("init presence moderator");

console.log(m);

penny_pub_react.pubnub.update_players_data.call(null,channel_slug,players);

return console.log("end presence moderator");
}),"state":(function (){var obj31963 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj31963;
})()};
return obj31961;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj31971 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__31972 = cljs.core.seq.call(null,m.uuids);
var chunk__31973 = null;
var count__31974 = (0);
var i__31975 = (0);
while(true){
if((i__31975 < count__31974)){
var uuid = cljs.core._nth.call(null,chunk__31973,i__31975);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__31976 = seq__31972;
var G__31977 = chunk__31973;
var G__31978 = count__31974;
var G__31979 = (i__31975 + (1));
seq__31972 = G__31976;
chunk__31973 = G__31977;
count__31974 = G__31978;
i__31975 = G__31979;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31972);
if(temp__4126__auto__){
var seq__31972__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31972__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__31972__$1);
var G__31980 = cljs.core.chunk_rest.call(null,seq__31972__$1);
var G__31981 = c__4884__auto__;
var G__31982 = cljs.core.count.call(null,c__4884__auto__);
var G__31983 = (0);
seq__31972 = G__31980;
chunk__31973 = G__31981;
count__31974 = G__31982;
i__31975 = G__31983;
continue;
} else {
var uuid = cljs.core.first.call(null,seq__31972__$1);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__31984 = cljs.core.next.call(null,seq__31972__$1);
var G__31985 = null;
var G__31986 = (0);
var G__31987 = (0);
seq__31972 = G__31984;
chunk__31973 = G__31985;
count__31974 = G__31986;
i__31975 = G__31987;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj31971;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj31991 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj31991;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,players,playing_QMARK_,batch_size,total_coins,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj31999 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
console.log("init message user");

if(cljs.core._EQ_.call(null,"start_game",m.state_game)){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),(0));

cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),(0));

cljs.core.swap_BANG_.call(null,players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"coins","coins",-706011883)], null),m.total_coins);

cljs.core.reset_BANG_.call(null,batch_size,m.batch_size);

cljs.core.reset_BANG_.call(null,total_coins,m.total_coins);

cljs.core.reset_BANG_.call(null,playing_QMARK_,true);
} else {
}

if(cljs.core._EQ_.call(null,"update_coins",m.state_game)){
penny_pub_react.pubnub.update_coins.call(null,players,m,timers,finished_QMARK_);
} else {
}

return console.log("end message user");
}),"presence":(function (m){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,player_number)))){
penny_pub_react.pubnub.my_obj = cljs.core.js__GT_clj.call(null,m);

cljs.core.reset_BANG_.call(null,player_number,(parseInt(cljs.core.get.call(null,penny_pub_react.pubnub.my_obj,"occupancy")) - (1)));

penny_pub_react.pubnub.set_state.call(null,channel_slug,(function (){var obj32001 = {"username":"new-player","player_number":cljs.core.deref.call(null,player_number)};
return obj32001;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data.call(null,channel_slug,players);
}),"connect":(function (m){
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

console.log("init connect suscribe-user");

penny_pub_react.pubnub.get_team_name.call(null,channel_slug,team_name);

return console.log("end connect suscribe-user");
}),"state":(function (){var obj32003 = {"username":"new-player"};
return obj32003;
})()};
return obj31999;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(channel_slug,message){
penny_pub_react.pubnub.message_obj = (function (){var obj32007 = {"channel":channel_slug,"message":message};
return obj32007;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

//# sourceMappingURL=pubnub.js.map
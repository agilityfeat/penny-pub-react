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
penny_pub_react.pubnub.message_obj = (function (){var obj8891 = {"channel":channel_slug,"message":message};
return obj8891;
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
if(cljs.core._EQ_.call(null,moderator_QMARK_)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)),(0))){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));

penny_pub_react.pubnub.send_message.call(null,channel_slug,(function (){var obj8897 = {"state_game":"update_first_time","time":new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers))};
return obj8897;
})());
} else {
}
} else {
}

penny_pub_react.pubnub.substract_coins.call(null,players,(3),m.qty);

if(cljs.core._EQ_.call(null,(0),penny_pub_react.pubnub.count_coins.call(null,players))){
cljs.core.reset_BANG_.call(null,finished_QMARK_,true);

if(cljs.core._EQ_.call(null,moderator_QMARK_)){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));

return penny_pub_react.pubnub.send_message.call(null,channel_slug,(function (){var obj8899 = {"state_game":"update_total_time","time":new cljs.core.Keyword(null,"timer-total","timer-total",1029882551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers))};
return obj8899;
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
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj8907 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

var seq__8908_8912 = cljs.core.seq.call(null,m.uuids);
var chunk__8909_8913 = null;
var count__8910_8914 = (0);
var i__8911_8915 = (0);
while(true){
if((i__8911_8915 < count__8910_8914)){
var uuid_8916 = cljs.core._nth.call(null,chunk__8909_8913,i__8911_8915);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_8916.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_8916.state.player_number - (1)),uuid_8916);
} else {
}

var G__8917 = seq__8908_8912;
var G__8918 = chunk__8909_8913;
var G__8919 = count__8910_8914;
var G__8920 = (i__8911_8915 + (1));
seq__8908_8912 = G__8917;
chunk__8909_8913 = G__8918;
count__8910_8914 = G__8919;
i__8911_8915 = G__8920;
continue;
} else {
var temp__4126__auto___8921 = cljs.core.seq.call(null,seq__8908_8912);
if(temp__4126__auto___8921){
var seq__8908_8922__$1 = temp__4126__auto___8921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8908_8922__$1)){
var c__4884__auto___8923 = cljs.core.chunk_first.call(null,seq__8908_8922__$1);
var G__8924 = cljs.core.chunk_rest.call(null,seq__8908_8922__$1);
var G__8925 = c__4884__auto___8923;
var G__8926 = cljs.core.count.call(null,c__4884__auto___8923);
var G__8927 = (0);
seq__8908_8912 = G__8924;
chunk__8909_8913 = G__8925;
count__8910_8914 = G__8926;
i__8911_8915 = G__8927;
continue;
} else {
var uuid_8928 = cljs.core.first.call(null,seq__8908_8922__$1);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_8928.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_8928.state.player_number - (1)),uuid_8928);
} else {
}

var G__8929 = cljs.core.next.call(null,seq__8908_8922__$1);
var G__8930 = null;
var G__8931 = (0);
var G__8932 = (0);
seq__8908_8912 = G__8929;
chunk__8909_8913 = G__8930;
count__8910_8914 = G__8931;
i__8911_8915 = G__8932;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj8907;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.subscribe_moderator = (function penny_pub_react$pubnub$subscribe_moderator(channel_name,channel_slug,players,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj8938 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
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
}),"state":(function (){var obj8940 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj8940;
})()};
return obj8938;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj8948 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__8949 = cljs.core.seq.call(null,m.uuids);
var chunk__8950 = null;
var count__8951 = (0);
var i__8952 = (0);
while(true){
if((i__8952 < count__8951)){
var uuid = cljs.core._nth.call(null,chunk__8950,i__8952);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__8953 = seq__8949;
var G__8954 = chunk__8950;
var G__8955 = count__8951;
var G__8956 = (i__8952 + (1));
seq__8949 = G__8953;
chunk__8950 = G__8954;
count__8951 = G__8955;
i__8952 = G__8956;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8949);
if(temp__4126__auto__){
var seq__8949__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8949__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__8949__$1);
var G__8957 = cljs.core.chunk_rest.call(null,seq__8949__$1);
var G__8958 = c__4884__auto__;
var G__8959 = cljs.core.count.call(null,c__4884__auto__);
var G__8960 = (0);
seq__8949 = G__8957;
chunk__8950 = G__8958;
count__8951 = G__8959;
i__8952 = G__8960;
continue;
} else {
var uuid = cljs.core.first.call(null,seq__8949__$1);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__8961 = cljs.core.next.call(null,seq__8949__$1);
var G__8962 = null;
var G__8963 = (0);
var G__8964 = (0);
seq__8949 = G__8961;
chunk__8950 = G__8962;
count__8951 = G__8963;
i__8952 = G__8964;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj8948;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj8968 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj8968;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.subscribe_user = (function penny_pub_react$pubnub$subscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,players,playing_QMARK_,batch_size,total_coins,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj8976 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
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

penny_pub_react.pubnub.set_state.call(null,channel_slug,(function (){var obj8978 = {"username":"new-player","player_number":cljs.core.deref.call(null,player_number)};
return obj8978;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data.call(null,channel_slug,players);
}),"connect":(function (m){
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

console.log("init connect subscribe-user");

penny_pub_react.pubnub.get_team_name.call(null,channel_slug,team_name);

return console.log("end connect subscribe-user");
}),"state":(function (){var obj8980 = {"username":"new-player"};
return obj8980;
})()};
return obj8976;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});

//# sourceMappingURL=pubnub.js.map
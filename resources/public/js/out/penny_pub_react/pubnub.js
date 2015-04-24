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
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj32386 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

var seq__32387_32391 = cljs.core.seq.call(null,m.uuids);
var chunk__32388_32392 = null;
var count__32389_32393 = (0);
var i__32390_32394 = (0);
while(true){
if((i__32390_32394 < count__32389_32393)){
var uuid_32395 = cljs.core._nth.call(null,chunk__32388_32392,i__32390_32394);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_32395.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_32395.state.player_number - (1)),uuid_32395);
} else {
}

var G__32396 = seq__32387_32391;
var G__32397 = chunk__32388_32392;
var G__32398 = count__32389_32393;
var G__32399 = (i__32390_32394 + (1));
seq__32387_32391 = G__32396;
chunk__32388_32392 = G__32397;
count__32389_32393 = G__32398;
i__32390_32394 = G__32399;
continue;
} else {
var temp__4126__auto___32400 = cljs.core.seq.call(null,seq__32387_32391);
if(temp__4126__auto___32400){
var seq__32387_32401__$1 = temp__4126__auto___32400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32387_32401__$1)){
var c__4884__auto___32402 = cljs.core.chunk_first.call(null,seq__32387_32401__$1);
var G__32403 = cljs.core.chunk_rest.call(null,seq__32387_32401__$1);
var G__32404 = c__4884__auto___32402;
var G__32405 = cljs.core.count.call(null,c__4884__auto___32402);
var G__32406 = (0);
seq__32387_32391 = G__32403;
chunk__32388_32392 = G__32404;
count__32389_32393 = G__32405;
i__32390_32394 = G__32406;
continue;
} else {
var uuid_32407 = cljs.core.first.call(null,seq__32387_32401__$1);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_32407.state.username))){
penny_pub_react.pubnub.update_player.call(null,players,(uuid_32407.state.player_number - (1)),uuid_32407);
} else {
}

var G__32408 = cljs.core.next.call(null,seq__32387_32401__$1);
var G__32409 = null;
var G__32410 = (0);
var G__32411 = (0);
seq__32387_32391 = G__32408;
chunk__32388_32392 = G__32409;
count__32389_32393 = G__32410;
i__32390_32394 = G__32411;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj32386;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
/**
 * Update player's username and state
 */
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug,players,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj32417 = {"channel":channel_slug,"noheresync":"true","uuid":"moderator-user","message":(function (m){
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
}),"state":(function (){var obj32419 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj32419;
})()};
return obj32417;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj32427 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__32428 = cljs.core.seq.call(null,m.uuids);
var chunk__32429 = null;
var count__32430 = (0);
var i__32431 = (0);
while(true){
if((i__32431 < count__32430)){
var uuid = cljs.core._nth.call(null,chunk__32429,i__32431);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__32432 = seq__32428;
var G__32433 = chunk__32429;
var G__32434 = count__32430;
var G__32435 = (i__32431 + (1));
seq__32428 = G__32432;
chunk__32429 = G__32433;
count__32430 = G__32434;
i__32431 = G__32435;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32428);
if(temp__4126__auto__){
var seq__32428__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32428__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__32428__$1);
var G__32436 = cljs.core.chunk_rest.call(null,seq__32428__$1);
var G__32437 = c__4884__auto__;
var G__32438 = cljs.core.count.call(null,c__4884__auto__);
var G__32439 = (0);
seq__32428 = G__32436;
chunk__32429 = G__32437;
count__32430 = G__32438;
i__32431 = G__32439;
continue;
} else {
var uuid = cljs.core.first.call(null,seq__32428__$1);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__32440 = cljs.core.next.call(null,seq__32428__$1);
var G__32441 = null;
var G__32442 = (0);
var G__32443 = (0);
seq__32428 = G__32440;
chunk__32429 = G__32441;
count__32430 = G__32442;
i__32431 = G__32443;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj32427;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj32447 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj32447;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,players,playing_QMARK_,batch_size,total_coins,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj32455 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
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
penny_pub_react.pubnub.update_coins.call(null,players,m,timers,finished_QMARK_);
} else {
}

return console.log("end message user");
}),"presence":(function (m){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,player_number)))){
penny_pub_react.pubnub.my_obj = cljs.core.js__GT_clj.call(null,m);

cljs.core.reset_BANG_.call(null,player_number,(parseInt(cljs.core.get.call(null,penny_pub_react.pubnub.my_obj,"occupancy")) - (1)));

penny_pub_react.pubnub.set_state.call(null,channel_slug,(function (){var obj32457 = {"username":"new-player","player_number":cljs.core.deref.call(null,player_number)};
return obj32457;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data.call(null,channel_slug,players);
}),"connect":(function (m){
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

console.log("init connect suscribe-user");

penny_pub_react.pubnub.get_team_name.call(null,channel_slug,team_name);

return console.log("end connect suscribe-user");
}),"state":(function (){var obj32459 = {"username":"new-player"};
return obj32459;
})()};
return obj32455;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(channel_slug,message){
penny_pub_react.pubnub.message_obj = (function (){var obj32463 = {"channel":channel_slug,"message":message};
return obj32463;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

//# sourceMappingURL=pubnub.js.map
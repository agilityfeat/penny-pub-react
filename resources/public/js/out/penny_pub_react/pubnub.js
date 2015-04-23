// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
goog.require('clojure.string');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
penny_pub_react.pubnub.my_state = cljs.core.atom.call(null,"");
/**
 * Init the PubNub Object, and subscribe to the channel
 */
penny_pub_react.pubnub.connect = (function penny_pub_react$pubnub$connect(){
penny_pub_react.pubnub.PUBNUB_demo = window.PUBNUB.init(penny_pub_react.pubnub.pubInit);
});
penny_pub_react.pubnub.update_player = (function penny_pub_react$pubnub$update_player(player,uuid){
console.log("entro a modificar",uuid.state.username);

cljs.core.swap_BANG_.call(null,player,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),uuid.state.username);

return cljs.core.swap_BANG_.call(null,player,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),"ready");
});
penny_pub_react.pubnub.update_players_data = (function penny_pub_react$pubnub$update_players_data(channel_slug,player1,player2,player3,player4){
penny_pub_react.pubnub.update_players_data_obj = (function (){var obj28646 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error update-players-data");

console.log(m);

return console.log("end error update-players-data");
}),"callback":(function (m){
console.log("init callback update-players-data");

console.log(m);

var seq__28647_28651 = cljs.core.seq.call(null,m.uuids);
var chunk__28648_28652 = null;
var count__28649_28653 = (0);
var i__28650_28654 = (0);
while(true){
if((i__28650_28654 < count__28649_28653)){
var uuid_28655 = cljs.core._nth.call(null,chunk__28648_28652,i__28650_28654);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_28655.state.username))){
console.log("entro a verificar",uuid_28655.state.player_number);

if(cljs.core._EQ_.call(null,(1),uuid_28655.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player1,uuid_28655);
} else {
}

if(cljs.core._EQ_.call(null,(2),uuid_28655.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player2,uuid_28655);
} else {
}

if(cljs.core._EQ_.call(null,(3),uuid_28655.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player3,uuid_28655);
} else {
}

if(cljs.core._EQ_.call(null,(4),uuid_28655.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player4,uuid_28655);
} else {
}
} else {
}

var G__28656 = seq__28647_28651;
var G__28657 = chunk__28648_28652;
var G__28658 = count__28649_28653;
var G__28659 = (i__28650_28654 + (1));
seq__28647_28651 = G__28656;
chunk__28648_28652 = G__28657;
count__28649_28653 = G__28658;
i__28650_28654 = G__28659;
continue;
} else {
var temp__4126__auto___28660 = cljs.core.seq.call(null,seq__28647_28651);
if(temp__4126__auto___28660){
var seq__28647_28661__$1 = temp__4126__auto___28660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28647_28661__$1)){
var c__4884__auto___28662 = cljs.core.chunk_first.call(null,seq__28647_28661__$1);
var G__28663 = cljs.core.chunk_rest.call(null,seq__28647_28661__$1);
var G__28664 = c__4884__auto___28662;
var G__28665 = cljs.core.count.call(null,c__4884__auto___28662);
var G__28666 = (0);
seq__28647_28651 = G__28663;
chunk__28648_28652 = G__28664;
count__28649_28653 = G__28665;
i__28650_28654 = G__28666;
continue;
} else {
var uuid_28667 = cljs.core.first.call(null,seq__28647_28661__$1);
if(!(cljs.core._EQ_.call(null,"moderador",uuid_28667.state.username))){
console.log("entro a verificar",uuid_28667.state.player_number);

if(cljs.core._EQ_.call(null,(1),uuid_28667.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player1,uuid_28667);
} else {
}

if(cljs.core._EQ_.call(null,(2),uuid_28667.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player2,uuid_28667);
} else {
}

if(cljs.core._EQ_.call(null,(3),uuid_28667.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player3,uuid_28667);
} else {
}

if(cljs.core._EQ_.call(null,(4),uuid_28667.state.player_number)){
penny_pub_react.pubnub.update_player.call(null,player4,uuid_28667);
} else {
}
} else {
}

var G__28668 = cljs.core.next.call(null,seq__28647_28661__$1);
var G__28669 = null;
var G__28670 = (0);
var G__28671 = (0);
seq__28647_28651 = G__28668;
chunk__28648_28652 = G__28669;
count__28649_28653 = G__28670;
i__28650_28654 = G__28671;
continue;
}
} else {
}
}
break;
}

return console.log("end callback update-players-data");
})};
return obj28646;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.update_players_data_obj);
});
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug,player1,player2,player3,player4,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj28677 = {"channel":channel_slug,"noheresync":"true","uuid":"moderator-user","message":(function (m){
console.log("init message moderator");

if(cljs.core._EQ_.call(null,"update_coins",m.state_game)){
if(cljs.core._EQ_.call(null,m.player_from,(1))){
cljs.core.swap_BANG_.call(null,player1,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player1)) - m.qty));

cljs.core.swap_BANG_.call(null,player2,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player2)) + m.qty));
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(2))){
cljs.core.swap_BANG_.call(null,player2,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player2)) - m.qty));

cljs.core.swap_BANG_.call(null,player3,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player3)) + m.qty));
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(3))){
cljs.core.swap_BANG_.call(null,player3,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player3)) - m.qty));

cljs.core.swap_BANG_.call(null,player4,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player4)) + m.qty));
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(4))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)),(0))){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));
} else {
}

cljs.core.swap_BANG_.call(null,player4,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player4)) - m.qty));

if((cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player1)))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player2)))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player3)))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player4))))){
cljs.core.reset_BANG_.call(null,finished_QMARK_,true);

cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));
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

penny_pub_react.pubnub.update_players_data.call(null,channel_slug,player1,player2,player3,player4);

return console.log("end presence moderator");
}),"state":(function (){var obj28679 = {"username":"moderador","state_game":"waiting_for_players","channel_name":channel_name};
return obj28679;
})()};
return obj28677;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.get_team_name = (function penny_pub_react$pubnub$get_team_name(channel_slug,team_name,player_number){
penny_pub_react.pubnub.get_team_name_obj = (function (){var obj28687 = {"channel":channel_slug,"state":"true","error":(function (m){
console.log("init error get-team-name");

console.log(m);

return console.log("end error get-team-name");
}),"callback":(function (m){
console.log("init here-now get-team-name");

console.log(m);

console.log("end here-now get-team-name");

var seq__28688 = cljs.core.seq.call(null,m.uuids);
var chunk__28689 = null;
var count__28690 = (0);
var i__28691 = (0);
while(true){
if((i__28691 < count__28690)){
var uuid = cljs.core._nth.call(null,chunk__28689,i__28691);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__28692 = seq__28688;
var G__28693 = chunk__28689;
var G__28694 = count__28690;
var G__28695 = (i__28691 + (1));
seq__28688 = G__28692;
chunk__28689 = G__28693;
count__28690 = G__28694;
i__28691 = G__28695;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28688);
if(temp__4126__auto__){
var seq__28688__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28688__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__28688__$1);
var G__28696 = cljs.core.chunk_rest.call(null,seq__28688__$1);
var G__28697 = c__4884__auto__;
var G__28698 = cljs.core.count.call(null,c__4884__auto__);
var G__28699 = (0);
seq__28688 = G__28696;
chunk__28689 = G__28697;
count__28690 = G__28698;
i__28691 = G__28699;
continue;
} else {
var uuid = cljs.core.first.call(null,seq__28688__$1);
if(cljs.core._EQ_.call(null,"moderador",uuid.state.username)){
cljs.core.reset_BANG_.call(null,team_name,uuid.state.channel_name);
} else {
}

var G__28700 = cljs.core.next.call(null,seq__28688__$1);
var G__28701 = null;
var G__28702 = (0);
var G__28703 = (0);
seq__28688 = G__28700;
chunk__28689 = G__28701;
count__28690 = G__28702;
i__28691 = G__28703;
continue;
}
} else {
return null;
}
}
break;
}
})};
return obj28687;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_team_name_obj);
});
penny_pub_react.pubnub.set_state = (function penny_pub_react$pubnub$set_state(channel_slug,jsobj){
penny_pub_react.pubnub.set_state_obj = (function (){var obj28707 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":jsobj};
return obj28707;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_state_obj);
});
penny_pub_react.pubnub.restore_player_data = (function penny_pub_react$pubnub$restore_player_data(channel_slug,player_number,player_name){
penny_pub_react.pubnub.restore_player_data_obj = (function (){var obj28711 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
console.log("init restore-player-data");

cljs.core.reset_BANG_.call(null,player_number,m.player_number);

if(!(cljs.core._EQ_.call(null,m.username,"new-player"))){
cljs.core.reset_BANG_.call(null,player_name,m.username);
} else {
}

return console.log("end restore-player-data");
})};
return obj28711;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.restore_player_data_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug,team_name,player_number,player_name,connected_QMARK_,player1,player2,player3,player4,playing_QMARK_,batch_size,timers,finished_QMARK_){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj28719 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
console.log("init message user");

if(cljs.core._EQ_.call(null,"start_game",m.state_game)){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),(0));

cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),(0));

cljs.core.swap_BANG_.call(null,player1,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),m.total_coins);

cljs.core.reset_BANG_.call(null,batch_size,m.batch_size);

cljs.core.reset_BANG_.call(null,finished_QMARK_,false);

cljs.core.reset_BANG_.call(null,playing_QMARK_,true);
} else {
}

if(cljs.core._EQ_.call(null,"update_coins",m.state_game)){
if(cljs.core._EQ_.call(null,m.player_from,(1))){
cljs.core.swap_BANG_.call(null,player1,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player1)) - m.qty));

cljs.core.swap_BANG_.call(null,player2,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player2)) + m.qty));
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(2))){
cljs.core.swap_BANG_.call(null,player2,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player2)) - m.qty));

cljs.core.swap_BANG_.call(null,player3,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player3)) + m.qty));
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(3))){
cljs.core.swap_BANG_.call(null,player3,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player3)) - m.qty));

cljs.core.swap_BANG_.call(null,player4,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player4)) + m.qty));
} else {
}

if(cljs.core._EQ_.call(null,m.player_from,(4))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)),(0))){
cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));
} else {
}

cljs.core.swap_BANG_.call(null,player4,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),(new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player4)) - m.qty));

if((cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player1)))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player2)))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player3)))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player4))))){
cljs.core.reset_BANG_.call(null,finished_QMARK_,true);

cljs.core.swap_BANG_.call(null,timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timers)));
} else {
}
} else {
}
} else {
}

console.log(m);

return console.log("end message user");
}),"presence":(function (m){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,player_number)))){
alert("presence",m.occupancy);

cljs.core.reset_BANG_.call(null,player_number,(m.occupancy - (1)));

penny_pub_react.pubnub.set_state.call(null,channel_slug,(function (){var obj28721 = {"username":"new-player","player_number":cljs.core.deref.call(null,player_number)};
return obj28721;
})());
} else {
}

return penny_pub_react.pubnub.update_players_data.call(null,channel_slug,player1,player2,player3,player4);
}),"connect":(function (m){
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

console.log("init connect suscribe-user");

penny_pub_react.pubnub.get_team_name.call(null,channel_slug,team_name,player_number);

return console.log("end connect suscribe-user");
}),"state":(function (){var obj28723 = {"username":"new-player"};
return obj28723;
})()};
return obj28719;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
penny_pub_react.pubnub.unsuscribe = (function penny_pub_react$pubnub$unsuscribe(channel_slug){
penny_pub_react.pubnub.unsubscribe_obj = (function (){var obj28727 = {"channel":channel_slug};
return obj28727;
})();

return penny_pub_react.pubnub.PUBNUB_demo.unsubscribe(penny_pub_react.pubnub.unsubscribe_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(channel_slug,message){
penny_pub_react.pubnub.message_obj = (function (){var obj28731 = {"channel":channel_slug,"message":message};
return obj28731;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

//# sourceMappingURL=pubnub.js.map
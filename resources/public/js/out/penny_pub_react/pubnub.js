// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
/**
 * Init the PubNub Object, and subscribe to the channel
 */
penny_pub_react.pubnub.connect = (function penny_pub_react$pubnub$connect(){
penny_pub_react.pubnub.PUBNUB_demo = window.PUBNUB.init(penny_pub_react.pubnub.pubInit);
});
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj24608 = {"channel":channel_slug,"noheresync":"true","uuid":"moderator-user","message":(function (m){
return console.log(m);
}),"presence":(function (m){
return console.log(m);
}),"state":(function (){var obj24610 = {"username":"moderador","channel_name":channel_name};
return obj24610;
})()};
return obj24608;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj24616 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
return console.log(m);
}),"presence":(function (m){
console.log("init");

console.log(m);

return console.log("fin");
}),"state":(function (){var obj24618 = {"username":"new-player"};
return obj24618;
})()};
return obj24616;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
penny_pub_react.pubnub.get_state = (function penny_pub_react$pubnub$get_state(channel_slug,team_name,player_number){
penny_pub_react.pubnub.get_state_obj = (function (){var obj24622 = {"channel":channel_slug,"state":"true","error":(function (m){
return console.log(m);
}),"callback":(function (m){
cljs.core.reset_BANG_.call(null,player_number,(m.uuids.length - (1)));

return cljs.core.reset_BANG_.call(null,team_name,(m.uuids[(0)]).state.channel_name);
})};
return obj24622;
})();

return penny_pub_react.pubnub.PUBNUB_demo.here_now(penny_pub_react.pubnub.get_state_obj);
});
penny_pub_react.pubnub.set_user_name = (function penny_pub_react$pubnub$set_user_name(channel_slug,user_name){
penny_pub_react.pubnub.set_user_obj = (function (){var obj24628 = {"channel":channel_slug,"error":(function (m){
return console.log(m);
}),"callback":(function (m){
return console.log(m);
}),"state":(function (){var obj24630 = {"username":user_name};
return obj24630;
})()};
return obj24628;
})();

return penny_pub_react.pubnub.PUBNUB_demo.state(penny_pub_react.pubnub.set_user_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(message,channel_slug){
penny_pub_react.pubnub.message_obj = (function (){var obj24634 = {"channel":channel_slug,"message":message};
return obj24634;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

//# sourceMappingURL=pubnub.js.map
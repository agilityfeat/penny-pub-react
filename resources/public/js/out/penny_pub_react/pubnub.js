// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
/**
 * Init the PubNub Object, and subscribe to the channel
 */
penny_pub_react.pubnub.init = (function penny_pub_react$pubnub$init(){
penny_pub_react.pubnub.PUBNUB_demo = window.PUBNUB.init(penny_pub_react.pubnub.pubInit);
});
penny_pub_react.pubnub.suscribe_moderator = (function penny_pub_react$pubnub$suscribe_moderator(channel_name,channel_slug){
penny_pub_react.pubnub.subscribe_moderator_obj = (function (){var obj26406 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
return console.log(m);
}),"presence":(function (m){
alert("entro3");

return console.log(m);
}),"state":(function (){var obj26408 = {"username":"moderador","channel_name":channel_name};
return obj26408;
})()};
return obj26406;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_moderator_obj);
});
penny_pub_react.pubnub.suscribe_user = (function penny_pub_react$pubnub$suscribe_user(channel_slug){
penny_pub_react.pubnub.subscribe_user_obj = (function (){var obj26414 = {"channel":channel_slug,"noheresync":"true","message":(function (m){
return console.log(m);
}),"presence":(function (m){
alert("entro2");

console.log("init");

console.log(m);

return console.log("fin");
}),"state":(function (){var obj26416 = {"username":"new-player"};
return obj26416;
})()};
return obj26414;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_user_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(message,channel_slug){
penny_pub_react.pubnub.message_obj = (function (){var obj26420 = {"channel":channel_slug,"message":message};
return obj26420;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

//# sourceMappingURL=pubnub.js.map
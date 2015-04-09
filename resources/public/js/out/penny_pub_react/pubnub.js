// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
penny_pub_react.pubnub.channel_name = "canal";
/**
 * Init the PubNub Object, and subscribe to the channel
 */
penny_pub_react.pubnub.init = (function penny_pub_react$pubnub$init(atom_var){
penny_pub_react.pubnub.PUBNUB_demo = PUBNUB.init(penny_pub_react.pubnub.pubInit);

penny_pub_react.pubnub.subscribe_obj = (function (){var obj19127 = {"channel":penny_pub_react.pubnub.channel_name,"message":(function (m){
cljs.core.reset_BANG_.call(null,atom_var,m);

return console.log(m);
})};
return obj19127;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(message){
penny_pub_react.pubnub.message_obj = (function (){var obj19131 = {"channel":penny_pub_react.pubnub.channel_name,"message":message};
return obj19131;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

//# sourceMappingURL=pubnub.js.map
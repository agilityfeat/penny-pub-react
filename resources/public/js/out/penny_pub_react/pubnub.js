// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('penny_pub_react.pubnub');
goog.require('cljs.core');
penny_pub_react.pubnub.pubInit = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$publish_key,"pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251",cljs.core.constant$keyword$subscribe_key,"sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"], null);
penny_pub_react.pubnub.channel_name = "canal";
/**
 * Init the PubNub Object, and subscribe to the channel
 */
penny_pub_react.pubnub.init = (function penny_pub_react$pubnub$init(atom_var){
penny_pub_react.pubnub.PUBNUB_demo = window.PUBNUB.init(penny_pub_react.pubnub.pubInit);

penny_pub_react.pubnub.subscribe_obj = (function (){var obj12902 = {"channel":penny_pub_react.pubnub.channel_name,"message":(function (m){
var G__12903_12905 = atom_var;
var G__12904_12906 = m;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12903_12905,G__12904_12906) : cljs.core.reset_BANG_.call(null,G__12903_12905,G__12904_12906));

return console.log(m);
})};
return obj12902;
})();

return penny_pub_react.pubnub.PUBNUB_demo.subscribe(penny_pub_react.pubnub.subscribe_obj);
});
/**
 * Send a message to the channel
 */
penny_pub_react.pubnub.send_message = (function penny_pub_react$pubnub$send_message(message){
penny_pub_react.pubnub.message_obj = (function (){var obj12910 = {"channel":penny_pub_react.pubnub.channel_name,"message":message};
return obj12910;
})();

return penny_pub_react.pubnub.PUBNUB_demo.publish(penny_pub_react.pubnub.message_obj);
});

(ns penny-pub-react.pubnub)

;;******* PubNub config *******

;;Define publish_key and subscribe_key 
(def pubInit {:publish_key "pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251"
        	  :subscribe_key "sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"})
;;Define the channel-name
(def channel-name "canal")

;;******* PubNub functions *******

;;Init Pubnub function 
(defn init 
	"Init the PubNub Object, and subscribe to the channel"
	[atom-var]
	(def PUBNUB_demo (.PUBNUB.init js/window pubInit))
	(def subscribe-obj (js-obj  "channel" channel-name 
							    "message" (fn [m] 
		  										(reset! atom-var m)
		  										(.log js/console m))))
    (.subscribe PUBNUB_demo subscribe-obj))

;;Send message function
(defn send-message 
	"Send a message to the channel"
	[message]
	(def message-obj (js-obj  "channel" channel-name "message" message))
	(.publish PUBNUB_demo message-obj))
		
(ns penny-pub-react.pubnub)

;;******* PubNub config *******

;;Define publish_key and subscribe_key 
(def pubInit {:publish_key "pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251"
        	  :subscribe_key "sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"})
;;******* PubNub functions *******

;;Init Pubnub function 
(defn init 
	"Init the PubNub Object, and subscribe to the channel"
	[]
	(def PUBNUB_demo (.PUBNUB.init js/window pubInit)))

(defn suscribe-moderator [channel-name channel-slug]
	(def subscribe-moderator-obj (js-obj  "channel" channel-slug
								"noheresync" "true"
								"message" (fn [m] 
		  										(.log js/console m))
								"presence" (fn [m] 
												(js/alert "entro3")
		  										(.log js/console m))
								 "state" (js-obj "username" "moderador" 
								 				 "channel_name" channel-name)))
    (.subscribe PUBNUB_demo subscribe-moderator-obj))

(defn suscribe-user [channel-slug]
	(def subscribe-user-obj (js-obj  "channel" channel-slug
									 "noheresync" "true"
									 "message" (fn [m] 
		  										(.log js/console m))
									 "presence" (fn [m] 
									 			(js/alert "entro2")
		  										(.log js/console "init")
		  										(.log js/console m)
		  										(.log js/console "fin"))
								 	 "state" (js-obj "username" "new-player")))
    (.subscribe PUBNUB_demo subscribe-user-obj))   
	

;;Send message function
(defn send-message 
	"Send a message to the channel"
	[message channel-slug]
	(def message-obj (js-obj  "channel" channel-slug "message" message))
	(.publish PUBNUB_demo message-obj))
		
(ns penny-pub-react.pubnub
	(:require [clojure.string :as string]))

;;******* PubNub config *******

;;Define publish_key and subscribe_key 
(def pubInit {:publish_key "pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251"
        	  :subscribe_key "sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"})
;;******* PubNub functions *******

;;Init Pubnub function 
(defn connect 
	"Init the PubNub Object"
	[]
	(def PUBNUB_demo (.PUBNUB.init js/window pubInit)))

(defn count-coins [players]
	(+ (get-in @players [0 :coins])
	   (get-in @players [1 :coins])
	   (get-in @players [2 :coins])
	   (get-in @players [3 :coins])))

(defn add-coins [players p-index qty]
	(swap! players assoc-in [p-index :coins] (+ (get-in @players [p-index :coins]) qty)))

(defn substract-coins [players p-index qty]
	(swap! players assoc-in [p-index :coins] (- (get-in @players [p-index :coins]) qty)))

;;Send message function
(defn send-message 
	"Send a message to the channel"
	[channel-slug message]
	(def message-obj (js-obj  "channel" channel-slug "message" message))
	(.publish PUBNUB_demo message-obj))
		

(defn update-coins [players m timers finished? moderator? channel-slug] 
	(when (= m.player_from 1)
		(substract-coins players 0 m.qty)
		(add-coins players 1 m.qty))

	(when (= m.player_from 2)
		(substract-coins players 1 m.qty)
		(add-coins players 2 m.qty))

    (when (= m.player_from 3)
		(substract-coins players 2 m.qty)
		(add-coins players 3 m.qty))

	(when (= m.player_from 4)
		
		(if (= moderator? true)
				
				(if (= (:timer-first @timers) 0)
					(do 
						(swap! timers assoc :timer-first (:timer @timers))
						(send-message channel-slug (js-obj "state_game" "update_first_time"
                                           				    "time" (:timer-first @timers))))))
		
		
		(substract-coins players 3 m.qty)
		(when (= 0 (count-coins players))
			(reset! finished? true)
			(if (= moderator?  true)
				(do 
					(swap! timers assoc :timer-total (:timer @timers))
					(send-message channel-slug (js-obj "state_game" "update_total_time"
                                           				    "time" (:timer-total @timers))))))))

(defn update-player
	"Update player's username and state "
	[players p-index uuid]
	(swap! players assoc-in [p-index :username] (.-state.username uuid))
	(swap! players assoc-in [p-index :state] "ready"))

(defn update-players-data 
	"Update player's username and state"	
	[channel-slug players]
		(def update-players-data-obj (js-obj  "channel" channel-slug
											  "state" "true"
											  "error"    (fn [m] 
																(.log js/console "init error update-players-data") 
						  										(.log js/console m)
						  										(.log js/console "end error update-players-data") )
											  "callback" (fn [m] 
																(.log js/console "init callback update-players-data") 
						  										(doseq [uuid m.uuids]
						  											(if-not (= "moderador" (.-state.username uuid))
				  														(do 
				  															(update-player players (- (.-state.player_number uuid) 1) uuid))))
						  										(.log js/console "end callback update-players-data"))))
    	(.here_now PUBNUB_demo update-players-data-obj))  

(defn subscribe-moderator 
	"Update player's username and state "	
	[channel-name channel-slug players timers finished?]
	(def subscribe-moderator-obj 
		(js-obj  
		        "channel" channel-slug
				"noheresync" "true"
				"message" (fn [m] 
				             (.log js/console "init message moderator") 
				             (when (= "update_coins" m.state_game)
							    (update-coins players m timers finished? true channel-slug))
								(.log js/console "end message moderator") )
				"presence" (fn [m] 
								(.log js/console "init presence moderator") 
								(.log js/console m)
								(update-players-data channel-slug players)
								(.log js/console "end presence moderator") )
				 "state" (js-obj "username" "moderador" 
				 				 "state_game" "waiting_for_players" 
				 				 "channel_name" channel-name)))
    (.subscribe PUBNUB_demo subscribe-moderator-obj))


(defn get-team-name [channel-slug team-name]
	(def get-team-name-obj (js-obj  "channel" channel-slug
								"state" "true"
								"error"    (fn [m] 
												(.log js/console "init error get-team-name") 
		  										(.log js/console m)
		  										(.log js/console "end error get-team-name") )
								"callback" (fn [m] 
												(.log js/console "init here-now get-team-name") 
		  										(.log js/console m)
		  										(.log js/console "end here-now get-team-name") 
		  										(doseq [uuid m.uuids]
		  											(if (= "moderador" (.-state.username uuid))
  														(reset! team-name (.-state.channel_name uuid)))))))
    (.here_now PUBNUB_demo get-team-name-obj))      

(defn set-state [channel-slug jsobj]
	(def set-state-obj (js-obj  "channel" channel-slug
								"error" (fn [m] 
		  								(.log js/console m))
								"callback" (fn [m] 
										(.log js/console m))
								"state" jsobj))		
    (.state PUBNUB_demo set-state-obj)) 


(defn subscribe-user [channel-slug team-name player-number player-name connected? players playing? batch-size total-coins timers finished?]
	(def subscribe-user-obj (js-obj  "channel" channel-slug
									 "noheresync" "true"
									 "message" (fn [m] 
									 			(.log js/console "init message user") 
		  										
		  										(if (= "start_game" m.state_game)
		  											(do 
		  												(swap! timers assoc :timer 0)
          												(swap! timers assoc :timer-first 0)
		  												(swap! players assoc-in [0 :coins] m.total_coins)	
		  												(reset! batch-size m.batch_size)
		  												(reset! total-coins m.total_coins)
		  												(reset! finished? false)
		  												(reset! playing? true)))

		  										(when (= "update_coins" m.state_game)
		  											(update-coins players m timers finished? false channel-slug))

		  										(when (= "update_first_time" m.state_game)
		  											(swap! timers assoc :timer-first m.time))

		  										(when (= "update_total_time" m.state_game)
		  											(swap! timers assoc :timer-total m.time))

		  										(.log js/console "end message user") )
									 "presence" (fn [m]
									 				
									 				(if (string/blank? @player-number)
									 					(do
									 						(def my-obj (js->clj m))
									 						(reset! player-number (- (js/parseInt(get my-obj "occupancy")) 1))
									 						(set-state channel-slug (js-obj "username" "new-player"
									 														"player_number" @player-number))))
									 					(update-players-data channel-slug players))
									 "connect" (fn [m]
									 				(reset! connected? true)	
									 				(.log js/console "init connect subscribe-user") 
									 				(get-team-name channel-slug team-name)
									 				(.log js/console "end connect subscribe-user") )
								 	 "state" (js-obj "username" "new-player")))
    (.subscribe PUBNUB_demo subscribe-user-obj))  


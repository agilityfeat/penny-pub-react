(ns penny-pub-react.pubnub
	(:require [clojure.string :as string]))

;;******* PubNub config *******

;;Define publish_key and subscribe_key 
(def pubInit {:publish_key "pub-c-0203f03f-f8c1-4bb9-8f19-45090d1e2251"
        	  :subscribe_key "sub-c-6a41cc4c-dedf-11e4-a502-0619f8945a4f"})
;;******* PubNub functions *******

(def my-state (atom ""))

;;Init Pubnub function 
(defn connect 
	"Init the PubNub Object, and subscribe to the channel"
	[]
	(def PUBNUB_demo (.PUBNUB.init js/window pubInit)))



(defn update-player
	[player uuid]
	(.log js/console "entro a modificar" (.-state.username uuid))
	(swap! player assoc :username (.-state.username uuid))
	(swap! player assoc :state "ready")
	)

(defn update-players-data 
	[channel-slug player1 player2 player3 player4]
		(def update-players-data-obj (js-obj  "channel" channel-slug
								"state" "true"
								"error"    (fn [m] 
												(.log js/console "init error update-players-data") 
		  										(.log js/console m)
		  										(.log js/console "end error update-players-data") )
								"callback" (fn [m] 
												(.log js/console "init callback update-players-data") 
		  										(.log js/console m)
		  										(doseq [uuid m.uuids]
		  											(if-not (= "moderador" (.-state.username uuid))
  														(do 
  															
  															(.log js/console "entro a verificar" (.-state.player_number uuid))
  															(if (= 1 (.-state.player_number uuid)) 
  																(update-player player1 uuid))
  															(if (= 2 (.-state.player_number uuid)) 
  																(update-player player2 uuid))
  															(if (= 3 (.-state.player_number uuid)) 
  																(update-player player3 uuid))
  															(if (= 4 (.-state.player_number uuid)) 
  																(update-player player4 uuid)))))
		  										(.log js/console "end callback update-players-data") 
		  										)))
    (.here_now PUBNUB_demo update-players-data-obj))  

(defn suscribe-moderator [channel-name channel-slug player1 player2 player3 player4 timers finished?]
	(def subscribe-moderator-obj (js-obj  "channel" channel-slug
								"noheresync" "true"
								"uuid" "moderator-user"
								"message" (fn [m] 
		  										(.log js/console "init message moderator") 
		  										(when (= "update_coins" m.state_game)
		  											(when (= m.player_from 1)
		  												(swap! player1 assoc :coins (- (:coins @player1) m.qty))
  													    (swap! player2 assoc :coins (+ (:coins @player2) m.qty)))

		  											(when (= m.player_from 2)
		  												(swap! player2 assoc :coins (- (:coins @player2) m.qty))
  													    (swap! player3 assoc :coins (+ (:coins @player3) m.qty)))

		  											(when (= m.player_from 3)
		  												(swap! player3 assoc :coins (- (:coins @player3) m.qty))
  													    (swap! player4 assoc :coins (+ (:coins @player4) m.qty)))

		  											(when (= m.player_from 4)
		  												(if (= (:timer-first @timers) 0)
		  													(swap! timers assoc :timer-first (:timer @timers)))
		  												(swap! player4 assoc :coins (- (:coins @player4) m.qty))
		  												(when (and (= 0 (:coins @player1)) (= 0 (:coins @player2)) (= 0 (:coins @player3)) (= 0 (:coins @player4)) ) 
		  													(reset! finished? true)
		  													(swap! timers assoc :timer-total (:timer @timers)))))
		  										(.log js/console "end message moderator") )
								"presence" (fn [m] 
												(.log js/console "init presence moderator") 
												(.log js/console m)
												(update-players-data channel-slug player1 player2 player3 player4)
												(.log js/console "end presence moderator") )
								 "state" (js-obj "username" "moderador" 
								 				 "state_game" "waiting_for_players" 
								 				 "channel_name" channel-name)))
    (.subscribe PUBNUB_demo subscribe-moderator-obj))


(defn get-team-name [channel-slug team-name player-number]
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

(defn restore-player-data [channel-slug player-number player-name]
	(def restore-player-data-obj (js-obj  "channel" channel-slug
									"error" (fn [m] 
		  								(.log js/console m))
									"callback" (fn [m] 
										(.log js/console "init restore-player-data")
										(reset! player-number (.-player_number m))
										(if-not (= (.-username m) "new-player")
											(reset! player-name (.-username m)))
										(.log js/console "end restore-player-data"))))		
    (.state PUBNUB_demo restore-player-data-obj))      	

    

(defn suscribe-user [channel-slug team-name player-number player-name connected? player1 player2 player3 player4 playing? batch-size timers finished?]
	(def subscribe-user-obj (js-obj  "channel" channel-slug
									 "noheresync" "true"
									 "message" (fn [m] 
									 			(.log js/console "init message user") 
		  										(if (= "start_game" m.state_game)
		  											(do 
		  												(swap! timers assoc :timer 0)
          												(swap! timers assoc :timer-first 0)
		  												(swap! player1 assoc :coins m.total_coins)	
		  												(reset! batch-size m.batch_size)
		  												(reset! finished? false)
		  												(reset! playing? true)))

		  										(when (= "update_coins" m.state_game)
		  											(when (= m.player_from 1)
		  												(swap! player1 assoc :coins (- (:coins @player1) m.qty))
  													    (swap! player2 assoc :coins (+ (:coins @player2) m.qty)))

		  											(when (= m.player_from 2)
		  												(swap! player2 assoc :coins (- (:coins @player2) m.qty))
  													    (swap! player3 assoc :coins (+ (:coins @player3) m.qty)))

		  											(when (= m.player_from 3)
		  												(swap! player3 assoc :coins (- (:coins @player3) m.qty))
  													    (swap! player4 assoc :coins (+ (:coins @player4) m.qty)))

		  											(when (= m.player_from 4)
		  												(if (= (:timer-first @timers) 0)
		  													(swap! timers assoc :timer-first (:timer @timers)))
		  												(swap! player4 assoc :coins (- (:coins @player4) m.qty))
		  												(when (and (= 0 (:coins @player1)) (= 0 (:coins @player2)) (= 0 (:coins @player3)) (= 0 (:coins @player4)) ) 
		  													(reset! finished? true)
		  													(swap! timers assoc :timer-total (:timer @timers)))))
		  												

		  										(.log js/console m)
		  										(.log js/console "end message user") )
									 "presence" (fn [m]
									 				
									 				(if (string/blank? @player-number)
									 					(do
									 						(def my-obj (js->clj m))
									 						(reset! player-number (- (js/parseInt(get my-obj "occupancy")) 1))
									 						(set-state channel-slug (js-obj "username" "new-player"
									 														"player_number" @player-number))))
									 					(update-players-data channel-slug player1 player2 player3 player4))
									 "connect" (fn [m]
									 				(reset! connected? true)	
									 				(.log js/console "init connect suscribe-user") 
									 				(get-team-name channel-slug team-name player-number)
									 				(.log js/console "end connect suscribe-user") )
								 	 "state" (js-obj "username" "new-player")))
    (.subscribe PUBNUB_demo subscribe-user-obj))  
 
 (defn unsuscribe [channel-slug]
	(def unsubscribe-obj (js-obj  "channel" channel-slug))
    (.unsubscribe PUBNUB_demo unsubscribe-obj))  
 

 



;;Send message function
(defn send-message 
	"Send a message to the channel"
	[channel-slug message]
	(def message-obj (js-obj  "channel" channel-slug "message" message))
	(.publish PUBNUB_demo message-obj))
		
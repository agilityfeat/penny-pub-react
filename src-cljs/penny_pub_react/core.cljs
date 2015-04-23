(ns penny-pub-react.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent.session :as session]
            [clojure.string :as string]
            [penny-pub-react.pubnub :as pubnub])
  (:require-macros [secretary.core :refer [defroute]]))

;; ----------------------------------------------------------------------------------------------------
;; DECLARATION OF ATOMS
;; ----------------------------------------------------------------------------------------------------
(def team-name (atom ""))
(def team-slug (atom ""))
(def user-name (atom ""))
(def player-name (atom ""))
(def player-number (atom ""))
(def batch-size (atom 50))
(def total-coins (atom 50))
(def connected? (atom false))
(def moderator? (atom false))
(def playing? (atom false))
(def finished? (atom false))
(def player1 (atom {:username "waiting for player 1" :state "new" :coins 50})) 
(def player2 (atom {:username "waiting for player 2" :state "new" :coins 0})) 
(def player3 (atom {:username "waiting for player 3" :state "new" :coins 0})) 
(def player4 (atom {:username "waiting for player 4" :state "new" :coins 0})) 
(def counter (atom 0))
(def qty-to-send (atom 0))
(def timers (atom {:timer 0 :timer-first 0 :timer-total 0}))
(defonce time-updater (js/setInterval
                       #(swap! timers assoc :timer (inc (:timer @timers))) 1000))

;; ----------------------------------------------------------------------------------------------------
;; GENERAL FUNCTIONS
;; ----------------------------------------------------------------------------------------------------

(defn add-zero [num]
    (if (< num 10)
      (str "0" num)
      (str num)))

(defn format-time [seconds]
  (str (add-zero (js-mod (js/parseInt (/ seconds 60)) 60)) ":" (add-zero (js-mod seconds 60))))

(defn clock []
  (let [time-str (-> (:timer @timers) )]
    [:strong
      (format-time time-str)]))




(defn slug [f]
  "Replaces a filename's spaces with friendly hyphens and prepares its file extension."
  (-> f
      (string/lower-case)
      (string/replace " " "-")
      (string/replace #"\.(wiki|md)" "")))

;convert string to slug
(defn convert-team-name-to-slug []
    (reset! team-slug (slug @team-name)))

;Return the team URL
(defn print-team-url []
  (str (.-location.href js/window) "team/" @team-slug))

(defn start-game []
    (if-not (or (> (js/parseInt @batch-size) 50) (> (js/parseInt @total-coins) 50) (< (js/parseInt @total-coins) (js/parseInt @batch-size)))
      (do (pubnub/set-state @team-slug (js-obj "username" "moderador"
                                         "state_game" "playing"
                                         "batch_size" @batch-size
                                         "total_coins" @total-coins
                                         "channel_name" @team-name))
          (swap! timers assoc :timer 0)
          (swap! timers assoc :timer-first 0)
          (pubnub/send-message @team-slug (js-obj "state_game" "start_game"
                                            "batch_size" @batch-size
                                            "total_coins" @total-coins))
          (swap! player1 assoc :coins @total-coins)
          (reset! finished? false)
          (reset! playing? true))))

(defn release [player_number qty]
    (pubnub/send-message @team-slug (js-obj "username" "moderador"
                                            "state_game" "update_coins"
                                            "player_from" player_number
                                            "qty" qty)))

;; ----------------------------------------------------------------------------------------------------
;; HTML COMPONENTS
;; ----------------------------------------------------------------------------------------------------

;; NAVBAR HTML DEFINITION
(defn navbar []
      
       [:div.container
        [:div.navbar-header
         [:button {:class "navbar-toggle collapsed"
                   :type "button"
                   :data-toggle "collapse"
                   :data-target ".bs-navbar-collapse"}
           [:span.sr-only "Toggle navigation"]        
           [:span.icon-bar]        
           [:span.icon-bar]        
           [:span.icon-bar]]  
         [:a.navbar-brand {:href "#/"} [:i.icon-bitcoin-stack] "Remotely Flipped"]]
        [:nav.collapse.navbar-collapse.bs-navbar-collapse 
           [:ul.nav.navbar-nav.navbar-right
              [:li [:a {:href "#/"} @player-name]]]]])

;;COPY RIGHT 
(defn copyright []
  [:p.copyright "Built by: " [:a {:href "http://www.agilityfeat.com"} "www.agilityfeat.com"]])

;; HOME PAGE DEFINITION
(defn home-page []
  
  [:div.instructions-wrap
    [:div.container
      [:div.row
        [:div.col-md-8.col-md-offset-2
          [:i.icon-bitcoin-stack]
          [:h1 "Remotely Flipped"]
          [:div.separ]
          [:h2 "The Lean Penny Game for Remote Teams"]
          [:p "Have you ever struggled to teach a product team that its more efficient to work in small batch sizes?
               Agile and Lean coaches have been using the penny game to show how teams that work in small chunks are much more efficient.
               Usually this game is played in person with nothing but a stack of coins."]
          [:p "We’ve built thus online version so remote teams can play it together in real-time."]     
          [:form 
            [:div.form-group
              [:input.form-control {:type "text" 
                                    :id "team" 
                                    :key "team"
                                    :on-change #(reset! team-name (-> % .-target .-value))
                                    :placeholder "Team Name"}]
              [:input.start-game {:type "button" 
                                  :id "btnTeam" 
                                  :placeholder "Team Name" 
                                  :onClick (fn [] 
                                                  (convert-team-name-to-slug)
                                                  (reset! moderator? true)
                                                  (pubnub/connect)
                                                  (pubnub/suscribe-moderator @team-name @team-slug player1 player2 player3 player4 timers finished?)
                                                  (session/put! :page :step2))
                                  :value "Start Game"}]]]
          [copyright]]]]])

(defn flip [id]
  (def img (.getElementById js/document id))
  (if (= -1 (.indexOf (.-className img) "flip"))
    (set! (.-className img) "click panel circle flip")
    (set! (.-className img) "click panel circle"))
  (= -1 (.indexOf (.-className img) "flip")))

(defn draw-coin-panel [player number]
  [:div
    [:div.coin-table
          (for [x (range 0 (:coins @player))]
            [:div.click.panel.circle {:key (str "p_" (:coins @player) number x)
                                      :id (str "p_" (:coins @player) number x)
                                      :class "click panel circle"
                                      :onClick (fn []
                                                    (def subtract? (flip (str "p_" (:coins @player) number x)))
                                                    (if (= subtract? false)
                                                      (do 
                                                        (if (and (< (js/parseInt @qty-to-send) (:coins @player)) (< (js/parseInt @qty-to-send) (js/parseInt @batch-size)))
                                                          (reset! qty-to-send (inc @qty-to-send))
                                                          (flip (str "p_" (:coins @player) number x))))
                                                      

                                                        (reset! qty-to-send (dec @qty-to-send))))}
            [:div.front.icon-bitcoin-head] [:div.back.icon-bitcoin-tales]])]
          


        [:div.footer
          (when (or true (= number @player-number))
            [:div.player-controls.active
            [:span "Batch " [:strong @qty-to-send " / " @batch-size]]
            [:input.game-btn {:type "button"
                                     :value "Release"
                                     :class (when (or (= (js/parseInt @qty-to-send) (:coins @player)) (= (js/parseInt @batch-size) (js/parseInt @qty-to-send))) "active")
                                     :onClick (fn [] 
                                                    (when (or (= (js/parseInt @qty-to-send) (:coins @player)) (= (js/parseInt @batch-size) (js/parseInt @qty-to-send)))
                                                      (release number @qty-to-send)
                                                      (reset! qty-to-send 0)))}]])
          
            [:span.player-name "Player " number ": " [:strong (:username @player)]]]])

(defn game []
  [:div.game-on
      [:div.timer [:span "Overall Time:" [clock]]]
      (if (> (:timer-first @timers) 0)
          [:div.timer-first [:span "First Batch:" [:strong (format-time (:timer-first @timers))]]])
      
      [:div.grid
        [:div.panel-wrap.top-left
          [draw-coin-panel player1 1]]
        [:div.panel-wrap.top-right
          [draw-coin-panel player2 2]]
        [:div.panel-wrap.bottom-left
          [draw-coin-panel player3 3]]

        [:div.panel-wrap.bottom-right
          [draw-coin-panel player4 4]]]
      [:div.floatClear]])

(defn show-results []
  [:div.instructions-wrap
        [:div.container
          [:div.row
            [:div.col-md-8.col-md-offset-2
              [:i.icon-bitcoin-stack]
              [:h1 "Round complete!"]
              [:div.separ]
              [:h2 @team-name]
              (if (= true @moderator?)
                (do 
                      
                        [:div.batch
                          [:span.title "Total coins" [:br] "batch size"]
                          [:div.batch-size
                              [:input.top {:type "number" 
                                           :max 50
                                                  :id "total_coins" 
                                                  :key "total_coins"
                                                  :on-change #(reset! total-coins (-> % .-target .-value))
                                                  :value @total-coins
                                                  :placeholder "Type Size"}]
                              [:input.bottom {:type "number" 
                                              :max 50
                                                  :id "batch_size" 
                                                  :key "batch_size"
                                                  :value @batch-size
                                                  :on-change #(reset! batch-size (-> % .-target .-value))
                                                  :placeholder "Type Size"}]]
                          [:h4 "Time until 1st Batch \"delivered\"" [:br] [:strong (format-time (:timer-first @timers))]]                        
                          [:h4 "Time until all batches \"delivered\"" [:br] [:strong (format-time (:timer-total @timers))]]                        
                          [:p "Don't forget to write down the stats and then start new round."]
                        [:form 
                          [:div.form-group
                            [:input.start-game {:type "button" 
                                                :id "btnStart" 
                                                :onClick (fn [] 
                                                                (start-game)
                                                                (session/put! :page :step4))
                                                :value "Start new round"}]]]
                        [copyright]])
                
                (do
                    [:div.batch
                      [:span.title "Total coins" [:br] "batch size"]
                      [:div.batch-size
                              [:input.top {:type "number" 
                                           :max 50
                                                  :id "total_coins" 
                                                  :key "total_coins"
                                                  :disabled true
                                                  :value @total-coins
                                                  :placeholder "Type Size"}]
                              [:input.bottom {:type "number" 
                                              :max 50
                                                  :id "batch_size" 
                                                  :key "batch_size"
                                                  :value @batch-size
                                                  :disabled true
                                                  :placeholder "Type Size"}]] 
                      [:h4 "Time until 1st Batch \"delivered\"" [:br] [:strong (format-time (:timer-first @timers))]]                        
                      [:h4 "Time until all batches \"delivered\"" [:br] [:strong (format-time (:timer-total @timers))]]                                                     
                      [:p "Waiting for the Moderator starts a new round..."]
                      [copyright]]))]]]])
(defn step5-page 
  []
  (if (= @finished? false)
    [game]
    [show-results]))


;; STEP 2 
(defn get-total-players []
    (reset! counter 0)
    (if (= "ready" (:state @player1))
      (reset! counter (inc @counter)))

    (if (= "ready" (:state @player2))
      (reset! counter (inc @counter)))

    (if (= "ready" (:state @player3))
      (reset! counter (inc @counter)))

    (if (= "ready" (:state @player4))
      (reset! counter (inc @counter)))
    [:span.num-p @counter "/4"])


(defn get-list-players[]
  [:div.people-joined-list
            (if (or (= "ready" (:state @player1)) (= "ready" (:state @player2)) (= "ready" (:state @player3)) (= "ready" (:state @player4)))
              [:strong "Joined:"])
            (if (= "ready" (:state @player1))
              [:span [:i.icon-user-check] (:username @player1)])
            
            (if (= "ready" (:state @player2))
              [:span [:i.icon-user-check] (:username @player2)])
            
            (if (= "ready" (:state @player3))
              [:span [:i.icon-user-check] (:username @player3)])
            
            (if (= "ready" (:state @player4))
              [:span [:i.icon-user-check] (:username @player4)])])

;; STEP 4
(defn li-player
  [player]
        (when (= "new" (:state @player))
          [:li [:i.icon-user-block] (:username @player)])
        
        (when (= "ready" (:state @player))
          [:li.active [:i.icon-user-check] (:username @player)]))  
(defn step4-page []
  (if (= false @playing?)
    (do
      [:div.instructions-wrap
        [:div.container
          [:div.row
            [:div.col-md-8.col-md-offset-2
              [:i.icon-bitcoin-stack]
              [:h1 "Lets Flip!"]
              [:div.separ]
              [:h2 @team-name]
              [:div.team-members-in 
                [:span.plyrs "Players:"]
                [:ul.list-online
                  [li-player player1]
                  [li-player player2]
                  [li-player player3]
                  [li-player player4]]]
              (if (= true @moderator?)
                (do 
                      
                        [:div.batch
                          [:p "Please wait while the organizer explains the game to you and then starts the round."]
                          [:span.title "Total coins" [:br] "batch size"]
                          [:div.batch-size
                              [:input.top {:type "number" 
                                           :max 50
                                                  :id "total_coins" 
                                                  :key "total_coins"
                                                  :on-change #(reset! total-coins (-> % .-target .-value))
                                                  :value @total-coins
                                                  :placeholder "Type Size"}]
                              [:input.bottom {:type "number" 
                                              :max 50
                                                  :id "batch_size" 
                                                  :key "batch_size"
                                                  :value @batch-size
                                                  :on-change #(reset! batch-size (-> % .-target .-value))
                                                  :placeholder "Type Size"}]]
                        [:form 
                          [:div.form-group
                            [:input.start-game {:type "button" 
                                                :id "btnStart" 
                                                :onClick (fn [] 
                                                                (start-game)
                                                                (session/put! :page :step4))
                                                :value "Start Flipping"}]]]
                        [copyright]])
                (do
                    [:div.batch
                      [:p "Waiting for the Moderator starts the game.."]
                      [copyright]]))]]]])
    [step5-page]))
    

(defn step2-page []
  (if (and  (= "ready" (:state @player1)) (= "ready" (:state @player2)) (= "ready" (:state @player3)) (= "ready" (:state @player4)))
    [step4-page]
    (do 
      [:div.instructions-wrap
        [:div.container
          [:div.row
            [:div.col-md-8.col-md-offset-2
              [:i.icon-bitcoin-stack]
              [:h1 "Its time to get flipped!"]
              [:div.separ]
              [:h2 "Your team url:"]
              [:span.url-wrap [:i.icon-link2] (print-team-url)]
              [:p "Send this to your team so the can join in!"]     
              [:div.people-joined
                [get-total-players]
                [:span " Joined"]]
              [get-list-players]  
              [copyright]]]]])))

;; STEP 3 
(defn step3-page []
  [:div.instructions-wrap
    [:div.container
      [:div.row
        [:div.col-md-8.col-md-offset-2
          [:i.icon-collaboration]
          [:h1 [:span.title "Team:"] @team-name]
          [:div.separ]
          [:h2 [:span.title (str "You are player " @player-number)] [:span "of 4 max"]]
          [:p "Type your name:"]     
          [:form 
            [:div.form-group
              [:input.form-control {:type "text" 
                                    :id "user_name" 
                                    :key "user_name"
                                    :on-change #(reset! user-name (-> % .-target .-value))
                                    :placeholder "Your Name"}]
              [:input.start-game {:type "button" 
                                  :id "btnReady" 
                                  :onClick (fn [] 
                                                  
                                                  (reset! player-name @user-name)
                                                  (pubnub/set-state @team-slug (js-obj "username" @player-name
                                                                                       "player_number" @player-number))
                                                  (pubnub/update-players-data @team-slug player1 player2 player3 player4))
                                  :value "I'm Ready"}]]]
          [copyright]]]]])          


(defn connecting-page []
  [:div.instructions-wrap
    [:div.container
      [:div.row
        [:div.col-md-8.col-md-offset-2
          [:i.icon-bitcoin-stack]
          [:h1 "Connecting..."]
          [copyright]]]]])            

(defn team-page []
  (if (or (string/blank? @player-number) (string/blank? @team-name) (= @connected? false))
    [connecting-page]
    (do
        (if (string/blank? @player-name)
          [step3-page]
          [step4-page]))))  



;; ----------------------------------------------------------------------------------------------------
;; Declaration of routes
;; ----------------------------------------------------------------------------------------------------



(def pages
  {:home home-page 
   :step2 step2-page
   :step3 step3-page
   :step4 step4-page
   :step5 step5-page
   :connecting connecting-page
   :team team-page})

(defn page []
  [(pages (session/get :page))])

(defroute "/" [] (session/put! :page :home))



(defn mount-components []
  (reagent/render-component [navbar] (.getElementById js/document "top"))
  (reagent/render-component [page] (.getElementById js/document "app")))

(defn set-page []
  (if (= -1 (.indexOf (.-location.href js/window) "/team/"))
    (session/put! :page :home)
    (do 
        (pubnub/connect)
        (reset! team-slug (string/replace (.-location.pathname js/window) "/team/" ""))
        (pubnub/suscribe-user @team-slug team-name player-number player-name connected? player1 player2 player3 player4 playing? batch-size timers finished?)
        (session/put! :page :team))))




;; ----------------------------------------------------------------------------------------------------
;; Init function
;; ----------------------------------------------------------------------------------------------------

(defn init! []
  (secretary/set-config! :prefix "#")
  (set-page)
  (mount-components))



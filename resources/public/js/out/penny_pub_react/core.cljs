(ns penny-pub-react.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [clojure.string :as string]
            [penny-pub-react.pubnub :as pubnub]))

;; ----------------------------------------------------------------------------------------------------
;; DECLARATION OF ATOMS
;; ----------------------------------------------------------------------------------------------------

;team-data
(def team-name (atom ""))
(def team-slug (atom ""))

;user-data
(def user-name (atom ""))
(def player-name (atom ""))
(def player-number (atom ""))

;game-data
(def batch-size (atom 50))
(def total-coins (atom 50))
(def connected? (atom false))
(def moderator? (atom false))
(def playing? (atom false))
(def finished? (atom false))

;players
(def player-data {:username "" :state "new" :coins 0 :releases 0}) 
(def players (atom [player-data 
                    player-data 
                    player-data
                    player-data]))

;general atoms
(def counter (atom 0))
(def qty-releases (atom 0))
(def qty-to-send (atom 0))
(def timers (atom {:timer 0 :timer-first 0 :timer-total 0}))
(defonce time-updater (js/setInterval
                       #(swap! timers assoc :timer (inc (:timer @timers))) 1000))

;; ----------------------------------------------------------------------------------------------------
;; GENERAL FUNCTIONS
;; ----------------------------------------------------------------------------------------------------

(defn add-zero 
  "Adds a zero if the number is under ten"
  [num]
    (if (< num 10)
      (str "0" num)
      (str num)))

(defn format-time 
  "Convert seconds to mm:ss format"
  [seconds]
  (str (add-zero (js-mod (js/parseInt (/ seconds 60)) 60)) ":" (add-zero (js-mod seconds 60))))

(defn slug [f]
  "Replaces a filename's spaces with friendly hyphens and prepares its file extension."
  (-> f
      (string/lower-case)
      (string/replace " " "-")
      (string/replace #"\.(wiki|md)" "")))

(defn flip [id]
  (def img (.getElementById js/document id))
  (if (= -1 (.indexOf (.-className img) "flip"))
    (set! (.-className img) "click panel circle flip")
    (set! (.-className img) "click panel circle"))
  (= -1 (.indexOf (.-className img) "flip")))

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
          (swap! players assoc-in [0 :coins] @total-coins)
          (reset! finished? false)
          (reset! playing? true))))

(defn release [player_number qty]
    (def p-index (- player_number 1))
    (reset! qty-releases (inc @qty-releases))
    (swap! players assoc-in [p-index :releases] (inc (get-in @players [p-index :releases]))) 
    (pubnub/send-message @team-slug (js-obj "username" "moderador"
                                            "state_game" "update_coins"
                                            "player_from" player_number
                                            "qty" qty)))

(defn get-player-state [player-index]
  (get-in @players [player-index :state]))

(defn get-player-name [player-index]
  (get-in @players [player-index :username]))

(defn p-ready? [p-index]
  (= "ready" (get-player-state p-index)))

;; ----------------------------------------------------------------------------------------------------
;; HTML COMPONENTS
;; ----------------------------------------------------------------------------------------------------

;; NAVBAR HTML DEFINITION
(defn navbar []
 [:div.container
  [:div.navbar-header
   [:a.navbar-toggle.collapsed {:href "#/"}  @player-name]
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
                                                  (reset! team-slug (slug @team-name))
                                                  (reset! moderator? true)
                                                  (pubnub/connect)
                                                  (pubnub/subscribe-moderator @team-name @team-slug players timers finished?)
                                                  (session/put! :page :step2))
                                  :value "Start Game"}]]]
          [copyright]]]]])

(defn draw-coin-panel [player-index]
  [:div
    [:div.coin-table
          (doall(for [x (range 0 (get-in @players [player-index :coins]))]
                [:div.click.panel.circle {:key (str "p_" player-index "_" x "_" (get-in @players [p-index :releases]))
                                      :id (str "p_" player-index "_" x)
                                      :onClick (fn []
                                                    
                                                      (when (= (+ player-index 1) @player-number)
                                                      (def subtract? (flip (str "p_" player-index "_" x)))
                                                      (if (= subtract? false)
                                                        (do
                                                          (if (and (< (js/parseInt @qty-to-send) (get-in @players [player-index :coins])) (< (js/parseInt @qty-to-send) (js/parseInt @batch-size)))
                                                            (reset! qty-to-send (inc @qty-to-send))
                                                            (flip (str "p_" player-index "_" x))))
                                                        (reset! qty-to-send (dec @qty-to-send)))))}
                [:div.front.icon-bitcoin-head] [:div.back.icon-bitcoin-tales]]))]
          


        [:div.footer
          (when (= (+ player-index 1) @player-number)
            [:div.player-controls.active
            [:span "Batch " [:strong @qty-to-send " / " @batch-size]]
            [:input.game-btn {:type "button"
                                     :value "Release"
                                     :class (when (and (> (js/parseInt @qty-to-send) 0) (or (= (js/parseInt @qty-to-send) (get-in @players [player-index :coins])) (= (js/parseInt @batch-size) (js/parseInt @qty-to-send)))) "active")
                                     :onClick (fn [] 
                                                    (when (or (= (js/parseInt @qty-to-send) (get-in @players [player-index :coins])) (= (js/parseInt @batch-size) (js/parseInt @qty-to-send)))
                                                      (release (+ 1 player-index) @qty-to-send)
                                                      (reset! qty-to-send 0)))}]])
          
            [:span.player-name "Player " (+ player-index 1) ": " [:strong (get-player-name player-index)]]]])

(defn game []
  [:div.game-on
      
      (when (= true @moderator?)
        [:div.timer [:span "Overall Time:" [:strong (format-time (:timer @timers))]]])
      
      (when (= true @moderator?)
            (if (> (:timer-first @timers) 0)
                [:div.timer-first [:span "First Batch:" [:strong (format-time (:timer-first @timers))]]]))
      (when (= false @moderator?)      
        (if (> (:timer-first @timers) 0)
          [:div.timer [:span "First Batch:" [:strong (format-time (:timer-first @timers))]]]))
      
      
      [:div.grid
        [:div.panel-wrap.top-left {:class (when (= 1 @player-number) "panel-wrap-player")}
          [draw-coin-panel 0]]
        [:div.panel-wrap.top-right {:class (when (= 2 @player-number) "panel-wrap-player")}
          [draw-coin-panel 1]]
        [:div.panel-wrap.bottom-left {:class (when (= 3 @player-number) "panel-wrap-player")}
          [draw-coin-panel 2]]

        [:div.panel-wrap.bottom-right {:class (when (= 4 @player-number) "panel-wrap-player")}
          [draw-coin-panel 3]]]
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
    (doall (for [x (range 0 4)]
        (do 
          (if (p-ready? x) 
            (reset! counter (inc @counter))))))
    [:span.num-p @counter "/4"])


(defn get-list-players[]
  [:div.people-joined-list
            (if (or (p-ready? 0) (p-ready? 1) (p-ready? 2) (p-ready? 3))
              [:strong "Joined:"])
            (for [x (range 0 4)]
              (if (p-ready? x)
                [:span [:i.icon-user-check] (get-player-name x)]))])

;; STEP 4
(defn li-player
  [player-index]
        (when (= "new" (get-player-state player-index))
          [:li [:i.icon-user-block] (get-player-name player-index)])
        
        (when (p-ready? player-index) 
          [:li.active {:key (str "li-player" player-index)} [:i.icon-user-check {:key (str "iuc-player" player-index)}] (get-player-name player-index)]))  

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
                  (for [x (range 0 4)]
                    [li-player x])]]
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
  (if (or true (p-ready? 0) (p-ready? 1) (p-ready? 2) (p-ready? 3))
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
                                                  (pubnub/update-players-data @team-slug players))
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
;; Routes functions
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

(defn mount-components []
  (reagent/render-component [navbar] (.getElementById js/document "top"))
  (reagent/render-component [page] (.getElementById js/document "app")))

(defn set-page []
  (if (= -1 (.indexOf (.-location.href js/window) "/team/"))
    (session/put! :page :home)
    (do 
        (pubnub/connect)
        (reset! team-slug (string/replace (.-location.pathname js/window) "/team/" ""))
        (pubnub/subscribe-user @team-slug team-name player-number player-name connected? players playing? batch-size total-coins timers finished?)
        (session/put! :page :team))))

;; ----------------------------------------------------------------------------------------------------
;; Init function
;; ----------------------------------------------------------------------------------------------------

(defn init! []
  (set-page)
  (mount-components))



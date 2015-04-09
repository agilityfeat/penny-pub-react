(ns penny-pub-react.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent.session :as session]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [GET POST]]
            [penny-pub-react.pubnub :as pubnub])
  (:require-macros [secretary.core :refer [defroute]]))

;; -------------------------
;; Declaration of atoms
(def sended-message (atom ""))
(def received-message (atom ""))
;; -------------------------
;; HTML components

(defn row 
  "Return a html row"
  [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]]) 

(defn atom-text-area 
"This function returns a complete textarea field, using an atom value" 
  [id label value]
  (row label [:textarea.form-control {:field :text
                                      :key id
                                      :id id :value @value 
                                      :on-change #(reset! value (-> % .-target .-value))}]))

(defn navbar []
      [:div.navbar.navbar-inverse.navbar-fixed-top
       [:div.container
        [:div.navbar-header
         [:a.navbar-brand {:href "#/"} "penny-pub-react"]]
        [:div.navbar-collapse.collapse
         [:ul.nav.navbar-nav
          [:li {:class (when (= :home (session/get :page)) "active")}
           [:a {:on-click #(secretary/dispatch! "#/")} "Home"]]]]]])

(defn home-page []
  [:div
    [:p "Enter your message in the text area field, and then press the button 'Send'"]  
    [atom-text-area "txtMessage" "Message" sended-message]
    [:button  {:type "submit"
               :class "btn btn-default"
               :onClick (fn [] (pubnub/send-message @sended-message))}
               "Send"]
    [:hr]
    [:p "Received messages"]  
    [atom-text-area "txtReceivedMessages" "Message" received-message]])

(def pages
  {:home home-page})

(defn page []
  [(pages (session/get :page))])

(defroute "/" [] (session/put! :page :home))


(defn mount-components []
  (reagent/render-component [navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [page] (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (mount-components)
  (pubnub/init received-message))



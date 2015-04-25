(ns penny-pub-react.routes.home
  (:require [penny-pub-react.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defn team-home-page [team-slug]
  (layout/render "home.html" {:team-slug team-slug}))


(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/team/:team-slug" [team-slug] (team-home-page team-slug)))

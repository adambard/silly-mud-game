(ns ^:figwheel-always textgame.core
    (:require [om.core :as om :include-macros true]
              [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)
(defn on-js-reload [])

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:resources {:mud 1
                               :bricks 0}
                   :buildings {:shacks 0
                               :mansions 0
                               :brickyards 0
                               }
                   :flags #{} }))


; Tick: The core event loop

(defn tick [data]
  (-> data
      (update-in [:resources :mud] + (* (-> data :buildings :shacks) 0.01)
                                     (* (-> data :buildings :mansions ) 0.12))))

(js/setInterval #(swap! app-state tick) 20)


; Costs

(def cost {:mud->brick (fn [_] 10)
           :bricks->shack (fn [data] (* 100 (js/Math.pow 0.95 (-> data :buildings :brickyards))))
           :bricks->mansion (fn [data] (* 1000 (js/Math.pow 0.95 (-> data :buildings :brickyards))))
           :bricks->brickyard (fn [_] 500)})

(defn check-cost [selector cost-key n]
  (fn [data]
    (>= (get-in data selector) (* n ((cost cost-key) data)))))


; Purchasing

(defn pick-mud! [data]
  (update-in data [:resources :mud] inc))

(defn buy-item! [data in-selector cost-key out-selector n]
  (-> data
      (update-in in-selector - (* n ((cost cost-key) data)))
      (update-in out-selector + n)))

(defn action-button [data enabled-fn? action-fn! button-text id]
  (let [enabled? (enabled-fn? data)
        previously-enabled? (-> data :flags id)
        ]
    (when (and enabled? (not previously-enabled?))
      (om/transact! data #(update-in % [:flags] conj id)))
    (html/submit-button {:style (if-not (or enabled? previously-enabled?) {:display "none"} {})
                         :disabled (if-not enabled? "disabled")
                         :on-click (fn [_] (om/transact! data action-fn!))}
                        button-text)))

(defn purchase-button [data in-selector cost-key out-selector n text id]
  (action-button data (check-cost in-selector cost-key n)
                 #(buy-item! % in-selector cost-key out-selector n)
                 text id))


; UI

(defn widget [data]
  (om/component
   (html
     [:div.container
      [:ul.resources
       [:li "Mud: " (-> data :resources :mud)]
       [:li "Bricks: " (-> data :resources :bricks)]
       ]
      [:ul.buildings
       [:li "Shacks: " (-> data :buildings :shacks)]
       [:li "Mansions: " (-> data :buildings :mansions)]
       [:li "Brickyards: " (-> data :buildings :brickyards)]
       ]
      [:div.controls
       (action-button data (fn [data] true) pick-mud! "Dig Mud" :mud)
       [:br]
       (purchase-button data [:resources :mud] :mud->brick [:resources :bricks] 1 "Make Brick" :1b)
       (purchase-button data [:resources :mud] :mud->brick [:resources :bricks] 10 "10" :10b)
       (purchase-button data [:resources :mud] :mud->brick [:resources :bricks] 100 "100" :100b)
       (purchase-button data [:resources :mud] :mud->brick [:resources :bricks] 1000 "1000" :1000b)
       [:br]
       (purchase-button data [:resources :bricks] :bricks->shack [:buildings :shacks] 1 "Build Shack" :1s)
       (purchase-button data [:resources :bricks] :bricks->shack [:buildings :shacks] 10 "10" :10s)
       (purchase-button data [:resources :bricks] :bricks->shack [:buildings :shacks] 100 "100" :100s)
       [:br]
       (purchase-button data [:resources :bricks] :bricks->mansion [:buildings :mansions] 1 "Build Mansion" :1m)
       (purchase-button data [:resources :bricks] :bricks->mansion [:buildings :mansions] 10 "10" :10m)
       (purchase-button data [:resources :bricks] :bricks->mansion [:buildings :mansions] 100 "100" :100m)
       [:br]
       (purchase-button data [:resources :bricks] :bricks->brickyard [:buildings :brickyards] 1 "Build Brickyard" :1by)
       (purchase-button data [:resources :bricks] :bricks->brickyard [:buildings :brickyards] 10 "10" :10by)
       (purchase-button data [:resources :bricks] :bricks->brickyard [:buildings :brickyards] 100 "100" :100by)
       [:br]
       [:br]
       [:br]
       [:br]
       [:br]
       [:br]
       [:br]
       [:br]
       (action-button data (fn [data] true) (fn [data] (update-in data [:resources :mud] + 1000)) "Cheat!" :cheat)
       ]
      ])))



(om/root widget app-state {:target js/document.body})

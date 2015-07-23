(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [textgame.core]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/textgame.core.on-js-reload (apply js/textgame.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'textgame.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})


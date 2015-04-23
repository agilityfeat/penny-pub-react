// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('penny_pub_react.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('weasel.repl');
goog.require('figwheel.client');
goog.require('penny_pub_react.core');
cljs.core.enable_console_print_BANG_();
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$websocket_DASH_url,"ws://localhost:3449/figwheel-ws",cljs.core.constant$keyword$jsload_DASH_callback,penny_pub_react.core.mount_components], 0));
weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic("ws://localhost:9001",cljs.core.array_seq([cljs.core.constant$keyword$verbose,true], 0));
penny_pub_react.core.init_BANG_();

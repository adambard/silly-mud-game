// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22735__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22736__i = 0, G__22736__a = new Array(arguments.length -  0);
while (G__22736__i < G__22736__a.length) {G__22736__a[G__22736__i] = arguments[G__22736__i + 0]; ++G__22736__i;}
  args = new cljs.core.IndexedSeq(G__22736__a,0);
} 
return G__22735__delegate.call(this,args);};
G__22735.cljs$lang$maxFixedArity = 0;
G__22735.cljs$lang$applyTo = (function (arglist__22737){
var args = cljs.core.seq(arglist__22737);
return G__22735__delegate(args);
});
G__22735.cljs$core$IFn$_invoke$arity$variadic = G__22735__delegate;
return G__22735;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22738){
var map__22740 = p__22738;
var map__22740__$1 = ((cljs.core.seq_QMARK_.call(null,map__22740))?cljs.core.apply.call(null,cljs.core.hash_map,map__22740):map__22740);
var message = cljs.core.get.call(null,map__22740__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22740__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16069__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16057__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16057__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16057__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19079__auto___22869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___22869,ch){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___22869,ch){
return (function (state_22843){
var state_val_22844 = (state_22843[(1)]);
if((state_val_22844 === (7))){
var inst_22839 = (state_22843[(2)]);
var state_22843__$1 = state_22843;
var statearr_22845_22870 = state_22843__$1;
(statearr_22845_22870[(2)] = inst_22839);

(statearr_22845_22870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (1))){
var state_22843__$1 = state_22843;
var statearr_22846_22871 = state_22843__$1;
(statearr_22846_22871[(2)] = null);

(statearr_22846_22871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (4))){
var inst_22807 = (state_22843[(7)]);
var inst_22807__$1 = (state_22843[(2)]);
var state_22843__$1 = (function (){var statearr_22847 = state_22843;
(statearr_22847[(7)] = inst_22807__$1);

return statearr_22847;
})();
if(cljs.core.truth_(inst_22807__$1)){
var statearr_22848_22872 = state_22843__$1;
(statearr_22848_22872[(1)] = (5));

} else {
var statearr_22849_22873 = state_22843__$1;
(statearr_22849_22873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (13))){
var state_22843__$1 = state_22843;
var statearr_22850_22874 = state_22843__$1;
(statearr_22850_22874[(2)] = null);

(statearr_22850_22874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (6))){
var state_22843__$1 = state_22843;
var statearr_22851_22875 = state_22843__$1;
(statearr_22851_22875[(2)] = null);

(statearr_22851_22875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (3))){
var inst_22841 = (state_22843[(2)]);
var state_22843__$1 = state_22843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22843__$1,inst_22841);
} else {
if((state_val_22844 === (12))){
var inst_22814 = (state_22843[(8)]);
var inst_22827 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22814);
var inst_22828 = cljs.core.first.call(null,inst_22827);
var inst_22829 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22828);
var inst_22830 = console.warn("Figwheel: Not loading code with warnings - ",inst_22829);
var state_22843__$1 = state_22843;
var statearr_22852_22876 = state_22843__$1;
(statearr_22852_22876[(2)] = inst_22830);

(statearr_22852_22876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (2))){
var state_22843__$1 = state_22843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22843__$1,(4),ch);
} else {
if((state_val_22844 === (11))){
var inst_22823 = (state_22843[(2)]);
var state_22843__$1 = state_22843;
var statearr_22853_22877 = state_22843__$1;
(statearr_22853_22877[(2)] = inst_22823);

(statearr_22853_22877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (9))){
var inst_22813 = (state_22843[(9)]);
var inst_22825 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22813,opts);
var state_22843__$1 = state_22843;
if(cljs.core.truth_(inst_22825)){
var statearr_22854_22878 = state_22843__$1;
(statearr_22854_22878[(1)] = (12));

} else {
var statearr_22855_22879 = state_22843__$1;
(statearr_22855_22879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (5))){
var inst_22813 = (state_22843[(9)]);
var inst_22807 = (state_22843[(7)]);
var inst_22809 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22810 = (new cljs.core.PersistentArrayMap(null,2,inst_22809,null));
var inst_22811 = (new cljs.core.PersistentHashSet(null,inst_22810,null));
var inst_22812 = figwheel.client.focus_msgs.call(null,inst_22811,inst_22807);
var inst_22813__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22812);
var inst_22814 = cljs.core.first.call(null,inst_22812);
var inst_22815 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22813__$1,opts);
var state_22843__$1 = (function (){var statearr_22856 = state_22843;
(statearr_22856[(9)] = inst_22813__$1);

(statearr_22856[(8)] = inst_22814);

return statearr_22856;
})();
if(cljs.core.truth_(inst_22815)){
var statearr_22857_22880 = state_22843__$1;
(statearr_22857_22880[(1)] = (8));

} else {
var statearr_22858_22881 = state_22843__$1;
(statearr_22858_22881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (14))){
var inst_22833 = (state_22843[(2)]);
var state_22843__$1 = state_22843;
var statearr_22859_22882 = state_22843__$1;
(statearr_22859_22882[(2)] = inst_22833);

(statearr_22859_22882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (10))){
var inst_22835 = (state_22843[(2)]);
var state_22843__$1 = (function (){var statearr_22860 = state_22843;
(statearr_22860[(10)] = inst_22835);

return statearr_22860;
})();
var statearr_22861_22883 = state_22843__$1;
(statearr_22861_22883[(2)] = null);

(statearr_22861_22883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (8))){
var inst_22814 = (state_22843[(8)]);
var inst_22817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22818 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22814);
var inst_22819 = cljs.core.async.timeout.call(null,(1000));
var inst_22820 = [inst_22818,inst_22819];
var inst_22821 = (new cljs.core.PersistentVector(null,2,(5),inst_22817,inst_22820,null));
var state_22843__$1 = state_22843;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22843__$1,(11),inst_22821);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19079__auto___22869,ch))
;
return ((function (switch__19017__auto__,c__19079__auto___22869,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____0 = (function (){
var statearr_22865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22865[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__);

(statearr_22865[(1)] = (1));

return statearr_22865;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____1 = (function (state_22843){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_22843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e22866){if((e22866 instanceof Object)){
var ex__19021__auto__ = e22866;
var statearr_22867_22884 = state_22843;
(statearr_22867_22884[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22885 = state_22843;
state_22843 = G__22885;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__ = function(state_22843){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____1.call(this,state_22843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___22869,ch))
})();
var state__19081__auto__ = (function (){var statearr_22868 = f__19080__auto__.call(null);
(statearr_22868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___22869);

return statearr_22868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___22869,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22886_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22886_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_22893 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22893){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22892 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22891,_STAR_print_newline_STAR_22892,base_path_22893){
return (function() { 
var G__22894__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22895__i = 0, G__22895__a = new Array(arguments.length -  0);
while (G__22895__i < G__22895__a.length) {G__22895__a[G__22895__i] = arguments[G__22895__i + 0]; ++G__22895__i;}
  args = new cljs.core.IndexedSeq(G__22895__a,0);
} 
return G__22894__delegate.call(this,args);};
G__22894.cljs$lang$maxFixedArity = 0;
G__22894.cljs$lang$applyTo = (function (arglist__22896){
var args = cljs.core.seq(arglist__22896);
return G__22894__delegate(args);
});
G__22894.cljs$core$IFn$_invoke$arity$variadic = G__22894__delegate;
return G__22894;
})()
;})(_STAR_print_fn_STAR_22891,_STAR_print_newline_STAR_22892,base_path_22893))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22892;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22891;
}}catch (e22890){if((e22890 instanceof Error)){
var e = e22890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22893], null));
} else {
var e = e22890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22893))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22897){
var map__22902 = p__22897;
var map__22902__$1 = ((cljs.core.seq_QMARK_.call(null,map__22902))?cljs.core.apply.call(null,cljs.core.hash_map,map__22902):map__22902);
var opts = map__22902__$1;
var build_id = cljs.core.get.call(null,map__22902__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22902,map__22902__$1,opts,build_id){
return (function (p__22903){
var vec__22904 = p__22903;
var map__22905 = cljs.core.nth.call(null,vec__22904,(0),null);
var map__22905__$1 = ((cljs.core.seq_QMARK_.call(null,map__22905))?cljs.core.apply.call(null,cljs.core.hash_map,map__22905):map__22905);
var msg = map__22905__$1;
var msg_name = cljs.core.get.call(null,map__22905__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22904,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22904,map__22905,map__22905__$1,msg,msg_name,_,map__22902,map__22902__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22904,map__22905,map__22905__$1,msg,msg_name,_,map__22902,map__22902__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22902,map__22902__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22909){
var vec__22910 = p__22909;
var map__22911 = cljs.core.nth.call(null,vec__22910,(0),null);
var map__22911__$1 = ((cljs.core.seq_QMARK_.call(null,map__22911))?cljs.core.apply.call(null,cljs.core.hash_map,map__22911):map__22911);
var msg = map__22911__$1;
var msg_name = cljs.core.get.call(null,map__22911__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22910,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22912){
var map__22920 = p__22912;
var map__22920__$1 = ((cljs.core.seq_QMARK_.call(null,map__22920))?cljs.core.apply.call(null,cljs.core.hash_map,map__22920):map__22920);
var on_compile_warning = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22920,map__22920__$1,on_compile_warning,on_compile_fail){
return (function (p__22921){
var vec__22922 = p__22921;
var map__22923 = cljs.core.nth.call(null,vec__22922,(0),null);
var map__22923__$1 = ((cljs.core.seq_QMARK_.call(null,map__22923))?cljs.core.apply.call(null,cljs.core.hash_map,map__22923):map__22923);
var msg = map__22923__$1;
var msg_name = cljs.core.get.call(null,map__22923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22922,(1));
var pred__22924 = cljs.core._EQ_;
var expr__22925 = msg_name;
if(cljs.core.truth_(pred__22924.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22925))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22924.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22925))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22920,map__22920__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,msg_hist,msg_names,msg){
return (function (state_23126){
var state_val_23127 = (state_23126[(1)]);
if((state_val_23127 === (7))){
var inst_23060 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23128_23169 = state_23126__$1;
(statearr_23128_23169[(2)] = inst_23060);

(statearr_23128_23169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (20))){
var inst_23088 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23088)){
var statearr_23129_23170 = state_23126__$1;
(statearr_23129_23170[(1)] = (22));

} else {
var statearr_23130_23171 = state_23126__$1;
(statearr_23130_23171[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (27))){
var inst_23100 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23101 = figwheel.client.heads_up.display_warning.call(null,inst_23100);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(30),inst_23101);
} else {
if((state_val_23127 === (1))){
var inst_23048 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23048)){
var statearr_23131_23172 = state_23126__$1;
(statearr_23131_23172[(1)] = (2));

} else {
var statearr_23132_23173 = state_23126__$1;
(statearr_23132_23173[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (24))){
var inst_23116 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23133_23174 = state_23126__$1;
(statearr_23133_23174[(2)] = inst_23116);

(statearr_23133_23174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (4))){
var inst_23124 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23126__$1,inst_23124);
} else {
if((state_val_23127 === (15))){
var inst_23076 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23077 = figwheel.client.format_messages.call(null,inst_23076);
var inst_23078 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23079 = figwheel.client.heads_up.display_error.call(null,inst_23077,inst_23078);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(18),inst_23079);
} else {
if((state_val_23127 === (21))){
var inst_23118 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23134_23175 = state_23126__$1;
(statearr_23134_23175[(2)] = inst_23118);

(statearr_23134_23175[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (31))){
var inst_23107 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(34),inst_23107);
} else {
if((state_val_23127 === (32))){
var state_23126__$1 = state_23126;
var statearr_23135_23176 = state_23126__$1;
(statearr_23135_23176[(2)] = null);

(statearr_23135_23176[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (33))){
var inst_23112 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23136_23177 = state_23126__$1;
(statearr_23136_23177[(2)] = inst_23112);

(statearr_23136_23177[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (13))){
var inst_23066 = (state_23126[(2)]);
var inst_23067 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23068 = figwheel.client.format_messages.call(null,inst_23067);
var inst_23069 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23070 = figwheel.client.heads_up.display_error.call(null,inst_23068,inst_23069);
var state_23126__$1 = (function (){var statearr_23137 = state_23126;
(statearr_23137[(7)] = inst_23066);

return statearr_23137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(14),inst_23070);
} else {
if((state_val_23127 === (22))){
var inst_23090 = figwheel.client.heads_up.clear.call(null);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(25),inst_23090);
} else {
if((state_val_23127 === (29))){
var inst_23114 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23138_23178 = state_23126__$1;
(statearr_23138_23178[(2)] = inst_23114);

(statearr_23138_23178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (6))){
var inst_23056 = figwheel.client.heads_up.clear.call(null);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(9),inst_23056);
} else {
if((state_val_23127 === (28))){
var inst_23105 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23105)){
var statearr_23139_23179 = state_23126__$1;
(statearr_23139_23179[(1)] = (31));

} else {
var statearr_23140_23180 = state_23126__$1;
(statearr_23140_23180[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (25))){
var inst_23092 = (state_23126[(2)]);
var inst_23093 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23094 = figwheel.client.heads_up.display_warning.call(null,inst_23093);
var state_23126__$1 = (function (){var statearr_23141 = state_23126;
(statearr_23141[(8)] = inst_23092);

return statearr_23141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(26),inst_23094);
} else {
if((state_val_23127 === (34))){
var inst_23109 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23142_23181 = state_23126__$1;
(statearr_23142_23181[(2)] = inst_23109);

(statearr_23142_23181[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (17))){
var inst_23120 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23143_23182 = state_23126__$1;
(statearr_23143_23182[(2)] = inst_23120);

(statearr_23143_23182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (3))){
var inst_23062 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23062)){
var statearr_23144_23183 = state_23126__$1;
(statearr_23144_23183[(1)] = (10));

} else {
var statearr_23145_23184 = state_23126__$1;
(statearr_23145_23184[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (12))){
var inst_23122 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23146_23185 = state_23126__$1;
(statearr_23146_23185[(2)] = inst_23122);

(statearr_23146_23185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (2))){
var inst_23050 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23050)){
var statearr_23147_23186 = state_23126__$1;
(statearr_23147_23186[(1)] = (5));

} else {
var statearr_23148_23187 = state_23126__$1;
(statearr_23148_23187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (23))){
var inst_23098 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23098)){
var statearr_23149_23188 = state_23126__$1;
(statearr_23149_23188[(1)] = (27));

} else {
var statearr_23150_23189 = state_23126__$1;
(statearr_23150_23189[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (19))){
var inst_23085 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23086 = figwheel.client.heads_up.append_message.call(null,inst_23085);
var state_23126__$1 = state_23126;
var statearr_23151_23190 = state_23126__$1;
(statearr_23151_23190[(2)] = inst_23086);

(statearr_23151_23190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (11))){
var inst_23074 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23074)){
var statearr_23152_23191 = state_23126__$1;
(statearr_23152_23191[(1)] = (15));

} else {
var statearr_23153_23192 = state_23126__$1;
(statearr_23153_23192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (9))){
var inst_23058 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23154_23193 = state_23126__$1;
(statearr_23154_23193[(2)] = inst_23058);

(statearr_23154_23193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (5))){
var inst_23052 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(8),inst_23052);
} else {
if((state_val_23127 === (14))){
var inst_23072 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23155_23194 = state_23126__$1;
(statearr_23155_23194[(2)] = inst_23072);

(statearr_23155_23194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (26))){
var inst_23096 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23156_23195 = state_23126__$1;
(statearr_23156_23195[(2)] = inst_23096);

(statearr_23156_23195[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (16))){
var inst_23083 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23083)){
var statearr_23157_23196 = state_23126__$1;
(statearr_23157_23196[(1)] = (19));

} else {
var statearr_23158_23197 = state_23126__$1;
(statearr_23158_23197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (30))){
var inst_23103 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23159_23198 = state_23126__$1;
(statearr_23159_23198[(2)] = inst_23103);

(statearr_23159_23198[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (10))){
var inst_23064 = figwheel.client.heads_up.clear.call(null);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(13),inst_23064);
} else {
if((state_val_23127 === (18))){
var inst_23081 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23160_23199 = state_23126__$1;
(statearr_23160_23199[(2)] = inst_23081);

(statearr_23160_23199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (8))){
var inst_23054 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23161_23200 = state_23126__$1;
(statearr_23161_23200[(2)] = inst_23054);

(statearr_23161_23200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19079__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19017__auto__,c__19079__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____0 = (function (){
var statearr_23165 = [null,null,null,null,null,null,null,null,null];
(statearr_23165[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__);

(statearr_23165[(1)] = (1));

return statearr_23165;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____1 = (function (state_23126){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_23126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e23166){if((e23166 instanceof Object)){
var ex__19021__auto__ = e23166;
var statearr_23167_23201 = state_23126;
(statearr_23167_23201[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23202 = state_23126;
state_23126 = G__23202;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__ = function(state_23126){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____1.call(this,state_23126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,msg_hist,msg_names,msg))
})();
var state__19081__auto__ = (function (){var statearr_23168 = f__19080__auto__.call(null);
(statearr_23168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_23168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,msg_hist,msg_names,msg))
);

return c__19079__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19079__auto___23265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___23265,ch){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___23265,ch){
return (function (state_23248){
var state_val_23249 = (state_23248[(1)]);
if((state_val_23249 === (1))){
var state_23248__$1 = state_23248;
var statearr_23250_23266 = state_23248__$1;
(statearr_23250_23266[(2)] = null);

(statearr_23250_23266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (2))){
var state_23248__$1 = state_23248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23248__$1,(4),ch);
} else {
if((state_val_23249 === (3))){
var inst_23246 = (state_23248[(2)]);
var state_23248__$1 = state_23248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23248__$1,inst_23246);
} else {
if((state_val_23249 === (4))){
var inst_23236 = (state_23248[(7)]);
var inst_23236__$1 = (state_23248[(2)]);
var state_23248__$1 = (function (){var statearr_23251 = state_23248;
(statearr_23251[(7)] = inst_23236__$1);

return statearr_23251;
})();
if(cljs.core.truth_(inst_23236__$1)){
var statearr_23252_23267 = state_23248__$1;
(statearr_23252_23267[(1)] = (5));

} else {
var statearr_23253_23268 = state_23248__$1;
(statearr_23253_23268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (5))){
var inst_23236 = (state_23248[(7)]);
var inst_23238 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23236);
var state_23248__$1 = state_23248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23248__$1,(8),inst_23238);
} else {
if((state_val_23249 === (6))){
var state_23248__$1 = state_23248;
var statearr_23254_23269 = state_23248__$1;
(statearr_23254_23269[(2)] = null);

(statearr_23254_23269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (7))){
var inst_23244 = (state_23248[(2)]);
var state_23248__$1 = state_23248;
var statearr_23255_23270 = state_23248__$1;
(statearr_23255_23270[(2)] = inst_23244);

(statearr_23255_23270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (8))){
var inst_23240 = (state_23248[(2)]);
var state_23248__$1 = (function (){var statearr_23256 = state_23248;
(statearr_23256[(8)] = inst_23240);

return statearr_23256;
})();
var statearr_23257_23271 = state_23248__$1;
(statearr_23257_23271[(2)] = null);

(statearr_23257_23271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19079__auto___23265,ch))
;
return ((function (switch__19017__auto__,c__19079__auto___23265,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19018__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19018__auto____0 = (function (){
var statearr_23261 = [null,null,null,null,null,null,null,null,null];
(statearr_23261[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19018__auto__);

(statearr_23261[(1)] = (1));

return statearr_23261;
});
var figwheel$client$heads_up_plugin_$_state_machine__19018__auto____1 = (function (state_23248){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_23248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e23262){if((e23262 instanceof Object)){
var ex__19021__auto__ = e23262;
var statearr_23263_23272 = state_23248;
(statearr_23263_23272[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23273 = state_23248;
state_23248 = G__23273;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19018__auto__ = function(state_23248){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19018__auto____1.call(this,state_23248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19018__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19018__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___23265,ch))
})();
var state__19081__auto__ = (function (){var statearr_23264 = f__19080__auto__.call(null);
(statearr_23264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___23265);

return statearr_23264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___23265,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_23294){
var state_val_23295 = (state_23294[(1)]);
if((state_val_23295 === (1))){
var inst_23289 = cljs.core.async.timeout.call(null,(3000));
var state_23294__$1 = state_23294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23294__$1,(2),inst_23289);
} else {
if((state_val_23295 === (2))){
var inst_23291 = (state_23294[(2)]);
var inst_23292 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23294__$1 = (function (){var statearr_23296 = state_23294;
(statearr_23296[(7)] = inst_23291);

return statearr_23296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23294__$1,inst_23292);
} else {
return null;
}
}
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____0 = (function (){
var statearr_23300 = [null,null,null,null,null,null,null,null];
(statearr_23300[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__);

(statearr_23300[(1)] = (1));

return statearr_23300;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____1 = (function (state_23294){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_23294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e23301){if((e23301 instanceof Object)){
var ex__19021__auto__ = e23301;
var statearr_23302_23304 = state_23294;
(statearr_23302_23304[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23305 = state_23294;
state_23294 = G__23305;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__ = function(state_23294){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____1.call(this,state_23294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_23303 = f__19080__auto__.call(null);
(statearr_23303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_23303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23306){
var map__23312 = p__23306;
var map__23312__$1 = ((cljs.core.seq_QMARK_.call(null,map__23312))?cljs.core.apply.call(null,cljs.core.hash_map,map__23312):map__23312);
var ed = map__23312__$1;
var formatted_exception = cljs.core.get.call(null,map__23312__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23312__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23312__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23313_23317 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23314_23318 = null;
var count__23315_23319 = (0);
var i__23316_23320 = (0);
while(true){
if((i__23316_23320 < count__23315_23319)){
var msg_23321 = cljs.core._nth.call(null,chunk__23314_23318,i__23316_23320);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23321);

var G__23322 = seq__23313_23317;
var G__23323 = chunk__23314_23318;
var G__23324 = count__23315_23319;
var G__23325 = (i__23316_23320 + (1));
seq__23313_23317 = G__23322;
chunk__23314_23318 = G__23323;
count__23315_23319 = G__23324;
i__23316_23320 = G__23325;
continue;
} else {
var temp__4425__auto___23326 = cljs.core.seq.call(null,seq__23313_23317);
if(temp__4425__auto___23326){
var seq__23313_23327__$1 = temp__4425__auto___23326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23313_23327__$1)){
var c__16854__auto___23328 = cljs.core.chunk_first.call(null,seq__23313_23327__$1);
var G__23329 = cljs.core.chunk_rest.call(null,seq__23313_23327__$1);
var G__23330 = c__16854__auto___23328;
var G__23331 = cljs.core.count.call(null,c__16854__auto___23328);
var G__23332 = (0);
seq__23313_23317 = G__23329;
chunk__23314_23318 = G__23330;
count__23315_23319 = G__23331;
i__23316_23320 = G__23332;
continue;
} else {
var msg_23333 = cljs.core.first.call(null,seq__23313_23327__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23333);

var G__23334 = cljs.core.next.call(null,seq__23313_23327__$1);
var G__23335 = null;
var G__23336 = (0);
var G__23337 = (0);
seq__23313_23317 = G__23334;
chunk__23314_23318 = G__23335;
count__23315_23319 = G__23336;
i__23316_23320 = G__23337;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23338){
var map__23340 = p__23338;
var map__23340__$1 = ((cljs.core.seq_QMARK_.call(null,map__23340))?cljs.core.apply.call(null,cljs.core.hash_map,map__23340):map__23340);
var w = map__23340__$1;
var message = cljs.core.get.call(null,map__23340__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16057__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16057__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16057__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__23347 = cljs.core.seq.call(null,plugins);
var chunk__23348 = null;
var count__23349 = (0);
var i__23350 = (0);
while(true){
if((i__23350 < count__23349)){
var vec__23351 = cljs.core._nth.call(null,chunk__23348,i__23350);
var k = cljs.core.nth.call(null,vec__23351,(0),null);
var plugin = cljs.core.nth.call(null,vec__23351,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23353 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23347,chunk__23348,count__23349,i__23350,pl_23353,vec__23351,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23353.call(null,msg_hist);
});})(seq__23347,chunk__23348,count__23349,i__23350,pl_23353,vec__23351,k,plugin))
);
} else {
}

var G__23354 = seq__23347;
var G__23355 = chunk__23348;
var G__23356 = count__23349;
var G__23357 = (i__23350 + (1));
seq__23347 = G__23354;
chunk__23348 = G__23355;
count__23349 = G__23356;
i__23350 = G__23357;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23347);
if(temp__4425__auto__){
var seq__23347__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23347__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__23347__$1);
var G__23358 = cljs.core.chunk_rest.call(null,seq__23347__$1);
var G__23359 = c__16854__auto__;
var G__23360 = cljs.core.count.call(null,c__16854__auto__);
var G__23361 = (0);
seq__23347 = G__23358;
chunk__23348 = G__23359;
count__23349 = G__23360;
i__23350 = G__23361;
continue;
} else {
var vec__23352 = cljs.core.first.call(null,seq__23347__$1);
var k = cljs.core.nth.call(null,vec__23352,(0),null);
var plugin = cljs.core.nth.call(null,vec__23352,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23362 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23347,chunk__23348,count__23349,i__23350,pl_23362,vec__23352,k,plugin,seq__23347__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23362.call(null,msg_hist);
});})(seq__23347,chunk__23348,count__23349,i__23350,pl_23362,vec__23352,k,plugin,seq__23347__$1,temp__4425__auto__))
);
} else {
}

var G__23363 = cljs.core.next.call(null,seq__23347__$1);
var G__23364 = null;
var G__23365 = (0);
var G__23366 = (0);
seq__23347 = G__23363;
chunk__23348 = G__23364;
count__23349 = G__23365;
i__23350 = G__23366;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__23368 = arguments.length;
switch (G__23368) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23371){
var map__23372 = p__23371;
var map__23372__$1 = ((cljs.core.seq_QMARK_.call(null,map__23372))?cljs.core.apply.call(null,cljs.core.hash_map,map__23372):map__23372);
var opts = map__23372__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23370){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23370));
});

//# sourceMappingURL=client.js.map?rel=1436696509353
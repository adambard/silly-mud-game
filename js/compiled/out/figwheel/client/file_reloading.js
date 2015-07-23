// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__23790_SHARP_,p2__23791_SHARP_){
var and__16057__auto__ = p1__23790_SHARP_;
if(cljs.core.truth_(and__16057__auto__)){
return p2__23791_SHARP_;
} else {
return and__16057__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16069__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16069__auto__){
return or__16069__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16069__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16069__auto__){
return or__16069__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16069__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23792){
var map__23793 = p__23792;
var map__23793__$1 = ((cljs.core.seq_QMARK_.call(null,map__23793))?cljs.core.apply.call(null,cljs.core.hash_map,map__23793):map__23793);
var file = cljs.core.get.call(null,map__23793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__23794){
var map__23795 = p__23794;
var map__23795__$1 = ((cljs.core.seq_QMARK_.call(null,map__23795))?cljs.core.apply.call(null,cljs.core.hash_map,map__23795):map__23795);
var namespace = cljs.core.get.call(null,map__23795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23796){if((e23796 instanceof Error)){
var e = e23796;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23796;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__23798 = arguments.length;
switch (G__23798) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23800,callback){
var map__23802 = p__23800;
var map__23802__$1 = ((cljs.core.seq_QMARK_.call(null,map__23802))?cljs.core.apply.call(null,cljs.core.hash_map,map__23802):map__23802);
var file_msg = map__23802__$1;
var request_url = cljs.core.get.call(null,map__23802__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23802,map__23802__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23802,map__23802__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23803){
var map__23805 = p__23803;
var map__23805__$1 = ((cljs.core.seq_QMARK_.call(null,map__23805))?cljs.core.apply.call(null,cljs.core.hash_map,map__23805):map__23805);
var file_msg = map__23805__$1;
var namespace = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16069__auto__ = meta_data;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16057__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16057__auto__){
var or__16069__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto____$1)){
return or__16069__auto____$1;
} else {
var and__16057__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16057__auto____$1){
var or__16069__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16069__auto____$2){
return or__16069__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16057__auto____$1;
}
}
}
} else {
return and__16057__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23806,callback){
var map__23808 = p__23806;
var map__23808__$1 = ((cljs.core.seq_QMARK_.call(null,map__23808))?cljs.core.apply.call(null,cljs.core.hash_map,map__23808):map__23808);
var file_msg = map__23808__$1;
var request_url = cljs.core.get.call(null,map__23808__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23808__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19079__auto___23895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___23895,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___23895,out){
return (function (state_23877){
var state_val_23878 = (state_23877[(1)]);
if((state_val_23878 === (1))){
var inst_23855 = cljs.core.nth.call(null,files,(0),null);
var inst_23856 = cljs.core.nthnext.call(null,files,(1));
var inst_23857 = files;
var state_23877__$1 = (function (){var statearr_23879 = state_23877;
(statearr_23879[(7)] = inst_23856);

(statearr_23879[(8)] = inst_23857);

(statearr_23879[(9)] = inst_23855);

return statearr_23879;
})();
var statearr_23880_23896 = state_23877__$1;
(statearr_23880_23896[(2)] = null);

(statearr_23880_23896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (2))){
var inst_23860 = (state_23877[(10)]);
var inst_23857 = (state_23877[(8)]);
var inst_23860__$1 = cljs.core.nth.call(null,inst_23857,(0),null);
var inst_23861 = cljs.core.nthnext.call(null,inst_23857,(1));
var inst_23862 = (inst_23860__$1 == null);
var inst_23863 = cljs.core.not.call(null,inst_23862);
var state_23877__$1 = (function (){var statearr_23881 = state_23877;
(statearr_23881[(11)] = inst_23861);

(statearr_23881[(10)] = inst_23860__$1);

return statearr_23881;
})();
if(inst_23863){
var statearr_23882_23897 = state_23877__$1;
(statearr_23882_23897[(1)] = (4));

} else {
var statearr_23883_23898 = state_23877__$1;
(statearr_23883_23898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (3))){
var inst_23875 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23877__$1,inst_23875);
} else {
if((state_val_23878 === (4))){
var inst_23860 = (state_23877[(10)]);
var inst_23865 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23860);
var state_23877__$1 = state_23877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23877__$1,(7),inst_23865);
} else {
if((state_val_23878 === (5))){
var inst_23871 = cljs.core.async.close_BANG_.call(null,out);
var state_23877__$1 = state_23877;
var statearr_23884_23899 = state_23877__$1;
(statearr_23884_23899[(2)] = inst_23871);

(statearr_23884_23899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (6))){
var inst_23873 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23885_23900 = state_23877__$1;
(statearr_23885_23900[(2)] = inst_23873);

(statearr_23885_23900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (7))){
var inst_23861 = (state_23877[(11)]);
var inst_23867 = (state_23877[(2)]);
var inst_23868 = cljs.core.async.put_BANG_.call(null,out,inst_23867);
var inst_23857 = inst_23861;
var state_23877__$1 = (function (){var statearr_23886 = state_23877;
(statearr_23886[(12)] = inst_23868);

(statearr_23886[(8)] = inst_23857);

return statearr_23886;
})();
var statearr_23887_23901 = state_23877__$1;
(statearr_23887_23901[(2)] = null);

(statearr_23887_23901[(1)] = (2));


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
});})(c__19079__auto___23895,out))
;
return ((function (switch__19017__auto__,c__19079__auto___23895,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____0 = (function (){
var statearr_23891 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23891[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__);

(statearr_23891[(1)] = (1));

return statearr_23891;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____1 = (function (state_23877){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_23877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e23892){if((e23892 instanceof Object)){
var ex__19021__auto__ = e23892;
var statearr_23893_23902 = state_23877;
(statearr_23893_23902[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23903 = state_23877;
state_23877 = G__23903;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__ = function(state_23877){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____1.call(this,state_23877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___23895,out))
})();
var state__19081__auto__ = (function (){var statearr_23894 = f__19080__auto__.call(null);
(statearr_23894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___23895);

return statearr_23894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___23895,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__23904,p__23905){
var map__23908 = p__23904;
var map__23908__$1 = ((cljs.core.seq_QMARK_.call(null,map__23908))?cljs.core.apply.call(null,cljs.core.hash_map,map__23908):map__23908);
var opts = map__23908__$1;
var url_rewriter = cljs.core.get.call(null,map__23908__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__23909 = p__23905;
var map__23909__$1 = ((cljs.core.seq_QMARK_.call(null,map__23909))?cljs.core.apply.call(null,cljs.core.hash_map,map__23909):map__23909);
var file_msg = map__23909__$1;
var file = cljs.core.get.call(null,map__23909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23910,opts){
var map__23913 = p__23910;
var map__23913__$1 = ((cljs.core.seq_QMARK_.call(null,map__23913))?cljs.core.apply.call(null,cljs.core.hash_map,map__23913):map__23913);
var eval_body__$1 = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16057__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16057__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16057__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23914){var e = e23914;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23919,p__23920){
var map__24122 = p__23919;
var map__24122__$1 = ((cljs.core.seq_QMARK_.call(null,map__24122))?cljs.core.apply.call(null,cljs.core.hash_map,map__24122):map__24122);
var opts = map__24122__$1;
var before_jsload = cljs.core.get.call(null,map__24122__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24122__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__24122__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__24123 = p__23920;
var map__24123__$1 = ((cljs.core.seq_QMARK_.call(null,map__24123))?cljs.core.apply.call(null,cljs.core.hash_map,map__24123):map__24123);
var msg = map__24123__$1;
var files = cljs.core.get.call(null,map__24123__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (state_24248){
var state_val_24249 = (state_24248[(1)]);
if((state_val_24249 === (7))){
var inst_24138 = (state_24248[(7)]);
var inst_24137 = (state_24248[(8)]);
var inst_24135 = (state_24248[(9)]);
var inst_24136 = (state_24248[(10)]);
var inst_24143 = cljs.core._nth.call(null,inst_24136,inst_24138);
var inst_24144 = figwheel.client.file_reloading.eval_body.call(null,inst_24143,opts);
var inst_24145 = (inst_24138 + (1));
var tmp24250 = inst_24137;
var tmp24251 = inst_24135;
var tmp24252 = inst_24136;
var inst_24135__$1 = tmp24251;
var inst_24136__$1 = tmp24252;
var inst_24137__$1 = tmp24250;
var inst_24138__$1 = inst_24145;
var state_24248__$1 = (function (){var statearr_24253 = state_24248;
(statearr_24253[(7)] = inst_24138__$1);

(statearr_24253[(8)] = inst_24137__$1);

(statearr_24253[(9)] = inst_24135__$1);

(statearr_24253[(11)] = inst_24144);

(statearr_24253[(10)] = inst_24136__$1);

return statearr_24253;
})();
var statearr_24254_24323 = state_24248__$1;
(statearr_24254_24323[(2)] = null);

(statearr_24254_24323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (20))){
var inst_24185 = (state_24248[(12)]);
var inst_24184 = (state_24248[(13)]);
var inst_24180 = (state_24248[(14)]);
var inst_24181 = (state_24248[(15)]);
var inst_24187 = (state_24248[(16)]);
var inst_24190 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24192 = (function (){var all_files = inst_24180;
var files_SINGLEQUOTE_ = inst_24181;
var res_SINGLEQUOTE_ = inst_24184;
var res = inst_24185;
var files_not_loaded = inst_24187;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24185,inst_24184,inst_24180,inst_24181,inst_24187,inst_24190,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (p__24191){
var map__24255 = p__24191;
var map__24255__$1 = ((cljs.core.seq_QMARK_.call(null,map__24255))?cljs.core.apply.call(null,cljs.core.hash_map,map__24255):map__24255);
var namespace = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24185,inst_24184,inst_24180,inst_24181,inst_24187,inst_24190,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var inst_24193 = cljs.core.map.call(null,inst_24192,inst_24185);
var inst_24194 = cljs.core.pr_str.call(null,inst_24193);
var inst_24195 = figwheel.client.utils.log.call(null,inst_24194);
var inst_24196 = (function (){var all_files = inst_24180;
var files_SINGLEQUOTE_ = inst_24181;
var res_SINGLEQUOTE_ = inst_24184;
var res = inst_24185;
var files_not_loaded = inst_24187;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24185,inst_24184,inst_24180,inst_24181,inst_24187,inst_24190,inst_24192,inst_24193,inst_24194,inst_24195,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24185,inst_24184,inst_24180,inst_24181,inst_24187,inst_24190,inst_24192,inst_24193,inst_24194,inst_24195,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var inst_24197 = setTimeout(inst_24196,(10));
var state_24248__$1 = (function (){var statearr_24256 = state_24248;
(statearr_24256[(17)] = inst_24190);

(statearr_24256[(18)] = inst_24195);

return statearr_24256;
})();
var statearr_24257_24324 = state_24248__$1;
(statearr_24257_24324[(2)] = inst_24197);

(statearr_24257_24324[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (27))){
var inst_24207 = (state_24248[(19)]);
var state_24248__$1 = state_24248;
var statearr_24258_24325 = state_24248__$1;
(statearr_24258_24325[(2)] = inst_24207);

(statearr_24258_24325[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (1))){
var inst_24127 = (state_24248[(20)]);
var inst_24124 = before_jsload.call(null,files);
var inst_24125 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24126 = (function (){return ((function (inst_24127,inst_24124,inst_24125,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (p1__23915_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23915_SHARP_);
});
;})(inst_24127,inst_24124,inst_24125,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var inst_24127__$1 = cljs.core.filter.call(null,inst_24126,files);
var inst_24128 = cljs.core.not_empty.call(null,inst_24127__$1);
var state_24248__$1 = (function (){var statearr_24259 = state_24248;
(statearr_24259[(21)] = inst_24124);

(statearr_24259[(20)] = inst_24127__$1);

(statearr_24259[(22)] = inst_24125);

return statearr_24259;
})();
if(cljs.core.truth_(inst_24128)){
var statearr_24260_24326 = state_24248__$1;
(statearr_24260_24326[(1)] = (2));

} else {
var statearr_24261_24327 = state_24248__$1;
(statearr_24261_24327[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (24))){
var state_24248__$1 = state_24248;
var statearr_24262_24328 = state_24248__$1;
(statearr_24262_24328[(2)] = null);

(statearr_24262_24328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (4))){
var inst_24172 = (state_24248[(2)]);
var inst_24173 = (function (){return ((function (inst_24172,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (p1__23916_SHARP_){
var and__16057__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23916_SHARP_);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23916_SHARP_));
} else {
return and__16057__auto__;
}
});
;})(inst_24172,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var inst_24174 = cljs.core.filter.call(null,inst_24173,files);
var state_24248__$1 = (function (){var statearr_24263 = state_24248;
(statearr_24263[(23)] = inst_24174);

(statearr_24263[(24)] = inst_24172);

return statearr_24263;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_24264_24329 = state_24248__$1;
(statearr_24264_24329[(1)] = (16));

} else {
var statearr_24265_24330 = state_24248__$1;
(statearr_24265_24330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (15))){
var inst_24162 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24266_24331 = state_24248__$1;
(statearr_24266_24331[(2)] = inst_24162);

(statearr_24266_24331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (21))){
var state_24248__$1 = state_24248;
var statearr_24267_24332 = state_24248__$1;
(statearr_24267_24332[(2)] = null);

(statearr_24267_24332[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (31))){
var inst_24215 = (state_24248[(25)]);
var inst_24225 = (state_24248[(2)]);
var inst_24226 = cljs.core.not_empty.call(null,inst_24215);
var state_24248__$1 = (function (){var statearr_24268 = state_24248;
(statearr_24268[(26)] = inst_24225);

return statearr_24268;
})();
if(cljs.core.truth_(inst_24226)){
var statearr_24269_24333 = state_24248__$1;
(statearr_24269_24333[(1)] = (32));

} else {
var statearr_24270_24334 = state_24248__$1;
(statearr_24270_24334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (32))){
var inst_24215 = (state_24248[(25)]);
var inst_24228 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24215);
var inst_24229 = cljs.core.pr_str.call(null,inst_24228);
var inst_24230 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_24229)].join('');
var inst_24231 = figwheel.client.utils.log.call(null,inst_24230);
var state_24248__$1 = state_24248;
var statearr_24271_24335 = state_24248__$1;
(statearr_24271_24335[(2)] = inst_24231);

(statearr_24271_24335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (33))){
var state_24248__$1 = state_24248;
var statearr_24272_24336 = state_24248__$1;
(statearr_24272_24336[(2)] = null);

(statearr_24272_24336[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (13))){
var inst_24148 = (state_24248[(27)]);
var inst_24152 = cljs.core.chunk_first.call(null,inst_24148);
var inst_24153 = cljs.core.chunk_rest.call(null,inst_24148);
var inst_24154 = cljs.core.count.call(null,inst_24152);
var inst_24135 = inst_24153;
var inst_24136 = inst_24152;
var inst_24137 = inst_24154;
var inst_24138 = (0);
var state_24248__$1 = (function (){var statearr_24273 = state_24248;
(statearr_24273[(7)] = inst_24138);

(statearr_24273[(8)] = inst_24137);

(statearr_24273[(9)] = inst_24135);

(statearr_24273[(10)] = inst_24136);

return statearr_24273;
})();
var statearr_24274_24337 = state_24248__$1;
(statearr_24274_24337[(2)] = null);

(statearr_24274_24337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (22))){
var inst_24187 = (state_24248[(16)]);
var inst_24200 = (state_24248[(2)]);
var inst_24201 = cljs.core.not_empty.call(null,inst_24187);
var state_24248__$1 = (function (){var statearr_24275 = state_24248;
(statearr_24275[(28)] = inst_24200);

return statearr_24275;
})();
if(cljs.core.truth_(inst_24201)){
var statearr_24276_24338 = state_24248__$1;
(statearr_24276_24338[(1)] = (23));

} else {
var statearr_24277_24339 = state_24248__$1;
(statearr_24277_24339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (36))){
var state_24248__$1 = state_24248;
var statearr_24278_24340 = state_24248__$1;
(statearr_24278_24340[(2)] = null);

(statearr_24278_24340[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (29))){
var inst_24214 = (state_24248[(29)]);
var inst_24219 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24214);
var inst_24220 = cljs.core.pr_str.call(null,inst_24219);
var inst_24221 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24220)].join('');
var inst_24222 = figwheel.client.utils.log.call(null,inst_24221);
var state_24248__$1 = state_24248;
var statearr_24279_24341 = state_24248__$1;
(statearr_24279_24341[(2)] = inst_24222);

(statearr_24279_24341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (6))){
var inst_24169 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24280_24342 = state_24248__$1;
(statearr_24280_24342[(2)] = inst_24169);

(statearr_24280_24342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (28))){
var inst_24214 = (state_24248[(29)]);
var inst_24213 = (state_24248[(2)]);
var inst_24214__$1 = cljs.core.get.call(null,inst_24213,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24215 = cljs.core.get.call(null,inst_24213,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_24216 = cljs.core.get.call(null,inst_24213,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24217 = cljs.core.not_empty.call(null,inst_24214__$1);
var state_24248__$1 = (function (){var statearr_24281 = state_24248;
(statearr_24281[(30)] = inst_24216);

(statearr_24281[(25)] = inst_24215);

(statearr_24281[(29)] = inst_24214__$1);

return statearr_24281;
})();
if(cljs.core.truth_(inst_24217)){
var statearr_24282_24343 = state_24248__$1;
(statearr_24282_24343[(1)] = (29));

} else {
var statearr_24283_24344 = state_24248__$1;
(statearr_24283_24344[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (25))){
var inst_24246 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24248__$1,inst_24246);
} else {
if((state_val_24249 === (34))){
var inst_24216 = (state_24248[(30)]);
var inst_24234 = (state_24248[(2)]);
var inst_24235 = cljs.core.not_empty.call(null,inst_24216);
var state_24248__$1 = (function (){var statearr_24284 = state_24248;
(statearr_24284[(31)] = inst_24234);

return statearr_24284;
})();
if(cljs.core.truth_(inst_24235)){
var statearr_24285_24345 = state_24248__$1;
(statearr_24285_24345[(1)] = (35));

} else {
var statearr_24286_24346 = state_24248__$1;
(statearr_24286_24346[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (17))){
var inst_24174 = (state_24248[(23)]);
var state_24248__$1 = state_24248;
var statearr_24287_24347 = state_24248__$1;
(statearr_24287_24347[(2)] = inst_24174);

(statearr_24287_24347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (3))){
var state_24248__$1 = state_24248;
var statearr_24288_24348 = state_24248__$1;
(statearr_24288_24348[(2)] = null);

(statearr_24288_24348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (12))){
var inst_24165 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24289_24349 = state_24248__$1;
(statearr_24289_24349[(2)] = inst_24165);

(statearr_24289_24349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (2))){
var inst_24127 = (state_24248[(20)]);
var inst_24134 = cljs.core.seq.call(null,inst_24127);
var inst_24135 = inst_24134;
var inst_24136 = null;
var inst_24137 = (0);
var inst_24138 = (0);
var state_24248__$1 = (function (){var statearr_24290 = state_24248;
(statearr_24290[(7)] = inst_24138);

(statearr_24290[(8)] = inst_24137);

(statearr_24290[(9)] = inst_24135);

(statearr_24290[(10)] = inst_24136);

return statearr_24290;
})();
var statearr_24291_24350 = state_24248__$1;
(statearr_24291_24350[(2)] = null);

(statearr_24291_24350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (23))){
var inst_24185 = (state_24248[(12)]);
var inst_24184 = (state_24248[(13)]);
var inst_24180 = (state_24248[(14)]);
var inst_24207 = (state_24248[(19)]);
var inst_24181 = (state_24248[(15)]);
var inst_24187 = (state_24248[(16)]);
var inst_24203 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24206 = (function (){var all_files = inst_24180;
var files_SINGLEQUOTE_ = inst_24181;
var res_SINGLEQUOTE_ = inst_24184;
var res = inst_24185;
var files_not_loaded = inst_24187;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24185,inst_24184,inst_24180,inst_24207,inst_24181,inst_24187,inst_24203,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (p__24205){
var map__24292 = p__24205;
var map__24292__$1 = ((cljs.core.seq_QMARK_.call(null,map__24292))?cljs.core.apply.call(null,cljs.core.hash_map,map__24292):map__24292);
var meta_data = cljs.core.get.call(null,map__24292__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24185,inst_24184,inst_24180,inst_24207,inst_24181,inst_24187,inst_24203,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var inst_24207__$1 = cljs.core.group_by.call(null,inst_24206,inst_24187);
var inst_24208 = cljs.core.seq_QMARK_.call(null,inst_24207__$1);
var state_24248__$1 = (function (){var statearr_24293 = state_24248;
(statearr_24293[(32)] = inst_24203);

(statearr_24293[(19)] = inst_24207__$1);

return statearr_24293;
})();
if(inst_24208){
var statearr_24294_24351 = state_24248__$1;
(statearr_24294_24351[(1)] = (26));

} else {
var statearr_24295_24352 = state_24248__$1;
(statearr_24295_24352[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (35))){
var inst_24216 = (state_24248[(30)]);
var inst_24237 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24216);
var inst_24238 = cljs.core.pr_str.call(null,inst_24237);
var inst_24239 = [cljs.core.str("not required: "),cljs.core.str(inst_24238)].join('');
var inst_24240 = figwheel.client.utils.log.call(null,inst_24239);
var state_24248__$1 = state_24248;
var statearr_24296_24353 = state_24248__$1;
(statearr_24296_24353[(2)] = inst_24240);

(statearr_24296_24353[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (19))){
var inst_24185 = (state_24248[(12)]);
var inst_24184 = (state_24248[(13)]);
var inst_24180 = (state_24248[(14)]);
var inst_24181 = (state_24248[(15)]);
var inst_24184__$1 = (state_24248[(2)]);
var inst_24185__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24184__$1);
var inst_24186 = (function (){var all_files = inst_24180;
var files_SINGLEQUOTE_ = inst_24181;
var res_SINGLEQUOTE_ = inst_24184__$1;
var res = inst_24185__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24185,inst_24184,inst_24180,inst_24181,inst_24184__$1,inst_24185__$1,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (p1__23918_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23918_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24185,inst_24184,inst_24180,inst_24181,inst_24184__$1,inst_24185__$1,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var inst_24187 = cljs.core.filter.call(null,inst_24186,inst_24184__$1);
var inst_24188 = cljs.core.not_empty.call(null,inst_24185__$1);
var state_24248__$1 = (function (){var statearr_24297 = state_24248;
(statearr_24297[(12)] = inst_24185__$1);

(statearr_24297[(13)] = inst_24184__$1);

(statearr_24297[(16)] = inst_24187);

return statearr_24297;
})();
if(cljs.core.truth_(inst_24188)){
var statearr_24298_24354 = state_24248__$1;
(statearr_24298_24354[(1)] = (20));

} else {
var statearr_24299_24355 = state_24248__$1;
(statearr_24299_24355[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (11))){
var state_24248__$1 = state_24248;
var statearr_24300_24356 = state_24248__$1;
(statearr_24300_24356[(2)] = null);

(statearr_24300_24356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (9))){
var inst_24167 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24301_24357 = state_24248__$1;
(statearr_24301_24357[(2)] = inst_24167);

(statearr_24301_24357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (5))){
var inst_24138 = (state_24248[(7)]);
var inst_24137 = (state_24248[(8)]);
var inst_24140 = (inst_24138 < inst_24137);
var inst_24141 = inst_24140;
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24141)){
var statearr_24302_24358 = state_24248__$1;
(statearr_24302_24358[(1)] = (7));

} else {
var statearr_24303_24359 = state_24248__$1;
(statearr_24303_24359[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (14))){
var inst_24148 = (state_24248[(27)]);
var inst_24157 = cljs.core.first.call(null,inst_24148);
var inst_24158 = figwheel.client.file_reloading.eval_body.call(null,inst_24157,opts);
var inst_24159 = cljs.core.next.call(null,inst_24148);
var inst_24135 = inst_24159;
var inst_24136 = null;
var inst_24137 = (0);
var inst_24138 = (0);
var state_24248__$1 = (function (){var statearr_24304 = state_24248;
(statearr_24304[(7)] = inst_24138);

(statearr_24304[(8)] = inst_24137);

(statearr_24304[(9)] = inst_24135);

(statearr_24304[(33)] = inst_24158);

(statearr_24304[(10)] = inst_24136);

return statearr_24304;
})();
var statearr_24305_24360 = state_24248__$1;
(statearr_24305_24360[(2)] = null);

(statearr_24305_24360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (26))){
var inst_24207 = (state_24248[(19)]);
var inst_24210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24207);
var state_24248__$1 = state_24248;
var statearr_24306_24361 = state_24248__$1;
(statearr_24306_24361[(2)] = inst_24210);

(statearr_24306_24361[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (16))){
var inst_24174 = (state_24248[(23)]);
var inst_24176 = (function (){var all_files = inst_24174;
return ((function (all_files,inst_24174,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function (p1__23917_SHARP_){
return cljs.core.update_in.call(null,p1__23917_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_24174,state_val_24249,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var inst_24177 = cljs.core.map.call(null,inst_24176,inst_24174);
var state_24248__$1 = state_24248;
var statearr_24307_24362 = state_24248__$1;
(statearr_24307_24362[(2)] = inst_24177);

(statearr_24307_24362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (30))){
var state_24248__$1 = state_24248;
var statearr_24308_24363 = state_24248__$1;
(statearr_24308_24363[(2)] = null);

(statearr_24308_24363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (10))){
var inst_24148 = (state_24248[(27)]);
var inst_24150 = cljs.core.chunked_seq_QMARK_.call(null,inst_24148);
var state_24248__$1 = state_24248;
if(inst_24150){
var statearr_24309_24364 = state_24248__$1;
(statearr_24309_24364[(1)] = (13));

} else {
var statearr_24310_24365 = state_24248__$1;
(statearr_24310_24365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (18))){
var inst_24180 = (state_24248[(14)]);
var inst_24181 = (state_24248[(15)]);
var inst_24180__$1 = (state_24248[(2)]);
var inst_24181__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_24180__$1);
var inst_24182 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24181__$1);
var state_24248__$1 = (function (){var statearr_24311 = state_24248;
(statearr_24311[(14)] = inst_24180__$1);

(statearr_24311[(15)] = inst_24181__$1);

return statearr_24311;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(19),inst_24182);
} else {
if((state_val_24249 === (37))){
var inst_24243 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24312_24366 = state_24248__$1;
(statearr_24312_24366[(2)] = inst_24243);

(statearr_24312_24366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (8))){
var inst_24135 = (state_24248[(9)]);
var inst_24148 = (state_24248[(27)]);
var inst_24148__$1 = cljs.core.seq.call(null,inst_24135);
var state_24248__$1 = (function (){var statearr_24313 = state_24248;
(statearr_24313[(27)] = inst_24148__$1);

return statearr_24313;
})();
if(inst_24148__$1){
var statearr_24314_24367 = state_24248__$1;
(statearr_24314_24367[(1)] = (10));

} else {
var statearr_24315_24368 = state_24248__$1;
(statearr_24315_24368[(1)] = (11));

}

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
}
}
}
});})(c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
;
return ((function (switch__19017__auto__,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____0 = (function (){
var statearr_24319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24319[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__);

(statearr_24319[(1)] = (1));

return statearr_24319;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____1 = (function (state_24248){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24320){if((e24320 instanceof Object)){
var ex__19021__auto__ = e24320;
var statearr_24321_24369 = state_24248;
(statearr_24321_24369[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24370 = state_24248;
state_24248 = G__24370;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__ = function(state_24248){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____1.call(this,state_24248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
})();
var state__19081__auto__ = (function (){var statearr_24322 = f__19080__auto__.call(null);
(statearr_24322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_24322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,map__24122,map__24122__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24123,map__24123__$1,msg,files))
);

return c__19079__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24373,link){
var map__24375 = p__24373;
var map__24375__$1 = ((cljs.core.seq_QMARK_.call(null,map__24375))?cljs.core.apply.call(null,cljs.core.hash_map,map__24375):map__24375);
var file = cljs.core.get.call(null,map__24375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24375,map__24375__$1,file){
return (function (p1__24371_SHARP_,p2__24372_SHARP_){
if(cljs.core._EQ_.call(null,p1__24371_SHARP_,p2__24372_SHARP_)){
return p1__24371_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24375,map__24375__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24379){
var map__24380 = p__24379;
var map__24380__$1 = ((cljs.core.seq_QMARK_.call(null,map__24380))?cljs.core.apply.call(null,cljs.core.hash_map,map__24380):map__24380);
var match_length = cljs.core.get.call(null,map__24380__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24380__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24376_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24376_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__24382 = arguments.length;
switch (G__24382) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24384){
var map__24386 = p__24384;
var map__24386__$1 = ((cljs.core.seq_QMARK_.call(null,map__24386))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);
var f_data = map__24386__$1;
var file = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16069__auto__ = request_url;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24387,files_msg){
var map__24409 = p__24387;
var map__24409__$1 = ((cljs.core.seq_QMARK_.call(null,map__24409))?cljs.core.apply.call(null,cljs.core.hash_map,map__24409):map__24409);
var opts = map__24409__$1;
var on_cssload = cljs.core.get.call(null,map__24409__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24410_24430 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24411_24431 = null;
var count__24412_24432 = (0);
var i__24413_24433 = (0);
while(true){
if((i__24413_24433 < count__24412_24432)){
var f_24434 = cljs.core._nth.call(null,chunk__24411_24431,i__24413_24433);
figwheel.client.file_reloading.reload_css_file.call(null,f_24434);

var G__24435 = seq__24410_24430;
var G__24436 = chunk__24411_24431;
var G__24437 = count__24412_24432;
var G__24438 = (i__24413_24433 + (1));
seq__24410_24430 = G__24435;
chunk__24411_24431 = G__24436;
count__24412_24432 = G__24437;
i__24413_24433 = G__24438;
continue;
} else {
var temp__4425__auto___24439 = cljs.core.seq.call(null,seq__24410_24430);
if(temp__4425__auto___24439){
var seq__24410_24440__$1 = temp__4425__auto___24439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24410_24440__$1)){
var c__16854__auto___24441 = cljs.core.chunk_first.call(null,seq__24410_24440__$1);
var G__24442 = cljs.core.chunk_rest.call(null,seq__24410_24440__$1);
var G__24443 = c__16854__auto___24441;
var G__24444 = cljs.core.count.call(null,c__16854__auto___24441);
var G__24445 = (0);
seq__24410_24430 = G__24442;
chunk__24411_24431 = G__24443;
count__24412_24432 = G__24444;
i__24413_24433 = G__24445;
continue;
} else {
var f_24446 = cljs.core.first.call(null,seq__24410_24440__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24446);

var G__24447 = cljs.core.next.call(null,seq__24410_24440__$1);
var G__24448 = null;
var G__24449 = (0);
var G__24450 = (0);
seq__24410_24430 = G__24447;
chunk__24411_24431 = G__24448;
count__24412_24432 = G__24449;
i__24413_24433 = G__24450;
continue;
}
} else {
}
}
break;
}

var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,map__24409,map__24409__$1,opts,on_cssload){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,map__24409,map__24409__$1,opts,on_cssload){
return (function (state_24420){
var state_val_24421 = (state_24420[(1)]);
if((state_val_24421 === (1))){
var inst_24414 = cljs.core.async.timeout.call(null,(100));
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24420__$1,(2),inst_24414);
} else {
if((state_val_24421 === (2))){
var inst_24416 = (state_24420[(2)]);
var inst_24417 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_24418 = on_cssload.call(null,inst_24417);
var state_24420__$1 = (function (){var statearr_24422 = state_24420;
(statearr_24422[(7)] = inst_24416);

return statearr_24422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24420__$1,inst_24418);
} else {
return null;
}
}
});})(c__19079__auto__,map__24409,map__24409__$1,opts,on_cssload))
;
return ((function (switch__19017__auto__,c__19079__auto__,map__24409,map__24409__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____0 = (function (){
var statearr_24426 = [null,null,null,null,null,null,null,null];
(statearr_24426[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__);

(statearr_24426[(1)] = (1));

return statearr_24426;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____1 = (function (state_24420){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24427){if((e24427 instanceof Object)){
var ex__19021__auto__ = e24427;
var statearr_24428_24451 = state_24420;
(statearr_24428_24451[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24452 = state_24420;
state_24420 = G__24452;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__ = function(state_24420){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____1.call(this,state_24420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,map__24409,map__24409__$1,opts,on_cssload))
})();
var state__19081__auto__ = (function (){var statearr_24429 = f__19080__auto__.call(null);
(statearr_24429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_24429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,map__24409,map__24409__$1,opts,on_cssload))
);

return c__19079__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436696510404
// Compiled by ClojureScript 0.0-3297 {}
goog.provide('textgame.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
textgame.core.on_js_reload = (function textgame$core$on_js_reload(){
return null;
});
if(typeof textgame.core.app_state !== 'undefined'){
} else {
textgame.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mud","mud",-791161683),(1),new cljs.core.Keyword(null,"bricks","bricks",1203539429),(0)], null),new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shacks","shacks",-352097369),(0),new cljs.core.Keyword(null,"mansions","mansions",-1008334444),(0),new cljs.core.Keyword(null,"brickyards","brickyards",1225987758),(0)], null),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY], null));
}
textgame.core.tick = (function textgame$core$tick(data){
return cljs.core.update_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),cljs.core._PLUS_,(new cljs.core.Keyword(null,"shacks","shacks",-352097369).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(data)) * 0.01),(new cljs.core.Keyword(null,"mansions","mansions",-1008334444).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(data)) * 0.12));
});
setInterval((function (){
return cljs.core.swap_BANG_.call(null,textgame.core.app_state,textgame.core.tick);
}),(20));
textgame.core.cost = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),(function (_){
return (10);
}),new cljs.core.Keyword(null,"bricks->shack","bricks->shack",-169422664),(function (data){
return ((100) * Math.pow(0.95,new cljs.core.Keyword(null,"brickyards","brickyards",1225987758).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(data))));
}),new cljs.core.Keyword(null,"bricks->mansion","bricks->mansion",1840426285),(function (data){
return ((1000) * Math.pow(0.95,new cljs.core.Keyword(null,"brickyards","brickyards",1225987758).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(data))));
}),new cljs.core.Keyword(null,"bricks->brickyard","bricks->brickyard",2140031311),(function (_){
return (500);
})], null);
textgame.core.check_cost = (function textgame$core$check_cost(selector,cost_key,n){
return (function (data){
return (cljs.core.get_in.call(null,data,selector) >= (n * textgame.core.cost.call(null,cost_key).call(null,data)));
});
});
textgame.core.pick_mud_BANG_ = (function textgame$core$pick_mud_BANG_(data){
return cljs.core.update_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),cljs.core.inc);
});
textgame.core.buy_item_BANG_ = (function textgame$core$buy_item_BANG_(data,in_selector,cost_key,out_selector,n){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,data,in_selector,cljs.core._,(n * textgame.core.cost.call(null,cost_key).call(null,data))),out_selector,cljs.core._PLUS_,n);
});
textgame.core.action_button = (function textgame$core$action_button(data,enabled_fn_QMARK_,action_fn_BANG_,button_text,id){
var enabled_QMARK_ = enabled_fn_QMARK_.call(null,data);
var previously_enabled_QMARK_ = id.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_((function (){var and__16057__auto__ = enabled_QMARK_;
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,previously_enabled_QMARK_);
} else {
return and__16057__auto__;
}
})())){
om.core.transact_BANG_.call(null,data,((function (enabled_QMARK_,previously_enabled_QMARK_){
return (function (p1__26258_SHARP_){
return cljs.core.update_in.call(null,p1__26258_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075)], null),cljs.core.conj,id);
});})(enabled_QMARK_,previously_enabled_QMARK_))
);
} else {
}

return sablono.core.submit_button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not.call(null,(function (){var or__16069__auto__ = enabled_QMARK_;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return previously_enabled_QMARK_;
}
})()))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.not.call(null,enabled_QMARK_))?"disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (enabled_QMARK_,previously_enabled_QMARK_){
return (function (_){
return om.core.transact_BANG_.call(null,data,action_fn_BANG_);
});})(enabled_QMARK_,previously_enabled_QMARK_))
], null),button_text);
});
textgame.core.purchase_button = (function textgame$core$purchase_button(data,in_selector,cost_key,out_selector,n,text,id){
return textgame.core.action_button.call(null,data,textgame.core.check_cost.call(null,in_selector,cost_key,n),(function (p1__26259_SHARP_){
return textgame.core.buy_item_BANG_.call(null,p1__26259_SHARP_,in_selector,cost_key,out_selector,n);
}),text,id);
});
textgame.core.widget = (function textgame$core$widget(data){
if(typeof textgame.core.t26312 !== 'undefined'){
} else {

/**
* @constructor
*/
textgame.core.t26312 = (function (widget,data,meta26313){
this.widget = widget;
this.data = data;
this.meta26313 = meta26313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
textgame.core.t26312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26314,meta26313__$1){
var self__ = this;
var _26314__$1 = this;
return (new textgame.core.t26312(self__.widget,self__.data,meta26313__$1));
});

textgame.core.t26312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26314){
var self__ = this;
var _26314__$1 = this;
return self__.meta26313;
});

textgame.core.t26312.prototype.om$core$IRender$ = true;

textgame.core.t26312.prototype.om$core$IRender$render$arity$1 = (function (this__20354__auto__){
var self__ = this;
var this__20354__auto____$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("ul",{"className": "resources"},React.createElement("li",null,"Mud: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mud","mud",-791161683).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(self__.data)))),React.createElement("li",null,"Bricks: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"bricks","bricks",1203539429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(self__.data))))),React.createElement("ul",{"className": "buildings"},React.createElement("li",null,"Shacks: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"shacks","shacks",-352097369).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(self__.data)))),React.createElement("li",null,"Mansions: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mansions","mansions",-1008334444).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(self__.data)))),React.createElement("li",null,"Brickyards: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"brickyards","brickyards",1225987758).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(self__.data))))),(function (){var attrs26315 = textgame.core.action_button.call(null,self__.data,((function (this__20354__auto____$1){
return (function (data__$1){
return true;
});})(this__20354__auto____$1))
,textgame.core.pick_mud_BANG_,"Dig Mud",new cljs.core.Keyword(null,"mud","mud",-791161683));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26315))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["controls"], null)], null),attrs26315)):{"className": "controls"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26315))?new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(1),"Make Brick",new cljs.core.Keyword(null,"1b","1b",-980300122))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(10),"10",new cljs.core.Keyword(null,"10b","10b",-1181127000))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(100),"100",new cljs.core.Keyword(null,"100b","100b",2037168311))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(1000),"1000",new cljs.core.Keyword(null,"1000b","1000b",-582313584))),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->shack","bricks->shack",-169422664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"shacks","shacks",-352097369)], null),(1),"Build Shack",new cljs.core.Keyword(null,"1s","1s",779864957))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->shack","bricks->shack",-169422664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"shacks","shacks",-352097369)], null),(10),"10",new cljs.core.Keyword(null,"10s","10s",-501040488))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->shack","bricks->shack",-169422664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"shacks","shacks",-352097369)], null),(100),"100",new cljs.core.Keyword(null,"100s","100s",24139765))),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->mansion","bricks->mansion",1840426285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"mansions","mansions",-1008334444)], null),(1),"Build Mansion",new cljs.core.Keyword(null,"1m","1m",-1970672348))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->mansion","bricks->mansion",1840426285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"mansions","mansions",-1008334444)], null),(10),"10",new cljs.core.Keyword(null,"10m","10m",691711763))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->mansion","bricks->mansion",1840426285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"mansions","mansions",-1008334444)], null),(100),"100",new cljs.core.Keyword(null,"100m","100m",922251805))),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->brickyard","bricks->brickyard",2140031311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"brickyards","brickyards",1225987758)], null),(1),"Build Brickyard",new cljs.core.Keyword(null,"1by","1by",-47602856))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->brickyard","bricks->brickyard",2140031311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"brickyards","brickyards",1225987758)], null),(10),"10",new cljs.core.Keyword(null,"10by","10by",1224202926))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->brickyard","bricks->brickyard",2140031311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"brickyards","brickyards",1225987758)], null),(100),"100",new cljs.core.Keyword(null,"100by","100by",-329422631))),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.action_button.call(null,self__.data,((function (attrs26315,this__20354__auto____$1){
return (function (data__$1){
return true;
});})(attrs26315,this__20354__auto____$1))
,((function (attrs26315,this__20354__auto____$1){
return (function (data__$1){
return cljs.core.update_in.call(null,data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),cljs.core._PLUS_,(1000));
});})(attrs26315,this__20354__auto____$1))
,"Cheat!",new cljs.core.Keyword(null,"cheat","cheat",-1330692987)))], null):new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26315),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(1),"Make Brick",new cljs.core.Keyword(null,"1b","1b",-980300122))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(10),"10",new cljs.core.Keyword(null,"10b","10b",-1181127000))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(100),"100",new cljs.core.Keyword(null,"100b","100b",2037168311))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),new cljs.core.Keyword(null,"mud->brick","mud->brick",-1129894958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),(1000),"1000",new cljs.core.Keyword(null,"1000b","1000b",-582313584))),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->shack","bricks->shack",-169422664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"shacks","shacks",-352097369)], null),(1),"Build Shack",new cljs.core.Keyword(null,"1s","1s",779864957))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->shack","bricks->shack",-169422664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"shacks","shacks",-352097369)], null),(10),"10",new cljs.core.Keyword(null,"10s","10s",-501040488))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->shack","bricks->shack",-169422664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"shacks","shacks",-352097369)], null),(100),"100",new cljs.core.Keyword(null,"100s","100s",24139765))),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->mansion","bricks->mansion",1840426285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"mansions","mansions",-1008334444)], null),(1),"Build Mansion",new cljs.core.Keyword(null,"1m","1m",-1970672348))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->mansion","bricks->mansion",1840426285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"mansions","mansions",-1008334444)], null),(10),"10",new cljs.core.Keyword(null,"10m","10m",691711763))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->mansion","bricks->mansion",1840426285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"mansions","mansions",-1008334444)], null),(100),"100",new cljs.core.Keyword(null,"100m","100m",922251805))),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->brickyard","bricks->brickyard",2140031311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"brickyards","brickyards",1225987758)], null),(1),"Build Brickyard",new cljs.core.Keyword(null,"1by","1by",-47602856))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->brickyard","bricks->brickyard",2140031311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"brickyards","brickyards",1225987758)], null),(10),"10",new cljs.core.Keyword(null,"10by","10by",1224202926))),sablono.interpreter.interpret.call(null,textgame.core.purchase_button.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"bricks","bricks",1203539429)], null),new cljs.core.Keyword(null,"bricks->brickyard","bricks->brickyard",2140031311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"brickyards","brickyards",1225987758)], null),(100),"100",new cljs.core.Keyword(null,"100by","100by",-329422631))),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,textgame.core.action_button.call(null,self__.data,((function (attrs26315,this__20354__auto____$1){
return (function (data__$1){
return true;
});})(attrs26315,this__20354__auto____$1))
,((function (attrs26315,this__20354__auto____$1){
return (function (data__$1){
return cljs.core.update_in.call(null,data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"mud","mud",-791161683)], null),cljs.core._PLUS_,(1000));
});})(attrs26315,this__20354__auto____$1))
,"Cheat!",new cljs.core.Keyword(null,"cheat","cheat",-1330692987)))], null))));
})());
});

textgame.core.t26312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"meta26313","meta26313",1260303001,null)], null);
});

textgame.core.t26312.cljs$lang$type = true;

textgame.core.t26312.cljs$lang$ctorStr = "textgame.core/t26312";

textgame.core.t26312.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"textgame.core/t26312");
});

textgame.core.__GT_t26312 = (function textgame$core$widget_$___GT_t26312(widget__$1,data__$1,meta26313){
return (new textgame.core.t26312(widget__$1,data__$1,meta26313));
});

}

return (new textgame.core.t26312(textgame$core$widget,data,null));
});
om.core.root.call(null,textgame.core.widget,textgame.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.body], null));

//# sourceMappingURL=core.js.map?rel=1436710885128
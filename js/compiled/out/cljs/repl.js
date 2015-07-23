// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23742_23754 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23743_23755 = null;
var count__23744_23756 = (0);
var i__23745_23757 = (0);
while(true){
if((i__23745_23757 < count__23744_23756)){
var f_23758 = cljs.core._nth.call(null,chunk__23743_23755,i__23745_23757);
cljs.core.println.call(null,"  ",f_23758);

var G__23759 = seq__23742_23754;
var G__23760 = chunk__23743_23755;
var G__23761 = count__23744_23756;
var G__23762 = (i__23745_23757 + (1));
seq__23742_23754 = G__23759;
chunk__23743_23755 = G__23760;
count__23744_23756 = G__23761;
i__23745_23757 = G__23762;
continue;
} else {
var temp__4425__auto___23763 = cljs.core.seq.call(null,seq__23742_23754);
if(temp__4425__auto___23763){
var seq__23742_23764__$1 = temp__4425__auto___23763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23742_23764__$1)){
var c__16854__auto___23765 = cljs.core.chunk_first.call(null,seq__23742_23764__$1);
var G__23766 = cljs.core.chunk_rest.call(null,seq__23742_23764__$1);
var G__23767 = c__16854__auto___23765;
var G__23768 = cljs.core.count.call(null,c__16854__auto___23765);
var G__23769 = (0);
seq__23742_23754 = G__23766;
chunk__23743_23755 = G__23767;
count__23744_23756 = G__23768;
i__23745_23757 = G__23769;
continue;
} else {
var f_23770 = cljs.core.first.call(null,seq__23742_23764__$1);
cljs.core.println.call(null,"  ",f_23770);

var G__23771 = cljs.core.next.call(null,seq__23742_23764__$1);
var G__23772 = null;
var G__23773 = (0);
var G__23774 = (0);
seq__23742_23754 = G__23771;
chunk__23743_23755 = G__23772;
count__23744_23756 = G__23773;
i__23745_23757 = G__23774;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23775 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16069__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23775);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23775)))?cljs.core.second.call(null,arglists_23775):arglists_23775));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23746 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23747 = null;
var count__23748 = (0);
var i__23749 = (0);
while(true){
if((i__23749 < count__23748)){
var vec__23750 = cljs.core._nth.call(null,chunk__23747,i__23749);
var name = cljs.core.nth.call(null,vec__23750,(0),null);
var map__23751 = cljs.core.nth.call(null,vec__23750,(1),null);
var map__23751__$1 = ((cljs.core.seq_QMARK_.call(null,map__23751))?cljs.core.apply.call(null,cljs.core.hash_map,map__23751):map__23751);
var doc = cljs.core.get.call(null,map__23751__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23751__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23776 = seq__23746;
var G__23777 = chunk__23747;
var G__23778 = count__23748;
var G__23779 = (i__23749 + (1));
seq__23746 = G__23776;
chunk__23747 = G__23777;
count__23748 = G__23778;
i__23749 = G__23779;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23746);
if(temp__4425__auto__){
var seq__23746__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23746__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__23746__$1);
var G__23780 = cljs.core.chunk_rest.call(null,seq__23746__$1);
var G__23781 = c__16854__auto__;
var G__23782 = cljs.core.count.call(null,c__16854__auto__);
var G__23783 = (0);
seq__23746 = G__23780;
chunk__23747 = G__23781;
count__23748 = G__23782;
i__23749 = G__23783;
continue;
} else {
var vec__23752 = cljs.core.first.call(null,seq__23746__$1);
var name = cljs.core.nth.call(null,vec__23752,(0),null);
var map__23753 = cljs.core.nth.call(null,vec__23752,(1),null);
var map__23753__$1 = ((cljs.core.seq_QMARK_.call(null,map__23753))?cljs.core.apply.call(null,cljs.core.hash_map,map__23753):map__23753);
var doc = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23784 = cljs.core.next.call(null,seq__23746__$1);
var G__23785 = null;
var G__23786 = (0);
var G__23787 = (0);
seq__23746 = G__23784;
chunk__23747 = G__23785;
count__23748 = G__23786;
i__23749 = G__23787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1436696510002
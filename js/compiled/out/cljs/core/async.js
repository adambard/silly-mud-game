// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24503 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24503 = (function (fn_handler,f,meta24504){
this.fn_handler = fn_handler;
this.f = f;
this.meta24504 = meta24504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24505,meta24504__$1){
var self__ = this;
var _24505__$1 = this;
return (new cljs.core.async.t24503(self__.fn_handler,self__.f,meta24504__$1));
});

cljs.core.async.t24503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24505){
var self__ = this;
var _24505__$1 = this;
return self__.meta24504;
});

cljs.core.async.t24503.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24504","meta24504",1505794464,null)], null);
});

cljs.core.async.t24503.cljs$lang$type = true;

cljs.core.async.t24503.cljs$lang$ctorStr = "cljs.core.async/t24503";

cljs.core.async.t24503.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24503");
});

cljs.core.async.__GT_t24503 = (function cljs$core$async$fn_handler_$___GT_t24503(fn_handler__$1,f__$1,meta24504){
return (new cljs.core.async.t24503(fn_handler__$1,f__$1,meta24504));
});

}

return (new cljs.core.async.t24503(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24507 = buff;
if(G__24507){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__24507.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24507.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24507);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__24509 = arguments.length;
switch (G__24509) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__24512 = arguments.length;
switch (G__24512) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24514 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24514);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24514,ret){
return (function (){
return fn1.call(null,val_24514);
});})(val_24514,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__24516 = arguments.length;
switch (G__24516) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16954__auto___24518 = n;
var x_24519 = (0);
while(true){
if((x_24519 < n__16954__auto___24518)){
(a[x_24519] = (0));

var G__24520 = (x_24519 + (1));
x_24519 = G__24520;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24521 = (i + (1));
i = G__24521;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24525 = (function (alt_flag,flag,meta24526){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24526 = meta24526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24527,meta24526__$1){
var self__ = this;
var _24527__$1 = this;
return (new cljs.core.async.t24525(self__.alt_flag,self__.flag,meta24526__$1));
});})(flag))
;

cljs.core.async.t24525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24527){
var self__ = this;
var _24527__$1 = this;
return self__.meta24526;
});})(flag))
;

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24525.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24526","meta24526",25473826,null)], null);
});})(flag))
;

cljs.core.async.t24525.cljs$lang$type = true;

cljs.core.async.t24525.cljs$lang$ctorStr = "cljs.core.async/t24525";

cljs.core.async.t24525.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24525");
});})(flag))
;

cljs.core.async.__GT_t24525 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24525(alt_flag__$1,flag__$1,meta24526){
return (new cljs.core.async.t24525(alt_flag__$1,flag__$1,meta24526));
});})(flag))
;

}

return (new cljs.core.async.t24525(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24531 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24531 = (function (alt_handler,flag,cb,meta24532){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24532 = meta24532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24533,meta24532__$1){
var self__ = this;
var _24533__$1 = this;
return (new cljs.core.async.t24531(self__.alt_handler,self__.flag,self__.cb,meta24532__$1));
});

cljs.core.async.t24531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24533){
var self__ = this;
var _24533__$1 = this;
return self__.meta24532;
});

cljs.core.async.t24531.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24532","meta24532",1301154882,null)], null);
});

cljs.core.async.t24531.cljs$lang$type = true;

cljs.core.async.t24531.cljs$lang$ctorStr = "cljs.core.async/t24531";

cljs.core.async.t24531.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t24531");
});

cljs.core.async.__GT_t24531 = (function cljs$core$async$alt_handler_$___GT_t24531(alt_handler__$1,flag__$1,cb__$1,meta24532){
return (new cljs.core.async.t24531(alt_handler__$1,flag__$1,cb__$1,meta24532));
});

}

return (new cljs.core.async.t24531(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24534_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24534_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24535_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24535_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16069__auto__ = wport;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24536 = (i + (1));
i = G__24536;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16069__auto__ = ret;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16057__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16057__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24539){
var map__24540 = p__24539;
var map__24540__$1 = ((cljs.core.seq_QMARK_.call(null,map__24540))?cljs.core.apply.call(null,cljs.core.hash_map,map__24540):map__24540);
var opts = map__24540__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24537){
var G__24538 = cljs.core.first.call(null,seq24537);
var seq24537__$1 = cljs.core.next.call(null,seq24537);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24538,seq24537__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__24542 = arguments.length;
switch (G__24542) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19079__auto___24591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___24591){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___24591){
return (function (state_24566){
var state_val_24567 = (state_24566[(1)]);
if((state_val_24567 === (7))){
var inst_24562 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24568_24592 = state_24566__$1;
(statearr_24568_24592[(2)] = inst_24562);

(statearr_24568_24592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (1))){
var state_24566__$1 = state_24566;
var statearr_24569_24593 = state_24566__$1;
(statearr_24569_24593[(2)] = null);

(statearr_24569_24593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (4))){
var inst_24545 = (state_24566[(7)]);
var inst_24545__$1 = (state_24566[(2)]);
var inst_24546 = (inst_24545__$1 == null);
var state_24566__$1 = (function (){var statearr_24570 = state_24566;
(statearr_24570[(7)] = inst_24545__$1);

return statearr_24570;
})();
if(cljs.core.truth_(inst_24546)){
var statearr_24571_24594 = state_24566__$1;
(statearr_24571_24594[(1)] = (5));

} else {
var statearr_24572_24595 = state_24566__$1;
(statearr_24572_24595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (13))){
var state_24566__$1 = state_24566;
var statearr_24573_24596 = state_24566__$1;
(statearr_24573_24596[(2)] = null);

(statearr_24573_24596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (6))){
var inst_24545 = (state_24566[(7)]);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24566__$1,(11),to,inst_24545);
} else {
if((state_val_24567 === (3))){
var inst_24564 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24566__$1,inst_24564);
} else {
if((state_val_24567 === (12))){
var state_24566__$1 = state_24566;
var statearr_24574_24597 = state_24566__$1;
(statearr_24574_24597[(2)] = null);

(statearr_24574_24597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (2))){
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24566__$1,(4),from);
} else {
if((state_val_24567 === (11))){
var inst_24555 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
if(cljs.core.truth_(inst_24555)){
var statearr_24575_24598 = state_24566__$1;
(statearr_24575_24598[(1)] = (12));

} else {
var statearr_24576_24599 = state_24566__$1;
(statearr_24576_24599[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (9))){
var state_24566__$1 = state_24566;
var statearr_24577_24600 = state_24566__$1;
(statearr_24577_24600[(2)] = null);

(statearr_24577_24600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (5))){
var state_24566__$1 = state_24566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24578_24601 = state_24566__$1;
(statearr_24578_24601[(1)] = (8));

} else {
var statearr_24579_24602 = state_24566__$1;
(statearr_24579_24602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (14))){
var inst_24560 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24580_24603 = state_24566__$1;
(statearr_24580_24603[(2)] = inst_24560);

(statearr_24580_24603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (10))){
var inst_24552 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24581_24604 = state_24566__$1;
(statearr_24581_24604[(2)] = inst_24552);

(statearr_24581_24604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (8))){
var inst_24549 = cljs.core.async.close_BANG_.call(null,to);
var state_24566__$1 = state_24566;
var statearr_24582_24605 = state_24566__$1;
(statearr_24582_24605[(2)] = inst_24549);

(statearr_24582_24605[(1)] = (10));


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
});})(c__19079__auto___24591))
;
return ((function (switch__19017__auto__,c__19079__auto___24591){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_24586 = [null,null,null,null,null,null,null,null];
(statearr_24586[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_24586[(1)] = (1));

return statearr_24586;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_24566){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24587){if((e24587 instanceof Object)){
var ex__19021__auto__ = e24587;
var statearr_24588_24606 = state_24566;
(statearr_24588_24606[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24607 = state_24566;
state_24566 = G__24607;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_24566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_24566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___24591))
})();
var state__19081__auto__ = (function (){var statearr_24589 = f__19080__auto__.call(null);
(statearr_24589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___24591);

return statearr_24589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___24591))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24791){
var vec__24792 = p__24791;
var v = cljs.core.nth.call(null,vec__24792,(0),null);
var p = cljs.core.nth.call(null,vec__24792,(1),null);
var job = vec__24792;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19079__auto___24974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___24974,res,vec__24792,v,p,job,jobs,results){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___24974,res,vec__24792,v,p,job,jobs,results){
return (function (state_24797){
var state_val_24798 = (state_24797[(1)]);
if((state_val_24798 === (1))){
var state_24797__$1 = state_24797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24797__$1,(2),res,v);
} else {
if((state_val_24798 === (2))){
var inst_24794 = (state_24797[(2)]);
var inst_24795 = cljs.core.async.close_BANG_.call(null,res);
var state_24797__$1 = (function (){var statearr_24799 = state_24797;
(statearr_24799[(7)] = inst_24794);

return statearr_24799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24797__$1,inst_24795);
} else {
return null;
}
}
});})(c__19079__auto___24974,res,vec__24792,v,p,job,jobs,results))
;
return ((function (switch__19017__auto__,c__19079__auto___24974,res,vec__24792,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_24803 = [null,null,null,null,null,null,null,null];
(statearr_24803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_24803[(1)] = (1));

return statearr_24803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_24797){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24804){if((e24804 instanceof Object)){
var ex__19021__auto__ = e24804;
var statearr_24805_24975 = state_24797;
(statearr_24805_24975[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24976 = state_24797;
state_24797 = G__24976;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_24797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_24797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___24974,res,vec__24792,v,p,job,jobs,results))
})();
var state__19081__auto__ = (function (){var statearr_24806 = f__19080__auto__.call(null);
(statearr_24806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___24974);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___24974,res,vec__24792,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24807){
var vec__24808 = p__24807;
var v = cljs.core.nth.call(null,vec__24808,(0),null);
var p = cljs.core.nth.call(null,vec__24808,(1),null);
var job = vec__24808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16954__auto___24977 = n;
var __24978 = (0);
while(true){
if((__24978 < n__16954__auto___24977)){
var G__24809_24979 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24809_24979) {
case "compute":
var c__19079__auto___24981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24978,c__19079__auto___24981,G__24809_24979,n__16954__auto___24977,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (__24978,c__19079__auto___24981,G__24809_24979,n__16954__auto___24977,jobs,results,process,async){
return (function (state_24822){
var state_val_24823 = (state_24822[(1)]);
if((state_val_24823 === (1))){
var state_24822__$1 = state_24822;
var statearr_24824_24982 = state_24822__$1;
(statearr_24824_24982[(2)] = null);

(statearr_24824_24982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (2))){
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24822__$1,(4),jobs);
} else {
if((state_val_24823 === (3))){
var inst_24820 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24822__$1,inst_24820);
} else {
if((state_val_24823 === (4))){
var inst_24812 = (state_24822[(2)]);
var inst_24813 = process.call(null,inst_24812);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24813)){
var statearr_24825_24983 = state_24822__$1;
(statearr_24825_24983[(1)] = (5));

} else {
var statearr_24826_24984 = state_24822__$1;
(statearr_24826_24984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (5))){
var state_24822__$1 = state_24822;
var statearr_24827_24985 = state_24822__$1;
(statearr_24827_24985[(2)] = null);

(statearr_24827_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (6))){
var state_24822__$1 = state_24822;
var statearr_24828_24986 = state_24822__$1;
(statearr_24828_24986[(2)] = null);

(statearr_24828_24986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (7))){
var inst_24818 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24829_24987 = state_24822__$1;
(statearr_24829_24987[(2)] = inst_24818);

(statearr_24829_24987[(1)] = (3));


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
});})(__24978,c__19079__auto___24981,G__24809_24979,n__16954__auto___24977,jobs,results,process,async))
;
return ((function (__24978,switch__19017__auto__,c__19079__auto___24981,G__24809_24979,n__16954__auto___24977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_24833 = [null,null,null,null,null,null,null];
(statearr_24833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_24833[(1)] = (1));

return statearr_24833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_24822){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24834){if((e24834 instanceof Object)){
var ex__19021__auto__ = e24834;
var statearr_24835_24988 = state_24822;
(statearr_24835_24988[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24989 = state_24822;
state_24822 = G__24989;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_24822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_24822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(__24978,switch__19017__auto__,c__19079__auto___24981,G__24809_24979,n__16954__auto___24977,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_24836 = f__19080__auto__.call(null);
(statearr_24836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___24981);

return statearr_24836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(__24978,c__19079__auto___24981,G__24809_24979,n__16954__auto___24977,jobs,results,process,async))
);


break;
case "async":
var c__19079__auto___24990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24978,c__19079__auto___24990,G__24809_24979,n__16954__auto___24977,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (__24978,c__19079__auto___24990,G__24809_24979,n__16954__auto___24977,jobs,results,process,async){
return (function (state_24849){
var state_val_24850 = (state_24849[(1)]);
if((state_val_24850 === (1))){
var state_24849__$1 = state_24849;
var statearr_24851_24991 = state_24849__$1;
(statearr_24851_24991[(2)] = null);

(statearr_24851_24991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (2))){
var state_24849__$1 = state_24849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24849__$1,(4),jobs);
} else {
if((state_val_24850 === (3))){
var inst_24847 = (state_24849[(2)]);
var state_24849__$1 = state_24849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24849__$1,inst_24847);
} else {
if((state_val_24850 === (4))){
var inst_24839 = (state_24849[(2)]);
var inst_24840 = async.call(null,inst_24839);
var state_24849__$1 = state_24849;
if(cljs.core.truth_(inst_24840)){
var statearr_24852_24992 = state_24849__$1;
(statearr_24852_24992[(1)] = (5));

} else {
var statearr_24853_24993 = state_24849__$1;
(statearr_24853_24993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (5))){
var state_24849__$1 = state_24849;
var statearr_24854_24994 = state_24849__$1;
(statearr_24854_24994[(2)] = null);

(statearr_24854_24994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (6))){
var state_24849__$1 = state_24849;
var statearr_24855_24995 = state_24849__$1;
(statearr_24855_24995[(2)] = null);

(statearr_24855_24995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (7))){
var inst_24845 = (state_24849[(2)]);
var state_24849__$1 = state_24849;
var statearr_24856_24996 = state_24849__$1;
(statearr_24856_24996[(2)] = inst_24845);

(statearr_24856_24996[(1)] = (3));


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
});})(__24978,c__19079__auto___24990,G__24809_24979,n__16954__auto___24977,jobs,results,process,async))
;
return ((function (__24978,switch__19017__auto__,c__19079__auto___24990,G__24809_24979,n__16954__auto___24977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_24860 = [null,null,null,null,null,null,null];
(statearr_24860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_24860[(1)] = (1));

return statearr_24860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_24849){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24861){if((e24861 instanceof Object)){
var ex__19021__auto__ = e24861;
var statearr_24862_24997 = state_24849;
(statearr_24862_24997[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24849;
state_24849 = G__24998;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_24849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_24849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(__24978,switch__19017__auto__,c__19079__auto___24990,G__24809_24979,n__16954__auto___24977,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_24863 = f__19080__auto__.call(null);
(statearr_24863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___24990);

return statearr_24863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(__24978,c__19079__auto___24990,G__24809_24979,n__16954__auto___24977,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24999 = (__24978 + (1));
__24978 = G__24999;
continue;
} else {
}
break;
}

var c__19079__auto___25000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___25000,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___25000,jobs,results,process,async){
return (function (state_24885){
var state_val_24886 = (state_24885[(1)]);
if((state_val_24886 === (1))){
var state_24885__$1 = state_24885;
var statearr_24887_25001 = state_24885__$1;
(statearr_24887_25001[(2)] = null);

(statearr_24887_25001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (2))){
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24885__$1,(4),from);
} else {
if((state_val_24886 === (3))){
var inst_24883 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24885__$1,inst_24883);
} else {
if((state_val_24886 === (4))){
var inst_24866 = (state_24885[(7)]);
var inst_24866__$1 = (state_24885[(2)]);
var inst_24867 = (inst_24866__$1 == null);
var state_24885__$1 = (function (){var statearr_24888 = state_24885;
(statearr_24888[(7)] = inst_24866__$1);

return statearr_24888;
})();
if(cljs.core.truth_(inst_24867)){
var statearr_24889_25002 = state_24885__$1;
(statearr_24889_25002[(1)] = (5));

} else {
var statearr_24890_25003 = state_24885__$1;
(statearr_24890_25003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (5))){
var inst_24869 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24885__$1 = state_24885;
var statearr_24891_25004 = state_24885__$1;
(statearr_24891_25004[(2)] = inst_24869);

(statearr_24891_25004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (6))){
var inst_24866 = (state_24885[(7)]);
var inst_24871 = (state_24885[(8)]);
var inst_24871__$1 = cljs.core.async.chan.call(null,(1));
var inst_24872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24873 = [inst_24866,inst_24871__$1];
var inst_24874 = (new cljs.core.PersistentVector(null,2,(5),inst_24872,inst_24873,null));
var state_24885__$1 = (function (){var statearr_24892 = state_24885;
(statearr_24892[(8)] = inst_24871__$1);

return statearr_24892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24885__$1,(8),jobs,inst_24874);
} else {
if((state_val_24886 === (7))){
var inst_24881 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24893_25005 = state_24885__$1;
(statearr_24893_25005[(2)] = inst_24881);

(statearr_24893_25005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (8))){
var inst_24871 = (state_24885[(8)]);
var inst_24876 = (state_24885[(2)]);
var state_24885__$1 = (function (){var statearr_24894 = state_24885;
(statearr_24894[(9)] = inst_24876);

return statearr_24894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24885__$1,(9),results,inst_24871);
} else {
if((state_val_24886 === (9))){
var inst_24878 = (state_24885[(2)]);
var state_24885__$1 = (function (){var statearr_24895 = state_24885;
(statearr_24895[(10)] = inst_24878);

return statearr_24895;
})();
var statearr_24896_25006 = state_24885__$1;
(statearr_24896_25006[(2)] = null);

(statearr_24896_25006[(1)] = (2));


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
});})(c__19079__auto___25000,jobs,results,process,async))
;
return ((function (switch__19017__auto__,c__19079__auto___25000,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_24900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_24900[(1)] = (1));

return statearr_24900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_24885){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24901){if((e24901 instanceof Object)){
var ex__19021__auto__ = e24901;
var statearr_24902_25007 = state_24885;
(statearr_24902_25007[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25008 = state_24885;
state_24885 = G__25008;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_24885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_24885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___25000,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_24903 = f__19080__auto__.call(null);
(statearr_24903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___25000);

return statearr_24903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___25000,jobs,results,process,async))
);


var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,jobs,results,process,async){
return (function (state_24941){
var state_val_24942 = (state_24941[(1)]);
if((state_val_24942 === (7))){
var inst_24937 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24943_25009 = state_24941__$1;
(statearr_24943_25009[(2)] = inst_24937);

(statearr_24943_25009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (20))){
var state_24941__$1 = state_24941;
var statearr_24944_25010 = state_24941__$1;
(statearr_24944_25010[(2)] = null);

(statearr_24944_25010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (1))){
var state_24941__$1 = state_24941;
var statearr_24945_25011 = state_24941__$1;
(statearr_24945_25011[(2)] = null);

(statearr_24945_25011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (4))){
var inst_24906 = (state_24941[(7)]);
var inst_24906__$1 = (state_24941[(2)]);
var inst_24907 = (inst_24906__$1 == null);
var state_24941__$1 = (function (){var statearr_24946 = state_24941;
(statearr_24946[(7)] = inst_24906__$1);

return statearr_24946;
})();
if(cljs.core.truth_(inst_24907)){
var statearr_24947_25012 = state_24941__$1;
(statearr_24947_25012[(1)] = (5));

} else {
var statearr_24948_25013 = state_24941__$1;
(statearr_24948_25013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (15))){
var inst_24919 = (state_24941[(8)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(18),to,inst_24919);
} else {
if((state_val_24942 === (21))){
var inst_24932 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24949_25014 = state_24941__$1;
(statearr_24949_25014[(2)] = inst_24932);

(statearr_24949_25014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (13))){
var inst_24934 = (state_24941[(2)]);
var state_24941__$1 = (function (){var statearr_24950 = state_24941;
(statearr_24950[(9)] = inst_24934);

return statearr_24950;
})();
var statearr_24951_25015 = state_24941__$1;
(statearr_24951_25015[(2)] = null);

(statearr_24951_25015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (6))){
var inst_24906 = (state_24941[(7)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(11),inst_24906);
} else {
if((state_val_24942 === (17))){
var inst_24927 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
if(cljs.core.truth_(inst_24927)){
var statearr_24952_25016 = state_24941__$1;
(statearr_24952_25016[(1)] = (19));

} else {
var statearr_24953_25017 = state_24941__$1;
(statearr_24953_25017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (3))){
var inst_24939 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24941__$1,inst_24939);
} else {
if((state_val_24942 === (12))){
var inst_24916 = (state_24941[(10)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(14),inst_24916);
} else {
if((state_val_24942 === (2))){
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(4),results);
} else {
if((state_val_24942 === (19))){
var state_24941__$1 = state_24941;
var statearr_24954_25018 = state_24941__$1;
(statearr_24954_25018[(2)] = null);

(statearr_24954_25018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (11))){
var inst_24916 = (state_24941[(2)]);
var state_24941__$1 = (function (){var statearr_24955 = state_24941;
(statearr_24955[(10)] = inst_24916);

return statearr_24955;
})();
var statearr_24956_25019 = state_24941__$1;
(statearr_24956_25019[(2)] = null);

(statearr_24956_25019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (9))){
var state_24941__$1 = state_24941;
var statearr_24957_25020 = state_24941__$1;
(statearr_24957_25020[(2)] = null);

(statearr_24957_25020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (5))){
var state_24941__$1 = state_24941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24958_25021 = state_24941__$1;
(statearr_24958_25021[(1)] = (8));

} else {
var statearr_24959_25022 = state_24941__$1;
(statearr_24959_25022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (14))){
var inst_24919 = (state_24941[(8)]);
var inst_24921 = (state_24941[(11)]);
var inst_24919__$1 = (state_24941[(2)]);
var inst_24920 = (inst_24919__$1 == null);
var inst_24921__$1 = cljs.core.not.call(null,inst_24920);
var state_24941__$1 = (function (){var statearr_24960 = state_24941;
(statearr_24960[(8)] = inst_24919__$1);

(statearr_24960[(11)] = inst_24921__$1);

return statearr_24960;
})();
if(inst_24921__$1){
var statearr_24961_25023 = state_24941__$1;
(statearr_24961_25023[(1)] = (15));

} else {
var statearr_24962_25024 = state_24941__$1;
(statearr_24962_25024[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (16))){
var inst_24921 = (state_24941[(11)]);
var state_24941__$1 = state_24941;
var statearr_24963_25025 = state_24941__$1;
(statearr_24963_25025[(2)] = inst_24921);

(statearr_24963_25025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (10))){
var inst_24913 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24964_25026 = state_24941__$1;
(statearr_24964_25026[(2)] = inst_24913);

(statearr_24964_25026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (18))){
var inst_24924 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24965_25027 = state_24941__$1;
(statearr_24965_25027[(2)] = inst_24924);

(statearr_24965_25027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (8))){
var inst_24910 = cljs.core.async.close_BANG_.call(null,to);
var state_24941__$1 = state_24941;
var statearr_24966_25028 = state_24941__$1;
(statearr_24966_25028[(2)] = inst_24910);

(statearr_24966_25028[(1)] = (10));


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
});})(c__19079__auto__,jobs,results,process,async))
;
return ((function (switch__19017__auto__,c__19079__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_24970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_24970[(1)] = (1));

return statearr_24970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_24941){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24971){if((e24971 instanceof Object)){
var ex__19021__auto__ = e24971;
var statearr_24972_25029 = state_24941;
(statearr_24972_25029[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25030 = state_24941;
state_24941 = G__25030;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_24941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_24941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_24973 = f__19080__auto__.call(null);
(statearr_24973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_24973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,jobs,results,process,async))
);

return c__19079__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__25032 = arguments.length;
switch (G__25032) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__25035 = arguments.length;
switch (G__25035) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__25038 = arguments.length;
switch (G__25038) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19079__auto___25090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___25090,tc,fc){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___25090,tc,fc){
return (function (state_25064){
var state_val_25065 = (state_25064[(1)]);
if((state_val_25065 === (7))){
var inst_25060 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
var statearr_25066_25091 = state_25064__$1;
(statearr_25066_25091[(2)] = inst_25060);

(statearr_25066_25091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (1))){
var state_25064__$1 = state_25064;
var statearr_25067_25092 = state_25064__$1;
(statearr_25067_25092[(2)] = null);

(statearr_25067_25092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (4))){
var inst_25041 = (state_25064[(7)]);
var inst_25041__$1 = (state_25064[(2)]);
var inst_25042 = (inst_25041__$1 == null);
var state_25064__$1 = (function (){var statearr_25068 = state_25064;
(statearr_25068[(7)] = inst_25041__$1);

return statearr_25068;
})();
if(cljs.core.truth_(inst_25042)){
var statearr_25069_25093 = state_25064__$1;
(statearr_25069_25093[(1)] = (5));

} else {
var statearr_25070_25094 = state_25064__$1;
(statearr_25070_25094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (13))){
var state_25064__$1 = state_25064;
var statearr_25071_25095 = state_25064__$1;
(statearr_25071_25095[(2)] = null);

(statearr_25071_25095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (6))){
var inst_25041 = (state_25064[(7)]);
var inst_25047 = p.call(null,inst_25041);
var state_25064__$1 = state_25064;
if(cljs.core.truth_(inst_25047)){
var statearr_25072_25096 = state_25064__$1;
(statearr_25072_25096[(1)] = (9));

} else {
var statearr_25073_25097 = state_25064__$1;
(statearr_25073_25097[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (3))){
var inst_25062 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25064__$1,inst_25062);
} else {
if((state_val_25065 === (12))){
var state_25064__$1 = state_25064;
var statearr_25074_25098 = state_25064__$1;
(statearr_25074_25098[(2)] = null);

(statearr_25074_25098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (2))){
var state_25064__$1 = state_25064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25064__$1,(4),ch);
} else {
if((state_val_25065 === (11))){
var inst_25041 = (state_25064[(7)]);
var inst_25051 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25064__$1,(8),inst_25051,inst_25041);
} else {
if((state_val_25065 === (9))){
var state_25064__$1 = state_25064;
var statearr_25075_25099 = state_25064__$1;
(statearr_25075_25099[(2)] = tc);

(statearr_25075_25099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (5))){
var inst_25044 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25045 = cljs.core.async.close_BANG_.call(null,fc);
var state_25064__$1 = (function (){var statearr_25076 = state_25064;
(statearr_25076[(8)] = inst_25044);

return statearr_25076;
})();
var statearr_25077_25100 = state_25064__$1;
(statearr_25077_25100[(2)] = inst_25045);

(statearr_25077_25100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (14))){
var inst_25058 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
var statearr_25078_25101 = state_25064__$1;
(statearr_25078_25101[(2)] = inst_25058);

(statearr_25078_25101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (10))){
var state_25064__$1 = state_25064;
var statearr_25079_25102 = state_25064__$1;
(statearr_25079_25102[(2)] = fc);

(statearr_25079_25102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (8))){
var inst_25053 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
if(cljs.core.truth_(inst_25053)){
var statearr_25080_25103 = state_25064__$1;
(statearr_25080_25103[(1)] = (12));

} else {
var statearr_25081_25104 = state_25064__$1;
(statearr_25081_25104[(1)] = (13));

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
});})(c__19079__auto___25090,tc,fc))
;
return ((function (switch__19017__auto__,c__19079__auto___25090,tc,fc){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_25085 = [null,null,null,null,null,null,null,null,null];
(statearr_25085[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_25085[(1)] = (1));

return statearr_25085;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_25064){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25086){if((e25086 instanceof Object)){
var ex__19021__auto__ = e25086;
var statearr_25087_25105 = state_25064;
(statearr_25087_25105[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25106 = state_25064;
state_25064 = G__25106;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_25064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_25064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___25090,tc,fc))
})();
var state__19081__auto__ = (function (){var statearr_25088 = f__19080__auto__.call(null);
(statearr_25088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___25090);

return statearr_25088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___25090,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_25153){
var state_val_25154 = (state_25153[(1)]);
if((state_val_25154 === (1))){
var inst_25139 = init;
var state_25153__$1 = (function (){var statearr_25155 = state_25153;
(statearr_25155[(7)] = inst_25139);

return statearr_25155;
})();
var statearr_25156_25171 = state_25153__$1;
(statearr_25156_25171[(2)] = null);

(statearr_25156_25171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (2))){
var state_25153__$1 = state_25153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25153__$1,(4),ch);
} else {
if((state_val_25154 === (3))){
var inst_25151 = (state_25153[(2)]);
var state_25153__$1 = state_25153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25153__$1,inst_25151);
} else {
if((state_val_25154 === (4))){
var inst_25142 = (state_25153[(8)]);
var inst_25142__$1 = (state_25153[(2)]);
var inst_25143 = (inst_25142__$1 == null);
var state_25153__$1 = (function (){var statearr_25157 = state_25153;
(statearr_25157[(8)] = inst_25142__$1);

return statearr_25157;
})();
if(cljs.core.truth_(inst_25143)){
var statearr_25158_25172 = state_25153__$1;
(statearr_25158_25172[(1)] = (5));

} else {
var statearr_25159_25173 = state_25153__$1;
(statearr_25159_25173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (5))){
var inst_25139 = (state_25153[(7)]);
var state_25153__$1 = state_25153;
var statearr_25160_25174 = state_25153__$1;
(statearr_25160_25174[(2)] = inst_25139);

(statearr_25160_25174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (6))){
var inst_25139 = (state_25153[(7)]);
var inst_25142 = (state_25153[(8)]);
var inst_25146 = f.call(null,inst_25139,inst_25142);
var inst_25139__$1 = inst_25146;
var state_25153__$1 = (function (){var statearr_25161 = state_25153;
(statearr_25161[(7)] = inst_25139__$1);

return statearr_25161;
})();
var statearr_25162_25175 = state_25153__$1;
(statearr_25162_25175[(2)] = null);

(statearr_25162_25175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (7))){
var inst_25149 = (state_25153[(2)]);
var state_25153__$1 = state_25153;
var statearr_25163_25176 = state_25153__$1;
(statearr_25163_25176[(2)] = inst_25149);

(statearr_25163_25176[(1)] = (3));


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
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19018__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19018__auto____0 = (function (){
var statearr_25167 = [null,null,null,null,null,null,null,null,null];
(statearr_25167[(0)] = cljs$core$async$reduce_$_state_machine__19018__auto__);

(statearr_25167[(1)] = (1));

return statearr_25167;
});
var cljs$core$async$reduce_$_state_machine__19018__auto____1 = (function (state_25153){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25168){if((e25168 instanceof Object)){
var ex__19021__auto__ = e25168;
var statearr_25169_25177 = state_25153;
(statearr_25169_25177[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25178 = state_25153;
state_25153 = G__25178;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19018__auto__ = function(state_25153){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19018__auto____1.call(this,state_25153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19018__auto____0;
cljs$core$async$reduce_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19018__auto____1;
return cljs$core$async$reduce_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_25170 = f__19080__auto__.call(null);
(statearr_25170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_25170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__25180 = arguments.length;
switch (G__25180) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_25205){
var state_val_25206 = (state_25205[(1)]);
if((state_val_25206 === (7))){
var inst_25187 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25207_25231 = state_25205__$1;
(statearr_25207_25231[(2)] = inst_25187);

(statearr_25207_25231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (1))){
var inst_25181 = cljs.core.seq.call(null,coll);
var inst_25182 = inst_25181;
var state_25205__$1 = (function (){var statearr_25208 = state_25205;
(statearr_25208[(7)] = inst_25182);

return statearr_25208;
})();
var statearr_25209_25232 = state_25205__$1;
(statearr_25209_25232[(2)] = null);

(statearr_25209_25232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (4))){
var inst_25182 = (state_25205[(7)]);
var inst_25185 = cljs.core.first.call(null,inst_25182);
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25205__$1,(7),ch,inst_25185);
} else {
if((state_val_25206 === (13))){
var inst_25199 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25210_25233 = state_25205__$1;
(statearr_25210_25233[(2)] = inst_25199);

(statearr_25210_25233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (6))){
var inst_25190 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
if(cljs.core.truth_(inst_25190)){
var statearr_25211_25234 = state_25205__$1;
(statearr_25211_25234[(1)] = (8));

} else {
var statearr_25212_25235 = state_25205__$1;
(statearr_25212_25235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (3))){
var inst_25203 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25205__$1,inst_25203);
} else {
if((state_val_25206 === (12))){
var state_25205__$1 = state_25205;
var statearr_25213_25236 = state_25205__$1;
(statearr_25213_25236[(2)] = null);

(statearr_25213_25236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (2))){
var inst_25182 = (state_25205[(7)]);
var state_25205__$1 = state_25205;
if(cljs.core.truth_(inst_25182)){
var statearr_25214_25237 = state_25205__$1;
(statearr_25214_25237[(1)] = (4));

} else {
var statearr_25215_25238 = state_25205__$1;
(statearr_25215_25238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (11))){
var inst_25196 = cljs.core.async.close_BANG_.call(null,ch);
var state_25205__$1 = state_25205;
var statearr_25216_25239 = state_25205__$1;
(statearr_25216_25239[(2)] = inst_25196);

(statearr_25216_25239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (9))){
var state_25205__$1 = state_25205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25217_25240 = state_25205__$1;
(statearr_25217_25240[(1)] = (11));

} else {
var statearr_25218_25241 = state_25205__$1;
(statearr_25218_25241[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (5))){
var inst_25182 = (state_25205[(7)]);
var state_25205__$1 = state_25205;
var statearr_25219_25242 = state_25205__$1;
(statearr_25219_25242[(2)] = inst_25182);

(statearr_25219_25242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (10))){
var inst_25201 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25220_25243 = state_25205__$1;
(statearr_25220_25243[(2)] = inst_25201);

(statearr_25220_25243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (8))){
var inst_25182 = (state_25205[(7)]);
var inst_25192 = cljs.core.next.call(null,inst_25182);
var inst_25182__$1 = inst_25192;
var state_25205__$1 = (function (){var statearr_25221 = state_25205;
(statearr_25221[(7)] = inst_25182__$1);

return statearr_25221;
})();
var statearr_25222_25244 = state_25205__$1;
(statearr_25222_25244[(2)] = null);

(statearr_25222_25244[(1)] = (2));


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
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null,null];
(statearr_25226[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_25205){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__19021__auto__ = e25227;
var statearr_25228_25245 = state_25205;
(statearr_25228_25245[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25246 = state_25205;
state_25205 = G__25246;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_25205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_25205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_25229 = f__19080__auto__.call(null);
(statearr_25229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25248 = {};
return obj25248;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16057__auto__ = _;
if(and__16057__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16705__auto__ = (((_ == null))?null:_);
return (function (){var or__16069__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25250 = {};
return obj25250;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25472 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25472 = (function (mult,ch,cs,meta25473){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25473 = meta25473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25474,meta25473__$1){
var self__ = this;
var _25474__$1 = this;
return (new cljs.core.async.t25472(self__.mult,self__.ch,self__.cs,meta25473__$1));
});})(cs))
;

cljs.core.async.t25472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25474){
var self__ = this;
var _25474__$1 = this;
return self__.meta25473;
});})(cs))
;

cljs.core.async.t25472.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25472.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25472.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25472.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25472.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25472.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25473","meta25473",1971538571,null)], null);
});})(cs))
;

cljs.core.async.t25472.cljs$lang$type = true;

cljs.core.async.t25472.cljs$lang$ctorStr = "cljs.core.async/t25472";

cljs.core.async.t25472.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t25472");
});})(cs))
;

cljs.core.async.__GT_t25472 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25472(mult__$1,ch__$1,cs__$1,meta25473){
return (new cljs.core.async.t25472(mult__$1,ch__$1,cs__$1,meta25473));
});})(cs))
;

}

return (new cljs.core.async.t25472(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19079__auto___25693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___25693,cs,m,dchan,dctr,done){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___25693,cs,m,dchan,dctr,done){
return (function (state_25605){
var state_val_25606 = (state_25605[(1)]);
if((state_val_25606 === (7))){
var inst_25601 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25607_25694 = state_25605__$1;
(statearr_25607_25694[(2)] = inst_25601);

(statearr_25607_25694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (20))){
var inst_25506 = (state_25605[(7)]);
var inst_25516 = cljs.core.first.call(null,inst_25506);
var inst_25517 = cljs.core.nth.call(null,inst_25516,(0),null);
var inst_25518 = cljs.core.nth.call(null,inst_25516,(1),null);
var state_25605__$1 = (function (){var statearr_25608 = state_25605;
(statearr_25608[(8)] = inst_25517);

return statearr_25608;
})();
if(cljs.core.truth_(inst_25518)){
var statearr_25609_25695 = state_25605__$1;
(statearr_25609_25695[(1)] = (22));

} else {
var statearr_25610_25696 = state_25605__$1;
(statearr_25610_25696[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (27))){
var inst_25477 = (state_25605[(9)]);
var inst_25546 = (state_25605[(10)]);
var inst_25553 = (state_25605[(11)]);
var inst_25548 = (state_25605[(12)]);
var inst_25553__$1 = cljs.core._nth.call(null,inst_25546,inst_25548);
var inst_25554 = cljs.core.async.put_BANG_.call(null,inst_25553__$1,inst_25477,done);
var state_25605__$1 = (function (){var statearr_25611 = state_25605;
(statearr_25611[(11)] = inst_25553__$1);

return statearr_25611;
})();
if(cljs.core.truth_(inst_25554)){
var statearr_25612_25697 = state_25605__$1;
(statearr_25612_25697[(1)] = (30));

} else {
var statearr_25613_25698 = state_25605__$1;
(statearr_25613_25698[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (1))){
var state_25605__$1 = state_25605;
var statearr_25614_25699 = state_25605__$1;
(statearr_25614_25699[(2)] = null);

(statearr_25614_25699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (24))){
var inst_25506 = (state_25605[(7)]);
var inst_25523 = (state_25605[(2)]);
var inst_25524 = cljs.core.next.call(null,inst_25506);
var inst_25486 = inst_25524;
var inst_25487 = null;
var inst_25488 = (0);
var inst_25489 = (0);
var state_25605__$1 = (function (){var statearr_25615 = state_25605;
(statearr_25615[(13)] = inst_25486);

(statearr_25615[(14)] = inst_25523);

(statearr_25615[(15)] = inst_25489);

(statearr_25615[(16)] = inst_25488);

(statearr_25615[(17)] = inst_25487);

return statearr_25615;
})();
var statearr_25616_25700 = state_25605__$1;
(statearr_25616_25700[(2)] = null);

(statearr_25616_25700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (39))){
var state_25605__$1 = state_25605;
var statearr_25620_25701 = state_25605__$1;
(statearr_25620_25701[(2)] = null);

(statearr_25620_25701[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (4))){
var inst_25477 = (state_25605[(9)]);
var inst_25477__$1 = (state_25605[(2)]);
var inst_25478 = (inst_25477__$1 == null);
var state_25605__$1 = (function (){var statearr_25621 = state_25605;
(statearr_25621[(9)] = inst_25477__$1);

return statearr_25621;
})();
if(cljs.core.truth_(inst_25478)){
var statearr_25622_25702 = state_25605__$1;
(statearr_25622_25702[(1)] = (5));

} else {
var statearr_25623_25703 = state_25605__$1;
(statearr_25623_25703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (15))){
var inst_25486 = (state_25605[(13)]);
var inst_25489 = (state_25605[(15)]);
var inst_25488 = (state_25605[(16)]);
var inst_25487 = (state_25605[(17)]);
var inst_25502 = (state_25605[(2)]);
var inst_25503 = (inst_25489 + (1));
var tmp25617 = inst_25486;
var tmp25618 = inst_25488;
var tmp25619 = inst_25487;
var inst_25486__$1 = tmp25617;
var inst_25487__$1 = tmp25619;
var inst_25488__$1 = tmp25618;
var inst_25489__$1 = inst_25503;
var state_25605__$1 = (function (){var statearr_25624 = state_25605;
(statearr_25624[(18)] = inst_25502);

(statearr_25624[(13)] = inst_25486__$1);

(statearr_25624[(15)] = inst_25489__$1);

(statearr_25624[(16)] = inst_25488__$1);

(statearr_25624[(17)] = inst_25487__$1);

return statearr_25624;
})();
var statearr_25625_25704 = state_25605__$1;
(statearr_25625_25704[(2)] = null);

(statearr_25625_25704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (21))){
var inst_25527 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25629_25705 = state_25605__$1;
(statearr_25629_25705[(2)] = inst_25527);

(statearr_25629_25705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (31))){
var inst_25553 = (state_25605[(11)]);
var inst_25557 = done.call(null,null);
var inst_25558 = cljs.core.async.untap_STAR_.call(null,m,inst_25553);
var state_25605__$1 = (function (){var statearr_25630 = state_25605;
(statearr_25630[(19)] = inst_25557);

return statearr_25630;
})();
var statearr_25631_25706 = state_25605__$1;
(statearr_25631_25706[(2)] = inst_25558);

(statearr_25631_25706[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (32))){
var inst_25546 = (state_25605[(10)]);
var inst_25545 = (state_25605[(20)]);
var inst_25548 = (state_25605[(12)]);
var inst_25547 = (state_25605[(21)]);
var inst_25560 = (state_25605[(2)]);
var inst_25561 = (inst_25548 + (1));
var tmp25626 = inst_25546;
var tmp25627 = inst_25545;
var tmp25628 = inst_25547;
var inst_25545__$1 = tmp25627;
var inst_25546__$1 = tmp25626;
var inst_25547__$1 = tmp25628;
var inst_25548__$1 = inst_25561;
var state_25605__$1 = (function (){var statearr_25632 = state_25605;
(statearr_25632[(10)] = inst_25546__$1);

(statearr_25632[(20)] = inst_25545__$1);

(statearr_25632[(12)] = inst_25548__$1);

(statearr_25632[(21)] = inst_25547__$1);

(statearr_25632[(22)] = inst_25560);

return statearr_25632;
})();
var statearr_25633_25707 = state_25605__$1;
(statearr_25633_25707[(2)] = null);

(statearr_25633_25707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (40))){
var inst_25573 = (state_25605[(23)]);
var inst_25577 = done.call(null,null);
var inst_25578 = cljs.core.async.untap_STAR_.call(null,m,inst_25573);
var state_25605__$1 = (function (){var statearr_25634 = state_25605;
(statearr_25634[(24)] = inst_25577);

return statearr_25634;
})();
var statearr_25635_25708 = state_25605__$1;
(statearr_25635_25708[(2)] = inst_25578);

(statearr_25635_25708[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (33))){
var inst_25564 = (state_25605[(25)]);
var inst_25566 = cljs.core.chunked_seq_QMARK_.call(null,inst_25564);
var state_25605__$1 = state_25605;
if(inst_25566){
var statearr_25636_25709 = state_25605__$1;
(statearr_25636_25709[(1)] = (36));

} else {
var statearr_25637_25710 = state_25605__$1;
(statearr_25637_25710[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (13))){
var inst_25496 = (state_25605[(26)]);
var inst_25499 = cljs.core.async.close_BANG_.call(null,inst_25496);
var state_25605__$1 = state_25605;
var statearr_25638_25711 = state_25605__$1;
(statearr_25638_25711[(2)] = inst_25499);

(statearr_25638_25711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (22))){
var inst_25517 = (state_25605[(8)]);
var inst_25520 = cljs.core.async.close_BANG_.call(null,inst_25517);
var state_25605__$1 = state_25605;
var statearr_25639_25712 = state_25605__$1;
(statearr_25639_25712[(2)] = inst_25520);

(statearr_25639_25712[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (36))){
var inst_25564 = (state_25605[(25)]);
var inst_25568 = cljs.core.chunk_first.call(null,inst_25564);
var inst_25569 = cljs.core.chunk_rest.call(null,inst_25564);
var inst_25570 = cljs.core.count.call(null,inst_25568);
var inst_25545 = inst_25569;
var inst_25546 = inst_25568;
var inst_25547 = inst_25570;
var inst_25548 = (0);
var state_25605__$1 = (function (){var statearr_25640 = state_25605;
(statearr_25640[(10)] = inst_25546);

(statearr_25640[(20)] = inst_25545);

(statearr_25640[(12)] = inst_25548);

(statearr_25640[(21)] = inst_25547);

return statearr_25640;
})();
var statearr_25641_25713 = state_25605__$1;
(statearr_25641_25713[(2)] = null);

(statearr_25641_25713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (41))){
var inst_25564 = (state_25605[(25)]);
var inst_25580 = (state_25605[(2)]);
var inst_25581 = cljs.core.next.call(null,inst_25564);
var inst_25545 = inst_25581;
var inst_25546 = null;
var inst_25547 = (0);
var inst_25548 = (0);
var state_25605__$1 = (function (){var statearr_25642 = state_25605;
(statearr_25642[(10)] = inst_25546);

(statearr_25642[(20)] = inst_25545);

(statearr_25642[(27)] = inst_25580);

(statearr_25642[(12)] = inst_25548);

(statearr_25642[(21)] = inst_25547);

return statearr_25642;
})();
var statearr_25643_25714 = state_25605__$1;
(statearr_25643_25714[(2)] = null);

(statearr_25643_25714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (43))){
var state_25605__$1 = state_25605;
var statearr_25644_25715 = state_25605__$1;
(statearr_25644_25715[(2)] = null);

(statearr_25644_25715[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (29))){
var inst_25589 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25645_25716 = state_25605__$1;
(statearr_25645_25716[(2)] = inst_25589);

(statearr_25645_25716[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (44))){
var inst_25598 = (state_25605[(2)]);
var state_25605__$1 = (function (){var statearr_25646 = state_25605;
(statearr_25646[(28)] = inst_25598);

return statearr_25646;
})();
var statearr_25647_25717 = state_25605__$1;
(statearr_25647_25717[(2)] = null);

(statearr_25647_25717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (6))){
var inst_25537 = (state_25605[(29)]);
var inst_25536 = cljs.core.deref.call(null,cs);
var inst_25537__$1 = cljs.core.keys.call(null,inst_25536);
var inst_25538 = cljs.core.count.call(null,inst_25537__$1);
var inst_25539 = cljs.core.reset_BANG_.call(null,dctr,inst_25538);
var inst_25544 = cljs.core.seq.call(null,inst_25537__$1);
var inst_25545 = inst_25544;
var inst_25546 = null;
var inst_25547 = (0);
var inst_25548 = (0);
var state_25605__$1 = (function (){var statearr_25648 = state_25605;
(statearr_25648[(29)] = inst_25537__$1);

(statearr_25648[(30)] = inst_25539);

(statearr_25648[(10)] = inst_25546);

(statearr_25648[(20)] = inst_25545);

(statearr_25648[(12)] = inst_25548);

(statearr_25648[(21)] = inst_25547);

return statearr_25648;
})();
var statearr_25649_25718 = state_25605__$1;
(statearr_25649_25718[(2)] = null);

(statearr_25649_25718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (28))){
var inst_25545 = (state_25605[(20)]);
var inst_25564 = (state_25605[(25)]);
var inst_25564__$1 = cljs.core.seq.call(null,inst_25545);
var state_25605__$1 = (function (){var statearr_25650 = state_25605;
(statearr_25650[(25)] = inst_25564__$1);

return statearr_25650;
})();
if(inst_25564__$1){
var statearr_25651_25719 = state_25605__$1;
(statearr_25651_25719[(1)] = (33));

} else {
var statearr_25652_25720 = state_25605__$1;
(statearr_25652_25720[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (25))){
var inst_25548 = (state_25605[(12)]);
var inst_25547 = (state_25605[(21)]);
var inst_25550 = (inst_25548 < inst_25547);
var inst_25551 = inst_25550;
var state_25605__$1 = state_25605;
if(cljs.core.truth_(inst_25551)){
var statearr_25653_25721 = state_25605__$1;
(statearr_25653_25721[(1)] = (27));

} else {
var statearr_25654_25722 = state_25605__$1;
(statearr_25654_25722[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (34))){
var state_25605__$1 = state_25605;
var statearr_25655_25723 = state_25605__$1;
(statearr_25655_25723[(2)] = null);

(statearr_25655_25723[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (17))){
var state_25605__$1 = state_25605;
var statearr_25656_25724 = state_25605__$1;
(statearr_25656_25724[(2)] = null);

(statearr_25656_25724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (3))){
var inst_25603 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25605__$1,inst_25603);
} else {
if((state_val_25606 === (12))){
var inst_25532 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25657_25725 = state_25605__$1;
(statearr_25657_25725[(2)] = inst_25532);

(statearr_25657_25725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (2))){
var state_25605__$1 = state_25605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25605__$1,(4),ch);
} else {
if((state_val_25606 === (23))){
var state_25605__$1 = state_25605;
var statearr_25658_25726 = state_25605__$1;
(statearr_25658_25726[(2)] = null);

(statearr_25658_25726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (35))){
var inst_25587 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25659_25727 = state_25605__$1;
(statearr_25659_25727[(2)] = inst_25587);

(statearr_25659_25727[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (19))){
var inst_25506 = (state_25605[(7)]);
var inst_25510 = cljs.core.chunk_first.call(null,inst_25506);
var inst_25511 = cljs.core.chunk_rest.call(null,inst_25506);
var inst_25512 = cljs.core.count.call(null,inst_25510);
var inst_25486 = inst_25511;
var inst_25487 = inst_25510;
var inst_25488 = inst_25512;
var inst_25489 = (0);
var state_25605__$1 = (function (){var statearr_25660 = state_25605;
(statearr_25660[(13)] = inst_25486);

(statearr_25660[(15)] = inst_25489);

(statearr_25660[(16)] = inst_25488);

(statearr_25660[(17)] = inst_25487);

return statearr_25660;
})();
var statearr_25661_25728 = state_25605__$1;
(statearr_25661_25728[(2)] = null);

(statearr_25661_25728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (11))){
var inst_25486 = (state_25605[(13)]);
var inst_25506 = (state_25605[(7)]);
var inst_25506__$1 = cljs.core.seq.call(null,inst_25486);
var state_25605__$1 = (function (){var statearr_25662 = state_25605;
(statearr_25662[(7)] = inst_25506__$1);

return statearr_25662;
})();
if(inst_25506__$1){
var statearr_25663_25729 = state_25605__$1;
(statearr_25663_25729[(1)] = (16));

} else {
var statearr_25664_25730 = state_25605__$1;
(statearr_25664_25730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (9))){
var inst_25534 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25665_25731 = state_25605__$1;
(statearr_25665_25731[(2)] = inst_25534);

(statearr_25665_25731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (5))){
var inst_25484 = cljs.core.deref.call(null,cs);
var inst_25485 = cljs.core.seq.call(null,inst_25484);
var inst_25486 = inst_25485;
var inst_25487 = null;
var inst_25488 = (0);
var inst_25489 = (0);
var state_25605__$1 = (function (){var statearr_25666 = state_25605;
(statearr_25666[(13)] = inst_25486);

(statearr_25666[(15)] = inst_25489);

(statearr_25666[(16)] = inst_25488);

(statearr_25666[(17)] = inst_25487);

return statearr_25666;
})();
var statearr_25667_25732 = state_25605__$1;
(statearr_25667_25732[(2)] = null);

(statearr_25667_25732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (14))){
var state_25605__$1 = state_25605;
var statearr_25668_25733 = state_25605__$1;
(statearr_25668_25733[(2)] = null);

(statearr_25668_25733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (45))){
var inst_25595 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25669_25734 = state_25605__$1;
(statearr_25669_25734[(2)] = inst_25595);

(statearr_25669_25734[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (26))){
var inst_25537 = (state_25605[(29)]);
var inst_25591 = (state_25605[(2)]);
var inst_25592 = cljs.core.seq.call(null,inst_25537);
var state_25605__$1 = (function (){var statearr_25670 = state_25605;
(statearr_25670[(31)] = inst_25591);

return statearr_25670;
})();
if(inst_25592){
var statearr_25671_25735 = state_25605__$1;
(statearr_25671_25735[(1)] = (42));

} else {
var statearr_25672_25736 = state_25605__$1;
(statearr_25672_25736[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (16))){
var inst_25506 = (state_25605[(7)]);
var inst_25508 = cljs.core.chunked_seq_QMARK_.call(null,inst_25506);
var state_25605__$1 = state_25605;
if(inst_25508){
var statearr_25673_25737 = state_25605__$1;
(statearr_25673_25737[(1)] = (19));

} else {
var statearr_25674_25738 = state_25605__$1;
(statearr_25674_25738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (38))){
var inst_25584 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25675_25739 = state_25605__$1;
(statearr_25675_25739[(2)] = inst_25584);

(statearr_25675_25739[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (30))){
var state_25605__$1 = state_25605;
var statearr_25676_25740 = state_25605__$1;
(statearr_25676_25740[(2)] = null);

(statearr_25676_25740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (10))){
var inst_25489 = (state_25605[(15)]);
var inst_25487 = (state_25605[(17)]);
var inst_25495 = cljs.core._nth.call(null,inst_25487,inst_25489);
var inst_25496 = cljs.core.nth.call(null,inst_25495,(0),null);
var inst_25497 = cljs.core.nth.call(null,inst_25495,(1),null);
var state_25605__$1 = (function (){var statearr_25677 = state_25605;
(statearr_25677[(26)] = inst_25496);

return statearr_25677;
})();
if(cljs.core.truth_(inst_25497)){
var statearr_25678_25741 = state_25605__$1;
(statearr_25678_25741[(1)] = (13));

} else {
var statearr_25679_25742 = state_25605__$1;
(statearr_25679_25742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (18))){
var inst_25530 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25680_25743 = state_25605__$1;
(statearr_25680_25743[(2)] = inst_25530);

(statearr_25680_25743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (42))){
var state_25605__$1 = state_25605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25605__$1,(45),dchan);
} else {
if((state_val_25606 === (37))){
var inst_25477 = (state_25605[(9)]);
var inst_25573 = (state_25605[(23)]);
var inst_25564 = (state_25605[(25)]);
var inst_25573__$1 = cljs.core.first.call(null,inst_25564);
var inst_25574 = cljs.core.async.put_BANG_.call(null,inst_25573__$1,inst_25477,done);
var state_25605__$1 = (function (){var statearr_25681 = state_25605;
(statearr_25681[(23)] = inst_25573__$1);

return statearr_25681;
})();
if(cljs.core.truth_(inst_25574)){
var statearr_25682_25744 = state_25605__$1;
(statearr_25682_25744[(1)] = (39));

} else {
var statearr_25683_25745 = state_25605__$1;
(statearr_25683_25745[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (8))){
var inst_25489 = (state_25605[(15)]);
var inst_25488 = (state_25605[(16)]);
var inst_25491 = (inst_25489 < inst_25488);
var inst_25492 = inst_25491;
var state_25605__$1 = state_25605;
if(cljs.core.truth_(inst_25492)){
var statearr_25684_25746 = state_25605__$1;
(statearr_25684_25746[(1)] = (10));

} else {
var statearr_25685_25747 = state_25605__$1;
(statearr_25685_25747[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19079__auto___25693,cs,m,dchan,dctr,done))
;
return ((function (switch__19017__auto__,c__19079__auto___25693,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19018__auto__ = null;
var cljs$core$async$mult_$_state_machine__19018__auto____0 = (function (){
var statearr_25689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25689[(0)] = cljs$core$async$mult_$_state_machine__19018__auto__);

(statearr_25689[(1)] = (1));

return statearr_25689;
});
var cljs$core$async$mult_$_state_machine__19018__auto____1 = (function (state_25605){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25690){if((e25690 instanceof Object)){
var ex__19021__auto__ = e25690;
var statearr_25691_25748 = state_25605;
(statearr_25691_25748[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25749 = state_25605;
state_25605 = G__25749;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19018__auto__ = function(state_25605){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19018__auto____1.call(this,state_25605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19018__auto____0;
cljs$core$async$mult_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19018__auto____1;
return cljs$core$async$mult_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___25693,cs,m,dchan,dctr,done))
})();
var state__19081__auto__ = (function (){var statearr_25692 = f__19080__auto__.call(null);
(statearr_25692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___25693);

return statearr_25692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___25693,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__25751 = arguments.length;
switch (G__25751) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj25754 = {};
return obj25754;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17109__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17109__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25759){
var map__25760 = p__25759;
var map__25760__$1 = ((cljs.core.seq_QMARK_.call(null,map__25760))?cljs.core.apply.call(null,cljs.core.hash_map,map__25760):map__25760);
var opts = map__25760__$1;
var statearr_25761_25764 = state;
(statearr_25761_25764[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25760,map__25760__$1,opts){
return (function (val){
var statearr_25762_25765 = state;
(statearr_25762_25765[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25760,map__25760__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25763_25766 = state;
(statearr_25763_25766[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25755){
var G__25756 = cljs.core.first.call(null,seq25755);
var seq25755__$1 = cljs.core.next.call(null,seq25755);
var G__25757 = cljs.core.first.call(null,seq25755__$1);
var seq25755__$2 = cljs.core.next.call(null,seq25755__$1);
var G__25758 = cljs.core.first.call(null,seq25755__$2);
var seq25755__$3 = cljs.core.next.call(null,seq25755__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25756,G__25757,G__25758,seq25755__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25886 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25886 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25887){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25887 = meta25887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25888,meta25887__$1){
var self__ = this;
var _25888__$1 = this;
return (new cljs.core.async.t25886(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25887__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25888){
var self__ = this;
var _25888__$1 = this;
return self__.meta25887;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25886.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25887","meta25887",300734812,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25886.cljs$lang$type = true;

cljs.core.async.t25886.cljs$lang$ctorStr = "cljs.core.async/t25886";

cljs.core.async.t25886.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t25886");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25886 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25886(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25887){
return (new cljs.core.async.t25886(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25887));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25886(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19079__auto___26005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25958){
var state_val_25959 = (state_25958[(1)]);
if((state_val_25959 === (7))){
var inst_25902 = (state_25958[(7)]);
var inst_25907 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25902);
var state_25958__$1 = state_25958;
var statearr_25960_26006 = state_25958__$1;
(statearr_25960_26006[(2)] = inst_25907);

(statearr_25960_26006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (20))){
var inst_25917 = (state_25958[(8)]);
var state_25958__$1 = state_25958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25958__$1,(23),out,inst_25917);
} else {
if((state_val_25959 === (1))){
var inst_25892 = (state_25958[(9)]);
var inst_25892__$1 = calc_state.call(null);
var inst_25893 = cljs.core.seq_QMARK_.call(null,inst_25892__$1);
var state_25958__$1 = (function (){var statearr_25961 = state_25958;
(statearr_25961[(9)] = inst_25892__$1);

return statearr_25961;
})();
if(inst_25893){
var statearr_25962_26007 = state_25958__$1;
(statearr_25962_26007[(1)] = (2));

} else {
var statearr_25963_26008 = state_25958__$1;
(statearr_25963_26008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (24))){
var inst_25910 = (state_25958[(10)]);
var inst_25902 = inst_25910;
var state_25958__$1 = (function (){var statearr_25964 = state_25958;
(statearr_25964[(7)] = inst_25902);

return statearr_25964;
})();
var statearr_25965_26009 = state_25958__$1;
(statearr_25965_26009[(2)] = null);

(statearr_25965_26009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (4))){
var inst_25892 = (state_25958[(9)]);
var inst_25898 = (state_25958[(2)]);
var inst_25899 = cljs.core.get.call(null,inst_25898,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25900 = cljs.core.get.call(null,inst_25898,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25901 = cljs.core.get.call(null,inst_25898,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25902 = inst_25892;
var state_25958__$1 = (function (){var statearr_25966 = state_25958;
(statearr_25966[(7)] = inst_25902);

(statearr_25966[(11)] = inst_25899);

(statearr_25966[(12)] = inst_25901);

(statearr_25966[(13)] = inst_25900);

return statearr_25966;
})();
var statearr_25967_26010 = state_25958__$1;
(statearr_25967_26010[(2)] = null);

(statearr_25967_26010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (15))){
var state_25958__$1 = state_25958;
var statearr_25968_26011 = state_25958__$1;
(statearr_25968_26011[(2)] = null);

(statearr_25968_26011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (21))){
var inst_25910 = (state_25958[(10)]);
var inst_25902 = inst_25910;
var state_25958__$1 = (function (){var statearr_25969 = state_25958;
(statearr_25969[(7)] = inst_25902);

return statearr_25969;
})();
var statearr_25970_26012 = state_25958__$1;
(statearr_25970_26012[(2)] = null);

(statearr_25970_26012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (13))){
var inst_25954 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25971_26013 = state_25958__$1;
(statearr_25971_26013[(2)] = inst_25954);

(statearr_25971_26013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (22))){
var inst_25952 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25972_26014 = state_25958__$1;
(statearr_25972_26014[(2)] = inst_25952);

(statearr_25972_26014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (6))){
var inst_25956 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25958__$1,inst_25956);
} else {
if((state_val_25959 === (25))){
var state_25958__$1 = state_25958;
var statearr_25973_26015 = state_25958__$1;
(statearr_25973_26015[(2)] = null);

(statearr_25973_26015[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (17))){
var inst_25932 = (state_25958[(14)]);
var state_25958__$1 = state_25958;
var statearr_25974_26016 = state_25958__$1;
(statearr_25974_26016[(2)] = inst_25932);

(statearr_25974_26016[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (3))){
var inst_25892 = (state_25958[(9)]);
var state_25958__$1 = state_25958;
var statearr_25975_26017 = state_25958__$1;
(statearr_25975_26017[(2)] = inst_25892);

(statearr_25975_26017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (12))){
var inst_25932 = (state_25958[(14)]);
var inst_25918 = (state_25958[(15)]);
var inst_25911 = (state_25958[(16)]);
var inst_25932__$1 = inst_25911.call(null,inst_25918);
var state_25958__$1 = (function (){var statearr_25976 = state_25958;
(statearr_25976[(14)] = inst_25932__$1);

return statearr_25976;
})();
if(cljs.core.truth_(inst_25932__$1)){
var statearr_25977_26018 = state_25958__$1;
(statearr_25977_26018[(1)] = (17));

} else {
var statearr_25978_26019 = state_25958__$1;
(statearr_25978_26019[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (2))){
var inst_25892 = (state_25958[(9)]);
var inst_25895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25892);
var state_25958__$1 = state_25958;
var statearr_25979_26020 = state_25958__$1;
(statearr_25979_26020[(2)] = inst_25895);

(statearr_25979_26020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (23))){
var inst_25943 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
if(cljs.core.truth_(inst_25943)){
var statearr_25980_26021 = state_25958__$1;
(statearr_25980_26021[(1)] = (24));

} else {
var statearr_25981_26022 = state_25958__$1;
(statearr_25981_26022[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (19))){
var inst_25940 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
if(cljs.core.truth_(inst_25940)){
var statearr_25982_26023 = state_25958__$1;
(statearr_25982_26023[(1)] = (20));

} else {
var statearr_25983_26024 = state_25958__$1;
(statearr_25983_26024[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (11))){
var inst_25917 = (state_25958[(8)]);
var inst_25923 = (inst_25917 == null);
var state_25958__$1 = state_25958;
if(cljs.core.truth_(inst_25923)){
var statearr_25984_26025 = state_25958__$1;
(statearr_25984_26025[(1)] = (14));

} else {
var statearr_25985_26026 = state_25958__$1;
(statearr_25985_26026[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (9))){
var inst_25910 = (state_25958[(10)]);
var inst_25910__$1 = (state_25958[(2)]);
var inst_25911 = cljs.core.get.call(null,inst_25910__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25912 = cljs.core.get.call(null,inst_25910__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25913 = cljs.core.get.call(null,inst_25910__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25958__$1 = (function (){var statearr_25986 = state_25958;
(statearr_25986[(10)] = inst_25910__$1);

(statearr_25986[(17)] = inst_25912);

(statearr_25986[(16)] = inst_25911);

return statearr_25986;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25958__$1,(10),inst_25913);
} else {
if((state_val_25959 === (5))){
var inst_25902 = (state_25958[(7)]);
var inst_25905 = cljs.core.seq_QMARK_.call(null,inst_25902);
var state_25958__$1 = state_25958;
if(inst_25905){
var statearr_25987_26027 = state_25958__$1;
(statearr_25987_26027[(1)] = (7));

} else {
var statearr_25988_26028 = state_25958__$1;
(statearr_25988_26028[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (14))){
var inst_25918 = (state_25958[(15)]);
var inst_25925 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25918);
var state_25958__$1 = state_25958;
var statearr_25989_26029 = state_25958__$1;
(statearr_25989_26029[(2)] = inst_25925);

(statearr_25989_26029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (26))){
var inst_25948 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25990_26030 = state_25958__$1;
(statearr_25990_26030[(2)] = inst_25948);

(statearr_25990_26030[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (16))){
var inst_25928 = (state_25958[(2)]);
var inst_25929 = calc_state.call(null);
var inst_25902 = inst_25929;
var state_25958__$1 = (function (){var statearr_25991 = state_25958;
(statearr_25991[(7)] = inst_25902);

(statearr_25991[(18)] = inst_25928);

return statearr_25991;
})();
var statearr_25992_26031 = state_25958__$1;
(statearr_25992_26031[(2)] = null);

(statearr_25992_26031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (10))){
var inst_25917 = (state_25958[(8)]);
var inst_25918 = (state_25958[(15)]);
var inst_25916 = (state_25958[(2)]);
var inst_25917__$1 = cljs.core.nth.call(null,inst_25916,(0),null);
var inst_25918__$1 = cljs.core.nth.call(null,inst_25916,(1),null);
var inst_25919 = (inst_25917__$1 == null);
var inst_25920 = cljs.core._EQ_.call(null,inst_25918__$1,change);
var inst_25921 = (inst_25919) || (inst_25920);
var state_25958__$1 = (function (){var statearr_25993 = state_25958;
(statearr_25993[(8)] = inst_25917__$1);

(statearr_25993[(15)] = inst_25918__$1);

return statearr_25993;
})();
if(cljs.core.truth_(inst_25921)){
var statearr_25994_26032 = state_25958__$1;
(statearr_25994_26032[(1)] = (11));

} else {
var statearr_25995_26033 = state_25958__$1;
(statearr_25995_26033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (18))){
var inst_25912 = (state_25958[(17)]);
var inst_25918 = (state_25958[(15)]);
var inst_25911 = (state_25958[(16)]);
var inst_25935 = cljs.core.empty_QMARK_.call(null,inst_25911);
var inst_25936 = inst_25912.call(null,inst_25918);
var inst_25937 = cljs.core.not.call(null,inst_25936);
var inst_25938 = (inst_25935) && (inst_25937);
var state_25958__$1 = state_25958;
var statearr_25996_26034 = state_25958__$1;
(statearr_25996_26034[(2)] = inst_25938);

(statearr_25996_26034[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25959 === (8))){
var inst_25902 = (state_25958[(7)]);
var state_25958__$1 = state_25958;
var statearr_25997_26035 = state_25958__$1;
(statearr_25997_26035[(2)] = inst_25902);

(statearr_25997_26035[(1)] = (9));


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
});})(c__19079__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19017__auto__,c__19079__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19018__auto__ = null;
var cljs$core$async$mix_$_state_machine__19018__auto____0 = (function (){
var statearr_26001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26001[(0)] = cljs$core$async$mix_$_state_machine__19018__auto__);

(statearr_26001[(1)] = (1));

return statearr_26001;
});
var cljs$core$async$mix_$_state_machine__19018__auto____1 = (function (state_25958){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26002){if((e26002 instanceof Object)){
var ex__19021__auto__ = e26002;
var statearr_26003_26036 = state_25958;
(statearr_26003_26036[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26037 = state_25958;
state_25958 = G__26037;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19018__auto__ = function(state_25958){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19018__auto____1.call(this,state_25958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19018__auto____0;
cljs$core$async$mix_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19018__auto____1;
return cljs$core$async$mix_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19081__auto__ = (function (){var statearr_26004 = f__19080__auto__.call(null);
(statearr_26004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26005);

return statearr_26004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26039 = {};
return obj26039;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26041 = arguments.length;
switch (G__26041) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__26045 = arguments.length;
switch (G__26045) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16069__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16069__auto__,mults){
return (function (p1__26043_SHARP_){
if(cljs.core.truth_(p1__26043_SHARP_.call(null,topic))){
return p1__26043_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26043_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16069__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26046 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26047){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26047 = meta26047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26048,meta26047__$1){
var self__ = this;
var _26048__$1 = this;
return (new cljs.core.async.t26046(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26047__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26048){
var self__ = this;
var _26048__$1 = this;
return self__.meta26047;
});})(mults,ensure_mult))
;

cljs.core.async.t26046.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26046.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26046.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26046.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26046.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26047","meta26047",-1137362442,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t26046.cljs$lang$type = true;

cljs.core.async.t26046.cljs$lang$ctorStr = "cljs.core.async/t26046";

cljs.core.async.t26046.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26046");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26046 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26047){
return (new cljs.core.async.t26046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26047));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26046(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19079__auto___26169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26169,mults,ensure_mult,p){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26169,mults,ensure_mult,p){
return (function (state_26120){
var state_val_26121 = (state_26120[(1)]);
if((state_val_26121 === (7))){
var inst_26116 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26122_26170 = state_26120__$1;
(statearr_26122_26170[(2)] = inst_26116);

(statearr_26122_26170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (20))){
var state_26120__$1 = state_26120;
var statearr_26123_26171 = state_26120__$1;
(statearr_26123_26171[(2)] = null);

(statearr_26123_26171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (1))){
var state_26120__$1 = state_26120;
var statearr_26124_26172 = state_26120__$1;
(statearr_26124_26172[(2)] = null);

(statearr_26124_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (24))){
var inst_26099 = (state_26120[(7)]);
var inst_26108 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26099);
var state_26120__$1 = state_26120;
var statearr_26125_26173 = state_26120__$1;
(statearr_26125_26173[(2)] = inst_26108);

(statearr_26125_26173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (4))){
var inst_26051 = (state_26120[(8)]);
var inst_26051__$1 = (state_26120[(2)]);
var inst_26052 = (inst_26051__$1 == null);
var state_26120__$1 = (function (){var statearr_26126 = state_26120;
(statearr_26126[(8)] = inst_26051__$1);

return statearr_26126;
})();
if(cljs.core.truth_(inst_26052)){
var statearr_26127_26174 = state_26120__$1;
(statearr_26127_26174[(1)] = (5));

} else {
var statearr_26128_26175 = state_26120__$1;
(statearr_26128_26175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (15))){
var inst_26093 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26129_26176 = state_26120__$1;
(statearr_26129_26176[(2)] = inst_26093);

(statearr_26129_26176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (21))){
var inst_26113 = (state_26120[(2)]);
var state_26120__$1 = (function (){var statearr_26130 = state_26120;
(statearr_26130[(9)] = inst_26113);

return statearr_26130;
})();
var statearr_26131_26177 = state_26120__$1;
(statearr_26131_26177[(2)] = null);

(statearr_26131_26177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (13))){
var inst_26075 = (state_26120[(10)]);
var inst_26077 = cljs.core.chunked_seq_QMARK_.call(null,inst_26075);
var state_26120__$1 = state_26120;
if(inst_26077){
var statearr_26132_26178 = state_26120__$1;
(statearr_26132_26178[(1)] = (16));

} else {
var statearr_26133_26179 = state_26120__$1;
(statearr_26133_26179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (22))){
var inst_26105 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
if(cljs.core.truth_(inst_26105)){
var statearr_26134_26180 = state_26120__$1;
(statearr_26134_26180[(1)] = (23));

} else {
var statearr_26135_26181 = state_26120__$1;
(statearr_26135_26181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (6))){
var inst_26051 = (state_26120[(8)]);
var inst_26101 = (state_26120[(11)]);
var inst_26099 = (state_26120[(7)]);
var inst_26099__$1 = topic_fn.call(null,inst_26051);
var inst_26100 = cljs.core.deref.call(null,mults);
var inst_26101__$1 = cljs.core.get.call(null,inst_26100,inst_26099__$1);
var state_26120__$1 = (function (){var statearr_26136 = state_26120;
(statearr_26136[(11)] = inst_26101__$1);

(statearr_26136[(7)] = inst_26099__$1);

return statearr_26136;
})();
if(cljs.core.truth_(inst_26101__$1)){
var statearr_26137_26182 = state_26120__$1;
(statearr_26137_26182[(1)] = (19));

} else {
var statearr_26138_26183 = state_26120__$1;
(statearr_26138_26183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (25))){
var inst_26110 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26139_26184 = state_26120__$1;
(statearr_26139_26184[(2)] = inst_26110);

(statearr_26139_26184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (17))){
var inst_26075 = (state_26120[(10)]);
var inst_26084 = cljs.core.first.call(null,inst_26075);
var inst_26085 = cljs.core.async.muxch_STAR_.call(null,inst_26084);
var inst_26086 = cljs.core.async.close_BANG_.call(null,inst_26085);
var inst_26087 = cljs.core.next.call(null,inst_26075);
var inst_26061 = inst_26087;
var inst_26062 = null;
var inst_26063 = (0);
var inst_26064 = (0);
var state_26120__$1 = (function (){var statearr_26140 = state_26120;
(statearr_26140[(12)] = inst_26061);

(statearr_26140[(13)] = inst_26086);

(statearr_26140[(14)] = inst_26062);

(statearr_26140[(15)] = inst_26064);

(statearr_26140[(16)] = inst_26063);

return statearr_26140;
})();
var statearr_26141_26185 = state_26120__$1;
(statearr_26141_26185[(2)] = null);

(statearr_26141_26185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (3))){
var inst_26118 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26120__$1,inst_26118);
} else {
if((state_val_26121 === (12))){
var inst_26095 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26142_26186 = state_26120__$1;
(statearr_26142_26186[(2)] = inst_26095);

(statearr_26142_26186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (2))){
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26120__$1,(4),ch);
} else {
if((state_val_26121 === (23))){
var state_26120__$1 = state_26120;
var statearr_26143_26187 = state_26120__$1;
(statearr_26143_26187[(2)] = null);

(statearr_26143_26187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (19))){
var inst_26051 = (state_26120[(8)]);
var inst_26101 = (state_26120[(11)]);
var inst_26103 = cljs.core.async.muxch_STAR_.call(null,inst_26101);
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26120__$1,(22),inst_26103,inst_26051);
} else {
if((state_val_26121 === (11))){
var inst_26061 = (state_26120[(12)]);
var inst_26075 = (state_26120[(10)]);
var inst_26075__$1 = cljs.core.seq.call(null,inst_26061);
var state_26120__$1 = (function (){var statearr_26144 = state_26120;
(statearr_26144[(10)] = inst_26075__$1);

return statearr_26144;
})();
if(inst_26075__$1){
var statearr_26145_26188 = state_26120__$1;
(statearr_26145_26188[(1)] = (13));

} else {
var statearr_26146_26189 = state_26120__$1;
(statearr_26146_26189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (9))){
var inst_26097 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26147_26190 = state_26120__$1;
(statearr_26147_26190[(2)] = inst_26097);

(statearr_26147_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (5))){
var inst_26058 = cljs.core.deref.call(null,mults);
var inst_26059 = cljs.core.vals.call(null,inst_26058);
var inst_26060 = cljs.core.seq.call(null,inst_26059);
var inst_26061 = inst_26060;
var inst_26062 = null;
var inst_26063 = (0);
var inst_26064 = (0);
var state_26120__$1 = (function (){var statearr_26148 = state_26120;
(statearr_26148[(12)] = inst_26061);

(statearr_26148[(14)] = inst_26062);

(statearr_26148[(15)] = inst_26064);

(statearr_26148[(16)] = inst_26063);

return statearr_26148;
})();
var statearr_26149_26191 = state_26120__$1;
(statearr_26149_26191[(2)] = null);

(statearr_26149_26191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (14))){
var state_26120__$1 = state_26120;
var statearr_26153_26192 = state_26120__$1;
(statearr_26153_26192[(2)] = null);

(statearr_26153_26192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (16))){
var inst_26075 = (state_26120[(10)]);
var inst_26079 = cljs.core.chunk_first.call(null,inst_26075);
var inst_26080 = cljs.core.chunk_rest.call(null,inst_26075);
var inst_26081 = cljs.core.count.call(null,inst_26079);
var inst_26061 = inst_26080;
var inst_26062 = inst_26079;
var inst_26063 = inst_26081;
var inst_26064 = (0);
var state_26120__$1 = (function (){var statearr_26154 = state_26120;
(statearr_26154[(12)] = inst_26061);

(statearr_26154[(14)] = inst_26062);

(statearr_26154[(15)] = inst_26064);

(statearr_26154[(16)] = inst_26063);

return statearr_26154;
})();
var statearr_26155_26193 = state_26120__$1;
(statearr_26155_26193[(2)] = null);

(statearr_26155_26193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (10))){
var inst_26061 = (state_26120[(12)]);
var inst_26062 = (state_26120[(14)]);
var inst_26064 = (state_26120[(15)]);
var inst_26063 = (state_26120[(16)]);
var inst_26069 = cljs.core._nth.call(null,inst_26062,inst_26064);
var inst_26070 = cljs.core.async.muxch_STAR_.call(null,inst_26069);
var inst_26071 = cljs.core.async.close_BANG_.call(null,inst_26070);
var inst_26072 = (inst_26064 + (1));
var tmp26150 = inst_26061;
var tmp26151 = inst_26062;
var tmp26152 = inst_26063;
var inst_26061__$1 = tmp26150;
var inst_26062__$1 = tmp26151;
var inst_26063__$1 = tmp26152;
var inst_26064__$1 = inst_26072;
var state_26120__$1 = (function (){var statearr_26156 = state_26120;
(statearr_26156[(12)] = inst_26061__$1);

(statearr_26156[(17)] = inst_26071);

(statearr_26156[(14)] = inst_26062__$1);

(statearr_26156[(15)] = inst_26064__$1);

(statearr_26156[(16)] = inst_26063__$1);

return statearr_26156;
})();
var statearr_26157_26194 = state_26120__$1;
(statearr_26157_26194[(2)] = null);

(statearr_26157_26194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (18))){
var inst_26090 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26158_26195 = state_26120__$1;
(statearr_26158_26195[(2)] = inst_26090);

(statearr_26158_26195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (8))){
var inst_26064 = (state_26120[(15)]);
var inst_26063 = (state_26120[(16)]);
var inst_26066 = (inst_26064 < inst_26063);
var inst_26067 = inst_26066;
var state_26120__$1 = state_26120;
if(cljs.core.truth_(inst_26067)){
var statearr_26159_26196 = state_26120__$1;
(statearr_26159_26196[(1)] = (10));

} else {
var statearr_26160_26197 = state_26120__$1;
(statearr_26160_26197[(1)] = (11));

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
});})(c__19079__auto___26169,mults,ensure_mult,p))
;
return ((function (switch__19017__auto__,c__19079__auto___26169,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26164[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26120){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__19021__auto__ = e26165;
var statearr_26166_26198 = state_26120;
(statearr_26166_26198[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26199 = state_26120;
state_26120 = G__26199;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26169,mults,ensure_mult,p))
})();
var state__19081__auto__ = (function (){var statearr_26167 = f__19080__auto__.call(null);
(statearr_26167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26169);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26169,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__26201 = arguments.length;
switch (G__26201) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__26204 = arguments.length;
switch (G__26204) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__26207 = arguments.length;
switch (G__26207) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19079__auto___26277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26246){
var state_val_26247 = (state_26246[(1)]);
if((state_val_26247 === (7))){
var state_26246__$1 = state_26246;
var statearr_26248_26278 = state_26246__$1;
(statearr_26248_26278[(2)] = null);

(statearr_26248_26278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (1))){
var state_26246__$1 = state_26246;
var statearr_26249_26279 = state_26246__$1;
(statearr_26249_26279[(2)] = null);

(statearr_26249_26279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (4))){
var inst_26210 = (state_26246[(7)]);
var inst_26212 = (inst_26210 < cnt);
var state_26246__$1 = state_26246;
if(cljs.core.truth_(inst_26212)){
var statearr_26250_26280 = state_26246__$1;
(statearr_26250_26280[(1)] = (6));

} else {
var statearr_26251_26281 = state_26246__$1;
(statearr_26251_26281[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (15))){
var inst_26242 = (state_26246[(2)]);
var state_26246__$1 = state_26246;
var statearr_26252_26282 = state_26246__$1;
(statearr_26252_26282[(2)] = inst_26242);

(statearr_26252_26282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (13))){
var inst_26235 = cljs.core.async.close_BANG_.call(null,out);
var state_26246__$1 = state_26246;
var statearr_26253_26283 = state_26246__$1;
(statearr_26253_26283[(2)] = inst_26235);

(statearr_26253_26283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (6))){
var state_26246__$1 = state_26246;
var statearr_26254_26284 = state_26246__$1;
(statearr_26254_26284[(2)] = null);

(statearr_26254_26284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (3))){
var inst_26244 = (state_26246[(2)]);
var state_26246__$1 = state_26246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26246__$1,inst_26244);
} else {
if((state_val_26247 === (12))){
var inst_26232 = (state_26246[(8)]);
var inst_26232__$1 = (state_26246[(2)]);
var inst_26233 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26232__$1);
var state_26246__$1 = (function (){var statearr_26255 = state_26246;
(statearr_26255[(8)] = inst_26232__$1);

return statearr_26255;
})();
if(cljs.core.truth_(inst_26233)){
var statearr_26256_26285 = state_26246__$1;
(statearr_26256_26285[(1)] = (13));

} else {
var statearr_26257_26286 = state_26246__$1;
(statearr_26257_26286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (2))){
var inst_26209 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26210 = (0);
var state_26246__$1 = (function (){var statearr_26258 = state_26246;
(statearr_26258[(9)] = inst_26209);

(statearr_26258[(7)] = inst_26210);

return statearr_26258;
})();
var statearr_26259_26287 = state_26246__$1;
(statearr_26259_26287[(2)] = null);

(statearr_26259_26287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (11))){
var inst_26210 = (state_26246[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26246,(10),Object,null,(9));
var inst_26219 = chs__$1.call(null,inst_26210);
var inst_26220 = done.call(null,inst_26210);
var inst_26221 = cljs.core.async.take_BANG_.call(null,inst_26219,inst_26220);
var state_26246__$1 = state_26246;
var statearr_26260_26288 = state_26246__$1;
(statearr_26260_26288[(2)] = inst_26221);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26246__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (9))){
var inst_26210 = (state_26246[(7)]);
var inst_26223 = (state_26246[(2)]);
var inst_26224 = (inst_26210 + (1));
var inst_26210__$1 = inst_26224;
var state_26246__$1 = (function (){var statearr_26261 = state_26246;
(statearr_26261[(10)] = inst_26223);

(statearr_26261[(7)] = inst_26210__$1);

return statearr_26261;
})();
var statearr_26262_26289 = state_26246__$1;
(statearr_26262_26289[(2)] = null);

(statearr_26262_26289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (5))){
var inst_26230 = (state_26246[(2)]);
var state_26246__$1 = (function (){var statearr_26263 = state_26246;
(statearr_26263[(11)] = inst_26230);

return statearr_26263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26246__$1,(12),dchan);
} else {
if((state_val_26247 === (14))){
var inst_26232 = (state_26246[(8)]);
var inst_26237 = cljs.core.apply.call(null,f,inst_26232);
var state_26246__$1 = state_26246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26246__$1,(16),out,inst_26237);
} else {
if((state_val_26247 === (16))){
var inst_26239 = (state_26246[(2)]);
var state_26246__$1 = (function (){var statearr_26264 = state_26246;
(statearr_26264[(12)] = inst_26239);

return statearr_26264;
})();
var statearr_26265_26290 = state_26246__$1;
(statearr_26265_26290[(2)] = null);

(statearr_26265_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (10))){
var inst_26214 = (state_26246[(2)]);
var inst_26215 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26246__$1 = (function (){var statearr_26266 = state_26246;
(statearr_26266[(13)] = inst_26214);

return statearr_26266;
})();
var statearr_26267_26291 = state_26246__$1;
(statearr_26267_26291[(2)] = inst_26215);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26246__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26247 === (8))){
var inst_26228 = (state_26246[(2)]);
var state_26246__$1 = state_26246;
var statearr_26268_26292 = state_26246__$1;
(statearr_26268_26292[(2)] = inst_26228);

(statearr_26268_26292[(1)] = (5));


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
});})(c__19079__auto___26277,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19017__auto__,c__19079__auto___26277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26272[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26272[(1)] = (1));

return statearr_26272;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26246){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26273){if((e26273 instanceof Object)){
var ex__19021__auto__ = e26273;
var statearr_26274_26293 = state_26246;
(statearr_26274_26293[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26294 = state_26246;
state_26246 = G__26294;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26277,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19081__auto__ = (function (){var statearr_26275 = f__19080__auto__.call(null);
(statearr_26275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26277);

return statearr_26275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26277,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__26297 = arguments.length;
switch (G__26297) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___26352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26352,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26352,out){
return (function (state_26327){
var state_val_26328 = (state_26327[(1)]);
if((state_val_26328 === (7))){
var inst_26306 = (state_26327[(7)]);
var inst_26307 = (state_26327[(8)]);
var inst_26306__$1 = (state_26327[(2)]);
var inst_26307__$1 = cljs.core.nth.call(null,inst_26306__$1,(0),null);
var inst_26308 = cljs.core.nth.call(null,inst_26306__$1,(1),null);
var inst_26309 = (inst_26307__$1 == null);
var state_26327__$1 = (function (){var statearr_26329 = state_26327;
(statearr_26329[(7)] = inst_26306__$1);

(statearr_26329[(9)] = inst_26308);

(statearr_26329[(8)] = inst_26307__$1);

return statearr_26329;
})();
if(cljs.core.truth_(inst_26309)){
var statearr_26330_26353 = state_26327__$1;
(statearr_26330_26353[(1)] = (8));

} else {
var statearr_26331_26354 = state_26327__$1;
(statearr_26331_26354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (1))){
var inst_26298 = cljs.core.vec.call(null,chs);
var inst_26299 = inst_26298;
var state_26327__$1 = (function (){var statearr_26332 = state_26327;
(statearr_26332[(10)] = inst_26299);

return statearr_26332;
})();
var statearr_26333_26355 = state_26327__$1;
(statearr_26333_26355[(2)] = null);

(statearr_26333_26355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (4))){
var inst_26299 = (state_26327[(10)]);
var state_26327__$1 = state_26327;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26327__$1,(7),inst_26299);
} else {
if((state_val_26328 === (6))){
var inst_26323 = (state_26327[(2)]);
var state_26327__$1 = state_26327;
var statearr_26334_26356 = state_26327__$1;
(statearr_26334_26356[(2)] = inst_26323);

(statearr_26334_26356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (3))){
var inst_26325 = (state_26327[(2)]);
var state_26327__$1 = state_26327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26327__$1,inst_26325);
} else {
if((state_val_26328 === (2))){
var inst_26299 = (state_26327[(10)]);
var inst_26301 = cljs.core.count.call(null,inst_26299);
var inst_26302 = (inst_26301 > (0));
var state_26327__$1 = state_26327;
if(cljs.core.truth_(inst_26302)){
var statearr_26336_26357 = state_26327__$1;
(statearr_26336_26357[(1)] = (4));

} else {
var statearr_26337_26358 = state_26327__$1;
(statearr_26337_26358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (11))){
var inst_26299 = (state_26327[(10)]);
var inst_26316 = (state_26327[(2)]);
var tmp26335 = inst_26299;
var inst_26299__$1 = tmp26335;
var state_26327__$1 = (function (){var statearr_26338 = state_26327;
(statearr_26338[(11)] = inst_26316);

(statearr_26338[(10)] = inst_26299__$1);

return statearr_26338;
})();
var statearr_26339_26359 = state_26327__$1;
(statearr_26339_26359[(2)] = null);

(statearr_26339_26359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (9))){
var inst_26307 = (state_26327[(8)]);
var state_26327__$1 = state_26327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26327__$1,(11),out,inst_26307);
} else {
if((state_val_26328 === (5))){
var inst_26321 = cljs.core.async.close_BANG_.call(null,out);
var state_26327__$1 = state_26327;
var statearr_26340_26360 = state_26327__$1;
(statearr_26340_26360[(2)] = inst_26321);

(statearr_26340_26360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (10))){
var inst_26319 = (state_26327[(2)]);
var state_26327__$1 = state_26327;
var statearr_26341_26361 = state_26327__$1;
(statearr_26341_26361[(2)] = inst_26319);

(statearr_26341_26361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (8))){
var inst_26306 = (state_26327[(7)]);
var inst_26308 = (state_26327[(9)]);
var inst_26307 = (state_26327[(8)]);
var inst_26299 = (state_26327[(10)]);
var inst_26311 = (function (){var cs = inst_26299;
var vec__26304 = inst_26306;
var v = inst_26307;
var c = inst_26308;
return ((function (cs,vec__26304,v,c,inst_26306,inst_26308,inst_26307,inst_26299,state_val_26328,c__19079__auto___26352,out){
return (function (p1__26295_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26295_SHARP_);
});
;})(cs,vec__26304,v,c,inst_26306,inst_26308,inst_26307,inst_26299,state_val_26328,c__19079__auto___26352,out))
})();
var inst_26312 = cljs.core.filterv.call(null,inst_26311,inst_26299);
var inst_26299__$1 = inst_26312;
var state_26327__$1 = (function (){var statearr_26342 = state_26327;
(statearr_26342[(10)] = inst_26299__$1);

return statearr_26342;
})();
var statearr_26343_26362 = state_26327__$1;
(statearr_26343_26362[(2)] = null);

(statearr_26343_26362[(1)] = (2));


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
});})(c__19079__auto___26352,out))
;
return ((function (switch__19017__auto__,c__19079__auto___26352,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26347[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26347[(1)] = (1));

return statearr_26347;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26327){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26348){if((e26348 instanceof Object)){
var ex__19021__auto__ = e26348;
var statearr_26349_26363 = state_26327;
(statearr_26349_26363[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26364 = state_26327;
state_26327 = G__26364;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26352,out))
})();
var state__19081__auto__ = (function (){var statearr_26350 = f__19080__auto__.call(null);
(statearr_26350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26352);

return statearr_26350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26352,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__26366 = arguments.length;
switch (G__26366) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___26414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26414,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26414,out){
return (function (state_26390){
var state_val_26391 = (state_26390[(1)]);
if((state_val_26391 === (7))){
var inst_26372 = (state_26390[(7)]);
var inst_26372__$1 = (state_26390[(2)]);
var inst_26373 = (inst_26372__$1 == null);
var inst_26374 = cljs.core.not.call(null,inst_26373);
var state_26390__$1 = (function (){var statearr_26392 = state_26390;
(statearr_26392[(7)] = inst_26372__$1);

return statearr_26392;
})();
if(inst_26374){
var statearr_26393_26415 = state_26390__$1;
(statearr_26393_26415[(1)] = (8));

} else {
var statearr_26394_26416 = state_26390__$1;
(statearr_26394_26416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (1))){
var inst_26367 = (0);
var state_26390__$1 = (function (){var statearr_26395 = state_26390;
(statearr_26395[(8)] = inst_26367);

return statearr_26395;
})();
var statearr_26396_26417 = state_26390__$1;
(statearr_26396_26417[(2)] = null);

(statearr_26396_26417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (4))){
var state_26390__$1 = state_26390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26390__$1,(7),ch);
} else {
if((state_val_26391 === (6))){
var inst_26385 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
var statearr_26397_26418 = state_26390__$1;
(statearr_26397_26418[(2)] = inst_26385);

(statearr_26397_26418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (3))){
var inst_26387 = (state_26390[(2)]);
var inst_26388 = cljs.core.async.close_BANG_.call(null,out);
var state_26390__$1 = (function (){var statearr_26398 = state_26390;
(statearr_26398[(9)] = inst_26387);

return statearr_26398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26390__$1,inst_26388);
} else {
if((state_val_26391 === (2))){
var inst_26367 = (state_26390[(8)]);
var inst_26369 = (inst_26367 < n);
var state_26390__$1 = state_26390;
if(cljs.core.truth_(inst_26369)){
var statearr_26399_26419 = state_26390__$1;
(statearr_26399_26419[(1)] = (4));

} else {
var statearr_26400_26420 = state_26390__$1;
(statearr_26400_26420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (11))){
var inst_26367 = (state_26390[(8)]);
var inst_26377 = (state_26390[(2)]);
var inst_26378 = (inst_26367 + (1));
var inst_26367__$1 = inst_26378;
var state_26390__$1 = (function (){var statearr_26401 = state_26390;
(statearr_26401[(8)] = inst_26367__$1);

(statearr_26401[(10)] = inst_26377);

return statearr_26401;
})();
var statearr_26402_26421 = state_26390__$1;
(statearr_26402_26421[(2)] = null);

(statearr_26402_26421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (9))){
var state_26390__$1 = state_26390;
var statearr_26403_26422 = state_26390__$1;
(statearr_26403_26422[(2)] = null);

(statearr_26403_26422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (5))){
var state_26390__$1 = state_26390;
var statearr_26404_26423 = state_26390__$1;
(statearr_26404_26423[(2)] = null);

(statearr_26404_26423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (10))){
var inst_26382 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
var statearr_26405_26424 = state_26390__$1;
(statearr_26405_26424[(2)] = inst_26382);

(statearr_26405_26424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (8))){
var inst_26372 = (state_26390[(7)]);
var state_26390__$1 = state_26390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26390__$1,(11),out,inst_26372);
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
});})(c__19079__auto___26414,out))
;
return ((function (switch__19017__auto__,c__19079__auto___26414,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26409[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26409[(1)] = (1));

return statearr_26409;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26390){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26410){if((e26410 instanceof Object)){
var ex__19021__auto__ = e26410;
var statearr_26411_26425 = state_26390;
(statearr_26411_26425[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26426 = state_26390;
state_26390 = G__26426;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26414,out))
})();
var state__19081__auto__ = (function (){var statearr_26412 = f__19080__auto__.call(null);
(statearr_26412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26414);

return statearr_26412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26414,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26434 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26434 = (function (map_LT_,f,ch,meta26435){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26435 = meta26435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26436,meta26435__$1){
var self__ = this;
var _26436__$1 = this;
return (new cljs.core.async.t26434(self__.map_LT_,self__.f,self__.ch,meta26435__$1));
});

cljs.core.async.t26434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26436){
var self__ = this;
var _26436__$1 = this;
return self__.meta26435;
});

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26437 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26437 = (function (map_LT_,f,ch,meta26435,_,fn1,meta26438){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26435 = meta26435;
this._ = _;
this.fn1 = fn1;
this.meta26438 = meta26438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26439,meta26438__$1){
var self__ = this;
var _26439__$1 = this;
return (new cljs.core.async.t26437(self__.map_LT_,self__.f,self__.ch,self__.meta26435,self__._,self__.fn1,meta26438__$1));
});})(___$1))
;

cljs.core.async.t26437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26439){
var self__ = this;
var _26439__$1 = this;
return self__.meta26438;
});})(___$1))
;

cljs.core.async.t26437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26427_SHARP_){
return f1.call(null,(((p1__26427_SHARP_ == null))?null:self__.f.call(null,p1__26427_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26437.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26435","meta26435",-418681587,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26438","meta26438",1988999829,null)], null);
});})(___$1))
;

cljs.core.async.t26437.cljs$lang$type = true;

cljs.core.async.t26437.cljs$lang$ctorStr = "cljs.core.async/t26437";

cljs.core.async.t26437.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26437");
});})(___$1))
;

cljs.core.async.__GT_t26437 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26437(map_LT___$1,f__$1,ch__$1,meta26435__$1,___$2,fn1__$1,meta26438){
return (new cljs.core.async.t26437(map_LT___$1,f__$1,ch__$1,meta26435__$1,___$2,fn1__$1,meta26438));
});})(___$1))
;

}

return (new cljs.core.async.t26437(self__.map_LT_,self__.f,self__.ch,self__.meta26435,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16057__auto__ = ret;
if(cljs.core.truth_(and__16057__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16057__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26435","meta26435",-418681587,null)], null);
});

cljs.core.async.t26434.cljs$lang$type = true;

cljs.core.async.t26434.cljs$lang$ctorStr = "cljs.core.async/t26434";

cljs.core.async.t26434.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26434");
});

cljs.core.async.__GT_t26434 = (function cljs$core$async$map_LT__$___GT_t26434(map_LT___$1,f__$1,ch__$1,meta26435){
return (new cljs.core.async.t26434(map_LT___$1,f__$1,ch__$1,meta26435));
});

}

return (new cljs.core.async.t26434(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26443 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26443 = (function (map_GT_,f,ch,meta26444){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26444 = meta26444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26445,meta26444__$1){
var self__ = this;
var _26445__$1 = this;
return (new cljs.core.async.t26443(self__.map_GT_,self__.f,self__.ch,meta26444__$1));
});

cljs.core.async.t26443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26445){
var self__ = this;
var _26445__$1 = this;
return self__.meta26444;
});

cljs.core.async.t26443.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26444","meta26444",-417838548,null)], null);
});

cljs.core.async.t26443.cljs$lang$type = true;

cljs.core.async.t26443.cljs$lang$ctorStr = "cljs.core.async/t26443";

cljs.core.async.t26443.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26443");
});

cljs.core.async.__GT_t26443 = (function cljs$core$async$map_GT__$___GT_t26443(map_GT___$1,f__$1,ch__$1,meta26444){
return (new cljs.core.async.t26443(map_GT___$1,f__$1,ch__$1,meta26444));
});

}

return (new cljs.core.async.t26443(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26449 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26449 = (function (filter_GT_,p,ch,meta26450){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26450 = meta26450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26451,meta26450__$1){
var self__ = this;
var _26451__$1 = this;
return (new cljs.core.async.t26449(self__.filter_GT_,self__.p,self__.ch,meta26450__$1));
});

cljs.core.async.t26449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26451){
var self__ = this;
var _26451__$1 = this;
return self__.meta26450;
});

cljs.core.async.t26449.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26450","meta26450",1226332049,null)], null);
});

cljs.core.async.t26449.cljs$lang$type = true;

cljs.core.async.t26449.cljs$lang$ctorStr = "cljs.core.async/t26449";

cljs.core.async.t26449.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26449");
});

cljs.core.async.__GT_t26449 = (function cljs$core$async$filter_GT__$___GT_t26449(filter_GT___$1,p__$1,ch__$1,meta26450){
return (new cljs.core.async.t26449(filter_GT___$1,p__$1,ch__$1,meta26450));
});

}

return (new cljs.core.async.t26449(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__26453 = arguments.length;
switch (G__26453) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___26496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26496,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26496,out){
return (function (state_26474){
var state_val_26475 = (state_26474[(1)]);
if((state_val_26475 === (7))){
var inst_26470 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
var statearr_26476_26497 = state_26474__$1;
(statearr_26476_26497[(2)] = inst_26470);

(statearr_26476_26497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (1))){
var state_26474__$1 = state_26474;
var statearr_26477_26498 = state_26474__$1;
(statearr_26477_26498[(2)] = null);

(statearr_26477_26498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (4))){
var inst_26456 = (state_26474[(7)]);
var inst_26456__$1 = (state_26474[(2)]);
var inst_26457 = (inst_26456__$1 == null);
var state_26474__$1 = (function (){var statearr_26478 = state_26474;
(statearr_26478[(7)] = inst_26456__$1);

return statearr_26478;
})();
if(cljs.core.truth_(inst_26457)){
var statearr_26479_26499 = state_26474__$1;
(statearr_26479_26499[(1)] = (5));

} else {
var statearr_26480_26500 = state_26474__$1;
(statearr_26480_26500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (6))){
var inst_26456 = (state_26474[(7)]);
var inst_26461 = p.call(null,inst_26456);
var state_26474__$1 = state_26474;
if(cljs.core.truth_(inst_26461)){
var statearr_26481_26501 = state_26474__$1;
(statearr_26481_26501[(1)] = (8));

} else {
var statearr_26482_26502 = state_26474__$1;
(statearr_26482_26502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (3))){
var inst_26472 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26474__$1,inst_26472);
} else {
if((state_val_26475 === (2))){
var state_26474__$1 = state_26474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26474__$1,(4),ch);
} else {
if((state_val_26475 === (11))){
var inst_26464 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
var statearr_26483_26503 = state_26474__$1;
(statearr_26483_26503[(2)] = inst_26464);

(statearr_26483_26503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (9))){
var state_26474__$1 = state_26474;
var statearr_26484_26504 = state_26474__$1;
(statearr_26484_26504[(2)] = null);

(statearr_26484_26504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (5))){
var inst_26459 = cljs.core.async.close_BANG_.call(null,out);
var state_26474__$1 = state_26474;
var statearr_26485_26505 = state_26474__$1;
(statearr_26485_26505[(2)] = inst_26459);

(statearr_26485_26505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (10))){
var inst_26467 = (state_26474[(2)]);
var state_26474__$1 = (function (){var statearr_26486 = state_26474;
(statearr_26486[(8)] = inst_26467);

return statearr_26486;
})();
var statearr_26487_26506 = state_26474__$1;
(statearr_26487_26506[(2)] = null);

(statearr_26487_26506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (8))){
var inst_26456 = (state_26474[(7)]);
var state_26474__$1 = state_26474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26474__$1,(11),out,inst_26456);
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
});})(c__19079__auto___26496,out))
;
return ((function (switch__19017__auto__,c__19079__auto___26496,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26491 = [null,null,null,null,null,null,null,null,null];
(statearr_26491[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26491[(1)] = (1));

return statearr_26491;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26474){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26492){if((e26492 instanceof Object)){
var ex__19021__auto__ = e26492;
var statearr_26493_26507 = state_26474;
(statearr_26493_26507[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26508 = state_26474;
state_26474 = G__26508;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26496,out))
})();
var state__19081__auto__ = (function (){var statearr_26494 = f__19080__auto__.call(null);
(statearr_26494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26496);

return statearr_26494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26496,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__26510 = arguments.length;
switch (G__26510) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_26677){
var state_val_26678 = (state_26677[(1)]);
if((state_val_26678 === (7))){
var inst_26673 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
var statearr_26679_26720 = state_26677__$1;
(statearr_26679_26720[(2)] = inst_26673);

(statearr_26679_26720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (20))){
var inst_26643 = (state_26677[(7)]);
var inst_26654 = (state_26677[(2)]);
var inst_26655 = cljs.core.next.call(null,inst_26643);
var inst_26629 = inst_26655;
var inst_26630 = null;
var inst_26631 = (0);
var inst_26632 = (0);
var state_26677__$1 = (function (){var statearr_26680 = state_26677;
(statearr_26680[(8)] = inst_26654);

(statearr_26680[(9)] = inst_26630);

(statearr_26680[(10)] = inst_26629);

(statearr_26680[(11)] = inst_26632);

(statearr_26680[(12)] = inst_26631);

return statearr_26680;
})();
var statearr_26681_26721 = state_26677__$1;
(statearr_26681_26721[(2)] = null);

(statearr_26681_26721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (1))){
var state_26677__$1 = state_26677;
var statearr_26682_26722 = state_26677__$1;
(statearr_26682_26722[(2)] = null);

(statearr_26682_26722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (4))){
var inst_26618 = (state_26677[(13)]);
var inst_26618__$1 = (state_26677[(2)]);
var inst_26619 = (inst_26618__$1 == null);
var state_26677__$1 = (function (){var statearr_26683 = state_26677;
(statearr_26683[(13)] = inst_26618__$1);

return statearr_26683;
})();
if(cljs.core.truth_(inst_26619)){
var statearr_26684_26723 = state_26677__$1;
(statearr_26684_26723[(1)] = (5));

} else {
var statearr_26685_26724 = state_26677__$1;
(statearr_26685_26724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (15))){
var state_26677__$1 = state_26677;
var statearr_26689_26725 = state_26677__$1;
(statearr_26689_26725[(2)] = null);

(statearr_26689_26725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (21))){
var state_26677__$1 = state_26677;
var statearr_26690_26726 = state_26677__$1;
(statearr_26690_26726[(2)] = null);

(statearr_26690_26726[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (13))){
var inst_26630 = (state_26677[(9)]);
var inst_26629 = (state_26677[(10)]);
var inst_26632 = (state_26677[(11)]);
var inst_26631 = (state_26677[(12)]);
var inst_26639 = (state_26677[(2)]);
var inst_26640 = (inst_26632 + (1));
var tmp26686 = inst_26630;
var tmp26687 = inst_26629;
var tmp26688 = inst_26631;
var inst_26629__$1 = tmp26687;
var inst_26630__$1 = tmp26686;
var inst_26631__$1 = tmp26688;
var inst_26632__$1 = inst_26640;
var state_26677__$1 = (function (){var statearr_26691 = state_26677;
(statearr_26691[(9)] = inst_26630__$1);

(statearr_26691[(14)] = inst_26639);

(statearr_26691[(10)] = inst_26629__$1);

(statearr_26691[(11)] = inst_26632__$1);

(statearr_26691[(12)] = inst_26631__$1);

return statearr_26691;
})();
var statearr_26692_26727 = state_26677__$1;
(statearr_26692_26727[(2)] = null);

(statearr_26692_26727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (22))){
var state_26677__$1 = state_26677;
var statearr_26693_26728 = state_26677__$1;
(statearr_26693_26728[(2)] = null);

(statearr_26693_26728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (6))){
var inst_26618 = (state_26677[(13)]);
var inst_26627 = f.call(null,inst_26618);
var inst_26628 = cljs.core.seq.call(null,inst_26627);
var inst_26629 = inst_26628;
var inst_26630 = null;
var inst_26631 = (0);
var inst_26632 = (0);
var state_26677__$1 = (function (){var statearr_26694 = state_26677;
(statearr_26694[(9)] = inst_26630);

(statearr_26694[(10)] = inst_26629);

(statearr_26694[(11)] = inst_26632);

(statearr_26694[(12)] = inst_26631);

return statearr_26694;
})();
var statearr_26695_26729 = state_26677__$1;
(statearr_26695_26729[(2)] = null);

(statearr_26695_26729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (17))){
var inst_26643 = (state_26677[(7)]);
var inst_26647 = cljs.core.chunk_first.call(null,inst_26643);
var inst_26648 = cljs.core.chunk_rest.call(null,inst_26643);
var inst_26649 = cljs.core.count.call(null,inst_26647);
var inst_26629 = inst_26648;
var inst_26630 = inst_26647;
var inst_26631 = inst_26649;
var inst_26632 = (0);
var state_26677__$1 = (function (){var statearr_26696 = state_26677;
(statearr_26696[(9)] = inst_26630);

(statearr_26696[(10)] = inst_26629);

(statearr_26696[(11)] = inst_26632);

(statearr_26696[(12)] = inst_26631);

return statearr_26696;
})();
var statearr_26697_26730 = state_26677__$1;
(statearr_26697_26730[(2)] = null);

(statearr_26697_26730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (3))){
var inst_26675 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26677__$1,inst_26675);
} else {
if((state_val_26678 === (12))){
var inst_26663 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
var statearr_26698_26731 = state_26677__$1;
(statearr_26698_26731[(2)] = inst_26663);

(statearr_26698_26731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (2))){
var state_26677__$1 = state_26677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26677__$1,(4),in$);
} else {
if((state_val_26678 === (23))){
var inst_26671 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
var statearr_26699_26732 = state_26677__$1;
(statearr_26699_26732[(2)] = inst_26671);

(statearr_26699_26732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (19))){
var inst_26658 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
var statearr_26700_26733 = state_26677__$1;
(statearr_26700_26733[(2)] = inst_26658);

(statearr_26700_26733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (11))){
var inst_26629 = (state_26677[(10)]);
var inst_26643 = (state_26677[(7)]);
var inst_26643__$1 = cljs.core.seq.call(null,inst_26629);
var state_26677__$1 = (function (){var statearr_26701 = state_26677;
(statearr_26701[(7)] = inst_26643__$1);

return statearr_26701;
})();
if(inst_26643__$1){
var statearr_26702_26734 = state_26677__$1;
(statearr_26702_26734[(1)] = (14));

} else {
var statearr_26703_26735 = state_26677__$1;
(statearr_26703_26735[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (9))){
var inst_26665 = (state_26677[(2)]);
var inst_26666 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26677__$1 = (function (){var statearr_26704 = state_26677;
(statearr_26704[(15)] = inst_26665);

return statearr_26704;
})();
if(cljs.core.truth_(inst_26666)){
var statearr_26705_26736 = state_26677__$1;
(statearr_26705_26736[(1)] = (21));

} else {
var statearr_26706_26737 = state_26677__$1;
(statearr_26706_26737[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (5))){
var inst_26621 = cljs.core.async.close_BANG_.call(null,out);
var state_26677__$1 = state_26677;
var statearr_26707_26738 = state_26677__$1;
(statearr_26707_26738[(2)] = inst_26621);

(statearr_26707_26738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (14))){
var inst_26643 = (state_26677[(7)]);
var inst_26645 = cljs.core.chunked_seq_QMARK_.call(null,inst_26643);
var state_26677__$1 = state_26677;
if(inst_26645){
var statearr_26708_26739 = state_26677__$1;
(statearr_26708_26739[(1)] = (17));

} else {
var statearr_26709_26740 = state_26677__$1;
(statearr_26709_26740[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (16))){
var inst_26661 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
var statearr_26710_26741 = state_26677__$1;
(statearr_26710_26741[(2)] = inst_26661);

(statearr_26710_26741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (10))){
var inst_26630 = (state_26677[(9)]);
var inst_26632 = (state_26677[(11)]);
var inst_26637 = cljs.core._nth.call(null,inst_26630,inst_26632);
var state_26677__$1 = state_26677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26677__$1,(13),out,inst_26637);
} else {
if((state_val_26678 === (18))){
var inst_26643 = (state_26677[(7)]);
var inst_26652 = cljs.core.first.call(null,inst_26643);
var state_26677__$1 = state_26677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26677__$1,(20),out,inst_26652);
} else {
if((state_val_26678 === (8))){
var inst_26632 = (state_26677[(11)]);
var inst_26631 = (state_26677[(12)]);
var inst_26634 = (inst_26632 < inst_26631);
var inst_26635 = inst_26634;
var state_26677__$1 = state_26677;
if(cljs.core.truth_(inst_26635)){
var statearr_26711_26742 = state_26677__$1;
(statearr_26711_26742[(1)] = (10));

} else {
var statearr_26712_26743 = state_26677__$1;
(statearr_26712_26743[(1)] = (11));

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
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_26716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26716[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__);

(statearr_26716[(1)] = (1));

return statearr_26716;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____1 = (function (state_26677){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26717){if((e26717 instanceof Object)){
var ex__19021__auto__ = e26717;
var statearr_26718_26744 = state_26677;
(statearr_26718_26744[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26745 = state_26677;
state_26677 = G__26745;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__ = function(state_26677){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____1.call(this,state_26677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_26719 = f__19080__auto__.call(null);
(statearr_26719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_26719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__26747 = arguments.length;
switch (G__26747) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__26750 = arguments.length;
switch (G__26750) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__26753 = arguments.length;
switch (G__26753) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___26803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26803,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26803,out){
return (function (state_26777){
var state_val_26778 = (state_26777[(1)]);
if((state_val_26778 === (7))){
var inst_26772 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26779_26804 = state_26777__$1;
(statearr_26779_26804[(2)] = inst_26772);

(statearr_26779_26804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (1))){
var inst_26754 = null;
var state_26777__$1 = (function (){var statearr_26780 = state_26777;
(statearr_26780[(7)] = inst_26754);

return statearr_26780;
})();
var statearr_26781_26805 = state_26777__$1;
(statearr_26781_26805[(2)] = null);

(statearr_26781_26805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (4))){
var inst_26757 = (state_26777[(8)]);
var inst_26757__$1 = (state_26777[(2)]);
var inst_26758 = (inst_26757__$1 == null);
var inst_26759 = cljs.core.not.call(null,inst_26758);
var state_26777__$1 = (function (){var statearr_26782 = state_26777;
(statearr_26782[(8)] = inst_26757__$1);

return statearr_26782;
})();
if(inst_26759){
var statearr_26783_26806 = state_26777__$1;
(statearr_26783_26806[(1)] = (5));

} else {
var statearr_26784_26807 = state_26777__$1;
(statearr_26784_26807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (6))){
var state_26777__$1 = state_26777;
var statearr_26785_26808 = state_26777__$1;
(statearr_26785_26808[(2)] = null);

(statearr_26785_26808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (3))){
var inst_26774 = (state_26777[(2)]);
var inst_26775 = cljs.core.async.close_BANG_.call(null,out);
var state_26777__$1 = (function (){var statearr_26786 = state_26777;
(statearr_26786[(9)] = inst_26774);

return statearr_26786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26777__$1,inst_26775);
} else {
if((state_val_26778 === (2))){
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26777__$1,(4),ch);
} else {
if((state_val_26778 === (11))){
var inst_26757 = (state_26777[(8)]);
var inst_26766 = (state_26777[(2)]);
var inst_26754 = inst_26757;
var state_26777__$1 = (function (){var statearr_26787 = state_26777;
(statearr_26787[(10)] = inst_26766);

(statearr_26787[(7)] = inst_26754);

return statearr_26787;
})();
var statearr_26788_26809 = state_26777__$1;
(statearr_26788_26809[(2)] = null);

(statearr_26788_26809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (9))){
var inst_26757 = (state_26777[(8)]);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26777__$1,(11),out,inst_26757);
} else {
if((state_val_26778 === (5))){
var inst_26754 = (state_26777[(7)]);
var inst_26757 = (state_26777[(8)]);
var inst_26761 = cljs.core._EQ_.call(null,inst_26757,inst_26754);
var state_26777__$1 = state_26777;
if(inst_26761){
var statearr_26790_26810 = state_26777__$1;
(statearr_26790_26810[(1)] = (8));

} else {
var statearr_26791_26811 = state_26777__$1;
(statearr_26791_26811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (10))){
var inst_26769 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26792_26812 = state_26777__$1;
(statearr_26792_26812[(2)] = inst_26769);

(statearr_26792_26812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (8))){
var inst_26754 = (state_26777[(7)]);
var tmp26789 = inst_26754;
var inst_26754__$1 = tmp26789;
var state_26777__$1 = (function (){var statearr_26793 = state_26777;
(statearr_26793[(7)] = inst_26754__$1);

return statearr_26793;
})();
var statearr_26794_26813 = state_26777__$1;
(statearr_26794_26813[(2)] = null);

(statearr_26794_26813[(1)] = (2));


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
});})(c__19079__auto___26803,out))
;
return ((function (switch__19017__auto__,c__19079__auto___26803,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26798[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26798[(1)] = (1));

return statearr_26798;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26777){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26799){if((e26799 instanceof Object)){
var ex__19021__auto__ = e26799;
var statearr_26800_26814 = state_26777;
(statearr_26800_26814[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26815 = state_26777;
state_26777 = G__26815;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26803,out))
})();
var state__19081__auto__ = (function (){var statearr_26801 = f__19080__auto__.call(null);
(statearr_26801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26803);

return statearr_26801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26803,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__26817 = arguments.length;
switch (G__26817) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___26886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26886,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26886,out){
return (function (state_26855){
var state_val_26856 = (state_26855[(1)]);
if((state_val_26856 === (7))){
var inst_26851 = (state_26855[(2)]);
var state_26855__$1 = state_26855;
var statearr_26857_26887 = state_26855__$1;
(statearr_26857_26887[(2)] = inst_26851);

(statearr_26857_26887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (1))){
var inst_26818 = (new Array(n));
var inst_26819 = inst_26818;
var inst_26820 = (0);
var state_26855__$1 = (function (){var statearr_26858 = state_26855;
(statearr_26858[(7)] = inst_26820);

(statearr_26858[(8)] = inst_26819);

return statearr_26858;
})();
var statearr_26859_26888 = state_26855__$1;
(statearr_26859_26888[(2)] = null);

(statearr_26859_26888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (4))){
var inst_26823 = (state_26855[(9)]);
var inst_26823__$1 = (state_26855[(2)]);
var inst_26824 = (inst_26823__$1 == null);
var inst_26825 = cljs.core.not.call(null,inst_26824);
var state_26855__$1 = (function (){var statearr_26860 = state_26855;
(statearr_26860[(9)] = inst_26823__$1);

return statearr_26860;
})();
if(inst_26825){
var statearr_26861_26889 = state_26855__$1;
(statearr_26861_26889[(1)] = (5));

} else {
var statearr_26862_26890 = state_26855__$1;
(statearr_26862_26890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (15))){
var inst_26845 = (state_26855[(2)]);
var state_26855__$1 = state_26855;
var statearr_26863_26891 = state_26855__$1;
(statearr_26863_26891[(2)] = inst_26845);

(statearr_26863_26891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (13))){
var state_26855__$1 = state_26855;
var statearr_26864_26892 = state_26855__$1;
(statearr_26864_26892[(2)] = null);

(statearr_26864_26892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (6))){
var inst_26820 = (state_26855[(7)]);
var inst_26841 = (inst_26820 > (0));
var state_26855__$1 = state_26855;
if(cljs.core.truth_(inst_26841)){
var statearr_26865_26893 = state_26855__$1;
(statearr_26865_26893[(1)] = (12));

} else {
var statearr_26866_26894 = state_26855__$1;
(statearr_26866_26894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (3))){
var inst_26853 = (state_26855[(2)]);
var state_26855__$1 = state_26855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26855__$1,inst_26853);
} else {
if((state_val_26856 === (12))){
var inst_26819 = (state_26855[(8)]);
var inst_26843 = cljs.core.vec.call(null,inst_26819);
var state_26855__$1 = state_26855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26855__$1,(15),out,inst_26843);
} else {
if((state_val_26856 === (2))){
var state_26855__$1 = state_26855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26855__$1,(4),ch);
} else {
if((state_val_26856 === (11))){
var inst_26835 = (state_26855[(2)]);
var inst_26836 = (new Array(n));
var inst_26819 = inst_26836;
var inst_26820 = (0);
var state_26855__$1 = (function (){var statearr_26867 = state_26855;
(statearr_26867[(10)] = inst_26835);

(statearr_26867[(7)] = inst_26820);

(statearr_26867[(8)] = inst_26819);

return statearr_26867;
})();
var statearr_26868_26895 = state_26855__$1;
(statearr_26868_26895[(2)] = null);

(statearr_26868_26895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (9))){
var inst_26819 = (state_26855[(8)]);
var inst_26833 = cljs.core.vec.call(null,inst_26819);
var state_26855__$1 = state_26855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26855__$1,(11),out,inst_26833);
} else {
if((state_val_26856 === (5))){
var inst_26823 = (state_26855[(9)]);
var inst_26828 = (state_26855[(11)]);
var inst_26820 = (state_26855[(7)]);
var inst_26819 = (state_26855[(8)]);
var inst_26827 = (inst_26819[inst_26820] = inst_26823);
var inst_26828__$1 = (inst_26820 + (1));
var inst_26829 = (inst_26828__$1 < n);
var state_26855__$1 = (function (){var statearr_26869 = state_26855;
(statearr_26869[(12)] = inst_26827);

(statearr_26869[(11)] = inst_26828__$1);

return statearr_26869;
})();
if(cljs.core.truth_(inst_26829)){
var statearr_26870_26896 = state_26855__$1;
(statearr_26870_26896[(1)] = (8));

} else {
var statearr_26871_26897 = state_26855__$1;
(statearr_26871_26897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (14))){
var inst_26848 = (state_26855[(2)]);
var inst_26849 = cljs.core.async.close_BANG_.call(null,out);
var state_26855__$1 = (function (){var statearr_26873 = state_26855;
(statearr_26873[(13)] = inst_26848);

return statearr_26873;
})();
var statearr_26874_26898 = state_26855__$1;
(statearr_26874_26898[(2)] = inst_26849);

(statearr_26874_26898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (10))){
var inst_26839 = (state_26855[(2)]);
var state_26855__$1 = state_26855;
var statearr_26875_26899 = state_26855__$1;
(statearr_26875_26899[(2)] = inst_26839);

(statearr_26875_26899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (8))){
var inst_26828 = (state_26855[(11)]);
var inst_26819 = (state_26855[(8)]);
var tmp26872 = inst_26819;
var inst_26819__$1 = tmp26872;
var inst_26820 = inst_26828;
var state_26855__$1 = (function (){var statearr_26876 = state_26855;
(statearr_26876[(7)] = inst_26820);

(statearr_26876[(8)] = inst_26819__$1);

return statearr_26876;
})();
var statearr_26877_26900 = state_26855__$1;
(statearr_26877_26900[(2)] = null);

(statearr_26877_26900[(1)] = (2));


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
});})(c__19079__auto___26886,out))
;
return ((function (switch__19017__auto__,c__19079__auto___26886,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26881[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26881[(1)] = (1));

return statearr_26881;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26855){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26882){if((e26882 instanceof Object)){
var ex__19021__auto__ = e26882;
var statearr_26883_26901 = state_26855;
(statearr_26883_26901[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26902 = state_26855;
state_26855 = G__26902;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26886,out))
})();
var state__19081__auto__ = (function (){var statearr_26884 = f__19080__auto__.call(null);
(statearr_26884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26886);

return statearr_26884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26886,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__26904 = arguments.length;
switch (G__26904) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___26977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26977,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26977,out){
return (function (state_26946){
var state_val_26947 = (state_26946[(1)]);
if((state_val_26947 === (7))){
var inst_26942 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26948_26978 = state_26946__$1;
(statearr_26948_26978[(2)] = inst_26942);

(statearr_26948_26978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (1))){
var inst_26905 = [];
var inst_26906 = inst_26905;
var inst_26907 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26946__$1 = (function (){var statearr_26949 = state_26946;
(statearr_26949[(7)] = inst_26906);

(statearr_26949[(8)] = inst_26907);

return statearr_26949;
})();
var statearr_26950_26979 = state_26946__$1;
(statearr_26950_26979[(2)] = null);

(statearr_26950_26979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (4))){
var inst_26910 = (state_26946[(9)]);
var inst_26910__$1 = (state_26946[(2)]);
var inst_26911 = (inst_26910__$1 == null);
var inst_26912 = cljs.core.not.call(null,inst_26911);
var state_26946__$1 = (function (){var statearr_26951 = state_26946;
(statearr_26951[(9)] = inst_26910__$1);

return statearr_26951;
})();
if(inst_26912){
var statearr_26952_26980 = state_26946__$1;
(statearr_26952_26980[(1)] = (5));

} else {
var statearr_26953_26981 = state_26946__$1;
(statearr_26953_26981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (15))){
var inst_26936 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26954_26982 = state_26946__$1;
(statearr_26954_26982[(2)] = inst_26936);

(statearr_26954_26982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (13))){
var state_26946__$1 = state_26946;
var statearr_26955_26983 = state_26946__$1;
(statearr_26955_26983[(2)] = null);

(statearr_26955_26983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (6))){
var inst_26906 = (state_26946[(7)]);
var inst_26931 = inst_26906.length;
var inst_26932 = (inst_26931 > (0));
var state_26946__$1 = state_26946;
if(cljs.core.truth_(inst_26932)){
var statearr_26956_26984 = state_26946__$1;
(statearr_26956_26984[(1)] = (12));

} else {
var statearr_26957_26985 = state_26946__$1;
(statearr_26957_26985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (3))){
var inst_26944 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26946__$1,inst_26944);
} else {
if((state_val_26947 === (12))){
var inst_26906 = (state_26946[(7)]);
var inst_26934 = cljs.core.vec.call(null,inst_26906);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26946__$1,(15),out,inst_26934);
} else {
if((state_val_26947 === (2))){
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26946__$1,(4),ch);
} else {
if((state_val_26947 === (11))){
var inst_26910 = (state_26946[(9)]);
var inst_26914 = (state_26946[(10)]);
var inst_26924 = (state_26946[(2)]);
var inst_26925 = [];
var inst_26926 = inst_26925.push(inst_26910);
var inst_26906 = inst_26925;
var inst_26907 = inst_26914;
var state_26946__$1 = (function (){var statearr_26958 = state_26946;
(statearr_26958[(11)] = inst_26926);

(statearr_26958[(12)] = inst_26924);

(statearr_26958[(7)] = inst_26906);

(statearr_26958[(8)] = inst_26907);

return statearr_26958;
})();
var statearr_26959_26986 = state_26946__$1;
(statearr_26959_26986[(2)] = null);

(statearr_26959_26986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (9))){
var inst_26906 = (state_26946[(7)]);
var inst_26922 = cljs.core.vec.call(null,inst_26906);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26946__$1,(11),out,inst_26922);
} else {
if((state_val_26947 === (5))){
var inst_26910 = (state_26946[(9)]);
var inst_26914 = (state_26946[(10)]);
var inst_26907 = (state_26946[(8)]);
var inst_26914__$1 = f.call(null,inst_26910);
var inst_26915 = cljs.core._EQ_.call(null,inst_26914__$1,inst_26907);
var inst_26916 = cljs.core.keyword_identical_QMARK_.call(null,inst_26907,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26917 = (inst_26915) || (inst_26916);
var state_26946__$1 = (function (){var statearr_26960 = state_26946;
(statearr_26960[(10)] = inst_26914__$1);

return statearr_26960;
})();
if(cljs.core.truth_(inst_26917)){
var statearr_26961_26987 = state_26946__$1;
(statearr_26961_26987[(1)] = (8));

} else {
var statearr_26962_26988 = state_26946__$1;
(statearr_26962_26988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (14))){
var inst_26939 = (state_26946[(2)]);
var inst_26940 = cljs.core.async.close_BANG_.call(null,out);
var state_26946__$1 = (function (){var statearr_26964 = state_26946;
(statearr_26964[(13)] = inst_26939);

return statearr_26964;
})();
var statearr_26965_26989 = state_26946__$1;
(statearr_26965_26989[(2)] = inst_26940);

(statearr_26965_26989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (10))){
var inst_26929 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26966_26990 = state_26946__$1;
(statearr_26966_26990[(2)] = inst_26929);

(statearr_26966_26990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (8))){
var inst_26910 = (state_26946[(9)]);
var inst_26914 = (state_26946[(10)]);
var inst_26906 = (state_26946[(7)]);
var inst_26919 = inst_26906.push(inst_26910);
var tmp26963 = inst_26906;
var inst_26906__$1 = tmp26963;
var inst_26907 = inst_26914;
var state_26946__$1 = (function (){var statearr_26967 = state_26946;
(statearr_26967[(14)] = inst_26919);

(statearr_26967[(7)] = inst_26906__$1);

(statearr_26967[(8)] = inst_26907);

return statearr_26967;
})();
var statearr_26968_26991 = state_26946__$1;
(statearr_26968_26991[(2)] = null);

(statearr_26968_26991[(1)] = (2));


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
});})(c__19079__auto___26977,out))
;
return ((function (switch__19017__auto__,c__19079__auto___26977,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26972[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26972[(1)] = (1));

return statearr_26972;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26946){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26973){if((e26973 instanceof Object)){
var ex__19021__auto__ = e26973;
var statearr_26974_26992 = state_26946;
(statearr_26974_26992[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26993 = state_26946;
state_26946 = G__26993;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26977,out))
})();
var state__19081__auto__ = (function (){var statearr_26975 = f__19080__auto__.call(null);
(statearr_26975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26977);

return statearr_26975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26977,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436696511482
// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26211 = (function (fn_handler,f,meta26212){
this.fn_handler = fn_handler;
this.f = f;
this.meta26212 = meta26212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26213,meta26212__$1){
var self__ = this;
var _26213__$1 = this;
return (new cljs.core.async.t_cljs$core$async26211(self__.fn_handler,self__.f,meta26212__$1));
});

cljs.core.async.t_cljs$core$async26211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26213){
var self__ = this;
var _26213__$1 = this;
return self__.meta26212;
});

cljs.core.async.t_cljs$core$async26211.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26212","meta26212",-2008123450,null)], null);
});

cljs.core.async.t_cljs$core$async26211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26211";

cljs.core.async.t_cljs$core$async26211.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async26211");
});

cljs.core.async.__GT_t_cljs$core$async26211 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26211(fn_handler__$1,f__$1,meta26212){
return (new cljs.core.async.t_cljs$core$async26211(fn_handler__$1,f__$1,meta26212));
});

}

return (new cljs.core.async.t_cljs$core$async26211(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26216 = [];
var len__17337__auto___26219 = arguments.length;
var i__17338__auto___26220 = (0);
while(true){
if((i__17338__auto___26220 < len__17337__auto___26219)){
args26216.push((arguments[i__17338__auto___26220]));

var G__26221 = (i__17338__auto___26220 + (1));
i__17338__auto___26220 = G__26221;
continue;
} else {
}
break;
}

var G__26218 = args26216.length;
switch (G__26218) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26216.length)].join('')));

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
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26223 = [];
var len__17337__auto___26226 = arguments.length;
var i__17338__auto___26227 = (0);
while(true){
if((i__17338__auto___26227 < len__17337__auto___26226)){
args26223.push((arguments[i__17338__auto___26227]));

var G__26228 = (i__17338__auto___26227 + (1));
i__17338__auto___26227 = G__26228;
continue;
} else {
}
break;
}

var G__26225 = args26223.length;
switch (G__26225) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26223.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26230 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26230);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26230,ret){
return (function (){
return fn1.call(null,val_26230);
});})(val_26230,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26231 = [];
var len__17337__auto___26234 = arguments.length;
var i__17338__auto___26235 = (0);
while(true){
if((i__17338__auto___26235 < len__17337__auto___26234)){
args26231.push((arguments[i__17338__auto___26235]));

var G__26236 = (i__17338__auto___26235 + (1));
i__17338__auto___26235 = G__26236;
continue;
} else {
}
break;
}

var G__26233 = args26231.length;
switch (G__26233) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26231.length)].join('')));

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
var n__17182__auto___26238 = n;
var x_26239 = (0);
while(true){
if((x_26239 < n__17182__auto___26238)){
(a[x_26239] = (0));

var G__26240 = (x_26239 + (1));
x_26239 = G__26240;
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

var G__26241 = (i + (1));
i = G__26241;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26245 = (function (alt_flag,flag,meta26246){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26246 = meta26246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26247,meta26246__$1){
var self__ = this;
var _26247__$1 = this;
return (new cljs.core.async.t_cljs$core$async26245(self__.alt_flag,self__.flag,meta26246__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26247){
var self__ = this;
var _26247__$1 = this;
return self__.meta26246;
});})(flag))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26245.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26246","meta26246",-685618736,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26245";

cljs.core.async.t_cljs$core$async26245.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async26245");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26245 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26245(alt_flag__$1,flag__$1,meta26246){
return (new cljs.core.async.t_cljs$core$async26245(alt_flag__$1,flag__$1,meta26246));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26245(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26251 = (function (alt_handler,flag,cb,meta26252){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26252 = meta26252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26253,meta26252__$1){
var self__ = this;
var _26253__$1 = this;
return (new cljs.core.async.t_cljs$core$async26251(self__.alt_handler,self__.flag,self__.cb,meta26252__$1));
});

cljs.core.async.t_cljs$core$async26251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26253){
var self__ = this;
var _26253__$1 = this;
return self__.meta26252;
});

cljs.core.async.t_cljs$core$async26251.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26252","meta26252",-1197428566,null)], null);
});

cljs.core.async.t_cljs$core$async26251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26251";

cljs.core.async.t_cljs$core$async26251.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async26251");
});

cljs.core.async.__GT_t_cljs$core$async26251 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26251(alt_handler__$1,flag__$1,cb__$1,meta26252){
return (new cljs.core.async.t_cljs$core$async26251(alt_handler__$1,flag__$1,cb__$1,meta26252));
});

}

return (new cljs.core.async.t_cljs$core$async26251(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26254_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26254_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26255_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26255_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16279__auto__ = wport;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26256 = (i + (1));
i = G__26256;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16279__auto__ = ret;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16267__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16267__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16267__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17344__auto__ = [];
var len__17337__auto___26262 = arguments.length;
var i__17338__auto___26263 = (0);
while(true){
if((i__17338__auto___26263 < len__17337__auto___26262)){
args__17344__auto__.push((arguments[i__17338__auto___26263]));

var G__26264 = (i__17338__auto___26263 + (1));
i__17338__auto___26263 = G__26264;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((1) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17345__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26259){
var map__26260 = p__26259;
var map__26260__$1 = ((((!((map__26260 == null)))?((((map__26260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26260):map__26260);
var opts = map__26260__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26257){
var G__26258 = cljs.core.first.call(null,seq26257);
var seq26257__$1 = cljs.core.next.call(null,seq26257);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26258,seq26257__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26265 = [];
var len__17337__auto___26315 = arguments.length;
var i__17338__auto___26316 = (0);
while(true){
if((i__17338__auto___26316 < len__17337__auto___26315)){
args26265.push((arguments[i__17338__auto___26316]));

var G__26317 = (i__17338__auto___26316 + (1));
i__17338__auto___26316 = G__26317;
continue;
} else {
}
break;
}

var G__26267 = args26265.length;
switch (G__26267) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26265.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19582__auto___26319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___26319){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___26319){
return (function (state_26291){
var state_val_26292 = (state_26291[(1)]);
if((state_val_26292 === (7))){
var inst_26287 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26293_26320 = state_26291__$1;
(statearr_26293_26320[(2)] = inst_26287);

(statearr_26293_26320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (1))){
var state_26291__$1 = state_26291;
var statearr_26294_26321 = state_26291__$1;
(statearr_26294_26321[(2)] = null);

(statearr_26294_26321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (4))){
var inst_26270 = (state_26291[(7)]);
var inst_26270__$1 = (state_26291[(2)]);
var inst_26271 = (inst_26270__$1 == null);
var state_26291__$1 = (function (){var statearr_26295 = state_26291;
(statearr_26295[(7)] = inst_26270__$1);

return statearr_26295;
})();
if(cljs.core.truth_(inst_26271)){
var statearr_26296_26322 = state_26291__$1;
(statearr_26296_26322[(1)] = (5));

} else {
var statearr_26297_26323 = state_26291__$1;
(statearr_26297_26323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (13))){
var state_26291__$1 = state_26291;
var statearr_26298_26324 = state_26291__$1;
(statearr_26298_26324[(2)] = null);

(statearr_26298_26324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (6))){
var inst_26270 = (state_26291[(7)]);
var state_26291__$1 = state_26291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26291__$1,(11),to,inst_26270);
} else {
if((state_val_26292 === (3))){
var inst_26289 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26291__$1,inst_26289);
} else {
if((state_val_26292 === (12))){
var state_26291__$1 = state_26291;
var statearr_26299_26325 = state_26291__$1;
(statearr_26299_26325[(2)] = null);

(statearr_26299_26325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (2))){
var state_26291__$1 = state_26291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26291__$1,(4),from);
} else {
if((state_val_26292 === (11))){
var inst_26280 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
if(cljs.core.truth_(inst_26280)){
var statearr_26300_26326 = state_26291__$1;
(statearr_26300_26326[(1)] = (12));

} else {
var statearr_26301_26327 = state_26291__$1;
(statearr_26301_26327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (9))){
var state_26291__$1 = state_26291;
var statearr_26302_26328 = state_26291__$1;
(statearr_26302_26328[(2)] = null);

(statearr_26302_26328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (5))){
var state_26291__$1 = state_26291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26303_26329 = state_26291__$1;
(statearr_26303_26329[(1)] = (8));

} else {
var statearr_26304_26330 = state_26291__$1;
(statearr_26304_26330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (14))){
var inst_26285 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26305_26331 = state_26291__$1;
(statearr_26305_26331[(2)] = inst_26285);

(statearr_26305_26331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (10))){
var inst_26277 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26306_26332 = state_26291__$1;
(statearr_26306_26332[(2)] = inst_26277);

(statearr_26306_26332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (8))){
var inst_26274 = cljs.core.async.close_BANG_.call(null,to);
var state_26291__$1 = state_26291;
var statearr_26307_26333 = state_26291__$1;
(statearr_26307_26333[(2)] = inst_26274);

(statearr_26307_26333[(1)] = (10));


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
});})(c__19582__auto___26319))
;
return ((function (switch__19517__auto__,c__19582__auto___26319){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_26311 = [null,null,null,null,null,null,null,null];
(statearr_26311[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_26311[(1)] = (1));

return statearr_26311;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_26291){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26312){if((e26312 instanceof Object)){
var ex__19521__auto__ = e26312;
var statearr_26313_26334 = state_26291;
(statearr_26313_26334[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26335 = state_26291;
state_26291 = G__26335;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_26291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_26291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___26319))
})();
var state__19584__auto__ = (function (){var statearr_26314 = f__19583__auto__.call(null);
(statearr_26314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___26319);

return statearr_26314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___26319))
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
return (function (p__26519){
var vec__26520 = p__26519;
var v = cljs.core.nth.call(null,vec__26520,(0),null);
var p = cljs.core.nth.call(null,vec__26520,(1),null);
var job = vec__26520;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19582__auto___26702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___26702,res,vec__26520,v,p,job,jobs,results){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___26702,res,vec__26520,v,p,job,jobs,results){
return (function (state_26525){
var state_val_26526 = (state_26525[(1)]);
if((state_val_26526 === (1))){
var state_26525__$1 = state_26525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26525__$1,(2),res,v);
} else {
if((state_val_26526 === (2))){
var inst_26522 = (state_26525[(2)]);
var inst_26523 = cljs.core.async.close_BANG_.call(null,res);
var state_26525__$1 = (function (){var statearr_26527 = state_26525;
(statearr_26527[(7)] = inst_26522);

return statearr_26527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26525__$1,inst_26523);
} else {
return null;
}
}
});})(c__19582__auto___26702,res,vec__26520,v,p,job,jobs,results))
;
return ((function (switch__19517__auto__,c__19582__auto___26702,res,vec__26520,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0 = (function (){
var statearr_26531 = [null,null,null,null,null,null,null,null];
(statearr_26531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__);

(statearr_26531[(1)] = (1));

return statearr_26531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1 = (function (state_26525){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26532){if((e26532 instanceof Object)){
var ex__19521__auto__ = e26532;
var statearr_26533_26703 = state_26525;
(statearr_26533_26703[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26704 = state_26525;
state_26525 = G__26704;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = function(state_26525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1.call(this,state_26525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___26702,res,vec__26520,v,p,job,jobs,results))
})();
var state__19584__auto__ = (function (){var statearr_26534 = f__19583__auto__.call(null);
(statearr_26534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___26702);

return statearr_26534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___26702,res,vec__26520,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26535){
var vec__26536 = p__26535;
var v = cljs.core.nth.call(null,vec__26536,(0),null);
var p = cljs.core.nth.call(null,vec__26536,(1),null);
var job = vec__26536;
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
var n__17182__auto___26705 = n;
var __26706 = (0);
while(true){
if((__26706 < n__17182__auto___26705)){
var G__26537_26707 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26537_26707) {
case "compute":
var c__19582__auto___26709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26706,c__19582__auto___26709,G__26537_26707,n__17182__auto___26705,jobs,results,process,async){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (__26706,c__19582__auto___26709,G__26537_26707,n__17182__auto___26705,jobs,results,process,async){
return (function (state_26550){
var state_val_26551 = (state_26550[(1)]);
if((state_val_26551 === (1))){
var state_26550__$1 = state_26550;
var statearr_26552_26710 = state_26550__$1;
(statearr_26552_26710[(2)] = null);

(statearr_26552_26710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26551 === (2))){
var state_26550__$1 = state_26550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26550__$1,(4),jobs);
} else {
if((state_val_26551 === (3))){
var inst_26548 = (state_26550[(2)]);
var state_26550__$1 = state_26550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26550__$1,inst_26548);
} else {
if((state_val_26551 === (4))){
var inst_26540 = (state_26550[(2)]);
var inst_26541 = process.call(null,inst_26540);
var state_26550__$1 = state_26550;
if(cljs.core.truth_(inst_26541)){
var statearr_26553_26711 = state_26550__$1;
(statearr_26553_26711[(1)] = (5));

} else {
var statearr_26554_26712 = state_26550__$1;
(statearr_26554_26712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26551 === (5))){
var state_26550__$1 = state_26550;
var statearr_26555_26713 = state_26550__$1;
(statearr_26555_26713[(2)] = null);

(statearr_26555_26713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26551 === (6))){
var state_26550__$1 = state_26550;
var statearr_26556_26714 = state_26550__$1;
(statearr_26556_26714[(2)] = null);

(statearr_26556_26714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26551 === (7))){
var inst_26546 = (state_26550[(2)]);
var state_26550__$1 = state_26550;
var statearr_26557_26715 = state_26550__$1;
(statearr_26557_26715[(2)] = inst_26546);

(statearr_26557_26715[(1)] = (3));


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
});})(__26706,c__19582__auto___26709,G__26537_26707,n__17182__auto___26705,jobs,results,process,async))
;
return ((function (__26706,switch__19517__auto__,c__19582__auto___26709,G__26537_26707,n__17182__auto___26705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0 = (function (){
var statearr_26561 = [null,null,null,null,null,null,null];
(statearr_26561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__);

(statearr_26561[(1)] = (1));

return statearr_26561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1 = (function (state_26550){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26562){if((e26562 instanceof Object)){
var ex__19521__auto__ = e26562;
var statearr_26563_26716 = state_26550;
(statearr_26563_26716[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26717 = state_26550;
state_26550 = G__26717;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = function(state_26550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1.call(this,state_26550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__;
})()
;})(__26706,switch__19517__auto__,c__19582__auto___26709,G__26537_26707,n__17182__auto___26705,jobs,results,process,async))
})();
var state__19584__auto__ = (function (){var statearr_26564 = f__19583__auto__.call(null);
(statearr_26564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___26709);

return statearr_26564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(__26706,c__19582__auto___26709,G__26537_26707,n__17182__auto___26705,jobs,results,process,async))
);


break;
case "async":
var c__19582__auto___26718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26706,c__19582__auto___26718,G__26537_26707,n__17182__auto___26705,jobs,results,process,async){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (__26706,c__19582__auto___26718,G__26537_26707,n__17182__auto___26705,jobs,results,process,async){
return (function (state_26577){
var state_val_26578 = (state_26577[(1)]);
if((state_val_26578 === (1))){
var state_26577__$1 = state_26577;
var statearr_26579_26719 = state_26577__$1;
(statearr_26579_26719[(2)] = null);

(statearr_26579_26719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (2))){
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26577__$1,(4),jobs);
} else {
if((state_val_26578 === (3))){
var inst_26575 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26577__$1,inst_26575);
} else {
if((state_val_26578 === (4))){
var inst_26567 = (state_26577[(2)]);
var inst_26568 = async.call(null,inst_26567);
var state_26577__$1 = state_26577;
if(cljs.core.truth_(inst_26568)){
var statearr_26580_26720 = state_26577__$1;
(statearr_26580_26720[(1)] = (5));

} else {
var statearr_26581_26721 = state_26577__$1;
(statearr_26581_26721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (5))){
var state_26577__$1 = state_26577;
var statearr_26582_26722 = state_26577__$1;
(statearr_26582_26722[(2)] = null);

(statearr_26582_26722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (6))){
var state_26577__$1 = state_26577;
var statearr_26583_26723 = state_26577__$1;
(statearr_26583_26723[(2)] = null);

(statearr_26583_26723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (7))){
var inst_26573 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26584_26724 = state_26577__$1;
(statearr_26584_26724[(2)] = inst_26573);

(statearr_26584_26724[(1)] = (3));


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
});})(__26706,c__19582__auto___26718,G__26537_26707,n__17182__auto___26705,jobs,results,process,async))
;
return ((function (__26706,switch__19517__auto__,c__19582__auto___26718,G__26537_26707,n__17182__auto___26705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0 = (function (){
var statearr_26588 = [null,null,null,null,null,null,null];
(statearr_26588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__);

(statearr_26588[(1)] = (1));

return statearr_26588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1 = (function (state_26577){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26589){if((e26589 instanceof Object)){
var ex__19521__auto__ = e26589;
var statearr_26590_26725 = state_26577;
(statearr_26590_26725[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26726 = state_26577;
state_26577 = G__26726;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = function(state_26577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1.call(this,state_26577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__;
})()
;})(__26706,switch__19517__auto__,c__19582__auto___26718,G__26537_26707,n__17182__auto___26705,jobs,results,process,async))
})();
var state__19584__auto__ = (function (){var statearr_26591 = f__19583__auto__.call(null);
(statearr_26591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___26718);

return statearr_26591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(__26706,c__19582__auto___26718,G__26537_26707,n__17182__auto___26705,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26727 = (__26706 + (1));
__26706 = G__26727;
continue;
} else {
}
break;
}

var c__19582__auto___26728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___26728,jobs,results,process,async){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___26728,jobs,results,process,async){
return (function (state_26613){
var state_val_26614 = (state_26613[(1)]);
if((state_val_26614 === (1))){
var state_26613__$1 = state_26613;
var statearr_26615_26729 = state_26613__$1;
(statearr_26615_26729[(2)] = null);

(statearr_26615_26729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26614 === (2))){
var state_26613__$1 = state_26613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26613__$1,(4),from);
} else {
if((state_val_26614 === (3))){
var inst_26611 = (state_26613[(2)]);
var state_26613__$1 = state_26613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26613__$1,inst_26611);
} else {
if((state_val_26614 === (4))){
var inst_26594 = (state_26613[(7)]);
var inst_26594__$1 = (state_26613[(2)]);
var inst_26595 = (inst_26594__$1 == null);
var state_26613__$1 = (function (){var statearr_26616 = state_26613;
(statearr_26616[(7)] = inst_26594__$1);

return statearr_26616;
})();
if(cljs.core.truth_(inst_26595)){
var statearr_26617_26730 = state_26613__$1;
(statearr_26617_26730[(1)] = (5));

} else {
var statearr_26618_26731 = state_26613__$1;
(statearr_26618_26731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26614 === (5))){
var inst_26597 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26613__$1 = state_26613;
var statearr_26619_26732 = state_26613__$1;
(statearr_26619_26732[(2)] = inst_26597);

(statearr_26619_26732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26614 === (6))){
var inst_26594 = (state_26613[(7)]);
var inst_26599 = (state_26613[(8)]);
var inst_26599__$1 = cljs.core.async.chan.call(null,(1));
var inst_26600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26601 = [inst_26594,inst_26599__$1];
var inst_26602 = (new cljs.core.PersistentVector(null,2,(5),inst_26600,inst_26601,null));
var state_26613__$1 = (function (){var statearr_26620 = state_26613;
(statearr_26620[(8)] = inst_26599__$1);

return statearr_26620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26613__$1,(8),jobs,inst_26602);
} else {
if((state_val_26614 === (7))){
var inst_26609 = (state_26613[(2)]);
var state_26613__$1 = state_26613;
var statearr_26621_26733 = state_26613__$1;
(statearr_26621_26733[(2)] = inst_26609);

(statearr_26621_26733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26614 === (8))){
var inst_26599 = (state_26613[(8)]);
var inst_26604 = (state_26613[(2)]);
var state_26613__$1 = (function (){var statearr_26622 = state_26613;
(statearr_26622[(9)] = inst_26604);

return statearr_26622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26613__$1,(9),results,inst_26599);
} else {
if((state_val_26614 === (9))){
var inst_26606 = (state_26613[(2)]);
var state_26613__$1 = (function (){var statearr_26623 = state_26613;
(statearr_26623[(10)] = inst_26606);

return statearr_26623;
})();
var statearr_26624_26734 = state_26613__$1;
(statearr_26624_26734[(2)] = null);

(statearr_26624_26734[(1)] = (2));


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
});})(c__19582__auto___26728,jobs,results,process,async))
;
return ((function (switch__19517__auto__,c__19582__auto___26728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1 = (function (state_26613){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__19521__auto__ = e26629;
var statearr_26630_26735 = state_26613;
(statearr_26630_26735[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26736 = state_26613;
state_26613 = G__26736;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = function(state_26613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1.call(this,state_26613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___26728,jobs,results,process,async))
})();
var state__19584__auto__ = (function (){var statearr_26631 = f__19583__auto__.call(null);
(statearr_26631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___26728);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___26728,jobs,results,process,async))
);


var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__,jobs,results,process,async){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__,jobs,results,process,async){
return (function (state_26669){
var state_val_26670 = (state_26669[(1)]);
if((state_val_26670 === (7))){
var inst_26665 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
var statearr_26671_26737 = state_26669__$1;
(statearr_26671_26737[(2)] = inst_26665);

(statearr_26671_26737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (20))){
var state_26669__$1 = state_26669;
var statearr_26672_26738 = state_26669__$1;
(statearr_26672_26738[(2)] = null);

(statearr_26672_26738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (1))){
var state_26669__$1 = state_26669;
var statearr_26673_26739 = state_26669__$1;
(statearr_26673_26739[(2)] = null);

(statearr_26673_26739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (4))){
var inst_26634 = (state_26669[(7)]);
var inst_26634__$1 = (state_26669[(2)]);
var inst_26635 = (inst_26634__$1 == null);
var state_26669__$1 = (function (){var statearr_26674 = state_26669;
(statearr_26674[(7)] = inst_26634__$1);

return statearr_26674;
})();
if(cljs.core.truth_(inst_26635)){
var statearr_26675_26740 = state_26669__$1;
(statearr_26675_26740[(1)] = (5));

} else {
var statearr_26676_26741 = state_26669__$1;
(statearr_26676_26741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (15))){
var inst_26647 = (state_26669[(8)]);
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26669__$1,(18),to,inst_26647);
} else {
if((state_val_26670 === (21))){
var inst_26660 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
var statearr_26677_26742 = state_26669__$1;
(statearr_26677_26742[(2)] = inst_26660);

(statearr_26677_26742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (13))){
var inst_26662 = (state_26669[(2)]);
var state_26669__$1 = (function (){var statearr_26678 = state_26669;
(statearr_26678[(9)] = inst_26662);

return statearr_26678;
})();
var statearr_26679_26743 = state_26669__$1;
(statearr_26679_26743[(2)] = null);

(statearr_26679_26743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (6))){
var inst_26634 = (state_26669[(7)]);
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26669__$1,(11),inst_26634);
} else {
if((state_val_26670 === (17))){
var inst_26655 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
if(cljs.core.truth_(inst_26655)){
var statearr_26680_26744 = state_26669__$1;
(statearr_26680_26744[(1)] = (19));

} else {
var statearr_26681_26745 = state_26669__$1;
(statearr_26681_26745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (3))){
var inst_26667 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26669__$1,inst_26667);
} else {
if((state_val_26670 === (12))){
var inst_26644 = (state_26669[(10)]);
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26669__$1,(14),inst_26644);
} else {
if((state_val_26670 === (2))){
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26669__$1,(4),results);
} else {
if((state_val_26670 === (19))){
var state_26669__$1 = state_26669;
var statearr_26682_26746 = state_26669__$1;
(statearr_26682_26746[(2)] = null);

(statearr_26682_26746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (11))){
var inst_26644 = (state_26669[(2)]);
var state_26669__$1 = (function (){var statearr_26683 = state_26669;
(statearr_26683[(10)] = inst_26644);

return statearr_26683;
})();
var statearr_26684_26747 = state_26669__$1;
(statearr_26684_26747[(2)] = null);

(statearr_26684_26747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (9))){
var state_26669__$1 = state_26669;
var statearr_26685_26748 = state_26669__$1;
(statearr_26685_26748[(2)] = null);

(statearr_26685_26748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (5))){
var state_26669__$1 = state_26669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26686_26749 = state_26669__$1;
(statearr_26686_26749[(1)] = (8));

} else {
var statearr_26687_26750 = state_26669__$1;
(statearr_26687_26750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (14))){
var inst_26647 = (state_26669[(8)]);
var inst_26649 = (state_26669[(11)]);
var inst_26647__$1 = (state_26669[(2)]);
var inst_26648 = (inst_26647__$1 == null);
var inst_26649__$1 = cljs.core.not.call(null,inst_26648);
var state_26669__$1 = (function (){var statearr_26688 = state_26669;
(statearr_26688[(8)] = inst_26647__$1);

(statearr_26688[(11)] = inst_26649__$1);

return statearr_26688;
})();
if(inst_26649__$1){
var statearr_26689_26751 = state_26669__$1;
(statearr_26689_26751[(1)] = (15));

} else {
var statearr_26690_26752 = state_26669__$1;
(statearr_26690_26752[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (16))){
var inst_26649 = (state_26669[(11)]);
var state_26669__$1 = state_26669;
var statearr_26691_26753 = state_26669__$1;
(statearr_26691_26753[(2)] = inst_26649);

(statearr_26691_26753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (10))){
var inst_26641 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
var statearr_26692_26754 = state_26669__$1;
(statearr_26692_26754[(2)] = inst_26641);

(statearr_26692_26754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (18))){
var inst_26652 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
var statearr_26693_26755 = state_26669__$1;
(statearr_26693_26755[(2)] = inst_26652);

(statearr_26693_26755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26670 === (8))){
var inst_26638 = cljs.core.async.close_BANG_.call(null,to);
var state_26669__$1 = state_26669;
var statearr_26694_26756 = state_26669__$1;
(statearr_26694_26756[(2)] = inst_26638);

(statearr_26694_26756[(1)] = (10));


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
});})(c__19582__auto__,jobs,results,process,async))
;
return ((function (switch__19517__auto__,c__19582__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0 = (function (){
var statearr_26698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__);

(statearr_26698[(1)] = (1));

return statearr_26698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1 = (function (state_26669){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26699){if((e26699 instanceof Object)){
var ex__19521__auto__ = e26699;
var statearr_26700_26757 = state_26669;
(statearr_26700_26757[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26758 = state_26669;
state_26669 = G__26758;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__ = function(state_26669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1.call(this,state_26669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__,jobs,results,process,async))
})();
var state__19584__auto__ = (function (){var statearr_26701 = f__19583__auto__.call(null);
(statearr_26701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_26701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__,jobs,results,process,async))
);

return c__19582__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26759 = [];
var len__17337__auto___26762 = arguments.length;
var i__17338__auto___26763 = (0);
while(true){
if((i__17338__auto___26763 < len__17337__auto___26762)){
args26759.push((arguments[i__17338__auto___26763]));

var G__26764 = (i__17338__auto___26763 + (1));
i__17338__auto___26763 = G__26764;
continue;
} else {
}
break;
}

var G__26761 = args26759.length;
switch (G__26761) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26759.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26766 = [];
var len__17337__auto___26769 = arguments.length;
var i__17338__auto___26770 = (0);
while(true){
if((i__17338__auto___26770 < len__17337__auto___26769)){
args26766.push((arguments[i__17338__auto___26770]));

var G__26771 = (i__17338__auto___26770 + (1));
i__17338__auto___26770 = G__26771;
continue;
} else {
}
break;
}

var G__26768 = args26766.length;
switch (G__26768) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26766.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26773 = [];
var len__17337__auto___26826 = arguments.length;
var i__17338__auto___26827 = (0);
while(true){
if((i__17338__auto___26827 < len__17337__auto___26826)){
args26773.push((arguments[i__17338__auto___26827]));

var G__26828 = (i__17338__auto___26827 + (1));
i__17338__auto___26827 = G__26828;
continue;
} else {
}
break;
}

var G__26775 = args26773.length;
switch (G__26775) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26773.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19582__auto___26830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___26830,tc,fc){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___26830,tc,fc){
return (function (state_26801){
var state_val_26802 = (state_26801[(1)]);
if((state_val_26802 === (7))){
var inst_26797 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26803_26831 = state_26801__$1;
(statearr_26803_26831[(2)] = inst_26797);

(statearr_26803_26831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (1))){
var state_26801__$1 = state_26801;
var statearr_26804_26832 = state_26801__$1;
(statearr_26804_26832[(2)] = null);

(statearr_26804_26832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (4))){
var inst_26778 = (state_26801[(7)]);
var inst_26778__$1 = (state_26801[(2)]);
var inst_26779 = (inst_26778__$1 == null);
var state_26801__$1 = (function (){var statearr_26805 = state_26801;
(statearr_26805[(7)] = inst_26778__$1);

return statearr_26805;
})();
if(cljs.core.truth_(inst_26779)){
var statearr_26806_26833 = state_26801__$1;
(statearr_26806_26833[(1)] = (5));

} else {
var statearr_26807_26834 = state_26801__$1;
(statearr_26807_26834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (13))){
var state_26801__$1 = state_26801;
var statearr_26808_26835 = state_26801__$1;
(statearr_26808_26835[(2)] = null);

(statearr_26808_26835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (6))){
var inst_26778 = (state_26801[(7)]);
var inst_26784 = p.call(null,inst_26778);
var state_26801__$1 = state_26801;
if(cljs.core.truth_(inst_26784)){
var statearr_26809_26836 = state_26801__$1;
(statearr_26809_26836[(1)] = (9));

} else {
var statearr_26810_26837 = state_26801__$1;
(statearr_26810_26837[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (3))){
var inst_26799 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26801__$1,inst_26799);
} else {
if((state_val_26802 === (12))){
var state_26801__$1 = state_26801;
var statearr_26811_26838 = state_26801__$1;
(statearr_26811_26838[(2)] = null);

(statearr_26811_26838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (2))){
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26801__$1,(4),ch);
} else {
if((state_val_26802 === (11))){
var inst_26778 = (state_26801[(7)]);
var inst_26788 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26801__$1,(8),inst_26788,inst_26778);
} else {
if((state_val_26802 === (9))){
var state_26801__$1 = state_26801;
var statearr_26812_26839 = state_26801__$1;
(statearr_26812_26839[(2)] = tc);

(statearr_26812_26839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (5))){
var inst_26781 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26782 = cljs.core.async.close_BANG_.call(null,fc);
var state_26801__$1 = (function (){var statearr_26813 = state_26801;
(statearr_26813[(8)] = inst_26781);

return statearr_26813;
})();
var statearr_26814_26840 = state_26801__$1;
(statearr_26814_26840[(2)] = inst_26782);

(statearr_26814_26840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (14))){
var inst_26795 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26815_26841 = state_26801__$1;
(statearr_26815_26841[(2)] = inst_26795);

(statearr_26815_26841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (10))){
var state_26801__$1 = state_26801;
var statearr_26816_26842 = state_26801__$1;
(statearr_26816_26842[(2)] = fc);

(statearr_26816_26842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (8))){
var inst_26790 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
if(cljs.core.truth_(inst_26790)){
var statearr_26817_26843 = state_26801__$1;
(statearr_26817_26843[(1)] = (12));

} else {
var statearr_26818_26844 = state_26801__$1;
(statearr_26818_26844[(1)] = (13));

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
});})(c__19582__auto___26830,tc,fc))
;
return ((function (switch__19517__auto__,c__19582__auto___26830,tc,fc){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_26822 = [null,null,null,null,null,null,null,null,null];
(statearr_26822[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_26822[(1)] = (1));

return statearr_26822;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_26801){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26823){if((e26823 instanceof Object)){
var ex__19521__auto__ = e26823;
var statearr_26824_26845 = state_26801;
(statearr_26824_26845[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26846 = state_26801;
state_26801 = G__26846;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_26801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_26801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___26830,tc,fc))
})();
var state__19584__auto__ = (function (){var statearr_26825 = f__19583__auto__.call(null);
(statearr_26825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___26830);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___26830,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__){
return (function (state_26893){
var state_val_26894 = (state_26893[(1)]);
if((state_val_26894 === (1))){
var inst_26879 = init;
var state_26893__$1 = (function (){var statearr_26895 = state_26893;
(statearr_26895[(7)] = inst_26879);

return statearr_26895;
})();
var statearr_26896_26911 = state_26893__$1;
(statearr_26896_26911[(2)] = null);

(statearr_26896_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (2))){
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26893__$1,(4),ch);
} else {
if((state_val_26894 === (3))){
var inst_26891 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26893__$1,inst_26891);
} else {
if((state_val_26894 === (4))){
var inst_26882 = (state_26893[(8)]);
var inst_26882__$1 = (state_26893[(2)]);
var inst_26883 = (inst_26882__$1 == null);
var state_26893__$1 = (function (){var statearr_26897 = state_26893;
(statearr_26897[(8)] = inst_26882__$1);

return statearr_26897;
})();
if(cljs.core.truth_(inst_26883)){
var statearr_26898_26912 = state_26893__$1;
(statearr_26898_26912[(1)] = (5));

} else {
var statearr_26899_26913 = state_26893__$1;
(statearr_26899_26913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (5))){
var inst_26879 = (state_26893[(7)]);
var state_26893__$1 = state_26893;
var statearr_26900_26914 = state_26893__$1;
(statearr_26900_26914[(2)] = inst_26879);

(statearr_26900_26914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (6))){
var inst_26879 = (state_26893[(7)]);
var inst_26882 = (state_26893[(8)]);
var inst_26886 = f.call(null,inst_26879,inst_26882);
var inst_26879__$1 = inst_26886;
var state_26893__$1 = (function (){var statearr_26901 = state_26893;
(statearr_26901[(7)] = inst_26879__$1);

return statearr_26901;
})();
var statearr_26902_26915 = state_26893__$1;
(statearr_26902_26915[(2)] = null);

(statearr_26902_26915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (7))){
var inst_26889 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26903_26916 = state_26893__$1;
(statearr_26903_26916[(2)] = inst_26889);

(statearr_26903_26916[(1)] = (3));


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
});})(c__19582__auto__))
;
return ((function (switch__19517__auto__,c__19582__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19518__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19518__auto____0 = (function (){
var statearr_26907 = [null,null,null,null,null,null,null,null,null];
(statearr_26907[(0)] = cljs$core$async$reduce_$_state_machine__19518__auto__);

(statearr_26907[(1)] = (1));

return statearr_26907;
});
var cljs$core$async$reduce_$_state_machine__19518__auto____1 = (function (state_26893){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26908){if((e26908 instanceof Object)){
var ex__19521__auto__ = e26908;
var statearr_26909_26917 = state_26893;
(statearr_26909_26917[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26893;
state_26893 = G__26918;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19518__auto__ = function(state_26893){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19518__auto____1.call(this,state_26893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19518__auto____0;
cljs$core$async$reduce_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19518__auto____1;
return cljs$core$async$reduce_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__))
})();
var state__19584__auto__ = (function (){var statearr_26910 = f__19583__auto__.call(null);
(statearr_26910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_26910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__))
);

return c__19582__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26919 = [];
var len__17337__auto___26971 = arguments.length;
var i__17338__auto___26972 = (0);
while(true){
if((i__17338__auto___26972 < len__17337__auto___26971)){
args26919.push((arguments[i__17338__auto___26972]));

var G__26973 = (i__17338__auto___26972 + (1));
i__17338__auto___26972 = G__26973;
continue;
} else {
}
break;
}

var G__26921 = args26919.length;
switch (G__26921) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26919.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__){
return (function (state_26946){
var state_val_26947 = (state_26946[(1)]);
if((state_val_26947 === (7))){
var inst_26928 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26948_26975 = state_26946__$1;
(statearr_26948_26975[(2)] = inst_26928);

(statearr_26948_26975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (1))){
var inst_26922 = cljs.core.seq.call(null,coll);
var inst_26923 = inst_26922;
var state_26946__$1 = (function (){var statearr_26949 = state_26946;
(statearr_26949[(7)] = inst_26923);

return statearr_26949;
})();
var statearr_26950_26976 = state_26946__$1;
(statearr_26950_26976[(2)] = null);

(statearr_26950_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (4))){
var inst_26923 = (state_26946[(7)]);
var inst_26926 = cljs.core.first.call(null,inst_26923);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26946__$1,(7),ch,inst_26926);
} else {
if((state_val_26947 === (13))){
var inst_26940 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26951_26977 = state_26946__$1;
(statearr_26951_26977[(2)] = inst_26940);

(statearr_26951_26977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (6))){
var inst_26931 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
if(cljs.core.truth_(inst_26931)){
var statearr_26952_26978 = state_26946__$1;
(statearr_26952_26978[(1)] = (8));

} else {
var statearr_26953_26979 = state_26946__$1;
(statearr_26953_26979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (3))){
var inst_26944 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26946__$1,inst_26944);
} else {
if((state_val_26947 === (12))){
var state_26946__$1 = state_26946;
var statearr_26954_26980 = state_26946__$1;
(statearr_26954_26980[(2)] = null);

(statearr_26954_26980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (2))){
var inst_26923 = (state_26946[(7)]);
var state_26946__$1 = state_26946;
if(cljs.core.truth_(inst_26923)){
var statearr_26955_26981 = state_26946__$1;
(statearr_26955_26981[(1)] = (4));

} else {
var statearr_26956_26982 = state_26946__$1;
(statearr_26956_26982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (11))){
var inst_26937 = cljs.core.async.close_BANG_.call(null,ch);
var state_26946__$1 = state_26946;
var statearr_26957_26983 = state_26946__$1;
(statearr_26957_26983[(2)] = inst_26937);

(statearr_26957_26983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (9))){
var state_26946__$1 = state_26946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26958_26984 = state_26946__$1;
(statearr_26958_26984[(1)] = (11));

} else {
var statearr_26959_26985 = state_26946__$1;
(statearr_26959_26985[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (5))){
var inst_26923 = (state_26946[(7)]);
var state_26946__$1 = state_26946;
var statearr_26960_26986 = state_26946__$1;
(statearr_26960_26986[(2)] = inst_26923);

(statearr_26960_26986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (10))){
var inst_26942 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26961_26987 = state_26946__$1;
(statearr_26961_26987[(2)] = inst_26942);

(statearr_26961_26987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (8))){
var inst_26923 = (state_26946[(7)]);
var inst_26933 = cljs.core.next.call(null,inst_26923);
var inst_26923__$1 = inst_26933;
var state_26946__$1 = (function (){var statearr_26962 = state_26946;
(statearr_26962[(7)] = inst_26923__$1);

return statearr_26962;
})();
var statearr_26963_26988 = state_26946__$1;
(statearr_26963_26988[(2)] = null);

(statearr_26963_26988[(1)] = (2));


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
});})(c__19582__auto__))
;
return ((function (switch__19517__auto__,c__19582__auto__){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_26967 = [null,null,null,null,null,null,null,null];
(statearr_26967[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_26967[(1)] = (1));

return statearr_26967;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_26946){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_26946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26968){if((e26968 instanceof Object)){
var ex__19521__auto__ = e26968;
var statearr_26969_26989 = state_26946;
(statearr_26969_26989[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26990 = state_26946;
state_26946 = G__26990;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_26946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_26946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__))
})();
var state__19584__auto__ = (function (){var statearr_26970 = f__19583__auto__.call(null);
(statearr_26970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_26970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__))
);

return c__19582__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16934__auto__ = (((_ == null))?null:_);
var m__16935__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,_);
} else {
var m__16935__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16935__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m);
} else {
var m__16935__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27212 = (function (mult,ch,cs,meta27213){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27213 = meta27213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27214,meta27213__$1){
var self__ = this;
var _27214__$1 = this;
return (new cljs.core.async.t_cljs$core$async27212(self__.mult,self__.ch,self__.cs,meta27213__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27214){
var self__ = this;
var _27214__$1 = this;
return self__.meta27213;
});})(cs))
;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27212.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27213","meta27213",696531769,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27212";

cljs.core.async.t_cljs$core$async27212.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27212");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27212 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27212(mult__$1,ch__$1,cs__$1,meta27213){
return (new cljs.core.async.t_cljs$core$async27212(mult__$1,ch__$1,cs__$1,meta27213));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27212(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19582__auto___27433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___27433,cs,m,dchan,dctr,done){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___27433,cs,m,dchan,dctr,done){
return (function (state_27345){
var state_val_27346 = (state_27345[(1)]);
if((state_val_27346 === (7))){
var inst_27341 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27347_27434 = state_27345__$1;
(statearr_27347_27434[(2)] = inst_27341);

(statearr_27347_27434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (20))){
var inst_27246 = (state_27345[(7)]);
var inst_27256 = cljs.core.first.call(null,inst_27246);
var inst_27257 = cljs.core.nth.call(null,inst_27256,(0),null);
var inst_27258 = cljs.core.nth.call(null,inst_27256,(1),null);
var state_27345__$1 = (function (){var statearr_27348 = state_27345;
(statearr_27348[(8)] = inst_27257);

return statearr_27348;
})();
if(cljs.core.truth_(inst_27258)){
var statearr_27349_27435 = state_27345__$1;
(statearr_27349_27435[(1)] = (22));

} else {
var statearr_27350_27436 = state_27345__$1;
(statearr_27350_27436[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (27))){
var inst_27217 = (state_27345[(9)]);
var inst_27288 = (state_27345[(10)]);
var inst_27293 = (state_27345[(11)]);
var inst_27286 = (state_27345[(12)]);
var inst_27293__$1 = cljs.core._nth.call(null,inst_27286,inst_27288);
var inst_27294 = cljs.core.async.put_BANG_.call(null,inst_27293__$1,inst_27217,done);
var state_27345__$1 = (function (){var statearr_27351 = state_27345;
(statearr_27351[(11)] = inst_27293__$1);

return statearr_27351;
})();
if(cljs.core.truth_(inst_27294)){
var statearr_27352_27437 = state_27345__$1;
(statearr_27352_27437[(1)] = (30));

} else {
var statearr_27353_27438 = state_27345__$1;
(statearr_27353_27438[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (1))){
var state_27345__$1 = state_27345;
var statearr_27354_27439 = state_27345__$1;
(statearr_27354_27439[(2)] = null);

(statearr_27354_27439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (24))){
var inst_27246 = (state_27345[(7)]);
var inst_27263 = (state_27345[(2)]);
var inst_27264 = cljs.core.next.call(null,inst_27246);
var inst_27226 = inst_27264;
var inst_27227 = null;
var inst_27228 = (0);
var inst_27229 = (0);
var state_27345__$1 = (function (){var statearr_27355 = state_27345;
(statearr_27355[(13)] = inst_27226);

(statearr_27355[(14)] = inst_27263);

(statearr_27355[(15)] = inst_27227);

(statearr_27355[(16)] = inst_27229);

(statearr_27355[(17)] = inst_27228);

return statearr_27355;
})();
var statearr_27356_27440 = state_27345__$1;
(statearr_27356_27440[(2)] = null);

(statearr_27356_27440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (39))){
var state_27345__$1 = state_27345;
var statearr_27360_27441 = state_27345__$1;
(statearr_27360_27441[(2)] = null);

(statearr_27360_27441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (4))){
var inst_27217 = (state_27345[(9)]);
var inst_27217__$1 = (state_27345[(2)]);
var inst_27218 = (inst_27217__$1 == null);
var state_27345__$1 = (function (){var statearr_27361 = state_27345;
(statearr_27361[(9)] = inst_27217__$1);

return statearr_27361;
})();
if(cljs.core.truth_(inst_27218)){
var statearr_27362_27442 = state_27345__$1;
(statearr_27362_27442[(1)] = (5));

} else {
var statearr_27363_27443 = state_27345__$1;
(statearr_27363_27443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (15))){
var inst_27226 = (state_27345[(13)]);
var inst_27227 = (state_27345[(15)]);
var inst_27229 = (state_27345[(16)]);
var inst_27228 = (state_27345[(17)]);
var inst_27242 = (state_27345[(2)]);
var inst_27243 = (inst_27229 + (1));
var tmp27357 = inst_27226;
var tmp27358 = inst_27227;
var tmp27359 = inst_27228;
var inst_27226__$1 = tmp27357;
var inst_27227__$1 = tmp27358;
var inst_27228__$1 = tmp27359;
var inst_27229__$1 = inst_27243;
var state_27345__$1 = (function (){var statearr_27364 = state_27345;
(statearr_27364[(13)] = inst_27226__$1);

(statearr_27364[(15)] = inst_27227__$1);

(statearr_27364[(16)] = inst_27229__$1);

(statearr_27364[(17)] = inst_27228__$1);

(statearr_27364[(18)] = inst_27242);

return statearr_27364;
})();
var statearr_27365_27444 = state_27345__$1;
(statearr_27365_27444[(2)] = null);

(statearr_27365_27444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (21))){
var inst_27267 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27369_27445 = state_27345__$1;
(statearr_27369_27445[(2)] = inst_27267);

(statearr_27369_27445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (31))){
var inst_27293 = (state_27345[(11)]);
var inst_27297 = done.call(null,null);
var inst_27298 = cljs.core.async.untap_STAR_.call(null,m,inst_27293);
var state_27345__$1 = (function (){var statearr_27370 = state_27345;
(statearr_27370[(19)] = inst_27297);

return statearr_27370;
})();
var statearr_27371_27446 = state_27345__$1;
(statearr_27371_27446[(2)] = inst_27298);

(statearr_27371_27446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (32))){
var inst_27285 = (state_27345[(20)]);
var inst_27288 = (state_27345[(10)]);
var inst_27287 = (state_27345[(21)]);
var inst_27286 = (state_27345[(12)]);
var inst_27300 = (state_27345[(2)]);
var inst_27301 = (inst_27288 + (1));
var tmp27366 = inst_27285;
var tmp27367 = inst_27287;
var tmp27368 = inst_27286;
var inst_27285__$1 = tmp27366;
var inst_27286__$1 = tmp27368;
var inst_27287__$1 = tmp27367;
var inst_27288__$1 = inst_27301;
var state_27345__$1 = (function (){var statearr_27372 = state_27345;
(statearr_27372[(20)] = inst_27285__$1);

(statearr_27372[(10)] = inst_27288__$1);

(statearr_27372[(22)] = inst_27300);

(statearr_27372[(21)] = inst_27287__$1);

(statearr_27372[(12)] = inst_27286__$1);

return statearr_27372;
})();
var statearr_27373_27447 = state_27345__$1;
(statearr_27373_27447[(2)] = null);

(statearr_27373_27447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (40))){
var inst_27313 = (state_27345[(23)]);
var inst_27317 = done.call(null,null);
var inst_27318 = cljs.core.async.untap_STAR_.call(null,m,inst_27313);
var state_27345__$1 = (function (){var statearr_27374 = state_27345;
(statearr_27374[(24)] = inst_27317);

return statearr_27374;
})();
var statearr_27375_27448 = state_27345__$1;
(statearr_27375_27448[(2)] = inst_27318);

(statearr_27375_27448[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (33))){
var inst_27304 = (state_27345[(25)]);
var inst_27306 = cljs.core.chunked_seq_QMARK_.call(null,inst_27304);
var state_27345__$1 = state_27345;
if(inst_27306){
var statearr_27376_27449 = state_27345__$1;
(statearr_27376_27449[(1)] = (36));

} else {
var statearr_27377_27450 = state_27345__$1;
(statearr_27377_27450[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (13))){
var inst_27236 = (state_27345[(26)]);
var inst_27239 = cljs.core.async.close_BANG_.call(null,inst_27236);
var state_27345__$1 = state_27345;
var statearr_27378_27451 = state_27345__$1;
(statearr_27378_27451[(2)] = inst_27239);

(statearr_27378_27451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (22))){
var inst_27257 = (state_27345[(8)]);
var inst_27260 = cljs.core.async.close_BANG_.call(null,inst_27257);
var state_27345__$1 = state_27345;
var statearr_27379_27452 = state_27345__$1;
(statearr_27379_27452[(2)] = inst_27260);

(statearr_27379_27452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (36))){
var inst_27304 = (state_27345[(25)]);
var inst_27308 = cljs.core.chunk_first.call(null,inst_27304);
var inst_27309 = cljs.core.chunk_rest.call(null,inst_27304);
var inst_27310 = cljs.core.count.call(null,inst_27308);
var inst_27285 = inst_27309;
var inst_27286 = inst_27308;
var inst_27287 = inst_27310;
var inst_27288 = (0);
var state_27345__$1 = (function (){var statearr_27380 = state_27345;
(statearr_27380[(20)] = inst_27285);

(statearr_27380[(10)] = inst_27288);

(statearr_27380[(21)] = inst_27287);

(statearr_27380[(12)] = inst_27286);

return statearr_27380;
})();
var statearr_27381_27453 = state_27345__$1;
(statearr_27381_27453[(2)] = null);

(statearr_27381_27453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (41))){
var inst_27304 = (state_27345[(25)]);
var inst_27320 = (state_27345[(2)]);
var inst_27321 = cljs.core.next.call(null,inst_27304);
var inst_27285 = inst_27321;
var inst_27286 = null;
var inst_27287 = (0);
var inst_27288 = (0);
var state_27345__$1 = (function (){var statearr_27382 = state_27345;
(statearr_27382[(27)] = inst_27320);

(statearr_27382[(20)] = inst_27285);

(statearr_27382[(10)] = inst_27288);

(statearr_27382[(21)] = inst_27287);

(statearr_27382[(12)] = inst_27286);

return statearr_27382;
})();
var statearr_27383_27454 = state_27345__$1;
(statearr_27383_27454[(2)] = null);

(statearr_27383_27454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (43))){
var state_27345__$1 = state_27345;
var statearr_27384_27455 = state_27345__$1;
(statearr_27384_27455[(2)] = null);

(statearr_27384_27455[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (29))){
var inst_27329 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27385_27456 = state_27345__$1;
(statearr_27385_27456[(2)] = inst_27329);

(statearr_27385_27456[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (44))){
var inst_27338 = (state_27345[(2)]);
var state_27345__$1 = (function (){var statearr_27386 = state_27345;
(statearr_27386[(28)] = inst_27338);

return statearr_27386;
})();
var statearr_27387_27457 = state_27345__$1;
(statearr_27387_27457[(2)] = null);

(statearr_27387_27457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (6))){
var inst_27277 = (state_27345[(29)]);
var inst_27276 = cljs.core.deref.call(null,cs);
var inst_27277__$1 = cljs.core.keys.call(null,inst_27276);
var inst_27278 = cljs.core.count.call(null,inst_27277__$1);
var inst_27279 = cljs.core.reset_BANG_.call(null,dctr,inst_27278);
var inst_27284 = cljs.core.seq.call(null,inst_27277__$1);
var inst_27285 = inst_27284;
var inst_27286 = null;
var inst_27287 = (0);
var inst_27288 = (0);
var state_27345__$1 = (function (){var statearr_27388 = state_27345;
(statearr_27388[(20)] = inst_27285);

(statearr_27388[(10)] = inst_27288);

(statearr_27388[(29)] = inst_27277__$1);

(statearr_27388[(21)] = inst_27287);

(statearr_27388[(12)] = inst_27286);

(statearr_27388[(30)] = inst_27279);

return statearr_27388;
})();
var statearr_27389_27458 = state_27345__$1;
(statearr_27389_27458[(2)] = null);

(statearr_27389_27458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (28))){
var inst_27285 = (state_27345[(20)]);
var inst_27304 = (state_27345[(25)]);
var inst_27304__$1 = cljs.core.seq.call(null,inst_27285);
var state_27345__$1 = (function (){var statearr_27390 = state_27345;
(statearr_27390[(25)] = inst_27304__$1);

return statearr_27390;
})();
if(inst_27304__$1){
var statearr_27391_27459 = state_27345__$1;
(statearr_27391_27459[(1)] = (33));

} else {
var statearr_27392_27460 = state_27345__$1;
(statearr_27392_27460[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (25))){
var inst_27288 = (state_27345[(10)]);
var inst_27287 = (state_27345[(21)]);
var inst_27290 = (inst_27288 < inst_27287);
var inst_27291 = inst_27290;
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27291)){
var statearr_27393_27461 = state_27345__$1;
(statearr_27393_27461[(1)] = (27));

} else {
var statearr_27394_27462 = state_27345__$1;
(statearr_27394_27462[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (34))){
var state_27345__$1 = state_27345;
var statearr_27395_27463 = state_27345__$1;
(statearr_27395_27463[(2)] = null);

(statearr_27395_27463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (17))){
var state_27345__$1 = state_27345;
var statearr_27396_27464 = state_27345__$1;
(statearr_27396_27464[(2)] = null);

(statearr_27396_27464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (3))){
var inst_27343 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27345__$1,inst_27343);
} else {
if((state_val_27346 === (12))){
var inst_27272 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27397_27465 = state_27345__$1;
(statearr_27397_27465[(2)] = inst_27272);

(statearr_27397_27465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (2))){
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(4),ch);
} else {
if((state_val_27346 === (23))){
var state_27345__$1 = state_27345;
var statearr_27398_27466 = state_27345__$1;
(statearr_27398_27466[(2)] = null);

(statearr_27398_27466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (35))){
var inst_27327 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27399_27467 = state_27345__$1;
(statearr_27399_27467[(2)] = inst_27327);

(statearr_27399_27467[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (19))){
var inst_27246 = (state_27345[(7)]);
var inst_27250 = cljs.core.chunk_first.call(null,inst_27246);
var inst_27251 = cljs.core.chunk_rest.call(null,inst_27246);
var inst_27252 = cljs.core.count.call(null,inst_27250);
var inst_27226 = inst_27251;
var inst_27227 = inst_27250;
var inst_27228 = inst_27252;
var inst_27229 = (0);
var state_27345__$1 = (function (){var statearr_27400 = state_27345;
(statearr_27400[(13)] = inst_27226);

(statearr_27400[(15)] = inst_27227);

(statearr_27400[(16)] = inst_27229);

(statearr_27400[(17)] = inst_27228);

return statearr_27400;
})();
var statearr_27401_27468 = state_27345__$1;
(statearr_27401_27468[(2)] = null);

(statearr_27401_27468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (11))){
var inst_27226 = (state_27345[(13)]);
var inst_27246 = (state_27345[(7)]);
var inst_27246__$1 = cljs.core.seq.call(null,inst_27226);
var state_27345__$1 = (function (){var statearr_27402 = state_27345;
(statearr_27402[(7)] = inst_27246__$1);

return statearr_27402;
})();
if(inst_27246__$1){
var statearr_27403_27469 = state_27345__$1;
(statearr_27403_27469[(1)] = (16));

} else {
var statearr_27404_27470 = state_27345__$1;
(statearr_27404_27470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (9))){
var inst_27274 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27405_27471 = state_27345__$1;
(statearr_27405_27471[(2)] = inst_27274);

(statearr_27405_27471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (5))){
var inst_27224 = cljs.core.deref.call(null,cs);
var inst_27225 = cljs.core.seq.call(null,inst_27224);
var inst_27226 = inst_27225;
var inst_27227 = null;
var inst_27228 = (0);
var inst_27229 = (0);
var state_27345__$1 = (function (){var statearr_27406 = state_27345;
(statearr_27406[(13)] = inst_27226);

(statearr_27406[(15)] = inst_27227);

(statearr_27406[(16)] = inst_27229);

(statearr_27406[(17)] = inst_27228);

return statearr_27406;
})();
var statearr_27407_27472 = state_27345__$1;
(statearr_27407_27472[(2)] = null);

(statearr_27407_27472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (14))){
var state_27345__$1 = state_27345;
var statearr_27408_27473 = state_27345__$1;
(statearr_27408_27473[(2)] = null);

(statearr_27408_27473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (45))){
var inst_27335 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27409_27474 = state_27345__$1;
(statearr_27409_27474[(2)] = inst_27335);

(statearr_27409_27474[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (26))){
var inst_27277 = (state_27345[(29)]);
var inst_27331 = (state_27345[(2)]);
var inst_27332 = cljs.core.seq.call(null,inst_27277);
var state_27345__$1 = (function (){var statearr_27410 = state_27345;
(statearr_27410[(31)] = inst_27331);

return statearr_27410;
})();
if(inst_27332){
var statearr_27411_27475 = state_27345__$1;
(statearr_27411_27475[(1)] = (42));

} else {
var statearr_27412_27476 = state_27345__$1;
(statearr_27412_27476[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (16))){
var inst_27246 = (state_27345[(7)]);
var inst_27248 = cljs.core.chunked_seq_QMARK_.call(null,inst_27246);
var state_27345__$1 = state_27345;
if(inst_27248){
var statearr_27413_27477 = state_27345__$1;
(statearr_27413_27477[(1)] = (19));

} else {
var statearr_27414_27478 = state_27345__$1;
(statearr_27414_27478[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (38))){
var inst_27324 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27415_27479 = state_27345__$1;
(statearr_27415_27479[(2)] = inst_27324);

(statearr_27415_27479[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (30))){
var state_27345__$1 = state_27345;
var statearr_27416_27480 = state_27345__$1;
(statearr_27416_27480[(2)] = null);

(statearr_27416_27480[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (10))){
var inst_27227 = (state_27345[(15)]);
var inst_27229 = (state_27345[(16)]);
var inst_27235 = cljs.core._nth.call(null,inst_27227,inst_27229);
var inst_27236 = cljs.core.nth.call(null,inst_27235,(0),null);
var inst_27237 = cljs.core.nth.call(null,inst_27235,(1),null);
var state_27345__$1 = (function (){var statearr_27417 = state_27345;
(statearr_27417[(26)] = inst_27236);

return statearr_27417;
})();
if(cljs.core.truth_(inst_27237)){
var statearr_27418_27481 = state_27345__$1;
(statearr_27418_27481[(1)] = (13));

} else {
var statearr_27419_27482 = state_27345__$1;
(statearr_27419_27482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (18))){
var inst_27270 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27420_27483 = state_27345__$1;
(statearr_27420_27483[(2)] = inst_27270);

(statearr_27420_27483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (42))){
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(45),dchan);
} else {
if((state_val_27346 === (37))){
var inst_27217 = (state_27345[(9)]);
var inst_27304 = (state_27345[(25)]);
var inst_27313 = (state_27345[(23)]);
var inst_27313__$1 = cljs.core.first.call(null,inst_27304);
var inst_27314 = cljs.core.async.put_BANG_.call(null,inst_27313__$1,inst_27217,done);
var state_27345__$1 = (function (){var statearr_27421 = state_27345;
(statearr_27421[(23)] = inst_27313__$1);

return statearr_27421;
})();
if(cljs.core.truth_(inst_27314)){
var statearr_27422_27484 = state_27345__$1;
(statearr_27422_27484[(1)] = (39));

} else {
var statearr_27423_27485 = state_27345__$1;
(statearr_27423_27485[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (8))){
var inst_27229 = (state_27345[(16)]);
var inst_27228 = (state_27345[(17)]);
var inst_27231 = (inst_27229 < inst_27228);
var inst_27232 = inst_27231;
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27232)){
var statearr_27424_27486 = state_27345__$1;
(statearr_27424_27486[(1)] = (10));

} else {
var statearr_27425_27487 = state_27345__$1;
(statearr_27425_27487[(1)] = (11));

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
});})(c__19582__auto___27433,cs,m,dchan,dctr,done))
;
return ((function (switch__19517__auto__,c__19582__auto___27433,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19518__auto__ = null;
var cljs$core$async$mult_$_state_machine__19518__auto____0 = (function (){
var statearr_27429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27429[(0)] = cljs$core$async$mult_$_state_machine__19518__auto__);

(statearr_27429[(1)] = (1));

return statearr_27429;
});
var cljs$core$async$mult_$_state_machine__19518__auto____1 = (function (state_27345){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_27345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e27430){if((e27430 instanceof Object)){
var ex__19521__auto__ = e27430;
var statearr_27431_27488 = state_27345;
(statearr_27431_27488[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27489 = state_27345;
state_27345 = G__27489;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19518__auto__ = function(state_27345){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19518__auto____1.call(this,state_27345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19518__auto____0;
cljs$core$async$mult_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19518__auto____1;
return cljs$core$async$mult_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___27433,cs,m,dchan,dctr,done))
})();
var state__19584__auto__ = (function (){var statearr_27432 = f__19583__auto__.call(null);
(statearr_27432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___27433);

return statearr_27432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___27433,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27490 = [];
var len__17337__auto___27493 = arguments.length;
var i__17338__auto___27494 = (0);
while(true){
if((i__17338__auto___27494 < len__17337__auto___27493)){
args27490.push((arguments[i__17338__auto___27494]));

var G__27495 = (i__17338__auto___27494 + (1));
i__17338__auto___27494 = G__27495;
continue;
} else {
}
break;
}

var G__27492 = args27490.length;
switch (G__27492) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27490.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m);
} else {
var m__16935__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,state_map);
} else {
var m__16935__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,mode);
} else {
var m__16935__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17344__auto__ = [];
var len__17337__auto___27507 = arguments.length;
var i__17338__auto___27508 = (0);
while(true){
if((i__17338__auto___27508 < len__17337__auto___27507)){
args__17344__auto__.push((arguments[i__17338__auto___27508]));

var G__27509 = (i__17338__auto___27508 + (1));
i__17338__auto___27508 = G__27509;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((3) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17345__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27501){
var map__27502 = p__27501;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var opts = map__27502__$1;
var statearr_27504_27510 = state;
(statearr_27504_27510[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27502,map__27502__$1,opts){
return (function (val){
var statearr_27505_27511 = state;
(statearr_27505_27511[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27502,map__27502__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27506_27512 = state;
(statearr_27506_27512[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27497){
var G__27498 = cljs.core.first.call(null,seq27497);
var seq27497__$1 = cljs.core.next.call(null,seq27497);
var G__27499 = cljs.core.first.call(null,seq27497__$1);
var seq27497__$2 = cljs.core.next.call(null,seq27497__$1);
var G__27500 = cljs.core.first.call(null,seq27497__$2);
var seq27497__$3 = cljs.core.next.call(null,seq27497__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27498,G__27499,G__27500,seq27497__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async27676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27676 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27677){
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
this.meta27677 = meta27677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27678,meta27677__$1){
var self__ = this;
var _27678__$1 = this;
return (new cljs.core.async.t_cljs$core$async27676(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27677__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27678){
var self__ = this;
var _27678__$1 = this;
return self__.meta27677;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27676.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27677","meta27677",-1423874968,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27676";

cljs.core.async.t_cljs$core$async27676.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27676");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27676 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27676(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27677){
return (new cljs.core.async.t_cljs$core$async27676(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27677));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27676(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19582__auto___27839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___27839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___27839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27776){
var state_val_27777 = (state_27776[(1)]);
if((state_val_27777 === (7))){
var inst_27694 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27778_27840 = state_27776__$1;
(statearr_27778_27840[(2)] = inst_27694);

(statearr_27778_27840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (20))){
var inst_27706 = (state_27776[(7)]);
var state_27776__$1 = state_27776;
var statearr_27779_27841 = state_27776__$1;
(statearr_27779_27841[(2)] = inst_27706);

(statearr_27779_27841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (27))){
var state_27776__$1 = state_27776;
var statearr_27780_27842 = state_27776__$1;
(statearr_27780_27842[(2)] = null);

(statearr_27780_27842[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (1))){
var inst_27682 = (state_27776[(8)]);
var inst_27682__$1 = calc_state.call(null);
var inst_27684 = (inst_27682__$1 == null);
var inst_27685 = cljs.core.not.call(null,inst_27684);
var state_27776__$1 = (function (){var statearr_27781 = state_27776;
(statearr_27781[(8)] = inst_27682__$1);

return statearr_27781;
})();
if(inst_27685){
var statearr_27782_27843 = state_27776__$1;
(statearr_27782_27843[(1)] = (2));

} else {
var statearr_27783_27844 = state_27776__$1;
(statearr_27783_27844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (24))){
var inst_27736 = (state_27776[(9)]);
var inst_27750 = (state_27776[(10)]);
var inst_27729 = (state_27776[(11)]);
var inst_27750__$1 = inst_27729.call(null,inst_27736);
var state_27776__$1 = (function (){var statearr_27784 = state_27776;
(statearr_27784[(10)] = inst_27750__$1);

return statearr_27784;
})();
if(cljs.core.truth_(inst_27750__$1)){
var statearr_27785_27845 = state_27776__$1;
(statearr_27785_27845[(1)] = (29));

} else {
var statearr_27786_27846 = state_27776__$1;
(statearr_27786_27846[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (4))){
var inst_27697 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27697)){
var statearr_27787_27847 = state_27776__$1;
(statearr_27787_27847[(1)] = (8));

} else {
var statearr_27788_27848 = state_27776__$1;
(statearr_27788_27848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (15))){
var inst_27723 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27723)){
var statearr_27789_27849 = state_27776__$1;
(statearr_27789_27849[(1)] = (19));

} else {
var statearr_27790_27850 = state_27776__$1;
(statearr_27790_27850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (21))){
var inst_27728 = (state_27776[(12)]);
var inst_27728__$1 = (state_27776[(2)]);
var inst_27729 = cljs.core.get.call(null,inst_27728__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27730 = cljs.core.get.call(null,inst_27728__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27731 = cljs.core.get.call(null,inst_27728__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27776__$1 = (function (){var statearr_27791 = state_27776;
(statearr_27791[(12)] = inst_27728__$1);

(statearr_27791[(11)] = inst_27729);

(statearr_27791[(13)] = inst_27730);

return statearr_27791;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27776__$1,(22),inst_27731);
} else {
if((state_val_27777 === (31))){
var inst_27758 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27758)){
var statearr_27792_27851 = state_27776__$1;
(statearr_27792_27851[(1)] = (32));

} else {
var statearr_27793_27852 = state_27776__$1;
(statearr_27793_27852[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (32))){
var inst_27735 = (state_27776[(14)]);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27776__$1,(35),out,inst_27735);
} else {
if((state_val_27777 === (33))){
var inst_27728 = (state_27776[(12)]);
var inst_27706 = inst_27728;
var state_27776__$1 = (function (){var statearr_27794 = state_27776;
(statearr_27794[(7)] = inst_27706);

return statearr_27794;
})();
var statearr_27795_27853 = state_27776__$1;
(statearr_27795_27853[(2)] = null);

(statearr_27795_27853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (13))){
var inst_27706 = (state_27776[(7)]);
var inst_27713 = inst_27706.cljs$lang$protocol_mask$partition0$;
var inst_27714 = (inst_27713 & (64));
var inst_27715 = inst_27706.cljs$core$ISeq$;
var inst_27716 = (inst_27714) || (inst_27715);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27716)){
var statearr_27796_27854 = state_27776__$1;
(statearr_27796_27854[(1)] = (16));

} else {
var statearr_27797_27855 = state_27776__$1;
(statearr_27797_27855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (22))){
var inst_27736 = (state_27776[(9)]);
var inst_27735 = (state_27776[(14)]);
var inst_27734 = (state_27776[(2)]);
var inst_27735__$1 = cljs.core.nth.call(null,inst_27734,(0),null);
var inst_27736__$1 = cljs.core.nth.call(null,inst_27734,(1),null);
var inst_27737 = (inst_27735__$1 == null);
var inst_27738 = cljs.core._EQ_.call(null,inst_27736__$1,change);
var inst_27739 = (inst_27737) || (inst_27738);
var state_27776__$1 = (function (){var statearr_27798 = state_27776;
(statearr_27798[(9)] = inst_27736__$1);

(statearr_27798[(14)] = inst_27735__$1);

return statearr_27798;
})();
if(cljs.core.truth_(inst_27739)){
var statearr_27799_27856 = state_27776__$1;
(statearr_27799_27856[(1)] = (23));

} else {
var statearr_27800_27857 = state_27776__$1;
(statearr_27800_27857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (36))){
var inst_27728 = (state_27776[(12)]);
var inst_27706 = inst_27728;
var state_27776__$1 = (function (){var statearr_27801 = state_27776;
(statearr_27801[(7)] = inst_27706);

return statearr_27801;
})();
var statearr_27802_27858 = state_27776__$1;
(statearr_27802_27858[(2)] = null);

(statearr_27802_27858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (29))){
var inst_27750 = (state_27776[(10)]);
var state_27776__$1 = state_27776;
var statearr_27803_27859 = state_27776__$1;
(statearr_27803_27859[(2)] = inst_27750);

(statearr_27803_27859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (6))){
var state_27776__$1 = state_27776;
var statearr_27804_27860 = state_27776__$1;
(statearr_27804_27860[(2)] = false);

(statearr_27804_27860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (28))){
var inst_27746 = (state_27776[(2)]);
var inst_27747 = calc_state.call(null);
var inst_27706 = inst_27747;
var state_27776__$1 = (function (){var statearr_27805 = state_27776;
(statearr_27805[(15)] = inst_27746);

(statearr_27805[(7)] = inst_27706);

return statearr_27805;
})();
var statearr_27806_27861 = state_27776__$1;
(statearr_27806_27861[(2)] = null);

(statearr_27806_27861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (25))){
var inst_27772 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27807_27862 = state_27776__$1;
(statearr_27807_27862[(2)] = inst_27772);

(statearr_27807_27862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (34))){
var inst_27770 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27808_27863 = state_27776__$1;
(statearr_27808_27863[(2)] = inst_27770);

(statearr_27808_27863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (17))){
var state_27776__$1 = state_27776;
var statearr_27809_27864 = state_27776__$1;
(statearr_27809_27864[(2)] = false);

(statearr_27809_27864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (3))){
var state_27776__$1 = state_27776;
var statearr_27810_27865 = state_27776__$1;
(statearr_27810_27865[(2)] = false);

(statearr_27810_27865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (12))){
var inst_27774 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27776__$1,inst_27774);
} else {
if((state_val_27777 === (2))){
var inst_27682 = (state_27776[(8)]);
var inst_27687 = inst_27682.cljs$lang$protocol_mask$partition0$;
var inst_27688 = (inst_27687 & (64));
var inst_27689 = inst_27682.cljs$core$ISeq$;
var inst_27690 = (inst_27688) || (inst_27689);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27690)){
var statearr_27811_27866 = state_27776__$1;
(statearr_27811_27866[(1)] = (5));

} else {
var statearr_27812_27867 = state_27776__$1;
(statearr_27812_27867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (23))){
var inst_27735 = (state_27776[(14)]);
var inst_27741 = (inst_27735 == null);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27741)){
var statearr_27813_27868 = state_27776__$1;
(statearr_27813_27868[(1)] = (26));

} else {
var statearr_27814_27869 = state_27776__$1;
(statearr_27814_27869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (35))){
var inst_27761 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27761)){
var statearr_27815_27870 = state_27776__$1;
(statearr_27815_27870[(1)] = (36));

} else {
var statearr_27816_27871 = state_27776__$1;
(statearr_27816_27871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (19))){
var inst_27706 = (state_27776[(7)]);
var inst_27725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27706);
var state_27776__$1 = state_27776;
var statearr_27817_27872 = state_27776__$1;
(statearr_27817_27872[(2)] = inst_27725);

(statearr_27817_27872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (11))){
var inst_27706 = (state_27776[(7)]);
var inst_27710 = (inst_27706 == null);
var inst_27711 = cljs.core.not.call(null,inst_27710);
var state_27776__$1 = state_27776;
if(inst_27711){
var statearr_27818_27873 = state_27776__$1;
(statearr_27818_27873[(1)] = (13));

} else {
var statearr_27819_27874 = state_27776__$1;
(statearr_27819_27874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (9))){
var inst_27682 = (state_27776[(8)]);
var state_27776__$1 = state_27776;
var statearr_27820_27875 = state_27776__$1;
(statearr_27820_27875[(2)] = inst_27682);

(statearr_27820_27875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (5))){
var state_27776__$1 = state_27776;
var statearr_27821_27876 = state_27776__$1;
(statearr_27821_27876[(2)] = true);

(statearr_27821_27876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (14))){
var state_27776__$1 = state_27776;
var statearr_27822_27877 = state_27776__$1;
(statearr_27822_27877[(2)] = false);

(statearr_27822_27877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (26))){
var inst_27736 = (state_27776[(9)]);
var inst_27743 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27736);
var state_27776__$1 = state_27776;
var statearr_27823_27878 = state_27776__$1;
(statearr_27823_27878[(2)] = inst_27743);

(statearr_27823_27878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (16))){
var state_27776__$1 = state_27776;
var statearr_27824_27879 = state_27776__$1;
(statearr_27824_27879[(2)] = true);

(statearr_27824_27879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (38))){
var inst_27766 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27825_27880 = state_27776__$1;
(statearr_27825_27880[(2)] = inst_27766);

(statearr_27825_27880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (30))){
var inst_27736 = (state_27776[(9)]);
var inst_27729 = (state_27776[(11)]);
var inst_27730 = (state_27776[(13)]);
var inst_27753 = cljs.core.empty_QMARK_.call(null,inst_27729);
var inst_27754 = inst_27730.call(null,inst_27736);
var inst_27755 = cljs.core.not.call(null,inst_27754);
var inst_27756 = (inst_27753) && (inst_27755);
var state_27776__$1 = state_27776;
var statearr_27826_27881 = state_27776__$1;
(statearr_27826_27881[(2)] = inst_27756);

(statearr_27826_27881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (10))){
var inst_27682 = (state_27776[(8)]);
var inst_27702 = (state_27776[(2)]);
var inst_27703 = cljs.core.get.call(null,inst_27702,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27704 = cljs.core.get.call(null,inst_27702,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27705 = cljs.core.get.call(null,inst_27702,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27706 = inst_27682;
var state_27776__$1 = (function (){var statearr_27827 = state_27776;
(statearr_27827[(16)] = inst_27703);

(statearr_27827[(7)] = inst_27706);

(statearr_27827[(17)] = inst_27704);

(statearr_27827[(18)] = inst_27705);

return statearr_27827;
})();
var statearr_27828_27882 = state_27776__$1;
(statearr_27828_27882[(2)] = null);

(statearr_27828_27882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (18))){
var inst_27720 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27829_27883 = state_27776__$1;
(statearr_27829_27883[(2)] = inst_27720);

(statearr_27829_27883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (37))){
var state_27776__$1 = state_27776;
var statearr_27830_27884 = state_27776__$1;
(statearr_27830_27884[(2)] = null);

(statearr_27830_27884[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (8))){
var inst_27682 = (state_27776[(8)]);
var inst_27699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27682);
var state_27776__$1 = state_27776;
var statearr_27831_27885 = state_27776__$1;
(statearr_27831_27885[(2)] = inst_27699);

(statearr_27831_27885[(1)] = (10));


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
});})(c__19582__auto___27839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19517__auto__,c__19582__auto___27839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19518__auto__ = null;
var cljs$core$async$mix_$_state_machine__19518__auto____0 = (function (){
var statearr_27835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27835[(0)] = cljs$core$async$mix_$_state_machine__19518__auto__);

(statearr_27835[(1)] = (1));

return statearr_27835;
});
var cljs$core$async$mix_$_state_machine__19518__auto____1 = (function (state_27776){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_27776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e27836){if((e27836 instanceof Object)){
var ex__19521__auto__ = e27836;
var statearr_27837_27886 = state_27776;
(statearr_27837_27886[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27887 = state_27776;
state_27776 = G__27887;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19518__auto__ = function(state_27776){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19518__auto____1.call(this,state_27776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19518__auto____0;
cljs$core$async$mix_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19518__auto____1;
return cljs$core$async$mix_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___27839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19584__auto__ = (function (){var statearr_27838 = f__19583__auto__.call(null);
(statearr_27838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___27839);

return statearr_27838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___27839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16935__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27888 = [];
var len__17337__auto___27891 = arguments.length;
var i__17338__auto___27892 = (0);
while(true){
if((i__17338__auto___27892 < len__17337__auto___27891)){
args27888.push((arguments[i__17338__auto___27892]));

var G__27893 = (i__17338__auto___27892 + (1));
i__17338__auto___27892 = G__27893;
continue;
} else {
}
break;
}

var G__27890 = args27888.length;
switch (G__27890) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27888.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27896 = [];
var len__17337__auto___28021 = arguments.length;
var i__17338__auto___28022 = (0);
while(true){
if((i__17338__auto___28022 < len__17337__auto___28021)){
args27896.push((arguments[i__17338__auto___28022]));

var G__28023 = (i__17338__auto___28022 + (1));
i__17338__auto___28022 = G__28023;
continue;
} else {
}
break;
}

var G__27898 = args27896.length;
switch (G__27898) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27896.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16279__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16279__auto__,mults){
return (function (p1__27895_SHARP_){
if(cljs.core.truth_(p1__27895_SHARP_.call(null,topic))){
return p1__27895_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27895_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16279__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27900 = meta27900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27901,meta27900__$1){
var self__ = this;
var _27901__$1 = this;
return (new cljs.core.async.t_cljs$core$async27899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27900__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27901){
var self__ = this;
var _27901__$1 = this;
return self__.meta27900;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27899.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27900","meta27900",523166498,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27899";

cljs.core.async.t_cljs$core$async27899.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27899");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27899 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27900){
return (new cljs.core.async.t_cljs$core$async27899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27900));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19582__auto___28025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28025,mults,ensure_mult,p){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28025,mults,ensure_mult,p){
return (function (state_27973){
var state_val_27974 = (state_27973[(1)]);
if((state_val_27974 === (7))){
var inst_27969 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27975_28026 = state_27973__$1;
(statearr_27975_28026[(2)] = inst_27969);

(statearr_27975_28026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (20))){
var state_27973__$1 = state_27973;
var statearr_27976_28027 = state_27973__$1;
(statearr_27976_28027[(2)] = null);

(statearr_27976_28027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (1))){
var state_27973__$1 = state_27973;
var statearr_27977_28028 = state_27973__$1;
(statearr_27977_28028[(2)] = null);

(statearr_27977_28028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (24))){
var inst_27952 = (state_27973[(7)]);
var inst_27961 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27952);
var state_27973__$1 = state_27973;
var statearr_27978_28029 = state_27973__$1;
(statearr_27978_28029[(2)] = inst_27961);

(statearr_27978_28029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (4))){
var inst_27904 = (state_27973[(8)]);
var inst_27904__$1 = (state_27973[(2)]);
var inst_27905 = (inst_27904__$1 == null);
var state_27973__$1 = (function (){var statearr_27979 = state_27973;
(statearr_27979[(8)] = inst_27904__$1);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27905)){
var statearr_27980_28030 = state_27973__$1;
(statearr_27980_28030[(1)] = (5));

} else {
var statearr_27981_28031 = state_27973__$1;
(statearr_27981_28031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (15))){
var inst_27946 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27982_28032 = state_27973__$1;
(statearr_27982_28032[(2)] = inst_27946);

(statearr_27982_28032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (21))){
var inst_27966 = (state_27973[(2)]);
var state_27973__$1 = (function (){var statearr_27983 = state_27973;
(statearr_27983[(9)] = inst_27966);

return statearr_27983;
})();
var statearr_27984_28033 = state_27973__$1;
(statearr_27984_28033[(2)] = null);

(statearr_27984_28033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (13))){
var inst_27928 = (state_27973[(10)]);
var inst_27930 = cljs.core.chunked_seq_QMARK_.call(null,inst_27928);
var state_27973__$1 = state_27973;
if(inst_27930){
var statearr_27985_28034 = state_27973__$1;
(statearr_27985_28034[(1)] = (16));

} else {
var statearr_27986_28035 = state_27973__$1;
(statearr_27986_28035[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (22))){
var inst_27958 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
if(cljs.core.truth_(inst_27958)){
var statearr_27987_28036 = state_27973__$1;
(statearr_27987_28036[(1)] = (23));

} else {
var statearr_27988_28037 = state_27973__$1;
(statearr_27988_28037[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (6))){
var inst_27952 = (state_27973[(7)]);
var inst_27954 = (state_27973[(11)]);
var inst_27904 = (state_27973[(8)]);
var inst_27952__$1 = topic_fn.call(null,inst_27904);
var inst_27953 = cljs.core.deref.call(null,mults);
var inst_27954__$1 = cljs.core.get.call(null,inst_27953,inst_27952__$1);
var state_27973__$1 = (function (){var statearr_27989 = state_27973;
(statearr_27989[(7)] = inst_27952__$1);

(statearr_27989[(11)] = inst_27954__$1);

return statearr_27989;
})();
if(cljs.core.truth_(inst_27954__$1)){
var statearr_27990_28038 = state_27973__$1;
(statearr_27990_28038[(1)] = (19));

} else {
var statearr_27991_28039 = state_27973__$1;
(statearr_27991_28039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (25))){
var inst_27963 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27992_28040 = state_27973__$1;
(statearr_27992_28040[(2)] = inst_27963);

(statearr_27992_28040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (17))){
var inst_27928 = (state_27973[(10)]);
var inst_27937 = cljs.core.first.call(null,inst_27928);
var inst_27938 = cljs.core.async.muxch_STAR_.call(null,inst_27937);
var inst_27939 = cljs.core.async.close_BANG_.call(null,inst_27938);
var inst_27940 = cljs.core.next.call(null,inst_27928);
var inst_27914 = inst_27940;
var inst_27915 = null;
var inst_27916 = (0);
var inst_27917 = (0);
var state_27973__$1 = (function (){var statearr_27993 = state_27973;
(statearr_27993[(12)] = inst_27939);

(statearr_27993[(13)] = inst_27917);

(statearr_27993[(14)] = inst_27914);

(statearr_27993[(15)] = inst_27916);

(statearr_27993[(16)] = inst_27915);

return statearr_27993;
})();
var statearr_27994_28041 = state_27973__$1;
(statearr_27994_28041[(2)] = null);

(statearr_27994_28041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (3))){
var inst_27971 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27973__$1,inst_27971);
} else {
if((state_val_27974 === (12))){
var inst_27948 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27995_28042 = state_27973__$1;
(statearr_27995_28042[(2)] = inst_27948);

(statearr_27995_28042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (2))){
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27973__$1,(4),ch);
} else {
if((state_val_27974 === (23))){
var state_27973__$1 = state_27973;
var statearr_27996_28043 = state_27973__$1;
(statearr_27996_28043[(2)] = null);

(statearr_27996_28043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (19))){
var inst_27954 = (state_27973[(11)]);
var inst_27904 = (state_27973[(8)]);
var inst_27956 = cljs.core.async.muxch_STAR_.call(null,inst_27954);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27973__$1,(22),inst_27956,inst_27904);
} else {
if((state_val_27974 === (11))){
var inst_27928 = (state_27973[(10)]);
var inst_27914 = (state_27973[(14)]);
var inst_27928__$1 = cljs.core.seq.call(null,inst_27914);
var state_27973__$1 = (function (){var statearr_27997 = state_27973;
(statearr_27997[(10)] = inst_27928__$1);

return statearr_27997;
})();
if(inst_27928__$1){
var statearr_27998_28044 = state_27973__$1;
(statearr_27998_28044[(1)] = (13));

} else {
var statearr_27999_28045 = state_27973__$1;
(statearr_27999_28045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (9))){
var inst_27950 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_28000_28046 = state_27973__$1;
(statearr_28000_28046[(2)] = inst_27950);

(statearr_28000_28046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (5))){
var inst_27911 = cljs.core.deref.call(null,mults);
var inst_27912 = cljs.core.vals.call(null,inst_27911);
var inst_27913 = cljs.core.seq.call(null,inst_27912);
var inst_27914 = inst_27913;
var inst_27915 = null;
var inst_27916 = (0);
var inst_27917 = (0);
var state_27973__$1 = (function (){var statearr_28001 = state_27973;
(statearr_28001[(13)] = inst_27917);

(statearr_28001[(14)] = inst_27914);

(statearr_28001[(15)] = inst_27916);

(statearr_28001[(16)] = inst_27915);

return statearr_28001;
})();
var statearr_28002_28047 = state_27973__$1;
(statearr_28002_28047[(2)] = null);

(statearr_28002_28047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (14))){
var state_27973__$1 = state_27973;
var statearr_28006_28048 = state_27973__$1;
(statearr_28006_28048[(2)] = null);

(statearr_28006_28048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (16))){
var inst_27928 = (state_27973[(10)]);
var inst_27932 = cljs.core.chunk_first.call(null,inst_27928);
var inst_27933 = cljs.core.chunk_rest.call(null,inst_27928);
var inst_27934 = cljs.core.count.call(null,inst_27932);
var inst_27914 = inst_27933;
var inst_27915 = inst_27932;
var inst_27916 = inst_27934;
var inst_27917 = (0);
var state_27973__$1 = (function (){var statearr_28007 = state_27973;
(statearr_28007[(13)] = inst_27917);

(statearr_28007[(14)] = inst_27914);

(statearr_28007[(15)] = inst_27916);

(statearr_28007[(16)] = inst_27915);

return statearr_28007;
})();
var statearr_28008_28049 = state_27973__$1;
(statearr_28008_28049[(2)] = null);

(statearr_28008_28049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (10))){
var inst_27917 = (state_27973[(13)]);
var inst_27914 = (state_27973[(14)]);
var inst_27916 = (state_27973[(15)]);
var inst_27915 = (state_27973[(16)]);
var inst_27922 = cljs.core._nth.call(null,inst_27915,inst_27917);
var inst_27923 = cljs.core.async.muxch_STAR_.call(null,inst_27922);
var inst_27924 = cljs.core.async.close_BANG_.call(null,inst_27923);
var inst_27925 = (inst_27917 + (1));
var tmp28003 = inst_27914;
var tmp28004 = inst_27916;
var tmp28005 = inst_27915;
var inst_27914__$1 = tmp28003;
var inst_27915__$1 = tmp28005;
var inst_27916__$1 = tmp28004;
var inst_27917__$1 = inst_27925;
var state_27973__$1 = (function (){var statearr_28009 = state_27973;
(statearr_28009[(13)] = inst_27917__$1);

(statearr_28009[(14)] = inst_27914__$1);

(statearr_28009[(15)] = inst_27916__$1);

(statearr_28009[(17)] = inst_27924);

(statearr_28009[(16)] = inst_27915__$1);

return statearr_28009;
})();
var statearr_28010_28050 = state_27973__$1;
(statearr_28010_28050[(2)] = null);

(statearr_28010_28050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (18))){
var inst_27943 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_28011_28051 = state_27973__$1;
(statearr_28011_28051[(2)] = inst_27943);

(statearr_28011_28051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (8))){
var inst_27917 = (state_27973[(13)]);
var inst_27916 = (state_27973[(15)]);
var inst_27919 = (inst_27917 < inst_27916);
var inst_27920 = inst_27919;
var state_27973__$1 = state_27973;
if(cljs.core.truth_(inst_27920)){
var statearr_28012_28052 = state_27973__$1;
(statearr_28012_28052[(1)] = (10));

} else {
var statearr_28013_28053 = state_27973__$1;
(statearr_28013_28053[(1)] = (11));

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
});})(c__19582__auto___28025,mults,ensure_mult,p))
;
return ((function (switch__19517__auto__,c__19582__auto___28025,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28017[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28017[(1)] = (1));

return statearr_28017;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_27973){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_27973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28018){if((e28018 instanceof Object)){
var ex__19521__auto__ = e28018;
var statearr_28019_28054 = state_27973;
(statearr_28019_28054[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28055 = state_27973;
state_27973 = G__28055;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_27973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_27973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28025,mults,ensure_mult,p))
})();
var state__19584__auto__ = (function (){var statearr_28020 = f__19583__auto__.call(null);
(statearr_28020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28025);

return statearr_28020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28025,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28056 = [];
var len__17337__auto___28059 = arguments.length;
var i__17338__auto___28060 = (0);
while(true){
if((i__17338__auto___28060 < len__17337__auto___28059)){
args28056.push((arguments[i__17338__auto___28060]));

var G__28061 = (i__17338__auto___28060 + (1));
i__17338__auto___28060 = G__28061;
continue;
} else {
}
break;
}

var G__28058 = args28056.length;
switch (G__28058) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28056.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28063 = [];
var len__17337__auto___28066 = arguments.length;
var i__17338__auto___28067 = (0);
while(true){
if((i__17338__auto___28067 < len__17337__auto___28066)){
args28063.push((arguments[i__17338__auto___28067]));

var G__28068 = (i__17338__auto___28067 + (1));
i__17338__auto___28067 = G__28068;
continue;
} else {
}
break;
}

var G__28065 = args28063.length;
switch (G__28065) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28063.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28070 = [];
var len__17337__auto___28141 = arguments.length;
var i__17338__auto___28142 = (0);
while(true){
if((i__17338__auto___28142 < len__17337__auto___28141)){
args28070.push((arguments[i__17338__auto___28142]));

var G__28143 = (i__17338__auto___28142 + (1));
i__17338__auto___28142 = G__28143;
continue;
} else {
}
break;
}

var G__28072 = args28070.length;
switch (G__28072) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28070.length)].join('')));

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
var c__19582__auto___28145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28111){
var state_val_28112 = (state_28111[(1)]);
if((state_val_28112 === (7))){
var state_28111__$1 = state_28111;
var statearr_28113_28146 = state_28111__$1;
(statearr_28113_28146[(2)] = null);

(statearr_28113_28146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (1))){
var state_28111__$1 = state_28111;
var statearr_28114_28147 = state_28111__$1;
(statearr_28114_28147[(2)] = null);

(statearr_28114_28147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (4))){
var inst_28075 = (state_28111[(7)]);
var inst_28077 = (inst_28075 < cnt);
var state_28111__$1 = state_28111;
if(cljs.core.truth_(inst_28077)){
var statearr_28115_28148 = state_28111__$1;
(statearr_28115_28148[(1)] = (6));

} else {
var statearr_28116_28149 = state_28111__$1;
(statearr_28116_28149[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (15))){
var inst_28107 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
var statearr_28117_28150 = state_28111__$1;
(statearr_28117_28150[(2)] = inst_28107);

(statearr_28117_28150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (13))){
var inst_28100 = cljs.core.async.close_BANG_.call(null,out);
var state_28111__$1 = state_28111;
var statearr_28118_28151 = state_28111__$1;
(statearr_28118_28151[(2)] = inst_28100);

(statearr_28118_28151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (6))){
var state_28111__$1 = state_28111;
var statearr_28119_28152 = state_28111__$1;
(statearr_28119_28152[(2)] = null);

(statearr_28119_28152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (3))){
var inst_28109 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28111__$1,inst_28109);
} else {
if((state_val_28112 === (12))){
var inst_28097 = (state_28111[(8)]);
var inst_28097__$1 = (state_28111[(2)]);
var inst_28098 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28097__$1);
var state_28111__$1 = (function (){var statearr_28120 = state_28111;
(statearr_28120[(8)] = inst_28097__$1);

return statearr_28120;
})();
if(cljs.core.truth_(inst_28098)){
var statearr_28121_28153 = state_28111__$1;
(statearr_28121_28153[(1)] = (13));

} else {
var statearr_28122_28154 = state_28111__$1;
(statearr_28122_28154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (2))){
var inst_28074 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28075 = (0);
var state_28111__$1 = (function (){var statearr_28123 = state_28111;
(statearr_28123[(9)] = inst_28074);

(statearr_28123[(7)] = inst_28075);

return statearr_28123;
})();
var statearr_28124_28155 = state_28111__$1;
(statearr_28124_28155[(2)] = null);

(statearr_28124_28155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (11))){
var inst_28075 = (state_28111[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28111,(10),Object,null,(9));
var inst_28084 = chs__$1.call(null,inst_28075);
var inst_28085 = done.call(null,inst_28075);
var inst_28086 = cljs.core.async.take_BANG_.call(null,inst_28084,inst_28085);
var state_28111__$1 = state_28111;
var statearr_28125_28156 = state_28111__$1;
(statearr_28125_28156[(2)] = inst_28086);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28111__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (9))){
var inst_28075 = (state_28111[(7)]);
var inst_28088 = (state_28111[(2)]);
var inst_28089 = (inst_28075 + (1));
var inst_28075__$1 = inst_28089;
var state_28111__$1 = (function (){var statearr_28126 = state_28111;
(statearr_28126[(10)] = inst_28088);

(statearr_28126[(7)] = inst_28075__$1);

return statearr_28126;
})();
var statearr_28127_28157 = state_28111__$1;
(statearr_28127_28157[(2)] = null);

(statearr_28127_28157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (5))){
var inst_28095 = (state_28111[(2)]);
var state_28111__$1 = (function (){var statearr_28128 = state_28111;
(statearr_28128[(11)] = inst_28095);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28111__$1,(12),dchan);
} else {
if((state_val_28112 === (14))){
var inst_28097 = (state_28111[(8)]);
var inst_28102 = cljs.core.apply.call(null,f,inst_28097);
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28111__$1,(16),out,inst_28102);
} else {
if((state_val_28112 === (16))){
var inst_28104 = (state_28111[(2)]);
var state_28111__$1 = (function (){var statearr_28129 = state_28111;
(statearr_28129[(12)] = inst_28104);

return statearr_28129;
})();
var statearr_28130_28158 = state_28111__$1;
(statearr_28130_28158[(2)] = null);

(statearr_28130_28158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (10))){
var inst_28079 = (state_28111[(2)]);
var inst_28080 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28111__$1 = (function (){var statearr_28131 = state_28111;
(statearr_28131[(13)] = inst_28079);

return statearr_28131;
})();
var statearr_28132_28159 = state_28111__$1;
(statearr_28132_28159[(2)] = inst_28080);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28111__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (8))){
var inst_28093 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
var statearr_28133_28160 = state_28111__$1;
(statearr_28133_28160[(2)] = inst_28093);

(statearr_28133_28160[(1)] = (5));


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
});})(c__19582__auto___28145,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19517__auto__,c__19582__auto___28145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28137[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28137[(1)] = (1));

return statearr_28137;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_28111){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28138){if((e28138 instanceof Object)){
var ex__19521__auto__ = e28138;
var statearr_28139_28161 = state_28111;
(statearr_28139_28161[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28162 = state_28111;
state_28111 = G__28162;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_28111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_28111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28145,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19584__auto__ = (function (){var statearr_28140 = f__19583__auto__.call(null);
(statearr_28140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28145);

return statearr_28140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28145,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28164 = [];
var len__17337__auto___28220 = arguments.length;
var i__17338__auto___28221 = (0);
while(true){
if((i__17338__auto___28221 < len__17337__auto___28220)){
args28164.push((arguments[i__17338__auto___28221]));

var G__28222 = (i__17338__auto___28221 + (1));
i__17338__auto___28221 = G__28222;
continue;
} else {
}
break;
}

var G__28166 = args28164.length;
switch (G__28166) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28164.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19582__auto___28224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28224,out){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28224,out){
return (function (state_28196){
var state_val_28197 = (state_28196[(1)]);
if((state_val_28197 === (7))){
var inst_28176 = (state_28196[(7)]);
var inst_28175 = (state_28196[(8)]);
var inst_28175__$1 = (state_28196[(2)]);
var inst_28176__$1 = cljs.core.nth.call(null,inst_28175__$1,(0),null);
var inst_28177 = cljs.core.nth.call(null,inst_28175__$1,(1),null);
var inst_28178 = (inst_28176__$1 == null);
var state_28196__$1 = (function (){var statearr_28198 = state_28196;
(statearr_28198[(7)] = inst_28176__$1);

(statearr_28198[(8)] = inst_28175__$1);

(statearr_28198[(9)] = inst_28177);

return statearr_28198;
})();
if(cljs.core.truth_(inst_28178)){
var statearr_28199_28225 = state_28196__$1;
(statearr_28199_28225[(1)] = (8));

} else {
var statearr_28200_28226 = state_28196__$1;
(statearr_28200_28226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (1))){
var inst_28167 = cljs.core.vec.call(null,chs);
var inst_28168 = inst_28167;
var state_28196__$1 = (function (){var statearr_28201 = state_28196;
(statearr_28201[(10)] = inst_28168);

return statearr_28201;
})();
var statearr_28202_28227 = state_28196__$1;
(statearr_28202_28227[(2)] = null);

(statearr_28202_28227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (4))){
var inst_28168 = (state_28196[(10)]);
var state_28196__$1 = state_28196;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28196__$1,(7),inst_28168);
} else {
if((state_val_28197 === (6))){
var inst_28192 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28203_28228 = state_28196__$1;
(statearr_28203_28228[(2)] = inst_28192);

(statearr_28203_28228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (3))){
var inst_28194 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28196__$1,inst_28194);
} else {
if((state_val_28197 === (2))){
var inst_28168 = (state_28196[(10)]);
var inst_28170 = cljs.core.count.call(null,inst_28168);
var inst_28171 = (inst_28170 > (0));
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28171)){
var statearr_28205_28229 = state_28196__$1;
(statearr_28205_28229[(1)] = (4));

} else {
var statearr_28206_28230 = state_28196__$1;
(statearr_28206_28230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (11))){
var inst_28168 = (state_28196[(10)]);
var inst_28185 = (state_28196[(2)]);
var tmp28204 = inst_28168;
var inst_28168__$1 = tmp28204;
var state_28196__$1 = (function (){var statearr_28207 = state_28196;
(statearr_28207[(11)] = inst_28185);

(statearr_28207[(10)] = inst_28168__$1);

return statearr_28207;
})();
var statearr_28208_28231 = state_28196__$1;
(statearr_28208_28231[(2)] = null);

(statearr_28208_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (9))){
var inst_28176 = (state_28196[(7)]);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28196__$1,(11),out,inst_28176);
} else {
if((state_val_28197 === (5))){
var inst_28190 = cljs.core.async.close_BANG_.call(null,out);
var state_28196__$1 = state_28196;
var statearr_28209_28232 = state_28196__$1;
(statearr_28209_28232[(2)] = inst_28190);

(statearr_28209_28232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (10))){
var inst_28188 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28210_28233 = state_28196__$1;
(statearr_28210_28233[(2)] = inst_28188);

(statearr_28210_28233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (8))){
var inst_28176 = (state_28196[(7)]);
var inst_28175 = (state_28196[(8)]);
var inst_28177 = (state_28196[(9)]);
var inst_28168 = (state_28196[(10)]);
var inst_28180 = (function (){var cs = inst_28168;
var vec__28173 = inst_28175;
var v = inst_28176;
var c = inst_28177;
return ((function (cs,vec__28173,v,c,inst_28176,inst_28175,inst_28177,inst_28168,state_val_28197,c__19582__auto___28224,out){
return (function (p1__28163_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28163_SHARP_);
});
;})(cs,vec__28173,v,c,inst_28176,inst_28175,inst_28177,inst_28168,state_val_28197,c__19582__auto___28224,out))
})();
var inst_28181 = cljs.core.filterv.call(null,inst_28180,inst_28168);
var inst_28168__$1 = inst_28181;
var state_28196__$1 = (function (){var statearr_28211 = state_28196;
(statearr_28211[(10)] = inst_28168__$1);

return statearr_28211;
})();
var statearr_28212_28234 = state_28196__$1;
(statearr_28212_28234[(2)] = null);

(statearr_28212_28234[(1)] = (2));


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
});})(c__19582__auto___28224,out))
;
return ((function (switch__19517__auto__,c__19582__auto___28224,out){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28216[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28216[(1)] = (1));

return statearr_28216;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_28196){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28217){if((e28217 instanceof Object)){
var ex__19521__auto__ = e28217;
var statearr_28218_28235 = state_28196;
(statearr_28218_28235[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28236 = state_28196;
state_28196 = G__28236;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_28196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_28196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28224,out))
})();
var state__19584__auto__ = (function (){var statearr_28219 = f__19583__auto__.call(null);
(statearr_28219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28224);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28224,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28237 = [];
var len__17337__auto___28286 = arguments.length;
var i__17338__auto___28287 = (0);
while(true){
if((i__17338__auto___28287 < len__17337__auto___28286)){
args28237.push((arguments[i__17338__auto___28287]));

var G__28288 = (i__17338__auto___28287 + (1));
i__17338__auto___28287 = G__28288;
continue;
} else {
}
break;
}

var G__28239 = args28237.length;
switch (G__28239) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28237.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19582__auto___28290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28290,out){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28290,out){
return (function (state_28263){
var state_val_28264 = (state_28263[(1)]);
if((state_val_28264 === (7))){
var inst_28245 = (state_28263[(7)]);
var inst_28245__$1 = (state_28263[(2)]);
var inst_28246 = (inst_28245__$1 == null);
var inst_28247 = cljs.core.not.call(null,inst_28246);
var state_28263__$1 = (function (){var statearr_28265 = state_28263;
(statearr_28265[(7)] = inst_28245__$1);

return statearr_28265;
})();
if(inst_28247){
var statearr_28266_28291 = state_28263__$1;
(statearr_28266_28291[(1)] = (8));

} else {
var statearr_28267_28292 = state_28263__$1;
(statearr_28267_28292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (1))){
var inst_28240 = (0);
var state_28263__$1 = (function (){var statearr_28268 = state_28263;
(statearr_28268[(8)] = inst_28240);

return statearr_28268;
})();
var statearr_28269_28293 = state_28263__$1;
(statearr_28269_28293[(2)] = null);

(statearr_28269_28293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (4))){
var state_28263__$1 = state_28263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28263__$1,(7),ch);
} else {
if((state_val_28264 === (6))){
var inst_28258 = (state_28263[(2)]);
var state_28263__$1 = state_28263;
var statearr_28270_28294 = state_28263__$1;
(statearr_28270_28294[(2)] = inst_28258);

(statearr_28270_28294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (3))){
var inst_28260 = (state_28263[(2)]);
var inst_28261 = cljs.core.async.close_BANG_.call(null,out);
var state_28263__$1 = (function (){var statearr_28271 = state_28263;
(statearr_28271[(9)] = inst_28260);

return statearr_28271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28263__$1,inst_28261);
} else {
if((state_val_28264 === (2))){
var inst_28240 = (state_28263[(8)]);
var inst_28242 = (inst_28240 < n);
var state_28263__$1 = state_28263;
if(cljs.core.truth_(inst_28242)){
var statearr_28272_28295 = state_28263__$1;
(statearr_28272_28295[(1)] = (4));

} else {
var statearr_28273_28296 = state_28263__$1;
(statearr_28273_28296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (11))){
var inst_28240 = (state_28263[(8)]);
var inst_28250 = (state_28263[(2)]);
var inst_28251 = (inst_28240 + (1));
var inst_28240__$1 = inst_28251;
var state_28263__$1 = (function (){var statearr_28274 = state_28263;
(statearr_28274[(10)] = inst_28250);

(statearr_28274[(8)] = inst_28240__$1);

return statearr_28274;
})();
var statearr_28275_28297 = state_28263__$1;
(statearr_28275_28297[(2)] = null);

(statearr_28275_28297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (9))){
var state_28263__$1 = state_28263;
var statearr_28276_28298 = state_28263__$1;
(statearr_28276_28298[(2)] = null);

(statearr_28276_28298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (5))){
var state_28263__$1 = state_28263;
var statearr_28277_28299 = state_28263__$1;
(statearr_28277_28299[(2)] = null);

(statearr_28277_28299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (10))){
var inst_28255 = (state_28263[(2)]);
var state_28263__$1 = state_28263;
var statearr_28278_28300 = state_28263__$1;
(statearr_28278_28300[(2)] = inst_28255);

(statearr_28278_28300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28264 === (8))){
var inst_28245 = (state_28263[(7)]);
var state_28263__$1 = state_28263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28263__$1,(11),out,inst_28245);
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
});})(c__19582__auto___28290,out))
;
return ((function (switch__19517__auto__,c__19582__auto___28290,out){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28282[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28282[(1)] = (1));

return statearr_28282;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_28263){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28283){if((e28283 instanceof Object)){
var ex__19521__auto__ = e28283;
var statearr_28284_28301 = state_28263;
(statearr_28284_28301[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28302 = state_28263;
state_28263 = G__28302;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_28263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_28263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28290,out))
})();
var state__19584__auto__ = (function (){var statearr_28285 = f__19583__auto__.call(null);
(statearr_28285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28290);

return statearr_28285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28290,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28310 = (function (map_LT_,f,ch,meta28311){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28311 = meta28311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28312,meta28311__$1){
var self__ = this;
var _28312__$1 = this;
return (new cljs.core.async.t_cljs$core$async28310(self__.map_LT_,self__.f,self__.ch,meta28311__$1));
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28312){
var self__ = this;
var _28312__$1 = this;
return self__.meta28311;
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28313 = (function (map_LT_,f,ch,meta28311,_,fn1,meta28314){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28311 = meta28311;
this._ = _;
this.fn1 = fn1;
this.meta28314 = meta28314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28315,meta28314__$1){
var self__ = this;
var _28315__$1 = this;
return (new cljs.core.async.t_cljs$core$async28313(self__.map_LT_,self__.f,self__.ch,self__.meta28311,self__._,self__.fn1,meta28314__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28315){
var self__ = this;
var _28315__$1 = this;
return self__.meta28314;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28303_SHARP_){
return f1.call(null,(((p1__28303_SHARP_ == null))?null:self__.f.call(null,p1__28303_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28313.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28311","meta28311",-1809965558,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28310","cljs.core.async/t_cljs$core$async28310",297959385,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28314","meta28314",-313929387,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28313";

cljs.core.async.t_cljs$core$async28313.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28313");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28313 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28313(map_LT___$1,f__$1,ch__$1,meta28311__$1,___$2,fn1__$1,meta28314){
return (new cljs.core.async.t_cljs$core$async28313(map_LT___$1,f__$1,ch__$1,meta28311__$1,___$2,fn1__$1,meta28314));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28313(self__.map_LT_,self__.f,self__.ch,self__.meta28311,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16267__auto__ = ret;
if(cljs.core.truth_(and__16267__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16267__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28311","meta28311",-1809965558,null)], null);
});

cljs.core.async.t_cljs$core$async28310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28310";

cljs.core.async.t_cljs$core$async28310.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28310");
});

cljs.core.async.__GT_t_cljs$core$async28310 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28310(map_LT___$1,f__$1,ch__$1,meta28311){
return (new cljs.core.async.t_cljs$core$async28310(map_LT___$1,f__$1,ch__$1,meta28311));
});

}

return (new cljs.core.async.t_cljs$core$async28310(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28319 = (function (map_GT_,f,ch,meta28320){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28320 = meta28320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28321,meta28320__$1){
var self__ = this;
var _28321__$1 = this;
return (new cljs.core.async.t_cljs$core$async28319(self__.map_GT_,self__.f,self__.ch,meta28320__$1));
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28321){
var self__ = this;
var _28321__$1 = this;
return self__.meta28320;
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28320","meta28320",58959287,null)], null);
});

cljs.core.async.t_cljs$core$async28319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28319";

cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28319");
});

cljs.core.async.__GT_t_cljs$core$async28319 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28319(map_GT___$1,f__$1,ch__$1,meta28320){
return (new cljs.core.async.t_cljs$core$async28319(map_GT___$1,f__$1,ch__$1,meta28320));
});

}

return (new cljs.core.async.t_cljs$core$async28319(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28325 = (function (filter_GT_,p,ch,meta28326){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28326 = meta28326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28327,meta28326__$1){
var self__ = this;
var _28327__$1 = this;
return (new cljs.core.async.t_cljs$core$async28325(self__.filter_GT_,self__.p,self__.ch,meta28326__$1));
});

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28327){
var self__ = this;
var _28327__$1 = this;
return self__.meta28326;
});

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28326","meta28326",2075383244,null)], null);
});

cljs.core.async.t_cljs$core$async28325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28325";

cljs.core.async.t_cljs$core$async28325.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28325");
});

cljs.core.async.__GT_t_cljs$core$async28325 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28325(filter_GT___$1,p__$1,ch__$1,meta28326){
return (new cljs.core.async.t_cljs$core$async28325(filter_GT___$1,p__$1,ch__$1,meta28326));
});

}

return (new cljs.core.async.t_cljs$core$async28325(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28328 = [];
var len__17337__auto___28372 = arguments.length;
var i__17338__auto___28373 = (0);
while(true){
if((i__17338__auto___28373 < len__17337__auto___28372)){
args28328.push((arguments[i__17338__auto___28373]));

var G__28374 = (i__17338__auto___28373 + (1));
i__17338__auto___28373 = G__28374;
continue;
} else {
}
break;
}

var G__28330 = args28328.length;
switch (G__28330) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28328.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19582__auto___28376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28376,out){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28376,out){
return (function (state_28351){
var state_val_28352 = (state_28351[(1)]);
if((state_val_28352 === (7))){
var inst_28347 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28353_28377 = state_28351__$1;
(statearr_28353_28377[(2)] = inst_28347);

(statearr_28353_28377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (1))){
var state_28351__$1 = state_28351;
var statearr_28354_28378 = state_28351__$1;
(statearr_28354_28378[(2)] = null);

(statearr_28354_28378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (4))){
var inst_28333 = (state_28351[(7)]);
var inst_28333__$1 = (state_28351[(2)]);
var inst_28334 = (inst_28333__$1 == null);
var state_28351__$1 = (function (){var statearr_28355 = state_28351;
(statearr_28355[(7)] = inst_28333__$1);

return statearr_28355;
})();
if(cljs.core.truth_(inst_28334)){
var statearr_28356_28379 = state_28351__$1;
(statearr_28356_28379[(1)] = (5));

} else {
var statearr_28357_28380 = state_28351__$1;
(statearr_28357_28380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (6))){
var inst_28333 = (state_28351[(7)]);
var inst_28338 = p.call(null,inst_28333);
var state_28351__$1 = state_28351;
if(cljs.core.truth_(inst_28338)){
var statearr_28358_28381 = state_28351__$1;
(statearr_28358_28381[(1)] = (8));

} else {
var statearr_28359_28382 = state_28351__$1;
(statearr_28359_28382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (3))){
var inst_28349 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28351__$1,inst_28349);
} else {
if((state_val_28352 === (2))){
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28351__$1,(4),ch);
} else {
if((state_val_28352 === (11))){
var inst_28341 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28360_28383 = state_28351__$1;
(statearr_28360_28383[(2)] = inst_28341);

(statearr_28360_28383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (9))){
var state_28351__$1 = state_28351;
var statearr_28361_28384 = state_28351__$1;
(statearr_28361_28384[(2)] = null);

(statearr_28361_28384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (5))){
var inst_28336 = cljs.core.async.close_BANG_.call(null,out);
var state_28351__$1 = state_28351;
var statearr_28362_28385 = state_28351__$1;
(statearr_28362_28385[(2)] = inst_28336);

(statearr_28362_28385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (10))){
var inst_28344 = (state_28351[(2)]);
var state_28351__$1 = (function (){var statearr_28363 = state_28351;
(statearr_28363[(8)] = inst_28344);

return statearr_28363;
})();
var statearr_28364_28386 = state_28351__$1;
(statearr_28364_28386[(2)] = null);

(statearr_28364_28386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (8))){
var inst_28333 = (state_28351[(7)]);
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28351__$1,(11),out,inst_28333);
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
});})(c__19582__auto___28376,out))
;
return ((function (switch__19517__auto__,c__19582__auto___28376,out){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28368 = [null,null,null,null,null,null,null,null,null];
(statearr_28368[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28368[(1)] = (1));

return statearr_28368;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_28351){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28369){if((e28369 instanceof Object)){
var ex__19521__auto__ = e28369;
var statearr_28370_28387 = state_28351;
(statearr_28370_28387[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28388 = state_28351;
state_28351 = G__28388;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_28351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_28351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28376,out))
})();
var state__19584__auto__ = (function (){var statearr_28371 = f__19583__auto__.call(null);
(statearr_28371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28376);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28376,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28389 = [];
var len__17337__auto___28392 = arguments.length;
var i__17338__auto___28393 = (0);
while(true){
if((i__17338__auto___28393 < len__17337__auto___28392)){
args28389.push((arguments[i__17338__auto___28393]));

var G__28394 = (i__17338__auto___28393 + (1));
i__17338__auto___28393 = G__28394;
continue;
} else {
}
break;
}

var G__28391 = args28389.length;
switch (G__28391) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28389.length)].join('')));

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
var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__){
return (function (state_28561){
var state_val_28562 = (state_28561[(1)]);
if((state_val_28562 === (7))){
var inst_28557 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28563_28604 = state_28561__$1;
(statearr_28563_28604[(2)] = inst_28557);

(statearr_28563_28604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (20))){
var inst_28527 = (state_28561[(7)]);
var inst_28538 = (state_28561[(2)]);
var inst_28539 = cljs.core.next.call(null,inst_28527);
var inst_28513 = inst_28539;
var inst_28514 = null;
var inst_28515 = (0);
var inst_28516 = (0);
var state_28561__$1 = (function (){var statearr_28564 = state_28561;
(statearr_28564[(8)] = inst_28538);

(statearr_28564[(9)] = inst_28514);

(statearr_28564[(10)] = inst_28515);

(statearr_28564[(11)] = inst_28516);

(statearr_28564[(12)] = inst_28513);

return statearr_28564;
})();
var statearr_28565_28605 = state_28561__$1;
(statearr_28565_28605[(2)] = null);

(statearr_28565_28605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (1))){
var state_28561__$1 = state_28561;
var statearr_28566_28606 = state_28561__$1;
(statearr_28566_28606[(2)] = null);

(statearr_28566_28606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (4))){
var inst_28502 = (state_28561[(13)]);
var inst_28502__$1 = (state_28561[(2)]);
var inst_28503 = (inst_28502__$1 == null);
var state_28561__$1 = (function (){var statearr_28567 = state_28561;
(statearr_28567[(13)] = inst_28502__$1);

return statearr_28567;
})();
if(cljs.core.truth_(inst_28503)){
var statearr_28568_28607 = state_28561__$1;
(statearr_28568_28607[(1)] = (5));

} else {
var statearr_28569_28608 = state_28561__$1;
(statearr_28569_28608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (15))){
var state_28561__$1 = state_28561;
var statearr_28573_28609 = state_28561__$1;
(statearr_28573_28609[(2)] = null);

(statearr_28573_28609[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (21))){
var state_28561__$1 = state_28561;
var statearr_28574_28610 = state_28561__$1;
(statearr_28574_28610[(2)] = null);

(statearr_28574_28610[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (13))){
var inst_28514 = (state_28561[(9)]);
var inst_28515 = (state_28561[(10)]);
var inst_28516 = (state_28561[(11)]);
var inst_28513 = (state_28561[(12)]);
var inst_28523 = (state_28561[(2)]);
var inst_28524 = (inst_28516 + (1));
var tmp28570 = inst_28514;
var tmp28571 = inst_28515;
var tmp28572 = inst_28513;
var inst_28513__$1 = tmp28572;
var inst_28514__$1 = tmp28570;
var inst_28515__$1 = tmp28571;
var inst_28516__$1 = inst_28524;
var state_28561__$1 = (function (){var statearr_28575 = state_28561;
(statearr_28575[(9)] = inst_28514__$1);

(statearr_28575[(10)] = inst_28515__$1);

(statearr_28575[(14)] = inst_28523);

(statearr_28575[(11)] = inst_28516__$1);

(statearr_28575[(12)] = inst_28513__$1);

return statearr_28575;
})();
var statearr_28576_28611 = state_28561__$1;
(statearr_28576_28611[(2)] = null);

(statearr_28576_28611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (22))){
var state_28561__$1 = state_28561;
var statearr_28577_28612 = state_28561__$1;
(statearr_28577_28612[(2)] = null);

(statearr_28577_28612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (6))){
var inst_28502 = (state_28561[(13)]);
var inst_28511 = f.call(null,inst_28502);
var inst_28512 = cljs.core.seq.call(null,inst_28511);
var inst_28513 = inst_28512;
var inst_28514 = null;
var inst_28515 = (0);
var inst_28516 = (0);
var state_28561__$1 = (function (){var statearr_28578 = state_28561;
(statearr_28578[(9)] = inst_28514);

(statearr_28578[(10)] = inst_28515);

(statearr_28578[(11)] = inst_28516);

(statearr_28578[(12)] = inst_28513);

return statearr_28578;
})();
var statearr_28579_28613 = state_28561__$1;
(statearr_28579_28613[(2)] = null);

(statearr_28579_28613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (17))){
var inst_28527 = (state_28561[(7)]);
var inst_28531 = cljs.core.chunk_first.call(null,inst_28527);
var inst_28532 = cljs.core.chunk_rest.call(null,inst_28527);
var inst_28533 = cljs.core.count.call(null,inst_28531);
var inst_28513 = inst_28532;
var inst_28514 = inst_28531;
var inst_28515 = inst_28533;
var inst_28516 = (0);
var state_28561__$1 = (function (){var statearr_28580 = state_28561;
(statearr_28580[(9)] = inst_28514);

(statearr_28580[(10)] = inst_28515);

(statearr_28580[(11)] = inst_28516);

(statearr_28580[(12)] = inst_28513);

return statearr_28580;
})();
var statearr_28581_28614 = state_28561__$1;
(statearr_28581_28614[(2)] = null);

(statearr_28581_28614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (3))){
var inst_28559 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28561__$1,inst_28559);
} else {
if((state_val_28562 === (12))){
var inst_28547 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28582_28615 = state_28561__$1;
(statearr_28582_28615[(2)] = inst_28547);

(statearr_28582_28615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (2))){
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28561__$1,(4),in$);
} else {
if((state_val_28562 === (23))){
var inst_28555 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28583_28616 = state_28561__$1;
(statearr_28583_28616[(2)] = inst_28555);

(statearr_28583_28616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (19))){
var inst_28542 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28584_28617 = state_28561__$1;
(statearr_28584_28617[(2)] = inst_28542);

(statearr_28584_28617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (11))){
var inst_28527 = (state_28561[(7)]);
var inst_28513 = (state_28561[(12)]);
var inst_28527__$1 = cljs.core.seq.call(null,inst_28513);
var state_28561__$1 = (function (){var statearr_28585 = state_28561;
(statearr_28585[(7)] = inst_28527__$1);

return statearr_28585;
})();
if(inst_28527__$1){
var statearr_28586_28618 = state_28561__$1;
(statearr_28586_28618[(1)] = (14));

} else {
var statearr_28587_28619 = state_28561__$1;
(statearr_28587_28619[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (9))){
var inst_28549 = (state_28561[(2)]);
var inst_28550 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28561__$1 = (function (){var statearr_28588 = state_28561;
(statearr_28588[(15)] = inst_28549);

return statearr_28588;
})();
if(cljs.core.truth_(inst_28550)){
var statearr_28589_28620 = state_28561__$1;
(statearr_28589_28620[(1)] = (21));

} else {
var statearr_28590_28621 = state_28561__$1;
(statearr_28590_28621[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (5))){
var inst_28505 = cljs.core.async.close_BANG_.call(null,out);
var state_28561__$1 = state_28561;
var statearr_28591_28622 = state_28561__$1;
(statearr_28591_28622[(2)] = inst_28505);

(statearr_28591_28622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (14))){
var inst_28527 = (state_28561[(7)]);
var inst_28529 = cljs.core.chunked_seq_QMARK_.call(null,inst_28527);
var state_28561__$1 = state_28561;
if(inst_28529){
var statearr_28592_28623 = state_28561__$1;
(statearr_28592_28623[(1)] = (17));

} else {
var statearr_28593_28624 = state_28561__$1;
(statearr_28593_28624[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (16))){
var inst_28545 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28594_28625 = state_28561__$1;
(statearr_28594_28625[(2)] = inst_28545);

(statearr_28594_28625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (10))){
var inst_28514 = (state_28561[(9)]);
var inst_28516 = (state_28561[(11)]);
var inst_28521 = cljs.core._nth.call(null,inst_28514,inst_28516);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28561__$1,(13),out,inst_28521);
} else {
if((state_val_28562 === (18))){
var inst_28527 = (state_28561[(7)]);
var inst_28536 = cljs.core.first.call(null,inst_28527);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28561__$1,(20),out,inst_28536);
} else {
if((state_val_28562 === (8))){
var inst_28515 = (state_28561[(10)]);
var inst_28516 = (state_28561[(11)]);
var inst_28518 = (inst_28516 < inst_28515);
var inst_28519 = inst_28518;
var state_28561__$1 = state_28561;
if(cljs.core.truth_(inst_28519)){
var statearr_28595_28626 = state_28561__$1;
(statearr_28595_28626[(1)] = (10));

} else {
var statearr_28596_28627 = state_28561__$1;
(statearr_28596_28627[(1)] = (11));

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
});})(c__19582__auto__))
;
return ((function (switch__19517__auto__,c__19582__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19518__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19518__auto____0 = (function (){
var statearr_28600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28600[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19518__auto__);

(statearr_28600[(1)] = (1));

return statearr_28600;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19518__auto____1 = (function (state_28561){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28601){if((e28601 instanceof Object)){
var ex__19521__auto__ = e28601;
var statearr_28602_28628 = state_28561;
(statearr_28602_28628[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28629 = state_28561;
state_28561 = G__28629;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19518__auto__ = function(state_28561){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19518__auto____1.call(this,state_28561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19518__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19518__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__))
})();
var state__19584__auto__ = (function (){var statearr_28603 = f__19583__auto__.call(null);
(statearr_28603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_28603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__))
);

return c__19582__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28630 = [];
var len__17337__auto___28633 = arguments.length;
var i__17338__auto___28634 = (0);
while(true){
if((i__17338__auto___28634 < len__17337__auto___28633)){
args28630.push((arguments[i__17338__auto___28634]));

var G__28635 = (i__17338__auto___28634 + (1));
i__17338__auto___28634 = G__28635;
continue;
} else {
}
break;
}

var G__28632 = args28630.length;
switch (G__28632) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28630.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28637 = [];
var len__17337__auto___28640 = arguments.length;
var i__17338__auto___28641 = (0);
while(true){
if((i__17338__auto___28641 < len__17337__auto___28640)){
args28637.push((arguments[i__17338__auto___28641]));

var G__28642 = (i__17338__auto___28641 + (1));
i__17338__auto___28641 = G__28642;
continue;
} else {
}
break;
}

var G__28639 = args28637.length;
switch (G__28639) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28637.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28644 = [];
var len__17337__auto___28695 = arguments.length;
var i__17338__auto___28696 = (0);
while(true){
if((i__17338__auto___28696 < len__17337__auto___28695)){
args28644.push((arguments[i__17338__auto___28696]));

var G__28697 = (i__17338__auto___28696 + (1));
i__17338__auto___28696 = G__28697;
continue;
} else {
}
break;
}

var G__28646 = args28644.length;
switch (G__28646) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28644.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19582__auto___28699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28699,out){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28699,out){
return (function (state_28670){
var state_val_28671 = (state_28670[(1)]);
if((state_val_28671 === (7))){
var inst_28665 = (state_28670[(2)]);
var state_28670__$1 = state_28670;
var statearr_28672_28700 = state_28670__$1;
(statearr_28672_28700[(2)] = inst_28665);

(statearr_28672_28700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (1))){
var inst_28647 = null;
var state_28670__$1 = (function (){var statearr_28673 = state_28670;
(statearr_28673[(7)] = inst_28647);

return statearr_28673;
})();
var statearr_28674_28701 = state_28670__$1;
(statearr_28674_28701[(2)] = null);

(statearr_28674_28701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (4))){
var inst_28650 = (state_28670[(8)]);
var inst_28650__$1 = (state_28670[(2)]);
var inst_28651 = (inst_28650__$1 == null);
var inst_28652 = cljs.core.not.call(null,inst_28651);
var state_28670__$1 = (function (){var statearr_28675 = state_28670;
(statearr_28675[(8)] = inst_28650__$1);

return statearr_28675;
})();
if(inst_28652){
var statearr_28676_28702 = state_28670__$1;
(statearr_28676_28702[(1)] = (5));

} else {
var statearr_28677_28703 = state_28670__$1;
(statearr_28677_28703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (6))){
var state_28670__$1 = state_28670;
var statearr_28678_28704 = state_28670__$1;
(statearr_28678_28704[(2)] = null);

(statearr_28678_28704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (3))){
var inst_28667 = (state_28670[(2)]);
var inst_28668 = cljs.core.async.close_BANG_.call(null,out);
var state_28670__$1 = (function (){var statearr_28679 = state_28670;
(statearr_28679[(9)] = inst_28667);

return statearr_28679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28670__$1,inst_28668);
} else {
if((state_val_28671 === (2))){
var state_28670__$1 = state_28670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28670__$1,(4),ch);
} else {
if((state_val_28671 === (11))){
var inst_28650 = (state_28670[(8)]);
var inst_28659 = (state_28670[(2)]);
var inst_28647 = inst_28650;
var state_28670__$1 = (function (){var statearr_28680 = state_28670;
(statearr_28680[(10)] = inst_28659);

(statearr_28680[(7)] = inst_28647);

return statearr_28680;
})();
var statearr_28681_28705 = state_28670__$1;
(statearr_28681_28705[(2)] = null);

(statearr_28681_28705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (9))){
var inst_28650 = (state_28670[(8)]);
var state_28670__$1 = state_28670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28670__$1,(11),out,inst_28650);
} else {
if((state_val_28671 === (5))){
var inst_28647 = (state_28670[(7)]);
var inst_28650 = (state_28670[(8)]);
var inst_28654 = cljs.core._EQ_.call(null,inst_28650,inst_28647);
var state_28670__$1 = state_28670;
if(inst_28654){
var statearr_28683_28706 = state_28670__$1;
(statearr_28683_28706[(1)] = (8));

} else {
var statearr_28684_28707 = state_28670__$1;
(statearr_28684_28707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (10))){
var inst_28662 = (state_28670[(2)]);
var state_28670__$1 = state_28670;
var statearr_28685_28708 = state_28670__$1;
(statearr_28685_28708[(2)] = inst_28662);

(statearr_28685_28708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (8))){
var inst_28647 = (state_28670[(7)]);
var tmp28682 = inst_28647;
var inst_28647__$1 = tmp28682;
var state_28670__$1 = (function (){var statearr_28686 = state_28670;
(statearr_28686[(7)] = inst_28647__$1);

return statearr_28686;
})();
var statearr_28687_28709 = state_28670__$1;
(statearr_28687_28709[(2)] = null);

(statearr_28687_28709[(1)] = (2));


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
});})(c__19582__auto___28699,out))
;
return ((function (switch__19517__auto__,c__19582__auto___28699,out){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28691[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28691[(1)] = (1));

return statearr_28691;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_28670){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28692){if((e28692 instanceof Object)){
var ex__19521__auto__ = e28692;
var statearr_28693_28710 = state_28670;
(statearr_28693_28710[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28711 = state_28670;
state_28670 = G__28711;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_28670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_28670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28699,out))
})();
var state__19584__auto__ = (function (){var statearr_28694 = f__19583__auto__.call(null);
(statearr_28694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28699);

return statearr_28694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28699,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28712 = [];
var len__17337__auto___28782 = arguments.length;
var i__17338__auto___28783 = (0);
while(true){
if((i__17338__auto___28783 < len__17337__auto___28782)){
args28712.push((arguments[i__17338__auto___28783]));

var G__28784 = (i__17338__auto___28783 + (1));
i__17338__auto___28783 = G__28784;
continue;
} else {
}
break;
}

var G__28714 = args28712.length;
switch (G__28714) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28712.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19582__auto___28786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28786,out){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28786,out){
return (function (state_28752){
var state_val_28753 = (state_28752[(1)]);
if((state_val_28753 === (7))){
var inst_28748 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28754_28787 = state_28752__$1;
(statearr_28754_28787[(2)] = inst_28748);

(statearr_28754_28787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (1))){
var inst_28715 = (new Array(n));
var inst_28716 = inst_28715;
var inst_28717 = (0);
var state_28752__$1 = (function (){var statearr_28755 = state_28752;
(statearr_28755[(7)] = inst_28717);

(statearr_28755[(8)] = inst_28716);

return statearr_28755;
})();
var statearr_28756_28788 = state_28752__$1;
(statearr_28756_28788[(2)] = null);

(statearr_28756_28788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (4))){
var inst_28720 = (state_28752[(9)]);
var inst_28720__$1 = (state_28752[(2)]);
var inst_28721 = (inst_28720__$1 == null);
var inst_28722 = cljs.core.not.call(null,inst_28721);
var state_28752__$1 = (function (){var statearr_28757 = state_28752;
(statearr_28757[(9)] = inst_28720__$1);

return statearr_28757;
})();
if(inst_28722){
var statearr_28758_28789 = state_28752__$1;
(statearr_28758_28789[(1)] = (5));

} else {
var statearr_28759_28790 = state_28752__$1;
(statearr_28759_28790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (15))){
var inst_28742 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28760_28791 = state_28752__$1;
(statearr_28760_28791[(2)] = inst_28742);

(statearr_28760_28791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (13))){
var state_28752__$1 = state_28752;
var statearr_28761_28792 = state_28752__$1;
(statearr_28761_28792[(2)] = null);

(statearr_28761_28792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (6))){
var inst_28717 = (state_28752[(7)]);
var inst_28738 = (inst_28717 > (0));
var state_28752__$1 = state_28752;
if(cljs.core.truth_(inst_28738)){
var statearr_28762_28793 = state_28752__$1;
(statearr_28762_28793[(1)] = (12));

} else {
var statearr_28763_28794 = state_28752__$1;
(statearr_28763_28794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (3))){
var inst_28750 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28752__$1,inst_28750);
} else {
if((state_val_28753 === (12))){
var inst_28716 = (state_28752[(8)]);
var inst_28740 = cljs.core.vec.call(null,inst_28716);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28752__$1,(15),out,inst_28740);
} else {
if((state_val_28753 === (2))){
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28752__$1,(4),ch);
} else {
if((state_val_28753 === (11))){
var inst_28732 = (state_28752[(2)]);
var inst_28733 = (new Array(n));
var inst_28716 = inst_28733;
var inst_28717 = (0);
var state_28752__$1 = (function (){var statearr_28764 = state_28752;
(statearr_28764[(7)] = inst_28717);

(statearr_28764[(10)] = inst_28732);

(statearr_28764[(8)] = inst_28716);

return statearr_28764;
})();
var statearr_28765_28795 = state_28752__$1;
(statearr_28765_28795[(2)] = null);

(statearr_28765_28795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (9))){
var inst_28716 = (state_28752[(8)]);
var inst_28730 = cljs.core.vec.call(null,inst_28716);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28752__$1,(11),out,inst_28730);
} else {
if((state_val_28753 === (5))){
var inst_28725 = (state_28752[(11)]);
var inst_28720 = (state_28752[(9)]);
var inst_28717 = (state_28752[(7)]);
var inst_28716 = (state_28752[(8)]);
var inst_28724 = (inst_28716[inst_28717] = inst_28720);
var inst_28725__$1 = (inst_28717 + (1));
var inst_28726 = (inst_28725__$1 < n);
var state_28752__$1 = (function (){var statearr_28766 = state_28752;
(statearr_28766[(11)] = inst_28725__$1);

(statearr_28766[(12)] = inst_28724);

return statearr_28766;
})();
if(cljs.core.truth_(inst_28726)){
var statearr_28767_28796 = state_28752__$1;
(statearr_28767_28796[(1)] = (8));

} else {
var statearr_28768_28797 = state_28752__$1;
(statearr_28768_28797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (14))){
var inst_28745 = (state_28752[(2)]);
var inst_28746 = cljs.core.async.close_BANG_.call(null,out);
var state_28752__$1 = (function (){var statearr_28770 = state_28752;
(statearr_28770[(13)] = inst_28745);

return statearr_28770;
})();
var statearr_28771_28798 = state_28752__$1;
(statearr_28771_28798[(2)] = inst_28746);

(statearr_28771_28798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (10))){
var inst_28736 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28772_28799 = state_28752__$1;
(statearr_28772_28799[(2)] = inst_28736);

(statearr_28772_28799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (8))){
var inst_28725 = (state_28752[(11)]);
var inst_28716 = (state_28752[(8)]);
var tmp28769 = inst_28716;
var inst_28716__$1 = tmp28769;
var inst_28717 = inst_28725;
var state_28752__$1 = (function (){var statearr_28773 = state_28752;
(statearr_28773[(7)] = inst_28717);

(statearr_28773[(8)] = inst_28716__$1);

return statearr_28773;
})();
var statearr_28774_28800 = state_28752__$1;
(statearr_28774_28800[(2)] = null);

(statearr_28774_28800[(1)] = (2));


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
});})(c__19582__auto___28786,out))
;
return ((function (switch__19517__auto__,c__19582__auto___28786,out){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28778[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28778[(1)] = (1));

return statearr_28778;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_28752){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28779){if((e28779 instanceof Object)){
var ex__19521__auto__ = e28779;
var statearr_28780_28801 = state_28752;
(statearr_28780_28801[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28802 = state_28752;
state_28752 = G__28802;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_28752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_28752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28786,out))
})();
var state__19584__auto__ = (function (){var statearr_28781 = f__19583__auto__.call(null);
(statearr_28781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28786);

return statearr_28781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28786,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28803 = [];
var len__17337__auto___28877 = arguments.length;
var i__17338__auto___28878 = (0);
while(true){
if((i__17338__auto___28878 < len__17337__auto___28877)){
args28803.push((arguments[i__17338__auto___28878]));

var G__28879 = (i__17338__auto___28878 + (1));
i__17338__auto___28878 = G__28879;
continue;
} else {
}
break;
}

var G__28805 = args28803.length;
switch (G__28805) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28803.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19582__auto___28881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___28881,out){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___28881,out){
return (function (state_28847){
var state_val_28848 = (state_28847[(1)]);
if((state_val_28848 === (7))){
var inst_28843 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28849_28882 = state_28847__$1;
(statearr_28849_28882[(2)] = inst_28843);

(statearr_28849_28882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (1))){
var inst_28806 = [];
var inst_28807 = inst_28806;
var inst_28808 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28847__$1 = (function (){var statearr_28850 = state_28847;
(statearr_28850[(7)] = inst_28807);

(statearr_28850[(8)] = inst_28808);

return statearr_28850;
})();
var statearr_28851_28883 = state_28847__$1;
(statearr_28851_28883[(2)] = null);

(statearr_28851_28883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (4))){
var inst_28811 = (state_28847[(9)]);
var inst_28811__$1 = (state_28847[(2)]);
var inst_28812 = (inst_28811__$1 == null);
var inst_28813 = cljs.core.not.call(null,inst_28812);
var state_28847__$1 = (function (){var statearr_28852 = state_28847;
(statearr_28852[(9)] = inst_28811__$1);

return statearr_28852;
})();
if(inst_28813){
var statearr_28853_28884 = state_28847__$1;
(statearr_28853_28884[(1)] = (5));

} else {
var statearr_28854_28885 = state_28847__$1;
(statearr_28854_28885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (15))){
var inst_28837 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28855_28886 = state_28847__$1;
(statearr_28855_28886[(2)] = inst_28837);

(statearr_28855_28886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (13))){
var state_28847__$1 = state_28847;
var statearr_28856_28887 = state_28847__$1;
(statearr_28856_28887[(2)] = null);

(statearr_28856_28887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (6))){
var inst_28807 = (state_28847[(7)]);
var inst_28832 = inst_28807.length;
var inst_28833 = (inst_28832 > (0));
var state_28847__$1 = state_28847;
if(cljs.core.truth_(inst_28833)){
var statearr_28857_28888 = state_28847__$1;
(statearr_28857_28888[(1)] = (12));

} else {
var statearr_28858_28889 = state_28847__$1;
(statearr_28858_28889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (3))){
var inst_28845 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28847__$1,inst_28845);
} else {
if((state_val_28848 === (12))){
var inst_28807 = (state_28847[(7)]);
var inst_28835 = cljs.core.vec.call(null,inst_28807);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28847__$1,(15),out,inst_28835);
} else {
if((state_val_28848 === (2))){
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28847__$1,(4),ch);
} else {
if((state_val_28848 === (11))){
var inst_28815 = (state_28847[(10)]);
var inst_28811 = (state_28847[(9)]);
var inst_28825 = (state_28847[(2)]);
var inst_28826 = [];
var inst_28827 = inst_28826.push(inst_28811);
var inst_28807 = inst_28826;
var inst_28808 = inst_28815;
var state_28847__$1 = (function (){var statearr_28859 = state_28847;
(statearr_28859[(11)] = inst_28825);

(statearr_28859[(7)] = inst_28807);

(statearr_28859[(8)] = inst_28808);

(statearr_28859[(12)] = inst_28827);

return statearr_28859;
})();
var statearr_28860_28890 = state_28847__$1;
(statearr_28860_28890[(2)] = null);

(statearr_28860_28890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (9))){
var inst_28807 = (state_28847[(7)]);
var inst_28823 = cljs.core.vec.call(null,inst_28807);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28847__$1,(11),out,inst_28823);
} else {
if((state_val_28848 === (5))){
var inst_28815 = (state_28847[(10)]);
var inst_28811 = (state_28847[(9)]);
var inst_28808 = (state_28847[(8)]);
var inst_28815__$1 = f.call(null,inst_28811);
var inst_28816 = cljs.core._EQ_.call(null,inst_28815__$1,inst_28808);
var inst_28817 = cljs.core.keyword_identical_QMARK_.call(null,inst_28808,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28818 = (inst_28816) || (inst_28817);
var state_28847__$1 = (function (){var statearr_28861 = state_28847;
(statearr_28861[(10)] = inst_28815__$1);

return statearr_28861;
})();
if(cljs.core.truth_(inst_28818)){
var statearr_28862_28891 = state_28847__$1;
(statearr_28862_28891[(1)] = (8));

} else {
var statearr_28863_28892 = state_28847__$1;
(statearr_28863_28892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (14))){
var inst_28840 = (state_28847[(2)]);
var inst_28841 = cljs.core.async.close_BANG_.call(null,out);
var state_28847__$1 = (function (){var statearr_28865 = state_28847;
(statearr_28865[(13)] = inst_28840);

return statearr_28865;
})();
var statearr_28866_28893 = state_28847__$1;
(statearr_28866_28893[(2)] = inst_28841);

(statearr_28866_28893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (10))){
var inst_28830 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28867_28894 = state_28847__$1;
(statearr_28867_28894[(2)] = inst_28830);

(statearr_28867_28894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (8))){
var inst_28815 = (state_28847[(10)]);
var inst_28811 = (state_28847[(9)]);
var inst_28807 = (state_28847[(7)]);
var inst_28820 = inst_28807.push(inst_28811);
var tmp28864 = inst_28807;
var inst_28807__$1 = tmp28864;
var inst_28808 = inst_28815;
var state_28847__$1 = (function (){var statearr_28868 = state_28847;
(statearr_28868[(7)] = inst_28807__$1);

(statearr_28868[(8)] = inst_28808);

(statearr_28868[(14)] = inst_28820);

return statearr_28868;
})();
var statearr_28869_28895 = state_28847__$1;
(statearr_28869_28895[(2)] = null);

(statearr_28869_28895[(1)] = (2));


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
});})(c__19582__auto___28881,out))
;
return ((function (switch__19517__auto__,c__19582__auto___28881,out){
return (function() {
var cljs$core$async$state_machine__19518__auto__ = null;
var cljs$core$async$state_machine__19518__auto____0 = (function (){
var statearr_28873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28873[(0)] = cljs$core$async$state_machine__19518__auto__);

(statearr_28873[(1)] = (1));

return statearr_28873;
});
var cljs$core$async$state_machine__19518__auto____1 = (function (state_28847){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_28847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e28874){if((e28874 instanceof Object)){
var ex__19521__auto__ = e28874;
var statearr_28875_28896 = state_28847;
(statearr_28875_28896[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28897 = state_28847;
state_28847 = G__28897;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
cljs$core$async$state_machine__19518__auto__ = function(state_28847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19518__auto____1.call(this,state_28847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19518__auto____0;
cljs$core$async$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19518__auto____1;
return cljs$core$async$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___28881,out))
})();
var state__19584__auto__ = (function (){var statearr_28876 = f__19583__auto__.call(null);
(statearr_28876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___28881);

return statearr_28876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___28881,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444737128334
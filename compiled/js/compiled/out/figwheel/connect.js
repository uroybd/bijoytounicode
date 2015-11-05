// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bijoytounicode.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19472__delegate = function (x){
if(cljs.core.truth_(bijoytounicode.core.on_js_reload)){
return cljs.core.apply.call(null,bijoytounicode.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bijoytounicode.core/on-js-reload' is missing");
}
};
var G__19472 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19473__i = 0, G__19473__a = new Array(arguments.length -  0);
while (G__19473__i < G__19473__a.length) {G__19473__a[G__19473__i] = arguments[G__19473__i + 0]; ++G__19473__i;}
  x = new cljs.core.IndexedSeq(G__19473__a,0);
} 
return G__19472__delegate.call(this,x);};
G__19472.cljs$lang$maxFixedArity = 0;
G__19472.cljs$lang$applyTo = (function (arglist__19474){
var x = cljs.core.seq(arglist__19474);
return G__19472__delegate(x);
});
G__19472.cljs$core$IFn$_invoke$arity$variadic = G__19472__delegate;
return G__19472;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1444806550201
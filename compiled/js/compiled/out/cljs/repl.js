// Compiled by ClojureScript 1.7.122 {}
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
var seq__25085_25099 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25086_25100 = null;
var count__25087_25101 = (0);
var i__25088_25102 = (0);
while(true){
if((i__25088_25102 < count__25087_25101)){
var f_25103 = cljs.core._nth.call(null,chunk__25086_25100,i__25088_25102);
cljs.core.println.call(null,"  ",f_25103);

var G__25104 = seq__25085_25099;
var G__25105 = chunk__25086_25100;
var G__25106 = count__25087_25101;
var G__25107 = (i__25088_25102 + (1));
seq__25085_25099 = G__25104;
chunk__25086_25100 = G__25105;
count__25087_25101 = G__25106;
i__25088_25102 = G__25107;
continue;
} else {
var temp__4425__auto___25108 = cljs.core.seq.call(null,seq__25085_25099);
if(temp__4425__auto___25108){
var seq__25085_25109__$1 = temp__4425__auto___25108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25085_25109__$1)){
var c__17082__auto___25110 = cljs.core.chunk_first.call(null,seq__25085_25109__$1);
var G__25111 = cljs.core.chunk_rest.call(null,seq__25085_25109__$1);
var G__25112 = c__17082__auto___25110;
var G__25113 = cljs.core.count.call(null,c__17082__auto___25110);
var G__25114 = (0);
seq__25085_25099 = G__25111;
chunk__25086_25100 = G__25112;
count__25087_25101 = G__25113;
i__25088_25102 = G__25114;
continue;
} else {
var f_25115 = cljs.core.first.call(null,seq__25085_25109__$1);
cljs.core.println.call(null,"  ",f_25115);

var G__25116 = cljs.core.next.call(null,seq__25085_25109__$1);
var G__25117 = null;
var G__25118 = (0);
var G__25119 = (0);
seq__25085_25099 = G__25116;
chunk__25086_25100 = G__25117;
count__25087_25101 = G__25118;
i__25088_25102 = G__25119;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25120 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16279__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25120);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25120)))?cljs.core.second.call(null,arglists_25120):arglists_25120));
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
var seq__25089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25090 = null;
var count__25091 = (0);
var i__25092 = (0);
while(true){
if((i__25092 < count__25091)){
var vec__25093 = cljs.core._nth.call(null,chunk__25090,i__25092);
var name = cljs.core.nth.call(null,vec__25093,(0),null);
var map__25094 = cljs.core.nth.call(null,vec__25093,(1),null);
var map__25094__$1 = ((((!((map__25094 == null)))?((((map__25094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25094):map__25094);
var doc = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25121 = seq__25089;
var G__25122 = chunk__25090;
var G__25123 = count__25091;
var G__25124 = (i__25092 + (1));
seq__25089 = G__25121;
chunk__25090 = G__25122;
count__25091 = G__25123;
i__25092 = G__25124;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25089);
if(temp__4425__auto__){
var seq__25089__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25089__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__25089__$1);
var G__25125 = cljs.core.chunk_rest.call(null,seq__25089__$1);
var G__25126 = c__17082__auto__;
var G__25127 = cljs.core.count.call(null,c__17082__auto__);
var G__25128 = (0);
seq__25089 = G__25125;
chunk__25090 = G__25126;
count__25091 = G__25127;
i__25092 = G__25128;
continue;
} else {
var vec__25096 = cljs.core.first.call(null,seq__25089__$1);
var name = cljs.core.nth.call(null,vec__25096,(0),null);
var map__25097 = cljs.core.nth.call(null,vec__25096,(1),null);
var map__25097__$1 = ((((!((map__25097 == null)))?((((map__25097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25097):map__25097);
var doc = cljs.core.get.call(null,map__25097__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25097__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25129 = cljs.core.next.call(null,seq__25089__$1);
var G__25130 = null;
var G__25131 = (0);
var G__25132 = (0);
seq__25089 = G__25129;
chunk__25090 = G__25130;
count__25091 = G__25131;
i__25092 = G__25132;
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

//# sourceMappingURL=repl.js.map?rel=1444737124165
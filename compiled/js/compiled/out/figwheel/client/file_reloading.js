// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16279__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16279__auto__){
return or__16279__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16279__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25137_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25137_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25142 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25143 = null;
var count__25144 = (0);
var i__25145 = (0);
while(true){
if((i__25145 < count__25144)){
var n = cljs.core._nth.call(null,chunk__25143,i__25145);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25146 = seq__25142;
var G__25147 = chunk__25143;
var G__25148 = count__25144;
var G__25149 = (i__25145 + (1));
seq__25142 = G__25146;
chunk__25143 = G__25147;
count__25144 = G__25148;
i__25145 = G__25149;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25142);
if(temp__4425__auto__){
var seq__25142__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25142__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__25142__$1);
var G__25150 = cljs.core.chunk_rest.call(null,seq__25142__$1);
var G__25151 = c__17082__auto__;
var G__25152 = cljs.core.count.call(null,c__17082__auto__);
var G__25153 = (0);
seq__25142 = G__25150;
chunk__25143 = G__25151;
count__25144 = G__25152;
i__25145 = G__25153;
continue;
} else {
var n = cljs.core.first.call(null,seq__25142__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25154 = cljs.core.next.call(null,seq__25142__$1);
var G__25155 = null;
var G__25156 = (0);
var G__25157 = (0);
seq__25142 = G__25154;
chunk__25143 = G__25155;
count__25144 = G__25156;
i__25145 = G__25157;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25196_25203 = cljs.core.seq.call(null,deps);
var chunk__25197_25204 = null;
var count__25198_25205 = (0);
var i__25199_25206 = (0);
while(true){
if((i__25199_25206 < count__25198_25205)){
var dep_25207 = cljs.core._nth.call(null,chunk__25197_25204,i__25199_25206);
topo_sort_helper_STAR_.call(null,dep_25207,(depth + (1)),state);

var G__25208 = seq__25196_25203;
var G__25209 = chunk__25197_25204;
var G__25210 = count__25198_25205;
var G__25211 = (i__25199_25206 + (1));
seq__25196_25203 = G__25208;
chunk__25197_25204 = G__25209;
count__25198_25205 = G__25210;
i__25199_25206 = G__25211;
continue;
} else {
var temp__4425__auto___25212 = cljs.core.seq.call(null,seq__25196_25203);
if(temp__4425__auto___25212){
var seq__25196_25213__$1 = temp__4425__auto___25212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25196_25213__$1)){
var c__17082__auto___25214 = cljs.core.chunk_first.call(null,seq__25196_25213__$1);
var G__25215 = cljs.core.chunk_rest.call(null,seq__25196_25213__$1);
var G__25216 = c__17082__auto___25214;
var G__25217 = cljs.core.count.call(null,c__17082__auto___25214);
var G__25218 = (0);
seq__25196_25203 = G__25215;
chunk__25197_25204 = G__25216;
count__25198_25205 = G__25217;
i__25199_25206 = G__25218;
continue;
} else {
var dep_25219 = cljs.core.first.call(null,seq__25196_25213__$1);
topo_sort_helper_STAR_.call(null,dep_25219,(depth + (1)),state);

var G__25220 = cljs.core.next.call(null,seq__25196_25213__$1);
var G__25221 = null;
var G__25222 = (0);
var G__25223 = (0);
seq__25196_25203 = G__25220;
chunk__25197_25204 = G__25221;
count__25198_25205 = G__25222;
i__25199_25206 = G__25223;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25200){
var vec__25202 = p__25200;
var x = cljs.core.nth.call(null,vec__25202,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25202,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25202,x,xs,get_deps__$1){
return (function (p1__25158_SHARP_){
return clojure.set.difference.call(null,p1__25158_SHARP_,x);
});})(vec__25202,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25236 = cljs.core.seq.call(null,provides);
var chunk__25237 = null;
var count__25238 = (0);
var i__25239 = (0);
while(true){
if((i__25239 < count__25238)){
var prov = cljs.core._nth.call(null,chunk__25237,i__25239);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25240_25248 = cljs.core.seq.call(null,requires);
var chunk__25241_25249 = null;
var count__25242_25250 = (0);
var i__25243_25251 = (0);
while(true){
if((i__25243_25251 < count__25242_25250)){
var req_25252 = cljs.core._nth.call(null,chunk__25241_25249,i__25243_25251);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25252,prov);

var G__25253 = seq__25240_25248;
var G__25254 = chunk__25241_25249;
var G__25255 = count__25242_25250;
var G__25256 = (i__25243_25251 + (1));
seq__25240_25248 = G__25253;
chunk__25241_25249 = G__25254;
count__25242_25250 = G__25255;
i__25243_25251 = G__25256;
continue;
} else {
var temp__4425__auto___25257 = cljs.core.seq.call(null,seq__25240_25248);
if(temp__4425__auto___25257){
var seq__25240_25258__$1 = temp__4425__auto___25257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25240_25258__$1)){
var c__17082__auto___25259 = cljs.core.chunk_first.call(null,seq__25240_25258__$1);
var G__25260 = cljs.core.chunk_rest.call(null,seq__25240_25258__$1);
var G__25261 = c__17082__auto___25259;
var G__25262 = cljs.core.count.call(null,c__17082__auto___25259);
var G__25263 = (0);
seq__25240_25248 = G__25260;
chunk__25241_25249 = G__25261;
count__25242_25250 = G__25262;
i__25243_25251 = G__25263;
continue;
} else {
var req_25264 = cljs.core.first.call(null,seq__25240_25258__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25264,prov);

var G__25265 = cljs.core.next.call(null,seq__25240_25258__$1);
var G__25266 = null;
var G__25267 = (0);
var G__25268 = (0);
seq__25240_25248 = G__25265;
chunk__25241_25249 = G__25266;
count__25242_25250 = G__25267;
i__25243_25251 = G__25268;
continue;
}
} else {
}
}
break;
}

var G__25269 = seq__25236;
var G__25270 = chunk__25237;
var G__25271 = count__25238;
var G__25272 = (i__25239 + (1));
seq__25236 = G__25269;
chunk__25237 = G__25270;
count__25238 = G__25271;
i__25239 = G__25272;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25236);
if(temp__4425__auto__){
var seq__25236__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25236__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__25236__$1);
var G__25273 = cljs.core.chunk_rest.call(null,seq__25236__$1);
var G__25274 = c__17082__auto__;
var G__25275 = cljs.core.count.call(null,c__17082__auto__);
var G__25276 = (0);
seq__25236 = G__25273;
chunk__25237 = G__25274;
count__25238 = G__25275;
i__25239 = G__25276;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25236__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25244_25277 = cljs.core.seq.call(null,requires);
var chunk__25245_25278 = null;
var count__25246_25279 = (0);
var i__25247_25280 = (0);
while(true){
if((i__25247_25280 < count__25246_25279)){
var req_25281 = cljs.core._nth.call(null,chunk__25245_25278,i__25247_25280);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25281,prov);

var G__25282 = seq__25244_25277;
var G__25283 = chunk__25245_25278;
var G__25284 = count__25246_25279;
var G__25285 = (i__25247_25280 + (1));
seq__25244_25277 = G__25282;
chunk__25245_25278 = G__25283;
count__25246_25279 = G__25284;
i__25247_25280 = G__25285;
continue;
} else {
var temp__4425__auto___25286__$1 = cljs.core.seq.call(null,seq__25244_25277);
if(temp__4425__auto___25286__$1){
var seq__25244_25287__$1 = temp__4425__auto___25286__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25244_25287__$1)){
var c__17082__auto___25288 = cljs.core.chunk_first.call(null,seq__25244_25287__$1);
var G__25289 = cljs.core.chunk_rest.call(null,seq__25244_25287__$1);
var G__25290 = c__17082__auto___25288;
var G__25291 = cljs.core.count.call(null,c__17082__auto___25288);
var G__25292 = (0);
seq__25244_25277 = G__25289;
chunk__25245_25278 = G__25290;
count__25246_25279 = G__25291;
i__25247_25280 = G__25292;
continue;
} else {
var req_25293 = cljs.core.first.call(null,seq__25244_25287__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25293,prov);

var G__25294 = cljs.core.next.call(null,seq__25244_25287__$1);
var G__25295 = null;
var G__25296 = (0);
var G__25297 = (0);
seq__25244_25277 = G__25294;
chunk__25245_25278 = G__25295;
count__25246_25279 = G__25296;
i__25247_25280 = G__25297;
continue;
}
} else {
}
}
break;
}

var G__25298 = cljs.core.next.call(null,seq__25236__$1);
var G__25299 = null;
var G__25300 = (0);
var G__25301 = (0);
seq__25236 = G__25298;
chunk__25237 = G__25299;
count__25238 = G__25300;
i__25239 = G__25301;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25306_25310 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25307_25311 = null;
var count__25308_25312 = (0);
var i__25309_25313 = (0);
while(true){
if((i__25309_25313 < count__25308_25312)){
var ns_25314 = cljs.core._nth.call(null,chunk__25307_25311,i__25309_25313);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25314);

var G__25315 = seq__25306_25310;
var G__25316 = chunk__25307_25311;
var G__25317 = count__25308_25312;
var G__25318 = (i__25309_25313 + (1));
seq__25306_25310 = G__25315;
chunk__25307_25311 = G__25316;
count__25308_25312 = G__25317;
i__25309_25313 = G__25318;
continue;
} else {
var temp__4425__auto___25319 = cljs.core.seq.call(null,seq__25306_25310);
if(temp__4425__auto___25319){
var seq__25306_25320__$1 = temp__4425__auto___25319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25306_25320__$1)){
var c__17082__auto___25321 = cljs.core.chunk_first.call(null,seq__25306_25320__$1);
var G__25322 = cljs.core.chunk_rest.call(null,seq__25306_25320__$1);
var G__25323 = c__17082__auto___25321;
var G__25324 = cljs.core.count.call(null,c__17082__auto___25321);
var G__25325 = (0);
seq__25306_25310 = G__25322;
chunk__25307_25311 = G__25323;
count__25308_25312 = G__25324;
i__25309_25313 = G__25325;
continue;
} else {
var ns_25326 = cljs.core.first.call(null,seq__25306_25320__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25326);

var G__25327 = cljs.core.next.call(null,seq__25306_25320__$1);
var G__25328 = null;
var G__25329 = (0);
var G__25330 = (0);
seq__25306_25310 = G__25327;
chunk__25307_25311 = G__25328;
count__25308_25312 = G__25329;
i__25309_25313 = G__25330;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16279__auto__ = goog.require__;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25331__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25332__i = 0, G__25332__a = new Array(arguments.length -  0);
while (G__25332__i < G__25332__a.length) {G__25332__a[G__25332__i] = arguments[G__25332__i + 0]; ++G__25332__i;}
  args = new cljs.core.IndexedSeq(G__25332__a,0);
} 
return G__25331__delegate.call(this,args);};
G__25331.cljs$lang$maxFixedArity = 0;
G__25331.cljs$lang$applyTo = (function (arglist__25333){
var args = cljs.core.seq(arglist__25333);
return G__25331__delegate(args);
});
G__25331.cljs$core$IFn$_invoke$arity$variadic = G__25331__delegate;
return G__25331;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25335 = cljs.core._EQ_;
var expr__25336 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25335.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25336))){
var path_parts = ((function (pred__25335,expr__25336){
return (function (p1__25334_SHARP_){
return clojure.string.split.call(null,p1__25334_SHARP_,/[\/\\]/);
});})(pred__25335,expr__25336))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25335,expr__25336){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e25338){if((e25338 instanceof Error)){
var e = e25338;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25338;

}
}})());
});
;})(path_parts,sep,root,pred__25335,expr__25336))
} else {
if(cljs.core.truth_(pred__25335.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25336))){
return ((function (pred__25335,expr__25336){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25335,expr__25336){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25335,expr__25336))
);

return deferred.addErrback(((function (deferred,pred__25335,expr__25336){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25335,expr__25336))
);
});
;})(pred__25335,expr__25336))
} else {
return ((function (pred__25335,expr__25336){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25335,expr__25336))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25339,callback){
var map__25342 = p__25339;
var map__25342__$1 = ((((!((map__25342 == null)))?((((map__25342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25342):map__25342);
var file_msg = map__25342__$1;
var request_url = cljs.core.get.call(null,map__25342__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25342,map__25342__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25342,map__25342__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__){
return (function (state_25366){
var state_val_25367 = (state_25366[(1)]);
if((state_val_25367 === (7))){
var inst_25362 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25368_25388 = state_25366__$1;
(statearr_25368_25388[(2)] = inst_25362);

(statearr_25368_25388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (1))){
var state_25366__$1 = state_25366;
var statearr_25369_25389 = state_25366__$1;
(statearr_25369_25389[(2)] = null);

(statearr_25369_25389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (4))){
var inst_25346 = (state_25366[(7)]);
var inst_25346__$1 = (state_25366[(2)]);
var state_25366__$1 = (function (){var statearr_25370 = state_25366;
(statearr_25370[(7)] = inst_25346__$1);

return statearr_25370;
})();
if(cljs.core.truth_(inst_25346__$1)){
var statearr_25371_25390 = state_25366__$1;
(statearr_25371_25390[(1)] = (5));

} else {
var statearr_25372_25391 = state_25366__$1;
(statearr_25372_25391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (6))){
var state_25366__$1 = state_25366;
var statearr_25373_25392 = state_25366__$1;
(statearr_25373_25392[(2)] = null);

(statearr_25373_25392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (3))){
var inst_25364 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25366__$1,inst_25364);
} else {
if((state_val_25367 === (2))){
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25366__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25367 === (11))){
var inst_25358 = (state_25366[(2)]);
var state_25366__$1 = (function (){var statearr_25374 = state_25366;
(statearr_25374[(8)] = inst_25358);

return statearr_25374;
})();
var statearr_25375_25393 = state_25366__$1;
(statearr_25375_25393[(2)] = null);

(statearr_25375_25393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (9))){
var inst_25350 = (state_25366[(9)]);
var inst_25352 = (state_25366[(10)]);
var inst_25354 = inst_25352.call(null,inst_25350);
var state_25366__$1 = state_25366;
var statearr_25376_25394 = state_25366__$1;
(statearr_25376_25394[(2)] = inst_25354);

(statearr_25376_25394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (5))){
var inst_25346 = (state_25366[(7)]);
var inst_25348 = figwheel.client.file_reloading.blocking_load.call(null,inst_25346);
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25366__$1,(8),inst_25348);
} else {
if((state_val_25367 === (10))){
var inst_25350 = (state_25366[(9)]);
var inst_25356 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25350);
var state_25366__$1 = state_25366;
var statearr_25377_25395 = state_25366__$1;
(statearr_25377_25395[(2)] = inst_25356);

(statearr_25377_25395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (8))){
var inst_25352 = (state_25366[(10)]);
var inst_25346 = (state_25366[(7)]);
var inst_25350 = (state_25366[(2)]);
var inst_25351 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25352__$1 = cljs.core.get.call(null,inst_25351,inst_25346);
var state_25366__$1 = (function (){var statearr_25378 = state_25366;
(statearr_25378[(9)] = inst_25350);

(statearr_25378[(10)] = inst_25352__$1);

return statearr_25378;
})();
if(cljs.core.truth_(inst_25352__$1)){
var statearr_25379_25396 = state_25366__$1;
(statearr_25379_25396[(1)] = (9));

} else {
var statearr_25380_25397 = state_25366__$1;
(statearr_25380_25397[(1)] = (10));

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
});})(c__19582__auto__))
;
return ((function (switch__19517__auto__,c__19582__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19518__auto__ = null;
var figwheel$client$file_reloading$state_machine__19518__auto____0 = (function (){
var statearr_25384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25384[(0)] = figwheel$client$file_reloading$state_machine__19518__auto__);

(statearr_25384[(1)] = (1));

return statearr_25384;
});
var figwheel$client$file_reloading$state_machine__19518__auto____1 = (function (state_25366){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_25366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e25385){if((e25385 instanceof Object)){
var ex__19521__auto__ = e25385;
var statearr_25386_25398 = state_25366;
(statearr_25386_25398[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25399 = state_25366;
state_25366 = G__25399;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19518__auto__ = function(state_25366){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19518__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19518__auto____1.call(this,state_25366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19518__auto____0;
figwheel$client$file_reloading$state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19518__auto____1;
return figwheel$client$file_reloading$state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__))
})();
var state__19584__auto__ = (function (){var statearr_25387 = f__19583__auto__.call(null);
(statearr_25387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__))
);

return c__19582__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25400,callback){
var map__25403 = p__25400;
var map__25403__$1 = ((((!((map__25403 == null)))?((((map__25403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25403):map__25403);
var file_msg = map__25403__$1;
var namespace = cljs.core.get.call(null,map__25403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25403,map__25403__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25403,map__25403__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25405){
var map__25408 = p__25405;
var map__25408__$1 = ((((!((map__25408 == null)))?((((map__25408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25408):map__25408);
var file_msg = map__25408__$1;
var namespace = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16267__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16267__auto__){
var or__16279__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
var or__16279__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16279__auto____$1)){
return or__16279__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16267__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25410,callback){
var map__25413 = p__25410;
var map__25413__$1 = ((((!((map__25413 == null)))?((((map__25413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25413):map__25413);
var file_msg = map__25413__$1;
var request_url = cljs.core.get.call(null,map__25413__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19582__auto___25501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___25501,out){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___25501,out){
return (function (state_25483){
var state_val_25484 = (state_25483[(1)]);
if((state_val_25484 === (1))){
var inst_25461 = cljs.core.nth.call(null,files,(0),null);
var inst_25462 = cljs.core.nthnext.call(null,files,(1));
var inst_25463 = files;
var state_25483__$1 = (function (){var statearr_25485 = state_25483;
(statearr_25485[(7)] = inst_25461);

(statearr_25485[(8)] = inst_25463);

(statearr_25485[(9)] = inst_25462);

return statearr_25485;
})();
var statearr_25486_25502 = state_25483__$1;
(statearr_25486_25502[(2)] = null);

(statearr_25486_25502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (2))){
var inst_25463 = (state_25483[(8)]);
var inst_25466 = (state_25483[(10)]);
var inst_25466__$1 = cljs.core.nth.call(null,inst_25463,(0),null);
var inst_25467 = cljs.core.nthnext.call(null,inst_25463,(1));
var inst_25468 = (inst_25466__$1 == null);
var inst_25469 = cljs.core.not.call(null,inst_25468);
var state_25483__$1 = (function (){var statearr_25487 = state_25483;
(statearr_25487[(11)] = inst_25467);

(statearr_25487[(10)] = inst_25466__$1);

return statearr_25487;
})();
if(inst_25469){
var statearr_25488_25503 = state_25483__$1;
(statearr_25488_25503[(1)] = (4));

} else {
var statearr_25489_25504 = state_25483__$1;
(statearr_25489_25504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (3))){
var inst_25481 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25483__$1,inst_25481);
} else {
if((state_val_25484 === (4))){
var inst_25466 = (state_25483[(10)]);
var inst_25471 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25466);
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25483__$1,(7),inst_25471);
} else {
if((state_val_25484 === (5))){
var inst_25477 = cljs.core.async.close_BANG_.call(null,out);
var state_25483__$1 = state_25483;
var statearr_25490_25505 = state_25483__$1;
(statearr_25490_25505[(2)] = inst_25477);

(statearr_25490_25505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (6))){
var inst_25479 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
var statearr_25491_25506 = state_25483__$1;
(statearr_25491_25506[(2)] = inst_25479);

(statearr_25491_25506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (7))){
var inst_25467 = (state_25483[(11)]);
var inst_25473 = (state_25483[(2)]);
var inst_25474 = cljs.core.async.put_BANG_.call(null,out,inst_25473);
var inst_25463 = inst_25467;
var state_25483__$1 = (function (){var statearr_25492 = state_25483;
(statearr_25492[(8)] = inst_25463);

(statearr_25492[(12)] = inst_25474);

return statearr_25492;
})();
var statearr_25493_25507 = state_25483__$1;
(statearr_25493_25507[(2)] = null);

(statearr_25493_25507[(1)] = (2));


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
});})(c__19582__auto___25501,out))
;
return ((function (switch__19517__auto__,c__19582__auto___25501,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto____0 = (function (){
var statearr_25497 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25497[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto__);

(statearr_25497[(1)] = (1));

return statearr_25497;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto____1 = (function (state_25483){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_25483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e25498){if((e25498 instanceof Object)){
var ex__19521__auto__ = e25498;
var statearr_25499_25508 = state_25483;
(statearr_25499_25508[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25509 = state_25483;
state_25483 = G__25509;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto__ = function(state_25483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto____1.call(this,state_25483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___25501,out))
})();
var state__19584__auto__ = (function (){var statearr_25500 = f__19583__auto__.call(null);
(statearr_25500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___25501);

return statearr_25500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___25501,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25510,opts){
var map__25514 = p__25510;
var map__25514__$1 = ((((!((map__25514 == null)))?((((map__25514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25514):map__25514);
var eval_body__$1 = cljs.core.get.call(null,map__25514__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16267__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16267__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16267__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25516){var e = e25516;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25517_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25517_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25522){
var vec__25523 = p__25522;
var k = cljs.core.nth.call(null,vec__25523,(0),null);
var v = cljs.core.nth.call(null,vec__25523,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25524){
var vec__25525 = p__25524;
var k = cljs.core.nth.call(null,vec__25525,(0),null);
var v = cljs.core.nth.call(null,vec__25525,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25529,p__25530){
var map__25777 = p__25529;
var map__25777__$1 = ((((!((map__25777 == null)))?((((map__25777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25777):map__25777);
var opts = map__25777__$1;
var before_jsload = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25778 = p__25530;
var map__25778__$1 = ((((!((map__25778 == null)))?((((map__25778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25778):map__25778);
var msg = map__25778__$1;
var files = cljs.core.get.call(null,map__25778__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25778__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25778__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25931){
var state_val_25932 = (state_25931[(1)]);
if((state_val_25932 === (7))){
var inst_25793 = (state_25931[(7)]);
var inst_25792 = (state_25931[(8)]);
var inst_25795 = (state_25931[(9)]);
var inst_25794 = (state_25931[(10)]);
var inst_25800 = cljs.core._nth.call(null,inst_25793,inst_25795);
var inst_25801 = figwheel.client.file_reloading.eval_body.call(null,inst_25800,opts);
var inst_25802 = (inst_25795 + (1));
var tmp25933 = inst_25793;
var tmp25934 = inst_25792;
var tmp25935 = inst_25794;
var inst_25792__$1 = tmp25934;
var inst_25793__$1 = tmp25933;
var inst_25794__$1 = tmp25935;
var inst_25795__$1 = inst_25802;
var state_25931__$1 = (function (){var statearr_25936 = state_25931;
(statearr_25936[(11)] = inst_25801);

(statearr_25936[(7)] = inst_25793__$1);

(statearr_25936[(8)] = inst_25792__$1);

(statearr_25936[(9)] = inst_25795__$1);

(statearr_25936[(10)] = inst_25794__$1);

return statearr_25936;
})();
var statearr_25937_26023 = state_25931__$1;
(statearr_25937_26023[(2)] = null);

(statearr_25937_26023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (20))){
var inst_25835 = (state_25931[(12)]);
var inst_25843 = figwheel.client.file_reloading.sort_files.call(null,inst_25835);
var state_25931__$1 = state_25931;
var statearr_25938_26024 = state_25931__$1;
(statearr_25938_26024[(2)] = inst_25843);

(statearr_25938_26024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (27))){
var state_25931__$1 = state_25931;
var statearr_25939_26025 = state_25931__$1;
(statearr_25939_26025[(2)] = null);

(statearr_25939_26025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (1))){
var inst_25784 = (state_25931[(13)]);
var inst_25781 = before_jsload.call(null,files);
var inst_25782 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25783 = (function (){return ((function (inst_25784,inst_25781,inst_25782,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25526_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25526_SHARP_);
});
;})(inst_25784,inst_25781,inst_25782,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25784__$1 = cljs.core.filter.call(null,inst_25783,files);
var inst_25785 = cljs.core.not_empty.call(null,inst_25784__$1);
var state_25931__$1 = (function (){var statearr_25940 = state_25931;
(statearr_25940[(14)] = inst_25781);

(statearr_25940[(13)] = inst_25784__$1);

(statearr_25940[(15)] = inst_25782);

return statearr_25940;
})();
if(cljs.core.truth_(inst_25785)){
var statearr_25941_26026 = state_25931__$1;
(statearr_25941_26026[(1)] = (2));

} else {
var statearr_25942_26027 = state_25931__$1;
(statearr_25942_26027[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (24))){
var state_25931__$1 = state_25931;
var statearr_25943_26028 = state_25931__$1;
(statearr_25943_26028[(2)] = null);

(statearr_25943_26028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (39))){
var inst_25885 = (state_25931[(16)]);
var state_25931__$1 = state_25931;
var statearr_25944_26029 = state_25931__$1;
(statearr_25944_26029[(2)] = inst_25885);

(statearr_25944_26029[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (46))){
var inst_25926 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25945_26030 = state_25931__$1;
(statearr_25945_26030[(2)] = inst_25926);

(statearr_25945_26030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (4))){
var inst_25829 = (state_25931[(2)]);
var inst_25830 = cljs.core.List.EMPTY;
var inst_25831 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25830);
var inst_25832 = (function (){return ((function (inst_25829,inst_25830,inst_25831,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25527_SHARP_){
var and__16267__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25527_SHARP_);
if(cljs.core.truth_(and__16267__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25527_SHARP_));
} else {
return and__16267__auto__;
}
});
;})(inst_25829,inst_25830,inst_25831,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25833 = cljs.core.filter.call(null,inst_25832,files);
var inst_25834 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25835 = cljs.core.concat.call(null,inst_25833,inst_25834);
var state_25931__$1 = (function (){var statearr_25946 = state_25931;
(statearr_25946[(17)] = inst_25829);

(statearr_25946[(12)] = inst_25835);

(statearr_25946[(18)] = inst_25831);

return statearr_25946;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25947_26031 = state_25931__$1;
(statearr_25947_26031[(1)] = (16));

} else {
var statearr_25948_26032 = state_25931__$1;
(statearr_25948_26032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (15))){
var inst_25819 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25949_26033 = state_25931__$1;
(statearr_25949_26033[(2)] = inst_25819);

(statearr_25949_26033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (21))){
var inst_25845 = (state_25931[(19)]);
var inst_25845__$1 = (state_25931[(2)]);
var inst_25846 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25845__$1);
var state_25931__$1 = (function (){var statearr_25950 = state_25931;
(statearr_25950[(19)] = inst_25845__$1);

return statearr_25950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25931__$1,(22),inst_25846);
} else {
if((state_val_25932 === (31))){
var inst_25929 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25931__$1,inst_25929);
} else {
if((state_val_25932 === (32))){
var inst_25885 = (state_25931[(16)]);
var inst_25890 = inst_25885.cljs$lang$protocol_mask$partition0$;
var inst_25891 = (inst_25890 & (64));
var inst_25892 = inst_25885.cljs$core$ISeq$;
var inst_25893 = (inst_25891) || (inst_25892);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25893)){
var statearr_25951_26034 = state_25931__$1;
(statearr_25951_26034[(1)] = (35));

} else {
var statearr_25952_26035 = state_25931__$1;
(statearr_25952_26035[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (40))){
var inst_25906 = (state_25931[(20)]);
var inst_25905 = (state_25931[(2)]);
var inst_25906__$1 = cljs.core.get.call(null,inst_25905,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25907 = cljs.core.get.call(null,inst_25905,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25908 = cljs.core.not_empty.call(null,inst_25906__$1);
var state_25931__$1 = (function (){var statearr_25953 = state_25931;
(statearr_25953[(20)] = inst_25906__$1);

(statearr_25953[(21)] = inst_25907);

return statearr_25953;
})();
if(cljs.core.truth_(inst_25908)){
var statearr_25954_26036 = state_25931__$1;
(statearr_25954_26036[(1)] = (41));

} else {
var statearr_25955_26037 = state_25931__$1;
(statearr_25955_26037[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (33))){
var state_25931__$1 = state_25931;
var statearr_25956_26038 = state_25931__$1;
(statearr_25956_26038[(2)] = false);

(statearr_25956_26038[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (13))){
var inst_25805 = (state_25931[(22)]);
var inst_25809 = cljs.core.chunk_first.call(null,inst_25805);
var inst_25810 = cljs.core.chunk_rest.call(null,inst_25805);
var inst_25811 = cljs.core.count.call(null,inst_25809);
var inst_25792 = inst_25810;
var inst_25793 = inst_25809;
var inst_25794 = inst_25811;
var inst_25795 = (0);
var state_25931__$1 = (function (){var statearr_25957 = state_25931;
(statearr_25957[(7)] = inst_25793);

(statearr_25957[(8)] = inst_25792);

(statearr_25957[(9)] = inst_25795);

(statearr_25957[(10)] = inst_25794);

return statearr_25957;
})();
var statearr_25958_26039 = state_25931__$1;
(statearr_25958_26039[(2)] = null);

(statearr_25958_26039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (22))){
var inst_25853 = (state_25931[(23)]);
var inst_25849 = (state_25931[(24)]);
var inst_25848 = (state_25931[(25)]);
var inst_25845 = (state_25931[(19)]);
var inst_25848__$1 = (state_25931[(2)]);
var inst_25849__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25848__$1);
var inst_25850 = (function (){var all_files = inst_25845;
var res_SINGLEQUOTE_ = inst_25848__$1;
var res = inst_25849__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25853,inst_25849,inst_25848,inst_25845,inst_25848__$1,inst_25849__$1,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25528_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25528_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25853,inst_25849,inst_25848,inst_25845,inst_25848__$1,inst_25849__$1,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25851 = cljs.core.filter.call(null,inst_25850,inst_25848__$1);
var inst_25852 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25852);
var inst_25854 = cljs.core.not_empty.call(null,inst_25853__$1);
var state_25931__$1 = (function (){var statearr_25959 = state_25931;
(statearr_25959[(23)] = inst_25853__$1);

(statearr_25959[(26)] = inst_25851);

(statearr_25959[(24)] = inst_25849__$1);

(statearr_25959[(25)] = inst_25848__$1);

return statearr_25959;
})();
if(cljs.core.truth_(inst_25854)){
var statearr_25960_26040 = state_25931__$1;
(statearr_25960_26040[(1)] = (23));

} else {
var statearr_25961_26041 = state_25931__$1;
(statearr_25961_26041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (36))){
var state_25931__$1 = state_25931;
var statearr_25962_26042 = state_25931__$1;
(statearr_25962_26042[(2)] = false);

(statearr_25962_26042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (41))){
var inst_25906 = (state_25931[(20)]);
var inst_25910 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25911 = cljs.core.map.call(null,inst_25910,inst_25906);
var inst_25912 = cljs.core.pr_str.call(null,inst_25911);
var inst_25913 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25912)].join('');
var inst_25914 = figwheel.client.utils.log.call(null,inst_25913);
var state_25931__$1 = state_25931;
var statearr_25963_26043 = state_25931__$1;
(statearr_25963_26043[(2)] = inst_25914);

(statearr_25963_26043[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (43))){
var inst_25907 = (state_25931[(21)]);
var inst_25917 = (state_25931[(2)]);
var inst_25918 = cljs.core.not_empty.call(null,inst_25907);
var state_25931__$1 = (function (){var statearr_25964 = state_25931;
(statearr_25964[(27)] = inst_25917);

return statearr_25964;
})();
if(cljs.core.truth_(inst_25918)){
var statearr_25965_26044 = state_25931__$1;
(statearr_25965_26044[(1)] = (44));

} else {
var statearr_25966_26045 = state_25931__$1;
(statearr_25966_26045[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (29))){
var inst_25885 = (state_25931[(16)]);
var inst_25853 = (state_25931[(23)]);
var inst_25851 = (state_25931[(26)]);
var inst_25849 = (state_25931[(24)]);
var inst_25848 = (state_25931[(25)]);
var inst_25845 = (state_25931[(19)]);
var inst_25881 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25884 = (function (){var all_files = inst_25845;
var res_SINGLEQUOTE_ = inst_25848;
var res = inst_25849;
var files_not_loaded = inst_25851;
var dependencies_that_loaded = inst_25853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25885,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25881,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25883){
var map__25967 = p__25883;
var map__25967__$1 = ((((!((map__25967 == null)))?((((map__25967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25967):map__25967);
var namespace = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25885,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25881,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25885__$1 = cljs.core.group_by.call(null,inst_25884,inst_25851);
var inst_25887 = (inst_25885__$1 == null);
var inst_25888 = cljs.core.not.call(null,inst_25887);
var state_25931__$1 = (function (){var statearr_25969 = state_25931;
(statearr_25969[(16)] = inst_25885__$1);

(statearr_25969[(28)] = inst_25881);

return statearr_25969;
})();
if(inst_25888){
var statearr_25970_26046 = state_25931__$1;
(statearr_25970_26046[(1)] = (32));

} else {
var statearr_25971_26047 = state_25931__$1;
(statearr_25971_26047[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (44))){
var inst_25907 = (state_25931[(21)]);
var inst_25920 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25907);
var inst_25921 = cljs.core.pr_str.call(null,inst_25920);
var inst_25922 = [cljs.core.str("not required: "),cljs.core.str(inst_25921)].join('');
var inst_25923 = figwheel.client.utils.log.call(null,inst_25922);
var state_25931__$1 = state_25931;
var statearr_25972_26048 = state_25931__$1;
(statearr_25972_26048[(2)] = inst_25923);

(statearr_25972_26048[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (6))){
var inst_25826 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25973_26049 = state_25931__$1;
(statearr_25973_26049[(2)] = inst_25826);

(statearr_25973_26049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (28))){
var inst_25851 = (state_25931[(26)]);
var inst_25878 = (state_25931[(2)]);
var inst_25879 = cljs.core.not_empty.call(null,inst_25851);
var state_25931__$1 = (function (){var statearr_25974 = state_25931;
(statearr_25974[(29)] = inst_25878);

return statearr_25974;
})();
if(cljs.core.truth_(inst_25879)){
var statearr_25975_26050 = state_25931__$1;
(statearr_25975_26050[(1)] = (29));

} else {
var statearr_25976_26051 = state_25931__$1;
(statearr_25976_26051[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (25))){
var inst_25849 = (state_25931[(24)]);
var inst_25865 = (state_25931[(2)]);
var inst_25866 = cljs.core.not_empty.call(null,inst_25849);
var state_25931__$1 = (function (){var statearr_25977 = state_25931;
(statearr_25977[(30)] = inst_25865);

return statearr_25977;
})();
if(cljs.core.truth_(inst_25866)){
var statearr_25978_26052 = state_25931__$1;
(statearr_25978_26052[(1)] = (26));

} else {
var statearr_25979_26053 = state_25931__$1;
(statearr_25979_26053[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (34))){
var inst_25900 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25900)){
var statearr_25980_26054 = state_25931__$1;
(statearr_25980_26054[(1)] = (38));

} else {
var statearr_25981_26055 = state_25931__$1;
(statearr_25981_26055[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (17))){
var state_25931__$1 = state_25931;
var statearr_25982_26056 = state_25931__$1;
(statearr_25982_26056[(2)] = recompile_dependents);

(statearr_25982_26056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (3))){
var state_25931__$1 = state_25931;
var statearr_25983_26057 = state_25931__$1;
(statearr_25983_26057[(2)] = null);

(statearr_25983_26057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (12))){
var inst_25822 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25984_26058 = state_25931__$1;
(statearr_25984_26058[(2)] = inst_25822);

(statearr_25984_26058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (2))){
var inst_25784 = (state_25931[(13)]);
var inst_25791 = cljs.core.seq.call(null,inst_25784);
var inst_25792 = inst_25791;
var inst_25793 = null;
var inst_25794 = (0);
var inst_25795 = (0);
var state_25931__$1 = (function (){var statearr_25985 = state_25931;
(statearr_25985[(7)] = inst_25793);

(statearr_25985[(8)] = inst_25792);

(statearr_25985[(9)] = inst_25795);

(statearr_25985[(10)] = inst_25794);

return statearr_25985;
})();
var statearr_25986_26059 = state_25931__$1;
(statearr_25986_26059[(2)] = null);

(statearr_25986_26059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (23))){
var inst_25853 = (state_25931[(23)]);
var inst_25851 = (state_25931[(26)]);
var inst_25849 = (state_25931[(24)]);
var inst_25848 = (state_25931[(25)]);
var inst_25845 = (state_25931[(19)]);
var inst_25856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25858 = (function (){var all_files = inst_25845;
var res_SINGLEQUOTE_ = inst_25848;
var res = inst_25849;
var files_not_loaded = inst_25851;
var dependencies_that_loaded = inst_25853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25856,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25857){
var map__25987 = p__25857;
var map__25987__$1 = ((((!((map__25987 == null)))?((((map__25987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25987):map__25987);
var request_url = cljs.core.get.call(null,map__25987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25856,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25859 = cljs.core.reverse.call(null,inst_25853);
var inst_25860 = cljs.core.map.call(null,inst_25858,inst_25859);
var inst_25861 = cljs.core.pr_str.call(null,inst_25860);
var inst_25862 = figwheel.client.utils.log.call(null,inst_25861);
var state_25931__$1 = (function (){var statearr_25989 = state_25931;
(statearr_25989[(31)] = inst_25856);

return statearr_25989;
})();
var statearr_25990_26060 = state_25931__$1;
(statearr_25990_26060[(2)] = inst_25862);

(statearr_25990_26060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (35))){
var state_25931__$1 = state_25931;
var statearr_25991_26061 = state_25931__$1;
(statearr_25991_26061[(2)] = true);

(statearr_25991_26061[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (19))){
var inst_25835 = (state_25931[(12)]);
var inst_25841 = figwheel.client.file_reloading.expand_files.call(null,inst_25835);
var state_25931__$1 = state_25931;
var statearr_25992_26062 = state_25931__$1;
(statearr_25992_26062[(2)] = inst_25841);

(statearr_25992_26062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (11))){
var state_25931__$1 = state_25931;
var statearr_25993_26063 = state_25931__$1;
(statearr_25993_26063[(2)] = null);

(statearr_25993_26063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (9))){
var inst_25824 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25994_26064 = state_25931__$1;
(statearr_25994_26064[(2)] = inst_25824);

(statearr_25994_26064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (5))){
var inst_25795 = (state_25931[(9)]);
var inst_25794 = (state_25931[(10)]);
var inst_25797 = (inst_25795 < inst_25794);
var inst_25798 = inst_25797;
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25798)){
var statearr_25995_26065 = state_25931__$1;
(statearr_25995_26065[(1)] = (7));

} else {
var statearr_25996_26066 = state_25931__$1;
(statearr_25996_26066[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (14))){
var inst_25805 = (state_25931[(22)]);
var inst_25814 = cljs.core.first.call(null,inst_25805);
var inst_25815 = figwheel.client.file_reloading.eval_body.call(null,inst_25814,opts);
var inst_25816 = cljs.core.next.call(null,inst_25805);
var inst_25792 = inst_25816;
var inst_25793 = null;
var inst_25794 = (0);
var inst_25795 = (0);
var state_25931__$1 = (function (){var statearr_25997 = state_25931;
(statearr_25997[(7)] = inst_25793);

(statearr_25997[(8)] = inst_25792);

(statearr_25997[(9)] = inst_25795);

(statearr_25997[(10)] = inst_25794);

(statearr_25997[(32)] = inst_25815);

return statearr_25997;
})();
var statearr_25998_26067 = state_25931__$1;
(statearr_25998_26067[(2)] = null);

(statearr_25998_26067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (45))){
var state_25931__$1 = state_25931;
var statearr_25999_26068 = state_25931__$1;
(statearr_25999_26068[(2)] = null);

(statearr_25999_26068[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (26))){
var inst_25853 = (state_25931[(23)]);
var inst_25851 = (state_25931[(26)]);
var inst_25849 = (state_25931[(24)]);
var inst_25848 = (state_25931[(25)]);
var inst_25845 = (state_25931[(19)]);
var inst_25868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25870 = (function (){var all_files = inst_25845;
var res_SINGLEQUOTE_ = inst_25848;
var res = inst_25849;
var files_not_loaded = inst_25851;
var dependencies_that_loaded = inst_25853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25868,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25869){
var map__26000 = p__25869;
var map__26000__$1 = ((((!((map__26000 == null)))?((((map__26000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26000):map__26000);
var namespace = cljs.core.get.call(null,map__26000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25868,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25871 = cljs.core.map.call(null,inst_25870,inst_25849);
var inst_25872 = cljs.core.pr_str.call(null,inst_25871);
var inst_25873 = figwheel.client.utils.log.call(null,inst_25872);
var inst_25874 = (function (){var all_files = inst_25845;
var res_SINGLEQUOTE_ = inst_25848;
var res = inst_25849;
var files_not_loaded = inst_25851;
var dependencies_that_loaded = inst_25853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25868,inst_25870,inst_25871,inst_25872,inst_25873,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25853,inst_25851,inst_25849,inst_25848,inst_25845,inst_25868,inst_25870,inst_25871,inst_25872,inst_25873,state_val_25932,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25875 = setTimeout(inst_25874,(10));
var state_25931__$1 = (function (){var statearr_26002 = state_25931;
(statearr_26002[(33)] = inst_25868);

(statearr_26002[(34)] = inst_25873);

return statearr_26002;
})();
var statearr_26003_26069 = state_25931__$1;
(statearr_26003_26069[(2)] = inst_25875);

(statearr_26003_26069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (16))){
var state_25931__$1 = state_25931;
var statearr_26004_26070 = state_25931__$1;
(statearr_26004_26070[(2)] = reload_dependents);

(statearr_26004_26070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (38))){
var inst_25885 = (state_25931[(16)]);
var inst_25902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25885);
var state_25931__$1 = state_25931;
var statearr_26005_26071 = state_25931__$1;
(statearr_26005_26071[(2)] = inst_25902);

(statearr_26005_26071[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (30))){
var state_25931__$1 = state_25931;
var statearr_26006_26072 = state_25931__$1;
(statearr_26006_26072[(2)] = null);

(statearr_26006_26072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (10))){
var inst_25805 = (state_25931[(22)]);
var inst_25807 = cljs.core.chunked_seq_QMARK_.call(null,inst_25805);
var state_25931__$1 = state_25931;
if(inst_25807){
var statearr_26007_26073 = state_25931__$1;
(statearr_26007_26073[(1)] = (13));

} else {
var statearr_26008_26074 = state_25931__$1;
(statearr_26008_26074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (18))){
var inst_25839 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25839)){
var statearr_26009_26075 = state_25931__$1;
(statearr_26009_26075[(1)] = (19));

} else {
var statearr_26010_26076 = state_25931__$1;
(statearr_26010_26076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (42))){
var state_25931__$1 = state_25931;
var statearr_26011_26077 = state_25931__$1;
(statearr_26011_26077[(2)] = null);

(statearr_26011_26077[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (37))){
var inst_25897 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_26012_26078 = state_25931__$1;
(statearr_26012_26078[(2)] = inst_25897);

(statearr_26012_26078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (8))){
var inst_25805 = (state_25931[(22)]);
var inst_25792 = (state_25931[(8)]);
var inst_25805__$1 = cljs.core.seq.call(null,inst_25792);
var state_25931__$1 = (function (){var statearr_26013 = state_25931;
(statearr_26013[(22)] = inst_25805__$1);

return statearr_26013;
})();
if(inst_25805__$1){
var statearr_26014_26079 = state_25931__$1;
(statearr_26014_26079[(1)] = (10));

} else {
var statearr_26015_26080 = state_25931__$1;
(statearr_26015_26080[(1)] = (11));

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
}
});})(c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19517__auto__,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto____0 = (function (){
var statearr_26019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26019[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto__);

(statearr_26019[(1)] = (1));

return statearr_26019;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto____1 = (function (state_25931){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_25931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e26020){if((e26020 instanceof Object)){
var ex__19521__auto__ = e26020;
var statearr_26021_26081 = state_25931;
(statearr_26021_26081[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26082 = state_25931;
state_25931 = G__26082;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto__ = function(state_25931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto____1.call(this,state_25931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19584__auto__ = (function (){var statearr_26022 = f__19583__auto__.call(null);
(statearr_26022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_26022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__,map__25777,map__25777__$1,opts,before_jsload,on_jsload,reload_dependents,map__25778,map__25778__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19582__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26085,link){
var map__26088 = p__26085;
var map__26088__$1 = ((((!((map__26088 == null)))?((((map__26088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26088):map__26088);
var file = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26088,map__26088__$1,file){
return (function (p1__26083_SHARP_,p2__26084_SHARP_){
if(cljs.core._EQ_.call(null,p1__26083_SHARP_,p2__26084_SHARP_)){
return p1__26083_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26088,map__26088__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26094){
var map__26095 = p__26094;
var map__26095__$1 = ((((!((map__26095 == null)))?((((map__26095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26095):map__26095);
var match_length = cljs.core.get.call(null,map__26095__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26095__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26090_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26090_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26097 = [];
var len__17337__auto___26100 = arguments.length;
var i__17338__auto___26101 = (0);
while(true){
if((i__17338__auto___26101 < len__17337__auto___26100)){
args26097.push((arguments[i__17338__auto___26101]));

var G__26102 = (i__17338__auto___26101 + (1));
i__17338__auto___26101 = G__26102;
continue;
} else {
}
break;
}

var G__26099 = args26097.length;
switch (G__26099) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26097.length)].join('')));

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
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26104_SHARP_,p2__26105_SHARP_){
return cljs.core.assoc.call(null,p1__26104_SHARP_,cljs.core.get.call(null,p2__26105_SHARP_,key),p2__26105_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26106){
var map__26109 = p__26106;
var map__26109__$1 = ((((!((map__26109 == null)))?((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26109):map__26109);
var f_data = map__26109__$1;
var file = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26111,files_msg){
var map__26118 = p__26111;
var map__26118__$1 = ((((!((map__26118 == null)))?((((map__26118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26118):map__26118);
var opts = map__26118__$1;
var on_cssload = cljs.core.get.call(null,map__26118__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26120_26124 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26121_26125 = null;
var count__26122_26126 = (0);
var i__26123_26127 = (0);
while(true){
if((i__26123_26127 < count__26122_26126)){
var f_26128 = cljs.core._nth.call(null,chunk__26121_26125,i__26123_26127);
figwheel.client.file_reloading.reload_css_file.call(null,f_26128);

var G__26129 = seq__26120_26124;
var G__26130 = chunk__26121_26125;
var G__26131 = count__26122_26126;
var G__26132 = (i__26123_26127 + (1));
seq__26120_26124 = G__26129;
chunk__26121_26125 = G__26130;
count__26122_26126 = G__26131;
i__26123_26127 = G__26132;
continue;
} else {
var temp__4425__auto___26133 = cljs.core.seq.call(null,seq__26120_26124);
if(temp__4425__auto___26133){
var seq__26120_26134__$1 = temp__4425__auto___26133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26120_26134__$1)){
var c__17082__auto___26135 = cljs.core.chunk_first.call(null,seq__26120_26134__$1);
var G__26136 = cljs.core.chunk_rest.call(null,seq__26120_26134__$1);
var G__26137 = c__17082__auto___26135;
var G__26138 = cljs.core.count.call(null,c__17082__auto___26135);
var G__26139 = (0);
seq__26120_26124 = G__26136;
chunk__26121_26125 = G__26137;
count__26122_26126 = G__26138;
i__26123_26127 = G__26139;
continue;
} else {
var f_26140 = cljs.core.first.call(null,seq__26120_26134__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26140);

var G__26141 = cljs.core.next.call(null,seq__26120_26134__$1);
var G__26142 = null;
var G__26143 = (0);
var G__26144 = (0);
seq__26120_26124 = G__26141;
chunk__26121_26125 = G__26142;
count__26122_26126 = G__26143;
i__26123_26127 = G__26144;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26118,map__26118__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26118,map__26118__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444737125121
// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
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
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23975 = cljs.core._EQ_;
var expr__23976 = (function (){var or__16279__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23975.call(null,"true",expr__23976))){
return true;
} else {
if(cljs.core.truth_(pred__23975.call(null,"false",expr__23976))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23976)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23978__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23979__i = 0, G__23979__a = new Array(arguments.length -  0);
while (G__23979__i < G__23979__a.length) {G__23979__a[G__23979__i] = arguments[G__23979__i + 0]; ++G__23979__i;}
  args = new cljs.core.IndexedSeq(G__23979__a,0);
} 
return G__23978__delegate.call(this,args);};
G__23978.cljs$lang$maxFixedArity = 0;
G__23978.cljs$lang$applyTo = (function (arglist__23980){
var args = cljs.core.seq(arglist__23980);
return G__23978__delegate(args);
});
G__23978.cljs$core$IFn$_invoke$arity$variadic = G__23978__delegate;
return G__23978;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23981){
var map__23984 = p__23981;
var map__23984__$1 = ((((!((map__23984 == null)))?((((map__23984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23984):map__23984);
var message = cljs.core.get.call(null,map__23984__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23984__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16279__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16267__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16267__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16267__auto__;
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
var c__19582__auto___24146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___24146,ch){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___24146,ch){
return (function (state_24115){
var state_val_24116 = (state_24115[(1)]);
if((state_val_24116 === (7))){
var inst_24111 = (state_24115[(2)]);
var state_24115__$1 = state_24115;
var statearr_24117_24147 = state_24115__$1;
(statearr_24117_24147[(2)] = inst_24111);

(statearr_24117_24147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (1))){
var state_24115__$1 = state_24115;
var statearr_24118_24148 = state_24115__$1;
(statearr_24118_24148[(2)] = null);

(statearr_24118_24148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (4))){
var inst_24068 = (state_24115[(7)]);
var inst_24068__$1 = (state_24115[(2)]);
var state_24115__$1 = (function (){var statearr_24119 = state_24115;
(statearr_24119[(7)] = inst_24068__$1);

return statearr_24119;
})();
if(cljs.core.truth_(inst_24068__$1)){
var statearr_24120_24149 = state_24115__$1;
(statearr_24120_24149[(1)] = (5));

} else {
var statearr_24121_24150 = state_24115__$1;
(statearr_24121_24150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (15))){
var inst_24075 = (state_24115[(8)]);
var inst_24090 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24075);
var inst_24091 = cljs.core.first.call(null,inst_24090);
var inst_24092 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24091);
var inst_24093 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24092)].join('');
var inst_24094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24093);
var state_24115__$1 = state_24115;
var statearr_24122_24151 = state_24115__$1;
(statearr_24122_24151[(2)] = inst_24094);

(statearr_24122_24151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (13))){
var inst_24099 = (state_24115[(2)]);
var state_24115__$1 = state_24115;
var statearr_24123_24152 = state_24115__$1;
(statearr_24123_24152[(2)] = inst_24099);

(statearr_24123_24152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (6))){
var state_24115__$1 = state_24115;
var statearr_24124_24153 = state_24115__$1;
(statearr_24124_24153[(2)] = null);

(statearr_24124_24153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (17))){
var inst_24097 = (state_24115[(2)]);
var state_24115__$1 = state_24115;
var statearr_24125_24154 = state_24115__$1;
(statearr_24125_24154[(2)] = inst_24097);

(statearr_24125_24154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (3))){
var inst_24113 = (state_24115[(2)]);
var state_24115__$1 = state_24115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24115__$1,inst_24113);
} else {
if((state_val_24116 === (12))){
var inst_24074 = (state_24115[(9)]);
var inst_24088 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24074,opts);
var state_24115__$1 = state_24115;
if(cljs.core.truth_(inst_24088)){
var statearr_24126_24155 = state_24115__$1;
(statearr_24126_24155[(1)] = (15));

} else {
var statearr_24127_24156 = state_24115__$1;
(statearr_24127_24156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (2))){
var state_24115__$1 = state_24115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24115__$1,(4),ch);
} else {
if((state_val_24116 === (11))){
var inst_24075 = (state_24115[(8)]);
var inst_24080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24081 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24075);
var inst_24082 = cljs.core.async.timeout.call(null,(1000));
var inst_24083 = [inst_24081,inst_24082];
var inst_24084 = (new cljs.core.PersistentVector(null,2,(5),inst_24080,inst_24083,null));
var state_24115__$1 = state_24115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24115__$1,(14),inst_24084);
} else {
if((state_val_24116 === (9))){
var inst_24075 = (state_24115[(8)]);
var inst_24101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24102 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24075);
var inst_24103 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24102);
var inst_24104 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24103)].join('');
var inst_24105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24104);
var state_24115__$1 = (function (){var statearr_24128 = state_24115;
(statearr_24128[(10)] = inst_24101);

return statearr_24128;
})();
var statearr_24129_24157 = state_24115__$1;
(statearr_24129_24157[(2)] = inst_24105);

(statearr_24129_24157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (5))){
var inst_24068 = (state_24115[(7)]);
var inst_24070 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24071 = (new cljs.core.PersistentArrayMap(null,2,inst_24070,null));
var inst_24072 = (new cljs.core.PersistentHashSet(null,inst_24071,null));
var inst_24073 = figwheel.client.focus_msgs.call(null,inst_24072,inst_24068);
var inst_24074 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24073);
var inst_24075 = cljs.core.first.call(null,inst_24073);
var inst_24076 = figwheel.client.autoload_QMARK_.call(null);
var state_24115__$1 = (function (){var statearr_24130 = state_24115;
(statearr_24130[(9)] = inst_24074);

(statearr_24130[(8)] = inst_24075);

return statearr_24130;
})();
if(cljs.core.truth_(inst_24076)){
var statearr_24131_24158 = state_24115__$1;
(statearr_24131_24158[(1)] = (8));

} else {
var statearr_24132_24159 = state_24115__$1;
(statearr_24132_24159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (14))){
var inst_24086 = (state_24115[(2)]);
var state_24115__$1 = state_24115;
var statearr_24133_24160 = state_24115__$1;
(statearr_24133_24160[(2)] = inst_24086);

(statearr_24133_24160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (16))){
var state_24115__$1 = state_24115;
var statearr_24134_24161 = state_24115__$1;
(statearr_24134_24161[(2)] = null);

(statearr_24134_24161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (10))){
var inst_24107 = (state_24115[(2)]);
var state_24115__$1 = (function (){var statearr_24135 = state_24115;
(statearr_24135[(11)] = inst_24107);

return statearr_24135;
})();
var statearr_24136_24162 = state_24115__$1;
(statearr_24136_24162[(2)] = null);

(statearr_24136_24162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24116 === (8))){
var inst_24074 = (state_24115[(9)]);
var inst_24078 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24074,opts);
var state_24115__$1 = state_24115;
if(cljs.core.truth_(inst_24078)){
var statearr_24137_24163 = state_24115__$1;
(statearr_24137_24163[(1)] = (11));

} else {
var statearr_24138_24164 = state_24115__$1;
(statearr_24138_24164[(1)] = (12));

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
});})(c__19582__auto___24146,ch))
;
return ((function (switch__19517__auto__,c__19582__auto___24146,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19518__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19518__auto____0 = (function (){
var statearr_24142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24142[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19518__auto__);

(statearr_24142[(1)] = (1));

return statearr_24142;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19518__auto____1 = (function (state_24115){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_24115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e24143){if((e24143 instanceof Object)){
var ex__19521__auto__ = e24143;
var statearr_24144_24165 = state_24115;
(statearr_24144_24165[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24166 = state_24115;
state_24115 = G__24166;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19518__auto__ = function(state_24115){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19518__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19518__auto____1.call(this,state_24115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19518__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19518__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___24146,ch))
})();
var state__19584__auto__ = (function (){var statearr_24145 = f__19583__auto__.call(null);
(statearr_24145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___24146);

return statearr_24145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___24146,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24167_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24167_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24174 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24174){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24172 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24173 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24172,_STAR_print_newline_STAR_24173,base_path_24174){
return (function() { 
var G__24175__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24176__i = 0, G__24176__a = new Array(arguments.length -  0);
while (G__24176__i < G__24176__a.length) {G__24176__a[G__24176__i] = arguments[G__24176__i + 0]; ++G__24176__i;}
  args = new cljs.core.IndexedSeq(G__24176__a,0);
} 
return G__24175__delegate.call(this,args);};
G__24175.cljs$lang$maxFixedArity = 0;
G__24175.cljs$lang$applyTo = (function (arglist__24177){
var args = cljs.core.seq(arglist__24177);
return G__24175__delegate(args);
});
G__24175.cljs$core$IFn$_invoke$arity$variadic = G__24175__delegate;
return G__24175;
})()
;})(_STAR_print_fn_STAR_24172,_STAR_print_newline_STAR_24173,base_path_24174))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24173;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24172;
}}catch (e24171){if((e24171 instanceof Error)){
var e = e24171;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24174], null));
} else {
var e = e24171;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24174))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24178){
var map__24185 = p__24178;
var map__24185__$1 = ((((!((map__24185 == null)))?((((map__24185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24185):map__24185);
var opts = map__24185__$1;
var build_id = cljs.core.get.call(null,map__24185__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24185,map__24185__$1,opts,build_id){
return (function (p__24187){
var vec__24188 = p__24187;
var map__24189 = cljs.core.nth.call(null,vec__24188,(0),null);
var map__24189__$1 = ((((!((map__24189 == null)))?((((map__24189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24189):map__24189);
var msg = map__24189__$1;
var msg_name = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24188,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24188,map__24189,map__24189__$1,msg,msg_name,_,map__24185,map__24185__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24188,map__24189,map__24189__$1,msg,msg_name,_,map__24185,map__24185__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24185,map__24185__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24195){
var vec__24196 = p__24195;
var map__24197 = cljs.core.nth.call(null,vec__24196,(0),null);
var map__24197__$1 = ((((!((map__24197 == null)))?((((map__24197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24197):map__24197);
var msg = map__24197__$1;
var msg_name = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24196,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24199){
var map__24209 = p__24199;
var map__24209__$1 = ((((!((map__24209 == null)))?((((map__24209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24209):map__24209);
var on_compile_warning = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24209,map__24209__$1,on_compile_warning,on_compile_fail){
return (function (p__24211){
var vec__24212 = p__24211;
var map__24213 = cljs.core.nth.call(null,vec__24212,(0),null);
var map__24213__$1 = ((((!((map__24213 == null)))?((((map__24213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24213):map__24213);
var msg = map__24213__$1;
var msg_name = cljs.core.get.call(null,map__24213__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24212,(1));
var pred__24215 = cljs.core._EQ_;
var expr__24216 = msg_name;
if(cljs.core.truth_(pred__24215.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24216))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24215.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24216))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24209,map__24209__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__,msg_hist,msg_names,msg){
return (function (state_24432){
var state_val_24433 = (state_24432[(1)]);
if((state_val_24433 === (7))){
var inst_24356 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24356)){
var statearr_24434_24480 = state_24432__$1;
(statearr_24434_24480[(1)] = (8));

} else {
var statearr_24435_24481 = state_24432__$1;
(statearr_24435_24481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (20))){
var inst_24426 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24436_24482 = state_24432__$1;
(statearr_24436_24482[(2)] = inst_24426);

(statearr_24436_24482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (27))){
var inst_24422 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24437_24483 = state_24432__$1;
(statearr_24437_24483[(2)] = inst_24422);

(statearr_24437_24483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (1))){
var inst_24349 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24349)){
var statearr_24438_24484 = state_24432__$1;
(statearr_24438_24484[(1)] = (2));

} else {
var statearr_24439_24485 = state_24432__$1;
(statearr_24439_24485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (24))){
var inst_24424 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24440_24486 = state_24432__$1;
(statearr_24440_24486[(2)] = inst_24424);

(statearr_24440_24486[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (4))){
var inst_24430 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24432__$1,inst_24430);
} else {
if((state_val_24433 === (15))){
var inst_24428 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24441_24487 = state_24432__$1;
(statearr_24441_24487[(2)] = inst_24428);

(statearr_24441_24487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (21))){
var inst_24387 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24442_24488 = state_24432__$1;
(statearr_24442_24488[(2)] = inst_24387);

(statearr_24442_24488[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (31))){
var inst_24411 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24411)){
var statearr_24443_24489 = state_24432__$1;
(statearr_24443_24489[(1)] = (34));

} else {
var statearr_24444_24490 = state_24432__$1;
(statearr_24444_24490[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (32))){
var inst_24420 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24445_24491 = state_24432__$1;
(statearr_24445_24491[(2)] = inst_24420);

(statearr_24445_24491[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (33))){
var inst_24409 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24446_24492 = state_24432__$1;
(statearr_24446_24492[(2)] = inst_24409);

(statearr_24446_24492[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (13))){
var inst_24370 = figwheel.client.heads_up.clear.call(null);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(16),inst_24370);
} else {
if((state_val_24433 === (22))){
var inst_24391 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24392 = figwheel.client.heads_up.append_message.call(null,inst_24391);
var state_24432__$1 = state_24432;
var statearr_24447_24493 = state_24432__$1;
(statearr_24447_24493[(2)] = inst_24392);

(statearr_24447_24493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (36))){
var inst_24418 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24448_24494 = state_24432__$1;
(statearr_24448_24494[(2)] = inst_24418);

(statearr_24448_24494[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (29))){
var inst_24402 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24449_24495 = state_24432__$1;
(statearr_24449_24495[(2)] = inst_24402);

(statearr_24449_24495[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (6))){
var inst_24351 = (state_24432[(7)]);
var state_24432__$1 = state_24432;
var statearr_24450_24496 = state_24432__$1;
(statearr_24450_24496[(2)] = inst_24351);

(statearr_24450_24496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (28))){
var inst_24398 = (state_24432[(2)]);
var inst_24399 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24400 = figwheel.client.heads_up.display_warning.call(null,inst_24399);
var state_24432__$1 = (function (){var statearr_24451 = state_24432;
(statearr_24451[(8)] = inst_24398);

return statearr_24451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(29),inst_24400);
} else {
if((state_val_24433 === (25))){
var inst_24396 = figwheel.client.heads_up.clear.call(null);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(28),inst_24396);
} else {
if((state_val_24433 === (34))){
var inst_24413 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(37),inst_24413);
} else {
if((state_val_24433 === (17))){
var inst_24378 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24452_24497 = state_24432__$1;
(statearr_24452_24497[(2)] = inst_24378);

(statearr_24452_24497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (3))){
var inst_24368 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24368)){
var statearr_24453_24498 = state_24432__$1;
(statearr_24453_24498[(1)] = (13));

} else {
var statearr_24454_24499 = state_24432__$1;
(statearr_24454_24499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (12))){
var inst_24364 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24455_24500 = state_24432__$1;
(statearr_24455_24500[(2)] = inst_24364);

(statearr_24455_24500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (2))){
var inst_24351 = (state_24432[(7)]);
var inst_24351__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24432__$1 = (function (){var statearr_24456 = state_24432;
(statearr_24456[(7)] = inst_24351__$1);

return statearr_24456;
})();
if(cljs.core.truth_(inst_24351__$1)){
var statearr_24457_24501 = state_24432__$1;
(statearr_24457_24501[(1)] = (5));

} else {
var statearr_24458_24502 = state_24432__$1;
(statearr_24458_24502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (23))){
var inst_24394 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24394)){
var statearr_24459_24503 = state_24432__$1;
(statearr_24459_24503[(1)] = (25));

} else {
var statearr_24460_24504 = state_24432__$1;
(statearr_24460_24504[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (35))){
var state_24432__$1 = state_24432;
var statearr_24461_24505 = state_24432__$1;
(statearr_24461_24505[(2)] = null);

(statearr_24461_24505[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (19))){
var inst_24389 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24389)){
var statearr_24462_24506 = state_24432__$1;
(statearr_24462_24506[(1)] = (22));

} else {
var statearr_24463_24507 = state_24432__$1;
(statearr_24463_24507[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (11))){
var inst_24360 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24464_24508 = state_24432__$1;
(statearr_24464_24508[(2)] = inst_24360);

(statearr_24464_24508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (9))){
var inst_24362 = figwheel.client.heads_up.clear.call(null);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(12),inst_24362);
} else {
if((state_val_24433 === (5))){
var inst_24353 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24432__$1 = state_24432;
var statearr_24465_24509 = state_24432__$1;
(statearr_24465_24509[(2)] = inst_24353);

(statearr_24465_24509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (14))){
var inst_24380 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24380)){
var statearr_24466_24510 = state_24432__$1;
(statearr_24466_24510[(1)] = (18));

} else {
var statearr_24467_24511 = state_24432__$1;
(statearr_24467_24511[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (26))){
var inst_24404 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24404)){
var statearr_24468_24512 = state_24432__$1;
(statearr_24468_24512[(1)] = (30));

} else {
var statearr_24469_24513 = state_24432__$1;
(statearr_24469_24513[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (16))){
var inst_24372 = (state_24432[(2)]);
var inst_24373 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24374 = figwheel.client.format_messages.call(null,inst_24373);
var inst_24375 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24376 = figwheel.client.heads_up.display_error.call(null,inst_24374,inst_24375);
var state_24432__$1 = (function (){var statearr_24470 = state_24432;
(statearr_24470[(9)] = inst_24372);

return statearr_24470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(17),inst_24376);
} else {
if((state_val_24433 === (30))){
var inst_24406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24407 = figwheel.client.heads_up.display_warning.call(null,inst_24406);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(33),inst_24407);
} else {
if((state_val_24433 === (10))){
var inst_24366 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24471_24514 = state_24432__$1;
(statearr_24471_24514[(2)] = inst_24366);

(statearr_24471_24514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (18))){
var inst_24382 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24383 = figwheel.client.format_messages.call(null,inst_24382);
var inst_24384 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24385 = figwheel.client.heads_up.display_error.call(null,inst_24383,inst_24384);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(21),inst_24385);
} else {
if((state_val_24433 === (37))){
var inst_24415 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24472_24515 = state_24432__$1;
(statearr_24472_24515[(2)] = inst_24415);

(statearr_24472_24515[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (8))){
var inst_24358 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(11),inst_24358);
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
});})(c__19582__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19517__auto__,c__19582__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto____0 = (function (){
var statearr_24476 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24476[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto__);

(statearr_24476[(1)] = (1));

return statearr_24476;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto____1 = (function (state_24432){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_24432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e24477){if((e24477 instanceof Object)){
var ex__19521__auto__ = e24477;
var statearr_24478_24516 = state_24432;
(statearr_24478_24516[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24517 = state_24432;
state_24432 = G__24517;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto__ = function(state_24432){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto____1.call(this,state_24432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__,msg_hist,msg_names,msg))
})();
var state__19584__auto__ = (function (){var statearr_24479 = f__19583__auto__.call(null);
(statearr_24479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_24479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__,msg_hist,msg_names,msg))
);

return c__19582__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19582__auto___24580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto___24580,ch){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto___24580,ch){
return (function (state_24563){
var state_val_24564 = (state_24563[(1)]);
if((state_val_24564 === (1))){
var state_24563__$1 = state_24563;
var statearr_24565_24581 = state_24563__$1;
(statearr_24565_24581[(2)] = null);

(statearr_24565_24581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (2))){
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24563__$1,(4),ch);
} else {
if((state_val_24564 === (3))){
var inst_24561 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24563__$1,inst_24561);
} else {
if((state_val_24564 === (4))){
var inst_24551 = (state_24563[(7)]);
var inst_24551__$1 = (state_24563[(2)]);
var state_24563__$1 = (function (){var statearr_24566 = state_24563;
(statearr_24566[(7)] = inst_24551__$1);

return statearr_24566;
})();
if(cljs.core.truth_(inst_24551__$1)){
var statearr_24567_24582 = state_24563__$1;
(statearr_24567_24582[(1)] = (5));

} else {
var statearr_24568_24583 = state_24563__$1;
(statearr_24568_24583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (5))){
var inst_24551 = (state_24563[(7)]);
var inst_24553 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24551);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24563__$1,(8),inst_24553);
} else {
if((state_val_24564 === (6))){
var state_24563__$1 = state_24563;
var statearr_24569_24584 = state_24563__$1;
(statearr_24569_24584[(2)] = null);

(statearr_24569_24584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (7))){
var inst_24559 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24570_24585 = state_24563__$1;
(statearr_24570_24585[(2)] = inst_24559);

(statearr_24570_24585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (8))){
var inst_24555 = (state_24563[(2)]);
var state_24563__$1 = (function (){var statearr_24571 = state_24563;
(statearr_24571[(8)] = inst_24555);

return statearr_24571;
})();
var statearr_24572_24586 = state_24563__$1;
(statearr_24572_24586[(2)] = null);

(statearr_24572_24586[(1)] = (2));


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
});})(c__19582__auto___24580,ch))
;
return ((function (switch__19517__auto__,c__19582__auto___24580,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19518__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19518__auto____0 = (function (){
var statearr_24576 = [null,null,null,null,null,null,null,null,null];
(statearr_24576[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19518__auto__);

(statearr_24576[(1)] = (1));

return statearr_24576;
});
var figwheel$client$heads_up_plugin_$_state_machine__19518__auto____1 = (function (state_24563){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_24563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e24577){if((e24577 instanceof Object)){
var ex__19521__auto__ = e24577;
var statearr_24578_24587 = state_24563;
(statearr_24578_24587[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24588 = state_24563;
state_24563 = G__24588;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19518__auto__ = function(state_24563){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19518__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19518__auto____1.call(this,state_24563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19518__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19518__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto___24580,ch))
})();
var state__19584__auto__ = (function (){var statearr_24579 = f__19583__auto__.call(null);
(statearr_24579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto___24580);

return statearr_24579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto___24580,ch))
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
var c__19582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19582__auto__){
return (function (){
var f__19583__auto__ = (function (){var switch__19517__auto__ = ((function (c__19582__auto__){
return (function (state_24609){
var state_val_24610 = (state_24609[(1)]);
if((state_val_24610 === (1))){
var inst_24604 = cljs.core.async.timeout.call(null,(3000));
var state_24609__$1 = state_24609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24609__$1,(2),inst_24604);
} else {
if((state_val_24610 === (2))){
var inst_24606 = (state_24609[(2)]);
var inst_24607 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24609__$1 = (function (){var statearr_24611 = state_24609;
(statearr_24611[(7)] = inst_24606);

return statearr_24611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24609__$1,inst_24607);
} else {
return null;
}
}
});})(c__19582__auto__))
;
return ((function (switch__19517__auto__,c__19582__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19518__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19518__auto____0 = (function (){
var statearr_24615 = [null,null,null,null,null,null,null,null];
(statearr_24615[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19518__auto__);

(statearr_24615[(1)] = (1));

return statearr_24615;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19518__auto____1 = (function (state_24609){
while(true){
var ret_value__19519__auto__ = (function (){try{while(true){
var result__19520__auto__ = switch__19517__auto__.call(null,state_24609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19520__auto__;
}
break;
}
}catch (e24616){if((e24616 instanceof Object)){
var ex__19521__auto__ = e24616;
var statearr_24617_24619 = state_24609;
(statearr_24617_24619[(5)] = ex__19521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24620 = state_24609;
state_24609 = G__24620;
continue;
} else {
return ret_value__19519__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19518__auto__ = function(state_24609){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19518__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19518__auto____1.call(this,state_24609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19518__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19518__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19518__auto__;
})()
;})(switch__19517__auto__,c__19582__auto__))
})();
var state__19584__auto__ = (function (){var statearr_24618 = f__19583__auto__.call(null);
(statearr_24618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19582__auto__);

return statearr_24618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19584__auto__);
});})(c__19582__auto__))
);

return c__19582__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24621){
var map__24628 = p__24621;
var map__24628__$1 = ((((!((map__24628 == null)))?((((map__24628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24628):map__24628);
var ed = map__24628__$1;
var formatted_exception = cljs.core.get.call(null,map__24628__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24628__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24628__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24630_24634 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24631_24635 = null;
var count__24632_24636 = (0);
var i__24633_24637 = (0);
while(true){
if((i__24633_24637 < count__24632_24636)){
var msg_24638 = cljs.core._nth.call(null,chunk__24631_24635,i__24633_24637);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24638);

var G__24639 = seq__24630_24634;
var G__24640 = chunk__24631_24635;
var G__24641 = count__24632_24636;
var G__24642 = (i__24633_24637 + (1));
seq__24630_24634 = G__24639;
chunk__24631_24635 = G__24640;
count__24632_24636 = G__24641;
i__24633_24637 = G__24642;
continue;
} else {
var temp__4425__auto___24643 = cljs.core.seq.call(null,seq__24630_24634);
if(temp__4425__auto___24643){
var seq__24630_24644__$1 = temp__4425__auto___24643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24630_24644__$1)){
var c__17082__auto___24645 = cljs.core.chunk_first.call(null,seq__24630_24644__$1);
var G__24646 = cljs.core.chunk_rest.call(null,seq__24630_24644__$1);
var G__24647 = c__17082__auto___24645;
var G__24648 = cljs.core.count.call(null,c__17082__auto___24645);
var G__24649 = (0);
seq__24630_24634 = G__24646;
chunk__24631_24635 = G__24647;
count__24632_24636 = G__24648;
i__24633_24637 = G__24649;
continue;
} else {
var msg_24650 = cljs.core.first.call(null,seq__24630_24644__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24650);

var G__24651 = cljs.core.next.call(null,seq__24630_24644__$1);
var G__24652 = null;
var G__24653 = (0);
var G__24654 = (0);
seq__24630_24634 = G__24651;
chunk__24631_24635 = G__24652;
count__24632_24636 = G__24653;
i__24633_24637 = G__24654;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24655){
var map__24658 = p__24655;
var map__24658__$1 = ((((!((map__24658 == null)))?((((map__24658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24658):map__24658);
var w = map__24658__$1;
var message = cljs.core.get.call(null,map__24658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__16267__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16267__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16267__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24666 = cljs.core.seq.call(null,plugins);
var chunk__24667 = null;
var count__24668 = (0);
var i__24669 = (0);
while(true){
if((i__24669 < count__24668)){
var vec__24670 = cljs.core._nth.call(null,chunk__24667,i__24669);
var k = cljs.core.nth.call(null,vec__24670,(0),null);
var plugin = cljs.core.nth.call(null,vec__24670,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24672 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24666,chunk__24667,count__24668,i__24669,pl_24672,vec__24670,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24672.call(null,msg_hist);
});})(seq__24666,chunk__24667,count__24668,i__24669,pl_24672,vec__24670,k,plugin))
);
} else {
}

var G__24673 = seq__24666;
var G__24674 = chunk__24667;
var G__24675 = count__24668;
var G__24676 = (i__24669 + (1));
seq__24666 = G__24673;
chunk__24667 = G__24674;
count__24668 = G__24675;
i__24669 = G__24676;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24666);
if(temp__4425__auto__){
var seq__24666__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24666__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__24666__$1);
var G__24677 = cljs.core.chunk_rest.call(null,seq__24666__$1);
var G__24678 = c__17082__auto__;
var G__24679 = cljs.core.count.call(null,c__17082__auto__);
var G__24680 = (0);
seq__24666 = G__24677;
chunk__24667 = G__24678;
count__24668 = G__24679;
i__24669 = G__24680;
continue;
} else {
var vec__24671 = cljs.core.first.call(null,seq__24666__$1);
var k = cljs.core.nth.call(null,vec__24671,(0),null);
var plugin = cljs.core.nth.call(null,vec__24671,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24681 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24666,chunk__24667,count__24668,i__24669,pl_24681,vec__24671,k,plugin,seq__24666__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24681.call(null,msg_hist);
});})(seq__24666,chunk__24667,count__24668,i__24669,pl_24681,vec__24671,k,plugin,seq__24666__$1,temp__4425__auto__))
);
} else {
}

var G__24682 = cljs.core.next.call(null,seq__24666__$1);
var G__24683 = null;
var G__24684 = (0);
var G__24685 = (0);
seq__24666 = G__24682;
chunk__24667 = G__24683;
count__24668 = G__24684;
i__24669 = G__24685;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24686 = [];
var len__17337__auto___24689 = arguments.length;
var i__17338__auto___24690 = (0);
while(true){
if((i__17338__auto___24690 < len__17337__auto___24689)){
args24686.push((arguments[i__17338__auto___24690]));

var G__24691 = (i__17338__auto___24690 + (1));
i__17338__auto___24690 = G__24691;
continue;
} else {
}
break;
}

var G__24688 = args24686.length;
switch (G__24688) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24686.length)].join('')));

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17344__auto__ = [];
var len__17337__auto___24697 = arguments.length;
var i__17338__auto___24698 = (0);
while(true){
if((i__17338__auto___24698 < len__17337__auto___24697)){
args__17344__auto__.push((arguments[i__17338__auto___24698]));

var G__24699 = (i__17338__auto___24698 + (1));
i__17338__auto___24698 = G__24699;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((0) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17345__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24694){
var map__24695 = p__24694;
var map__24695__$1 = ((((!((map__24695 == null)))?((((map__24695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24695):map__24695);
var opts = map__24695__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24693){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24693));
});

//# sourceMappingURL=client.js.map?rel=1444737123155
// Compiled by ClojureScript 0.0-3178 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
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
var seq__14623_14635 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14624_14636 = null;
var count__14625_14637 = (0);
var i__14626_14638 = (0);
while(true){
if((i__14626_14638 < count__14625_14637)){
var f_14639 = cljs.core._nth.call(null,chunk__14624_14636,i__14626_14638);
cljs.core.println.call(null,"  ",f_14639);

var G__14640 = seq__14623_14635;
var G__14641 = chunk__14624_14636;
var G__14642 = count__14625_14637;
var G__14643 = (i__14626_14638 + (1));
seq__14623_14635 = G__14640;
chunk__14624_14636 = G__14641;
count__14625_14637 = G__14642;
i__14626_14638 = G__14643;
continue;
} else {
var temp__4126__auto___14644 = cljs.core.seq.call(null,seq__14623_14635);
if(temp__4126__auto___14644){
var seq__14623_14645__$1 = temp__4126__auto___14644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14623_14645__$1)){
var c__4884__auto___14646 = cljs.core.chunk_first.call(null,seq__14623_14645__$1);
var G__14647 = cljs.core.chunk_rest.call(null,seq__14623_14645__$1);
var G__14648 = c__4884__auto___14646;
var G__14649 = cljs.core.count.call(null,c__4884__auto___14646);
var G__14650 = (0);
seq__14623_14635 = G__14647;
chunk__14624_14636 = G__14648;
count__14625_14637 = G__14649;
i__14626_14638 = G__14650;
continue;
} else {
var f_14651 = cljs.core.first.call(null,seq__14623_14645__$1);
cljs.core.println.call(null,"  ",f_14651);

var G__14652 = cljs.core.next.call(null,seq__14623_14645__$1);
var G__14653 = null;
var G__14654 = (0);
var G__14655 = (0);
seq__14623_14635 = G__14652;
chunk__14624_14636 = G__14653;
count__14625_14637 = G__14654;
i__14626_14638 = G__14655;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4099__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
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
var seq__14627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14628 = null;
var count__14629 = (0);
var i__14630 = (0);
while(true){
if((i__14630 < count__14629)){
var vec__14631 = cljs.core._nth.call(null,chunk__14628,i__14630);
var name = cljs.core.nth.call(null,vec__14631,(0),null);
var map__14632 = cljs.core.nth.call(null,vec__14631,(1),null);
var map__14632__$1 = ((cljs.core.seq_QMARK_.call(null,map__14632))?cljs.core.apply.call(null,cljs.core.hash_map,map__14632):map__14632);
var arglists = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14656 = seq__14627;
var G__14657 = chunk__14628;
var G__14658 = count__14629;
var G__14659 = (i__14630 + (1));
seq__14627 = G__14656;
chunk__14628 = G__14657;
count__14629 = G__14658;
i__14630 = G__14659;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14627);
if(temp__4126__auto__){
var seq__14627__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14627__$1)){
var c__4884__auto__ = cljs.core.chunk_first.call(null,seq__14627__$1);
var G__14660 = cljs.core.chunk_rest.call(null,seq__14627__$1);
var G__14661 = c__4884__auto__;
var G__14662 = cljs.core.count.call(null,c__4884__auto__);
var G__14663 = (0);
seq__14627 = G__14660;
chunk__14628 = G__14661;
count__14629 = G__14662;
i__14630 = G__14663;
continue;
} else {
var vec__14633 = cljs.core.first.call(null,seq__14627__$1);
var name = cljs.core.nth.call(null,vec__14633,(0),null);
var map__14634 = cljs.core.nth.call(null,vec__14633,(1),null);
var map__14634__$1 = ((cljs.core.seq_QMARK_.call(null,map__14634))?cljs.core.apply.call(null,cljs.core.hash_map,map__14634):map__14634);
var arglists = cljs.core.get.call(null,map__14634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__14634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14664 = cljs.core.next.call(null,seq__14627__$1);
var G__14665 = null;
var G__14666 = (0);
var G__14667 = (0);
seq__14627 = G__14664;
chunk__14628 = G__14665;
count__14629 = G__14666;
i__14630 = G__14667;
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

//# sourceMappingURL=repl.js.map
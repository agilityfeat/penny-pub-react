// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('penny_pub_react.pubnub');
goog.require('clojure.string');
penny_pub_react.core.team_name = reagent.core.atom.call(null,"");
penny_pub_react.core.team_slug = reagent.core.atom.call(null,"");
penny_pub_react.core.user_name = reagent.core.atom.call(null,"");
penny_pub_react.core.convert_team_name_to_slug = (function penny_pub_react$core$convert_team_name_to_slug(){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.team_slug,[cljs.core.str(cljs.core.deref.call(null,penny_pub_react.core.team_name)),cljs.core.str("-url")].join(''));
});
penny_pub_react.core.print_team_url = (function penny_pub_react$core$print_team_url(){
return [cljs.core.str(window.location.href),cljs.core.str("team/"),cljs.core.str(cljs.core.deref.call(null,penny_pub_react.core.team_slug))].join('');
});
penny_pub_react.core.navbar = (function penny_pub_react$core$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle collapsed",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),".bs-navbar-collapse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Toggle navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),"Remotely Flipped"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.collapse.navbar-collapse.bs-navbar-collapse","nav.collapse.navbar-collapse.bs-navbar-collapse",1213662544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.navbar-right","ul.nav.navbar-nav.navbar-right",1710300738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"me@me.com"], null)], null)], null)], null)], null);
});
penny_pub_react.core.copyright = (function penny_pub_react$core$copyright(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.copyright","p.copyright",-1851334256),"Built by: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://www.agilityfeat.com"], null),"www.agilityfeat.com"], null)], null);
});
penny_pub_react.core.home_page = (function penny_pub_react$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Remotely Flipped"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"The Lean Penny Game for Remote Teams"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Have you ever struggled to teach a product team that its more efficient to work in small batch sizes?\n               Agile and Lean coaches have been using the penny game to show how teams that work in small chunks are much more efficient.\n               Usually this game is played in person with nothing but a stack of coins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We\u2019ve built thus online version so remote teams can play it together in real-time."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"team",new cljs.core.Keyword(null,"key","key",-1516042587),"team",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26381_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.team_name,p1__26381_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Team Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.start-game","input.start-game",-1313094),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),"btnTeam",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Team Name",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
penny_pub_react.core.convert_team_name_to_slug.call(null);

penny_pub_react.pubnub.init.call(null);

penny_pub_react.pubnub.suscribe_moderator.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_name),cljs.core.deref.call(null,penny_pub_react.core.team_slug));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step2","step2",-695249369));
}),new cljs.core.Keyword(null,"value","value",305978217),"Start Game"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.step2_page = (function penny_pub_react$core$step2_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Its time to get flipped!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your team url:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.url-wrap","span.url-wrap",-659090797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-link2","i.icon-link2",-266763296)], null),penny_pub_react.core.print_team_url.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Send this to your team so the can join in!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.people-joined-list","div.people-joined-list",1397414939),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Joined:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),"Mariana Lopez"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),"Arin Sime"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),"David Alfaro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.step3_page = (function penny_pub_react$core$step3_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-collaboration","i.icon-collaboration",-1510640874)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"Team:"], null),"[Team Name]"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"You are player [#]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"of [total] max"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Type your name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"user_name",new cljs.core.Keyword(null,"key","key",-1516042587),"user_name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26382_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.user_name,p1__26382_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.start-game","input.start-game",-1313094),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),"btnReady",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step2","step2",-695249369));
}),new cljs.core.Keyword(null,"value","value",305978217),"I'm Ready"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.pages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),penny_pub_react.core.home_page,new cljs.core.Keyword(null,"step2","step2",-695249369),penny_pub_react.core.step2_page,new cljs.core.Keyword(null,"step3","step3",-947794149),penny_pub_react.core.step3_page], null);
penny_pub_react.core.page = (function penny_pub_react$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
var action__6767__auto___26385 = (function (params__6768__auto__){
if(cljs.core.map_QMARK_.call(null,params__6768__auto__)){
var map__26383 = params__6768__auto__;
var map__26383__$1 = ((cljs.core.seq_QMARK_.call(null,map__26383))?cljs.core.apply.call(null,cljs.core.hash_map,map__26383):map__26383);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6768__auto__)){
var vec__26384 = params__6768__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__6767__auto___26385);

var action__6767__auto___26388 = (function (params__6768__auto__){
if(cljs.core.map_QMARK_.call(null,params__6768__auto__)){
var map__26386 = params__6768__auto__;
var map__26386__$1 = ((cljs.core.seq_QMARK_.call(null,map__26386))?cljs.core.apply.call(null,cljs.core.hash_map,map__26386):map__26386);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step2","step2",-695249369));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6768__auto__)){
var vec__26387 = params__6768__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step2","step2",-695249369));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#step-02",action__6767__auto___26388);

penny_pub_react.core.mount_components = (function penny_pub_react$core$mount_components(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.navbar], null),document.getElementById("top"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.page], null),document.getElementById("app"));
});
penny_pub_react.core.set_page = (function penny_pub_react$core$set_page(){
if(cljs.core._EQ_.call(null,(-1),window.location.href.indexOf("/team/"))){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step3","step3",-947794149));

penny_pub_react.pubnub.init.call(null);

cljs.core.reset_BANG_.call(null,penny_pub_react.core.team_slug,clojure.string.replace.call(null,window.location.pathname,"/team/",""));

return penny_pub_react.pubnub.suscribe_user.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_slug));
}
});
penny_pub_react.core.init_BANG_ = (function penny_pub_react$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

penny_pub_react.core.set_page.call(null);

return penny_pub_react.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map
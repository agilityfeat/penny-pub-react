// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');

cljs.reader.PushbackReader = (function (){var obj17435 = {};
return obj17435;
})();

/**
 * Returns the next char from the Reader,
 * nil if the end of stream has been reached
 */
cljs.reader.read_char = (function cljs$reader$read_char(reader){
if((function (){var and__4087__auto__ = reader;
if(and__4087__auto__){
return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else {
return and__4087__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__4735__auto__ = (((reader == null))?null:reader);
return (function (){var or__4099__auto__ = (cljs.reader.read_char[(function (){var G__17439 = x__4735__auto__;
return goog.typeOf(G__17439);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.reader.read_char["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});

/**
 * Push back a single character on to the stream
 */
cljs.reader.unread = (function cljs$reader$unread(reader,ch){
if((function (){var and__4087__auto__ = reader;
if(and__4087__auto__){
return reader.cljs$reader$PushbackReader$unread$arity$2;
} else {
return and__4087__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__4735__auto__ = (((reader == null))?null:reader);
return (function (){var or__4099__auto__ = (cljs.reader.unread[(function (){var G__17443 = x__4735__auto__;
return goog.typeOf(G__17443);
})()]);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (cljs.reader.unread["_"]);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});


/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function cljs$reader$__GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function cljs$reader$push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
 * Checks whether a given character is whitespace
 */
cljs.reader.whitespace_QMARK_ = (function cljs$reader$whitespace_QMARK_(ch){
var or__4099__auto__ = (function (){var G__17447 = ch;
return goog.string.isBreakingWhitespace(G__17447);
})();
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return ("," === ch);
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.reader.numeric_QMARK_ = (function cljs$reader$numeric_QMARK_(ch){
var G__17449 = ch;
return goog.string.isNumeric(G__17449);
});
/**
 * Checks whether the character begins a comment.
 */
cljs.reader.comment_prefix_QMARK_ = (function cljs$reader$comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.reader.number_literal_QMARK_ = (function cljs$reader$number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch);

return next_ch;
})())));
});


cljs.reader.reader_error = (function cljs$reader$reader_error(){
var argseq__5139__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5139__auto__);
});

cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
});

cljs.reader.reader_error.cljs$lang$maxFixedArity = (1);

cljs.reader.reader_error.cljs$lang$applyTo = (function (seq17450){
var G__17451 = cljs.core.first(seq17450);
var seq17450__$1 = cljs.core.next(seq17450);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__17451,seq17450__$1);
});
cljs.reader.macro_terminating_QMARK_ = (function cljs$reader$macro_terminating_QMARK_(ch){
var and__4087__auto__ = !((ch === "#"));
if(and__4087__auto__){
var and__4087__auto____$1 = !((ch === "'"));
if(and__4087__auto____$1){
var and__4087__auto____$2 = !((ch === ":"));
if(and__4087__auto____$2){
var G__17459 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__17459) : cljs.reader.macros.call(null,G__17459));
} else {
return and__4087__auto____$2;
}
} else {
return and__4087__auto____$1;
}
} else {
return and__4087__auto__;
}
});
cljs.reader.read_token = (function cljs$reader$read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch))){
cljs.reader.unread(rdr,ch);

return sb.toString();
} else {
var G__17460 = (function (){
sb.append(ch);

return sb;
})()
;
var G__17461 = cljs.reader.read_char(rdr);
sb = G__17460;
ch = G__17461;
continue;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.reader.skip_line = (function cljs$reader$skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char(reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function cljs$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function cljs$reader$match_int(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__17466 = (groups[(6)]);
var G__17467 = (10);
return parseInt(G__17466,G__17467);
})()]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = (function (){var G__17468 = n;
var G__17469 = radix;
return parseInt(G__17468,G__17469);
})();
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function cljs$reader$match_ratio(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return ((function (){var G__17474 = numinator;
var G__17475 = (10);
return parseInt(G__17474,G__17475);
})() / (function (){var G__17476 = denominator;
var G__17477 = (10);
return parseInt(G__17476,G__17477);
})());
});
cljs.reader.match_float = (function cljs$reader$match_float(s){
var G__17479 = s;
return parseFloat(G__17479);
});
cljs.reader.match_number = (function cljs$reader$match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s))){
return cljs.reader.match_int(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s))){
return cljs.reader.match_float(s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function cljs$reader$escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function cljs$reader$read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function cljs$reader$read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function cljs$reader$validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function cljs$reader$make_unicode_char(code_str){
var code = (function (){var G__17482 = code_str;
var G__17483 = (16);
return parseInt(G__17482,G__17483);
})();
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function cljs$reader$escape_char(buffer,reader){
var ch = cljs.reader.read_char(reader);
var mapresult = cljs.reader.escape_char_map(ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else {
if(cljs.reader.numeric_QMARK_(ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.reader.read_past = (function cljs$reader$read_past(pred,rdr){
var ch = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var G__17485 = ch;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__17485) : pred.call(null,G__17485));
})())){
var G__17486 = cljs.reader.read_char(rdr);
ch = G__17486;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function cljs$reader$read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}

if((delim === ch)){
return cljs.core.persistent_BANG_(a);
} else {
var temp__4124__auto__ = (function (){var G__17494 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__17494) : cljs.reader.macros.call(null,G__17494));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var macrofn = temp__4124__auto__;
var mret = (function (){var G__17495 = rdr;
var G__17496 = ch;
return (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(G__17495,G__17496) : macrofn.call(null,G__17495,G__17496));
})();
var G__17501 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__17501;
continue;
} else {
cljs.reader.unread(rdr,ch);

var o = (function (){var G__17497 = rdr;
var G__17498 = true;
var G__17499 = null;
var G__17500 = recursive_QMARK_;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__17497,G__17498,G__17499,G__17500) : cljs.reader.read.call(null,G__17497,G__17498,G__17499,G__17500));
})();
var G__17502 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__17502;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function cljs$reader$not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function cljs$reader$read_dispatch(rdr,_){
var ch = cljs.reader.read_char(rdr);
var dm = (function (){var G__17508 = ch;
return (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(G__17508) : cljs.reader.dispatch_macros.call(null,G__17508));
})();
if(cljs.core.truth_(dm)){
var G__17509 = rdr;
var G__17510 = _;
return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(G__17509,G__17510) : dm.call(null,G__17509,G__17510));
} else {
var temp__4124__auto__ = (function (){var G__17511 = rdr;
var G__17512 = ch;
return (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(G__17511,G__17512) : cljs.reader.maybe_read_tagged_type.call(null,G__17511,G__17512));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var obj = temp__4124__auto__;
return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function cljs$reader$read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.reader.read_list = (function cljs$reader$read_list(rdr,_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function cljs$reader$read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function cljs$reader$read_map(rdr,_){
var l = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l))){
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function cljs$reader$read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__4099__auto__ = (ch == null);
if(or__4099__auto__){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = cljs.reader.whitespace_QMARK_(ch);
if(or__4099__auto____$1){
return or__4099__auto____$1;
} else {
var G__17518 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__17518) : cljs.reader.macros.call(null,G__17518));
}
}
})())){
cljs.reader.unread(reader,ch);

var s = buffer.toString();
var or__4099__auto__ = cljs.reader.match_number(s);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__17519 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__17520 = cljs.reader.read_char(reader);
buffer = G__17519;
ch = G__17520;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function cljs$reader$read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
var G__17521 = (function (){
buffer.append(cljs.reader.escape_char(buffer,reader));

return buffer;
})()
;
var G__17522 = cljs.reader.read_char(reader);
buffer = G__17521;
ch = G__17522;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__17523 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__17524 = cljs.reader.read_char(reader);
buffer = G__17523;
ch = G__17524;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function cljs$reader$read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char(reader);
if((nch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
var G__17529 = (function (){var G__17527 = buffer;
G__17527.append(nch);

return G__17527;
})();
var G__17530 = cljs.reader.read_char(reader);
buffer = G__17529;
ch = G__17530;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__17531 = (function (){var G__17528 = buffer;
G__17528.append(ch);

return G__17528;
})();
var G__17532 = cljs.reader.read_char(reader);
buffer = G__17531;
ch = G__17532;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function cljs$reader$special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function cljs$reader$read_symbol(reader,initch){
var token = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_((function (){var and__4087__auto__ = (function (){var G__17539 = token;
var G__17540 = "/";
return goog.string.contains(G__17539,G__17540);
})();
if(cljs.core.truth_(and__4087__auto__)){
return !((token.length === (1)));
} else {
return and__4087__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function cljs$reader$read_keyword(reader,initch){
var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function cljs$reader$desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function cljs$reader$wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__17545 = rdr;
var G__17546 = true;
var G__17547 = null;
var G__17548 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__17545,G__17546,G__17547,G__17548) : cljs.reader.read.call(null,G__17545,G__17546,G__17547,G__17548));
})()),sym);
});
});
cljs.reader.throwing_reader = (function cljs$reader$throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function cljs$reader$read_meta(rdr,_){
var m = cljs.reader.desugar_meta((function (){var G__17558 = rdr;
var G__17559 = true;
var G__17560 = null;
var G__17561 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__17558,G__17559,G__17560,G__17561) : cljs.reader.read.call(null,G__17558,G__17559,G__17560,G__17561));
})());
if(cljs.core.map_QMARK_(m)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}

var o = (function (){var G__17562 = rdr;
var G__17563 = true;
var G__17564 = null;
var G__17565 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__17562,G__17563,G__17564,G__17565) : cljs.reader.read.call(null,G__17562,G__17563,G__17564,G__17565));
})();
if((function (){var G__17566 = o;
if(G__17566){
var bit__4773__auto__ = (G__17566.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4773__auto__) || (G__17566.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__17566.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__17566);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__17566);
}
})()){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function cljs$reader$read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function cljs$reader$read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function cljs$reader$read_discard(rdr,_){
var G__17571_17575 = rdr;
var G__17572_17576 = true;
var G__17573_17577 = null;
var G__17574_17578 = true;
(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__17571_17575,G__17572_17576,G__17573_17577,G__17574_17578) : cljs.reader.read.call(null,G__17571_17575,G__17572_17576,G__17573_17577,G__17574_17578));

return rdr;
});
cljs.reader.macros = (function cljs$reader$macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_char;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
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
});
cljs.reader.dispatch_macros = (function cljs$reader$dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader("Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
 * Reads the first object from a PushbackReader. Returns the object read.
 * If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
 */
cljs.reader.read = (function cljs$reader$read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char(reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_(ch)){
var G__17587 = reader;
var G__17588 = eof_is_error;
var G__17589 = sentinel;
var G__17590 = is_recursive;
reader = G__17587;
eof_is_error = G__17588;
sentinel = G__17589;
is_recursive = G__17590;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_(ch)){
var G__17591 = (function (){var G__17583 = reader;
var G__17584 = ch;
return (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(G__17583,G__17584) : cljs.reader.read_comment.call(null,G__17583,G__17584));
})();
var G__17592 = eof_is_error;
var G__17593 = sentinel;
var G__17594 = is_recursive;
reader = G__17591;
eof_is_error = G__17592;
sentinel = G__17593;
is_recursive = G__17594;
continue;
} else {
var f = cljs.reader.macros(ch);
var res = (cljs.core.truth_(f)?(function (){var G__17585 = reader;
var G__17586 = ch;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17585,G__17586) : f.call(null,G__17585,G__17586));
})():((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));
if((res === reader)){
var G__17595 = reader;
var G__17596 = eof_is_error;
var G__17597 = sentinel;
var G__17598 = is_recursive;
reader = G__17595;
eof_is_error = G__17596;
sentinel = G__17597;
is_recursive = G__17598;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
 * Reads one object from the string s
 */
cljs.reader.read_string = (function cljs$reader$read_string(s){
var r = cljs.reader.push_back_reader(s);
return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__17599 = b.append("0");
b = G__17599;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__4087__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__4087__auto__)){
var or__4099__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__4087__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = (function (){var G__17603 = s;
var G__17604 = (10);
return parseInt(G__17603,G__17604);
})();
if(cljs.core.not((function (){var G__17605 = n;
return isNaN(G__17605);
})())){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__17609 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(10),null);
var v = vec__17609;
if(cljs.core.not(v)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4099__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__17610 = months__$1;
var G__17611 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__17610,G__17611) : cljs.reader.days_in_month.call(null,G__17610,G__17611));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4124__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__17613 = temp__4124__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__17626_17638 = cljs.core.seq(form);
var chunk__17627_17639 = null;
var count__17628_17640 = (0);
var i__17629_17641 = (0);
while(true){
if((i__17629_17641 < count__17628_17640)){
var x_17642 = chunk__17627_17639.cljs$core$IIndexed$_nth$arity$2(null,i__17629_17641);
arr.push(x_17642);

var G__17643 = seq__17626_17638;
var G__17644 = chunk__17627_17639;
var G__17645 = count__17628_17640;
var G__17646 = (i__17629_17641 + (1));
seq__17626_17638 = G__17643;
chunk__17627_17639 = G__17644;
count__17628_17640 = G__17645;
i__17629_17641 = G__17646;
continue;
} else {
var temp__4126__auto___17647 = cljs.core.seq(seq__17626_17638);
if(temp__4126__auto___17647){
var seq__17626_17648__$1 = temp__4126__auto___17647;
if(cljs.core.chunked_seq_QMARK_(seq__17626_17648__$1)){
var c__4884__auto___17649 = cljs.core.chunk_first(seq__17626_17648__$1);
var G__17650 = cljs.core.chunk_rest(seq__17626_17648__$1);
var G__17651 = c__4884__auto___17649;
var G__17652 = cljs.core.count(c__4884__auto___17649);
var G__17653 = (0);
seq__17626_17638 = G__17650;
chunk__17627_17639 = G__17651;
count__17628_17640 = G__17652;
i__17629_17641 = G__17653;
continue;
} else {
var x_17654 = cljs.core.first(seq__17626_17648__$1);
arr.push(x_17654);

var G__17655 = cljs.core.next(seq__17626_17648__$1);
var G__17656 = null;
var G__17657 = (0);
var G__17658 = (0);
seq__17626_17638 = G__17655;
chunk__17627_17639 = G__17656;
count__17628_17640 = G__17657;
i__17629_17641 = G__17658;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = (function (){var obj17631 = {};
return obj17631;
})();
var seq__17632_17659 = cljs.core.seq(form);
var chunk__17633_17660 = null;
var count__17634_17661 = (0);
var i__17635_17662 = (0);
while(true){
if((i__17635_17662 < count__17634_17661)){
var vec__17636_17663 = chunk__17633_17660.cljs$core$IIndexed$_nth$arity$2(null,i__17635_17662);
var k_17664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636_17663,(0),null);
var v_17665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636_17663,(1),null);
(obj[cljs.core.name(k_17664)] = v_17665);

var G__17666 = seq__17632_17659;
var G__17667 = chunk__17633_17660;
var G__17668 = count__17634_17661;
var G__17669 = (i__17635_17662 + (1));
seq__17632_17659 = G__17666;
chunk__17633_17660 = G__17667;
count__17634_17661 = G__17668;
i__17635_17662 = G__17669;
continue;
} else {
var temp__4126__auto___17670 = cljs.core.seq(seq__17632_17659);
if(temp__4126__auto___17670){
var seq__17632_17671__$1 = temp__4126__auto___17670;
if(cljs.core.chunked_seq_QMARK_(seq__17632_17671__$1)){
var c__4884__auto___17672 = cljs.core.chunk_first(seq__17632_17671__$1);
var G__17673 = cljs.core.chunk_rest(seq__17632_17671__$1);
var G__17674 = c__4884__auto___17672;
var G__17675 = cljs.core.count(c__4884__auto___17672);
var G__17676 = (0);
seq__17632_17659 = G__17673;
chunk__17633_17660 = G__17674;
count__17634_17661 = G__17675;
i__17635_17662 = G__17676;
continue;
} else {
var vec__17637_17677 = cljs.core.first(seq__17632_17671__$1);
var k_17678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17637_17677,(0),null);
var v_17679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17637_17677,(1),null);
(obj[cljs.core.name(k_17678)] = v_17679);

var G__17680 = cljs.core.next(seq__17632_17671__$1);
var G__17681 = null;
var G__17682 = (0);
var G__17683 = (0);
seq__17632_17659 = G__17680;
chunk__17633_17660 = G__17681;
count__17634_17661 = G__17682;
i__17635_17662 = G__17683;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return (new cljs.core.UUID(uuid));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__17684 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17684) : cljs.core.atom.call(null,G__17684));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (function (){var G__17685 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17685) : cljs.core.atom.call(null,G__17685));
})();
cljs.reader.maybe_read_tagged_type = (function cljs$reader$maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol(rdr,initch);
var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17692 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17692) : cljs.core.deref.call(null,G__17692));
})(),[cljs.core.str(tag)].join(''));
var dfn = (function (){var G__17693 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17693) : cljs.core.deref.call(null,G__17693));
})();
if(cljs.core.truth_(pfn)){
var G__17694 = cljs.reader.read(rdr,true,null,false);
return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__17694) : pfn.call(null,G__17694));
} else {
if(cljs.core.truth_(dfn)){
var G__17695 = tag;
var G__17696 = cljs.reader.read(rdr,true,null,false);
return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__17695,G__17696) : dfn.call(null,G__17695,G__17696));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((function (){var G__17697 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17697) : cljs.core.deref.call(null,G__17697));
})())], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17699 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17699) : cljs.core.deref.call(null,G__17699));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17701 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17701) : cljs.core.deref.call(null,G__17701));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = (function (){var G__17703 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17703) : cljs.core.deref.call(null,G__17703));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = (function (){var G__17705 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17705) : cljs.core.deref.call(null,G__17705));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

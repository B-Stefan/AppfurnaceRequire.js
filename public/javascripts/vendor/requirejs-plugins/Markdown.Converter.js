define(["require","exports"],function(require,exports){var e;return e="object"==typeof exports&&"function"==typeof require?exports:{},function(){function t(e){return e}function n(){return!1}function r(){}function i(){}r.prototype={chain:function(e,n){var r=this[e];if(!r)throw new Error("unknown hook "+e);this[e]=r===t?n:function(e){return n(r(e))}},set:function(e,t){if(!this[e])throw new Error("unknown hook "+e);this[e]=t},addNoop:function(e){this[e]=t},addFalse:function(e){this[e]=n}},e.HookCollection=r,i.prototype={set:function(e,t){this["s_"+e]=t},get:function(e){return this["s_"+e]}},e.Converter=function(){function e(e){return e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(e,t,n,r,i,o){return t=t.toLowerCase(),R.set(t,E(n)),i?r:(o&&D.set(t,o.replace(/"/g,"&quot;")),"")})}function t(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,n),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,n),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,n),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n)}function n(e,t){var n=t;return n=n.replace(/^\n+/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(q.push(n)-1)+"K\n\n"}function o(e,n){e=d(e);var r="<hr />\n";return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,r),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,r),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,r),e=h(e),e=g(e),e=x(e),e=t(e),e=w(e,n)}function a(e){return e=y(e),e=s(e),e=N(e),e=l(e),e=u(e),e=S(e),e=e.replace(/~P/g,"://"),e=E(e),e=b(e),e=e.replace(/  +\n/g," <br>\n")}function s(e){var t=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return e=e.replace(t,function(e){var t=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return t=T(t,"!"==e.charAt(1)?"\\`*_/":"\\`*_")})}function u(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,c),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,c),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,c)}function c(e,t,n,r,i,o,a,s){void 0==s&&(s="");var u=t,c=n.replace(/:\/\//g,"~P"),l=r.toLowerCase(),p=i,d=s;if(""==p)if(""==l&&(l=c.toLowerCase().replace(/ ?\n/g," ")),p="#"+l,void 0!=R.get(l))p=R.get(l),void 0!=D.get(l)&&(d=D.get(l));else{if(!(u.search(/\(\s*\)$/m)>-1))return u;p=""}p=j(p),p=T(p,"*_");var h='<a href="'+p+'"';return""!=d&&(d=f(d),d=T(d,"*_"),h+=' title="'+d+'"'),h+=">"+c+"</a>"}function l(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,p),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,p)}function f(e){return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function p(e,t,n,r,i,o,a,s){var u=t,c=n,l=r.toLowerCase(),p=i,d=s;if(d||(d=""),""==p){if(""==l&&(l=c.toLowerCase().replace(/ ?\n/g," ")),p="#"+l,void 0==R.get(l))return u;p=R.get(l),void 0!=D.get(l)&&(d=D.get(l))}c=T(f(c),"*_[]()"),p=T(p,"*_");var h='<img src="'+p+'" alt="'+c+'"';return d=f(d),d=T(d,"*_"),h+=' title="'+d+'"',h+=" />"}function d(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,t){return"<h1>"+a(t)+"</h1>\n\n"}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,t){return"<h2>"+a(t)+"</h2>\n\n"}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,t,n){var r=t.length;return"<h"+r+">"+a(n)+"</h"+r+">\n\n"})}function h(e){e+="~0";var t=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return M?e=e.replace(t,function(e,t,n){var r=t,i=n.search(/[*+-]/g)>-1?"ul":"ol",o=m(r,i);return o=o.replace(/\s+$/,""),o="<"+i+">"+o+"</"+i+">\n"}):(t=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(t,function(e,t,n,r){var i=t,o=n,a=r.search(/[*+-]/g)>-1?"ul":"ol",s=m(o,a);return s=i+"<"+a+">\n"+s+"</"+a+">\n"})),e=e.replace(/~0/,"")}function m(e,t){M++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var n=I[t],r=new RegExp("(^[ \\t]*)("+n+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+n+")[ \\t]+))","gm"),i=!1;return e=e.replace(r,function(e,t,n,r){var s=r,u=/\n\n$/.test(s),c=u||s.search(/\n{2,}/)>-1;return c||i?s=o(O(s),!0):(s=h(O(s)),s=s.replace(/\n$/,""),s=a(s)),i=u,"<li>"+s+"</li>\n"}),e=e.replace(/~0/g,""),M--,e}function g(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,t,n){var r=t,i=n;return r=_(O(r)),r=A(r),r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,""),r="<pre><code>"+r+"\n</code></pre>","\n\n"+r+"\n\n"+i}),e=e.replace(/~0/,"")}function v(e){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(q.push(e)-1)+"K\n\n"}function y(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,t,n,r){var i=r;return i=i.replace(/^([ \t]*)/g,""),i=i.replace(/[ \t]*$/g,""),i=_(i),i=i.replace(/:\/\//g,"~P"),t+"<code>"+i+"</code>"})}function _(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=T(e,"*_{}[]\\",!1)}function b(e){return e=e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),e=e.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4")}function x(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,t){var n=t;return n=n.replace(/^[ \t]*>[ \t]?/gm,"~0"),n=n.replace(/~0/g,""),n=n.replace(/^[ \t]+$/gm,""),n=o(n),n=n.replace(/(^|\n)/g,"$1  "),n=n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,t){var n=t;return n=n.replace(/^  /gm,"~0"),n=n.replace(/~0/g,"")}),v("<blockquote>\n"+n+"\n</blockquote>")})}function w(e,t){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var n=e.split(/\n{2,}/g),r=[],i=/~K(\d+)K/,o=n.length,s=0;o>s;s++){var u=n[s];i.test(u)?r.push(u):/\S/.test(u)&&(u=a(u),u=u.replace(/^([ \t]*)/g,"<p>"),u+="</p>",r.push(u))}if(!t){o=r.length;for(var s=0;o>s;s++)for(var c=!0;c;)c=!1,r[s]=r[s].replace(/~K(\d+)K/g,function(e,t){return c=!0,q[t]})}return r.join("\n\n")}function E(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function N(e){return e=e.replace(/\\(\\)/g,k),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,k)}function S(e){e=e.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");var t=function(e,t){return'<a href="'+t+'">'+P.plainLinkText(t)+"</a>"};return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,t)}function C(e){return e=e.replace(/~E(\d+)E/g,function(e,t){var n=parseInt(t);return String.fromCharCode(n)})}function O(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}function A(e){if(!/\t/.test(e))return e;var t,n=["    ","   ","  "," "],r=0;return e.replace(/[\n\t]/g,function(e,i){return"\n"===e?(r=i+1,e):(t=(i-r)%4,r=i+1,n[t])})}function j(e){if(!e)return"";var t=e.length;return e.replace(L,function(n,r){return"~D"==n?"%24":":"!=n||r!=t-1&&!/[0-9\/]/.test(e.charAt(r+1))?"%"+n.charCodeAt(0).toString(16):":"})}function T(e,t,n){var r="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(r="\\\\"+r);var i=new RegExp(r,"g");return e=e.replace(i,k)}function k(e,t){var n=t.charCodeAt(0);return"~E"+n+"E"}var P=this.hooks=new r;P.addNoop("plainLinkText"),P.addNoop("preConversion"),P.addNoop("postConversion");var R,D,q,M;this.makeHtml=function(n){if(R)throw new Error("Recursive call to converter.makeHtml");return R=new i,D=new i,q=[],M=0,n=P.preConversion(n),n=n.replace(/~/g,"~T"),n=n.replace(/\$/g,"~D"),n=n.replace(/\r\n/g,"\n"),n=n.replace(/\r/g,"\n"),n="\n\n"+n+"\n\n",n=A(n),n=n.replace(/^[ \t]+$/gm,""),n=t(n),n=e(n),n=o(n),n=C(n),n=n.replace(/~D/g,"$$"),n=n.replace(/~T/g,"~"),n=P.postConversion(n),q=D=R=null,n};var I={ol:"\\d+[.]",ul:"[*+-]"},L=/(?:["'*()[\]:]|~D)/g}}(),new e.Converter});
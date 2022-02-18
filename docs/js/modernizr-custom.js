/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexboxtweener-flexwrap-webp-webpalpha-webpanimation-webplossless_webp_lossless-setclasses !*/
!function(e,n,t){function A(e,n){return typeof e===n}function o(){var e,n,t,o,r,i,a;for(var s in b)if(b.hasOwnProperty(s)){if(e=[],n=b[s],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=A(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)i=e[r],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function r(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var A=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(A,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?C.className.baseVal=n:C.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)Q(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var A=e.split("."),o=Modernizr[A[0]];if(2==A.length&&(o=o[A[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==A.length?Modernizr[A[0]]=n:(!Modernizr[A[0]]||Modernizr[A[0]]instanceof Boolean||(Modernizr[A[0]]=new Boolean(Modernizr[A[0]])),Modernizr[A[0]][A[1]]=n),r([(n&&0!=n?"":"no-")+A.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function a(e,n){return function(){return e.apply(n,arguments)}}function s(e,n,t){var o;for(var r in e)if(e[r]in n)return t===!1?e[r]:(o=n[e[r]],A(o,"function")?a(o,t||n):o);return!1}function l(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(n,t,A){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var r=e.console;if(null!==o)A&&(o=o.getPropertyValue(A));else if(r){var i=r.error?"error":"log";r[i].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[A];return o}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=f(_?"svg":"body"),e.fake=!0),e}function g(e,t,A,o){var r,i,a,s,l="modernizr",u=f("div"),d=c();if(parseInt(A,10))for(;A--;)a=f("div"),a.id=o?o[A]:l+(A+1),u.appendChild(a);return r=f("style"),r.type="text/css",r.id="s"+l,(d.fake?d:u).appendChild(r),d.appendChild(u),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),u.id=l,d.fake&&(d.style.background="",d.style.overflow="hidden",s=C.style.overflow,C.style.overflow="hidden",C.appendChild(d)),i=t(u,e),d.fake?(d.parentNode.removeChild(d),C.style.overflow=s,C.offsetHeight):u.parentNode.removeChild(u),!!i}function m(n,A){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),A))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+p(n[o])+":"+A+")");return r=r.join(" or "),g("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function h(e,n,o,r){function i(){s&&(delete R.style,delete R.modElem)}if(r=A(r,"undefined")?!1:r,!A(o,"undefined")){var a=m(e,o);if(!A(a,"undefined"))return a}for(var s,d,p,c,g,h=["modernizr","tspan","samp"];!R.style&&h.length;)s=!0,R.modElem=f(h.shift()),R.style=R.modElem.style;for(p=e.length,d=0;p>d;d++)if(c=e[d],g=R.style[c],l(c,"-")&&(c=u(c)),R.style[c]!==t){if(r||A(o,"undefined"))return i(),"pfx"==n?c:!0;try{R.style[c]=o}catch(w){}if(R.style[c]!=g)return i(),"pfx"==n?c:!0}return i(),!1}function w(e,n,t,o,r){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return A(n,"string")||A(n,"undefined")?h(a,n,o,r):(a=(e+" "+U.join(i+" ")+i).split(" "),s(a,n,t))}function v(e,n,A){return w(e,t,t,n,A)}var y=[],b=[],B={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){b.push({name:e,fn:n,options:t})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=B,Modernizr=new Modernizr;var Q,C=n.documentElement,_="svg"===C.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;Q=A(e,"undefined")||A(e.call,"undefined")?function(e,n){return n in e&&A(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),B._l={},B.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},B._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,A;for(e=0;e<t.length;e++)(A=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){B.addTest=i}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){i("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){i("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){i("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){i("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){i("webplossless",!1,{aliases:["webp-lossless"]})},e.onload=function(){i("webplossless",1==e.width,{aliases:["webp-lossless"]})},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),Modernizr.addAsyncTest(function(){function e(e,n,t){function A(n){var A=n&&"load"===n.type?1==o.width:!1,r="webp"===e;i(e,r&&A?new Boolean(A):A),t&&t(n)}var o=new Image;o.onerror=A,o.onload=A,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var A=0;A<n.length;A++)e(n[A].name,n[A].uri)})});var x="Moz O ms Webkit",S=B._config.usePrefixes?x.split(" "):[];B._cssomPrefixes=S;var U=B._config.usePrefixes?x.toLowerCase().split(" "):[];B._domPrefixes=U;var T={elem:f("modernizr")};Modernizr._q.push(function(){delete T.elem});var R={style:T.elem.style};Modernizr._q.unshift(function(){delete R.style}),B.testAllProps=w,B.testAllProps=v,Modernizr.addTest("cssgridlegacy",v("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",v("grid-template-rows","none",!0)),Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0)),Modernizr.addTest("flexwrap",v("flexWrap","wrap",!0)),o(),r(y),delete B.addTest,delete B.addAsyncTest;for(var D=0;D<Modernizr._q.length;D++)Modernizr._q[D]();e.Modernizr=Modernizr}(window,document);
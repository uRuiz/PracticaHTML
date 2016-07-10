/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-classlist-cssanimations-inputtypes-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,i,o,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],s=o.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),y.push((a?"":"no-")+s.join("-"))}}function i(e){var t=E.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?E.className.baseVal=t:E.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var a;for(var i in e)if(e[i]in t)return n===!1?e[i]:(a=t[e[i]],r(a,"function")?l(a,n||t):a);return!1}function u(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=t.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function p(e,n,r,a){var i,s,l,c,u="modernizr",f=o("div"),p=d();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=a?a[r]:u+(r+1),f.appendChild(l);return i=o("style"),i.type="text/css",i.id="s"+u,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=c,E.offsetHeight):f.parentNode.removeChild(f),!!s}function m(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(f(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];a--;)i.push("("+f(t[a])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,a,i){function l(){f&&(delete z.style,delete z.modElem)}if(i=r(i,"undefined")?!1:i,!r(a,"undefined")){var c=m(e,a);if(!r(c,"undefined"))return c}for(var f,d,p,h,g,v=["modernizr","tspan","samp"];!z.style&&v.length;)f=!0,z.modElem=o(v.shift()),z.style=z.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],g=z.style[h],u(h,"-")&&(h=s(h)),z.style[h]!==n){if(i||r(a,"undefined"))return l(),"pfx"==t?h:!0;try{z.style[h]=a}catch(y){}if(z.style[h]!=g)return l(),"pfx"==t?h:!0}return l(),!1}function g(e,t,n,a,i){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,a,i):(s=(e+" "+T.join(o+" ")+o).split(" "),c(s,t,n))}function v(e,t,r){return g(e,n,n,t,r)}var y=[],C=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var E=t.documentElement;Modernizr.addTest("classlist","classList"in E);var S="svg"===E.nodeName.toLowerCase();S||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,c(t)}function i(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function o(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var a=n.frag.cloneNode(),o=0,s=r(),l=s.length;l>o;o++)a.createElement(s[o]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function c(e){e||(e=t);var r=i(e);return!C.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var u,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:s,addElements:a};e.html5=C,c(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var w=o("input"),x="search tel url email datetime date month week time datetime-local number range color".split(" "),_={};Modernizr.inputtypes=function(e){for(var r,a,i,o=e.length,s="1)",l=0;o>l;l++)w.setAttribute("type",r=e[l]),i="text"!==w.type&&"style"in w,i&&(w.value=s,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&w.style.WebkitAppearance!==n?(E.appendChild(w),a=t.defaultView,i=a.getComputedStyle&&"textfield"!==a.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,E.removeChild(w)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?w.checkValidity&&w.checkValidity()===!1:w.value!=s)),_[e[l]]=!!i;return _}(x);var N="Moz O ms Webkit",k=b._config.usePrefixes?N.split(" "):[];b._cssomPrefixes=k;var T=b._config.usePrefixes?N.toLowerCase().split(" "):[];b._domPrefixes=T;var j={elem:o("modernizr")};Modernizr._q.push(function(){delete j.elem});var z={style:j.elem.style};Modernizr._q.unshift(function(){delete z.style}),b.testAllProps=g,b.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),a(),i(y),delete b.addTest,delete b.addAsyncTest;for(var F=0;F<Modernizr._q.length;F++)Modernizr._q[F]();e.Modernizr=Modernizr}(window,document);
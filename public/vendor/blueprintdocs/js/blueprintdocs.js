!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([,,,,function(e,t,n){e.exports=n(5)},function(e,t,n){window.ResizeSensor=n(6),n(7);var i=n(8);i.registerLanguage("http",n(9)),i.registerLanguage("json",n(10)),$(document).ready(function(){var e=new StickySidebar(".sidebar",{topSpacing:22,bottomSpacing:0,containerSelector:".content-wrapper",innerWrapperSelector:".sidebar__inner",resizeSensor:!0});$(window).resize(function(){e.updateSticky()}),$("[id^=collapse-]").on("show.bs.collapse",function(){var e=$(this).prev().find("a").data("group-id"),t=$(document.getElementById(e)).offset().top-33;$("html, body").animate({scrollTop:t})}),$("[id^=collapse-]").on("hide.bs.collapse",function(e){var t=$(this).prev().find("a").data("group-id"),n=$(document.getElementById(t)).offset().top-33;$("html, body").animate({scrollTop:n}),($(window).scrollTop()<n-1||$(window).scrollTop()>n+1)&&e.preventDefault()}),$(".tabs").on("click","a",function(e){var t=$(this).attr("href").substring(1),n=$(document.getElementById(t)).offset().top-33;$("html, body").animate({scrollTop:n}),e.preventDefault()}),$(".nav-pills").on("click",".active a",function(e){var t=$(this);e.preventDefault(),window.setTimeout(function(){t.closest(".nav-pills").next(".tab-content").find(".tab-pane").removeClass("active"),t.parent("li").removeClass("active")},0)}),$("pre code").each(function(e,t){i.highlightBlock(t)})})},function(e,t,n){"use strict";var i,r;"undefined"!=typeof window&&window,void 0===(r="function"==typeof(i=function(){if("undefined"==typeof window)return null;var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)};function t(e,t){var n=Object.prototype.toString.call(e),i="[object Array]"===n||"[object NodeList]"===n||"[object HTMLCollection]"===n||"[object Object]"===n||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,r=0,s=e.length;if(i)for(;r<s;r++)t(e[r]);else t(e)}function n(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}var i=function(r,s){function o(){var e,t,n=[];this.add=function(e){n.push(e)},this.call=function(i){for(e=0,t=n.length;e<t;e++)n[e].call(this,i)},this.remove=function(i){var r=[];for(e=0,t=n.length;e<t;e++)n[e]!==i&&r.push(n[e]);n=r},this.length=function(){return n.length}}function a(t,i){if(t)if(t.resizedAttached)t.resizedAttached.add(i);else{t.resizedAttached=new o,t.resizedAttached.add(i),t.resizeSensor=document.createElement("div"),t.resizeSensor.dir="ltr",t.resizeSensor.className="resize-sensor";var r="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;",s="position: absolute; left: 0; top: 0; transition: 0s;";t.resizeSensor.style.cssText=r,t.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+r+'"><div style="'+s+'"></div></div><div class="resize-sensor-shrink" style="'+r+'"><div style="'+s+' width: 200%; height: 200%"></div></div>',t.appendChild(t.resizeSensor);var a=window.getComputedStyle(t),c=a?a.getPropertyValue("position"):null;"absolute"!==c&&"relative"!==c&&"fixed"!==c&&(t.style.position="relative");var l,d,u=t.resizeSensor.childNodes[0],p=u.childNodes[0],f=t.resizeSensor.childNodes[1],h=n(t),g=h.width,v=h.height,b=!0,m=0,w=function(){if(b){var n=0===t.offsetWidth&&0===t.offsetHeight;if(n)return void(m||(m=e(function(){m=0,w()})));b=!1}var i,r;i=t.offsetWidth,r=t.offsetHeight,p.style.width=i+10+"px",p.style.height=r+10+"px",u.scrollLeft=i+10,u.scrollTop=r+10,f.scrollLeft=i+10,f.scrollTop=r+10};t.resizeSensor.resetSensor=w;var E=function(){d=0,l&&(g=h.width,v=h.height,t.resizedAttached&&t.resizedAttached.call(h))},y=function(){h=n(t),(l=h.width!==g||h.height!==v)&&!d&&(d=e(E)),w()},S=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)};S(u,"scroll",y),S(f,"scroll",y),e(w)}}t(r,function(e){a(e,s)}),this.detach=function(e){i.detach(r,e)},this.reset=function(){r.resizeSensor.resetSensor()}};if(i.reset=function(e){t(e,function(e){e.resizeSensor.resetSensor()})},i.detach=function(e,n){t(e,function(e){e&&(e.resizedAttached&&"function"==typeof n&&(e.resizedAttached.remove(n),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached))})},"undefined"!=typeof MutationObserver){var r=new MutationObserver(function(e){for(var t in e)if(e.hasOwnProperty(t))for(var n=e[t].addedNodes,r=0;r<n.length;r++)n[r].resizeSensor&&i.reset(n[r])});document.addEventListener("DOMContentLoaded",function(e){r.observe(document.body,{childList:!0,subtree:!0})})}return i})?i.call(t,n,t,e):i)||(e.exports=r)},function(e,t,n){e.exports=function(){"use strict";var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),t=function(){var t=".stickySidebar",n={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1},i=function(){function i(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.options=i.extend(n,r),this.sidebar="string"==typeof e?document.querySelector(e):e,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this._resizeListeners=[],this.dimensions={translateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(function(e){t[e]=t[e].bind(t)}),this.initialize()}return e(i,[{key:"initialize",value:function(){var e=this;if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){var t=document.createElement("div");for(t.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(t);this.sidebar.firstChild!=t;)t.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){var n=document.querySelectorAll(this.options.containerSelector);if((n=Array.prototype.slice.call(n)).forEach(function(t,n){t.contains(e.sidebar)&&(e.container=t)}),!n.length)throw new Error("The container does not contains on the sidebar.")}"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+t,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}},{key:"handleEvent",value:function(e){this.updateSticky(e)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var e=this.dimensions;e.containerTop=i.offsetRelative(this.container).top,e.containerHeight=this.container.clientHeight,e.containerBottom=e.containerTop+e.containerHeight,e.sidebarHeight=this.sidebarInner.offsetHeight,e.sidebarWidth=this.sidebar.offsetWidth,e.viewportHeight=window.innerHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var e=this.dimensions;e.sidebarLeft=i.offsetRelative(this.sidebar).left,e.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,e.viewportBottom=e.viewportTop+e.viewportHeight,e.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,e.topSpacing=this.options.topSpacing,e.bottomSpacing=this.options.bottomSpacing,"function"==typeof e.topSpacing&&(e.topSpacing=parseInt(e.topSpacing(this.sidebar))||0),"function"==typeof e.bottomSpacing&&(e.bottomSpacing=parseInt(e.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?e.topSpacing<e.lastTopSpacing&&(e.translateY+=e.lastTopSpacing-e.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&e.bottomSpacing<e.lastBottomSpacing&&(e.translateY+=e.lastBottomSpacing-e.bottomSpacing,this._reStyle=!0),e.lastTopSpacing=e.topSpacing,e.lastBottomSpacing=e.bottomSpacing}},{key:"isSidebarFitsViewport",value:function(){return this.dimensions.sidebarHeight<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var e=this.dimensions;if(e.lastViewportTop!==e.viewportTop){var t="down"===this.direction?Math.min:Math.max;e.viewportTop===t(e.viewportTop,e.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}},{key:"getAffixType",value:function(){var e=this.dimensions,t=!1;this._calcDimensionsWithScroll();var n=e.sidebarHeight+e.containerTop,i=e.viewportTop+e.topSpacing,r=e.viewportBottom-e.bottomSpacing;return"up"===this.direction?i<=e.containerTop?(e.translateY=0,t="STATIC"):i<=e.translateY+e.containerTop?(e.translateY=i-e.containerTop,t="VIEWPORT-TOP"):!this.isSidebarFitsViewport()&&e.containerTop<=i&&(t="VIEWPORT-UNBOTTOM"):this.isSidebarFitsViewport()?e.sidebarHeight+i>=e.containerBottom?(e.translateY=e.containerBottom-n,t="CONTAINER-BOTTOM"):i>=e.containerTop&&(e.translateY=i-e.containerTop,t="VIEWPORT-TOP"):e.containerBottom<=r?(e.translateY=e.containerBottom-n,t="CONTAINER-BOTTOM"):n+e.translateY<=r?(e.translateY=r-n,t="VIEWPORT-BOTTOM"):e.containerTop+e.translateY<=i&&(t="VIEWPORT-UNBOTTOM"),e.translateY=Math.max(0,e.translateY),e.translateY=Math.min(e.containerHeight,e.translateY),e.lastViewportTop=e.viewportTop,t}},{key:"_getStyle",value:function(e){if(void 0!==e){var t={inner:{},outer:{}},n=this.dimensions;switch(e){case"VIEWPORT-TOP":t.inner={position:"fixed",top:n.topSpacing,left:n.sidebarLeft-n.viewportLeft,width:n.sidebarWidth};break;case"VIEWPORT-BOTTOM":t.inner={position:"fixed",top:"auto",left:n.sidebarLeft,bottom:n.bottomSpacing,width:n.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":var r=this._getTranslate(0,n.translateY+"px");t.inner=r?{transform:r}:{position:"absolute",top:n.translateY,width:n.sidebarWidth}}switch(e){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":t.outer={height:n.sidebarHeight,position:"relative"}}return t.outer=i.extend({height:"",position:""},t.outer),t.inner=i.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:this._getTranslate()},t.inner),t}}},{key:"stickyPosition",value:function(e){if(!this._breakpoint){e=this._reStyle||e||!1;var n=this.getAffixType(),r=this._getStyle(n);if((this.affixedType!=n||e)&&n){var s="affix."+n.toLowerCase().replace("viewport-","")+t;for(var o in i.eventTrigger(this.sidebar,s),"STATIC"===n?i.removeClass(this.sidebar,this.options.stickyClass):i.addClass(this.sidebar,this.options.stickyClass),r.outer)this.sidebar.style[o]=r.outer[o];for(var a in r.inner){var c="number"==typeof r.inner[a]?"px":"";this.sidebarInner.style[a]=r.inner[a]+c}var l="affixed."+n.toLowerCase().replace("viewport-","")+t;i.eventTrigger(this.sidebar,l)}else this._initialized&&(this.sidebarInner.style.left=r.inner.left);this.affixedType=n}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),i.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,e=n.type,requestAnimationFrame(function(){switch(e){case"scroll":t._calcDimensionsWithScroll(),t.observeScrollDir(),t.stickyPosition();break;case"resize":default:t._widthBreakpoint(),t.calcDimensions(),t.stickyPosition(!0)}t._running=!1}))}},{key:"_setSupportFeatures",value:function(){var e=this.support;e.transform=i.supportTransform(),e.transform3d=i.supportTransform(!0)}},{key:"_getTranslate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+e+", "+t+", "+n+")":!!this.support.translate&&"translate("+e+", "+t+")"}},{key:"destroy",value:function(){window.removeEventListener("resize",this,{caption:!1}),window.removeEventListener("scroll",this,{caption:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+t,this);var e={inner:{},outer:{}};for(var n in e.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},e.outer={height:"",position:""},e.outer)this.sidebar.style[n]=e.outer[n];for(var i in e.inner)this.sidebarInner.style[i]=e.inner[i];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}}],[{key:"supportTransform",value:function(e){var t=!1,n=e?"perspective":"transform",i=n.charAt(0).toUpperCase()+n.slice(1),r=document.createElement("support"),s=r.style;return(n+" "+["Webkit","Moz","O","ms"].join(i+" ")+i).split(" ").forEach(function(e,n){if(void 0!==s[e])return t=e,!1}),t}},{key:"eventTrigger",value:function(e,t,n){try{var i=new CustomEvent(t,{detail:n})}catch(e){var i=document.createEvent("CustomEvent");i.initCustomEvent(t,!0,!0,n)}e.dispatchEvent(i)}},{key:"extend",value:function(e,t){var n={};for(var i in e)void 0!==t[i]?n[i]=t[i]:n[i]=e[i];return n}},{key:"offsetRelative",value:function(e){var t={left:0,top:0};do{var n=e.offsetTop,i=e.offsetLeft;isNaN(n)||(t.top+=n),isNaN(i)||(t.left+=i),e="BODY"===e.tagName?e.parentElement:e.offsetParent}while(e);return t}},{key:"addClass",value:function(e,t){i.hasClass(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)}},{key:"removeClass",value:function(e,t){i.hasClass(e,t)&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}}]),i}();return i}();return window.StickySidebar=t,t}()},function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var t,n=[],i=Object.keys,r={},s={},o=/^(no-?highlight|plain|text)$/i,a=/\blang(?:uage)?-([\w-]+)\b/i,c=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",d={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(e){return e.nodeName.toLowerCase()}function f(e,t){var n=e&&e.exec(t);return n&&0===n.index}function h(e){return o.test(e)}function g(e){var t,n={},i=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return i.forEach(function(e){for(t in e)n[t]=e[t]}),n}function v(e){var t=[];return function e(n,i){for(var r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?i+=r.nodeValue.length:1===r.nodeType&&(t.push({event:"start",offset:i,node:r}),i=e(r,i),p(r).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:r}));return i}(e,0),t}function b(e){if(t&&!e.langApiRestored){for(var n in e.langApiRestored=!0,t)e[n]&&(e[t[n]]=e[n]);(e.contains||[]).concat(e.variants||[]).forEach(b)}}function m(e){function t(e){return e&&e.source||e}function n(n,i){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(i?"g":""))}!function r(s,o){if(s.compiled)return;s.compiled=!0;s.keywords=s.keywords||s.beginKeywords;if(s.keywords){var a={},c=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof s.keywords?c("keyword",s.keywords):i(s.keywords).forEach(function(e){c(e,s.keywords[e])}),s.keywords=a}s.lexemesRe=n(s.lexemes||/\w+/,!0);o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")\\b"),s.begin||(s.begin=/\B|\b/),s.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(s.endRe=n(s.end)),s.terminator_end=t(s.end)||"",s.endsWithParent&&o.terminator_end&&(s.terminator_end+=(s.end?"|":"")+o.terminator_end));s.illegal&&(s.illegalRe=n(s.illegal));null==s.relevance&&(s.relevance=1);s.contains||(s.contains=[]);s.contains=Array.prototype.concat.apply([],s.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return g(e,{variants:null},t)}));return e.cached_variants||e.endsWithParent&&[g(e)]||[e]}("self"===e?s:e)}));s.contains.forEach(function(e){r(e,s)});s.starts&&r(s.starts,o);var l=s.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([s.terminator_end,s.illegal]).map(t).filter(Boolean);s.terminators=l.length?n(function(e,n){for(var i=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,s="",o=0;o<e.length;o++){var a=r,c=t(e[o]);for(o>0&&(s+=n);c.length>0;){var l=i.exec(c);if(null==l){s+=c;break}s+=c.substring(0,l.index),c=c.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?s+="\\"+String(Number(l[1])+a):(s+=l[0],"("==l[0]&&r++)}}return s}(l,"|"),!0):{exec:function(){return null}}}(e)}function w(e,t,n,i){function s(e,t){var n=h.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function o(e,t,n,i){var r=i?"":d.classPrefix,s='<span class="'+r,o=n?"":l;return(s+=e+'">')+t+o}function a(){y+=null!=v.subLanguage?function(){var e="string"==typeof v.subLanguage;if(e&&!r[v.subLanguage])return u(S);var t=e?w(v.subLanguage,S,!0,b[v.subLanguage]):E(S,v.subLanguage.length?v.subLanguage:void 0);v.relevance>0&&(T+=t.relevance);e&&(b[v.subLanguage]=t.top);return o(t.language,t.value,!1,!0)}():function(){var e,t,n,i;if(!v.keywords)return u(S);i="",t=0,v.lexemesRe.lastIndex=0,n=v.lexemesRe.exec(S);for(;n;)i+=u(S.substring(t,n.index)),(e=s(v,n))?(T+=e[1],i+=o(e[0],u(n[0]))):i+=u(n[0]),t=v.lexemesRe.lastIndex,n=v.lexemesRe.exec(S);return i+u(S.substr(t))}(),S=""}function c(e){y+=e.className?o(e.className,"",!0):"",v=Object.create(e,{parent:{value:v}})}function p(e,t){if(S+=e,null==t)return a(),0;var i=function(e,t){var n,i;for(n=0,i=t.contains.length;n<i;n++)if(f(t.contains[n].beginRe,e))return t.contains[n].endSameAsBegin&&(t.contains[n].endRe=(r=t.contains[n].beginRe.exec(e)[0],new RegExp(r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),t.contains[n];var r}(t,v);if(i)return i.skip?S+=t:(i.excludeBegin&&(S+=t),a(),i.returnBegin||i.excludeBegin||(S=t)),c(i),i.returnBegin?0:t.length;var r=function e(t,n){if(f(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(v,t);if(r){var s=v;s.skip?S+=t:(s.returnEnd||s.excludeEnd||(S+=t),a(),s.excludeEnd&&(S=t));do{v.className&&(y+=l),v.skip||v.subLanguage||(T+=v.relevance),v=v.parent}while(v!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),c(r.starts)),s.returnEnd?0:t.length}if(function(e,t){return!n&&f(t.illegalRe,e)}(t,v))throw new Error('Illegal lexeme "'+t+'" for mode "'+(v.className||"<unnamed>")+'"');return S+=t,t.length||1}var h=_(e);if(!h)throw new Error('Unknown language: "'+e+'"');m(h);var g,v=i||h,b={},y="";for(g=v;g!==h;g=g.parent)g.className&&(y=o(g.className,"",!0)+y);var S="",T=0;try{for(var R,O,N=0;v.terminators.lastIndex=N,R=v.terminators.exec(t);)O=p(t.substring(N,R.index),R[0]),N=R.index+O;for(p(t.substr(N)),g=v;g.parent;g=g.parent)g.className&&(y+=l);return{relevance:T,value:y,language:e,top:v}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:u(t)};throw e}}function E(e,t){t=t||d.languages||i(r);var n={relevance:0,value:u(e)},s=n;return t.filter(_).filter(R).forEach(function(t){var i=w(t,e,!1);i.language=t,i.relevance>s.relevance&&(s=i),i.relevance>n.relevance&&(s=n,n=i)}),s.language&&(n.second_best=s),n}function y(e){return d.tabReplace||d.useBR?e.replace(c,function(e,t){return d.useBR&&"\n"===e?"<br>":d.tabReplace?t.replace(/\t/g,d.tabReplace):""}):e}function S(e){var t,i,r,o,c,l=function(e){var t,n,i,r,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",n=a.exec(s))return _(n[1])?n[1]:"no-highlight";for(s=s.split(/\s+/),t=0,i=s.length;t<i;t++)if(h(r=s[t])||_(r))return r}(e);h(l)||(d.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,c=t.textContent,r=l?w(l,c,!0):E(c),(i=v(t)).length&&((o=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,t,i){var r=0,s="",o=[];function a(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function c(e){s+="<"+p(e)+n.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+u(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){s+="</"+p(e)+">"}function d(e){("start"===e.event?c:l)(e.node)}for(;e.length||t.length;){var f=a();if(s+=u(i.substring(r,f[0].offset)),r=f[0].offset,f===e){o.reverse().forEach(l);do{d(f.splice(0,1)[0]),f=a()}while(f===e&&f.length&&f[0].offset===r);o.reverse().forEach(c)}else"start"===f[0].event?o.push(f[0].node):o.pop(),d(f.splice(0,1)[0])}return s+u(i.substr(r))}(i,v(o),c)),r.value=y(r.value),e.innerHTML=r.value,e.className=function(e,t,n){var i=t?s[t]:n,r=[e.trim()];e.match(/\bhljs\b/)||r.push("hljs");-1===e.indexOf(i)&&r.push(i);return r.join(" ").trim()}(e.className,l,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function T(){if(!T.called){T.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,S)}}function _(e){return e=(e||"").toLowerCase(),r[e]||r[s[e]]}function R(e){var t=_(e);return t&&!t.disableAutodetect}e.highlight=w,e.highlightAuto=E,e.fixMarkup=y,e.highlightBlock=S,e.configure=function(e){d=g(d,e)},e.initHighlighting=T,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",T,!1),addEventListener("load",T,!1)},e.registerLanguage=function(t,n){var i=r[t]=n(e);b(i),i.aliases&&i.aliases.forEach(function(e){s[e]=t})},e.listLanguages=function(){return i(r)},e.getLanguage=_,e.autoDetection=R,e.inherit=g,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,i){var r=e.inherit({className:"comment",begin:t,end:n,contains:[]},i||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(t)}()},function(e,t){e.exports=function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],illegal:"\\S",contains:[{begin:"^"+t,end:"$",contains:[{className:"number",begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+t+"$",returnBegin:!0,end:"$",contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{begin:t},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}},function(e,t){e.exports=function(e){var t={literal:"true false null"},n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],i={end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:t},r={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(i,{begin:/:/})],illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[e.inherit(i)],illegal:"\\S"};return n.splice(n.length,0,r,s),{contains:n,keywords:t,illegal:"\\S"}}}]);
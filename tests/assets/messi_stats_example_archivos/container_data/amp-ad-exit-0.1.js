;
(self.AMP=self.AMP||[]).push({m:0,v:"2208242209000",n:"amp-ad-exit",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function e(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,r){if(r&&("object"===o(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return t(n)}function a(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,e=i(n);if(t){var o=i(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return u(this,r)}}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function f(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var s,l=Object.prototype,v=(l.hasOwnProperty,l.toString);function h(n){var t=Object.create(null);return n&&Object.assign(t,n),t}function p(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,e=n.stack,i=new Error(r);for(var o in n)i[o]=n[o];return i.stack=e,i}function d(n){for(var t,r=null,e="",i=f(arguments,!0);!(t=i()).done;){var o=t.value;o instanceof Error&&!r?r=p(o):(e&&(e+=" "),e+=o)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function m(n){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n)}function b(n){return JSON.parse(n)}var y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function g(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(n)}catch(n){return t}}function O(n){var t=(n||self).location;return function(n){var t,r=h();if(!n)return r;for(;t=y.exec(n);){var e=g(t[1],t[1]),i=t[2]?g(t[2].replace(/\+/g," "),t[2]):"";r[e]=i}return r}(t.originalHash||t.hash)}var j="";function I(n){var t;return j||(j=(null===(t=n.AMP_CONFIG)||void 0===t?void 0:t.v)||"01".concat("2208242209000")),j}function w(n,t){var r=t||O(n);return["1","actions","amp","amp4ads","amp4email"].includes(r.development)||!!n.AMP_DEV_MODE}function S(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var R=self.__AMP_LOG;function A(n,t){throw new Error("failed to call initLogConstructor")}function T(n){return R.user||(R.user=_()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(R.user.win,n)?R.userForEmbed||(R.userForEmbed=_()):R.user}function _(n){return A()}function E(){return R.dev||(R.dev=A())}function x(n,t,r,e,i,o,u,a,c,f,s){return n}function N(n,t,r,e,i,o,u,a,c,f,s){return T().assert(n,t,r,e,i,o,u,a,c,f,s)}var C=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function P(n,t,r,e){var i=D(n),o=F(i);!function(n,t,r,e,i,o){var u=G(n),a=u[r];a||(a=u[r]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=t,a.sharedInstance=!1,a.resolve&&M(n,r))}(o,i,t,r),e&&M(o,t)}function U(n,t,r){!function(n,t,r){var e=G(n),i=e[t];i?i.reject&&i.reject(r):(e[t]=K(),e[t].reject(r))}(F(D(n)),t,r)}function k(n,t){return function(n,t){var r=function(n,t){var r=G(n)[t];return r?r.promise?r.promise:(M(n,t),r.promise=Promise.resolve(r.obj)):null}(n,t);if(r)return r;var e=G(n);return e[t]=K(),e[t].promise}(F(n),t)}function L(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}function D(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,function(n,t){return M(n=L(n),"ampdoc")}(t)).getAmpDoc(n):n;var t,r}function F(n){var t=D(n);return t.isSingleDoc()?t.win:t}function M(n,t){x(B(n,t));var r=G(n)[t];return r.obj||(x(r.ctor),x(r.context),r.obj=new r.ctor(r.context),x(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function G(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}function B(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}function K(){var n=new C,t=n.promise,r=n.reject,e=n.resolve;return t.catch((function(){})),{obj:null,promise:t,resolve:e,reject:r,context:null,ctor:null}}var J="host-visibility",V="host-fullscreen",z="host-exit",X=function(){function n(){}return n.isAvailable=function(n){return!!(t=n,D(t)).getHeadNode().querySelector("script[host-service]");var t},n.visibilityForDoc=function(n){return k(n,J)},n.installVisibilityServiceForDoc=function(n,t){P(n,J,t,!0)},n.rejectVisibilityServiceForDoc=function(n,t){U(n,J,t)},n.fullscreenForDoc=function(n){return k(n,V)},n.installFullscreenServiceForDoc=function(n,t){P(n,V,t,!0)},n.rejectFullscreenServiceForDoc=function(n,t){U(n,V,t)},n.exitForDoc=function(n){return k(n,z)},n.installExitServiceForDoc=function(n,t){P(n,z,t,!0)},n.rejectExitServiceForDoc=function(n,t){U(n,z,t)},n}(),Y="clickDelay",$="clickLocation",H="inactiveElement",Z=function(){function n(n,t){this.name=n,this.type=t}var t=n.prototype;return t.filter=function(n){},t.onLayoutMeasure=function(){},n}();function q(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function Q(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){S(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}var W={"bg":"https://tpc.googlesyndication.com/b4a/b4a-runner.html","moat":"https://z.moatads.com/ampanalytics093284/iframe.html"},nn=(Q(Q({},W),{},{"bg":"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"}),W);function tn(n,t,r){if(N("string"==typeof t.finalUrl,"finalUrl of target '%s' must be a string",n),t.filters&&t.filters.forEach((function(n){N(r.filters[n],"filter '%s' not defined",n)})),t.vars){var e=/^_[a-zA-Z0-9_-]+$/;for(var i in t.vars)N(e.test(i),"'%s' must match the pattern '%s'",i,e)}}function rn(n){return T().assertString(nn[n],"Unknown or invalid vendor ".concat(n,", ")+"note that vendor must use transport: iframe")}var en="amp-ad-exit",on=function(n){e(r,n);var t=a(r);function r(n,r,e){var i;return i=t.call(this,n,r.type),N(r.type==Y&&"number"==typeof r.delay&&r.delay>0,"Invalid ClickDelay spec"),i.spec=r,i.intervalStart=Date.now(),r.startTimingEvent&&(e.performance&&e.performance.timing?null==e.performance.timing[r.startTimingEvent]?E().warn(en,"Invalid performance timing event type ".concat(r.startTimingEvent)+", falling back to now"):i.intervalStart=e.performance.timing[r.startTimingEvent]:E().warn(en,"Browser does not support performance timing, falling back to now")),i}return r.prototype.filter=function(){return Date.now()-this.intervalStart>=this.spec.delay},r}(Z);function un(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:Y,delay:n,startTimingEvent:t}}var an=function(n){e(r,n);var t=a(r);function r(n,r,e){var i;return i=t.call(this,n,r.type),N(function(n){return!(n.type!=$||void 0!==n.left&&"number"!=typeof n.left||void 0!==n.right&&"number"!=typeof n.right||void 0!==n.top&&"number"!=typeof n.top||void 0!==n.bottom&&"number"!=typeof n.bottom||void 0!==n.relativeTo&&"string"!=typeof n.relativeTo)}(r),"Invaid ClickLocation spec"),i.lN=r.left||0,i.vN=r.right||0,i.hN=r.top||0,i.pN=r.bottom||0,i.dN=r.relativeTo,i.mN=e,i.bN={top:0,right:0,bottom:0,left:0},i}var i=r.prototype;return i.filter=function(n){return n.clientX>=this.bN.left&&n.clientX<=this.bN.right&&n.clientY>=this.bN.top&&n.clientY<=this.bN.bottom},i.onLayoutMeasure=function(){var n=this;this.mN.getVsync().measure((function(){var t=n.mN.win;if(n.dN){var r=t.document.querySelector(n.dN);N(r,"relativeTo element ".concat(n.dN," not found."));var e=r.getBoundingClientRect();n.bN.left=e.left,n.bN.top=e.top,n.bN.bottom=e.bottom,n.bN.right=e.right}else n.bN.left=0,n.bN.top=0,n.bN.bottom=t.innerHeight,n.bN.right=t.innerWidth;n.bN.left+=n.lN,n.bN.top+=n.hN,n.bN.right-=n.vN,n.bN.bottom-=n.pN}))},r}(Z),cn=function(n){e(r,n);var t=a(r);function r(n,r){var e;return e=t.call(this,n,r.type),N(function(n){return n.type==H&&"string"==typeof n.selector}(r),"Invalid InactiveElementspec"),e.yN=r.selector,e}return r.prototype.filter=function(n){var t,r,e;return t=n.target,r=this.yN,!((e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector)&&e.call(t,r))},r}(Z);function fn(n,t,r){switch(t.type){case Y:return new on(n,t,r.win);case $:return new an(n,t,r);case H:return new cn(n,t);default:return}}function sn(n,t,r,e){var i,o,u;try{i=n.open(t,r,e)}catch(n){E().error("DOM","Failed to open url on target: ",r,n)}return!i&&"_top"!=r&&("number"!=typeof u&&(u=0),u+"noopener".length>(o=e||"").length||-1===o.indexOf("noopener",u))&&(i=n.open(t,"_top")),i}var ln,vn,hn=function(){function n(n){this.dr=n,this.pr=0,this.mr=0,this.yr=h()}var t=n.prototype;return t.has=function(n){return!!this.yr[n]},t.get=function(n){var t=this.yr[n];if(t)return t.access=++this.mr,t.payload},t.put=function(n,t){this.has(n)||this.pr++,this.yr[n]={payload:t,access:this.mr},this.wr()},t.wr=function(){if(!(this.pr<=this.dr)){var n,t=this.yr,r=this.mr+1;for(var e in t){var i=t[e].access;i<r&&(r=i,n=e)}void 0!==n&&(delete t[n],this.pr--)}},n}();function pn(n,t){return ln||(ln=self.document.createElement("a"),vn=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new hn(100))),function(n,t,r){if(r&&r.has(t))return r.get(t);n.href=t,n.protocol||(n.href=n.href);var e,i={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),e=n.origin&&"null"!=n.origin?n.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=e;var o=i;return r&&r.put(t,o),o}(ln,n,t?null:vn)}new Set(["c","v","a","ad"]);var dn="amp-ad-exit",mn=function(n){e(i,n);var r=a(i);function i(n){var e;return(e=r.call(this,n)).ge={},e.gN={},e.ON=[],e.jN={beacon:!0,image:!0},e.IN={},e.registerAction("exit",e.exit.bind(t(e))),e.registerAction("setVariable",e.setVariable.bind(t(e)),1),e.wN={},e.vb=null,e.SN=null,e.RN={},e.AN=e.detectAttributionReportingSupport(),e}var u=i.prototype;return u.exit=function(n){var t,r=this,e=n.args,i=n.event;N("variable"in e!="target"in e,"One and only one of 'target' and 'variable' must be specified"),"variable"in e?((t=this.gN[e.variable])||(t=e.default),N(t,"Variable target not found, variable:'".concat(e.variable,"', default:'").concat(e.default,"'")),delete e.default):t=e.target;var o=this.ge[t];if(N(o,"Exit target not found: '".concat(t,"'")),N(i,"Unexpected null event"),(i=i).preventDefault(),this.TN(this.ON,i)&&this.TN(o.filters,i)){var u=this._N(e,i,o);o.trackingUrls&&o.trackingUrls.map(u).forEach((function(n){return r.EN(n)}));var a=u(o.finalUrl);if(X.isAvailable(this.getAmpDoc()))X.exitForDoc(this.getAmpDoc()).then((function(n){return n.openUrl(a)})).catch((function(n){E().fine(dn,"ExitServiceError - fallback="+n.fallback),n.fallback&&sn(r.win,a,"_blank")}));else{var c=o.behaviors&&o.behaviors.clickTarget&&"_top"==o.behaviors.clickTarget?"_top":"_blank";sn(this.win,a,c,o.windowFeatures)}}},u.setVariable=function(n){var t=n.args;N(this.ge[t.target],"Exit target not found: '".concat(t.target,"'")),this.gN[t.name]=t.target},u._N=function(n,t,r){var e,i,o,u=this,a={"ATTRIBUTION_REPORTING_STATUS":function(){return function(n,t){var r,e;return null!=t&&null!==(r=t.behaviors)&&void 0!==r&&r.browserAdConversion&&n?3:null!=t&&null!==(e=t.behaviors)&&void 0!==e&&e.browserAdConversion?2:1}(u.AN,r)},"CLICK_X":function(){return t.clientX},"CLICK_Y":function(){return t.clientY}},c=(e=this.element,i="url-replace",B(o=F(D(e)),i)?M(o,i):null),f={"ATTRIBUTION_REPORTING_STATUS":!0,"CLICK_X":!0,"CLICK_Y":!0,"RANDOM":!0,"UACH":!0};if(r.vars){var s=function(t){if("_"!=t[0])return"continue";var e=r.vars[t];if(!e)return"continue";a[t]=function(){if(e.iframeTransportSignal){var r=c.expandStringSync(e.iframeTransportSignal,{"IFRAME_TRANSPORT_SIGNAL":function(n,t){if(!n||!t)return"";var r=u.wN[n];return r&&t in r?r[t]:void 0}});if(e.iframeTransportSignal=="IFRAME_TRANSPORT_SIGNAL".concat(r))E().error(dn,"Invalid IFRAME_TRANSPORT_SIGNAL format:"+r+" (perhaps there is a space after a comma?)");else if(""!=r)return r}return t in n?n[t]:e.defaultValue},f[t]=!0};for(var l in r.vars)s(l)}return function(n){return c.expandUrlSync(n,a,f)}},u.EN=function(n){T().fine(dn,"pinging ".concat(n)),this.jN.beacon&&this.win.navigator.sendBeacon&&this.win.navigator.sendBeacon(n,"")||this.jN.image&&(this.win.document.createElement("img").src=n)},u.TN=function(n,t){return n.every((function(n){var r=n.filter(t);return T().info(dn,"Filter '".concat(n.name,"': ").concat(r?"pass":"fail")),r}))},u.buildCallback=function(){var n=this;this.element.setAttribute("aria-hidden","true"),this.ON.push(fn("minDelay",un(1e3),this)),this.ON.push(fn("carouselBtns",{type:H,selector:".amp-carousel-button"},this));var t=this.element.children;N(1==t.length,"The tag should contain exactly one <script> child.");var r,e,i,u=t[0];N("SCRIPT"==(r=u).tagName&&"APPLICATION/JSON"==(null===(e=r.getAttribute("type"))||void 0===e?void 0:e.toUpperCase()),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');try{var a,c=function(n){return N("object"==o(n)),n.filters?function(n){var t=[Y,$,H];for(var r in n)N("object"==o(n[r]),"Filter specification '%s' is malformed",r),N(-1!=t.indexOf(n[r].type),"Supported filters: "+t.join(", "))}(n.filters):n.filters={},n.transport?function(n){for(var t in n)N("beacon"==t||"image"==t,"Unknown transport option: '".concat(t,"'")),N("boolean"==typeof n[t])}(n.transport):n.transport={},function(n,t){for(var r in N("object"==o(n),"'targets' must be an object"),n)tn(r,n[r],t)}(n.targets,n),n}(b(u.textContent));for(var f in i=c.options,"[object Object]"===v.call(i)&&"string"==typeof c.options.startTimingEvent&&(a=c.options.startTimingEvent,this.ON.splice(0,1,x(fn("minDelay",un(1e3,c.options.startTimingEvent),this)))),c.filters){var s=c.filters[f];s.type==Y&&(s.startTimingEvent=s.startTimingEvent||a),this.IN[f]=fn(f,s,this)}for(var l in c.targets){var h,p=c.targets[l];for(var d in this.ge[l]={finalUrl:p.finalUrl,trackingUrls:p.trackingUrls||[],vars:p.vars||{},filters:(p.filters||[]).map((function(t){return n.IN[t]})).filter(Boolean),behaviors:p.behaviors||{}},this.AN&&(this.ge[l].windowFeatures=this.xN(null==p||null===(h=p.behaviors)||void 0===h?void 0:h.browserAdConversion)),p.vars)if(p.vars[d].iframeTransportSignal){var m=p.vars[d].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(m&&!(m.length<2)){var y=m[1],g=pn(rn(y)).origin;this.RN[g]=this.RN[g]||y}}}this.jN.beacon=!1!==c.transport.beacon,this.jN.image=!1!==c.transport.image}catch(n){throw this.user().error(dn,"Invalid JSON config",n),n}this.NN()},u.detectAttributionReportingSupport=function(){var n;return null===(n=this.win.document.featurePolicy)||void 0===n?void 0:n.allowsFeature("attribution-reporting")},u.xN=function(n){if(n&&Object.keys(n)){for(var t=["noopener"],r=0,e=Object.keys(n);r<e.length;r++){var i=e[r];t.push("".concat(i.toLowerCase(),"=").concat(n[i]))}return t.join(",")}},u.CN=function(){return function(n,t){try{var r=function(n,t){var r=(n.ownerDocument||n).defaultView,e=t||L(r);if(r&&r!=e&&L(r)==e)try{return r.frameElement}catch(n){}return null}(n,t).parentElement;if("AMP-AD"==r.nodeName)return String(r.getResourceId())}catch(n){}return null}(this.element,L(this.win))},u.resumeCallback=function(){this.NN()},u.unlayoutCallback=function(){return this.vb&&(this.vb(),this.vb=null),n.prototype.unlayoutCallback.call(this)},u.NN=function(){var n,t,r,e,i,o,u,a,c=this;"inabox"!=(n=self,n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(n){return{localDev:!1,development:w(n,O(n)),esm:!1,test:!1,rtvVersion:I(n),ssrReady:!1}}(n)).runtime&&(this.SN=this.SN||this.CN(),this.SN?(x(!this.vb),this.vb=(t=this.getAmpDoc().win,r="message",e=void 0,i=t,o=function(n){if(c.RN[n.origin]){var t=function(n){if(!function(n){return"string"==typeof n&&n.startsWith("amp-")&&-1!=n.indexOf("{")}(n))return null;var t=n.indexOf("{");return function(n,t){try{return b(n)}catch(n){return null==t||t(n),null}}(n.substr(t),(function(t){!function(n){var t=d.apply(null,arguments);setTimeout((function(){throw m(t),t}))}(new Error("MESSAGING: Failed to parse message: ".concat(n,"\n").concat(t.message)))}))}(function(n){return n.data}(n));t&&"iframe-transport-response"==t.type&&(c.PN(t,n.origin),t.creativeId==c.SN&&(c.wN[t.vendor]=t.message))}},u=function(n){try{return o(n)}catch(n){var t,r;throw null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n),n}},a=function(){if(void 0!==s)return s;s=!1;try{var n={get capture(){return s=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return s}(),i.addEventListener(r,u,!!a&&e),function(){null==i||i.removeEventListener(r,u,!!a&&e),o=null,i=null,u=null})):T().warn(dn,"No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case."))},u.PN=function(n,t){N(n.message,"Received empty response from 3p analytics frame"),N(n.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),N(n.vendor,"Received malformed message from 3p analytics frame: vendor missing");var r=pn(rn(n.vendor));N(r&&r.origin==t,"Invalid origin for vendor "+"".concat(n.vendor,": ").concat(t))},u.isLayoutSupported=function(n){return!0},u.onLayoutMeasure=function(){for(var n in this.IN)this.IN[n].onLayoutMeasure()},i}(n.BaseElement);n.registerElement(dn,mn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-ad-exit-0.1.js.map
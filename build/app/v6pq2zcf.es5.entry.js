var __generator=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};App.loadBundle("v6pq2zcf",["exports","./chunk-5f7274bf.js"],function(t,e){var n=window.App.h,o=function(){function t(){}return t.prototype.render=function(){return n("header",null,n("nav",{class:"column"},n("stencil-route-link",{url:"/top"},n("img",{src:"../../assets/icon/icon.png"})),n("stencil-route-link",{url:"/top",activeClass:"active-link"},"Top"),n("stencil-route-link",{url:"/new",activeClass:"active-link"},"New"),n("stencil-route-link",{url:"/show",activeClass:"active-link"},"Show"),n("stencil-route-link",{url:"/ask",activeClass:"active-link"},"Ask"),n("stencil-route-link",{url:"/job",activeClass:"active-link"},"Jobs"),n("a",{href:"#",class:"github-link"},n("img",{src:"../../assets/GitHub-Mark.png",class:"mobile-only"}),n("span",{class:"desktop-only"},"Code on GitHub!"))))},Object.defineProperty(t,"is",{get:function(){return"app-header"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".column{margin:0 auto;width:100%}.mobile-only{display:inline-block}.desktop-only{display:none}\@media screen and (min-width:800px){.column{max-width:800px}.mobile-only{display:none}.desktop-only{display:inline-block}}header{background:var(--primary-color);color:#fff;height:56px;width:100%;position:fixed;top:0;left:0;z-index:900}header,header nav{display:-ms-flexbox;display:flex}header nav{-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;padding:0 10px}stencil-route-link{margin-right:15px}a{color:#dcdcdc;text-decoration:none;-webkit-transition:color .2s;transition:color .2s}a:hover{color:#fff}a img{margin-top:3px}.active-link{color:#fff;font-weight:700}.github-link{margin-left:auto}img{height:40px;width:40px}\@media screen and (min-width:800px){stencil-route-link{margin-right:25px}}"},enumerable:!0,configurable:!0}),t}(),r=function(){function t(){}return t.prototype.render=function(){return n("div",null,n("app-header",null),n("main",null,n("stencil-router",null,n("stencil-route-switch",{scrollTopOffset:0},n("stencil-route",{url:"/",routeRender:function(){return n("stencil-router-redirect",{url:"/top"})},exact:!0}),n("stencil-route",{url:"/item/:id",component:"app-item"}),n("stencil-route",{url:"/user/:id",component:"app-user"}),n("stencil-route",{url:"/:stories/:page?",component:"app-stories"})))))},Object.defineProperty(t,"is",{get:function(){return"app-root"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}(),i=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})},a=function(){function t(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}return t.prototype.computeMatch=function(t){var n=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!n)return this.previousMatch=this.match,this.match=e.matchPath(t.pathname,{path:this.url,exact:this.exact,strict:!0})},t.prototype.loadCompleted=function(){return i(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t={},this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!e.matchesAreEqual(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t),[2]})})},t.prototype.componentDidUpdate=function(){return i(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:return t.sent(),[2]}})})},t.prototype.componentDidLoad=function(){return i(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:return t.sent(),[2]}})})},t.prototype.render=function(){if(!this.match||!this.history)return null;var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?n(this.component,Object.assign({},t)):void 0},Object.defineProperty(t,"is",{get:function(){return"stencil-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:!0,configurable:!0}),t}();e.ActiveRouter.injectProps(a,["location","history","historyType","routeViewsUpdated"]);function s(t){return"stencil-route"===t.tagName.toLowerCase()}var c=function(){function t(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[]}return t.prototype.componentWillLoad=function(){null!=this.location&&this.regenerateSubscribers(this.location)},t.prototype.regenerateSubscribers=function(t){return n=this,o=void 0,i=function(){var n,o,r=this;return __generator(this,function(i){return null==t?[2]:(n=-1,this.subscribers=Array.prototype.slice.call(this.el.children).filter(s).map(function(o,r){var i=e.matchPath(t.pathname,{path:o.url,exact:o.exact,strict:!0});return i&&-1===n&&(n=r),{el:o,match:i}}),-1===n?[2]:this.activeIndex===n?(this.subscribers[n].el.match=this.subscribers[n].match,[2]):(this.activeIndex=n,o=this.subscribers[this.activeIndex],this.scrollTopOffset&&(o.el.scrollTopOffset=this.scrollTopOffset),o.el.group=this.group,o.el.match=o.match,o.el.componentUpdated=function(t){r.queue.write(function(){r.subscribers.forEach(function(t,e){if(t.el.componentUpdated=void 0,e===r.activeIndex)return t.el.style.display="";r.scrollTopOffset&&(t.el.scrollTopOffset=r.scrollTopOffset),t.el.group=r.group,t.el.match=null,t.el.style.display="none"})}),r.routeViewsUpdated&&r.routeViewsUpdated(Object.assign({scrollTopOffset:r.scrollTopOffset},t))},[2]))})},new((r=void 0)||(r=Promise))(function(t,e){function a(t){try{c(i.next(t))}catch(t){e(t)}}function s(t){try{c(i.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(a,s)}c((i=i.apply(n,o||[])).next())});var n,o,r,i},t.prototype.render=function(){return n("slot",null)},Object.defineProperty(t,"is",{get:function(){return"stencil-route-switch"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}},enumerable:!0,configurable:!0}),t}();function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function u(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}e.ActiveRouter.injectProps(c,["location","routeViewsUpdated"]);var h=function(){var t,e=[];return{setPrompt:function(e){return u(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,r){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(u(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:function(t){var n=!0,o=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n&&t.apply(void 0,e)};return e.push(o),function(){n=!1,e=e.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},p=function(t){void 0===t&&(t="scrollPositions");var n=new Map;if(e.storageAvailable("sessionStorage")){var o=window.sessionStorage.getItem(t);n=o?new Map(JSON.parse(o)):n}function r(t,o){if(n.set(t,o),e.storageAvailable("sessionStorage")){var r=[];n.forEach(function(t,e){r.push([e,t])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(r))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:r,get:function(t){return n.get(t)},has:function(t){return n.has(t)},capture:function(t){r(t,[window.scrollX,window.scrollY])}}},f=function(){try{return window.history.state||{}}catch(t){return{}}},d={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+e.stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:e.stripLeadingSlash,decodePath:e.addLeadingSlash},slash:{encodePath:e.addLeadingSlash,decodePath:e.addLeadingSlash}},y=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},g=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};function v(t,e){var n=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})}var m={browser:function(t){void 0===t&&(t={}),l(e.canUseDOM,"Browser history needs a DOM");var n=window.history,o=e.supportsHistory(),r=!e.supportsPopStateOnHashChange(),i=p(),a=null!=t.forceRefresh&&t.forceRefresh,s=null!=t.getUserConfirmation?t.getUserConfirmation:e.getConfirmation,c=null!=t.keyLength?t.keyLength:6,d=t.basename?e.stripTrailingSlash(e.addLeadingSlash(t.basename)):"",y=function(t){var n=(t=t||{}).key,o=t.state,r=window.location,i=r.pathname+r.search+r.hash;return u(!d||e.hasBasename(i,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+d+'".'),d&&(i=e.stripBasename(i,d)),e.createLocation(i,o,n||e.createKey(c))},g=h(),v=function(t){i.capture(U.location.key),Object.assign(U,t),U.location.scrollPosition=i.get(U.location.key),U.length=n.length,g.notifyListeners(U.location,U.action)},m=function(t){e.isExtraneousPopstateEvent(t)||P(y(t.state))},b=function(){P(y(f()))},w=!1,P=function(t){w?(w=!1,v()):g.confirmTransitionTo(t,"POP",s,function(e){e?v({action:"POP",location:t}):O(t)})},O=function(t){var e=T.indexOf(U.location.key);-1===e&&(e=0);var n=T.indexOf(t.key);-1===n&&(n=0);var o=e-n;o&&(w=!0,x(o))},S=y(f()),T=[S.key],k=function(t){return d+e.createPath(t)},x=function(t){n.go(t)},L=0,A=function(t){1===(L+=t)?(e.addEventListener(window,"popstate",m),r&&e.addEventListener(window,"hashchange",b)):0===L&&(e.removeEventListener(window,"popstate",m),r&&e.removeEventListener(window,"hashchange",b))},j=!1,U={length:n.length,action:"POP",location:S,createHref:k,push:function(t,r){u(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=e.createLocation(t,r,e.createKey(c),U.location);g.confirmTransitionTo(i,"PUSH",s,function(t){if(t){var e=k(i),r=i.state;if(o)if(n.pushState({key:i.key,state:r},void 0,e),a)window.location.href=e;else{var s=T.indexOf(U.location.key),c=T.slice(0,-1===s?0:s+1);c.push(i.key),T=c,v({action:"PUSH",location:i})}else u(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=e}})},replace:function(t,r){u(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=e.createLocation(t,r,e.createKey(c),U.location);g.confirmTransitionTo(i,"REPLACE",s,function(t){if(t){var e=k(i),r=i.state;if(o)if(n.replaceState({key:i.key,state:r},void 0,e),a)window.location.replace(e);else{var s=T.indexOf(U.location.key);-1!==s&&(T[s]=i.key),v({action:"REPLACE",location:i})}else u(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(e)}})},go:x,goBack:function(){return x(-1)},goForward:function(){return x(1)},block:function(t){void 0===t&&(t="");var e=g.setPrompt(t);return j||(A(1),j=!0),function(){return j&&(j=!1,A(-1)),e()}},listen:function(t){var e=g.appendListener(t);return A(1),function(){A(-1),e()}}};return U},hash:function(t){void 0===t&&(t={}),l(e.canUseDOM,"Hash history needs a DOM");var n=window.history,o=e.supportsGoWithoutReloadUsingHash(),r=null!=t.keyLength?t.keyLength:6,i=t.getUserConfirmation,a=void 0===i?e.getConfirmation:i,s=t.hashType,c=void 0===s?"slash":s,p=t.basename?e.stripTrailingSlash(e.addLeadingSlash(t.basename)):"",f=d[c],v=f.encodePath,m=f.decodePath,b=function(){var t=m(y());return u(!p||e.hasBasename(t,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+p+'".'),p&&(t=e.stripBasename(t,p)),e.createLocation(t,void 0,e.createKey(r))},w=h(),P=function(t){Object.assign(M,t),M.length=n.length,w.notifyListeners(M.location,M.action)},O=!1,S=null,T=function(){var t=y(),n=v(t);if(t!==n)g(n);else{var o=b();if(!O&&e.locationsAreEqual(M.location,o))return;if(S===e.createPath(o))return;S=null,k(o)}},k=function(t){O?(O=!1,P()):w.confirmTransitionTo(t,"POP",a,function(e){e?P({action:"POP",location:t}):x(t)})},x=function(t){var n=U.lastIndexOf(e.createPath(M.location));-1===n&&(n=0);var o=U.lastIndexOf(e.createPath(t));-1===o&&(o=0);var r=n-o;r&&(O=!0,R(r))},L=y(),A=v(L);L!==A&&g(A);var j=b(),U=[e.createPath(j)],R=function(t){u(o,"Hash history go(n) causes a full page reload in this browser"),n.go(t)},E=0,C=function(t){1===(E+=t)?e.addEventListener(window,"hashchange",T):0===E&&e.removeEventListener(window,"hashchange",T)},H=!1,M={length:n.length,action:"POP",location:j,createHref:function(t){return"#"+v(p+e.createPath(t))},push:function(t,n){u(void 0===n,"Hash history cannot push state; it is ignored");var o=e.createLocation(t,void 0,e.createKey(r),M.location);w.confirmTransitionTo(o,"PUSH",a,function(t){if(t){var n=e.createPath(o),r=v(p+n);if(y()!==r){S=n,window.location.hash=r;var i=U.lastIndexOf(e.createPath(M.location)),a=U.slice(0,-1===i?0:i+1);a.push(n),U=a,P({action:"PUSH",location:o})}else u(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),P()}})},replace:function(t,n){u(void 0===n,"Hash history cannot replace state; it is ignored");var o=e.createLocation(t,void 0,e.createKey(r),M.location);w.confirmTransitionTo(o,"REPLACE",a,function(t){if(t){var n=e.createPath(o),r=v(p+n);y()!==r&&(S=n,g(r));var i=U.indexOf(e.createPath(M.location));-1!==i&&(U[i]=n),P({action:"REPLACE",location:o})}})},go:R,goBack:function(){return R(-1)},goForward:function(){return R(1)},block:function(t){void 0===t&&(t="");var e=w.setPrompt(t);return H||(C(1),H=!0),function(){return H&&(H=!1,C(-1)),e()}},listen:function(t){var e=w.appendListener(t);return C(1),function(){C(-1),e()}}};return M}},b=function(){function t(){var t=this;this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=function(e){if(void 0===e&&(e={}),e.scrollToId&&"browser"===t.historyType){var n=document.getElementById(e.scrollToId);if(n)return n.scrollIntoView()}t.scrollTo(e.scrollTopOffset||t.scrollTopOffset)}}return t.prototype.componentWillLoad=function(){var t=this;this.history=m[this.historyType](),this.history.listen(function(e){return n=t,o=void 0,i=function(){return __generator(this,function(t){return e=v(e,this.root),this.location=e,[2]})},new((r=void 0)||(r=Promise))(function(t,e){function a(t){try{c(i.next(t))}catch(t){e(t)}}function s(t){try{c(i.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(a,s)}c((i=i.apply(n,o||[])).next())});var n,o,r,i}),this.location=v(this.history.location,this.root)},t.prototype.scrollTo=function(t){var e=this;if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(function(){e.history&&e.history.location&&Array.isArray(e.history.location.scrollPosition)&&window.scrollTo(e.history.location.scrollPosition[0],e.history.location.scrollPosition[1])}):this.queue.write(function(){window.scrollTo(0,t)})},t.prototype.render=function(){if(this.location&&this.history)return n(e.ActiveRouter.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},n("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}},enumerable:!0,configurable:!0}),t}(),w=function(){function t(){}return t.prototype.componentWillLoad=function(){if(this.history&&this.root&&this.url)return this.history.replace((e=this.root,"/"==(t=this.url).charAt(0)&&"/"==e.charAt(e.length-1)?e.slice(0,e.length-1)+t:e+t));var t,e},Object.defineProperty(t,"is",{get:function(){return"stencil-router-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},history:{type:"Any",attr:"history"},root:{type:String,attr:"root"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),t}();e.ActiveRouter.injectProps(w,["history","root"]),t.AppHeader=o,t.AppRoot=r,t.StencilRoute=a,t.StencilRouteSwitch=c,t.StencilRouter=b,t.StencilRouterRedirect=w,Object.defineProperty(t,"__esModule",{value:!0})});
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,c)}s((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};App.loadBundle("puq3bk1w",["exports","./chunk-c4eb7605.js","./chunk-43a42880.js"],function(e,t,n){var r=window.App.h,i=function(){function e(){}return e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,fetch("https://hacker-news.firebaseio.com/v0/item/"+this.match.params.id+".json?print=pretty").then(function(e){return e.json()})];case 1:return e=n.sent(),this.storyObject=e,t.dayjs.extend(t.relativeTime),this.relativeTime=t.dayjs(1e3*e.time).fromNow(),[2]}})})},e.prototype.render=function(){return r("div",{class:"column"},r("div",{class:"container"},r("h2",null,r("a",{href:this.storyObject.url},this.storyObject.title),r("span",null," (",n.truncateURL(this.storyObject.url),")")),r("span",null,this.storyObject.score," points |"),r("span",null," by ",r("stencil-route-link",{url:"/user/"+this.storyObject.by},this.storyObject.by)," |"),r("span",null," ",this.relativeTime)),r("div",{class:"container"},r("p",null,this.storyObject.descendants," comments"),r("app-comments",{comments:this.storyObject.kids})))},Object.defineProperty(e,"is",{get:function(){return"app-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{match:{type:"Any",attr:"match"},relativeTime:{state:!0},storyObject:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".column.sc-app-item{margin:0 auto;width:100%}.mobile-only.sc-app-item{display:inline-block}.desktop-only.sc-app-item{display:none}\@media screen and (min-width:800px){.column.sc-app-item{max-width:800px}.mobile-only.sc-app-item{display:none}.desktop-only.sc-app-item{display:inline-block}}h2.sc-app-item{margin:0 0 15px 0}h2.sc-app-item   a.sc-app-item{color:#000;text-decoration:none}h2.sc-app-item   span.sc-app-item{font-size:1rem;font-weight:400;padding-left:15px}span.sc-app-item{color:#7d7d7d}.sc-app-item-h > div.sc-app-item{border-top:1px solid transparent}a.sc-app-item{color:#7d7d7d;-webkit-transition:color .1s;transition:color .1s}a.sc-app-item:hover{color:var(--primary-color)}.container.sc-app-item{margin-top:6px;background-color:#fff;padding:20px;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}p.sc-app-item{font-size:1.1em;margin:0 0 15px 0}"},enumerable:!0,configurable:!0}),e}();e.AppItem=i,Object.defineProperty(e,"__esModule",{value:!0})});
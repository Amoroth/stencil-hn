var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,u)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};App.loadBundle("vkb5hkfa",["exports","./chunk-c4eb7605.js"],function(e,t){var n=window.App.h,r=function(){function e(){}return e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,fetch("https://hacker-news.firebaseio.com/v0/user/"+this.match.params.id+".json?print=pretty").then(function(e){return e.json()})];case 1:return e=n.sent(),this.userObject=e,t.dayjs.extend(t.relativeTime),this.relativeTime=t.dayjs(1e3*e.created).fromNow(),[2]}})})},e.prototype.render=function(){return n("div",{class:"column"},n("div",{class:"user-container"},n("h2",null,"User: ",this.userObject.id),n("ul",null,n("li",null,n("span",null,"Created: "),t.dayjs(1e3*this.userObject.created).format("YYYY-MM-DD")," | ",this.relativeTime),n("li",null,n("span",null,"Karma: "),this.userObject.karma),n("li",{class:"about",innerHTML:this.userObject.about}))))},Object.defineProperty(e,"is",{get:function(){return"app-user"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{match:{type:"Any",attr:"match"},relativeTime:{state:!0},userObject:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".column.sc-app-user{margin:0 auto;width:100%}.mobile-only.sc-app-user{display:inline-block}.desktop-only.sc-app-user{display:none}\@media screen and (min-width:800px){.column.sc-app-user{max-width:800px}.mobile-only.sc-app-user{display:none}.desktop-only.sc-app-user{display:inline-block}}h2.sc-app-user, li.sc-app-user, ul.sc-app-user{margin:0}.sc-app-user-h > div.sc-app-user{border-top:1px solid transparent}.user-container.sc-app-user{background-color:#fff;padding:20px;margin:6px 0;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}.about.sc-app-user{overflow-wrap:break-word}.about.sc-app-user, ul.sc-app-user{margin:15px 0}ul.sc-app-user{list-style-type:none;padding:0}"},enumerable:!0,configurable:!0}),e}();e.AppUser=r,Object.defineProperty(e,"__esModule",{value:!0})});
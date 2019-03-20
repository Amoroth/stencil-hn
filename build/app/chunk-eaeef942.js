var t="/",e="./",n=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function r(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function i(t){return t&&t.sensitive?"":"i"}function o(s,u,c){return s instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(s,u):Array.isArray(s)?function(t,e,n){for(var r=[],a=0;a<t.length;a++)r.push(o(t[a],e,n).source);return new RegExp("(?:"+r.join("|")+")",i(n))}(s,u,c):function(o,s,u){return function(n,a,o){for(var s=(o=o||{}).strict,u=!1!==o.end,c=r(o.delimiter||t),l=o.delimiters||e,f=[].concat(o.endsWith||[]).map(r).concat("$").join("|"),h="",p=!1,d=0;d<n.length;d++){var v=n[d];if("string"==typeof v)h+=r(v),p=d===n.length-1&&l.indexOf(v[v.length-1])>-1;else{var m=r(v.prefix||""),y=v.repeat?"(?:"+v.pattern+")(?:"+m+"(?:"+v.pattern+"))*":v.pattern;a&&a.push(v),h+=v.optional?v.partial?m+"("+y+")?":"(?:"+m+"("+y+"))?":m+"("+y+")"}}return u?(s||(h+="(?:"+c+")?"),h+="$"===f?"$":"(?="+f+")"):(s||(h+="(?:"+c+"(?="+f+"))?"),p||(h+="(?="+c+"|"+f+")")),new RegExp("^"+h,i(o))}(function(i,o){for(var s,u=[],c=0,l=0,f="",h=o&&o.delimiter||t,p=o&&o.delimiters||e,d=!1;null!==(s=n.exec(i));){var v=s[0],m=s[1],y=s.index;if(f+=i.slice(l,y),l=y+v.length,m)f+=m[1],d=!0;else{var g="",x=i[l],w=s[2],b=s[3],O=s[4],E=s[5];if(!d&&f.length){var A=f.length-1;p.indexOf(f[A])>-1&&(g=f[A],f=f.slice(0,A))}f&&(u.push(f),f="",d=!1);var j=g||h,k=b||O;u.push({name:w||c++,prefix:g,delimiter:j,optional:"?"===E||"*"===E,repeat:"+"===E||"*"===E,partial:""!==g&&void 0!==x&&x!==g,pattern:k?a(k):"[^"+r(j)+"]+?"})}}return(f||l<i.length)&&u.push(f+i.substr(l)),u}(o,u),s,u)}(s,u,c)}function s(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function u(t,e){return s(t,e)?t.substr(e.length):t}function c(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function l(t){return"/"===t.charAt(0)?t:"/"+t}function f(t){return"/"===t.charAt(0)?t.substr(1):t}function h(t){const{pathname:e,search:n,hash:r}=t;let a=e||"/";return n&&"?"!==n&&(a+="?"===n.charAt(0)?n:`?${n}`),r&&"#"!==r&&(a+="#"===r.charAt(0)?r:`#${r}`),a}function p(t){return"/"===t.charAt(0)}function d(t){return Math.random().toString(36).substr(2,t)}function v(t,e){for(let n=e,r=n+1,a=t.length;r<a;n+=1,r+=1)t[n]=t[r];t.pop()}function m(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,n){return m(t,e[n])});const n=typeof t;if(n!==typeof e)return!1;if("object"===n){const n=t.valueOf(),r=e.valueOf();if(n!==t||r!==e)return m(n,r);const a=Object.keys(t),i=Object.keys(e);return a.length===i.length&&a.every(function(n){return m(t[n],e[n])})}return!1}function y(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&m(t.state,e.state)}function g(t,e,n,r){let a;"string"==typeof t?void 0!==(a=function(t){let e=t||"/",n="",r="";const a=e.indexOf("#");-1!==a&&(r=e.substr(a),e=e.substr(0,a));const i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r,query:{},key:""}}(t)).state&&(a.state=e):((a=Object.assign({pathname:""},t)).search&&"?"!==a.search.charAt(0)&&(a.search="?"+a.search),a.hash&&"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash),void 0!==e&&void 0===a.state&&(a.state=e));try{a.pathname=decodeURI(a.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var i;return a.key=n,r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=function(t,e=""){const n=t&&t.split("/")||[];let r=e&&e.split("/")||[];const a=t&&p(t),i=e&&p(e),o=a||i;if(t&&p(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";let s;if(r.length){const t=r[r.length-1];s="."===t||".."===t||""===t}else s=!1;let u=0;for(let t=r.length;t>=0;t--){const e=r[t];"."===e?v(r,t):".."===e?(v(r,t),u++):u&&(v(r,t),u--)}if(!o)for(;u--;u)r.unshift("..");!o||""===r[0]||r[0]&&p(r[0])||r.unshift("");let c=r.join("/");return s&&"/"!==c.substr(-1)&&(c+="/"),c}(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a.query=(i=a.search||"")?(/^[?#]/.test(i)?i.slice(1):i).split("&").reduce((t,e)=>{let[n,r]=e.split("=");return t[n]=r?decodeURIComponent(r.replace(/\+/g," ")):"",t},{}):{},a}const x={},w=1e4;let b=0;function O(t,e={}){"string"==typeof e&&(e={path:e});const{path:n="/",exact:r=!1,strict:a=!1}=e,{re:i,keys:s}=function(t,e){const n=`${e.end}${e.strict}`,r=x[n]||(x[n]={}),a=JSON.stringify(t);if(r[a])return r[a];const i=[],s={re:o(t,i,e),keys:i};return b<w&&(r[a]=s,b+=1),s}(n,{end:r,strict:a}),u=i.exec(t);if(!u)return null;const[c,...l]=u,f=t===c;return r&&!f?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:f,params:s.reduce((t,e,n)=>(t[e.name]=l[n],t),{})}}function E(t,e){return null==t&&null==e||null!=e&&t&&e&&t.path===e.path&&t.url===e.url&&m(t.params,e.params)}function A(t,e){for(var n,r,a=null,i=!1,o=!1,s=arguments.length;s-- >2;)k.push(arguments[s]);for(;k.length>0;){var u=k.pop();if(u&&void 0!==u.pop)for(s=u.length;s--;)k.push(u[s]);else"boolean"==typeof u&&(u=null),(o="function"!=typeof t)&&(null==u?u="":"number"==typeof u?u=String(u):"string"!=typeof u&&(o=!1)),o&&i?a[a.length-1].vtext+=u:null===a?a=[o?{vtext:u}:u]:a.push(o?{vtext:u}:u),i=o}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(s in e.class)e.class[s]&&k.push(s);e.class=k.join(" "),k.length=0}null!=e.key&&(n=e.key),null!=e.name&&(r=e.name)}return"function"==typeof t?t(e,a||[],R):{vtag:t,vchildren:a,vtext:void 0,vattrs:e,vkey:n,vname:r,w:void 0,g:!1}}function j(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}Object.setPrototypeOf||Array;var k=[],R={forEach:function(t,e){t.forEach(function(t,n,r){return e(j(t),n,r)})},map:function(t,e){return t.map(function(t,n,r){return function(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}(e(j(t),n,r))})}};function $(t,e){return A("context-consumer",{subscribe:t,renderer:e})}var S=function(t,e){void 0===e&&(e=$);var n=new Map,r={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:()=>{}};function a(t,e){Array.isArray(t)?t.slice().forEach(function(t){e[t]=r[t]}):e[t]=Object.assign({},r),e.forceUpdate()}function i(t){return function(e){n.has(e)||(n.set(e,t),a(t,e))}}function o(t,e){return i(e)(t),function(){n.delete(t)}}return{Provider:function(t,e){return r=t.state,n.forEach(a),e},Consumer:function(t,n){return e(o,n[0])},wrapConsumer:function(t,e){var n=t.is;return function(t){var r=t.children,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&(n[r[a]]=t[r[a]])}return n}(t,["children"]);return A(n,Object.assign({ref:i(e)},a),r)}},injectProps:function(t,e){var n=null,r=Object.keys(t.properties).find(function(e){return 1==t.properties[e].elementRef});if(null==r)throw new Error("Please ensure that your Component "+t.is+' has an attribute with an "@Element" decorator. This is required to be able to inject properties.');var a=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(n=o(this[r],e),a)return a.bind(this)()};var i=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(n(),i)return i.bind(this)()}}}}();const P=!("undefined"==typeof window||!window.document||!window.document.createElement),U=(t,e,n)=>t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n),_=(t,e,n)=>t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n),C=(t,e)=>e(window.confirm(t)),I=t=>t.metaKey||t.altKey||t.ctrlKey||t.shiftKey,L=()=>{const t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history},q=()=>-1===window.navigator.userAgent.indexOf("Trident"),D=()=>-1===window.navigator.userAgent.indexOf("Firefox"),M=t=>void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS"),T=t=>{var e=window[t],n="__storage_test__";try{return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}};export{O as a,E as b,S as c,T as d,P as e,L as f,q as g,C as h,c as i,l as j,s as k,u as l,g as m,d as n,h as o,U as p,_ as q,M as r,D as s,f as t,y as u,I as v};
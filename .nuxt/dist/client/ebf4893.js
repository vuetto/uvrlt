/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[144,21],{252:function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return l})),n.d(e,"__rest",(function(){return c})),n.d(e,"__decorate",(function(){return f})),n.d(e,"__param",(function(){return d})),n.d(e,"__metadata",(function(){return h})),n.d(e,"__awaiter",(function(){return v})),n.d(e,"__generator",(function(){return _})),n.d(e,"__exportStar",(function(){return y})),n.d(e,"__values",(function(){return m})),n.d(e,"__read",(function(){return w})),n.d(e,"__spread",(function(){return x})),n.d(e,"__spreadArrays",(function(){return k})),n.d(e,"__await",(function(){return O})),n.d(e,"__asyncGenerator",(function(){return C})),n.d(e,"__asyncDelegator",(function(){return S})),n.d(e,"__asyncValues",(function(){return j})),n.d(e,"__makeTemplateObject",(function(){return P})),n.d(e,"__importStar",(function(){return T})),n.d(e,"__importDefault",(function(){return E}));var r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)};function o(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}var l=function(){return l=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},l.apply(this,arguments)};function c(s,t){var e={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&t.indexOf(p)<0&&(e[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)t.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(e[p[i]]=s[p[i]])}return e}function f(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l}function d(t,e){return function(n,r){e(n,r,t)}}function h(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function v(t,e,n,r){return new(n||(n=Promise))((function(o,l){function c(t){try{d(r.next(t))}catch(t){l(t)}}function f(t){try{d(r.throw(t))}catch(t){l(t)}}function d(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(c,f)}d((r=r.apply(t,e||[])).next())}))}function _(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function l(l){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=body.call(t,o)}catch(t){l=[6,t],n=0}finally{e=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}function y(t,e){for(var p in t)e.hasOwnProperty(p)||(e[p]=t[p])}function m(t){var e="function"==typeof Symbol&&t[Symbol.iterator],i=0;return e?e.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}}function w(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),l=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}function x(){for(var t=[],i=0;i<arguments.length;i++)t=t.concat(w(arguments[i]));return t}function k(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e}function O(t){return this instanceof O?(this.v=t,this):new O(t)}function C(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,g=n.apply(t,e||[]),q=[];return i={},r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i;function r(t){g[t]&&(i[t]=function(e){return new Promise((function(a,b){q.push([t,e,a,b])>1||o(t,e)}))})}function o(t,e){try{(n=g[t](e)).value instanceof O?Promise.resolve(n.value.v).then(l,c):f(q[0][2],n)}catch(t){f(q[0][3],t)}var n}function l(t){o("next",t)}function c(t){o("throw",t)}function f(t,e){t(e),q.shift(),q.length&&o(q[0][0],q[0][1])}}function S(t){var i,p;return i={},e("next"),e("throw",(function(t){throw t})),e("return"),i[Symbol.iterator]=function(){return this},i;function e(e,n){i[e]=t[e]?function(r){return(p=!p)?{value:O(t[e](r)),done:"return"===e}:n?n(r):r}:n}}function j(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,e=t[Symbol.asyncIterator];return e?e.call(t):(t=m(t),i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i);function n(e){i[e]=t[e]&&function(n){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(n=t[e](n)).done,n.value)}))}}}function P(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function T(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function E(t){return t&&t.__esModule?t:{default:t}}},253:function(t,e,n){},256:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(252).__importDefault(n(257));e.default=r.default},257:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(252),o=r.__importDefault(n(7));e.default=o.default.extend({props:{threshold:{required:!1,type:Number,default:0},headerClass:{required:!1,type:String,default:"vue-fixed-header"},fixedClass:{required:!1,type:String,default:"vue-fixed-header--isFixed"},hideScrollUp:{required:!1,type:Boolean,default:!1}},data:function(){return{check:null,isFixed:!1,lastScrollTop:0}},mounted:function(){this.main(),this.registerEvent()},beforeDestroy:function(){this.removeEvent()},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop},main:function(){var t=this;this.lastScrollTop=this.getScrollTop(),this.check=function(){var e=t,n=e.threshold,r=e.hideScrollUp,o=t.getScrollTop(),l=o>n,c=(o>=t.lastScrollTop||!r)&&l;t.lastScrollTop=o,t.isFixed!==c&&(t.isFixed=c,t.$emit("change",t.isFixed))}},registerEvent:function(){window.addEventListener("scroll",this.check)},removeEvent:function(){window.removeEventListener("scroll",this.check)}},render:function(t){var e,n=this.$slots.default;if(!n||!r.__spreadArrays(n)[0])return t();var o=r.__spreadArrays(n)[0],l=t(o.tag,o.data,o.children||o.text);return l.data=l.data||{class:""},"string"==typeof l.data.class&&(l.data.class=l.data.class.split(" ")),Array.isArray(l.data.class)&&(l.data.class=r.__spreadArrays(l.data.class).reduce((function(a,b){var t;return r.__assign(r.__assign({},a),((t={})[b]=!0,t))}),{})),l.data.class=r.__assign(r.__assign({},l.data.class),((e={})[this.headerClass]=!0,e[this.fixedClass]=!!this.isFixed,e)),l.data.class=Object.entries(l.data.class).map((function(t){var e=t[0];return t[1]?e:null})).filter((function(t){return t})).join(" "),l}})},258:function(t,e,n){"use strict";n(253)},259:function(t,e,n){"use strict";n.r(e);n(258);var r=n(21),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"page_nav"},[e("ul",{staticClass:"mainmenu"},[e("li",{staticClass:"lavel-1 without--drop slide--megamenu"},[e("a",{attrs:{href:"https://www.youtube.com/channel/UCgU0h1Sj1ENTPG4lW5wYFag",target:"_blank"}},[e("span",[t._v("YouTube")])])]),t._v(" "),e("li",{staticClass:"lavel-1 without--drop slide--megamenu"},[e("a",{attrs:{href:"https://www.linkedin.com/in/ugovarlet/",target:"_blank"}},[e("span",[t._v("LinkedIn")])])])])])}],!1,null,null,null);e.default=component.exports},296:function(t,e,n){},346:function(t,e,n){"use strict";n(296)},525:function(t,e,n){"use strict";n.r(e);var r=n(256),o=n.n(r),l=n(259),c={components:{FixedHeader:o.a,Navigation:l.default}},f=(n(346),n(21)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("fixed-header",[e("header",{staticClass:"br_header header-default header-transparent black-logo--version haeder-fixed-width haeder-fixed-150 header-mega-menu clearfix"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"header__wrapper mr--0"},[e("div",{staticClass:"header-left flex-20"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/brook-black.png",alt:"Brook Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"header-flex-right flex-80"},[e("div",{staticClass:"mainmenu-wrapper have-not-flex d-none d-lg-block"},[e("Navigation")],1),t._v(" "),e("div",{staticClass:"header-right have-not-flex d-sm-flex pl--35 pr_md--40 pr_sm--0"},[e("ul",{staticClass:"social-icon icon-size-medium text-center tooltip-layout d-none d-sm-flex text-dark-2"},[e("li",{staticClass:"facebook"},[e("a",{staticClass:"link hint--bounce hint--top hint--white",attrs:{href:"https://www.facebook.com/","aria-label":"Facebook",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook"})])]),t._v(" "),e("li",{staticClass:"twitter"},[e("a",{staticClass:"link hint--bounce hint--top hint--white",attrs:{href:"https://twitter.com/","aria-label":"Twitter",target:"_blank"}},[e("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),e("li",{staticClass:"instagram"},[e("a",{staticClass:"link hint--bounce hint--top hint--white",attrs:{href:"https://www.instagram.com/","aria-label":"Instagram",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])])]),t._v(" "),e("div",{staticClass:"manu-hamber popup-mobile-click d-block d-lg-none black-version pl_md--20 pl_sm--20",on:{click:function(e){return t.$emit("togglenav")}}},[e("div",[e("i")])])])])])])])])])])}),[],!1,null,"02174020",null);e.default=component.exports}}]);
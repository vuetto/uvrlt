(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{329:function(t,n,e){"use strict";var strong=e(330),r=e(95);t.exports=e(184)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},330:function(t,n,e){"use strict";var r=e(29).f,o=e(75),l=e(98),c=e(46),v=e(96),f=e(97),_=e(129),d=e(181),h=e(130),C=e(27),m=e(60).fastKey,w=e(95),k=C?"_s":"size",y=function(t,n){var e,r=m(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,_){var d=t((function(t,r){v(t,d,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[k]=0,null!=r&&f(r,e,t[_],t)}));return l(d.prototype,{clear:function(){for(var t=w(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[k]=0},delete:function(t){var e=w(this,n),r=y(e,t);if(r){var o=r.n,l=r.p;delete e._i[r.i],r.r=!0,l&&(l.n=o),o&&(o.p=l),e._f==r&&(e._f=o),e._l==r&&(e._l=l),e[k]--}return!!r},forEach:function(t){w(this,n);for(var e,r=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(w(this,n),t)}}),C&&r(d.prototype,"size",{get:function(){return w(this,n)[k]}}),d},def:function(t,n,e){var r,o,l=y(t,n);return l?l.v=e:(t._l=l={i:o=m(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[k]++,"F"!==o&&(t._i[o]=l)),t},getEntry:y,setStrong:function(t,n,e){_(t,n,(function(t,e){this._t=w(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?d(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(t._t=void 0,d(1))}),e?"entries":"values",!e,!0),h(n)}}},478:function(t,n,e){"use strict";e.r(n);var r=e(20),o=(e(329),e(41),e(12),e(42),e(8),e(10),e(33),e(34),e(250)),l={components:{InstagramPost:function(){return e.e(35).then(e.bind(null,552))}},data:function(){return{data:o}},computed:{categories:function(){return Object(r.a)(new Set(this.data.blogs.map((function(t){return t.categories})).flat()))},tags:function(){return Object(r.a)(new Set(this.data.blogs.map((function(t){return t.tags})).flat()))}},methods:{slugify:function(text){return null==text?void 0:text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},c=e(21),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"blog-sidebar-container"},[n("div",{staticClass:"blog-sidebar-wrapper"},[t._m(0),t._v(" "),n("div",{staticClass:"bl-sidebar category mt--50 wow move-up"},[n("h5",{staticClass:"widget-title"},[t._v("Categories")]),t._v(" "),n("div",{staticClass:"inner"},[n("ul",{staticClass:"category-list"},t._l(t.categories,(function(e,i){return n("li",{key:i},[n("n-link",{attrs:{to:"/blog/category/".concat(t.slugify(e))}},[t._v(t._s(e))])],1)})),0)])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bl-sidebar tag mt--50 wow move-up"},[n("h5",{staticClass:"widget-title"},[t._v("Tags")]),t._v(" "),n("div",{staticClass:"inner"},[n("ul",{staticClass:"tagcloud"},t._l(t.tags,(function(e,i){return n("li",{key:i},[n("n-link",{attrs:{to:"/blog/tag/".concat(e)}},[t._v(t._s(e))])],1)})),0)])]),t._v(" "),n("div",{staticClass:"bl-sidebar instagram mt--50 wow move-up"},[n("h5",{staticClass:"widget-title"},[t._v("Instagram")]),t._v(" "),n("client-only",[n("InstagramPost",{attrs:{addClass:"instagram-grid-5 inner"}})],1)],1)])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"bl-sidebar search"},[n("h5",{staticClass:"widget-title"},[t._v("Search")]),t._v(" "),n("form",{staticClass:"inner"},[n("div",{staticClass:"search-box"},[n("input",{attrs:{type:"text",placeholder:"Enter search keyword…"}}),t._v(" "),n("button",[n("span",{staticClass:"fa fa-search"})])])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"bl-sidebar banner mt--50 wow move-up"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"thumb"},[n("img",{staticClass:"w-100",attrs:{src:"/img/blog/big-img/banner-image.jpg",alt:"banner"}})]),t._v(" "),n("div",{staticClass:"content"},[n("h4",{staticClass:"heading heading-h4 text-white"},[t._v("Spot for banner")]),t._v(" "),n("div",{staticClass:"banner-btn mt--25"},[n("button",{staticClass:"brook-btn bk-btn-theme btn-sd-size btn-rounded space-between"},[t._v("Purchase")])])])])])}],!1,null,null,null);n.default=component.exports}}]);
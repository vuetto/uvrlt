(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{251:function(t){t.exports=JSON.parse('{"portfolios":[{"heading":"header 01","image":"/img/portfolio/portfolio-1/portfolio-1.jpg"}],"portfolioFeaturd":[{"id":1,"image":"/img/portfolio/portfolio-2/portfolio-01.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"},{"id":2,"image":"/img/portfolio/portfolio-2/portfolio-02.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Photography"},{"id":3,"image":"/img/portfolio/portfolio-2/portfolio-03.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Design"},{"id":4,"image":"/img/portfolio/portfolio-2/portfolio-04.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Marketing"},{"id":5,"image":"/img/portfolio/portfolio-2/portfolio-05.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"SEO"},{"id":6,"image":"/img/portfolio/portfolio-2/portfolio-06.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"}],"portfolioItems":[{"id":1,"image":"/img/portfolio/grid/caption-1.jpg","heading":"The Language of Designs","slug":"the-language-of-designs-1","category":"Design","filterClass":"creative digital"},{"id":2,"image":"/img/portfolio/grid/caption-2.jpg","heading":"B-sharp High-end Audio","slug":"b-sharp-high-end-audio-2","category":"Marketing","filterClass":"photography design"},{"id":3,"image":"/img/portfolio/grid/caption-3.jpg","heading":"Smart Sound System","slug":"smart-sound-system-3","category":"Photography","filterClass":"photography creative"},{"id":4,"image":"/img/portfolio/grid/caption-4.jpg","heading":"Awe-inspiring Projects","slug":"awe-inspiring-projects-4","category":"Life Style","filterClass":"design"},{"id":5,"image":"/img/portfolio/grid/caption-5.jpg","heading":"Gifts for Photography","slug":"gifts-for-photography-5","category":"Design","filterClass":"creative"},{"id":6,"image":"/img/portfolio/grid/caption-6.jpg","heading":"Enchanting Portrait Hacks","slug":"enchanting-portrait-hacks-6","category":"Photography","filterClass":"digital"},{"id":7,"image":"/img/portfolio/grid/caption-7.jpg","heading":"Digital Marketing Basics","slug":"digital-marketing-basics-7","category":"Design"},{"id":8,"image":"/img/portfolio/grid/caption-8.jpg","heading":"Measure Digital Progress","slug":"measure-digital-progress-8","filterClass":"digital design"},{"id":9,"image":"/img/portfolio/grid/caption-9.jpg","heading":"B-sharp High-end Audio","slug":"b-sharp-high-end-audio-9","category":"Design","filterClass":"digital"}]}')},333:function(t,o,r){"use strict";var e=r(11),l=r(334),n=r(182),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);e(e.P+e.F*c,"String",{padStart:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},334:function(t,o,r){var e=r(30),l=r(183),n=r(40);t.exports=function(t,o,r,c){var d=String(n(t)),f=d.length,h=void 0===r?" ":String(r),m=e(o);if(m<=f||""==h)return d;var v=m-f,y=l.call(h,Math.ceil(v/h.length));return y.length>v&&(y=y.slice(0,v)),c?y+d:d+y}},483:function(t,o,r){"use strict";r.r(o);r(12),r(33),r(34),r(333);var e=r(251),l={data:function(){return{data:e,swiperOption:{slidesPerView:"auto",spaceBetween:30,autoplay:!1,loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,o,i){var a=100/i*o,r=o.toString(),s=i.toString();return'<div class="fraction"><span class="current">'+(r=r.padStart(2,"0"))+'</span><span class="separator"> / </span><span class="total">'+(s=s.padStart(2,"0"))+'</span></div><div class="progressbar"><div class="filled" data-width="'+a+'" style="width: '+a+'% "></div></div>'}}}}}},n=r(21),component=Object(n.a)(l,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"bk-portfolio-area creative-portfolio section-pb-100"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"section-title--between wow move-up"},[t._m(0),t._v(" "),o("div",{staticClass:"section-btn mt_mobile--30"},[o("n-link",{staticClass:"button-text",attrs:{to:"/"}},[o("span",[t._v("View all projects")]),t._v(" "),o("i",{staticClass:"fa fa-arrow-right"})])],1)])])])]),t._v(" "),o("div",{staticClass:"portfolio-wrapper mt--40 wow move-up"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"porfolio-swip-horizontal",staticStyle:{overflow:"hidden"}},[o("swiper",{attrs:{options:t.swiperOption}},t._l(t.data.portfolioFeaturd,(function(r){return o("div",{key:r.i,staticClass:"portfolio portfolio_style--2 mt--30 swiper-slide"},[o("div",{staticClass:"thumb"},[o("img",{attrs:{src:r.image,alt:r.alt}})]),t._v(" "),o("div",{staticClass:"portfolio-overlay"}),t._v(" "),o("div",{staticClass:"port-overlay-info"},[o("div",{staticClass:"content"},[o("h3",{staticClass:"port-title"},[t._v(t._s(r.title))]),t._v(" "),o("div",{staticClass:"category"},[t._v(t._s(r.category))])])])])})),0),t._v(" "),o("div",{staticClass:"swiper-pagination"})],1)])])])])])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"title"},[o("h3",{staticClass:"theme-creative"},[t._v(" Featured "),o("span",[t._v("Projects")])])])}],!1,null,null,null);o.default=component.exports}}]);
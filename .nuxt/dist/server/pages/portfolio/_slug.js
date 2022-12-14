exports.ids = [120];
exports.modules = {

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/_slug.vue?vue&type=template&id=6c1f9c73&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderBlack', {
    on: {
      "togglenav": function ($event) {
        _vm.navOpen = !_vm.navOpen;
      },
      "toggleSearch": function ($event) {
        _vm.searchOpen = !_vm.searchOpen;
      }
    }
  }), _vm._ssrNode(" "), _c('OffCanvasMobileMenu', {
    class: {
      'show-mobile-menu': _vm.navOpen
    },
    on: {
      "togglenav": function ($event) {
        _vm.navOpen = !_vm.navOpen;
      }
    }
  }), _vm._ssrNode(" "), _c('SearchPopup', {
    class: {
      'search-popup-open': _vm.searchOpen
    },
    on: {
      "toggleSearch": function ($event) {
        _vm.searchOpen = !_vm.searchOpen;
      }
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-portfolio-details bg_color--1\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row pt--100 pt_md--5 pt_sm--5 pb--80\">", "</div>", [_vm._ssrNode("<div id=\"is_stuck_inner\" class=\"col-lg-6 col-12 order-2 order-lg-1 mt_md--40 mt_sm--40\">", "</div>", [_vm._ssrNode("<div class=\"portfolio-left bk-portfolio-details\">", "</div>", [_vm._ssrNode("<div class=\"portfolio-main-info\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3 line-height-1-42\">" + _vm._ssrEscape(_vm._s(_vm.data.heading)) + "</h3> <div class=\"portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40\"><h6 class=\"heading heading-h6\">ABOUT THE PROJECT</h6> <div class=\"desc mt--20\"><p class=\"bk_pra\">Not only are comics available in printed form, but they???re also available digitally. Printed, on the web, or on an app? Where do you start? If you have a hard time choosing what to read and  where to read it, you???re not alone, because the choices are limitless. With print and web and digital options, we now have so many comic books.</p></div></div> "), _vm._ssrNode("<div class=\"portfolio-details-list\">", "</div>", [_vm._ssrNode("<div class=\"details-list\"><label>Date</label> <span>28 Sep 2007</span></div> <div class=\"details-list\"><label>Client</label> <span>HighGrove Partners</span></div> "), _vm._ssrNode("<div class=\"details-list\">", "</div>", [_vm._ssrNode("<label>Categories</label> "), _vm._ssrNode("<span>", "</span>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n                                            Digital\n                                        ")])], 1)], 2), _vm._ssrNode(" <div class=\"details-list\"><label>Awards</label> <span>2018 Revolution Designs</span></div>")], 2), _vm._ssrNode(" <div class=\"portfolio-share pt--70 pt_md--40 pt_sm--40\"><h6 class=\"heading heading-h6\">SHARE</h6></div>")], 2)])]), _vm._ssrNode(" <div class=\"col-lg-6 col-12 order-1 order-lg-2\"><div class=\"portfolio-right portfolio-details-gallery text-center text-lg-right\"><div class=\"portfolio-image mb--50\"><img" + _vm._ssrAttr("src", _vm.data.image) + _vm._ssrAttr("alt", _vm.data.heading) + "></div> <div class=\"portfolio-image mb--50\"><img src=\"/img/portfolio/big-image/gallery-2.jpg\" alt=\"portfolio\"></div></div></div>")], 2)])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/portfolio/_slug.vue?vue&type=template&id=6c1f9c73&

// EXTERNAL MODULE: ./data/portfolio.json
var portfolio = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/_slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 278)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      data: portfolio,
      navOpen: false,
      searchOpen: false,
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.data = portfolio.portfolioItems.find(item => item.slug == this.$route.params.slug);
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: this.$route.params.slug
    };
  }
});
// CONCATENATED MODULE: ./pages/portfolio/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var portfolio_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/portfolio/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0323af8e"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"heading\":\"header 01\",\"image\":\"/img/portfolio/portfolio-1/portfolio-1.jpg\"}],\"portfolioFeaturd\":[{\"id\":1,\"image\":\"/img/portfolio/portfolio-2/portfolio-01.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"},{\"id\":2,\"image\":\"/img/portfolio/portfolio-2/portfolio-02.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Photography\"},{\"id\":3,\"image\":\"/img/portfolio/portfolio-2/portfolio-03.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Design\"},{\"id\":4,\"image\":\"/img/portfolio/portfolio-2/portfolio-04.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Marketing\"},{\"id\":5,\"image\":\"/img/portfolio/portfolio-2/portfolio-05.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"SEO\"},{\"id\":6,\"image\":\"/img/portfolio/portfolio-2/portfolio-06.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"}],\"portfolioItems\":[{\"id\":1,\"image\":\"/img/portfolio/grid/caption-1.jpg\",\"heading\":\"The Language of Designs\",\"slug\":\"the-language-of-designs-1\",\"category\":\"Design\",\"filterClass\":\"creative digital\"},{\"id\":2,\"image\":\"/img/portfolio/grid/caption-2.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-2\",\"category\":\"Marketing\",\"filterClass\":\"photography design\"},{\"id\":3,\"image\":\"/img/portfolio/grid/caption-3.jpg\",\"heading\":\"Smart Sound System\",\"slug\":\"smart-sound-system-3\",\"category\":\"Photography\",\"filterClass\":\"photography creative\"},{\"id\":4,\"image\":\"/img/portfolio/grid/caption-4.jpg\",\"heading\":\"Awe-inspiring Projects\",\"slug\":\"awe-inspiring-projects-4\",\"category\":\"Life Style\",\"filterClass\":\"design\"},{\"id\":5,\"image\":\"/img/portfolio/grid/caption-5.jpg\",\"heading\":\"Gifts for Photography\",\"slug\":\"gifts-for-photography-5\",\"category\":\"Design\",\"filterClass\":\"creative\"},{\"id\":6,\"image\":\"/img/portfolio/grid/caption-6.jpg\",\"heading\":\"Enchanting Portrait Hacks\",\"slug\":\"enchanting-portrait-hacks-6\",\"category\":\"Photography\",\"filterClass\":\"digital\"},{\"id\":7,\"image\":\"/img/portfolio/grid/caption-7.jpg\",\"heading\":\"Digital Marketing Basics\",\"slug\":\"digital-marketing-basics-7\",\"category\":\"Design\"},{\"id\":8,\"image\":\"/img/portfolio/grid/caption-8.jpg\",\"heading\":\"Measure Digital Progress\",\"slug\":\"measure-digital-progress-8\",\"filterClass\":\"digital design\"},{\"id\":9,\"image\":\"/img/portfolio/grid/caption-9.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-9\",\"category\":\"Design\",\"filterClass\":\"digital\"}]}");

/***/ })

};;
//# sourceMappingURL=_slug.js.map
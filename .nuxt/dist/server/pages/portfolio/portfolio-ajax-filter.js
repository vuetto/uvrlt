exports.ids = [121];
exports.modules = {

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/portfolio-ajax-filter.vue?vue&type=template&id=20eb4cda&
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
  }), _vm._ssrNode(" <div class=\"breadcaump-area pt--130 pb--50 bg_color--1 breadcaump-title-bar\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"breadcaump-inner text-center\"><h1 class=\"heading heading-h1\">Portfolio Grid – Boxed</h1></div></div></div></div></div> "), _vm._ssrNode("<div class=\"brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row mtn--30\">", "</div>", _vm._l(_vm.data.portfolioItems, function (portfolio) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 move-up wow mt--30\">", "</div>", [_c('PortfolioItemCenterCaption', {
      attrs: {
        "portfolio": portfolio
      }
    })], 1);
  }), 0)])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/portfolio/portfolio-ajax-filter.vue?vue&type=template&id=20eb4cda&

// EXTERNAL MODULE: ./data/portfolio.json
var portfolio = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/portfolio-ajax-filter.vue?vue&type=script&lang=js&

/* harmony default export */ var portfolio_ajax_filtervue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 278)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    PortfolioItemCenterCaption: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 357)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      data: portfolio,
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'Portfolio Grid – Boxed'
    };
  }
});
// CONCATENATED MODULE: ./pages/portfolio/portfolio-ajax-filter.vue?vue&type=script&lang=js&
 /* harmony default export */ var portfolio_portfolio_ajax_filtervue_type_script_lang_js_ = (portfolio_ajax_filtervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/portfolio/portfolio-ajax-filter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_portfolio_ajax_filtervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c3039322"
  
)

/* harmony default export */ var portfolio_ajax_filter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"heading\":\"header 01\",\"image\":\"/img/portfolio/portfolio-1/portfolio-1.jpg\"}],\"portfolioFeaturd\":[{\"id\":1,\"image\":\"/img/portfolio/portfolio-2/portfolio-01.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"},{\"id\":2,\"image\":\"/img/portfolio/portfolio-2/portfolio-02.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Photography\"},{\"id\":3,\"image\":\"/img/portfolio/portfolio-2/portfolio-03.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Design\"},{\"id\":4,\"image\":\"/img/portfolio/portfolio-2/portfolio-04.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Marketing\"},{\"id\":5,\"image\":\"/img/portfolio/portfolio-2/portfolio-05.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"SEO\"},{\"id\":6,\"image\":\"/img/portfolio/portfolio-2/portfolio-06.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"}],\"portfolioItems\":[{\"id\":1,\"image\":\"/img/portfolio/grid/caption-1.jpg\",\"heading\":\"The Language of Designs\",\"slug\":\"the-language-of-designs-1\",\"category\":\"Design\",\"filterClass\":\"creative digital\"},{\"id\":2,\"image\":\"/img/portfolio/grid/caption-2.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-2\",\"category\":\"Marketing\",\"filterClass\":\"photography design\"},{\"id\":3,\"image\":\"/img/portfolio/grid/caption-3.jpg\",\"heading\":\"Smart Sound System\",\"slug\":\"smart-sound-system-3\",\"category\":\"Photography\",\"filterClass\":\"photography creative\"},{\"id\":4,\"image\":\"/img/portfolio/grid/caption-4.jpg\",\"heading\":\"Awe-inspiring Projects\",\"slug\":\"awe-inspiring-projects-4\",\"category\":\"Life Style\",\"filterClass\":\"design\"},{\"id\":5,\"image\":\"/img/portfolio/grid/caption-5.jpg\",\"heading\":\"Gifts for Photography\",\"slug\":\"gifts-for-photography-5\",\"category\":\"Design\",\"filterClass\":\"creative\"},{\"id\":6,\"image\":\"/img/portfolio/grid/caption-6.jpg\",\"heading\":\"Enchanting Portrait Hacks\",\"slug\":\"enchanting-portrait-hacks-6\",\"category\":\"Photography\",\"filterClass\":\"digital\"},{\"id\":7,\"image\":\"/img/portfolio/grid/caption-7.jpg\",\"heading\":\"Digital Marketing Basics\",\"slug\":\"digital-marketing-basics-7\",\"category\":\"Design\"},{\"id\":8,\"image\":\"/img/portfolio/grid/caption-8.jpg\",\"heading\":\"Measure Digital Progress\",\"slug\":\"measure-digital-progress-8\",\"filterClass\":\"digital design\"},{\"id\":9,\"image\":\"/img/portfolio/grid/caption-9.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-9\",\"category\":\"Design\",\"filterClass\":\"digital\"}]}");

/***/ })

};;
//# sourceMappingURL=portfolio-ajax-filter.js.map
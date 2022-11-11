exports.ids = [56];
exports.modules = {

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us-01.vue?vue&type=template&id=d8c58e04&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderAbout', {
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
  }), _vm._ssrNode(" "), _c('AboutBreadcrumb'), _vm._ssrNode(" "), _c('WhatWeDo'), _vm._ssrNode(" "), _c('AboutSkill'), _vm._ssrNode(" "), _c('FlexibleSlider'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"bk-title--default text-center\"><h5 class=\"heading heading-h5 theme-color\">How We Do</h5> <div class=\"bkseparator--30\"></div> <h3 class=\"heading heading-h3\">Creative Procedure</h3></div> "), _c('GradationOne')], 2)])])]), _vm._ssrNode(" "), _c('TestimonialTwo'), _vm._ssrNode(" "), _c('BrandLogoCarousel'), _vm._ssrNode(" "), _c('CallToAction'), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about-us-01.vue?vue&type=template&id=d8c58e04&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us-01.vue?vue&type=script&lang=js&
/* harmony default export */ var about_us_01vue_type_script_lang_js_ = ({
  components: {
    HeaderAbout: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 248)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    AboutBreadcrumb: () => __webpack_require__.e(/* import() */ 147).then(__webpack_require__.bind(null, 251)),
    WhatWeDo: () => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(null, 369)),
    AboutSkill: () => __webpack_require__.e(/* import() */ 182).then(__webpack_require__.bind(null, 370)),
    FlexibleSlider: () => __webpack_require__.e(/* import() */ 42).then(__webpack_require__.bind(null, 252)),
    GradationOne: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 253)),
    TestimonialTwo: () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 254)),
    BrandLogoCarousel: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 255)),
    CallToAction: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 371)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'About Us 01'
    };
  }
});
// CONCATENATED MODULE: ./pages/about-us-01.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_about_us_01vue_type_script_lang_js_ = (about_us_01vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about-us-01.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_about_us_01vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "776fee06"
  
)

/* harmony default export */ var about_us_01 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us-01.js.map
exports.ids = [58];
exports.modules = {

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us-03.vue?vue&type=template&id=227d00d0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderElement', {
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
  }), _vm._ssrNode(" "), _c('AboutBreadcrumbFour'), _vm._ssrNode(" "), _c('ServiceTwo'), _vm._ssrNode(" "), _c('WhatWeDoThree'), _vm._ssrNode(" "), _c('TeamTwo'), _vm._ssrNode(" "), _c('AccordionOne'), _vm._ssrNode(" "), _c('FeaturesOne'), _vm._ssrNode(" "), _c('CallToAction'), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about-us-03.vue?vue&type=template&id=227d00d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us-03.vue?vue&type=script&lang=js&
/* harmony default export */ var about_us_03vue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    AboutBreadcrumbFour: () => __webpack_require__.e(/* import() */ 181).then(__webpack_require__.bind(null, 373)),
    ServiceTwo: () => __webpack_require__.e(/* import() */ 178).then(__webpack_require__.bind(null, 264)),
    WhatWeDoThree: () => __webpack_require__.e(/* import() */ 239).then(__webpack_require__.bind(null, 265)),
    TeamTwo: () => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, 266)),
    AccordionOne: () => __webpack_require__.e(/* import() */ 52).then(__webpack_require__.bind(null, 372)),
    FeaturesOne: () => __webpack_require__.e(/* import() */ 53).then(__webpack_require__.bind(null, 267)),
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
      title: 'About Us 04'
    };
  }
});
// CONCATENATED MODULE: ./pages/about-us-03.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_about_us_03vue_type_script_lang_js_ = (about_us_03vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about-us-03.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_about_us_03vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "778c1d08"
  
)

/* harmony default export */ var about_us_03 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us-03.js.map
exports.ids = [116];
exports.modules = {

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-start-up.vue?vue&type=template&id=1480fb96&
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
  }), _vm._ssrNode(" "), _c('HeroStartUp'), _vm._ssrNode(" "), _c('FeatureStartUp'), _vm._ssrNode(" "), _c('WhatWeDo'), _vm._ssrNode(" "), _c('EffectiveSolution'), _vm._ssrNode(" "), _c('StartUpStratagy'), _vm._ssrNode(" "), _c('PortfolioItemFilter'), _vm._ssrNode(" "), _c('NewsletterCta'), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-start-up.vue?vue&type=template&id=1480fb96&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-start-up.vue?vue&type=script&lang=js&
/* harmony default export */ var home_start_upvue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 278)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroStartUp: () => __webpack_require__.e(/* import() */ 159).then(__webpack_require__.bind(null, 385)),
    FeatureStartUp: () => __webpack_require__.e(/* import() */ 169).then(__webpack_require__.bind(null, 332)),
    WhatWeDo: () => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(null, 369)),
    EffectiveSolution: () => __webpack_require__.e(/* import() */ 192).then(__webpack_require__.bind(null, 386)),
    StartUpStratagy: () => __webpack_require__.e(/* import() */ 236).then(__webpack_require__.bind(null, 387)),
    PortfolioItemFilter: () => __webpack_require__.e(/* import() */ 143).then(__webpack_require__.bind(null, 333)),
    NewsletterCta: () => __webpack_require__.e(/* import() */ 219).then(__webpack_require__.bind(null, 388)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-5', 'template-font-1');
  },
  head() {
    return {
      title: 'Home Start Up'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-start-up.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_start_upvue_type_script_lang_js_ = (home_start_upvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-start-up.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_start_upvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf9eaf6c"
  
)

/* harmony default export */ var home_start_up = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-start-up.js.map
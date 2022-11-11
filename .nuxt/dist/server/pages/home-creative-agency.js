exports.ids = [96];
exports.modules = {

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-creative-agency.vue?vue&type=template&id=58fc7982&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container bg_color--4"
  }, [_c('Header', {
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
  }), _vm._ssrNode(" "), _c('HeroAgency'), _vm._ssrNode(" "), _c('AboutAgency'), _vm._ssrNode(" "), _c('ServiceAgency'), _vm._ssrNode(" "), _c('FeaturedProjects'), _vm._ssrNode(" "), _c('AgencyCounterup'), _vm._ssrNode(" "), _c('TestimonialFour'), _vm._ssrNode(" "), _c('BlogTwo'), _vm._ssrNode(" "), _c('Firefly'), _vm._ssrNode(" "), _c('FooterAgency')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-creative-agency.vue?vue&type=template&id=58fc7982&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-creative-agency.vue?vue&type=script&lang=js&
/* harmony default export */ var home_creative_agencyvue_type_script_lang_js_ = ({
  components: {
    Header: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 280)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroAgency: () => __webpack_require__.e(/* import() */ 150).then(__webpack_require__.bind(null, 281)),
    AboutAgency: () => __webpack_require__.e(/* import() */ 180).then(__webpack_require__.bind(null, 282)),
    ServiceAgency: () => __webpack_require__.e(/* import() */ 172).then(__webpack_require__.bind(null, 283)),
    FeaturedProjects: () => __webpack_require__.e(/* import() */ 170).then(__webpack_require__.bind(null, 284)),
    AgencyCounterup: () => __webpack_require__.e(/* import() */ 168).then(__webpack_require__.bind(null, 285)),
    TestimonialFour: () => __webpack_require__.e(/* import() */ 238).then(__webpack_require__.bind(null, 286)),
    BlogTwo: () => __webpack_require__.e(/* import() */ 165).then(__webpack_require__.bind(null, 287)),
    Firefly: () => __webpack_require__.e(/* import() */ 41).then(__webpack_require__.bind(null, 377)),
    FooterAgency: () => __webpack_require__.e(/* import() */ 43).then(__webpack_require__.bind(null, 378))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  head() {
    return {
      title: 'Home Creative Agency'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-creative-agency.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_creative_agencyvue_type_script_lang_js_ = (home_creative_agencyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-creative-agency.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_creative_agencyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "875152a2"
  
)

/* harmony default export */ var home_creative_agency = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-creative-agency.js.map
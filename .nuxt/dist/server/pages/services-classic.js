exports.ids = [135];
exports.modules = {

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-classic.vue?vue&type=template&id=6a284f0b&
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
  }), _vm._ssrNode(" "), _c('ServiceClassicBreadcrumb'), _vm._ssrNode(" "), _c('ServiceIconBoxOne'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"brook-section-title text-center\"><h6 class=\"heading heading-h6 theme-color\">HOW WE DO</h6> <div class=\"bkseparator--35\"></div> <h3 class=\"heading heading-h3\">Work process</h3></div> "), _c('GradationOne')], 2)])])]), _vm._ssrNode(" "), _c('CallToAction'), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/services-classic.vue?vue&type=template&id=6a284f0b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-classic.vue?vue&type=script&lang=js&
/* harmony default export */ var services_classicvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    ServiceClassicBreadcrumb: () => __webpack_require__.e(/* import() */ 221).then(__webpack_require__.bind(null, 389)),
    ServiceIconBoxOne: () => __webpack_require__.e(/* import() */ 175).then(__webpack_require__.bind(null, 342)),
    GradationOne: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 253)),
    CallToAction: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 371)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  head() {
    return {
      title: 'Service Classic'
    };
  }
});
// CONCATENATED MODULE: ./pages/services-classic.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_services_classicvue_type_script_lang_js_ = (services_classicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/services-classic.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_services_classicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6284e3dd"
  
)

/* harmony default export */ var services_classic = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=services-classic.js.map
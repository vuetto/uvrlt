exports.ids = [137];
exports.modules = {

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-modern.vue?vue&type=template&id=770a2a34&
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
  }), _vm._ssrNode(" "), _c('ServiceModernBreadcrumb'), _vm._ssrNode(" "), _c('ServiceModern'), _vm._ssrNode(" "), _c('ServiceIconBoxTwo'), _vm._ssrNode(" "), _c('CallToAction'), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/services-modern.vue?vue&type=template&id=770a2a34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-modern.vue?vue&type=script&lang=js&
/* harmony default export */ var services_modernvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    ServiceModernBreadcrumb: () => __webpack_require__.e(/* import() */ 225).then(__webpack_require__.bind(null, 390)),
    ServiceModern: () => __webpack_require__.e(/* import() */ 224).then(__webpack_require__.bind(null, 343)),
    ServiceIconBoxTwo: () => __webpack_require__.e(/* import() */ 144).then(__webpack_require__.bind(null, 344)),
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
      title: 'Service Modern'
    };
  }
});
// CONCATENATED MODULE: ./pages/services-modern.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_services_modernvue_type_script_lang_js_ = (services_modernvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/services-modern.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_services_modernvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39476224"
  
)

/* harmony default export */ var services_modern = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=services-modern.js.map
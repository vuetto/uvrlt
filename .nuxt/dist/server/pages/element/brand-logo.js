exports.ids = [78];
exports.modules = {

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/brand-logo.vue?vue&type=template&id=1a20585a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-wrapper"
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
  }), _vm._ssrNode(" "), _c('Breadcrumb', {
    attrs: {
      "items": _vm.items,
      "title": "Client Logos"
    }
  }), _vm._ssrNode(" "), _c('BrandLogoCarousel'), _vm._ssrNode(" "), _c('BrandLogoCarouselWithNavigation'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bk-brand-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"brand-wrapper\">", "</div>", [_c('BrandLogoWithoutCarousel')], 1)])])])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/brand-logo.vue?vue&type=template&id=1a20585a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/brand-logo.vue?vue&type=script&lang=js&
/* harmony default export */ var brand_logovue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    BrandLogoCarousel: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 255)),
    BrandLogoCarouselWithNavigation: () => __webpack_require__.e(/* import() */ 166).then(__webpack_require__.bind(null, 347)),
    BrandLogoWithoutCarousel: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 322)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false,
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Element',
        to: "/"
      }, {
        text: 'Client Logos',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Client Logos'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/brand-logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_brand_logovue_type_script_lang_js_ = (brand_logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/brand-logo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_brand_logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ce73c44"
  
)

/* harmony default export */ var brand_logo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=brand-logo.js.map
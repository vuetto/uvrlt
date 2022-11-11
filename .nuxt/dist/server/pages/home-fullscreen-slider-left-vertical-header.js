exports.ids = [103];
exports.modules = {

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-fullscreen-slider-left-vertical-header.vue?vue&type=template&id=49b7b402&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderVerticle', {
    on: {
      "togglenav": function ($event) {
        _vm.navOpen = !_vm.navOpen;
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
  }), _vm._ssrNode(" "), _c('HeroFullscreen')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-fullscreen-slider-left-vertical-header.vue?vue&type=template&id=49b7b402&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-fullscreen-slider-left-vertical-header.vue?vue&type=script&lang=js&
/* harmony default export */ var home_fullscreen_slider_left_vertical_headervue_type_script_lang_js_ = ({
  components: {
    HeaderVerticle: () => __webpack_require__.e(/* import() */ 205).then(__webpack_require__.bind(null, 307)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    HeroFullscreen: () => __webpack_require__.e(/* import() */ 153).then(__webpack_require__.bind(null, 308))
  },
  data() {
    return {
      navOpen: false
    };
  },
  head() {
    return {
      title: 'Portfolio Fullscreen Slider'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-fullscreen-slider-left-vertical-header.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_fullscreen_slider_left_vertical_headervue_type_script_lang_js_ = (home_fullscreen_slider_left_vertical_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-fullscreen-slider-left-vertical-header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_fullscreen_slider_left_vertical_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9a3d0088"
  
)

/* harmony default export */ var home_fullscreen_slider_left_vertical_header = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-fullscreen-slider-left-vertical-header.js.map
exports.ids = [83];
exports.modules = {

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/flexible-image-slider.vue?vue&type=template&id=24c7821a&
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
      "title": "Flexible Image Slider"
    }
  }), _vm._ssrNode(" "), _c('FlexibleSlider', {
    attrs: {
      "addClass": "ptb--150 ptb-md--80 ptb-sm--60"
    }
  }), _vm._ssrNode(" "), _c('FlexibleSliderThree'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flexale-image bg_color--1 ptb--150 swiper-custom-arrow swiper-custom-dots ptb-md--80 ptb-sm--60 move-up wow\">", "</div>", [_c('FlexibleSliderFour')], 1), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/flexible-image-slider.vue?vue&type=template&id=24c7821a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/flexible-image-slider.vue?vue&type=script&lang=js&
/* harmony default export */ var flexible_image_slidervue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    FlexibleSlider: () => __webpack_require__.e(/* import() */ 42).then(__webpack_require__.bind(null, 252)),
    FlexibleSliderThree: () => __webpack_require__.e(/* import() */ 201).then(__webpack_require__.bind(null, 349)),
    FlexibleSliderFour: () => __webpack_require__.e(/* import() */ 200).then(__webpack_require__.bind(null, 350)),
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
        text: 'Flexible Image Slider',
        active: true
      }]
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'Flexible Image Slider'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/flexible-image-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_flexible_image_slidervue_type_script_lang_js_ = (flexible_image_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/flexible-image-slider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_flexible_image_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e80b6c90"
  
)

/* harmony default export */ var flexible_image_slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=flexible-image-slider.js.map
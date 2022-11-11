exports.ids = [92];
exports.modules = {

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/testimonial.vue?vue&type=template&id=0f8eaa43&
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
      "title": "Testimonials"
    }
  }), _vm._ssrNode(" "), _c('TestimonialTwo'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5 poss_relative\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('TestimonialWithoutCarousel')], 1)]), _vm._ssrNode(" "), _c('TestimonialThree', {
    attrs: {
      "addClass": "ptb--150 ptb-md--80 ptb-sm--60 bg_color--7"
    }
  }), _vm._ssrNode(" "), _c('TestimonialThree', {
    attrs: {
      "addClass": "ptb--150 ptb-md--80 ptb-sm--60 bg_color--6"
    }
  }), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/testimonial.vue?vue&type=template&id=0f8eaa43&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/testimonial.vue?vue&type=script&lang=js&
/* harmony default export */ var testimonialvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    TestimonialTwo: () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 254)),
    TestimonialWithoutCarousel: () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, 299)),
    TestimonialThree: () => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, 263)),
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
        text: 'Testimonials',
        active: true
      }]
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'Testimonials'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_testimonialvue_type_script_lang_js_ = (testimonialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/testimonial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_testimonialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d082a7c"
  
)

/* harmony default export */ var testimonial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testimonial.js.map
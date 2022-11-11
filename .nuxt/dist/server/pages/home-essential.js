exports.ids = [100];
exports.modules = {

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-essential.vue?vue&type=template&id=35f5e887&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderBlack', {
    staticClass: "bg_color--23 border-bottom",
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
  }), _vm._ssrNode(" "), _c('HeroEssential'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--24 ptb--40\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 col-md-6\"><div class=\"call-content essential-cta-content text-center text-sm-left\"><h3 class=\"text-white wow move-up\">Let’s create something extraordinary together.</h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"call-btn text-center text-md-right mt_mobile--20 wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size essential-btn",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Join us now")])], 1)])], 2)])]), _vm._ssrNode(" "), _c('EssentialIconBox'), _vm._ssrNode(" "), _c('EssentialService'), _vm._ssrNode(" "), _c('EssentialCaseStudy'), _vm._ssrNode(" "), _c('EssentialSkillProgress'), _vm._ssrNode(" "), _c('EssentialTestimonial'), _vm._ssrNode(" "), _c('PricingItemStyleTwo'), _vm._ssrNode(" "), _c('ContactUsThree'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_image--61 ptb--120 ptb-md--80 ptb-sm--60\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-61.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center essential-cta\">", "</div>", [_vm._ssrNode("<h3 class=\"text-white wow move-up\">In love with what we do?</h3> <p class=\"text-white wow move-up\">Let's work together to have new approaches, new ideas and new ways of doing things.</p> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-green text-theme btn-sd-size",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v(" GET IN TOUCH ")])], 1)], 2)])])])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-essential.vue?vue&type=template&id=35f5e887&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-essential.vue?vue&type=script&lang=js&
/* harmony default export */ var home_essentialvue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 278)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroEssential: () => __webpack_require__.e(/* import() */ 152).then(__webpack_require__.bind(null, 300)),
    EssentialIconBox: () => __webpack_require__.e(/* import() */ 194).then(__webpack_require__.bind(null, 301)),
    EssentialService: () => __webpack_require__.e(/* import() */ 195).then(__webpack_require__.bind(null, 302)),
    EssentialCaseStudy: () => __webpack_require__.e(/* import() */ 193).then(__webpack_require__.bind(null, 303)),
    EssentialSkillProgress: () => __webpack_require__.e(/* import() */ 196).then(__webpack_require__.bind(null, 304)),
    EssentialTestimonial: () => __webpack_require__.e(/* import() */ 197).then(__webpack_require__.bind(null, 305)),
    PricingItemStyleTwo: () => __webpack_require__.e(/* import() */ 48).then(__webpack_require__.bind(null, 380)),
    PricingItemStyleTwo: () => __webpack_require__.e(/* import() */ 48).then(__webpack_require__.bind(null, 380)),
    ContactUsThree: () => __webpack_require__.e(/* import() */ 149).then(__webpack_require__.bind(null, 306)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-23', 'template-font-7', 'CerebriSans-font');
  },
  head() {
    return {
      title: 'Home Essential'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-essential.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_essentialvue_type_script_lang_js_ = (home_essentialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-essential.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_essentialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30208f9a"
  
)

/* harmony default export */ var home_essential = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-essential.js.map
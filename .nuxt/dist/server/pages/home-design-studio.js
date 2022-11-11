exports.ids = [98];
exports.modules = {

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-design-studio.vue?vue&type=template&id=115f1fee&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
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
  }), _vm._ssrNode(" "), _c('HeroDesignStudio'), _vm._ssrNode(" "), _c('OurServiceOne'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-team-area bg_color--1 ptb--120 ptb-sm--80 ptb-md--80\">", "</div>", [_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center mb--80\"><h3 class=\"heading heading-h3 font-large\">Teamwork makes the dream works</h3> <div class=\"bkseparator--25\"></div> <div class=\"title-separator w--80 color-red\"></div></div></div></div></div> "), _c('TeamCarouselFull')], 2), _vm._ssrNode(" "), _c('BestService'), _vm._ssrNode(" "), _c('BrandLogoStyleOne'), _vm._ssrNode(" "), _c('TestimonialTwo'), _vm._ssrNode(" "), _c('BlogThree'), _vm._ssrNode(" "), _c('GoogleMap'), _vm._ssrNode(" "), _c('FooterAgency')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-design-studio.vue?vue&type=template&id=115f1fee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-design-studio.vue?vue&type=script&lang=js&
/* harmony default export */ var home_design_studiovue_type_script_lang_js_ = ({
  components: {
    Header: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 280)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroDesignStudio: () => __webpack_require__.e(/* import() */ 151).then(__webpack_require__.bind(null, 379)),
    OurServiceOne: () => __webpack_require__.e(/* import() */ 173).then(__webpack_require__.bind(null, 290)),
    TeamCarouselFull: () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, 291)),
    BestService: () => __webpack_require__.e(/* import() */ 185).then(__webpack_require__.bind(null, 292)),
    BrandLogoStyleOne: () => __webpack_require__.e(/* import() */ 167).then(__webpack_require__.bind(null, 293)),
    TestimonialTwo: () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 254)),
    BlogThree: () => __webpack_require__.e(/* import() */ 164).then(__webpack_require__.bind(null, 294)),
    GoogleMap: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 269)),
    FooterAgency: () => __webpack_require__.e(/* import() */ 43).then(__webpack_require__.bind(null, 378))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-3', 'template-font-1');
  },
  head() {
    return {
      title: 'Home Design Studio'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-design-studio.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_design_studiovue_type_script_lang_js_ = (home_design_studiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-design-studio.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_design_studiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "21ef8f91"
  
)

/* harmony default export */ var home_design_studio = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-design-studio.js.map
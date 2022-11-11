exports.ids = [99];
exports.modules = {

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-digital-agency.vue?vue&type=template&id=2411b4f3&
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
  }), _vm._ssrNode(" "), _c('HeroDigitalAgency'), _vm._ssrNode(" "), _c('ServiceCarousel'), _vm._ssrNode(" "), _c('MotivationalArchive'), _vm._ssrNode(" "), _c('CallToAction'), _vm._ssrNode(" "), _c('PortfolioTwo', {
    attrs: {
      "addClass": "bg_color--5 ptb--150 ptb-md--80 ptb-sm--80 poss_relative",
      "seperator": "true"
    }
  }), _vm._ssrNode(" "), _c('ServiceIconBoxWithTitle'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5 poss_relative\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('TestimonialWithoutCarousel')], 1), _vm._ssrNode(" <div class=\"vc_row-separator triangle triangle--top top\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 0.156661 0.1\"><polygon points=\"0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 \"></polygon></svg></div> "), _vm._ssrNode("<div class=\"more-testimonials-btn text-center mt--50 wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "moredetails-btn font-16",
    attrs: {
      "to": ""
    }
  }, [_vm._v("\n                More testimonials \n                "), _c('i', {
    staticClass: "fa fa-arrow-right"
  })])], 1)], 2), _vm._ssrNode(" "), _c('BrandLogoCarousel'), _vm._ssrNode(" "), _c('FooterStyleFour')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-digital-agency.vue?vue&type=template&id=2411b4f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-digital-agency.vue?vue&type=script&lang=js&
/* harmony default export */ var home_digital_agencyvue_type_script_lang_js_ = ({
  components: {
    Header: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 280)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroDigitalAgency: () => __webpack_require__.e(/* import() */ 207).then(__webpack_require__.bind(null, 295)),
    ServiceCarousel: () => __webpack_require__.e(/* import() */ 174).then(__webpack_require__.bind(null, 296)),
    MotivationalArchive: () => __webpack_require__.e(/* import() */ 211).then(__webpack_require__.bind(null, 297)),
    CallToAction: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 371)),
    PortfolioTwo: () => __webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(null, 274)),
    ServiceIconBoxWithTitle: () => __webpack_require__.e(/* import() */ 176).then(__webpack_require__.bind(null, 298)),
    TestimonialWithoutCarousel: () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, 299)),
    BrandLogoCarousel: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 255)),
    FooterStyleFour: () => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, 277))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-2');
  },
  head() {
    return {
      title: 'Home Digital Agency'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-digital-agency.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_digital_agencyvue_type_script_lang_js_ = (home_digital_agencyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-digital-agency.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_digital_agencyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "785312be"
  
)

/* harmony default export */ var home_digital_agency = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-digital-agency.js.map
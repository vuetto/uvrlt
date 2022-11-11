exports.ids = [107];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-minimal-agency.vue?vue&type=template&id=645aee1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderVerticalOffcanvas', {
    on: {
      "toggleFullpageMenu": function ($event) {
        _vm.fullpageOpen = !_vm.fullpageOpen;
      },
      "togglenav": function ($event) {
        _vm.navOpen = !_vm.navOpen;
      },
      "toggleSearch": function ($event) {
        _vm.searchOpen = !_vm.searchOpen;
      }
    }
  }), _vm._ssrNode(" "), _c('OffcanvasMenu', {
    class: {
      'is-visiable': _vm.fullpageOpen
    },
    on: {
      "toggleFullpageMenu": function ($event) {
        _vm.fullpageOpen = !_vm.fullpageOpen;
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-content ml--100 ml_lg--0 ml_md--0 ml_sm--0\">", "</div>", [_c('HeroMinimalAgency'), _vm._ssrNode(" <div class=\"brook-about-area bg_image--26 ptb--130 ptb-md--80 ptb-sm--60\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-26.jpg')`
  }, null) + "><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"about-content text-center wow move-up\"><h6 class=\"heading heading-h6 theme-color secondary-font font-blod\">ABOUT US</h6> <div class=\"bkseparator--10\"></div> <h2 class=\"heading heading-h2 playfair-font line-height-1-62 font-400\">A small design agency based in New <br> York. We love to find <span class=\"theme-color\">simple solutions</span> to <br> complex challenges.</h2></div></div></div></div></div> "), _c('MinimalMetroGrid', {
    staticClass: "pb--100 pb_md--80 pb_sm--60"
  }), _vm._ssrNode(" "), _c('BrandLogoWithoutCarousel', {
    staticClass: "minimal-agency-brand-logo pb--100 pb_md--80 pb_sm--60"
  }), _vm._ssrNode(" "), _c('FooterStyleThree')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-minimal-agency.vue?vue&type=template&id=645aee1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-minimal-agency.vue?vue&type=script&lang=js&
/* harmony default export */ var home_minimal_agencyvue_type_script_lang_js_ = ({
  components: {
    HeaderVerticalOffcanvas: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 318)),
    OffcanvasMenu: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 289)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroMinimalAgency: () => __webpack_require__.e(/* import() */ 156).then(__webpack_require__.bind(null, 320)),
    MinimalMetroGrid: () => __webpack_require__.e(/* import() */ 46).then(__webpack_require__.bind(null, 321)),
    BrandLogoWithoutCarousel: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 322)),
    FooterStyleThree: () => __webpack_require__.e(/* import() */ 44).then(__webpack_require__.bind(null, 382))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false,
      fullpageOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-19', 'template-font-4');
  },
  head() {
    return {
      title: 'Home Minimal Agency'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-minimal-agency.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_minimal_agencyvue_type_script_lang_js_ = (home_minimal_agencyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-minimal-agency.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_minimal_agencyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f609395"
  
)

/* harmony default export */ var home_minimal_agency = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-minimal-agency.js.map
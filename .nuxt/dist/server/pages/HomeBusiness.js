exports.ids = [55];
exports.modules = {

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/HomeBusiness.vue?vue&type=template&id=3e8af190&
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
  }), _vm._ssrNode(" "), _c('HeroBusiness'), _vm._ssrNode(" "), _c('ServiceOne', {
    attrs: {
      "id": "service"
    }
  }), _vm._ssrNode(" "), _c('PortfolioOne'), _vm._ssrNode(" "), _c('CounterUpOne'), _vm._ssrNode(" "), _c('TeamOne'), _vm._ssrNode(" "), _c('CurveShape', {
    scopedSlots: _vm._u([{
      key: "bgcolor",
      fn: function () {
        return [_c('path', {
          staticStyle: {
            "fill": "#f5f5f5",
            "stroke-miterlimit": "10"
          },
          attrs: {
            "d": "M3360.5,97.739c-242,0-480-48.375-480-48.375\n                    S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5\n                    S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._ssrNode(" "), _c('TestimonialOne'), _vm._ssrNode(" "), _c('BrandLogoCarousel'), _vm._ssrNode(" "), _c('BlogOne'), _vm._ssrNode(" "), _c('ContactUsOne'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/HomeBusiness.vue?vue&type=template&id=3e8af190&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/HomeBusiness.vue?vue&type=script&lang=js&
/* harmony default export */ var HomeBusinessvue_type_script_lang_js_ = ({
  components: {
    Header: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 280)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroBusiness: () => __webpack_require__.e(/* import() */ 34).then(__webpack_require__.bind(null, 335)),
    ServiceOne: () => __webpack_require__.e(/* import() */ 145).then(__webpack_require__.bind(null, 336)),
    PortfolioOne: () => __webpack_require__.e(/* import() */ 235).then(__webpack_require__.bind(null, 337)),
    CounterUpOne: () => __webpack_require__.e(/* import() */ 142).then(__webpack_require__.bind(null, 338)),
    TeamOne: () => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(null, 160)),
    TestimonialOne: () => __webpack_require__.e(/* import() */ 179).then(__webpack_require__.bind(null, 339)),
    BrandLogoCarousel: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 255)),
    BlogOne: () => __webpack_require__.e(/* import() */ 163).then(__webpack_require__.bind(null, 161)),
    CurveShape: () => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, 317)),
    ContactUsOne: () => __webpack_require__.e(/* import() */ 190).then(__webpack_require__.bind(null, 340)),
    Footer: () => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, 381))
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
      title: 'Home Business'
    };
  }
});
// CONCATENATED MODULE: ./pages/HomeBusiness.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_HomeBusinessvue_type_script_lang_js_ = (HomeBusinessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/HomeBusiness.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_HomeBusinessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6feb12ce"
  
)

/* harmony default export */ var HomeBusiness = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=HomeBusiness.js.map
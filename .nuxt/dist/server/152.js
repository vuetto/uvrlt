exports.ids = [152];
exports.modules = {

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroEssential_vue_vue_type_style_index_0_id_57beac74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroEssential_vue_vue_type_style_index_0_id_57beac74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroEssential_vue_vue_type_style_index_0_id_57beac74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroEssential_vue_vue_type_style_index_0_id_57beac74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroEssential_vue_vue_type_style_index_0_id_57beac74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroEssential.vue?vue&type=template&id=57beac74&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "hero-essential-area swiper-arrow-hover"
  }, [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.sliders, function (slider) {
    return _c('div', {
      key: slider.id,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "hero-essential-slide bg-cover",
      style: {
        backgroundImage: `url(${slider.bgImage})`
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('div', {
      staticClass: "hero-content hero-essential"
    }, [_c('h2', {
      staticClass: "hero-title",
      domProps: {
        "innerHTML": _vm._s(slider.heading)
      }
    }), _vm._v(" "), _c('h5', [_vm._v(_vm._s(slider.subHeading))]), _vm._v(" "), _c('n-link', {
      staticClass: "btn-essential",
      attrs: {
        "to": "/about-us-01"
      }
    }, [_vm._v("Explore Now")])], 1)])])])])]);
  }), 0), _vm._ssrNode(" <div class=\"ht-swiper-button ht-swiper-button-prev\" data-v-57beac74><i class=\"ion ion-ios-arrow-back\" data-v-57beac74></i></div> <div class=\"ht-swiper-button ht-swiper-button-next\" data-v-57beac74><i class=\"ion ion-ios-arrow-forward\" data-v-57beac74></i></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroEssential.vue?vue&type=template&id=57beac74&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroEssential.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroEssentialvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        autoplay: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.ht-swiper-button-next',
          prevEl: '.ht-swiper-button-prev'
        }
      },
      sliders: [{
        id: 1,
        heading: "We're here to level <br> up your online <br> presence.",
        subHeading: "A Creative Agency like no other.",
        bgImage: "/img/slider/essential-1.jpg"
      }, {
        id: 2,
        heading: "We're here to level <br> up your online <br> presence.",
        subHeading: "A Creative Agency like no other.",
        bgImage: "/img/slider/essential-2.jpg"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/HeroEssential.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroEssentialvue_type_script_lang_js_ = (HeroEssentialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroEssential.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroEssentialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57beac74",
  "c343d0ac"
  
)

/* harmony default export */ var HeroEssential = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=152.js.map
exports.ids = [143];
exports.modules = {

/***/ 106:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItemFilter_vue_vue_type_style_index_0_id_415651b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItemFilter_vue_vue_type_style_index_0_id_415651b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItemFilter_vue_vue_type_style_index_0_id_415651b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItemFilter_vue_vue_type_style_index_0_id_415651b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItemFilter_vue_vue_type_style_index_0_id_415651b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PortfolioItemFilter.vue?vue&type=template&id=415651b0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bk-portfolio-with-caption-area pt--150 pt_md--80 pt_sm--60 pb--150 pb_md--80 pb_sm--60 poss_relative bk-masonary-wrapper"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center mb--60\"><h3 class=\"heading heading-h3\">Our featured works</h3></div></div></div> <div class=\"row\"><div class=\"controls messonry-button text-center w-100 mb--70\"><button data-filter=\"all\"><span class=\"filter-text\">All</span> <span class=\"filter-counter\">6</span></button> <button data-filter=\".creative\"><span class=\"filter-text\">Creative</span> <span class=\"filter-counter\">3</span></button> <button data-filter=\".design\"><span class=\"filter-text\">Design</span> <span class=\"filter-counter\">2</span></button> <button data-filter=\".digital\"><span class=\"filter-text\">Digital</span> <span class=\"filter-counter\">2</span></button> <button data-filter=\".photography\"><span class=\"filter-text\">Photography</span> <span class=\"filter-counter\">2</span></button></div></div> "), _vm._ssrNode("<div class=\"row mtn--30 box\">", "</div>", _vm._l(_vm.data.portfolioItems.slice(0, 6), function (portfolio) {
    return _vm._ssrNode("<div" + _vm._ssrClass("col-lg-4 col-sm-6 move-up wow mt--30 mix", portfolio.filterClass) + ">", "</div>", [_c('PortfolioItemCenterCaption', {
      attrs: {
        "portfolio": portfolio
      }
    })], 1);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/PortfolioItemFilter.vue?vue&type=template&id=415651b0&

// EXTERNAL MODULE: ./data/portfolio.json
var portfolio = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PortfolioItemFilter.vue?vue&type=script&lang=js&

/* harmony default export */ var PortfolioItemFiltervue_type_script_lang_js_ = ({
  components: {
    PortfolioItemCenterCaption: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 357))
  },
  data() {
    return {
      data: portfolio,
      mixer: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl, {});
    });
  }
});
// CONCATENATED MODULE: ./components/sections/PortfolioItemFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_PortfolioItemFiltervue_type_script_lang_js_ = (PortfolioItemFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/PortfolioItemFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_PortfolioItemFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4689bd28"
  
)

/* harmony default export */ var PortfolioItemFilter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"heading\":\"header 01\",\"image\":\"/img/portfolio/portfolio-1/portfolio-1.jpg\"}],\"portfolioFeaturd\":[{\"id\":1,\"image\":\"/img/portfolio/portfolio-2/portfolio-01.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"},{\"id\":2,\"image\":\"/img/portfolio/portfolio-2/portfolio-02.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Photography\"},{\"id\":3,\"image\":\"/img/portfolio/portfolio-2/portfolio-03.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Design\"},{\"id\":4,\"image\":\"/img/portfolio/portfolio-2/portfolio-04.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Marketing\"},{\"id\":5,\"image\":\"/img/portfolio/portfolio-2/portfolio-05.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"SEO\"},{\"id\":6,\"image\":\"/img/portfolio/portfolio-2/portfolio-06.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"}],\"portfolioItems\":[{\"id\":1,\"image\":\"/img/portfolio/grid/caption-1.jpg\",\"heading\":\"The Language of Designs\",\"slug\":\"the-language-of-designs-1\",\"category\":\"Design\",\"filterClass\":\"creative digital\"},{\"id\":2,\"image\":\"/img/portfolio/grid/caption-2.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-2\",\"category\":\"Marketing\",\"filterClass\":\"photography design\"},{\"id\":3,\"image\":\"/img/portfolio/grid/caption-3.jpg\",\"heading\":\"Smart Sound System\",\"slug\":\"smart-sound-system-3\",\"category\":\"Photography\",\"filterClass\":\"photography creative\"},{\"id\":4,\"image\":\"/img/portfolio/grid/caption-4.jpg\",\"heading\":\"Awe-inspiring Projects\",\"slug\":\"awe-inspiring-projects-4\",\"category\":\"Life Style\",\"filterClass\":\"design\"},{\"id\":5,\"image\":\"/img/portfolio/grid/caption-5.jpg\",\"heading\":\"Gifts for Photography\",\"slug\":\"gifts-for-photography-5\",\"category\":\"Design\",\"filterClass\":\"creative\"},{\"id\":6,\"image\":\"/img/portfolio/grid/caption-6.jpg\",\"heading\":\"Enchanting Portrait Hacks\",\"slug\":\"enchanting-portrait-hacks-6\",\"category\":\"Photography\",\"filterClass\":\"digital\"},{\"id\":7,\"image\":\"/img/portfolio/grid/caption-7.jpg\",\"heading\":\"Digital Marketing Basics\",\"slug\":\"digital-marketing-basics-7\",\"category\":\"Design\"},{\"id\":8,\"image\":\"/img/portfolio/grid/caption-8.jpg\",\"heading\":\"Measure Digital Progress\",\"slug\":\"measure-digital-progress-8\",\"filterClass\":\"digital design\"},{\"id\":9,\"image\":\"/img/portfolio/grid/caption-9.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-9\",\"category\":\"Design\",\"filterClass\":\"digital\"}]}");

/***/ })

};;
//# sourceMappingURL=143.js.map
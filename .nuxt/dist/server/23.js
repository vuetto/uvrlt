exports.ids = [23];
exports.modules = {

/***/ 127:
/***/ (function(module) {

module.exports = JSON.parse("{\"Title\":\"Creative procedure\",\"subTitle\":\"How We Do\",\"gradations\":[{\"id\":1,\"count\":\"1\",\"heading\":\"Brainstorming\",\"desc\":\"study the problem and general materials to find out creative concepts.\"},{\"id\":2,\"count\":\"2\",\"heading\":\"Approaching\",\"desc\":\"quickly translate the visions into reality and patent possible approaches.\"},{\"id\":3,\"count\":\"3\",\"heading\":\"Adjusting\",\"desc\":\"release approaches out into the world, submit it to criticism & adaptation.\"}]}");

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/GradationOne.vue?vue&type=template&id=1bdbfac0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bk-gradation mt--30 mt_sm--5"
  }, [_vm._ssrNode(_vm._ssrList(_vm.data.gradations, function (gradation) {
    return "<div data-wow-delay=\".13s\" class=\"item-grid mt--40 move-up-x wow\"><div class=\"line\"></div> <div class=\"dot-wrap\"><div class=\"dot\"><div class=\"count\">" + _vm._ssrEscape(_vm._s(gradation.count)) + "</div></div></div> <div class=\"content\"><h5 class=\"heading heading-h5\">" + _vm._ssrEscape(_vm._s(gradation.heading)) + "</h5> <p class=\"bk_pra\">" + _vm._ssrEscape(_vm._s(gradation.desc)) + "</p></div></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GradationOne.vue?vue&type=template&id=1bdbfac0&

// EXTERNAL MODULE: ./data/gradation.json
var gradation = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GradationOne.vue?vue&type=script&lang=js&

/* harmony default export */ var GradationOnevue_type_script_lang_js_ = ({
  data() {
    return {
      data: gradation
    };
  }
});
// CONCATENATED MODULE: ./components/GradationOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GradationOnevue_type_script_lang_js_ = (GradationOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/GradationOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GradationOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5245e439"
  
)

/* harmony default export */ var GradationOne = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=23.js.map
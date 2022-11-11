exports.ids = [46];
exports.modules = {

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/MinimalMetroGrid.vue?vue&type=template&id=fb6ad0cc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "brook-portfolio-area bg_color--1 bk-masonary-wrapper"
  }, [_vm._ssrNode("<div class=\"portfolio-grid-metro3 mesonry-list\">", "</div>", [_c('masonry', {
    attrs: {
      "cols": {
        default: 2,
        575: 1
      },
      "gutter": 30
    }
  }, _vm._l(_vm.portfolios, function (portfolio) {
    return _c('div', {
      key: portfolio.id,
      staticClass: "portfolio portfolio_style--1 mt--30"
    }, [_c('div', {
      staticClass: "poss_relative"
    }, [_c('div', {
      staticClass: "thumb"
    }, [_c('img', {
      attrs: {
        "src": portfolio.image,
        "alt": portfolio.heading
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "port-overlay-info with-caption position-left"
    }, [_c('div', {
      staticClass: "hover-action"
    }, [_c('h3', {
      staticClass: "post-overlay-title font-24"
    }, [_c('n-link', {
      attrs: {
        "to": "/portfolio/portfolio-details"
      }
    }, [_vm._v(_vm._s(portfolio.heading))])], 1), _vm._v(" "), _c('div', {
      staticClass: "category"
    }, [_vm._v(_vm._s(portfolio.category))])])])])]);
  }), 0)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MinimalMetroGrid.vue?vue&type=template&id=fb6ad0cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MinimalMetroGrid.vue?vue&type=script&lang=js&
/* harmony default export */ var MinimalMetroGridvue_type_script_lang_js_ = ({
  data() {
    return {
      portfolios: [{
        id: 1,
        heading: "B-sharp High-end Audio",
        category: "Design",
        image: "/img/portfolio/grid/metro3-1.jpg"
      }, {
        id: 2,
        heading: "B-sharp High-end Audio",
        category: "Design",
        image: "/img/portfolio/grid/metro3-2.jpg"
      }, {
        id: 3,
        heading: "B-sharp High-end Audio",
        category: "Design",
        image: "/img/portfolio/grid/metro3-3.jpg"
      }, {
        id: 4,
        heading: "B-sharp High-end Audio",
        category: "Design",
        image: "/img/portfolio/grid/metro3-4.jpg"
      }, {
        id: 5,
        heading: "B-sharp High-end Audio",
        category: "Design",
        image: "/img/portfolio/grid/metro3-5.jpg"
      }, {
        id: 6,
        heading: "B-sharp High-end Audio",
        category: "Design",
        image: "/img/portfolio/grid/metro3-6.jpg"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/MinimalMetroGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MinimalMetroGridvue_type_script_lang_js_ = (MinimalMetroGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MinimalMetroGrid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MinimalMetroGridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c9ad8d0"
  
)

/* harmony default export */ var MinimalMetroGrid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=46.js.map
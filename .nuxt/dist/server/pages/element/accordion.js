exports.ids = [77];
exports.modules = {

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/accordion.vue?vue&type=template&id=20e4bd74&
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
      "title": "Accordion"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bk-accordion-area ptb--150 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_c('AccordionStyleOne')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6 mt_md--60 mt_sm--60\">", "</div>", [_c('AccordionStyleTwo')], 1)], 2)])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/accordion.vue?vue&type=template&id=20e4bd74&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/accordion.vue?vue&type=script&lang=js&
/* harmony default export */ var accordionvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    AccordionStyleOne: () => __webpack_require__.e(/* import() */ 40).then(__webpack_require__.bind(null, 383)),
    AccordionStyleTwo: () => __webpack_require__.e(/* import() */ 183).then(__webpack_require__.bind(null, 391)),
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
        text: 'Accordion',
        active: true
      }]
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'Accordion'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_accordionvue_type_script_lang_js_ = (accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/accordion.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_accordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "282354aa"
  
)

/* harmony default export */ var accordion = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accordion.js.map
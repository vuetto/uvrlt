exports.ids = [90];
exports.modules = {

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/tab.vue?vue&type=template&id=e8ee7ac4&
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
      "title": "Tabs"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"tabs-section section ptb--120 ptb-md--80 ptb-sm--60 bg_color--1\">", "</section>", [_vm._ssrNode("<div class=\"container mtn--50\">", "</div>", [_vm._ssrNode("<div class=\"row mt--50\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<h3 class=\"mb--30\">Basic Tabs</h3> "), _c('TabOne')], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mt--50\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<h3 class=\"mb--30\">Vertical Tabs</h3> "), _c('TabOne', {
    attrs: {
      "addClass": "vertical d-flex flex-wrap"
    }
  })], 2)])], 2)]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/tab.vue?vue&type=template&id=e8ee7ac4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/tab.vue?vue&type=script&lang=js&
/* harmony default export */ var tabvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    TabOne: () => __webpack_require__.e(/* import() */ 226).then(__webpack_require__.bind(null, 355)),
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
        text: 'Tabs',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Tabs'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_tabvue_type_script_lang_js_ = (tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/tab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "463155b8"
  
)

/* harmony default export */ var tab = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tab.js.map
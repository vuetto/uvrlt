exports.ids = [91];
exports.modules = {

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/team.vue?vue&type=template&id=91ea0be4&
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
      "title": "Team Member"
    }
  }), _vm._ssrNode(" "), _c('TeamOne'), _vm._ssrNode(" "), _c('TeamTwo'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-team-area bg_color--1 ptb--100 ptb-sm--60 ptb-md--80\">", "</div>", [_c('TeamCarouselFull')], 1), _vm._ssrNode(" "), _c('TeamThree'), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/team.vue?vue&type=template&id=91ea0be4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/team.vue?vue&type=script&lang=js&
/* harmony default export */ var teamvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    TeamOne: () => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(null, 160)),
    TeamTwo: () => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, 266)),
    TeamCarouselFull: () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, 291)),
    TeamThree: () => __webpack_require__.e(/* import() */ 146).then(__webpack_require__.bind(null, 356)),
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
        text: 'Team Member',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Team Member'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/team.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_teamvue_type_script_lang_js_ = (teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "553489ca"
  
)

/* harmony default export */ var team = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team.js.map
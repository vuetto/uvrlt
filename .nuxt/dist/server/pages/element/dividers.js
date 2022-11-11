exports.ids = [82];
exports.modules = {

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/dividers.vue?vue&type=template&id=dff3edb2&
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
      "title": "Dividers"
    }
  }), _vm._ssrNode(" <div class=\"brook-dividers-area bg_color--1\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"dividers-inner\"><div class=\"space\"></div> <h5 class=\"heading heading-h5\">Basic thick line</h5> <p class=\"bk_pra mt--15\">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts &amp; elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end &amp; back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p> <div class=\"space\"></div> <div class=\"basic-thine-line\"></div></div></div></div></div></div> <div class=\"brook-dividers-area bg_color--1\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"dividers-inner\"><div class=\"space\"></div> <h5 class=\"heading heading-h5\">Dash line</h5> <p class=\"bk_pra mt--15\">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts &amp; elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end &amp; back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p> <div class=\"space\"></div> <div class=\"basic-dash-line\"></div></div></div></div></div></div> <div class=\"brook-dividers-area bg_color--1\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"dividers-inner\"><div class=\"space\"></div> <h5 class=\"heading heading-h5\">Modern dots</h5> <p class=\"bk_pra mt--15\">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts &amp; elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end &amp; back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p> <div class=\"space\"></div> <div class=\"text-center\"><div class=\"basic-modern-dots\"><div class=\"dot first-circle\"></div> <div class=\"dot second-circle\"></div> <div class=\"dot third-circle\"></div></div></div></div></div></div></div></div> <div class=\"brook-dividers-area bg_color--1\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"dividers-inner\"><div class=\"space\"></div> <h5 class=\"heading heading-h5\">Thick short line</h5> <p class=\"bk_pra mt--15\">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts &amp; elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end &amp; back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p> <div class=\"space\"></div> <div class=\"text-center\"><div class=\"basic-short-line\"></div></div></div></div></div></div></div> <div class=\"brook-dividers-area bg_color--1\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"dividers-inner\"><div class=\"space\"></div> <p class=\"bk_pra mt--15\">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts &amp; elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end &amp; back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p> <p class=\"bk_pra mt--15\">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts &amp; elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end &amp; back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p> <div class=\"space\"></div></div></div></div></div></div> "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/dividers.vue?vue&type=template&id=dff3edb2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/dividers.vue?vue&type=script&lang=js&
/* harmony default export */ var dividersvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
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
        text: 'Dividers',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Dividers'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/dividers.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_dividersvue_type_script_lang_js_ = (dividersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/dividers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_dividersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "24468ee7"
  
)

/* harmony default export */ var dividers = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dividers.js.map
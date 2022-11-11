exports.ids = [81];
exports.modules = {

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/contact-subscribe.vue?vue&type=template&id=3dbac0ca&
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
      "title": "Contact & subscribe forms"
    }
  }), _vm._ssrNode(" <div class=\"brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 offset-lg-3\"><div class=\"contact-form\"><form id=\"contact-form\"><div class=\"row\"><div class=\"col-lg-12\"><input name=\"con_name\" type=\"text\" placeholder=\"Name *\"></div> <div class=\"col-lg-12 mt--30\"><input name=\"con_email\" type=\"text\" placeholder=\"Email *\"></div> <div class=\"col-lg-12 mt--30\"><input type=\"text\" name=\"con_phone\" placeholder=\"Phone number\"></div> <div class=\"col-lg-12 mt--30\"><textarea name=\"con_message\" placeholder=\"Your message\"></textarea></div> <div class=\"col-12 mt--30\"><div class=\"check-box\"><input type=\"checkbox\" name=\"check\" id=\"check\"> <label for=\"check\">I agree this terms and condition.</label></div></div> <div class=\"col-lg-12 mt--30\"><input type=\"submit\" value=\"Send message\"></div></div></form></div></div></div></div></div> <div class=\"brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--4\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"contact-form bg_color--1 contact-form--2\"><h4 class=\"heading heading-h4\">Newsletter sign-up</h4> <form><div class=\"row\"><div class=\"col-lg-12\"><input type=\"text\" placeholder=\"Your name\"></div> <div class=\"col-lg-12 mt--30\"><input type=\"email\" placeholder=\"Your e-mail\"></div> <div class=\"col-lg-12\"><div class=\"form-desc\"> Sign up to our newsletter for regular updates and\n                                        more.</div></div> <div class=\"col-lg-12 mt--30\"><input type=\"submit\" placeholder=\"Subscribe\"></div></div></form></div></div> <div class=\"col-md-6 pl--140 pl_md--40 pl_sm--5 mt_sm--40\"><div class=\"contact-form bg_color--2 contact-form--3\"><h4 class=\"heading heading-h4 text-white\">Newsletter sign-up</h4> <form><div class=\"row\"><div class=\"col-lg-12\"><div class=\"input-box mt--30\"><input type=\"email\" placeholder=\"Your e-mail\"> <button class=\"fas fa-envelope\"></button></div></div></div></form></div> <div class=\"contact-form mt--60 contact-form--4\"><h4 class=\"heading heading-h4 text-white\">Subscribe simple form</h4> <form><div class=\"row\"><div class=\"col-lg-12\"><div class=\"input-box\"><input type=\"text\" placeholder=\"Your name\"> <button class=\"fas fa-envelope\"></button></div></div> <div class=\"col-lg-12\"><div class=\"input-box mt--20\"><input type=\"email\" placeholder=\"Your e-mail\"> <button class=\"fas fa-envelope\"></button></div></div></div></form></div></div></div></div></div> "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/contact-subscribe.vue?vue&type=template&id=3dbac0ca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/contact-subscribe.vue?vue&type=script&lang=js&
/* harmony default export */ var contact_subscribevue_type_script_lang_js_ = ({
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
        text: 'Contact & subscribe forms',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Contact & subscribe forms'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/contact-subscribe.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_contact_subscribevue_type_script_lang_js_ = (contact_subscribevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/contact-subscribe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_contact_subscribevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bf6f0280"
  
)

/* harmony default export */ var contact_subscribe = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-subscribe.js.map
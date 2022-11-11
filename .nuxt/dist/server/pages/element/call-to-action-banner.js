exports.ids = [79];
exports.modules = {

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/call-to-action-banner.vue?vue&type=template&id=5b088b2b&
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
      "title": "Call to action banners"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--3 ptb--70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\"><div class=\"call-content text-center text-sm-left\"><h3 class=\"heading heading-h3 text-white wow move-up\">Horizontal solid #1</h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-btn text-center text-sm-right mt_mobile--20 wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--2 ptb--70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\"><div class=\"call-content text-center text-sm-left\"><h3 class=\"heading heading-h3 text-white wow move-up\">Horizontal solid #2</h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-btn text-center text-sm-right mt_mobile--20 wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--1 ptb--70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\"><div class=\"call-content text-center text-sm-left\"><h3 class=\"heading heading-h3 wow move-up\">Horizontal solid #3</h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-btn text-center text-sm-right mt_mobile--20 wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_image--9 ptb--70\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-9.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\"><div class=\"call-content text-center text-sm-left\"><h3 class=\"heading heading-h3 text-white wow move-up\">Horizontal solid #4</h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-btn text-center text-sm-right mt_mobile--20 wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--3 ptb--120 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3 text-white wow move-up\">Vertical solid #1</h3> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--2 ptb--120 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3 text-white wow move-up\">Vertical solid #2</h3> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3 wow move-up\">Vertical solid #3</h3> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div data-black-overlay=\"5\" class=\"brook-call-to-action bg_image--10 ptb--120 ptb-md--80 ptb-sm--60\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-10.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3 text-white wow move-up\">Vertical solid #4</h3> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div data-overlay=\"8\" class=\"brook-call-to-action bg_image--10 ptb--120 ptb-md--80 ptb-sm--60\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-10.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3 text-white wow move-up\">Vertical solid #4</h3> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center wow move-up\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])])])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/call-to-action-banner.vue?vue&type=template&id=5b088b2b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/call-to-action-banner.vue?vue&type=script&lang=js&
/* harmony default export */ var call_to_action_bannervue_type_script_lang_js_ = ({
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
        text: 'Call to action banners',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Call to action banners'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/call-to-action-banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_call_to_action_bannervue_type_script_lang_js_ = (call_to_action_bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/call-to-action-banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_call_to_action_bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79f9ee43"
  
)

/* harmony default export */ var call_to_action_banner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=call-to-action-banner.js.map
exports.ids = [74];
exports.modules = {

/***/ 114:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"position\":\"Senior designer\",\"aboutHeading\":\"ABOUT\",\"location\":\"New York City\",\"desc\":\"The quality, integrity, and commitment of our employees are key factors in our company’s growth, market presence and our ability to help our clients stay a step ahead of the competition.\",\"requirementHeading\":\"REQUIREMENTS\",\"requirements\":[\"Ensure high quality delivery\",\"Experience with social media\",\"Good command of Java, PHP, etc.\",\"Participate in business discussions\",\"Good knowledge of technologies & architecture\",\"Follow strictly HIPAA and PHI data security guidelines\"]},{\"id\":2,\"position\":\"Project manager\",\"aboutHeading\":\"ABOUT\",\"location\":\"New York City\",\"desc\":\"The quality, integrity, and commitment of our employees are key factors in our company’s growth, market presence and our ability to help our clients stay a step ahead of the competition.\",\"requirementHeading\":\"REQUIREMENTS\",\"requirements\":[\"Ensure high quality delivery\",\"Experience with social media\",\"Good command of Java, PHP, etc.\",\"Participate in business discussions\",\"Good knowledge of technologies & architecture\",\"Follow strictly HIPAA and PHI data security guidelines\"]},{\"id\":3,\"position\":\"Web Developer\",\"aboutHeading\":\"ABOUT\",\"location\":\"New York City\",\"desc\":\"The quality, integrity, and commitment of our employees are key factors in our company’s growth, market presence and our ability to help our clients stay a step ahead of the competition.\",\"requirementHeading\":\"REQUIREMENTS\",\"requirements\":[\"Ensure high quality delivery\",\"Experience with social media\",\"Good command of Java, PHP, etc.\",\"Participate in business discussions\",\"Good knowledge of technologies & architecture\",\"Follow strictly HIPAA and PHI data security guidelines\"]},{\"id\":4,\"position\":\"Marketing Specialist\",\"aboutHeading\":\"ABOUT\",\"location\":\"New York City\",\"desc\":\"The quality, integrity, and commitment of our employees are key factors in our company’s growth, market presence and our ability to help our clients stay a step ahead of the competition.\",\"requirementHeading\":\"REQUIREMENTS\",\"requirements\":[\"Ensure high quality delivery\",\"Experience with social media\",\"Good command of Java, PHP, etc.\",\"Participate in business discussions\",\"Good knowledge of technologies & architecture\",\"Follow strictly HIPAA and PHI data security guidelines\"]}]");

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/career.vue?vue&type=template&id=9700141e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderAbout', {
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
  }), _vm._ssrNode(" <div data-black-overlay=\"2\" class=\"breadcrumb-area pt--250 pb--340 pt_md--150 pb_md--150 pt_sm--150 pb_sm--150 bg_image--56 breadcrumb-title-bar breadcrumb-title-white\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-56.jpg')`
  }, null) + "><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"breadcrumb-inner text-center\"><h1 class=\"heading heading-h1\">Join our team!</h1></div></div></div></div></div> "), _vm._ssrNode("<div class=\"brook-career-area pb--70 space_dec--100 pt_md--70 pt_sm--70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row mtn--40\">", "</div>", _vm._l(_vm.data, function (career) {
    return _vm._ssrNode("<div class=\"col-md-6 mt--40\">", "</div>", [_c('CareerItem', {
      attrs: {
        "career": career
      }
    })], 1);
  }), 0)])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/career.vue?vue&type=template&id=9700141e&

// EXTERNAL MODULE: ./data/career.json
var career = __webpack_require__(114);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/career.vue?vue&type=script&lang=js&

/* harmony default export */ var careervue_type_script_lang_js_ = ({
  components: {
    HeaderAbout: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 248)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    CareerItem: () => __webpack_require__.e(/* import() */ 187).then(__webpack_require__.bind(null, 268)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      data: career,
      navOpen: false,
      searchOpen: false
    };
  },
  head() {
    return {
      title: 'Career'
    };
  }
});
// CONCATENATED MODULE: ./pages/career.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_careervue_type_script_lang_js_ = (careervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/career.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_careervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0b0c4b90"
  
)

/* harmony default export */ var pages_career = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=career.js.map
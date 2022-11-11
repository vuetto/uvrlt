exports.ids = [139];
exports.modules = {

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/team-carousel-02.vue?vue&type=template&id=59496736&
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
  }), _vm._ssrNode(" <div class=\"brook-breadcrumb-area pt--130 pb--145 bg_color--1 breadcrumb-title-bar\"><div class=\"container-fluid plr--150 plr_md--50 plr_sm--20\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"breadcrumb-inner text-center\"><h1 class=\"heading heading-h1 line-height-1-5\">The A-team of <span class=\"theme-color\">awesomeness</span><br> &amp; creative people</h1></div></div></div></div></div> "), _vm._ssrNode("<div class=\"brook-team-area bg_color--1\">", "</div>", [_c('TeamCarouselFull')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3\">Start working together?</h3> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])])])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/team-carousel-02.vue?vue&type=template&id=59496736&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/team-carousel-02.vue?vue&type=script&lang=js&
/* harmony default export */ var team_carousel_02vue_type_script_lang_js_ = ({
  components: {
    HeaderAbout: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 248)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    TeamCarouselFull: () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, 291)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'Team Carousel 02'
    };
  }
});
// CONCATENATED MODULE: ./pages/team-carousel-02.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_team_carousel_02vue_type_script_lang_js_ = (team_carousel_02vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/team-carousel-02.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_team_carousel_02vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5994cc4e"
  
)

/* harmony default export */ var team_carousel_02 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team-carousel-02.js.map
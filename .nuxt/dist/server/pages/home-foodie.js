exports.ids = [101];
exports.modules = {

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-foodie.vue?vue&type=template&id=61b0f062&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderForOffCanvas', {
    on: {
      "toggleFullpageMenu": function ($event) {
        _vm.fullpageOpen = !_vm.fullpageOpen;
      },
      "togglenav": function ($event) {
        _vm.navOpen = !_vm.navOpen;
      }
    }
  }), _vm._ssrNode(" "), _c('OffcanvasMenu', {
    class: {
      'is-visiable': _vm.fullpageOpen
    },
    on: {
      "toggleFullpageMenu": function ($event) {
        _vm.fullpageOpen = !_vm.fullpageOpen;
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brood-slider-area foodie-slider\">", "</div>", [_vm._ssrNode("<div class=\"foodie-slider-inner background-marque\">", "</div>", [_vm._ssrNode("<div class=\"content text-center\">", "</div>", [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<img src=\"/img/others/foodie_text.png\" alt=\"Multipurpose\"> "), _vm._ssrNode("<div class=\"slider-btn mt--40\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-dark btn-sd-size btn-rounded space-between",
    attrs: {
      "to": "/about-us-01"
    }
  }, [_vm._v("Explore Now")])], 1)], 2)])])]), _vm._ssrNode(" <footer id=\"bk-footer-area\" class=\"page-footer pt--75 pb--40 pl--85 pr--85 pl_sm--30 pr_sm--30 pl_md--30 pr_md--30 bg_color--1\"><div class=\"copyright_style--2\"><div class=\"row align-items-center\"><div class=\"col-xl-4 col-lg-6 col-sm-12 col-12\"><div class=\"copyright-left text-center text-lg-left\"><p class=\"bk_pra font-16 line-height-1-88 color-dark\">Brook Vue Template <br> \n                        © Designed in 2022 by <strong>Hasthemes</strong></p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-12 col-12 mt_md--40 mt_sm--40\"><div class=\"bk-copyright-center\"><div class=\"footer-widget news-bulletin\"><div class=\"inner text-center\"><div class=\"link bk-hover mb--15\"><h4 class=\"heading heading-h4\"><a href=\"mailto:brookstudio@example.com\" class=\"color-dark\">brookstudio@example.com</a></h4></div> <h6 class=\"heading heading-h6 letter-spacing-3 color-dark\">I WOULD LOVE TO HEAR FROM YOU</h6></div></div></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-12 col-12 mt_lg--40 mt_md--40 mt_sm--40\"><div class=\"bk-copyright-right text-center text-lg-right\"><p class=\"bk_pra font-16 color-dark\">Follow us on</p> <div class=\"bkseparator--25\"></div> <ul class=\"social-icon icon-border-rounded style-solid-thin-rounded-icon icon-size-medium text-center text-lg-right\"><li class=\"facebook\"><a href=\"#\" class=\"link\"><i class=\"fab fa-facebook\"></i></a></li> <li class=\"twitter\"><a href=\"#\" class=\"link\"><i class=\"fab fa-twitter\"></i></a></li> <li class=\"instagram\"><a href=\"#\" class=\"link\"><i class=\"fab fa-instagram\"></i></a></li> <li class=\"dribbble\"><a href=\"#\" class=\"link\"><i class=\"fab fa-dribbble\"></i></a></li> <li class=\"pinterest\"><a href=\"#\" class=\"link\"><i class=\"fab fa-pinterest\"></i></a></li></ul></div></div></div></div></footer>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-foodie.vue?vue&type=template&id=61b0f062&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-foodie.vue?vue&type=script&lang=js&
/* harmony default export */ var home_foodievue_type_script_lang_js_ = ({
  components: {
    HeaderForOffCanvas: () => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, 288)),
    OffcanvasMenu: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 289)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249))
  },
  data() {
    return {
      navOpen: false,
      fullpageOpen: false
    };
  },
  mounted() {
    const marque = document.querySelector('.background-marque');
    function marqueBg() {
      var t = 0;
      var i = 1;
      setInterval(function () {
        t += i;
        marque.style.backgroundPositionX = -t + "px";
      }, 10);
    }
    marqueBg();
  },
  head() {
    return {
      title: 'Home Foodie'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-foodie.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_foodievue_type_script_lang_js_ = (home_foodievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-foodie.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_foodievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64108944"
  
)

/* harmony default export */ var home_foodie = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-foodie.js.map
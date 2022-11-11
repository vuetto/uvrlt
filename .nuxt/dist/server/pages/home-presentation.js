exports.ids = [112];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_presentation_vue_vue_type_style_index_0_id_b4813e92_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_presentation_vue_vue_type_style_index_0_id_b4813e92_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_presentation_vue_vue_type_style_index_0_id_b4813e92_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_presentation_vue_vue_type_style_index_0_id_b4813e92_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_presentation_vue_vue_type_style_index_0_id_b4813e92_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-presentation.vue?vue&type=template&id=b4813e92&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderForOffCanvasBlack', {
    on: {
      "toggleFullpageMenu": function ($event) {
        _vm.fullpageOpen = !_vm.fullpageOpen;
      },
      "togglenav": function ($event) {
        _vm.navOpen = !_vm.navOpen;
      },
      "toggleSearch": function ($event) {
        _vm.searchOpen = !_vm.searchOpen;
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
  }), _vm._ssrNode(" "), _c('SearchPopup', {
    class: {
      'search-popup-open': _vm.searchOpen
    },
    on: {
      "toggleSearch": function ($event) {
        _vm.searchOpen = !_vm.searchOpen;
      }
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"presentation-home\">", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, [_c('div', {
    staticClass: "bg-image-1 bg-cover swiper-slide"
  }, [_c('div', {
    staticClass: "presentation-slider-wrapper"
  }, [_c('div', {
    staticClass: "presentation-inner"
  }, [_c('div', {
    staticClass: "inner slider"
  }, [_c('h2', {
    staticClass: "heading text-white"
  }, [_vm._v("the innovative "), _c('br'), _vm._v(" technology")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "presentation-slider-wrapper"
  }, [_c('div', {
    staticClass: "presentation-inner"
  }, [_c('div', {
    staticClass: "inner about-inner"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h6', {
    staticClass: "heading heading-h6 theme-color"
  }, [_vm._v("PHILOSOPHY")]), _vm._v(" "), _c('div', {
    staticClass: "title mt--40 mb--50"
  }, [_c('h2', {
    staticClass: "heading heading-h2"
  }, [_vm._v("We design & build brands, campaigns for businesses.")])]), _vm._v(" "), _c('p', {
    staticClass: "bk_pra"
  }, [_vm._v("Brook is a multi-purpose WordPress theme for big and small-sized features & responsive layouts. Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through cooperation.")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 d-none d-md-block"
  }, [_c('div', {
    staticClass: "thumbnail video-with-thumb"
  }, [_c('img', {
    attrs: {
      "src": "/img/slider/presentation/home-presentation-image-03.png",
      "alt": "multi-purpose"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "video-btn position--center"
  }, [_c('a', {
    staticClass: "play__btn",
    attrs: {
      "href": "https://www.youtube.com/watch?v=9No-FiEInLA",
      "target": "_blank"
    }
  }, [_c('div', {
    staticClass: "video-icon third-icon"
  })])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "bg-image-2 bg-cover swiper-slide"
  }, [_c('div', {
    staticClass: "presentation-slider-wrapper"
  }, [_c('div', {
    staticClass: "presentation-inner"
  }, [_c('div', {
    staticClass: "inner about-service"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4 col-md-4 d-none d-md-block"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    attrs: {
      "src": "/img/slider/presentation/iphone-02.png",
      "alt": "Multipurpose"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-8 col-md-8"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "brook-section-title text-left"
  }, [_c('h2', {
    staticClass: "heading heading-h2 second-font text-white"
  }, [_vm._v("List of features")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 d-none d-md-block mt--50"
  }, [_c('div', {
    staticClass: "single-motive-speach"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion-ios-infinite theme-color"
  })]), _vm._v(" "), _c('div', {
    staticClass: "content text-left"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("Digital marketing")]), _vm._v(" "), _c('p', {
    staticClass: "bk_pra heading-font text-white"
  }, [_vm._v("We conduct the marketing of  products & services using the market's latest digital technologies.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 d-none d-md-block mt--50"
  }, [_c('div', {
    staticClass: "single-motive-speach"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion-ios-baseball-outline theme-color"
  })]), _vm._v(" "), _c('div', {
    staticClass: "content text-left"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("SEO marketing")]), _vm._v(" "), _c('p', {
    staticClass: "bk_pra heading-font text-white"
  }, [_vm._v("Our SEO approach is to focus on growing brand visibility in organic search engine results.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 mt--50"
  }, [_c('div', {
    staticClass: "single-motive-speach"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion-pinpoint theme-color"
  })]), _vm._v(" "), _c('div', {
    staticClass: "content text-left"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("Resource use")]), _vm._v(" "), _c('p', {
    staticClass: "bk_pra heading-font text-white"
  }, [_vm._v("We conduct the marketing of   products & services using latest digital technologies.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 mt--50"
  }, [_c('div', {
    staticClass: "single-motive-speach"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion-ios-infinite theme-color"
  })]), _vm._v(" "), _c('div', {
    staticClass: "content text-left"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("Digital marketing")]), _vm._v(" "), _c('p', {
    staticClass: "bk_pra heading-font text-white"
  }, [_vm._v("We successfully implemented  numerous UI/UX projects for both global & local clients.")])])])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "presentation-slider-wrapper"
  }, [_c('div', {
    staticClass: "presentation-inner"
  }, [_c('div', {
    staticClass: "inner skill-area"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-9 col-md-12"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "skill-content"
  }, [_c('h2', {
    staticClass: "heading heading-h2 theme-color"
  }, [_vm._v("We're always ready for challenges.")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-2 d-none d-xl-block"
  }, [_c('div', {
    staticClass: "what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20"
  }, [_c('div', {
    staticClass: "basic-separator line-3"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-lg-6 col-md-6 col-sm-12 d-none d-md-block"
  }, [_c('div', {
    staticClass: "what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h5', {
    staticClass: "heading heading-h5"
  }, [_vm._v("Fresh ideas")]), _vm._v(" "), _c('div', {
    staticClass: "bkseparator--20"
  }), _vm._v(" "), _c('p', {
    staticClass: "bk_pra"
  }, [_vm._v("Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-lg-6 col-md-6 col-sm-12 offset-xl-1"
  }, [_c('div', {
    staticClass: "what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h5', {
    staticClass: "heading heading-h5"
  }, [_vm._v("Unique designs")]), _vm._v(" "), _c('div', {
    staticClass: "bkseparator--20"
  }), _vm._v(" "), _c('p', {
    staticClass: "bk_pra"
  }, [_vm._v("Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher customizability as well as flexibility.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10 col-xl-10 offset-xl-2 mt--80 mt_md--30 mt_sm--20"
  }, [_c('div', {
    staticClass: "brook-skill"
  }, [_c('div', {
    staticClass: "progress-charts"
  }, [_c('h6', {
    staticClass: "heading heading-h6"
  }, [_vm._v("UI/UX")]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar fadeInLeft custom-color--2",
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "data-wow-duration": "0.5s",
      "data-wow-delay": ".3s",
      "role": "progressbar",
      "aria-valuenow": "85",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  }, [_c('span', {
    staticClass: "percent-label"
  }, [_vm._v("85%")])])])]), _vm._v(" "), _c('div', {
    staticClass: "progress-charts mt--45"
  }, [_c('h6', {
    staticClass: "heading heading-h6"
  }, [_vm._v("Ideas")]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar fadeInLeft custom-color--3",
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "data-wow-duration": "0.7s",
      "data-wow-delay": ".5s",
      "role": "progressbar",
      "aria-valuenow": "85",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  }, [_c('span', {
    staticClass: "percent-label"
  }, [_vm._v("85%")])])])]), _vm._v(" "), _c('div', {
    staticClass: "progress-charts mt--45"
  }, [_c('h6', {
    staticClass: "heading heading-h6"
  }, [_vm._v("Marketing")]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar fadeInLeft custom-color--4",
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "data-wow-duration": "0.8s",
      "data-wow-delay": ".8s",
      "role": "progressbar",
      "aria-valuenow": "90",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  }, [_c('span', {
    staticClass: "percent-label"
  }, [_vm._v("90%")])])])])])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "bg-image-3 bg-cover swiper-slide"
  }, [_c('div', {
    staticClass: "presentation-slider-wrapper"
  }, [_c('div', {
    staticClass: "presentation-inner contact-address-wrapper"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-7 col-md-12 col-12"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "brook-section-title mb--55 mb_sm--30 mb_md--30"
  }, [_c('h3', {
    staticClass: "heading heading-h3 text-white"
  }, [_vm._v("We collaborate with ambitious  something great together.")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 col-md-6 col-12"
  }, [_c('div', {
    staticClass: "classic-address text-left"
  }, [_c('h4', {
    staticClass: "heading heading-h4 text-white"
  }, [_vm._v("Visit our studio at")]), _vm._v(" "), _c('div', {
    staticClass: "desc mt--15"
  }, [_c('p', {
    staticClass: "bk_pra line-height-2-22 text-white"
  }, [_vm._v("Your address goes here "), _c('br'), _vm._v(" Venaville 10010, USA")])])]), _vm._v(" "), _c('div', {
    staticClass: "classic-address text-left mt--60 mt_sm--30 mt_md--30"
  }, [_c('h4', {
    staticClass: "heading heading-h4 text-white text-white"
  }, [_vm._v("Message us")]), _vm._v(" "), _c('div', {
    staticClass: "desc mt--15"
  }, [_c('p', {
    staticClass: "bk_pra line-height-2-22 text-white"
  }, [_vm._v("info@example.com "), _c('br'), _vm._v("0123456789")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 col-md-6 col-12 mt_sm--30 d-none d-md-block"
  }, [_c('div', {
    staticClass: "footer-widget text-var--2 menu--about"
  }, [_c('h2', {
    staticClass: "widgettitle text-white"
  }, [_vm._v("About us")]), _vm._v(" "), _c('div', {
    staticClass: "footer-menu"
  }, [_c('ul', {
    staticClass: "ft-menu-list bk-hover"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("About Us")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Team")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Career")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Services")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Contact")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-5 col-md-6 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "google-map-area bg_color--1 text-center"
  }, [_c('div', {
    staticClass: "brook-section-title"
  }, [_c('h3', {
    staticClass: "heading heading-h3"
  }, [_vm._v("Default Style")])]), _vm._v(" "), _c('GmapMap', {
    attrs: {
      "center": {
        lat: 52.482900,
        lng: -1.893460
      },
      "zoom": 15,
      "map-type-id": "terrain"
    }
  })], 1)])])])])])])])]), _vm._ssrNode(" <div class=\"swiper-pagination\"></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-presentation.vue?vue&type=template&id=b4813e92&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-presentation.vue?vue&type=script&lang=js&
/* harmony default export */ var home_presentationvue_type_script_lang_js_ = ({
  components: {
    HeaderForOffCanvasBlack: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 323)),
    OffcanvasMenu: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 289)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false,
      fullpageOpen: false,
      swiperOption: {
        loop: true,
        speed: 1000,
        mousewheel: true,
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    };
  },
  head() {
    return {
      title: 'Home Presentation'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-presentation.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_presentationvue_type_script_lang_js_ = (home_presentationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-presentation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(121)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_presentationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7458b104"
  
)

/* harmony default export */ var home_presentation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=home-presentation.js.map
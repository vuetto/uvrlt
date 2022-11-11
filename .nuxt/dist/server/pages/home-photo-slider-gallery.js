exports.ids = [110];
exports.modules = {

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-photo-slider-gallery.vue?vue&type=template&id=42ea85bb&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderVerticalOffcanvas', {
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-content ml--100 ml_lg--0 ml_md--0 ml_sm--0\">", "</div>", [_c('HeroPhotoSliderGallery')], 1), _vm._ssrNode(" <footer class=\"bk-footer-area plr--100 plr_sm--10\"><div class=\"copyright-area pb--45\"><div class=\"copyright-right text-center text-md-right\"><p class=\"bk_pra heading-font2 color-dark\">© 2022 <b>Brook</b> Made with <i class=\"fa fa-heart text-danger\"></i> by <a href=\"https://hasthemes.com/\"><b>HasThemes</b></a></p></div></div></footer>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-photo-slider-gallery.vue?vue&type=template&id=42ea85bb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-photo-slider-gallery.vue?vue&type=script&lang=js&
/* harmony default export */ var home_photo_slider_galleryvue_type_script_lang_js_ = ({
  components: {
    HeaderVerticalOffcanvas: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 318)),
    OffcanvasMenu: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 289)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroPhotoSliderGallery: () => __webpack_require__.e(/* import() */ 45).then(__webpack_require__.bind(null, 319))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false,
      fullpageOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'Home Photo Slider Gallery'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-photo-slider-gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_photo_slider_galleryvue_type_script_lang_js_ = (home_photo_slider_galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-photo-slider-gallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_photo_slider_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12d9ef76"
  
)

/* harmony default export */ var home_photo_slider_gallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-photo-slider-gallery.js.map
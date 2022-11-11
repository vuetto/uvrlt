exports.ids = [10];
exports.modules = {

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=template&id=ba0be586&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bk-brand-area bg_color--1 ptb--60"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"brand-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"brand__list brand-default brand-style--1\">", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.data, function (brand) {
    return _c('div', {
      key: brand.id,
      staticClass: "brand swiper-slide"
    }, [_c('n-link', {
      attrs: {
        "to": ""
      }
    }, [_c('img', {
      attrs: {
        "src": brand.logo,
        "alt": "logo image"
      }
    })])], 1);
  }), 0)], 1)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=template&id=ba0be586&

// EXTERNAL MODULE: ./data/brandLogo.json
var brandLogo = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=script&lang=js&

/* harmony default export */ var BrandLogoCarouselvue_type_script_lang_js_ = ({
  data() {
    return {
      data: brandLogo,
      swiperOption: {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        // Responsive breakpoints
        breakpoints: {
          1200: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 2
          }
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandLogoCarouselvue_type_script_lang_js_ = (BrandLogoCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandLogoCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35341a88"
  
)

/* harmony default export */ var BrandLogoCarousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"logo\":\"/img/testimonial/clint-2/weyz.png\"},{\"id\":2,\"logo\":\"/img/testimonial/clint-2/bjk.png\"},{\"id\":3,\"logo\":\"/img/testimonial/clint-2/Dan-Lok.png\"},{\"id\":4,\"logo\":\"/img/testimonial/clint-2/heaselogo.png\"},{\"id\":5,\"logo\":\"/img/testimonial/clint-2/cdg.png\"},{\"id\":6,\"logo\":\"/img/testimonial/clint-2/cw.png\"}]");

/***/ })

};;
//# sourceMappingURL=10.js.map
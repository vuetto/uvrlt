exports.ids = [166];
exports.modules = {

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarouselWithNavigation.vue?vue&type=template&id=45e2b870&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bk-brand-area ptb--150 section-separator-with--border ptb-md--80 ptb-sm--60 swiper-arrow-hover"
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
  }), 0), _vm._ssrNode(" <div class=\"ht-swiper-button ht-swiper-button-prev\"><i class=\"ion ion-ios-arrow-back\"></i></div> <div class=\"ht-swiper-button ht-swiper-button-next\"><i class=\"ion ion-ios-arrow-forward\"></i></div>")], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BrandLogoCarouselWithNavigation.vue?vue&type=template&id=45e2b870&

// EXTERNAL MODULE: ./data/brandLogo.json
var brandLogo = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarouselWithNavigation.vue?vue&type=script&lang=js&

/* harmony default export */ var BrandLogoCarouselWithNavigationvue_type_script_lang_js_ = ({
  data() {
    return {
      data: brandLogo,
      swiperOption: {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        navigation: {
          nextEl: '.ht-swiper-button-next',
          prevEl: '.ht-swiper-button-prev'
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
// CONCATENATED MODULE: ./components/BrandLogoCarouselWithNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandLogoCarouselWithNavigationvue_type_script_lang_js_ = (BrandLogoCarouselWithNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BrandLogoCarouselWithNavigation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandLogoCarouselWithNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6cb4bd22"
  
)

/* harmony default export */ var BrandLogoCarouselWithNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"logo\":\"/img/testimonial/clint-2/weyz.png\"},{\"id\":2,\"logo\":\"/img/testimonial/clint-2/bjk.png\"},{\"id\":3,\"logo\":\"/img/testimonial/clint-2/Dan-Lok.png\"},{\"id\":4,\"logo\":\"/img/testimonial/clint-2/heaselogo.png\"},{\"id\":5,\"logo\":\"/img/testimonial/clint-2/cdg.png\"},{\"id\":6,\"logo\":\"/img/testimonial/clint-2/cw.png\"}]");

/***/ })

};;
//# sourceMappingURL=166.js.map
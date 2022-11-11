exports.ids = [206];
exports.modules = {

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroAuthenticStudio.vue?vue&type=template&id=4f6af77e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "brook-hero-number-slider-area position-relative"
  }, [_vm._ssrNode("<div class=\"brook-element-carousel number-dot\">", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.sliders, function (slide) {
    return _c('div', {
      key: slide.id,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "hero-item bg-image",
      style: {
        backgroundImage: `url(${slide.bgImage})`
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('div', {
      staticClass: "hero-content-2 center"
    }, [_c('h6', [_vm._v(_vm._s(slide.subHeading))]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(slide.heading))]), _vm._v(" "), _c('n-link', {
      staticClass: "brook-btn bk-btn-white btn-sd-size btn-rounded space-between",
      attrs: {
        "to": "/about-us-01"
      }
    }, [_vm._v("Explore Now")])], 1)])])])])]);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination\"></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroAuthenticStudio.vue?vue&type=template&id=4f6af77e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroAuthenticStudio.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroAuthenticStudiovue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      },
      sliders: [{
        id: 1,
        heading: "revolutionary creations and exquisite designs.",
        subHeading: "WE WORK SMART, WE PLAY HARD",
        bgImage: "/img/slider/authentic-studio-slide-01.jpg"
      }, {
        id: 2,
        heading: "revolutionary creations and exquisite designs.",
        subHeading: "WE WORK SMART, WE PLAY HARD",
        bgImage: "/img/slider/authentic-studio-slide-02.jpg"
      }, {
        id: 3,
        heading: "revolutionary creations and exquisite designs.",
        subHeading: "WE WORK SMART, WE PLAY HARD",
        bgImage: "/img/slider/authentic-studio-slide-03.jpg"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/HeroAuthenticStudio.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroAuthenticStudiovue_type_script_lang_js_ = (HeroAuthenticStudiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroAuthenticStudio.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroAuthenticStudiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6fb695af"
  
)

/* harmony default export */ var HeroAuthenticStudio = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=206.js.map
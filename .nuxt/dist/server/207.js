exports.ids = [207];
exports.modules = {

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroDigitalAgency.vue?vue&type=template&id=692df4d6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "brook-hero-number-slider-area position-relative"
  }, [_vm._ssrNode("<div class=\"brook-element-carousel number-dot\">", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.sliders, function (slider) {
    return _c('div', {
      key: slider.id,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "hero-item bg-image",
      style: {
        backgroundImage: `url(${slider.bgImage})`
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('div', {
      staticClass: "hero-content-2 center"
    }, [_c('h3', [_vm._v(_vm._s(slider.heading))]), _vm._v(" "), _c('n-link', {
      staticClass: "bk-btn theme-btn",
      attrs: {
        "to": "/about-us-01"
      }
    }, [_vm._v("Explore Now")])], 1)])])])])]);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination\"></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroDigitalAgency.vue?vue&type=template&id=692df4d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroDigitalAgency.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroDigitalAgencyvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
        loop: false,
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
        heading: "Bringing the best digital solutions for your brands",
        bgImage: "/img/slider/digital-agency-slide-01.jpg"
      }, {
        id: 2,
        heading: "Bringing the best digital solutions for your brands",
        bgImage: "/img/slider/digital-agency-slide-02.jpg"
      }, {
        id: 3,
        heading: "Bringing the best digital solutions for your brands",
        bgImage: "/img/slider/digital-agency-slide-03.jpg"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/HeroDigitalAgency.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroDigitalAgencyvue_type_script_lang_js_ = (HeroDigitalAgencyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroDigitalAgency.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroDigitalAgencyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c146d1ce"
  
)

/* harmony default export */ var HeroDigitalAgency = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=207.js.map
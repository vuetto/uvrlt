exports.ids = [133];
exports.modules = {

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pricing-plans.vue?vue&type=template&id=2f63b485&
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"breadcrumb-area pt--210 pt_lg--200 pt_md--50 pt_sm--50 pb--50 bg_image--54 breadcrumb-title-bar breadcrumb-title-white\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-54.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"breadcrumb-inner text-center\">", "</div>", [_vm._ssrNode("<h1 class=\"heading heading-h1\">Pricing plans</h1> "), _vm._ssrNode("<div class=\"breadcrumb-insite mt--140 mt_sm--50\">", "</div>", [_c('b-breadcrumb', {
    staticClass: "core-breadcrumb",
    attrs: {
      "items": _vm.items
    }
  })], 1)], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-pricing-table-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"choose-us-area pb--150 pb_md--80 pb_sm--60\"><div class=\"row\"><div class=\"col-lg-4 col-sm-6\"><div class=\"choose-plan-area\"><h3 class=\"heading heading-h3\">" + _vm._ssrEscape(_vm._s(_vm.data.pricingPlanHeading)) + "</h3> <div class=\"desc mt--25\"><p class=\"bk_pra\">" + _vm._ssrEscape(_vm._s(_vm.data.pricingPlanText)) + "</p></div></div></div> <div class=\"col-lg-4 offset-lg-1 col-sm-6 mt_mobile--40\"><div class=\"plans-about\"><h6 class=\"heading heading-h6 theme-color\">" + _vm._ssrEscape(_vm._s(_vm.data.pricingAboutTitle)) + "</h6> <div class=\"desc mt--25\"><p class=\"bk_pra\">" + _vm._ssrEscape(_vm._s(_vm.data.pricingAboutText)) + "</p></div></div></div> <div class=\"col-lg-3 col-sm-6 mt_md--40 mt_sm--40\"><div class=\"plans-about\"><h6 class=\"heading heading-h6 theme-color\">" + _vm._ssrEscape(_vm._s(_vm.data.pricingFeaturesTitle)) + "</h6> <div class=\"bk-list--2 mt--25 move-up wow\">" + _vm._ssrList(_vm.data.pricingFeatures, function (feature) {
    return "<div class=\"list-header with-ckeck\"><div class=\"marker\"></div> <div class=\"title-wrap\"><h6 class=\"heading heading-h5\">" + _vm._ssrEscape(_vm._s(feature)) + "</h6></div></div>";
  }) + "</div></div></div></div></div> "), _vm._ssrNode("<div class=\"row mtn--40\">", "</div>", _vm._l(_vm.data.pricingItems, function (pricing) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 mt--40\">", "</div>", [_c('PricingItemStyleOne', {
      attrs: {
        "pricing": pricing
      }
    })], 1);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"heading heading-h3\">Start working together?</h3> <div class=\"spacing\"></div> "), _vm._ssrNode("<div class=\"call-btn text-center\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])])])]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pricing-plans.vue?vue&type=template&id=2f63b485&

// EXTERNAL MODULE: ./data/pricing.json
var pricing = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pricing-plans.vue?vue&type=script&lang=js&

/* harmony default export */ var pricing_plansvue_type_script_lang_js_ = ({
  components: {
    HeaderAbout: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 248)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    PricingItemStyleOne: () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 341)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      data: pricing,
      navOpen: false,
      searchOpen: false,
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Element',
        to: "/"
      }, {
        text: 'Pricing Plans',
        active: true
      }]
    };
  },
  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },
  head() {
    return {
      title: 'Pricing Plans'
    };
  }
});
// CONCATENATED MODULE: ./pages/pricing-plans.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pricing_plansvue_type_script_lang_js_ = (pricing_plansvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pricing-plans.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pricing_plansvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "742b5159"
  
)

/* harmony default export */ var pricing_plans = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module) {

module.exports = JSON.parse("{\"pricingItems\":[{\"currency\":\"$\",\"price\":\"45\",\"mark\":false,\"active\":false,\"package\":\"Basic package\",\"headings\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]},{\"currency\":\"$\",\"price\":\"60\",\"package\":\"Standard package\",\"mark\":true,\"active\":true,\"headings\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]},{\"currency\":\"$\",\"price\":\"99\",\"mark\":false,\"active\":false,\"package\":\"Premium package\",\"headings\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]}],\"pricingPlanHeading\":\"Choose your plan\",\"pricingPlanText\":\"If you are unsure which pricing plan to choose, then register for a 14-day free trial to start building your business.\",\"pricingAboutTitle\":\"About\",\"pricingAboutText\":\"We offer competitive rates and amazing pricing plans to help you find one that fits your needs and budget. If you are unsure which pricing plan to choose, don???t worry, you can always get a refund from us.\",\"pricingFeaturesTitle\":\"Features\",\"pricingFeatures\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]}");

/***/ })

};;
//# sourceMappingURL=pricing-plans.js.map
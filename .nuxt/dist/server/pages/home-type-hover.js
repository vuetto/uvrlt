exports.ids = [117];
exports.modules = {

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-type-hover.vue?vue&type=template&id=34120863&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderForOffCanvasBlack', {
    staticClass: "header-transparent",
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"portfolio-type-hover\">", "</div>", [_vm._ssrNode("<div class=\"row row-xs-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"type-portfolio-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"type-portfolio\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('n-link', {
    staticClass: "active",
    attrs: {
      "to": "/portfolio/portfolio-details-left-wide",
      "data-image": "/img/portfolio/type-hover/type-hover-1.jpg"
    }
  }, [_vm._v("\n                                01 New York’s Breath\n                            ")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"type-portfolio\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('n-link', {
    attrs: {
      "to": "/portfolio/portfolio-details-left-wide",
      "data-image": "/img/portfolio/type-hover/type-hover-2.jpg"
    }
  }, [_vm._v("\n                                02 Saturated Gradient Vibes\n                            ")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"type-portfolio\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('n-link', {
    attrs: {
      "to": "/portfolio/portfolio-details-left-wide",
      "data-image": "/img/portfolio/type-hover/type-hover-3.jpg"
    }
  }, [_vm._v("\n                                03 Flat Style Design\n                            ")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"type-portfolio\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('n-link', {
    attrs: {
      "to": "/portfolio/portfolio-details-left-wide",
      "data-image": "/img/portfolio/type-hover/type-hover-4.jpg"
    }
  }, [_vm._v("\n                                04 Revolution Digital Archive\n                            ")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"type-portfolio\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('n-link', {
    attrs: {
      "to": "/portfolio/portfolio-details-left-wide",
      "data-image": "/img/portfolio/type-hover/type-hover-5.jpg"
    }
  }, [_vm._v("\n                                05 DIY Lighting Arts\n                            ")])], 1)])], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-12 mt_md--30 mt_sm--30\"><div class=\"type-portfolio-thumbnail\"><div class=\"inner\"><div class=\"type-thumbnail-bg active\"><div class=\"bg-thumb bg-image--1\"></div></div></div></div></div>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-type-hover.vue?vue&type=template&id=34120863&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-type-hover.vue?vue&type=script&lang=js&
/* harmony default export */ var home_type_hovervue_type_script_lang_js_ = ({
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
      fullpageOpen: false
    };
  },
  methods: {
    getClosest(elem, selector) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
      }
      for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
      }
      return null;
    },
    getSiblings(elem) {
      var siblings = [];
      var sibling = elem.parentNode.firstChild;
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    },
    hover(e) {
      const bgThumb = document.querySelector(".bg-thumb");
      const target = e.target;
      const parent = this.getClosest(target, ".type-portfolio");
      const parentSiblings = this.getSiblings(parent);
      parentSiblings.forEach(sib => sib.children[0].children[0].classList.remove("active"));
      const imageUrl = target.dataset.image;
      target.classList.add("active");
      bgThumb.style.backgroundImage = `url(${imageUrl})`;
    }
  },
  head() {
    return {
      title: 'Home Minimal Portfolio'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-type-hover.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_type_hovervue_type_script_lang_js_ = (home_type_hovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-type-hover.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_type_hovervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53e804cd"
  
)

/* harmony default export */ var home_type_hover = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-type-hover.js.map
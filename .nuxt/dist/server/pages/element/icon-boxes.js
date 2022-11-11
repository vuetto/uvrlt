exports.ids = [85];
exports.modules = {

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/icon-boxes.vue?vue&type=template&id=17abb963&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-wrapper"
  }, [_c('HeaderElement', {
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
  }), _vm._ssrNode(" "), _c('Breadcrumb', {
    attrs: {
      "items": _vm.items,
      "title": "Icon Boxes"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center\"><h3 class=\"heading heading-h3\">Style 01</h3></div></div></div> "), _vm._ssrNode("<div class=\"row mt--30\">", "</div>", _vm._l(_vm.data.services.slice(0, 3), function (service) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 wow move-up\">", "</div>", [_c('ServiceItemOne', {
      attrs: {
        "service": service
      }
    })], 1);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--5\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center\"><h3 class=\"heading heading-h3\">Style 02</h3></div></div></div> "), _vm._ssrNode("<div class=\"row mt--30\">", "</div>", _vm._l(_vm.data.services.slice(0, 3), function (service) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 wow move-up\">", "</div>", [_c('ServiceItemOneWithoutButton', {
      attrs: {
        "service": service
      }
    })], 1);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center\"><h3 class=\"heading heading-h3\">Style 03</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.data.services.slice(0, 3), function (service) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 wow move-up mt--70\">", "</div>", [_c('IconBoxItemOne', {
      attrs: {
        "service": service
      }
    })], 1);
  }), 0)], 2)]), _vm._ssrNode(" "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/icon-boxes.vue?vue&type=template&id=17abb963&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/icon-boxes.vue?vue&type=script&lang=js&

/* harmony default export */ var icon_boxesvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    ServiceItemOne: () => __webpack_require__.e(/* import() */ 222).then(__webpack_require__.bind(null, 112)),
    ServiceItemOneWithoutButton: () => __webpack_require__.e(/* import() */ 49).then(__webpack_require__.bind(null, 351)),
    IconBoxItemOne: () => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, 352)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      data: service,
      navOpen: false,
      searchOpen: false,
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Element',
        to: "/"
      }, {
        text: 'Icon Boxes',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Icon Boxes'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/icon-boxes.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_icon_boxesvue_type_script_lang_js_ = (icon_boxesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/icon-boxes.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_icon_boxesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b0d6f5dc"
  
)

/* harmony default export */ var icon_boxes = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module) {

module.exports = JSON.parse("{\"services\":[{\"id\":1,\"icon\":\"ion-ios-eye-outline\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":2,\"icon\":\"ion-ios-bookmarks-outline\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":3,\"icon\":\"ion-ios-browsers-outline\",\"heading\":\"SEO marketing\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":4,\"icon\":\"ion-ios-bell-outline\",\"heading\":\"Resource use\",\"desc\":\"We participate in knowledge and technology transfers in resource use.\"},{\"id\":5,\"icon\":\"ion-ios-infinite-outline\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":6,\"icon\":\"ion-ios-cloudy-outline\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":7,\"icon\":\"/img/service/home-creative-agency-box-image-01.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":8,\"icon\":\"/img/service/home-creative-agency-box-image-02.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":9,\"icon\":\"/img/service/home-creative-agency-box-image-03.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":10,\"icon\":\"/img/service/icon-box/icon-1.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":11,\"icon\":\"/img/service/icon-box/icon-2.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":12,\"icon\":\"/img/service/icon-box/icon-3.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":13,\"image\":\"/img/service/service-3/service-1.jpg\",\"heading\":\"Resource Use\",\"desc\":\"We participate in knowledge and technology transfers to promote the resource use.\"},{\"id\":14,\"image\":\"/img/service/service-3/service-2.jpg\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":15,\"image\":\"/img/service/service-3/service-3.jpg\",\"heading\":\"Digital Marketing\",\"desc\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":16,\"image\":\"/img/service/service-3/service-4.jpg\",\"heading\":\"SEO Marketing\",\"desc\":\"Our approach is to focus on growing visibility in organic search engine results.\"}],\"serviceList\":[{\"image\":\"/img/service/modern/service-list-1.jpg\",\"alt\":\"service image\",\"title\":\"Creative services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-2.jpg\",\"alt\":\"service image\",\"title\":\"Agency services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-3.jpg\",\"alt\":\"service image\",\"title\":\"Digital services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"}]}");

/***/ })

};;
//# sourceMappingURL=icon-boxes.js.map
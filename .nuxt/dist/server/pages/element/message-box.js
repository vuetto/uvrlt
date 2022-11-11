exports.ids = [88];
exports.modules = {

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/message-box.vue?vue&type=template&id=1ac14eb4&
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
      "title": "Message Box"
    }
  }), _vm._ssrNode(" <div class=\"bk-message-box-area ptb--150 ptb-md--80 ptb-sm--60\"><div class=\"container\"><div class=\"row mtn--30\">" + _vm._ssrList(_vm.messages, function (message) {
    return "<div class=\"col-lg-6 mt--30\"><div" + _vm._ssrClass("message-box move-up wow", message.bgClass) + "><div class=\"icon\"><i" + _vm._ssrClass(null, message.icon) + "></i></div> <div class=\"content\">" + _vm._ssrEscape(_vm._s(message.text)) + "</div></div></div>";
  }) + "</div></div></div> "), _c('FooterTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/message-box.vue?vue&type=template&id=1ac14eb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/message-box.vue?vue&type=script&lang=js&
/* harmony default export */ var message_boxvue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 257)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 345)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 256))
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false,
      messages: [{
        "icon": "fas fa-flag",
        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
        "bgClass": "bg_cat--1"
      }, {
        "icon": "fas fa-bell",
        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
        "bgClass": "bg_cat--2"
      }, {
        "icon": "fas fa-check-circle",
        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
        "bgClass": "bg_cat--3"
      }, {
        "icon": "fas fa-info-circle",
        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
        "bgClass": "bg_cat--4"
      }],
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Element',
        to: "/"
      }, {
        text: 'Message Box',
        active: true
      }]
    };
  },
  head() {
    return {
      title: 'Message Box'
    };
  }
});
// CONCATENATED MODULE: ./pages/element/message-box.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_message_boxvue_type_script_lang_js_ = (message_boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/message-box.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_message_boxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7f54ba28"
  
)

/* harmony default export */ var message_box = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=message-box.js.map
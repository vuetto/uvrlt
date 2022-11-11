exports.ids = [6];
exports.modules = {

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=template&id=b8e02522&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-sidebar-container"
  }, [_vm._ssrNode("<div class=\"blog-sidebar-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"bl-sidebar search\"><h5 class=\"widget-title\">Search</h5> <form class=\"inner\"><div class=\"search-box\"><input type=\"text\" placeholder=\"Enter search keyword…\"> <button><span class=\"fa fa-search\"></span></button></div></form></div> "), _vm._ssrNode("<div class=\"bl-sidebar category mt--50 wow move-up\">", "</div>", [_vm._ssrNode("<h5 class=\"widget-title\">Categories</h5> "), _vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<ul class=\"category-list\">", "</ul>", _vm._l(_vm.categories, function (category, i) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      attrs: {
        "to": `/blog/category/${_vm.slugify(category)}`
      }
    }, [_vm._v(_vm._s(category))])], 1);
  }), 0)])], 2), _vm._ssrNode(" <div class=\"bl-sidebar banner mt--50 wow move-up\"><div class=\"inner\"><div class=\"thumb\"><img src=\"/img/blog/big-img/banner-image.jpg\" alt=\"banner\" class=\"w-100\"></div> <div class=\"content\"><h4 class=\"heading heading-h4 text-white\">Spot for banner</h4> <div class=\"banner-btn mt--25\"><button class=\"brook-btn bk-btn-theme btn-sd-size btn-rounded space-between\">Purchase</button></div></div></div></div> "), _vm._ssrNode("<div class=\"bl-sidebar tag mt--50 wow move-up\">", "</div>", [_vm._ssrNode("<h5 class=\"widget-title\">Tags</h5> "), _vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<ul class=\"tagcloud\">", "</ul>", _vm._l(_vm.tags, function (tag, i) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      attrs: {
        "to": `/blog/tag/${tag}`
      }
    }, [_vm._v(_vm._s(tag))])], 1);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bl-sidebar instagram mt--50 wow move-up\">", "</div>", [_vm._ssrNode("<h5 class=\"widget-title\">Instagram</h5> "), _c('client-only', [_c('InstagramPost', {
    attrs: {
      "addClass": "instagram-grid-5 inner"
    }
  })], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=template&id=b8e02522&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=script&lang=js&

/* harmony default export */ var BlogSidebarvue_type_script_lang_js_ = ({
  components: {
    InstagramPost: () => __webpack_require__.e(/* import() */ 35).then(__webpack_require__.bind(null, 353))
  },
  data() {
    return {
      data: blog
    };
  },
  computed: {
    categories() {
      return [...new Set(this.data.blogs.map(item => item.categories).flat())];
    },
    tags() {
      return [...new Set(this.data.blogs.map(item => item.tags).flat())];
    }
  },
  methods: {
    slugify(text) {
      return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
    }
  }
});
// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogSidebarvue_type_script_lang_js_ = (BlogSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf6dbde0"
  
)

/* harmony default export */ var BlogSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map
exports.ids = [118];
exports.modules = {

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-vertical-menu.vue?vue&type=template&id=9f3b08ec&
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-content ml--100 ml_lg--0 ml_md--0 ml_sm--0\">", "</div>", [_c('HeroVertical'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-what-we-do-area vertical-what-do-area bg_image--49\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-49.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12 col-12\">", "</div>", [_vm._ssrNode("<div class=\"creative-what-do-inner\">", "</div>", [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<h1 class=\"heading heading-h1 font-60 line-height-1-39\">\n                                We’re always ready for <span class=\"theme-color\">challenges.</span></h1> "), _vm._ssrNode("<div class=\"about-button mt--55\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn red-color-2 btn-sd-size btn-rounded space-between",
    attrs: {
      "to": "/about-us-01"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12 col-12 mt_md--40 mt_sm--40\"><div class=\"creative-what-do-text\"><div class=\"brook-section-title mb--50\"><h5 class=\"heading heading-h5 red-color-2\">What we do</h5> <div class=\"bkseparator--30\"></div> <h3 class=\"heading heading-h3\">Fresh ideas &amp; unique designs</h3></div></div> <div class=\"creative-service-inner\"><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-12\"><div class=\"icon-box text-left no-border bg-transparant\"><div class=\"inner\"><div class=\"icon\"><img src=\"/img/service/icon-box/home-vertical-menu-box-icon-image-01.png\" alt=\"image\"></div> <div class=\"content mt--35\"><h5 class=\"heading heading-h5\">Original Ideas</h5> <p class=\"bk_pra\">Our quality of service assessment involves controlling and managing resources by setting priorities for specific types of clients and projects on the system.</p></div></div></div></div> <div class=\"col-lg-6 col-md-6 col-12 mt_sm--30\"><div class=\"icon-box text-left no-border bg-transparant\"><div class=\"inner\"><div class=\"icon\"><img src=\"/img/service/icon-box/home-vertical-menu-box-icon-image-02.png\" alt=\"image\"></div> <div class=\"content mt--35\"><h5 class=\"heading heading-h5\">Graphic designs</h5> <p class=\"bk_pra\">We work with clients from all over the world. We had worked with and serving over 2000 customers and 1000 global companies across 13 countries in the world.</p></div></div></div></div></div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"creative-people-area bg_image--50 ptb--200 ptb-md--80 ptb-sm--80\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-50.jpg')`
  }, null) + "><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12\"><div class=\"creative-people-inner text-center\"><h2 class=\"heading\">A group of <span class=\"theme-color\">creative people.</span></h2></div></div></div></div></div> <div class=\"brook-progress-charts-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--1\"><div class=\"container\"><div class=\"row plr_sm--30\"><div class=\"col-lg-6 col-md-6 col-12\"><div class=\"brook-section-title pr--70 pr_md--5 pr_sm--5 pr_lg--5\"><h5 class=\"heading heading-h5 red-color-2\">Our Skills</h5> <div class=\"bkseparator--30\"></div> <h3 class=\"heading heading-h3 line-height-1-42\">We design &amp; build brands, campaigns and\n                                <span class=\"theme-color\">digital projects</span> for businesses large &amp; small.</h3></div></div> <div class=\"col-lg-6 col-md-6 col-12\"><div class=\"progress-wrapper mt_sm--40\"><div class=\"progress-charts\"><h6 class=\"heading heading-h6\">UI/UX <span class=\"percent-label float-right\">85%</span></h6> <div class=\"progress\"><div data-wow-duration=\"0.5s\" data-wow-delay=\".3s\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar wow fadeInLeft custom-color--2\" style=\"width: 85%\"></div></div></div> <div class=\"progress-charts mt--40\"><h6 class=\"heading heading-h6\">Ideas <span class=\"percent-label float-right\">85%</span></h6> <div class=\"progress\"><div data-wow-duration=\"0.7s\" data-wow-delay=\".5s\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar wow fadeInLeft custom-color--3\" style=\"width: 85%\"></div></div></div> <div class=\"progress-charts mt--40\"><h6 class=\"heading heading-h6\">Marketing <span class=\"percent-label float-right\">70%</span></h6> <div class=\"progress\"><div data-wow-duration=\"0.8s\" data-wow-delay=\".6s\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar wow fadeInLeft custom-color--4\" style=\"width: 70%\"></div></div></div> <div class=\"progress-charts mt--40\"><h6 class=\"heading heading-h6\">Consulting <span class=\"percent-label float-right\">90%</span></h6> <div class=\"progress\"><div data-wow-duration=\"0.6s\" data-wow-delay=\".7s\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar wow fadeInLeft\" style=\"width: 90%\"></div></div></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 bg_image--51\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-51.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center mb--65\"><h3 class=\"heading heading-h3 text-white\">Testimonials</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_c('TestimonialThree')], 1)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bk-brand-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--60\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center mb--65\"><h3 class=\"heading heading-h3\">Some of our clients</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_c('BrandLogoWithoutCarousel')], 1)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bk-blog-grid-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center mb--30\"><h3 class=\"heading heading-h3\">Our blog</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.blogData.blogs.slice(3, 11), function (blog) {
    return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6 move-up wow mt--30\">", "</div>", [_vm._ssrNode("<div class=\"blog-grid\">", "</div>", [_vm._ssrNode("<div class=\"post-thumb\">", "</div>", [_c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_c('img', {
      attrs: {
        "src": blog.image,
        "alt": blog.alt
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-content\">", "</div>", [_vm._ssrNode("<div class=\"post-inner\">", "</div>", [_vm._ssrNode("<h5 class=\"heading heading-h5\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_vm._v(_vm._s(blog.title))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-meta\">", "</div>", [_vm._ssrNode("<div class=\"post-date\">" + _vm._ssrEscape(_vm._s(blog.date)) + "</div> "), _vm._ssrNode("<div class=\"post-category\">", "</div>", [_c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_vm._v(_vm._s(blog.category))])], 1)], 2)], 2)])], 2)]);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brook-call-to-action bg_color--19 ptb--70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\"><div class=\"call-content text-center text-sm-left\"><h3 class=\"heading heading-h3 text-white\">Feeling inspired?</h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"call-btn text-center text-sm-right mt_mobile--20\">", "</div>", [_c('n-link', {
    staticClass: "brook-btn bk-btn-white text-theme btn-sd-size btn-rounded",
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Find out more")])], 1)])], 2)])]), _vm._ssrNode(" "), _c('FooterStyleThree')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-vertical-menu.vue?vue&type=template&id=9f3b08ec&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-vertical-menu.vue?vue&type=script&lang=js&

/* harmony default export */ var home_vertical_menuvue_type_script_lang_js_ = ({
  components: {
    HeaderVerticalOffcanvas: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 318)),
    OffcanvasMenu: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 289)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250)),
    HeroVertical: () => __webpack_require__.e(/* import() */ 210).then(__webpack_require__.bind(null, 334)),
    TestimonialThree: () => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, 263)),
    BrandLogoWithoutCarousel: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 322)),
    FooterStyleThree: () => __webpack_require__.e(/* import() */ 44).then(__webpack_require__.bind(null, 382))
  },
  data() {
    return {
      blogData: blog,
      navOpen: false,
      searchOpen: false,
      fullpageOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-15', 'template-font-1');
  },
  head() {
    return {
      title: 'Home Vertical Menu'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-vertical-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_vertical_menuvue_type_script_lang_js_ = (home_vertical_menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-vertical-menu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_vertical_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "212267a2"
  
)

/* harmony default export */ var home_vertical_menu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionSubTitle\":\"LATEST NEWS\",\"sectionTitle\":\"From our blogs\",\"blogs\":[{\"id\":1,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-1\",\"date\":\"January 7, 2020\",\"image\":\"/img/blog/blog-1/blog-01.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"digital\"],\"tags\":[\"photography\",\"digital\"]},{\"id\":2,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-2\",\"date\":\"February 14, 2020\",\"image\":\"/img/blog/blog-1/blog-02.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":3,\"title\":\"The Most Underrated 90 Bands\",\"slug\":\"the-most-underrated-90-bands-3\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/blog-1/blog-03.jpg\",\"alt\":\"blog image\",\"categories\":[\"marketing\",\"photography\"],\"tags\":[\"marketing\",\"photography\"]},{\"id\":4,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-4\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":5,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-5\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":6,\"title\":\"What Motivates You to Work?\",\"slug\":\"what-motivates-you-to-work-6\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":7,\"title\":\"Brave Lifestyle from Ancient Lessons\",\"slug\":\"brave-lifestyle-from-ancient-lessons-7\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"portfolio\"],\"tags\":[\"life style\",\"portfolio\"]},{\"id\":8,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-8\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":9,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-9\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":10,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-10\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":11,\"title\":\"The Most Underrated ’90 s Bands\",\"slug\":\"the-most-underrated-90-bands-11\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"food\"],\"tags\":[\"portfolio\",\"food\"]},{\"id\":12,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-12\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":13,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-13\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-10.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":14,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-14\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-11.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":15,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-15\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-12.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"food\"],\"tags\":[\"photography\",\"food\"]},{\"id\":16,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-16\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-13.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"corona\"],\"tags\":[\"agency\",\"corona\"]},{\"id\":17,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-1.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-17\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"portfolio\",\"digital\"],\"tags\":[\"portfolio\",\"digital\"]},{\"id\":18,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-2.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-18\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":19,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-3.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-19\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"marketing\",\"corona\"],\"tags\":[\"marketing\",\"corona\"]},{\"id\":20,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-4.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-20\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"business\",\"digital\"],\"tags\":[\"business\",\"digital\"]},{\"id\":21,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-21\",\"date\":\"June 19, 2020\",\"image\":\"/img/blog/grid/mesonry-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":22,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-22\",\"date\":\"March 17, 2020\",\"image\":\"/img/blog/grid/mesonry-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":23,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-23\",\"date\":\"August 15, 2020\",\"image\":\"/img/blog/grid/mesonry-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"business\",\"food\"],\"tags\":[\"business\",\"food\"]},{\"id\":24,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-24\",\"date\":\"July 18, 2020\",\"image\":\"/img/blog/grid/mesonry-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\",\"business\"],\"tags\":[\"food\",\"business\"]},{\"id\":25,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-25\",\"date\":\"June 15, 2020\",\"image\":\"/img/blog/grid/mesonry-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":26,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-26\",\"date\":\"April 14, 2020\",\"image\":\"/img/blog/grid/mesonry-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"marketing\"],\"tags\":[\"portfolio\",\"marketing\"]},{\"id\":27,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-27\",\"date\":\"March 10, 2020\",\"image\":\"/img/blog/grid/mesonry-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\"],\"tags\":[\"food\"]},{\"id\":28,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-28\",\"date\":\"January 07, 2020\",\"image\":\"/img/blog/grid/mesonry-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":29,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-29\",\"date\":\"February 02, 2020\",\"image\":\"/img/blog/grid/mesonry-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"business\"],\"tags\":[\"life style\",\"business\"]},{\"id\":30,\"title\":\"5 Signs That It Is Time to Cut Out Your Menu Item\",\"slug\":\"5-signs-that -it-is-time-to-cut-out-your-menu-item-30\",\"date\":\"February 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-01.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"food\",\"agency\"],\"tags\":[\"food\",\"agency\"]},{\"id\":31,\"title\":\"5 Unexpected Food Trends For This Summer\",\"slug\":\"5-unexpected-food-trends-for-this-summer-31\",\"date\":\"March 02, 2019\",\"image\":\"/img/restaurant/restaurant-recipe-02.jpg\",\"alt\":\"blog image\",\"author\":\"Mokhles miya\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":32,\"title\":\"Healthy Eating With Fruit And Vegetables\",\"slug\":\"healthy-eating-with-fruit-and-vegetables-32\",\"date\":\"January 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-03.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"architecture\",\"business\"]}]}");

/***/ })

};;
//# sourceMappingURL=home-vertical-menu.js.map
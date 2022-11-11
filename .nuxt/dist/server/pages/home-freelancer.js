exports.ids = [102];
exports.modules = {

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-freelancer.vue?vue&type=template&id=a1e2d92c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderBlack', {
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"freelancer-wrapper bg_image--27\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/img/bg/bg-image-27.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"freelancer-left\">", "</div>", [_vm._ssrNode("<div class=\"freelancer-about-area pb--130\"><div class=\"inner wow move-up\"><h2 class=\"heading heading-h2 font-50 font-400 line-height-1-62\"><span class=\"theme-color\">Hello.</span> My name is Blake Gallene.\n                            </h2> <div class=\"thumb mt--55\"><img src=\"/img/about/about-7.jpg\" alt=\"about image\" class=\"w-100\"></div> <div class=\"bkseparator--40\"></div> <h4 class=\"heading heading-h4\">About me</h4> <div class=\"bkseparator--30\"></div> <p class=\"bk_pra\">I focus on creating creative, original, and conceptual works for editorial illustrations, magazines, covers, and brands as well as online visual organizations. Through constant learning and improving, my works excel in designing.</p> <div class=\"bkseparator--40\"></div> <div class=\"signeture\"><img src=\"/img/icons/singneture2.png\" alt=\"about image\"></div></div></div> "), _vm._ssrNode("<div class=\"freelancer-blog-area\">", "</div>", [_vm._ssrNode("<div class=\"brook-section-title wow move-up\"><h2 class=\"heading heading-h2 font-50 font-400 line-height-1-62\">My blog.</h2></div> "), _vm._ssrNode("<div class=\"freelancer-blog-wrapper\">", "</div>", _vm._l(_vm.blog.blogs.slice(0, 2), function (blog) {
    return _vm._ssrNode("<div class=\"blog-grid blog-standard padding-left-none wow move-up mt--70\">", "</div>", [_vm._ssrNode("<div class=\"post-thumb\">", "</div>", [_c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_c('img', {
      attrs: {
        "src": blog.image,
        "alt": blog.title
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-content\">", "</div>", [_vm._ssrNode("<div class=\"post-inner\">", "</div>", [_vm._ssrNode("<h4 class=\"heading heading-h4 hover-yellow-color\">", "</h4>", [_c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_vm._v("\n                                                " + _vm._s(blog.title) + "\n                                            ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-meta\">", "</div>", [_vm._ssrNode("<div class=\"post-date\">" + _vm._ssrEscape("\n                                                " + _vm._s(blog.date) + "\n                                            ") + "</div> "), _vm._ssrNode("<div class=\"post-category hover-yellow-color\">", "</div>", [_c('n-link', {
      attrs: {
        "to": "/blog/blog-creative"
      }
    }, [_vm._v(_vm._s(blog.category))])], 1)], 2)], 2)])], 2);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"freelancer-contact-area pb--100 pt--150\">", "</div>", [_vm._ssrNode("<div class=\"contact-inner\">", "</div>", [_vm._ssrNode("<div class=\"brook-section-title wow move-up\"><h2 class=\"heading heading-h2 font-50 font-400 line-height-1-62\">Message me.</h2></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"bkseparator--25\"></div> <p class=\"bk_pra pr--40 wow move-up\">If you have any questions at all about starting a blog or website after reading the guide, please do not hesitate to contact me below. </p> "), _vm._ssrNode("<div class=\"freelancer-contact mt--40\">", "</div>", [_vm._ssrNode("<h5 class=\"heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up\"><a href=\"mailto:info@yourdomain.com\">info@yourdomain.com</a></h5> <div class=\"bkseparator--20\"></div> <h5 class=\"heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up\"><a href=\"tel:(+68)120034509\">(+68) 120034509</a></h5> "), _vm._ssrNode("<div class=\"view-more-btn heding-color font-600 mt--55 wow move-up\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_c('span', [_vm._v("More details")]), _vm._v(" "), _c('span', {
    staticClass: "btn-arrow"
  })])], 1)], 2)], 2)], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"freelancer-right pb--100\">", "</div>", [_vm._ssrNode("<div class=\"freelancer-portfolio\">", "</div>", [_vm._ssrNode("<div class=\"brook-section-title text-left text-lg-right mb--55\"><h2 class=\"heading heading-h2 font-50 font-400 line-height-1-62 wow move-up\">Some of my works.</h2></div> "), _vm._l(_vm.portfolioData.portfolioItems.slice(0, 7), function (portfolio) {
    return _vm._ssrNode("<div class=\"portfolio portfolio_style--1 mt--30 wow move-up\">", "</div>", [_vm._ssrNode("<div class=\"thumb\"><img" + _vm._ssrAttr("src", portfolio.image) + " alt=\"Portfolio Images\"></div> "), _vm._ssrNode("<div class=\"port-overlay-info\">", "</div>", [_vm._ssrNode("<div class=\"hover-action\">", "</div>", [_vm._ssrNode("<h3 class=\"post-overlay-title\">", "</h3>", [_c('n-link', {
      attrs: {
        "to": `/portfolio/${portfolio.slug}`
      }
    }, [_vm._v("\n                                            " + _vm._s(portfolio.heading) + "\n                                        ")])], 1)])])], 2);
  })], 2)])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<footer id=\"page-footer-wrapper\" class=\"page-footer bg_color--4\">", "</footer>", [_vm._ssrNode("<div class=\"copyright\">", "</div>", [_vm._ssrNode("<div class=\"container ptb--40\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"copyright-left text-md-left text-center\">", "</div>", [_vm._ssrNode("<ul class=\"bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-creative"
    }
  }, [_vm._v("Our Blogs")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/portfolio/portfolio-grid-boxed"
    }
  }, [_vm._v("Latest Projects")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/contact-us-modern"
    }
  }, [_vm._v("Contact Us")])], 1)], 2)])]), _vm._ssrNode(" <div class=\"col-md-6\"><div class=\"copyright-right text-md-right text-center\"><p>© 2022 <b>Brook</b> Made with <i class=\"fa fa-heart text-danger\"></i> by <a href=\"https://hasthemes.com/\"><b>HasThemes</b></a></p></div></div>")], 2)])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-freelancer.vue?vue&type=template&id=a1e2d92c&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(58);

// EXTERNAL MODULE: ./data/portfolio.json
var portfolio = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-freelancer.vue?vue&type=script&lang=js&


/* harmony default export */ var home_freelancervue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 278)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 249)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 250))
  },
  data() {
    return {
      blog: blog,
      portfolioData: portfolio,
      navOpen: false,
      searchOpen: false
    };
  },
  mounted() {
    document.body.classList.add('template-color-4', 'template-font-1');
  },
  head() {
    return {
      title: 'Home Freelancer'
    };
  }
});
// CONCATENATED MODULE: ./pages/home-freelancer.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_freelancervue_type_script_lang_js_ = (home_freelancervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-freelancer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_freelancervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4a681f32"
  
)

/* harmony default export */ var home_freelancer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionSubTitle\":\"LATEST NEWS\",\"sectionTitle\":\"From our blogs\",\"blogs\":[{\"id\":1,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-1\",\"date\":\"January 7, 2020\",\"image\":\"/img/blog/blog-1/blog-01.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"digital\"],\"tags\":[\"photography\",\"digital\"]},{\"id\":2,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-2\",\"date\":\"February 14, 2020\",\"image\":\"/img/blog/blog-1/blog-02.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":3,\"title\":\"The Most Underrated 90 Bands\",\"slug\":\"the-most-underrated-90-bands-3\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/blog-1/blog-03.jpg\",\"alt\":\"blog image\",\"categories\":[\"marketing\",\"photography\"],\"tags\":[\"marketing\",\"photography\"]},{\"id\":4,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-4\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":5,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-5\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":6,\"title\":\"What Motivates You to Work?\",\"slug\":\"what-motivates-you-to-work-6\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":7,\"title\":\"Brave Lifestyle from Ancient Lessons\",\"slug\":\"brave-lifestyle-from-ancient-lessons-7\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"portfolio\"],\"tags\":[\"life style\",\"portfolio\"]},{\"id\":8,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-8\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":9,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-9\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":10,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-10\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":11,\"title\":\"The Most Underrated ’90 s Bands\",\"slug\":\"the-most-underrated-90-bands-11\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"food\"],\"tags\":[\"portfolio\",\"food\"]},{\"id\":12,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-12\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":13,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-13\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-10.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":14,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-14\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-11.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":15,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-15\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-12.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"food\"],\"tags\":[\"photography\",\"food\"]},{\"id\":16,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-16\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-13.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"corona\"],\"tags\":[\"agency\",\"corona\"]},{\"id\":17,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-1.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-17\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"portfolio\",\"digital\"],\"tags\":[\"portfolio\",\"digital\"]},{\"id\":18,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-2.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-18\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":19,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-3.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-19\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"marketing\",\"corona\"],\"tags\":[\"marketing\",\"corona\"]},{\"id\":20,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-4.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-20\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"business\",\"digital\"],\"tags\":[\"business\",\"digital\"]},{\"id\":21,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-21\",\"date\":\"June 19, 2020\",\"image\":\"/img/blog/grid/mesonry-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":22,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-22\",\"date\":\"March 17, 2020\",\"image\":\"/img/blog/grid/mesonry-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":23,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-23\",\"date\":\"August 15, 2020\",\"image\":\"/img/blog/grid/mesonry-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"business\",\"food\"],\"tags\":[\"business\",\"food\"]},{\"id\":24,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-24\",\"date\":\"July 18, 2020\",\"image\":\"/img/blog/grid/mesonry-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\",\"business\"],\"tags\":[\"food\",\"business\"]},{\"id\":25,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-25\",\"date\":\"June 15, 2020\",\"image\":\"/img/blog/grid/mesonry-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":26,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-26\",\"date\":\"April 14, 2020\",\"image\":\"/img/blog/grid/mesonry-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"marketing\"],\"tags\":[\"portfolio\",\"marketing\"]},{\"id\":27,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-27\",\"date\":\"March 10, 2020\",\"image\":\"/img/blog/grid/mesonry-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\"],\"tags\":[\"food\"]},{\"id\":28,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-28\",\"date\":\"January 07, 2020\",\"image\":\"/img/blog/grid/mesonry-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":29,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-29\",\"date\":\"February 02, 2020\",\"image\":\"/img/blog/grid/mesonry-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"business\"],\"tags\":[\"life style\",\"business\"]},{\"id\":30,\"title\":\"5 Signs That It Is Time to Cut Out Your Menu Item\",\"slug\":\"5-signs-that -it-is-time-to-cut-out-your-menu-item-30\",\"date\":\"February 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-01.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"food\",\"agency\"],\"tags\":[\"food\",\"agency\"]},{\"id\":31,\"title\":\"5 Unexpected Food Trends For This Summer\",\"slug\":\"5-unexpected-food-trends-for-this-summer-31\",\"date\":\"March 02, 2019\",\"image\":\"/img/restaurant/restaurant-recipe-02.jpg\",\"alt\":\"blog image\",\"author\":\"Mokhles miya\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":32,\"title\":\"Healthy Eating With Fruit And Vegetables\",\"slug\":\"healthy-eating-with-fruit-and-vegetables-32\",\"date\":\"January 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-03.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"architecture\",\"business\"]}]}");

/***/ }),

/***/ 59:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"heading\":\"header 01\",\"image\":\"/img/portfolio/portfolio-1/portfolio-1.jpg\"}],\"portfolioFeaturd\":[{\"id\":1,\"image\":\"/img/portfolio/portfolio-2/portfolio-01.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"},{\"id\":2,\"image\":\"/img/portfolio/portfolio-2/portfolio-02.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Photography\"},{\"id\":3,\"image\":\"/img/portfolio/portfolio-2/portfolio-03.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Design\"},{\"id\":4,\"image\":\"/img/portfolio/portfolio-2/portfolio-04.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Marketing\"},{\"id\":5,\"image\":\"/img/portfolio/portfolio-2/portfolio-05.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"SEO\"},{\"id\":6,\"image\":\"/img/portfolio/portfolio-2/portfolio-06.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"}],\"portfolioItems\":[{\"id\":1,\"image\":\"/img/portfolio/grid/caption-1.jpg\",\"heading\":\"The Language of Designs\",\"slug\":\"the-language-of-designs-1\",\"category\":\"Design\",\"filterClass\":\"creative digital\"},{\"id\":2,\"image\":\"/img/portfolio/grid/caption-2.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-2\",\"category\":\"Marketing\",\"filterClass\":\"photography design\"},{\"id\":3,\"image\":\"/img/portfolio/grid/caption-3.jpg\",\"heading\":\"Smart Sound System\",\"slug\":\"smart-sound-system-3\",\"category\":\"Photography\",\"filterClass\":\"photography creative\"},{\"id\":4,\"image\":\"/img/portfolio/grid/caption-4.jpg\",\"heading\":\"Awe-inspiring Projects\",\"slug\":\"awe-inspiring-projects-4\",\"category\":\"Life Style\",\"filterClass\":\"design\"},{\"id\":5,\"image\":\"/img/portfolio/grid/caption-5.jpg\",\"heading\":\"Gifts for Photography\",\"slug\":\"gifts-for-photography-5\",\"category\":\"Design\",\"filterClass\":\"creative\"},{\"id\":6,\"image\":\"/img/portfolio/grid/caption-6.jpg\",\"heading\":\"Enchanting Portrait Hacks\",\"slug\":\"enchanting-portrait-hacks-6\",\"category\":\"Photography\",\"filterClass\":\"digital\"},{\"id\":7,\"image\":\"/img/portfolio/grid/caption-7.jpg\",\"heading\":\"Digital Marketing Basics\",\"slug\":\"digital-marketing-basics-7\",\"category\":\"Design\"},{\"id\":8,\"image\":\"/img/portfolio/grid/caption-8.jpg\",\"heading\":\"Measure Digital Progress\",\"slug\":\"measure-digital-progress-8\",\"filterClass\":\"digital design\"},{\"id\":9,\"image\":\"/img/portfolio/grid/caption-9.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-9\",\"category\":\"Design\",\"filterClass\":\"digital\"}]}");

/***/ })

};;
//# sourceMappingURL=home-freelancer.js.map
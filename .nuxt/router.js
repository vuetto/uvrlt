import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0133ebe = () => interopDefault(import('../pages/about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _bff70fbc = () => interopDefault(import('../pages/about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _bfdae0ba = () => interopDefault(import('../pages/about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _a9521a86 = () => interopDefault(import('../pages/career.vue' /* webpackChunkName: "pages/career" */))
const _68025bd2 = () => interopDefault(import('../pages/contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _63cea2c8 = () => interopDefault(import('../pages/contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _5d5abf76 = () => interopDefault(import('../pages/home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _91e50e3c = () => interopDefault(import('../pages/home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _c10c6bca = () => interopDefault(import('../pages/home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _6768a274 = () => interopDefault(import('../pages/home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _9dab7bae = () => interopDefault(import('../pages/home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _bc09eed4 = () => interopDefault(import('../pages/home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _0c928b4e = () => interopDefault(import('../pages/home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _25f3531f = () => interopDefault(import('../pages/home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _1303a40e = () => interopDefault(import('../pages/home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _c15cc4fc = () => interopDefault(import('../pages/home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _f2827352 = () => interopDefault(import('../pages/home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _720046e2 = () => interopDefault(import('../pages/home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _78b947a8 = () => interopDefault(import('../pages/home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _6c6e924a = () => interopDefault(import('../pages/home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _3e7789a0 = () => interopDefault(import('../pages/home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _4966e2a5 = () => interopDefault(import('../pages/home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _3b5d1fed = () => interopDefault(import('../pages/home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _4c7960c0 = () => interopDefault(import('../pages/home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _172d52fd = () => interopDefault(import('../pages/home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _7fa279d9 = () => interopDefault(import('../pages/home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _7abcaeca = () => interopDefault(import('../pages/home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _cce3cb88 = () => interopDefault(import('../pages/home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _2fb55574 = () => interopDefault(import('../pages/home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _8e363fb6 = () => interopDefault(import('../pages/home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _186db1e8 = () => interopDefault(import('../pages/home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _bda43eb2 = () => interopDefault(import('../pages/home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _9f5b5144 = () => interopDefault(import('../pages/HomeBusiness.vue' /* webpackChunkName: "pages/HomeBusiness" */))
const _d640ed98 = () => interopDefault(import('../pages/pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _4e02b42a = () => interopDefault(import('../pages/pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _2eb4da22 = () => interopDefault(import('../pages/services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _2e2a1f3e = () => interopDefault(import('../pages/services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _0465e182 = () => interopDefault(import('../pages/services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _c1510ec6 = () => interopDefault(import('../pages/team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _c134dfc4 = () => interopDefault(import('../pages/team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _7fb7b172 = () => interopDefault(import('../pages/team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _787759e8 = () => interopDefault(import('../pages/blog/blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _26711216 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _4a5a4d40 = () => interopDefault(import('../pages/blog/blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _7e412be8 = () => interopDefault(import('../pages/blog/blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _b89c2a12 = () => interopDefault(import('../pages/blog/blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _768ba497 = () => interopDefault(import('../pages/blog/blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _bf173d12 = () => interopDefault(import('../pages/blog/blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _b9a98928 = () => interopDefault(import('../pages/blog/blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _3a2c6cb9 = () => interopDefault(import('../pages/blog/blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _5c5db1cc = () => interopDefault(import('../pages/blog/blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _3448ee52 = () => interopDefault(import('../pages/blog/blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _1ef15021 = () => interopDefault(import('../pages/blog/blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _b485aff4 = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _4197dae3 = () => interopDefault(import('../pages/element/brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _32b1101e = () => interopDefault(import('../pages/element/call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _04ecbda8 = () => interopDefault(import('../pages/element/carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _f90e73ca = () => interopDefault(import('../pages/element/contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _1f12f5a8 = () => interopDefault(import('../pages/element/dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _44b16b93 = () => interopDefault(import('../pages/element/flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _a663a6b6 = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _279ffe17 = () => interopDefault(import('../pages/element/icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _b51fb520 = () => interopDefault(import('../pages/element/instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _373fdad3 = () => interopDefault(import('../pages/element/lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _00b861c3 = () => interopDefault(import('../pages/element/message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _3805d282 = () => interopDefault(import('../pages/element/pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _6eb7c853 = () => interopDefault(import('../pages/element/tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _3d7c6a8f = () => interopDefault(import('../pages/element/team.vue' /* webpackChunkName: "pages/element/team" */))
const _62df925d = () => interopDefault(import('../pages/element/testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _05f44d8a = () => interopDefault(import('../pages/portfolio/portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _ed1e8ff2 = () => interopDefault(import('../pages/portfolio/portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _78b94fc7 = () => interopDefault(import('../pages/portfolio/portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _44ad7293 = () => interopDefault(import('../pages/portfolio/portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _bfb24154 = () => interopDefault(import('../pages/portfolio/portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _005f45cc = () => interopDefault(import('../pages/portfolio/portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _7cbedfa4 = () => interopDefault(import('../pages/portfolio/portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _0a3e60a4 = () => interopDefault(import('../pages/portfolio/portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _c7214e3e = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _c7051f3c = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _d1169902 = () => interopDefault(import('../pages/portfolio/portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _5e8042ea = () => interopDefault(import('../pages/portfolio/portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _22cfaed2 = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _68c38de7 = () => interopDefault(import('../pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _43c0cf1c = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _7a185558 = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _1bb5e9e3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us-01",
    component: _c0133ebe,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _bff70fbc,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _bfdae0ba,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _a9521a86,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _68025bd2,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _63cea2c8,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _5d5abf76,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _91e50e3c,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _c10c6bca,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _6768a274,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _9dab7bae,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _bc09eed4,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _0c928b4e,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _25f3531f,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _1303a40e,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _c15cc4fc,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _f2827352,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _720046e2,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _78b947a8,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _6c6e924a,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _3e7789a0,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _4966e2a5,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _3b5d1fed,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-photo-slider-gallery",
    component: _4c7960c0,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _172d52fd,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _7fa279d9,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _7abcaeca,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _cce3cb88,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _2fb55574,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _8e363fb6,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _186db1e8,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _bda43eb2,
    name: "home-vertical-menu"
  }, {
    path: "/HomeBusiness",
    component: _9f5b5144,
    name: "HomeBusiness"
  }, {
    path: "/pricing-plans",
    component: _d640ed98,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _4e02b42a,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _2eb4da22,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _2e2a1f3e,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _0465e182,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _c1510ec6,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _c134dfc4,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _7fb7b172,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _787759e8,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _26711216,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _4a5a4d40,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _7e412be8,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _b89c2a12,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _768ba497,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _bf173d12,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _b9a98928,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _3a2c6cb9,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _5c5db1cc,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _3448ee52,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _1ef15021,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _b485aff4,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _4197dae3,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _32b1101e,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _04ecbda8,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _f90e73ca,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _1f12f5a8,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _44b16b93,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _a663a6b6,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _279ffe17,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _b51fb520,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _373fdad3,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _00b861c3,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _3805d282,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _6eb7c853,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _3d7c6a8f,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _62df925d,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _05f44d8a,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _ed1e8ff2,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _78b94fc7,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _44ad7293,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _bfb24154,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _005f45cc,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _7cbedfa4,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _0a3e60a4,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _c7214e3e,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _c7051f3c,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _d1169902,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _5e8042ea,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _22cfaed2,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _68c38de7,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _43c0cf1c,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _7a185558,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _1bb5e9e3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

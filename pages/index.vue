<template>
    <div class="main-container">

         <Header @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <HeroBusiness />

        <!--<CurveShape>
            <template v-slot:bgcolor>
                <path style="fill: #f4efff;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>-->
        <BrandLogoCarousel />

        <AboutAuthenticStudio />

        <div class="brook-call-to-action bg_color--3 ptb--120 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3 text-white wow move-up">Get your <span style="font-family: 'Playfair Display', serif;"><i>free</i></span> audit & <br>receive <span style="font-family: 'Playfair Display', serif;"><i>personalized, actionable</i></span> tips<br>for your tech business</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center wow move-up">
                                <a href="https://calendly.com/ugovrlt/meety" target="_blank" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Schedule a convo now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TestimonialSix />

        <!--<div class="bk-blog-grid-area ptb--120 ptb-md--80 ptb-sm--80 bg_color--10">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--40" v-for="blog in data.blogs.slice(4, 7)" :key="blog.id">
                        <BlogPostThree :blog="blog" addClass="grid-simple" />
                    </div>
                </div>
            </div>
        </div>-->

        <Firefly />

        <FooterTwo />

    </div>
</template>

<script>
    import data from '~/data/blog.json';

    export default {
        components: {
           Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroBusiness: () => import('@/components/HeroBusiness'),
            AboutAuthenticStudio: () => import('@/components/AboutAuthenticStudio'),
            MusicianIconBox: () => import('@/components/MusicianIconBox'),
            MusicianPortfolioGallery: () => import('@/components/MusicianPortfolioGallery'),
            OnepageTeammember: () => import('@/components/OnepageTeammember'),
            TestimonialSix: () => import('@/components/TestimonialSix'),
            MusicianCounterup: () => import('@/components/MusicianCounterup'),
            BlogPostThree: () => import('@/components/BlogPostThree'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
             Firefly: () => import('@/components/Firefly'),
            FooterTwo: () => import('@/components/FooterStyleFour'),
            CurveShape: () => import('@/components/CurveShape'),
        },  

        data () {
            return {
                data,
                fullpageOpen: false,
                navOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-10', 'template-font-3')
        },

        head() {
            return {
                title: 'Direct Response Tech Copywriter'
            }
        },
    };
</script>
<template>
    <div class="brook-testimonial-area ptb--130 ptb-md--80 ptb-sm--80 bg_color--16">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center mb--80 mb_sm--40">
                        <h3 class="heading heading-h3 font-large">Some street cred'</h3>
                        <div class="thumb mt--35 mt_sm--20">
                            <img src="/img/service/icon-box/wavy-icon.png" alt="Multipurpose">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 pb--60">
                    <div class="brook-element-carousel">
                        <swiper :options="swiperOption">
                            <!-- Start Single Testimonial -->
                            <div class="swiper-slide testimonial testimonial_style--2">
                                <div class="content">
                                    
                                    <p class="bk_pra">Ugo is hard working, cares tremendously about the success of his prospects, clients and team members. This makes him a great joy to work with. If you're looking for someone to take your organization forward, Ugo should be top of mind.</p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img src="/img/testimonial/clint-1/3.png" alt="clint image">
                                        </div>
                                        <div class="clint-info">
                                            <h6>Joel Yi</h6>
                                            <span>CEO</span>
                                        </div>
                                        <div class="testimonial-quote">
                                            <span class="fa fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Testimonial -->

                            <!-- Start Single Testimonial -->
                            <div class="swiper-slide testimonial testimonial_style--2">
                                <div class="content">
                                    
                                    <p class="bk_pra">You have really shown up and grown so much so keep this momentum and keep rising as a leader.</p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img src="/img/testimonial/clint-1/2.png" alt="clint image">
                                        </div>
                                        <div class="clint-info">
                                            <h6>Desmond Soon</h6>
                                            <span>CEO & Consultant</span>
                                        </div>
                                        <div class="testimonial-quote">
                                            <span class="fa fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Testimonial -->

<div class="swiper-slide testimonial testimonial_style--2">
                                <div class="content">
                                    
                                    <p class="bk_pra">Ugo is a self-directed, purposeful and very fast-learning person. In and outside of the office, he is always ready to go the extra mile to achieve his goals. I've kept in touch with Ugo and, in addition to being a kind and joyful person, he gave me very good advice on my projects and that’s why I recommend him highly!</p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img src="/img/testimonial/clint-1/4.png" alt="clint image">
                                        </div>
                                        <div class="clint-info">
                                            <h6>Marilyne Do Amaral Gomes</h6>
                                            <span>UX/UI Designer</span>
                                        </div>
                                        <div class="testimonial-quote">
                                            <span class="fa fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Start Single Testimonial -->
                            <div class="swiper-slide testimonial testimonial_style--2">
                                <div class="content">
                                    
                                    <p class="bk_pra">I'm very grateful that you impored me to just start making anything and beginning to play with the ideas. I'm so excited for the adventure ahead, and all the things I'm about to learn</p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img src="/img/testimonial/clint-1/1.png" alt="clint image">
                                        </div>
                                        <div class="clint-info">
                                            <h6>Hayden B.</h6>
                                            <span>Copywriter</span>
                                        </div>
                                        <div class="testimonial-quote">
                                            <span class="fa fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Testimonial -->
                        </swiper>

                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-dots-bottom"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    loop: false,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2
                        },

                        300:{
                            slidesPerView : 1
                        }
                    }
                },
            }
        },
    };
</script>
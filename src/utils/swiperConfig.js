import { Navigation } from 'swiper';

export function displyTotalSLide(swiper) {

    var totalSlide = document.getElementById('totalSlide');

    totalSlide.innerHTML = (swiper.realIndex + 1) + '/' + this.customTotalSlide + ' screens';

}
export const beforeInit = function () {
    let numOfSlides = (this.wrapperEl.querySelectorAll(".swiper-slide").length - 2) / 2;
    this.customTotalSlide = numOfSlides;
}
export const SwiperProp =
{

    loop: true,
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 23,
    observer: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-nexts',
        prevEl: '.swiper-button-prevs',

    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    runCallbacksOnInit: true,

    breakpoints: {

        768: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        1028: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
}



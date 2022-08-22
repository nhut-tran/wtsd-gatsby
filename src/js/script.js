import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


function displyTotalSLide(swiper) {

    var totalSlide = document.getElementById('totalSlide');

    totalSlide.innerHTML = (swiper.realIndex + 1) + '/' + this.customTotalSlide + ' screens';

}


const swiper = new Swiper('.swiper', {

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
    },
    on: {
        beforeInit: function () {
            let numOfSlides = this.wrapperEl.querySelectorAll(".swiper-slide").length;
            this.customTotalSlide = numOfSlides;
        }
    }
});

swiper.on('slideChange', displyTotalSLide)

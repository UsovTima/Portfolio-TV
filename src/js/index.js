window.$ = window.jQuery = require('jquery');

//Mobile menu
$('.header__navigation-button').on('click', function() {
    $('.header__navigation').toggleClass('opened');
    $('body').toggleClass('no-scroll');
})

$(document).ready(function (){

})

//Sticky
$(window).scroll(function(){
    const bannerHeight = $('.header').outerHeight();
    if($(window).scrollTop() >= bannerHeight) {
        $('.header__wrapper').addClass('sticky');
    }
    else {
        $('.header__wrapper').removeClass('sticky');
    }
})

//Anchor links
$('.anchor').on('click', function (e) {
    e.preventDefault();
    const hh = $('.header').outerHeight();
    if(this.hash !== '') {
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - hh
        }, 300, function () {
            window.location.hash = hash - hh;
        })
    }
})

//Slider last works 

import Swiper, { Navigation, Pagination, Autoplay, Mousewheel
 } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Mousewheel]);

const swiper = new Swiper('.swiper-works', {
    loop: true,
    direction: "vertical",

    autoplay: {
        delay: 7000,
    },

    slidesPerView: 1,
    spaceBetween: 30,

    mousewheel: {
        invert: true,
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
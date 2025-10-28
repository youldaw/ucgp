$(function () {

    // $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar-collapse').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    var swiper1 = new Swiper(".slider-box", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });


    var swiper2 = new Swiper(".info-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});


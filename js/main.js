let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
    resetAnimation: true,
});
wow.init();

const swiper = new Swiper('.swiper', {
    speed: 800,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(document).ready(function () {
    $('.search__btn').click(function () {
        $('.search__input').animate({ width: 'toggle' });
    });
});

$(document).ready(function () {
    $('.accordion__trigger').click(function () {
        $(this).next('.accordion__content').slideToggle();
    });
});

let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.burger__menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

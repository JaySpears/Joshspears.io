'use strict';
$(function () {

    var nav = $('#navigation');
    var heroSection = $('.hero-section');

    $('.desktop-list').on('click', function(){
        $('.desktop-list, .plus, .menu-item, i').toggleClass('active');
    });

    function navigationAnimation(){
        if ($(window).scrollTop() <= $(heroSection).height() / 2 - 75) {
            $('.desktop-list').removeClass('unextended');
            $('.menu-item').removeClass('hoverState');
        } else {
            $('.desktop-list').addClass('unextended');
            $('.menu-item').addClass('hoverState');
        }
    }

    navigationAnimation();
    $(window).on('scroll', navigationAnimation);

    $('#navigation-arrow').on('click',function(){
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1800, 'easeInOutExpo');
    });

    setTimeout(function(){
        $('.hero-intro').fadeIn(1500);
    }, 300);

    setInterval(function () {
        $('.fa-angle-down').toggleClass('wave');
    }, 800);
});

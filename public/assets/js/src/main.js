'use strict';
$(function () {

    setInterval(function () {
        $('.fa-angle-down').toggleClass('wave');
    }, 800);

    var nav = $('#navigation');
    var heroSection = $('.hero-section');

    if ($(window).width() >= 1024) {

        $('.parallax-window').data('image-src', 'public/assets/img/hero.png');
        $('.navigation-list').on('click', function(){
            setTimeout(function(){
                $('.menu-item').toggleClass('no-transition');
            });

            $('body, .navigation-list, .plus, .menu-item, i, .navigation').toggleClass('active');
        });
    }

    if ($(window).width() <= 1023) {
        $(window).on('scroll', function(){
            if ($(window).scrollTop() >= 50) {
                $('.navigation').addClass('active');
            } else {
                $('.navigation').removeClass('active');
            }
        });
        $('.parallax-window').data('image-src', 'public/assets/img/hero-mobile.png');
        $('.navigation-list > ul').on('click', function(){
            $('.navigation-list, .menu-item, i, .nav-header, .mobile-seperator').toggleClass('active');
        });
    }

    function navigationAnimation(){
        if ($(window).width() >= 1024) {
            if ($(window).scrollTop() <= $(heroSection).height() / 2 - 75) {
                $('.navigation-list').removeClass('unextended');
                $('.menu-item').removeClass('unextended');
                $('.navigation-list').addClass('extended');
            } else {
                $('.navigation-list').addClass('unextended');
                $('.menu-item').addClass('unextended');
                $('.navigation-list').removeClass('extended');
            }
        }
    }

    navigationAnimation();
    $(window).on('scroll', navigationAnimation);
    $(window).on('scroll', function(){
        if ($('.navigation-list').hasClass('active')) {
            $('.menu-item').each(function(key, value){
                $(value).addClass('no-transition');
            })
        }
    });



    $('.menu-item').each(function(key, value){
        var currentAnchor = $(value).parent();
        var currentAnchorHref = $(value).parent().attr('href');
        $(currentAnchor).on('click',function(e){
            e.preventDefault();
            if ($(window).width() >= 1024) {
                $('html, body').animate({
                    scrollTop: $(currentAnchorHref).offset().top
                }, 1800, 'easeInOutExpo');
            } else {
                $('html, body').animate({
                    scrollTop: $(currentAnchorHref).offset().top - 52
                }, 1800, 'easeInOutExpo');
            }

        });
    });

    $('#navigation-arrow').on('click',function(){
        $('html, body').animate({
            scrollTop: $("#builds").offset().top
        }, 1800, 'easeInOutExpo');
    });

    setTimeout(function(){
        $('.hero-intro').fadeIn(1500);
    }, 300);

});

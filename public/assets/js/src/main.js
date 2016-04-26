'use strict';
$(function () {

    var viewportWidth = $(window).width();
    var nav = $('#navigation');
    var heroSection = $('.hero-section');

    setInterval(function () {
        $('.fa-angle-down').toggleClass('wave');
    }, 800);

    if ($(window).width() >= 1024) {
        $('.parallax-window').data('image-src', 'public/assets/img/hero-min.png');
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
        $('.parallax-window').data('image-src', 'public/assets/img/hero-mobile-min.png');
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
            scrollTop: $("#skills").offset().top
        }, 1800, 'easeInOutExpo');
    });

    // HERO ANIMATION
    function oceanImagesHeight(){
        var waveOne = $('.wave-one');
        var waveTwo = $('.wave-two');
        var waveThree = $('.wave-three');
        var island = $('.island');
        var lighthouseRays = $('.rays');

        var allWavesHeight = $(waveThree).height() * 3;
        var windowHeight = $(window).height();
        var islandWrapper = $('.island-wrapper');

        $(waveTwo).css('bottom', $(waveThree).height());
        $(waveOne).css('bottom', $(waveThree).height() * 2);
        $(islandWrapper).css('bottom', allWavesHeight);
        $('.hero-intro').css('bottom', allWavesHeight);
    }

    function setSolarSystem(){
        var viewportWidth = $(window).width();
        var viewportHeight = $(window).height();
        var waveOne = $('.wave-one');
        var waveTwo = $('.wave-two');
        var waveThree = $('.wave-three');
        var allWavesHeight = $(waveThree).height() * 3;
        var solarSystemWrapper = $('.moon-sun');
        var solarSystemHeight = viewportHeight - allWavesHeight;

        $(solarSystemWrapper).css('height', solarSystemHeight);
    }

    function starryNight(){
        var waveOne = $('.wave-one');
        var waveTwo = $('.wave-two');
        var waveThree = $('.wave-three');
        var allWavesHeight = $(waveThree).height() * 3;
        var starryNight = $('.starry-night');
        var starryNightHeight = $(window).height() - allWavesHeight;
        var starryNightWidth = $(starryNight).width();

        function getRandomheight(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function getRandomWidth(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        $('.starry-night > p').each(function(key, value){
            var randomHeight = getRandomheight(0, starryNightHeight);
            var randomWidth = getRandomWidth(0, starryNightWidth);
            var min = 2;
            var max = 7;
            var randomOpacityTiming = Math.floor(Math.random() * (max - min + 1)) + min;
            var opacityAnimation = 'starFade ' + randomOpacityTiming + 's infinite';
            $(value).css('top', randomHeight);
            $(value).css('left', randomWidth);
            $(value).css('animation', opacityAnimation);
        });

        $(starryNight).css('height', starryNightHeight);
    }

    function starCount(device){
        if (device >= 1024) {
            for (var i = 200; i > 1; i--) {
                $('.starry-night').append($('<p>.</p>'));
            }
        } else if (device <= 1023 && device >= 768){
            for (var i = 70; i > 1; i--) {
                $('.starry-night').append($('<p>.</p>'));
            }
        } else {
            for (var i = 35; i > 1; i--) {
                $('.starry-night').append($('<p>.</p>'));
            }
        }
    }

    $('.carousel').slick();
    oceanImagesHeight();
    setSolarSystem();
    starCount(viewportWidth);
    starryNight();

    $(window).on('resize', function(){
        oceanImagesHeight();
        setSolarSystem();
        starCount(viewportWidth);
        starryNight();
    })

});

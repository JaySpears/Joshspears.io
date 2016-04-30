'use strict';
$(function () {
    $(document).ready(function(){

        var viewportWidth = $(window).width();
        var nav = $('#navigation');
        var heroSection = $('.hero-section');
        var scrollForm = $("#scrollForm");
        var formSubmitButton = $('input[type="submit"]');

        setInterval(function () {
            $('.fa-angle-down').toggleClass('wave');
        }, 800);

        if ($(window).width() >= 1024) {
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
            $('.parallax-window').data('image-src', 'public/assets/img/hero-mobile-min-min.png');
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
            if (viewportWidth >= 768) {
                $('html, body').animate({
                    scrollTop: $("#skills").offset().top
                }, 1800, 'easeInOutExpo');
            } else {
                $('html, body').animate({
                    scrollTop: $("#skills").offset().top - 52
                }, 1800, 'easeInOutExpo');
            }

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
            if (viewportWidth >= 1024) {
                $('.hero-intro').css('bottom', allWavesHeight);
            }
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
                for (var i = 150; i > 1; i--) {
                    $('.starry-night').append($('<p><i style="font-size: 5px;"class="fa fa-star" aria-hidden="true"></i></p>'));
                }
            } else if (device <= 1023 && device >= 768){
                for (var i = 60; i > 1; i--) {
                    $('.starry-night').append($('<p><i style="font-size: 5px;"class="fa fa-star" aria-hidden="true"></i></p>'));
                }
            } else {
                for (var i = 25; i > 1; i--) {
                    $('.starry-night').append($('<p><i style="font-size: 5px;"class="fa fa-star" aria-hidden="true"></i></p>'));
                }
            }
        }

        function writeLetter(){
            if ($(window).width() >= 768) {
                var scroll = $('.scroll-wrapper');
                var scrollHandleLeft = $('.scroll-handle-left');
                var scrollHandleRight = $('.scroll-handle-right');
                var papyrus = $('.form-wrapper');
                var form = $('.form-wrapper > form');

                $(scroll.add(scrollHandleLeft).add(scrollHandleRight).add(papyrus).add(form)).addClass('expanded');
            }
        }

        scrollForm.validate({
            rules: {
                "name": {
                    required: true
                },
                "email": {
                    required: true,
                    email: true
                }
            },
            messages: {
                "name": {
                    required: "Please enter your name."
                },
                "email": {
                    required: "Please enter a valid email address."
                },
                "email-content": {
                    required: "Please leave a brief description about your reasons for trying to contact me."
                }
            }
        });

        function sendEmail(){
            var sendersName = $('input[name="name"]').val();
            var sendersEmail = $('input[name="email"]').val();
            var emailMessage = $('textarea[name="email-content"]').val();

            if ($("#scrollForm").valid()) {
                var formData = {
                    name: $('input[name="name"]').val(),
                    email: $('input[name="email"]').val(),
                    message: $('textarea[name="email-content"]').val()
                };
                $.ajax({
                    type: "POST",
                    url: "public/assets/php/mail.php",
                    data: formData,
                    success: function(){
                        console.log('SENT!');
                    }
                });
            }
        }

        function signForm(e){
            e.preventDefault();
            var dottedLine = $('.name-signature');
            var nameValue = $('input[name="name"]').val();
            if ($("#scrollForm").valid()) {
                $(dottedLine).fadeIn('slow', function(){
                    $(this).html(nameValue);
                });
            }
        }

        function headerBackgroundTransition(){
            if (viewportWidth >= 768) {
                var scrollTop = $(window).scrollTop();
                var navigationIcons = [];
                var navigationLinks = [];

                $('.navigation-list > div > i').each(function(key,value){
                    navigationIcons.push(value);
                });

                $('.navigation-list > div > a > .menu-item').each(function(key,value){
                    navigationLinks.push(value);
                });

                var skillSection = $('.skills-section');
                var buildSection = $('.builds-section');
                var contactSection = $('.contact-section');

                var allSections = [skillSection, buildSection, contactSection];

                function displayBackgroundColor(section, allElements, colorOne, colorTwo){
                    for (var i = 0; i < allElements.length; i++) {
                        if ((section.offset().top - scrollTop) < ($(allElements[i]).offset().top - scrollTop)) {
                            $(allElements[i]).css('background-color', colorOne);
                        } else {
                            $(allElements[i]).css('background-color', colorTwo);
                        }
                    }
                }

                function displayColor(section, allElements, colorOne, colorTwo){
                    for (var i = 0; i < allElements.length; i++) {
                        if ((section.offset().top - scrollTop) < ($(allElements[i]).offset().top - scrollTop) + 5) {
                            $(allElements[i]).css('color', colorOne);
                        } else {
                            $(allElements[i]).css('color', colorTwo);
                        }
                    }
                }

                function sectionPosition(section){
                    for (var i = 0; i < section.length; i++) {

                    }
                }

                sectionPosition(allSections);

                if ($(skillSection).offset().top - scrollTop > 0) {
                    displayColor(skillSection, navigationIcons, '#2C96E8', 'white');
                    displayColor(skillSection, navigationLinks, '#2C96E8', 'white');
                } else if ($(skillSection).offset().top - scrollTop < 0 && $(buildSection).offset().top - scrollTop > 0) {
                    displayColor(buildSection, navigationIcons, '#480001', '#2C96E8');
                    displayColor(buildSection, navigationLinks, '#480001', '#2C96E8');
                } else if ($(skillSection).offset().top - scrollTop < 0 && $(buildSection).offset().top - scrollTop < 0 && $(contactSection).offset().top - scrollTop > 0) {
                    displayColor(contactSection, navigationIcons, 'white', '#480001');
                    displayColor(contactSection, navigationLinks, 'white', '#480001');
                }
            }
        }

        formSubmitButton.on('click', sendEmail);
        formSubmitButton.on('click', signForm);

        $('.carousel').slick({
            autoplay: true,
            autoplaySpeed: 1500
        });

        oceanImagesHeight();
        setSolarSystem();
        starCount(viewportWidth);
        starryNight();
        headerBackgroundTransition();

        $(window).on('resize', function(){
            oceanImagesHeight();
            setSolarSystem();
            starCount(viewportWidth);
        });

        $(window).on('scroll', function(){
            headerBackgroundTransition();
            if($(window).scrollTop() >= 1620){
                writeLetter();
            }
        });

        if (viewportWidth <= 767) {
            heroSection.addClass('mobile-detection-height');
        }

    });
});

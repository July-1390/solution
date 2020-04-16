(function($) {
    "use strict";

    // ==== Preloader ==== //
    $(window).on('load', function() {
        $('#preloader').fadeOut();
    });

    // ==== Sticky ==== //
    var header = $(".header");
    var sticky = header.offset().top;
    $(window).on('scroll', function() {
        if (window.pageYOffset > sticky) {
            $(header).addClass("sticky");
        } else {
            header.removeClass("sticky");
            $('.header').removeClass("sticky");
        }
    });

    // ==== Mobile Menu ==== //

    $("#mobile-menu-toggler").on("click", function(e) {
        e.preventDefault();
        $("nav.navbar > ul").slideToggle();
    });

    // ==== Animation ==== //
    function bannerArt() {
        var tl = new TimelineMax({});
        var t2 = new TimelineMax({});

        tl
            .add('f1')
            .staggerFrom('.dot', .8, { y: 10, ease: Power4.easeInOut, repeat: -1, repeatDelay: 1 }, .3, 'f1')
            .staggerFrom('.line', .8, { width: '59px', yoyo: true, ease: Power4.easeInOut, repeat: -1, repeatDelay: 1 }, .3, 'f1')
            .to('.cloud1', 7, { x: '-90', yoyo: true, ease: Linear.easeNone, repeat: -1, repeatDelay: 1 }, .3, 'f1')
            .to('.cloud2', 9, { x: '-110', yoyo: true, ease: Linear.easeNone, repeat: -1, repeatDelay: 1 }, .3, 'f1')
            .to('.cloud3', 15, { x: '-60', yoyo: true, ease: Linear.easeNone, repeat: -1, repeatDelay: 1 }, .3, 'f1')
            .to('.patha1', 5, { rotation: '25', yoyo: true, ease: Linear.easeNone, repeat: -1, repeatDelay: 1, transformOrigin: "50% 100%" }, 'f1')
            .to('.patha2', 10, { rotation: '25', yoyo: true, ease: Linear.easeNone, repeat: -1, repeatDelay: 1, transformOrigin: "50% 100%" }, 'f1')
            .to('.patha3', 5, { rotation: '-25', yoyo: true, ease: Linear.easeNone, repeat: -1, repeatDelay: 1, transformOrigin: "50% 100%" }, 'f1')
            .to('.gear', 5, { rotation: '360', ease: Linear.easeNone, repeat: -1, transformOrigin: "50% 50%" }, 'f1')
            .to('.speaker', 1, { css: { "transform": "scale(1.1)" }, ease: Bounce.easeInOut, repeatDelay: 1, repeat: -1, }, 'f1')



    }
    bannerArt();

    // ==== Anchor Click Animation ==== //

    $('#topbtn').on('click', function(e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
        $('html, body').stop().animate({ scrollTop: offsetTop }, 300);
        e.preventDefault();
    });

})(jQuery);
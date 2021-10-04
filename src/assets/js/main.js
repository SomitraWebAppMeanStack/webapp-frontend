"use strict";


/*==============================================================*/
//Search - START CODE
/*==============================================================*/
function ScrollStop() {
    return false;
}

function ScrollStart() {
    return true;
}

/*==============================================================
 full screen START CODE
 ==============================================================*/
function fullScreenHeight() {
    var element = $(".full-screen");
    var $minheight = $(window).height();
    element.parents('section').imagesLoaded(function() {
        if ($(".top-space .full-screen").length > 0) {
            var $headerheight = $("header nav.navbar").outerHeight();
            $(".top-space .full-screen").css('min-height', $minheight - $headerheight);
        } else {
            element.css('min-height', $minheight);
        }
    });

    var minwidth = $(window).width();
    $(".full-screen-width").css('min-width', minwidth);

    var sidebarNavHeight = $('.sidebar-nav-style-1').height() - $('.logo-holder').parent().height() - $('.footer-holder').parent().height() - 10;
    $(".sidebar-nav-style-1 .nav").css('height', (sidebarNavHeight));
    var style2NavHeight = parseInt($('.sidebar-part2').height() - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-top')) - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-bottom')) - parseInt($(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('margin-bottom')));
    $(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('height', (style2NavHeight));


}

function SetResizeContent() {
    fullScreenHeight();
}

/* ===================================
 START RESIZE
 ====================================== */
$(window).resize(function(event) {
    setTimeout(function() {
        SetResizeContent();
    }, 500);
});

/* ===================================
 START READY
 ====================================== */
$(document).ready(function() {
    "use strict";

    $(window).scroll(function() {
        if ($(this).scrollTop() > 20)
            $('.headerWrapper').addClass('sticky');
        else
            $('.headerWrapper').removeClass('sticky');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('html, body').animate({ scrollTop: 0 }, 50);
        setTimeout(function() {
            $('body').addClass('hidden');
        }, 2500);

        //Click event to scroll to top
        $(document).on('mousewheel', '.swiper-wrapper', function() {
            if ($('.swiper-slide:last-child').hasClass('swiper-slide-active')) {
                $('body').removeClass('hidden');
            } else {
                $('body').addClass('hidden');
                $('html, body').animate({ scrollTop: 0 }, 100);
            }
        });
    }
    // $(window).scroll(function(){
    //     if ($('#swiper-section .swiper-pagination .swiper-pagination-bullet:last-child').hasClass('swiper-pagination-bullet-active')){
    //         $('body').addClass('visible');
    //     }else if($('#swiper-section .swiper-pagination .swiper-pagination-bullet:last-child(1)')){
    //         $('body').removeClass('visible');
    //     }else{
    //         return
    //     }
    // });

    if (window.matchMedia('(min-width: 768px)').matches) {
        var swiperVerticalPagination = new Swiper('.swiper-vertical-pagination', {
            allowTouchMove: true,
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            preventClicks: false,
            mousewheel: {
                mousewheel: true,
                sensitivity: 1,
                releaseOnEdges: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination-vertical',
                clickable: true
            },
            on: {
                resize: function() {
                    swiperVerticalPagination.update();
                }
            }
        });


        setTimeout(function() {

            if ($('.swiper-vertical-pagination').length > 0 && swiperVerticalPagination) {
                swiperVerticalPagination.update();
            }

        }, 500);
    }

    /*==============================================================
     smooth scroll
     ==============================================================*/

    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $(document).on('click.smoothscroll', 'a.scrollto', function(event) {
        event.preventDefault();
        var target = this.hash;
        if ($(target).length != 0) {
            $('html, body').stop()
                .animate({
                    'scrollTop': $(target)
                        .offset()
                        .top
                }, scrollAnimationTime, scrollAnimation, function() {
                    window.location.hash = target;
                });
        }
    });

    /*==============================================================
     wow animation - on scroll
     ==============================================================*/
    // var wow = new WOW({
    //     boxClass: 'wow',
    //     animateClass: 'animated',
    //     offset: 0,
    //     mobile: false,
    //     live: true
    // });
    // $(window).imagesLoaded(function () {
    //     wow.init();
    // });

    /* ===================================
     blog hover box
     ====================================== */
    SetResizeContent();


});
/* ===================================
 END READY
 ====================================== */

/* ===================================
 START Page Load
 ====================================== */
$(document).on('load', function() {

    var hash = window.location.hash.substr(1);
    if (hash != "") {
        setTimeout(function() {
            $(document).imagesLoaded(function() {
                var scrollAnimationTime = 1200,
                    scrollAnimation = 'easeInOutExpo';
                var target = '#' + hash;
                if ($(target).length > 0) {

                    $('html, body').stop()
                        .animate({
                            'scrollTop': $(target).offset().top
                        }, scrollAnimationTime, scrollAnimation, function() {
                            window.location.hash = target;
                        });
                }
            });
        }, 500);
    }

    // fullScreenHeight();
});
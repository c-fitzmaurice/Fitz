(function($) {
"use strict";
jQuery(document).ready(function() {




    /* ============== DETECT MOBILE DEVICES ============== */
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    /* ============== Lazy Line FITZ ============== */
    var FITZ_DATA = {
        "draw" : {
        "strokepath" :
            [
                {
                    "path": "M586.6,160.6c-0.8-1.6-4.9-8.4-13.4-5.9  c-26.7,6.8-34.8,10.3-58.3,19.2c-9.2,3.5-20.7,9.8-29,14.2c-66.6,35.5-114.1,83.1-126.7,97.4c10.1-18.6,34.1-64.4,49.5-85.4  c1.2-1.9,5.5-6.6,2.3-12.9c-1.6-2.6-1.8-4.1-7.7-3.9c-18.2,3.4-83,27.8-83,27.8s51.5-178.3,53.5-186.6c2.1-9.5-6.9-14.5-8.8-15.4  c-7.9-3.2-14.9,1.4-17.8,7.8c0,0-50.3,179-58.3,205c-13,4.6-17.2,6.2-28.2,10.2c-5.7,2-16.7,5.3-19.2,6.4c-8,3.5-10.3,10.4-9.3,15.8  c1.2,6.4,9.2,12.4,16.5,10.7c3.1-0.6,30.4-10.4,30.4-10.4c-3,12.2-79.7,271.4-79.7,271.4c-1.4,7.6,3,13.9,8.8,16  c6.3,2.3,15.3-0.6,18-8.8c0,0,41.7-162.2,84.4-290.4c0,0,54.9-20.1,55-20.1c-11.4,18.9-21.5,39.1-30.9,60.6  c-5.7,12.8-8.6,18.4-13.1,34.8c-1.3,6.4,1.1,11.9,5.9,15.1c6.5,4.2,13,1.5,15.8-0.5c10.1-9.3,13.8-15.7,22.6-24.8  c2.4-2.5,49.8-59.8,136.3-102.8c25-12.5,49.7-22.3,77.3-29.2C588.2,173.1,588.7,164.8,586.6,160.6z",
                    "duration": 2250
                },
                {
                    "path": "M218,249.7c-6.8-1.9-15,1.7-16.8,7.4l-35.7,120.1  c-1.4,7.9,3.9,13.2,8.3,15.2c4.2,1.7,14.2,2.2,18.2-7.7l35.6-119.6C228.9,259.9,224.9,251.6,218,249.7z",
                    "duration": 2250
                },
                {
                    "path": "M186.7,271c-4.2-5.7-9.9-7.6-15.1-6.3l-31.2,10.3  l33.5-112.6c1.1-5.1-1.1-9.6-4.3-12.6c-4.1-3.6-9.3-4.8-14.7-2.9c-7.4,2.6-138.3,48.2-138.3,48.2c-5.3,1.9-8.9,6.9-8.9,12.7  c0,7.6,6.2,13.7,13.9,13.7c1.5,0,3.1-0.3,4.2-0.6c6.6-1.7,113.9-40.7,113.9-40.7l-30.8,106L58.9,303c-7.1,2.5-10.3,11.2-8,17.2  c3.8,9.6,12.7,9.8,16.9,8.7l30.4-10L66.4,424.6c-2.3,9.6,5.3,15,8,16c10.4,3.8,17.3-3.9,18.8-8.9l36.8-124.4l51.4-17.3  C181.4,290,193.4,283.8,186.7,271z",
                    "duration": 2250
                }
            ],
        "dimensions" : { "width": 595, "height":555 }
        }
    }

    function lazyLineFunction(){

        $('#draw').lazylinepainter({
            'svgData' : FITZ_DATA,
            'strokeWidth':2,
            'strokeColor':'#FFFFFF',
            'drawSequential': false,
            'reverse': true,
            'responsive': true,
            'delay': 1000,
            'onComplete' : function(){
                setTimeout(function() {
                    $('#draw svg path').fadeIn(800).css({
                        "fill-opacity": 1,
                        "fill":"#fff",
                        "-webkit-transition": "fill-opacity 1.5s ease",
                        "-moz-transition": "fill-opacity 1.5s ease",
                        "-o-transition": "fill-opacity 1.5s ease",
                        "transition": "fill-opacity 1.5s ease"
                    });    
                }, 250);
            }
        })

        $('#draw').lazylinepainter('paint');
    }
    lazyLineFunction();



    /* ============== CHROMe iOS FIX ============== */
    // Fix iOS Chrome Background Resizing Issue
    var bg = $("#home");
    $(window).resize("resizeBackground");
    function resizeBackground() {
         bg.height($(window).height());
    }
    resizeBackground();




    /* ============== FADE OUT ============== */
    function hideFitz() {
        $('.fade-out').fadeIn(8000).css({
        "background-color":"transparent",
        "-webkit-transition": "background-color 0.9s ease",
        "-moz-transition": "background-color 0.9s ease",
        "-o-transition": "background-color 0.9s ease",
        "transition": "background-color 0.9s ease"
        });
    }
    setTimeout(hideFitz, 5250);
    jQuery('#preloader').fadeOut(300);




    /* ============== GO TO HASH ============== */
    jQuery(window).load(function() {
        if (window.location.hash) {
            var hash = window.location.hash;
            jQuery('html, body').animate({scrollTop: jQuery(hash).offset().top - height_menu - 50});
        }
    });




    /* ============== MENU ============== */
    var windows_top = jQuery(window).scrollTop();
    var height_menu = jQuery('#main-menu').height();
    var size;

    if (jQuery('body.blog, body.portfolio').length > 0) {
        size = 0.3;
    }
    else
        size = 0.8;

    // Effect menu appear
    if (windows_top > size * jQuery(window).height())
        jQuery('#main-menu.effect-on').addClass('menu-visible');
    else
        jQuery('#main-menu.effect-on').removeClass('menu-visible');
    jQuery(window).scroll(function() {
        windows_top = $(window).scrollTop();
        if (windows_top > size * jQuery(window).height())
            jQuery('#main-menu.effect-on').addClass('menu-visible');
        else
            jQuery('#main-menu.effect-on').removeClass('menu-visible');
    });


    jQuery('#main-menu').localScroll({
        offset: {top: -height_menu},
        duration: 1000
    });
    
    jQuery('#side-menu').localScroll();


    // Current menu item desktop menu
    $.currentItem();

    jQuery(window).scroll(function() {
        $.currentItem();
    });
    
    
    // Sticky Menu
    jQuery('.sticky').sticky({topSpacing:0});


    // Mobile menu
    jQuery('#mobile-button').click(function() {
        if (jQuery('#mobile-menu .menu-container').css('display') == 'none'){
            jQuery('#mobile-menu .menu-container').slideDown(300);
            jQuery('#logo').fadeOut(500);
        }
        else {
            jQuery('#mobile-menu .menu-container').slideUp(300);
            jQuery('#logo').fadeIn(300);
        }
    });

    jQuery('#mobile-menu a').click(function() {
        var parent_menu = jQuery(this).parent();
        if(jQuery('> .sub-menu', parent_menu).length == 0) jQuery('#mobile-menu .menu-container').slideUp(300);
    });


    // Sub-Menu
    jQuery('#main-menu .desktop-menu .menu-container li').hover(function() {
        jQuery('> .sub-menu', this).stop().show();
    }, function() {
        jQuery('> .sub-menu', this).stop().hide();
    });

    
    // Mobile Menu
    jQuery('#mobile-menu li').each(function() {
            if(jQuery('.sub-menu', this).length > 0) {
                    jQuery(this).append('<i class="fa fa-angle-down"></i>');
            }
    });

    jQuery('#mobile-menu li a').click(function() {
            var parent_mobile = jQuery(this).parent();
            if(jQuery(this).attr('href') == '#') {
                    if(jQuery('> .sub-menu', parent_mobile).length > 0 && jQuery('> .sub-menu', parent_mobile).css('display') == 'none') {
                            jQuery('> .sub-menu', parent_mobile).slideDown(300);
                            return false;
                    }
                    else if(jQuery('> .sub-menu', parent_mobile).length > 0 && jQuery('> .sub-menu', parent_mobile).css('display') == 'block') {
                            jQuery('> .sub-menu', parent_mobile).slideUp(300);
                            return false;
                    }
                    else {
                            return false;
                    }

            }
    });




    /* ============== PARALLAX EFFECTS ============== */
    if (!isMobile.any()) {
        if (jQuery('.parallax').length) {
            jQuery('.parallax').each(function() {
                jQuery(this).parallax('50%', "0.1");
            });
        }
    }
    


    
    /* ============== ANIMATION EFFECTS ============== */
    jQuery('[data-animate]').appear(function () {
        var my_animation = jQuery(this).data('animate');
        if (!isMobile.any()) { 
            jQuery(this).addClass('animated');
            jQuery(this).addClass(my_animation);
        }
    });




    /* ============== PORTFOLIO ============== */
    var $container = jQuery('#portfolio-items');
    var layout;
    if($container.parent().hasClass('portfolio-type-3')) layout = 'fitRows';
    else layout = 'masonry';
    $container.isotope({
        itemSelector: '.item',
        transitionDuration: '1s',
        layoutMode: layout,
    });


    jQuery(window).load(function() {
        $container.isotope('layout');
    });

    $container.isotope('layout');

    jQuery('#portfolio-container nav li a').click(function() {
        jQuery('#portfolio-container nav li').removeClass('current-category');
        var filterValue = jQuery(this).attr('data-filter');
        $container.isotope({filter: filterValue});
        jQuery(this).parent().addClass('current-category');
        return false;
    });


    // Position image hover
    var height_desc;

    jQuery('.portfolio-type-1 .item, .portfolio-type-4 .item').hover(function() {
        if (!isMobile.any()) {
            height_desc = parseInt(jQuery('.portfolio-info', this).css('height'), 10);
            jQuery('.portfolio-info', this).css({
                bottom: -height_desc,
                visibility: 'visible',
            });
            jQuery('.portfolio-info', this).css('bottom', 0);
            jQuery('img', this).css({top: -(height_desc / 2)});
        }
    }, function() {
        if (!isMobile.any()) {
            jQuery('img', this).css({top: 0});
            jQuery('.portfolio-info', this).css('bottom', -height_desc);
        }
    });

    jQuery(window).on("debouncedresize", function(event) {
        $container.isotope('layout');
        jQuery('.portfolio-info').css({
            visibility: 'hidden'
        });
    });


    // Load project
    var target_portfolio;

    $('.portfolio-type-1 #portfolio-items a, #portfolio-nav .navigate').on('tap click',function(){
        target_portfolio = jQuery(this).attr('href');
        jQuery('#portfolio-content').css({
            opacity: 0,
            visibility: 'hidden'
        });

        jQuery('#portfolio-display').css({
            display: 'block'
        });

        jQuery('html, body').animate({scrollTop: $('#portfolio-container').offset().top - height_menu - 50}, {
            complete: function() {
                jQuery('#portfolio-loader').stop().fadeIn(300, function() {


                    $.ajax({
                        url: target_portfolio,
                        success: function(content) {
                            jQuery('#portfolio-content').html(content);
                            jQuery('#portfolio-loader').delay(1000).stop().fadeOut(300, function() {
                                jQuery('#portfolio-content').css({visibility: 'visible', opacity: 1});
                            });

                        }
                    });

                });

            }
        });
        return false;
    });

    jQuery(document).on('click', '.portfolio-type-1 #portfolio-items a, #portfolio-nav .navigate', function() {
        target_portfolio = jQuery(this).attr('href');
        jQuery('#portfolio-content').css({
            opacity: 0,
            visibility: 'hidden'
        });

        jQuery('#portfolio-display').css({
            display: 'block'
        });

        jQuery('html, body').animate({scrollTop: $('#portfolio-container').offset().top - height_menu - 50}, {
            complete: function() {
                jQuery('#portfolio-loader').stop().fadeIn(300, function() {


                    $.ajax({
                        url: target_portfolio,
                        success: function(content) {
                            jQuery('#portfolio-content').html(content);
                            jQuery('#portfolio-loader').delay(1000).stop().fadeOut(300, function() {
                                jQuery('#portfolio-content').css({visibility: 'visible', opacity: 1});
                            });

                        }
                    });

                });

            }
        });
        return false;
    });

    jQuery(document).on('click touchstart', '#close-portfolio', function() {
        jQuery('#portfolio-display').slideUp(1000);
        return false;
    });



    
    /* ============== FORM VALIDATE ============== */
    var personal = jQuery('input[name="personal"]');
    var email = jQuery('input[name="email"]');
    var subject = jQuery('input[name="subject"]');
    var message = jQuery('textarea[name="message"]');
    var errors;

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail))
            return true;
        else
            return false;
    }

    if (jQuery('.contact-ajax').length > 0)
        jQuery('.contact-ajax')[0].reset();

    jQuery('.contact-ajax').submit(function() {
        errors = 0;
        var formInput = jQuery(this).serialize();
        if (personal.val() == '') {
            personal.addClass('error');
            errors++;
        }
        else {
            personal.removeClass('error');
        }


        if (email.val() == '' || !validateEmail(email.val())) {
            email.addClass('error');
            errors++;
        }
        else {
            email.removeClass('error');
        }

        if (message.val() == '') {
            message.addClass('error');
            errors++;
        }
        else {
            message.removeClass('error');
        }

        if (subject.val() == '') {
            subject.addClass('error');
            errors++;
        }
        else {
            subject.removeClass('error');
        }

        // Success validate
        if (errors == 0) {
            jQuery('.contact-ajax button[type="submit"], .contact-ajax input').attr('disabled', 'disabled');

            $.ajax({
                type: "POST",
                url: 'assets/php/contact_form/',
                data: formInput,
                success: function(response) {
                    if (response == "success")
                    {
                        $(".contact-ajax > div").slideUp(500);
                        $("#success-message").slideDown(500);

                    }
                    else {
                        $("#error-message").slideDown(500);
                    }
                }
            });
        }

        return false;
    });



    
    /* ============== PRETTY PHOTO ============== */
    jQuery('a[data-gal="prettyPhoto"]').prettyPhoto({
        deeplinking:false
    });
    



    /* ============== SMOOTH SCROLL ============== */
    jQuery('.smooth-scroll').click(function() {
        var target_scroll = jQuery(this).attr('href');
        jQuery('html, body').animate({scrollTop: jQuery(target_scroll).offset().top - height_menu}, 1000);
        return false;
    });




});
})(jQuery);
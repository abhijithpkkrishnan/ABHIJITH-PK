
$(document).ready(function () {
    function fadeInOnScroll() {
        $('.fade-in,.slide-up,.slide-down,.fade-in-3,.fade-in-4,.fade-in-5').each(function () {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 50) { 
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible'); 
            }
        });
        $('.fade-in-2').each(function () {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 50) { 
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible'); 
            }
        });
    }

    fadeInOnScroll();
    $(window).on('scroll', fadeInOnScroll);

    $('.zoom').hover(
        function() {
            $(this).css('transform', 'scale(1.05)'); 
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    $('.color-change').hover(
        function() {
            $(this).css('background-color', '#cd3dba'); 
        },
        function() {
            $(this).css('background-color', '#a37fdf'); 
        }
    );
    $('.color-change-black').hover(
        function() {
            $(this).css('background-color', '#111111');
            
        },
        function() {
            $(this).css('background-color', '#a37fdf'); 
        }
    );
    $('.color-text-black').hover(
        function() {
            $(this).css('color', '#111111');
            
        },
        function() {
            $(this).css('color', '#a37fdf'); 
        }
    );
    $('.color-icons').hover(
        function() {
            $(this).css('color', 'pink');
            
        },
        function() {
            $(this).css('color', '#ffffff'); 
        }
    );
    $('.gfc').hover(
        function() {
            $(this).css('color', '#e6e6e6');
            
        },
        function() {
            $(this).css('color', '#ffffff'); 
        }
    );
    
    
});


(function($) {
    'use strict';

    // loader
    const loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    const offcanvas_toggle = $('.js-offcanvas-toggle');
    offcanvas_toggle.on('click', function() {
        if ( $('body').hasClass('offcanvas-open') ) {
            $('body').removeClass('offcanvas-open');
        } else {
            $('body').addClass('offcanvas-open');
        }
    });

    $(document).click(function(e) {
        const container = $('.js-offcanvas-toggle, #offcanvas_menu');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ( $('body').hasClass('offcanvas-open') ) {
                $('body').removeClass('offcanvas-open');
            }
        }
    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (window.screen.availWidth <= 576) {
            if ($(document).scrollTop() < 400) {
                document.getElementById("menu-btn").style.display = "block";
            } else {
                document.getElementById("menu-btn").style.display = "none";
            }
        }
    }
})(jQuery);
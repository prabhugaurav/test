
$('.img-parallax').each(function(){
    var imgThis = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
        var speed = imgThis.data('speed');
        var imgY = imgParent.offset().top;
        var winY = $(this).scrollTop();
        var winH = $(this).height();
        var parentH = imgParent.innerHeight();

        // The next pixel to show on screen
        var winBottom = winY + winH;

        // If block is shown on screen
        if (winBottom > imgY && winY < imgY + parentH) {
            // Number of pixels shown after block appear
            var imgBottom = ((winBottom - imgY) * speed);
            // Max number of pixels until block disappear
            var imgTop = winH + parentH;
            // Porcentage between start showing until disappearing
            var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        }
        imgThis.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
        });
    }
    $(document).on({
        scroll: function () {
            parallaxImg();
        }, ready: function () {
            parallaxImg();
        }
    });
});


var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
    });
};
fullHeight();


// scroll
var scrollWindow = function() {
    $(window).scroll(function(){
        var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

        if (st > 80) {
            if ( !navbar.hasClass('scrolled') ) {
                navbar.addClass('scrolled');	
            }
        } 
        if (st < 80) {
            if ( navbar.hasClass('scrolled') ) {
                navbar.removeClass('scrolled sleep');
            }
        } 
        if ( st > 30 ) {
            if ( !navbar.hasClass('awake') ) {
                navbar.addClass('awake');	
            }
            
            if(sd.length > 0) {
                sd.addClass('sleep');
            }
        }
        if ( st < 30 ) {
            if ( navbar.hasClass('awake') ) {
                navbar.removeClass('awake');
                navbar.addClass('sleep');
            }
            if(sd.length > 0) {
                sd.removeClass('sleep');
            }
        }
    });
};
scrollWindow();


/* var counter = function() {
    $('#section-counter').waypoint( function( direction ) {
        if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.number').each(function(){
                var $this = $(this),
                    num = $this.data('number');
                $this.animateNumber(
                  {
                    number: num,
                    numberStep: comma_separator_number_step
                  }, 7000
                );
            });
        }
    } , { offset: '95%' } );
}
counter(); */


/* SCROLL UP */
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
$('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});



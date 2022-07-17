
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


function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 2000,
            easing: 'linear',
            step: function () {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function () {
                element.html(this.countNum + html);
            }
        });
    }
}
//When the document is ready
$(function () {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function () {
        //Checking if each items to animate are 
        //visible in the viewport
        $("[data-max]").each(function () {
            inVisible($(this));
        });
    })
});


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



var perWid = $(".perpendicular").width()/2.2;
console.log(perWid);
$(".perpendicular").css({
    // top: perWid + '%',
    transform: 'translate(-50%, ' + perWid + '%)' + ' rotate(-90deg) '
});



$(window).on('load', function () {
    $('.page-loader').fadeOut('slow');
    /* setTimeout(function () {
    }, 2000); */
});
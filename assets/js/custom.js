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



function resize(){
    const navbarInrHegt = document.querySelector(".navbar-fixed-top").offsetHeight;
    // console.log(navbarInrHegt);
    const winHeights = window.innerHeight;
    // console.log(winHeights);
    document.querySelector(".slide-section").style.height = winHeights + navbarInrHegt + 90 + "px";
    // document.querySelector(".page-container").style.padding-top = navbarInrHegt + "px";
}
resize();
window.onresize = function() { resize(); };

$(window).on('load', function () {
    $('.page-loader').fadeOut('slow');
    /* setTimeout(function () {
    }, 2000); */
});




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
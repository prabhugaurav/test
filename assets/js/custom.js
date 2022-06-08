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


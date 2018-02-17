$(function(){

    var total_height = $("header").height() - $("nav").height();
    $(window).scroll(function() {
        var scroll = getCurrentScroll();

        if ( scroll >= total_height ) {

            $('nav').addClass('shrink');
        } else {

            $('nav').removeClass('shrink');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
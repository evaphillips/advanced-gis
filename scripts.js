$(document).ready(function () {
    $('.image-wrapper').hover(function () {
        $(this).find('img').stop().animate({
            opacity: 0.2
        }, 200);
        $(this).find('.text').removeClass('hide');
    }, function () {
        $(this).find('img').stop().animate({
            opacity: 1
        }, 500);
        $(this).find('.text').addClass('hide');
    });
});

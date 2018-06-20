/**
 * Created by leszek on 27.05.18.
 */

$('a[href^="#"]').hover(function () {
   $(this).parent().find('div').stop().animate({
       width: 100+'%'
   }, 400);
}, function () {
    $(this).parent().find('div').stop().animate({
        width: 0
    }, 400);
});

$('a[href*="#"]').click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                }
            });
        }
    }
});
$(function ()
{
    baguetteBox.run('.gallery');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 5) {
            $('.DoScrollUp').fadeIn();
        } else {
            $('.DoScrollUp').fadeOut();
        }
    });

    $('.DoScrollUp').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

})


$(document).ready(function () {
    $('.small a').click(function(e) {
        if($('.big img').attr('src') !== $(this).attr('href')) {
           $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        } 
        e.preventDefault();
    });

$('.button').click(function() {
    $('.gallery').slideToggle(1000);
        if($('.button').text() == '↑') {
           $('.button').text('↓'); 
        } else {
           $('.button').text('↑');
        }
    });

    $('.small a img').click(function() {
        $('.small a img').fadeTo(500,1).css( {
            'border':'none'
        });
        $(this).fadeTo(500,0.6).css({
            'border':'4px double blue'
        });
    });
});

$(document).ready(function(){

    $( ".lang" ).click(function() {
        $('.drop').css({'display':'block'});
    });  
    $( ".lang" ).focusout(function() {
        $('.drop').css({'display':'none'});
});
$( ".search").click(function() {
    $( ".input").focus();
    $('.search').css({'color':'#999999'})
    $('.input').css({
        'opacity':'1',
        'width': '215px',
    });
});  
$( ".input" ).blur(function() {
    $('.search').css({'color':'white'})
    $(this).css({
        'opacity':'0',
        'width': '0px'
    });
});  

$(window).scroll(function(){
    if ($(window).scrollTop() >= 208) {
       $('.header').css({
           'position':'fixed',
           'top':'0px'
       })
    }
    else {
       $('.header').css({
           'position': 'relative',
           'top':'áuto'
       })
    }
});
$( ".mobileButton" ).click(function() {
    $('.mobileContent').css({'left':'0px'});
}); 
$( ".closee" ).click(function() {
    $('.mobileContent').css({
        'left':'-300px'
    });
}); 

 
});


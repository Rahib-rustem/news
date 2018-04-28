
$(document).ready(function(){

    $( ".lang" ).click(function() {
        $('.drop').css({'display':'block'});
    });  
    $( ".lang" ).focusout(function() {
        $('.drop').css({'display':'none'});
});
$( ".search").click(function() {
    $( ".iinput").focus();
    $('.search').css({'color':'#999999'})
    $('.iinput').css({
        'opacity':'1',
        'width': '215px',
    });
});  
$( ".iinput" ).blur(function() {
    $('.search').css({'color':'white'})
    $(this).css({
        'opacity':'0',
        'width': '0px'
    });
});  

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
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



$( ".colorChange" ).click(function() {
    $('.mainColorStyle').css({
        'left':'0px'
    });
}); 
$( ".colorChange" ).mousedown(function() {
    $('.mainColorStyle').css({
        'left':'-251px'
    });
}); 
 
//>>>>>>>>>>>>>>>>>>>>>>>>>..

$( ".control1" ).click(function() {
    $('.backgroundColor').css({'background':'#DA0000'});
    $('.borderColor').css({ 'border-color':'#DA0000'});
    $('.textColor').css({ 'color':'#DA0000'});
     
$( ".hoverBackground" ).mouseover(function() {
    $(this).css({'background':'#DA0000'})
}); 

  
$( ".hoverBackground" ).mouseout(function() {
    $(this).css({'background':'white'})
}); 


$( ".hoverText" ).mouseover(function() {
    $(this).css({'color':'#DA0000'})
}); 
 
$( ".hoverText" ).mouseout(function() {
    $(this).css({'color':'#999999'})
}); 

  
  
$( ".hoverTextWhite").mouseover(function() {
    $(this).css({'color':'#DA0000'})
}); 
 
$( ".hoverTextWhite" ).mouseout(function() {
    $(this).css({'color':'white'})
}); 
  

  
$( ".hoverTextBlack").mouseover(function() {
    $(this).css({'color':'#DA0000'})
}); 
 
$( ".hoverTextBlack" ).mouseout(function() {
    $(this).css({'color':'#222222'})
}); 


$( ".hoverBackgroundBlack").mouseover(function() {
    $(this).css({'background':'#DA0000'})
}); 
 
$( ".hoverBackgroundBlack" ).mouseout(function() {
    $(this).css({'background':'#2A2A2A'})
}); 





  
}); 
















$( ".control2" ).click(function() {
    $('.backgroundColor').css({ 'background':'#119EE6'});
    $('.borderColor').css({ 'border-color':'#119EE6'});
    $('.textColor').css({ 'color':'#119EE6'});
   
$( ".hoverBackground" ).mouseover(function() {
    $(this).css({'background':'#119EE6'})
}); 

  
$( ".hoverBackground" ).mouseout(function() {
    $(this).css({'background':'white'})
}); 


  
$( ".hoverText" ).mouseover(function() {
    $(this).css({'color':'#119EE6'})
}); 
 
$( ".hoverText" ).mouseout(function() {
    $(this).css({'color':'#999999'})
}); 



  
$( ".hoverTextWhite").mouseover(function() {
    $(this).css({'color':'#119EE6'})
}); 
 
$( ".hoverTextWhite" ).mouseout(function() {
    $(this).css({'color':'white'})
}); 


  
$( ".hoverTextBlack").mouseover(function() {
    $(this).css({'color':'#119EE6'})
}); 
 
$( ".hoverTextBlack" ).mouseout(function() {
    $(this).css({'color':'#222222'})
}); 





  
$( ".hoverBackgroundBlack").mouseover(function() {
    $(this).css({'background':'#119EE6'})
}); 
 
$( ".hoverBackgroundBlack" ).mouseout(function() {
    $(this).css({'background':'#2A2A2A'})
}); 









})

});







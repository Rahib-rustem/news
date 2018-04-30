
$(document).ready(function(){

    function colorSetter(color){

        localStorage.setItem('color', color);
        $('.backgroundColor').css({ 'background': color});
        $('.borderColor').css({ 'border-color': color});
        $('.textColor').css({ 'color': color});
     
        $( ".hoverBackground" ).mouseover(function() {
            $(this).css({'background': color})
        }); 
                
        $( ".hoverBackground" ).mouseout(function() {
            $(this).css({'background':'white'})
        }); 
                    
            $( ".hoverText" ).mouseover(function() {
                $(this).css({'color': color})
            }); 
            
            $( ".hoverText" ).mouseout(function() {
                $(this).css({'color':'#999999'})
            }); 
 
            $( ".hoverTextWhite").mouseover(function() {
                $(this).css({'color': color})
            }); 
             
            $( ".hoverTextWhite" ).mouseout(function() {
                $(this).css({'color':'white'})
            }); 
              
            $( ".hoverTextBlack").mouseover(function() {
                $(this).css({'color': color})
            }); 
            
            $( ".hoverTextBlack" ).mouseout(function() {
                $(this).css({'color':'#222222'})
            }); 

            $( ".hoverBackgroundBlack").mouseover(function() {
                $(this).css({'background': color})
            }); 
             
            $( ".hoverBackgroundBlack" ).mouseout(function() {
                $(this).css({'background':'#2A2A2A'})
            }); 
            
            $(".focus").focusin(function() {
                $(this).css({'background': color,'color':'white'})
                // $('.initial').hide();
            }); 
            
            $(".focus").focusout(function() {
            $(this).css({'background':'#F8F8F8','color':'#999999'})
            }); 
    
            // $('.initial').css({'background': color, 'color': 'white'})   
      
    }

    

    function changeColor(){

        var color = localStorage.getItem('color');
       
        if(color) {
            colorSetter(color);
        }
        else{
            color = '#DA0000';
            colorSetter(color);
        }
    }

    changeColor();

 
   
   
$(".colorControl").click(function() {
  
    var color = $(this).attr('data-color');
    colorSetter(color);
  

}); 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
$('.mobileContent').css({ 'left':'-300px'});
   
}); 


$( ".colorChange" ).click(function() {
$('.mainColorStyle').css({ 'left':'0px'});
   
}); 

$( ".colorChange" ).mousedown(function() {
$('.mainColorStyle').css({ 'left':'-251px'});
   
}); 

$(".focus").on("click", function(event) {

    event.preventDefault();

}); 




});
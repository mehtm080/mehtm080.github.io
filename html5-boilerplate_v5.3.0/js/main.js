$("body").css ("background-color","#99ff00");

for (var dots = 0; dots < 100; dots++) {
    $(".wrapper").append ("<div class='circle'></div>");
}

var counter =1;

$(".circle").each(function(){
    console.log(counter);
    $(this).html(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("height",(100+counter));
     $(this).css("width",(100+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/100)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})


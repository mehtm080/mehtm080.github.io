
/*global $*/
$("body").css ("background-color","red");

for (var dots = 0; dots < 100; dots++) {
    $("body").append("<div class='snowflake'><div class='circle'></div><div class='rectangle' ></div><div class='rectangle1' ></div><div class='rectangle2' ></div><div class='rectangle3' ></div><div class='rectangle4' ></div><div class='rectangle5' ></div><div class='rectangle6' ></div><div class='rectangle7' ></div><div class='rectangle8' ></div><div class='rectangle9' ></div><div class='rectangle10' ></div><div class='rectangle11' ></div><div class='rectangle12' ></div><div class='rectangle13' ></div><div class='rectangle14' ></div><div class='rectangle15' ></div><div class='rectangle16' ></div><div class='rectangle17' ></div><div class='rectangle18' ></div><div class='rectangle19' ></div></div>");
}

var counter = 1;

$(".snowflake").each(function() {
    console.log(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("height",(100+counter));
    $(this).css("width",(100+counter));
    $(this).css("line-height",100+counter+"px");
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter++;

    
});


$(window).scroll(function() {
    console.log("you scrolled");
    $(".snowflake").css("opacity",$(window).scrollTop)
})
$(".snowflake").click(function() {
$(this).css("background-color","black");
})

$(".snowflake").mousemove(function() {
$(this).css("background-color","white");
});

$(".snowflake").hover(function(){
        $(this).animate({
            top: '1000px',
            opacity: '0.5',
            height: '100px',
            width: '100px'
        });
    });
    
    
$("#santaclaus").click(function(){
    $(this).addClass("move");
}); 


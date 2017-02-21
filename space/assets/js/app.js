for (var dots = 0; dots < 20; dots++) {
    $("#waitingarea").append ("<div class='circle4'></div>");
}

  $('.circle4').mouseover(function(){
    $(this).css('background-color','red');
  });
  $('.circle4').mouseout(function(){
    $(this).css('background-color','red');
  });

var counter =0;

$(".circle4").each(function(){
    $(this).css("opacity",(counter/20));
    $(this).css("height",(counter));
    $(this).css("width",(counter));
    $(this).css("top", Math.floor(Math.random()*50));
    $(this).css("left", Math.floor(Math.random()*50));
    counter++;
});


for (var dots = 0; dots < 20; dots++) {
    $("#waitingarea").append ("<div class='circle5'></div>");
}

  $('.circle5').mouseover(function(){
    $(this).css('background-color','red');
  });
  $('.circle5').mouseout(function(){
    $(this).css('background-color','red');
  });

var counter =0;

$(".circle5").each(function(){
    $(this).css("opacity",(counter/20));
    $(this).css("height",(counter));
    $(this).css("width",(counter));
    $(this).css("top", Math.floor(Math.random()*50));
    $(this).css("left", Math.floor(Math.random()*50));
    counter++;
});

for (var dots = 0; dots < 20; dots++) {
    $("#waitingarea").append ("<div class='circle6'></div>");
}

  $('.circle6').mouseover(function(){
    $(this).css('background-color','red');
  });
  $('.circle6').mouseout(function(){
    $(this).css('background-color','red');
  });

var counter =0;

$(".circle6").each(function(){
    $(this).css("opacity",(counter/20));
    $(this).css("height",(counter));
    $(this).css("width",(counter));
    $(this).css("top", Math.floor(Math.random()*50));
    $(this).css("left", Math.floor(Math.random()*50));
    counter++;
});

$("#swipe1").hover(function() {
  console.log("test");
  $(".text9").toggle();
})

$("#waitingarea").hover(function() {
  console.log("test");
  $(".text6").toggle();
})

$("#swipe1").hover(function() {
  console.log("test");
  $(".stick1").toggle();
})

$("#swipe2").hover(function() {
  console.log("test");
  $(".stick2").toggle();
})

$('.c1,.c2,.c3,.c4,.c5,.c6,.c7').mouseover(function(){
    $(this).css('background-color','red');
  });

$('.line1,.line2,.line3,.line4,.line5,.line6,.line7,.line8,.line9,.line10,.line11,.line12,.line13,.line14,.line15,.line16').mouseover(function(){
    $(this).css('background-color','red');
  });

$('.circle1,.circle2,.circle3').mouseover(function(){
    $(this).css('background-color','red');
  });

$('.stair1,.stairs2,.stairs3,.stairs4,.stairs5').mouseover(function(){
    $(this).css('background-color','red');
  });

$('.box1,.box2').mouseover(function(){
    $(this).css('background-color','red');
  });

$('.d1,.d2').mouseover(function(){
    $(this).css('background-color','red');
  });

$('.text1,.text2,.text3,.text4,.text5,.text6,.text7,.text8,.text9,.text10').mouseover(function(){
  });




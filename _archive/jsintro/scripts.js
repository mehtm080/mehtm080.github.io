var numOfClicks=0;

$(".button").click(function(){
    // do stuff...
    numOfClicks++;
    $("mark").html(numOfClicks);
    $("body").toggleclass("lime");
    
});
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


$("#slide > div:gt(0)").hide();

setInterval(function() {
$('#slide > div:first')
.fadeOut(3000)
.next()
.fadeIn(3000)
.end()
.appendTo('#slide');
}, 6000);

console.log("loaded");

$('.arrow').click(function() {
   $('#slideshow').hide();
});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('#slideshow').hide();
     }
    
});
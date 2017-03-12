/*global $*/

$("#slide > div:gt(0)").hide();

setInterval(function() {
$('#slide > div:first')
.fadeOut(2000)
.next()
.fadeIn(2000)
.end()
.appendTo('#slide');
}, 3000);

console.log("loaded");


$("#slide1 > div:gt(0)").hide();

setInterval(function() {
$('#slide1 > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slide1');
}, 3000);

console.log("loaded");


$("#slide2 > div:gt(0)").hide();

setInterval(function() {
$('#slide2 > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slide2');
}, 3000);

console.log("loaded");


$("#slide3 > div:gt(0)").hide();

setInterval(function() {
$('#slide3 > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slide3');
}, 3000);

console.log("loaded");


$("#slide4 > div:gt(0)").hide();

setInterval(function() {
$('#slide4 > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slide4');
}, 3000);

console.log("loaded");


$("#slide5 > div:gt(0)").hide();

setInterval(function() {
$('#slide5 > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slide5');
}, 3000);

console.log("loaded");

$("#slide6 > div:gt(0)").hide();

setInterval(function() {
$('#slide6 > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slide6');
}, 3000);

console.log("loaded");



// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
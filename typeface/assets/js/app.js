$(window).keypress(function(e) {

	$('.type').hide();


	console.log(e.which);
	if(e.which == 97 || e.which == 65) {
		$("body").append($(".a-marker").clone().removeClass("a-marker").droppable({
      drop: function( event, ui ) {
        
        if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("texture")) {
          $( this ).find("div").css("textures",ui.draggable.css("textures"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 98 || e.which == 66) {
		$("body").append($(".b-marker").clone().removeClass("b-marker").droppable({
      drop: function( event, ui ) {

      	if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 99 || e.which == 67) {
		$("body").append($(".c-marker").clone().removeClass("c-marker").droppable({
      drop: function( event, ui ) {

         if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 100 || e.which == 68) {
		$("body").append($(".d-marker").clone().removeClass("d-marker").droppable({
      drop: function( event, ui ) {
        if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 101 || e.which == 69) {
		$("body").append($(".e-marker").clone().removeClass("e-marker").droppable({
      drop: function( event, ui ) {
       if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 102 || e.which == 70) {
		$("body").append($(".f-marker").clone().removeClass("f-marker").droppable({
      drop: function( event, ui ) {
       if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 103 || e.which == 71) {
		$("body").append($(".g-marker").clone().removeClass("g-marker").droppable({
      drop: function( event, ui ) {
       if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 104 || e.which == 72) {
		$("body").append($(".h-marker").clone().removeClass("h-marker").droppable({
      drop: function( event, ui ) {
       if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 105 || e.which == 73) {
		$("body").append($(".i-marker").clone().removeClass("i-marker").droppable({
      drop: function( event, ui ) {
       if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 106 || e.which == 74) {
		$("body").append($(".j-marker").clone().removeClass("j-marker").droppable({
      drop: function( event, ui ) {
        if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 107 || e.which == 75) {
		$("body").append($(".k-marker").clone().removeClass("k-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 108 || e.which == 76) {
		$("body").append($(".l-marker").clone().removeClass("l-marker").droppable({
      drop: function( event, ui ) {
       if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 109 || e.which == 77) {
		$("body").append($(".m-marker").clone().removeClass("m-marker").droppable({
      drop: function( event, ui ) {
      if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 110 || e.which == 78) {
		$("body").append($(".n-marker").clone().removeClass("n-marker").droppable({
      drop: function( event, ui ) {
         if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 111 || e.which == 79) {
		$("body").append($(".o-marker").clone().removeClass("o-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 112 || e.which == 80) {
		$("body").append($(".p-marker").clone().removeClass("p-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 113 || e.which == 81) {
		$("body").append($(".q-marker").clone().removeClass("q-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 114 || e.which == 82) {
		$("body").append($(".r-marker").clone().removeClass("r-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 115 || e.which == 83) {
		$("body").append($(".s-marker").clone().removeClass("s-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 116 || e.which == 84) {
		$("body").append($(".t-marker").clone().removeClass("t-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 117 || e.which == 85) {
		$("body").append($(".u-marker").clone().removeClass("u-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 118 || e.which == 86) {
		$("body").append($(".v-marker").clone().removeClass("v-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 119 || e.which == 87) {
		$("body").append($(".w-marker").clone().removeClass("w-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 120 || e.which == 88) {
		$("body").append($(".x-marker").clone().removeClass("x-marker").droppable({
      drop: function( event, ui ) {
      if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 121 || e.which == 89) {
		$("body").append($(".y-marker").clone().removeClass("y-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}

	if(e.which == 122 || e.which == 90) {
		$("body").append($(".z-marker").clone().removeClass("z-marker").droppable({
      drop: function( event, ui ) {
     if(ui.draggable.hasClass("color")) {
        	$( this ).css("background-color",ui.draggable.css("background-color"));
        }
        if(ui.draggable.hasClass("fill")) {
        	$( this ).find("div").css("background-color",ui.draggable.css("background-color"));
        }
        console.log(ui.draggable.css("background-color"));
      }
    }));
	}
});

$(".background-color").click(function() {
	$(".lettera, .letterb, .letterc, .letterd, .lettere, .letterf, .letterg, .letterh, .letteri, .letterj, .letterk, .letterl, .letterm, .lettern, .lettero, .letterp, .letterq, .letterr, .letters, .lettert, .letteru, .letterv, .letterw, .letterx, .lettery, .letterz").css("background-color","white");
 
})

$(".color1").click(function() {
	$(".lettera, .letterb, .letterc, .letterd, .lettere, .letterf, .letterg, .letterh, .letteri, .letterj, .letterk, .letterl, .letterm, .lettern, .lettero, .letterp, .letterq, .letterr, .letters, .lettert, .letteru, .letterv, .letterw, .letterx, .lettery, .letterz").css("background-color","#ffff66");
 
})

$(".color2").click(function() {
	$(".lettera, .letterb, .letterc, .letterd, .lettere, .letterf, .letterg, .letterh, .letteri, .letterj, .letterk, .letterl, .letterm, .lettern, .lettero, .letterp, .letterq, .letterr, .letters, .lettert, .letteru, .letterv, .letterw, .letterx, .lettery, .letterz").css("background-color","#fc4300");
 
})

$(".color3").click(function() {
	$(".lettera, .letterb, .letterc, .letterd, .lettere, .letterf, .letterg, .letterh, .letteri, .letterj, .letterk, .letterl, .letterm, .lettern, .lettero, .letterp, .letterq, .letterr, .letters, .lettert, .letteru, .letterv, .letterw, .letterx, .lettery, .letterz").css("background-color","#fc0000");
 
})

$(".color4").click(function() {
	$(".lettera, .letterb, .letterc, .letterd, .lettere, .letterf, .letterg, .letterh, .letteri, .letterj, .letterk, .letterl, .letterm, .lettern, .lettero, .letterp, .letterq, .letterr, .letters, .lettert, .letteru, .letterv, .letterw, .letterx, .lettery, .letterz").css("background-color","#fc005c");
 
})

$(".color5").click(function() {
	$(".lettera, .letterb, .letterc, .letterd, .lettere, .letterf, .letterg, .letterh, .letteri, .letterj, .letterk, .letterl, .letterm, .lettern, .lettero, .letterp, .letterq, .letterr, .letters, .lettert, .letteru, .letterv, .letterw, .letterx, .lettery, .letterz").css("background-color","#00fc10");
 
})

$(".color6").click(function() {
	$(".lettera, .letterb, .letterc, .letterd, .lettere, .letterf, .letterg, .letterh, .letteri, .letterj, .letterk, .letterl, .letterm, .lettern, .lettero, .letterp, .letterq, .letterr, .letters, .lettert, .letteru, .letterv, .letterw, .letterx, .lettery, .letterz").css("background-color","#00f2ff");
 
})

$(".fill-color").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","black");
 
})

$(".fill1").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","#ffdd00");
 
})

$(".fill2").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","#ff5d00");
 
})

$(".fill3").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","#a80046");
 
})

$(".fill4").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","#539601");
 
})

$(".fill5").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","#9400ff");
 
})

$(".fill6").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","#3300ff");
 
})

$(".texture1").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-image","url(assets/img/texture1.JPG)");
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-size","200px 400px");
 
})

$(".texture2").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-image","url(assets/img/texture2.jpg)");
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-size","200px 400px");
 
})

$(".texture3").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-image","url(assets/img/texture3.jpg)");
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-size","200px 400px");
 
})

$(".texture4").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-image","url(assets/img/texture4.jpg)");
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-size","200px 200px");
 
})

$(".texture5").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-image","url(assets/img/texture5.png)");
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-size","200px 300px");
 
})

$(".texture6").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-image","url(assets/img/texture6.png)");
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-size","200px 200px");
 
})

$(".textures").click(function() {
	$(".a-horizontal, .a-horizontal-mid, .a-vertical, .a-vertical-right, .b-horizontal-bottom, .c-horizontal, .c-horizontal-bottom, .d-horizontal, .d-vertical-right-top, .d-vertical-right, .c-horizontal, .g-vertical-right, .i-vertical, .j-vertical-left, .k-vertical-right-top, .k-vertical-right-bottom, .m-horizontal, .m-vertical, .m-vertical-mid, .m-vertical-right, .o-vertical, .o-vertical-right, .p-vertical-right, .q-horizontal-bottom, .r-horizontal, .s-vertical, .t-vertical, .v-vertical, .v-vertical-right, .x-vertical-left-top, .x-vertical-left-bottom, .y-horizontal-mid, .y-vertical-left-top, .y-vertical-right-top, .y-vertical, .z-vertical").css("background-color","black");
})

$(".weight-set").on("input change", function() { 
	console.log($(this).val());

	if (($(this).val() <= 10) &&  ($(this).val() > 0)) {
		$(".letter")
			.removeClass("ninety")
			.removeClass("eighty")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("thin");
		//show thinnest weight
	}
	
	if (($(this).val() <= 20) &&  ($(this).val() > 10)) {
		$(".letter")
			.removeClass("ninety")
			.removeClass("eighty")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("twenty");
		//show next
	}
	if (($(this).val() <= 30) &&  ($(this).val() > 20)) {
		$(".letter")
			.removeClass("ninety")
			.removeClass("eighty")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("thirty");
		//show next
	}
	if (($(this).val() <= 40) &&  ($(this).val() > 30)) {
		$(".letter").removeClass("eighty")
			.removeClass("ninety")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("forty");
		//show next
	}
	if (($(this).val() <= 50) &&  ($(this).val() > 40)){
		$(".letter").removeClass("eighty")
			.removeClass("ninety")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("fifty");
		//show next
	}

	if (($(this).val() <= 60) &&  ($(this).val() > 50)){
		$(".letter").removeClass("eighty")
			.removeClass("ninety")
			.removeClass("seventy")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("sixty");
		//show next
	}

	if (($(this).val() <= 70) &&  ($(this).val() > 60)){
		$(".letter")
			.removeClass("eighty")
			.removeClass("ninety")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("ten")
			.removeClass("thin");
		$(".letter").addClass("seventy");
		//show next
	}

	if (($(this).val() <= 80) &&  ($(this).val() > 70)){
		$(".letter")
			.removeClass("ninety")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("eighty");
		//show next
	}

	if (($(this).val() <= 90) &&  ($(this).val() > 80)){
		$(".letter")
			.removeClass("eighty")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("ninety");
		//show next
	}

	if (($(this).val() <= 100) &&  ($(this).val() > 90)){
		$(".letter")
			.removeClass("ninety")
			.removeClass("eighty")
			.removeClass("seventy")
			.removeClass("sixty")
			.removeClass("fifty")
			.removeClass("forty")
			.removeClass("thirty")
			.removeClass("twenty")
			.removeClass("thin");
		$(".letter").addClass("letter");
		//show next
	}

 });



$(window).click(function() {
   $('.type').hide();
});

//Dragging the colors 


$('.color1, .color2, .color3, .color4, .color5, .color6, .fill1, .fill2, .fill3, .fill4, .fill5, .fill6, .texture1, .texture2, .texture3, .texture4, .texture5, .texture6').draggable({
	helper: 'clone'
});

$( ".letter" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
        console.log("dropped");
      }
    });


 $(".color1, .color2, .color3, .color4, .color5, .color6, .fill1, .fill2, .fill3, .fill4, .fill5, .fill6, .texture1, .texture2, .texture3, .texture4, .texture5, .texture6").click(function() {
   $(".instructions").hide();
});


 $(".color1, .color2, .color3, .color4, .color5, .color6, .fill1, .fill2, .fill3, .fill4, .fill5, .fill6, .texture1, .texture2, .texture3, .texture4, .texture5, .texture6").mouseleave(function() {
   $(".instructions").hide();
});


 function myFunction() {
    location.reload();
}



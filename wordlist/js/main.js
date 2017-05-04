$(".scroll-bar-1").on("input change", function() { 
	console.log($(this).val());

	if (($(this).val() <= 5.88) &&  ($(this).val() > 0)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".you").css("background-color","#5998ff").addClass("selected");

	}
	
	if (($(this).val() <= 11.76) &&  ($(this).val() > 5.88)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".it").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 17.64) &&  ($(this).val() > 11.76)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".he").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 23.52) &&  ($(this).val() > 17.64)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".they").css("background-color","#5998ff").addClass("selected");
	}

	if (($(this).val() <= 29.4) &&  ($(this).val() > 23.52)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".this").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 35.28) &&  ($(this).val() > 29.4)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".what").css("background-color","#5998ff").addClass("selected");
	}

	if (($(this).val() <= 41.16) &&  ($(this).val() > 35.28)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".we").css("background-color","#5998ff").addClass("selected");
	}

	if (($(this).val() <= 47.04) &&  ($(this).val() > 41.16)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".my").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 52.92) &&  ($(this).val() > 47.04)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".his").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 58.8) &&  ($(this).val() > 52.92)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".her").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 64.68) &&  ($(this).val() > 58.8)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".our").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 70.56) &&  ($(this).val() > 64.68)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".your").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 76.44) &&  ($(this).val() > 70.56)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".their").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 82.32) &&  ($(this).val() > 76.44)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".me").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 88.2) &&  ($(this).val() > 82.32)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".yourself").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 94.08) &&  ($(this).val() > 88.2)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".itself").css("background-color","#5998ff").addClass("selected");

	}

	if (($(this).val() <= 99.96) &&  ($(this).val() > 94.08)) {
		$(".word-marker1").css("background-color","transparent");
		$(".word-marker1").removeClass("selected");
		$(".she").css("background-color","#5998ff").addClass("selected");

	}
	
});



$(".scroll-bar-2").on("input change", function() { 
	console.log($(this).val());

	if (($(this).val() <= 5.88) &&  ($(this).val() > 0)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".words").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-words").show();
	}
	
	if (($(this).val() <= 11.76) &&  ($(this).val() > 5.88)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".boy").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-boy").show();
	}
	

	if (($(this).val() <= 17.64) &&  ($(this).val() > 11.76)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".girl").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-girl").show();
	}

	if (($(this).val() <= 23.52) &&  ($(this).val() > 17.64)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".mother").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-mother").show();

	}

	if (($(this).val() <= 29.4) &&  ($(this).val() > 23.52)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".america").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-america").show();
	}

	if (($(this).val() <= 35.28) &&  ($(this).val() > 29.4)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".mountains").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-mountains").show();
	}

	if (($(this).val() <= 41.16) &&  ($(this).val() > 35.28)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".family").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-family").show();
	}

	if (($(this).val() <= 47.04) &&  ($(this).val() > 41.16)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".fish").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-fish").show();
	}

	if (($(this).val() <= 52.92) &&  ($(this).val() > 47.04)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".birds").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-birds").show();
	}

	if (($(this).val() <= 58.8) &&  ($(this).val() > 52.92)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".dog").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-dog").show();
	}

	if (($(this).val() <= 64.68) &&  ($(this).val() > 58.8)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".money").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-money").show();
	}

	if (($(this).val() <= 70.56) &&  ($(this).val() > 64.68)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".map").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-map").show();
	}

	if (($(this).val() <= 76.44) &&  ($(this).val() > 70.56)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".india").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-india").show();
	}

	if (($(this).val() <= 82.32) &&  ($(this).val() > 76.44)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".fruit").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-fruit").show();
	}

	if (($(this).val() <= 88.2) &&  ($(this).val() > 82.32)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".telephone").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-telephone").show();
	}

	if (($(this).val() <= 94.08) &&  ($(this).val() > 88.2)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".gun").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-gun").show();
	}

	if (($(this).val() <= 99.96) &&  ($(this).val() > 94.08)) {
		$(".word-marker2").css("background-color","transparent");
		$(".word-marker2").removeClass("selected");
		$(".coffee").css("background-color","#5998ff").addClass("selected");
		$(".icon-1 img").hide();
		$(".img-coffee").show();
	}
});





$(".scroll-bar-3").on("input change", function() { 
	console.log($(this).val());

	if (($(this).val() <= 5.88) &&  ($(this).val() > 0)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".admire").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-admire").show();
	}
	
	if (($(this).val() <= 11.76) &&  ($(this).val() > 5.88)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".jump").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-jump").show();
	}
	

	if (($(this).val() <= 17.64) &&  ($(this).val() > 11.76)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".slap").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-slap").show();
	}

	if (($(this).val() <= 23.52) &&  ($(this).val() > 17.64)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".kiss").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-kiss").show();

	}

	if (($(this).val() <= 29.4) &&  ($(this).val() > 23.52)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".arrest").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-arrest").show();
	}

	if (($(this).val() <= 35.28) &&  ($(this).val() > 29.4)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".pray").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-pray").show();
	}

	if (($(this).val() <= 41.16) &&  ($(this).val() > 35.28)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".kill").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-kill").show();
	}

	if (($(this).val() <= 47.04) &&  ($(this).val() > 41.16)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".cook").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-cook").show();
	}

	if (($(this).val() <= 52.92) &&  ($(this).val() > 47.04)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".teach").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-teach").show();
	}

	if (($(this).val() <= 58.8) &&  ($(this).val() > 52.92)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".blow").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-blow").show();
	}

	if (($(this).val() <= 64.68) &&  ($(this).val() > 58.8)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".lick").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-lick").show();
	}

	if (($(this).val() <= 70.56) &&  ($(this).val() > 64.68)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".miss").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-miss").show();
	}

	if (($(this).val() <= 76.44) &&  ($(this).val() > 70.56)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".watch").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-watch").show();
	}

	if (($(this).val() <= 82.32) &&  ($(this).val() > 76.44)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".whine").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-whine").show();
	}

	if (($(this).val() <= 88.2) &&  ($(this).val() > 82.32)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".work").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-work").show();
	}

	if (($(this).val() <= 94.08) &&  ($(this).val() > 88.2)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".love").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-love").show();
	}

	if (($(this).val() <= 99.96) &&  ($(this).val() > 94.08)) {
		$(".word-marker3").css("background-color","transparent");
		$(".word-marker3").removeClass("selected");
		$(".advise").css("background-color","#5998ff").addClass("selected");
		$(".icon-2 img").hide();
		$(".img-advise").show();
	}
});

$(".scroll-bar-4").on("input change", function() { 
	console.log($(this).val());

	if (($(this).val() <= 5.88) &&  ($(this).val() > 0)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".happy").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-happy").show();
	}
	
	if (($(this).val() <= 11.76) &&  ($(this).val() > 5.88)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".gentle").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-gentle").show();
	}
	

	if (($(this).val() <= 17.64) &&  ($(this).val() > 11.76)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".brave").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-brave").show();
	}

	if (($(this).val() <= 23.52) &&  ($(this).val() > 17.64)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".calm").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-calm").show();

	}

	if (($(this).val() <= 29.4) &&  ($(this).val() > 23.52)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".delightful").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-delightful").show();
	}

	if (($(this).val() <= 35.28) &&  ($(this).val() > 29.4)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".eager").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-eager").show();	
	}

	if (($(this).val() <= 41.16) &&  ($(this).val() > 35.28)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".arrogant").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-arrogant").show();
	}

	if (($(this).val() <= 47.04) &&  ($(this).val() > 41.16)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".awful").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-awful").show();
	}

	if (($(this).val() <= 52.92) &&  ($(this).val() > 47.04)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".bitter").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-bitter").show();
	}

	if (($(this).val() <= 58.8) &&  ($(this).val() > 52.92)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".white").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-white").show();
	}

	if (($(this).val() <= 64.68) &&  ($(this).val() > 58.8)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".blue").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-blue").show();
	}

	if (($(this).val() <= 70.56) &&  ($(this).val() > 64.68)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".beautiful").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-beautiful").show();
	}

	if (($(this).val() <= 76.44) &&  ($(this).val() > 70.56)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".nosy").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-nosy").show();
	}

	if (($(this).val() <= 82.32) &&  ($(this).val() > 76.44)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".repulsive").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-repulsive").show();
	}

	if (($(this).val() <= 88.2) &&  ($(this).val() > 82.32)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".tense").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-tense").show();
	}

	if (($(this).val() <= 94.08) &&  ($(this).val() > 88.2)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".warm").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-warm").show();
	}

	if (($(this).val() <= 99.96) &&  ($(this).val() > 94.08)) {
		$(".word-marker4").css("background-color","transparent");
		$(".word-marker4").removeClass("selected");
		$(".trouble").css("background-color","#5998ff").addClass("selected");
		$(".icon-3 img").hide();
		$(".img-trouble").show();
	}
});



$(".arrow").click(function() {
	var translation = "";
	$(".selected").each(function() {
		console.log($(this).data("engword"));
		translation = translation + " " + $(this).data("engword");
	});

	console.log(translation);

});



var bannerboy = bannerboy || {};

/* Settings
================================================= */
bannerboy.settings = function(banner) {

	var corner_1 = bannerboy.createElement({backgroundColor: "#ff4531", left: 245-18-1-7+2, top: -50+25-2-1-5, width: 2, height: 1, parent: banner});
	var corner_2 = bannerboy.createElement({backgroundColor: "#ff4531", left: 345-9-7+1+1, top: -28+25-2-1-5, width: 1, height: 1, parent: banner});
	var corner_3 = bannerboy.createElement({backgroundColor: "#ff4531", left: 307-9-7-3, top: 111+25+5+6, width: 1, height: 2, parent: banner});
	var corner_4 = bannerboy.createElement({backgroundColor: "#ff4531", left: 204-18-1-7, top: 87+25+5, width: 2, height: 2, parent: banner});

	TweenMax.set(corner_1, {opacity: 0});
	TweenMax.set(corner_2, {opacity: 0});
	TweenMax.set(corner_3, {opacity: 0});
	TweenMax.set(corner_4, {opacity: 0});

	return {
		widthFactor: 1,
		heightFactor: 22/77,
		transformOrigin: "50% 50%",
		corners: [
			corner_1,
			corner_2,
			corner_3,
			corner_4
		],
		txt: [1, 1, 1],
		txt_travel: {x: -12},
		set: {
			//
		}
	}
}

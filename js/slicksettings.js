$('.contest__box').slick({
	arrows: false,
	autoplay: true,
	slidesToShow: 1,
	mobileFirst: true,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 1290,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});

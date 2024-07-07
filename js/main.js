jQuery(document).on('ready', function ($) {
	"use strict";

	/*--------------------------
	    SCROLLSPY ACTIVE
	---------------------------*/
	$('body').scrollspy({
		target: '.main-navigation',
		offset: 65
	});


	/*--------------------------
	    STICKY MAINMENU
	---------------------------*/
	$("#mainmenu-area").sticky({
		topSpacing: 0
	});


	/*--------------------------
	   HOME PARALLAX BACKGROUND
	----------------------------*/
	$(window).stellar({
		responsive: true,
		positionProperty: 'position',
		horizontalScrolling: false
	});


	/*---------------------------
	    SMOOTH SCROLL
	-----------------------------*/
	$('ul.mainmenu li a[href^="#"], a.navbar-brand,a.scrolltotop,.call-to-action a').on('click', function (event) {
		var id = $(this).attr("href");
		var offset = 40;
		var target = $(id).offset().top - offset;
		$('html, body').animate({
			scrollTop: target
		}, 1500, "easeInOutExpo");
		event.preventDefault();
	});


	/*----------------------------
	    SCROLL TO TOP
	------------------------------*/
	$(window).on("scroll", function () {
		var $totalHeight = $(window).scrollTop();
		var $scrollToTop = $(".scrolltotop");
		if ($totalHeight > 300) {
			$scrollToTop.fadeIn();
		} else {
			$scrollToTop.fadeOut();
		}
		if ($totalHeight + $(window).height() === $(document).height()) {
			$scrollToTop.css("bottom", "90px");
		} else {
			$scrollToTop.css("bottom", "20px");
		}
	});


	/*---------------------------
	    HOME SLIDER
	-----------------------------*/
	var $homeSlider = $('.welcome-slider-area');
	$homeSlider.owlCarousel({
		merge: true,
		smartSpeed: 3000,
		loop: true,
		nav: true,
		navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		margin: 0,
		/*animateIn: 'fadeIn',
		animateOut: 'fadeOut',*/
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	$homeSlider.on("translate.owl.carousel", function () {
		$(".welcome-single-slide h2,.welcome-single-slide h1, .welcome-single-slide p, .call-to-action").removeClass("animated fadeInUp").css("opacity", "0");


	});
	$homeSlider.on("translated.owl.carousel", function () {
		$(".welcome-single-slide h2,.welcome-single-slide h1, .welcome-single-slide p, .call-to-action").addClass("animated fadeInUp").css("opacity", "1");
	});


	/*---------------------------
	    TESTMONIAL SLIDER
	-----------------------------*/
	var $testmonialCarousel = $('.testmonial-slider');
	$testmonialCarousel.owlCarousel({
		merge: true,
		smartSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
		autoplay: false,
		autoplayTimeout: 2000,
		margin: 30,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});


	/*-----------------------------
		DATE AND TIME PICKER
	-------------------------------*/
	$("#date_picker").datepicker();
	$("#date_picker_2").datepicker();
	$('#time_picker').timepicker();
	$('#time_picker_2').timepicker();


	/*----------------------------
		MEANMENU MOBILE MENU
	-----------------------------*/
	$('.main-navigation').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu'
	});

	/*--------------------------
	    ACTIVE WOW JS
	----------------------------*/
	new WOW().init();

}(jQuery));



jQuery(window).on('load', function () {
	"use strict";
	/*--------------------------
	    PRE LOADER
	----------------------------*/
	$(".preeloader").fadeOut(1000);
});

$(function() {

	$('.menu__list').click(function(e){
		$('.menu__list, .header__nav').toggleClass('activ');
	})

	$('.slick-slider').slick({
		dots:true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	
});

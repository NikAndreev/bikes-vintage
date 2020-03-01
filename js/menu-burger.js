$(document).ready(function(){
	$('.menu__icon').click(function(event) {
		$('.menu__icon, .header__menu').toggleClass('active');
		$('.menu__body').addClass('transition');
		$('body').toggleClass('lock');
	});
	$('.menu__link').click(function(event) {
		$('.menu__icon, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});


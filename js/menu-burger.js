$(document).ready(function(){
	$('.menu__icon').click(function(event) {
		$('.menu__icon, .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__link').click(function(event) {
		$('.menu__icon, .menu__body').removeClass('active');
		$('body').removeClass('lock');
	});
});


let dots = document.querySelector('.slider__dots').children;
	slidesArea = document.querySelector('.slider__slides');
	slides = ['first', 'second', 'third']

function control(slide, dot) {
	for (let i = 0; i < slides.length; i++) {
		slidesArea.classList.remove(slides[i])
	}
	slidesArea.classList.add(slide);
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('slider__dot_active');
	}
	dots[dot].classList.add('slider__dot_active');
}
	
for (let i = 0; i < slides.length; i++ ) {
	dots[i].onclick = function() {
		control(slides[i], i);
	}
}

$(".slider__slides").swipe({
swipeRight:function(event, direction) {
 $(this).addClass('second');
 }
});

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

$(function() {			
	$(".slider__slides").swipe( {
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction === 'left') {
				if (slidesArea.classList.contains('first')) {
				control(slides[1], 1)
				} else if(slidesArea.classList.contains('second')) {
					control(slides[2], 2)
				}
			} else if (direction === 'right') {
				if (slidesArea.classList.contains('second')) {
					control(slides[0], 0)
				} else if(slidesArea.classList.contains('third')) {
					control(slides[1], 1)
				}
			}		
		},						
		threshold:0 // Минимальная длина свайпа
	});
}); 

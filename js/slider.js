let dots = document.querySelector('.slider__dots').children;
	slidesArea = document.querySelector('.slider__slides');
	slides = document.querySelector('.slider__slides').children;
	slidesCollection = document.querySelectorAll('.slider__slide')
	next = document.querySelector('.slider__button_next');
	prv = document.querySelector('.slider__button_prv');
	slideIndex = 0;
	rendering = 0;


function dotsControl(e) {
	for(let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active')
	};
	e = slideIndex % 3;
	dots[e].classList.add('active')
}

function control() {
	for (let i = 0; i < dots.length; i++) {	
		dots[i].onclick = function() {
			slideIndex = i + rendering;
			slidesArea.style.left =slideIndex *-105 + "%";
			dotsControl()
		}
	}
}

function nextControl() {
	if(slideIndex + 1 < slides.length) {
		slideIndex+=1;
	} else {
		for(let i = 0; i < slidesCollection.length; i++) {	 
			let newOne = slidesCollection[i].cloneNode(true);
			slidesArea.appendChild(newOne);
		}
		slideIndex+=1	
	}
	if (slideIndex%3 === 0) {
		rendering+=3;
	}
	slidesArea.style.left = slideIndex *-105 + "%";
	dotsControl()
}

function prvControl() {
	if(slideIndex > 0){
		if (slideIndex%3 === 0 && rendering > 0) {
			rendering-=3;
		}
		slideIndex-=1	
		slidesArea.style.left = slideIndex *-105 + "%";
	} else {
		slideIndex = slideIndex;
	}	
	dotsControl()
}

control()

$(function() {			
	$(".slider__slides").swipe( {
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction === 'left') {
				nextControl()
			} else if (direction === 'right') {
				prvControl()
			}		
		},						
		threshold:0 // Минимальная длина свайпа
	});
}); 
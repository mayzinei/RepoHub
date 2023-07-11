var swiper = new Swiper(".slide-container", {
	slidesPerView: 4,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	centerSlide: true,
	grapCursor: true,
	fade: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-prev",
		prevEl: ".swiper-button-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
		1000: {
			slidesPerView: 3,
		},
	},
});

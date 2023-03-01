const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true, //slides infinitos
	allowTouchMove: true, //mover con el maus o dedos en moviles
	effect: "slide", //efecto al deslizar
	autoplay: {
		delay: 5000, //auto-play cada 5 sec
		pauseOnMouseEnter: true, //pasa maus y pausa slides
		disableOnInteraction: false, //vuelva a lo mismo
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true, //click bolitas ir pagina
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});

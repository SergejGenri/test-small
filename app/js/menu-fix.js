$(document).ready(function () {
	$(function () {
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() >= 160) {
					$('.header').addClass('stickytop');
				} else {
					$('.header').removeClass('stickytop');
				}
			});
		});
	});
});

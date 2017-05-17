$(document).ready(function () {
	$('.btn-buy').on('mouseover', function () {
		$(this).prev().prev().addClass('active');
	});

	$('.btn-buy').on('mouseout', function () {
		$(this).prev().prev().removeClass('active');
	});
});

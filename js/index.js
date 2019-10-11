jQuery(document).ready(function($) {
	$('.myDropdownMenu ul').slideUp(0);
	

	$('.myDropdownMenu li').click(function(event) {
		$(this).parent('ul').children('li').not(this).removeClass('active');
		$(this).toggleClass('active');
		$(this).parent('ul').children('ul').not($(this).next('ul')).slideUp(250);

		$(this).next('ul').slideToggle(500);

		return false;// clear this 
	});


});
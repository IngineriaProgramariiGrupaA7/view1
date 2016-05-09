$(document).ready(function() {

	$(".form_section_title").click(function() {
		// e.preventDefault();
		$(this).toggleClass('section_selected');
	    $(this).parent().children('.form_content').toggleClass('open');
	});

});

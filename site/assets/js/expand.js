$(document).ready(function() {

	$(".form_section_title").click(function() {
		$(this).parent().children(".form_section_title").toggleClass("section_selected");


		if($(this).parent().children(".form_content").hasClass("collapse")){
			var el = $(this).parent().children(".form_content"),
			curHeight = el.height(),
			autoHeight = el.css('height', 'auto').height();
			el.height(curHeight).animate({height: autoHeight}, 500);
		}
		else{
			var el = $(this).parent().children(".form_content"),
			curHeight = el.height();
			el.height(curHeight).animate({height: 0}, 500);
		}

		$(this).parent().children(".form_content").css('height', 'auto');
		$(this).parent().children(".form_content").toggleClass("collapse");
	});

});
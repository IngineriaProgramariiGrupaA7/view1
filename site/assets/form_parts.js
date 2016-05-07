
$(document).ready(function() {

	$("#form_title").load("form_parts/title.html");

	$("#form_authors").load("form_parts/authors.html");

	$("#form_description").load("form_parts/description.html");

	$("#form_domain").load("form_parts/domain.html");

	$("#form_stakeholders").load("form_parts/stakeholders_interests.html");

	$("#form_actors").load("form_parts/actors_objectives.html");

	$("#form_usecases").load("form_parts/usecases.html");

	// $(".form_section_title").click(function() {
	// 	$(this).parent().children(".form_section_title").toggleClass("section_selected");
	// 	$(this).parent().children(".form_content").toggleClass("collapse");
	// });
});
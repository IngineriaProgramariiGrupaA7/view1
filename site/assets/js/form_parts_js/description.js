$(document).ready(function() {

	$("#formDescription").load("form_parts/description.html", function(){
		//bagati codul aici
		$('#decriptionField').keyup(function(){
			json.description = $(this).val();
		}).keyup();
	});
});
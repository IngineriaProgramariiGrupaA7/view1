$(document).ready(function() {

	$("#formTitle").load("form_parts/title.html", function(){
		//bagati codul aici
		$('#titleid').keyup(function(){
			json.title = $(this).val();
		}).keyup();
	});
});
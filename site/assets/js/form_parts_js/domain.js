$(document).ready(function() {

	$("#formDomain").load("form_parts/domain.html", function(){
		//bagati codul aici
		$('#domainField').keyup(function(){
			json.domain = $(this).val();
		}).keyup();
	});
});
function ValidationEvent()
{
	var title = document.getElementById("titleid").value;
	if(title == "" || title == null)
	{
		alert("Title cannot be empty");
		return false;
	}	
	
	if(json.actorsAndObjectives[0].name == "" || json.actorsAndObjectives[0].objectives == "")
	{
		alert("You must complete at least one actor (title and objectives)");
		return false;
	}
	
	if(json.usecases[0].title == "" || json.usecases[0].objective == "")
	{
		alert("You must complete at least one usecase (title and objective)");
		return false;
	}
	
	if(json.usecases[0].steps[0].title == "" || json.usecases[0].steps[0].description == "")
	{
		alert("You cannot have a usecase without steps and actors");
		return false;
	}

	return true;		
			
}

$(document).ready(function(){
	$('#submitBtn').click(function(e){
		if(ValidationEvent()) {
			$('#json_field').val(JSON.stringify(json));
			$('#frmSubmit').submit();
		} else {
			e.preventDefault();
		}
	})
});
function ValidationEvent()
{
	var title = document.getElementById("titleid").value;
	if(title == "" || title == null)
	{
		alert("Title cannot be empty");
		return false;
	}	
	
	/*if(json.actorsAndObjectives.index == 0)
	{
		alert("At least one actor");
		return false;
	}*/
	
	alert("All fields ok");
	location.href='finish.html';
	return true;		
			
}
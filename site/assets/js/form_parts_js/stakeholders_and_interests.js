(function($) {
$(document).ready(function() {

	$("#formStakeholders").load("form_parts/stakeholders_interests.html", function(){
		// stakeholderPopulate();
		$(".StakeholderEditView").makePopup("#StakeholdersList .list-edit");
		$("#StakeholdersList").dynamiclist();
	    	//bagati codul aici
	    });
	});
})(jQuery);


//Alex's stuff
// function stakeholderPopulate(){
	// var container = document.getElementById("stakeholders_list");
	// var buttonAdd = document.createElement("button");
		// buttonAdd.name = "buttonAdd";
		// var buttonAddText = document.createTextNode("ADD");
		// buttonAdd.appendChild(buttonAddText);
		// buttonAdd.addEventListener("click",addStakeholderFields,false);
		// var rowContainer = document.createElement("div");
		// rowContainer.appendChild(buttonAdd);
		// container.appendChild(rowContainer);
// }

// function addStakeholderFields(){
	// var container = document.getElementById("stakeholders_list");
	// var rowContainer = document.createElement("div");
	// rowContainer.className = "stakeholders_list_item"
	
	// var labelStakeholder = document.createElement("label");
	// var labelStakeholderText = document.createTextNode("UNTITLED");
	// labelStakeholder.appendChild(labelStakeholderText);
	
	// var buttonRemove = document.createElement("button"); buttonRemove.name = "buttonRemove";
	// var buttonEdit = document.createElement("button"); buttonEdit.name = "buttonEdit";
	// var buttonRemoveText = document.createTextNode("REMOVE");
	// var buttonEditText = document.createTextNode("EDIT");
	
	// buttonRemove.appendChild(buttonRemoveText);
	// buttonEdit.appendChild(buttonEditText);
	
	// buttonRemove.addEventListener("click",removeStakeholderRow,false);
	
	// rowContainer.appendChild(labelStakeholder)
	// rowContainer.appendChild(buttonEdit);
	// rowContainer.appendChild(buttonRemove)
	
	// var lastChild = container.lastChild;
	
	// if(container.hasChildNodes()){
		// container.removeChild(container.lastChild);
	// }
	
	// container.appendChild(rowContainer);
	// container.appendChild(lastChild);
	
// }

 // function removeStakeholderRow() {
            // this.parentNode.parentNode.removeChild(this.parentNode);
            
            // return false;
        // }






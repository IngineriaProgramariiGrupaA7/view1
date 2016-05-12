(function($) {
$(document).ready(function() {

	$("#formStakeholders").load("form_parts/stakeholders_interests.html", function(){
		 stakeholderPopulate();
		 		var buttonEdit = document.getElementByClassName("list-edit btn");
			buttonEdit.addEventListener("click",popupEdit,false);

		//$("#StakeholdersList").dynamiclist();
	    	//bagati codul aici
	    });
	});
})(jQuery);


//Alex's stuff
function stakeholderPopulate(){
		var container = document.getElementById("StakeholdersList");
		var buttonAdd = document.createElement("button");
			buttonAdd.name = "buttonAdd";
			
		var buttonAddText = document.createTextNode("ADD");
			buttonAdd.appendChild(buttonAddText);
			buttonAdd.addEventListener("click",addStakeholderFields,false);
			
		//var buttonEdit = document.getElementByClassName("list-edit btn");
			//buttonEdit.addEventListener("click",popupEdit,false);

		var rowContainer = document.createElement("div");
			rowContainer.appendChild(buttonAdd);
			container.appendChild(rowContainer);
}

var buttonEditNumber = 0;
var modalNumber = 0;

function addStakeholderFields(){
	var buttonEditId = "buttonEdit " + buttonEditNumber;
	var modalContainerId = "modal " + modalNumber; 
	buttonEditNumber++;
	modalNumber++;
	
	var container = document.getElementById("StakeholdersList");
	var rowContainer = document.createElement("div");
	rowContainer.className = "list-item"
	
	var labelStakeholder = document.createElement("label");
	var labelStakeholderText = document.createTextNode("UNTITLED");
	labelStakeholder.appendChild(labelStakeholderText);
	
	var buttonRemove = document.createElement("button");
	var buttonEdit = document.createElement("button"); buttonEdit.setAttribute("id",buttonEditId);
	var buttonRemoveText = document.createTextNode("REMOVE");
	var buttonEditText = document.createTextNode("EDIT");
	
	buttonRemove.appendChild(buttonRemoveText);
	buttonEdit.appendChild(buttonEditText);

	buttonRemove.addEventListener("click",removeStakeholderRow,false);

	rowContainer.appendChild(labelStakeholder)
	rowContainer.appendChild(buttonEdit);
	rowContainer.appendChild(buttonRemove)
	
	var lastChild = container.lastChild;
	
	if(container.hasChildNodes()){
		container.removeChild(container.lastChild);
	}
	
	container.appendChild(rowContainer);
	container.appendChild(lastChild);
	
			buttonEdit.addEventListener("click",popupEdit(modalContainerId,buttonId));
}

	function removeStakeholderRow() {
            this.parentNode.parentNode.removeChild(this.parentNode);
            
            return false;
        }

	function popupEdit(modalContainerId,buttonId){
		createModalContainer(modalContainerId);

		// Get the modal
		var modal = document.getElementById(modalContainerId);

		// Get the button that opens the modal
		var btn = document.getElementById(buttonId);

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}
	
	function createModalContainer(modalContainerId){
		var modal = document.createElement("div");
		modal.setAttribute("id",modalContainerId);
		modal.setAttribute("class","modal");
		
		var modalContent = document.createElement("div");
		modalContent.setAttribute("class","modal-content");
		
		var spanTag = document.createElement("span");
		spanTag.setAttribute("class","close");
		
		var spanTagText = document.createTextNode('x');
		spanTag.appendChild(spanTagText);
		
		var h3Tag = document.createElement("h3");
		h3Tag.setAttribute("class","title");
		
		var formTag = document.createElement("form");
		form.setAttribute("onsubmit","return false");
		
		var inputTag = document.createElement("input");
		inputTag.setAttribute("type","text");
		inputTag.setAttribute("name","stakeholderTitle");
		inputTag.setAttribute("id","StakeholderTitleID");
		inputTag.setAttribute("placeholder","Stakeholder title");
		
		var textareaTag = document.createElement("textarea");
		textareaTag.setAttribute("type","text");
		textareaTag.setAttribute("name","interests_field");
		textareaTag.setAttribute("rows","4");
		textareaTag.setAttribute("cols","5");
		textareaTag.setAttribute("placeholder","Stakeholder interests");
		
		var saveButton = document.createElement("button");
		var saveButtonText = document.createTextNode("Save");
		saveButton.appendChild(saveButtonText);
		
		modal.appendChild(modalContent);
		modal.appendChild(h3Tag);
		modalContent.appendChild(spanTag);
		modalContent.appendChild(formTag);
		modalContent.appendChild(saveButton);
		formTag.appendChild(inputTag);
		formTag.appendChild(textareaTag);
		
		var containerPrincipal = document.getElementById("first");
		containerPrincipal.appendChild(modal);

	}





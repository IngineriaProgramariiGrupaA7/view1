(function($) {
	$(document).ready(function() {

		$("#formStakeholders").load("form_parts/stakeholders_interests.html", function(){
			// stakeholderPopulate();
			$(".stakeholderEditView").makePopup("#stakeholdersList .list-edit");
			$("#stakeholdersList").dynamiclist({
				withEvents: true,
				addCallbackFn: 
					function(){
		            	var popup3 = $("#stakeholdersList").find(".list-item:last").children(".popup"),
		                    btn3 = $("#stakeholdersList").find(".list-item:last").children(".list-edit");
		                popup3.makePopup(btn3);
		            }
            });
			
			//bagati codul aici
			$('#stakeholdersList .list-add.btn').on('click', function(){
				json.stakeholdersAndInterests[$('#stakeholdersList .list-item:last').attr('index')] = {
					name: '',
					interests: '',
				};
			});

			$('#stakeholdersList .list-item .list-remove.btn').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');
				delete json.stakeholdersAndInterests[index];
			});

			$('.saveBtnSI').on('click',function(){
				$(this).closest('.mainPopup').find('.frmStakeholdersAndInterests').submit();
			});

			$('.stakeholderEditView .cancelBtn').on('click',function(e){
				e.preventDefault();
			});

			$('.frmStakeholdersAndInterests').on('submit',function(e){
				var $parent = $(this).closest('.list-item');
				var name = $('.stakeholder_title', this).val();
				var index = $parent.attr('index');

				$parent.find('span.stakeholder_name').text((name == '')?'Untitled':name);
				json.stakeholdersAndInterests[index] = {
					name: name,
					interests: $('.interests_field', this).val(),
				};

				$('.close',$parent).click();
			});
	    });
	});
})(jQuery);


//Alex' stuff
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






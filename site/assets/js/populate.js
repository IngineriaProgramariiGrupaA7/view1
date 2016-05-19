var jsonParser = function(data) {

	//update the output json, 
	//as filling the form programatically 
	//doesn't trigger the normal events;
	json = data;
	
	//title
	$("#titleid").val(data.title);

	//authors
	$.each(data.authors ,function( index, value ) {
		if(index != 0){
			$("#formAuthors .list-add").trigger("click");
		}
		$("#formAuthors").find(".authorField:last").val(value);
	});

	//description
	$("#decriptionField").val(data.description);

	//domain
	$("#domainField").val(data.domain);

	//stakeholders
	$.each(data.stakeholdersAndInterests ,function( index, value ) {
		if(index != 0){
			$("#stakeholdersList .list-add").trigger("click");
		}
		$("#stakeholdersList").find(".stakeholder_title:last").val(value.name);
		$("#stakeholdersList").find(".interests_field:last").val(value.interests);
		$("#stakeholdersList").find(".saveBtnSI:last").trigger("click");
	});

	//actors
	$.each(data.actorsAndObjectives ,function( index, value ) {
		if(index != 0){
			$("#actorsList .list-add").trigger("click");
		}
		$("#actorsList").find(".actor_name:last").val(value.name);
		$("#actorsList").find(".objectives:last").val(value.objectives);

		//a dracului dracie, se completeaza si inheritul desi nu am facut absolut nimic aici?
		//probabil un event la json = data?
		//nu ca ma plang.

		$("#actorsList").find(".saveBtnAO:last").trigger("click");
	});


	//usecases
	$.each(data.usecases ,function( index, value ) {
		if(index != 0){
			$("#usecase_list .list-add").trigger("click");
		}
		$("#usecase_list").find(".use_case_title:last").val(value.title);
		$("#usecase_list").find(".objective_field:last").val(value.objective);
		
		//actors
		$.each(value.actors, function( actorIndex, actorValue){
			if(actorIndex != 0){
				$(".actors_list:last .list-add-2").trigger("click"); //asta face o eroare si nu mai merge save;
			}
			$(".actors_list:last .actors:last").val(actorValue);
		});

		//steps
		$.each(value.steps, function( stepIndex, stepValue){
			if(stepIndex != 0){
				$(".steps_list:last .list-add-2").trigger("click");
			}
			$(".steps_list:last .step_title:last").val(stepValue.title);
			$(".steps_list:last .description:last").val(stepValue.description);
		});

		// extensions
		$.each(value.extensions, function( extIndex, extValue){
			if(extIndex != 0){
				$(".extensions_list:last .list-add-2").trigger("click");
			}
			$(".extensions_list:last .extension_title:last").val(extValue.title);
			$(".extensions_list:last .description:last").val(extValue.description);
		});

		// relationships
		$.each(value.relationships, function( relIndex, relValue){
			if(relIndex != 0){
				$(".relationships_list:last .list-add-2").trigger("click");
			}
			$(".relationships_list:last .entity_1:last").val(relValue.entity_1);
			$(".relationships_list:last .entity_2:last").val(relValue.entity_2);
			$(".relationships_list:last .relation:last").val(relValue.relation);
		});

		$("#usecase_list").find(".saveBtnUC:last").trigger("click");
	});

	
}

$(document).ready(function() {


	$.getJSON( "assets/window.json", jsonParser);

});
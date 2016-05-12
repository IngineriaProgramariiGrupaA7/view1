
    $(document).ready(function() {

	    $("#formActors").load("form_parts/actors_objectives.html", function(){
	    	$(".actors_edit_view").makePopup("#actorsList .list-edit");
			$("#actorsList").dynamiclist();

			$('#actorsList .list-add.btn').on('click', function(){
				if(actorsAndObjectivesIndex == 0) {
					$('#actorsList .list-item:first').attr('index', actorsAndObjectivesIndex);
				}
				actorsAndObjectivesIndex++;
				$('#actorsList .list-item:last').attr('index', actorsAndObjectivesIndex);
			});

			$('#actorsList .list-item .list-remove.btn').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');
				delete json.actorsAndObjectives[index];
			});

			$('.saveBtnAO').on('click',function(){
				$(this).closest('.mainPopup').find('.frmActorsObjectives').submit();
			})

			$('.frmActorsObjectives').on('submit',function(){
				var $parent = $(this).closest('.list-item');
				var name = $('.actor_name', this).val();
				var index = $parent.attr('index');
				if(index == undefined)
					index = 0;

				$parent.find('span.actors_name').text(name);
				json.actorsAndObjectives[index] = {
					name: name,
					objectives: $('.objectives', this).val(),
					inherits: $('.inherits', this).val(),
				};

			})
	    });


		
    });

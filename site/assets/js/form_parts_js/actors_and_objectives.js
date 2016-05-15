
    $(document).ready(function() {

	    $("#formActors").load("form_parts/actors_objectives.html", function(){

			function getInheretence(actor_id) {
				actor_id += '';
				var list = [];
				for(var key in json.actorsAndObjectives) {
					if(key == actor_id)
						continue;
					var child = json.actorsAndObjectives[key];
					if(child.inherits == actor_id) {
						list[list.length] = key;
						var nephews = getInheretence(key);
						for(var i=0;i<nephews.length;i++)
							list[list.length] = nephews[i];
					}
				}
				return list;
			}

			$("#actorsList .list-edit").click(function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');
				if(index == undefined)
					index = '0';

				var not_allowed = getInheretence(index);
				not_allowed[not_allowed.length] = index;

				var html = '';
				html += '<option value="">None</option>';
				for( var key in json.actorsAndObjectives) {
					if($.inArray(key, not_allowed) != -1)
						continue;
					var obj = json.actorsAndObjectives[key];
					var name = (obj.name == '')?'Untitled':obj.name;
					html += '<option value="'+key+'"'+((key == json.actorsAndObjectives[index].inherits)?'selected="selected"':'')+'>'+name+'</option>';
				}
				$parent.find('.mainPopup select.inherits').html(html);
			});

	    	$(".actors_edit_view").makePopup("#actorsList .list-edit");
			$("#actorsList").dynamiclist();

			$('#actorsList .list-add.btn').on('click', function(){
				if(actorsAndObjectivesIndex == 0) {
					$('#actorsList .list-item:first').attr('index', actorsAndObjectivesIndex);
				}
				actorsAndObjectivesIndex++;
				$('#actorsList .list-item:last').attr('index', actorsAndObjectivesIndex);

				json.actorsAndObjectives[actorsAndObjectivesIndex+''] = {
					name: '',
					objectives: '',
					inherits: '',
				};
			});

			$('#actorsList .list-item .list-remove.btn').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');
				delete json.actorsAndObjectives[index];
			});

			$('.saveBtnAO').on('click',function(){
				$(this).closest('.mainPopup').find('.frmActorsObjectives').submit();
			});

			$('.frmActorsObjectives').on('submit',function(){
				var $parent = $(this).closest('.list-item');
				var name = $('.actor_name', this).val();
				var index = $parent.attr('index');
				if(index == undefined)
					index = '0';

				$parent.find('span.actors_name').text((name == '')?'Untitled':name);
				json.actorsAndObjectives[index] = {
					name: name,
					objectives: $('.objectives', this).val(),
					inherits: $('.inherits', this).val(),
				};

				$('.close',$parent).click();
			}).submit();
	    });


		
    });


    $(document).ready(function() {

	    $("#formActors").load("form_parts/actors_objectives.html", function(){

			/*
				construieste recursiv o lista cu toti mostenitorii unui actor
			 */
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

			/**
			 * click handler al butonului 'edit' din lista de actori
			 * atasam handler-ul inainte de a apela makePopup pt ca dropdown-ul cu actori(Inherits) sa fie deja completat cand e afisat popup-ul
			 */
			$("#actorsList .list-edit").click(function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');

				var not_allowed = getInheretence(index);
				not_allowed[not_allowed.length] = index;

				var html = '';
				html += '<option value="">None</option>';
				// parcurgen in json toti actorii
				for( var key in json.actorsAndObjectives) {
					// daca un actor deja este mostenitor al actorului curent nu este bagat.
					// nu se poate ca bunicul sa mosteneasca nepotul
					if($.inArray(key, not_allowed) != -1)
						continue;
					var obj = json.actorsAndObjectives[key];
					var name = (obj.name == '')?'Untitled':obj.name;
					html += '<option value="'+key+'"'+((key == json.actorsAndObjectives[index].inherits)?'selected="selected"':'')+'>'+name+'</option>';
				}
				$parent.find('.mainPopup select.inherits').html(html);
			});

	    	$(".actors_edit_view").makePopup("#actorsList .list-edit");
			$("#actorsList").dynamiclist({
				withEvents: true,
				addCallbackFn: 
					function(){
		            	var popup = $("#actorsList").find(".list-item:last").children(".popup"),
		                    btn = $("#actorsList").find(".list-item:last").children(".list-edit");
		                popup.makePopup(btn);
		            }
            });

			/**
			 * click handler al butonului 'add' din lista de actori
			 * la crearea unui actor in html cream un actor cu acelasi index in json
			 */
			$('#actorsList .list-add.btn').on('click', function(){
				json.actorsAndObjectives[$('#actorsList .list-item:last').attr('index')] = {
					name: '',
					objectives: '',
					inherits: '',
				};
			});

			/**
			 * click handler al butonului 'remove' din lista de actori
			 * la stergerea unui actor din html stergem actorul cu acelasi index din json
			 */
			$('#actorsList .list-item .list-remove.btn').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');
				delete json.actorsAndObjectives[index];
			});

			/**
			 * click handler al butonului 'save' al fiecarui actor
			 * submit-uim formular in care se afla butonul
			 */
			$('.saveBtnAO').on('click',function(){
				$(this).closest('.mainPopup').find('.frmActorsObjectives').submit();
			});

			/**
			 * submit handler al formularului actorului
			 */
			$('.frmActorsObjectives').on('submit',function(){
				var $parent = $(this).closest('.list-item');
				var name = $('.actor_name', this).val();
				var index = $parent.attr('index');

				$parent.find('span.actors_name').text((name == '')?'Untitled':name);
				// adaugam in json un nou actor
				json.actorsAndObjectives[index] = {
					name: name,
					objectives: $('.objectives', this).val(),
					inherits: $('.inherits', this).val(),
				};

				$('.close',$parent).click();
			}).submit();
			// triggeruim automat submit-ul pt a avea in json un actor(chiar si gol) la acel index
	    });


		
    });

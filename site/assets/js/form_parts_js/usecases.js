
var makePopupInUsecase = function(){
    var popup = $(".list-item-2:last .popup-2"),
        btn = $(".list-item-2:last .list-edit-2");
    $(popup).makePopup(btn);
};

var makePopupInUsecaseSettings = {
	itemClass: "list-item-2",
	addClass: "list-add-2",
	removeClass: "list-remove-2",
	addCallbackFn: makePopupInUsecase
};

(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){

			/**
			 * click handler al butonului 'edit' din lista de usecase-uri
			 * atasam handler-ul inainte de a apela makePopup pt ca dropdown-ul cu actori sa fie deja completat cand e afisat popup-ul
			 */
			$("#usecase_list .list-edit").click(function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');

				var html = '';
				for( var key in json.actorsAndObjectives) {
					var obj = json.actorsAndObjectives[key];
					var name = (obj.name == '')?'Untitled':obj.name;
					html += '<option value="'+key+'">'+name+'</option>';
				}
				$parent.find('.mainPopup select.actors').html(html);
				$parent.find('.actors_list select.actors').each(function(){
					var val = json.usecases[index].actors[$(this).closest('.list-item-2').attr('index')];
					if(val == null)
						val = $('option:first', this).attr('value');
					$(this).val();
				});
			});

	    	$(".usecase_edit_view").makePopup("#usecase_list .list-edit");

			$("#usecase_list").dynamiclist({
                addCallbackFn: function(){
                    var popup2 = $("#usecase_list").find(".list-item:last").children(".popup"),
                    	btn2 = $("#usecase_list").find(".list-item:last").children(".list-edit");
                	popup2.makePopup(btn2);


                	$(".actors_list:last, .steps_list:last, .extensions_list:last, .relationships_list:last").dynamiclist(makePopupInUsecaseSettings);
                }
            });

			$(".actors_list, .steps_list, .extensions_list, .relationships_list").dynamiclist(makePopupInUsecaseSettings);

			/**
			 * click handler al butonului 'add' din lista de usecase-uri
			 * la crearea unui usecase in html cream un usecase cu acelasi index in json
			 */
			$('#usecase_list .list-add.btn').on('click', function(){
				json.usecases[$('#usecase_list .list-item:last').attr('index')] = {
					title: '',
					objective: '',
					actors: {},
					steps: {},
					extensions: {},
					relationships: {},
				};
			});

			/**
			 * click handler al butonului 'remove' din lista de usecase-uri
			 * la stergerea unui usecase din html stergem usecase-ul cu acelasi index din json
			 */
			$('#usecase_list .list-item .list-remove.btn').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');
				delete json.usecases[index];
			});

			/**
			 * click handler al butonului 'add'/'remove' din lista de pasi si actori ai unui usecase
			 * la adaugarea/stergerea unui pas/actor in usecase updatam:
			 * 		1. dropdown-urile de la sectiunea 'Relationships'
			 * 		2. dropdown-urile cu pasi de la sectiunea 'Extensions'
			 */
			$('#usecase_list .steps_list .list-add-2.btn, #usecase_list .steps_list .list-remove-2.btn, #usecase_list .actors_list .list-add-2.btn, #usecase_list .actors_list .list-remove-2.btn,.extensions,.relationships_list').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var html = ''; // folosit pt dropdown-urile cu pasi de la sectiunea 'Extensions'
				var html_group = ''; // folosit pt dropdown-urile de la sectiunea 'Relationships'

				// parcurgem fircare pas din lista de pasi si construim cele 2 variabile html
				$parent.find('.steps_list .list-item-2').each(function(){
					var name = $('.step_title', this).val();

					// valoarea e indexul pasului
					html += '<option value="'+$(this).attr('index')+'">'+((name == '')?'Untitled':name)+'</option>';
					// valoarea e sub forma step_1, step_2 etc pt a nu se face confuzie cu indexurile de la actori
					html_group += '<option value="step_'+$(this).attr('index')+'">'+((name == '')?'Untitled':name)+'</option>';
				});

				/*
					acum ca in variabila html se afla toti pasii vom parcurge fiecare dropdown cu pasi din lista de extensii
					si ii vom updata optiunile. pentru a nu se pierde valoarea selectata preluam valoarea in
					variabila temporara val si dupa ce modificam html-ul ii asignam la loc valoarea
			  	*/

				$parent.find('.extensions_list select.extensions').each(function(){
					var val = $(this).val();
					$(this).html(html);
					$(this).val(val);
				});

				/*
					mai raman dropdown-urile de la Relationships
					punem in html grupul de pasi si apoi construim grupul de actori
				 */
				html = '<optgroup label="Steps">'+html_group+'</optgroup>';
				html += '<optgroup label="Actors">';
				$parent.find('.actors_list select.actors').each(function(){
					var key = $(this).val();
					// in cazul in care dropdown-ul actori sursa nu are un actor selectat il selectam pe primul
					if(key == null)
						key = $('option:first', this).attr('value');

					var obj = json.actorsAndObjectives[key];
					// daca actorul exista in json
					if(obj != undefined) {
						var name = (obj.name == '') ? 'Untitled' : obj.name;
						// valoarea e sub forma actor_1, actor_2 etc pt a nu se face confuzie cu indexurile de la pasi
						html += '<option value="actor_' + key + '">' + name + '</option>';
					}
				});
				html += '</optgroup>';

				/*
					avem html-ul...acum updatam dropdown-urile la fel ca la extensions
				 */

				$parent.find('.relationships_list select.entity_1, .relationships_list select.entity_2').each(function(){
					var val = $(this).val();
					$(this).html(html);
					// daca nu e selectata nici o optiune, o alegem pe prima
					if(val == null)
						val = $('option:first', this).attr('value');
					$(this).val(val);

				});
			});

			/**
			 * click handler al butonului 'save' al fiecarui usecase
			 * submit-uim formular in care se afla butonul
			 */
			$('.saveBtnUC').on('click',function(){
				$(this).closest('.mainPopup').find('.frmUseCases').submit();
			});

			/**
			 * submit handler al formularului usecase-ului
			 */
			$('.frmUseCases').on('submit',function(){
				var $parent = $(this).closest('.list-item');
				var title = $('.use_case_title', this).val();
				var index = $parent.attr('index');

				$parent.find('span.usecase_name').text((title == '')?'Untitled':title);

				// preluam toti actorii selectati din sectiunea Actors
				var actors = {};
				$parent.find('.actors_list select.actors').each(function(){
					var val = $(this).val();
					if(val != null)
						actors[$(this).closest('.list-item-2').attr('index')] = val;
				});

				// preluam toti pasii din sectiunea Steps
				var steps = {};
				$parent.find('.steps_list .list-item-2').each(function(){
					steps[$(this).attr('index')] = {
						title: $('.step_title', this).val(),
						description: $('.description', this).val(),
					};
				});

				// preluam toate extensiile din sectiunea Extensions
				var extensions = {};
				$parent.find('.extensions_list .list-item-2').each(function(){
					extensions[$(this).attr('index')] = {

						//NOTE FOR DEBUGGING!!!//
						//este posibil sa fie nevoie sa schimbam .steps in .extensions aici!
						step: $('.steps', this).val(),
						//*********************//

						title: $('.extension_title', this).val(),
						description: $('.description', this).val(),
					};
				});

				// preluam toate relatiile din sectiunea Relationships
				var relationships = {};
				$parent.find('.relationships_list .list-item-2').each(function(){
					relationships[$(this).attr('index')] = {
						entity_1: $('.entity_1', this).val(),
						relation: $('.relation', this).val(),
						entity_2: $('.entity_2', this).val(),
					};
				});

				// adaugam in json un nou usecase
				json.usecases[index] = {
					title: title,
					objective: $('.objective_field', this).val(),
					actors: actors,
					steps: steps,
					extensions: extensions,
					relationships: relationships,
				};

				$('.close',$parent).click();
			}).submit();
			// triggeruim automat submit-ul pt a avea in json un usecase(chiar si gol) la acel index
	    });
		
    });
})(jQuery);

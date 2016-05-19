
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

			$('#usecase_list .list-item .list-remove.btn').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var index = $parent.attr('index');
				delete json.usecases[index];
			});

			$('#usecase_list .steps_list .list-add-2.btn, #usecase_list .steps_list .list-remove-2.btn, #usecase_list .actors_list .list-add-2.btn, #usecase_list .actors_list .list-remove-2.btn').on('click', function(){
				var $parent = $(this).closest('.list-item');
				var html = '';
				var html_group = '';
				$parent.find('.steps_list .list-item-2').each(function(){
					var name = $('.step_title', this).val();
					html += '<option value="'+$(this).attr('index')+'">'+((name == '')?'Untitled':name)+'</option>';
					html_group += '<option value="step_'+$(this).attr('index')+'">'+((name == '')?'Untitled':name)+'</option>';
				});
				$parent.find('.extensions_list select.steps').each(function(){
					var val = $(this).val();
					$(this).html(html);
					$(this).val(val);
				});

				html = '<optgroup label="Steps">'+html_group+'</optgroup>';
				html += '<optgroup label="Actors">';
				$parent.find('.actors_list select.actors').each(function(){
					var key = $(this).val();
					if(key == null)
						key = $('option:first', this).attr('value');
					var obj = json.actorsAndObjectives[key];
					var name = (obj.name == '')?'Untitled':obj.name;
					html += '<option value="actor_'+key+'">'+name+'</option>';
				});
				html += '</optgroup>';
				$parent.find('.relationships_list select.entity_1, .relationships_list select.entity_2').each(function(){
					var val = $(this).val();
					$(this).html(html);
					if(val == null)
						val = $('option:first', this).attr('value');
					$(this).val(val);
				});
			});

			$('.saveBtnUC').on('click',function(){
				$(this).closest('.mainPopup').find('.frmUseCases').submit();
			});

			$('.frmUseCases').on('submit',function(){
				var $parent = $(this).closest('.list-item');
				var title = $('.use_case_title', this).val();
				var index = $parent.attr('index');

				$parent.find('span.usecase_name').text((title == '')?'Untitled':title);

				var actors = {};
				$parent.find('.actors_list select.actors').each(function(){
					var val = $(this).val();
					if(val != null)
						actors[$(this).closest('.list-item-2').attr('index')] = val;
				});

				var steps = {};
				$parent.find('.steps_list .list-item-2').each(function(){
					steps[$(this).attr('index')] = {
						title: $('.step_title', this).val(),
						description: $('.description', this).val(),
					};
				});

				var extensions = {};
				$parent.find('.extensions_list .list-item-2').each(function(){
					extensions[$(this).attr('index')] = {
						step: $('.steps', this).val(),
						title: $('.extension_title', this).val(),
						description: $('.description', this).val(),
					};
				});

				var relationships = {};
				$parent.find('.relationships_list .list-item-2').each(function(){
					relationships[$(this).attr('index')] = {
						entity_1: $('.entity_1', this).val(),
						relation: $('.relation', this).val(),
						entity_2: $('.entity_2', this).val(),
					};
				});

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
	    });
		
    });
})(jQuery);

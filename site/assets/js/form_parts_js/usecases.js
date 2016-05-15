
(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){
			$("#usecase_list .list-edit").click(function(){
				var $parent = $(this).closest('.list-item');

				var html = '';
				for( var key in json.actorsAndObjectives) {
					var obj = json.actorsAndObjectives[key];
					var name = (obj.name == '')?'Untitled':obj.name;
					html += '<option value="'+key+'">'+name+'</option>';
				}
				$parent.find('.mainPopup select.actors').html(html);
			});


	    	$(".usecase_edit_view").makePopup("#usecase_list .list-edit");
			$("#usecase_list").dynamiclist();
			$(".actors_list").dynamiclist_level2();
			$(".steps_list").dynamiclist_level2();
			$(".extensions_list").dynamiclist_level2();
			$(".relationships_list").dynamiclist_level2();
	    });
		
    });
})(jQuery);

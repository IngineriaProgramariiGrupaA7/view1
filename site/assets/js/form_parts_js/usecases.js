
(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){
	    	$(".usecase_edit_view").makePopup("#usecase_list .list-edit");
			$("#usecase_list").dynamiclist();
			$(".actors_list").dynamiclist_level2();
			$(".steps_list").dynamiclist_level2();
			$(".extensions_list").dynamiclist_level2();
			$(".relationships_list").dynamiclist_level2();
	    });
		
    });
})(jQuery);


(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){
	    	$(".usecase_edit_view").makePopup("#usecase_list .list-edit");
			$("#usecase_list").dynamiclist();
	    });
		
    });
})(jQuery);


(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){
	    	$(".usecase_edit_view").makePopup(".list-edit");
			$("#usecase_list").dynamiclist();
	    });
		
    });
})(jQuery);

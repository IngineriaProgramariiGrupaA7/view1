
(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){
			$("#usecase_list").dynamiclist();
			$("#usecase_list .list-item .usecase_edit_view").makePopup("#usecase_list .list-item .list-edit");
	    });
		
    });
})(jQuery);

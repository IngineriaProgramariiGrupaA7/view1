
(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){
			$("#usecase_list").dynamiclist();
	    });
		
    });
})(jQuery);

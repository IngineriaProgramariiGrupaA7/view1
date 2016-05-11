
(function($) {
    $(document).ready(function() {

	    $("#form_usecases").load("form_parts/usecases.html", function(){
			$("#usecase_list").dynamiclist();
	    });
		
    });
})(jQuery);

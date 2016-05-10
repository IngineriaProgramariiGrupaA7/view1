
(function($) {
    $(document).ready(function() {

	    $("#form_usecases").load("form_parts/usecases.html", function(){
			$("#example1").dynamiclist();
	    });
		
    });
})(jQuery);

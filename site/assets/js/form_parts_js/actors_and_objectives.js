
(function($) {
    $(document).ready(function() {

	    $("#form_actors").load("form_parts/actors_objectives.html", function(){
			$("#actors_list").dynamiclist();
	    });
		
    });
})(jQuery);

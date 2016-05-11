
(function($) {
    $(document).ready(function() {

	    $("#formActors").load("form_parts/actors_objectives.html", function(){
			$("#actors_list").dynamiclist();
	    });
		
    });
})(jQuery);

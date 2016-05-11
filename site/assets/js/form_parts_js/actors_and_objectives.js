
(function($) {
    $(document).ready(function() {

	    $("#formActors").load("form_parts/actors_objectives.html", function(){
			$("#actorsList").dynamiclist();
	    });
		
    });
})(jQuery);


(function($) {
    $(document).ready(function() {

	    $("#formActors").load("form_parts/actors_objectives.html", function(){
	    	$(".actors_edit_view").makePopup("#actorsList .list-edit");
			$("#actorsList").dynamiclist();
	    });
		
    });
})(jQuery);


(function($) {
    $(document).ready(function() {

	    $("#formUsecases").load("form_parts/usecases.html", function(){
			$("#usecase_list .list-edit").click(function(){
				var $parent = $(this).closest('.list-item');

				var html = '';
				for( var key in json.actorsAndObjectives) {
					var obj = json.actorsAndObjectives[key];
					var name = (obj.name == '')?'Untitled':obj.name;
					html += '<option value="'+key+'">'+name+'</option>';
				}
				$parent.find('.mainPopup select.actors').html(html);
			});


	    	$(".usecase_edit_view").makePopup("#usecase_list .list-edit");
			$("#usecase_list").dynamiclist({
                addCallbackFn: function(){
                    var popup2 = $("#usecase_list").find(".list-item:last").children(".popup"),
                    	btn2 = $("#usecase_list").find(".list-item:last").children(".list-edit");
                	popup2.makePopup(btn2);
                }
            });
			$(".actors_list").dynamiclist({
				itemClass: "list-item-2",
	            addClass: "list-add-2",
	            removeClass: "list-remove-2",
	            addCallbackFn:
	            function(){
	                var popup = $(".list-item-2:last .popup-2"),
	                    btn = $(".list-item-2:last .list-edit-2");
	                $(popup).makePopup(btn);
	            }
			});
			$(".steps_list").dynamiclist({
				itemClass: "list-item-2",
	            addClass: "list-add-2",
	            removeClass: "list-remove-2",
	            addCallbackFn:
	            function(){
	                var popup = $(".list-item-2:last .popup-2"),
	                    btn = $(".list-item-2:last .list-edit-2");
	                $(popup).makePopup(btn);
	            }
			});
			$(".extensions_list").dynamiclist({
				itemClass: "list-item-2",
	            addClass: "list-add-2",
	            removeClass: "list-remove-2",
	            addCallbackFn:
	            function(){
	                var popup = $(".list-item-2:last .popup-2"),
	                    btn = $(".list-item-2:last .list-edit-2");
	                $(popup).makePopup(btn);
	            }
			});
			$(".relationships_list").dynamiclist({
				itemClass: "list-item-2",
	            addClass: "list-add-2",
	            removeClass: "list-remove-2",
	            addCallbackFn:
	            function(){
	                var popup = $(".list-item-2:last .popup-2"),
	                    btn = $(".list-item-2:last .list-edit-2");
	                $(popup).makePopup(btn);
	            }
			});
	    });
		
    });
})(jQuery);

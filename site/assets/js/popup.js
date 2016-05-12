jQuery.fn.extend({
    popup: function (popupId) {
 //        var text = $(this).text();
 //        var zigzagText = '';
 //        var toggle = true; //lower/uppper toggle
	// 		$.each(text, function(i, nome) {
	// 			zigzagText += (toggle) ? nome.toUpperCase() : nome.toLowerCase();
	// 			toggle = (toggle) ? false : true;
	// 		});
	// return zigzagText;

	
    }
});

$.fn.makePopup = function(modalBtn) {

		var modal = $(this);
		modal.css('display','none');

		var btn = $(modalBtn);

		var close = $(".close");

		btn.click(function() {
			modal.css('display','block');
		});

		close.click(function() {
		    modal.css('display','none');
		});
};
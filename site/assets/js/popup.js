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

		//the popup:
		var modal = $(this);
		modal.css('display','none');

		//the button that opens the popup
		var btn = $(modalBtn);

		//the element that closes the popup
		var close = $(".close");//document.getElementsByClassName("close")[0];

		// When the user clicks the button, open the modal 
		btn.click(function() {
			modal.css('display','block');
		});

		// When the user clicks on <close> (x), close the modal
		close.click(function() {
		    modal.css('display','none');
		});

		// When the user clicks anywhere outside of the modal, close it
		// window.click(event, function() {
		// 	if (event.target == modal) {
		//         modal.css('display','none');
		//     }
		// });
		//BUGGED
};
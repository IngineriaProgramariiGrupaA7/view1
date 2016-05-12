$.fn.makePopup = function(modalBtn) {

		var modal = $(this);
		modal.css('display','none');

		var btn = $(modalBtn);

		var close = $(modal).children(".close");

		btn.click(function() {
			modal.css('display','block');
		});

		close.click(function() {
		    modal.css('display','none');
		});
};

$.fn.popup = function(modal) {

		var modal = $(modal);
		modal.css('display','none');

		var btn = $(modalBtn);

		var close = $(modal).children(".close");

		btn.click(function() {
			modal.css('display','block');
		});

		close.click(function() {
		    modal.css('display','none');
		});
};
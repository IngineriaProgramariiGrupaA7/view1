$.fn.makePopup = function(modalBtn) {

		var modal = $(this);
		modal.addClass('hidden');
		modal.removeClass('flex');

		var btn = $(modalBtn);

		var close = $(modal).find(".close");

		btn.click(function() {
			modal.addClass('flex');
			modal.removeClass('hidden');
		});

		close.click(function() {
		    modal.addClass('hidden');
		    modal.removeClass('flex');
		});
};

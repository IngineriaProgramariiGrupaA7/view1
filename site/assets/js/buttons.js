$(document).ready(function() {
	$('#resetBtn').click(function() {
	    location.reload();
	});

	$('#saveDraftBtn').click(function() {
		var data = JSON.stringify(window.json);
		var blob = new Blob([data], {type: "application/json"});
		var saveAs = window.saveAs;
		saveAs(blob, "draft.json");
	});
});
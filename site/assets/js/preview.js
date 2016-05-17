var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function() {
	var json = decodeURIComponent(window.location.search.substring(6));
	json = JSON.parse(json);
	console.log(json);

	$('#title').text(json.title);

	var html = '<ul>';
	for(var key in json.authors)
		html += '<li>'+json.authors[key]+'</li>';
	html += '</ul>';
	$('#authors').html(html);

	$('#description p').text(json.description);
	$('#domain p').text(json.domain);

	var html = '';
	for(var key in json.stakeholdersAndInterests)
		html += '<div class="stakeholder"><p>'+json.stakeholdersAndInterests[key].name+':'+json.stakeholdersAndInterests[key].interests+'</p></div>';

	$('#stakeholders div').html(html);
});
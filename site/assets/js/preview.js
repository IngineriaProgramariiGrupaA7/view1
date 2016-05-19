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

	var html = '<h4>Authors</h4><ul>';
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
	
	var html = '';
	for(var key in json.actorsAndObjectives)
		html += '<div class="stakeholder"><p>'+json.actorsAndObjectives[key].name+':'+json.actorsAndObjectives[key].objectives+'</p></div>';

	$('#actors div').html(html);
	
	var html = '<div>';
	var usecaseNr = 1;
	for(var key in json.usecases){
		var usecaseActors = '';
		for(var actor in json.usecases[key].actors){
			usecaseActors += json.actorsAndObjectives[parseInt(json.usecases[key].actors[actor])].name + ',';
		}
		var usecaseTitle = '<h4>5.' + usecaseNr + ' ' + usecaseActors + ' -> ' + json.usecases[key].title + '</h4>';
		var objectiveContext = '<h4>5.'+ usecaseNr + '.1 Objective/Context' + '</h4>' + '<p>' + json.usecases[key].objective + '</p>';	
		var usecaseSteps = '<h4>5.' + usecaseNr + '.2 Usecase/Steps' + '</h4>' + '<ol>';
		
		for(var step in json.usecases[key].steps){
			usecaseSteps += '<li>' + json.usecases[key].steps[step].description + '</li>';
		}
		
		usecaseSteps += '</ol>';
		
		var usecaseExtensions = '<h4>5.' + usecaseNr + '.3 Extensions' + '</h4>' + '<ol>';
		for(var ext in json.usecases[key].extensions){
			usecaseExtensions +=  '<p>' + (parseInt(json.usecases[key].extensions[ext].step) + 1) + '.' + json.usecases[key].extensions[ext].description + '</p>';
		}
		
		usecaseExtensions += '</ol>';
		
		usecaseNr++;
		
		html += usecaseTitle + objectiveContext + usecaseSteps + usecaseExtensions + '</div>';
	}
	
	$('#usecases div').html(html);
	//document.getElementById("usecases").innerHTML = html;
	
	
});
$(document).ready(function() {

    $("#formAuthors").load("form_parts/authors.html", function(){ 
        $("#authorsList").dynamiclist() });

});

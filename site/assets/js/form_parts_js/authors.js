$(document).ready(function() {

    $("#formAuthors").load("form_parts/authors.html", function(){ 
        $("#authorsList").dynamiclist();

        $('#authorsList .list-add.btn').on('click', function(){
            json.authors[$('#authorsList .list-item:last').attr('index')] = '';
        });

        $('#authorsList .list-item .list-remove.btn').on('click', function(){
            var $parent = $(this).closest('.list-item');
            var index = $parent.attr('index');
            delete json.authors[index];
        });

        $('#authorsList .list-item .authorField').on('keyup',function(){
            var $parent = $(this).closest('.list-item');
            var name = $(this).val();
            var index = $parent.attr('index');

            json.authors[index] = name;
        });
    });

});

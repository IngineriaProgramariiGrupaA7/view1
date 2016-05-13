$(document).ready(function() {

    $("#formAuthors").load("form_parts/authors.html", function(){ 
        $("#authorsList").dynamiclist();

        $('#authorsList .list-add.btn').on('click', function(){
            if(authorsIndex == 0) {
                $('#authorsList .list-item:first').attr('index', authorsIndex);
            }
            authorsIndex++;
            $('#authorsList .list-item:last').attr('index', authorsIndex);
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
            if(index == undefined)
                index = 0;

            json.authors[index] = name;
        });
    });

});

$(document).ready(function() {

    $("#formAuthors").load("form_parts/authors.html", function(){ $("#authors_list").dynamiclist() });
	
    //aici bagati codul
})(jQuery);

/*function addFields(){

            var container = document.getElementById("container");
                var input = document.createElement("input");
                input.type = "text";
                input.name = "member";
                input.size = "50";
                var button = document.createElement("button");
                button.name="buttonRemove";
                var t = document.createTextNode("REMOVE");
                button.appendChild(t);

                button.addEventListener("click", removeRow, false);

                var rowContainer = document.createElement('p');

                rowContainer.appendChild(input);
                rowContainer.appendChild(button);
                var lastOne= container.lastChild;
                if(container.hasChildNodes()) 
                {
                    container.removeChild(container.lastChild);
                }
                container.appendChild(rowContainer);
                container.appendChild(lastOne);
            
                    
        }

        function removeRow() {
            this.parentNode.parentNode.removeChild(this.parentNode);
            
            return false;
        }
        function authorBussiness()
        {
            var container = document.getElementById("container");
            var buttonAdd = document.createElement("button");
                    buttonAdd.name="buttonAdd";
                    var t = document.createTextNode("ADD");
                    buttonAdd.appendChild(t);
                    buttonAdd.addEventListener("click", addFields, false);
                    var rowContainer = document.createElement('p');
                    rowContainer.appendChild(buttonAdd);
                    container.appendChild(rowContainer);
        }
*/
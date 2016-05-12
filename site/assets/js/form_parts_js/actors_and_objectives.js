
(function($) {
    $(document).ready(function() {

	    $("#form_actors").load("form_parts/actors_objectives.html", function() {authorBussiness()});
	      
    });

})(jQuery);
function actorsBussiness()
			{
			        // Get the modal
			    var modal = document.getElementById('openModal');

			    // Get the button that opens the modal
			    var btn = document.getElementById("myBtn");

			    // Get the <span> element that closes the modal
			    var span = document.getElementsByClassName("close")[0];

			    // When the user clicks the button, open the modal 
			    btn.onclick = function() {
			        modal.style.display = "block";
			    }

			    // When the user clicks on <span> (x), close the modal
			    span.onclick = function() {
			        modal.style.display = "none";
			    }

			    // When the user clicks anywhere outside of the modal, close it
			    window.onclick = function(event) {
			        if (event.target == modal) {
			            modal.style.display = "none";
			        }
			    }
			}
			function addFields(){

            var container = document.getElementById("container");
                var label = document.createElement("label");
                var textInput = document.createTextNode("Untitled");
                label.appendChild(textInput);
                var button = document.createElement("button");
                button.name="buttonRemove";
                var t = document.createTextNode("REMOVE");
                button.appendChild(t);

                button.addEventListener("click", removeRow, false);

                var edit = document.createElement("button");
                edit.name ="editButton";
                var valueEdit = document.createTextNode("EDIT");
                edit.appendChild(valueEdit);
                edit.id="myBtn";

                edit.addEventListener("click", actorsBussiness, false);

                var rowContainer = document.createElement('p');

                rowContainer.appendChild(label);
                rowContainer.appendChild(button);
                rowContainer.appendChild(edit);
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
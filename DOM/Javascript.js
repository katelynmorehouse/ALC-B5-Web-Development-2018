//Variables//
// This grabs th id of the first modal and sets it equal to modal
var modal = document.getElementById("modal");
//This grabs the button witht the id "change
//This allows us to call a afuntion with a click later
var changeBtn = document.getElementById("change");
//This grabs the preview
var preview = document.getElementById("preview");

//Functions//

//Funtion to set Preview Boxes//

//This sets the preiew box color in modal to tge currently selected color
function Preview(){
    //This gets the currently selected colors value and sets it equal to color
    color=document.querySelector('input[name="colors"]:checked').value;
    //log what color
    console.log("The color is" + color);
    //change preview color
    preview.style.background = color;
}

//Funcitont to change color//

//Change the color
function changeColor(){
    //log what the color was changed to 
    console.log("The color is" + color);
    //Change the background color
    document.body.style.background = color;
}

//Function to open modal//

//Opem color changing modal//
changeBtn.onclick = function(){
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

//Function to close modal//

//When the user clicks on the close button in modal it closes it 
function Close(){
    //Close modal
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    //Reset preview
    preview.style.background = "1a1a1a";
    //Unselect any currently selected color
    document.querySelector('input[name="colors"]:checked').checked = false;
}

//Close modal on window click
window.onclick = function(event){
  if(event.target == modal) {
    //close modal
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    //Reset Preview
    preview.style.background = "1a1a1a";
    //Unset any currently selected color
    document.querySelector('inout[name= "colors"]:').checked = "false";
  }
}
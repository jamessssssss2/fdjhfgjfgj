// Get the modal 
var popup = document.getElementById("popup"); 
 
// Get the button that opens the modal 
var btn = document.getElementById("openPopup"); 
 
// Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0]; 
 
 
// When the user clicks on <span> (x), close the modal 
span.onclick = function() { 
    popup.style.display = "none"; 
} 
 

window.onload = function() {
    window.scrollTo(0, 20); 
};


// Setup an event listener for the show button.
function HIDEN(){
    var dialog =   document.getElementById('dialog')
    dialog.style.display = "none";
    dialog.close();
}

function GoTo(To){
    window.scrollTo(0,To)
}
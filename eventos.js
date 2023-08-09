let div= document.getElementById("divAlert");

div.addEventListener("click", function(event) {
    if (event.target===div) {
        alert("Hola! Soy el div");
    }
});
let entrada = document.getElementById("entrada");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(event){
localStorage.setItem("name", entrada.value);
});
let encabezado = document.getElementById("encabezado");
let eliminar = document.getElementById("eliminar");

if(localStorage.getItem("name") != null){
encabezado.innerText = `Hola ${localStorage.getItem("name")} bienvnid@ de nuevo`;
console.log(encabezado)
};

eliminar.addEventListener("click", function(event){
  event.preventDefault();
  localStorage.clear();
  location.reload();
});
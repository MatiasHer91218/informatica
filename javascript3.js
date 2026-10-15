//Datos
const nombre= "nico";
const clave= "1234567";

//Capturamos la infromación del DOM
let nomIng= document.getElementById("usuario");
let claveIng= document.getElementById("contrseña");
let boton= document.getElementById("btn-ingresar");

//Escuchamos el evento
boton.addEventListener("click", function(){
    alert(nomIng.value);    
});
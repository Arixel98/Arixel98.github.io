var ingresar = prompt("Ingrese su nombre");
var cambio = document.querySelector("h1").innerHTML = " Bienbenido " + ingresar + " a la paguina de JJCSS";

function bienvenido() {
    document.write(cambio);
}




function img() {
    var imagen = document.getElementById("prin");
    imagen.src = "/imagenes/nueva.png"
}
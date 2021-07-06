//creamos un procedimiento para registrar
alert("Bienvenido a Compras")

var getData = function() { //declarar variables para los controles
    var N_titular = document.getElementById("N_titular").value;
    var N_tarjeta = document.getElementById("N_tarjeta").value;
    var fecha = document.getElementById("fecha").value;
    var ccv = document.getElementById("ccv").value;

    if (N_titular == "") {
        alert("Ingrese su nombre completo");
        document.getElementById("N_titular").focus();
    } else if (N_tarjeta == "") {
        alert("Ingrese su numero de tarjeta")
        document.getElementById("N_tarjeta").focus();
    } else if (fecha == "") {
        alert("Seleccione mes de vencimiento")
        document.getElementById("fecha").focus();
    } else if (ccv == "") {
        alert("Ingrese su numero de cvv")
        document.getElementById("ccv").focus();

    } else {
        console.log(N_titular + " " + N_tarjeta + " " + fecha + " " + ccv);
        document.getElementById("N_titular").value = "";
        document.getElementById("N_tarjeta").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("ccv").value = "";
        document.getElementById("N_titular").focus();
    }
}
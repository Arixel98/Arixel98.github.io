alert("Ingresa los datos de entrega")

var metaData = function() { //declarar variables para los controles
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var d_entrega = document.getElementById("d_entrega").value;
    var siguiente = document.getElementById("siguiente").value;

    if (nombre == "") {
        alert("Ingrese su nombre completo");
        document.getElementById("nombre").focus();
    } else if (apellido == "") {
        alert("Ingrese su apellido completo")
        document.getElementById("apellido").focus();
    } else if (d_entrega == "") {
        alert("Ingrese su direccion de entrega")
        document.getElementById("d_entrega").focus();
    } else if (siguiente == "") {
        alert("Ingrese su direccion de entrega")
        document.getElementById("siguiente").focus();

    } else {
        console.log(nombre + " " + apellido + " " + d_entrega);
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("d_entrega").value = "";
        document.getElementById("siguiente").focus();
    }
}
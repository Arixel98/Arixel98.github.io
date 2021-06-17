alert("Ingresa con correo usuario - Mortal")
var getData = function()
{
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var ingresar = document.getElementById("ingresar").value
    
    
    if(usuario==""){
        alert("Ingrese su usuario completo");
        document.getElementById("usuario").focus();
    }
    else if(contraseña==""){
        alert("Ingrese su contraseña")
        document.getElementById("contraseña").focus();
    }
    else if(ingresar==""){
    alert("continuemos con tu compra - Mortal").focus();
    }
    else{
    console.log(usuario+" "+contraseña+"")
    }}




//¡NO BORRAR JAMAS JAMAS DE LOS JAMASES!


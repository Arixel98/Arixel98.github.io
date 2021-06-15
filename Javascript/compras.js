//creamos un procedimiento para registrar
alert("Bienvenido a Compras")
function Registrar()
{ //declarar variables para los controles
    var N_titular=document.getElementById("N_titular");
    var N_tarjeta=document.getElementById("N_tarjeta");
    var fecha=document.getElementById("fecha");
    var ccv=document.getElementById("ccv");
 
    

   
    if(N_titular.value==0){
        alert("Ingrese su nombre completo");
        N_titular.focus();
    }else if(N_tarjeta.value==""){
        alert("Ingrese su numero de tarjeta")
        N_tarjeta.focus();
    }else if (fecha.selectedIndex==0){
        alert("Seleccione mes de vencimiento")
        fecha.focus();
    }else if(ccv.value==""){
        alert("Ingrese su numero de cvv")
        ccv.focus();
    
}else{
    alert("No Finalizo el registro");
}
}

Registrar()


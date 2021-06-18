
var Soporte = function()
{ //declarar variables para los controles
    var Comentario=document.getElementById("Comentario").value;
    var Enviar=document.getElementById("Enviar").value;
   
 
    if(Comentario==""){
        alert("Ingrese sus comentarios");
        document.getElementById("Comentario").focus();
    }else if(Enviar==0){
        alert("Comentario Ingresado correctamente")
        document.getElementById("Enviar").focus();
    
    
}else{
    console.log(Comentario);
    document.getElementById("Comentario").value="";
    document.getElementById("Enviar").value=0;
    document.getElementById("Comentario").focus();
}
}
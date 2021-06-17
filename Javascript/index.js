
window.addEventListener('load',function(){
console.log('cargo el contenido');


var ingresar =prompt("Ingrese su nombre");
var cambio =document.querySelector("h1").innerHTML= " Bienbenido " +ingresar+ " a la paguina de JJCSS";

})

function bienvenido(){
document.write(cambio );
}




window.addEventListener('load',function(){
    console.log('cargo el contenido');
    
    
    var imagenes=[];
    
    imagenes[0]="../imagenes/PUBLICIDAD PRINCIPAL.png";
    imagenes[1]="../imagenes/nueva.png";
    imagenes[2]="../imagenes/imagen3.jpg";
    
     var indice=0;
    
     
    
    function cambiarImg(){
    
        document.juas.src =imagenes[indice]; 
    
       if (indice<2) {
           indice++
       }
       else{
           indice=0;
       }
          
             
    }
    setInterval(cambiarImg,2000);
    
    });
    
    

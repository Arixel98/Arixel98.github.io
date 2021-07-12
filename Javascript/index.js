const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();
const Index = document.getElementById("Publicidad");

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded', mostrarPublicidad());

function mostrarPublicidad(){
    obteniendoImagenes((listaDeImagenes)=>{
        Index.innerHTML=``;
           listaDeImagenes.forEach(
               (e) => {
                   e = Index.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/publicidad.png?alt=media&token=04edc1cc-ee45-4501-a868-40c9922b98c3>`;
               }
           )
    }
)
}

window.addEventListener('load',function(){
    console.log('cargo el contenido');
    
    
    
    
        var imagenes=[];
        
        imagenes[0]="imagenes/PUBLICIDAD PRINCIPAL.png";
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
    
        var ingresar =prompt("Ingrese su nombre");
        var cambio =document.querySelector("h1").innerHTML= " Bienbenido " +ingresar+ " a la paguina de JJCSS";
    })
const db = firebase.firestore(); 
const storageRef = firebase.storage().ref();


const DOCUMENT_ID_Index = 'erhHdWxCXXSzvncxXNJg';
const DOCUMENT_ID_Summer = 'h6EDhgEKhLWsVrvui7pk';
const DOCUMENT_ID_Articulos = 'hVKWooOctnYw5RsO1cZK';
const DOCUMENT_ID_Redes = 'CZzAcRzlLKT39Ms3Umma';
const DOCUMENT_ID_Imagen8 = 'hlpyjCstbzZGy51JxW0G';
const DOCUMENT_ID_Robot = '1LUgp1kCBOGkyYSf0gOu';

db.collection("imagenes").get().then((querySnapshot) => { 
    querySnapshot.forEach((doc) => { 

        if(doc.id == DOCUMENT_ID_Index) { 
            document.querySelector('#Publicidad').src = doc.data().ruta;
        } else if(doc.id == DOCUMENT_ID_Summer) {  
            document.querySelector('#Summer').src = doc.data().ruta;
        } else if(doc.id == DOCUMENT_ID_Articulos) { 
            document.querySelector('#Articulos').src = doc.data().ruta;
        } else if(doc.id == DOCUMENT_ID_Redes) { 
            document.querySelector('#Redes').src = doc.data().ruta;
        } else if(doc.id == DOCUMENT_ID_Imagen8) { 
            document.querySelector('#Imagen8').src = doc.data().ruta;
        } else if(doc.id == DOCUMENT_ID_Robot) { 
            document.querySelector('#Robot').src = doc.data().ruta;
        } 
    })
})

window.addEventListener('DOMContentLoaded',function Banner(){
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
var cambio =document.querySelector("h1").innerHTML= " Bienvenido " +ingresar+ " a la pagína de JJCSS";
})

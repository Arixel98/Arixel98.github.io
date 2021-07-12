const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();
const Index = document.getElementById("Publicidad");
const Summer = document.getElementById("Summer");
const Articulos = document.getElementById("Articulos");


const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded', mostrarPublicidad());
window.addEventListener('DOMContentLoaded', mostrarSummer,mostrarArticulos());

function mostrarPublicidad(){
    obteniendoImagenes((listaDeImagenes)=>{
        Index.innerHTML=``;
           listaDeImagenes.forEach(
               (a) => {
                   a = Index.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/publicidad.png?alt=media&token=04edc1cc-ee45-4501-a868-40c9922b98c3>`;
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

    function mostrarSummer(){
        obteniendoImagenes(
            (listaDeImagenes)=>{
                Summer.innerHTML=``;
                   listaDeImagenes.forEach(
                       (e) => {
                           e = Summer.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/sumer.png?alt=media&token=f37c2085-b58d-464f-a05e-2ea6cdbebbe2 width="390px" height="390px"/>`;
                       }
                   )
            }
        )
    }


    function mostrarArticulos(){
        obteniendoImagenes(
            (listaDeImagenes)=>{
                Articulos.innerHTML=``;
                   listaDeImagenes.forEach(
                       (i) => {
                           i = Articulos.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/articulosegundario.png?alt=media&token=e6c14cbc-852f-4374-89d9-24fee7d9f71d width="390px" height="390px"/>`;
                       }
                   )
            }
        )
    }

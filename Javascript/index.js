const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();
const Index = document.getElementById("Publicidad");
const Summer = document.getElementById("Summer");
const Articulos = document.getElementById("Articulos");
const Redes = document.getElementById("Redes")
const Imagen8 = document.getElementById("Imagen8")
const Robot = document.getElementById("Robot")

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded', mostrarPublicidad(),mostrarSummer(),mostrarArticulos(),mostrarRedes(),mostrarImagen8(),mostrarRobot());


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


    function mostrarRedes(){
        obteniendoImagenes((listaDeImagenes)=>{
            Redes.innerHTML=``;
               listaDeImagenes.forEach(
                   (o) => {
                       o = Redes.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/redes1-sin%20fondo.png?alt=media&token=e3d4264c-7186-4862-9cb7-2daa475c8255 width="100px"/>`;
                   }
               )
        }
    )
    }


    function mostrarImagen8(){
        obteniendoImagenes((listaDeImagenes)=>{
            Imagen8.innerHTML=``;
               listaDeImagenes.forEach(
                   (o) => {
                       o = Imagen8.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/image__8%20-%20sin%20fondo.png?alt=media&token=8286c064-6dd0-4625-a339-b0ef9262467a width="280px" height="80px"/>`;
                   }
               )
        }
    )
    }


    function mostrarRobot(){
        obteniendoImagenes((listaDeImagenes)=>{
            Robot.innerHTML=``;
               listaDeImagenes.forEach(
                   (o) => {
                       o = Robot.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/robot.png?alt=media&token=3a6e599b-8993-4646-bfe3-b6fba3587539 width="200px" height="200px"/>`;
                   }
               )
        }
    )
    }
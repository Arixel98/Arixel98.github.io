//conexion a la carpeta (storage)
const storageRef = firebase.storage().ref();

//conexion a base de datos
const baseDeDatos = firebase.firestore();
//constantes de las imagenes
const galeria = document.getElementById("imagenes");
const Laptop = document.getElementById("LaptopSinFondo");
const LaptopGamer = document.getElementById("LaptopGamer");

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

//llamando a todas las funciones
window.addEventListener('DOMContentLoaded', mostrarPcGamer,mostrarLaptopSinfondo());

window.addEventListener('DOMContentLoaded',mostrarLaptopGamer,cuenta());

//  window.addEventListener("load",cuenta)


     function mostrarPcGamer(){
         obteniendoImagenes(
             (listaDeImagenes)=>{
                 galeria.innerHTML=``;
                    listaDeImagenes.forEach(
                        (a) => {
                            a = galeria.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/pc%20gamer%20sin%20fondo.png?alt=media&token=de2f8b75-4de0-4205-82c6-5ab147238931 width="400px" height="300px"/>`;
                        }
                    )
             }
         )
     }
    
     
    

     function cuenta(){

        var laptopNormal=1800
        var pcGamer=3500
        var laptopGamer=4999
        let dinero=prompt("cuanto dinero tienes?");
           dinero=parseInt(dinero)
        
        if (dinero>=1800 & dinero<3500){
            alert(" puedes comprarte una laptop normal ");
            alert("te sobraria" + " S/" + (dinero - 1800))
        }                                                                                                                                                                 
            else if (dinero>= 3500 & dinero<4999){
                alert(" puedes comprarte una PC Gamer");
                alert(" te sobra " + " S/" +(dinero - 3500));
            }
            else if (dinero >=4999 & dinero < 10000000000){
        alert("puedes comprarte una Laptop Gamer ");
        alert(" te sobra " +  " S/" +(dinero - 4999));
            }
            else {
                if(dinero==dinero){
                    alert(" lo siento  no te alcanza para ningun equipo");
                }
            }
         }
        // luego de que toda la paguina se aya cargado o mostrado ejecutame la funcion cuenta
        

    
    
        function mostrarLaptopSinfondo(){
            obteniendoImagenes(
                (listaDeImagenes)=>{
                    Laptop.innerHTML=``;
                       listaDeImagenes.forEach(
                           (b) => {
                               b = Laptop.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/laptops%20sin%20fondo.png?alt=media&token=6bd395a6-b40b-4e01-8141-7bd1f15d161f width="400px" height="300px"/>`;
                           }
                       )
                }
            )
        }


        function mostrarLaptopGamer(){
            obteniendoImagenes(
                (listaDeImagenes)=>{
                    LaptopGamer.innerHTML=``;
                       listaDeImagenes.forEach(
                           (c) => {
                               c = LaptopGamer.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/laptops%20gamer%20sin%20fondo.png?alt=media&token=5310ed5a-b7e6-46c8-8a39-13b258247061 width="400px" height="300px"/>`;
                           }
                       )
                }
            )
        }


     
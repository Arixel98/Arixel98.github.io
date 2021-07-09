//conexion a la carpeta (storage)
const storageRef = firebase.storage().ref();

//conexion a base de datos
const baseDeDatos = firebase.firestore();
const galeria = document.getElementById("imagenes");

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

    
     window.addEventListener('DOMContentLoaded', cuenta, mostrarImagenesDeFirebase());

     function mostrarImagenesDeFirebase(){
         obteniendoImagenes(
             (listaDeImagenes)=>{
                 galeria.innerHTML=``;
                    listaDeImagenes.forEach(
                        (imagen) => {
                            galeria.innerHTML = galeria.innerHTML + `<img src="`+imagen.data().ruta+` width="200px" height="200px"/>`;
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
        //  window.addEventListener("load",cuenta)

    
    
    
    
     
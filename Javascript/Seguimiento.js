//conexion a la carpeta (storage)
const storageRef = firebase.storage().ref();

//conexion a base de datos
const baseDeDatos = firebase.firestore();
const Laptop = document.getElementById("Laptop");

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded',mostrarLapto());

function mostrarLapto(){
    obteniendoImagenes(
        (listaDeImagenes)=>{
            Laptop.innerHTML=``;
               listaDeImagenes.forEach(
                   (z) => {
                       z = Laptop.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/laptops%20sin%20fondo.png?alt=media&token=726aabd9-86db-478a-96e9-5502e45ba93f width="300px" height="300px" />`;
                   }
               )
        }
    )
}

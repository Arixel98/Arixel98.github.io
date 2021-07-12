//conexion a la carpeta (storage)
const storageRef = firebase.storage().ref();

//conexion a base de datos
const baseDeDatos = firebase.firestore();
const Laptop = document.getElementById("Laptop");
const seguimiento = document.getElementById("estado");


const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded',mostrarLapto,mostrarSeguimiento());

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

function mostrarSeguimiento(){
    obteniendoImagenes(
        (listaDeImagenes)=>{
            seguimiento.innerHTML=``;
               listaDeImagenes.forEach(
                   (x) => {
                       x = seguimiento.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/jjcss-tech-dff98.appspot.com/o/entregadas%20sin%20fondo.png?alt=media&token=03f6bcea-9be7-451d-a295-6771b26b361c />`;
                   }
               )
        }
    )
}

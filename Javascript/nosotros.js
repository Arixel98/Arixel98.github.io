var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

const db = firebase.firestore();

const taskForm = document.getElementById("task-Form");
console.log(taskForm);
const saveTask = (Nombre, Teléfono) =>
    db.collection("Te Contacto").doc().set({
        Name: Nombre,
        Phone: Teléfono,
    })

taskForm.addEventListener("submit", async(e) => {
    console.log(db); //nunca entra a este metodo
    e.preventDefault()
    const cNombre = taskForm["over-Nombre"].value;
    const cTeléfono = taskForm["over-Teléfono"].value;

    await saveTask(cNombre, cTeléfono);

    taskForm.reset();

})






// //conexion a base de datos
// const db = firebase.firestore();

// //obtengo el formulario web y el contenedor
// const taskForm = document.getElementById("task-form");
// // const taskContainer = document.getElementById("task-container");

// //funcion a la vieja
// function saveTask(Nombre, Teléfono) {
//     db.collection("Te Contacto").doc().set({
//         Name: Nombre,
//         Phone: Teléfono
//     })
// }

// let estadoEditar = false;
// let idAEditar = "";;
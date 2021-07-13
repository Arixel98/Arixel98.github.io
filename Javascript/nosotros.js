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

const saveTask = (Nombre, Teléfono) =>
    db.collection("Te Contacto").doc().set({
        Name: Nombre,
        Phone: Teléfono,
    })

taskForm.addEventListener("submit", async(e) => {
    e.preventDefault()
    const cName = taskForm["over-Nombre"].value;
    const cPhone = taskForm["over-Teléfono"].value;

    await saveTask(cName, cPhone);

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
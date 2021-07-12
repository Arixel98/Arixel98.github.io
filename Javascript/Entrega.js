const db = firebase.firestore();

const taskForm = document.getElementById("task-form");

const saveTask = (Nombres,Apellidos,Direccion,description) =>
    db.collection("Entrega").doc().set(
        {
            Nombres: Nombres,
            Apellidos: Apellidos,
            Direccion: Direccion,
            description: description
        }
    )

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const cNombres = taskForm["Task-Nombres"].value;
    const cApellidos = taskForm["Task-Apellidos"].value;
    const cDireccion = taskForm["Task-Direccion"].value;
    const cdescription = taskForm["Task-description"].value;

    await saveTask(cNombres,cApellidos, cDireccion, cdescription);

    taskForm.reset();
    

})



// var getData = function()
// { //declarar variables para los controles
//     var nombre=document.getElementById("nombre").value;
//     var apellido=document.getElementById("apellido").value;
//     var d_entrega=document.getElementById("d-entrega").value;
 
//     if(nombre==""){
//         alert("Ingrese su nombre completo");
//         document.getElementById("nombre").focus();
//     }else if(apellido==""){
//         alert("Ingrese su apellido completo")
//         document.getElementById("apellido").focus();
//     }else if (d_entrega==""){
//         alert("Ingrese su direccion de entrega")
//         document.getElementById("d_entrega").focus();

//     }else{
//         console.log(nombre+" "+apellido+" "+d_entrega);
//         document.getElementById("nombre").value="";
//         document.getElementById("apellido").value="";
//         document.getElementById("d_entrega").value="";
//         document.getElementById("nombre").focus();
// }
// }

// ingreso de usuario existente
function iniciarSesion(){
    var email=document.getElementById("txtcorreoIngesar").value;
    var password=document.getElementById("txtcontraIngresar").value;
    firebase.auth().signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("ingreso");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    // firebase.auth().signInWithEmailAndPassword(email,password).then(res=>{
    
    //     aler("ingreso correcto")
    //   })
    //   .catch(err => {
     
    //   });
}

// codigo para crear o registrar el usuario
function createUser(){
    var email=document.getElementById("txtcorreo").value;
    var password=document.getElementById("txtcontra").value;
    firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(res=> {
  alert("Se resgistro correctamente");
  document.getElementById("btnCancelar").click();
  })
  .catch(err=> {
   alert("Ocurrio un error");
    
  });
}
// observador de estado de autenticacion

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          document.getElementById("login").innerHTML="Logueado " +user.email;
          // ...
        } else {
          // User is signed out
          // ...
          document.getElementById("login").innerHTML=" no Logueado " +user.email;
        }
      });


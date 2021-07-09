// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAC8MrBEsA7OM9Z71aXLCCuRSWQOtdNj10",
    authDomain: "jjcss-tech-dff98.firebaseapp.com",
    projectId: "jjcss-tech-dff98",
    storageBucket: "jjcss-tech-dff98.appspot.com",
    messagingSenderId: "313698144414",
    appId: "1:313698144414:web:af2df3267832f4da676b8f",
    measurementId: "G-5NRGJQ7Y23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// codigo para crear o registrar el usuario
function enviar(){
  var email= document.getElementById("ra").value;
  var contra= document.getElementById("re").value;
  firebase.auth().createUserWithEmailAndPassword(email, contra)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  alert("Se resguistro correctamente");
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("ocurrio un error");
  // ..
});

}

// acceso de usuario existente
function acceso(){
var email=document.getElementById("ri").value;
var  pass=document.getElementById("ro").value;
firebase.auth().signInWithEmailAndPassword(email, pass)
.then((userCredential) => {

var user = userCredential.user;
alert("Accediste");
document.getElementById("abc").style.display="none";
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
alert(errorMessage);

});

 }
 function cerrar() {
            firebase.auth().signOut()
                .then(function () {
                    console.log("salir");
                })
                .catch(function (error) {
                    console.log("error");
                })
        }

// observador de estado de autenticacion

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid= user.uid;
        document.getElementById("login").innerHTML = `<p>Logueado ` + user.email+`</p>`+  `<button onclick=cerrar();>cerrar sesion</button>`;
       
        // ...
      } else {
        // User is signed out
        // ...
        document.getElementById("login").innerHTML =    "no Logueado " ;
        document.getElementById("abc").style.display="block";
       
      }
    });
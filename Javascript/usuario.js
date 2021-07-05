var firebaseConfig = {
    apiKey: "AIzaSyDtbHgQqPNuU3wwawu11PkmV20DCZfOw1I",
    authDomain: "jjcss-ff566.firebaseapp.com",
    projectId: "jjcss-ff566",
    storageBucket: "jjcss-ff566.appspot.com",
    messagingSenderId: "917742652533",
    appId: "1:917742652533:web:6988f31b01a0e94a617c3c",
    measurementId: "G-VC4CEQFVBS"
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
      }
    });
















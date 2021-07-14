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
  // si despues de salir el alert se toma el boton cancelar y si se da un clip se activa el boton 
  document.getElementById("btnCancelar").click();

  
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("ocurrio un error");
  
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

// observador de estado si estan en secion o no 
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // cuando esta logueado
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid= user.uid;
        // document.getElementById("login").style.display="none"
        document.getElementById("login").innerHTML =   ` <p id="us"> Logueado</p>  `;
        document.getElementById("divDatosUsu").style.visibility="visible";
        // document.getElementById("lblNombreUsuario").innerHTML = user.email
        document.getElementById("A").style.visibility="hidden";
        
        if(user.displayName != null)
         document.getElementById("lblNombreUsuario").innerHTML = "Bienvenido"+ " "+ user.displayName;
        else
        document.getElementById("lblNombreUsuario").innerHTML =  "Bienvenido"+ " " + user.email;
       
        // ...
      } else {
        // si no esta logueado
        
        document.getElementById("login").innerHTML ="No Logueado " ;
        document.getElementById("abc").style.display="block";
        // visibility hiden para que no se muestre
        document.getElementById("divDatosUsu").style.visibility="hidden";
        document.getElementById("A").style.visibility="visible";
       
      }
      
     
    });
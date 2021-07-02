
// var firebaseConfig = {
//     apiKey: "AIzaSyDtbHgQqPNuU3wwawu11PkmV20DCZfOw1I",
//     authDomain: "jjcss-ff566.firebaseapp.com",
//     projectId: "jjcss-ff566",
//     storageBucket: "jjcss-ff566.appspot.com",
//     messagingSenderId: "917742652533",
//     appId: "1:917742652533:web:6988f31b01a0e94a617c3c",
//     measurementId: "G-VC4CEQFVBS"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//    firebase.analytics();
  
// // codigo para crear o registrar el usuario
// function createUser(){
//   var email=document.getElementById("txtcorreo").value;
//   var contra=document.getElementById("txtcontra").value;
//   firebase.auth().createUserWithEmailAndPassword(email, contra)
// .then((userCredential) => {
//   // Signed in
//   var user = userCredential.user;
//   alert("Se resguistro correctamente");
//   // ...
// })
// .catch((error) => {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   alert("ocurrio un error");
//   // ..
// });

// }

// // acceso de usuario existente
// function acceso(){
// let email=document.getElementById("12").value;
// let pass=document.getElementById("13").value;
// firebase.auth().signInWithEmailAndPassword(email, pass)
// .then((userCredential) => {
// // Signed in
// var user = userCredential.user;
// alert("Accediste");
// })
// .catch((error) => {
// var errorCode = error.code;
// var errorMessage = error.message;
// alert(errorMessage);
// });

//  };
// // observador de estado de autenticacion

//   firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         var uid= user.uid;
//         document.getElementById("login").innerHTML="Logueado " +user.email;
//         // ...
//       } else {
//         // User is signed out
//         // ...
//         document.getElementById("login").innerHTML="no Logueado " 
//       }
//     });

















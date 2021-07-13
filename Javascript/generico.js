
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

  
  
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // cuando esta logueado
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid= user.uid;
          document.getElementById("login").innerHTML =  `<button onclick=cerrar();>cerrar sesion</button>`;
          document.getElementById("divDatosUsu").style.visibility="visible";
          document.getElementById("lblNombreUsuario").innerHTML = user.email
          document.getElementById("A").style.visibility="hidden";
         
          // ...
        } else {
          // si no esta logueado
          
          document.getElementById("login").innerHTML =    "No Logueado " ;
          document.getElementById("abc").style.display="block";
          // visibility hiden para que no se muestre
          document.getElementById("divDatosUsu").style.visibility="hidden";
          document.getElementById("A").style.visibility="visible";
         
        }
      });
  
   




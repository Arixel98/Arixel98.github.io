

function acceso(){
    var email=document.getElementById("ri").value;
    var  pass=document.getElementById("ro").value;
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
    
    var user = userCredential.user;
    if(userCredential.user.photoURL != null){
        document.getElementById("imgFotoUsuario").src=userCredential.user.photoURL;

    }
    else{
        document.getElementById("imgFotoUsuario").src="../imagenes/imagen nueva de usuario.png";
    }
    
    
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    
    });
    
     }
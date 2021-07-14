//coneccion a base de datos
const db = firebase.firestore(); 
//coneccion a storage
const storageRef = firebase.storage().ref();
//id automatico de cada archivo a jalar
const DOCUMENT_ID_FIRST = 'zVg1i64tB7AZSoZEwdrl';
const DOCUMENT_ID_SECOND = 'vel8ge6evFwcreDeqxJJ';
const DOCUMENT_ID_THIRD = 'NF33NrSYAxyVDReXZF5j';
 
//llamo a la collecion y designo que quiero jalar 
db.collection("imagenes").get().then((querySnapshot) => { 
    querySnapshot.forEach((doc) => { 
        if(doc.id == DOCUMENT_ID_FIRST) { 
            document.querySelector('#img1').src = doc.data().ruta;
            document.getElementById("occ1").innerHTML = doc.data().intel;
            document.getElementById("occ1_1").innerHTML = doc.data().ram;
        } else if(doc.id == DOCUMENT_ID_SECOND) {  
            document.querySelector('#img2').src = doc.data().ruta;
            document.getElementById("occ2").innerHTML = doc.data().intel;
            document.getElementById("occ2_1").innerHTML = doc.data().ram;
        } else if(doc.id == DOCUMENT_ID_THIRD) { 
            document.querySelector('#img3').src = doc.data().ruta;
            document.getElementById("occ3").innerHTML = doc.data().intel;
            document.getElementById("occ3_1").innerHTML = doc.data().ram;
        } 
    })
})

//llamo a la calculadora cuenta
window.addEventListener("DOMContenLoaded",cuenta());
 
     function cuenta(){

        var laptopNormal=1800
        var pcGamer=3500
        var laptopGamer=4999
        let dinero=prompt("cuanto dinero tienes?");
           dinero=parseInt(dinero)
        
        if (dinero>=1800 & dinero<3500){
            alert(" puedes comprarte una laptop normal ");
            alert("te sobraria" + " S/" + (dinero - 1800))
        }                                                                                                                                                                 
            else if (dinero>= 3500 & dinero<4999){
                alert(" puedes comprarte una PC Gamer");
                alert(" te sobra " + " S/" +(dinero - 3500));
            }
            else if (dinero >=4999 & dinero < 10000000000){
        alert("puedes comprarte una Laptop Gamer ");
        alert(" te sobra " +  " S/" +(dinero - 4999));
            }
            else {
                if(dinero==dinero){
                    alert(" lo siento  no te alcanza para ningun equipo");
                }
            }
         }

        

    
    



     
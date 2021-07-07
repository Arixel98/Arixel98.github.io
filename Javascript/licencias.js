
function cuenta() {
    var licenciaM=50;
    var licenciasA=100
    var licenciaB=80
    var licenciaK=90
    let dinero=prompt("cuanto dinero tines?");
       dinero=parseInt(dinero)
    
    if (dinero>=50& dinero<80){
        alert(" puedes comprarte una licencia de Microsoft ");
        alert("te sobraria" + " S/" + (dinero - 50))
    } 
    
    else if (dinero>= 80 & dinero<90){
        alert(" puedes comprarte una licencia bitdefender");
        alert(" te sobra " + " S/" +(dinero - 80));
    }
    
                                                                                                                                                                  
        else if (dinero>= 90 & dinero<100){
            alert(" puedes comprarte una licencia Kaspersky");
            alert(" te sobra " + " S/" +(dinero - 90));
        }
        else if (dinero >=100 & dinero < 10000000000){
    alert("puedes comprarte una licencia de antivirus ");
    alert(" te sobra " +  " S/" +(dinero - 100));
        }
        else {
            if(dinero==dinero){
                alert(" lo siento  no te alcanza para ninguna licencia ");
            }
        }
    }
    window.addEventListener("load",cuenta)
var laptopNormal=1800
var pcGamer=3500
var laptopGamer=4999
let dinero=prompt("cuanto dinero tines?");
   dinero=parseInt(dinero)

//  let dinerocarlos=prompt("cuanto dinero tienes Roberto");
//  let dinerosebastian=prompt("cuanto dinero tienes Pedro?") ;

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
 alert(" lo siento  no te alcanza para ningun equipo");
    }

    // function cuadrado(n){
        // return n * n
    // }
//    let  numero=cuadrado(5)
    //   alert( numero)
    // if (dineroRoberto>=0.6 & dineroRoberto<1){
    //     alert("Roberto Comprate el helado de agua");
    // }    else if (dineroRoberto>=1 & dineroRoberto < 1.6){
    // alert(" Roberto comprate el helado de crema");
    // }                                                                                                                                                                  
    //     else if (dineroRoberto >= 1.6 & dineroRoberto<1.7){
    //         alert("Roberto comprate el helado heladix");
    //     }
    //     else if (dineroRoberto >=1.7 & dineroRoberto < 1.8){
    // alert("Roberto comprate el helado heladovich");
    //     }
    //     else if (dineroRoberto >= 1.8 & dineroRoberto <2.9){
    //         alert("Roberto comprate el helado de helardo");
    //     }
    //     else if (dineroRoberto>= 2.9 & dineroRoberto < 5){
    //         alert("Roberto comprate el helado de confites o el pote de 1/4 kg ");
    //     }
    //     else {
    //  alert(" lo siento pobre de mrd no te alcanza para ningun helado");
    //     }


        // if (dineroPedro>=0.6 & dineroPedro<1){
        //     alert("Pedro Comprate el helado de agua");
        // }    else if (dineroPedro>=1 & dineroPedro < 1.6){
        // alert("Pedro comprate el helado de crema");
        // }                                                                                                                                                                  
        //     else if (dineroPedro >= 1.6 & dineroPedro <1.7){
        //         alert("Pedro comprate el helado heladix");
        //     }
        //     else if (dineroPedro >=1.7 & dineroPedro < 1.8){
        // alert("Pedro comprate el helado heladovich");
        //     }
        //     else if (dineroPedro>= 1.8 & dineroPedro <2.9){
        //         alert("Pedro comprate el helado de helardo");
        //     }
        //     else if (dineroPedro>= 2.9 & dineroPedro < 5){
        //         alert("Pedro comprate el helado de confites o el pote de 1/4 kg ");
        //     }
        //     else {
        //  alert(" lo siento pobre de mrd no te alcanza para ningun helado");
        //     }
//creando filtrado de busqueda

table=document.getElementById("table");
inputSearch=document.getElementById("input-search");
contentSearch=document.getElementById("content-search");

// var buscador = $(table).DataTable();

// $(inputSearch).keyup(function(){
//     buscador.search($(this).val()).draw();

//     if($(inputSearch).val()== ""){
//         $(contentSearch).fadeOut();
//     } else {
//         $(contentSearch).fadeIn();
//     }
// })

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    Li=box_search.getElementsBytagName("Li");

//recorriendo elementos a filtrar mediante los "Li"
for(i=0;i<Li.length;i++){
    a=Li[i].getElementsBytagName("a")[0];
    textValue=a.textContent||a.innerText;   
    if(textValue.toUpperCase().indexOf(filter)>-1)
    {
        Li[i].style.display="";
        box_search.style.display="block";
        if(inputSearch.value===""){
            box_search.style.display = "none";
        }
    }else{
        Li[i].style.display="none";
    }
}
}
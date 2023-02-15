'use strict'
// parametro de REST --> ...      !!!  SPREAD --> ...

function listadoFrutas(fruta1, fruta2, ...resto_fruta){
    console.log("fruta 1-.", fruta1);
    console.log("fruta 2-.", fruta2);
    console.log(resto_fruta)
;   
}

listadoFrutas("Naranja", "Manazana", "platano")
//spred
var frutas = ['Naranja','manzana']
listadoFrutas(...frutas, "Naranja", "Manazana", "platano")
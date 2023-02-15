'use strict'
// funcione anonimas

// Es una funcion que no tienen nombre



//var pelicula = function(nombre){
//    return "La pelicula es :"+nombre;
//}



// collback funcion dentro d eotra 

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5,7, function(dato){
    console.loh("La suma es ", dato);
},
function(dato){
    console.log("la suma por dos es:" , (dato*2));
});
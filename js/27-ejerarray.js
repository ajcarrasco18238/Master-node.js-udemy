'use strict'

/*
1- Ptrograma que pida 6 numero por pantalla y lo meta en un array
2- Mostrar el array con todo sus elemtnso en el cuerpo d ela pagina y en la consola
3- Sacar todo ordeando y mostrarlo
4- Invertit su orden y mostrarlo
5- Mostrar cuandtos elemtnso tienne el array
6- Hacer busqueda d eun valor introducico por el usuario y si esta y su posicion->indice

*/
// funcion del ejejrcio 3

function mostrararray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");        
    });
    document.write("</ul>");


};




//1- Ptrograma que pida 6 numero por pantalla y lo meta en un array
 
 var numeros = [];
 for(var i = 0; i <= 5; i++){  // Para que llegue a 6 se añañde < --> =
    numeros[i] = parseInt(prompt("Introduce un numero", 0));

 }

 console.log(numeros);

// 2- Mostrar el array con todo sus elemtnso en el cuerpo d ela pagina y en la consola

document.write("<h1>Contenido del array</h1>");

numeros.forEach((elemento, index) => {
    document.write("<strong>"+elemento+"</strong></br>");
});

// 3- Sacar todo ordeando y mostrarlo

numeros.sort();
// ordeanda numeico ascendente y descendente seroa b-a
numeros.sort(function(a, b){return a-b});

console.log(numeros);

mostrararray(numeros, 'Ordenados');

// 4- Invertit su orden y mostrarlo
numeros.reverse();
mostrararray(numeros, 'revertido');


// 5- Mostrar cuandtos elemtnso tienne el array

document.write("<h1>El array tiene "+ numeros.length + "elementos")

//6- Hacer busqueda d eun valor introducico por el usuario y si esta y su posicion->indice

var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numeros => numeros == busqueda);

if(posicion && posicion != -1){
    
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posición de la busqueda" +posicion+"</h1>");
}else{
    document.write("<hr/><h1>No encontrado</h1>");
};


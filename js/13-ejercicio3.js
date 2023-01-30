'use strict'
// ejercicio3

/* 
hacer un programa que muetsre todo los numero entre dos nuemro introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primero",0));
var numero2 = parseInt(prompt("Introduce el segundo",0));

// con bucle for
document.write("<h2>Del "+numero1+"a"+numero2+ "Estan esto numeros</h2>");
for(var i = numero1; i <= numero2; i++){
    document.write(i+ "<br>");
}
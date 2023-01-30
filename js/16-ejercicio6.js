'use strict'
// ejercicio6

/* 
si un nuemroe s par o impar
1-ventan prompt
2-tiej que comprobar si el numero es valido y pedir d nuevo si no lo es
3- mostar si el n umero es par oimpar
*/

var number = parseInt(prompt("Introduce el numero",0));

while(isNaN(number)){
    var number = parseInt(prompt("Introduce el numero",0));   
}

if(number % 2 == 0){
    alert("es par");
}else{
    alert("es impar")
}
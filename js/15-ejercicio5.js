'use strict'
// ejercicio5

/*
mostrar todos los numero divisore de un numero introducido en un prompt

*/

var numero = parseInt(prompt("mete el numnero",1));

for(var i = 1; i <= numero; i++){
    if(numero%i == 0){
        console.log("Divisor: "+ i);
    }
    
}


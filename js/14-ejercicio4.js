'use strict'
// ejercicio4

/*  
Mostrar todos los numeros impare de todos lo numero introducido x teclado popr los usuarios en el rango del primero al segundo

*/

var numero1 = parseInt(prompt("primero",0));
var numero2 = parseInt(prompt("segundo",0));

//recorrer y mostra con while

while(numero1 < numero2){
    //incrememto
    numero1++;
    //comprobamos si es impar
    if(numero1%2 != 0){
                console.log("El numero " +numero1+ "es Impar");
    };
}
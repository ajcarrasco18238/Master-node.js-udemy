'use strict'
// ejercicio1
/*  
programa que piuda 2 numero y que nos diga cual es el mayor,el menor y si son iguales
PLus: si lo numero no son numero o son menore o iguales a 0 que nos vuelva  apedir meter los datos para ello uso while para evaluarlo
*/

var numero1 = parseInt(prompt('Introduce el primer numero',0));
    var numero2 = parseInt(prompt('Introduce el segundo numero',0));



while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer numero',0));
    numero2 = parseInt(prompt('Introduce el segundo numero',0));
}

if (numero1 == numero2){
    alert("son iguales");

}else if(numero1 > numero2){
    alert("el numero mayor es: " + numero1);
    alert("el numero menor es. " + numero2);

}else if(numero2 > numero1){
    alert("El numero mayor es: " + numero2);
    alert("El numero menor es: " + numero1);

}else{
    alert("Introduce un numero correcto");
}
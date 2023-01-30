'use strict'
// ejercicio8
//calculadora

/*

que pida dos numero por pantalla si metemos uno masl no los vuelva  apedir
en el cuerpo de la pagina body en una alerta y por la consola el resultado de sumar,restar,multiplicar y dividir esa dos cifra nateriores.
*/

var numero1 = parseInt(prompt("Inserta valor 1",0));
var numero2 = parseInt(prompt("Inserta valor 2",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Inserta valor 1",0));
    numero2 = parseInt(prompt("Inserta valor 2",0));
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+ 
                "La resta es: "+(numero1-numero2)+" <br/>"+
                "La multiplicación es: "+(numero1*numero2)+" <br/>"+
                "La division es: "+(numero1/numero2)+" <br/>";
var resultado_alerta = "La suma es: "+(numero1+numero2)+" \n"+ 
                "La resta es: "+(numero1-numero2)+" \n"+
                "La multiplicación es: "+(numero1*numero2)+" \n"+
                "La division es: "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultado_alerta);
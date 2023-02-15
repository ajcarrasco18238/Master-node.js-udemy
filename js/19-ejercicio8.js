'use strict'
// Funciones
//agrupacion reutilizable de un conjunto de intrucciones
// parametros--> (numero1, numero2)
//parametro opciones --> mostrar= false y juego con if

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == true){
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multiplicar: "+ (numero1*numero2));
    console.log("Divicion: "+ (numero1/numero2));
    }else{
        // si no se cumple lo mutres en la web no en consola
        document.write("Suma: "+ (numero1+numero2)+"<br/>");
        document.write("Resta: "+ (numero1-numero2)+"<br/>");
        document.write("Multiplicar: "+ (numero1*numero2)+"<br/>");
        document.write("Divicion: " + (numero1/numero2)+"<br/>");
    }
}


calculadora(10, 12, false);
'use strict'
// operadores logicos

// negacion
var year = 2018;

if(year != 2016){
    console.log("El año no es 2016 es "+ year);
}

// AND

if(year >= 2000 && year <= 2020){
    console.log("estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna")
}

// OR

if(year == 2018 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");

}else{
    console.log("Año no registrado");
}


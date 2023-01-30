'use strict'
// ejercicio7

/*  
tabla de multiplicar d eun umero introducido ppor pantalla

*/

var numero = parseInt(prompt("¿De que numero quiere la tabla?",1));
document.write("<h1>La tabla de "+numero+"</h1><br/>");
for(var i = 1; i <= 10; i++){
    document.write(i+"x "+numero+"="+(i*numero)+"<br/>");

}


//toda las tablas seria con for
for(var c = 1; c <= 10 ; c++){
    document.write("<h1>La tabla del "+c+"</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");

    }
}


'use strict'

//areglos ,matrices ....



var nombres = ["Antonio" , "Manuel", "Jose"];
 // indices        0       1       2

var lenguajes = new Array("php" , "JS" , "Go" , "java", "C++", "C#");

/*
var elemento = parseInt(prompt("Que elelemnto del array quieres?", 0));
if(elemento >= nombres.length){
    alert("pon el correcto meno que " + nombres.length);

}else{
    alert("el usuario selelcionado es " +nombres[elemento]);

}

*/

// recorrer todo los elementos
/*
document.write("<h1>lenguaje de programacion de 2018</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
*/

// foreach la ams limpia
/*
document.write("<h1>lenguaje de programacion </h1>");
lenguajes.forEach((elemento, indices)=>{
  
    document.write("<li>"+ indices +" - " +elemento+"</li>");
});
*/


// Busquedas

/*
var busqueda = lenguajes.find(lenguajes => lenguajes == "php");

console.log(busqueda);
*/
// Busquedas con index muestra indice en el que s emuestra este casos eria 0

/*
var busqueda = lenguajes.findIndex(lenguajes => lenguajes == "php");

console.log(busqueda);
*/

// busqiueda de que ellementos hay igual o mauyores a 20 tru si cumple la condicion

var precios = [10, 20, 50, 80, 12];

var busqueda = lenguajes.some(precios => precios >= "20");

console.log(busqueda);
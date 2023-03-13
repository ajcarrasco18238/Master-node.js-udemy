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

document.write("<h1>lenguaje de programacion </h1>");
lenguajes.forEach((elemento, indices)=>{
  
    document.write("<li>"+ indices +" - " +elemento+"</li>");
});



'use strict'

// arrays multi arrays dentro d eotros

var categorias = ['Accion', 'terror', 'comedia'];
var peliculas = ['La verda duele ', 'la vida es bella', 'gran torino'];



var cine = [categorias, peliculas];

/*
// ordeand peliculas orden alfabetico

peliculas.sort();
console.log(peliculas);
*/

// ordeand peliculas dar la vuelta

peliculas.reverse();
console.log(peliculas);

//console.log(cine[0][1]);
//console.log(cine[1][2]);




// operacion con array
/*
var elemento = " ";
do{
    elemento = prompt("Intrucde tu pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");
peliculas.pop(); // elimino el ultimo elelmeto del array este seria ACABAR
// peliculas[0]  = undefined // con esto elimino una propiedad
console.log(peliculas);
*/
/*
// elimina indice
var indice = peliculas.indexOf('gran torino');
console.log(indice);
 
if(indice > -1){
    peliculas.splice(indice, 1)

}
*/
/*
//join convertir array a texto

var peliculas_string = peliculas.join();

console.log(peliculas_string);

*/
/*
//al reves con los espacios especificados

var peliculas_string = peliculas.join();
var cadena = "texto1, texto2";
var cadena_array = cadena.split(", ");
console.log(cadena_array);
*/


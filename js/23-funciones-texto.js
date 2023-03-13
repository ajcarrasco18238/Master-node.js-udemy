'use strict'

// propiedades o metodos --> transformacion de textos

var numero = 444;
var texto1 = " Welcome Antonio Welcome,estoy con el curso de Antonio de java";
var texto2 = "Thanks You"

var dato = numero.toString(); //numero se pasa a string
    dato = texto1.toUpperCase(); //convierto a Mayucula
    dato = texto1.toLocaleLowerCase();//minusculas

console.log(dato);


//calcular longitud de un texto

var nombre = "Antonio"; // cuento palabras
var nombre = ["hola", "hola0"] // cuento elementos
console.log(nombre.length);

// concatenar - unir textos

var textototal = texto1+" "+texto2;
console.log(textototal);

var textototal0 = texto1.concat(" "+texto2)
console.log(textototal0);

// buscar si existe una palbra

var buscar = texto1.indexOf("Welcome")
console.log(buscar);

// ultima coincidencia 
var buscar0 = texto1.lastIndexOf("Welcome")
console.log(buscar0);

//otro de buscar
var buscar1 = texto1.search("Welcome")
console.log(buscar1);

//buscar con arrays

var buscar1 = texto1.match("Antonio")
console.log(buscar1);

// busqueda global

var buscar1 = texto1.match(/Welcome/g);
console.log(buscar1);

// un trozo d un string

var buscar1 = texto1.substr(5,12);
console.log(buscar1);

//sacar una letra en concreto

var buscar1 = texto1.charAt(0);
console.log(buscar1);

// buscar texto especifico

var buscar1 = texto1.startsWith("Welcome"); // si existe true solo para el principio
console.log(buscar1);

// buscar en el final

var buscar1 = texto1.endsWith("java");// para el final si esta true
console.log(buscar1);

// para buscar en trozo de texto

var buscar1 = texto1.includes("Antonio");// si existe true
console.log(buscar1);

// reemplazar texto

var buscar1 = texto1.replace("Antonio","Carrasco");
console.log(buscar1);

// string aparti del caracter indicado omito hacia taras lo que aya

var buscar1 = texto1.slice(5);
console.log(buscar1);

// mismo que anterio con con antes y depsues

var buscar1 = texto1.slice(5,15);
console.log(buscar1);

// cortar palabra y merta en un array para usarlo  todo lo que aya

var buscar1 = texto1.split();
console.log(buscar1);

// array separar x espacios

var buscar1 = texto1.split(" ");
console.log(buscar1);

// recortar o quitar espacio x delante o x dtrras

var buscar1 = texto1.trim();
console.log(buscar1);
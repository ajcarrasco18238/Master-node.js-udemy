'use strict'

// plantilla de texto

var nombre = prompt("Mete nombre");
var apellidos = prompt("Mete apellidos");

//var texto = " Mi nombre es: " +nombre+ " Mis apellidos son " +apellidos ;

var texto = `
    <h1>hola que tal </h1>
    <h2>mi nombre es : ${nombre}</h2>
    <h2>mi apellidos es : ${apellidos} </h2>
`;
    

document.write(texto);
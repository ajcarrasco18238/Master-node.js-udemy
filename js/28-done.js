'use strict'

// DOM documento object model

function cambiarcolor(color){
    caja.style.background = color;
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");


caja.innerHTML = "¿Texto caja desde JS?"
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "blue";
caja.classNamem  = "Hola";

console.log(caja);
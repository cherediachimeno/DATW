// quiero traerme aquí las variables de variables.js
// y también als funciones de sumar.js y de restar.js
// qué hago??
// 1º Necesito decirle a la máquina qué elementos puedo traerme
// es decir, qué elementos exportar (por ejemplo, la función de suma)
// lo realizamos con el module.exports en cada uno de los archivos que me interesen.

// 2º Una vez que sé que elementos exportar, necesito importarlos. Traerlos a este archivo.

let funciones = require("./sumar.js");
let sumar = funciones.sumar;
let dividir = funciones.dividir;
console.log(sumar(3, 3));

let funcionRestar = require("./restar.js");

let variables = require("./variables.js");
/*
console.log(funcionSumar(4, 4));
console.log(funcionRestar(10, 10)); */

console.log(funciones.sumar(10, 10));

let resultado = funciones.sumar(5, 5); // 10
console.log("el resultado es " + resultado);
console.log(funciones.dividir(3, 3));

// TRES TIPOS DE FUNCIONES.

// FUNCIONES SIN PARÁMETROS Y QUE NO DEVUELVEN NADA.
/*
let afk = prompt("estás por aquí?");
afk = afk.toLowerCase();

if (afk == "si" || afk == "sí") {
  saludar();
} else {
  enfadarse();
}

function saludar() {
  alert("hola!!");
}

function enfadarse() {
  alert("pues muy mal");
}*/

// FUNCIONES SIN PARÁMETROS QUE DEVUELVEN DATOS
/*
let tienesCarnet = prompt("tienes carnet de conducir?");
let coche;
let tieneCoche;

switch (tienesCarnet) {
  case "si":
    tieneCoche = conCarnet(); // 1ºpaso. Mete en la variable tieneCoche el valor que
    //devuelve la función conCarnet() (el valor con el return)
    // 2ºpaso. Ejecuta toda la función.
    break;
  case "no":
    sinCarnet();
    break;
}

console.log(tieneCoche);

function conCarnet() {
  let preguntar = prompt("vale, tienes carnet. Pero tienes coche?");
  if (preguntar == "si") {
    let coche = true;
  } else {
    coche = false;
  }

  return coche;
}

*/
/*
console.log(calcular());

function calcular() {
  let num1 = 10;
  let num2 = 50;

  let media = (num1 + num2) / 2;
  let aviso = `La media es ${media}`;

  return media;
} */

// FUNCIONES CON PARÁMETROS (PUEDEN DEVOLVER O NO);

let rescate;
console.log(suma(3, 3));
console.log(rescate);
let();

function suma(x, y) {
  rescate = x;
  return x + y;
}

function let() {
  alert("hola");
}
/*

function suma(x, y, z) {
  rescate = x;
  return x + y + z;
}

function suma(x, y, z, i) {
  return x + y + z + i;
}

function resta(x, y) {
  return x - y;
} */

// CÓDIGO SIN FUNCIONES
/*
let manga1 = 16.95;
let manga2 = 9.95;
let consola1 = 299.95;
let consola2 = 649.95;
let televisor = 699.95;
let videojuego1 = 69.95;
let videojuego2 = 49.95;

let gastosEnvio = 4.95;

// CÓDIGO SIN FUNCIONES

/* 
// PRIMER CLIENTE.
let total = manga1 + manga2 + videojuego1;

let respuesta = prompt("¿Quieres que te lo mandemos a casa?");
respuesta = respuesta.toLowerCase().trim();

if (respuesta === "si" || respuesta === "sí") {
  total = total + gastosEnvio;
  console.log(`el total del cliente 1 con portes es de ${total}`);
} else {
  console.log(`el total del cliente 1 es de ${total}`);
}

// SEGUNDO CLIENTE
total = consola1 + videojuego1;

respuesta = prompt("¿Quieres que te lo mandemos a casa?");
respuesta = respuesta.toLowerCase().trim();

if (respuesta === "si" || respuesta === "sí") {
  total = total + gastosEnvio;
  console.log(`el total del cliente 2 con portes es de ${total}`);
} else {
  console.log(`el total del cliente 2 es de ${total}`);
}

// TERCER CLIENTE
total = consola1 + videojuego1;

respuesta = prompt("¿Quieres que te lo mandemos a casa?");
respuesta = respuesta.toLowerCase().trim();

if (respuesta === "si" || respuesta === "sí") {
  total = total + gastosEnvio;
  console.log(`el total del cliente 2 con portes es de ${total}`);
} else {
  console.log(`el total del cliente 2 es de ${total}`);
}

// CUARTO CLIENTE
total = consola1 + videojuego1;

respuesta = prompt("¿Quieres que te lo mandemos a casa?");
respuesta = respuesta.toLowerCase().trim();

if (respuesta === "si" || respuesta === "sí") {
  total = total + gastosEnvio;
  console.log(`el total del cliente 2 con portes es de ${total}`);
} else {
  console.log(`el total del cliente 2 es de ${total}`);
}
*/

// CÓDIGO CON FUNCIONES

//1º PARTE - VARIABLES
//productos
let manga1 = 16.95;
let manga2 = 9.95;
let consola1 = 299.95;
let consola2 = 649.95;
let televisor = 699.95;
let videojuego1 = 69.95;
let videojuego2 = 49.95;
// portes
let gastosEnvio = 4.95;
// otras variables
let nombre;
let cliente;

// 2º PARTE - DESARROLLO PROGRAMA

let total = televisor + manga2;
desarrolloPrograma();
total = manga1 + manga2;
desarrolloPrograma();

// 3º PARTE - FUNCIONES

function desarrolloPrograma() {
  saludar();
  calculo();
}

function saludar() {
  cliente = prompt("cómo te llamas. Bienvenido");
}

function calculo() {
  console.log(`el total de la compra es de ${total}`);
  respuesta = prompt("¿Quieres que te lo mandemos a casa?");
  respuesta = respuesta.toLowerCase().trim();
  if (respuesta === "si" || respuesta === "sí") {
    total = total + gastosEnvio;
    console.log(`el total de ${cliente} con portes es de ${total}`);
  } else {
    console.log(`el total de ${cliente} es de ${total}`);
  }
}

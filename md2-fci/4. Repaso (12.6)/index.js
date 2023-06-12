// Levantar y hacer funcionar el servidor

const express = require("express"); // importas express
const app = express(); // ejecutas las funcionalidades de express
// Otras líneas de código vinculadas con el servidor
// Uso de una carpeta estática llamada public
app.use(express.static("public"));
// Uso de json y capacidad de enviar info por body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Líneas de código útiles, tipo declaración variables, importaciones...

const lista = require("./array");

// Diseñando rutas

app.get("/lista/print", (req, res) => {
  let frontend = `<div id="print" style="display: flex; flex-wrap: wrap">`;
  for (let i = 0; i < lista.length; i++) {
    frontend += `
    <div class="card" style="width: 10%; border: 2px black solid; margin: 5px; text-align: center">
    <h1>${lista[i].nombre}</h1>
    <p>${lista[i].funcionalidad}</p>
    <p>${lista[i].caracteristicas}</p>
    </div>`;
  }
  frontend += `</div>`;
  res.send(frontend);
});

app.get("/lista", (req, res) => {
  res.send(lista);
});

app.post("/lista", (req, res) => {
  let objetoNuevo = {
    nombre: req.body.nombre,
    funcionalidad: req.body.funcionalidad,
    caracteristicas: req.body.caracteristicas,
  };

  lista.push(objetoNuevo);

  let frontend = `<div id="print" style="display: flex; flex-wrap: wrap">`;
  for (let i = 0; i < lista.length; i++) {
    frontend += `
    <div class="card" style="width: 10%; border: 2px black solid; margin: 5px; text-align: center">
    <h1>${lista[i].nombre}</h1>
    <p>${lista[i].funcionalidad}</p>
    <p>${lista[i].caracteristicas}</p>
    </div>`;
  }
  frontend += `</div>`;
  res.send(frontend);
});

app.get("/contacto/:about", (req, res) => {
  let parametro = req.params.about;
  res.send(`<h1>Hola ${parametro}</h1>`);
});

app.get("/query", (req, res) => {
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;
  res.send(`<h1>Hola ${nombre} ${apellido}</h1>`);
});

// Uso del puerto

app.listen(3000);

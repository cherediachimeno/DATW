const express = require("express");
const app = express();
app.use(express.static("public")); // los ficheros estáticos están en public

const lista = require("./array"); // Cristopher, Jocelyn, Gerard

app.get("/personas", (req, res) => {
  let print = `<ul>`;
  for (let i = 0; i < lista.length; i++) {
    print += `<li>${lista[i]}</li>`;
  }
  print += `</ul>`;
  res.send(print);
});

app.get("/personas/:seleccionado", (req, res) => {
  let eleccion = req.params.seleccionado;
  if (lista.indexOf(eleccion) == -1) {
    console.log(lista.indexOf(eleccion));
    res.send(`la persona no está en el array`);
  } else {
    console.log(lista.indexOf(eleccion));
    res.send(`${eleccion} está en el array`);
  }
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/calculo", (req, res) => {
  let nombre = req.query.name;
  let anyo = req.query.anyo;

  let calculo = 2023 - anyo;
  res.send(`<h2>Hola ${nombre} tienes ${calculo} años</h2>`);
});

app.listen(3000);

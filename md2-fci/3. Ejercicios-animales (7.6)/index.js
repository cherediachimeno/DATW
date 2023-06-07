const express = require("express");
const app = express();
const lista = require("./array");

app.get("/", (req, res) => {
  let print = `<div style="display: flex; flex-wrap: wrap">`;
  for (let i = 0; i < lista.length; i++) {
    print += `<div style="background-color: aquamarine; text-align: center; border: 2px black solid; margin: 5px; width: 30%">
    <p>${lista[i].nombre}</p>
    <p>${lista[i].edad}</p>
    <p>${lista[i].tipo}</p></div>`;
  }
  print += `</div>
  <h3>Añade un animal</h3>
  <form action="/sumar-animal">
        Nombre <input type="text" name="name">
        <br>
        Edad <input type="number" name="edad">
        <br>
        Tipo <input type="text" name="tipo">
        <button type="submit">Enviar</button>
    </form>
  `;
  res.send(print);
});

// 3º PARTE -  DEFINIR AQUÍ RUTA FORMULARIOS (/form , /dejar-animal, como queráis),
// en ella habrá un formulario que, recogerá información, y la mandará a sumar-animal.
// y, 4º PARTE - Creamos otro formulario aquí dentro que nos servirá para borrar. Es decir
// yo introduzco "piolín" y si existe, me lo borra. Si no existe, me lo advierte.

app.get("/sumar-animal", (req, res) => {
  let objeto = {
    nombre: req.query.name,
    edad: req.query.edad,
    tipo: req.query.tipo,
  };
  lista.push(objeto);
  let print = `<form action="/">
  <button type="submit">Ver animales</button>
</form>`;

  res.send(print);
});

app.listen(3000);

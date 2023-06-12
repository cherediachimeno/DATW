mostrar();

function insertar() {
  let nombre = document.getElementById("nombre").value;
  let funciones = document.getElementById("funciones").value;
  let caracteristicas = document.getElementById("caracteristicas").value;

  let nuevoObjeto = {
    nombre: nombre,
    funcionalidad: funciones,
    caracteristicas: caracteristicas,
  };

  fetch("/lista", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoObjeto),
  });
  mostrar();
}

function mostrar() {
  fetch("/lista", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      let frontend = `<div id="print" style="display: flex; flex-wrap: wrap">`;
      for (let i = 0; i < datos.length; i++) {
        frontend += `
        <div class="card" style="width: 15%; border: 2px black solid; margin: 5px; text-align: center">
        <h1>${datos[i].nombre}</h1>
        <p>${datos[i].funcionalidad}</p>
        <p>${datos[i].caracteristicas}</p>
        </div>`;
      }
      frontend += `</div>`;
      document.getElementById("print").innerHTML = frontend;
    });
}

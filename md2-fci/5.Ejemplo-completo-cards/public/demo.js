mostrar();

function insertar() {
  let objeto = {
    nombre: document.getElementById("nombre").value,
    funcionalidad: document.getElementById("funciones").value,
    caracteristicas: document.getElementById("caracteristicas").value,
  };

  console.log(objeto.funcionalidad);

  fetch("/lista", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objeto),
  });
  mostrar();
}

function editar() {
  let nuevo = {
    nombre: document.getElementById("nombreEditar").value,
    funcionalidad: document.getElementById("funcionesEditar").value,
    caracteristicas: document.getElementById("caracteristicasEditar").value,
  };

  fetch("/lista", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo),
  });
  mostrar();
}

function borrar() {
  let nuevo = {
    nombre: document.getElementById("nombreBorrar").value,
  };

  console.log(nuevo.nombre);

  fetch("/lista", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo),
  });

  mostrar();
}

function borrarCard() {
  let nuevo = {
    nombre: document.getElementById("cardBorrar").value,
  };

  console.log(nuevo.nombre);

  fetch("/lista", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo),
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
        <input type="hidden" id="cardBorrar" name="cardBorrar" value="${datos[i].nombre}">
        <button onclick="borrarCard()">Borrar</button>
        </div>`;
      }
      frontend += `</div>`;
      document.getElementById("print").innerHTML = frontend;
    });
}

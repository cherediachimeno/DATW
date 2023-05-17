let listaPlanetas = []; // un array de objetos.
let nombre;
let seleccion;
let planeta;
let residentes;
let habitantes;

fetch("https://swapi.dev/api/planets/")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerDatos(data) {
    for (let i = 0; i < data.results.length; i++) {
      nombre = data.results[i].name;
      listaPlanetas[i] = data.results[i];
      document.getElementById(
        "seleccionPlaneta"
      ).innerHTML += `<option value=${i}>${nombre}</option>`;
    }
    lista2();
  });

function lista2() {
  fetch("https://swapi.dev/api/planets/?page=2")
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function cogerDatos(data) {
      for (let i = 0; i < data.results.length; i++) {
        nombre = data.results[i].name;
        listaPlanetas[i + 10] = data.results[i];
        document.getElementById(
          "seleccionPlaneta"
        ).innerHTML += `<option value=${i + 10}>${nombre}</option>`;
      }
    });
}

function buscarPlaneta() {
  seleccion = document.getElementById("seleccionPlaneta").value;
  planeta = listaPlanetas[seleccion];
  mostrarInfo(planeta);
}

function mostrarInfo(planeta) {
  // OPCIÓN RESIDENTES
  /*
  residentes = planeta.residents;
  if (residentes.length == 0) {
    document.getElementById(
      "print"
    ).innerHTML = `<h3>No residen personajes en este planeta</h3>`;
  } else {
    document.getElementById(
      "print"
    ).innerHTML = `<h3>Los personajes del planeta ${planeta.name} son:</h3>`;
    document.getElementById("print").innerHTML += `<ul id="lista"></ul>`;
    for (let i = 0; i < residentes.length; i++) {
      fetch(residentes[i])
        .then(function cogerRespuesta(respuesta) {
          return respuesta.json();
        })
        .then(function cogerDatos(data) {
          console.log(data);
          document.getElementById("lista").innerHTML += `<li>${data.name}</li>`;
        });
    }
  } */
  // OPCIÓN HABITANTES;
  /*
  habitantes = planeta.population;
  console.log(habitantes);
  document.getElementById("print").innerHTML = `<p>${habitantes}</p>`;*/
}

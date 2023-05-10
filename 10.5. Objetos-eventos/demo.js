let sistemaSolar = {
  mercurio: {
    nombre: "mercurio",
    color: "gris",
    fondo: "grey",
    temperatura: 350,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
  },
  venus: {
    nombre: "venus",
    color: "blanco",
    fondo: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  tierra: {
    nombre: "tierra",
    color: "morado",
    fondo: "purple",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  marte: {
    nombre: "marte",
    color: "rojo",
    fondo: "red",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  jupiter: {
    nombre: "jupiter",
    color: "marrón",
    fondo: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  saturno: {
    nombre: "saturno",
    color: "amarillo",
    fondo: "yellow",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  urano: {
    nombre: "urano",
    color: "azul",
    fondo: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  neptuno: {
    nombre: "neptuno",
    color: "azul",
    fondo: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  pluton: {
    nombre: "plutón",
    color: "blanco",
    fondo: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
};

let planeta1;
let planeta2;
let planeta3;

function guardarPlanetas() {
  planeta1 = document.getElementById("planeta1").value;
  planeta2 = document.getElementById("planeta2").value;
  planeta3 = document.getElementById("planeta3").value;

  comprobacion();
}

function comprobacion() {
  // COMPROBAR SI EXISTEN Y SI FALLA ALGUNO SALTA ERROR

  // UNA VEZ COMPROBADO, IF PARA IMPRIMIR

  if (sistemaSolar[planeta1]) {
    document.getElementById(
      "planetas"
    ).innerHTML += `<div id="ficha1" class="box"> <h2 class="titulos">Datos del planeta</h2>
    <h1>${sistemaSolar[planeta1].nombre}</h1>
    <img src=${sistemaSolar[planeta1].imagen} style="width: 200px; height: 200px"/>
    <p>color: ${sistemaSolar[planeta1].color}</p>
    <button onclick="document.getElementById('ficha1').style.backgroundColor='${sistemaSolar[planeta1].fondo}'">
    Fondo
    </button>
    </div>`;
  }

  if (sistemaSolar[planeta2]) {
    document.getElementById(
      "planetas"
    ).innerHTML += `<div id="ficha2" class="box"> <h2 class="titulos">Datos del planeta</h2>
    <h1>${sistemaSolar[planeta2].nombre}</h1>
    <img src=${sistemaSolar[planeta2].imagen} style="width: 200px; height: 200px"/>
    <p>color: ${sistemaSolar[planeta2].color}</p>
    <button onclick="document.getElementById('ficha2').style.backgroundColor='${sistemaSolar[planeta2].fondo}'">
    Fondo
    </button>
    </div>`;
  }

  if (sistemaSolar[planeta3]) {
    document.getElementById(
      "planetas"
    ).innerHTML += `<div id="ficha3" class="box"> <h2 class="titulos">Datos del planeta</h2>
    <h1>${sistemaSolar[planeta3].nombre}</h1>
    <img src=${sistemaSolar[planeta3].imagen} style="width: 200px; height: 200px"/>
    <p>color: ${sistemaSolar[planeta3].color}</p>
    <button onclick="document.getElementById('ficha3').style.backgroundColor='${sistemaSolar[planeta3].fondo}'">
    Fondo
    </button>
    </div>`;
  }
}

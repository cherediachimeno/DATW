class Telefono {
  memoria;
  cobertura;
  color;
  marca;
  modelo;

  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  llamar() {
    alert("llamando");
  }

  encender() {
    alert("encendiendo");
  }
}

class Iphone extends Telefono {
  constructor() {
    super("iphone", 10);
  }

  llamar() {
    alert("llamando desde iphone");
  }
}

class Android extends Telefono {
  constructor() {
    super("Android", 12);
  }

  llamar() {
    alert("llamando desde android");
  }
}

let comprar = prompt("que quieres un android o un ihpone");
let telefonoNuevo;

switch (comprar) {
  case "Android":
    telefonoNuevo = new Android();
    break;
  case "Iphone":
    telefonoNuevo = new Iphone();
    break;
}

telefonoNuevo.llamar();

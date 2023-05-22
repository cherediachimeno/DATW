class Gato {
  edad;
  nombre;
  raza;
  energia = 100;
  nivelDiversion = 0;

  // Cuando registre al gato, le voy a pedir
  // al usuario que me de nombre, raza y edad
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  jugar() {
    console.log(`${this.nombre} está jugando`);
    this.nivelDiversion += 30;
    this.energia -= 20;
    if (this.nivelDiversion >= 30) {
      this.maullar();
    }
  }

  alimentar() {
    console.log(`alimentando a ${this.nombre}`);
    this.energia += 30;
    this.nivelDiversion += 10;
  }

  dormir() {
    console.log(`${this.nombre} duerme`);
    this.energia += 40;
    this.nivelDiversion -= 40;
  }

  maullar() {
    alert("el gato maulla");
  }
}

let interaccion;

// gato creado por el programador
let miGato = new Gato("Mauricio", "siamés", 6);

// gato creado a partir del usuario
let nombreGato = prompt("dime nombre del gato");
let razaGato = prompt("dime raza del gato");
let edadGato = prompt("dime edad del gato");

let gatoUsuario = new Gato(nombreGato, razaGato, edadGato);
alert(`el gato del usuario tiene estas características: 
    nombre:  ${gatoUsuario.nombre}
    edad:  ${gatoUsuario.edad}
    raza: ${gatoUsuario.raza}
`);

let decision = prompt("dime con qué gato quieres interactuar");

switch (decision) {
  case "miGato":
    interaccion = prompt("qué quieres hacer?");
    if (interaccion == "jugar") {
      miGato.jugar();
      alert(`el gato  tiene estas características: 
        energía:  ${miGato.energia}
        nivel diversión:  ${miGato.nivelDiversion}
`);
    }
    break;
  case "gatoUsuario":
    interaccion = prompt("qué quieres hacer?");
    if (interaccion == "jugar") {
      gatoUsuario.jugar();
      alert(`el gato del usuario tiene estas características: 
        energía:  ${gatoUsuario.energia}
        nivel diversión:  ${gatoUsuario.nivelDiversion}
`);
    }
    break;
}

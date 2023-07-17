import './App.css'
import React from "react";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const libreria = {

    usuario: {
      nombre: "Carlos",
      vip: false,
      imagen:
        "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg",
    },
  
    libros: [
      {
        id: "1",
        titulo: "El Juego de Ender",
        autor: "Orson Scott Card",
        editorial: "Ediciones B / Zeta",
        descripcion:
          "La Tierra está amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos.",
        img: "https://images-na.ssl-images-amazon.com/images/I/91fqbLUmU0L.jpg",
        stock: 25,
      },
      {
        id: "2",
        titulo: "Juego de tronos",
        autor: "George R. R. Martin",
        editorial: "Gigamesh",
        descripcion:
          "Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de una magia inmemorial y olvidada surgen en los rincones más sombrios y maravillosos, la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapará en sus fauces a los personajes... y al lector.",
        img: "https://imagessl4.casadellibro.com/a/l/t7/24/9788401032424.jpg",
        stock: 2,
      },
      {
        id: "3",
        titulo: "I robot",
        autor: "Isaac Asimov",
        editorial: "Edhasa",
        descripcion:
          "Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a sí mismos problemas de 'conducta humana'. Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentales de la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explican por errores de funcionamiento y otras por la creciente complejidad de los 'programas'. Las paradojas que se plantean en estos relatos futuristas no son sólo ingeniosos ejercicios intelectuales sino sobre todo una indagación sobre la situación del hombre actual en relación con los avances tecnológicos y con la experiencia del tiempo.",
        img: "https://imagessl0.casadellibro.com/a/l/t5/40/9788435021340.jpg",
        stock: 10,
      },
      {
        id: "4",
        titulo: "La vieja guardia",
        autor: "John Scalzi",
        editorial: "Minotauro",
        descripcion:
          "El día en que cumplen 75 años, 1.022 ancianos se enrolan en las Fuerzas de Defensa Coloniales. En el universo se está librando una guerra por los planetas todavía deshabitados. El ejercito está formado por ancianos a los que les dan cuerpos de jóvenes de veinte años, que deberán viajar a un lugar remoto e inhóspito donde lo único importante será luchar y tratar de sobrevivir, sin la posibilidad de regresar a la Tierra.",
        img: "https://imagessl3.casadellibro.com/a/l/t7/83/9788445000083.jpg",
        stock: 5,
      },
    ],
  };
  return (
    <div>
      <Header user={libreria.usuario}/>


      <Main libros={libreria.libros}/>


      <Footer libros={libreria.libros}/>
    </div>
  );
}


export default App;

import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Compositores from "./components/Compositores";
import EliminarCompositor from "./components/eliminarCompositor";
import Cabecera from "./components/cabecera";

function App() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [songs, setSongs] = useState("");

  const [compositores, setCompositores] = useState([
    {
      nombre: "Wolfgang Amadeus Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  function manageChange(e) {
    setText(e.target.value);
  }

  function manageChangeDate(e) {
    setDate(e.target.value);
  }

  function manageChangeSongs(e) {
    setSongs(e.target.value);
  }

  function anyadirCompositor() {
    const nuevoArray = [...compositores, { nombre: text, fecha: date, canciones: songs }];
    setCompositores(nuevoArray);
    setText("");
    setDate("");
    setSongs("");
  }

  function borrarCompositor(nombre) {
    const nuevoArray = compositores.filter(function (compositor) {
      if (compositor.nombre !== nombre) {
        return true;
      } else {
        return false;
      }
    });
    setCompositores(nuevoArray);
  }

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route
          exact path="/"
          element={
            <>
              <Compositores compositores={compositores} />
              <input type="text" value={text} onChange={manageChange} />
              <input type="text" value={date} onChange={manageChangeDate} />
              <input type="text" value={songs} onChange={manageChangeSongs} />
              <button onClick={anyadirCompositor}> Añadir </button>
            </>
          }
        />
        <Route
          exact path="/eliminar"
          element={<EliminarCompositor borrarCompositor={borrarCompositor} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
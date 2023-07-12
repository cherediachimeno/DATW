import './App.css'
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cabecera from "./components/Cabecera";
import Trenes from "./components/Trenes";
import Contacto from "./components/Contacto";

import { useState } from "react";

function App() {

  // función state global

  let [pasajeros, setPasajeros] = useState(0);

  function sumarPasajeros(){
    setPasajeros(pasajeros +1);
  }

  // return, nos devuelve esto:

  return (
    <BrowserRouter>
    <>
      <Cabecera />
      <section>
        <h2>Pasajeros que han subido al tren: <strong>{pasajeros}</strong></h2>
        <button onClick={sumarPasajeros}>Sumar pasajeros</button>
      </section>
      <Routes>
      <Route exact path="/inicio" element={<Trenes sumarPasajeros={sumarPasajeros} pasajeros={pasajeros} />}/>
      <Route exact path="/contacto" element={<Contacto />}/>
      </Routes>
      </>
    </BrowserRouter>
  );

}


export default App;

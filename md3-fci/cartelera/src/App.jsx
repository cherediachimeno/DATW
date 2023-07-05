import './App.css'
import videoclub from './videoclub';
import Cabecera from './components/Cabecera';
import Main from './components/Main';
import React from "react";

function App() {
 
  return (
    <>
    <Cabecera titulo="Videoclub del Barrio cuando aún existía" subtitulo="Estas NO son pelis del montón"/>
    <Main peliculas={videoclub.peliculas}/>
    </>
  )
}

export default App

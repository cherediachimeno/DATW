import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams, Link} from "react-router-dom";
import './App.css'

const App = () => {

  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  return (
    <BrowserRouter>
    <Routes>
    <Route
          exact path="/"
          element= {
            <>
            <input type="text" value={name} onChange={handleName}/>
            <Link to={`/state/${name}`}>Ir a la ruta concreta</Link>
            </>
          }>
      </Route>
    <Route
          exact path="/state/:nombre"
          element= {<State/>}>
      </Route>
      <Route
          exact path="/saludo/:nombre/:apellido"
          element= {<Saludo/>}>
      </Route>
      <Route
          exact path="/despedida/:nombre/:apellido"
          element= {<Despedida/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

const State = () => {
  const {nombre}= useParams();
  if (nombre == "Carlos" || nombre == "Alejandro") {
    return <div>Hola desde la ruta llamada State, estamos en el apartado de administración, te damos la bienvenida {nombre}</div>;
  } else {
      return <div>Hola desde la ruta clientes llamada State, bienvenid@ {nombre}</div>;
  }

};

const Saludo = () => {
  const {nombre, apellido}= useParams();
  return <div>Hola desde React {nombre} {apellido}</div>;
};

const Despedida = () => {
  const params = useParams();
  return <div>Adiós desde React {params.nombre} {params.apellido}</div>;
};



export default App

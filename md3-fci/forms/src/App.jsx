import { useState } from 'react'
import './App.css'

function App() {
  /*
  const [nombre, setNombre] = useState('Maba');

  function cambiarNombre(event){
    setNombre(event.target.value);
  }

  function borrarNombre(){
    setNombre("");
  }

  return (
    <>
      <p>Elemento del state: {nombre}</p>
      <input type="text" value={nombre} onChange={cambiarNombre}/>
      <button onClick={borrarNombre}>Borrar nombre</button>
    </>
  )*/

  const [array, setArray] = useState(["Harry Potter", "James Bond", "Son Goku"]);
  const [text, setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  } 
  
  const addArray = () => {
    setArray([...array, text]);
  }

  return (
    <>
        {array.map((personaje) => {return <p>{personaje}</p>})}
        <input type="text" value={text} onChange={handleText}/>
        <button onClick={addArray}>Añadir</button>
    </>
  )
}

export default App

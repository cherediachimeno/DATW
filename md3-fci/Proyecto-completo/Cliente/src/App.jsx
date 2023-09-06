import { useState } from 'react'
import './App.css'
import Books from './components/Books'
import CreateBooks from './components/CreateBooks'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>}></Route>
        <Route path="/create" element={<CreateBooks/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

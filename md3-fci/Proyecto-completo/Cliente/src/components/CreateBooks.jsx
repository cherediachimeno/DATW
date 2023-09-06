import React, {useState} from 'react';
import axios from 'axios';

function CreateBooks (){
    const [titulo, setTitulo] = useState();
    const [autor, setAutor] = useState();
    const [editorial, setEditorial] = useState();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createBooks", {titulo, autor, editorial})
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={Submit}>
            <h2>Añade tu libro preferido</h2>
            <div className="mb-2">
                <label htmlFor="">Título</label>
                <input type="text" placeholder="Título" className="form-control"
                onChange={(e) => setTitulo(e.target.value)}
                ></input> 
            </div>
            <div className="mb-2">
                <label htmlFor="">Autor</label>
                <input type="text" placeholder="Autor" className="form-control"    
                onChange={(e) => setAutor(e.target.value)}></input> 
            </div>
            <div className="mb-2">
                <label htmlFor="">Editorial</label>
                <input type="text" placeholder="Editorial" className="form-control"
                onChange={(e) => setEditorial(e.target.value)}></input> 
            </div>
            <button className="btn btn-success">Enviar</button>
          </form>
        </div>
    </div>
    )
}
export default CreateBooks;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Books (){
    const [books, setBook] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3001")
        .then(result=> setBook(result.data))
        .catch(err=> console.log(err));
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        axios.delete('/deleteBooks/'+id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className="btn btn-success">Add</Link>
            <table className='table'>
            <thead>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Editorial</th>
                <th>**</th>
            </thead>
            <tbody>
                {
                    books.map((book) => {
                        return <tr>
                            <td>{book.titulo}</td>
                            <td>{book.autor}</td>
                            <td>{book.editorial}</td>
                            <td><button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger" onClick={(e) => handleDelete(book._id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div>
    </div>
    )
}
export default Books;
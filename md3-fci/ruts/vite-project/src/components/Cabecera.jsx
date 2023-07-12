import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';



function Cabecera(){
    return(
        <header>
            <h1>Estación de tren</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/inicio">Trenes</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecera;
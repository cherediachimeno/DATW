import React from "react";
import { useState } from "react";

function Trenes(props){
    // ARRAY DE TRENES
    const trenes = [
        {
            nombre: "UT 447",
            capacidad: 270,
            velocidad: 120,
            servicios: "cercanías y regional",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/0/03/447_en_Vilajuiga.jpg"
        },
        {
            nombre: "UT 448R",
            capacidad: 230,
            velocidad: 160,
            servicios: "Regional",
            imagen: "https://www.trenscat.com/renfe/images/trens/448/P071218069.jpg"
        },
        {
            nombre: "Serie 102",
            capacidad: 318,
            velocidad: 330,
            servicios: "Alta velocidad",
            imagen: "http://www.trenscat.com/renfe/images/lleida/P050829001.jpg"
        }
    ];

    // CREAMOS UN STATE LOCAL (variable gente, función subirPasajeros)

    let [gente, subirPasajeros] = useState(0);

    // Función pasajeros, que me llama a subirPasajeros, pero lo impotante es que
    // usando props, sumamos SumarPasajeros (que es la función global, la que esta´en el app.jsx)

    // Es decir, usando un state local, al clicar, me va a actualizar el state global

    function pasajeros(){
        subirPasajeros(gente + 1);
        props.sumarPasajeros();

    }

    // Impresión por pantalla de un map del array trenes

    const trenesHTML = trenes.map(function (tren) {
        return(
            <div>
                <h1>{tren.nombre}</h1>
                <p>{tren.capacidad}</p>
                <p>{tren.servicios}</p>
                <img src={tren.imagen} alt="" />
                <br/>
                <button onClick={pasajeros}>Sumar pasajeros</button>
            </div>
        )
    })

    return(
        <>
        <section>{trenesHTML}</section>
        </>
    )
}

export default Trenes;
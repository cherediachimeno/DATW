import React from "react";

function MostrarPelicula(props){
    return(
        <div className="card">
            <img src={props.peli.cartel} alt="Foto del cartel" />
            <h3>{props.peli.titulo}</h3>
            <p>{props.peli.sinopsis}</p>
        </div> 
    );
}

function Main(props){
    let todasPeliculas = props.peliculas.map(function (film) {
        return <MostrarPelicula peli={film} />
    });

    return <div className="catalogo">{todasPeliculas}</div>
}

export default Main;
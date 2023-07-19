function Compositores(props) {
    
    const compositoresHTML = props.compositores.map(function (compositor) {
      return (
        <li>
          <h3>{compositor.nombre}</h3>
          <p>Fecha: {compositor.fecha}</p>
          <p>Canción: {compositor.canciones}</p>
        </li>
      );
    });
    return <ul>{compositoresHTML}</ul>;
  }
  
  export default Compositores;
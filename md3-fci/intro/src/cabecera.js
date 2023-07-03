import React from "react";
/*
function Cabecera(props) {
  return (
    <header>
      <h1>
        The Spy Who Loved Me (1977) protagonizada por {props.protagonista} en su
        papel de {props.papel}
      </h1>
    </header>
  );
}*/

function Cabecera() {
  let protagonistas = ["Roger Moore", "Barbara Bach", "Richard Kiel"];
  const funcionMap = protagonistas.map(function (prota) {
    return <h2>{prota}</h2>;
  });

  return funcionMap;
}

export default Cabecera;

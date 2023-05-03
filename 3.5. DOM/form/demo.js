function clicarAqui() {
  // 1º PASO- GUARDAMOS LO QUE EL USUARIO
  // HA ESCRITO EN UNA VARIABLE LLAMADA valorUsuario
  let valorUsuario = document.getElementById("img").value;

  // 2º PASO - IMPRIMIR LAS FOTOS QUE EL USUARIO
  //           HA MANDADO COMO ENLACES.
  document.getElementById("imprimir").innerHTML += `
  <img class="foto" src="${valorUsuario}" alt="probando" width="150px" height="150px">
    `;
}

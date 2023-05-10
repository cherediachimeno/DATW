let brocha = 0;

function sumaBrocha() {
  brocha++;
  console.log("de momento tenemos " + brocha);
}

function restaBrocha() {
  if (brocha <= 0) {
  } else {
    brocha--;
    console.log("de momento tenemos " + brocha);
  }
}

function actualizarCesta() {
  document.getElementById("cesta").style.display = "block";
  document.getElementById("cesta").innerHTML = `<div id="cesta">
        <h5>Productos en la cesta</h5>
        <p>Nº DE BROCHAS: ${brocha}</b>
    </div>`;
}

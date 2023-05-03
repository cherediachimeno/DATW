function addCard() {
  // Oye robot, cuando ejecutes esta función
  // me dibujas una card en #espacioLibre.

  document.getElementById("espacioLibre").innerHTML += `
    <div class="card">
    </div>
    `;
}

function modifyCSS() {
  document.getElementById("titulo").style.color = "blue";
}

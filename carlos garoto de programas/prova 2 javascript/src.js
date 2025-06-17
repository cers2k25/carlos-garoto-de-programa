let contador = 0;

function atualizarContador() {
  document.getElementById("valor").textContent = contador;
}

function aumentar() {
  contador++;
  atualizarContador();
}


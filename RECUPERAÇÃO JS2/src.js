const btnMostrar = document.getElementById("Mostrar");
const mensagem = document.getElementById("mensagem");

btnMostrar.addEventListener("click", function () {
  mensagem.classList.remove("oculto");
});

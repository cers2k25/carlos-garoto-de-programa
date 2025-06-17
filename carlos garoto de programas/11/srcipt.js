const btnMostrar = document.getElementById('mostrar');
const btnEsconder = document.getElementById('esconder');
const mensagem = document.getElementById('mensagem');

btnMostrar.addEventListener('click', function() {
  mensagem.classList.remove('oculto');
});

btnEsconder.addEventListener('click', function() {
  mensagem.classList.add('oculto');
});

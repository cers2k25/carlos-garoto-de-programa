btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');

const mensagem = document.getElementById('mensagem');

btn1.addEventListener('click', function() {
    mensagem.innerText = 'VOCE ERROU SEU BOSTA';
});
btn2.addEventListener('click', function() {
    mensagem.innerText = 'VOCE ERROU SEU BOSTA';
});
btn3.addEventListener('click', () => {
    mensagem.innerText = ' ATE QUE ENFIM SEU IDIOTA';
});
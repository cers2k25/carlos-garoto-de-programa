const frutas = ["Maçã", "Banana", "Uva", "Limão", "Esperma"];
const botao = document.getElementById('botaomostrar');

botao.addEventListener('click', function(){
    const lista = document.getElementById('lista');
    lista.innerHTML = ""

    frutas.forEach(function (fruta) {
        const item = document.createElement ("li")
        item.textContent = fruta;
        lista.appendChild(item)
    })
})
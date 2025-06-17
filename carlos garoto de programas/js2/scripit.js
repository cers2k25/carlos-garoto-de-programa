let contador = 0

function aumentar() {
    contador++;
    atualizardisplay();
}

function diminuir() {
    contador--;
    atualizardisplay();
}

function atualizardisplay() {
    document.getElementById("valor"). textContent = contador
}
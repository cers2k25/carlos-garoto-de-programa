let result = 0;

document.getElementById("count").addEventListener("click",function() {
    result++;
    document.getElementById("result").textContent = "Cliques: " + result;
    if (result >= 10) {
        document.getElementById("meta").textContent = "Parabéns! Você atingiu a meta!"
    }
});

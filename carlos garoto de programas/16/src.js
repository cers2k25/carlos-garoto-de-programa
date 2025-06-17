const quadrado = document.getElementById("quadrado");
quadrado.addEventListener("mouseover", function() {
    quadrado.style.backgroundColor = "purple";
});
quadrado.addEventListener("mouseout", function() {
    quadrado.style.backgroundColor = "blue"
})
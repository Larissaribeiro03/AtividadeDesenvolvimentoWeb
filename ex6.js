function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById("altura").value) || 0;
    const sexo = document.getElementById("sexo").value;
    
    let pesoIdeal = 0;

    if (sexo === "homem") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "mulher") {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    document.getElementById("pesoIdeal").textContent = pesoIdeal.toFixed(2);
}

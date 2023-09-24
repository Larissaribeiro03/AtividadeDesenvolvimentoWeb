const valores = [];

function adicionarValor() {
    const valor = parseFloat(document.getElementById("valor").value);
    if (!isNaN(valor)) {
        valores.push(valor);
        document.getElementById("valoresInseridos").innerHTML += `<li>${valor}</li>`;
        document.getElementById("valor").value = "";
    }
}

function mostrarMaiorValor() {
    if (valores.length > 0) {
        const maior = Math.max(...valores);
        document.getElementById("maiorValor").textContent = maior;
    }
}

function mostrarMenorValor() {
    if (valores.length > 0) {
        const menor = Math.min(...valores);
        document.getElementById("menorValor").textContent = menor;
    }
}

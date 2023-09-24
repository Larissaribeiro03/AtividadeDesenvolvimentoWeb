function calcularGasto() {
    const quilometragem = parseFloat(document.getElementById("quilometragem").value) || 0;
    const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value) || 0;
    
    const consumoPorLitro = 8; // Taxa de consumo de 8 km/litro

    const gastoCombustivel = (quilometragem / consumoPorLitro) * valorCombustivel;

    document.getElementById("gastoCombustivel").textContent = gastoCombustivel.toFixed(2);
}

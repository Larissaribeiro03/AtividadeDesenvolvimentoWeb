function calcularCustoPiso() {
    const comprimento = parseFloat(document.getElementById("comprimento").value) || 0;
    const largura = parseFloat(document.getElementById("largura").value) || 0;
    
    const precoPorMetroQuadrado = 36.00;

    const areaCcomodo = comprimento * largura;
    const custoPiso = areaCcomodo * precoPorMetroQuadrado;

    document.getElementById("custoPiso").textContent = custoPiso.toFixed(2);
}

function calcularTotal() {
    const valor1 = parseFloat(document.getElementById("valor1").value) || 0;
    const quantidade1 = parseInt(document.getElementById("quantidade1").value) || 0;

    const valor2 = parseFloat(document.getElementById("valor2").value) || 0;
    const quantidade2 = parseInt(document.getElementById("quantidade2").value) || 0;

    const valor3 = parseFloat(document.getElementById("valor3").value) || 0;
    const quantidade3 = parseInt(document.getElementById("quantidade3").value) || 0;

    const totalVenda = (valor1 * quantidade1) + (valor2 * quantidade2) + (valor3 * quantidade3);

    document.getElementById("totalVenda").textContent = totalVenda.toFixed(2);
}

function exibirParesESoma() {
    const numero = parseInt(document.getElementById("numero").value);
    let numerosPares = [];
    let somaTotal = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
            somaTotal += i;
        }
    }

    document.getElementById("numerosPares").textContent = numerosPares.join(", ");
    document.getElementById("somaTotal").textContent = somaTotal;
}

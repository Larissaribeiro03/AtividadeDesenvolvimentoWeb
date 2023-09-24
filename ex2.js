function converterTemperatura() {
    const temperaturaCelsius = parseFloat(document.getElementById("temperatura").value);
    const temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;

    document.getElementById("temperaturaFahrenheit").textContent = temperaturaFahrenheit.toFixed(2);
}

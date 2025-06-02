function calcularDescuento() {
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = parseFloat(document.getElementById("descuento").value);
    const resultado = document.getElementById("resultado");

    if(isNaN(precio)|| isNaN(descuento)) {
        resultado.textContent = "Por favor ingresá números válidos";
        resultado.style.color = "red";
        return;
    }
    const montoDescuento = precio * (descuento / 100);
    const precioFinal = precio - montoDescuento;

    resultado.textContent = `precio final con descuento: $${precioFinal.toFixed(2)}`;
    resultado.style.color = "green"
}

resultado.innerHTML =  `Precio original : $${precio.toFixed(2)}<br>
Descuento: ${descuento}% </br>
Precio final: <strong>$${precioFinal.toFixed(2)}</strong>
 `;
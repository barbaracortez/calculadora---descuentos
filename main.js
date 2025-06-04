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

    resultado.innerHTML =  `
    Precio original : $${precio.toFixed(2)}<br>
    Descuento: ${descuento}% </br>
    Monto Descontado: $${montoDescuento.toFixed(2)}<br>
    <strong>Precio final: $${precioFinal.toFixed(2)}</strong>
 `;
    
    resultado.style.color = "blue"; 
}

function calcularIVA(){

    const precio = parseFloat(document.getElementById("precio").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(precio)) {
        resultado.textContent = "Por favor ingresá un número valido para calcular"
        resultado.style.color = "red";
        return;
    }

    const iva = precio * 0.21;
    const totalConIVA = precio + iva;

    resultado.innerHTML = `
    Precio sin IVA: $${precio.toFixed(2)}<br>
    IVA (21%): $${iva.toFixed(2)}<br>
    <strong> Total con IVA: $${totalConIVA.toFixed(2)}</strong>`;

    resultado.style.color = "green"; 
}

function calcularPropina(){
    const total = parseFloat(document.getElementById('monto').value);
    const porcentaje = parseFloat(document.getElementById('porcentajePropina').value);

    if(isNaN(total ) || isNaN(porcentaje)) {
        alert ("Por favor, ingrese vañores válidos");
        return;
    }

    const propina = total * (porcentaje / 100);
    const totalConPropina = total + propina;

    document.getElementById('resultadoPropina').innerText = `Propina: $${propina.toFixed(2)}, Total con Propina: $${totalConPropina.toFixed(2)}`;
    
}
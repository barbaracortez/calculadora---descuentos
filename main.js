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

function calcularMultiplesdescuentos(){
    const precio = parseFloat(document.getElementById("precio-multiple").value);
    const descuento1 = parseFloat(document.getElementById("descuento1").value); 
    const descuento2 = parseFloat(document.getElementById("descuento2").value);
    const resultado = document.getElementById("resultado-descuento-multiple");

    if (isNAN (precio) || isNAN (descuento1) || isNaN(descuento2)) {
        resultado.textContent = "Por favor completá todos los campos."
        resultado.style.color = "red";
        return;
    }

    const monto1 = precio * (descuento / 100);
    const intermedio = precio - monto1;

    const monto2 = intermedio * (descuento2 / 100);
    const final = intermedio - monto2;

    resultado.style.color = "green";
    resultado. innerHTML = `
    Precio original: $${precio.toFixed(2)} <br>
    1° descuento (${descuento1}%): - $${monto1.toFixed(2)}<br>
    Subtotal: $${intermedio.toFixed(2)}<br>
    2° descuento (${descuento2}): -$${monto2.toFixed(2)}<br>
    <strong> total: $${final.toFixed(2)} </strong> `;
    
}
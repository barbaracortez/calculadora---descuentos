let precioOriginal = parseFloat(prompt("Precio original del producto:"));
let descuentos = parseFloat(prompt ("¿Qué porcentaje de descuento tenés?"));

let montoDescuento = precioOriginal * (descuento / 100);
let precioFinal = precioOriginal - montoDescuento;

alert("Precio final con descuento: $ " + precioFinal.toFixed(2));
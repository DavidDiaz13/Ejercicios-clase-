import { calcularSubtotal, calcularIVA } from "./calculos.js";
import { formatearMoneda } from "./formato.js";

let producto = "Labial";
let precio = 150;
let cantidad = 3;

let subtotal = calcularSubtotal(precio, cantidad);
let iva = calcularIVA(subtotal);
let total = subtotal + iva;

function mostrarResumen(producto, total) {
    console.log(`Producto: ${producto}`);
    console.log(`Total: ${formatearMoneda(total)}`);
}

mostrarResumen(producto, total);
// Primer Programa
let nombrePro1 = prompt("Nombre Del Producto 1: ");
let c1 = parseInt(prompt("Ingrese La Cantidad Del Producto: "));
let p1 = parseFloat(prompt("Ingrese El Precio Del Producto: "));

let nombrePro2 = prompt("Nombre Del Producto 2: ");
let c2 = parseInt(prompt("Ingrese La Cantidad Del Producto: "));
let p2 = parseFloat(prompt("Ingrese El Precio Del Producto: "));

let nombrePro3 = prompt("Nombre Del Producto 3: ");
let c3 = parseInt(prompt("Ingrese La Cantidad Del Producto: "));
let p3 = parseFloat(prompt("Ingrese El Precio Del Producto: "));

let subto1 = c1 * p1;
let subto2 = c2 * p2;
let subto3 = c3 * p3;

let total = subto1 + subto2 + subto3;

let cantidadDepago = parseFloat(prompt("Cuánto Paga El Cliente: "));
let cambio = cantidadDepago - total;

console.log("Total De La Compra: " + total.toFixed(2));
console.log("El Cliente Pagó: " + cantidadDepago.toFixed(2));
console.log("Vueltos: " + cambio.toFixed(2));

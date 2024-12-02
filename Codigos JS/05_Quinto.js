// Quinto Programa

let num1 = parseFloat(prompt("Digite su primer número: "));
let num2 = parseFloat(prompt("Digite su segundo número: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let div = num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero";

console.log("La Suma Es: " + suma);
console.log("La Resta Es: " + resta);
console.log("La Multiplicación Es: " + multi);
console.log("La División Es: " + div);

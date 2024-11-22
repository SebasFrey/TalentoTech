let ca = parseFloat(prompt("Ingrese Consumo Actual: "));
let cp = parseFloat(prompt("Ingrese Consumo Anterior: "));
let vk = parseFloat(prompt("Ingrese Valor kw: "));

let consumo = ca - cp;
let total = consumo * vk;

console.log("El costo total es: " + total);

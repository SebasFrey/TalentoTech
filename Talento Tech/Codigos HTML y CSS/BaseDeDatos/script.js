// Referencias a elementos del DOM
const form = document.getElementById('userForm');
const userTable = document.getElementById('userTable');

let userId = 1; // Contador para IDs únicos

// Manejar el evento submit del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recarga de página

    // Obtener valores de los inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Crear nueva fila en la tabla
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${userId++}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
    `;

    userTable.appendChild(newRow);

    form.reset();
});

document.getElementById('medalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const country = document.getElementById('country').value;
    const gold = document.getElementById('gold').value;
    const silver = document.getElementById('silver').value;
    const bronze = document.getElementById('bronze').value;

    // Crear una nueva fila para la tabla
    const table = document.getElementById('medalsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = country;
    newRow.insertCell(1).textContent = gold;
    newRow.insertCell(2).textContent = silver;
    newRow.insertCell(3).textContent = bronze;

    // Limpiar el formulario
    document.getElementById('medalForm').reset();
});


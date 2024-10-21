document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('productForm');
    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            addProductToTable();
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const fields = ['productName', 'category', 'price', 'stockStatus'];
        
        fields.forEach(field => {
            const input = document.getElementById(field);
            const errorElement = document.getElementById(field + 'Error');
            
            if (input.value.trim() === '') {
                isValid = false;
                errorElement.textContent = 'This field is required.';
            } else {
                errorElement.textContent = '';
            }
        });

        return isValid;
    }

    function addProductToTable() {
        const row = table.insertRow();
        const fields = ['productName', 'category', 'price', 'stockStatus'];
        
        fields.forEach(field => {
            const cell = row.insertCell();
            const input = document.getElementById(field);
            cell.textContent = input.value;
        });

        // Format price to two decimal places
        row.cells[2].textContent = '$' + parseFloat(row.cells[2].textContent).toFixed(2);
    }
});
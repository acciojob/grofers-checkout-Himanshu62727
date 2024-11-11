const table = document.querySelector('#savings-table');
    if (!table) {
        console.error("Table not found!");
        return;
    }

    // Select all elements with the class 'price'
    const prices = document.querySelectorAll('.price');
    
    // Calculate the total by summing up the values of the prices
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    // Check if a total row already exists and remove it to avoid duplicates
    const existingTotalRow = document.querySelector('#savings-table .total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for displaying the total price
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    // Create a cell that spans across both columns and displays the total
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;

    // Append the cell to the row, and the row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
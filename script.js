const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const prices = document.querySelectorAll('.price');
    
    // Calculate the total by summing up the values of the prices
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    // Check if a total row already exists, and if so, remove it to avoid duplicates
    const existingTotalRow = document.querySelector('#total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for displaying the total price
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row'; // Assign an ID for easy reference

    // Create a cell that spans both columns and displays the total
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;

    // Append the cell to the row, and the row to the table
    totalRow.appendChild(totalCell);
    document.querySelector('#savings-table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);


function makeDiagonalRed(table) {
  
  for (let i = 0; i < table.rows.length; i++) {
    let tableRow = table.rows[i];
    let tableCell = tableRow.cells[i];
    tableCell.style.backgroundColor = 'red';
  }

}
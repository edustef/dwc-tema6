import './tabla-dinamica.scss';

document.addEventListener('DOMContentLoaded', () => {
  createInitTable();
});

function createInitTable() {
  const ROW = 4;
  const COL = 4;
  let counter = 1;
  const tableBody = document.querySelector<HTMLTableElement>('table')
    .tBodies[0]; // gets the first(only) tbody in table

  for (let row = 0; row < ROW; row++) {
    const tableRow = document.createElement('tr');
    for (let col = 0; col < COL; col++) {
      let data: string | HTMLElement = counter.toString();
      if (col === COL - 1) {
        data = createDeleteButton();
      }
      tableRow.appendChild(createTableData(data, COL));
      counter++;
    }
    tableBody.appendChild(tableRow);
  }
}

function createTableData(data: HTMLElement | string, nCols: number) {
  const tableData = document.createElement('td');
  if (typeof data === 'string') {
    tableData.textContent = data;
  } else {
    tableData.appendChild(data);
  }
  return tableData;
}

function createDeleteButton() {
  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.textContent = 'Delete row';

  return button;
}

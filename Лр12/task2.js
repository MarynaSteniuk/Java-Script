function updateRow() {
  const table = document.getElementById('goodsTable');
  const rowIndex = parseInt(document.getElementById('rowIndex').value, 10);
  const newQty = document.getElementById('newQty').value;
  const newPrice = document.getElementById('newPrice').value;
  if (isNaN(rowIndex) || rowIndex < 1 || rowIndex > table.tBodies[0].rows.length) {
    alert('Введіть коректний номер рядка.');
    return;
  }
  const row = table.tBodies[0].rows[rowIndex - 1];
  if (newQty !== '') {
    const qtyNum = parseFloat(newQty);
    if (!isFinite(qtyNum) || qtyNum < 0) { alert('Невірна кількість.'); return; }
    row.cells[2].innerText = qtyNum;
  }
  if (newPrice !== '') {
    const priceNum = parseFloat(newPrice);
    if (!isFinite(priceNum) || priceNum < 0) { alert('Невірна ціна.'); return; }
    row.cells[3].innerText = priceNum;
  }
  const qty = parseFloat(row.cells[2].innerText);
  const price = parseFloat(row.cells[3].innerText);
  const sum = qty * price;
  row.cells[4].innerText = sum.toFixed(2);
  updateTotal();
  clearInputs();
}
function updateTotal() {
  const table = document.getElementById('goodsTable');
  let total = 0;
  for (let r = 0; r < table.tBodies[0].rows.length; r++) {
    const sum = parseFloat(table.tBodies[0].rows[r].cells[4].innerText) || 0;
    total += sum;
  }
  document.getElementById('total').innerText = 'Загальна сума: ' + total.toFixed(2) + ' грн';
}
function clearInputs() {
  document.getElementById('rowIndex').value = '';
  document.getElementById('newQty').value = '';
  document.getElementById('newPrice').value = '';
}
function addRow() {
  const table = document.getElementById('goodsTable').tBodies[0];
  const newIndex = table.rows.length + 1;
  const tr = table.insertRow();
  tr.insertCell(0).innerText = newIndex;
  tr.insertCell(1).innerText = 'Новий товар';
  tr.insertCell(2).innerText = '0';
  tr.insertCell(3).innerText = '0';
  tr.insertCell(4).innerText = '0.00';
  updateTotal();
}
function deleteRow() {
  const table = document.getElementById('goodsTable').tBodies[0];
  const rowIndex = parseInt(document.getElementById('rowIndex').value, 10);
  if (isNaN(rowIndex) || rowIndex < 1 || rowIndex > table.rows.length) {
    alert('Введіть коректний номер рядка для видалення.');
    return;
  }
  table.deleteRow(rowIndex - 1);
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerText = i + 1;
  }
  updateTotal();
  clearInputs();
}
document.addEventListener('DOMContentLoaded', () => {
  updateTotal();
});

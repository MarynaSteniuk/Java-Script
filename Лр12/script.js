function isNumb(fld) {
  let t = fld.value.trim();
  if (t === "") return true;
  for (let i = 0; i < t.length; i++) {
    let ch = t.charAt(i);
    if ((ch < '0' || ch > '9') && !(ch === '.' || ch === ',' || ch === '-')) {
      alert('Не цифра! Використовуйте цифри, крапку або кому.'); 
      fld.focus();
      fld.select();
      return false;
    }
  }
  return true;
}
function resetForm(){
  document.getElementById('start').value = '';
  document.getElementById('end').value = '';
  document.getElementById('step').value = '';
  document.getElementById('func').value = 'sin';
}
function openTable() {
  let startRaw = document.getElementById('start').value.trim().replace(',', '.');
  let endRaw   = document.getElementById('end').value.trim().replace(',', '.');
  let stepRaw  = document.getElementById('step').value.trim().replace(',', '.');
  let func     = document.getElementById('func').value;

  let start = parseFloat(startRaw);
  let end   = parseFloat(endRaw);
  let step  = parseFloat(stepRaw);

  if (isNaN(start) || isNaN(end) || isNaN(step)) {
    alert('Введіть числові значення для початку, кінця і кроку.');
    return;
  }
  if (step <= 0) {
    alert('Крок має бути додатнім числом.');
    return;
  }
  if (start > end) {
    alert('Початковий кут не може бути більшим за кінцевий.');
    return;
  }
  let newWin = window.open('', '', 'width=760,height=520,scrollbars=yes');
  if (!newWin) {
    alert('Вікно було заблоковано браузером. Дозвольте поп-апи для цього сайту.');
    return;
  }
  let html = `
  <!doctype html>
  <html lang="uk">
  <head>
    <meta charset="utf-8">
    <title>Результати — ${func}(x)</title>
    <style>
      body{font-family:Segoe UI, Arial; padding:20px; background:#fff6fb; color:#4a003f;}
      h1{color:#d63384; text-align:center;}
      table{border-collapse:collapse; width:90%; margin:12px auto; background:#fffafc;}
      th,td{border:1px solid #ffb3cc; padding:8px; text-align:center;}
      th{background:#ffd6eb;}
      caption{font-size:12px; color:#7a234f; margin-bottom:6px;}
    </style>
  </head>
  <body>
    <h1>Таблиця значень ${func}(x)</h1>
    <table>
      <tr><th>Кут (°)</th><th>Кут (рад)</th><th>${func}(x)</th></tr>
  `;
  let stepsCount = Math.floor((end - start) / step + 0.0000001) + 1;
  for (let i = 0; i < stepsCount; i++) {
    let x = start + i * step;
    x = Math.round(x * 1000000) / 1000000;
    if (x > end + 1e-9) break;
    let rad = x * Math.PI / 180;
    let val;
    if (func === 'sin') val = Math.sin(rad);
    else if (func === 'cos') val = Math.cos(rad);
    else if (func === 'tan') val = Math.tan(rad);
    let displayVal;
    if (func === 'tan' && Math.abs(val) > 1e6) displayVal = '∞';
    else displayVal = val.toFixed(6);
    html += `<tr><td>${x}</td><td>${rad.toFixed(6)}</td><td>${displayVal}</td></tr>`;
  }
  html += `</table>
    <p style="text-align:center; color:#7a234f; margin-top:12px;">Згенеровано з діапазону ${start}° — ${end}° крок ${step}°</p>
  </body></html>`;
  newWin.document.open();
  newWin.document.write(html);
  newWin.document.close();
}

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Побудова еліпса</title>
  <style>
    body {
      background-color: #fff6fa;
      font-family: 'Segoe UI', sans-serif;
      color: #660033;
      text-align: center;
      padding-top: 30px;
    }
    h2 {
      color: #b0006d;
      margin-bottom: 20px;
    }
    form {
      background-color: #ffe6ef;
      display: inline-block;
      padding: 25px 40px;
      border-radius: 20px;
      box-shadow: 0 0 15px #f3b2cd;
      margin-bottom: 30px;
    }
    input, button {
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #f3a9c9;
      font-size: 16px;
      background-color: #fff0f7;
    }
    button {
      background-color: #ffb6d9;
      color: #660033;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }
    button:hover {
      background-color: #ffcde3;
      transform: scale(1.05);
    }
    canvas {
      background-color: #fff;
      border: 2px solid #ffb6d9;
      border-radius: 10px;
      box-shadow: 0 0 15px #f3b2cd;
      margin: 15px;
    }
  </style>
</head>
<body>
  <h2>🌷 Побудова еліпса 🌷</h2>

  <form onsubmit="drawEllipse(); return false;">
    <label>Велика піввісь (a):</label>
    <input type="number" id="a" value="120">
    <label>Мала піввісь (b):</label>
    <input type="number" id="b" value="80">
    <br>
    <button type="submit">Побудувати</button>
  </form>

  <div>
    <canvas id="canvas1" width="400" height="300"></canvas>
    <canvas id="canvas2" width="400" height="300"></canvas>
    <canvas id="canvas3" width="400" height="300"></canvas>
  </div>

  <script>
    function drawEllipse() {
      let a = parseFloat(document.getElementById("a").value);
      let b = parseFloat(document.getElementById("b").value);
      if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        alert("Введіть додатні значення для a та b!");
        return;
      }
      let ctx1 = document.getElementById("canvas1").getContext("2d");
      ctx1.clearRect(0, 0, 400, 300);
      ctx1.fillStyle = "#ff66b3";
      for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        let x = 200 + a * Math.cos(t);
        let y = 150 + b * Math.sin(t);
        ctx1.fillRect(x, y, 2, 2);
      }
      let ctx2 = document.getElementById("canvas2").getContext("2d");
      ctx2.clearRect(0, 0, 400, 300);
      ctx2.strokeStyle = "#b0006d";
      ctx2.lineWidth = 3;
      ctx2.beginPath();
      ctx2.ellipse(200, 150, a, b, 0, 0, 2 * Math.PI);
      ctx2.stroke();
      let ctx3 = document.getElementById("canvas3").getContext("2d");
      ctx3.clearRect(0, 0, 400, 300);
      ctx3.strokeStyle = "#ff99cc";
      ctx3.lineWidth = 3;
      ctx3.beginPath();
      for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        let x = 200 + a * Math.cos(t);
        let y = 150 + b * Math.sin(t);
        ctx3.lineTo(x, y);
      }
      ctx3.stroke();
    }
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Рух квадрата по колу</title>
  <style>
    body {
      background-color: #fff5fb;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      color: #660033;
      overflow: hidden;
    }
    h2 {
      color: #b0006d;
      margin-top: 20px;
    }
    #container {
      position: relative;
      width: 500px;
      height: 500px;
      margin: 30px auto;
      background-color: #ffe6ef;
      border-radius: 20px;
      box-shadow: 0 0 15px #f3b2cd;
    }
    #square {
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: #ff66b3;
      border-radius: 8px;
      top: 230px;
      left: 230px;
      box-shadow: 0 0 10px #f4a9c9;
    }
    button {
      background-color: #ffb6d9;
      color: #660033;
      border: none;
      border-radius: 10px;
      padding: 10px 25px;
      margin: 10px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }
    button:hover {
      background-color: #ffcde3;
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <h2>🌸 Рух кольорового квадрата по колу 🌸</h2>
  <div id="container">
    <div id="square"></div>
  </div>
  <button id="toggleBtn" onclick="toggleMove()">Запустити</button>

  <script>
    let square = document.getElementById("square");
    let btn = document.getElementById("toggleBtn");
    let angle = 0;
    let R = 180;
    let centerX = 230;
    let centerY = 230;
    let moving = false;
    let timer;

    function move() {
      angle += 0.05;
      let x = centerX + R * Math.cos(angle);
      let y = centerY + R * Math.sin(angle);
      square.style.left = x + "px";
      square.style.top = y + "px";
    }

    function toggleMove() {
      if (!moving) {
        timer = setInterval(move, 30);
        moving = true;
        btn.innerText = "Стоп";
      } else {
        clearInterval(timer);
        moving = false;
        btn.innerText = "Запустити";
      }
    }
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Перетягування квадрата</title>
  <style>
    body {
      background-color: #fff6fa;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      color: #660033;
      user-select: none;
    }
    h2 {
      color: #b0006d;
      margin: 20px 0;
    }
    #outerBox {
      width: 500px;
      height: 500px;
      margin: 0 auto;
      background-color: #f0f0f0;
      border-radius: 20px;
      box-shadow: 0 0 15px #d3a5bf;
      position: relative;
    }
    #innerBox {
      width: 70px;
      height: 70px;
      background-color: #ff66b3;
      border-radius: 10px;
      position: absolute;
      top: 50px;
      left: 50px;
      cursor: grab;
      box-shadow: 0 0 10px #f3a9c9;
    }
    #innerBox:active {
      cursor: grabbing;
    }
  </style>
</head>
<body>
  <h2>🌸 Перетягування квадрата мишею 🌸</h2>
  <div id="outerBox">
    <div id="innerBox"></div>
  </div>
  <script>
    const outer = document.getElementById("outerBox");
    const inner = document.getElementById("innerBox");
    let offsetX, offsetY;
    let dragging = false;
    inner.addEventListener("mousedown", (e) => {
      dragging = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
    });
    document.addEventListener("mouseup", () => {
      dragging = false;
    });
    document.addEventListener("mousemove", (e) => {
      if (dragging) {
        const rect = outer.getBoundingClientRect();
        let x = e.clientX - rect.left - offsetX;
        let y = e.clientY - rect.top - offsetY;
        x = Math.max(0, Math.min(x, rect.width - inner.offsetWidth));
        y = Math.max(0, Math.min(y, rect.height - inner.offsetHeight));

        inner.style.left = x + "px";
        inner.style.top = y + "px";
      }
    });
  </script>
</body>
</html>

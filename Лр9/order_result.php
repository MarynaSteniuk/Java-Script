<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Результат замовлення</title>
  <style>
    body {
      background-color: #ffeaf4;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      padding-top: 80px;
      color: #660033;
    }
    div {
      background-color: #ffd9ec;
      display: inline-block;
      padding: 30px 50px;
      border-radius: 25px;
      box-shadow: 0 0 20px #f3b2cd;
      font-size: 18px;
      line-height: 1.8;
    }
    a {
      display: block;
      margin-top: 20px;
      color: #b0006d;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div>
    <h2>Ваше замовлення прийнято 💖</h2>
    <?php
      $product = $_POST["product"];
      $material = $_POST["material"];
      $quantity = $_POST["quantity"];

      echo "<p>Замовлено виріб — <b>$product</b></p>";
      echo "<p>Матеріал — <b>$material</b></p>";
      echo "<p>Кількість — <b>$quantity</b></p>";
    ?>
    <a href="index.html">⬅ Повернутися до форми</a>
  </div>
</body>
</html>

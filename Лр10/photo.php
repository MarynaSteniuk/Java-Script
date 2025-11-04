<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Перегляд фотографій</title>
  <style>
    body {
      background-color: #fff5fb;
      font-family: 'Segoe UI', sans-serif;
      color: #660033;
      text-align: center;
      padding-top: 40px;
    }
    h2 {
      color: #b0006d;
      font-size: 28px;
      margin-bottom: 25px;
    }
    select {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #f3a9c9;
      background-color: #ffe6ef;
      font-size: 16px;
      box-shadow: 0 0 10px #f3b2cd;
      margin-bottom: 25px;
    }
    img {
      border-radius: 15px;
      box-shadow: 0 0 20px #f3b2cd;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h2>🌸 Перегляд фотографій 🌸</h2>

  <?php
    $photos = [
      "Ліс" => "forest.jpg",
      "Квіти" => "flowers.jpg",
      "Море" => "sea.jpg"
    ];
  ?>

  <p>Оберіть фото зі списку нижче:</p>
  <select id="photoSelect" onchange="showPhoto(this)">
    <option value="">-- Оберіть зображення --</option>
    <?php
      foreach ($photos as $name => $file) {
        echo "<option value='$file'>$name</option>";
      }
    ?>
  </select>

  <br>
  <img id="photo" src="" width="400" height="300" alt="Фото з’явиться тут">

  <script>
    function showPhoto(list) {
      let file = list.value;
      if (file !== "") {
        document.getElementById("photo").src = file;
      } else {
        document.getElementById("photo").src = "";
      }
    }
  </script>
</body>
</html>

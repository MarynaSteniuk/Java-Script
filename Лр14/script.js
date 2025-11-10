function task1() {
  let str = document.getElementById("input1").value;
  let regexp = /^[A-Z]/;
  document.getElementById("res1").innerHTML = regexp.test(str)
    ? "✅ Починається з великої літери"
    : "❌ Не починається з великої літери";
}
function task2() {
  let email = document.getElementById("input2").value;
  let regexp = /\S+@\S+\.\S+/;
  document.getElementById("res2").innerHTML = regexp.test(email)
    ? "✅ Email правильний"
    : "❌ Email неправильний";
}
function task3() {
  let str = document.getElementById("input3").value;
  let regexp = /d(b+)(d)/gi;
  let result = regexp.exec(str);
  document.getElementById("res3").innerHTML = result
    ? `✅ Знайдено: ${result}`
    : "❌ Нічого не знайдено";
}
function task4() {
  let str = document.getElementById("input4").value;
  let regexp = /(\w+)\s+(\w+)/;
  let res = str.replace(regexp, "$2, $1");
  document.getElementById("res4").innerHTML = `Результат: ${res}`;
}
function task5() {
  let card = document.getElementById("input5").value;
  let regexp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  document.getElementById("res5").innerHTML = regexp.test(card)
    ? "✅ Номер картки правильний"
    : "❌ Невірний формат картки";
}
function task6() {
  let email = document.getElementById("input6").value;
  let regexp = /^[A-Za-z0-9]+([_-]?[A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  document.getElementById("res6").innerHTML = regexp.test(email)
    ? "✅ Email правильний"
    : "❌ Email неправильний";
}
function task7() {
  let login = document.getElementById("input7").value;
  let loginRegexp = /^[A-Za-z][A-Za-z0-9\.]{1,9}$/;
  let numberRegexp = /[0-9]+(\.[0-9]+)?/g;
  let isValid = loginRegexp.test(login);
  let numbers = login.match(numberRegexp);
  document.getElementById("res7").innerHTML = isValid
    ? `✅ Логін правильний<br>🔢 Знайдені числа: ${numbers}`
    : `❌ Логін неправильний<br>🔢 Знайдені числа: ${numbers}`;
}

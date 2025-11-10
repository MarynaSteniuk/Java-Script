// ===== Завдання 1 =====
function task1() {
  $('a[href^="https://"]').attr('target', '_blank');
  alert('✅ Додано target="_blank" до безпечних посилань');
}
// ===== Завдання 2 =====
function task2() {
  $('h2.head').css('background', '#c6ffcc');
  $('h2.head .inner').css('font-size', '35px');
  alert('✅ Змінено стиль елементів h2.head та .inner');
}
// ===== Завдання 3 =====
function task3() {
  $('h3').each(function() {
    let div = $(this).next('div');
    $(this).before(div);
  });
  alert('✅ div переміщено перед h3');
}
// ===== Завдання 4 =====
$('.check').on('change', function() {
  if ($('.check:checked').length === 3) {
    $('.check').prop('disabled', true);
    alert('✅ Вибрано 3 варіанти — чекбокси заблоковано');
  }
});
// ===== Завдання 5 =====
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // ["Bob"]
// ===== Завдання 6 =====
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {names: [ , name2, , name4], ages: [ , age2, , age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
// ===== Завдання 7 =====
function mul(...args) {
  let nums = args.filter(a => typeof a === 'number');
  return nums.length ? nums.reduce((acc, val) => acc * val, 1) : 0;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
// ===== Завдання 8 =====
let server = {
  data: 0,
  convertToString(callback) {
    callback(() => this.data + "");
  }
};
let client = {
  server,
  result: "",
  calc(data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification() {
    return callback => { this.result = callback(); };
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
// ===== Завдання 9 =====
function mapBuilder(keysArray, valuesArray) {
  let map = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  return map;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
function runTasks() {
  alert("✅ Завдання 5–9 виконані! Перевір консоль (F12 → Console)");
}

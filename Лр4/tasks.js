function findMinLengthOfThreeWords(w1, w2, w3) {
  return Math.min(w1.length, w2.length, w3.length);
}
console.log("1.1 findMinLengthOfThreeWords:", findMinLengthOfThreeWords("Java", "Python", "C"));
function filterOddElements(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("1.2 filterOddElements:", filterOddElements([1, 2, 3, 4, 5, 6, 7]));
function getLengthOfShortestElement(arr) {
  if (arr.length === 0) return 0;
  let min = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < min) min = arr[i].length;
  }
  return min;
}
console.log("1.3 getLengthOfShortestElement:", getLengthOfShortestElement(["apple", "pear", "banana"]));
function joinArrayOfArrays(arr) {
  return [].concat(...arr);
}
console.log("1.4 joinArrayOfArrays:", joinArrayOfArrays([[1, 2], [3, 4], [5, 6]]));
function findSmallestNumberAmongMixedElements(arr) {
  const numbers = arr.filter(el => typeof el === "number");
  if (numbers.length === 0) return 0;
  return Math.min(...numbers);
}
console.log("1.5 findSmallestNumberAmongMixedElements:",
  findSmallestNumberAmongMixedElements([4, "text", 1, true, 10]));
function computeSummationToN(n) {
  if (n < 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("1.6 computeSummationToN:", computeSummationToN(5)); // 1+2+3+4+5 = 15
function convertScoreToGrade(score) {
  if (score < 0 || score > 100) return "INVALID SCORE";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  if (score >= 50) return "E";
  return "F";
}
console.log("1.7 convertScoreToGrade:", convertScoreToGrade(87)); // B
function getLongestOfThreeWords(w1, w2, w3) {
  let longest = w1;
  if (w2.length > longest.length) longest = w2;
  if (w3.length > longest.length) longest = w3;
  return longest;
}
console.log("1.8 getLongestOfThreeWords:", getLongestOfThreeWords("cat", "giraffe", "lion"));
function multiply(x, y) {
  let result = 0;
  const positive = Math.abs(y);
  for (let i = 0; i < positive; i++) {
    result += x;
  }
  return y < 0 ? -result : result;
}
console.log("1.9 multiply:", multiply(4, -3)); // має бути -12
function computeSumBetween(num1, num2) {
  if (num2 <= num1) return 0;
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}
console.log("1.10 computeSumBetween:", computeSumBetween(1, 4)); // 1+2+3 = 6


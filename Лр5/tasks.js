   //1.1 
function computeAreaOfARectangle(length, width) {
  return length * width;
}
console.log("1.1 computeAreaOfARectangle(5,3):", computeAreaOfARectangle(5, 3)); 

   //1.2 
function computeAreaOfACircle(radius) {
  return Math.PI * radius * radius;
}
console.log("1.2 computeAreaOfACircle(4):", computeAreaOfACircle(4)); 

   //1.3
function computePower(num, exponent) {
  return Math.pow(num, exponent);
}
console.log("1.3 computePower(2,3):", computePower(2, 3)); 

   //1.4 
function computeSquareRoot(num) {
  return Math.sqrt(num);
}
console.log("1.4 computeSquareRoot(25):", computeSquareRoot(25)); 

   //1.5 
function getLengthOfThreeWords(w1, w2, w3) {
  return w1.length + w2.length + w3.length;
}
console.log("1.5 getLengthOfThreeWords('cat','elephant','lion'):", getLengthOfThreeWords("cat", "elephant", "lion")); // 3+8+4=15

   //1.6 
function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log("1.6 joinArrays([1,2],[3,4]):", joinArrays([1, 2], [3, 4])); 

   //1.7
function getProductOfAllElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) return 0;
  const arr = obj[key];
  if (!Array.isArray(arr)) return 0;
  if (arr.length === 0) return 0;
  let product = 1;
  let foundNumber = false;
  for (const el of arr) {
    if (typeof el === "number") {
      product *= el;
      foundNumber = true;
    } else {
      continue;
    }
  }
  return foundNumber ? product : 0;
}
console.log("1.7 getProductOfAllElementsAtProperty:",
  getProductOfAllElementsAtProperty({ values: [2, 3, 4] }, "values")); 
console.log("1.7 edge no prop:", getProductOfAllElementsAtProperty({}, "values")); 
console.log("1.7 edge not array:", getProductOfAllElementsAtProperty({ values: "no" }, "values")); 
console.log("1.7 mixed:", getProductOfAllElementsAtProperty({ values: [2, "x", 3] }, "values")); 

   //1.8
function sumDigits(n) {
  if (typeof n !== "number" || isNaN(n)) return NaN;
  const s = Math.abs(Math.trunc(n)).toString(); 
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const digit = Number(s[i]);
    if (i === 0 && n < 0) sum -= digit;
    else sum += digit;
  }
  return sum;
}
console.log("1.8 sumDigits(123):", sumDigits(123)); 
console.log("1.8 sumDigits(-123):", sumDigits(-123));

   //1.9 
function findShortestWordAmongMixedElements(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "";
  let shortest = null;
  for (const el of arr) {
    if (typeof el === "string") {
      if (shortest === null || el.length < shortest.length) {
        shortest = el;
      }
    }
  }
  return shortest === null ? "" : shortest;
}
console.log("1.9 findShortestWordAmongMixedElements([4,'two',2,'three']):",
  findShortestWordAmongMixedElements([4, "two", 2, "three"])); 
console.log("1.9 no strings:", findShortestWordAmongMixedElements([1, 2, 3]));

   //1.10 
function findSmallestNumberAmongMixedElements(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "";
  const numbers = arr.filter(el => typeof el === "number");
  if (numbers.length === 0) return "";
  return Math.min(...numbers);
}
console.log("1.10 findSmallestNumberAmongMixedElements([4,'a',1,true,10]):",
  findSmallestNumberAmongMixedElements([4, "a", 1, true, 10])); 
console.log("1.10 no numbers:", findSmallestNumberAmongMixedElements(["a", "b"])); 

   //1.11 
function modulo(a, b) {
  if (isNaN(a) || isNaN(b)) return NaN;
  if (b === 0) return NaN;
  if (a === 0) return 0;
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  const quotient = Math.floor(absA / absB);
  const remainder = absA - quotient * absB;
  return a < 0 ? -remainder : remainder;
}
console.log("1.11 modulo(10,3):", modulo(10, 3)); 
console.log("1.11 modulo(-10,3):", modulo(-10, 3)); 
console.log("1.11 modulo(0,5):", modulo(0, 5)); 
console.log("1.11 modulo(5,0):", modulo(5, 0)); 

   //1.12 
function reverseEveryFragment(s, p) {
  if (p <= 1) return s;
  let result = "";
  for (let i = 0; i < s.length; i += p) {
    const chunk = s.substring(i, i + p);
    const rev = chunk.split("").reverse().join("");
    result += rev;
  }
  return result;
}
console.log("1.12 reverseEveryFragment('abcdefgh',3):", reverseEveryFragment("abcdefgh", 3));

   //1.13
function findUniqueByParity(arr) {
  let evens = 0, odds = 0;
  for (const n of arr) {
    if (n % 2 === 0) evens++;
    else odds++;
  }
  if (evens === 1) return arr.find(n => n % 2 === 0);
  if (odds === 1) return arr.find(n => n % 2 !== 0);
  return null;
}
console.log("1.13 findUniqueByParity([2,4,6,7,8]):", findUniqueByParity([2, 4, 6, 7, 8])); 
console.log("1.13 findUniqueByParity([1,3,2,5,7]):", findUniqueByParity([1, 3, 2, 5, 7]));

   //1.14 
function findPairWithSum(arr, target) {
  const seen = new Set();
  for (const num of arr) {
    const need = target - num;
    if (seen.has(need)) return [need, num];
    seen.add(num);
  }
  return null;
}
console.log("1.14 findPairWithSum([1,2,3,4,5],9):", findPairWithSum([1, 2, 3, 4, 5], 9)); 
console.log("1.14 no pair:", findPairWithSum([1,2], 10)); 

   //1.15 
function areMirrorStrings(s1, s2) {
  return s1.split("").reverse().join("") === s2;
}
console.log("1.15 areMirrorStrings('desserts', 'stressed'):", areMirrorStrings("desserts", "stressed")); 
console.log("1.15 areMirrorStrings('abc','cba'):", areMirrorStrings("abc","cba")); 

   //1.16 
function binarySearch(sortedArr, target) {
  let left = 0, right = sortedArr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === target) return mid;
    if (sortedArr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log("1.16 binarySearch([1,2,3,4,5],3):", binarySearch([1, 2, 3, 4, 5], 3)); 
console.log("1.16 binarySearch([1,2,3],10):", binarySearch([1,2,3], 10));

   //1.17
function isIsogram(str) {
  const letters = str.toLowerCase().replace(/[^a-zа-яёіїєґґ']/g, "");
  const seen = new Set();
  for (const ch of letters) {
    if (seen.has(ch)) return false;
    seen.add(ch);
  }
  return true;
}
console.log("1.17 isIsogram('lumberjacks'):", isIsogram("lumberjacks")); 
console.log("1.17 isIsogram('isogram'):", isIsogram("isogram")); 

   //1.18 
function findPalindromesInSentence(sentence) {
  if (!sentence) return [];
  const words = sentence.split(/\s+/).map(w => w.replace(/^[^a-zA-Z0-9а-яёіїєґҐ]+|[^a-zA-Z0-9а-яёіїєґҐ]+$/g, ""));
  const palindromes = [];
  for (const w of words) {
    if (!w) continue;
    const normalized = w.toLowerCase().replace(/[^a-z0-9а-яёіїєґҐ]/g, "");
    const rev = normalized.split("").reverse().join("");
    if (normalized && normalized === rev) palindromes.push(w);
  }
  return palindromes;
}
console.log("1.18 findPalindromesInSentence('Anna went to see civic and level words'):",
  findPalindromesInSentence("Anna went to see civic and level words")); 

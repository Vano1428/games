let array = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  if (array[i] === 10) {
    break;
  }
} // задание 1

let array = [1, 5, 4, 10, 0, 3];
let index = array.indexOf(4);

console.log(index); // задание 2

const numbers = [1, 3, 5, 10, 20];
const result = numbers.join(" ");
console.log(result); // задание 3

const array = [];

for (let i = 0; i < 3; i++) {
  const array2 = [];
  for (let i = 0; i < 3; i++) {
    array2.push(1);
  }
  array.push(array2);
}

console.log(array); // задание 4

let array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array); // задание 5

let array = [9, 8, 7, "a", 6, 5];

array.sort(function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else if (typeof a === "number") {
    return -1;
  } else if (typeof b === "number") {
    return 1;
  } else {
    return 0;
  }
});

let index = array.indexOf("a");
if (index > -1) {
  array.splice(index, 1);
}

console.log(array); // задание 6

const numbers = [9, 8, 7, 6, 5];
const guess = prompt("Угадайте число:");

if (numbers.includes(Number(guess))) {
  alert("Угадал");
} else {
  alert("Не угадал");
} // задание 7

let line = "abcdef";
let reversedLine = line.split("").reverse().join("");
console.log(reversedLine); // задание 8

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // задание 9

const numbers = [7, 5, 4, 8, 2, 9, 1, 3, 6];
for (let i = 0; i < numbers.length - 1; i++) {
  const sum = numbers[i] + numbers[i + 1];
  console.log(sum);
} // задание 10

function squareArray(numbers) {
  return numbers.map((number) => number * number);
}

const numbers = [1, 2, 3, 4, 5];
const squares = squareArray(numbers);
console.log(squares); // задание 11

function getLengths(linesArray) {
  return linesArray.map((lines) => lines.length);
}

const words = ["Hello", "World", "JavaScript"];
const lengths = getLengths(words);
console.log(lengths); // задание 12

function filterNegativeNumbers(arr) {
  return arr.filter((number) => number < 0);
}

const numbers = [7, -5, 14, -1, 3, -25, -10, 8, -6];
const negativeNumbers = filterNegativeNumbers(numbers);
console.log(negativeNumbers); // задание 13

let originalArray = [];
for (let i = 0; i < 10; i++) {
  originalArray.push(Math.floor(Math.random() * 11));
}

let evenArray = [];
for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    evenArray.push(originalArray[i]);
  }
}

console.log("Исходный массив:", originalArray);
console.log("Массив четных чисел:", evenArray); // задание 14

function generateAndAverage() {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;

  return { array: arr, average: average };
}

const result = generateAndAverage();
console.log("Сгенерированный массив:", result.array);
console.log("Среднее арифметическое цифр массива:", result.average); // задание 15

let str = "js";
let upperStr = str.toUpperCase();
console.log(upperStr); // задание 1

function filter(arr, str) {
  const lowerStr = str.toLowerCase();
  return arr.filter((item) => item.toLowerCase().startsWith(lowerStr));
}

console.log(filter(["BorussiaDortmund", "Borussia", "Ajax"], "bo")); // задание 2

let num = 32.58884;

let floorNum = Math.floor(num);
let ceilNum = Math.ceil(num);
let roundNum = Math.round(num);

console.log("Округление до меньшего целого числа:", floorNum);
console.log("Округление до большего целого числа:", ceilNum);
console.log("Округление до ближайшего целого числа:", roundNum); // задание 3

const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log("Минимальное значение:", min);
console.log("Максимальное значение:", max); // задание 4

function getRandomInt() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

getRandomInt(); // задание 5

function generateRandomArray(maxInteger) {
  const arrayLength = Math.floor(maxInteger / 2);
  const randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    randomArray.push(Math.floor(Math.random() * (maxInteger + 1)));
  }

  return randomArray;
}

const maxNum = 14;
const randomNumbers = generateRandomArray(maxNum);
console.log(randomNumbers); // задание 6

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInteger(1, 14);
console.log(randomNumber);

randomNumber = getRandomInteger(20, 40);
console.log(randomNumber); // задание 7

let todaysDate = new Date();
console.log(todaysDate); // задание 8

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate); // задание 9

function ourDate(date) {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const dayOfWeek = days[date.getDay()];

  return `Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(ourDate(new Date())); // задание 10

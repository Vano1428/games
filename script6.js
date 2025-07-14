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

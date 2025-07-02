for (let i = 0; i < 2; i++) {
  console.log("Привет");
} // задание 1

for (let i = 1; i <= 5; i++) {
  console.log(i);
} // задание 2

for (let i = 7; i <= 22; i++) {
  console.log(i);
} // задание 3

const obj = {
  Коля: `200`,
  Вася: `300`,
  Петя: `400`,
};

for (const key in obj) {
  console.log(`${key} - зарплата ${obj[key]} $`);
} // задание 4

let n = 1000;
let num = 0;

while (n > 50) {
  n /= 2;
  console.log(n);
  num++;
}
console.log(`Количество итераций: ${num}`); // задание 5

let dayFriday = 5;
let allDay = 31;

for (let i = dayFriday; i <= allDay; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
} // задание 6

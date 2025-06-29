let password = "пароль";

let userPass = prompt("Введите пароль");

if (userPass === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
} // задание 1

let c = 7;

if (c > 0 && c < 10) {
  alert("Верно");
} else {
  alert("Неверно");
} // задание 2

let d = 128;
let e = 14;

if (d > 100 || e > 100) {
  alert("Верно");
} else {
  alert("Неверно");
} // задание 3

let a = "2";
let b = "3";
alert(Number(a) + Number(b)); // задание 4

let monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;

  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;

  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;

  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;

  default:
    alert("Такого месяца нет");
    break;
}

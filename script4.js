function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(7, 3));
console.log(min(5, 5)); // задание 1

function even(n) {
  if (n % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}

console.log(even(8));
console.log(even(7)); // задание 2

function square(number) {
  console.log(number ** 2);
}

const up = (n) => n ** 2;

square(3);
console.log(up(3)); // задание 3

function age() {
  let age = +prompt("Сколько тебе лет?");

  if (age < 0) {
    alert("Вы ввели неправильное число");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else if (age >= 13) {
    alert("Добро пожаловать!");
  }
}

age(); // задание 4

function calc(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
}

console.log(calc("g", 7)); // задание 5

function numberRequest() {
  let number = prompt("Введите число");
  if (isNaN(number)) {
    return "Переданный параметр не является числом";
  } else {
    return `${number} в кубе равняется ${number ** 3}`;
  }
}

console.log(numberRequest()); // задание 6

function getArea() {
  return Math.PI * this.radius ** 2;
}

function getPerimeter() {
  return Math.PI * this.radius * 2;
}

const circle1 = {
  radius: 3,
  methodGetArea: getArea,
  methodGetPerimeter: getPerimeter,
};

const circle2 = {
  radius: 5,
  methodGetArea: getArea,
  methodGetPerimeter: getPerimeter,
};

console.log(circle1.methodGetArea());
console.log(circle1.methodGetPerimeter());
console.log(circle2.methodGetArea());
console.log(circle2.methodGetPerimeter()); //задание 7

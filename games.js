function startGame1() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  while (true) {
    let guessNumber = prompt("Угадай число от 1 до 100");
    guessNumber = Number(guessNumber);
    if (guessNumber === randomNumber) {
      alert("Поздравляю, ты угадал число!");
      break;
    } else if (guessNumber > randomNumber) {
      alert("Твое число больше загаданного, попробуй еще!");
    } else {
      alert("Твое число меньше загаданного, попробуй еще!");
    }
  }
}

console.log(randomNumber);

function startGame2() {
  const operations = ["+", "-", "*", "/"];
  let operation = operations[Math.floor(Math.random() * operations.length)];
  let a, b, result;
  let userAnswer;

  a = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;

  switch (operation) {
    case "+":
      userAnswer = prompt(`Сложи ${a} и ${b}`);
      correctAnswer = a + b;
      break;

    case "-":
      userAnswer = prompt(`Из ${a} вычти ${b}`);
      correctAnswer = a - b;
      break;

    case "*":
      userAnswer = prompt(`Умножь ${a} на ${b}`);
      correctAnswer = a * b;
      break;

    case "/":
      userAnswer = prompt(`Раздели ${a} на ${b}`);
      correctAnswer = a / b;
      break;
  }

  let number = parseInt(userAnswer);

  if (number === correctAnswer) {
    alert(`Отлично! Это верный ответ!`);
  } else {
    alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
  }
}

function startGame3() {
  let text = prompt("Введи любой текст:");
  if (text) {
    let reversedText = text.split("").reverse().join("");
    alert(reversedText);
  } else {
    alert("Текст не введен! Повтори, пожалуйста!");
  }
}

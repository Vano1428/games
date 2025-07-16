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

function startGame5() {
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красного", "2. Голубого", "3. Зеленого"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  let quantity = 0;
  for (let i = 0; i < quiz.length; i++) {
    let quizQuestion = Number(
      prompt(
        `Выбери правильный ответ и получи за каждый один кофе: - ${quiz[i].question} ${quiz[i].options}`
      )
    );
    if (quizQuestion === quiz[i][`correctAnswer`]) {
      quantity++;
      alert("Молодец, верный ответ!");
    } else {
      alert("Читай больше книг!");
    }
  }

  alert(`Поздравляю! Ты выиграл ${quantity} кофе!`);
}

function startGame4() {
  const options = ["камень", "ножницы", "бумага"];
  const randomIndex = Math.floor(Math.random() * options.length);
  let compChoice = options[randomIndex];
  console.log(compChoice);
  let userChoice = prompt(
    `Привет мой друг! \nДавай сыграем c компом в "Камень - Ножницы - Бумага"? \nВыбери "Камень", "Ножницы" или "Бумага".`
  ).toLowerCase();

  const printResult = (userChoice, compChoice) => {
    if (
      (userChoice === "камень" && compChoice === "ножницы") ||
      (userChoice === "ножницы" && compChoice === "бумага") ||
      (userChoice === "бумага" && compChoice === "камень")
    ) {
      return `Ты выиграл! Выбор компьютера "${compChoice}"`;
    }
    if (userChoice === compChoice) {
      return `Ничья. Выбор компьютера "${compChoice}"`;
    }
    if (!options.includes(userChoice)) {
      return `Ты ввел неверное значение`;
    }
    return `Увы, ты проиграл, но в следующий раз тебе повезет! Выбор компьютера "${compChoice}"`;
  };
  alert(printResult(userChoice, compChoice));
}

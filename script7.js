const header1 = document.querySelector("#header1");
const button1 = document.querySelector("#button1");

button1.addEventListener("click", function () {
  if (header1.style.display === "none") {
    header1.style.display = "block";
  } else {
    header1.style.display = "none";
  }
});

const paragraph1 = document.querySelector("#paragraph1");
const button2 = document.querySelector("#button2");

button2.addEventListener("click", function () {
  paragraph1.style.color = "blue";
});

const header2 = document.querySelector("#header2");
const button3 = document.querySelector("#button3");

button3.addEventListener("click", function () {
  header2.textContent = "Привет, Мир!";
});

const descriptions = document.querySelectorAll(".description");

descriptions.forEach((element) => {
  element.textContent = "Измененный текст";
});

const descriptionElements = document.querySelectorAll(".description2");

descriptionElements.forEach((element) => {
  element.textContent = "Новый текст";
});

const button4 = document.getElementById("button4");
const body = document.body;

button4.addEventListener("click", function () {
  const newElement = document.createElement("div");
  newElement.textContent = "Новый абзац";
  body.appendChild(newElement);
});

const button5 = document.getElementById("button5");
const description3 = document.querySelector(".description3");

button5.addEventListener("click", function () {
  if (description3) {
    description3.remove();
  }
});

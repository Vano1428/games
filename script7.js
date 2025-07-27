const header = document.querySelector("#myHeader");
const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
  if (header.style.display === "none") {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
});

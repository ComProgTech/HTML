// script.js
const header = document.querySelector("header");
const button = document.querySelector("#changeColorBtn");

button.addEventListener("click", () => {
  header.style.backgroundColor = "blue";
});

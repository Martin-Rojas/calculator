const btnNineElement = document.getElementById("nine");
const btnEightElement = document.getElementById("eight");

const resultElement = document.querySelector(".result");

console.log(btnNineElement.value);

let number = "";
let number2 = "";
let operator = "";

btnNineElement.addEventListener("click", () => {
  number += btnNineElement.value;
  resultElement.textContent = number;
});

btnEightElement.addEventListener("click", () => {
    number += btnEightElement.value;
    resultElement.textContent = number;
  });

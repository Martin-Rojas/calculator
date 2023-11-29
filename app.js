const btnNineElement = document.getElementById("nine");
const btnEightElement = document.getElementById("eight");

const btnAddElement = document.querySelector("#add");
const btnEqualElement = document.querySelector("#equal");

const resultElement = document.querySelector(".result");
const btnClearElement = document.querySelector("#clear");

console.log(btnAddElement.id);

let input = "";
let number = "";
let number2 = "";
let operator = "";

console.log(btnAddElement.value);

// basic math operators
const add = (input) => {
  console.log(input);
  const arrNumbers = input.split("+");
  console.log(arrNumbers);
  number = arrNumbers[0];
  number2 = arrNumbers[1];

  console.log(typeof Number(number));
  console.log(typeof number2);
  return Number(number) + Number(number2);
};

const subtract = (input) => {
  console.log(input);
  const arrNumbers = input.split("+");
  console.log(arrNumbers);
  number = arrNumbers[0];
  number2 = arrNumbers[1];

  console.log(typeof Number(number));
  console.log(typeof number2);
  return Number(number) - Number(number2);
};

const multiply = (input) => {
  console.log(input);
  const arrNumbers = input.split("+");
  console.log(arrNumbers);
  number = arrNumbers[0];
  number2 = arrNumbers[1];

  console.log(typeof Number(number));
  console.log(typeof number2);
  return Number(number) * Number(number2);
};

const divide = (input) => {
  console.log(input);
  const arrNumbers = input.split("+");
  console.log(arrNumbers);
  number = arrNumbers[0];
  number2 = arrNumbers[1];

  console.log(typeof Number(number));
  console.log(typeof number2);
  return Number(number) / Number(number2);
};

btnClearElement.addEventListener("click", () => {
  input = "";
  resultElement.textContent = input;
});

btnNineElement.addEventListener("click", () => {
  input += btnNineElement.value;
  resultElement.textContent = input;
});

btnEightElement.addEventListener("click", () => {
  input += btnEightElement.value;
  resultElement.textContent = input;
});

btnAddElement.addEventListener("click", () => {
  input += btnAddElement.value;
  resultElement.textContent = input;
  //console.log(add());
});

btnEqualElement.addEventListener("click", () => {
  console.log(add(input));
});

const btnsNumbers = document.querySelectorAll(`[data-number]`);
const btnsOperators = document.querySelectorAll(`[data-operator]`);

const btnEqualElement = document.querySelector("#equal");
const resultElement = document.querySelector(".result");
const operateElement = document.querySelector(".operation");
const btnClearElement = document.querySelector("#clear");
const btnDeleteElement = document.querySelector("#delete");

let input = "";
let inputHistory = "";
let number = "";
let number2 = "";
let curOperator = "";
let prevOperator = "";
let operator = "";
let display = "";
let result = "";

// math operators
const add = (number, number2) => {
  return Number(number) + Number(number2);
};

const subtract = (number, number2) => {
  return Number(number) - Number(number2);
};

const multiply = (number, number2) => {
  return Number(number) * Number(number2);
};

const divide = (number, number2) => {
  return Number(number) / Number(number2);
};

const operate = (operator, number, number2) => {
  if (operator === "+") {
    return add(number, number2);
  } else if (operator === "-") {
    return subtract(number, number2);
  } else if (operator === "*") {
    return multiply(number, number2);
  } else if (operator === "/") {
    return divide(number, number2);
  }
};

btnClearElement.addEventListener("click", () => {
  input = "";
  inputHistory = "";
  result = "";
  number = "";
  number2 = "";
  operator = "";
  resultElement.textContent = input;
  operateElement.textContent = inputHistory;
});

btnDeleteElement.addEventListener("click", () => {
  let newString = input.slice(0, input.length - 1);
  let newHistoryString = inputHistory.slice(0, input.length - 1);
  input = newString;
  inputHistory = newHistoryString;
  resultElement.textContent = input;
  operateElement.textContent = inputHistory;
});

//////////////////////////////////////////////////////

[...btnsNumbers].forEach((btn) => {
  btn.addEventListener(`click`, () => {
    input += btn.value;
    resultElement.textContent = input;

    if (operator === "") {
      inputHistory += btn.value;
      operateElement.textContent = inputHistory;
    }

    if (number !== "" && operator === "") {
      operateElement.textContent = inputHistory;
    }

    //console.log(`result: ${result}`);
    // console.log(`Operator is ${operator}`);
    // console.log(`prevOP is btnNums: ${prevOperator}`);
    //console.log(`number1: ${number}`);

    // get ist value num
    if (operator === "") {
      number = input;
    } else {
      number2 = input;
      resultElement.textContent = input;
    }
  });
});

[...btnsOperators].forEach((btn) => {
  btn.addEventListener("click", () => {
    inputHistory += btn.value;
    operateElement.textContent = inputHistory;

    // console.log(`HistoryInp: ${inputHistory}`);
    // console.log(`num: ${number}`);
    // console.log(`number2: ${number2}`);

    input = "";

    prevOperator = operator;
    // console.log(`prevOP : ${prevOperator}`);

    curOperator = btn.value;
    //console.log(`curr : ${curOperator} `);

    if (number !== `` && number2 !== `` && curOperator !== "") {
      inputHistory += btn.value;

      //console.log(`before line result ${number} ${prevOperator} ${number2}`);
      result = operate(prevOperator, number, number2);

      display = result.toString();
      inputHistory = result.toString();

      prevOperator = curOperator;
      number2 = "";
      input = "";
      number = result;
      curOperator = "";
      operator = "";
      //console.log(`after line result ${number} ${prevOperator} ${number2}`);

      resultElement.textContent = display;
      operateElement.textContent = inputHistory + prevOperator;
    }
    if (operator === "") {
      operator = btn.value;
    }

    console.log("end line" + operator);
  });
});

btnEqualElement.addEventListener("click", () => {
  console.log(`it works`);
  inputHistory += btnEqualElement.value;
  operateElement.textContent = inputHistory;

  input = "";

  prevOperator = operator;
  // console.log(`prevOP : ${prevOperator}`);

  curOperator = btnEqualElement.value;
  //console.log(`curr : ${curOperator} `);

  if (number !== `` && number2 !== `` && curOperator !== "") {
    inputHistory += btnEqualElement.value;

    console.log(`before line result ${number} ${prevOperator} ${number2}`);
    result = operate(prevOperator, number, number2);

    display = result.toString();
    inputHistory = result.toString();

    prevOperator = curOperator;
    number2 = "";
    input = "";
    number = result;
    curOperator = "";
    operator = "";
    console.log(
      `inside of btn= after line result ${number} ${prevOperator} ${number2}`
    );

    resultElement.textContent = display;
    operateElement.textContent = inputHistory + btnEqualElement.value;
  }
   
});

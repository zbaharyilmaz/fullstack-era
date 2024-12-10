//? SELECTORS

const container = document.querySelector(".container");
const title = document.querySelector(".title");
const inputNumber = document.querySelector(".inputNumber");
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const resetButton = document.querySelector(".resetButton");

//? VARIABLES

const errorColor = "red";
const successColor = "green";
const defaultColor = "black";
const backgroundColor = "white";

//? FUNCTIONS

function setMessage(message, color) {
  text.textContent = message;
  text.style.color = color;
  text.style.backgroundColor = backgroundColor;
  inputNumber.value = "";
  inputNumber.focus();
}

function resetInput() {
  inputNumber.disabled = false;
  text.textContent = "";
  text.style.backgroundColor = defaultColor;
}

function calculateSums(array) {
  let oddSum = 0;
  let evenSum = 0;
  array.forEach((value, index) => {
    if (index % 2 === 0) oddSum += value;
    else evenSum += value;
  });
  return { oddSum, evenSum };
}

//? CODE

window.onload = () => {
  inputNumber.focus();
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNumber = Number(inputNumber.value[0]);
  const tenthNumberInput = Number(inputNumber.value[9]);
  const eleventhNumberInput = Number(inputNumber.value[10]);
  const firstNine = inputNumber.value.split("").slice(0, 9).map(Number);

  const { oddSum, evenSum } = calculateSums(firstNine);
  const numberTen = (oddSum * 7 - evenSum) % 10;
  const numberEleven = (oddSum + evenSum + numberTen) % 10;

  if (isNaN(Number(inputNumber.value))) {
    setMessage("The input must be a numeric value", errorColor);
  } else if (inputNumber.value.length !== 11) {
    setMessage("The ID must consist of 11 digits", errorColor);
  } else if (firstNumber == 0) {
    setMessage("The ID cannot start with 0", errorColor);
  } else if (tenthNumberInput != numberTen) {
    setMessage("10th digit is not valid", errorColor);
  } else if (eleventhNumberInput != numberEleven) {
    setMessage("11th digit is not valid", errorColor);
  } else {
    setMessage(`Succesfull Entry: ${inputNumber.value}`, successColor);
  }
});
resetButton.addEventListener("click", resetInput);


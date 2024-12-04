const container = document.querySelector(".container");
const title = document.querySelector(".title");
const inputNumber = document.querySelector(".inputNumber");
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const resetButton = document.querySelector(".resetButton");
window.onload = () => {
  inputNumber.focus();
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const firstThree = Number(inputNumber.value.slice(0, 3));
  const midTwo = Number(inputNumber.value.slice(4, 6));
  const lastFour = Number(inputNumber.value.slice(7));
  if (inputNumber.value.length !== 11) {
    text.textContent = "11 Karakterli Olmalı";
    inputNumber.value = "";
  } else if (inputNumber.value[3] !== "-" || inputNumber.value[6] !== "-") {
    text.textContent = "Hatalı Yazım";
    inputNumber.value = "";
  } else if (firstThree === 0 || firstThree === 666 || firstThree >= 900) {
    text.textContent = "İlk Üç Hatalı";
    inputNumber.value = "";
  } else if (midTwo === 0 || lastFour === 0) {
    text.textContent = "Son 6 Hatalı";
    inputNumber.value = "";
  } else {
    text.textContent = `Girişiniz Başarılı ${inputNumber.value}`;
    text.style.color = "green";
    inputNumber.value = "";
    inputNumber.disabled = true;
  }
});
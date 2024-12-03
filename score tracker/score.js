let birinciScore = 0;
let ikinciScore = 0;
let hedefScore = 0;

const birinciScoreElement = document.querySelector('.birinciScore');
const ikinciScoreElement = document.querySelector('.ikinciScore');
const inputElement = document.querySelector('.input');
const button1 = document.querySelector('.b1');
const button2 = document.querySelector('.b2');
const resetButton = document.querySelector('.b3');
const messageElement = document.querySelector('.message'); // Kazananı göstermek için bir eleman

button1.onclick = function() {
    if (hedefScore > 0) {
        birinciScore += 1;
        birinciScoreElement.textContent = birinciScore;
        if (birinciScore >= hedefScore) {
            birinciScoreElement.classList.add('kazanan');
            ikinciScoreElement.classList.add('kaybeden');
            toggleButtons(true);
            messageElement.textContent = "Player 1 Wins! 🎉"; // Kazanan mesajı
            messageElement.style.color = "green";
        }
    }
};

button2.onclick = function() {
    if (hedefScore > 0) {
        ikinciScore += 1;
        ikinciScoreElement.textContent = ikinciScore;
        if (ikinciScore >= hedefScore) {
            birinciScoreElement.classList.add('kaybeden');
            ikinciScoreElement.classList.add('kazanan');
            toggleButtons(true);
            messageElement.textContent = "Player 2 Wins! 🎉"; // Kazanan mesajı
            messageElement.style.color = "green";
        }
    }
};

resetButton.onclick = function() {
    birinciScore = 0;
    ikinciScore = 0;
    hedefScore = 0;

    birinciScoreElement.textContent = birinciScore;
    ikinciScoreElement.textContent = ikinciScore;
    inputElement.value = '';
    messageElement.textContent = ""; // Mesajı temizle
    messageElement.style.color = "black";

    birinciScoreElement.classList.remove('kazanan', 'kaybeden');
    ikinciScoreElement.classList.remove('kazanan', 'kaybeden');

    toggleButtons(false);
};

inputElement.oninput = function() {
    hedefScore = Number(inputElement.value);
    if (isNaN(hedefScore) || hedefScore <= 0) {
        hedefScore = 0;
        alert("Please enter a valid positive number for the target score.");
    }
};

// Helper function for button state
function toggleButtons(state) {
    button1.disabled = state;
    button2.disabled = state;
}

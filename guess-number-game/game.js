let game = {
    minNum: 1,
    maxNum: 100,
    count: 1,
    secret: Math.floor(Math.random() * 100 + 1),
    sendE: document.getElementById("send"),
    guessE: document.getElementById("guess"),
    resetE: document.getElementById("reset"),
    resultE: document.getElementById("result"),
};

function update(message, color = "black", fontSize = "30px") {
    game.resultE.style.color = color;
    game.resultE.style.fontSize = fontSize;
    game.resultE.innerHTML = message;
    game.count++;
};

game.sendE.onclick = function () {
    let n = parseInt(game.guessE.value);

    if (isNaN(n) || n > 100 || n < 1) {
        update("Please, enter a valid number from 1 to 100.", "white", "35px");
        return;
    }
    if (game.count === 10) {
        update(`OOPS! The correct answer was ${game.secret}.`, "brown", "35px");
        return;
    }
    if (n === game.secret) {
        update(`CONGRATS! Successfully guessed answer in ${game.count} tries.`, "gold", "35px");
        return;
    }
    else if (n > game.secret) {
        game.maxNum = n;
        update(`Guess a smaller number from ${game.minNum} to ${game.maxNum}. You have ${10 - game.count} trials.`);
    }
    else {
        game.minNum = n;  // Minimum değeri güncelle
        update(`Guess a greater number from ${game.minNum} to ${game.maxNum}. You have ${10 - game.count} trials.`);
    }
    game.guessE.value = "";
}

game.resetE.onclick = function () {
    game.secret = Math.floor(Math.random() * 100 + 1); 
    game.count = 1;  
    game.minNum = 1; 
    game.maxNum = 100;
    update("", "black", "30px");  
    game.guessE.value = ""; 
  }

game.guessE.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    game.sendE.click(); 
  }
});
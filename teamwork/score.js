let game={
score1:0,
score2:0,
scoreAim:0,
}
const scoreFirst= document.querySelector(".birinciScore");
const scoreSec= document.querySelector(".ikinciScore");
const inputElement= document.querySelector(".input");
const button1= document.querySelector(".b1");
const button2= document.querySelector(".b2");
const resetButton= document.querySelector(".b3");

button1.onclick= function(){
    if(game.scoreAim>0){
        game.score1= game.score1 +1;
        scoreFirst.textContent=game.score1

        if(game.score1>= game.scoreAim){
            alert("The winner is Player 1!")
            button1.disabled=true;
            button2.disabled=true;
            scoreFirst.classList.add("winner");
            scoreSec.classList.remove("winner");
        }
    }
}
button2.onclick= function(){
    if(game.scoreAim>0){
        game.score2= game.score2 +1;
        scoreSec.textContent=game.score2

        if(game.score1>= game.scoreAim){
            alert("The winner is Player 2!")
            button1.disabled=true;
            button2.disabled=true;
            scoreSec.classList.add("winner");
            scoreFirst.classList.remove("winner");
        }
    }
}
resetButton.onclick= function(){
    game.score1=0;
    game.score2=0;
    game.scoreAim=0;
    ScoreFirst.textContent=game.score1;
    ScoreSec.textContent=game.score2;
    inputElement.valur= "";
    button1.disabled=false;
    button2.disabled=false;
}
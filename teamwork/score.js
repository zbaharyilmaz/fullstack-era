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

        if(game.score1>= scoreAim){
            alert()
            bu
        }
    }
}
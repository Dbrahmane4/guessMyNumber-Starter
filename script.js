'use strict';

const magicNumber = Math.trunc((Math.random()*20)+1);

const secretNumber = document.querySelector(".number");

const btnAgain = document.querySelector(".again");

const btnCheck = document.querySelector(".check");

const userMessage = document.querySelector(".message");

const gameScore = document.querySelector(".score");

const gameHighScore = document.querySelector('.highscore');

let score = 20;
let highscore = 0;

gameScore.textContent = score;
gameHighScore.textContent = highscore;

btnCheck.addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value);
   if(score>1){ 
    if(guess>0){
        if(guess === magicNumber){
            userMessage.textContent = "You are Correct";
            gameHighScore.textContent = score;
            secretNumber.textContent = magicNumber; 
            document.body.style.backgroundColor = 'green';
            secretNumber.style.width = '30rem';
        }
        else if(guess>magicNumber){
            userMessage.textContent = "You are to High";
            score--;
            gameScore.textContent = score;

        }
        else if(guess<magicNumber){
            userMessage.textContent = "You are too low";
            score--;
            gameScore.textContent = score;

        }
    }
    else{
        console.log("provide a correct input");
    }
   }
   else{
    gameScore.textContent = 0; 
    secretNumber.textContent = magicNumber; 
    document.body.style.backgroundColor = 'red';
    secretNumber.style.width = '30rem';
    userMessage.textContent = "You lost the game:(";
    document.querySelector(".guess").value = '';
   }
});

btnAgain.addEventListener("click",function(){
    score = 20;
    secretNumber;
    gameScore.textContent = score; 
    secretNumber.textContent = "?"; 
    document.body.style.backgroundColor = '#222';
    secretNumber.style.width = '15rem';
    userMessage.textContent = "Start guessing ......";
    document.querySelector(".guess").value = '';
})






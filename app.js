/**
 * Guess My Number.
 *
 */

 const cheatMode = true;
 const formGuess = document.querySelector('#form-guess');
 const turnout = document.querySelector('#turnout');
 const btnGiveup = document.querySelector('#btn-giveup');

 const getRandonNumber = function(max = 10){ // max är det maxvärde som kan slumpas ur funktionen
    return Math.ceil(Math.random() * max);
 };

 let correctNumber;
 let guesses; 

 const startGame = function(){
    correctNumber = getRandonNumber();
    guesses = 0;
    document.querySelector('#guesses').innerHTML = ``;

    if (cheatMode) {
       document.querySelector('#imma-cheat').innerText = correctNumber;
    }
 };

startGame();

 formGuess.addEventListener('submit', function(e){
    e.preventDefault();

    guesses++;
    document.querySelector('#guesses').innerHTML = `Guesses: <strong> ${guesses} </strong>`;
    
    guessedNumber = Number(document.querySelector('#input-guess').value);
    
    if (guessedNumber === correctNumber) {
    turnout.className = 'correct';
    }else if (guessedNumber > correctNumber) {
    turnout.className = 'too-high';
    }else if (guessedNumber < correctNumber) {
    turnout.className = 'too-low';
    }   
     
 });

 btnGiveup.addEventListener('click', function(){
     startGame();
 });

 
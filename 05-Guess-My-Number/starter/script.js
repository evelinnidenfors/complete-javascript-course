'use strict';

// document.querySelector('.message').textContent = 'Correct number 🥳';
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 22;

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const GUESS = Number(document.querySelector('.guess').value);
  const MESSAGE = document.querySelector('.message');
  const BACKGROUND = document.getElementsByTagName('body')[0];
  const NUMBER_BOX = document.querySelector('.number');
  let currentScore = document.querySelector('.score');

  console.log(currentScore, typeof currentScore);

  if (!GUESS) {
    MESSAGE.textContent = 'No number guessed 👀';
    // Correct guess made - changing some styling and text
  } else if (GUESS === secretNumber) {
    MESSAGE.textContent = 'Correct number guessed 🍾';
    BACKGROUND.style.backgroundColor = '#105c1c';
    NUMBER_BOX.style.width = '30rem';
    // Incorrect guesses, either too low or high and deducting points for each
  } else if (GUESS < secretNumber && score > 1) {
    MESSAGE.textContent = 'Incorrect number, too low 🫣';
    score--;
    currentScore.textContent = score;
  } else if (GUESS > secretNumber && score > 1) {
    MESSAGE.textContent = 'Incorrect number, too high 🫣';
    score--;
    currentScore.textContent = score;
    // If too many incorrect guesses, you lose the game
  } else {
    MESSAGE.textContent = 'You lost 😢';
    currentScore.textContent = 0;
  }
});

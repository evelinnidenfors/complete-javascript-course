'use strict';

const CHECK_BTN = document.querySelector('.check');
const AGAIN_BTN = document.querySelector('.again');
const MESSAGE = document.querySelector('.message');
const BACKGROUND = document.getElementsByTagName('body')[0];
const NUMBER_BOX = document.querySelector('.number');
const HIDDEN_NUMBER = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guessedNumber = document.querySelector('.guess');
let currentScore = document.querySelector('.score');
let highScoreSelector = document.querySelector('.highscore');

CHECK_BTN.addEventListener('click', () => {
  const GUESS = Number(guessedNumber.value);
  if (!GUESS) {
    MESSAGE.textContent = 'No number guessed 👀';
    // Correct guess made - changing some styling and text
  } else if (GUESS === secretNumber) {
    MESSAGE.textContent = 'Correct number guessed 🍾';
    HIDDEN_NUMBER.textContent = secretNumber;
    BACKGROUND.style.backgroundColor = '#105c1c';
    NUMBER_BOX.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreSelector.textContent = highScore;
    }
    // Incorrect guesses, either too low or high and deducting points for each
  } else if (GUESS !== secretNumber && score > 1) {
    MESSAGE.textContent =
      GUESS > secretNumber
        ? 'Incorrect number, too high 🫣'
        : 'Incorrect number, too low 🫣';
    score--;
    currentScore.textContent = score;
  } else {
    MESSAGE.textContent = 'You lost 😢';
    currentScore.textContent = 0;
  }
});

AGAIN_BTN.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore.textContent = score;
  MESSAGE.textContent = 'Start guessing...';
  HIDDEN_NUMBER.textContent = '?';
  BACKGROUND.style.backgroundColor = '#222';
  NUMBER_BOX.style.width = '15rem';
  guessedNumber.value = '';
});

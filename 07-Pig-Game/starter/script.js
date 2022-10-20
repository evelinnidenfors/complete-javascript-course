'use strict';

// Selecting elements
const PLAYER_ONE = document.querySelector('.player--0');
const PLAYER_TWO = document.querySelector('.player--1');
let playerOneScore = document.getElementById('score--0');
let playerTwoScore = document.getElementById('score--1');
let playerOneCurrentScore = document.getElementById('current--0');
let playerTwoCurrentScore = document.getElementById('current--1');
const DICE_EL = document.querySelector('.dice');
const NEW_DICE_BTN = document.querySelector('.btn--new');
const ROLL_DICE_BTN = document.querySelector('.btn--roll');
const HOLD_DICE_BTN = document.querySelector('.btn--hold');

let activeClass = 'player--active';
let hideClass = 'hidden';
let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOneCurrentScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;

  DICE_EL.classList.add(hideClass);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

init();

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  PLAYER_ONE.classList.toggle(activeClass);
  PLAYER_TWO.classList.toggle(activeClass);
};

ROLL_DICE_BTN.addEventListener('click', () => {
  if (playing) {
    // Generate a number between 1-6
    const DICE = Math.trunc(Math.random() * 6) + 1;

    // Display correct dice
    DICE_EL.classList.remove(hideClass);
    DICE_EL.src = `dice-${DICE}.png`;

    // Change player if number one
    if (DICE !== 1) {
      currentScore += DICE;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

HOLD_DICE_BTN.addEventListener('click', () => {
  if (playing) {
    // Set score of the active player
    scores[activePlayer] += currentScore;

    // Display score for the active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      DICE_EL.classList.add(hideClass);
      // Active player wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Swich active player
      switchPlayer();
    }
  }
});

NEW_DICE_BTN.addEventListener('click', () => {
  init();
});

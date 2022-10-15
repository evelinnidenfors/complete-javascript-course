'use strict';

const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');
const CLOSE_BTN = document.querySelector('.close-modal');
const OPEN_MODAL = document.querySelectorAll('.show-modal');
const HIDE_MODAL = 'hidden';

const closeModal = () => {
  MODAL.classList.add(HIDE_MODAL);
  OVERLAY.classList.add(HIDE_MODAL);
};

const openModal = () => {
  MODAL.classList.remove(HIDE_MODAL);
  OVERLAY.classList.remove(HIDE_MODAL);
};

for (let i = 0; i < OPEN_MODAL.length; i++) {
  OPEN_MODAL[i].addEventListener('click', openModal);
}

CLOSE_BTN.addEventListener('click', closeModal);
OVERLAY.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !MODAL.classList.contains('hidden')) {
    closeModal();
  }
});

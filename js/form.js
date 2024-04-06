import { isEscapeKey } from './util.js';
import './big-picture.js';
import {resetValidation, validate} from './hashtegs-validation.js';
import {resetScale} from './change-scale.js';
import {resetEffect} from './effects.js';
import {sendData} from './server.js';
import {successForm} from './successForm.js';
import {errorForm} from './errorForm.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const filename = form.filename;
const editingModal = form.querySelector('.img-upload__overlay');
const formSubmitButton = document.querySelector('.img-upload__submit');
const isErrorOpened = () => document.querySelector('.error') !== null;

const disabledSubmitButton = () => {
  formSubmitButton.disabled = true;

};

const enableSubmitButton = () => {
  formSubmitButton.disabled = false;
};
const closeModal = () => form.reset();

const isFocusText = () =>
  [form.hashtags, form.description].includes(document.activeElement);

const onDocumentEscape = (evt) => {
  if (isEscapeKey(evt) && !isErrorOpened() && !isFocusText()) {
    evt.preventDefault();
    closeModal();
  }
};
const classToggle = () => {
  editingModal.classList.toggle('hidden');
  body.classList.toggle('modal-open');
};
filename.addEventListener('change', (evt) => {
  evt.preventDefault();
  classToggle();
  document.addEventListener('keydown', onDocumentEscape);
});

form.addEventListener('reset', () => {
  classToggle();
  document.removeEventListener('keydown', onDocumentEscape);
  resetValidation();
  resetScale();
  resetEffect();
});
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = validate();
  if (isValid) {
    disabledSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        successForm();
        closeModal();
      })
      .catch(errorForm)
      .finally (enableSubmitButton);

  }
});


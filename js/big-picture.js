import { renderComments } from './comments-card.js';
import {isEscapeKey} from './util.js';

const newBody = document.body;

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

function showBigPhoto (photo) {
  bigPicture.querySelector ('.big-picture__img img').setAttribute ('src', photo.url);
  bigPicture.querySelector ('.likes-count').textContent = photo.likes;
  bigPicture.querySelector ('.social__caption').textContent = photo.description;
}

//1
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};
// 1
const toggleClasses = (willBeOpened = true) => {
  bigPicture.classList.toggle('hidden', !willBeOpened);
  newBody.classList.toggle('modal-open', willBeOpened);
};

function openModal(picture) {
  toggleClasses(true);
  showBigPhoto(picture);
  renderComments (picture.comments);
  document.addEventListener('keydown', onDocumentKeydown);
}
//1
function closeModal() {
  toggleClasses(false);
  document.removeEventListener('keydown', onDocumentKeydown);
}
//1
const onCloseButtonClick = closeModal;
closeButton.addEventListener('click', onCloseButtonClick);

export {openModal};

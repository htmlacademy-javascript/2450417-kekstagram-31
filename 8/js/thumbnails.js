import { openModal } from './big-picture';
import { getPhotoById } from './photo-state';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnails = (photo) => {
  const thumbnail = template.cloneNode(true);
  thumbnail.dataset.id = photo.id;

  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comment.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnail;
};

const renderThumbnails = (photos) => container.append(...photos.map(createThumbnails));

container.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('.picture');
  if (thumbnail === null) {
    return;
  }
  evt. preventDefault();
  const id = Number(thumbnail.dataset.id);
  const photo = getPhotoById(id);
  if(!photo) {
    return;
  }

  openModal (photo);
});
export {renderThumbnails};

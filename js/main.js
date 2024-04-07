
import { savePhotos } from './photo-state.js';
import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { getData } from './server.js';
import {errorLoadData} from './util.js';
import {sortPhotos} from './list-photo.js';
import './user-pictures.js';
getData ()
  .then((photos) => {
    sortPhotos(photos);
    savePhotos(photos);
    renderThumbnails(photos);
  })
  .catch(errorLoadData);


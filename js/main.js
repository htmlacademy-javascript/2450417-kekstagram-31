
import { savePhotos } from './photo-state.js';
import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { getData } from './server.js';
import {errorLoadData} from './util.js';
import {sddd} from './list-photo.js';
import './user-pictures.js';
getData ()
  .then((photos) => {
    savePhotos(photos);
    renderThumbnails(photos);
    sddd(photos);
  })
  .catch(errorLoadData);


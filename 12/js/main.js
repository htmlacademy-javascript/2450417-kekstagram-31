
import { savePhotos } from './photo-state.js';
import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { getData } from './server.js';
import {errorLoadData} from './util.js';

getData ()
  .then((photos) => {
    savePhotos(photos);
    renderThumbnails(photos);
  })
  .catch(errorLoadData);


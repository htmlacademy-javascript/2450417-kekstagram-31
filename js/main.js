
import { savePhotos } from './user/photo-state.js';
import { renderThumbnails } from './user/thumbnails.js';
import './function/form/form.js';
import { getData } from './function/form/server.js';
import {errorLoadData} from './util.js';

getData ()
  .then((photos) => {
    savePhotos(photos);
    renderThumbnails(photos);
  })
  .catch(errorLoadData);


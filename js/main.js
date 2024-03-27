import { createPhotoCard } from './data.js';
import { savePhotos } from './photo-state.js';
import {renderThumbnails} from './thumbnails.js';
import './form.js';
const photos = createPhotoCard(25);
savePhotos(photos);
renderThumbnails(photos);

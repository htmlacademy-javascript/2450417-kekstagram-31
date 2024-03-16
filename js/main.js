import { createPhotoCard } from './data.js';
import { savePhotos } from './photo-state.js';
import {renderThumbnails} from './thumbnails.js';

const photos = createPhotoCard(25);
savePhotos(photos);
renderThumbnails(photos);

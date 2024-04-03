import {debounce} from './util.js';
import {renderThumbnails} from './thumbnails.js';
let picture = [];
const PPORTION_PFOTOS = 10;
const filtersContainer = document.querySelector('.img-filters');
const actieButton = 'img-filters__button--active';

const discussedFilters = filtersContainer.querySelector('filter-discussed');
const randomFilters = filtersContainer.querySelector('filter-random');
const defaultFilters = filtersContainer.querySelector('filter-default');

const debounceRender = debounce(renderThumbnails);

function filterChange (evt) {
  const activeFilter = document.querySelector(`.${actieButton}`);
  if (activeFilter === evt.target) {
    return;
  }
  activeFilter.classList.remove(actieButton);
  evt.target.classList.add(actieButton);
  selectFilter();
}

let filteredPhoto = [];
function selectFilter () {
  filtersContainer.addEventListener('click', (evt) => {
    if(evt.target.id === defaultFilters){
      filteredPhoto = picture;
    }else if(evt.target.id === discussedFilters){
      filteredPhoto = picture.slice().sort((picA,picB) => picB.comments.length - picA.comments.length);
    }else if(evt.target.id === randomFilters){
      filteredPhoto = picture.slice().sort(() => Math.random() - 0.5).slice(0, PPORTION_PFOTOS);
    }
    debounceRender(filteredPhoto);
  });
}
export function sddd(pictureData) {
  filtersContainer.classList.remove('img-filters--inactive');
  filtersContainer.addEventListener('click',filterChange);
  picture = pictureData;
}


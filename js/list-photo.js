import {debounce} from './util.js';
import {renderThumbnails} from './thumbnails.js';
const PPORTION_PFOTOS = 10;
const filtersContainer = document.querySelector('.img-filters');
const actieClassname = 'img-filters__button--active';
const debounceRender = debounce(renderThumbnails);

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

let filterdefault = Filters.DEFAULT;
function filterChange (evt) {
  const activeFilter = document.querySelector(`.${actieClassname}`);
  const targetButton = evt.target;
  if (activeFilter === targetButton) {
    return;
  }
  activeFilter.classList.remove(actieClassname);
  evt.target.classList.add(actieClassname);
  filterdefault = targetButton.getAttribute('id');
  selectFilter();
}
let pictures = [];
let filteredData = [];

function selectFilter () {
  if(filterdefault === 'filter-random'){
    filteredData = pictures.sort(() => Math.random() - 0.5).slice(0, PPORTION_PFOTOS);
  }
  if(filterdefault === 'filter-discussed'){
    filteredData = pictures.slice().sort((picA,picB) => picB.comments.length - picA.comments.length);
  }
  if(filterdefault === 'filter-default'){
    filteredData = pictures;
  }
  debounceRender(filteredData);
}

function sddd(picturesData) {
  filtersContainer.classList.remove('img-filters--inactive');
  filtersContainer.addEventListener('click',filterChange);
  pictures = picturesData;
}
export {sddd};

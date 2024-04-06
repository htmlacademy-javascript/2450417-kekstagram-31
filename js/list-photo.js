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
  activeFilter.classList.add(actieClassname);
  targetButton.classList.remove(actieClassname);
  filterdefault = targetButton.getAttribute('id');
  selectFilter();

}
let pictures = [];
let filteredData = [];

function selectFilter() {
  if(filterdefault === Filters.RANDOM){
    filteredData = pictures.sort(() => Math.random() - 0.5).slice(0, PPORTION_PFOTOS);
  }
  if(filterdefault === Filters.DISCUSSED){
    filteredData = pictures.slice().sort((picA,picB) => picB.comments.length - picA.comments.length);
  }
  if(filterdefault === Filters.DEFAULT){
    filteredData = pictures;
  }
  debounceRender(filteredData);
}

function sortPhotos (picturesData) {
  filtersContainer.classList.remove('img-filters--inactive');
  filtersContainer.addEventListener('click',filterChange);
  pictures = picturesData;
}
export {sortPhotos};

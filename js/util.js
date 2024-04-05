// рандом
const getRandomInteger = (a,b) => {
  const lower = Math.ceil (Math.min(a,b));
  const upper = Math.floor (Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getSortRandome = () => getRandomInteger(-1, 1);
const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

const isUniqueArray = (array) => new Set(array).size === array.length;

// если ошибки
const REMOVE_MESSEGE_TIMEOUT = 5000;
const errorLoadDataTemplate = document.querySelector('#data-error').content;
const body = document.body;
const errorLoadDataArea = body.querySelector('.data-error');

const errorLoadData = () => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  body.append(errorArea);

  setTimeout(() => {
    errorLoadDataArea.remove();
  }, REMOVE_MESSEGE_TIMEOUT);
};
//
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...arguments), timeoutDelay);
  };
}

export {getRandomElement,getRandomInteger,isEscapeKey,isUniqueArray,errorLoadData,debounce,getSortRandome};

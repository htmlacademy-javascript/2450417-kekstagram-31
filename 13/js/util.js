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
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
export {isEscapeKey,isUniqueArray,errorLoadData,debounce};

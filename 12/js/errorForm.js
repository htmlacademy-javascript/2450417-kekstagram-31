const errorTemplate = document.querySelector('#error').content;
const newErrorSection = document.querySelector('.error');
export const errorForm = () => {
  const newErrorTemplate = errorTemplate.cloneNode(true);
  const errorButton = newErrorTemplate.querySelector('.error__button');
  document.querySelector('body').append(newErrorTemplate);

  const onCloseError = (evt) => {
    if (evt.target === newErrorSection) {
      newErrorTemplate.remove();
    }
  };
  const onEscapeError = (evt) => {
    if (evt.key === 'Escape') {
      newErrorTemplate.remove();
    }
  };
  const onButtonClickError = () => {
    newErrorTemplate.remove();
  };
  document.addEventListener('keydown', onEscapeError,onCloseError);
  errorButton.addEventListener('click', onButtonClickError);
};

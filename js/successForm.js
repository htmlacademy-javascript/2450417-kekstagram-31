const successTemplate = document.querySelector('#success').content.querySelector('.success');
export const successForm = () => {
  const newSuccessTamplate = successTemplate.cloneNode(true);
  const successButton = newSuccessTamplate.querySelector('.success__button');
  const newSuccessSection = newSuccessTamplate.querySelector('.success__inner');
  document.querySelector('body').append(newSuccessTamplate);
  const onCloseSuccess = (evt) => {
    if (evt.target === newSuccessSection) {
      newSuccessTamplate.remove();
    }
  };
  const onEscapeSuccess = (evt) => {
    if (evt.key === 'Escape') {
      newSuccessTamplate.remove();
    }
  };
  const onButtonClick = () => {
    newSuccessTamplate.remove();

  };
  document.addEventListener('keydown', onEscapeSuccess,onCloseSuccess);
  successButton.addEventListener('click', onButtonClick);
};


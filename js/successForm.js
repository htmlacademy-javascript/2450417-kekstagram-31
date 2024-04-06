const successTemplate = document.querySelector('#success').content.querySelector('.success');
export const successForm = () => {
  const newSuccessTamplate = successTemplate.cloneNode(true);
  const successButton = newSuccessTamplate.querySelector('.success__button');
  const newSuccessSection = newSuccessTamplate.querySelector('.success__inner');
  document.querySelector('body').append(newSuccessTamplate);

  const onCloseSuccess = (evt) => {
    if (! newSuccessSection.contains(evt.target)) {
      removeForm();
    }
  };
  const onEscapeSuccess = (evt) => {
    if ((evt.key === 'Escape')) {
      removeForm();
    }
  };
  const onButtonClick = () => {
    removeForm();
  };
  successButton.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click',onCloseSuccess);

  function removeForm() {
    successButton.removeEventListener('click', onButtonClick);
    document.removeEventListener('keydown', onEscapeSuccess,);
    document.removeEventListener('click', onCloseSuccess);
    newSuccessTamplate.remove();
  }
};

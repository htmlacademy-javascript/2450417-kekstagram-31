
// Функция для проверки длины строки
// eslint-disable-next-line no-unused-vars
const lengthString = (string, Maxlength) => string.length <= Maxlength;

//Функция для проверки, является ли строка палиндромом
// eslint-disable-next-line no-unused-vars
const findPalendrom = (string) => {
  const formattedinString = string.replaceAll(' ', '').toUpperCase();
  let reverseString = '';
  for (let i = formattedinString.length - 1;i >= 0;i--) {
    reverseString += formattedinString [i];
  }
  return formattedinString === reverseString;
};


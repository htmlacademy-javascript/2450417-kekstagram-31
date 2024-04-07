
import {getRandomElement,getRandomInteger} from './util.js';
const createIdGenerator = () => {
  let id = 1;
  return () => id++;
};
const getCommentId = createIdGenerator();
const USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const USER_NAME = [
  'Иван',
  'Мария',
  'Анна',
  'Виктор',
  'Юлия',
  'Павел',
  'Алена'

];
const getPhotoId = createIdGenerator();
const DESCRIPTION = [
  'Поймал дзен',
  'В самое сердце',
  'Можно лучше',
  'Почти получилось',
  'Мне нравится',
  'Крутой ракурс'

];
const createComment = () => ({
  id: getCommentId (),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(USER_MESSAGES),
  name:getRandomElement(USER_NAME),

});
const createPhoto = () => {
  const id = getPhotoId ();
  const countComment = getRandomInteger (0, 30);
  const comments = Array.from({ length: countComment }, createComment);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomElement (DESCRIPTION),

    likes: getRandomInteger (15,200),
    comments
  };
};
const createPhotoCard = (count) => Array.from({length: count}, createPhoto);

export {createPhotoCard};


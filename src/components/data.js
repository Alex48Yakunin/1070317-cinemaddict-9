import {getFilmCard} from './getFilmCard';
import {getComments} from './getComments';

const dataFilm = [
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
  getFilmCard(),
];


const dataComments = [
  getComments(),
  getComments(),
  getComments(),
  getComments(),
  getComments(),
];

export {dataFilm, dataComments};

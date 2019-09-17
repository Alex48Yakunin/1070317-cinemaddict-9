import {PageController} from './controllers/PageController';
import {getFilmCard} from './components/data';
import {films} from './components/films';
import {mainNavigation} from './components/mainNavigation';
import {profile} from './components/profile';
import {search} from './components/search';
import {Position, createElement, render} from './components/utils';

const FILM_COUNT = 5;

const filmMocks = new Array(FILM_COUNT)
  .fill(``)
  .map(getFilmCard);

const headerContainer = document.querySelector(`.header`);
const siteMainContainer = document.querySelector(`.main`);

const renderSearch = () => {
  render(headerContainer, createElement(search()), Position.BEFOREEND);
};
const renderProfile = () => {
  render(headerContainer, createElement(profile()), Position.BEFOREEND);
};
const renderMainNavigation = () => {
  render(siteMainContainer, createElement(mainNavigation()), Position.BEFOREEND);
};

const renderFilms = () => {
  render(siteMainContainer, createElement(films()), Position.BEFOREEND);
};
renderSearch();
renderProfile();
renderMainNavigation();
renderFilms();
const filmContainer = siteMainContainer.querySelector(`.films`);
const filmsController = new PageController(filmContainer, filmMocks);
filmsController.init();

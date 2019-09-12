import {PageController} from './controllers/PageController';
import {FilmCard} from './components/FilmCard';
import {FilmDetails} from './components/FilmDetails';
import {getFilmCard} from './components/data';
import {films} from './components/films';
import {mainNavigation} from './components/mainNavigation';
import {profile} from './components/profile';
import {FilmsListContainer} from './components/FilmsListContainer';
import {FilmsList} from './components/FilmsList';
import {search} from './components/search';
import {showMore} from './components/showMore';
import {Position, createElement, render} from './components/utils';

const FILM_COUNT = 5;
const FILM_COUNT_EXTRA = 2;

const filmMocks = new Array(FILM_COUNT)
  .fill(``)
  .map(getFilmCard);

const filmMocksExtra = new Array(FILM_COUNT_EXTRA)
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
const renderFilmList = () => {
  render(filmContainer, createElement(new FilmsList().getTemplate()), Position.AFTERBEGIN);
};
renderFilmList();

const filmListCont = siteMainContainer.querySelector(`.films-list`);
const renderFilmListContainer = () => {
  render(filmListCont, createElement(new FilmsListContainer().getTemplate()), Position.AFTERBEGIN);
};
renderFilmListContainer();

const filmListContainer = document.querySelector(`.films-list__container`);
const filmListContainerExtraFirst = document.querySelector(`.films-list--extra_top .films-list__container`);
const filmListContainerExtraLast = document.querySelector(`.films-list--extra_most .films-list__container`);
const ListContainer = document.querySelector(`.films-list`);

const filmsController = new PageController(filmListContainer, filmMocks);
filmsController.init();

const renderFilmCardExtraFirst = (filmMockE) => {
  const filmCard = new FilmCard(filmMockE);
  const filmDetail = new FilmDetails(filmMockE);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      filmListContainerExtraFirst.replaceChild(filmCard.getElement(), filmDetail.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  filmCard.getElement()
    .querySelector(`.film-card__comments`)
    .addEventListener(`click`, () => {
      filmListContainerExtraFirst.replaceChild(filmDetail.getElement(), filmCard.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });


  filmDetail.getElement()
    .querySelector(`.film-details__close-btn`)
    .addEventListener(`click`, () => {
      filmListContainerExtraFirst.replaceChild(filmCard.getElement(), filmDetail.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(filmListContainerExtraFirst, filmCard.getElement(), Position.BEFOREEND);
};
const renderFilmCardExtraLast = (filmMockE) => {
  const filmCard = new FilmCard(filmMockE);
  const filmDetail = new FilmDetails(filmMockE);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      filmListContainerExtraLast.replaceChild(filmCard.getElement(), filmDetail.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  filmCard.getElement()
    .querySelector(`.film-card__comments`)
    .addEventListener(`click`, () => {
      filmListContainerExtraLast.replaceChild(filmDetail.getElement(), filmCard.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });


  filmDetail.getElement()
    .querySelector(`.film-details__close-btn`)
    .addEventListener(`click`, () => {
      filmListContainerExtraLast.replaceChild(filmCard.getElement(), filmDetail.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(filmListContainerExtraLast, filmCard.getElement(), Position.BEFOREEND);
};

filmMocksExtra.forEach((filmMockE) => renderFilmCardExtraFirst(filmMockE));
filmMocksExtra.forEach((filmMockE) => renderFilmCardExtraLast(filmMockE));


const renderShowMore = () => {
  render(ListContainer, createElement(showMore()), Position.BEFOREEND);
};

renderShowMore();

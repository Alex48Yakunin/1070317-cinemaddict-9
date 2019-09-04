import {FilmCard} from './components/FilmCard';
import {FilmDetails} from './components/FilmDetails';
// import {Comment} from './components/comments';
// import {getComments} from './components/data';
import {getFilmCard} from './components/data';
import {films} from './components/films';
import {mainNavigation} from './components/mainNavigation';
import {profile} from './components/profile';
import {search} from './components/search';
import {showMore} from './components/showMore';
import {sort} from './components/sort';
// import {statistic} from './components/statistic';
import {Position, render, createElement} from './components/utils';


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
const renderSort = () => {
  render(siteMainContainer, createElement(sort()), Position.BEFOREEND);
};
const renderFilms = () => {
  render(siteMainContainer, createElement(films()), Position.BEFOREEND);
};


renderSearch();
renderProfile();
renderMainNavigation();
renderSort();
renderFilms();


const filmListContainer = document.querySelector(`.films-list__container`);
const filmListContainerExtraFirst = document.querySelector(`.films-list--extra_top .films-list__container`);
const filmListContainerExtraLast = document.querySelector(`.films-list--extra_most .films-list__container`);
const ListContainer = document.querySelector(`.films-list`);


const renderFilmCard = (filmMock) => {
  const filmCard = new FilmCard(filmMock);
  const filmDetail = new FilmDetails(filmMock);
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      filmListContainer.replaceChild(filmCard.getElement(), filmDetail.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  filmCard.getElement()
      .querySelector(`.film-card__comments`)
      .addEventListener(`click`, () => {
        filmListContainer.replaceChild(filmDetail.getElement(), filmCard.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });


  filmDetail.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, () => {
        filmListContainer.replaceChild(filmCard.getElement(), filmDetail.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });
  // commentsMocks.forEach((commentItem)=> commentItem.getElement());
  render(filmListContainer, filmCard.getElement(), Position.BEFOREEND);
};

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

filmMocks.forEach((filmMock) => renderFilmCard(filmMock));
filmMocksExtra.forEach((filmMockE) => renderFilmCardExtraFirst(filmMockE));
filmMocksExtra.forEach((filmMockE) => renderFilmCardExtraLast(filmMockE));


const renderShowMore = () => {
  render(ListContainer, createElement(showMore()), Position.BEFOREEND);
};

renderShowMore();

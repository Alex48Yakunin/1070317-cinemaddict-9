import {FilmsList} from '../components/FilmsList';
import {Sort} from '../components/Sort';
import {FilmsListContainer} from '../components/FilmsListContainer';
import {FilmCard} from '../components/FilmCard';
import {FilmDetails} from '../components/FilmDetails';
import {Position, render, Key} from '../components/utils';


class PageController {
  constructor(container, filmsCard) {
    this._container = container;
    this._filmsCard = filmsCard;
    this._FilmsList = new FilmsList();
    this._sort = new Sort();
    this._filmsListContainer = new FilmsListContainer();
  }
  init() {
    render(this._container, this._FilmsList.getElement(), Position.BEFOREEND);
    render(this._FilmsList.getElement(), this._sort.getElement(), Position.AFTERBEGIN);
    render(this._FilmsList.getElement(), this._filmsListContainer.getElement(), Position.BEFOREEND);

    this._filmsCard.forEach((filmsMock) => this._renderTask(filmsMock));

    this._sort.getElement()
      .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }
  _renderFilms(film) {
    const filmComponent = new FilmCard(film);
    const filmDetailComponent = new FilmDetails(film);

    const onEscKeyDown = (evt) => {
      if (evt.key === Key.ESCAPE || evt.key === Key.ESCAPE_IE) {
        this._filmsListContainer.getElement().replaceChild(filmComponent.getElement(), filmDetailComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    filmComponent.getElement()
      .querySelector(`.film-card__comments`)
      .addEventListener(`click`, () => {
        this._filmsListContainer.getElement().replaceChild(filmDetailComponent.getElement(), filmComponent.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    filmDetailComponent.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    filmDetailComponent.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    filmDetailComponent.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._filmsListContainer.getElement().replaceChild(filmComponent.getElement(), filmDetailComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    render(this._filmsListContainer.getElement(), filmComponent.getElement(), Position.BEFOREEND);
  }
  _onSortLinkClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    this._filmsListContainer.getElement().innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `rating`:
        const sortedByRating = this._filmsCard.slice().sort((a, b) => a.rating() - b.rating());
        sortedByRating.forEach((filmMock) => this._renderFilms(filmMock));
        break;
      case `date`:
        const sortedByDate = this._filmsCard.slice().sort((a, b) => b.year - a.year);
        sortedByDate.forEach((filmMock) => this._renderFilms(filmMock));
        break;
      case `default`:
        this._filmsCard.forEach((filmMock) => this._renderFilms(filmMock));
        break;
    }
  }
}

export {PageController};

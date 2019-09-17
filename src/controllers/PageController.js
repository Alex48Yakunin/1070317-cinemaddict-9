import {FilmsList} from '../components/FilmsList';
import {Sort} from '../components/Sort';
import {FilmsListContainer} from '../components/FilmsListContainer';
import {ShowMore} from '../components/ShowMore';
import {Position, render, unrender} from '../components/utils';
import {MovieController} from './MovieController';

class PageController {
  constructor(container, filmsCard) {
    this._container = container;
    this._filmsCard = filmsCard;
    this._FilmsList = new FilmsList();
    this._ShowMore = new ShowMore();
    this._sort = new Sort();
    this._filmsListContainer = new FilmsListContainer();

    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);

  }
  init() {
    render(this._container, this._FilmsList.getElement(), Position.AFTERBEGIN);
    render(this._FilmsList.getElement(), this._sort.getElement(), Position.AFTERBEGIN);
    render(this._FilmsList.getElement(), this._filmsListContainer.getElement(), Position.BEFOREEND);
    render(this._FilmsList.getElement(), this._ShowMore.getElement(), Position.BEFOREEND);

    this._filmsCard.forEach((filmsMock) => this._renderFilms(filmsMock));

    this._sort.getElement()
      .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  _renderFilm() {
    unrender(this._filmsListContainer.getElement());

    this._filmsListContainer.removeElement();
    render(this._FilmsList.getElement(), this._filmsListContainer.getElement(), Position.BEFOREEND);
    this._filmsCard.forEach((filmsMock) => this._renderFilms(filmsMock));
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _renderFilms(film) {
    const movieController = new MovieController(this._filmsListContainer, film, this._onChangeView, this._onDataChange);
    this._subscriptions.push(movieController.setDefaultView.bind(movieController));
  }

  _onDataChange(newData, oldData) {
    this._filmsCard[this._filmsCard.findIndex((it2) => it2 === oldData)] = newData;

    this._renderFilm(this._filmsCard);

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

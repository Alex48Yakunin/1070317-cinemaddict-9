import {createElement} from './utils';

class FilmCard {
  constructor({
    title,
    img,
    description,
    year,
    genres,
    isWatchlist,
    isHistory,
    isFavorites
  }) {
    this._title = title;
    this._genres = genres;
    this._img = img;
    this._description = description;
    this._element = null;
    this._year = year;
    this._isWatchlist = isWatchlist;
    this._isHistory = isHistory;
    this._isFavorites = isFavorites;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
  rating() {
    const arrayRating = Array.from({
      length: 40
    }, () => Math.floor(Math.random() * 11));
    const number = (array) => {
      const total = array.reduce((acc, c) => acc + c, 0);
      return total / array.length;
    };
    return number(arrayRating);
  }
  time() {
    const measuredTime = new Date(null);
    measuredTime.setSeconds(Math.random() * 12000);
    const MHSTime = measuredTime.toISOString().substr(11, 8);
    return MHSTime;
  }
  comments() {
    const count = Math.random() * 10;
    return count.toFixed();
  }
  getTemplate() {
    return `<article class="film-card">
    <h3 class="film-card__title">${this._title}</h3>
    <p class="film-card__rating">${this.rating().toFixed(1)}</p>
    <p class="film-card__info">
      <span class="film-card__year">${this._year}</span>
      <span class="film-card__duration">${this.time()}</span>
      ${(Array.from(this._genres).map((ganre) => (`
      <span class="film-card__genre">${ganre}</span>`.trim()
  ))).join(``)} 
    </p>
    <img src="${this._img}" alt="" class="film-card__poster">
    <p class="film-card__description">${this._description}</p>
    <a class="film-card__comments">${this.comments()} comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`;
  }
}

export {FilmCard};

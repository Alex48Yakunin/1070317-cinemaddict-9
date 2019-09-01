import {createElement} from './utils';

class filmCard {
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
    this.title = title;
    this.genres = genres;
    this.img = img;
    this.description = description;
    this._element = null;
    this.year = year;
    this.isWatchlist = isWatchlist;
    this.isHistory = isHistory;
    this.isFavorites = isFavorites;
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
  getTemplate() {
    return `<article class="film-card">
    <h3 class="film-card__title">${this.title}</h3>
    <p class="film-card__rating">${this.rating().toFixed(1)}</p>
    <p class="film-card__info">
      <span class="film-card__year">${this.year}</span>
      <span class="film-card__duration">${this.time()}</span>
      ${Array.from(this.genres).map((genre) => `<span class="film-card__genre">
        ${genre}
    </span>`).join(``)}
    </p>
    <img src="${this.img}" alt="" class="film-card__poster">
    <p class="film-card__description">${this.description.slice(1, Math.random() * 9).join(``)}</p>
    <a class="film-card__comments">${this.comments()} comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`;
  }
}

export {filmCard};

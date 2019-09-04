import {createElement} from './utils';

class Comment {
  constructor({
    img,
    text,
    author,
    date
  }) {
    this._img = img;
    this._element = null;
    this._text = text;
    this._author = author;
    this._date = new Date(date);
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
  getTemplate() {
    return `
    <ul class="film-details__comments-list">
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="${this._img}" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">${this._text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${this._author}</span>
          <span class="film-details__comment-day">${this._date.toDateString()}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  </ul>
    `;
  }
}

export {Comment};

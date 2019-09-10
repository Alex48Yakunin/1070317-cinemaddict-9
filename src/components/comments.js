import {createElement} from './utils';
// import {getComments} from '../components/data';

class Comment {
  constructor({
    imgComment,
    textComment,
    authorComment,
    dateComment
  }) {
    this._imgComment = imgComment;
    this._elementComment = null;
    this._textComment = textComment;
    this._authorComment = authorComment;
    this._dateComment = new Date(dateComment);
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
        <img src="${this._imgComment}" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">${this._textComment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${this._authorComment}</span>
          <span class="film-details__comment-day">${this._dateComment.toDateString()}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  </ul>
    `;
  }
}

export {Comment};

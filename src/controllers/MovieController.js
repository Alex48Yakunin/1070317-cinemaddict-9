import {FilmCard} from '../components/FilmCard';
import {FilmDetails} from '../components/FilmDetails';
import {Position, render, Key} from '../components/utils';

class MovieController {
  constructor(container, data, onChangeView, onDataChange) {
    this._container = container;
    this._data = data;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this._filmCardView = new FilmCard(data);
    this._filmDetails = new FilmDetails(data);

    this.create();
  }

  create() {

    const onEscKeyDown = (evt) => {
      if (evt.key === Key.ESCAPE || evt.key === Key.ESCAPE_IE) {
        this._container.getElement().replaceChild(this._filmCardView.getElement(), this._filmDetails.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };


    this._filmDetails.getElement().querySelector(`textarea`)
          .addEventListener(`focus`, () => {
            document.removeEventListener(`keydown`, onEscKeyDown);
          });

    this._filmDetails.getElement().querySelector(`textarea`)
          .addEventListener(`blur`, () => {
            document.addEventListener(`keydown`, onEscKeyDown);
          });


    this._filmCardView.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._onChangeView();
      this._container.getElement().replaceChild(this._filmDetails.getElement(), this._filmCardView.getElement());

      document.addEventListener(`keydown`, onEscKeyDown);
    });

    this._filmDetails
          .getElement()
          .querySelector(`.film-details__inner`)
          .addEventListener(`submit`, (evt) => {
            evt.preventDefault();
            this._container.getElement().replaceChild(this._filmCardView.getElement(), this._filmDetails.getElement());
          });

    this._filmDetails.getElement()
          .querySelector(`.film-details__close-btn`)
          .addEventListener(`click`, () => {

            const formData = new FormData(this._filmDetails.getElement().querySelector(`.film-details__inner`));

            const entry = {
              textComment: formData.get(`text`),
              dueDate: new Date(formData.get(`date`)),
            };


            this._onDataChange(entry, this._data);


            document.removeEventListener(`keydown`, onEscKeyDown);
          });

    render(this._container.getElement(), this._filmCardView.getElement(), Position.BEFOREEND);
  }

  setDefaultView() {
    if (this._container.getElement().contains(this._filmDetails.getElement())) {
      this._container.getElement().replaceChild(this._filmCardView.getElement(), this._filmDetails.getElement());
    }
  }
}

export {MovieController};

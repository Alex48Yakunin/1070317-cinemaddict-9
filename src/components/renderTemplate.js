/* eslint-disable guard-for-in */
import {search} from './search';
import {profile} from './profile';
import {mainNavigation} from './main-navigation';
// import {statistic} from './statistic';
import {sort} from './sort';
import {films} from './films';
import {filmCard} from './film-card';
import {filmDetails} from './film-Details';
import {showMore} from './show-more';
import {getFilmCard} from './getFilmCard';
import {dataFilm} from './data';
import {getFilter} from './getFilter';
import {dataFilmDetails} from './dataFilmDetails';
import {getComments} from './getComments';
import {comment} from './comments';
import {dataComments} from './data';

const renderTemplate = (container, node) => {
  const block = document.querySelector(container);
  const div = document.createElement(`section`);
  div.innerHTML = node.trim();
  block.appendChild(div.firstChild);
};

const render = () => {
  renderTemplate(`.header`, search());
  renderTemplate(`.header`, profile(getFilter));
  renderTemplate(`.main`, mainNavigation(getFilter));
  renderTemplate(`.main`, sort());
  renderTemplate(`.main`, films());
  let newDataFilm = dataFilm.slice(0, 5);
  for (let value in newDataFilm) {
    if (value <= newDataFilm.length) {
      renderTemplate(`.films-list .films-list__container`, filmCard(getFilmCard()));
    }
  }
  newDataFilm = dataFilm.slice(5, dataFilm.length);
  document.addEventListener(`DOMContentLoaded`, function () {
    document.getElementById(`show-more`).addEventListener(`click`, function () {
      for (let value in newDataFilm) {
        if (value <= newDataFilm.length) {
          renderTemplate(`.films-list .films-list__container`, filmCard(getFilmCard()));
          document.getElementById(`show-more`).style.display = `none`;
        }
      }
    });
  });
  for (let i = 0; i < 2; i++) {
    renderTemplate(`.films-list--extra .films-list__container`, filmCard(getFilmCard()));
  }
  for (let i = 0; i < 2; i++) {
    renderTemplate(`.films-list--extra:last-of-type .films-list__container`, filmCard(getFilmCard()));
  }
  renderTemplate(`.films-list`, showMore());
  renderTemplate(`body`, filmDetails(dataFilmDetails(), getComments()));

  for (let value in dataComments) {
    if (value <= dataComments.length) {
      renderTemplate(`.film-details__comments-wrap`, comment(getComments()));
    }
  }


};

export {render as renderTemplate};

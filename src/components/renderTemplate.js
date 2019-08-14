import {
  search
} from './search';
import {
  profile
} from './profile';
import {
  mainNavigation
} from './main-navigation';
// import {statistic} from './statistic';
import {
  sort
} from './sort';
import {
  films
} from './films';
import {
  filmCard
} from './film-card';
import {
  filmDetails
} from './film-Details';
import {
  showMore
} from './show-more';

const renderTemplate = (container, node) => {
  const block = document.querySelector(container);
  const div = document.createElement(`section`);
  div.innerHTML = node.trim();
  block.appendChild(div.firstChild);
};

const render = () => {

  renderTemplate(`.header`, search());
  renderTemplate(`.header`, profile());
  renderTemplate(`.main`, mainNavigation());
  renderTemplate(`.main`, sort());
  renderTemplate(`.main`, films());
  for (let i = 0; i < 5; i++) {
    renderTemplate(`.films-list .films-list__container`, filmCard());
  }
  for (let i = 0; i < 2; i++) {
    renderTemplate(`.films-list--extra .films-list__container`, filmCard());
  }
  for (let i = 0; i < 2; i++) {
    renderTemplate(`.films-list--extra:last-of-type .films-list__container`, filmCard());
  }
  renderTemplate(`.films-list`, showMore());
  renderTemplate(`body`, filmDetails());

};

export {
  render as renderTemplate
};
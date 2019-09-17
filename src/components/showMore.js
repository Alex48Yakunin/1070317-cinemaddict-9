import {AbstractComponent} from './AbstractComponent';

class ShowMore extends AbstractComponent {

  getTemplate() {
    return `<button id="show-more" class="films-list__show-more">Show more</button>`;
  }
}
export {ShowMore};

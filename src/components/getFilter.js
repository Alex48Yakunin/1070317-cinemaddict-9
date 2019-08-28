import {dataFilm} from './data';

const getFilter = [{
  title: `watchlist`,
  count() {
    return dataFilm.filter((film) => {
      return film.isWatchlist === true;
    }).length;
  }
},
{
  title: `history`,
  count() {
    return dataFilm.filter((film) => {
      return film.isHistory === true;
    }).length;
  }
},
{
  title: `favorites`,
  count() {
    return dataFilm.filter((film) => {
      return film.isFavorites === true;
    }).length;
  }
},
];

export {getFilter};

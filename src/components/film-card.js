const filmCard = (data) => {
  return `<article class="film-card">
  <h3 class="film-card__title">${data.title}</h3>
  <p class="film-card__rating">${data.rating().toFixed(1)}</p>
  <p class="film-card__info">
    <span class="film-card__year">${data.year}</span>
    <span class="film-card__duration">${data.time()}</span>
    ${Array.from(data.genres).map((genre) => `<span class="film-card__genre">
      ${genre}
  </span>`).join(``)}
  </p>
  <img src="${data.img}" alt="" class="film-card__poster">
  <p class="film-card__description">${data.description.slice(Math.random() * 9, Math.random() * 9).join(``)}</p>
  <a class="film-card__comments">${data.comments()} comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
  </form>
</article>`;
};

export {filmCard};

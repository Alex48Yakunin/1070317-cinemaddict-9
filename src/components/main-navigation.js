const mainNavigation = (data) => {
  const filters = data.map((filter) => ( 
    `<a href="#${filter.title}" class="main-navigation__item">${filter.title}<span class="main-navigation__item-count">${filter.count()}</span></a>`
  ));

  return `<nav class="main-navigation">
  <a href="#All" class="main-navigation__item main-navigation__item--active">All movies</a>
  ${filters.join(``)}
  <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
</nav>`;
};

export {
  mainNavigation
};

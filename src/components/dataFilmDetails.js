const dataFilmDetails = () => ({
  title: [
    `Послезавтра`,
    `Троя`,
    `Гладиатор`,
    `Астрал`,
    `Паранормальное явление`,
    `Заклятие`,
    `День независимости`,
    `1+1`,
    `Принц персии`,
    `Я-легенда`,
    `Я-робот`,
    `Марсианин`,
    `Властелин колец: Братство кольца`,
    `Властелин колец: Две башни`,
    `Властелин колец: Возвращение короля`,
  ][Math.floor(Math.random() * 15)],
  img: [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`,
    `./images/posters/the-great-flamarion.jpg`,
    `./images/posters/the-man-with-the-golden-arm.jpg`,
  ][Math.floor(Math.random() * 7)],
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  ],
  rating() {
    const arrayRating = Array.from({
      length: 40
    }, () => Math.floor(Math.random() * 11));
    const number = (array) => {
      const total = array.reduce((acc, c) => acc + c, 0);
      return total / array.length;
    };
    return number(arrayRating);
  },
  year: [`30 March 1945`, `13 September 2010`, `30 October 2015`, `03 April 1980`, `22 March 2005`][Math.floor(Math.random() * 5)],
  age: [`18+`, `6+`, `14+`, `16+`, `0+`][Math.floor(Math.random() * 5)],
  director: [`Anthony Mann`, `София Коппола`, `Ричард Линклейтер`, `Ричард Линклейтер`, `Квентин Тарантино`][Math.floor(Math.random() * 5)],
  writers: [`Билли Уайлдер`, `Роберт Таун`, `Квентин Тарантино`, ` Фрэнсис Форд Коппола`, `Уильям Голдман`],
  country: [`США`, `Россия`, `Австралия`, `Южная корея`, `Германия`][Math.floor(Math.random() * 5)],
  actors: new Set([
    `Эми Адамс`,
    `Дженнифер Анистон`,
    `Бен Аффлек`,
  ]),
  genres: new Set([
    `Musical`,
    `horrors`,
    `action`,
  ]),

  time() {
    const measuredTime = new Date(null);
    measuredTime.setSeconds(Math.random() * 12000);
    const MHSTime = measuredTime.toISOString().substr(11, 8);
    return MHSTime;
  },

});

export {
  dataFilmDetails
};

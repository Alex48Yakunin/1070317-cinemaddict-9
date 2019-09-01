const getFilmCard = () => ({
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
  year: [`1925`, `2010`, `2015`, `1980`, `2005`][Math.floor(Math.random() * 5)],
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
  isWatchlist: Boolean(Math.round(Math.random())),
  isHistory: Boolean(Math.round(Math.random())),
  isFavorites: Boolean(Math.round(Math.random())),
  comments() {
    const count = Math.random() * 10;
    return count.toFixed();
  }
});

const getComments = () => ({
  img: [
    `./images/emoji/smile.png`,
    `./images/emoji/angry.png`,
    `./images/emoji/puke.png`,
    `./images/emoji/sleeping.png`,
    `./images/emoji/trophy.png`,
  ][Math.floor(Math.random() * 5)],
  text: [
    `Одной из главных находок первого фильма было то, что основной акцент истории был сделан на людях и их семейной драме.`,
    `Режиссура Майкла Догерти произвела немного неоднозначное впечатление.`,
    `Актеры сыграли по большей части хорошо.`,
    `Сюжет картины развивается спустя несколько лет после событий первой ленты.`,
    `Фильм стал проще и даже примитивней.`,
  ][Math.floor(Math.random() * 5)],
  author: [
    `Алексей Стрельников`,
    `Максим Воробьёв`,
    `Динар Долматов`,
    `Валентин Терешков`,
    `Марат Семенихин`,
  ][Math.floor(Math.random() * 5)],
  date: new Date(),
});


export {getComments, getFilmCard};
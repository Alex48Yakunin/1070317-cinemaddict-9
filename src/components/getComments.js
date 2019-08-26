import {} from './data';
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

export {getComments};

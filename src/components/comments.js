
const comment = (data) => {
  return `
    <ul class="film-details__comments-list">
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="${data.img}" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">${data.text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${data.author}</span>
          <span class="film-details__comment-day">${data.date.toDateString()}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  </ul>
    `;
};

export {comment};

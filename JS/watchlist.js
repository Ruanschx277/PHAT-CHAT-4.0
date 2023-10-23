displayMovie = () => {
  let items = JSON.parse(localStorage.getItem("watchlist")) || [];

  let cardContainer = $("#card-container");

  cardContainer.empty();

  items.forEach(function(movieId) {
    const movie = JSON.parse(localStorage.getItem(`movie_${movieId}`));

    if (movie) {
      const card = `
        <div class="card">
          <img src="${movie.imageLocation}" class="card-img-top" alt="Card Image ${movie.imageLocation}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
          </div>
        </div>
      `;

      cardContainer.append(card);
    }
  });
}

$(document).ready(function() {
  displayMovie();
});
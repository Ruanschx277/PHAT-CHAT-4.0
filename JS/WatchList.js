function displayWatchList() {
    let selectedMovie = JSON.parse(localStorage.getItem("watchlist"));
    let cardContainer = $('#card-container');
    cardContainer.empty();

    for (let i = 0; i < selectedMovie.length; i++) {
      const imdbID = selectedMovie[i].imdbID;
      const removeButton = `<button class="btn btn-danger removeWatch" style="background-color: #F25C54; width: 18rem; margin-bottom: 15px" data-id="${imdbID}">Remove</button>`;
      const card = `
        <div class="col mb-5" style="max-width: 21rem">
          <div class="card h-100 d-flex flex-column custom-card-bg text-white" style="background-color: #333;">
        <a href = "SingleFilms.html">
            <img class="card-img-top" src="${selectedMovie[i].Poster}" alt="${selectedMovie[i].Title}" style="max-width: 100%; max-height: 100%;">
        </a>
            <div class="card-body p-4">
              <div class="text-center">
                <h4 class="fw-bolder text-white">${selectedMovie[i].Title}</h4>
                <p>IMDb Rating: ${selectedMovie[i].imdbRating}</p>
                <p>Genre: ${selectedMovie[i].Genre}</p>
                <p>Year: ${selectedMovie[i].Year}</p>
                <p>${selectedMovie[i].Plot}</p>
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mt-auto">
            ${removeButton}
            </div>
          </div>
        </div>
      `;
      cardContainer.append(card);
    }

    
    cardContainer.on("click", ".removeWatch", function() {
      const imdbID = $(this).data("id");

      const watchlistJSON = localStorage.getItem("watchlist");
    
      if (watchlistJSON) {
        let watchList = JSON.parse(watchlistJSON);
    
        watchList = watchList.filter((item) => item.imdbID !== imdbID);
    
        const updatedWatchlistJSON = JSON.stringify(watchList);
    
        localStorage.setItem("watchlist", updatedWatchlistJSON);
      }
    
      displayWatchList();
    });
    
}
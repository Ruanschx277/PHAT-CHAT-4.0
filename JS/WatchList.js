function displayWatchList() {
    let selectedMovie = JSON.parse(localStorage.getItem("watchlist"));
    let cardContainer = $('#card-container');
    console.log(selectedMovie)
    cardContainer.empty();

    for (let i = 0; i < selectedMovie.length; i++) {
      const card = `
        <div class="col mb-5" style="max-width: 21rem">
          <div class="card h-100 d-flex flex-column custom-card-bg text-white" style="background-color: #333;">
            <img class="card-img-top" src="${selectedMovie[i].Poster}" alt="${selectedMovie[i].Title}" style="max-width: 100%; max-height: 100%;">
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
              <a class="btn btn-orange btn-lg btn-block text-white" href="#" style="background-color: #F25C54; width: 18rem; margin-bottom: 15px">Play Movie</a>
              <a class="btn btn-orange btn-lg btn-block text-white addWatch" data-id="${selectedMovie[i].imdbID}" style="background-color: #F25C54; width: 18rem">Watch List</a>
            </div>
          </div>
        </div>
      `;
      cardContainer.append(card);
    }

    
    // cardContainer.on("click", ".addWatch", function() {
    //   const movieId = $(this).data("id");
    //   addToWatchList(movieId, selectedMovie); // Pass movieArray as a parameter
    // });
}
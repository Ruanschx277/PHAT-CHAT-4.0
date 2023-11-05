// Define the displayMovie function
function displayMovie() {
  const apiKey = '5a944ddc';
  const baseUrl = 'http://www.omdbapi.com/';

  function fetchMovies(page) {
    return fetch(`${baseUrl}?apikey=${apiKey}&s=movie&page=${page}`)
      .then((response) => response.json())
      .then((data) => data.Search || []);
  }

  function fetchMovieDetails(imdbID) {
    return fetch(`${baseUrl}?apikey=${apiKey}&i=${imdbID}`)
      .then((response) => response.json());
  }

  function fetchMultipleMovies() {
    const movieArray = [];
    const numberOfPages = 1;
    const fetchPromises = [];

    for (let page = 1; page <= numberOfPages; page++) {
      const promise = fetchMovies(page)
        .then(async (movies) => {
          // Fetch IMDb rating, plot, and genre for each movie
          const moviesWithDetails = await Promise.all(
            movies.map(async (movie) => {
              const details = await fetchMovieDetails(movie.imdbID);
              return { ...movie, imdbRating: details.imdbRating, Plot: details.Plot, Genre: details.Genre };
            })
          );
          movieArray.push(...moviesWithDetails);
        });
      fetchPromises.push(promise);
    }

    return Promise.all(fetchPromises).then(() => movieArray);
  }

  function displayMovieArray(movieArray) {
    let cardContainer = $('#card-container');
    cardContainer.empty();

    for (let i = 0; i < movieArray.length; i++) {
      const card = `
        <div class="col mb-5" style="max-width: 21rem">
          <div class="card h-100 d-flex flex-column custom-card-bg text-white" style="background-color: #333;">
            <img class="card-img-top" src="${movieArray[i].Poster}" alt="${movieArray[i].Title}" style="max-width: 100%; max-height: 100%;">
            <div class="card-body p-4">
              <div class="text-center">
                <h4 class="fw-bolder text-white">${movieArray[i].Title}</h4>
                <p>IMDb Rating: ${movieArray[i].imdbRating}</p>
                <p>Genre: ${movieArray[i].Genre}</p>
                <p>Year: ${movieArray[i].Year}</p>
                <p>${movieArray[i].Plot}</p>
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mt-auto">
              <a class="btn btn-orange btn-lg btn-block text-white" href="SingleFilms.html" style="background-color: #F25C54; width: 18rem; margin-bottom: 15px">Play Movie</a>
              <a class="btn btn-orange btn-lg btn-block text-white addWatch" data-id="${movieArray[i].imdbID}" style="background-color: #F25C54; width: 18rem">Watch List</a>
            </div>
          </div>
        </div>
      `;
      cardContainer.append(card);
    }

    cardContainer.on("click", ".addWatch", function() {
      const movieId = $(this).data("id");
      addToWatchList(movieId, movieArray); // Pass movieArray as a parameter
    });
  }

  // Updated addToWatchList function
  function addToWatchList(movieId, movieArray) {
    const watchList = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (watchList.some((movie) => movie.imdbID === movieId)) {
      alert("This movie is already in your watchlist.");
    } else {
      const movie = movieArray.find((m) => m.imdbID === movieId);

      if (movie) {
        watchList.push(movie); // Push the entire movie object to the watchlist
        localStorage.setItem("watchlist", JSON.stringify(watchList));
        alert("Movie added to your watchlist!");
      } else {
        alert("Movie not found in the list.");
      }
    }
  }

  $(document).ready(function () {
    fetchMultipleMovies()
      .then(function (movieArray) {
        displayMovieArray(movieArray);
        // Display the movie array in the console with all the details
        console.log("Movie Array:", movieArray);
      });

      let movieArray = []; // Store the original movie data here
      
  // Fetch movies and populate movieArray
  fetchMultipleMovies()
    .then(function (movies) {
      movieArray = movies; // Populate the movieArray with the fetched data
      displayMovieArray(movieArray);
    });
  
  }
  );
}


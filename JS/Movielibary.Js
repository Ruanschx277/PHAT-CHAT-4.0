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
    const numberOfPages = 3;
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
              <a class="btn btn-orange btn-lg btn-block text-white" href="#" style="background-color: #F25C54; width: 18rem; margin-bottom: 15px">Play Movie</a>
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

  // Function to filter and display movies
  function loadFilteredMovies(filteredMovies) {
    displayMovieArray(filteredMovies);
  }

  $("#allMovies").on("click", function () {
    location.reload();
  });
  
  $("#comedy").on("click", function () {
    const selectedGenre = "Comedy";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#adventure").on("click", function () {
    const selectedGenre = "Adventure";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#fantasy").on("click", function () {
    const selectedGenre = "Fantasy";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#animation").on("click", function () {
    const selectedGenre = "Animation";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#action").on("click", function () {
    const selectedGenre = "Action";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#documentary").on("click", function () {
    const selectedGenre = "Documentary";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#drama").on("click", function () {
    const selectedGenre = "Drama";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#scifi").on("click", function () {
    const selectedGenre = "Sci-Fi";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#horror").on("click", function () {
    const selectedGenre = "Horror";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#crime").on("click", function () {
    const selectedGenre = "Crime";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#romance").on("click", function () {
    const selectedGenre = "Romance";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#family").on("click", function () {
    const selectedGenre = "Family";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#music").on("click", function () {
    const selectedGenre = "Music";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#western").on("click", function () {
    const selectedGenre = "Western";
    const filteredMovies = movieArray.filter(movie => movie.Genre.includes(selectedGenre));
    loadFilteredMovies(filteredMovies);
  });

  $("#ratingToTwo").on("click", function () {
    const filteredMovies = movieArray.filter(movie => parseFloat(movie.imdbRating) <= 2.0);
    loadFilteredMovies(filteredMovies);
  });

  $("#ratingToFour").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const imdbRating = parseFloat(movie.imdbRating);
      return imdbRating >= 2.1 && imdbRating <= 4.0;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#ratingToSix").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const imdbRating = parseFloat(movie.imdbRating);
      return imdbRating >= 4.1 && imdbRating <= 6.0;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#ratingToEight").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const imdbRating = parseFloat(movie.imdbRating);
      return imdbRating >= 6.1 && imdbRating <= 8.0;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#ratingToTen").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const imdbRating = parseFloat(movie.imdbRating);
      return imdbRating >= 8.1 && imdbRating <= 10.0;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#1995-2000").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const Year = parseInt(movie.Year);
      return Year >= 1995 && Year <= 2000;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#2001-2005").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const Year = parseInt(movie.Year);
      return Year >= 2001 && Year <= 2005;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#2006-2010").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const Year = parseInt(movie.Year);
      return Year >= 2006 && Year <= 2010;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#2011-2015").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const Year = parseInt(movie.Year);
      return Year >= 2011 && Year <= 2015;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#2016-2020").on("click", function () {
    const filteredMovies = movieArray.filter(movie => {
      const Year = parseInt(movie.Year);
      return Year >= 2016 && Year <= 2020;
    });
    loadFilteredMovies(filteredMovies);
  });

  $("#2021").on("click", function () {
    const filteredMovies = movieArray.filter(movie => parseInt(movie.Year) >= 2021);
    loadFilteredMovies(filteredMovies);
  });
  
  }
  );
}


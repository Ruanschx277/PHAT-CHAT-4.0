$(document).ready(function() {
  const movieData = [
    {
      id: 1,
      title: "Avengers",
      description: "Action Packed Super Heroes Assemble together to save the World from an Alien Invasion.",
      imageLocation: "../Images/14532417_max.jpg"
    },
    {
      id: 2,
      title: "Thor Love and Thunder",
      description: "Thor Finds his Long lost love. Teaming up with Alien friends and fighting a new Dangerous Evil God.",
      imageLocation: "../Images/TLAT.jpg"

    },
    {
      id: 3,
      title: "The Goonies",
      description: "Together, these young friends embark on a thrilling and perilous quest to find the hidden treasure of the legendary pirate One-Eyed Willy.",
      imageLocation: "../Images/Goonies.jpg"
    }
  ];

  function createMovieCard(movie) {
    return `
      <div class="card">
        <img src=${movie.imageLocation} class="card-img-top" alt="Card Image">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.description}</p>
          <button class="btn btn-primary addWatch" data-id="${movie.id}">Add to Watchlist</button>
        </div>
      </div>
    `;
  }

  function addMovieCards() {
    const cardContainer = $("#card-container");
    cardContainer.empty(); // Clear the container first

    movieData.forEach(function(movie) {
      const card = createMovieCard(movie);
      cardContainer.append(card);
    });

    // Attach the click event to the "Add to Watchlist" buttons
    cardContainer.on("click", ".addWatch", function() {
      const movieId = $(this).data("id");
      addToWatchlist(movieId);
    });
  }

  function addToWatchlist(movieId) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  
    if (watchlist.includes(movieId)) {
      alert("This movie is already in your watchlist.");
    } else {
      watchlist.push(movieId);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
  
      // Save the movie details in local storage
      const movieDetails = movieData.find((movie) => movie.id === movieId);
  
      localStorage.setItem(`movie_${movieId}`, JSON.stringify(movieDetails));
  
      alert("Movie added to your watchlist!");
    }
  }

  // Call functions to initialize the page
  addMovieCards();
});

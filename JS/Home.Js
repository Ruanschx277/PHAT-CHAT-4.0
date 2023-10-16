
const movieData = [
  {
      id: 1,
      title: "Avengers",
      description: "Action Packed Super Heroes Assemble together to save the World from an Alien Invasion."
  },
  {
      id: 2,
      title: "Thor Love and Thunder",
      description: "Thor Finds his Long lost love. Teaming up with Alien friends and fighting a new Dangerous Evil God."
  },
  {
      id: 3,
      title: "The Goonies",
      description: "Together, these young friends embark on a thrilling and perilous quest to find the hidden treasure of the legendary pirate One-Eyed Willy."
  }
];

function addMovieCards() {
  const movieCardsContainer = document.getElementById("movie-cards");

  movieData.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <img src="/Images/${movie.id}.jpg" class="card-img-top" alt="Card Image ${movie.id}">
          <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.description}</p>
              <button class="btn btn-primary" onclick="addToWatchlist(${movie.id})">Add to Watchlist</button>
          </div>
      `;

      movieCardsContainer.appendChild(card);
  });
}

function addToWatchlist(movieId) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  if (watchlist.includes(movieId)) {
      alert("This movie is already in your watchlist.");
      return;
  }

  watchlist.push(movieId);

  localStorage.setItem("watchlist", JSON.stringify(watchlist));

  alert("Movie added to your watchlist!");
}


function goToWatchlistPage() {
  window.location.href = 'Page/watchlist.html';
}



  addMovieCards();


  $('.btn-add-to-watchlist').click(function() {
      addToWatchlist(movie.id);
  });


  $('#go-to-watchlist').click(function() {
      goToWatchlistPage();
  });




function fetchAndDisplayHomePageData() {
  const apiUrl = ``;

  $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
          const homePageContent = document.getElementById('home-page-content');
          homePageContent.innerHTML = `
              <h1>Welcome to Movie Streaming</h1>
              <p>${data.description}</p>
          `;
      },
      error: function(error) {
          console.error('Error:', error);
      }
  });
}

$(document).ready(function() {
  fetchAndDisplayHomePageData();
  addMovieCards(); 
});




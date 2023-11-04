  const apiKey = 'd0201974ce90691a745764523e00022b';
  const baseUrl = 'https://api.themoviedb.org/3';
  
  const baseImageUrl = 'https://image.tmdb.org/t/p';
  
  const movieList = [];
  
  function fetchMoviesByPage(page) {
    const discoverUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&page=${page}`;
      
    return fetch(discoverUrl)
      .then(response => response.json())
      .then(data => data.results);
  }
    
  const numberOfPages = 5;
    for (let page = 1; page <= numberOfPages; page++) {
      fetchMoviesByPage(page)
        .then(movies => {
          movieList.push(...movies);
          
          if (page === numberOfPages) {
            const movieNames = movieList.map(movie => movie.title);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
  console.log('Movie Names:', movieList);
  
      displayMovie = () => {
        let cardContainer = $("#card-container");
        cardContainer.empty();
      
        for (let i = 0; i < movieList.length; i++) {
            const card = `
            <div class="col mb-5" style="max-width: 21rem">
            <div class="card h-100 d-flex flex-column custom-card-bg text-white" style="background-color: #333;">
                <img class="card-img-top" src="${baseImageUrl}/w500${movieList[i].poster_path}" alt="..." style="max-width: 100%; max-height: 100%;">
                <div class="card-body p-4">
                    <div class="text-center">
                        <h4 class="fw-bolder text-white">${movieList[i].title}</h4>
                        <p>${movieList[i].overview}</p>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mt-auto">
                <a class="btn btn-orange btn-lg btn-block text-white" href="#" style="background-color: #F25C54; width: 18rem; margin-bottom: 15px">Play Movie</a>
                <a class="btn btn-orange btn-lg btn-block text-white addWatch" data-id="${movieList[i].id}" style="background-color: #F25C54; width: 18rem">Watch List</a>
                </div>
            </div>
        </div>
        
            `;
            cardContainer.append(card);
          }
          cardContainer.on("click", ".addWatch", function() {
            console.log($(this).data("id"))
            const movieId = $(this).data("id");
            addToWatchList(movieId);
          });
        };
    
  
  $(document).ready(function() {
    displayMovie();
  });
  
  function addToWatchList(movieId) {
    const watchList = JSON.parse(localStorage.getItem("watchlist")) || [];
    
    if (watchList.includes(movieId)) {
      alert("This movie is already in your watchlist.");
    } else {
      // Check if the movieId is not already in the watchlist
      const isUnique = movieList.every((movie) => !watchList.includes(movie.id));
  
      if (isUnique) {
        const movieDetails = movieList.find((movie) => movie.id === movieId);
        watchList.push(movieId);
        localStorage.setItem("watchlist", JSON.stringify(watchList));
        localStorage.setItem(`movie_${movieId}`, JSON.stringify(movieDetails));
        alert("Movie added to your watchlist!");
      } else {
        alert("This movie is already in your watchlist.");
      }
    }
  }
  


    /*Back to top button*/
// window.onscroll = function() {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("back-to-top-button").style.display = "block";
//   } else {
//     document.getElementById("back-to-top-button").style.display = "none";
//   }
// }

// function scrollToTop() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// }

  
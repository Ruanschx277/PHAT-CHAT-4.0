/*Back to top button*/
window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top-button").style.display = "block";
    } else {
      document.getElementById("back-to-top-button").style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

/*Add to Watch List button*/  
// Sample watch later list (you should use a server or local storage for a real application)
let watchLaterList = [];

// Function to add a movie to the watch later list
function addToWatchLater(movieId) {
  if (!watchLaterList.includes(movieId)) {
    watchLaterList.push(movieId);
    alert('Movie added to Watch Later list');
    // You can also send the updated watch later list to the server here
  } else {
    alert('Movie is already in the Watch Later list');
  }
}

// Function to handle the "Watch Later" button click
document.querySelectorAll('.watch-later-button').forEach(button => {
  button.addEventListener('click', function() {
    const movieId = this.getAttribute('data-movie-id');
    addToWatchLater(movieId);
  });
});
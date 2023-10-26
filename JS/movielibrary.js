/*Back to top button*/

    $(document).ready(function() {
        // Show or hide the Back to Top button based on the user's scroll position
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top-btn').fadeIn();
            } else {
                $('#back-to-top-btn').fadeOut();
            }
        });

        // Scroll back to the top when the button is clicked with a faster and smoother linear animation
        $('#back-to-top-btn').click(function() {
            $('html, body').animate({ scrollTop: 0 }, {
                duration: 1000, // Animation duration in milliseconds
                easing: 'linear', // Linear easing for a consistent speed
            });
            return false;
        });
    });




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

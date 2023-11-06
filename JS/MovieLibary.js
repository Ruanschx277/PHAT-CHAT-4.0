/*BACK TO TOP*/
// Function to show or hide the "Back to Top" button
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("backToTopBtn").style.display = "block";
      } else {
        document.getElementById("backToTopBtn").style.display = "none";
      }
    };
  });
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  // Function to scroll back to the top of the page smoothly
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
  /*WATCH LIST*/
  
  /*Success Modal*/
  // JavaScript to show the success modal
  function showSuccessModal() {
    var successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();
  }
  
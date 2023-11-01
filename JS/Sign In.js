document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const forgotPasswordLink = document.getElementById("forgot-password-link");
  
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Check if there's user data in local storage
      const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
  
      // Check if the entered username and password match any user data
      const user = usersData.find((userData) => userData.username === username && userData.password === password);
  
      if (user) {
        // Redirect to the home page when login is successful
        window.location.href = "/Page/home.html";
      } else {
        alert("Invalid email or password. Please check your credentials.");
      }
    });
  
    forgotPasswordLink.addEventListener("click", function (event) {
      // Add logic to handle the "Forgot Password?" functionality
      alert("Forgot Password link clicked");
    });
  });
  
  
  






  



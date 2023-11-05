document.addEventListener("DOMContentLoaded", function() {
  const signinForm = document.querySelector(".signin-form");

  signinForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.querySelector(".form-control[type='text']");
    const passwordInput = document.querySelector(".form-control[type='password']");

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("username")) || [];

    // Check if there are users in local storage
    if (storedUsers.length === 0) {
      alert("No users found. Please sign up first.");
      return;
    }

    // Find the user with the entered username
    const user = storedUsers.find(user => user.username === enteredUsername);

    if (user) {
      // Check if the entered password matches the stored password
      if (user.password === enteredPassword) {
        // Successful login
        alert("Login successful");
        window.location.href = "/Page/HOME.html"; // Redirect to the dashboard or another page.
      } else {
        // Display an error message for incorrect password
        alert("Incorrect password");
      }
    } else {
      // Display an error message for an unknown username
      alert("Username not found");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector("Signin-form");
    const usernameInput = document.querySelector("input[placeholder='Username']");
    const passwordInput = document.querySelector("input[placeholder='Password']");
    const forgotPasswordLink = document.getElementById("forgot-passwordreset-link");

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        // In a real application, you should send the username and password to the server for authentication.
        // This is a basic example for demonstration purposes.
        const users = {
            "your_username": "your_password", // Replace with actual user data
        };

        if (users[username] === password) {
            // Redirect to the home page after successful login
            window.location.href = "/Page/HOME.HTML";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        var userEmail = prompt("Enter your email address for password reset:");
        if (userEmail !== null) {
            // In a real application, you would send a password reset email to the provided email address.
            console.log("Password reset email sent to: " + userEmail);
            alert("Password reset instructions have been sent to your email.");
        }
    });
});




  



document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector(".signin-form");
    const usernameInput = document.querySelector("input[placeholder='Username']");
    const passwordInput = document.querySelector("input[placeholder='Password']");
    const forgotPasswordLink = document.getElementById("forgot-password-link");

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Replace "your_username" and "your_password" with your actual credentials check logic
        if (username === "your_username" && password === "your_password") {
            // Redirect to the home page after successful login
            window.location.href = "/Page/home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        var userEmail = prompt("Enter your email address for password reset:");
        if (userEmail !== null) {
            console.log("Password reset email sent to: " + userEmail);
            alert("Password reset instructions have been sent to your email.");
        }
    });
});


// Example of using the GitHub API to fetch data from a public repository
var githubApiUrl = "https://api.github.com/repos/Ruanschx277/PHAT-CHAT-4.0/contents";
$.ajax({
    url: githubApiUrl,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.error('Error:', error);
    }
});

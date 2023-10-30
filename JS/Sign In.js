document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector(".signin-form");
    const usernameInput = document.querySelector("input[placeholder='Username']");
    const passwordInput = document.querySelector("input[placeholder='Password']");
    const forgotPasswordLink = document.getElementById("forgot-password-link");

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Retrieve user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem(username));

        if (storedUserData && storedUserData.password === password) {
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


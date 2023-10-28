document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("form");
    const errorMessage = document.querySelector("#error-message");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const username = signupForm.querySelector('input[name="Username"]').value;
            const email = signupForm.querySelector('input[name="email"]').value;
            const password = signupForm.querySelector('input[name="password"]').value;
            const confirmPassword = signupForm.querySelector('input[name="confirmPassword"]').value;

            // Check if passwords match
            if (password !== confirmPassword) {
                // Display an error message
                errorMessage.textContent = "Passwords do not match!";
            } else {
                // Clear the error message
                errorMessage.textContent = "";

                // Create a user object with the form data
                const user = {
                    username: username,
                    email: email,
                    password: password,
                };

                // Store the user object in local storage
                localStorage.setItem("user", JSON.stringify(user));

                // Redirect to the sign-in page
                window.location.href = "/Page/Sign In.html"; // Update the URL as needed
            }
        });
    }
});
















  


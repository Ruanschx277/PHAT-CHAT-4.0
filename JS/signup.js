
const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (localStorage.getItem(username) !== null) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    localStorage.setItem(username, password);
    alert("Sign-up successful! You can now sign in.");
});


const signinForm = document.getElementById("signin-form");
const signinButton = document.getElementById("signin-button");


signinButton.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert("Sign-in successful!");
       
    } else {
        alert("Invalid username or password. Please try again.");
    }

});

});


document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("form");
    const errorMessage = document.querySelector("#error-message");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();


            const username = signupForm.querySelector('input[name="Username"]').value;
            const email = signupForm.querySelector('input[name="email"]').value;
            const password = signupForm.querySelector('input[name="password"]').value;
            const confirmPassword = signupForm.querySelector('input[name="confirmPassword"]').value;

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
















  



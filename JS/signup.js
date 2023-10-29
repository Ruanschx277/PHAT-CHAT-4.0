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
<<<<<<< Updated upstream
});
=======
});
>>>>>>> Stashed changes

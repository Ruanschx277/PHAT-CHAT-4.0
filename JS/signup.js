const signupButton = document.getElementById("signup-button");
const signinButton = document.getElementById("signin-button");

signupButton.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (localStorage.getItem(username) !== null) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    localStorage.setItem(username, password);
    alert("Sign-up successful! You can now sign in.");

    window.location.href = "/Page/Sign In.html";
});

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

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordError = document.getElementById("password-error");

    if (password !== confirmPassword) {
        passwordError.textContent = "Password and Confirm Password do not match.";
        return false;
    } else {
        passwordError.textContent = "Passwords match!";
    }

    return true;
}















  


function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirm-password-error");

   
    if (!isValidPassword(password)) {
        passwordError.textContent = "Password must contain at least 1 digit, 1 uppercase, and 1 lowercase character.";
        return false;
    } else {
        passwordError.textContent = "";
    }

 
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return true;
}

function isValidPassword(password) {
    var passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
    return passwordPattern.test(password);
}
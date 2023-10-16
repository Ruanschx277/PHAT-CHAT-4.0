function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

 
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!password.match(passwordRegex)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please confirm your password.");
        return false;
    }

    return true;
}


function validateForm() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("All fields are required");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password must match");
        return false;
    }

    var userData = {
        email: email,
        phone: phone,
        password: password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

  
    window.location.href = "/Page/HOME.HTML"; 

    return false; 
}

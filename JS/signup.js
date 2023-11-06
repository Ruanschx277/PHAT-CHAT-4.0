
const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-button");

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector("form");

  signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const usernameInput = document.querySelector("input[name='Username']");
      const emailInput = document.querySelector("input[name='email']");
      const passwordInput = document.querySelector("input[name='password']");
      const confirmPasswordInput = document.querySelector("input[name='password']");
      const checkbox = document.querySelector("input[type='checkbox']");

      const username = usernameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      const agreedToTerms = checkbox.checked;

      if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
          alert("Please fill in all the required fields.");
          return;
      }

      if (password !== confirmPassword) {
          alert("Password and confirm password do not match.");
          return;
      }

      if (!agreedToTerms) {
          alert("Please agree to the terms and conditions.");
          return;
      }

      // Redirect to the sign-in page with the correct root-relative path
      window.location.href = "/Page/Sign In.html";
  });
});



  








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
















  




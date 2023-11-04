document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector("form");
  
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const usernameInput = document.querySelector("input[name='Username']");
      const emailInput = document.querySelector("input[name='email']");
      const passwordInput = document.querySelector("input[name='password']");
      const confirmPasswordInput = document.querySelector("input[name='confirm-password']"); 
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
  
      // Get user data from local storage and initialize as an empty array if it doesn't exist
      let userName = JSON.parse(localStorage.getItem("username")) || [];
  
      if (userName.some((user) => user.username === username)) {
        alert("This user is already signed up.");
      } else {
        const newUser = { username, email, password };
  
        userName.push(newUser);
        localStorage.setItem("username", JSON.stringify(userName));
        alert("User Signed Up!");
        window.location.href = "../Page/Sign In.html";
      }
  
    });
  });
  
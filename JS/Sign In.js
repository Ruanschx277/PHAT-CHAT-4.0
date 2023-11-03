

function handleFormSubmit(event) {
    event.preventDefault(); 
 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

 
    fetch("authenticate.php", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(data => {
            if (data.authenticated) {
               
                window.location.href = "/Page/HOME.HTML"; 
            } else {
               
                alert("Authentication failed. Please check your username and password.");
            }
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}


const signinForm = document.getElementById("signin-form");
if (signinForm) {
    signinForm.addEventListener("submit", handleFormSubmit);
}




function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === "" || password === "") {
        alert("Username and password are required");
        return false;
    }

 
    var userData = {
        username: username,
        password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));


    window.location.href = "/Page/HOME.HTML"; 

    return false; 
}

const apiUrl = '';

$.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
     
        console.log(data);
    },
    error: function(error) {
        console.error('Error:', error);
    }
});

document.getElementById("login-button").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
      window.location.href = "/home.html"; // Redirect to the home page if login is successful
    } else {
      alert("Invalid username or password. Please try again.");
    }


    document.getElementById("forgot-password-link").addEventListener("click", function () {
        // Prompt the user to enter their email address for password reset
        var userEmail = prompt("Enter your email address for password reset:");
      
        // Check if the user entered an email address
        if (userEmail !== null) {
          // Send the email address to the server for password reset
          // You can implement this logic based on your backend and email service
          // Here, we'll just log the email for demonstration purposes
          console.log("Password reset email sent to: " + userEmail);
          alert("Password reset instructions have been sent to your email.");
        }
      });


      document.addEventListener("DOMContentLoaded", function() {
        // Check if the user is signed in
        const userIsSignedIn = /* Replace this with your logic to check if the user is signed in */;
    
        if (userIsSignedIn) {
            // User is signed in, redirect to the home page
            window.location.href = "/Page/HOME.HTML"; // Replace with the actual URL of your home page
        }
    });


    // Your AJAX request
    $.ajax({
      url: 'your_api_url_here', // Replace with the actual API URL
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        // Handle the response from the server
        console.log(data);
      },
      error: function(error) {
        // Handle AJAX request errors
        console.error('Error:', error);
      }
    });
  });


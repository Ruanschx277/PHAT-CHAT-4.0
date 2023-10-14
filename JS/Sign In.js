
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
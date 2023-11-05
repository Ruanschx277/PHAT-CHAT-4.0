<<<<<<< HEAD
// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Find the form element
    const resetPasswordForm = document.getElementById("reset-password-form");

    // Add a submit event listener to the form
    resetPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
=======
document.addEventListener("DOMContentLoaded", function() {
    const resetPasswordForm = document.getElementById("reset-password-form");
    const forgotPasswordLink = document.getElementById("forgot-password-link");

    resetPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
>>>>>>> e986ddf75db711f05571d011de90954417013268

        // Get the email input value
        const email = document.getElementById("email").value;

<<<<<<< HEAD
        // Here, you can implement logic for sending a reset email to the provided email address.
        // For this example, we will simply display a message.
        alert(`A password reset link will be sent to ${email}.`);
    });
=======
        alert(`A password reset link will be sent to ${email}.`);
    });

    // Add an event listener for the "Forgot Password" link
    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

       
        // For example, you can use window.location.href to redirect to the "Forgot Password" page.
        window.location.href = "/Page/Password reset.html";
    });
>>>>>>> e986ddf75db711f05571d011de90954417013268
});

// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Find the form element
    const resetPasswordForm = document.getElementById("reset-password-form");

    // Add a submit event listener to the form
    resetPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the email input value
        const email = document.getElementById("email").value;

        // Here, you can implement logic for sending a reset email to the provided email address.
        // For this example, we will simply display a message.
        alert(`A password reset link will be sent to ${email}.`);
    });
});

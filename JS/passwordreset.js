document.addEventListener("DOMContentLoaded", function() {
    const resetPasswordForm = document.getElementById("reset-password-form");
    const forgotPasswordLink = document.getElementById("forgot-password-link");

    resetPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the email input value
        const email = document.getElementById("email").value;

        alert(`A password reset link will be sent to ${email}.`);
    });

    // Add an event listener for the "Forgot Password" link
    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

       
        // For example, you can use window.location.href to redirect to the "Forgot Password" page.
        window.location.href = "/Page/Password reset.html";
    });
});

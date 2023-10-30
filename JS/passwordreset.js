
document.addEventListener("DOMContentLoaded", function() {
  
    const resetPasswordForm = document.getElementById("reset-password-form");


    resetPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault(); 


        const email = document.getElementById("email").value;


        alert(`A password reset link will be sent to ${email}.`);
    });
});
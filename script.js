document.getElementById('sign-up-link').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('sign-up-form').classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('sign-up-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match. Please try again.";
        return false; // Prevent form submission
    }
    
    errorMessage.textContent = ""; // Clear any previous error messages
    return true; // Allow form submission
}

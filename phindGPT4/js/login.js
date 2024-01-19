// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        let hasErrors = false;
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');

        // Trim whitespace and get input values
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Validate username
        if (!username) {
            usernameError.textContent = 'Username is required.';
            hasErrors = true;
        }

        // Validate password
        if (!password) {
            passwordError.textContent = 'Password is required.';
            hasErrors = true;
        }

        // If there are no errors, store the auth value and allow form submission
        if (!hasErrors) {
            // Store auth in localStorage
            localStorage.setItem('auth', 'true');

            // Allow form to submit
            // No need to call event.preventDefault();
        } else {
            // Prevent form submission if there are errors
            event.preventDefault();
        }
    });
});

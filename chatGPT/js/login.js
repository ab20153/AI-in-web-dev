// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Reset previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('generalError').textContent = '';

    // Validate the form fields
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (username === '') {
        // Display username error message
        document.getElementById('usernameError').textContent = 'Username cannot be empty.';
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (password === '') {
        // Display password error message
        document.getElementById('passwordError').textContent = 'Password cannot be empty.';
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Submit the form if validation passes
    // Here, you might want to perform an AJAX request or any other necessary actions

    // Store "auth" name/value pair in localStorage
    localStorage.setItem('auth', true);

    // For demonstration purposes, log a success message
    console.log('Login successful!');

    // Note: In a real-world scenario, you would likely redirect the user or perform other actions after successful login.
});

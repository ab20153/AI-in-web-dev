document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
 
    // Trim excess whitespace
    username.value = username.value.trim();
    password.value = password.value.trim();
 
    if (username.value === '') {
        usernameError.textContent = 'Please enter your username';
    } else {
        usernameError.textContent = '';
    }
 
    if (password.value === '') {
        passwordError.textContent = 'Please enter your password';
    } else {
        passwordError.textContent = '';
    }
 
    // Submit form if username and password fields are not empty
    if (username.value !== '' && password.value !== '') {
        // Store a name/value pair "auth" with value true in localStorage
        localStorage.setItem('auth', true);
        // Submit the form
        this.submit();
    }
 });
 
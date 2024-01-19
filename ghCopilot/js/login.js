// Get the form element
const loginForm = document.getElementById("login-form");

// Add event listener to the form submit event
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  window.alert("hello");

  // Get the username and password input values
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Get the error message containers
  const usernameErrorElement = document.getElementById('usernameError');
  const passwordErrorElement = document.getElementById('passwordError');

  // Clear previous error messages
  usernameErrorElement.textContent = '';
  passwordErrorElement.textContent = '';

  // Check if username or password is empty
  if (username === '') {
    // Display error message for username
    usernameErrorElement.textContent = 'Please enter a username.';
  }

  if (password === '') {
    // Display error message for password
    passwordErrorElement.textContent = 'Please enter a password.';
  }

  // Submit the form if both username and password are not empty
  if (username !== '' && password !== '') {
    // Store "auth" name/value pair with value true in localStorage
    localStorage.setItem('auth', true);
    loginForm.submit();
  }
});

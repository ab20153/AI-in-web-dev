// Get the form element
const form = document.querySelector('#login-form');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the username and password input values
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Check if username or password is blank
  if (username === '') {
    // Display error message for username
    const usernameErrorElement = document.querySelector('#usernameError');
    usernameErrorElement.textContent = 'Please enter a username.';
  } else {
    // Clear error message for username
    const usernameErrorElement = document.querySelector('#usernameError');
    usernameErrorElement.textContent = '';
  }

  if (password === '') {
    // Display error message for password
    const passwordErrorElement = document.querySelector('#passwordError');
    passwordErrorElement.textContent = 'Please enter a password.';
  } else {
    // Clear error message for password
    const passwordErrorElement = document.querySelector('#passwordError');
    passwordErrorElement.textContent = '';
  }

  // Submit the form and store auth in localStorage if both username and password are provided
  if (username !== '' && password !== '') {
    localStorage.setItem('auth', true);
    form.submit();
  }
});

// Get the form element
var form = document.getElementById("loginForm");

// Get the input elements
var username = document.getElementById("username");
var password = document.getElementById("password");

// Get the error message elements
var usernameError = document.getElementById("username-error");
var passwordError = document.getElementById("password-error");

// Define the validation function
function validateForm() {
  // Get the user input values and trim the whitespace
  var usernameValue = username.value.trim();
  var passwordValue = password.value.trim();

  // Check if the username or password is empty
  if (usernameValue == "" || passwordValue == "") {
    // Display the error messages in the error containers
    if (usernameValue == "") {
      usernameError.innerHTML = "Please enter your username";
    }
    if (passwordValue == "") {
      passwordError.innerHTML = "Please enter your password";
    }
    return false;
  } else {
    // Store the auth value in localStorage
    localStorage.setItem("auth", true);
    // Redirect the user to the content.html page
    window.location = "content.html";
    return true;
  }
}

// Bind the validation function to the onsubmit event of the form
form.onsubmit = validateForm;

// Define the function to clear the error messages
function clearError(input) {
  // Clear the error message of the given input element
  input.nextElementSibling.innerHTML = "";
}

// Bind the clearError function to the oninput event of the input elements
username.oninput = function() {
  clearError(username);
};
password.oninput = function() {
  clearError(password);
};

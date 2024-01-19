// Check if the user is authorized
function checkAuthorization() {
  // Check if the user has the "auth" name/value pair with value true
  return localStorage.getItem("auth") === "true";
}

// Redirect unauthorized users to the login page
function redirectToLogin() {
  window.location.href = 'index.html';
}

// Handle the "Log out" button click event
function handleLogout() {
  // Clear the "auth" name/value pair
  localStorage.removeItem("auth");
  // Redirect the user to the login page
  window.location.href = 'index.html';
}

// Check authorization on page load
if (!checkAuthorization()) {
  redirectToLogin();
}

// Attach event listener to the "Log out" button
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', handleLogout);

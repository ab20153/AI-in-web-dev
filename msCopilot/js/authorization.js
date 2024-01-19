// Get the auth value from localStorage
var auth = localStorage.getItem("auth");

// Check if the auth value is true or false
if (auth == "true") {
  // Allow the user to access the home.html page
  console.log("You are authorized to access this page");
} else {
  // Redirect the user to the index.html page
  window.location = "index.html";
}

// Get the log out button element
var logoutButton = document.getElementById("logout");

// Define the function to log out the user
function logout() {
  // Remove the auth value from localStorage
  localStorage.removeItem("auth");
  // Redirect the user to the index.html page
  window.location = "index.html";
}

// Bind the logout function to the onclick event of the button
logoutButton.onclick = logout;

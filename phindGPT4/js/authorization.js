// authorization.js

// Function to check if the user is authorized
function checkAuthorization() {
    const auth = localStorage.getItem('auth');
    if (auth !== 'true') {
        // If the user is not authorized, redirect to the login page
        window.location.href = 'index.html';
    }
}

// Function to handle the logout process
function logout() {
    // Clear the 'auth' item from localStorage
    localStorage.removeItem('auth');
    
    // Redirect to the login page
    window.location.href = 'index.html';
}

// Call the checkAuthorization function when the script loads
checkAuthorization();

// Add event listener to the logout button if it exists
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});

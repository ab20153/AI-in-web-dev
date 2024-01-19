// scripts.js

// Check if the user is authorized before allowing access to home.html
function checkAuthorization() {
    var isAuthenticated = localStorage.getItem('auth') === 'true';

    if (!isAuthenticated) {
        // Redirect to the login page or perform other actions
        window.location.href = 'index.html';
    }
}

// Run the authorization check on page load
checkAuthorization();

// Add event listener for the "Log out" button
document.getElementById('logoutBtn').addEventListener('click', function(event) {
    event.preventDefault();

    // Clear the authentication token or perform other logout actions
    localStorage.setItem('auth', 'false');

    // Redirect to the login page or perform other actions
    window.location.href = 'index.html';
});

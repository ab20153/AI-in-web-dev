// Check if the user is logged in
if (!localStorage.getItem('auth')) {
    // If not, redirect them to the login page
    window.location.href = 'index.html';
  }
  
  // Function to handle logout
  function logout() {
    // Remove the 'isLoggedIn' item from local storage
    localStorage.removeItem('auth');
  
    // Redirect the user to the login page
    window.location.href = 'index.html';
  }
  
  // Add event listener to the logout button
  document.querySelector('#logoutButton').addEventListener('click', logout);
  
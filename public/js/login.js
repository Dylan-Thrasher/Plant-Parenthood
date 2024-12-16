const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#emailLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    debugger;
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// Handles sign ups
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#nameSignup').value.trim();
  const email = document.querySelector('#emailSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();

  // name email and password must be defined
  if (name && email && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) =>{
      if (res.ok) {
        document.location.replace('/profile');
      } else {
        alert(res.statusText);
      }
    });
    // if the request was good, nav to the user's profile

  }
};

// these should be ported to jQuery
// adds submit listeners to login-form and signup-form
$(()=> {
  $(`#login-form`).on('submit', loginFormHandler);
  $('#login-btn').on('click', loginFormHandler);
})
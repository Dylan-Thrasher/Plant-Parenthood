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

  $(()=> {
    $(`#signup-form`).on('submit', signupFormHandler);
    $('#register-btn').on('click', signupFormHandler);
  })
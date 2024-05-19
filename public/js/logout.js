//Handles logout
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // if we logged out correctly, go to the homepage
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
// this needs to be ported to jquery = Charles
document.querySelector('#logoutBtn').addEventListener('click', logout);

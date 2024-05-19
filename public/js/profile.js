// this is not currently being called anywhere - Charles
// Can be refractored easily!
const newFormHandler = async (event) => {
  event.preventDefault();
  // Gets values for body - NEEDS TO BE PORTED TO JQUERY
  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// Handles deleting an every in the collection table tied to user_id and the selected plant from the grid
/* REMINDER: 
  The Collection model represents a user's invididual plant.  User's may have several enteries in the Collection
  with user_id matching the User's id.  

  A ROW IN THE COLLECTION TABLE MAY ONLY EVER BE TIED TO A SINGLE USER BY user_id/
*/          
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/collection/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete plant');
    }
  }
};

// Handles saveBtn clicks
// NEED RND: WHY WAS THIS FORCING A PASSWORD UPDATE EVEN WHEN WE DID NOT PASS newPass? - Charles
const saveBtnHandler = async (ev) => {
  ev.preventDefault()
  const newName = $('#nameEdit').val().trim();
  const newEmail = $('#emailEdit').val().trim();
  const newPass = $('#passwordEdit').val().trim();
  console.log(newName)
  if (newName) {
    const response = await fetch('/api/users/edit', {
      method: 'POST',
      body: JSON.stringify({ newName, newPass }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // updating worked, nav to profile
      console.log('it worked?')
      debugger;
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }


}
/*
START HERE WITH EDITING LOGIC
use jquery to select all edit buttons and attach even listeners instead of our own for each
Have the listener handler do the fetch request, begin with a handler than simply logs the functino name to console and add logic from there
-Charles
*/
/*
const editButtons = document.querySelectorAll('.btn-edit')
  editButtons.forEach(button => {
    const newPlantName ='Enter the new plant name:';
    if (newPlantName !== null)
   //   const collectionId = button.dataset.id;

    fetch('/updatePlantName/${collectionId}')
  })
  */

// Handles loggign out, if successful go to the hopmepage
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

// These should be ported to jQuery -Charles
// Adds event listeners to handle click events to save-btn, logoutBtn, and collection-list
//
document.querySelector('#save-btn').addEventListener('click', saveBtnHandler);
document.querySelector('#logoutBtn').addEventListener('click', logout);
document
  .querySelector('.collection-list')
  .addEventListener('click', delButtonHandler);
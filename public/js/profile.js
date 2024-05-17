const newFormHandler = async (event) => {
  event.preventDefault();

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

const saveBtnHandler = async (ev) =>{
  ev.preventDefault()
  const newName = $('#name-edit').val();
  const newEmail = $('#email-edit').val();
  const newPass = $('#password-edit').val();
  console.log(newName)
  if(newName) {
    const response = await fetch('/api/users/edit', {
      method: 'POST',
      body: JSON.stringify({ newName }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('it worked?')
      debugger;
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }

  
}
/*
const editButtons = document.querySelectorAll('.btn-edit')
  editButtons.forEach(button => {
    const newPlantName ='Enter the new plant name:';
    if (newPlantName !== null)
   //   const collectionId = button.dataset.id;

    fetch('/updatePlantName/${collectionId}')
  })
  */

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


document.querySelector('#save-btn').addEventListener('click', saveBtnHandler);
document.querySelector('#logoutBtn').addEventListener('click', logout);
document
  .querySelector('.collection-list')
  .addEventListener('click', delButtonHandler);
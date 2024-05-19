
// Handles clicking images on the homepage view
const handleImageClick = (ev) => {
    ev.preventDefault();
    let id = ev.target.id;
    debugger;
    window.location.href = `/plant?id=${id}`;
   
}

// Handles clicking the edit button for a plant on the users plant grid on the profile view
const handleEditClick = (ev => {
    ev.preventDefault();
    // we use the name html attribute in profile view to track the collection id
    let id = ev.target.name;
    debugger;
    window.location.href = `/plant?id=${id}&edit=true`;
})

$(()=>{
    $('[id=plantCard]').on('click', handleImageClick);
    $('[id=editBtn]').on('click', handleEditClick);
    debugger;
})
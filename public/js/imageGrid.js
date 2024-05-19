
// Handles clicking images on the homepage view
const handleImageClick = (ev) => {
    ev.preventDefault();
    // we use the name html attribute in homepage to track the plant id
    let id = ev.target.name;
   
    window.location.href = `/plant?id=${id}`;
   
}

const handleCollectionClick = (ev) => {
    ev.preventDefault();
    
    // we use the name html attribute in profile view to track the collection id
    let id = ev.target.name;
   
    window.location.href = `/collection?id=${id}git `;
   
}

// Handles clicking the edit button for a plant on the users plant grid on the profile view
const handleEditClick = (ev => {
    ev.preventDefault();
    // we use the name html attribute in profile view to track the collection id
    let id = ev.target.name;
    window.location.href = `/collection?id=${id}&edit=true`;
})

$(()=>{
    
    $('[id=plantCard]').on('click', handleImageClick);
    $('[id=collectionCard]').on('click', handleCollectionClick);
    $('[id=edit-btn]').on('click', handleEditClick); 
})
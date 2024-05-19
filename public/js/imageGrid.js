

const handleClick = (ev) => {
    ev.preventDefault();
    let id = ev.target.id;
    debugger;
    window.location.href = `/plant?id=${id}`;
   
}

const handleEditClick = (ev => {
    ev.preventDefault();
    // we use the name html attribute in profile view to track the collection id
    let id = ev.target.name;
    debugger;
    window.location.href = `/plant?id=${id}&edit=true`;
})

$(()=>{
    $('[id=plantCard]').on('click', handleClick);
    $('[id=edit-btn]').on('click', handleEditClick);
    debugger;
})
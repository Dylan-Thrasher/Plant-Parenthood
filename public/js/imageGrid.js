
// Handles clicking images on the homepage view
const handleImageClick = (ev) => {
    ev.preventDefault();
    // we use the name html attribute in homepage to track the plant id
    let id = ev.target.name;

    window.location.href = `/plant?id=${id}`;

}

const handleCollectionImageClick = (ev) => {
    ev.preventDefault();

    // we use the name html attribute in profile view to track the collection id
    let id = ev.target.name;

    window.location.href = `/collection?id=${id}`;

}

// Handles clicking the edit button for a plant on the users plant grid on the profile view
const handleEditClick = (ev => {
    ev.preventDefault();
    // we use the name html attribute in profile view to track the collection id
    let id = ev.target.name;
    window.location.href = `/collection?id=${id}&edit=true`;
})


const handleZASort = (ev) => {
    ev.preventDefault();
    
    $('[id=sortZA').prop('checked', true);
    $('[id=sortAZ').prop('checked', false);
    sortZA();
}

const sortZA = () => {
    let grid = $('#resultsGrid');
    let entries = grid.children();
    entries.sort(function (a, b) {
        var nameA = a.attributes[1].value.toLowerCase(), nameB = b.attributes[1].value.toLowerCase();
        if (nameA > nameB) //sort string ascending
            return -1;
        if (nameA < nameB)
            return 1;
        return 0; //default return value (no sorting)
    });
    grid.empty();
    grid.append(entries);
    console.log(entries);
}

const handleAZSort = (ev) => {
    ev.preventDefault();
    
    $('[id=sortAZ').prop('checked', true);
    $('[id=sortZA').prop('checked', false);
    sortAZ();
}

const sortAZ = () => {
    debugger;
    let grid = $('#resultsGrid');
    let entries = grid.children();
    entries.sort(function (a, b) {
        var nameA = a.attributes[1].value.toLowerCase(), nameB = b.attributes[1].value.toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; //default return value (no sorting)
    });
    grid.empty();
    grid.append(entries);
    console.log(entries);
}
$(() => {

    $('[id=plantImg]').on('click', handleImageClick);
    $('[id=collectionImg]').on('click', handleCollectionImageClick);
    $('[id=edit-btn]').on('click', handleEditClick);
    $('[id=sortAZ]').on('click', handleAZSort);
    $('[id=sortZA]').on('click', handleZASort);
})
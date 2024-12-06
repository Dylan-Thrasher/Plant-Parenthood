const handleNextClick = (ev => {
    ev.preventDefault();
    // we use the name html attribute in profile view to track the collection id
    const next = Number(ev.currentTarget.parentElement.attributes.currentPage.value) + 1;

    debugger;
    window.location.href = `/?page=${next}`;
})


$(() => {
//   if(document.location.pathname != '/')$('#searchBtn').hide();
    $('[id=nextBtn]').on('click', handleNextClick);
    /*
    $('[id=collectionImg]').on('click', handleCollectionImageClick);
    $('[id=edit-btn]').on('click', handleEditClick);
    $('[id=sortAZ]').on('click', handleAZSort);
    $('[id=sortZA]').on('click', handleZASort);
    let search = $('#searchBar');
    debugger;
    $('#searchBar').on('keypress', function (event) {
        if (event.key === "Enter") {
            handleSearchInput(event);
        }
    })
        */
})
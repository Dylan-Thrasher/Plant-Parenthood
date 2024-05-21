
// sends POST request to server to add a plant to user's collection
function addToCollection(itemData) {
    debugger;
    fetch('/api/collection', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add item to Collection');
            }
        //    prompt(response.json());
            return response.json();
        })
        .then(data => {
           document.location.replace('/profile')
            console.log('Item added to Collection:', data);
        })
        .catch(error => {
            console.error('Error adding item to collection:', error);
        })
}

const saveCollectionHandler = async (ev) => {
    ev.preventDefault()
    debugger;
    const newName = $('#plantName').val().trim();
    const id = ev.currentTarget.name;
    console.log(newName)
    debugger;
    if (newName) {
        const response = await fetch('/api/collection/save', {
            method: 'POST',
            body: JSON.stringify({ newName, id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // updating worked, nav to profile
            console.log('it worked?')

            $('[id=plantName]').prop('disabled', true);

            document.location.replace(`/collection?id=${id}`);
        } else {
            alert(response.statusText);
        }
    }

}

const editCollectionHandler = (ev) => {
    ev.preventDefault();
    let id = ev.currentTarget.name;
    window.location.href = `/collection?id=${id}&edit=true`;

}




$(() => {
    $('#saveCollectionBtn').on('click', saveCollectionHandler);
    $('#addToCollectionBtn').on('click', function (ev) {
        //prevent event defaults
        ev.preventDefault();
        // uses jQuery selection to build itemData to pass to addToCollections
        const itemData = {
            //item data to be passed on here
            'plant_id': $('#plant-id').val().trim(),
            'regular_url': $('#regular-url').val().trim(),
            'common_name': $('#common-name').val().trim(),
        }
        debugger
        addToCollection(itemData);
    })
    $('#editCollectionBtn').on('click', editCollectionHandler);
})
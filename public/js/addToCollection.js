function addtoCollection(itemData) {
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
        return response.json();
    })
    .then(data => {
        console.log('Item added to Collection:', data);
    })
    .catch(error => {
        console.error('Error adding item to collection:', error);
    })
}


document.getElementById('addtoCollectionBtn').addEventListener('click', function() {
   
    
    const itemData = {
        //item data to be passed on here
        'plant_id': $('#plant-id').val().trim(),
        'regular_url': $('#regular-url').val().trim(),
        'common_name': $('#common-name').val().trim(),
    } 
    debugger
    addtoCollection(itemData);
});


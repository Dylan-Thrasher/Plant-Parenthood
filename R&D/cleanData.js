const fs = require('fs');

const path = './seeds/plants.json';
const {log, error} = new (require ('./utils/logger'));
const refractorJSON = () => {
    fs.readFile(path, 'utf8', (err, data) => {
        err ? error(err) : console.log(data);

        const diString = '"default_image": {';
        const diEndString = `}
    },`;

        data = data.replaceAll(diString, "");
        data = data.replaceAll(diEndString, ",");
        
        log (data, 'green');

    });
}
refractorJSON();

const temp = {
    "id": 150,
    "common_name": "Eskimo Sunset Sycamore Maple",
    "scientific_name": [
        "Acer pseudoplatanus 'Eskimo Sunset'"
    ],
    "other_name": [
        "Planetree Maple"
    ],
    "cycle": "Perennial",
    "watering": "Average",
    "sunlight": [
        "full sun",
        "part shade"
    ],

        "license": 45,
        "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
        "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
        "original_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/og\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
        "regular_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/regular\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
        "medium_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/medium\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
        "small_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/small\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
        "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/thumbnail\/Acer_pseudoplatanus_27Nizetii27_b.jpg"
    }


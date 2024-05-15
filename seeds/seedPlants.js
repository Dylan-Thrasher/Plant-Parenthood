//Imported required modules
const fs = require('fs');    //Node.js file system module for reading and writing files
const path = require('path');   //imports the Node.js path
const plantsFilePath = path.join(__dirname, 'plants.json');  //Path to plants.json
const axios = require('axios');   //Promise-based HTTP client for making API requests.

let autoFill = [];
const writeSearchAutofill = (data) => {
  data.forEach((plant) => {
    autoFill.push({
      commonName: plant.common_name,
      scientificName: plant.scientific_name,
      otherName: plant.other_name,
      id: plant.id,
    });
  });
  return autoFill;
};


//Function to populate the autoFill array with transformed plant data
const autofillData = writeSearchAutofill(autoFill);

//Logging each element of the autofillData array with JSON using a for loop
for (let i = 0; i < autofillData.length; i++) {
  const prettyJSON = JSON.stringify(autofillData[i], null, 2); // stringify with indentation
  console.log(prettyJSON);
}

//Using forEach to log each element with pretty-printed JSON
autofillData.forEach((plant) => {
  const prettyJSON = JSON.stringify(plant, null, 2);
  console.log(prettyJSON);
});

// Function to read JSON file and fetch additional plant details from an API
const readJSONFile = (filePath) => {
  //return new Promise((resolve, reject) => {
  fs.readFile('./plants.json', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      let plantsData = JSON.parse(data);       //Reject the Promise if an error occurs while reading the file
      const url = `https://perenual.com/api/species/details/${plantsData[0].id}?key=sk-4J5W664232c727ead5452`;

      axios       //axios make an API request to fetch additional details about the plant
        .get(url)
        .then((response) => {
          console.log(JSON.stringify(response.data));    //Log the API response with pretty-printed JSON
        })
        .catch((error) => {
          console.log(error);     //Log any error that occurs during the API request
        });
      //console.log(JSON.parse(data));
      return JSON.parse(data);
    }
  });
  //});
};

//Async function to seed plant data by reading from the JSON file and fetching additional details
const seedPlants = async () => {
  try {
    // Read data from plants.json
    const plantsData = await readJSONFile(plantsFilePath);
  } catch (err) {
    console.error(err);
  }
};


//Test
//Function to read JSON file
const describePlantAPI = () => {
  let plantsData;

  beforeAll(async () => {     //beforeAll runs some setup code before any tests run
    // Before all executions, read the plants.json data
    plantsData = await readJSONFile(plantsFilePath);
  });


    // Function to fetch plant details from the API
    const fetchPlantDetails = async () => {
      const url = `https://perenual.com/api/species/details/[ID]?key=sk-4J5W664232c727ead5452`; // Placeholder URL
      try {
        const response = await axios.get(url);
        console.log(JSON.stringify(response.data, null, 2)); // Log the API response with pretty-printed JSON
      } catch (error) {
        console.error(error); // Log any error that occurs during the API request
      }
    };
  
    // Call the fetchPlantDetails function (replace [ID] with an actual ID)
    fetchPlantDetails();
  };


// Execute the seeding function
seedPlants();

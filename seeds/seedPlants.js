const fs = require('fs');
const path = require('path'); //imports the Node.js path
const plantsFilePath = path.join(__dirname, 'plants.json'); // Path to plants.json
const axios = require('axios');

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

// // Example data
// const plantsData = [
//   { common_name: 'Common Plant 1', scientific_name: 'Scientific Plant 1', other_name: 'Other Plant 1', id: 1 },
//   { common_name: 'Common Plant 2', scientific_name: 'Scientific Plant 2', other_name: 'Other Plant 2', id: 2 },
//   { common_name: 'Common Plant 3', scientific_name: 'Scientific Plant 3', other_name: 'Other Plant 3', id: 3 }
// ];

const autofillData = writeSearchAutofill(autoFill);

for (let i = 0; i < autofillData.length; i++) {
  const prettyJSON = JSON.stringify(autofillData[i], null, 2); // stringify with indentation
  console.log(prettyJSON);
}

autofillData.forEach((plant) => {
  const prettyJSON = JSON.stringify(plant, null, 2);
  console.log(prettyJSON);
});

// Function to read JSON file
const readJSONFile = (filePath) => {
  //return new Promise((resolve, reject) => {
  fs.readFile('./plants.json', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      let plantsData = JSON.parse(data);
      const url = `https://perenual.com/api/species/details/${plantsData[0].id}?key=sk-4J5W664232c727ead5452`;

      axios
        .get(url)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      //console.log(JSON.parse(data));
      return JSON.parse(data);
    }
  });
  //});
};

const seedPlants = async () => {
  try {
    // Read data from plants.json
    const plantsData = await readJSONFile(plantsFilePath);
  } catch (err) {
    console.error(err);
  }
};

//test

// Function to read JSON file

const describePlantAPI = () => {
  let plantsData;

  beforeAll(async () => {
    // Before all executions, read the plants.json data
    plantsData = await readJSONFile(plantsFilePath);
  });


  fetchPlantDetails,
    async () => {
      const url = `https://perenual.com/api/species/details/[ID]?key=sk-4J5W664232c727ead5452`;
      axios
        .get(url)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
};

// Execute the seeding function
seedPlants();

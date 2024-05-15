const fs = require('fs');
const path = require('path'); //imports the Node.js path
const plantsFilePath = path.join(__dirname, 'plants.json'); // Path to plants.json
const axios = require('axios');
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

// Execute the seeding function
seedPlants();

const fs = require('fs');
const sequelize = require('../config/connection');
const { Plant } = require('../models');

// Path to plants.json
const plantsFilePath = path.join(__dirname, 'plants.json');

// Function to read JSON file
const readJSONFile = (filePath) => {
 // return new Promise((resolve, reject) => {
    fs.readFile("./plants.json", 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(JSON.parse(data));
        return JSON.parse(data);
      }
    });
 // });
};

const seedPlants = async () => {
  try {
    // Read data from plants.json
    const plantsData = await readJSONFile(plantsFilePath);

    // Sync the database
    await sequelize.sync({ force: true });


    console.log('');
  } catch (error) {
    console.error(':', error);
  }
};

// Execute the seeding function
seedPlants();

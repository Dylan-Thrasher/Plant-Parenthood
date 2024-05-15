const fs = require('fs');
const path = require('path');    //imports the Node.js path
const plantsFilePath = path.join(__dirname, 'plants.json');   // Path to plants.json

// Function to read JSON file
const readJSONFile = (filePath) => {
  //return new Promise((resolve, reject) => {
    fs.readFile("./plants.json", 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(JSON.parse(data));
        return JSON.parse(data);
      }
    });
  //});
};

const seedPlants = async () => {
  try {
    // Read data from plants.json
    const plantsData = await readJSONFile(plantsFilePath);

    // Sync the database
    const seedPlants = async () => {
      try {
          const plantsData = await readJSONFile(plantsFilePath);
          console.log(plantsData); // This will print the parsed JSON data to the console
          // Add your database seeding logic here
      } catch (err) {
          console.error(err);
      }
};
} catch (err) {
  console.error(err);
}
};

// Execute the seeding function
seedPlants();

const { Sequelize, Op } = require('sequelize');  //Op is Sequelize operators
const { Plant } = require('./models');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

// Function to filter plants
async function filterPlants(cycle, sunlight, watering) {
  try {
    const filterConditions = {};
    if (cycle) {
      filterConditions.cycle = cycle;
    }
    // if (sunlight) {
    //   filterConditions.sunlight = {  };
    // }

    if (watering) {
      filterConditions.watering = watering;
    }
    console.log('Filter Conditions:', filterConditions);
   
    const plants = await Plant.findAll({
        where: {
            watering: watering,
            sunlight: sunlight,
            cycle: cycle,
            // {
            //     [Op.match]: Sequelize.fn('to_tsquery', watering),
            // },
        },
    });

    console.log(JSON.stringify(plants, null, 2));
} catch (error) {
    console.error('Error querying plants:', error);
} finally {
    await sequelize.close();
}
}

filterPlants('Perennial', 'full_sun', 'Average');
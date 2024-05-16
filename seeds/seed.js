const sequelize = require('../config/connection');
const { User, Plant } = require('../models');

const userData = require('./userData.json');
const plantData = require('./plants.json');

// must be run in order to create users and register information from userData.json
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
 // console.log('plantData:', plantData);
  for (const plant of plantData) {
    await Plant.create({
      ...plant,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

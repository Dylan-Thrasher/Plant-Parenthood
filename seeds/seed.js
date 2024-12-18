const sequelize = require('../config/connection');
const { User, Plant, Collection } = require('../models');

const userData = require('./userData.json');
const plantData = require('./data.json');
const collectionData = require('./collection.json')
const { log, info, warn, error } = require('@frenzie24/logger')

// must be run in order to create users and register information from userData.json
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate({ userData }, {
      individualHooks: true,
      returning: true,
    });

  } catch (e) { warn('Caught Error'); error(e); }
  // console.log('plantData:', plantData);
  try {
  } catch (e) { warn('Caught Error'); error(e); } for (const plant of plantData) {
    info(['plant: ', plant])
    await Plant.create({
      ...plant,
      user_id: plant.user_id,
    });
  } try {
  } catch (e) { warn('Caught Error'); error(e); }
 /* console.log('collectionData:', collectionData);
  try {
  } catch (e) { warn('Caught Error'); error(e); } for (const collection of collectionData) {
    await Collection.create({
      ...collection,
    //  user_id: collection.user_id,
    });
  } try {
  } catch (e) { warn('Caught Error'); error(e); }
*/
  process.exit(0);
};

seedDatabase();

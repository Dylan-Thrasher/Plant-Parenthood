const sequelize = require('../config/connection');
const { User, Plant, Collection } = require('../models');

const userData = require('./userData.json');
const plantData = require('./data.json');
const collectionData = require('./collection.json')
const {log, info, warn, error} = require('@frenzie24/logger')

// must be run in order to create users and register information from userData.json
const seedDatabase = async () => {
  await sequelize.sync({ force: true });



  const users = await User.bulkCreate({userData}, {
    individualHooks: true,
    returning: true,
  });
 // console.log('plantData:', plantData);

 const plants = await plantData.map((plant) => {
  info(['plant: ',plant])
     return Plant.create({
      ...plant,
      //user_id: plant.user_id,
    });
 })
 /*
  for (const plant of plantData) {
    info(['plant: ',plant])
    await Plant.create({
      ...plant,
      user_id: plant.user_id,
    });
  }
    */
  console.log('collectionData:', collectionData);
  const collections = await collectionData.map((collection)=>{
    return Collection.create({
      ...collection,
      user_id: collection.user_id,
    });
  });
  /*
  for (const collection of collectionData) {
    await Collection.create({
      ...collection,
      user_id: collection.user_id,
    });
  }*/

    warn('done')

  process.exit(0);
};

seedDatabase();

const router = require('express').Router();
const { Plant, User, Collection } = require('../models');
const withAuth = require('../utils/auth');

const { log } = new (require('../utils/logger'))

router.get('/', async (req, res) => {
  console.log('get root')
  try {
    // Get all plants and JOIN with user data
    const plantData = await Plant.findAll();
    // Serialize data so the template can read it
    const plants = plantData.map((plant) => plant.get({ plain: true }));
    log(plants, 'white', 'bgGreen');
    log(plants.length, 'green', 'bgWhite');
    // Pass serialized data and session flag into template
    res.render('homepage', {
      plants

    });
  } catch (err) {
    res.status(500).json(err);
  }
});
let current_plant;
// navs to plants and gets data from associated id


router.get('/plant', async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.query.id);

    const plant = plantData.get({ plain: true });
    current_plant = plant;
    log(plant)
    res.render('plant', {
      ...plant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.redirect('/profile');
//    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Plant }],
    });

    const user = userData.get({ plain: true });
    const collectionData = await Collection.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{
        model: Plant,
        attributes: ['common_name', 'regular_url']
      }],
    });



    let collections = collectionData.map((collection) => collection.get({ plain: true }));
    // collections.filter
    log(collections, 'white', 'bgGray')
    //collections = collections.filter((collection)=> collection.user_id != req.session.user_id )
    res.render('profile', {
      collections,
      user,
      logged_in: true
    });

    // Collection.findByPk(collectionId, {
    //   include: [{
    //     model: Plant,
    //     attributes: ['common_name', 'regular_url']
    //   }]
    // }).then(collection => {
    //   console.log(collection.Plant.common_name); // Accessing common_name from the associated Plant
    //   console.log(collection.Plant.regular_url); // Accessing regular_url from the associated Plant
    // });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//post method for adding an item to the user's collection
router.post('/add-to-collection', withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const collectionAddition = {
      ...req.body,
      user_id: userId
    };
  const newItem = await Collection.create(collectionAddition);
  res.status(201).json(newItem);
  } catch (err) {
    console.error('Error adding item to collection:', err);
    res.status(500).json({ error: 'Could not add item to collection' });
  }
});

module.exports = router;

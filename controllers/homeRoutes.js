const router = require('express').Router();
const { Plant, User, Collection } = require('../models');
const withAuth = require('../utils/auth');
// the best simple cli debug enhancer I've ever written
const { log, error } = new (require('../utils/logger'))

//Nav to homepage - there is an issue with passing proper login state that needs to be fixed
router.get('/', async (req, res) => {
  console.log('get root')
  try {
    // Get all plants and JOIN with user data
    const plantData = await Plant.findAll();
    // Serialize data so the template can read it
    const plants = plantData.map((plant) => plant.get({ plain: true }));
    // log(plants, 'white', 'bgGreen'); < commented out for better readability in troubleshooting
    // log(plants.length, 'green', 'bgWhite'); < commented out for better readability in troubleshooting
    // Pass serialized data and session flag into template
    res.render('homepage', {
      plants,
      logged_in: req.session.logged_in

    });
  } catch (err) {
    res.status(500).json(err);
  }
});
let currentPlant;
// navs to plants and gets data from associated id


/* Handles client navigating to a specific plant 
  Client URL query for /plant is ?id=NUMBER&edit=BOOL
  id=NUMBER defines which plant id to pull from DB/api, if naving from profile id will refer to collection_id
  edit=BOOL defines whether we should allow this plant to be edited: 
    currently only enabled when naving from profile with specific plant selected
    n
 */
router.get('/plant', async (req, res) => {
  try {

    log(req.query.edit, 'green', 'bgWhite');
    const plantData = await Plant.findByPk(req.query.id);
    const edit = req.query.edit;
    const plant = plantData.get({ plain: true });
    currentPlant = plant;

    res.render('plant', {
      ...plant,
      edit,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    error(err);
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
    // gets collections from DB by user_id
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
  
    log(collections, 'white', 'bgGray')
    // renders profile view to client with user's collections, user data, and logged_in: true 
    res.render('profile', {
      collections,
      user,
      logged_in: true // THIS PROBABLY NEEDS TO BE CHANGED!!!!!!!
    });

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

//post method for adding an item to the user's collection (removed for redundancy)
// router.post('/add-to-collection', withAuth, async (req, res) => {
//   try {
//     const userId = req.session.user_id;
//     const collectionAddition = {
//       ...req.body,
//       user_id: userId
//     };
//     const newItem = await Collection.create(collectionAddition);
//     res.status(201).json(newItem);
//   } catch (err) {
//     console.error('Error adding item to collection:', err);
//     res.status(500).json({ error: 'Could not add item to collection' });
//   }
// });

module.exports = router;

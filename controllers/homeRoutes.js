const router = require('express').Router();
const { Plant, User, Collection } = require('../models');
const withAuth = require('../utils/auth');
// the best simple cli debug enhancer I've ever written
const { log, info, error, warn } = require('../node_modules/@frenzie24/logger')

// fucnction that returns the row of data corresponding to the passed page from the Plant table.
// Does NOT check ownership
// does this return plants that have owners too???
async function getPaginatedPlants(page, pageSize) {
  log(['page: ', page])
  const _page = page < 1 ? 1 : page;
  const offset = (_page - 1) * pageSize;
  const { count, rows } = await Plant.findAndCountAll({
    where: {},
    offset,
    limit: pageSize,
  });

  info(["rows: ", rows]);
  return {
    total: count,
    totalPages: Math.ceil(count / pageSize),
    currentPage: page,
    data: rows,
  };
}

//Nav to homepage - there is an issue with passing proper login state that needs to be fixed
router.get('/?', async (req, res) => {
  console.log('get root')
  log(req.query)
  try {
    // Get all plants and JOIN with user data
    const plantData = await getPaginatedPlants(Number(req.query.page ? req.query.page : 1), 20);
    //const plantData = await Plant.findAll();
    //


    //const plants = plantData.map((plant) => plant.get({ plain: true }));
    // Serialize data so the template can read it
    const plants = plantData.data.map((plant) => plant.get({ plain: true }));
    const pageData = { total: plantData.total, totalPages: plantData.totalPages, currentPage: plantData.currentPage };

    info(['plants: ', plants, 'pageData: ', pageData]);
    // log(plants, 'white', 'bgGreen'); < commented out for better readability in troubleshooting
    // log(plants.length, 'green', 'bgWhite'); < commented out for better readability in troubleshooting
    // Pass serialized data and session flag into template
    res.render('homepage', {
      plants: plants,
      pageData,
      logged_in: req.session.logged_in

    });
  } catch (err) {
    error(err);
    res.status(500).json(err);
  }
});
let currentPlant;
// navs to plants and gets data from associated id

router.get('/collection', async (req, res) => {
  try {

    log(req.query.edit, 'green', 'bgWhite');
    const plantData = await Collection.findByPk(req.query.id);
    // req.query.edit is only ever passed when navigating to a plant from the profile!
    const edit = req.query.edit;
    const plant = plantData.get({ plain: true });

    log(plant, 'white', 'bgBrightGreen');
    res.render('collection', {
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

/* Handles client navigating to a specific plant
  Client URL query for /plant is ?id=NUMBER&edit=BOOL
  id=NUMBER defines which plant id to pull from DB/api, if naving from profile id will refer to collection_id
  edit=BOOL defines whether we should allow this plant to be edited:
    currently only enabled when naving from profile with specific plant selected
    n
 */
router.get('/plant', async (req, res) => {
  try {

    const plantData = await Plant.findByPk(req.query.id);
    // req.query.edit is only ever passed when navigating to a plant from the profile!

    const plant = plantData.get({ plain: true });
    currentPlant = plant;

    res.render('plant', {
      ...plant,

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

router.get('/register', (req, res) => {
  warn('Registration attempt');
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

 return res.render('register');
});


//post method for adding an item to the user's collection
router.post('/add-to-collection', withAuth, async (req, res) => {
  log('adding to collection', 'white', 'bgBlue');
  log(req.body, 'white', 'bgBlue');
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

router.get('/cookies', (req, res) => {
  res.render('cookies')
});

module.exports = router;

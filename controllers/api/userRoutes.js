const router = require('express').Router();
const { User } = require('../../models');
const {log} = new (require ('../../utils/logger'))

//Creating a new user and adding OR updating an existing user to the DB
router.post('/', async (req, res) => {
  // if isUpdate is true in req.body then the server will tell us
  // this may be where the unexpected behavior when updating a user forced a password change occurs? - Charles

  log('Post Body', 'white', 'bgBlue');
  log(req.body, 'blue', 'bgWhite');
  log('addign new user', 'red');
  try {
    const userData = await User.create(req.body);
    log(userData, 'white', 'bgRed');
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// editing the user's data, for some reason passwords were being forced to update.
// PLEASE INVESTIGATE - Charles
router.post('/edit', async (req, res) => {
  console.log('============================');
  console.log('updating user');
  log(req.body, 'red', 'bgWhite');
  try {
    const user = await User.findByPk(req.session.user_id)
    user.name = req.body.newName;
    user.password = req.body.newPass;
    user.save();
    res.status(200).json(user);
    /*
    const userData = await user.update({
     name: req.body.newName
    });
    log(userData, 'white', 'bgRed');
    console.log(userData);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });*/
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

// Handle login POST requests
router.post('/login', async (req, res) => {
  log('attempting log in', 'red');
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);
    if (!userData) {

      log('bad userData', 'red', 'bgWhite');
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      log('bad pass', 'red', 'bgWhite');
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logs the user out
router.post('/logout', (req, res) => {

  log(`logout attempt\nlogged_in: ${req.session.logged_in}`);
  if (req.session.logged_in) {
    log('Attempting to destroy the session');
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
